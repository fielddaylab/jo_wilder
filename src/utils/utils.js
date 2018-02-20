/*
*
* DISCLAIMER: Javascript is terrible, and these utils are NOT intended for use in the general case
* for JS and all of its terribleness. These functions operate only on the most naively constructed of
* objects. If you're trying to do something fancy and these don't work for you, please take the
* rest of the day off to question your life choices. I wish you the best of luck.
*
*/
function jsonFromURL()
{
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part){ var item = part.split("="); result[item[0]] = decodeURIComponent(item[1]); });
  return result;
}

//colors
var black   = "#000000";
var white   = "#FFFFFF";
var red     = "#FF0000";
var green   = "#00FF00";
var blue    = "#0000FF";
var cyan    = "#00FFFF";
var magenta = "#FF00FF";
var yellow  = "#FFFF00";

var purple  = "#7856CB";
var orange  = "#EE682C";

//math (raw)
function mapVal(from_min, from_max, to_min, to_max, v) { return ((v-from_min)/(from_max-from_min))*(to_max-to_min)+to_min; }
function clamp(a,b,v) { if(v < a) return a; if(v > b) return b; return v; }
function eq(a,b,e) { return (a < b+e && a > b-e); }
function lerp(s,e,t) { return s+((e-s)*t); }
function invlerp(s,e,v) { return (v-s)/(e-s); }
function clerp(s,e,t)
{
  while(s < 0) s += Math.PI*2;
  while(e < 0) e += Math.PI*2;

       if(e > s && e-s > s-(e-Math.PI*2)) e -= Math.PI*2;
  else if(s > e && s-e > (e+Math.PI*2)-s) e += Math.PI*2;

  return lerp(s,e,t)%(Math.PI*2);
}
function cdist(a,b)
{
  while(a < 0) a += Math.PI*2;
  while(b < 0) b += Math.PI*2;
  var dist = Math.abs(a-b);
  if(dist > Math.PI) dist = Math.PI*2-dist;

  return dist;
}
function distsqr(ax,ay,bx,by)
{
  var x = bx-ax;
  var y = by-ay;
  return x*x+y*y;
}
function dist(ax,ay,bx,by)
{
  var x = bx-ax;
  var y = by-ay;
  return Math.sqrt(x*x+y*y);
}
function randIntBelow(n) { return Math.floor(Math.random()*n); }
function randBool() { return randIntBelow(2); }
function rand0() { return (Math.random()*2)-1; }
var randR = function(s,e) { return lerp(s,e,Math.random()); }
//because the Math namespace is probably unnecessary for our purposes
var rand = Math.random;
var round = Math.round;
var floor = Math.floor;
var ceil = Math.ceil;
var abs = Math.abs;
var min = Math.min;
var max = Math.max;
var pow = Math.pow;
var sqrt = Math.sqrt;
var sin = Math.sin;
var asin = Math.asin;
var psin = function(t) { return (Math.sin(t)+1)/2; }
var cos = Math.cos;
var acos = Math.acos;
var pcos = function(t) { return (Math.cos(t)+1)/2; }
var tan = Math.tan;
var atan = Math.atan;
var atan2 = Math.atan2;
var pi = Math.PI;
var twopi = 2*pi;
var halfpi = pi/2;
var quarterpi = pi/4;
var twelvepi = 12*pi;

var fdisp = function(f,n) //formats float for display (from 8.124512 to 8.12)
{
  if(n == undefined) n = 2;
  n = Math.pow(10,n);
  return Math.round(f*n)/n;
}

function mapPt(from,to,pt)
{
  pt.x = ((pt.x-from.x)/from.w)*to.w+to.x;
  pt.y = ((pt.y-from.y)/from.h)*to.h+to.y;
  return pt;
}
function mapRect(from,to,rect)
{
  rect.x = ((rect.x-from.x)/from.w)*to.w+to.x;
  rect.y = ((rect.y-from.y)/from.h)*to.h+to.y;
  rect.w = (rect.w/from.w)*to.w;
  rect.h = (rect.h/from.h)*to.h;
  return rect;
}

//collide (raw)
var ptWithin = function(x,y,w,h,ptx,pty) { return (ptx >= x && ptx <= x+w && pty >= y && pty <= y+h); }
var ptNear = function(x,y,r,ptx,pty) { var dx = ptx-x; var dy = pty-y; return (dx*dx+dy*dy) < r*r; }
var rectCollide = function(ax,ay,aw,ah,bx,by,bw,bh) { return ax < bx+bw && bx < ax+aw && ay < by+bh && by < ay+ah; }

var ptWithinBox = function(box,ptx,pty)
{
  return (ptx >= box.x && ptx <= box.x+box.w && pty >= box.y && pty <= box.y+box.h);
}
var boxWithinBox = function(boxa, boxb)
{
  console.log("not done!");
  return false;
}
var worldPtWithin = function(wx, wy, ww, wh, ptx, pty)
{
  return (ptx >= wx-(ww/2) && ptx <= wx+(ww/2) && pty >= wy-(wh/2) && pty <= wy+(wh/2));
}
var worldPtWithinBox = function(box, ptx, pty)
{
  return (ptx >= box.wx-(box.ww/2) && ptx <= box.wx+(box.ww/2) && pty >= box.wy-(box.wh/2) && pty <= box.wy+(box.wh/2));
}

//conversions
var decToHex = function(dec, dig)
{
  var r = "";
  dig--;
  var mod = Math.pow(16,dig);

  var index = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  for(; dig >= 0; dig--)
  {
    var v = Math.floor(dec/mod);
    r += index[v];
    dec -= Math.pow(16,dig)*v;
    mod /= 16;
  }

  return r;
}

var RGB2HSL = function(rgb, hsl)
{
  var cmax = Math.max(rgb.r,rgb.g,rgb.b);
  var cmin = Math.min(rgb.r,rgb.g,rgb.b);
  var d = cmax-cmin;
  hsl.l = (cmax+cmin)/2;
  if(hsl.l < 0.5) hsl.s = (cmax-cmin)/(cmax+cmin);
  else            hsl.s = (cmax-cmin)/(2-cmax-cmin);

  if(cmax == rgb.r) hsl.h = (rgb.g-rgb.b)/(cmax-cmin);
  if(cmax == rgb.g) hsl.h = 2 + (rgb.b-rgb.r)/(cmax-cmin);
  if(cmax == rgb.b) hsl.h = 4 + (rgb.r-rgb.g)/(cmax-cmin);

  hsl.h *= 60;

  if(hsl.h < 0) hsl.h += 360;
}

