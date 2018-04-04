var loader = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.loading = false;
  self.loading_q = [];

  self.loaded = function(args)
  {
    for(var i = 0; i < self.loading_q.length; i++)
      if(self.loading_q[i] == args.target) { self.loading_q.splice(i,1); break; }
    if(!self.loading_q.length) self.loading = false;
    //console.log(self.loading_q.length+" "+args.target.src);
  }
  self.load_animcycle_inst = function(inst)
  {
    var animcycle = inst.animcycle;
    self.load_animcycle(inst.animcycle);
    if(!inst.img) inst.img = animcycle.frames[inst.frame_i];
  }
  self.load_animcycle = function(animcycle)
  {
    for(var i = 0; i < animcycle.frame_files.length; i++)
    {
      if(!animcycle.frames[i]) animcycle.frames[i] = GenImg(animcycle.frame_files[i]);
      var img = animcycle.frames[i];
      if(!img.complete)
      {
        var found = false;
        img.onload = self.loaded;
        for(var j = 0; j < self.loading_q.length; j++)
          if(self.loading_q[j] == img) return;
        self.loading_q.push(img);
        self.loading = true;
        if(!img.src) img.src = animcycle.frame_files[i];
      }
    }
  }

  self.consume_level = function(level)
  {
    self.load_animcycle(find_animcycle(level.avatar_walk_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.avatar_idle_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.avatar_act_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.exit_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.toolbar_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.map_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.notebook_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.icon_map_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.icon_notebook_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.person_hover_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.object_hover_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.observation_hover_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.porthole_hover_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.zone_hover_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.option_hover_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.map_hover_animcycle_id,level.animcycles));
    self.load_animcycle(find_animcycle(level.ripple_click_animcycle_id,level.animcycles));

    for(var i = 0; i < level.scenes.length; i++)
      self.load_animcycle_inst(level.scenes[i].animcycle_inst);
    for(var i = 0; i < level.entrys.length; i++)
      self.load_animcycle_inst(level.entrys[i].animcycle_inst);
  }

  self.consume_room = function(room)
  {
    self.load_animcycle_inst(room.animcycle_inst);
    var person;
    for(var k = 0; k < room.persons.length; k++)
    {
      person = room.persons[k];
      self.load_animcycle_inst(person.animcycle_inst);
      self.load_animcycle_inst(person.hover_icon_animcycle_inst);
      var speak;
      for(var l = 0; l < person.speaks.length; l++)
      {
        speak = person.speaks[l];
        self.load_animcycle_inst(speak.animcycle_inst);
        /*
        var option;
        for(var m = 0; m < speak.options.length; m++)
        {
          option = speak.options[m];
          print_option_meta(option);
        }
        */
      }
    }
    var object;
    for(var k = 0; k < room.objects.length; k++)
    {
      object = room.objects[k];
      self.load_animcycle_inst(object.animcycle_inst);
      self.load_animcycle_inst(object.hover_icon_animcycle_inst);
      var view;
      for(var l = 0; l < object.views.length; l++)
      {
        view = object.views[l];
        self.load_animcycle_inst(view.animcycle_inst);
        var zone;
        for(var m = 0; m < view.zones.length; m++)
        {
          zone = view.zones[m];
          self.load_animcycle_inst(zone.animcycle_inst);
        }
      }
    }
    var observation;
    for(var k = 0; k < room.observations.length; k++)
    {
      observation = room.observations[k];
      self.load_animcycle_inst(observation.animcycle_inst);
      self.load_animcycle_inst(observation.hover_icon_animcycle_inst);
    }
    var porthole;
    for(var k = 0; k < room.portholes.length; k++)
    {
      porthole = room.portholes[k];
      self.load_animcycle_inst(porthole.animcycle_inst);
      self.load_animcycle_inst(porthole.hover_icon_animcycle_inst);
    }
    var wildcard;
    for(var k = 0; k < room.wildcards.length; k++)
    {
      wildcard = room.wildcards[k];
      self.load_animcycle_inst(wildcard.animcycle_inst);
      self.load_animcycle_inst(wildcard.hover_icon_animcycle_inst);
    }
    var cutscene;
    for(var k = 0; k < room.cutscenes.length; k++)
    {
      cutscene = room.cutscenes[k];
      self.load_animcycle_inst(cutscene.animcycle_inst);
      self.load_animcycle_inst(cutscene.hover_icon_animcycle_inst);
    }
    var inert;
    for(var k = 0; k < room.inerts.length; k++)
    {
      inert = room.inerts[k];
      self.load_animcycle_inst(inert.animcycle_inst);
    }

  }

}

var cursor = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;
  self.known_x = 0;
  self.known_y = 0;
  self.mode_prev = CURSOR_NULL;
  self.mode = CURSOR_NULL;
  self.o;
  self.ripple_wx = 0;
  self.ripple_wy = 0;
  self.ripple_x = 0;
  self.ripple_y = 0;

  self.person_animcycle_inst;
  self.object_animcycle_inst;
  self.observation_animcycle_inst;
  self.porthole_animcycle_inst;
  self.zone_animcycle_inst;
  self.option_animcycle_inst;
  self.map_animcycle_inst;
  self.ripple_animcycle_inst;

  self.consume_level = function(level)
  {
    self.person_animcycle_inst      = gen_animcycle_inst(level.person_hover_animcycle_id,      level.animcycles);
    self.object_animcycle_inst      = gen_animcycle_inst(level.object_hover_animcycle_id,      level.animcycles);
    self.observation_animcycle_inst = gen_animcycle_inst(level.observation_hover_animcycle_id, level.animcycles);
    self.porthole_animcycle_inst    = gen_animcycle_inst(level.porthole_hover_animcycle_id,    level.animcycles);
    self.zone_animcycle_inst        = gen_animcycle_inst(level.zone_hover_animcycle_id,        level.animcycles);
    self.option_animcycle_inst      = gen_animcycle_inst(level.option_hover_animcycle_id,      level.animcycles);
    self.map_animcycle_inst         = gen_animcycle_inst(level.map_hover_animcycle_id,         level.animcycles);
    self.ripple_animcycle_inst      = gen_animcycle_inst(level.ripple_click_animcycle_id,      level.animcycles);
  }

  self.ripple = function(x,y)
  {
    self.ripple_x = x;
    self.ripple_y = y;
    self.ripple_wx = worldSpaceXpt(my_camera,canv,self.ripple_x);
    self.ripple_wy = worldSpaceYpt(my_camera,canv,self.ripple_y);
    self.ripple_animcycle_inst.frame_i = 0;
    self.ripple_animcycle_inst.frame_t = 2;
  }

  self.hover = function(evt)
  {
    self.known_x = evt.doX;
    self.known_y = evt.doY;
  }
  self.unhover = function(evt)
  {
  }

  self.tick = function()
  {
    if(self.mode != self.mode_prev)
    {
      if(self.mode_prev == CURSOR_NORMAL) canvas.style.cursor = 'none';
      if(self.mode      == CURSOR_NORMAL) canvas.style.cursor = 'auto';
      self.mode_prev = self.mode;
    }

    switch(self.mode)
    {
      case CURSOR_PERSON:      self.person_animcycle_inst.tick();      break;
      case CURSOR_OBJECT:      self.object_animcycle_inst.tick();      break;
      case CURSOR_OBSERVATION: self.observation_animcycle_inst.tick(); break;
      case CURSOR_PORTHOLE:    self.porthole_animcycle_inst.tick();    break;
      case CURSOR_ZONE:        self.zone_animcycle_inst.tick();        break;
      case CURSOR_OPTION:      self.option_animcycle_inst.tick();      break;
      case CURSOR_MAP:         self.map_animcycle_inst.tick();         break;
    }

    if(self.ripple_animcycle_inst.frame_i || self.ripple_animcycle_inst.frame_t > 1)
    {
      self.ripple_x = screenSpaceXpt(my_camera,canv,self.ripple_wx);
      self.ripple_y = screenSpaceYpt(my_camera,canv,self.ripple_wy);
      self.ripple_animcycle_inst.tick();
    }
  }

  self.draw = function()
  {
    if(self.ripple_animcycle_inst.frame_i || self.ripple_animcycle_inst.frame_t > 1)
      ctx.drawImage(self.ripple_animcycle_inst.img, self.ripple_x-100, self.ripple_y-100, 200, 200);

    var w = cur_level.cursor_w;
    var h = cur_level.cursor_h;
    var hw = cur_level.cursor_w/2;
    var hh = cur_level.cursor_h/2;
    switch(self.mode)
    {
      case CURSOR_PERSON:      ctx.drawImage(self.person_animcycle_inst.img,      self.known_x-hw,self.known_y-hh,w,h); break;
      case CURSOR_OBJECT:      ctx.drawImage(self.object_animcycle_inst.img,      self.known_x-hw,self.known_y-hh,w,h); break;
      case CURSOR_OBSERVATION: ctx.drawImage(self.observation_animcycle_inst.img, self.known_x-hw,self.known_y-hh,w,h); break;
      case CURSOR_PORTHOLE:    ctx.drawImage(self.porthole_animcycle_inst.img,    self.known_x-hw,self.known_y-hh,w,h); break;
      case CURSOR_ZONE:        ctx.drawImage(self.zone_animcycle_inst.img,        self.known_x-hw,self.known_y-hh,w,h); break;
      case CURSOR_OPTION:      ctx.drawImage(self.option_animcycle_inst.img,      self.known_x-hw,self.known_y-hh,w,h); break;
      case CURSOR_MAP:         ctx.drawImage(self.map_animcycle_inst.img,         self.known_x-hw,self.known_y-hh,w,h); break;
    }
    if(self.o && (!DEBUG || !my_keyable.e))
    {
      w = cur_level.hover_w;
      h = cur_level.hover_h;
      hw = cur_level.hover_w/2;
      hh = cur_level.hover_h/2;
      self.o.hover_icon_x =  screenSpaceW(my_camera,canv,self.o.hover_icon_wx);
      self.o.hover_icon_y = -screenSpaceH(my_camera,canv,self.o.hover_icon_wy);
      ctx.drawImage(self.o.hover_icon_animcycle_inst.img, self.o.x+self.o.w/2+self.o.hover_icon_x-hw, self.o.y+self.o.h/2+self.o.hover_icon_y-hh, w, h);
    }
  }
}

