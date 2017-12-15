var Blurer = function(init)
{
  var default_init =
  {
    source:document.createElement('div')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var blurables = [];
  var callbackQueue = [];
  var evtQueue = [];
  self.register = function(blurable) { blurables.push(blurable); }
  self.unregister = function(blurable) { var i = blurables.indexOf(blurable); if(i != -1) blurables.splice(i,1); }
  self.ignore = function() { callbackQueue = []; evtQueue = []; }
  self.clear = function() { blurables = []; }
  self.attach = function() //will get auto-called at creation
  {
    if(platform == "PC")          self.source.addEventListener('mousedown', blur, false);
    else if(platform == "MOBILE") self.source.addEventListener('touchstart', blur, false);
  }
  self.detach = function()
  {
    if(platform == "PC")          self.source.removeEventListener('mousedown', blur);
    else if(platform == "MOBILE") self.source.removeEventListener('touchstart', blur);
  }

  function blur(evt)
  {
    doSetPosOnEvent(evt);
    for(var i = 0; i < blurables.length; i++)
    {
      if(blured(blurables[i], evt))
      {
        callbackQueue.push(blurables[i].blur);
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

  self.attach();
}

var blured = function(blurable, evt)
{
  return !ptWithinObj(blurable, evt.doX, evt.doY);
}

//example blurable- just needs x,y,w,h and blur callback
var blurable = function(args)
{
  var self = this;

  self.x = args.x ? args.x : 0;
  self.y = args.y ? args.y : 0;
  self.w = args.w ? args.w : 0;
  self.h = args.h ? args.h : 0;
  self.blur = args.blur ? args.blur : function(){};

  //nice for debugging purposes
  self.draw = function(canv)
  {
    canv.context.strokeStyle = "#00FF00";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
  }
}

