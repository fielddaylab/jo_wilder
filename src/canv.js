//Wrapper for canvas, auto inits BS and adds useful utils
var Canv = function(init)
{
  var default_init =
  {
    width:640,
    height:320,
    dpr_to_bspr:1,
    fillStyle:"#000000",
    strokeStyle:"#000000",
    lineWidth:2,
    font:"12px vg_font",
    smoothing:true
  }

  var self = this;
  doMapInitDefaults(init,init,default_init);

  self.width = init.width;
  self.height = init.height;
  self.dpr_to_bspr = init.dpr_to_bspr;
  self.scale = 1; //must manually update if changed!
  self.canvas = document.createElement('canvas');
  self.canvas.setAttribute('width', self.width*self.dpr_to_bspr);
  self.canvas.setAttribute('height',self.height*self.dpr_to_bspr);
  self.canvas.addEventListener('mousedown',function(evt){ evt.preventDefault(); },false);
  self.canvas.addEventListener('touchstart',function(evt){ evt.preventDefault(); },false);

  self.context = self.canvas.getContext('2d');

  self.context.fillStyle   = init.fillStyle;
  self.context.strokeStyle = init.strokeStyle;
  self.context.lineWidth   = init.lineWidth;
  self.context.font        = init.font;

  self.context.imageSmoothingEnabled = init.smoothing;
};
Canv.prototype.clear = function()
{
  var self = this;
  self.context.clearRect(0, 0, self.canvas.width/self.scale, self.canvas.height/self.scale);
};
Canv.prototype.blitTo = function(canv)
{
  var self = this;
  //drawImage(source, sourcex, sourcey, sourcew, sourceh, destx, desty, destw, desth);
  canv.context.drawImage(self.canvas, 0, 0, self.canvas.width, self.canvas.height, 0, 0, canv.canvas.width/canv.scale, canv.canvas.height/canv.scale);
};