var avatar = function()
{
  var self = this;
  self.wx = 0;
  self.wy = 0;
  self.ww = 85;
  self.wh = 200;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.to_wx = self.wx;
  self.to_wy = self.wy;

  self.shade = 0;

  self.state = AVATAR_IDLE;
  self.anim = new animation();
  self.anim.frame_delay = 10;

  self.idle_animcycle = null_animcycle;
  self.walk_animcycle = null_animcycle;
  self.act_animcycle  = null_animcycle;

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
        state_from = state_cur;
        state_cur = STATE_TRANSITION;
        switch(cur_act.act)
        {
          case ACT_PERSON:      state_to = STATE_PERSON;      my_personview.consume_person(cur_act);           get_audio(cur_act.audio_id,cur_level.audios).aud.play(); break;
          case ACT_OBJECT:      state_to = STATE_OBJECT;      my_objectview.consume_object(cur_act);           get_audio(cur_act.audio_id,cur_level.audios).aud.play(); break;
          case ACT_OBSERVATION: state_to = STATE_OBSERVATION; my_observationview.consume_observation(cur_act); get_audio(cur_act.audio_id,cur_level.audios).aud.play(); break;
          case ACT_PORTHOLE:
          {
            if(cur_act.target_room_found)
            {
              state_to = state_stack;
              get_audio(cur_act.audio_id,cur_level.audios).aud.play();
            }
            else //go to map
            {
              my_navigable.selected_act = 0;
              state_to = STATE_MAP;
              my_mapview.unlock_content();
              get_audio(cur_level.map_audio_id,cur_level.audios).aud.play();
            }
          }
          break;
          case ACT_WILDCARD: state_to = STATE_WILDCARD; get_audio(cur_act.audio_id,cur_level.audios).aud.play(); break;
          case ACT_CUTSCENE:
          {
            state_stack = STATE_CUTSCENE;
            state_act = cur_act;
            state_to = state_stack;
            my_cutsceneview.consume_cutscene(cur_act);
          }
          break;
          case ACT_INERT: /*do nothing*/; break;
        }
        state_t = 0;
        my_navigable.selected_act = 0;
        my_cursor.mode = CURSOR_NORMAL;
        my_cursor.o = 0;
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
    self.ww = level.avatar_ww;
    self.wh = level.avatar_wh;

    self.idle_animcycle = null_animcycle;
    self.walk_animcycle = null_animcycle;
    self.act_animcycle  = null_animcycle;
    for(var i = 0; i < level.animcycles.length; i++)
    {
      if(level.animcycles[i].id == level.avatar_idle_animcycle_id) self.idle_animcycle = level.animcycles[i];
      if(level.animcycles[i].id == level.avatar_walk_animcycle_id) self.walk_animcycle = level.animcycles[i];
      if(level.animcycles[i].id == level.avatar_act_animcycle_id)  self.act_animcycle  = level.animcycles[i];
    }
    self.anim.src = [];
    for(var i = 0; i < self.idle_animcycle.frames.length; i++) self.anim.src.push(self.idle_animcycle.frames[i]);
    for(var i = 0; i < self.walk_animcycle.frames.length; i++) self.anim.src.push(self.walk_animcycle.frames[i]);
    for(var i = 0; i < self.act_animcycle.frames.length; i++)  self.anim.src.push(self.act_animcycle.frames[i]);
    self.anim.animations[ANIM_NULL] = []; self.anim.animations[ANIM_NULL].push(0);
    var j = 0;
    self.anim.animations[ANIM_IDLE] = []; for(var i = j; i < j+self.idle_animcycle.frames.length; i++) self.anim.animations[ANIM_IDLE].push(i);
    j += self.idle_animcycle.frames.length;
    self.anim.animations[ANIM_WALK] = []; for(var i = j; i < j+self.walk_animcycle.frames.length; i++) self.anim.animations[ANIM_WALK].push(i);
    j += self.walk_animcycle.frames.length;
    self.anim.animations[ANIM_ACT]  = []; for(var i = j; i < j+self.act_animcycle.frames.length; i++)  self.anim.animations[ANIM_ACT].push(i);
    j += self.act_animcycle.frames.length;
  }

  self.consume_room = function(room)
  {
    my_navigable.wpt_in_navigable(room.target_start_wx,room.target_start_wy,self);
    self.to_wx = self.wx;
    self.to_wy = self.wy;

    my_real_camera.wx = my_navigable.cam_target_wx(self.wx);
    my_real_camera.wy = my_navigable.cam_target_wy(self.wy);
  }

  self.from_porthole = function(porthole)
  {
    my_navigable.wpt_in_navigable(porthole.target_start_wx,porthole.target_start_wy,self);
    self.to_wx = self.wx;
    self.to_wy = self.wy;

    my_real_camera.wx = my_navigable.cam_target_wx(self.wx);
    my_real_camera.wy = my_navigable.cam_target_wy(self.wy);
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.dragStart = function(evt)
  {
    self.edit_o = self;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w && self.edit_offY > 0.4*self.edit_o.h)
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
      self.edit_o.h += self.deltaY;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    worldSpace(my_camera,canv,self.edit_o);
    //propagate to level
    cur_level.avatar_ww = self.edit_o.ww;
    cur_level.avatar_wh = self.edit_o.wh;

    self._dirty = true;
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.click = function(evt)
  {

  }

  self.tick = function()
  {
    var speed = walk_speed;
    var act_dist = 10;

    var wdx = self.to_wx-self.wx;
    var wdy = self.to_wy-self.wy;
    var wd = wdx*wdx+wdy*wdy;
    if(wdx >  speed) { wdx =  speed; self.anim.flip = 0; }
    if(wdx < -speed) { wdx = -speed; self.anim.flip = 1; }
    if(wdy >  speed) { wdy =  speed;                     }
    if(wdy < -speed) { wdy = -speed;                     }

    if(!DEBUG || !my_keyable.e)
    {
      self.wx += wdx;
      self.wy += wdy;
    }

    switch(self.anim.cur_anim)
    {
      case ANIM_IDLE: self.anim.frame_delay = self.idle_animcycle.frame_t; break;
      case ANIM_WALK: self.anim.frame_delay = self.walk_animcycle.frame_t; break;
      case ANIM_ACT:  self.anim.frame_delay = self.act_animcycle.frame_t;  break;
    }

    if(wd > act_dist)
    {
      if(self.state != AVATAR_WALK)
        self.anim.swapAnim(ANIM_WALK);
      self.state = AVATAR_WALK;
    }
    else if(wd <= act_dist)
    {
      if(my_navigable.selected_act)
      {
        if(my_avatar.state != AVATAR_ACT)
        {
          my_avatar.state = AVATAR_ACT;
          my_avatar.anim.injectAnim(ANIM_ACT);
          var dir = my_navigable.selected_act.wx - self.wx;
               if(dir >  2) self.anim.flip = 0;
          else if(dir < -2) self.anim.flip = 1;

          if(!my_navigable.selected_act.act_anim) self.anim.transition();
        }
      }
      else
      {
        my_avatar.state = AVATAR_IDLE;
        if(my_avatar.anim.cur_anim != AVATAR_IDLE) my_avatar.anim.injectAnim(ANIM_IDLE);
      }
    }

    self.anim.tick();
    screenSpace(my_camera, canv, self);
  }

  var shading_canv = GenIcon(canv.width,canv.height);
  var done = 0;
  self.draw = function(shading,light_color,shadow_color,ambient_color)
  {
    if(QUALITY)
    {
      self.shade = lerp(self.shade,shading,0.02);

      shading_canv.context.globalCompositeOperation = "source-over";
      var b = 10;
      shading_canv.context.clearRect(self.x-b,self.y-b,self.w+2*b,self.h+2*b);

      var img = self.anim.src[self.anim.animations[self.anim.cur_anim][self.anim.cur_anim_i]];
      shading_canv.context.save();
      shading_canv.context.translate(self.x+self.w/2,self.y+self.h/2);
      if(self.anim.flip) shading_canv.context.scale(-1,1);
      shading_canv.context.drawImage(img,-self.w/2,-self.h/2,self.w,self.h);
      shading_canv.context.restore();

      if(self.shade > 0.01)
      {
        shading_canv.context.globalAlpha = self.shade;
        shading_canv.context.fillStyle = light_color;
        shading_canv.context.fillRect(self.x,self.y,self.w,self.h);
        shading_canv.context.globalAlpha = 1-self.shade;
      }
      else if(self.shade < -0.01)
      {
        shading_canv.context.globalAlpha = -self.shade;
        shading_canv.context.fillStyle = shadow_color;
        shading_canv.context.fillRect(self.x,self.y,self.w,self.h);
        shading_canv.context.globalAlpha = 1+self.shade;
      }
      shading_canv.context.fillStyle = ambient_color;
      shading_canv.context.fillRect(self.x,self.y,self.w,self.h);

      shading_canv.context.globalCompositeOperation = "destination-in";
      shading_canv.context.globalAlpha = 1;
      shading_canv.context.save();
      shading_canv.context.translate(self.x+self.w/2,self.y+self.h/2);
      if(self.anim.flip) shading_canv.context.scale(-1,1);
      shading_canv.context.drawImage(img,-self.w/2,-self.h/2,self.w,self.h);
      shading_canv.context.restore();

      ctx.drawImage(shading_canv,self.x,self.y,self.w,self.h,self.x,self.y,self.w,self.h);
    }
    else
    {
      var img = self.anim.src[self.anim.animations[self.anim.cur_anim][self.anim.cur_anim_i]];
      ctx.save();
      ctx.translate(self.x+self.w/2,self.y+self.h/2);
      if(self.anim.flip) ctx.scale(-1,1);
      ctx.drawImage(img,-self.w/2,-self.h/2,self.w,self.h);
      ctx.restore();
    }

    if(DEBUG)
    {
      ctx.strokeStyle = black;
      ctx.strokeRect(self.x,self.y,self.w,self.h);
    }
  }
};

var null_audio;
var get_audio = function(id,audios)
{
  var audio = null_audio;
  for(var i = 0; i < audios.length; i++)
    if(audios[i].id == id) audio = audios[i];
  return audio;
}

