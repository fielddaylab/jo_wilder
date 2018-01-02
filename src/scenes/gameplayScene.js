var GamePlayScene = function(game, stage)
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

  var ENUM;

  ENUM = 0;
  var ANIM_NULL = ENUM; ENUM++;
  var ANIM_IDLE = ENUM; ENUM++;
  var ANIM_WALK = ENUM; ENUM++;

  ENUM = 0;
  var STATE_NULL = ENUM; ENUM++;
  var STATE_IDLE = ENUM; ENUM++;
  var STATE_WALK = ENUM; ENUM++;

  var clicker;

  var person = function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 100;
    self.h = 100;

    self.toX = self.x;
    self.toY = self.y;

    self.state = STATE_IDLE;
    self.anim = new animation();
    self.anim.frame_delay = 10;
    self.anim.src = [
      GenImg("assets/anim_idle_0.png"),
      GenImg("assets/anim_idle_1.png"),
      GenImg("assets/anim_idle_2.png"),
      GenImg("assets/anim_walk_0.png"),
      GenImg("assets/anim_walk_1.png"),
      GenImg("assets/anim_walk_2.png"),
      GenImg("assets/anim_walk_3.png"),
    ];
    self.anim.animations[ANIM_NULL] = []; for(var i = 0; i <= 0; i++) self.anim.animations[ANIM_NULL].push(i);
    self.anim.animations[ANIM_IDLE] = []; for(var i = 0; i <= 2; i++) self.anim.animations[ANIM_IDLE].push(i);
    self.anim.animations[ANIM_WALK] = []; for(var i = 3; i <= 6; i++) self.anim.animations[ANIM_WALK].push(i);
    self.anim.transition = function()
    {
      switch(self.anim.cur_anim)
      {
        case ANIM_IDLE:
          self.anim.cur_anim_i = 0; //repeat
        break;
        case ANIM_WALK:
          if(self.state != STATE_WALK) self.anim.cur_anim = ANIM_IDLE;
          self.anim.cur_anim_i = 0; //idle
        break;
        default:
          self.anim.cur_anim = ANIM_IDLE; //revert
          self.anim.cur_anim_i = 0;
        break;
      }
    }

    self.tick = function()
    {
      var dx = self.toX-self.x;
      var dy = self.toY-self.y;
      if(dx >  2) { dx =  2; self.anim.flip = 0; }
      if(dx < -2) { dx = -2; self.anim.flip = 1; }
      if(dy >  2) dy =  2;
      if(dy < -2) dy = -2;

      if(abs(dx)+abs(dy) > 1)
      {
        if(self.state != STATE_WALK)
          self.anim.swapAnim(STATE_WALK);
        self.state = STATE_WALK;
      }
      else
        self.state = STATE_IDLE;

      self.x += dx;
      self.y += dy;

      self.anim.tick();
    }

    self.draw = function()
    {
      self.anim.x = self.x;
      self.anim.y = self.y;
      self.anim.w = self.w;
      self.anim.h = self.h;
      self.anim.draw(ctx);
    }
  };

  var my_person;
  var canv_clicker;

  self.ready = function()
  {
    clicker = new Clicker({source:canvas});
    my_person = new person();
    canv_clicker = {x:0,y:0,w:canv.width,h:canv.height,click:function(evt){ my_person.toX = evt.doX-my_person.w/2; my_person.toY = evt.doY-my_person.h/2; }};
  };

  self.tick = function()
  {
    clicker.filter(canv_clicker);
    clicker.flush();
    my_person.tick();
  };

  self.draw = function()
  {
    my_person.draw();
  };

  self.cleanup = function()
  {
  };

};

