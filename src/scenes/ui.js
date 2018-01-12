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
          case ACT_PERSON:   state_to = STATE_PERSON;   my_personview.consume_person(cur_act); break;
          case ACT_OBJECT:   state_to = STATE_OBJECT;   my_objectview.consume_object(cur_act); break;
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

  self.room;
  self.selected_act = 0;
  self.last_click = {x:0,y:0};
  self.nav_click = {x:0,y:0};

  self.consume_room = function(room)
  {
    self.room = room;
  }

  self.click = function(evt)
  {
    self.last_click.x = evt.doX;
    self.last_click.y = evt.doY;
    self.nav_click.x = evt.doX;
    self.nav_click.y = evt.doY;
    if(self.nav_click.x < self.room.nav_x)                 self.nav_click.x = self.room.nav_x;
    if(self.nav_click.x > self.room.nav_x+self.room.nav_w) self.nav_click.x = self.room.nav_x+self.room.nav_w;
    if(self.nav_click.y < self.room.nav_y)                 self.nav_click.y = self.room.nav_y;
    if(self.nav_click.y > self.room.nav_y+self.room.nav_h) self.nav_click.y = self.room.nav_y+self.room.nav_h;
    my_avatar.toX = self.nav_click.x-my_avatar.w/2;
    my_avatar.toY = self.nav_click.y-my_avatar.h/2;

    self.selected_act = 0;
    for(var i = 0; i < self.room.persons.length; i++)
      if(ptWithinBox(self.room.persons[i],evt.doX,evt.doY)) { self.selected_act = self.room.persons[i]; }
    for(var i = 0; i < self.room.objects.length; i++)
      if(ptWithinBox(self.room.objects[i],evt.doX,evt.doY)) { self.selected_act = self.room.objects[i]; }
    for(var i = 0; i < self.room.portholes.length; i++)
      if(ptWithinBox(self.room.portholes[i],evt.doX,evt.doY)) { self.selected_act = self.room.portholes[i]; }
    for(var i = 0; i < self.room.wildcards.length; i++)
      if(ptWithinBox(self.room.wildcards[i],evt.doX,evt.doY)) { self.selected_act = self.room.wildcards[i]; }
  }

  self.tick = function()
  {
  }

  self.draw = function()
  {
    ctx.drawImage(self.room.img,0,0,canv.width,canv.height);
    for(var i = 0; i < self.room.persons.length;   i++) drawImageBox(self.room.persons[i].img,  self.room.persons[i],ctx);
    for(var i = 0; i < self.room.objects.length;   i++) drawImageBox(self.room.objects[i].img,  self.room.objects[i],ctx);
    for(var i = 0; i < self.room.portholes.length; i++) drawImageBox(self.room.portholes[i].img,self.room.portholes[i],ctx);
    for(var i = 0; i < self.room.wildcards.length; i++) drawImageBox(self.room.wildcards[i].img,self.room.wildcards[i],ctx);

    //debug
    ctx.strokeStyle = white;
    ctx.strokeRect(self.room.nav_x,self.room.nav_y,self.room.nav_w,self.room.nav_h);
    for(var i = 0; i < self.room.persons.length;   i++) strokeBox(self.room.persons[i],ctx);
    for(var i = 0; i < self.room.objects.length;   i++) strokeBox(self.room.objects[i],ctx);
    for(var i = 0; i < self.room.portholes.length; i++) strokeBox(self.room.portholes[i],ctx);
    for(var i = 0; i < self.room.wildcards.length; i++) strokeBox(self.room.wildcards[i],ctx);
  }
};

