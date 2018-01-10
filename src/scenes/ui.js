var avatar = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 100;
  self.h = 100;

  self.toX = self.x;
  self.toY = self.y;

  self.state = AVATAR_IDLE;
  self.anim = new animation();
  self.anim.frame_delay = 10;
  self.anim.src = [
    GenImg("assets/avatar/anim_idle_0.png"),
    GenImg("assets/avatar/anim_idle_1.png"),
    GenImg("assets/avatar/anim_idle_2.png"),
    GenImg("assets/avatar/anim_walk_0.png"),
    GenImg("assets/avatar/anim_walk_1.png"),
    GenImg("assets/avatar/anim_walk_2.png"),
    GenImg("assets/avatar/anim_walk_3.png"),
    GenImg("assets/avatar/anim_act_0.png"),
    GenImg("assets/avatar/anim_act_1.png"),
    GenImg("assets/avatar/anim_act_2.png"),
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
      break;
      case ANIM_WALK:
      break;
      case ANIM_ACT:
      {
        cur_act = my_navigable.selected_act;
        state_from = cur_state;
        cur_state = STATE_TRANSITION;
        switch(cur_act.act)
        {
          case ACT_PERSON:   state_to = STATE_PERSON;   break;
          case ACT_OBJECT:   state_to = STATE_OBJECT;   break;
          case ACT_PORTHOLE: state_to = STATE_NAV;      break;
          case ACT_WILDCARD: state_to = STATE_WILDCARD; break;
        }
        state_t = 0;
        my_navigable.selected_act = 0;
      }
      break;
      default:
      break;
    }

    if(self.anim.anim_queue.length) //has queue
    {
      self.anim.cur_anim = self.anim.anim_queue[0];
      self.anim.anim_queue.splice(0,1);
      self.anim.cur_anim_i = 0;
    }
    else //no queue
    {
      switch(self.anim.cur_anim)
      {
        case ANIM_IDLE:
          self.anim.cur_anim_i = 0; //repeat
        break;
        case ANIM_WALK:
          if(self.state != AVATAR_WALK) self.anim.cur_anim = ANIM_IDLE;
          self.anim.cur_anim_i = 0; //idle
        break;
        case ANIM_ACT:
          self.anim.cur_anim = ANIM_IDLE;
          self.anim.cur_anim_i = 0;
        break;
        default:
          self.anim.cur_anim = ANIM_IDLE; //revert
          self.anim.cur_anim_i = 0;
        break;
      }
    }
  }

  self.consume_room = function(room)
  {
    self.x = room.start_x-self.w/2;
    self.y = room.start_y-self.h/2;
    if(self.x+self.w/2 < room.nav_x)            self.x = room.nav_x           -self.w/2;
    if(self.x+self.w/2 > room.nav_x+room.nav_w) self.x = room.nav_x+room.nav_w-self.w/2;
    if(self.y+self.h/2 < room.nav_y)            self.y = room.nav_y           -self.h/2;
    if(self.y+self.h/2 > room.nav_y+room.nav_h) self.y = room.nav_y+room.nav_h-self.h/2;
    self.toX = self.x;
    self.toY = self.y;
  }

  self.click = function(evt)
  {

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
      if(self.state != AVATAR_WALK)
        self.anim.swapAnim(ANIM_WALK);
      self.state = AVATAR_WALK;
    }
    else if(d <= act_dist)
    {
      if(my_navigable.selected_act)
      {
        if(my_avatar.state != AVATAR_ACT)
        {
          my_avatar.state = AVATAR_ACT;
          my_avatar.anim.injectAnim(ANIM_ACT);
        }
      }
      else
      {
        my_avatar.state = AVATAR_IDLE;
        my_avatar.anim.enqueueAnim(ANIM_IDLE);
      }
    }

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
    self.nav_box.x = room.nav_x;
    self.nav_box.y = room.nav_y;
    self.nav_box.w = room.nav_w;
    self.nav_box.h = room.nav_h;

    for(var i = 0; i < room.persons.length;   i++) self.act_boxes.push(room.persons[i]);
    for(var i = 0; i < room.objects.length;   i++) self.act_boxes.push(room.objects[i]);
    for(var i = 0; i < room.portholes.length; i++) self.act_boxes.push(room.portholes[i]);
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

var toolbar = function()
{
  var self = this;
  self.x = 0;
  self.y = canv.height-100;
  self.w = canv.width;
  self.h = 100;

  self.map      = {x:10,             y:self.y+10,w:self.h-20,h:self.h-20};
  self.notebook = {x:10+self.h-20+10,y:self.y+10,w:self.h-20,h:self.h-20};

  self.click = function(evt)
  {
    if(ptWithinBox(self.map,     evt.doX,evt.doY))
    {
      state_from = cur_state;
      state_to = STATE_MAP;
      cur_state = STATE_TRANSITION;
      state_t = 0;
    }
    if(ptWithinBox(self.notebook,evt.doX,evt.doY))
    {

    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    ctx.strokeRect(self.x,         self.y         +yoff, self.w,         self.h);
    ctx.strokeRect(self.map.x,     self.map.y     +yoff, self.map.w,     self.map.h);
    ctx.strokeRect(self.notebook.x,self.notebook.y+yoff, self.notebook.w,self.notebook.h);
  }

}

var overworld = function()
{
  var self = this;

  self.x = 10;
  self.y = 10;
  self.w = canv.width-20;
  self.h = canv.height-20;

  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.scene_boxes = [];

  self.consume_map = function(map)
  {
    self.scene_boxes = [];
    for(var i = 0; i < map.scenes.length; i++) self.scene_boxes.push(map.scenes[i]);
  }

  self.shouldClick = function(evt) { return true; }
  self.click = function(evt)
  {
    if(ptWithinBox(self.exit_box,evt.doX,evt.doY))
    {
      state_from = cur_state;
      state_to = STATE_NAV;
      cur_state = STATE_TRANSITION;
      state_t = 0;
    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
    for(var i = 0; i < self.scene_boxes.length; i++) ctx.strokeRect(self.scene_boxes[i].x, self.scene_boxes[i].y+yoff, self.scene_boxes[i].w, self.scene_boxes[i].h);
  }
}

var notebook = function()
{
  var self = this;

  self.click = function(evt)
  {

  }

  self.tick = function()
  {

  }

  self.draw = function()
  {

  }
}