var HSL2RGBHelperConvertTMPValToFinal = function(tmp_1, tmp_2, val)
{
  if(val*6 < 1) return tmp_2 + (tmp_1-tmp_2)*6*val;
  else if(val*2 < 1) return tmp_1;
  else if(val*3 < 2) return tmp_2 + (tmp_1-tmp_2)*(0.666-val)*6;
  else return tmp_2;
}
var HSL2RGB = function(hsl, rgb)
{
  var tmp_1;
  var tmp_2;
  var tmp_3;

  if(hsl.l < 0.5) tmp_1 = hsl.l * (1+hsl.s);
  else            tmp_1 = hsl.l + hsl.s - (hsl.l*hsl.s);

  tmp_2 = (2*hsl.l)-tmp_1;
  tmp_3 = hsl.h/360;

  rgb.r = tmp_3 + 0.333; while(rgb.r > 1) rgb.r -= 1; while(rgb.r < 0) rgb.r += 1;
  rgb.g = tmp_3;         while(rgb.g > 1) rgb.g -= 1; while(rgb.g < 0) rgb.g += 1;
  rgb.b = tmp_3 - 0.333; while(rgb.b > 1) rgb.b -= 1; while(rgb.b < 0) rgb.b += 1;

  rgb.r = HSL2RGBHelperConvertTMPValToFinal(tmp_1, tmp_2, rgb.r);
  rgb.g = HSL2RGBHelperConvertTMPValToFinal(tmp_1, tmp_2, rgb.g);
  rgb.b = HSL2RGBHelperConvertTMPValToFinal(tmp_1, tmp_2, rgb.b);
}

var RGB2Hex = function(rgb)
{
  return "#"+dec2Hex(Math.floor(rgb.r*255))+dec2Hex(Math.floor(rgb.g*255))+dec2Hex(Math.floor(rgb.b*255));
}
var dec2Hex = function(n)
{
  return n.toString(16);
}

var cartToPolar = function(cart,polar)
{
  polar.len = Math.sqrt((cart.x*cart.x)+(cart.y*cart.y));
  polar.dir = Math.atan2(cart.y,cart.x);
}
var polarToCart = function(polar,cart)
{
  cart.x = Math.cos(polar.dir)*polar.len;
  cart.y = Math.sin(polar.dir)*polar.len;
}

//short name- will be used often to place elements by percent, while guaranteeing integer results
var p    = function(percent, of) { return Math.floor(percent * of); }
var invp = function(      n, of) { return n/of; }
var setBox = function(box, x,y,w,h)
{
  box.x = x;
  box.y = y;
  box.w = w;
  box.h = h;
}

//camera
var screenSpaceX = function(cam, canv, x) { return (((( x)-cam.wx)+(cam.ww/2))/cam.ww)*canv.width;  }
var screenSpaceY = function(cam, canv, y) { return ((((-y)+cam.wy)+(cam.wh/2))/cam.wh)*canv.height; }
var screenSpace  = function(cam, canv, box)
{
  //assumng xywh counterparts in world space (wx,wy,ww,wh,etc...)
  //where wx,wy is *center* of box and cam
  //so cam.wx = 0; cam.ww = 1; would be a cam centered at the origin with visible range from -0.5 to 0.5
  //output xywh assume x,y is top left (ready to be 'blit' via canvas api)
  box.w = (box.ww/cam.ww)*canv.width;
  box.h = (box.wh/cam.wh)*canv.height;
  box.x = (((( box.wx-box.ww/2)-cam.wx)+(cam.ww/2))/cam.ww)*canv.width;
  box.y = ((((-box.wy-box.wh/2)+cam.wy)+(cam.wh/2))/cam.wh)*canv.height;
}
var worldSpaceX = function(cam, canv, x) { return ((x/canv.width) -0.5)* cam.ww + cam.wx; }
var worldSpaceY = function(cam, canv, y) { return ((y/canv.height)-0.5)*-cam.wh + cam.wy; }
var worldSpaceW = function(cam, canv, w) { return (w/canv.width)*cam.ww; }
var worldSpaceH = function(cam, canv, h) { return (h/canv.height)*cam.wh; }
var worldSpaceCoords = function(cam, canv, box) //opposite of screenspace, doesn't alter w/h (to preserve fp precision)
{
  box.wx = (((box.x/canv.width) -0.5)* cam.ww + cam.wx)+box.ww/2;
  box.wy = (((box.y/canv.height)-0.5)*-cam.wh + cam.wy)-box.wh/2;
}
var worldSpace = function(cam, canv, box) //opposite of screenspace
{
  box.wx = (((box.x/canv.width) -0.5)* cam.ww + cam.wx)+box.ww/2;
  box.wy = (((box.y/canv.height)-0.5)*-cam.wh + cam.wy)-box.wh/2;
  box.ww = (box.w/canv.width)*cam.ww;
  box.wh = (box.h/canv.height)*cam.wh;
}

function lensqr(x,y)
{
  return x*x+y*y;
}
function len(x,y)
{
  return Math.sqrt(x*x+y*y);
}

function vlensqr(v)
{
  return v.x*v.x+v.y*v.y;
}
function vlen(v)
{
  return Math.sqrt(v.x*v.x+v.y*v.y);
}
function vnorm(v)
{
  var lensqr = vlensqr(v);
  var len;
  if(lensqr > 0.00001)
  {
    len = sqrt(lensqr);
    v.x /= len;
    v.y /= len;
  }
}
function vmul(d,v)
{
  v.x *= d;
  v.y *= d;
}
function vdiv(d,v)
{
  v.x /= d;
  v.y /= d;
}
function tldistsqr(a,b)
{
  var x = b.x-a.x;
  var y = b.y-a.y;
  return x*x+y*y;
}
function tldist(a,b)
{
  var x = b.x-a.x;
  var y = b.y-a.y;
  return Math.sqrt(x*x+y*y);
}
function odistsqr(a,b)
{
  var x = (b.x+b.w/2)-(a.x+a.w/2);
  var y = (b.y+b.h/2)-(a.y+a.h/2);
  return x*x+y*y;
}
function odist(a,b)
{
  var x = (b.x+b.w/2)-(a.x+a.w/2);
  var y = (b.y+b.h/2)-(a.y+a.h/2);
  return Math.sqrt(x*x+y*y);
}
function wdistsqr(a,b)
{
  var x = b.wx-a.wx;
  var y = b.wy-a.wy;
  return x*x+y*y;
}
function wdist(a,b)
{
  var x = b.wx-a.wx;
  var y = b.wy-a.wy;
  return Math.sqrt(x*x+y*y);
}

