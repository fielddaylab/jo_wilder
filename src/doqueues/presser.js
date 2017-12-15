var Presser = function(init)
{
  var default_init =
  {
    source:document.createElement('div')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var pressables = [];
  var pressing = [];
  var callbackQueue = [];
  var evtQueue = [];
  var queues = {};
  queues.callbackQueue = callbackQueue;
  queues.evtQueue = evtQueue;
  var down = false;
  self.register = function(pressable) { pressables.push(pressable); }
  self.unregister = function(pressable) { var i = pressables.indexOf(pressable); if(i != -1) pressables.splice(i,1); }
  self.ignore = function() { callbackQueue = []; evtQueue = []; }
  self.clear = function() { pressables = []; }
  self.attach = function() //will auto-call on creation
  {
    if(platform == "PC")
    {
      self.source.addEventListener('mousedown', begin, false);
      self.source.addEventListener('mousemove', press, false);
      self.source.addEventListener('mouseup',   end,   false);
    }
    else if(platform == "MOBILE")
    {
      self.source.addEventListener('touchstart', begin, false);
      self.source.addEventListener('touchmove',  press, false);
      self.source.addEventListener('touchend',   end,   false);
    }
  }
  self.detach = function()
  {
    if(platform == "PC")
    {
      self.source.removeEventListener('mousedown', begin);
      self.source.removeEventListener('mousemove', press);
      self.source.removeEventListener('mouseup',   end);
    }
    else if(platform == "MOBILE")
    {
      self.source.removeEventListener('touchstart', begin);
      self.source.removeEventListener('touchmove',  press);
      self.source.removeEventListener('touchend',   end);
    }
  }


  function begin(evt)
  {
    down = true;
    doSetPosOnEvent(evt);
    self.injectPress(evt);
  }
  function press(evt)
  {
    if(!down) return;
    doSetPosOnEvent(evt);
    self.injectPress(evt);
  }
  self.injectPress = function(evt)
  {
    var alreadypressing;
    for(var i = 0; i < pressables.length; i++)
    {
      if(
        evt.doX >= pressables[i].x &&
        evt.doX <= pressables[i].x+pressables[i].w &&
        evt.doY >= pressables[i].y &&
        evt.doY <= pressables[i].y+pressables[i].h
      )
      {
        alreadypressing = false;
        for(var j = 0; j < pressing.length; j++)
          if(pressables[i] == pressing[j]) alreadypressing = true;
        if(!alreadypressing)
        {
          pressing.push(pressables[i]);
          callbackQueue.push(pressables[i].press);
          evtQueue.push(evt);
        }
      }
    }

    for(var i = 0; i < pressing.length; i++)
    {
      if(
        evt.doX < pressing[i].x ||
        evt.doX > pressing[i].x+pressing[i].w ||
        evt.doY < pressing[i].y ||
        evt.doY > pressing[i].y+pressing[i].h
      )
      {
        callbackQueue.push(pressing[i].unpress);
        evtQueue.push(evt);
        pressing.splice(i,1);
        i--;
      }
    }
  }
  function end(evt)
  {
    self.injectUnpress(evt);
  }
  self.injectUnpress = function(evt)
  {
    down = false;
    for(var i = 0; i < pressing.length; i++)
    {
      callbackQueue.push(pressing[i].unpress);
      evtQueue.push(evt);
    }
    pressing = [];
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

//example pressable- just needs x,y,w,h and press callback
var Pressable = function(args)
{
  var self = this;

  self.x = args.x ? args.x : 0;
  self.y = args.y ? args.y : 0;
  self.w = args.w ? args.w : 0;
  self.h = args.h ? args.h : 0;
  self.press   = args.press   ? args.press   : function(evt){ };
  self.unpress = args.unpress ? args.unpress : function(evt){ };

  //nice for debugging purposes
  self.draw = function(canv)
  {
    canv.context.strokeStyle = "#00FF00";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
  }
}

