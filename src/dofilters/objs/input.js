function Box(x,y,w,h)
{
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;
}

function TextBox(x,y,w,h,txt,callback)
//register to keyer, dragger, blurer
{
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;

  self.txt = txt;

  self.focused = false;
  self.highlit = false;
  self.down = false;

  self.key = function(evt)
  {
  }
  self.key_letter = function(k)
  {
    if(self.focused)
    {
      if(self.highlit) self.txt = ""+k;
      else             self.txt = self.txt+k;
      self.highlit = false;
      callback(self.txt);
    }
  }
  self.key_down = function(evt)
  {
    if(evt.keyCode == 13) //enter
    {
      if(self.focused)
        self.blur();
    }
    if(evt.keyCode == 8) //delete
    {
      if(self.highlit)
      {
        self.txt = "";
        self.highlit = false;
        callback(self.number);
      }
      else if(self.focused)
      {
        self.txt = self.txt.substring(0,self.txt.length-1);
        callback(self.txt);
      }
    }
  }
  self.key_up = function(evt)
  {
  }

  self.dragStart = function(evt)
  {
    evt.hit_ui = true;
    self.focused = true;
    self.down = true;
  }
  self.drag = function(evt)
  {
    evt.hit_ui = true;
    self.down = ptWithinObj(self, evt.doX, evt.doY);
  }
  self.dragFinish = function()
  {
    if(self.down) self.highlit = !self.highlit;
    self.down = false;
  }

  self.blur = function()
  {
    self.focused = false;
    self.highlit = false;
    callback(self.txt);
  }
  self.focus = function()
  {
    self.focused = true;
    self.highlit = true;
  }
  self.set = function(n)
  {
    self.txt = n;
    callback(self.txt);
  }

  self.draw = function(canv)
  {
    if(self.highlit)
    {
      canv.context.fillStyle = "#8899FF";
      canv.context.fillRect(self.x,self.y,self.w,self.h);
    }
         if(self.down)    canv.context.strokeStyle = "#00F400";
    else if(self.focused) canv.context.strokeStyle = "#F40000";
    else                  canv.context.strokeStyle = "#0000F4";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
    canv.context.fillStyle = "#000000";
    if(self.txt.length < 5)
      canv.context.fillText(self.txt,self.x+4,self.y+self.h*3/4,self.w-4);
    else
      canv.context.fillText(self.txt.substring(0,5)+"...",self.x+4,self.y+self.h*3/4,self.w-4);
  }

  self.print = function()
  {
    console.log("("+self.x+","+self.y+","+self.w+","+self.h+") n:"+self.txt+" f:"+self.focused+" h:"+self.highlit+" d:"+self.down+" "+"");
  }
}