var GenIcon = function(w,h)
{
  var icon = document.createElement('canvas');
  icon.width = w || 10;
  icon.height = h || 10;
  icon.context = icon.getContext('2d');
  icon.context.fillStyle = "#000000";
  icon.context.strokeStyle = "#000000";
  icon.context.textAlign = "center";

  return icon;
}

var GenImg = function(src)
{
  var img = new Image();
  img.src = src;
  return img;
}

var GenAud = function(src)
{
  var aud = new Audio();
  aud.src = src;
  return aud;
}

var SeededRand = function(s)
{
  var self = this;
  self.seed = s;
  self.next = function()
  {
  var x = Math.sin(self.seed++) * 10000;
  return x - Math.floor(x);
  }
}

function noop(){}
function ffunc(){return false;}
function tfunc(){return true;}

function drawArrow(sx,sy,ex,ey,w,ctx)
{
  var dx = ex-sx;
  var dy = ey-sy;
  var dd = Math.sqrt(dx*dx+dy*dy);
  var ox = -dy;
  var oy = dx;
  var od = Math.sqrt(ox*ox+oy*oy);
  var ox = (ox/od)*w;
  var oy = (oy/od)*w;
  ctx.beginPath();
  ctx.moveTo(sx,sy);
  ctx.lineTo(ex,ey);
  ctx.moveTo(sx+(dx/dd*(dd-w))+ox,sy+(dy/dd*(dd-w))+oy);
  ctx.lineTo(ex,ey);
  ctx.lineTo(sx+(dx/dd*(dd-w))-ox,sy+(dy/dd*(dd-w))-oy);
  ctx.stroke();
}

function drawAroundDecimal(x,y,val,prepend,append,ctx)
{
  var macro = floor(val);
  var vstring = val+"";
  var micro = vstring.substring(vstring.indexOf(".")+1);
  ctx.textAlign = "right";
  ctx.fillText(prepend+macro+".",x,y);
  ctx.textAlign = "left";
  ctx.fillText(micro+append,x,y);
}

var space = function(minv,maxv,obv,nobs,obi)
{
  var w = maxv-minv;
  var pad = (w-(nobs*obv))/(nobs+1);
  return minv+pad+(obv+pad)*obi;
}

var textToLines = function(font, width, text, ctx)
{
  var lines = [];
  var found = 0;
  var searched = 0;
  var tentative_search = 0;

  ctx.save();
  ctx.font = font;

  while(found < text.length)
  {
    searched = text.indexOf(" ",found);
    if(searched == -1) searched = text.length;
    tentative_search = text.indexOf(" ",searched+1);
    if(tentative_search == -1) tentative_search = text.length;
    while(ctx.measureText(text.substring(found,tentative_search)).width < width && searched != text.length)
    {
      searched = tentative_search;
      tentative_search = text.indexOf(" ",searched+1);
      if(tentative_search == -1) tentative_search = text.length;
    }
    if(text.substring(searched, searched+1) == " ") searched++;
    lines.push(text.substring(found,searched));
    found = searched;
  }

  ctx.restore();
  return lines;
}

var drawOutlineText = function(txt,x,y,b,color,ctx)
{
  ctx.fillStyle = color;
  ctx.fillText(txt,x-b,y-b);
  ctx.fillText(txt,x+b,y-b);
  ctx.fillText(txt,x-b,y+b);
  ctx.fillText(txt,x+b,y+b);
  ctx.fillText(txt,x-b,y  );
  ctx.fillText(txt,x+b,y  );
  ctx.fillText(txt,x  ,y+b);
  ctx.fillText(txt,x  ,y-b);
}

var drawLine = function(ax,ay,bx,by,ctx)
{
  ctx.beginPath();
  ctx.moveTo(ax,ay);
  ctx.lineTo(bx,by);
  ctx.stroke();
}

var drawGrid = function(center_x, center_y, unit_x, unit_y, w, h, ctx)
{
  var t;
  var x;
  var y;

  t = center_x;
  x = lerp(0,w,t);
  while(t < 1)
  {
    drawLine(x,0,x,h,ctx);
    x += unit_x;
    t = invlerp(0,w,x);
  }
  t = center_x;
  x = lerp(0,w,t);
  while(t > 0)
  {
    drawLine(x,0,x,h,ctx);
    x -= unit_x;
    t = invlerp(0,w,x);
  }

  t = center_y;
  y = lerp(0,h);
  while(t < 1)
  {
    drawLine(0,y,w,y,ctx);
    y += unit_y;
    t = invlerp(0,h);
  }
  t = center_y;
  y = lerp(0,h);
  while(t > 0)
  {
    drawLine(0,y,w,y,ctx);
    y -= unit_y;
    t = invlerp(0,h);
  }
}

//vector
var addvec = function(a,b,r)
{
  r.x = a.x+b.x;
  r.y = a.y+b.y;
}
var subvec = function(a,b,r)
{
  r.x = a.x-b.x;
  r.y = a.y-b.y;
}
var mulvec = function(a,m,r)
{
  r.x = a.x*m;
  r.y = a.y*m;
}
var lensqrvec = function(a)
{
  return (a.x*a.x)+(a.y*a.y);
}
var lenvec = function(a)
{
  return sqrt((a.x*a.x)+(a.y*a.y));
}
var normvec = function(a,r)
{
  var l = sqrt((a.x*a.x)+(a.y*a.y));
  r.x = a.x/l;
  r.y = a.y/l;
}
var safenormvec = function(a,m,r)
{
  var l = sqrt((a.x*a.x)+(a.y*a.y));
  if(l != 0)
  {
    r.x = a.x/l;
    r.y = a.y/l;
  }
  else
  {
    r.x = m;
    r.y = 0;
  }
}
var avevec = function(a,b,r)
{
  r.x = (a.x+b.x)/2.;
  r.y = (a.y+b.y)/2.;
}

var spritesheet = function(img)
{
  var self = this;

  self.img = img;
  self.sprites = [];

  //push sprites
  //self.sprites.push({x:2,y:160,w:w,h:h});

  self.drawSprite = function(i,x,y,w,h)
  {
    ctx.drawImage(self.img,self.sprites[i].x,self.sprites[i].y,self.sprites[i].w,self.sprites[i].h,x,y,w,h);
  }
}

