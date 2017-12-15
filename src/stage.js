var Stage = function(init)
{
  var default_init =
  {
    width:640,
    height:320,
    container:"stage_container"
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  //javascript is terrible
  var dpr = window.devicePixelRatio ||
            1;
  var tmp_canvas = document.createElement('canvas');
  var tmp_context = tmp_canvas.getContext('2d');
  var bspr = tmp_context.webkitBackingStorePixelRatio ||
             tmp_context.mozBackingStorePixelRatio ||
             tmp_context.msBackingStorePixelRatio ||
             tmp_context.oBackingStorePixelRatio ||
             tmp_context.backingStorePixelRatio ||
             1;

  self.canv = new Canv({width:self.width,height:self.height,dpr_to_bspr:dpr/bspr});
  self.canv.context.scale(self.canv.dpr_to_bspr, self.canv.dpr_to_bspr);
  self.canv.scale = self.canv.dpr_to_bspr;

  self.canv.canvas.style.width = self.width+"px";
  self.canv.canvas.style.height = self.height+"px";

  self.draw = function()
  {
  };

  self.clear = function()
  {
    self.canv.clear();
  };

  document.getElementById(self.container).appendChild(self.canv.canvas);
};

