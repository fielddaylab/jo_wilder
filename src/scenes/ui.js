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
  self.cache_unlocked_persons = [];
  self.cache_unlocked_objects = [];
  self.cache_unlocked_portholes = [];
  self.cache_unlocked_wildcards = [];

  self.consume_room = function(room)
  {
    self.room = room;
    self.room.key = true;
    self.unlock_content();
    self.selected_act = 0;
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_persons = [];
    self.cache_unlocked_objects = [];
    self.cache_unlocked_portholes = [];
    self.cache_unlocked_wildcards = [];

    for(var i = 0; i < self.room.persons.length; i++)
      if(!querylocked(self.room.persons[i])) self.cache_unlocked_persons.push(self.room.persons[i]);
    for(var i = 0; i < self.room.objects.length; i++)
      if(!querylocked(self.room.objects[i])) self.cache_unlocked_objects.push(self.room.objects[i]);
    for(var i = 0; i < self.room.portholes.length; i++)
      if(!querylocked(self.room.portholes[i])) self.cache_unlocked_portholes.push(self.room.portholes[i]);
    for(var i = 0; i < self.room.wildcards.length; i++)
      if(!querylocked(self.room.wildcards[i])) self.cache_unlocked_wildcards.push(self.room.wildcards[i]);
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
    for(var i = 0; i < self.cache_unlocked_persons.length; i++)
      if(ptWithinBox(self.cache_unlocked_persons[i],evt.doX,evt.doY)) { self.selected_act = self.cache_unlocked_persons[i]; }
    for(var i = 0; i < self.cache_unlocked_objects.length; i++)
      if(ptWithinBox(self.cache_unlocked_objects[i],evt.doX,evt.doY)) { self.selected_act = self.cache_unlocked_objects[i]; }
    for(var i = 0; i < self.cache_unlocked_portholes.length; i++)
      if(ptWithinBox(self.cache_unlocked_portholes[i],evt.doX,evt.doY)) { self.selected_act = self.cache_unlocked_portholes[i]; }
    for(var i = 0; i < self.cache_unlocked_wildcards.length; i++)
      if(ptWithinBox(self.cache_unlocked_wildcards[i],evt.doX,evt.doY)) { self.selected_act = self.cache_unlocked_wildcards[i]; }
  }

  self.tick = function()
  {
  }

  self.draw = function()
  {
    ctx.drawImage(self.room.img,0,0,canv.width,canv.height);
    for(var i = 0; i < self.cache_unlocked_persons.length;   i++) drawImageBox(self.cache_unlocked_persons[i].img,  self.cache_unlocked_persons[i],ctx);
    for(var i = 0; i < self.cache_unlocked_objects.length;   i++) drawImageBox(self.cache_unlocked_objects[i].img,  self.cache_unlocked_objects[i],ctx);
    for(var i = 0; i < self.cache_unlocked_portholes.length; i++) drawImageBox(self.cache_unlocked_portholes[i].img,self.cache_unlocked_portholes[i],ctx);
    for(var i = 0; i < self.cache_unlocked_wildcards.length; i++) drawImageBox(self.cache_unlocked_wildcards[i].img,self.cache_unlocked_wildcards[i],ctx);

    //debug
    ctx.strokeStyle = white;
    ctx.strokeRect(self.room.nav_x,self.room.nav_y,self.room.nav_w,self.room.nav_h);
    for(var i = 0; i < self.cache_unlocked_persons.length;   i++) strokeBox(self.cache_unlocked_persons[i],ctx);
    for(var i = 0; i < self.cache_unlocked_objects.length;   i++) strokeBox(self.cache_unlocked_objects[i],ctx);
    for(var i = 0; i < self.cache_unlocked_portholes.length; i++) strokeBox(self.cache_unlocked_portholes[i],ctx);
    for(var i = 0; i < self.cache_unlocked_wildcards.length; i++) strokeBox(self.cache_unlocked_wildcards[i],ctx);
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
      my_overworld.unlock_content();
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

  self.map;
  self.selected_scene = 0;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.cache_unlocked_scenes = [];

  self.consume_map = function(map)
  {
    self.map = map;
    self.map.key = true;
    self.unlock_content();
    self.selected_scene = 0;
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_scenes = [];
    for(var i = 0; i < self.map.scenes.length; i++)
      if(!querylocked(self.map.scenes[i])) self.cache_unlocked_scenes.push(self.map.scenes[i]);
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
    for(var i = 0; i < self.cache_unlocked_scenes.length; i++)
    {
      if(ptWithinBox(self.cache_unlocked_scenes[i],evt.doX,evt.doY))
      {
        self.selected_scene = self.cache_unlocked_scenes[i];
        state_from = cur_state;
        state_to = STATE_NAV;
        cur_state = STATE_TRANSITION;
        state_t = 0;
      }
    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    ctx.drawImage(self.map.img,self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < self.cache_unlocked_scenes.length; i++) ctx.drawImage(self.cache_unlocked_scenes[i].img, self.cache_unlocked_scenes[i].x, self.cache_unlocked_scenes[i].y+yoff, self.cache_unlocked_scenes[i].w, self.cache_unlocked_scenes[i].h);

    //debug
    ctx.strokeStyle = white;
    ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
    for(var i = 0; i < self.cache_unlocked_scenes.length; i++) ctx.strokeRect(self.cache_unlocked_scenes[i].x, self.cache_unlocked_scenes[i].y+yoff, self.cache_unlocked_scenes[i].w, self.cache_unlocked_scenes[i].h);
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
  self.cur_view_i = 0;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.prev_box = {x:10,             y:canv.height/2-50, w:90, h:90};
  self.next_box = {x:canv.width-100, y:canv.height/2-50, w:90, h:90};
  self.cache_unlocked_views = [];

  self.consume_object = function(object)
  {
    self.object = object;
    self.object.key = true;
    self.unlock_content();
    self.cur_view = self.cache_unlocked_views[0];
    for(var i = 1; i < self.cache_unlocked_views.length; i++) if(self.cache_unlocked_views[i].primary) self.cur_view_i = i;
    self.cur_view = self.cache_unlocked_views[self.cur_view_i];
    self.cur_view.key = true;
    self.unlock_content(); //unlock after viewing "cur"
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_views = [];
    for(var i = 0; i < self.object.views.length; i++)
      if(!querylocked(self.object.views[i])) self.cache_unlocked_views.push(self.object.views[i]);

    //re-set self.cur_view_i, ensures cur_view unlocked
    self.cur_view_i = 0;
    for(var i = 1; i < self.cache_unlocked_views.length; i++) if(self.cur_view == self.cache_unlocked_views[i]) self.cur_view_i = i;
    self.cur_view = self.cache_unlocked_views[self.cur_view_i];
  }

  self.click = function(evt)
  {
    if(ptWithinBox(self.exit_box,evt.doX,evt.doY))
    {
      state_from = cur_state;
      state_to = STATE_NAV;
      cur_state = STATE_TRANSITION;
      state_t = 0;
      my_navigable.unlock_content();
    }
    if(ptWithinBox(self.prev_box,evt.doX,evt.doY))
    {
      if(self.cur_view_i == 0) return;
      self.cur_view = self.cache_unlocked_views[self.cur_view_i-1];
      self.cur_view.key = true;
      self.unlock_content();
    }
    if(ptWithinBox(self.next_box,evt.doX,evt.doY))
    {
      if(self.cur_view_i == self.cache_unlocked_views.length-1) return;
      self.cur_view = self.cache_unlocked_views[self.cur_view_i+1];
      self.cur_view.key = true;
      self.unlock_content();
    }
    var zone;
    for(var i = 0; i < self.cur_view.zones.length; i++)
    {
      zone = self.cur_view.zones[i];
      if(ptWithinBox(zone,evt.doX,evt.doY))
        zone.key = true;
    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    var zone;
    ctx.drawImage(self.cur_view.img, self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < self.cur_view.zones.length; i++)
    {
      zone = self.cur_view.zones[i];
      //ctx.drawImage(zone.img, zone.x, zone.y+yoff, zone.w, zone.h);
    }

    //debug
    ctx.strokeStyle = white;
    for(var i = 0; i < self.cur_view.zones.length; i++)
    {
      zone = self.cur_view.zones[i];
      ctx.strokeRect(zone.x, zone.y+yoff, zone.w, zone.h);
    }
    ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
    if(self.cur_view_i > 0) ctx.strokeRect(self.prev_box.x, self.prev_box.y+yoff, self.prev_box.w, self.prev_box.h);
    if(self.cur_view_i < self.cache_unlocked_views.length-1) ctx.strokeRect(self.next_box.x, self.next_box.y+yoff, self.next_box.w, self.next_box.h);
  }
}

var personview = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;
  self.option_y = canv.height/2;
  self.option_h = 20;

  self.person;
  self.cur_option = 0;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.cache_unlocked_options = [];
  self.cache_unlocked_children = [];

  self.consume_person = function(person)
  {
    self.person = person;
    self.person.key = true;
    self.unlock_content();
    self.cur_option = self.cache_unlocked_options[0];
    for(var i = 1; i < self.cache_unlocked_options.length; i++) if(self.cache_unlocked_options[i].primary) self.cur_option = self.cache_unlocked_options[i];
    self.unlock_children();
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_options = [];
    for(var i = 0; i < self.person.options.length; i++)
      if(!querylocked(self.person.options[i])) self.cache_unlocked_options.push(self.person.options[i]);
  }
  self.unlock_children = function()
  {
    self.cache_unlocked_children = [];
    for(var i = 0; i < self.cache_unlocked_options.length; i++)
      if(self.cache_unlocked_options[i].parent == self.cur_option.fqid) self.cache_unlocked_children.push(self.cache_unlocked_options[i]);
  }

  self.click = function(evt)
  {
    if(ptWithinBox(self.exit_box,evt.doX,evt.doY))
    {
      state_from = cur_state;
      state_to = STATE_NAV;
      cur_state = STATE_TRANSITION;
      state_t = 0;
      my_navigable.unlock_content();
    }
    var option;
    var y = self.option_y;
    for(var i = 0; i < self.cache_unlocked_children.length; i++)
    {
      option = self.cache_unlocked_children[i];
      if(ptWithin(self.x,y,self.w,self.option_h,evt.doX,evt.doY))
      {
        option.key = true;
        self.unlock_content();
        self.cur_option = option;
        self.unlock_children();
        break;
      }
      y += self.option_h;
    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    var option = self.cur_option;
    ctx.drawImage(option.img, self.x, self.y+yoff, self.w, self.h);
    var y = self.option_y;
    for(var i = 0; i < self.cache_unlocked_children.length; i++)
    {
      option = self.cache_unlocked_children[i];
      ctx.drawImage(option.img, self.x, y+yoff, self.w, self.option_h);
      y += self.option_h;
    }

    //debug
    ctx.strokeStyle = white;
    y = self.option_y;
    for(var i = 0; i < self.cache_unlocked_children.length; i++)
    {
      option = self.cache_unlocked_children[i];
      ctx.strokeRect(self.x, y+yoff, self.w, self.option_h);
      y += self.option_h;
    }
    ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
  }
}

