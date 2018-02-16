var placer = function(asset, x,y,w,h, canv)
{
  var self = this;

  self.asset = asset;
  self.stroke = false;
  self.cur_dragging = false;
  self.cur_resizing = false;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;
  self.canv = canv;
  self.offX = 0;
  self.offY = 0;
  self.deltaX = 0;
  self.deltaY = 0;

  self.draw = function(ctx)
  {
    ctx.fillStyle = "#000000";
    ctx.strokeRect(self.x,self.y,self.w,self.h);
    ctx.fillText("DEBUG_PLACER",self.x,self.y+self.h);
    //ctx.fillText(self.text,self.x,self.y+self.h);
    /*
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.drawImage(self.asset, self.x,self.y,self.w,self.h);
    if(self.stroke) ctx.strokeRect(self.x,self.y,self.w,self.h);
    ctx.restore();
    */
  }

  function len(x,y)
  {
    return math.sqrt((x*x)+(y*y));
  }
  self.dragStart = function(evt)
  {
    self.cur_dragging = false;
    self.cur_resizing = false;

    self.offX = evt.doX-(self.x+(self.w/2));
    self.offY = evt.doY-(self.y+(self.h/2));

    if(self.offX > 0.4*self.w && self.offY > 0.4*self.h)
      self.cur_resizing = true
    else
      self.cur_dragging = true;
  };
  self.drag = function(evt)
  {
    self.deltaX = (evt.doX-(self.x+(self.w/2)))-self.offX;
    self.deltaY = (evt.doY-(self.y+(self.h/2)))-self.offY;

    if(self.cur_dragging)
    {
      self.x += self.deltaX;
      self.y += self.deltaY;
    }
    else if(self.cur_resizing)
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
    self.cur_dragging = false;
    self.cur_resizing = false;
  };

  self.click = function(evt)
  {
    console.log("XXX.w="+self.w+";\nXXX.h="+self.h+";\nXXX.x="+self.x+";\nXXX.y="+self.y+";");
    //console.log("p("+invp(self.x,self.canv.width)+"),p("+invp(self.y,self.canv.height)+"),p("+invp(self.w,self.canv.width)+"),p("+invp(self.h,self.canv.height)+")");

    self.stroke = !self.stroke;
  }
}

