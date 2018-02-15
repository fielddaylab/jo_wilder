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
          case ACT_PORTHOLE:
          {
            if(cur_act.target_room_found) state_to = STATE_NAV;
            else //go to map
            {
              my_navigable.selected_act = 0;
              state_to = STATE_MAP;
              my_mapview.unlock_content();
            }
          }
          break;
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

  self.consume_level = function(level)
  {
    var idle_animcycle = null_animcycle;
    var walk_animcycle = null_animcycle;
    var act_animcycle  = null_animcycle;
    for(var i = 0; i < level.animcycles.length; i++)
    {
      if(level.animcycles[i].id == level.avatar_idle_animcycle_id) idle_animcycle = level.animcycles[i];
      if(level.animcycles[i].id == level.avatar_walk_animcycle_id) walk_animcycle = level.animcycles[i];
      if(level.animcycles[i].id == level.avatar_act_animcycle_id)  act_animcycle  = level.animcycles[i];
    }
    self.anim.src = [];
    for(var i = 0; i < idle_animcycle.frames.length; i++) self.anim.src.push(idle_animcycle.frames[i]);
    for(var i = 0; i < walk_animcycle.frames.length; i++) self.anim.src.push(walk_animcycle.frames[i]);
    for(var i = 0; i < act_animcycle.frames.length; i++)  self.anim.src.push(act_animcycle.frames[i]);
    self.anim.animations[ANIM_NULL] = []; self.anim.animations[ANIM_NULL].push(0);
    var j = 0;
    self.anim.animations[ANIM_IDLE] = []; for(var i = j; i < j+idle_animcycle.frames.length; i++) self.anim.animations[ANIM_IDLE].push(i);
    j += idle_animcycle.frames.length;
    self.anim.animations[ANIM_WALK] = []; for(var i = j; i < j+walk_animcycle.frames.length; i++) self.anim.animations[ANIM_WALK].push(i);
    j += walk_animcycle.frames.length;
    self.anim.animations[ANIM_ACT]  = []; for(var i = j; i < j+act_animcycle.frames.length; i++)  self.anim.animations[ANIM_ACT].push(i);
    j += act_animcycle.frames.length;
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

var null_animcycle;
var gen_animcycle_inst = function(id,animcycles)
{
  var animcycle = null_animcycle;
  for(var i = 0; i < animcycles.length; i++)
    if(animcycles[i].id == id) animcycle = animcycles[i];

  var inst = new animcycle_inst();
  inst.animcycle = animcycle;
  inst.frame_t = animcycle.offset_t;
  inst.frame_i = 0;
  inst.img = animcycle.frames[inst.frame_i];
  return inst;
}

var animcycle_inst = function()
{
  var self = this;
  self.animcycle;
  self.frame_t;
  self.frame_i;
  self.img;
  self.tick = function()
  {
    self.frame_t++;
    while(self.frame_t > self.animcycle.frame_t)
    {
      self.frame_t -= self.animcycle.frame_t;
      self.frame_i = (self.frame_i+1)%self.animcycle.frames.length;
      self.img = self.animcycle.frames[self.frame_i];
    }
  }
}

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
    self.room.animcycle_inst.tick();
    for(var i = 0; i < self.cache_unlocked_persons.length;   i++) self.cache_unlocked_persons[i].animcycle_inst.tick();
    for(var i = 0; i < self.cache_unlocked_objects.length;   i++) self.cache_unlocked_objects[i].animcycle_inst.tick();
    for(var i = 0; i < self.cache_unlocked_portholes.length; i++) self.cache_unlocked_portholes[i].animcycle_inst.tick();
    for(var i = 0; i < self.cache_unlocked_wildcards.length; i++) self.cache_unlocked_wildcards[i].animcycle_inst.tick();
  }

  self.draw = function()
  {
    ctx.drawImage(self.room.animcycle_inst.img,0,0,canv.width,canv.height);
    for(var i = 0; i < self.cache_unlocked_persons.length;   i++) drawImageBox(self.cache_unlocked_persons[i].animcycle_inst.img,  self.cache_unlocked_persons[i],ctx);
    for(var i = 0; i < self.cache_unlocked_objects.length;   i++) drawImageBox(self.cache_unlocked_objects[i].animcycle_inst.img,  self.cache_unlocked_objects[i],ctx);
    for(var i = 0; i < self.cache_unlocked_portholes.length; i++) drawImageBox(self.cache_unlocked_portholes[i].animcycle_inst.img,self.cache_unlocked_portholes[i],ctx);
    for(var i = 0; i < self.cache_unlocked_wildcards.length; i++) drawImageBox(self.cache_unlocked_wildcards[i].animcycle_inst.img,self.cache_unlocked_wildcards[i],ctx);

    if(DEBUG)
    {
      ctx.strokeStyle = white;
      ctx.strokeRect(self.room.nav_x,self.room.nav_y,self.room.nav_w,self.room.nav_h);
      ctx.strokeStyle = red;
      for(var i = 0; i < self.cache_unlocked_persons.length;   i++) strokeBox(self.cache_unlocked_persons[i],ctx);
      ctx.strokeStyle = blue;
      for(var i = 0; i < self.cache_unlocked_objects.length;   i++) strokeBox(self.cache_unlocked_objects[i],ctx);
      ctx.strokeStyle = green;
      for(var i = 0; i < self.cache_unlocked_portholes.length; i++) strokeBox(self.cache_unlocked_portholes[i],ctx);
      ctx.strokeStyle = magenta;
      for(var i = 0; i < self.cache_unlocked_wildcards.length; i++) strokeBox(self.cache_unlocked_wildcards[i],ctx);
      ctx.fillStyle = black;
      ctx.fillText(self.room.fqid,20,20);
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

  self.toolbar_animcycle_inst;
  self.icon_map__instanimcycle_inst;
  self.icon_notebook_animcycle_inst;
  self.map      = {x:20,             y:self.y+15,w:self.h-40,h:self.h-40};
  self.notebook = {x:10+self.h-20+20,y:self.y+12,w:self.h-55,h:self.h-35};

  self.consume_level = function(level)
  {
    self.toolbar_animcycle_inst       = gen_animcycle_inst(level.toolbar_animcycle_id,level.animcycles);
    self.icon_map_animcycle_inst      = gen_animcycle_inst(level.icon_map_animcycle_id,level.animcycles);
    self.icon_notebook_animcycle_inst = gen_animcycle_inst(level.icon_notebook_animcycle_id,level.animcycles);
  }

  self.click = function(evt)
  {
    if(ptWithinBox(self.map,     evt.doX,evt.doY))
    {
      my_navigable.selected_act = 0;
      state_from = cur_state;
      state_to = STATE_MAP;
      cur_state = STATE_TRANSITION;
      state_t = 0;
      my_mapview.unlock_content();
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
    self.toolbar_animcycle_inst.tick();
    self.icon_map_animcycle_inst.tick();
    self.icon_notebook_animcycle_inst.tick();
  }

  self.draw = function(yoff)
  {
    ctx.drawImage(self.toolbar_animcycle_inst.img,       self.x,         self.y         +yoff, self.w,         self.h);
    ctx.drawImage(self.icon_map_animcycle_inst.img,      self.map.x,     self.map.y     +yoff, self.map.w,     self.map.h);
    ctx.drawImage(self.icon_notebook_animcycle_inst.img, self.notebook.x,self.notebook.y+yoff, self.notebook.w,self.notebook.h);

    if(DEBUG)
    {
      ctx.strokeRect(self.x,         self.y         +yoff, self.w,         self.h);
      ctx.strokeRect(self.map.x,     self.map.y     +yoff, self.map.w,     self.map.h);
      ctx.strokeRect(self.notebook.x,self.notebook.y+yoff, self.notebook.w,self.notebook.h);
    }
  }

}

var mapview = function()
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
    self.map.animcycle_inst.tick();
    for(var i = 0; i < self.cache_unlocked_scenes.length; i++) self.cache_unlocked_scenes[i].animcycle_inst.tick();
  }

  self.draw = function(yoff)
  {
    ctx.drawImage(self.map.animcycle_inst.img,self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < self.cache_unlocked_scenes.length; i++) ctx.drawImage(self.cache_unlocked_scenes[i].animcycle_inst.img, self.cache_unlocked_scenes[i].x, self.cache_unlocked_scenes[i].y+yoff, self.cache_unlocked_scenes[i].w, self.cache_unlocked_scenes[i].h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

    if(DEBUG)
    {
      ctx.strokeStyle = red;
      ctx.strokeRect(self.x, self.y+yoff, self.w, self.h);
      ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
      for(var i = 0; i < self.cache_unlocked_scenes.length; i++) ctx.strokeRect(self.cache_unlocked_scenes[i].x, self.cache_unlocked_scenes[i].y+yoff, self.cache_unlocked_scenes[i].w, self.cache_unlocked_scenes[i].h);
      ctx.strokeStyle = black;
      for(var i = 0; i < self.cache_unlocked_scenes.length; i++) ctx.fillText(self.cache_unlocked_scenes[i].fqid, self.cache_unlocked_scenes[i].x+10, self.cache_unlocked_scenes[i].y+yoff+20);
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
  self.notebook_animcycle_inst;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.cache_unlocked_entrys = [];

  self.consume_level = function(level)
  {
    self.entrys = level.entrys;
    self.unlock_content();
    self.notebook_animcycle_inst = gen_animcycle_inst(level.notebook_animcycle_id,level.animcycles);
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
    for(var i = 0; i < self.cache_unlocked_entrys.length; i++)
      self.cache_unlocked_entrys[i].animcycle_inst.tick();
    self.notebook_animcycle_inst.tick();
  }

  self.draw = function(yoff)
  {
    ctx.drawImage(self.notebook_animcycle_inst.img, self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

    var entry;
    for(var i = 0; i < self.cache_unlocked_entrys.length; i++)
    {
      entry = self.cache_unlocked_entrys[i];
      ctx.drawImage(entry.animcycle_inst.img,self.x,self.y+yoff+entry.y,entry.w,entry.h);
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
  self.cache_unlocked_zones = [];

  self.consume_object = function(object)
  {
    self.object = object;
    self.object.key = true;
    self.cur_view_i = 0;
    for(var i = 1; i < self.object.views.length; i++) if(self.object.views[i].primary) self.cur_view_i = i;
    self.cur_view = self.object.views[self.cur_view_i];
    self.cur_view.key = true;
    self.unlock_content();
  }

  self.unlock_content = function()
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
        self.cur_view = find(self.object.fqid+"."+zone.target_view);
        self.cur_view.key = true;
        self.unlock_content();
        return;
      }
    }
  }

  self.tick = function()
  {
    self.cur_view.animcycle_inst.tick();
    for(var i = 0; i < self.cache_unlocked_zones.length; i++)
      self.cache_unlocked_zones[i].animcycle_inst.tick();
  }

  self.draw = function(yoff)
  {
    var zone;
    ctx.drawImage(self.cur_view.animcycle_inst.img, self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < self.cache_unlocked_zones.length; i++)
    {
      zone = self.cache_unlocked_zones[i];
      ctx.strokeStyle = white;
      ctx.strokeRect(zone.x, zone.y+yoff, zone.w, zone.h);
      ctx.drawImage(zone.animcycle_inst.img, zone.x, zone.y+yoff, zone.w, zone.h);
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
    //bubble sort dynamic on index
    var sorted = false;
    while(!sorted)
    {
      sorted = true;
      for(var i = 0; i < self.cache_unlocked_options_dynamic.length-1; i++)
      {
        var option = self.cache_unlocked_options_dynamic[i];
        var noption = self.cache_unlocked_options_dynamic[i+1];
        if(option.index > noption.index)
        {
          self.cache_unlocked_options_dynamic[i] = noption;
          self.cache_unlocked_options_dynamic[i+1] = option;
          sorted = false;
        }
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
    //static
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
    //dynamic
    oyoff = speak.options_y;
    if(oyoff < speak.y+speak.h*speak.atext.length) oyoff = speak.y+speak.h*speak.atext.length;
    for(var i = 0; i < self.cache_unlocked_options_dynamic.length; i++)
    {
      option = self.cache_unlocked_options_dynamic[i];
      for(var j = 0; j < option.qtext.length; j++)
      {
        if(ptWithin(speak.options_x,oyoff,speak.options_w,speak.options_h,evt.doX,evt.doY))
          clicked_option = option;
        oyoff += speak.options_h;
      }
    }
    if(clicked_option)
    {
      option = clicked_option;
      option.key = true;
      speak = find(self.person.fqid+"."+option.target_speak);
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
    self.cur_speak.animcycle_inst.tick();
  }

  self.draw = function(yoff)
  {
    var speak = self.cur_speak;
    var oyoff;
    //ctx.drawImage(speak.animcycle_inst.img, 0, yoff, self.w, self.h);
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
    oyoff = speak.options_y;
    if(oyoff < speak.y+speak.h*speak.atext.length) oyoff = speak.y+speak.h*speak.atext.length;
    for(var i = 0; i < self.cache_unlocked_options_dynamic.length; i++)
    {
      option = self.cache_unlocked_options_dynamic[i];
      for(var j = 0; j < option.qtext.length; j++)
      {
        ctx.fillText(option.qtext[j],speak.options_x,yoff+oyoff+speak.options_h);
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
      oyoff = speak.options_y;
      if(oyoff < speak.y+speak.h*speak.atext.length) oyoff = speak.y+speak.h*speak.atext.length;
      for(var i = 0; i < self.cache_unlocked_options_dynamic.length; i++)
      {
        option = self.cache_unlocked_options_dynamic[i];
        for(var j = 0; j < option.qtext.length; j++)
        {
          ctx.strokeRect(speak.options_x,yoff+oyoff,speak.options_w,speak.options_h);
          oyoff += speak.options_h;
        }
      }
      ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
    }
  }
}

var cutscene_entity = function()
{
  var self = this;
  self.id = "null";
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.w = 0;
  self.h = 0;
  self.entity_type = ENTITY_NULL;
  self.animcycle_inst;
  self.text = ["null"];
}

var cutsceneview = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.cutscene;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.cutscene_entitys = [];
  self.t = 0;
  self.end = 0;
  self.waiting = 0;
  self.command_i = 0;
  self.running_commands = [];

  self.consume_cutscene = function(cutscene)
  {
    self.cutscene = cutscene;
    self.cutscene.key = true;

    self.cutscene_entitys = [];
    self.t = 0;
    self.end = false;
    self.command_i = 0;

    while(self.command_i < cutscene.commands.length && cutscene.commands[self.command_i].t < self.t)
      self.execute_next_command();
  }

  self.find_entity = function(entity_id)
  {
    for(var i = 0; i < self.cutscene_entitys.length; i++)
      if(self.cutscene_entitys[i].id == entity_id) return self.cutscene_entitys[i];
  }

  self.execute_next_command = function()
  {
    var c = self.cutscene.commands[self.command_i];
    switch(c.command)
    {
      case COMMAND_NULL:
        break;
      case COMMAND_CREATE:
        var e = new cutscene_entity();
        e.id = c.cutscene_entity_id;
        e.entity_type = c.cutscene_entity_type;
        if(c.cutscene_entity_type == ENTITY_ANIM)
        {
          e.animcycle_inst = gen_animcycle_inst(c.animcycle_id,cur_level.animcycles);
          e.animcycle_inst.frame_t += c.animcycle_offset_t;
        }
        else
        {
          e.text = c.text;
        }
        e.x = c.x;
        e.y = c.y;
        e.z = c.z;
        e.w = c.w;
        e.h = c.h;
        self.cutscene_entitys.push(e);
        break;
      case COMMAND_DESTROY:
        for(var i = 0; i < self.cutscene_entitys.length; i++)
          if(self.cutscene_entitys[i].id == c.cutscene_entity_id) self.cutscene_entitys.splice(i,1);
        break;
      case COMMAND_ANIMATE:
        var e = self.find_entity(c.cutscene_entity_id);
        e.animcycle_inst = gen_animcycle_inst(c.animcycle_id,cur_level.animcycles);
        e.animcycle_inst.frame_t += c.animcycle_offset_t;
        break;
      case COMMAND_TWEEN:
        var e = self.find_entity(c.cutscene_entity_id);
        c.from_x = e.x;
        c.from_y = e.y;
        c.from_z = e.z;
        c.from_w = e.w;
        c.from_h = e.h;
        self.running_commands.push(c);
        break;
      case COMMAND_WAIT:
        self.waiting = 1;
        break;
      case COMMAND_END:
        self.end = 1;
        break;
    }
    self.command_i++;
    if(self.command_i >= self.cutscene.commands.length) self.end = 1;
  }

  self.shouldClick = function(evt) { return true; }
  self.click = function(evt)
  {
    if(ptWithinBox(self.exit_box,evt.doX,evt.doY))
    {
      if(self.waiting) self.waiting = 0;
      else
      {
        state_from = cur_state;
        state_to = STATE_NAV;
        cur_state = STATE_TRANSITION;
        state_t = 0;
      }
    }
  }

  self.tick = function()
  {
    while(!self.end && self.command_i < self.cutscene.commands.length && self.cutscene.commands[self.command_i].t < self.t)
      self.execute_next_command();

    for(var i = 0; !self.end && i < self.running_commands.length; i++)
    {
      var c = self.running_commands[i];
      if(c.command != COMMAND_TWEEN) continue;
      var e = self.find_entity(c.cutscene_entity_id);
      var t = invlerp(c.t,c.end_t,self.t)
      if(c.x != CUTSCENE_COMMAND_IGNORE) e.x = lerp(c.from_x,c.x,t);
      if(c.y != CUTSCENE_COMMAND_IGNORE) e.y = lerp(c.from_y,c.y,t);
      if(c.z != CUTSCENE_COMMAND_IGNORE) e.z = lerp(c.from_z,c.z,t);
      if(c.w != CUTSCENE_COMMAND_IGNORE) e.w = lerp(c.from_w,c.w,t);
      if(c.h != CUTSCENE_COMMAND_IGNORE) e.h = lerp(c.from_h,c.h,t);
      if(t >= 1)
      {
        self.running_commands.splice(i,1);
        i--;
      }
    }

    for(var i = 0; i < self.cutscene_entitys.length; i++)
      if(self.cutscene_entitys[i].entity_type == ENTITY_ANIM)
        self.cutscene_entitys[i].animcycle_inst.tick();

    if(!self.waiting) self.t++;

    if(self.end)
    {
      state_from = cur_state;
      state_to = STATE_NAV;
      cur_state = STATE_TRANSITION;
      state_t = 0;
    }
  }

  self.draw = function(yoff)
  {
    ctx.fillStyle = "#4c4c4c";
    ctx.font = "20px Helvetica";
    ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

    //bubble sort on z
    var sorted = false;
    while(!sorted)
    {
      sorted = true;
      for(var i = 0; i < self.cutscene_entitys.length-1; i++)
      {
        var entity = self.cutscene_entitys[i];
        var nentity = self.cutscene_entitys[i+1];
        if(entity.z > nentity.z)
        {
          self.cutscene_entitys[i] = nentity;
          self.cutscene_entitys[i+1] = entity;
          sorted = false;
        }
      }
    }

    for(var i = 0; i < self.cutscene_entitys.length; i++)
    {
      var entity = self.cutscene_entitys[i];
      if(entity.entity_type == ENTITY_ANIM)
      {
        //ctx.drawImage(entity.animcycle_inst.img,entity.x,entity.y,entity.w,entity.h);
        ctx.save();
        ctx.translate(entity.x,entity.y);
        if(entity.w < 0) ctx.scale(-1,1);
        ctx.drawImage(entity.animcycle_inst.img,0,0,entity.w,entity.h);
        ctx.restore();
      }
      else
      {
        var oyoff = 0;
        for(var j = 0; j < entity.text.length; j++)
        {
          ctx.fillText(entity.text[j],entity.x,entity.y+yoff+oyoff+entity.h);
          oyoff += entity.h;
        }
      }
    }
  }

  //playback vars
  self.t = 0;
  self.content = [];
}