var bounce = function(target,v,vel,pull,drag,safe)
{
  var self = this;

  self.target = 0;
  self.v = 0;
  self.vel = 0;
  self.pull = 0.1;
  self.drag = 0.1;
  self.safe = 0.1;

  if(target) self.target = target;
  if(v)      self.v = v;
  if(vel)    self.vel = vel;
  if(pull)   self.pull = pull;
  if(drag)   self.drag = drag;
  if(safe)   self.safe = safe;

  self.tick = function()
  {
    if(abs(self.vel) < self.safe && abs(self.v-self.target) < self.safe)
      self.v = lerp(self.v,self.target,0.1);
    else
    {
      self.vel = (self.vel+(self.target-self.v)*self.pull)*(1-self.drag);
      self.v += self.vel;
    }
  }
}
var bounce2 = function(targetx,targety,vx,vy,velx,vely,pull,drag)
{
  var self = this;

  self.targetx = 0;
  self.targety = 0;
  self.vx = 0;
  self.vy = 0;
  self.velx = 0;
  self.vely = 0;
  self.pull = 0.1;
  self.drag = 0.1;

  if(targetx) self.targetx = targetx;
  if(targety) self.targety = targety;
  if(vx)      self.vx = vx;
  if(vy)      self.vy = vy;
  if(velx)    self.velx = velx;
  if(vely)    self.vely = vely;
  if(pull)    self.pull = pull;
  if(drag)    self.drag = drag;

  self.tick = function()
  {
    self.velx = (self.velx+(self.targetx-self.vx)*self.pull)*(1-self.drag);
    self.vx += self.velx;
    self.vely = (self.vely+(self.targety-self.vy)*self.pull)*(1-self.drag);
    self.vy += self.vely;
  }
}

function drawImageCentered(image,x,y,w,h,ctx)
{
  ctx.drawImage(image,x-w/2,y-h/2,w,h);
}
function drawImageWidth(image,x,y,w,ctx)
{
  var h = image.height*w/image.width;
  ctx.drawImage(image,x,y,w,h);
}
function drawImageHeight(image,x,y,h,ctx)
{
  var w = image.width*h/image.height;
  ctx.drawImage(image,x,y,w,h);
}
function drawImageWidthCentered(image,x,y,w,ctx)
{
  var h = image.height*w/image.width;
  ctx.drawImage(image,x-w/2,y-h/2,w,h);
}
function drawImageHeightCentered(image,x,y,h,ctx)
{
  var w = image.width*h/image.height;
  ctx.drawImage(image,x-w/2,y-h/2,w,h);
}
function drawImageBox(image,box,ctx)
{
  ctx.drawImage(image,box.x,box.y,box.w,box.h);
}
function strokeBox(box,ctx)
{
  ctx.strokeRect(box.x,box.y,box.w,box.h);
}
function fillBox(box,ctx)
{
  ctx.fillRect(box.x,box.y,box.w,box.h);
}
function fillRBox(box,r,ctx)
{
  ctx.beginPath();
  ctx.moveTo(box.x+r,box.y);
  ctx.lineTo(box.x+box.w-r,box.y);
  ctx.quadraticCurveTo(box.x+box.w,box.y,box.x+box.w,box.y+r);
  ctx.lineTo(box.x+box.w,box.y+box.h-r);
  ctx.quadraticCurveTo(box.x+box.w,box.y+box.h,box.x+box.w-r,box.y+box.h);
  ctx.lineTo(box.x+r,box.y+box.h);
  ctx.quadraticCurveTo(box.x,box.y+box.h,box.x,box.y+box.h-r);
  ctx.lineTo(box.x,box.y+r);
  ctx.quadraticCurveTo(box.x,box.y,box.x+r,box.y);
  ctx.closePath();
  ctx.fill();
}
function strokeRBox(box,r,ctx)
{
  ctx.beginPath();
  ctx.moveTo(box.x+r,box.y);
  ctx.lineTo(box.x+box.w-r,box.y);
  ctx.quadraticCurveTo(box.x+box.w,box.y,box.x+box.w,box.y+r);
  ctx.lineTo(box.x+box.w,box.y+box.h-r);
  ctx.quadraticCurveTo(box.x+box.w,box.y+box.h,box.x+box.w-r,box.y+box.h);
  ctx.lineTo(box.x+r,box.y+box.h);
  ctx.quadraticCurveTo(box.x,box.y+box.h,box.x,box.y+box.h-r);
  ctx.lineTo(box.x,box.y+r);
  ctx.quadraticCurveTo(box.x,box.y,box.x+r,box.y);
  ctx.closePath();
  ctx.stroke();
}
function fillRect(x,y,w,h,ctx)
{
  ctx.fillRect(x,y,w,h);
}
function strokeRect(x,y,w,h,ctx)
{
  ctx.strokeRect(x,y,w,h);
}
function fillRectCentered(x,y,w,h,ctx)
{
  ctx.fillRect(x-w/2,y-h/2,w,h);
}
function strokeRectCentered(x,y,w,h,ctx)
{
  ctx.strokeRect(x-w/2,y-h/2,w,h);
}
function fillRRectCentered(x,y,w,h,r,ctx)
{
  fillRRect(x-w/2,y-h/2,w,h,r,ctx);
}
function strokeRRectCentered(x,y,w,h,r,ctx)
{
  strokeRRect(x-w/2,y-h/2,w,h,r,ctx);
}
function fillRRect(x,y,w,h,r,ctx)
{
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);
  ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);
  ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);
  ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
  ctx.fill();
}
function strokeRRect(x,y,w,h,r,ctx)
{
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);
  ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);
  ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);
  ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
  ctx.stroke();
}

//straight up stolen from the internet
function setCookie(name, val, days)
{
  var d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = name + "=" + val + "; expires="+ d.toGMTString() + "; path=/";
}