function NumberBox(x,y,w,h,val,delta,callback)
//register to keyer, dragger, blurer
{
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;

  self.number = val;

  self.value = ""+val;
  self.focused = false;
  self.highlit = false;
  self.down = false;

  self.delta = delta;

  var validateNum = function(n)
  {
    if(!isNaN(parseFloat(n)) && isFinite(n)) return parseFloat(n);
    else return self.number;
  }

  self.key = function(evt)
  {
  }
  self.key_letter = function(k)
  {
    if(self.focused)
    {
      if(self.value == "0") self.value = "";
      if(self.highlit) self.value = ""+k;
      else             self.value = self.value+k;
      self.number = validateNum(self.value);
      self.highlit = false;
      callback(self.number);
    }
  }
  self.key_down = function(evt)
  {
    if(evt.keyCode == 13) //enter
    {
      if(self.focused)
        self.blur();
    }
    if(evt.keyCode == 8) //delete
    {
      if(self.highlit)
      {
        self.number = 0;
        self.value = "0";
        self.highlit = false;
        callback(self.number);
      }
      else if(self.focused)
      {
        self.value = self.value.substring(0,self.value.length-1);
        self.number = validateNum(self.value);
        callback(self.number);
      }
    }
  }
  self.key_up = function(evt)
  {
  }

  //nice in smooth dragging
  self.offX = 0;
  self.offY = 0;
  self.dragStart = function(evt)
  {
    evt.hit_ui = true;
    self.focused = true;
    self.down = true;

    self.offX = evt.doX-self.x;
    self.offY = evt.doY-self.y;
  }
  self.drag = function(evt)
  {
    evt.hit_ui = true;
    self.deltaX = ((evt.doX-self.x)-self.offX);
    self.deltaY = ((evt.doY-self.y)-self.offY);
    self.offX = evt.doX - self.x;
    self.offY = evt.doY - self.y;
    self.number = validateNum(self.number + -self.deltaY*self.delta);
    self.value = ""+self.number;

    self.down = ptWithinObj(self, evt.doX, evt.doY);
    callback(self.number);
  }
  self.dragFinish = function()
  {
    if(self.down) self.highlit = !self.highlit;
    self.down = false;
  }

  self.blur = function()
  {
    self.focused = false;
    self.highlit = false;
    self.value = ""+self.number;
    callback(self.number);
  }
  self.focus = function()
  {
    self.focused = true;
    self.highlit = true;
  }
  self.set = function(n)
  {
    self.number = validateNum(n);
    self.value = ""+self.number;
    callback(self.number);
  }

  self.draw = function(canv)
  {
    if(self.highlit)
    {
      canv.context.fillStyle = "#8899FF";
      canv.context.fillRect(self.x,self.y,self.w,self.h);
    }
         if(self.down)    canv.context.strokeStyle = "#00F400";
    else if(self.focused) canv.context.strokeStyle = "#F40000";
    else                  canv.context.strokeStyle = "#0000F4";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
    canv.context.fillStyle = "#000000";
    if(self.value.length < 5)
      canv.context.fillText(self.value,self.x+4,self.y+self.h*3/4,self.w-4);
    else
      canv.context.fillText(self.value.substring(0,5)+"...",self.x+4,self.y+self.h*3/4,self.w-4);
  }

  self.print = function()
  {
    console.log("("+self.x+","+self.y+","+self.w+","+self.h+") n:"+self.number+" v:"+self.value+" f:"+self.focused+" h:"+self.highlit+" d:"+self.down+" "+"");
  }
}

function ButtonBox(x,y,w,h,callback)
//register to presser *or* clicker
{
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;

  self.down = false;

  self.press = function(evt)
  {
    evt.hit_ui = true;
    self.down = true;
  }
  self.unpress = function(evt)
  {
    evt.hit_ui = true;
    self.down = false;
  }

  self.click = function(evt)
  {
    evt.hit_ui = true;
    self.hit();
  }

  self.hit = function()
  {
    callback(self.down);
  }

  self.draw = function(canv)
  {
    if(self.down) canv.context.strokeStyle = "#00F400";
    else          canv.context.strokeStyle = "#000000";

    canv.context.fillStyle = "#00F400";

    canv.context.fillRect(self.x,self.y,self.w,self.h);
    canv.context.strokeRect(self.x+0.5,self.y+0.5,self.w,self.h);
  }

  self.print = function()
  {
    console.log("("+self.x+","+self.y+","+self.w+","+self.h+") d:"+self.down+" "+"");
  }
}

function ToggleBox(x,y,w,h,val,callback)
//register to presser *or* clicker
{
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;

  self.on = val;
  self.down = false;

  self.press = function(evt)
  {
    evt.hit_ui = true;
    self.down = true;
  }
  self.unpress = function(evt)
  {
    evt.hit_ui = true;
    self.down = false;
    self.toggle();
  }

  self.click = function(evt)
  {
    evt.hit_ui = true;
    self.toggle();
  }

  self.toggle = function()
  {
    self.on = !self.on;
    callback(self.on);
  }
  self.set = function(n)
  {
    self.on = n;
    callback(self.on);
  }

  self.draw = function(canv)
  {
    if(self.down) canv.context.strokeStyle = "#00F400";
    else          canv.context.strokeStyle = "#000000";

    if(self.on) canv.context.fillStyle = "#00F400";
    else        canv.context.fillStyle = "#FFFFFF";

    canv.context.fillRect(self.x,self.y,self.w,self.h);
    canv.context.strokeRect(self.x+0.5,self.y+0.5,self.w,self.h);
  }

  self.print = function()
  {
    console.log("("+self.x+","+self.y+","+self.w+","+self.h+") o:"+self.on+" d:"+self.down+" "+"");
  }
}

