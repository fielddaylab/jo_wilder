var avatar = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 85;
  self.h = 200;

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
    var speed = walk_speed;
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

    if(DEBUG)
    {
      ctx.strokeStyle = white;
      ctx.strokeRect(self.room.nav_x,self.room.nav_y,self.room.nav_w,self.room.nav_h);
      for(var i = 0; i < self.cache_unlocked_persons.length;   i++) strokeBox(self.cache_unlocked_persons[i],ctx);
      for(var i = 0; i < self.cache_unlocked_objects.length;   i++) strokeBox(self.cache_unlocked_objects[i],ctx);
      for(var i = 0; i < self.cache_unlocked_portholes.length; i++) strokeBox(self.cache_unlocked_portholes[i],ctx);
      for(var i = 0; i < self.cache_unlocked_wildcards.length; i++) strokeBox(self.cache_unlocked_wildcards[i],ctx);
    }
  }
};

var toolbar = function()
{
  var self = this;
  self.x = 0;
  self.y = canv.height-90;
  self.w = canv.width;
  self.h = 100;

  self.toolbar_img = GenImg("assets/toolbar.png");
  self.map_icon_img = GenImg("assets/map_icon.png");
  self.notebook_icon_img = GenImg("assets/notebook_icon.png");
  self.map      = {x:20,             y:self.y+15,w:self.h-40,h:self.h-40};
  self.notebook = {x:10+self.h-20+20,y:self.y+12,w:self.h-55,h:self.h-35};

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

    if(DEBUG)
    {
      ctx.strokeRect(self.x,         self.y         +yoff, self.w,         self.h);
      ctx.strokeRect(self.map.x,     self.map.y     +yoff, self.map.w,     self.map.h);
      ctx.strokeRect(self.notebook.x,self.notebook.y+yoff, self.notebook.w,self.notebook.h);
    }
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
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

    if(DEBUG)
    {
      ctx.strokeStyle = white;
      ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
      ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
      for(var i = 0; i < self.cache_unlocked_scenes.length; i++) ctx.strokeRect(self.cache_unlocked_scenes[i].x, self.cache_unlocked_scenes[i].y+yoff, self.cache_unlocked_scenes[i].w, self.cache_unlocked_scenes[i].h);
    }
  }
}

