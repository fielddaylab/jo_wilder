var Clicker = function(init)
{
  var default_init =
  {
    source:document.createElement('div')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var clickables = [];
  var callbackQueue = [];
  var evtQueue = [];
  var queues = {};
  queues.callbackQueue = callbackQueue;
  queues.evtQueue = evtQueue;
  self.register = function(clickable) { clickables.push(clickable); }
  self.unregister = function(clickable) { var i = clickables.indexOf(clickable); if(i != -1) clickables.splice(i,1); }
  self.ignore = function() { callbackQueue = []; evtQueue = []; }
  self.clear = function() { clickables = []; }
  self.attach = function() //will get auto-called at creation
  {
    if(platform == "PC")          self.source.addEventListener('mousedown', click, false);
    else if(platform == "MOBILE") self.source.addEventListener('touchstart', click, false);
  }
  self.detach = function()
  {
    if(platform == "PC")          self.source.removeEventListener('mousedown', click);
    else if(platform == "MOBILE") self.source.removeEventListener('touchstart', click);
  }

  function click(evt)
  {
    doSetPosOnEvent(evt);
    self.injectClick(evt);
  }
  self.injectClick = function(evt)
  {
    for(var i = 0; i < clickables.length; i++)
    {
      if(clicked(clickables[i], evt))
      {
        callbackQueue.push(clickables[i].click);
        evtQueue.push(evt);
      }
    }
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

  self.attach();
}

var clicked = function(clickable, evt)
{
  return ptWithinObj(clickable, evt.doX, evt.doY);
}

//example clickable- just needs x,y,w,h and click callback
var Clickable = function(args)
{
  var self = this;

  self.x = args.x ? args.x : 0;
  self.y = args.y ? args.y : 0;
  self.w = args.w ? args.w : 0;
  self.h = args.h ? args.h : 0;
  self.click = args.click ? args.click : function(){};

  //nice for debugging purposes
  self.draw = function(canv)
  {
    canv.context.strokeStyle = "#00FF00";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
  }
}

