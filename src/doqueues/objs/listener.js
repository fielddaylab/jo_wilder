var Listener = function(canv)
{
  var self = this;

  self.canv = canv;
  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.blurer;
  self.clicker;
  self.dragger;
  self.flicker;
  self.hoverer;
  self.keyer;
  self.persistenthoverer;
  self.presser;
  self.ticker;

  self.playing = false;
  self.recording = false;
  self.history = [];

  self.cur_queue;
  self.dry = 0;

  var fevt = function(evt,id)
  {
    doSetPosOnEvent(evt);
    this.id = id;
    this.doX = evt.doX;
    this.doY = evt.doY;
    this.clientX = evt.clientX;
    this.clientY = evt.clientY;
  }

  var frame = function()
  {
    this.dry = 0;
    this.events = 0;
  }

  self.flush = function()
  {
    if(self.recording)
    {
      if(!self.cur_queue)
      {
        self.dry++;
        return;
      }
      else if(self.dry)
      {
        var f = new frame();
        f.dry = self.dry;
        self.history.push(f);
        self.dry = 0;
      }
      var f = new frame();
      f.events = self.cur_queue;
      self.history.push(f);
      self.cur_queue = undefined;
    }
    if(self.playing)
    {
      if(self.blurer) self.blurer.manualFlush();
      if(self.clicker) self.clicker.manualFlush();
      if(self.dragger) self.dragger.manualFlush();
      if(self.flicker) self.flicker.manualFlush();
      if(self.hoverer) self.hoverer.manualFlush();
      if(self.keyer) self.keyer.manualFlush();
      if(self.persistenthoverer) self.persistenthoverer.manualFlush();
      if(self.presser) self.presser.manualFlush();
      if(self.ticker) self.ticker.manualFlush();

      if(!self.history.length) { self.playing = false; return; }
      var h = self.history[0];
      var e;
      if(h.dry) { h.dry--; return; }
      else if(h.events)
      {
        for(var i = 0; i < h.events.length; i++)
        {
          e = h.events[i];
          switch(e.id)
          {
            case 0:
              self.blurer.injectBlur(e);
              break;
            case 1:
              self.clicker.injectClick(e);
              break;
            case 2:
              self.dragger.injectDragStart(e);
              break;
            case 3:
              self.dragger.injectDrag(e);
              break;
            case 4:
              self.dragger.injectDragFinish(e);
              break;
            case 5:
              self.flicker.injectFlickStart(e);
              break;
            case 6:
              self.flicker.injectFlick(e);
              break;
            case 7:
              self.flicker.injectFlickFinish(e);
              break;
            case 8:
            case 9:
              if(self.hoverer)
                self.hoverer.injectHover(e);
              if(self.persistenthoverer)
                self.persistenthoverer.injectHover(e);
              break;
            case 10:
              self.keyer.injectKey(e);
              break;
            case 11:
              self.keyer.injectKeyLetter(e);
              break;
            case 12:
              self.keyer.injectKeyDown(e);
              break;
            case 13:
              self.keyer.injectKeyUp(e);
              break;
            case 14:
              self.presser.injectPress(e);
              break;
            case 15:
              self.presser.injectUnpress(e);
              break;
            case 16:
              self.ticker.injectTick(e);
              break;
          }
        }
      }
      self.history.splice(0,1);
    }
  }

  self.stop = function()
  {
    self.recording = false;
    self.playing = false;
  }
  self.record = function()
  {
    self.history = [];
    self.recording = true;
    self.playing = false;
  }
  self.play = function()
  {
    self.playing = true;
    self.recording = false;
  }

  self.print = function()
  {
    var h;
    var e;
    var output = [];
    output.push("{history:[");
      for(var i = 0; i < self.history.length; i++)
      {
        h = self.history[i];
        output.push("{dry:"+h.dry+",events:");
        if(h.events)
        {
          output.push("[");
          for(var j = 0; j < h.events.length; j++)
          {
            d = h.events[j];
            output.push("{doX:"+e.doX+",doY:"+e.doY+"}");
            if(j < h.events.length-1) output.push(",");
          }
          output.push("]");
        }
        else output.push("0");
        output.push("}");
        if(i < self.history.length-1) output.push(",");
      }
    output.push("]}");

    var out_string = output.join("");
    return out_string;
  }

  self.read = function(history)
  {
    self.history = history.history;
  }

  //blurer
  self.blur = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,0));
  };
  //clicker
  self.click = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,1));
  };
  //dragger
  self.dragStart = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,2));
  };
  self.drag = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,3));
  };
  self.dragFinish = function()
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt({},4));
  };
  //flicker
  self.flickStart = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,5));
  };
  self.flick = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,6));
  };
  self.flickFinish = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt),7);
  };
  //hoverer
  self.hover = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,8));
  };
  self.unhover = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,9));
  };
  //keyer
  self.key = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,10));
  };
  self.key_letter = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,11));
  };
  self.key_down = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,12));
  };
  self.key_up = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,13));
  };
  //persistent hoverer (same callbacks as hoverer)
  //presser
  self.press = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,14));
  };
  self.unpress = function(evt)
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,15));
  };
  //ticker
  self.tick = function()
  {
    if(!self.recording) return;
    if(!self.cur_queue) self.cur_queue = [];
    self.cur_queue.push(new fevt(evt,16));
  };
}