var notebook = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.entrys;
  self.img = GenImg("assets/notebook.png");
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.cache_unlocked_entrys = [];

  self.consume_level = function(level)
  {
    self.entrys = level.entrys;
    self.unlock_content();
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_entrys = [];
    self.cur_y = 0;
    for(var i = 0; i < self.entrys.length; i++)
      if(!querylocked(self.entrys[i]))
      {
        self.entrys[i].y = self.cur_y;
        self.cache_unlocked_entrys.push(self.entrys[i]);
        self.cur_y += self.entrys[i].h;
      }
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
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    ctx.drawImage(self.img, self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

    var entry;
    for(var i = 0; i < self.cache_unlocked_entrys.length; i++)
    {
      entry = self.cache_unlocked_entrys[i];
      ctx.drawImage(entry.img,self.x+100,self.y+yoff+entry.y+200,entry.w,entry.h);
    }

    if(DEBUG)
    {
      ctx.strokeStyle = white;
      ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
      ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
    }
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
  self.cache_unlocked_views = [];
  self.cache_unlocked_zones = [];

  self.consume_object = function(object)
  {
    self.object = object;
    self.object.key = true;
    self.unlock_content();
    self.cur_view_i = 0;
    for(var i = 1; i < self.cache_unlocked_views.length; i++) if(self.cache_unlocked_views[i].primary) self.cur_view_i = i;
    self.cur_view = self.cache_unlocked_views[self.cur_view_i];
    self.cur_view.key = true;
    self.unlock_content();
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

    self.unlock_zones();
  }
  self.unlock_zones = function()
  {
    self.cache_unlocked_zones = [];
    for(var i = 0; i < self.cur_view.zones.length; i++)
      if(!querylocked(self.cur_view.zones[i])) self.cache_unlocked_zones.push(self.cur_view.zones[i]);
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
    var zone;
    for(var i = 0; i < self.cache_unlocked_zones.length; i++)
    {
      zone = self.cache_unlocked_zones[i];
      if(ptWithinBox(zone,evt.doX,evt.doY))
      {
        zone.key = true;
        self.cur_view = find(zone.target_view);
        self.cur_view.key = true;
        self.unlock_content();
        return;
      }
    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    var zone;
    ctx.drawImage(self.cur_view.img, self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < self.cache_unlocked_zones.length; i++)
    {
      zone = self.cache_unlocked_zones[i];
      ctx.strokeStyle = white;
      ctx.strokeRect(zone.x, zone.y+yoff, zone.w, zone.h);
      //ctx.drawImage(zone.img, zone.x, zone.y+yoff, zone.w, zone.h);
    }
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

    if(DEBUG)
    {
      ctx.strokeStyle = white;
      for(var i = 0; i < self.cache_unlocked_zones.length; i++)
      {
        zone = self.cache_unlocked_zones[i];
        ctx.strokeRect(zone.x, zone.y+yoff, zone.w, zone.h);
      }
      ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
      ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
    }
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
  self.cur_speak = 0;
  self.cur_speak_i = 0;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.cache_unlocked_speaks = [];
  self.cache_unlocked_options_static = [];
  self.cache_unlocked_options_dynamic = [];

  self.consume_person = function(person)
  {
    self.person = person;
    self.person.key = true;
    self.unlock_content();
    self.cur_speak_i = 0;
    for(var i = 1; i < self.cache_unlocked_speaks.length; i++) if(self.cache_unlocked_speaks[i].primary) self.cur_speak_i = i;
    self.cur_speak = self.cache_unlocked_speaks[self.cur_speak_i];
    self.cur_speak.key = true;
    self.unlock_content();
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_speaks = [];
    for(var i = 0; i < self.person.speaks.length; i++)
      if(!querylocked(self.person.speaks[i])) self.cache_unlocked_speaks.push(self.person.speaks[i]);

    //re-set self.cur_speak_i, ensures cur_speak unlocked
    self.cur_speak_i = 0;
    for(var i = 1; i < self.cache_unlocked_speaks.length; i++) if(self.cur_speak == self.cache_unlocked_speaks[i]) self.cur_speak_i = i;
    self.cur_speak = self.cache_unlocked_speaks[self.cur_speak_i];

    self.unlock_options();
  }
  self.unlock_options = function()
  {
    self.cache_unlocked_options_static = [];
    self.cache_unlocked_options_dynamic = [];
    for(var i = 0; i < self.cur_speak.options.length; i++)
    {
      if(!querylocked(self.cur_speak.options[i]))
      {
        if(self.cur_speak.options[i].static) self.cache_unlocked_options_static.push( self.cur_speak.options[i]);
        else                                 self.cache_unlocked_options_dynamic.push(self.cur_speak.options[i]);
      }
    }
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
    var speak = self.cur_speak;
    var option;
    var clicked_option;
    var oyoff;
    for(var i = 0; i < self.cache_unlocked_options_static.length; i++)
    {
      oyoff = 0;
      option = self.cache_unlocked_options_static[i];
      for(var j = 0; j < option.qtext.length; j++)
      {
        if(ptWithin(option.x,option.y+oyoff,option.w,option.h,evt.doX,evt.doY))
          clicked_option = option;
        oyoff += option.h;
      }
    }
    oyoff = 0;
    for(var i = 0; i < self.cache_unlocked_options_dynamic.length; i++)
    {
      option = self.cache_unlocked_options_dynamic[i];
      for(var j = 0; j < option.qtext.length; j++)
      {
        if(ptWithin(speak.options_x,speak.options_y+oyoff,speak.options_w,speak.options_h,evt.doX,evt.doY))
          clicked_option = option;
        oyoff += speak.options_h;
      }
    }
    if(clicked_option)
    {
      option = clicked_option;
      option.key = true;
      speak = find(option.target_speak);
      if(!speak)
      {
        //exits
        state_from = cur_state;
        state_to = STATE_NAV;
        cur_state = STATE_TRANSITION;
        state_t = 0;
        my_navigable.unlock_content();
      }
      else
      {
        self.cur_speak = speak;
        self.cur_speak.key = true;
        self.unlock_content();
      }
    }
  }

  self.tick = function()
  {

  }

  self.draw = function(yoff)
  {
    var speak = self.cur_speak;
    var oyoff;
    ctx.drawImage(speak.img, 0, yoff, self.w, self.h);
    ctx.fillStyle = "#4c4c4c";
    ctx.font = "20px Helvetica";
    oyoff = 0;
    for(var j = 0; j < speak.atext.length; j++)
    {
      ctx.fillText(speak.atext[j],speak.x,speak.y+yoff+oyoff+speak.h);
      oyoff += speak.h;
    }

    var option;
    //static
    for(var i = 0; i < self.cache_unlocked_options_static.length; i++)
    {
      oyoff = 0;
      option = self.cache_unlocked_options_static[i];
      for(var j = 0; j < option.qtext.length; j++)
      {
        ctx.fillText(option.qtext[j],option.x,option.y+yoff+oyoff+option.h);
        oyoff += option.h;
      }
    }
    //dynamic
    oyoff = 0;
    for(var i = 0; i < self.cache_unlocked_options_dynamic.length; i++)
    {
      option = self.cache_unlocked_options_dynamic[i];
      for(var j = 0; j < option.qtext.length; j++)
      {
        ctx.fillText(option.qtext[j],speak.options_x,speak.options_y+yoff+oyoff+speak.options_h);
        oyoff += speak.options_h;
      }
    }
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

    if(DEBUG)
    {
      ctx.strokeStyle = white;
      speak = self.cur_speak;
      oyoff = 0;
      for(var j = 0; j < speak.atext.length; j++)
      {
        ctx.strokeRect(speak.x,speak.y+yoff,speak.w,speak.h);
        oyoff += speak.h;
      }
      //static
      for(var i = 0; i < self.cache_unlocked_options_static.length; i++)
      {
        oyoff = 0;
        option = self.cache_unlocked_options_static[i];
        for(var j = 0; j < option.qtext.length; j++)
        {
          ctx.strokeRect(option.x,option.y+yoff+oyoff,option.w,option.h);
          oyoff += option.h;
        }
      }
      //dynamic
      oyoff = 0;
      for(var i = 0; i < self.cache_unlocked_options_dynamic.length; i++)
      {
        option = self.cache_unlocked_options_dynamic[i];
        for(var j = 0; j < option.qtext.length; j++)
        {
          ctx.strokeRect(speak.options_x,speak.options_y+yoff+oyoff,speak.options_w,speak.options_h);
          oyoff += speak.options_h;
        }
      }
      ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
    }
  }
}

var cutscene_view = function()
{
  var self = this;

  self.cutscene;

  //playback vars
  self.t = 0;
  self.content = [];
}

