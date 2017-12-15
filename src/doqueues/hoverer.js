var Hoverer = function(init)
{
  var default_init =
  {
    source:document.createElement('div')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var hoverables = [];
  var hovering = [];
  var nothovering = [];
  var hoverCallbackQueue = [];
  var hoverEvtQueue = [];
  var nothoverCallbackQueue = [];
  var nothoverEvtQueue = [];
  var queues = {};
  queues.hoverCallbackQueue = hoverCallbackQueue;
  queues.hoverEvtQueue = hoverEvtQueue;
  queues.nothoverCallbackQueue = nothoverCallbackQueue;
  queues.nothoverEvtQueue = nothoverEvtQueue;
  self.register = function(hoverable) { hoverables.push(hoverable); nothovering.push(hoverable); }
  self.unregister = function(hoverable) 
  {
    var i =  hoverables.indexOf(hoverable); if(i != -1)  hoverables.splice(i,1);
    var i =    hovering.indexOf(hoverable); if(i != -1)    hovering.splice(i,1);
    var i = nothovering.indexOf(hoverable); if(i != -1) nothovering.splice(i,1);
  }
  self.ignore = function() { hoverCallbackQueue = []; hoverEvtQueue = []; nothoverCallbackQueue = []; nothoverEvtQueue = []; }
  self.clear = function() { hoverables = []; hovering = []; nothovering = []; }
  self.attach = function() //will get auto-called on creation
  {
    if(platform == "PC")
    {
      self.source.addEventListener('mousemove', hover, false);
      window.addEventListener('mousemove', detectOut, false);
    }
    else if(platform == "MOBILE")
      ; //no hover on mobile, dummy
  }
  self.detach = function()
  {
    if(platform == "PC")
    {
      self.source.removeEventListener('mousemove', hover);
      window.removeEventListener('mousemove', detectOut, false);
    }
    else if(platform == "MOBILE")
      ; //no hover on mobile, dummy
  }

  function hover(evt)
  {
    doSetPosOnEvent(evt);
    self.injectHover(evt);
  }
  self.injectHover = function(evt)
  {
    var r = self.source.getBoundingClientRect();
    if(evt.clientX < r.left || evt.clientY < r.top || evt.clientX > r.right || evt.clientY > r.bottom)
    {
      for(var i = 0; i < hovering.length; i++)
      {
        nothoverCallbackQueue.push(hovering[i].unhover);
        nothoverEvtQueue.push(evt);

        nothovering.push(hovering[i]);
        hovering.splice(i--,1);
      }
      return;
    }

    for(var i = 0; i < nothovering.length; i++)
    {
      if(
        evt.doX >= nothovering[i].x &&
        evt.doX <= nothovering[i].x+nothovering[i].w &&
        evt.doY >= nothovering[i].y &&
        evt.doY <= nothovering[i].y+nothovering[i].h
      )
      {
        hoverCallbackQueue.push(nothovering[i].hover);
        hoverEvtQueue.push(evt);

        hovering.push(nothovering[i]);
        nothovering.splice(i--,1);
      }
    }

    for(var i = 0; i < hovering.length; i++)
    {
      if(
        evt.doX < hovering[i].x ||
        evt.doX > hovering[i].x+hovering[i].w ||
        evt.doY < hovering[i].y ||
        evt.doY > hovering[i].y+hovering[i].h
      )
      {
        nothoverCallbackQueue.push(hovering[i].unhover);
        nothoverEvtQueue.push(evt);

        nothovering.push(hovering[i]);
        hovering.splice(i--,1);
      }
    }
  }
  self.flush = function()
  {
    for(var i = 0; i < hoverCallbackQueue.length; i++)
      hoverCallbackQueue[i](hoverEvtQueue[i]);
    hoverCallbackQueue = [];
    hoverEvtQueue = [];

    for(var i = 0; i < nothoverCallbackQueue.length; i++)
      nothoverCallbackQueue[i](nothoverEvtQueue[i]);
    nothoverCallbackQueue = [];
    nothoverEvtQueue = [];
  }
  self.requestManualFlush = function()
  {
    queues.hoverCallbackQueue = hoverCallbackQueue;
    queues.hoverEvtQueue = hoverEvtQueue;
    queues.nothoverCallbackQueue = nothoverCallbackQueue;
    queues.nothoverEvtQueue = nothoverEvtQueue;
    return queues;
  }
  self.manualFlush = function()
  {
    hoverCallbackQueue = [];
    hoverEvtQueue = [];
    nothoverCallbackQueue = [];
    nothoverEvtQueue = [];
  }

  function detectOut(evt)
  {
    var r = self.source.getBoundingClientRect();
    if(evt.clientX < r.left || evt.clientY < r.top || evt.clientX > r.right || evt.clientY > r.bottom)
    {
      for(var i = 0; i < hovering.length; i++)
      {
        nothoverCallbackQueue.push(hovering[i].unhover);
        nothoverEvtQueue.push(evt);

        nothovering.push(hovering[i]);
        hovering.splice(i--,1);
      }
    }
  }

  self.attach();
}

//example hoverable- just needs x,y,w,h, hover and unhover callback
var Hoverable = function(args)
{
  var self = this;

  self.x = args.x ? args.x : 0;
  self.y = args.y ? args.y : 0;
  self.w = args.w ? args.w : 0;
  self.h = args.h ? args.h : 0;
  self.hover = args.hover ? args.hover : function(){};
  self.unhover = args.unhover ? args.unhover : function(){};

  //nice for debugging purposes
  self.draw = function(canv)
  {
    canv.context.strokeStyle = "#00FF00";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
  }
}