function SliderBox(x,y,w,h,min_val,max_val,val,callback)
//register to dragger
{
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;

  self.slit_x = Math.round(self.x + self.w/20);
  self.slit_w = Math.round(self.w - self.w/10);

  self.min_val = min_val;
  self.max_val = max_val;
  self.val = val;

  self.dragging = false;
  self.dragStart = function(evt)
  {
    evt.hit_ui = true;
    self.drag(evt);
  }
  self.drag = function(evt)
  {
    evt.hit_ui = true;
    if(evt.doX < self.slit_x) evt.doX = self.slit_x;
    if(evt.doX > self.slit_x+self.maxPixel()) evt.doX = self.slit_x+self.maxPixel();
    self.val = self.valAtPixel(evt.doX-self.slit_x);
    callback(self.val);
  }
  self.dragFinish = function(evt)
  {
  }
  self.set = function(n)
  {
    self.val = n;
    callback(self.val);
  }

  self.maxPixel = function()
  {
    return self.slit_w;
  }
  self.valAtPixel = function(p)
  {
    var r = self.min_val+(self.max_val-self.min_val)*(p/self.slit_w);
    if(r < self.min_val) r = self.min_val;
    if(r > self.max_val) r = self.max_val;
    return r;
  }
  self.pixelAtVal = function(v)
  {
    var r = ((v-self.min_val)/(self.max_val-self.min_val))*self.slit_w;
    if(r < 0) r = 0;
    if(r > self.w) r = self.w-1;
    return r;
  }

  self.draw = function(canv)
  {
    canv.context.fillStyle = "#333333";
    canv.context.fillRect(self.slit_x,self.y+self.h/3,self.slit_w,self.h/3);
    canv.context.fillStyle = "#000000";
    var switch_x = self.slit_x+(((self.val-self.min_val)/(self.max_val-self.min_val))*self.slit_w);
    canv.context.strokeRect(switch_x-(self.w/20)+0.5,self.y+0.5,(self.w/10),self.h);
  }

  self.print = function()
  {
    console.log("("+self.x+","+self.y+","+self.w+","+self.h+") min:"+self.min_val+" max:"+self.max_val+" v:"+self.val+" "+"");
  }
}

function SmoothSliderBox(x,y,w,h,min_val,max_val,val,callback)
//register to dragger, ticker
{
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;

  self.slit_x = self.x + self.w/20;
  self.slit_w = self.w - self.w/10;

  self.min_val = min_val;
  self.max_val = max_val;
  self.desired_val = val;
  self.val = val;

  self.dragging = false;
  self.dragStart = function(evt)
  {
    evt.hit_ui = true;
    self.dragging = true;
    self.drag(evt);
  }
  self.drag = function(evt)
  {
    evt.hit_ui = true;
    if(evt.doX < self.slit_x) evt.doX = self.slit_x;
    if(evt.doX > self.slit_x+self.maxPixel()) evt.doX = self.slit_x+self.maxPixel();
    self.desired_val = self.valAtPixel(evt.doX-self.slit_x);
  }
  self.dragFinish = function()
  {
    self.dragging = false;
  }
  self.set = function(n)
  {
    self.desired_val = n;
  }

  self.maxPixel = function()
  {
    return self.slit_w;
  }
  self.valAtPixel = function(p)
  {
    var r = self.min_val+(self.max_val-self.min_val)*(p/self.slit_w);
    if(r < self.min_val) r = self.min_val;
    if(r > self.max_val) r = self.max_val;
    return r;
  }
  self.pixelAtVal = function(v)
  {
    var r = ((v-self.min_val)/(self.max_val-self.min_val))*self.slit_w;
    if(r < 0) r = 0;
    if(r > self.w) r = self.w-1;
    return r;
  }

  self.tick = function()
  {
    if(self.val == self.desired_val) return;
    if(Math.abs(self.val-self.desired_val) < 0.001)
      self.val = self.desired_val;
    else
      self.val = self.val+(self.desired_val-self.val)/3;
    callback(self.val);
  }

  self.draw = function(canv)
  {
    canv.context.fillStyle = "#333333";
    canv.context.fillRect(self.slit_x,self.y+self.h/3,self.slit_w,self.h/3);
    canv.context.fillStyle = "#000000";
    var switch_x = self.slit_x+(((self.val-self.min_val)/(self.max_val-self.min_val))*self.slit_w);
    canv.context.strokeRect(switch_x-(self.w/20)+0.5,self.y+0.5,(self.w/10),self.h);
  }

  self.print = function()
  {
    console.log("("+self.x+","+self.y+","+self.w+","+self.h+") min:"+self.min_val+" max:"+self.max_val+" v:"+self.val+" "+"");
  }
}

