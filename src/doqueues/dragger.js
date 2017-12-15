var Dragger = function(init)
{
  var default_init =
  {
    source:document.createElement('div')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var draggables = [];
  var dragging = [];
  var callbackQueue = [];
  var evtQueue = [];
  var queues = {};
  queues.callbackQueue = callbackQueue;
  queues.evtQueue = evtQueue;
  self.register = function(draggable) { draggables.push(draggable); }
  self.unregister = function(draggable) { var i = draggables.indexOf(draggable); if(i != -1) draggables.splice(i,1); }
  self.ignore = function() { dragging = []; callbackQueue = []; evtQueue = []; }
  self.clear = function() { draggables = []; }
  self.attach = function() //will get auto-called on create
  {
    if(platform == "PC")
    {
      self.source.addEventListener('mousedown', begin, false);
      self.source.addEventListener('mousemove', drag,  false);
      self.source.addEventListener('mouseup',   end,   false);
      window.addEventListener('mousemove', detectOut, false);
    }
    else if(platform == "MOBILE")
    {
      self.source.addEventListener('touchstart', begin, false);
      self.source.addEventListener('touchmove',  drag,  false);
      self.source.addEventListener('touchend',   end,   false);
      window.addEventListener('touchmove', detectOut, false);
    }
  }
  self.detach = function()
  {
    if(platform == "PC")
    {
      self.source.removeEventListener('mousedown', begin);
      self.source.removeEventListener('mousemove', drag);
      self.source.removeEventListener('mouseup',   end);
      window.removeEventListener('mousemove', detectOut, false);
    }
    else if(platform == "MOBILE")
    {
      self.source.removeEventListener('touchstart', begin);
      self.source.removeEventListener('touchmove',  drag);
      self.source.removeEventListener('touchend',   end);
      window.removeEventListener('touchmove', detectOut, false);
    }
  }

  function begin(evt)
  {
    doSetPosOnEvent(evt);
    self.injectDragStart(evt);
  }
  self.injectDragStart = function(evt)
  {
    for(var i = 0; i < draggables.length; i++)
    {
      if(ptWithinObj(draggables[i], evt.doX, evt.doY))
      {
        var already_dragging = false;
        for(var j = 0; j < dragging.length; j++)
          if(draggables[i] == dragging[j]) already_dragging = true;

        if(!already_dragging)
        {
          dragging.push(draggables[i]);
          callbackQueue.push(draggables[i].dragStart);
          evtQueue.push(evt);
        }
      }
    }
  }
  function drag(evt)
  {
    doSetPosOnEvent(evt);
    self.injectDrag(evt);
  }
  self.injectDrag = function(evt)
  {
    var r = self.source.getBoundingClientRect();
    if(evt.clientX < r.left || evt.clientY < r.top || evt.clientX > r.right || evt.clientY > r.bottom)
    {
      end(evt);
      return;
    }

    for(var i = 0; i < dragging.length; i++)
    {
      callbackQueue.push(dragging[i].drag);
      evtQueue.push(evt);
    }
  }
  function end(evt)
  {
    doSetPosOnEvent(evt);
    self.injectDragFinish(evt);
  }
  self.injectDragFinish = function(evt)
  {
    for(var i = 0; i < dragging.length; i++)
    {
      callbackQueue.push(dragging[i].dragFinish);
      evtQueue.push(evt);
    }
    dragging = [];
  }
  self.flush = function()
  {
    for(var i = 0; i < callbackQueue.length; i++)
      callbackQueue[i](evtQueue[i]);
    callbackQueue = [];
    evtQueue = [];
  }
  self.requestManualFlush = function()
  {
    queues.callbackQueue = callbackQueue;
    queues.evtQueue = evtQueue;
    return queues;
  }
  self.manualFlush = function()
  {
    callbackQueue = [];
    evtQueue = [];
  }

  function detectOut(evt)
  {
    var r = self.source.getBoundingClientRect();
    if(evt.clientX < r.left || evt.clientY < r.top || evt.clientX > r.right || evt.clientY > r.bottom)
      end(evt);
  }

  self.attach();
}

//example draggable- just needs x,y,w,h and dragStart, drag, and dragFinish callback
var Draggable = function(args)
{
  var self = this;

  //nice in smooth dragging
  self.offX = 0;
  self.offY = 0;

  self.x = args.x ? args.x : 0;
  self.y = args.y ? args.y : 0;
  self.w = args.w ? args.w : 0;
  self.h = args.h ? args.h : 0;

  self.dragStart = args.dragStart ? args.dragStart : function(evt)
  {
    self.offX = evt.doX-self.x;
    self.offY = evt.doY-self.y;
  }
  self.drag = args.drag ? args.drag : function(evt)
  {
    self.deltaX = ((evt.doX-self.x)-self.offX);
    self.deltaY = ((evt.doY-self.y)-self.offY);
    self.x = self.x + self.deltaX;
    self.y = self.y + self.deltaY;
    self.offX = evt.doX - self.x;
    self.offY = evt.doY - self.y;
  }
  self.dragFinish = args.dragFinish ? args.dragFinish : function()
  {
  }

  //nice for debugging purposes
  self.draw = function(canv)
  {
    canv.context.strokeStyle = "#00FF00";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
  }
}

