var Placer = function(asset, x,y,w,h, canv)
{
  var self = this;

  self.asset = asset;
  self.stroke = false;
  self.dragging = false;
  self.resizing = false;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;
  self.canv = canv;
  self.offX = 0;
  self.offY = 0;
  self.deltaX = 0;
  self.deltaY = 0;

  self.draw = function(canv)
  {
    canv.context.fillStyle = "#000000";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
    canv.context.fillText(self.text,self.x,self.y+self.h);
    /*
    canv.context.save();
    canv.context.globalAlpha = 0.8;
    canv.context.drawImage(self.asset, self.x,self.y,self.w,self.h);
    if(self.stroke) canv.context.strokeRect(self.x,self.y,self.w,self.h);
    canv.context.restore();
    */
  }

  function len(x,y)
  {
    return math.sqrt((x*x)+(y*y));
  }
  self.dragStart = function(evt)
  {
    self.dragging = false;
    self.resizing = false;

    self.offX = evt.doX-(self.x+(self.w/2));
    self.offY = evt.doY-(self.y+(self.h/2));

    if(self.offX > 0.4*self.w && self.offY > 0.4*self.h)
      self.resizing = true
    else
      self.dragging = true;
  };
  self.drag = function(evt)
  {
    self.deltaX = (evt.doX-(self.x+(self.w/2)))-self.offX;
    self.deltaY = (evt.doY-(self.y+(self.h/2)))-self.offY;

    if(self.dragging)
    {
      self.x += self.deltaX;
      self.y += self.deltaY;
    }
    else if(self.resizing)
    {
      self.w += self.deltaX;
      self.h += self.deltaY;
    }

    self.offX = evt.doX-(self.x+(self.w/2));
    self.offY = evt.doY-(self.y+(self.h/2));

    self._dirty = true;
  };
  self.dragFinish = function()
  {
    self.dragging = false;
    self.resizing = false;
  };

  self.click = function(evt)
  {
    //console.log(self.x+","+self.y+","+self.w+","+self.h);
    console.log("p("+invp(self.x,self.canv.width)+"),p("+invp(self.y,self.canv.height)+"),p("+invp(self.w,self.canv.width)+"),p("+invp(self.h,self.canv.height)+")");

    self.stroke = !self.stroke;
  }
}

