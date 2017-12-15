var TestScene = function(game, stage)
{
  var self = this;

  var canv;
  var canvas;
  var ctx;
  self.resize = function(stage)
  {
    canv = stage.canv;
    canvas = canv.canvas;
    ctx = canv.context;
  }
  self.resize(stage);

  var assetter;
  var dbugger; //'debugger' is a keyword... (why.)
  var drawer;
  var ticker;
  var clicker;
  var blurer;
  var hoverer;
  var dragger;
  var flicker;
  var presser;
  var keyer;
  var particler;
  var placer;

  var spacer = new (function()
  {
    var self = this;

    self.cur_x = 0;
    self.cur_y = 0;
    self.x_pad = 10;
    self.y_pad = 10;
    self.space_h = function(o)
    {
      self.cur_x += self.x_pad;
      o.x = self.cur_x;
      o.y = self.cur_y;
      self.cur_x += o.w;
    },
    self.space_v = function(o)
    {
      self.cur_y += self.y_pad;
      o.x = self.cur_x;
      o.y = self.cur_y;
      self.cur_y += o.h;
    },
    self.pad_x = function()
    {
      self.cur_x += self.x_pad;
    },
    self.pad_y = function()
    {
      self.cur_y += self.y_pad;
    }
  })();
  spacer.pad_x();

  var clicktest = new (function()
  {
    var self = this;

    self.x = 0;
    self.y = 0;
    self.w = 20;
    self.h = 20;
    self.click = function(evt){dbugger.log("clicktest: click "+evt.doX+","+evt.doY);},
    self.draw = function(canv){canv.context.strokeStyle="#00FF00";canv.context.strokeRect(self.x,self.y,self.w,self.h);}
  })();
  spacer.space_v(clicktest);

  var hovertest = new (function()
  {
    var self = this;

    self.x = 0;
    self.y = 0;
    self.w = 20;
    self.h = 20;
    self.hover = function(evt){dbugger.log("hovertest: hover "+evt.doX+","+evt.doY);},
    self.unhover = function(evt){dbugger.log("hovertest: unhover "+evt.doX+","+evt.doY);},
    self.draw = function(canv){canv.context.strokeStyle="#00FF00";canv.context.strokeRect(self.x,self.y,self.w,self.h);}
  })();
  spacer.space_v(hovertest);

  var dragtest = new (function()
  {
    var self = this;

    self.x = 0;
    self.y = 0;
    self.w = 20;
    self.h = 20;
    self.dragStart = function(evt){dbugger.log("dragtest: start "+evt.doX+","+evt.doY);},
    self.drag = function(evt){dbugger.log("dragtest: drag "+evt.doX+","+evt.doY);},
    self.dragFinish = function(evt){dbugger.log("dragtest: end "+evt.doX+","+evt.doY);},
    self.draw = function(canv){canv.context.strokeStyle="#00FF00";canv.context.strokeRect(self.x,self.y,self.w,self.h);}
  })();
  spacer.space_v(dragtest);

  var flicktest = new (function()
  {
    var self = this;

    self.x = 0;
    self.y = 0;
    self.w = 20;
    self.h = 20;
    self.r = 20;
    self.flickStart = function(evt){dbugger.log("flicktest: start "+evt.doX+","+evt.doY);},
    self.flicking = function(evt){dbugger.log("flicktest: flicking "+evt.doX+","+evt.doY);},
    self.flick = function(evt){dbugger.log("flicktest: flick "+evt.doX+","+evt.doY);},
    self.draw = function(canv){canv.context.strokeStyle="#00FF00";canv.context.strokeRect(self.x,self.y,self.w,self.h);}
  })();
  spacer.space_v(flicktest);

  var presstest = new (function()
  {
    var self = this;

    self.x = 0;
    self.y = 0;
    self.w = 20;
    self.h = 20;
    self.press = function(evt){dbugger.log("presstest: press "+evt.doX+","+evt.doY);},
    self.unpress = function(evt){dbugger.log("unpresstest: unpress "+evt.doX+","+evt.doY);},
    self.draw = function(canv){canv.context.strokeStyle="#00FF00";canv.context.strokeRect(self.x,self.y,self.w,self.h);}
  })();
  spacer.space_v(presstest);

  var numboxtest = new NumberBox(0,0,20,20,1,0.1,function(n){});
  spacer.space_v(numboxtest);

  var sliderboxtest = new SliderBox(0,10,100,20,0,100,50,function(n){});
  spacer.space_v(sliderboxtest);
  sliderboxtest.slit_x = Math.round(sliderboxtest.x + sliderboxtest.w/20);
  sliderboxtest.slit_w = Math.round(sliderboxtest.w - sliderboxtest.w/10);

  var particle = function()
  {
    var self = this;
    self.i = 0;
    self.x = 0;
    self.y = 0;
    self.vx = 0;
    self.vy = 0;
    self.tick = function()
    {
      self.i++;
      self.x += self.vx;
      self.y += self.vy;
      self.vy += 0.1;
      return (self.i < 100);
    };
    self.draw = function(canv){canv.context.strokeStyle="#00FF00";canv.context.strokeRect(self.x,self.y,2,2);};
  };
  var fountain = new (function()
  {
    var self = this;
    self.particler; //should get injected before added
    self.x = 200;
    self.y = 150;
    self.w = 20;
    self.h = 20;
    self.i = 0;
    self.tick = function()
    {
      for(var j = 0; j < 10; j++)
      {
        var p = new particle();
        p.x = self.x;
        p.y = self.y;
        p.vx = (Math.random()-0.5)*2;
        p.vy = Math.random()*-5;
        self.particler.register(p);
      }
      return true;
    };
    self.draw = function(canv){};
  })();


  self.ready = function()
  {
    assetter = new Assetter({});
    dbugger = new Debugger({source:document.getElementById("debug_div")});
    ticker = new Ticker({});
    drawer = new Drawer({source:canv});

    clicker = new Clicker({source:canv.canvas});
    clicker.register(clicktest);
    drawer.register(clicktest);

    hoverer = new Hoverer({source:canv.canvas});
    hoverer.register(hovertest);
    drawer.register(hovertest);

    dragger = new Dragger({source:canv.canvas});
    dragger.register(dragtest);
    drawer.register(dragtest);

    flicker = new Flicker({source:canv.canvas});
    flicker.register(flicktest);
    drawer.register(flicktest);

    presser = new Presser({source:canv.canvas});
    presser.register(presstest);
    drawer.register(presstest);

    keyer = new Keyer({source:canv.canvas});
    blurer = new Blurer({source:canv.canvas});
    keyer.register(numboxtest);
    blurer.register(numboxtest);
    dragger.register(numboxtest);
    drawer.register(numboxtest);

    dragger.register(sliderboxtest);
    drawer.register(sliderboxtest);

    particler = new Particler({});
    fountain.particler = particler; //inject
    particler.register(fountain);
    drawer.register(particler);
    ticker.register(particler);
    setTimeout(function(){ ticker.unregister(particler); }, 10000);

    placer = new Placer({}, 100,100,100,100, canv);
    drawer.register(placer);
    dragger.register(placer);
    clicker.register(placer);
  };

  self.tick = function()
  {
    clicker.flush();
    blurer.flush();
    hoverer.flush();
    dragger.flush();
    flicker.flush();
    presser.flush();
    ticker.flush();
    keyer.flush();
  };

  self.draw = function()
  {
    drawer.flush();
  };

  self.cleanup = function()
  {
    assetter.detach();
    dbugger.detach();
    ticker.detach();
    drawer.detach();
    clicker.detach();
    blurer.detach();
    hoverer.detach();
    dragger.detach();
    flicker.detach();
    presser.detach();
    particler.detach();

    assetter.clear();
    dbugger.clear();
    ticker.clear();
    drawer.clear();
    clicker.clear();
    blurer.clear();
    hoverer.clear();
    dragger.clear();
    flicker.clear();
    presser.clear();
    particler.clear();
  };
};