var null_animcycle;
var gen_animcycle_inst = function(id,animcycles)
{
  var animcycle = find_animcycle(id,animcycles);
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
  self.last_click = {x:0,y:0,wx:0,wy:0};
  self.nav_click = {x:0,y:0,wx:0,wy:0};
  self.cache_unlocked_persons      = [];
  self.cache_unlocked_objects      = [];
  self.cache_unlocked_observations = [];
  self.cache_unlocked_portholes    = [];
  self.cache_unlocked_wildcards    = [];
  self.cache_unlocked_cutscenes    = [];
  self.cache_unlocked_inerts       = [];
  self.cache_unlocked_drawables    = [];

  self.consume_room = function(room)
  {
    self.room = room;
    if(!self.room.key && self.room.notifications.length) my_notificationview.consume_notification(self.room.notifications);
    self.room.key = true;
    self.unlock_content();
    self.selected_act = 0;
    my_real_camera.wx = 0;
    my_real_camera.wy = 0;
    my_real_camera.wh = room.cam_wh;
    my_real_camera.ww = canv.width*room.cam_wh/canv.height;
    my_debug_camera.ww = room.ww*1.2;
    my_debug_camera.wh = room.wh*1.2;
    if(my_debug_camera.ww/my_debug_camera.wh > canv.width/canv.height)
      my_debug_camera.wh = canv.height*my_debug_camera.ww/canv.width;
    else
      my_debug_camera.ww = canv.width*my_debug_camera.wh/canv.height;
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_persons      = [];
    self.cache_unlocked_objects      = [];
    self.cache_unlocked_observations = [];
    self.cache_unlocked_portholes    = [];
    self.cache_unlocked_wildcards    = [];
    self.cache_unlocked_cutscenes    = [];
    self.cache_unlocked_inerts       = [];

    self.cache_unlocked_drawables    = [];
    self.cache_unlocked_bg_drawables = [];
    self.cache_unlocked_fg_drawables = [];

    for(var i = 0; i < self.room.persons.length; i++)
      if(!querylocked(self.room.persons[i])) self.cache_unlocked_persons.push(self.room.persons[i]);
    for(var i = 0; i < self.room.objects.length; i++)
      if(!querylocked(self.room.objects[i])) self.cache_unlocked_objects.push(self.room.objects[i]);
    for(var i = 0; i < self.room.observations.length; i++)
      if(!querylocked(self.room.observations[i])) self.cache_unlocked_observations.push(self.room.observations[i]);
    for(var i = 0; i < self.room.portholes.length; i++)
      if(!querylocked(self.room.portholes[i])) self.cache_unlocked_portholes.push(self.room.portholes[i]);
    for(var i = 0; i < self.room.wildcards.length; i++)
      if(!querylocked(self.room.wildcards[i])) self.cache_unlocked_wildcards.push(self.room.wildcards[i]);
    for(var i = 0; i < self.room.cutscenes.length; i++)
      if(self.room.cutscenes[i].trigger == CUTSCENE_TRIGGER_ACT && !querylocked(self.room.cutscenes[i])) self.cache_unlocked_cutscenes.push(self.room.cutscenes[i]);
    for(var i = 0; i < self.room.inerts.length; i++)
      if(!querylocked(self.room.inerts[i])) self.cache_unlocked_inerts.push(self.room.inerts[i]);

    //insertion sort on each list
    for(var i = 0; i < self.cache_unlocked_persons.length; i++)
    { var j = 0; while(j < self.cache_unlocked_drawables.length && self.cache_unlocked_persons[i].wz >= self.cache_unlocked_drawables[j].wz) j++; self.cache_unlocked_drawables.splice(j,0,self.cache_unlocked_persons[i]); }
    for(var i = 0; i < self.cache_unlocked_objects.length; i++)
    { var j = 0; while(j < self.cache_unlocked_drawables.length && self.cache_unlocked_objects[i].wz >= self.cache_unlocked_drawables[j].wz) j++; self.cache_unlocked_drawables.splice(j,0,self.cache_unlocked_objects[i]); }
    for(var i = 0; i < self.cache_unlocked_observations.length; i++)
    { var j = 0; while(j < self.cache_unlocked_drawables.length && self.cache_unlocked_observations[i].wz >= self.cache_unlocked_drawables[j].wz) j++; self.cache_unlocked_drawables.splice(j,0,self.cache_unlocked_observations[i]); }
    for(var i = 0; i < self.cache_unlocked_portholes.length; i++)
    { var j = 0; while(j < self.cache_unlocked_drawables.length && self.cache_unlocked_portholes[i].wz >= self.cache_unlocked_drawables[j].wz) j++; self.cache_unlocked_drawables.splice(j,0,self.cache_unlocked_portholes[i]); }
    for(var i = 0; i < self.cache_unlocked_wildcards.length; i++)
    { var j = 0; while(j < self.cache_unlocked_drawables.length && self.cache_unlocked_wildcards[i].wz >= self.cache_unlocked_drawables[j].wz) j++; self.cache_unlocked_drawables.splice(j,0,self.cache_unlocked_wildcards[i]); }
    for(var i = 0; i < self.cache_unlocked_cutscenes.length; i++)
    { var j = 0; while(j < self.cache_unlocked_drawables.length && self.cache_unlocked_cutscenes[i].wz >= self.cache_unlocked_drawables[j].wz) j++; self.cache_unlocked_drawables.splice(j,0,self.cache_unlocked_cutscenes[i]); }
    for(var i = 0; i < self.cache_unlocked_inerts.length; i++)
    {
    if(self.cache_unlocked_inerts[i].g < 0)
    { var j = 0; while(j < self.cache_unlocked_bg_drawables.length && self.cache_unlocked_inerts[i].wz >= self.cache_unlocked_bg_drawables[j].wz) j++; self.cache_unlocked_bg_drawables.splice(j,0,self.cache_unlocked_inerts[i]); }
    else if(self.cache_unlocked_inerts[i].g > 0)
    { var j = 0; while(j < self.cache_unlocked_fg_drawables.length && self.cache_unlocked_inerts[i].wz >= self.cache_unlocked_fg_drawables[j].wz) j++; self.cache_unlocked_fg_drawables.splice(j,0,self.cache_unlocked_inerts[i]); }
    else
    { var j = 0; while(j < self.cache_unlocked_drawables.length    && self.cache_unlocked_inerts[i].wz >= self.cache_unlocked_drawables[j].wz)    j++; self.cache_unlocked_drawables.splice(j,0,self.cache_unlocked_inerts[i]); }
    }
  }

  self.wpt_in_navigable = function(wx,wy,obj)
  {
    var try_wx;
    var try_wy;
    var try_dist;
    var dist = 9999999;
    obj.wx = 9999999;
    obj.wy = 9999999;
    if(!self.room.navs.length)
    {
      dist = 0;
      obj.wx = wx;
      obj.wy = wy;
    }
    for(var i = 0; dist > 0 && i < self.room.navs.length; i++)
    {
      try_wx = wx;
      try_wy = wy;
      if(wx < self.room.navs[i].wx-self.room.navs[i].ww/2) try_wx = self.room.navs[i].wx-self.room.navs[i].ww/2;
      if(wx > self.room.navs[i].wx+self.room.navs[i].ww/2) try_wx = self.room.navs[i].wx+self.room.navs[i].ww/2;
      if(wy < self.room.navs[i].wy-self.room.navs[i].wh/2) try_wy = self.room.navs[i].wy-self.room.navs[i].wh/2;
      if(wy > self.room.navs[i].wy+self.room.navs[i].wh/2) try_wy = self.room.navs[i].wy+self.room.navs[i].wh/2;
      trydist = distsqr(try_wx, try_wy, wx, wy);
      if(trydist < dist)
      {
        obj.wx = try_wx;
        obj.wy = try_wy;
        dist = trydist;
      }
    }
  }

  self.pt_shade = function(wx,wy)
  {
    var shade = 0;
    for(var i = 0; i < self.room.lights.length; i++)
      if(worldPtWithinBox(self.room.lights[i],wx,wy)) shade++;
    for(var i = 0; i < self.room.shadows.length; i++)
      if(worldPtWithinBox(self.room.shadows[i],wx,wy)) shade--;
    if(shade > 0) return 1;
    if(shade < 0) return -1;
    return 0;
  }

  self.cam_target_wx = function(wx)
  {
    var xp = smooth(invlerp(self.room.wx-self.room.ww/2, self.room.wx+self.room.ww/2, wx));
    var camwd = self.room.ww-my_real_camera.ww;
    return self.room.wx-camwd/2+xp*camwd;
  }

  self.cam_target_wy = function(wy)
  {
    var yp = smooth(invlerp(self.room.wy-self.room.wh/2, self.room.wy+self.room.wh/2, wy));
    var camwd = self.room.wh-my_real_camera.wh;
    return self.room.wy-camwd/2+yp*camwd;
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.act_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.wz = 999999;
    self.act = 0;
    self.consume_act = function(a)
    {
      self.act = a;
      self.x = self.act.x+self.act.w/2+self.act.act_x-2;
      self.y = self.act.y+self.act.h/2+self.act.act_y-2;
      self.w = 4;
      self.h = 4;
    }
    self.edit = function()
    {
      self.w = 4;
      self.h = 4;
      self.act.act_x = (self.x+self.w/2)-(self.act.x+self.act.w/2);
      self.act.act_y = (self.y+self.h/2)-(self.act.y+self.act.h/2);
      self.act.act_wx =  worldSpaceW(my_camera,canv,self.act.act_x);
      self.act.act_wy = -worldSpaceH(my_camera,canv,self.act.act_y);
    }
  })();
  self.hover_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.wz = 999999;
    self.hover = 0;
    self.consume_hover = function(a)
    {
      self.hover = a;
      self.x = self.hover.x+self.hover.w/2+self.hover.hover_icon_x-2;
      self.y = self.hover.y+self.hover.h/2+self.hover.hover_icon_y-2;
      self.w = 4;
      self.h = 4;
    }
    self.edit = function()
    {
      self.w = 4;
      self.h = 4;
      self.hover.hover_icon_x = (self.x+self.w/2)-(self.hover.x+self.hover.w/2);
      self.hover.hover_icon_y = (self.y+self.h/2)-(self.hover.y+self.hover.h/2);
      self.hover.hover_icon_wx =  worldSpaceW(my_camera,canv,self.hover.hover_icon_x);
      self.hover.hover_icon_wy = -worldSpaceH(my_camera,canv,self.hover.hover_icon_y);
    }
  })();
  self.target_start_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.wz = 999999;
    self.target_start = 0;
    self.consume_target_start = function(a)
    {
      self.target_start = a;
      self.x = self.target_start.target_start_x-2;
      self.y = self.target_start.target_start_y-2;
      self.w = 4;
      self.h = 4;
    }
    self.edit = function()
    {
      self.w = 4;
      self.h = 4;
      self.target_start.target_start_x = self.x+self.w/2;
      self.target_start.target_start_y = self.y+self.h/2;
      self.target_start.target_start_wx = worldSpaceXpt(my_camera,canv,self.target_start.target_start_x);
      self.target_start.target_start_wy = worldSpaceYpt(my_camera,canv,self.target_start.target_start_y);
    }
  })();
  self.camera_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.wz = -99999;
    self.consume_camera = function()
    {
      self.x = my_real_camera.x;
      self.y = my_real_camera.y;
      self.w = my_real_camera.w;
      self.h = my_real_camera.h;
    }
    self.edit = function()
    {
      worldSpace(my_debug_camera,canv,self);
      my_real_camera.wh = self.wh;
      my_real_camera.ww = canv.width*self.wh/canv.height;
      self.ww = my_real_camera.ww;
      my_real_camera.wx = self.wx;
      my_real_camera.wy = self.wy;
      screenSpace(my_debug_camera,canv,self);
      my_real_camera.w = self.w;
      my_real_camera.h = self.h;
      my_real_camera.x = self.x;
      my_real_camera.y = self.y;
      cur_room.cam_wh = my_real_camera.wh;
    }
  })();
  self.dragStart = function(evt)
  {
    self.edit_o = 0;

    for(var i = 0; !self.edit_o && i < self.room.shadows.length; i++) if(ptWithinBox(self.room.shadows[i],evt.doX,evt.doY)) { self.edit_o = self.room.shadows[i]; self.edit_o.wz = -1; }
    for(var i = 0; !self.edit_o && i < self.room.lights.length;  i++) if(ptWithinBox(self.room.lights[i], evt.doX,evt.doY)) { self.edit_o = self.room.lights[i];  self.edit_o.wz = -1; }
    for(var i = 0; !self.edit_o && i < self.room.navs.length;    i++) if(ptWithinBox(self.room.navs[i],   evt.doX,evt.doY)) { self.edit_o = self.room.navs[i];    self.edit_o.wz = -1; }
    if(!self.edit_o && my_camera == my_debug_camera && ptWithinBox(my_real_camera,evt.doX,evt.doY)) { self.edit_o = self.camera_editor; self.camera_editor.consume_camera(); }
    for(var i = 0; i < self.cache_unlocked_persons.length;      i++) { var o = self.cache_unlocked_persons[i];      if(ptNear(o.x+o.w/2+o.act_x,o.y+o.h/2+o.act_y,10,evt.doX,evt.doY)) { self.edit_o = self.act_editor; self.act_editor.consume_act(o); } }
    for(var i = 0; i < self.cache_unlocked_objects.length;      i++) { var o = self.cache_unlocked_objects[i];      if(ptNear(o.x+o.w/2+o.act_x,o.y+o.h/2+o.act_y,10,evt.doX,evt.doY)) { self.edit_o = self.act_editor; self.act_editor.consume_act(o); } }
    for(var i = 0; i < self.cache_unlocked_observations.length; i++) { var o = self.cache_unlocked_observations[i]; if(ptNear(o.x+o.w/2+o.act_x,o.y+o.h/2+o.act_y,10,evt.doX,evt.doY)) { self.edit_o = self.act_editor; self.act_editor.consume_act(o); } }
    for(var i = 0; i < self.cache_unlocked_portholes.length;    i++) { var o = self.cache_unlocked_portholes[i];    if(ptNear(o.x+o.w/2+o.act_x,o.y+o.h/2+o.act_y,10,evt.doX,evt.doY)) { self.edit_o = self.act_editor; self.act_editor.consume_act(o); } }
    for(var i = 0; i < self.cache_unlocked_wildcards.length;    i++) { var o = self.cache_unlocked_wildcards[i];    if(ptNear(o.x+o.w/2+o.act_x,o.y+o.h/2+o.act_y,10,evt.doX,evt.doY)) { self.edit_o = self.act_editor; self.act_editor.consume_act(o); } }
    for(var i = 0; i < self.cache_unlocked_cutscenes.length;    i++) { var o = self.cache_unlocked_cutscenes[i];    if(ptNear(o.x+o.w/2+o.act_x,o.y+o.h/2+o.act_y,10,evt.doX,evt.doY)) { self.edit_o = self.act_editor; self.act_editor.consume_act(o); } }
    for(var i = 0; i < self.room.entry_portholes_found.length;  i++) { var o = self.room.entry_portholes_found[i];  if(ptNear(o.target_start_x,o.target_start_y,  10,evt.doX,evt.doY)) { self.edit_o = self.target_start_editor; self.target_start_editor.consume_target_start(o); } }
                                                                     { var o = self.room;                           if(ptNear(o.target_start_x,o.target_start_y,  10,evt.doX,evt.doY)) { self.edit_o = self.target_start_editor; self.target_start_editor.consume_target_start(o); } }
    for(var i = 0; i < self.cache_unlocked_persons.length;      i++) { var o = self.cache_unlocked_persons[i];      if(ptNear(o.x+o.w/2+o.hover_icon_x,o.y+o.h/2+o.hover_icon_y,10,evt.doX,evt.doY)) { self.edit_o = self.hover_editor; self.hover_editor.consume_hover(o); } }
    for(var i = 0; i < self.cache_unlocked_objects.length;      i++) { var o = self.cache_unlocked_objects[i];      if(ptNear(o.x+o.w/2+o.hover_icon_x,o.y+o.h/2+o.hover_icon_y,10,evt.doX,evt.doY)) { self.edit_o = self.hover_editor; self.hover_editor.consume_hover(o); } }
    for(var i = 0; i < self.cache_unlocked_observations.length; i++) { var o = self.cache_unlocked_observations[i]; if(ptNear(o.x+o.w/2+o.hover_icon_x,o.y+o.h/2+o.hover_icon_y,10,evt.doX,evt.doY)) { self.edit_o = self.hover_editor; self.hover_editor.consume_hover(o); } }
    for(var i = 0; i < self.cache_unlocked_portholes.length;    i++) { var o = self.cache_unlocked_portholes[i];    if(ptNear(o.x+o.w/2+o.hover_icon_x,o.y+o.h/2+o.hover_icon_y,10,evt.doX,evt.doY)) { self.edit_o = self.hover_editor; self.hover_editor.consume_hover(o); } }
    for(var i = 0; i < self.cache_unlocked_wildcards.length;    i++) { var o = self.cache_unlocked_wildcards[i];    if(ptNear(o.x+o.w/2+o.hover_icon_x,o.y+o.h/2+o.hover_icon_y,10,evt.doX,evt.doY)) { self.edit_o = self.hover_editor; self.hover_editor.consume_hover(o); } }
    for(var i = 0; i < self.cache_unlocked_cutscenes.length;    i++) { var o = self.cache_unlocked_cutscenes[i];    if(ptNear(o.x+o.w/2+o.hover_icon_x,o.y+o.h/2+o.hover_icon_y,10,evt.doX,evt.doY)) { self.edit_o = self.hover_editor; self.hover_editor.consume_hover(o); } }

    for(var i = 0; i < self.cache_unlocked_persons.length; i++)
      if(ptWithinBox(self.cache_unlocked_persons[i],evt.doX,evt.doY) && (!self.edit_o || self.edit_o.wz < self.cache_unlocked_persons[i].wz)) { self.edit_o = self.cache_unlocked_persons[i]; }
    for(var i = 0; i < self.cache_unlocked_objects.length; i++)
      if(ptWithinBox(self.cache_unlocked_objects[i],evt.doX,evt.doY) && (!self.edit_o || self.edit_o.wz < self.cache_unlocked_objects[i].wz)) { self.edit_o = self.cache_unlocked_objects[i]; }
    for(var i = 0; i < self.cache_unlocked_observations.length; i++)
      if(ptWithinBox(self.cache_unlocked_observations[i],evt.doX,evt.doY) && (!self.edit_o || self.edit_o.wz < self.cache_unlocked_observations[i].wz)) { self.edit_o = self.cache_unlocked_observations[i]; }
    for(var i = 0; i < self.cache_unlocked_portholes.length; i++)
      if(ptWithinBox(self.cache_unlocked_portholes[i],evt.doX,evt.doY) && (!self.edit_o || self.edit_o.wz < self.cache_unlocked_portholes[i].wz)) { self.edit_o = self.cache_unlocked_portholes[i]; }
    for(var i = 0; i < self.cache_unlocked_wildcards.length; i++)
      if(ptWithinBox(self.cache_unlocked_wildcards[i],evt.doX,evt.doY) && (!self.edit_o || self.edit_o.wz < self.cache_unlocked_wildcards[i].wz)) { self.edit_o = self.cache_unlocked_wildcards[i]; }
    for(var i = 0; i < self.cache_unlocked_cutscenes.length; i++)
      if(ptWithinBox(self.cache_unlocked_cutscenes[i],evt.doX,evt.doY) && (!self.edit_o || self.edit_o.wz < self.cache_unlocked_cutscenes[i].wz)) { self.edit_o = self.cache_unlocked_cutscenes[i]; }
    for(var i = 0; i < self.cache_unlocked_inerts.length; i++)
      if(ptWithinBox(self.cache_unlocked_inerts[i],evt.doX,evt.doY) && (!self.edit_o || self.edit_o.wz < self.cache_unlocked_inerts[i].wz)) { if(SHOW_GROUNDS || self.cache_unlocked_inerts[i].g == 0) self.edit_o = self.cache_unlocked_inerts[i]; }

    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w && self.edit_offY > 0.4*self.edit_o.h)
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
      self.edit_o.h += self.deltaY;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

         if(self.edit_o == self.act_editor) self.act_editor.edit();
    else if(self.edit_o == self.hover_editor) self.hover_editor.edit();
    else if(self.edit_o == self.target_start_editor) self.target_start_editor.edit();
    else if(self.edit_o == self.camera_editor) self.camera_editor.edit();
    else worldSpace(my_camera,canv,self.edit_o);

    self._dirty = true;
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
    my_cursor.mode = CURSOR_NORMAL;
    my_cursor.o = 0;
    for(var i = 0; i < self.cache_unlocked_persons.length; i++)
      if(ptWithinBox(self.cache_unlocked_persons[i],evt.doX,evt.doY))
        { my_cursor.mode = CURSOR_PERSON; my_cursor.o = self.cache_unlocked_persons[i]; }
    for(var i = 0; i < self.cache_unlocked_objects.length; i++)
      if(ptWithinBox(self.cache_unlocked_objects[i],evt.doX,evt.doY))
        { my_cursor.mode = CURSOR_OBJECT; my_cursor.o = self.cache_unlocked_objects[i]; }
    for(var i = 0; i < self.cache_unlocked_observations.length; i++)
      if(ptWithinBox(self.cache_unlocked_observations[i],evt.doX,evt.doY))
        { my_cursor.mode = CURSOR_OBSERVATION; my_cursor.o = self.cache_unlocked_observations[i]; }
    for(var i = 0; i < self.cache_unlocked_portholes.length; i++)
      if(ptWithinBox(self.cache_unlocked_portholes[i],evt.doX,evt.doY))
        { my_cursor.mode = CURSOR_PORTHOLE; my_cursor.o = self.cache_unlocked_portholes[i]; }
  }
  self.unhover = function(evt)
  {
  }

  self.click = function(evt)
  {
    if(!(DEBUG && my_keyable.e))
    {
      self.last_click.x = evt.doX;
      self.last_click.y = evt.doY;
      self.last_click.wx = worldSpaceXpt(my_camera,canv,evt.doX);
      self.last_click.wy = worldSpaceYpt(my_camera,canv,evt.doY);
      self.nav_click.x = self.last_click.x;
      self.nav_click.y = self.last_click.y;
      self.nav_click.wx = self.last_click.wx;
      self.nav_click.wy = self.last_click.wy;

      self.selected_act = 0;
      for(var i = 0; i < self.cache_unlocked_persons.length; i++)
        if(ptWithinBox(self.cache_unlocked_persons[i],self.last_click.x,self.last_click.y) && (!self.selected_act || self.selected_act.wz < self.cache_unlocked_persons[i].wz))
          self.selected_act = self.cache_unlocked_persons[i];
      for(var i = 0; i < self.cache_unlocked_objects.length; i++)
        if(ptWithinBox(self.cache_unlocked_objects[i],self.last_click.x,self.last_click.y) && (!self.selected_act || self.selected_act.wz < self.cache_unlocked_objects[i].wz))
          self.selected_act = self.cache_unlocked_objects[i];
      for(var i = 0; i < self.cache_unlocked_observations.length; i++)
        if(ptWithinBox(self.cache_unlocked_observations[i],self.last_click.x,self.last_click.y) && (!self.selected_act || self.selected_act.wz < self.cache_unlocked_observations[i].wz))
          self.selected_act = self.cache_unlocked_observations[i];
      for(var i = 0; i < self.cache_unlocked_portholes.length; i++)
        if(ptWithinBox(self.cache_unlocked_portholes[i],self.last_click.x,self.last_click.y) && (!self.selected_act || self.selected_act.wz < self.cache_unlocked_portholes[i].wz))
          self.selected_act = self.cache_unlocked_portholes[i];
      for(var i = 0; i < self.cache_unlocked_wildcards.length; i++)
        if(ptWithinBox(self.cache_unlocked_wildcards[i],self.last_click.x,self.last_click.y) && (!self.selected_act || self.selected_act.wz < self.cache_unlocked_wildcards[i].wz))
          self.selected_act = self.cache_unlocked_wildcards[i];
      for(var i = 0; i < self.cache_unlocked_cutscenes.length; i++)
        if(ptWithinBox(self.cache_unlocked_cutscenes[i],self.last_click.x,self.last_click.y) && (!self.selected_act || self.selected_act.wz < self.cache_unlocked_cutscenes[i].wz))
          self.selected_act = self.cache_unlocked_cutscenes[i];

      if(self.selected_act)
      {
        self.nav_click.wx = self.selected_act.wx+self.selected_act.act_wx;
        self.nav_click.wy = self.selected_act.wy+self.selected_act.act_wy;
      }
      else my_cursor.ripple(self.nav_click.x,self.nav_click.y);
      self.wpt_in_navigable(self.nav_click.wx,self.nav_click.wy,self.nav_click);
      my_avatar.to_wx = self.nav_click.wx;
      my_avatar.to_wy = self.nav_click.wy;
    }
  }

  self.tick = function()
  {
    if(my_camera == my_real_camera && state_stack != STATE_CUTSCENE)
    {
      //move camera
      var target_cam_wx = self.cam_target_wx(my_avatar.wx);
      my_real_camera.wx = lerp(my_real_camera.wx,target_cam_wx,cur_level.target_lerp_s);

      var target_cam_wy = self.cam_target_wy(my_avatar.wy);
      my_real_camera.wy = lerp(my_real_camera.wy,target_cam_wy,cur_level.target_lerp_s);
    }

    self.room.animcycle_inst.tick();
    screenSpace(my_camera,canv,self.room);
    for(var i = 0; i < self.room.navs.length;    i++) screenSpace(my_camera,canv,self.room.navs[i]);
    for(var i = 0; i < self.room.lights.length;  i++) screenSpace(my_camera,canv,self.room.lights[i]);
    for(var i = 0; i < self.room.shadows.length; i++) screenSpace(my_camera,canv,self.room.shadows[i]);
    for(var i = 0; i < self.cache_unlocked_persons.length;      i++) { self.cache_unlocked_persons[i].animcycle_inst.tick();      screenSpace(my_camera, canv, self.cache_unlocked_persons[i]); }
    for(var i = 0; i < self.cache_unlocked_objects.length;      i++) { self.cache_unlocked_objects[i].animcycle_inst.tick();      screenSpace(my_camera, canv, self.cache_unlocked_objects[i]); }
    for(var i = 0; i < self.cache_unlocked_observations.length; i++) { self.cache_unlocked_observations[i].animcycle_inst.tick(); screenSpace(my_camera, canv, self.cache_unlocked_observations[i]); }
    for(var i = 0; i < self.cache_unlocked_portholes.length;    i++) { self.cache_unlocked_portholes[i].animcycle_inst.tick();    screenSpace(my_camera, canv, self.cache_unlocked_portholes[i]); }
    for(var i = 0; i < self.cache_unlocked_wildcards.length;    i++) { self.cache_unlocked_wildcards[i].animcycle_inst.tick();    screenSpace(my_camera, canv, self.cache_unlocked_wildcards[i]); }
    for(var i = 0; i < self.cache_unlocked_cutscenes.length;    i++) { self.cache_unlocked_cutscenes[i].animcycle_inst.tick();    screenSpace(my_camera, canv, self.cache_unlocked_cutscenes[i]); }
    for(var i = 0; i < self.cache_unlocked_inerts.length;       i++) { self.cache_unlocked_inerts[i].animcycle_inst.tick();       screenSpace(my_camera, canv, self.cache_unlocked_inerts[i]); }

    for(var i = 0; i < self.cache_unlocked_bg_drawables.length;    i++)
    {
      var d = self.cache_unlocked_bg_drawables[i];
      var m = (d.g*d.g)/5;
      d.dx = d.x + (my_camera.wx-d.wx)*m;
      d.dy = d.y - (my_camera.wy-d.wy)*m;
      d.dw = d.w;
      d.dh = d.h;
    }
    for(var i = 0; i < self.cache_unlocked_fg_drawables.length;    i++)
    {
      var d = self.cache_unlocked_fg_drawables[i];
      var m = (d.g*d.g);
      d.dx = d.x - (my_camera.wx-d.wx)*m;
      d.dy = d.y + (my_camera.wy-d.wy)*m;
      d.dw = d.w;
      d.dh = d.h;
    }

    if(DEBUG)
    {
      if(my_camera == my_debug_camera)
        screenSpace(my_debug_camera,canv,my_real_camera);
    }
  }

  self.draw = function()
  {
    if(SHOW_GROUNDS && QUALITY) for(var i = 0; i < self.cache_unlocked_bg_drawables.length; i++) { var d = self.cache_unlocked_bg_drawables[i]; drawCanvMaskedImage(d.animcycle_inst.img, d.dx, d.dy, d.dw, d.dh, canv, ctx); }
    drawCanvMaskedImage(self.room.animcycle_inst.img,self.room.x,self.room.y,self.room.w,self.room.h, canv, ctx);

    var avi_wz = mapVal(self.room.nav_min_wz_wy, self.room.nav_max_wz_wy, self.room.nav_min_wz, self.room.nav_max_wz, my_avatar.wy);
    var i = 0;
    for(; i < self.cache_unlocked_drawables.length && self.cache_unlocked_drawables[i].wz < avi_wz; i++) drawImageBox(self.cache_unlocked_drawables[i].animcycle_inst.img, self.cache_unlocked_drawables[i], ctx);
    my_avatar.draw(self.pt_shade(my_avatar.wx,my_avatar.wy),self.room.light_color,self.room.shadow_color,self.room.ambient_color,);
    for(; i < self.cache_unlocked_drawables.length; i++) drawImageBox(self.cache_unlocked_drawables[i].animcycle_inst.img, self.cache_unlocked_drawables[i], ctx);

    if(SHOW_GROUNDS && QUALITY) for(var i = 0; i < self.cache_unlocked_fg_drawables.length; i++) { var d = self.cache_unlocked_fg_drawables[i]; drawCanvMaskedImage(d.animcycle_inst.img, d.dx, d.dy, d.dw, d.dh, canv, ctx); }

    if(DEBUG)
    {
      ctx.strokeStyle = purple;
      for(var i = 0; i < self.room.shadows.length; i++) ctx.strokeRect(self.room.shadows[i].x,self.room.shadows[i].y,self.room.shadows[i].w,self.room.shadows[i].h);
      ctx.strokeStyle = yellow;
      for(var i = 0; i < self.room.lights.length; i++) ctx.strokeRect(self.room.lights[i].x,self.room.lights[i].y,self.room.lights[i].w,self.room.lights[i].h);
      ctx.strokeStyle = orange;
      for(var i = 0; i < self.room.navs.length; i++) ctx.strokeRect(self.room.navs[i].x,self.room.navs[i].y,self.room.navs[i].w,self.room.navs[i].h);
      ctx.strokeStyle = gray;
      for(var i = 0; i < self.room.entry_portholes_found.length; i++) { var o = self.room.entry_portholes_found[i]; o.target_start_x = screenSpaceXpt(my_camera,canv,o.target_start_wx); o.target_start_y = screenSpaceYpt(my_camera,canv,o.target_start_wy); ctx.strokeRect(o.target_start_x-2,o.target_start_y-2,4,4); }
      ctx.strokeStyle = dark_gray;
                                                                      { var o = self.room;                          o.target_start_x = screenSpaceXpt(my_camera,canv,o.target_start_wx); o.target_start_y = screenSpaceYpt(my_camera,canv,o.target_start_wy); ctx.strokeRect(o.target_start_x-2,o.target_start_y-2,4,4); }

      ctx.strokeStyle = red;     for(var i = 0; i < self.cache_unlocked_persons.length;      i++) strokeBox(self.cache_unlocked_persons[i],ctx);
      ctx.strokeStyle = blue;    for(var i = 0; i < self.cache_unlocked_objects.length;      i++) strokeBox(self.cache_unlocked_objects[i],ctx);
      ctx.strokeStyle = blue;    for(var i = 0; i < self.cache_unlocked_observations.length; i++) strokeBox(self.cache_unlocked_observations[i],ctx);
      ctx.strokeStyle = green;   for(var i = 0; i < self.cache_unlocked_portholes.length;    i++) strokeBox(self.cache_unlocked_portholes[i],ctx);
      ctx.strokeStyle = magenta; for(var i = 0; i < self.cache_unlocked_wildcards.length;    i++) strokeBox(self.cache_unlocked_wildcards[i],ctx);
      ctx.strokeStyle = magenta; for(var i = 0; i < self.cache_unlocked_cutscenes.length;    i++) strokeBox(self.cache_unlocked_cutscenes[i],ctx);
      ctx.strokeStyle = cyan;    for(var i = 0; i < self.cache_unlocked_inerts.length;       i++) strokeBox(self.cache_unlocked_inerts[i],ctx);

      ctx.strokeStyle = cyan;
      for(var i = 0; i < self.cache_unlocked_persons.length;      i++) { var o = self.cache_unlocked_persons[i];      o.act_x = screenSpaceW(my_camera,canv,o.act_wx); o.act_y = -screenSpaceH(my_camera,canv,o.act_wy); ctx.strokeRect(o.x+o.w/2+o.act_x-2,o.y+o.h/2+o.act_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_objects.length;      i++) { var o = self.cache_unlocked_objects[i];      o.act_x = screenSpaceW(my_camera,canv,o.act_wx); o.act_y = -screenSpaceH(my_camera,canv,o.act_wy); ctx.strokeRect(o.x+o.w/2+o.act_x-2,o.y+o.h/2+o.act_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_observations.length; i++) { var o = self.cache_unlocked_observations[i]; o.act_x = screenSpaceW(my_camera,canv,o.act_wx); o.act_y = -screenSpaceH(my_camera,canv,o.act_wy); ctx.strokeRect(o.x+o.w/2+o.act_x-2,o.y+o.h/2+o.act_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_portholes.length;    i++) { var o = self.cache_unlocked_portholes[i];    o.act_x = screenSpaceW(my_camera,canv,o.act_wx); o.act_y = -screenSpaceH(my_camera,canv,o.act_wy); ctx.strokeRect(o.x+o.w/2+o.act_x-2,o.y+o.h/2+o.act_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_wildcards.length;    i++) { var o = self.cache_unlocked_wildcards[i];    o.act_x = screenSpaceW(my_camera,canv,o.act_wx); o.act_y = -screenSpaceH(my_camera,canv,o.act_wy); ctx.strokeRect(o.x+o.w/2+o.act_x-2,o.y+o.h/2+o.act_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_cutscenes.length;    i++) { var o = self.cache_unlocked_cutscenes[i];    o.act_x = screenSpaceW(my_camera,canv,o.act_wx); o.act_y = -screenSpaceH(my_camera,canv,o.act_wy); ctx.strokeRect(o.x+o.w/2+o.act_x-2,o.y+o.h/2+o.act_y-2,4,4); }
      ctx.strokeStyle = black;
      for(var i = 0; i < self.cache_unlocked_persons.length;      i++) { var o = self.cache_unlocked_persons[i];      o.hover_icon_x = screenSpaceW(my_camera,canv,o.hover_icon_wx); o.hover_icon_y = -screenSpaceH(my_camera,canv,o.hover_icon_wy); ctx.strokeRect(o.x+o.w/2+o.hover_icon_x-2,o.y+o.h/2+o.hover_icon_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_objects.length;      i++) { var o = self.cache_unlocked_objects[i];      o.hover_icon_x = screenSpaceW(my_camera,canv,o.hover_icon_wx); o.hover_icon_y = -screenSpaceH(my_camera,canv,o.hover_icon_wy); ctx.strokeRect(o.x+o.w/2+o.hover_icon_x-2,o.y+o.h/2+o.hover_icon_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_observations.length; i++) { var o = self.cache_unlocked_observations[i]; o.hover_icon_x = screenSpaceW(my_camera,canv,o.hover_icon_wx); o.hover_icon_y = -screenSpaceH(my_camera,canv,o.hover_icon_wy); ctx.strokeRect(o.x+o.w/2+o.hover_icon_x-2,o.y+o.h/2+o.hover_icon_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_portholes.length;    i++) { var o = self.cache_unlocked_portholes[i];    o.hover_icon_x = screenSpaceW(my_camera,canv,o.hover_icon_wx); o.hover_icon_y = -screenSpaceH(my_camera,canv,o.hover_icon_wy); ctx.strokeRect(o.x+o.w/2+o.hover_icon_x-2,o.y+o.h/2+o.hover_icon_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_wildcards.length;    i++) { var o = self.cache_unlocked_wildcards[i];    o.hover_icon_x = screenSpaceW(my_camera,canv,o.hover_icon_wx); o.hover_icon_y = -screenSpaceH(my_camera,canv,o.hover_icon_wy); ctx.strokeRect(o.x+o.w/2+o.hover_icon_x-2,o.y+o.h/2+o.hover_icon_y-2,4,4); }
      for(var i = 0; i < self.cache_unlocked_cutscenes.length;    i++) { var o = self.cache_unlocked_cutscenes[i];    o.hover_icon_x = screenSpaceW(my_camera,canv,o.hover_icon_wx); o.hover_icon_y = -screenSpaceH(my_camera,canv,o.hover_icon_wy); ctx.strokeRect(o.x+o.w/2+o.hover_icon_x-2,o.y+o.h/2+o.hover_icon_y-2,4,4); }

      if(my_camera == my_debug_camera)
      {
        ctx.strokeStyle = black;
        strokeBox(my_real_camera,ctx);
      }

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
  self.w = 100;
  self.h = 100;

  self.toolbar_animcycle_inst;
  self.icon_map_instanimcycle_inst;
  self.icon_notebook_animcycle_inst;
  self.notebook = {x:20,  y:self.y+15, w:self.h-40, h:self.h-40};
  self.map      = {x:100, y:self.y+15, w:self.h-40, h:self.h-40};

  var MAP_ENABLED = 0;

  self.consume_level = function(level)
  {
    self.toolbar_animcycle_inst       = gen_animcycle_inst(level.toolbar_animcycle_id,level.animcycles);
    self.icon_map_animcycle_inst      = gen_animcycle_inst(level.icon_map_animcycle_id,level.animcycles);
    self.icon_notebook_animcycle_inst = gen_animcycle_inst(level.icon_notebook_animcycle_id,level.animcycles);
  }

  self.click = function(evt)
  {
    if(MAP_ENABLED && ptWithinBox(self.map,evt.doX,evt.doY))
    {
      my_navigable.selected_act = 0;
      state_from = state_cur;
      state_to = STATE_MAP;
      state_cur = STATE_TRANSITION;
      state_t = 0;
      my_mapview.unlock_content();
    }
    if(ptWithinBox(self.notebook,evt.doX,evt.doY))
    {
      my_navigable.selected_act = 0;
      state_from = state_cur;
      state_to = STATE_NOTEBOOK;
      state_cur = STATE_TRANSITION;
      state_t = 0;
    }
  }

  self.tick = function()
  {
    self.toolbar_animcycle_inst.tick();
    self.icon_map_animcycle_inst.tick();
    self.icon_notebook_animcycle_inst.tick();
  }

  self.draw = function(t)
  {
    var yoff = (1-t)*self.h;
    ctx.drawImage(self.toolbar_animcycle_inst.img,       self.x,         self.y         +yoff, self.w,         self.h);
    ctx.drawImage(self.icon_notebook_animcycle_inst.img, self.notebook.x,self.notebook.y+yoff, self.notebook.w,self.notebook.h);
    if(MAP_ENABLED)
    ctx.drawImage(self.icon_map_animcycle_inst.img,      self.map.x,     self.map.y     +yoff, self.map.w,     self.map.h);

    if(DEBUG)
    {
      ctx.strokeRect(self.x,         self.y         +yoff, self.w,         self.h);
      ctx.strokeRect(self.notebook.x,self.notebook.y+yoff, self.notebook.w,self.notebook.h);
      if(MAP_ENABLED)
      ctx.strokeRect(self.map.x,     self.map.y     +yoff, self.map.w,     self.map.h);
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

  self.level;
  self.selected_scene = 0;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.cache_unlocked_scenes = [];

  self.map_animcycle_inst;

  self.consume_level = function(level)
  {
    self.level = level;
    if(!self.level.key && self.level.notifications.length) my_notificationview.consume_notification(self.level.notifications);
    self.level.key = true;
    self.unlock_content();
    self.selected_scene = 0;
    self.map_animcycle_inst = gen_animcycle_inst(level.map_animcycle_id, level.animcycles);
    self.exit_animcycle_inst = gen_animcycle_inst(level.exit_animcycle_id, level.animcycles);
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_scenes = [];
    for(var i = 0; i < self.level.scenes.length; i++)
      if(!querylocked(self.level.scenes[i])) self.cache_unlocked_scenes.push(self.level.scenes[i]);
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.dragStart = function(evt)
  {
    self.edit_o = 0;
    for(var i = 0; !self.edit_o && i < self.cache_unlocked_scenes.length; i++)
      if(ptWithinBox(self.cache_unlocked_scenes[i],evt.doX,evt.doY)) { self.edit_o = self.cache_unlocked_scenes[i]; }

    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w && self.edit_offY > 0.4*self.edit_o.h)
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
      self.edit_o.h += self.deltaY;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));
    worldSpace(my_ui_camera,canv,self.edit_o);

    self._dirty = true;
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
    my_cursor.mode = CURSOR_NORMAL;
    my_cursor.o = 0;
    for(var i = 0; i < self.cache_unlocked_scenes.length; i++)
      if(ptWithinBox(self.cache_unlocked_scenes[i],evt.doX,evt.doY))
        my_cursor.mode = CURSOR_MAP;
  }
  self.unhover = function(evt)
  {
  }

  self.click = function(evt)
  {
    if(ptWithinBox(self.exit_box,evt.doX,evt.doY))
    {
      state_from = state_cur;
      state_to = state_stack;
      state_cur = STATE_TRANSITION;
      state_t = 0;
    }
    for(var i = 0; i < self.cache_unlocked_scenes.length; i++)
    {
      if(ptWithinBox(self.cache_unlocked_scenes[i],evt.doX,evt.doY))
      {
        self.selected_scene = self.cache_unlocked_scenes[i];
        state_from = state_cur;
        state_to = state_stack;
        state_cur = STATE_TRANSITION;
        state_t = 0;
      }
    }
  }

  self.tick = function()
  {
    self.map_animcycle_inst.tick();
    for(var i = 0; i < self.cache_unlocked_scenes.length; i++)
    {
      self.cache_unlocked_scenes[i].animcycle_inst.tick();
      screenSpace(my_ui_camera,canv,self.cache_unlocked_scenes[i]);
    }
  }

  self.draw = function(t)
  {
    var yoff = (1-t)*self.h
    ctx.drawImage(self.map_animcycle_inst.img, self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < self.cache_unlocked_scenes.length; i++) ctx.drawImage(self.cache_unlocked_scenes[i].animcycle_inst.img, self.cache_unlocked_scenes[i].x, self.cache_unlocked_scenes[i].y+yoff, self.cache_unlocked_scenes[i].w, self.cache_unlocked_scenes[i].h);
    ctx.drawImage(self.exit_animcycle_inst.img, self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

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

var notebookview = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.entrys;
  self.notebook_animcycle_inst;
  self.exit_box = {x:canv.width-100, y:10, w:90, h:90};
  self.prev_box = {x:10,             y:100, w:90, h:90};
  self.next_box = {x:canv.width-100, y:100, w:90, h:90};
  self.cache_unlocked_entrys = [];

  self.page = 0;
  self.last_page = 0;

  self.consume_level = function(level)
  {
    self.entrys = level.entrys;
    self.unlock_content();
    self.notebook_animcycle_inst = gen_animcycle_inst(level.notebook_animcycle_id,level.animcycles);
    self.exit_animcycle_inst = gen_animcycle_inst(level.exit_animcycle_id, level.animcycles);
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_entrys = [];
    self.last_page = 0;
    for(var i = 0; i < self.entrys.length; i++)
      if(!querylocked(self.entrys[i]))
      {
        if(self.entrys[i].page > self.last_page) self.last_page = self.entrys[i].page;
        //sort by page->z
        var j = 0;
        for(; j < self.cache_unlocked_entrys.length; j++) if(self.entrys[i].page < self.cache_unlocked_entrys[i].page || (self.entrys[i].page == self.cache_unlocked_entrys[i].page && self.entrys[i].wz < self.cache_unlocked_entrys[i].wz)) break;
        self.cache_unlocked_entrys.splice(j,0,self.entrys[i]);
      }
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.dragStart = function(evt)
  {
    self.edit_o = 0;
    for(var i = 0; !self.edit_o && i < self.cache_unlocked_entrys.length; i++)
      if(ptWithinBox(self.cache_unlocked_entrys[i],evt.doX,evt.doY)) { self.edit_o = self.cache_unlocked_entrys[i]; }

    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w && self.edit_offY > 0.4*self.edit_o.h)
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
      self.edit_o.h += self.deltaY;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));
    worldSpace(my_ui_camera,canv,self.edit_o);

    self._dirty = true;
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
  }
  self.unhover = function(evt)
  {
  }


  self.click = function(evt)
  {
    if(ptWithinBox(self.exit_box,evt.doX,evt.doY))
    {
      state_from = state_cur;
      state_to = state_stack;
      state_cur = STATE_TRANSITION;
      state_t = 0;
    }
    else if(self.page > 0                && ptWithinBox(self.prev_box,evt.doX,evt.doY))
      self.page--;
    else if(self.page < self.last_page-1 && ptWithinBox(self.next_box,evt.doX,evt.doY))
      self.page++;
  }

  self.tick = function()
  {
    for(var i = 0; i < self.cache_unlocked_entrys.length; i++)
    {
      self.cache_unlocked_entrys[i].animcycle_inst.tick();
      screenSpace(my_ui_camera,canv,self.cache_unlocked_entrys[i]);
    }
    self.notebook_animcycle_inst.tick();
  }

  self.draw = function(t)
  {
    var yoff = (1-t)*self.h;
    ctx.drawImage(self.notebook_animcycle_inst.img, self.x, self.y+yoff, self.w, self.h);
    ctx.strokeRect(self.prev_box.x, self.prev_box.y+yoff, self.prev_box.w, self.prev_box.h);
    ctx.strokeRect(self.next_box.x, self.next_box.y+yoff, self.next_box.w, self.next_box.h);
    ctx.drawImage(self.exit_animcycle_inst.img, self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

    var entry;
    for(var i = 0; i < self.cache_unlocked_entrys.length; i++)
    {
      entry = self.cache_unlocked_entrys[i];
      if(entry.page == self.page)
        ctx.drawImage(entry.animcycle_inst.img,entry.x,entry.y+yoff,entry.w,entry.h);
    }

    if(DEBUG)
    {
      ctx.strokeStyle = black;
      var entry;
      for(var i = 0; i < self.cache_unlocked_entrys.length; i++)
      {
        entry = self.cache_unlocked_entrys[i];
        ctx.strokeRect(entry.x,entry.y+yoff,entry.w,entry.h);
      }
      ctx.strokeRect(self.prev_box.x, self.prev_box.y+yoff, self.prev_box.w, self.prev_box.h);
      ctx.strokeRect(self.next_box.x, self.next_box.y+yoff, self.next_box.w, self.next_box.h);
      ctx.strokeRect(self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);
    }
  }
}

var notificationview = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.q = [];
  self.note = [];
  self.note_i = 0;

  self.bubble_color = "#242224";
  self.text_color = white;

  var ENUM = 0;
  var UI_STATE_NULL    = ENUM; ENUM++;
  var UI_STATE_IN_NOTE = ENUM; ENUM++;
  var UI_STATE_SELECT  = ENUM; ENUM++;
  var UI_STATE_NEXT    = ENUM; ENUM++;
  var UI_STATE_OUT     = ENUM; ENUM++;
  var UI_STATE_COUNT   = ENUM; ENUM++;

  self.ui_state = UI_STATE_NULL;
  self.ui_state_t = 0;
  self.ui_state_t_max = [];
  self.ui_state_t_max[UI_STATE_IN_NOTE] = 60;
  self.ui_state_t_max[UI_STATE_SELECT]  = 0;
  self.ui_state_t_max[UI_STATE_NEXT]    = 1;
  self.ui_state_t_max[UI_STATE_OUT]     = 10;
  self.ui_state_p = 0;

  self.consume_notification = function(notification)
  {
    self.q.push(notification);
  }

  self.dequeue = function()
  {
    if(!self.note.length && self.q.length)
    {
      self.note = self.q[0];
      self.note_i = 0;
      self.q.splice(0,1);
      self.ui_state = UI_STATE_IN_NOTE;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
    }
    return self.note;
  }

  self.click = function(evt)
  {
    if(self.ui_state == UI_STATE_NULL) return;
    self.ui_state_t = self.ui_state_t_max[self.ui_state];
    if(self.ui_state != UI_STATE_OUT)
    {
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      if(self.note[self.note_i+1])
        self.ui_state = UI_STATE_NEXT;
      else
        self.ui_state = UI_STATE_OUT;
    }
  }

  self.tick = function()
  {
    self.ui_state_t++;
    self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
    switch(self.ui_state)
    {
      case UI_STATE_IN_NOTE: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
      case UI_STATE_SELECT: break;
      case UI_STATE_NEXT:
        if(self.ui_state_p >= 1)
        {
          self.note_i++;
          self.ui_state = UI_STATE_SELECT;
          self.ui_state_t = 0;
          self.ui_state_p = 0;
        }
        break;
      case UI_STATE_OUT:
        if(self.ui_state_p >= 1)
        {
          self.note = 0;
          self.ui_state = UI_STATE_NULL;
          self.ui_state_t = 0;
          self.ui_state_p = 0;
        }
        break;
    }
  }

  self.draw = function(t)
  {
    if(self.ui_state == UI_STATE_NULL) return;

    var yoff = 0;

    var a = 1;
    switch(self.ui_state)
    {
      case UI_STATE_IN_NOTE: a = self.ui_state_p; yoff = sin(self.ui_state_p*twopi*5)*(1-self.ui_state_p)*5; break;
      case UI_STATE_SELECT:  break;
      case UI_STATE_NEXT:    break;
      case UI_STATE_OUT:     a = 1-self.ui_state_p; yoff = -self.ui_state_p*10; break;
    }
    ctx.globalAlpha = a;

    var b = 10;
    var h = cur_level.notifications_h*self.note[self.note_i].length;
    var w = cur_level.notifications_w;
    var x = self.x+self.w/2-w/2;
    var y = self.y+self.h-30-h;
    ctx.fillStyle = self.bubble_color;
    fillRRect(x-b-5,y-b+5+yoff,w+b*2+10,h+b*2+5,b,ctx);
    ctx.fillStyle = self.text_color;
    var oyoff = 0;
    for(var i = 0; i < self.note[self.note_i].length; i++)
    {
      ctx.fillText(self.note[self.note_i][i],x,y+yoff+cur_level.notifications_h+oyoff);
      oyoff += cur_level.notifications_h;
    }
    ctx.globalAlpha = 1;
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
  self.cache_unlocked_zones = [];

  self.consume_object = function(object)
  {
    self.object = object;
    if(!self.object.key && self.object.notifications.length) my_notificationview.consume_notification(self.object.notifications);
    self.object.key = true;
    self.cur_view = self.object.views[0];
    for(var i = 1; i < self.object.views.length; i++) if(self.object.views[i].primary > self.cur_view.primary) self.cur_view = self.object.views[i];
    if(!self.cur_view.key && self.cur_view.notifications.length) my_notificationview.consume_notification(self.cur_view.notifications);
    self.cur_view.key = true;
    self.unlock_content();
    self.exit_animcycle_inst = gen_animcycle_inst(cur_level.exit_animcycle_id, cur_level.animcycles);
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_zones = [];
    for(var i = 0; i < self.cur_view.zones.length; i++)
      if(!querylocked(self.cur_view.zones[i])) self.cache_unlocked_zones.push(self.cur_view.zones[i]);
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.dragStart = function(evt)
  {
    self.edit_o = 0;
    var zone;
    for(var i = 0; i < self.cache_unlocked_zones.length; i++)
    {
      zone = self.cache_unlocked_zones[i];
      if(ptWithinBox(zone,evt.doX,evt.doY)) self.edit_o = zone;
    }

    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w && self.edit_offY > 0.4*self.edit_o.h)
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
      self.edit_o.h += self.deltaY;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));
    worldSpace(my_ui_camera,canv,self.edit_o);

    self._dirty = true;
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
    my_cursor.mode = CURSOR_NORMAL;
    my_cursor.o = 0;
    for(var i = 0; i < self.cache_unlocked_zones.length; i++)
      if(ptWithinBox(self.cache_unlocked_zones[i],evt.doX,evt.doY))
        my_cursor.mode = CURSOR_ZONE;
  }
  self.unhover = function(evt)
  {
  }

  self.click = function(evt)
  {
    if(ptWithinBox(self.exit_box,evt.doX,evt.doY))
    {
      state_from = state_cur;
      state_to = state_stack;
      state_cur = STATE_TRANSITION;
      state_t = 0;
    }
    var zone;
    for(var i = 0; i < self.cache_unlocked_zones.length; i++)
    {
      zone = self.cache_unlocked_zones[i];
      if(ptWithinBox(zone,evt.doX,evt.doY))
      {
        if(!zone.key && zone.notifications.length) my_notificationview.consume_notification(zone.notifications);
        zone.key = true;
        self.cur_view = find(self.object.fqid+"."+zone.target_view);
        if(!self.cur_view.key && self.cur_view.notifications.length) my_notificationview.consume_notification(self.cur_view.notifications);
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
    {
      self.cache_unlocked_zones[i].animcycle_inst.tick();
      screenSpace(my_ui_camera,canv,self.cache_unlocked_zones[i]);
    }
  }

  self.draw = function(t)
  {
    var yoff = (1-t)*self.h;
    var zone;
    ctx.drawImage(self.cur_view.animcycle_inst.img, self.x, self.y+yoff, self.w, self.h);
    for(var i = 0; i < self.cache_unlocked_zones.length; i++)
    {
      zone = self.cache_unlocked_zones[i];
      ctx.strokeStyle = white;
      ctx.strokeRect(zone.x, zone.y+yoff, zone.w, zone.h);
      ctx.drawImage(zone.animcycle_inst.img, zone.x, zone.y+yoff, zone.w, zone.h);
    }
    ctx.drawImage(self.exit_animcycle_inst.img, self.exit_box.x, self.exit_box.y+yoff, self.exit_box.w, self.exit_box.h);

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

var observationview = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.observation;

  self.bubble_color = "#242224";
  self.text_color = white;

  var ENUM = 0;
  var UI_STATE_NULL           = ENUM; ENUM++;
  var UI_STATE_IN_OBSERVATION = ENUM; ENUM++;
  var UI_STATE_SELECT         = ENUM; ENUM++;
  var UI_STATE_OUT            = ENUM; ENUM++;
  var UI_STATE_COUNT          = ENUM; ENUM++;

  self.ui_state = UI_STATE_NULL;
  self.ui_state_t = 0;
  self.ui_state_t_max = [];
  self.ui_state_t_max[UI_STATE_IN_OBSERVATION] = 60;
  self.ui_state_t_max[UI_STATE_SELECT]         = 0;
  self.ui_state_t_max[UI_STATE_OUT]            = 10;
  self.ui_state_p = 0;

  self.consume_observation = function(observation)
  {
    self.observation = observation;
    if(!self.observation.key && self.observation.notifications.length) my_notificationview.consume_notification(self.observation.notifications);
    self.observation.key = true;
    self.ui_state = UI_STATE_IN_OBSERVATION;
    self.ui_state_t = 0;
    self.ui_state_p = 0;
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.blip_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.blip;
    self.consume_blip = function(b)
    {
      self.blip = b;
      self.x = self.blip.blip_x;
      self.y = self.blip.blip_y;
      self.w = self.blip.blip_w;
      self.h = self.blip.blip_h;
      self.blip.blip_wx = worldSpaceXpt(my_camera,canv,self.blip.blip_x);
      self.blip.blip_wy = worldSpaceYpt(my_camera,canv,self.blip.blip_y);
    }
    self.edit = function()
    {
      self.blip.blip_x = self.x;
      self.blip.blip_y = self.y;
      self.blip.blip_w = self.w;
      self.blip.blip_h = self.h;
      self.blip.blip_wx = worldSpaceXpt(my_camera,canv,self.blip.blip_x);
      self.blip.blip_wy = worldSpaceYpt(my_camera,canv,self.blip.blip_y);

      self.blip.text = stextToLines(self.blip.raw_text, self.blip.blip_w);
    }
  })();
  self.dragStart = function(evt)
  {
    self.edit_o = 0;

    if(!self.edit_o && ptWithin(self.observation.blip_x,self.observation.blip_y,self.observation.blip_w,self.observation.blip_h,evt.doX,evt.doY)) { self.edit_o = self.blip_editor; self.blip_editor.consume_blip(self.observation); }
    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w)
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_o == self.blip_editor) self.blip_editor.edit();
    worldSpace(my_camera,canv,self.edit_o);

    self._dirty = true;
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
  }
  self.unhover = function(evt)
  {
  }

  self.click = function(evt)
  {
    self.ui_state_t = self.ui_state_t_max[self.ui_state];
    if(self.ui_state != UI_STATE_OUT)
    {
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.ui_state = UI_STATE_OUT;
    }
  }

  self.tick = function()
  {
    self.observation.blip_x = screenSpaceXpt(my_camera,canv,self.observation.blip_wx);
    self.observation.blip_y = screenSpaceYpt(my_camera,canv,self.observation.blip_wy);

    self.ui_state_t++;
    self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
    switch(self.ui_state)
    {
      case UI_STATE_IN_OBSERVATION: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
      case UI_STATE_SELECT: break;
      case UI_STATE_OUT:
        if(self.ui_state_p >= 1)
        {
          self.ui_state = UI_STATE_NULL;
          self.ui_state_t = 0;
          self.ui_state_p = 0;
          state_from = state_cur;
          state_to = state_stack;
          state_cur = STATE_TRANSITION;
          state_t = 0;
        }
        break;
    }
  }

  self.draw = function(t)
  {
    if(self.ui_state == UI_STATE_NULL) return;

    var yoff = 0;
    var oyoff = 0;

    var a = 1;
    switch(self.ui_state)
    {
      case UI_STATE_IN_OBSERVATION: a = self.ui_state_p; yoff = sin(self.ui_state_p*twopi*5)*(1-self.ui_state_p)*5; break;
      case UI_STATE_SELECT:         break;
      case UI_STATE_OUT:            a = 1-self.ui_state_p; yoff = -self.ui_state_p*10; break;
    }
    ctx.globalAlpha = a;

    var b = 10;
    ctx.fillStyle = self.bubble_color;
    fillRRect(self.observation.blip_x-b-5,self.observation.blip_y-b+5+yoff,self.observation.blip_w+b*2+10,self.observation.blip_h*self.observation.text.length+b*2+5,b,ctx);
    ctx.fillStyle = self.text_color;
    for(var j = 0; j < self.observation.text.length; j++)
    {
      ctx.fillText(self.observation.text[j],self.observation.blip_x,self.observation.blip_y+yoff+oyoff+self.observation.blip_h);
      oyoff += self.observation.blip_h;
    }
    ctx.globalAlpha = 1;

    if(DEBUG)
    {
      ctx.strokeRect(self.observation.blip_x,self.observation.blip_y+yoff,self.observation.blip_w,self.observation.blip_h);
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
  self.cache_unlocked_speaks = [];
  self.cache_unlocked_options = [];

  self.bubble_color = "#242224";
  self.text_color = white;
  self.hover_color = blue;

  var ENUM = 0;
  var UI_STATE_NULL      = ENUM; ENUM++;
  var UI_STATE_IN_SPEAK  = ENUM; ENUM++;
  var UI_STATE_IN_OPTION = ENUM; ENUM++;
  var UI_STATE_SELECT    = ENUM; ENUM++;
  var UI_STATE_OUT       = ENUM; ENUM++;
  var UI_STATE_COUNT     = ENUM; ENUM++;

  self.inline_option = 0;
  self.hovered_option = 0;
  self.clicked_option = 0;
  self.ui_state = UI_STATE_NULL;
  self.ui_state_t = 0;
  self.ui_state_t_max = [];
  self.ui_state_t_max[UI_STATE_IN_SPEAK]  = 60;
  self.ui_state_t_max[UI_STATE_IN_OPTION] = 60;
  self.ui_state_t_max[UI_STATE_SELECT]    = 0;
  self.ui_state_t_max[UI_STATE_OUT]       = 10;
  self.ui_state_p = 0;

  self.consume_person = function(person)
  {
    self.person = person;
    if(!self.person.key && self.person.notifications.length) my_notificationview.consume_notification(self.person.notifications);
    self.person.key = true;
    self.unlock_content();
    self.ui_state = UI_STATE_IN_SPEAK;
    self.ui_state_t = 0;
    self.ui_state_p = 0;
  }

  self.dismiss = function()
  {
    var speak = self.clicked_option.target_speak_found;
    self.clicked_option = 0;
    if(!speak)
    {
      self.ui_state = UI_STATE_NULL;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak = 0;
      state_from = state_cur;
      state_to = state_stack;
      state_cur = STATE_TRANSITION;
      state_t = 0;
    }
    else
    {
      self.ui_state = UI_STATE_IN_SPEAK;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak = speak;
      if(!self.cur_speak.key && self.cur_speak.notifications.length) my_notificationview.consume_notification(self.cur_speak.notifications);
      self.cur_speak.key = true;
      self.unlock_content();
    }
  }

  self.unlock_content = function()
  {
    self.cache_unlocked_speaks = [];
    for(var i = 0; i < self.person.speaks.length; i++)
      if(!querylocked(self.person.speaks[i])) self.cache_unlocked_speaks.push(self.person.speaks[i]);

    if(!self.cur_speak)
    {
      self.cur_speak = self.cache_unlocked_speaks[0];
      for(var i = 1; i < self.cache_unlocked_speaks.length; i++)
        if(self.cache_unlocked_speaks[i].primary > self.cur_speak.primary)
          self.cur_speak = self.cache_unlocked_speaks[i];
      if(!self.cur_speak.key && self.cur_speak.notifications.length) my_notificationview.consume_notification(self.cur_speak.notifications);
      self.cur_speak.key = true;
    }

    self.unlock_options();
  }
  self.unlock_options = function()
  {
    self.cache_unlocked_options = [];
    for(var i = 0; i < self.cur_speak.options.length; i++)
    {
      if(!querylocked(self.cur_speak.options[i]))
        self.cache_unlocked_options.push(self.cur_speak.options[i]);
    }
    //bubble sort on index
    var sorted = false;
    while(!sorted)
    {
      sorted = true;
      for(var i = 0; i < self.cache_unlocked_options.length-1; i++)
      {
        var option = self.cache_unlocked_options[i];
        var noption = self.cache_unlocked_options[i+1];
        if(option.index > noption.index)
        {
          self.cache_unlocked_options[i] = noption;
          self.cache_unlocked_options[i+1] = option;
          sorted = false;
        }
      }
    }

    self.inline_option = 0;
    if(self.cache_unlocked_options.length == 1)
    {
      var option = self.cache_unlocked_options[0];
      if(option.raw_qtext == ">") self.inline_option = 1;
    }
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.speak_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.cur_speak;
    self.consume_speak = function(s)
    {
      self.cur_speak = s;
      self.x = self.cur_speak.x;
      self.y = self.cur_speak.y;
      self.w = self.cur_speak.w;
      self.h = self.cur_speak.h;
      self.cur_speak.wx = worldSpaceXpt(my_camera,canv,self.cur_speak.x);
      self.cur_speak.wy = worldSpaceYpt(my_camera,canv,self.cur_speak.y);
    }
    self.edit = function()
    {
      self.cur_speak.x = self.x;
      self.cur_speak.y = self.y;
      self.cur_speak.w = self.w;
      self.cur_speak.h = self.h;
      self.cur_speak.wx = worldSpaceXpt(my_camera,canv,self.cur_speak.x);
      self.cur_speak.wy = worldSpaceYpt(my_camera,canv,self.cur_speak.y);

      self.cur_speak.atext = stextToLines(self.cur_speak.raw_atext, self.cur_speak.w);
    }
  })();
  self.options_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.cur_speak;
    self.consume_speak = function(s)
    {
      self.cur_speak = s;
      self.x = self.cur_speak.options_x;
      self.y = self.cur_speak.options_y;
      self.w = self.cur_speak.options_w;
      self.h = self.cur_speak.options_h;
      self.cur_speak.options_wx = worldSpaceXpt(my_camera,canv,self.cur_speak.options_x);
      self.cur_speak.options_wy = worldSpaceYpt(my_camera,canv,self.cur_speak.options_y);
    }
    self.edit = function()
    {
      self.cur_speak.options_x = self.x;
      self.cur_speak.options_y = self.y;
      self.cur_speak.options_w = self.w;
      self.cur_speak.options_h = self.h;
      self.cur_speak.options_wx = worldSpaceXpt(my_camera,canv,self.cur_speak.options_x);
      self.cur_speak.options_wy = worldSpaceYpt(my_camera,canv,self.cur_speak.options_y);

      var s = self.cur_speak;
      for(var i = 0; i < s.options.length; i++)
        s.options[i].qtext = stextToLines(s.options[i].raw_qtext, s.options_w);
    }
  })();
  self.dragStart = function(evt)
  {
    self.edit_o = 0;
    if(!self.edit_o && ptWithinBox(self.cur_speak,evt.doX,evt.doY))                                                                                   { self.edit_o = self.speak_editor; self.speak_editor.consume_speak(self.cur_speak); }
    if(!self.edit_o && ptWithin(self.cur_speak.options_x,self.cur_speak.options_y,self.cur_speak.options_w,self.cur_speak.options_h,evt.doX,evt.doY)) { self.edit_o = self.options_editor; self.options_editor.consume_speak(self.cur_speak); }

    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w)//right 10%
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_o == self.options_editor) self.options_editor.edit();
    if(self.edit_o == self.speak_editor)   self.speak_editor.edit();
    else worldSpace(my_camera,canv,self.edit_o);

    self._dirty = true;
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
    my_cursor.mode = CURSOR_NORMAL;
    my_cursor.o = 0;

    var speak = self.cur_speak;
    var option;
    self.hovered_option = 0;

    if(!self.inline_option)
    {
      var oyoff;
      oyoff = speak.options_y+5;
      for(var i = 0; i < self.cache_unlocked_options.length; i++)
      {
        option = self.cache_unlocked_options[i];
        for(var j = 0; j < option.qtext.length; j++)
        {
          if(ptWithin(speak.options_x,oyoff,speak.options_w,speak.options_h,evt.doX,evt.doY))
          {
            self.hovered_option = option;
            my_cursor.mode = CURSOR_OPTION;
          }
          oyoff += speak.options_h;
        }
      }
    }
    else //inline_option
    {
      option = self.cache_unlocked_options[0];
      var x = speak.x;
      var y = speak.y+5;
      var w = speak.w;
      var h = speak.h*speak.atext.length;
      if(ptWithin(x,y,w,h,evt.doX,evt.doY))
      {
        my_cursor.mode = CURSOR_OPTION;
        self.hovered_option = option;
      }
    }
  }
  self.unhover = function(evt)
  {
    self.hovered_option = 0;
  }

  self.click = function(evt)
  {
    self.ui_state_t = self.ui_state_t_max[self.ui_state];

    var speak = self.cur_speak;
    var option;
    self.clicked_option = 0;

    if(!self.inline_option)
    {
      var oyoff;

      oyoff = speak.options_y+5;
      if(oyoff < speak.y+speak.h*speak.atext.length) oyoff = speak.y+speak.h*speak.atext.length;
      for(var i = 0; i < self.cache_unlocked_options.length; i++)
      {
        option = self.cache_unlocked_options[i];
        for(var j = 0; j < option.qtext.length; j++)
        {
          if(ptWithin(speak.options_x,oyoff,speak.options_w,speak.options_h,evt.doX,evt.doY))
            self.clicked_option = option;
          oyoff += speak.options_h;
        }
      }
    }
    else //inline_option
      self.clicked_option = self.cache_unlocked_options[0];

    if(self.clicked_option)
    {
      if(!self.clicked_option.key && self.clicked_option.notifications.length) my_notificationview.consume_notification(self.clicked_option.notifications);
      self.clicked_option.key = true;
      if(self.ui_state != UI_STATE_OUT)
      {
        self.ui_state_t = 0;
        self.ui_state_p = 0;
        self.ui_state = UI_STATE_OUT;
      }
    }
  }

  self.tick = function()
  {
    self.cur_speak.animcycle_inst.tick();
    self.cur_speak.x = screenSpaceXpt(my_camera,canv,self.cur_speak.wx);
    self.cur_speak.y = screenSpaceYpt(my_camera,canv,self.cur_speak.wy);
    self.cur_speak.options_x = screenSpaceXpt(my_camera,canv,self.cur_speak.options_wx);
    self.cur_speak.options_y = screenSpaceYpt(my_camera,canv,self.cur_speak.options_wy);

    self.ui_state_t++;
    self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
    switch(self.ui_state)
    {
      case UI_STATE_IN_SPEAK:
        if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_IN_OPTION; self.ui_state_t = 0; self.ui_state_p = 0; } break;
      case UI_STATE_IN_OPTION:
        if(self.inline_option) self.ui_state_p = 1;
        if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT;    self.ui_state_t = 0; self.ui_state_p = 0; } break;
      case UI_STATE_SELECT:    break;
      case UI_STATE_OUT:
        if(self.ui_state_p >= 1) self.dismiss();
        break;
    }
  }

  self.draw = function(t)
  {
    if(self.ui_state == UI_STATE_NULL) return;

    var yoff = 0;
    var speak = self.cur_speak;
    var oyoff;

    var a = 1;
    switch(self.ui_state)
    {
      case UI_STATE_IN_SPEAK:  a = self.ui_state_p; yoff = sin(self.ui_state_p*twopi*5)*(1-self.ui_state_p)*5; break;
      case UI_STATE_IN_OPTION: break;
      case UI_STATE_SELECT:    break;
      case UI_STATE_OUT:       a = 1-self.ui_state_p; yoff = -self.ui_state_p*10; break;
    }
    ctx.globalAlpha = a;

    var b = 10;
    ctx.fillStyle = self.bubble_color;
    fillRRect(speak.x-b-5,speak.y-b+5+yoff,speak.w+b*2+10,speak.h*speak.atext.length+b*2+5,b,ctx);

    //tail
    var y = speak.y-b+5+yoff+speak.h*speak.atext.length+b*2+5-0.5;
    var x;
    var w = 20;
    var h = 20;
    if(speak.speaker == SPEAKER_PERSON)
      x = clamp(speak.x, speak.x+speak.w-w, self.person.x + self.person.w/2-w/2);
    else
      x = clamp(speak.x, speak.x+speak.w-w, my_avatar.x + my_avatar.w/2-w/2);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+w/2-2,y+h-2);
    ctx.quadraticCurveTo(x+w/2,y+h,x+w/2+2,y+h-2);
    ctx.lineTo(x+w,y);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = self.text_color;
    ctx.font = option_font;
    oyoff = 0;
    for(var j = 0; j < speak.atext.length; j++)
    {
      ctx.fillText(speak.atext[j],speak.x,speak.y+yoff+oyoff+speak.h);
      oyoff += speak.h;
    }

    if(!self.inline_option)
    {
      switch(self.ui_state)
      {
        case UI_STATE_IN_SPEAK:  a = 0; yoff = 100000; break;
        case UI_STATE_IN_OPTION: a = self.ui_state_p; yoff = sin(self.ui_state_p*twopi*5)*(1-self.ui_state_p)*5; break;
        case UI_STATE_SELECT:    break;
        case UI_STATE_OUT:       a = 1-self.ui_state_p; yoff = -self.ui_state_p*10; break;
      }
      ctx.globalAlpha = a;

      var option;

      oyoff = speak.options_y;
      if(oyoff < speak.y+speak.h*speak.atext.length) oyoff = speak.y+speak.h*speak.atext.length;
      var h = 0;
      for(var i = 0; i < self.cache_unlocked_options.length; i++) h += self.cache_unlocked_options[i].qtext.length*speak.options_h;
      ctx.fillStyle = self.bubble_color;
      fillRRect(speak.options_x-b-5,speak.options_y-b+5+yoff,speak.options_w+b*2+10,h+b*2+5,b,ctx);

      //tail
      var y = speak.options_y-b+5+yoff+h+b*2+5-0.5;
      var x = clamp(speak.options_x, speak.options_x+speak.options_w-w, my_avatar.x + my_avatar.w/2-w/2);
      var w = 20;
      var h = 20;
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+w/2-2,y+h-2);
      ctx.quadraticCurveTo(x+w/2,y+h,x+w/2+2,y+h-2);
      ctx.lineTo(x+w,y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = self.text_color;
      for(var i = 0; i < self.cache_unlocked_options.length; i++)
      {
        option = self.cache_unlocked_options[i];
        if(option == self.hovered_option)
        {
          ctx.fillStyle = self.hover_color;
          ctx.fillRect(speak.options_x-5,yoff+oyoff+5,speak.options_w+5,speak.options_h*option.qtext.length);
          ctx.fillStyle = self.text_color;
        }
        for(var j = 0; j < option.qtext.length; j++)
        {
          ctx.fillText(option.qtext[j],speak.options_x,yoff+oyoff+speak.options_h);
          oyoff += speak.options_h;
        }
      }
    }

    ctx.globalAlpha = 1;

    if(DEBUG)
    {
      yoff = 0;
      ctx.strokeStyle = white;
      speak = self.cur_speak;
      oyoff = 0;
      for(var j = 0; j < speak.atext.length; j++)
      {
        ctx.strokeRect(speak.x,speak.y+yoff,speak.w,speak.h);
        oyoff += speak.h;
      }

      oyoff = speak.options_y;
      if(oyoff < speak.y+speak.h*speak.atext.length) oyoff = speak.y+speak.h*speak.atext.length;
      for(var i = 0; i < self.cache_unlocked_options.length; i++)
      {
        option = self.cache_unlocked_options[i];
        for(var j = 0; j < option.qtext.length; j++)
        {
          ctx.strokeRect(speak.options_x,yoff+oyoff,speak.options_w,speak.options_h);
          oyoff += speak.options_h;
        }
      }
    }
  }
}

var cutscene_entity = function()
{
  var self = this;
  self.id = "null";
  self.wx = 0;
  self.wy = 0;
  self.wz = 0;
  self.ww = 0;
  self.wh = 0;
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
}

var cutsceneview = function()
{
  var self = this;

  self.x = 0;
  self.y = 0;
  self.w = canv.width;
  self.h = canv.height;

  self.cutscene;
  self.cutscene_entitys = [];
  self.t = 0;
  self.end = 0;
  self.waiting = 0;
  self.command_i = 0;
  self.running_commands = [];
  self.frame_commands = [];
  self.editable_frame_commands = [];

  self.bubble_color = "#242224";
  self.text_color = white;

  self.consume_cutscene = function(cutscene)
  {
    self.cutscene = cutscene;
    if(!self.cutscene.key && self.cutscene.notifications.length) my_notificationview.consume_notification(self.cutscene.notifications);
    self.cutscene.key = true;

    self.cutscene_entitys = [];
    self.t = 0;
    self.end = false;
    self.command_i = 0;

    self.frame_commands = [];
    self.editable_frame_commands = [];
    self.running_commands = [];

    self.tick();
  }

  self.find_cutscene_entity = function(type, id)
  {
    switch(type)
    {
      case CUTSCENE_ENTITY_CAMERA:
        return my_camera;
      case CUTSCENE_ENTITY_AVATAR:
        return my_avatar;
      case CUTSCENE_ENTITY_SCENE:
        for(var i = 0; i < cur_room.persons.length; i++)
          if(cur_room.persons[i].id == id) return cur_room.persons[i];
        for(var i = 0; i < cur_room.objects.length; i++)
          if(cur_room.objects[i].id == id) return cur_room.objects[i];
        for(var i = 0; i < cur_room.wildcards.length; i++)
          if(cur_room.wildcards[i].id == id) return cur_room.wildcards[i];
        for(var i = 0; i < cur_room.inerts.length; i++)
          if(cur_room.inerts[i].id == id) return cur_room.inerts[i];
        break;
      case CUTSCENE_ENTITY_CUTSCENE:
        for(var i = 0; i < self.cutscene_entitys.length; i++)
          if(self.cutscene_entitys[i].id == id) return self.cutscene_entitys[i];
        break;
    }
  }

  self.execute_next_command = function()
  {
    var c = self.cutscene.commands[self.command_i];
    self.frame_commands.push(c);
    switch(c.command)
    {
      case CUTSCENE_COMMAND_DESTROY:
      case CUTSCENE_COMMAND_ACT:
      case CUTSCENE_COMMAND_WAIT:
      case CUTSCENE_COMMAND_END:
      case CUTSCENE_COMMAND_AUDIO:
        break;
      case CUTSCENE_COMMAND_TWEEN:
      case CUTSCENE_COMMAND_TARGET:
        if(c.cutscene_target_entity_type != CUTSCENE_ENTITY_NULL) break;
      case CUTSCENE_COMMAND_ANIMATE:
      case CUTSCENE_COMMAND_CREATE:
      case CUTSCENE_COMMAND_SPEAK:
        self.editable_frame_commands.push(c);
        break;
    }

    switch(c.command)
    {
      case CUTSCENE_COMMAND_NULL: break;
      case CUTSCENE_COMMAND_CREATE:
        var e = new cutscene_entity();
        e.id = c.cutscene_entity_id;
        e.animcycle_inst = gen_animcycle_inst(c.animcycle_id,cur_level.animcycles);
        e.animcycle_inst.frame_t += c.animcycle_offset_t;
        e.x = c.wx;
        e.y = c.wy;
        e.w = c.ww;
        e.h = c.wh;
        self.cutscene_entitys.push(e);
        break;
      case CUTSCENE_COMMAND_DESTROY:
        for(var i = 0; i < self.cutscene_entitys.length; i++)
          if(self.cutscene_entitys[i].id == c.cutscene_entity_id) self.cutscene_entitys.splice(i,1);
        break;
      case CUTSCENE_COMMAND_ANIMATE:
        var e = self.find_cutscene_entity(c.cutscene_entity_type, c.cutscene_entity_id);
        e.animcycle_inst = gen_animcycle_inst(c.animcycle_id,cur_level.animcycles);
        if(c.animcycle_offset_t != CUTSCENE_COMMAND_IGNORE) e.animcycle_inst.frame_t += c.animcycle_offset_t;
        break;
      case CUTSCENE_COMMAND_ACT:
        if(c.cutscene_entity_type != CUTSCENE_ENTITY_SCENE) break;
        var e = self.find_cutscene_entity(c.cutscene_entity_type, c.cutscene_entity_id);
        cur_act = e;
        state_from = state_cur;
        state_cur = STATE_TRANSITION;
        state_t = 0;
        switch(e.act)
        {
          case ACT_PERSON:      state_to = STATE_PERSON;      my_personview.consume_person(cur_act);           get_audio(cur_act.audio_id,cur_level.audios).aud.play(); break;
          case ACT_OBJECT:      state_to = STATE_OBJECT;      my_objectview.consume_object(cur_act);           get_audio(cur_act.audio_id,cur_level.audios).aud.play(); break;
          case ACT_OBSERVATION: state_to = STATE_OBSERVATION; my_observationview.consume_observation(cur_act); get_audio(cur_act.audio_id,cur_level.audios).aud.play(); break;
        }
        break;
      case CUTSCENE_COMMAND_SPEAK:
        var e = self.find_cutscene_entity(c.cutscene_entity_type, c.cutscene_entity_id);
        c.cutscene_entity = e;
        c.text = stextToLines(c.raw_text, c.w);
        self.waiting = 1;
        self.running_commands.push(c);
        break;
      case CUTSCENE_COMMAND_AUDIO:
        break;
      case CUTSCENE_COMMAND_TWEEN:
        var e = self.find_cutscene_entity(c.cutscene_entity_type, c.cutscene_entity_id);
        c.cutscene_entity = e;
        var te = self.find_cutscene_entity(c.cutscene_target_entity_type, c.cutscene_target_entity_id);
        c.cutscene_target_entity = te;
        if(te)
        {
          c.wx = te.wx;
          c.wy = te.wy;
          if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)
          {
            c.wx = my_navigable.cam_target_wx(te.wx);
            c.wy = my_navigable.cam_target_wy(te.wy);
          }
        }
        c.from_wx = e.wx;
        c.from_wy = e.wy;
        c.from_wz = e.wz;
        c.from_ww = e.ww;
        c.from_wh = e.wh;
        if(c.cutscene_entity_type == CUTSCENE_ENTITY_AVATAR) { e.to_wx = c.wx; e.to_wy = c.wy; }
        self.running_commands.push(c);
        break;
      case CUTSCENE_COMMAND_TARGET:
        var e = self.find_cutscene_entity(c.cutscene_entity_type, c.cutscene_entity_id);
        c.cutscene_entity = e;
        var te = self.find_cutscene_entity(c.cutscene_target_entity_type, c.cutscene_target_entity_id);
        c.cutscene_target_entity = te;
        if(te)
        {
          c.wx = te.wx;
          c.wy = te.wy;
          if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)
          {
            c.wx = my_navigable.cam_target_wx(te.wx);
            c.wy = my_navigable.cam_target_wy(te.wy);
          }
        }
        self.running_commands.push(c);
        break;
      case CUTSCENE_COMMAND_WAIT:
        self.waiting = 1;
        break;
      case CUTSCENE_COMMAND_END:
        self.end = 1;
        break;
    }
    self.command_i++;
    if(self.command_i >= self.cutscene.commands.length) self.end = 1;
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.speak_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.cur_speak;
    self.consume_speak = function(s)
    {
      self.cur_speak = s;
      self.x = self.cur_speak.x;
      self.y = self.cur_speak.y;
      self.w = self.cur_speak.w;
      self.h = self.cur_speak.h;
      self.cur_speak.wx = worldSpaceXpt(my_camera,canv,self.cur_speak.x);
      self.cur_speak.wy = worldSpaceYpt(my_camera,canv,self.cur_speak.y);
    }
    self.edit = function()
    {
      self.cur_speak.x = self.x;
      self.cur_speak.y = self.y;
      self.cur_speak.w = self.w;
      self.cur_speak.h = self.h;
      self.cur_speak.wx = worldSpaceXpt(my_camera,canv,self.cur_speak.x);
      self.cur_speak.wy = worldSpaceYpt(my_camera,canv,self.cur_speak.y);
      self.cur_speak.text = stextToLines(self.cur_speak.raw_text, self.w);
    }
  })();
  self.dragStart = function(evt)
  {
    self.edit_o = 0;

    for(var i = 0; i < self.editable_frame_commands.length; i++)
    {
      var c = self.editable_frame_commands[i];
      if(!self.edit_o && ptWithinBox(c,evt.doX,evt.doY))
      {
        if(c.command == CUTSCENE_COMMAND_SPEAK)
        {
          self.edit_o = self.speak_editor;
          self.speak_editor.consume_speak(c);
        }
        else
          self.edit_o = c;
      }
    }

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w && (self.edit_o == self.speak_editor || self.edit_offY > 0.4*self.edit_o.h))
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
      if(self.edit_o != self.speak_editor) self.edit_o.h += self.deltaY;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_o == self.speak_editor)   self.speak_editor.edit();
    else worldSpace(my_camera,canv,self.edit_o);

    self._dirty = true;
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.click = function(evt)
  {
    self.waiting = 0;
    for(var i = 0; i < self.running_commands.length; i++)
    {
      var c = self.running_commands[i];
      if(c.command == CUTSCENE_COMMAND_SPEAK)
      {
        if(c.command_state != 2)
        {
          c.command_state = 2;
          c.command_t = 0;
        }
      }
    }
  }

  self.hover = function(evt)
  {
  }
  self.unhover = function(evt)
  {
  }

  self.tick = function()
  {
    while(!self.end && self.command_i < self.cutscene.commands.length && self.cutscene.commands[self.command_i].t < self.t && !self.waiting)
      self.execute_next_command();
    for(var i = 0; i < self.editable_frame_commands.length; i++)
    {
      var c = self.editable_frame_commands[i];
      if(c.command != CUTSCENE_COMMAND_SPEAK) //SPEAK will get set anyway
        screenSpace(my_camera, canv, c);
    }

    for(var i = 0; !self.end && i < self.running_commands.length; i++)
    {
      var c = self.running_commands[i];
      if(c.command == CUTSCENE_COMMAND_TWEEN)
      {
        var e = c.cutscene_entity;
        var t = min(1,invlerp(c.t,c.end_t,self.t));
        if(c.wx != CUTSCENE_COMMAND_IGNORE) e.wx = lerp(c.from_wx,c.wx,t);
        if(c.wy != CUTSCENE_COMMAND_IGNORE) e.wy = lerp(c.from_wy,c.wy,t);
        if(c.wz != CUTSCENE_COMMAND_IGNORE) e.wz = lerp(c.from_wz,c.wz,t);
        if(c.ww != CUTSCENE_COMMAND_IGNORE) e.ww = lerp(c.from_ww,c.ww,t);
        if(c.wh != CUTSCENE_COMMAND_IGNORE) e.wh = lerp(c.from_wh,c.wh,t);
        if(t == 1)
        {
          self.running_commands.splice(i,1);
          i--;
        }
      }
      else if(c.command == CUTSCENE_COMMAND_TARGET)
      {
        var e = c.cutscene_entity;
        e.wx = lerp(e.wx,c.wx,cur_level.target_lerp_s);
        e.wy = lerp(e.wy,c.wy,cur_level.target_lerp_s);
        if(distsqr(e.wx,e.wy,c.wx,c.wy) < 0.0001)
        {
          self.running_commands.splice(i,1);
          i--;
        }
      }
      else if(c.command == CUTSCENE_COMMAND_SPEAK)
      {
        c.x = screenSpaceXpt(my_camera,canv,c.wx);
        c.y = screenSpaceYpt(my_camera,canv,c.wy);
        c.command_t++;
        if(c.command_state != 1 && c.command_t > 30) c.command_state++;
        if(c.command_state == 3)
        {
          self.running_commands.splice(i,1)
          i--;
        }
      }
    }

    for(var i = 0; i < self.cutscene_entitys.length; i++)
      self.cutscene_entitys[i].animcycle_inst.tick();

    if((!DEBUG || CUTSCENE_ADVANCE) && state_cur == STATE_CUTSCENE && !self.waiting)
    {
      self.frame_commands = [];
      self.editable_frame_commands = [];
      self.t++;
    }
    CUTSCENE_ADVANCE = 0;

    if(self.end)
    {
      self.cutscene_entitys = [];
      self.frame_commands = [];
      self.editable_frame_commands = [];
      self.running_commands = [];

      state_from = state_cur;
      state_stack = STATE_NAV;
      act_stack = 0;
      state_to = state_stack;
      state_cur = STATE_TRANSITION;
      state_t = 0;
    }
  }

  self.draw = function(t)
  {
    ctx.fillStyle = "#4c4c4c";
    ctx.font = "20px Helvetica";

    //bubble sort on z
    var sorted = false;
    while(!sorted)
    {
      sorted = true;
      for(var i = 0; i < self.cutscene_entitys.length-1; i++)
      {
        var entity = self.cutscene_entitys[i];
        var nentity = self.cutscene_entitys[i+1];
        if(entity.wz > nentity.wz)
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
      //ctx.drawImage(entity.animcycle_inst.img,entity.x,entity.y,entity.w,entity.h);
      ctx.save();
      ctx.translate(entity.x,entity.y);
      if(entity.w < 0) ctx.scale(-1,1);
      ctx.drawImage(entity.animcycle_inst.img,0,0,entity.w,entity.h);
      ctx.restore();
    }

    for(var i = 0; i < self.running_commands.length; i++)
    {
      var c = self.running_commands[i];
      if(c.command == CUTSCENE_COMMAND_SPEAK)
      {
        var yoff = 0;
        var b = 10;
        ctx.fillStyle = self.bubble_color;
        fillRRect(c.x-b-5,c.y-b+5+yoff,c.w+b*2+10,c.h*c.text.length+b*2+5,b,ctx);

        //tail
        var y = c.y-b+5+yoff+c.h*c.text.length+b*2+5-0.5;
        var x;
        var w = 20;
        var h = 20;
        var e = c.cutscene_entity;
        x = clamp(c.x, c.x+c.w-w, e.x + e.w/2-w/2);
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+w/2-2,y+h-2);
        ctx.quadraticCurveTo(x+w/2,y+h,x+w/2+2,y+h-2);
        ctx.lineTo(x+w,y);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = self.text_color;
        ctx.font = option_font;
        var oyoff = 0;
        for(var j = 0; j < c.text.length; j++)
        {
          ctx.fillText(c.text[j],c.x,c.y+yoff+oyoff+c.h);
          oyoff += c.h;
        }

      }
    }

    if(DEBUG)
    {
      for(var i = 0; i < self.editable_frame_commands.length; i++)
      {
        var c = self.editable_frame_commands[i];
        ctx.strokeStyle = magenta;
        if(c.command != CUTSCENE_COMMAND_SPEAK)
          strokeBox(c,ctx);
        else
        {
          ctx.strokeStyle = white;
          var yoff = 0;
          for(var j = 0; j < c.text.length; j++)
          {
            ctx.strokeRect(c.x,c.y+yoff,c.w,c.h);
            oyoff += c.h;
          }
        }
      }
    }
  }

  //playback vars
  self.t = 0;
  self.content = [];
}