function SmoothSliderSqrtBox(x,y,w,h,min_val,max_val,val,callback)
//register to dragger, ticker
{
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;

  self.slit_x = self.x + self.w/20;
  self.slit_w = self.w - self.w/10;

  self.min_val = min_val;
  self.max_val = max_val;
  self.desired_val = val;
  self.val = val;

  self.dragging = false;
  self.dragStart = function(evt)
  {
    evt.hit_ui = true;
    self.dragging = true;
    self.drag(evt);
  }
  self.drag = function(evt)
  {
    evt.hit_ui = true;
    if(evt.doX < self.slit_x) evt.doX = self.slit_x;
    if(evt.doX > self.slit_x+self.maxPixel()) evt.doX = self.slit_x+self.maxPixel();
    self.desired_val = self.valAtPixel(evt.doX-self.slit_x);
  }
  self.dragFinish = function()
  {
    self.dragging = false;
  }
  self.set = function(n)
  {
    self.desired_val = n;
  }

  self.maxPixel = function()
  {
    return self.slit_w;
  }
  self.valAtPixel = function(p)
  {
    var t = (p/self.slit_w)*(p/self.slit_w);
    var r = self.min_val+(self.max_val-self.min_val)*t;
    if(r < self.min_val) r = self.min_val;
    if(r > self.max_val) r = self.max_val;
    return r;
  }
  self.pixelAtVal = function(v)
  {
    var t = (v-self.min_val)/(self.max_val-self.min_val);
    var r = Math.sqrt(t)*self.slit_w;
    if(r < 0) r = 0;
    if(r > self.w) r = self.w-1;
    return r;
  }

  self.tick = function()
  {
    if(self.val == self.desired_val) return;
    if(Math.abs(self.val-self.desired_val) < 0.001)
      self.val = self.desired_val;
    else
      self.val = self.val+(self.desired_val-self.val)/3;
    callback(self.val);
  }

  self.draw = function(canv)
  {
    canv.context.fillStyle = "#333333";
    canv.context.fillRect(self.slit_x,self.y+self.h/3,self.slit_w,self.h/3);
    canv.context.fillStyle = "#000000";
    var t = (self.val-self.min_val)/(self.max_val-self.min_val);
    t = Math.sqrt(t);
    var switch_x = self.slit_x+(t*self.slit_w);
    canv.context.strokeRect(switch_x-(self.w/20)+0.5,self.y+0.5,(self.w/10),self.h);
  }

  self.print = function()
  {
    console.log("("+self.x+","+self.y+","+self.w+","+self.h+") min:"+self.min_val+" max:"+self.max_val+" v:"+self.val+" "+"");
  }
}

function BinBox(x,y,w,h,drag_start_callback,drag_callback,drag_finish_callback,pull_callback,release_callback)
//register to dragger & presser
{
  var self = this;
  self.x = x;
  self.y = y;
  self.w = w;
  self.h = h;

  self.pressed = false;
  self.dragging = false;

  self.genable = true;

  self.press = function(evt)
  {
    evt.hit_ui = true;
    self.pressed = true;
    if(self.dragging && self.genable)
    {
      self.genable = false;
      pull_callback(evt);
      drag_start_callback(evt);
    }
  }
  self.unpress = function(evt)
  {
    evt.hit_ui = true;
    self.pressed = false;
    if(ptWithinObj(self, evt.doX, evt.doY))
      release_callback();
  }

  //holds drag position in queue and forwards events
  self.dragStart = function(evt)
  {
    evt.hit_ui = true;
    self.dragging = true;
    if(self.pressed && self.genable)
    {
      self.genable = false;
      pull_callback(evt);
      drag_start_callback(evt);
    }
  }
  self.drag = function(evt)
  {
    evt.hit_ui = true;
    drag_callback(evt);
  }
  self.dragFinish = function()
  {
    self.dragging = false;
    drag_finish_callback();
    self.genable = true;
  }

  self.draw = function(canv)
  {
    if(self.pressing) canv.context.strokeStyle = "#00F400";
    else              canv.context.strokeStyle = "#000000";

    canv.context.fillStyle = "#00F400";

    canv.context.fillRect(self.x,self.y,self.w,self.h);
    canv.context.strokeRect(self.x+0.5,self.y+0.5,self.w,self.h);
  }

  self.print = function()
  {
    console.log("("+self.x+","+self.y+","+self.w+","+self.h+") p:"+self.pressing+" "+"");
  }
}

