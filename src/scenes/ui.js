var avatar = function()
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
    GenImg("assets/anim_act_0.png"),
    GenImg("assets/anim_act_1.png"),
    GenImg("assets/anim_act_2.png"),
  ];
  self.anim.animations[ANIM_NULL] = []; for(var i = 0; i <= 0; i++) self.anim.animations[ANIM_NULL].push(i);
  self.anim.animations[ANIM_IDLE] = []; for(var i = 0; i <= 2; i++) self.anim.animations[ANIM_IDLE].push(i);
  self.anim.animations[ANIM_WALK] = []; for(var i = 3; i <= 6; i++) self.anim.animations[ANIM_WALK].push(i);
  self.anim.animations[ANIM_ACT]  = []; for(var i = 7; i <= 9; i++) self.anim.animations[ANIM_ACT].push(i);
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
      case ANIM_ACT:
        self.anim.cur_anim = ANIM_IDLE;
        self.anim.cur_anim_i = 0;
      default:
        self.anim.cur_anim = ANIM_IDLE; //revert
        self.anim.cur_anim_i = 0;
      break;
    }
  }

  self.tick = function()
  {
    var speed = 2;
    var act_dist = 10;

    var dx = self.toX-self.x;
    var dy = self.toY-self.y;
    var d = dx*dx+dy*dy;
    if(dx >  speed) { dx =  speed; self.anim.flip = 0; }
    if(dx < -speed) { dx = -speed; self.anim.flip = 1; }
    if(dy >  speed) { dy =  speed;                     }
    if(dy < -speed) { dy = -speed;                     }

    if(d > act_dist)
    {
      if(self.state != STATE_WALK)
        self.anim.swapAnim(STATE_WALK);
      self.state = STATE_WALK;
    }
    else if(my_navigable.selected_act) // < act_dist
    {
      my_avatar.state = STATE_ACT;
      my_avatar.anim.injectAnim(ANIM_ACT);
      my_navigable.selected_act = 0;
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

var navigable = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.nav_box = {x:0,y:0,w:0,h:0};
  self.act_boxes = [];
  self.selected_act = 0;
  self.last_click = {x:0,y:0};
  self.nav_click = {x:0,y:0};

  self.consume_room = function(room)
  {
    self.nav_box.x = room.x;
    self.nav_box.y = room.y;
    self.nav_box.w = room.w;
    self.nav_box.h = room.h;

    for(var i = 0; i < room.persons.length;   i++) self.act_boxes.push(room.persons[i]);
    for(var i = 0; i < room.objects.length;   i++) self.act_boxes.push(room.objects[i]);
    for(var i = 0; i < room.triggers.length;  i++) self.act_boxes.push(room.triggers[i]);
    for(var i = 0; i < room.wildcards.length; i++) self.act_boxes.push(room.wildcards[i]);
  }

  self.click = function(evt)
  {
    self.last_click.x = evt.doX;
    self.last_click.y = evt.doY;
    self.nav_click.x = evt.doX;
    self.nav_click.y = evt.doY;
    if(self.nav_click.x < self.nav_box.x)                self.nav_click.x = self.nav_box.x;
    if(self.nav_click.x > self.nav_box.x+self.nav_box.w) self.nav_click.x = self.nav_box.x+self.nav_box.w;
    if(self.nav_click.y < self.nav_box.y)                self.nav_click.y = self.nav_box.y;
    if(self.nav_click.y > self.nav_box.y+self.nav_box.h) self.nav_click.y = self.nav_box.y+self.nav_box.h;
    my_avatar.toX = self.nav_click.x-my_avatar.w/2;
    my_avatar.toY = self.nav_click.y-my_avatar.h/2;

    self.selected_act = 0;
    for(var i = 0; i < self.act_boxes.length; i++)
      if(ptWithinBox(self.act_boxes[i],evt.doX,evt.doY)) { self.selected_act = self.act_boxes[i]; }
  }

  self.tick = function()
  {
  }

  self.draw = function()
  {
    strokeBox(self.nav_box,ctx);
    for(var i = 0; i < self.act_boxes.length; i++) strokeBox(self.act_boxes[i],ctx);
  }
};

