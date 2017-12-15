var Flicker = function(init)
{
  var default_init =
  {
    source:document.createElement('div')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var flickables = [];
  var flicking = [];
  var callbackQueue = [];
  var evtQueue = [];
  self.register = function(flickable) { flickables.push(flickable); }
  self.unregister = function(flickable) { var i = flickables.indexOf(flickable); if(i != -1) flickables.splice(i,1); }
  self.ignore = function() { flicking = []; callbackQueue = []; evtQueue = []; }
  self.clear = function() { flickables = []; }
  self.attach = function() //will get auto-called on creation
  {
    if(platform == "PC")
    {
      self.source.addEventListener('mousedown', begin, false);
      self.source.addEventListener('mousemove', drag,  false);
      self.source.addEventListener('mouseup',   end,   false);
    }
    else if(platform == "MOBILE")
    {
      self.source.addEventListener('touchstart', begin, false);
      self.source.addEventListener('touchmove',  drag,  false);
      self.source.addEventListener('touchend',   end,   false);
    }
  }
  self.detach = function()
  {
    if(platform == "PC")
    {
      self.source.removeEventListener('mousedown', begin);
      self.source.removeEventListener('mousemove', drag);
      self.source.removeEventListener('mouseup',   end);
    }
    else if(platform == "MOBILE")
    {
      self.source.removeEventListener('touchstart', begin);
      self.source.removeEventListener('touchmove',  drag);
      self.source.removeEventListener('touchend',   end);
    }
  }

  function begin(evt)
  {
    doSetPosOnEvent(evt);
    for(var i = 0; i < flickables.length; i++)
    {
      if(
        evt.doX >= flickables[i].x &&
        evt.doX <= flickables[i].x+flickables[i].w &&
        evt.doY >= flickables[i].y &&
        evt.doY <= flickables[i].y+flickables[i].h
      )
      {
        flicking.push(flickables[i]);
        callbackQueue.push(flickables[i].flickStart);
        evtQueue.push(evt);
      }
    }
  }
  function drag(evt)
  {
    doSetPosOnEvent(evt);
    for(var i = 0; i < flicking.length; i++)
    {
      callbackQueue.push(flicking[i].flicking);
      evtQueue.push(evt);
    }
  }
  function end(evt)
  {
    flicking = []; //clear all currently flicking
  }
  self.flush = function()
  {
    for(var i = 0; i < callbackQueue.length; i++)
      callbackQueue[i](evtQueue[i]);
    callbackQueue = [];
    evtQueue = [];
  }

  self.attach();
}

//example flickable- NOTE- Has a lot of infrastructure. should probably just copy/paste this object
var Flickable = function(args)
{
  var self = this;

  self.flicked = false;

  self.startX = 0;
  self.startY = 0;
  self.vec = {"x":0,"y":0};

  self.x = args.x ? args.x : 0;
  self.y = args.y ? args.y : 0;
  self.w = args.w ? args.w : 0;
  self.h = args.h ? args.h : 0;
  self.r = args.r ? args.r : 0;
  self.flickStart = args.flickStart ? args.flickStart : function(evt){ self.startX = evt.doX; self.startY = evt.doY; self.flicked = false; };
  self.flicking   = args.flicking   ? args.flicking   : function(evt){ if(self.flicked) return; self.vec.x = (evt.doX-self.startX); self.vec.y = (evt.doY-self.startY); if(Math.sqrt((self.vec.x*self.vec.x)+(self.vec.y*self.vec.y)) >= self.r) { self.flick(self.vec); self.flicked = true; }};
  self.flick      = args.flick      ? args.flick      : function(vec){};

  //nice for debugging purposes
  self.draw = function(canv)
  {
    canv.context.strokeStyle = "#00FF00";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
  }
}

