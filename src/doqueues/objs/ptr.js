var Ptr = function(x,y,w,h)
{
  var self = this;

  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;

  self.hover = function(evt)
  {
    console.log("h"+evt.doX+","+evt.doY);
  };
  self.unhover = function(evt)
  {
    console.log("u"+evt.doX+","+evt.doY);
  };

  self.click = function(evt)
  {
    console.log("c"+evt.doX+","+evt.doY);
  }
}