var toolbar = function()
{
  var self = this;
  self.x = 0;
  self.y = canv.height-100;
  self.w = canv.width;
  self.h = 100;

  self.toolbar_img = GenImg("assets/toolbar.png");
  self.map_icon_img = GenImg("assets/map_icon.png");
  self.notebook_icon_img = GenImg("assets/notebook_icon.png");
  self.map      = {x:10,             y:self.y+10,w:self.h-20,h:self.h-20};
  self.notebook = {x:10+self.h-20+10,y:self.y+10,w:self.h-20,h:self.h-20};

  self.click = function(evt)
  {
    if(ptWithinBox(self.map,     evt.doX,evt.doY))
    {
      my_navigable.selected_act = 0;
      state_from = cur_state;
      state_to = STATE_MAP;
      cur_state = STATE_TRANSITION;
      state_t = 0;
    }
    if(ptWithinBox(self.notebook,evt.doX,evt.doY))
    {
      my_navigable.selected_act = 0;
      state_from = cur_state;
      state_to = STATE_NOTEBOOK;
      cur_state = STATE_TRANSITION;
      state_t = 0;
    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    ctx.drawImage(self.toolbar_img, self.x,         self.y         +yoff, self.w,         self.h);
    ctx.drawImage(self.map_icon_img,      self.map.x,     self.map.y     +yoff, self.map.w,     self.map.h);
    ctx.drawImage(self.notebook_icon_img, self.notebook.x,self.notebook.y+yoff, self.notebook.w,self.notebook.h);
    ctx.strokeRect(self.x,         self.y         +yoff, self.w,         self.h);
    ctx.strokeRect(self.map.x,     self.map.y     +yoff, self.map.w,     self.map.h);
    ctx.strokeRect(self.notebook.x,self.notebook.y+yoff, self.notebook.w,self.notebook.h);
  }

}

var overworld = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.map;

  self.consume_map = function(map)
  {
    self.map = map;
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
    ctx.drawImage(self.map.img,self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < self.map.scenes.length; i++) ctx.drawImage(self.map.scenes[i].img, self.map.scenes[i].x, self.map.scenes[i].y+yoff, self.map.scenes[i].w, self.map.scenes[i].h);

    //debug
    ctx.strokeStyle = white;
    ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
    for(var i = 0; i < self.map.scenes.length; i++) ctx.strokeRect(self.map.scenes[i].x, self.map.scenes[i].y+yoff, self.map.scenes[i].w, self.map.scenes[i].h);
  }
}

var notebook = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.img = GenImg("assets/notebook.png");
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};

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
    ctx.drawImage(self.img, self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
  }
}

var objectview = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.object;
  self.cur_view = 0;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};

  self.consume_object = function(object)
  {
    self.object = object;
    self.cur_view = 0;
  }

  self.click = function(evt)
  {
    if(ptWithinBox(self.exit_box,evt.doX,evt.doY))
    {
      state_from = cur_state;
      state_to = STATE_NAV;
      cur_state = STATE_TRANSITION;
      state_t = 0;
    }
    var view = self.object.views[self.cur_view];
    var zone;
    for(var i = 0; i < view.zones.length; i++)
    {
      zone = view.zones[i];
      if(ptWithinBox(zone,evt.doX,evt.doY))
      {
        console.log("click zone "+i);
      }
    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    var view = self.object.views[self.cur_view];
    var zone;
    ctx.drawImage(view.img, self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < view.zones.length; i++)
    {
      zone = view.zones[i];
      ctx.drawImage(zone.img, zone.x, zone.y+yoff, zone.w, zone.h);
    }

    ctx.strokeStyle = white;
    for(var i = 0; i < view.zones.length; i++)
    {
      zone = view.zones[i];
      ctx.strokeRect(zone.x, zone.y+yoff, zone.w, zone.h);
    }
    ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
  }
}

var personview = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.person;
  self.cur_option = 0;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};

  self.consume_person = function(person)
  {
    self.person = person;
    self.cur_option = 0;
  }

  self.click = function(evt)
  {
    if(ptWithinBox(self.exit_box,evt.doX,evt.doY))
    {
      state_from = cur_state;
      state_to = STATE_NAV;
      cur_state = STATE_TRANSITION;
      state_t = 0;
    }
    var option;
    for(var i = 0; i < self.person.options.length; i++)
    {
      option = self.person.options[i];
      if(ptWithinBox(option,evt.doX,evt.doY))
      {
        console.log("click option "+i);
      }
    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    var option = self.person.options[self.cur_option];
    ctx.drawImage(option.img, self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < self.person.options.length; i++)
    {
      option = self.person.options[i];
      ctx.drawImage(option.img, option.x, option.y+yoff, option.w, option.h);
    }

    ctx.strokeStyle = white;
    for(var i = 0; i < self.person.options.length; i++)
    {
      option = self.person.options[i];
      ctx.strokeRect(option.x, option.y+yoff, option.w, option.h);
    }
    ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
  }
}

