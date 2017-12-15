var Dom = function()
{
  var self = this;

  var m;
  var c;

  var mclicked = function(evt)
  {
    m.removeEventListener('click',mclicked);
    document.body.removeChild(m);
    m = undefined;
    if(c) c();
    c = undefined;
  }

  self.popDismissableMessageOnEl = function(text,x,y,w,h,el,callback)
  {
    //javascript tho
    var box = el.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    x = x+left;
    y = y+top;
    self.popDismissableMessage(text,x,y,w,h,callback);
  }
  self.popDismissableMessage = function(text,x,y,w,h,callback)
  {
    if(m) mclicked();
    c = callback;
    m = document.createElement('div');
    m.innerHTML = text;
    m.style.position = 'absolute';
    m.style.top = y+'px';
    m.style.left = x+'px';
    m.style.width = w+'px';
    m.style.height = h+'px';

    m.style.backgroundColor = 'red';

    m.addEventListener('click',mclicked);
    document.body.appendChild(m);
  }
}

var CanvDom = function(canv)
{
  var self = this;

  var m;
  var c;

  self.dismissing = false;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  var mclicked = function(evt)
  {
    self.dismissing = true;
    m = undefined;
    if(c) c();
    if(self.dismissing) //if still dismissing (callback didn't pop another...)
    {
      c = undefined;

      self.x = 0;
      self.y = 0;
      self.w = 0;
      self.h = 0;
    }
    self.dismissing = false;
  }

  self.popDismissableMessage = function(text,x,y,w,h,callback)
  {
    self.dismissing = false;
    if(m) mclicked();
    m = text;
    c = callback;

    //take on dimensions of message
    self.x = x;
    self.y = y;
    self.w = w;
    self.h = h;
  }

  self.click = mclicked;
  self.draw = function(text_h,canv)
  {
    canv.context.fillStyle = "#000000";
    canv.context.textAlign = "left";
    if(!Array.isArray(m)) m = [m]; //boy I'm lazy...
    for(var i = 0; i < m.length; i++)
    {
      if(m[i]) canv.context.fillText(m[i],self.x,self.y+(text_h+2)*(i+1));
    }
  }
}

var BottomMessageWrangler = function()
{
  var self = this;

  var bclicked = function()
  {
    cur_line++;
    if(lines && lines.length > cur_line)
      text_el.innerHTML  = lines[cur_line];
    else
    {
      if(c) c();
      c = undefined;
      visa = -0.01;
    }
  }

  var fade = document.getElementById("fade");
  var el = document.getElementById("bottom_display");
  var text_el = document.getElementById("bottom_text");
  var button_el = document.getElementById("bottom_button")
  button_el.addEventListener('click',bclicked);

  var vis = 0;
  var visa = 0;
  var visd = 0;

  var c;
  var lines;
  var cur_line = 0;

  var height = 200;
  self.tick = function()
  {
    visd += visa;
    vis += visd;
    if(vis > 1)
    {
      if(visa > 0) visa = 0;
      vis = 1;
      visd = 0;
    }
    else if(vis < 0)
    {
      if(visa < 0) visa = 0;
      vis = 0;
      visd = 0;
    }
    el.style.bottom = ((vis-1)*height)+"px";
    fade.style.backgroundColor = "rgba(255,255,255,"+(vis/2)+")";
    if(vis) fade.style.display = "block";
    else    fade.style.display = "none";
  }

  self.popMessage = function(newlines,callback)
  {
    c = callback;
    lines = newlines;
    cur_line = 0;
    text_el.innerHTML = lines[cur_line];
    visa = 0.01;
  }

  self.dismiss = function()
  {
    if(c) c();
    c = undefined;
    visa = -0.01;
  }
  self.immediateDismiss = function()
  {
    if(c) c();
    c = undefined;
    visa = 0;
    visd = 0;
    vis = 0;
  }
}

