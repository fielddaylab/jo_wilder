var Drawer = function(init)
{
  var default_init =
  {
    source:document.createElement('canvas')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var drawables = [];
  self.register = function(drawable) { drawables.push(drawable); }
  self.unregister = function(drawable) { var i = drawables.indexOf(drawable); if(i != -1) drawables.splice(i,1); }
  self.clear = function() { drawables = []; }
  self.attach = function() {} //will get auto-called on create
  self.detach = function() {}

  self.flush = function()
  {
    for(var i = 0; i < drawables.length; i++)
      drawables[i].draw(self.source);
  }

  self.attach();
}

//example drawable- just needs draw function
var Drawable = function(args)
{
  var self = this;

  //example args
  self.x = args.x ? args.x : 0;
  self.y = args.y ? args.y : 0;
  self.w = args.w ? args.w : 0;
  self.h = args.h ? args.h : 0;

  self.draw = function(source)
  {
    source.context.strokeStyle = "#00FF00";
    source.context.strokeRect(self.x,self.y,self.w,self.h);
  }
}

//helpers
var strokeRect = function(canv, x, y, w, h)
{
  canv.context.strokeRect(x,y,w,h);
}
var strokeCirc = function(canv, x, y, r)
{
  canv.context.beginPath();
  canv.context.arc(x,y,r,0,2*Math.PI);
  canv.context.stroke();
}
var strokeLine = function(canv, x1, y1, x2, y2)
{
  canv.context.beginPath();
  canv.context.moveTo(x1,y1);
  canv.context.lineTo(x2,y2);
  canv.context.stroke();
}