function getCookie(name)
{
  var full_cookie = decodeURIComponent(document.cookie);
  var cookies = full_cookie.split(';');
  var name = name + "="; //to ensure "indexOf" doesn't return true unless full name matches
  for(var i = 0; i < cookies.length; i++)
  {
      var c = cookies[i];
      while(c.charAt(0) == ' ') c = c.substring(1);
      if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

var animation = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.flip = 0;
  self.src;

  self.animations = [];
  //self.animations[ANIM_NULL] = []; for(var i = 0; i <= 1; i++) self.animations[ANIM_NULL].push(i);
  //self.animations[ANIM_IDLE] = []; for(var i = 2; i <= 3; i++) self.animations[ANIM_IDLE].push(i);

  self.cur_anim = 0;//ANIM_NULL;
  self.cur_anim_i = 0;
  self.anim_queue = [];

  self.frame_delay = 5;
  var frame_delay_i = 0;

  self.enqueueAnim = function(anim)
  {
    self.anim_queue.push(anim);
  }

  self.injectAnim = function(anim)
  {
    self.cur_anim = anim;
    self.cur_anim_i = 0;
    frame_delay_i = 0;
  }

  self.swapAnim = function(anim)
  {
    self.cur_anim = anim;
    self.cur_anim_i = 0;
    frame_delay_i = 0;
    self.anim_queue = [];
  }

  self.transition = function()
  {
    if(self.anim_queue.length)
    {
      self.cur_anim = self.anim_queue[0];
      self.anim_queue.splice(0,1);
      self.cur_anim_i = 0;
    }
    else
    {
      switch(self.cur_anim)
      {
      /*
        case ANIM_IDLE:
          self.cur_anim_i = 0;
        break;
      */
        default:
          self.cur_anim = 0; //ANIM_NULL;
          self.cur_anim_i = 0;
        break;
      }
    }
  }

  self.tick = function()
  {
    frame_delay_i = (frame_delay_i + 1)%self.frame_delay;
    if(frame_delay_i != 0) return;

    self.cur_anim_i++;
    if(self.cur_anim_i >= self.animations[self.cur_anim].length)
    {
      self.transition();
    }
  }

  self.draw = function(ctx)
  {
    ctx.save();
    ctx.translate(self.x+self.w/2,self.y+self.h/2);
    if(self.flip) ctx.scale(-1,1);
    ctx.drawImage(self.src[self.animations[self.cur_anim][self.cur_anim_i]],-self.w/2,-self.h/2,self.w,self.h);
    ctx.restore();
  }
}

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function dateToString(d)
{
  var year = d.getFullYear();
  var month = months[d.getMonth()];
  var date = d.getDate();
  var hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  var sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;

  return time;
}

//all data pts evenly spaced
var constant_graph = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.wx = 0;
  self.wy = 0;
  self.ww = 0;
  self.wh = 0;

  self.data = [];
  for(var i = 0; i < 1000; i++)
    self.data[i] = sin(i/10);
  self.min_xv = 0; //corresponds to data[0]
  self.max_xv = 1; //corresponds to data[data.length-1]
  self.disp_min_xv = self.min_xv;
  self.disp_max_xv = self.max_xv;
  self.disp_min_yv = -1;
  self.disp_max_yv =  1;

  self.cache;
  self.dirty = true;

  self.genCache = function()
  {
    self.cache = GenIcon(self.w,self.h);
  }

  self.draw = function(ctx)
  {
    if(self.dirty)
    {
      self.cache.context.clearRect(0,0,self.w,self.h);
      //v = value
      //p = pixel
      //t = normalized range from min-max
      //l = lerp to next val
      //i = index
      var xv = 0; //not actually used!
      var yv;
      var xp;
      var yp;
      var xl;
      var xi;

      var min_xt = mapVal(self.min_xv,self.max_xv,0,1,self.disp_min_xv);
      var max_xt = mapVal(self.min_xv,self.max_xv,0,1,self.disp_max_xv);

      xl = min_xt*self.data.length;
      xi = floor(xl);
      xl -= xi;

      self.cache.context.strokeStyle = "#000000";
      self.cache.context.beginPath();
      yv = lerp(self.data[xi],self.data[xi+1],xl);
      yp = mapVal(self.disp_min_yv, self.disp_max_yv, self.h, 0, yv);
      self.cache.context.moveTo(0,yp);
      for(var j = 1; j < self.w; j++)
      {
        xl = mapVal(0,self.w,min_xt,max_xt,j)*self.data.length;
        xi = floor(xl);
        xl -= xi;

        yv = lerp(self.data[xi],self.data[xi+1],xl);
        xp = j;
        yp = mapVal(self.disp_min_yv, self.disp_max_yv, self.h, 0, yv);
        self.cache.context.lineTo(xp,yp);
      }
      self.cache.context.stroke();

      self.dirty = false
    }

    ctx.drawImage(self.cache,self.x,self.y,self.w,self.h);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.strokeRect(self.x,self.y,self.w,self.h);
  }
}

