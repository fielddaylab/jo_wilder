//Literally the inverse of "click"
var Blurer = function(init)
{
  var default_init =
  {
    source:document.createElement('div')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var evts = [];
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
    evts.push(evt);
  }
  self.filter = function(blurable)
  {
    var hit = false;
    var evt;
    for(var i = 0; i < evts.length; i++)
    {
      evt = evts[i];
      if((blurable.shouldBlur && blurable.shouldBlur(evt)) || (!blurable.shouldBlur && !doEvtWithinBB(evt, blurable)))
      {
        blurable.blur(evt);
        hit = true;
      }
    }
    return hit;
  }
  self.flush = function()
  {
    evts = [];
  }

  self.attach();
}

//example blurable- just needs x,y,w,h and blur callback
var blurable = function(args)
{
  var self = this;

  self.x = args.x ? args.x : 0;
  self.y = args.y ? args.y : 0;
  self.w = args.w ? args.w : 0;
  self.h = args.h ? args.h : 0;
  self.shouldBlur = args.shouldBlur ? args.shouldBlur : function(evt) //optional
  {
    return !doEvtWithinBB(evt, self);
  }
  self.blur = args.blur ? args.blur : function(){};

  //nice for debugging purposes
  self.draw = function(canv)
  {
    canv.context.strokeStyle = "#00FF00";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
  }
}

