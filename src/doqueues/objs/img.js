var Img = function(asset, x,y,w,h)
{
  var self = this;

  self.asset = asset;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;
  self.draw = function(canv)
  {
    canv.context.drawImage(self.asset,self.x,self.y,self.w,self.h);
  }
}