//data pts arbitrarily spaced
var variable_graph = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.wx = 0;
  self.wy = 0;
  self.ww = 0;
  self.wh = 0;

  self.yv = [];
  self.xv = [];
  self.priority = [];
  /*
  //test data
  var n = 10;
  for(var i = 0; i < n; i++)
  {
    self.xv.push(i);
    self.yv.push(sin(self.xv[self.xv.length-1]));
  }
  for(var i = 0; i < n*10; i++)
  {
    self.xv.push(self.xv[self.xv.length-1]+0.1);
    self.yv.push(sin(self.xv[self.xv.length-1]));
  }
  for(var i = 0; i < n; i++)
  {
    self.xv.push(self.xv[self.xv.length-1]+1);
    self.yv.push(sin(self.xv[self.xv.length-1]));
  }
  //end test data
  self.disp_min_xv = self.xv[0];
  self.disp_max_xv = self.xv[self.xv.length-1];
  */
  self.known_min_yv = 0;
  self.known_max_yv = 0;
  self.disp_min_xv = 0;
  self.disp_max_xv = 1;
  self.disp_min_yv = 0;
  self.disp_max_yv = 1;

  self.clampDispX = function()
  {
    self.dirty = true;
    if(self.xv.length == 0)
    {
      self.disp_min_xv = -1;
      self.disp_max_xv = 1;
      return;
    }
    self.disp_min_xv = self.xv[0];
    if(self.xv.length-1 < 0)
    {
      self.disp_max_xv = self.disp_min_xv;
      return;
    }
    self.disp_max_xv = self.xv[self.xv.length-1];

    if(self.disp_min_yv == self.disp_max_yv)
    {
      self.disp_min_yv -= 1;
      self.disp_max_yv += 1;
    }
  }

  self.findRangeY = function()
  {
    if(self.yv.length == 0)
    {
      self.known_min_yv = 0;
      self.known_max_yv = 0;
      return;
    }
    self.known_min_yv = self.yv[0];
    self.known_max_yv = self.yv[0];
    for(var i = 1; i < self.yv.length; i++)
    {
      if(self.yv[i] < self.known_min_yv) self.known_min_yv = self.yv[i];
      if(self.yv[i] > self.known_max_yv) self.known_max_yv = self.yv[i];
    }
  }

  self.clampDispY = function()
  {
    self.dirty = true;
    if(self.known_min_yv == self.known_max_yv)
    {
      self.disp_min_yv = self.known_min_yv-1;
      self.disp_max_yv = self.known_max_yv+1;
    }
    else
    {
      self.disp_min_yv = self.known_min_yv;
      self.disp_max_yv = self.known_max_yv;
    }
  }

  self.clampDisp = function()
  {
    self.clampDispX();
    self.clampDispY();
  }

  self.cache;
  self.dirty = true;

  self.genCache = function()
  {
    self.cache = GenIcon(self.w,self.h);
  }

  self.verifyOrder = function()
  {
    for(var i = 0; i < self.xv.length-1; i++)
      if(self.xv[i] > self.xv[i+1]) return false;
    return true;
  }

  self.insertDataNext = function(x,y,i,p)
  {
    self.dirty = true;

    if(!self.yv.length || y < self.known_min_yv) self.known_min_yv = y;
    if(!self.yv.length || y > self.known_max_yv) self.known_max_yv = y;

    i = self.nextibeforex(x,i)+1;
    if(self.xv[i] == x)
    {
      if(p <= self.priority[i])
      {
        self.yv[i] = y;
        self.priority[i] = p;
      }
    }
    else
    {
      if(i == 0 || p <= self.priority[i-1] || p <= self.priority[i])
      {
        self.xv.splice(i,0,x);
        self.yv.splice(i,0,y);
        self.priority.splice(i,0,p);
      }
    }
    return i;
  }

  self.insertDataFind = function(x,y,min,max,p)
  {
    var i = self.findibeforex(x,min,max);
    return self.insertDataNext(x,y,i,p);
  }

  self.insertDataBlockNext = function(x,y,i,p)
  {
    self.dirty = true;

    //verify order
    var ordered = true;
    for(var j = 1; j < x.length; j++)
    {
      if(x[j] < x[j-1]) ordered = false;
    }
    if(!ordered)
    {
      var newx = [];
      var newy = [];
      while(x.length) //holy inefficient...
      {
        var minj = 0;
        for(var j = 1; j < x.length; j++)
        {
          if(x[minj] > x[j])
            minj = j;
        }
        newx.push(x[minj]);
        newy.push(y[minj]);
        x.splice(minj,1);
        y.splice(minj,1);
      }
      x = newx;
      y = newy;
    }

    if(x.length)
    {
      if(!self.yv.length) self.known_min_yv = y[0];
      if(!self.yv.length) self.known_max_yv = y[0];
    }
    for(var j = 0; j < x.length; j++)
    {
      if(y[j] < self.known_min_yv) self.known_min_yv = y[j];
      if(y[j] > self.known_max_yv) self.known_max_yv = y[j];

      i = self.nextibeforex(x[j],i)+1;

      if(self.xv[i] == x[j])
      {
        if(p <= self.priority[i])
          self.yv[i] = y[j];
      }
      else
      {
        if(i == 0 || p <= self.priority[i-1] || p <= self.priority[i])
        {
          self.xv.splice(i,0,x[j]);
          self.yv.splice(i,0,y[j]);
          self.priority.splice(i,0,p);
        }
      }
    }

    return i;
  }

  self.insertDataBlockFind = function(x,y,min,max,p)
  {
    var i = self.findibeforex(x,min,max);
    return self.insertDataBlockNext(x,y,i,p);
  }

  self.findqueryxt = function(xt,min,max)
  {
    var x = mapVal(0,1,self.disp_min_xv,self.disp_max_xv,xt);
    return self.findqueryx(x,min,max);
  }

  self.nextqueryxt = function(xt,i)
  {
    var x = mapVal(0,1,self.disp_min_xv,self.disp_max_xv,xt);
    return self.nextqueryx(x,i);
  }

  self.findqueryx = function(x,min,max)
  {
    var xi = self.findibeforex(x,min,max);
    if(xi == -1) return self.yv[0];
    if(xi == self.xv.length-1) return self.yv[xi];
    var xl = mapVal(self.xv[xi],self.xv[xi+1],0,1,x)
    return lerp(self.yv[xi],self.yv[xi+1],xl);
  }

  self.nextqueryx = function(x,i)
  {
    var xi = self.nextibeforex(x,i);
    if(xi == -1) return self.yv[0];
    if(xi == self.xv.length-1) return self.yv[xi];
    var xl = mapVal(self.xv[xi],self.xv[xi+1],0,1,x)
    return lerp(self.yv[xi],self.yv[xi+1],xl);
  }

  self.findibeforex = function(x,min,max)
  {
    if(!min) min = -1;
    if(!max) max = self.xv.length;
    var i = min;
    while(min < max-1)
    {
      i = min+ceil((max-min)/2);
           if(x > self.xv[i]) min = i;
      else if(x < self.xv[i]) max = i;
      else //found precisely
      {
        while(i > 0)
        {
          if(self.xv[i] < x) return i;
          i--;
        }
        return 0;
      }
    }
    return min;
  }

  self.nextibeforex = function(x,i)
  {
    for(; i < self.xv.length; i++)
      if(x <= self.xv[i]) return i-1;
    return self.xv.length-1;
  }

  self.draw = function(ctx)
  {
    if(true)//self.dirty)
    {
      self.cache.context.clearRect(0,0,self.w,self.h);
      //v = value
      //p = pixel
      //t = normalized range from min to max
      //l = lerp to next val
      //i = index
      var xv = 0; //not actually used!
      var yv;
      var xp;
      var yp;
      var xl;
      var xi;

      self.cache.context.strokeStyle = self.color;
      self.cache.context.beginPath();
      xi = self.nextibeforex(self.disp_min_xv,0);
      xl = mapVal(self.xv[xi],self.xv[xi+1],0,1,self.disp_min_xv)
      yv = lerp(self.yv[xi],self.yv[xi+1],xl);
      yp = mapVal(self.disp_min_yv, self.disp_max_yv, self.h, 0, yv);
      self.cache.context.moveTo(0,yp);
      for(var j = 1; j < self.w; j++)
      {
        xv = mapVal(0,self.w,self.disp_min_xv,self.disp_max_xv,j);
        xi = self.nextibeforex(xv,xi);
        xl = mapVal(self.xv[xi],self.xv[xi+1],0,1,xv)
        yv = lerp(self.yv[xi],self.yv[xi+1],xl);
        xp = j;
        yp = mapVal(self.disp_min_yv, self.disp_max_yv, self.h, 0, yv);
        self.cache.context.lineTo(xp,yp);
      }
      self.cache.context.stroke();

      self.dirty = false
    }

    ctx.drawImage(self.cache,self.x,self.y,self.w,self.h);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.strokeRect(self.x,self.y,self.w,self.h);
  }
}

//data pts arbitrarily spaced
var running_deriv_variable_graph = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.wx = 0;
  self.wy = 0;
  self.ww = 0;
  self.wh = 0;

  self.yt = []; //total
  self.yd = []; //deriv
  self.yv = [];
  self.xv = [];
  self.priority = [];
  /*
  //test data
  var n = 10;
  for(var i = 0; i < n; i++)
  {
    self.xv.push(i);
    self.yv.push(sin(self.xv[self.xv.length-1]));
  }
  for(var i = 0; i < n*10; i++)
  {
    self.xv.push(self.xv[self.xv.length-1]+0.1);
    self.yv.push(sin(self.xv[self.xv.length-1]));
  }
  for(var i = 0; i < n; i++)
  {
    self.xv.push(self.xv[self.xv.length-1]+1);
    self.yv.push(sin(self.xv[self.xv.length-1]));
  }
  //end test data
  self.disp_min_xv = self.xv[0];
  self.disp_max_xv = self.xv[self.xv.length-1];
  */
  self.known_min_yv = 0;
  self.known_max_yv = 0;
  self.disp_min_xv = 0;
  self.disp_max_xv = 1;
  self.disp_min_yv = 0;
  self.disp_max_yv = 1;

  self.clampDispX = function()
  {
    self.dirty = true;
    if(self.xv.length == 0)
    {
      self.disp_min_xv = -1;
      self.disp_max_xv = 1;
      return;
    }
    self.disp_min_xv = self.xv[0];
    if(self.xv.length-1 < 0)
    {
      self.disp_max_xv = self.disp_min_xv;
      return;
    }
    self.disp_max_xv = self.xv[self.xv.length-1];

    if(self.disp_min_yv == self.disp_max_yv)
    {
      self.disp_min_yv -= 1;
      self.disp_max_yv += 1;
    }
  }

  self.findRangeY = function()
  {
    if(self.yv.length == 0)
    {
      self.known_min_yv = 0;
      self.known_max_yv = 0;
      return;
    }
    self.known_min_yv = self.yd[0];
    self.known_max_yv = self.yd[0];
    for(var i = 1; i < self.yv.length; i++)
    {
      if(self.yd[i] < self.known_min_yv) self.known_min_yv = self.yd[i];
      if(self.yd[i] > self.known_max_yv) self.known_max_yv = self.yd[i];
    }
  }

  self.clampDispY = function()
  {
    self.dirty = true;
    if(self.known_min_yv == self.known_max_yv)
    {
      self.disp_min_yv = self.known_min_yv-1;
      self.disp_max_yv = self.known_max_yv+1;
    }
    else
    {
      self.disp_min_yv = self.known_min_yv;
      self.disp_max_yv = self.known_max_yv;
    }
  }

  self.clampDisp = function()
  {
    self.clampDispX();
    self.clampDispY();
  }

  self.cache;
  self.dirty = true;

  self.genCache = function()
  {
    self.cache = GenIcon(self.w,self.h);
  }

  self.verifyOrder = function()
  {
    for(var i = 0; i < self.xv.length-1; i++)
      if(self.xv[i] > self.xv[i+1]) return false;
    return true;
  }

  self.insertDataNext = function(x,y,i,p)
  {
    self.dirty = true;

    if(!self.yv.length) self.known_min_yv = 0;
    if(!self.yv.length) self.known_max_yv = 0;

    i = self.nextibeforex(x,i)+1;
    if(self.xv[i] == x)
    {
      if(p <= self.priority[i])
      {
        self.yv[i] = y;
        if(i == 0)
        {
          self.yt[i] = self.yv[i];
          if(i < self.yt.length-1)
            self.yd[i] = (((self.yt[i+1]-self.yt[i])/(self.xv[i+1]-self.xv[i])));
          else
            self.yd[i] = 0;
        }
        else
        {
          self.yt[i] = self.yt[i-1] + self.yv[i];
          if(i < self.yt.length-1)
            self.yd[i] = (((self.yt[i]-self.yt[i-1])/(self.xv[i]-self.xv[i-1])) + ((self.yt[i+1]-self.yt[i])/(self.xv[i+1]-self.xv[i]))) / 2;
          else
            self.yd[i] = (((self.yt[i]-self.yt[i-1])/(self.xv[i]-self.xv[i-1])));
        }
        for(var j = i+1; j < self.yt.length; j++)
        {
          self.yt[j] = self.yt[j-1]+self.yv[j];
          if(j < self.yt.length-1)
            self.yd[j] = (((self.yt[j]-self.yt[j-1])/(self.xv[j]-self.xv[j-1])) + ((self.yt[j+1]-self.yt[j])/(self.xv[j+1]-self.xv[j]))) / 2;
          else
            self.yd[j] = (((self.yt[j]-self.yt[j-1])/(self.xv[j]-self.xv[j-1])));
        }
        self.priority[i] = p;
      }
    }
    else
    {
      if(i == 0 || p <= self.priority[i-1] || p <= self.priority[i])
      {
        self.xv.splice(i,0,x);
        self.yv.splice(i,0,y);
        self.yt.splice(i,0,0);
        for(var j = i; j < self.yt.length; j++)
        {
          self.yt[j] = self.yt[j-1]+self.yv[j];
          if(i < self.yt.length-1)
            self.yd[j] = (((self.yt[j]-self.yt[j-1])/(self.xv[j]-self.xv[j-1])) + ((self.yt[j+1]-self.yt[j])/(self.xv[j+1]-self.xv[j]))) / 2;
          else
            self.yd[j] = (((self.yt[j]-self.yt[j-1])/(self.xv[j]-self.xv[j-1])));
        }
        self.priority.splice(i,0,p);
      }
    }
    if(self.yd[i] < self.known_min_yv) self.known_min_yv = self.yd[i];
    if(self.yd[i] > self.known_max_yv) self.known_max_yv = self.yd[i];
    return i;
  }

  self.insertDataFind = function(x,y,min,max,p)
  {
    var i = self.findibeforex(x,min,max);
    return self.insertDataNext(x,y,i,p);
  }

  self.insertDataBlockNext = function(x,y,i,p)
  {
    self.dirty = true;
    var initial_i = i;
    if(x.length)
    {
      if(!self.yv.length) self.known_min_yv = 0;
      if(!self.yv.length) self.known_max_yv = 0;
    }
    for(var j = 0; j < x.length; j++)
    {
      i = self.nextibeforex(x[j],i)+1;

      if(self.xv[i] == x[j])
      {
        if(p <= self.priority[i])
          self.yv[i] = y[j];
      }
      else
      {
        if(i == 0 || p <= self.priority[i-1] || p <= self.priority[i])
        {
          self.xv.splice(i,0,x[j]);
          self.yv.splice(i,0,y[j]);
          self.yt.splice(i,0,0);
          self.priority.splice(i,0,p);
        }
      }
    }
    if(initial_i == 0)
    {
      self.yt[initial_i] = self.yv[initial_i];
      if(initial_i < self.yt.length-1)
        self.yd[initial_i] = (((self.yt[initial_i+1]-self.yt[initial_i])/(self.xv[initial_i+1]-self.xv[initial_i])));
      else
        self.yd[initial_i] = 0;
      if(self.yd[initial_i] < self.known_min_yv) self.known_min_yv = self.yd[initial_i];
      if(self.yd[initial_i] > self.known_max_yv) self.known_max_yv = self.yd[initial_i];
    }
    else
    {
      self.yt[initial_i] = self.yt[initial_i-1] + self.yv[initial_i];
      if(initial_i < self.yt.length-1)
        self.yd[initial_i] = (((self.yt[initial_i]-self.yt[initial_i-1])/(self.xv[initial_i]-self.xv[initial_i-1])) + ((self.yt[initial_i+1]-self.yt[initial_i])/(self.xv[initial_i+1]-self.xv[initial_i]))) / 2;
      else
        self.yd[initial_i] = (((self.yt[initial_i]-self.yt[initial_i-1])/(self.xv[initial_i]-self.xv[initial_i-1])));
      if(self.yd[initial_i] < self.known_min_yv) self.known_min_yv = self.yd[initial_i];
      if(self.yd[initial_i] > self.known_max_yv) self.known_max_yv = self.yd[initial_i];
    }
    for(var j = initial_i+1; j < self.yt.length; j++)
    {
      self.yt[j] = self.yt[j-1]+self.yv[j];
      if(j < self.yt.length-1)
        self.yd[j] = (((self.yt[j]-self.yt[j-1])/(self.xv[j]-self.xv[j-1])) + ((self.yt[j+1]-self.yt[j])/(self.xv[j+1]-self.xv[j]))) / 2;
      else
        self.yd[j] = (((self.yt[j]-self.yt[j-1])/(self.xv[j]-self.xv[j-1])));
      if(self.yd[j] < self.known_min_yv) self.known_min_yv = self.yd[j];
      if(self.yd[j] > self.known_max_yv) self.known_max_yv = self.yd[j];
    }

    return i;
  }

  self.insertDataBlockFind = function(x,y,min,max,p)
  {
    var i = self.findibeforex(x,min,max);
    return self.insertDataBlockNext(x,y,i,p);
  }

  self.findqueryxt = function(xt,min,max)
  {
    var x = mapVal(0,1,self.disp_min_xv,self.disp_max_xv,xt);
    return self.findqueryx(x,min,max);
  }

  self.nextqueryxt = function(xt,i)
  {
    var x = mapVal(0,1,self.disp_min_xv,self.disp_max_xv,xt);
    return self.nextqueryx(x,i);
  }

  self.findqueryx = function(x,min,max)
  {
    var xi = self.findibeforex(x,min,max);
    if(xi == -1) return self.yv[0];
    if(xi == self.xv.length-1) return self.yv[xi];
    var xl = mapVal(self.xv[xi],self.xv[xi+1],0,1,x)
    return lerp(self.yv[xi],self.yv[xi+1],xl);
  }

  self.nextqueryx = function(x,i)
  {
    var xi = self.nextibeforex(x,i);
    if(xi == -1) return self.yv[0];
    if(xi == self.xv.length-1) return self.yv[xi];
    var xl = mapVal(self.xv[xi],self.xv[xi+1],0,1,x)
    return lerp(self.yv[xi],self.yv[xi+1],xl);
  }

  self.findibeforex = function(x,min,max)
  {
    if(!min) min = -1;
    if(!max) max = self.xv.length;
    var i = min;
    while(min < max-1)
    {
      i = min+ceil((max-min)/2);
           if(x > self.xv[i]) min = i;
      else if(x < self.xv[i]) max = i;
      else //found precisely
      {
        while(i > 0)
        {
          if(self.xv[i] < x) return i;
          i--;
        }
        return 0;
      }
    }
    return min;
  }

  self.nextibeforex = function(x,i)
  {
    for(; i < self.xv.length; i++)
      if(x <= self.xv[i]) return i-1;
    return self.xv.length-1;
  }

  self.draw = function(ctx)
  {
    if(true)//self.dirty)
    {
      self.cache.context.clearRect(0,0,self.w,self.h);
      //v = value
      //p = pixel
      //t = normalized range from min to max
      //l = lerp to next val
      //i = index
      var xv = 0; //not actually used!
      var yv;
      var xp;
      var yp;
      var xl;
      var xi;

      self.cache.context.strokeStyle = self.color;
      self.cache.context.beginPath();
      xi = self.nextibeforex(self.disp_min_xv,0);
      xl = mapVal(self.xv[xi],self.xv[xi+1],0,1,self.disp_min_xv)
      yv = lerp(self.yd[xi],self.yd[xi+1],xl);
      var disp_extreme_yv = abs(self.disp_min_yv) < abs(self.disp_max_yv) ? abs(self.disp_max_yv) : abs(self.disp_min_yv);
      yp = mapVal(-disp_extreme_yv, disp_extreme_yv, self.h, 0, yv);
      self.cache.context.moveTo(0,yp);
      for(var j = 1; j < self.w; j++)
      {
        xv = mapVal(0,self.w,self.disp_min_xv,self.disp_max_xv,j);
        xi = self.nextibeforex(xv,xi);
        xl = mapVal(self.xv[xi],self.xv[xi+1],0,1,xv)
        yv = lerp(self.yd[xi],self.yd[xi+1],xl);
        xp = j;
        yp = mapVal(-disp_extreme_yv, disp_extreme_yv, self.h, 0, yv);
        self.cache.context.lineTo(xp,yp);
      }
      self.cache.context.stroke();

      self.dirty = false
    }

    ctx.drawImage(self.cache,self.x,self.y,self.w,self.h);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.strokeRect(self.x,self.y,self.w,self.h);
  }
}

