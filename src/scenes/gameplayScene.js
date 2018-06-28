var GamePlayScene = function(game, stage)
{
  var self = this;

  var clicker;

  self.resize = function(st)
  {
    stage = st;
    canv = stage.canv;
    canvas = canv.canvas;
    ctx = canv.context;

    if(clicker) { clicker.detach(); clicker = new Clicker({source:canvas}); }
    if(dragger) { dragger.detach(); dragger = new Dragger({source:canvas}); }
    if(hoverer) { hoverer.detach(); hoverer = new PersistentHoverer({source:canvas}); }
    if(keyer)   { keyer.detach();   keyer   = new Keyer({source:canvas}); }

    ctx.font = text_font;
    if(my_real_camera)  { my_real_camera.ww  = canv.width*660/canv.height; my_real_camera.wh  = 660; }
    if(my_debug_camera) { my_debug_camera.ww = my_real_camera.ww;          my_debug_camera.wh = my_real_camera.wh; }
    if(my_ui_camera)    { my_ui_camera.ww    = canv.width*660/canv.height; my_ui_camera.wh    = 660; }
    if(my_cursor) my_cursor.resize();
    if(my_loader) my_loader.resize();
    if(my_navigable) my_navigable.resize();
    if(my_toolbar) my_toolbar.resize();
    if(my_mapview) my_mapview.resize();
    if(my_notebookview) my_notebookview.resize();
    if(my_objectview) my_objectview.resize();
    if(my_observationview) my_observationview.resize();
    if(my_personview) my_personview.resize();
    if(my_cutsceneview) my_cutsceneview.resize();
    if(my_notificationview) my_notificationview.resize();
    if(my_wildcardview) my_wildcardview.resize();
  }
  self.resize(stage);

  self.ready = function()
  {
    init_levels();
    cur_level = levels[0];         for(var i = 1; i < levels.length;          i++) if(levels[i].primary)          cur_level = levels[i];

    if(COMPRESS_SPEAKS) //NOTE- DOES NOT HANDLE REQUIREMENTS
    {
      var scene;
      for(var i = 0; i < cur_level.scenes.length; i++)
      {
        scene = cur_level.scenes[i];
        var room;
        for(var j = 0; j < scene.rooms.length; j++)
        {
          room = scene.rooms[j];
          var person;
          for(var k = 0; k < room.persons.length; k++)
          {
            person = room.persons[k];
            var speak;
            for(var l = 0; l < person.speaks.length; l++)
            {
              speak = person.speaks[l];
              var option;
              if(speak.options.length == 1)
              {
                option = speak.options[0];
                if(option.reqs[0].length == 0 && option.raw_notifications.length == 0 && option.qtext.length == 1 && option.qtext[0] == ">")
                {
                  var consumed_speak = option.target_speak_found;
                  if(consumed_speak && consumed_speak.raw_notifications.length == 0 && !consumed_speak.primary)
                  {
                    for(var m = 0; m < person.speaks.length; m++)
                      if(consumed_speak == person.speaks[m]) person.speaks.splice(m,1);
                    speak.options_wx = consumed_speak.options_wx;
                    speak.options_wy = consumed_speak.options_wy;
                    speak.options_w  = consumed_speak.options_w;
                    speak.options_h  = consumed_speak.options_h;
                    for(var m = 0; m < consumed_speak.commands.length; m++)
                      speak.commands.push(consumed_speak.commands[m]);
                    speak.options = consumed_speak.options;
                    for(var m = 0; m < speak.options.length; m++)
                      speak.options[m].fqid = speak.fqid+"."+speak.options[m].id;
                    l--;
                  }
                }
              }
            }
          }
        }
      }
    }

    if(TIGHTEN_BUBBLES)
    {
      ctx.font = text_font;

      var tighten_notification_bubbles = function(ob)
      {
        for(var i = 0; i < ob.raw_notifications.length; i++)
        {
          var bogus_lines = ob.notifications[i];
          if(!ob.raw_notification_ws[i]) ob.raw_notification_ws[i] = cur_level.notifications_w;
          var bogus_w = ob.raw_notification_ws[i];
          if(bogus_lines.length == 1)
          {
            bogus_w = ctx.measureText(bogus_lines[0].trim()).width+1;
          }
          else
          {
            var keep_shrinking = (bogus_lines.length <= ob.notifications[i].length && bogus_w > 0);
            while(keep_shrinking)
            {
              bogus_w -= 1;
              bogus_lines = stextToLines(ob.raw_notifications[i],bogus_w);
              keep_shrinking = (bogus_lines.length <= ob.notifications[i].length && bogus_w > 0);
              for(var j = 0; keep_shrinking && j < bogus_lines.length; j++)
                if(ctx.measureText(bogus_lines[j].trim()).width > bogus_w) keep_shrinking = 0;
            }
            bogus_w += 1;
            if(bogus_w == 1) bogus_w = ob.raw_notification_ws[i];
          }
          if(bogus_w != ob.raw_notification_ws[i])
          {
            ob.dirty = 1;
            ob.raw_notification_ws[i] = bogus_w;
          }
        }
      }

      var tighten_text_bubbles = function(text,raw,w,ob)
      {
        var bogus_lines = text;
        var bogus_w = w;
        if(bogus_lines.length == 1)
        {
          bogus_w = ctx.measureText(bogus_lines[0].trim()).width+1;
        }
        else
        {
          var keep_shrinking = (bogus_lines.length <= text.length && bogus_w > 0);
          while(keep_shrinking)
          {
            bogus_w -= 1;
            bogus_lines = stextToLines(raw,bogus_w);
            keep_shrinking = (bogus_lines.length <= text.length && bogus_w > 0);
            for(var j = 0; keep_shrinking && j < bogus_lines.length; j++)
              if(ctx.measureText(bogus_lines[j].trim()).width > bogus_w) keep_shrinking = 0;
          }
          bogus_w += 1;
          if(bogus_w == 1) bogus_w = w;
        }
        if(bogus_w != w) ob.dirty = 1;
        return bogus_w;
      }

      var scene;
      for(var i = 0; i < cur_level.scenes.length; i++)
      {
        scene = cur_level.scenes[i];
        tighten_notification_bubbles(scene);
        var room;
        for(var j = 0; j < scene.rooms.length; j++)
        {
          room = scene.rooms[j];
          tighten_notification_bubbles(room);

          var person;
          for(var k = 0; k < room.persons.length; k++)
          {
            person = room.persons[k];
            tighten_notification_bubbles(person);
            var speak;
            for(var l = 0; l < person.speaks.length; l++)
            {
              speak = person.speaks[l];
              tighten_notification_bubbles(speak);
              var command;
              for(var m = 0; m < speak.commands.length; m++)
              {
                command = speak.commands[m];
                command.w = tighten_text_bubbles(command.atext,command.raw_atext,command.w,speak);
              }

              var option;
              if(speak.options.length == 1)
              {
                option = speak.options[0];
              }
            }
          }

          var object;
          for(var k = 0; k < room.objects.length; k++)
          {
            object = room.objects[k];
            tighten_notification_bubbles(object);

            var view;
            for(var l = 0; l < object.views.length; l++)
            {
              view = object.views[l];
              tighten_notification_bubbles(view);

              var zone;
              for(var m = 0; m < view.zones.length; m++)
              {
                zone = view.zones[m];
                tighten_notification_bubbles(zone);
              }
            }
          }

          var observation;
          for(var k = 0; k < room.observations.length; k++)
          {
            observation = room.observations[k];
            tighten_notification_bubbles(observation);
          }

          var cutscene;
          for(var k = 0; k < room.cutscenes.length; k++)
          {
            cutscene = room.cutscenes[k];
            tighten_notification_bubbles(cutscene);

            var command;
            for(var l = 0; l < cutscene.commands.length; l++)
            {
              command = cutscene.commands[l];
              if(command.command == CUTSCENE_COMMAND_SPEAK)
              {
                if(command.w == CUTSCENE_COMMAND_IGNORE) command.w = cur_level.notifications_w;
                command.text = stextToLines(command.raw_text, command.w); //for some reason, this isn't done in gen.sh
                command.w = tighten_text_bubbles(command.text,command.raw_text,command.w,command);
              }
            }
          }

        }
      }
    }

    var PHIL_HACK = false;
    if(PHIL_HACK)
    {
      var scene;
      for(var i = 0; i < cur_level.scenes.length; i++)
      {
        scene = cur_level.scenes[i];
        var room;
        for(var j = 0; j < scene.rooms.length; j++)
        {
          room = scene.rooms[j];
          var person;
          for(var k = 0; k < room.persons.length; k++)
          {
            person = room.persons[k];
            var speak;
            for(var l = 0; l < person.speaks.length; l++)
            {
              speak = person.speaks[l];
              var command;
              for(var m = 0; m < speak.commands.length; m++)
              {
                command = speak.commands[m];
                if(command.wx + command.w/2 > person.wx)
                  command.wx += 20;
                else
                  command.wx += command.w-20;
                command.wy += command.h*(command.atext.length+1);
              }

              if(speak.options_wx + speak.options_w/2 > person.wx)
                speak.options_wx += 20;
              else
                speak.options_wx += speak.options_w-20;
              speak.options_wy += speak.options_h*3;
              speak.dirty = true;
            }
          }
        }
      }
    }

    cur_room = find(cur_level.intro_room_id);
    if(cur_room)
    {
      cur_scene = find(cur_room.fqid.substring(0,cur_room.fqid.indexOf(cur_room.id)-1));
    }
    else
    {
      cur_scene = cur_level.scenes[0]; for(var i = 1; i < cur_level.scenes.length; i++) if(cur_level.scenes[i].primary) cur_scene = cur_level.scenes[i];
      cur_room  = cur_scene.rooms[0];  for(var i = 1; i < cur_scene.rooms.length;  i++) if(cur_scene.rooms[i].primary)  cur_room  = cur_scene.rooms[i];
    }

    clicker = new Clicker({source:canvas});
    dragger = new Dragger({source:canvas});
    hoverer = new PersistentHoverer({source:canvas});
    keyer = new Keyer({source:canvas});

    my_loader = new loader();
    my_loader.consume_level(cur_level);
    my_loader.consume_room(cur_room);

    my_real_camera = {wx:0,wy:0,ww:canv.width*660/canv.height,wh:660};
    my_debug_camera = {wx:0,wy:0,ww:my_real_camera.ww,wh:my_real_camera.wh};
    my_ui_camera = {wx:0,wy:0,ww:canv.width*660/canv.height,wh:660};
    my_camera = my_real_camera;
    my_cursor = new cursor();
    my_cursor.consume_level(cur_level);
    my_avatar = new avatar();
    my_familiar = new familiar();
    my_navigable = new navigable();
    my_navigable.consume_room(cur_room);
    my_avatar.consume_level(cur_level);
    my_avatar.consume_room(cur_room);
    my_familiar.consume_level(cur_level);
    my_familiar.consume_room(cur_room);
    my_toolbar = new toolbar();
    my_toolbar.consume_level(cur_level);
    my_mapview = new mapview();
    my_mapview.consume_level(cur_level);
    my_notebookview = new notebookview();
    my_notebookview.consume_level(cur_level);
    my_objectview = new objectview();
    my_observationview = new observationview();
    my_personview = new personview();
    my_cutsceneview = new cutsceneview();
    my_wildcardview = new wildcardview();
    my_notificationview = new notificationview();

    my_keyable = new keyable({});
    my_keyable.key = function(evt)
    {
      if(evt.key == " ") print_whole_level(cur_level,false);
      if(evt.key == "f") print_whole_level(cur_level,true);
      if(evt.key == "c")
      {
        console.log(get_save_code_module());
        var c = get_save_code();
        console.log(c);
        console.log((window.location.href+"?").substring(0,(window.location.href+"?").indexOf("?"))+"?save="+c);
      }
      if(evt.key == "m")
      {
        console.log(save_modules_str);
      }
      if(evt.key == "d") DEBUG = !DEBUG;
      if(evt.key == "u") UNLOCK = !UNLOCK;
      if(evt.key == "t") DOUBLETIME = !DOUBLETIME;
      if(evt.key == "v")
      {
        if(my_camera == my_real_camera) my_camera = my_debug_camera;
        else                            my_camera = my_real_camera;
      }
      if(evt.key == "g") SHOW_GROUNDS = !SHOW_GROUNDS;
      if(evt.key == "q")
      {
        QUALITY = !QUALITY;
        if(QUALITY)
        {
          stage = new Stage({width:stage.width,height:stage.height,container:stage.container});
          g.resize({stage:stage});
          ctx.font = text_font;
          LOWFI = 0;
          for(var i = 0; i < cur_level.animcycles.length; i++)
          {
            var a = cur_level.animcycles[i];
            for(var j = 0; j < a.frames.length; j++)
            {
              if(a.frames[j])
              {
                var src = a.frame_files[j];
                if(a.frames[j].src != src)
                  a.frames[j] = GenImg(src);
              }
            }
          }
        }
        else
        {
          stage = new Stage({width:stage.width,height:stage.height,container:stage.container,bspr:2});
          g.resize({stage:stage});
          ctx.font = text_font;
          LOWFI = 1;
          for(var i = 0; i < cur_level.animcycles.length; i++)
          {
            var a = cur_level.animcycles[i];
            for(var j = 0; j < a.frames.length; j++)
            {
              if(a.frames[j])
              {
                var src = a.frame_files[j].replace("animcycles","lofianimcycles")
                if(a.frames[j].src != src)
                  a.frames[j] = GenImg(src);
              }
            }
          }
        }
      }
    }
    my_keyable.key_down = function(evt)
    {
      if(evt.key == "e")
      {
        canvas.style.cursor = 'auto';
        my_keyable.e = 1;
      }
      if(evt.key == "ArrowRight") CUTSCENE_ADVANCE = 1;
    }
    my_keyable.key_up = function(evt)
    {
      if(evt.key == "e") { my_keyable.eup = 1; dragger.force_end(); }
    }

    ctx.font = text_font;

    state_cur = STATE_TRANSITION;
    state_stack = STATE_NAV;
    act_stack = 0;
    state_from = STATE_NAV;
    state_to = state_stack;
    state_t = 0.499;

    if(save_code) load_save_code(save_code);
    if(save_table_code) load_save_table_code(save_table_code);
    my_loader.consume_room(cur_room);

    if(!cur_level.pre_met && cur_level.notifications.length) my_notificationview.consume_notification(cur_level);
    cur_level.pre_met = true;
    cur_scene.pre_met = true;
    cur_scene.met = true;
    cur_room.pre_met = true;
    cur_room.met = true;

    my_navigable.unlock_content();
    my_navigable.trigger_cutscenes();
  };

  self.tick = function()
  {
    keyer.filter(my_keyable);
    hoverer.filter(my_cursor);

    my_notificationview.tick();
    if(DEBUG && my_keyable.e)
    {
      if(my_notificationview.note.length && !my_notificationview.clickthrough) dragger.filter(my_notificationview);
    }
    else
    {
      if(my_notificationview.note.length && !my_notificationview.clickthrough) clicker.filter(my_notificationview);
    }

    switch(state_cur)
    {
      case STATE_NAV:
        if(
        (!my_notificationview.note.length || my_notificationview.clickthrough) &&
        !hoverer.filter(my_navigable) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !dragger.filter(my_avatar) &&
          !dragger.filter(my_navigable) &&
          false) ;
        }
        else
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !clicker.filter(my_toolbar) &&
          !clicker.filter(my_navigable) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        //my_navigable.trigger_cutscenes();
        my_toolbar.tick();
        break;
      case STATE_MAP:
        if(
        (!my_notificationview.note.length || my_notificationview.clickthrough) &&
        !hoverer.filter(my_mapview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !dragger.filter(my_mapview) &&
          false) ;
        }
        else
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !clicker.filter(my_mapview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        my_mapview.tick();
        break;
      case STATE_NOTEBOOK:
        if(
        (!my_notificationview.note.length || my_notificationview.clickthrough) &&
        !hoverer.filter(my_notebookview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !dragger.filter(my_notebookview) &&
          false) ;
        }
        else
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !clicker.filter(my_notebookview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        my_notebookview.tick();
        break;
      case STATE_PERSON:
        if(
        (!my_notificationview.note.length || my_notificationview.clickthrough) &&
        !hoverer.filter(my_personview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !dragger.filter(my_personview) &&
          false) ;
        }
        else
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !clicker.filter(my_personview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        my_personview.tick();
        break;
      case STATE_OBJECT:
        if(
        (!my_notificationview.note.length || my_notificationview.clickthrough) &&
        !hoverer.filter(my_objectview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !dragger.filter(my_objectview) &&
          false) ;
        }
        else
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !clicker.filter(my_objectview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        my_objectview.tick();
        break;
      case STATE_OBSERVATION:
        if(
        (!my_notificationview.note.length || my_notificationview.clickthrough) &&
        !hoverer.filter(my_observationview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !dragger.filter(my_observationview) &&
          false) ;
        }
        else
        {
          if(
          !clicker.filter(my_observationview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        my_observationview.tick();
        break;
      case STATE_WILDCARD:
        if(
        (!my_notificationview.note.length || my_notificationview.clickthrough) &&
        !hoverer.filter(my_wildcardview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !dragger.filter(my_wildcardview) &&
          false) ;
        }
        else
        {
          if(
          !clicker.filter(my_wildcardview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        my_wildcardview.tick();
        break;
      case STATE_CUTSCENE:
        if(
        (!my_notificationview.note.length || my_notificationview.clickthrough) &&
        !hoverer.filter(my_cutsceneview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          (!my_notificationview.note.length || my_notificationview.clickthrough) &&
          !dragger.filter(my_cutsceneview) &&
          false) ;
        }
        else
        {
          if(
          !clicker.filter(my_cutsceneview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        //my_cutsceneview.tick(); //will tick because of stack
        break;
      case STATE_TRANSITION:
        transition_tick();
        break;
    }

    if(state_stack == STATE_CUTSCENE) my_cutsceneview.tick();

    if(clicker) clicker.flush();
    if(dragger) dragger.flush();
    if(hoverer) hoverer.flush();
    if(keyer) keyer.flush();

    my_cursor.tick();
    if(my_keyable.eup) my_keyable.e = 0;
    my_keyable.eup = 0;
  };

  self.draw = function()
  {
    switch(state_cur)
    {
      case STATE_NAV:
        my_navigable.draw();
        my_toolbar.draw(1);
        break;
      case STATE_MAP:
        my_navigable.draw();
        my_mapview.draw(1);
        break;
      case STATE_NOTEBOOK:
        my_navigable.draw();
        my_notebookview.draw(1);
        break;
      case STATE_PERSON:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        my_personview.draw(1);
        break;
      case STATE_OBJECT:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        my_objectview.draw(1);
        break;
      case STATE_OBSERVATION:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        my_observationview.draw(1);
        break;
      case STATE_WILDCARD:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        my_wildcardview.draw(1);
        break;
      case STATE_CUTSCENE:
        my_navigable.draw();
        my_cutsceneview.draw(1);
        break;
      case STATE_TRANSITION:
        transition_draw();
        break;
    }

    if(DEBUG)
    {
    /*
      ctx.fillStyle = black;
      var y = 40;
      ctx.fillText("DEBUG keys:",10,y); y += 25;
      ctx.fillText("d: toggle 'debug'",10,y); y += 25;
      ctx.fillText("u: toggle 'unlock everything' (requires room reload)",10,y); y += 25;
      ctx.fillText("e: hold + click-drag to move objects, bottom right to scale",10,y); y += 25;
      ctx.fillText("v: zoom out",10,y); y += 25;
      ctx.fillText("g: toggle forground/background",10,y); y += 25;
      ctx.fillText("q: toggle quality",10,y); y += 25;
      ctx.fillText("(spacebar): print level to javascript console",10,y); y += 25;
    */
    }

    my_notificationview.draw();
    my_cursor.draw();
  };

  var transition_tick = function()
  {
    my_loader.tick();

    var old_state_t = state_t;
    switch(state_from)
    {
      case STATE_NAV:
      case STATE_CUTSCENE:
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        if(state_from == STATE_NAV && state_to == STATE_NAV)
        {
          state_t += state_t_speed;
          if(cur_act && cur_act.act == ACT_PORTHOLE)
          {
            if(old_state_t < 0.5 && state_t >= 0.5) //ended fadeout`
            {
              state_t = 0.5; //ensure it hits "loading" stage at least once
              if(cur_act.target_room_found) cur_room = cur_act.target_room_found;
              my_loader.consume_room(cur_room);
              my_navigable.consume_room(cur_room);
              my_avatar.consume_room(cur_room);
              my_avatar.from_porthole(cur_act);
              my_familiar.consume_room(cur_room);
              my_familiar.from_porthole(cur_act);
              cur_act = 0;
            }
            else if(old_state_t == 0.5)
            {
              if(my_loader.loading) state_t = 0.5;
              else my_navigable.trigger_cutscenes();
            }
          }
          else
          {
            if(old_state_t < 0.5 && state_t >= 0.5) //ended fadeout
              state_t = 0.5; //ensure it hits "loading" stage at least once
            else if(old_state_t == 0.5)
            {
              if(my_loader.loading) state_t = 0.5;
              else my_navigable.trigger_cutscenes();
            }
          }
        }
        else if(state_from == STATE_CUTSCENE && state_to == STATE_NAV && ((my_cutsceneview.selected_scene && my_cutsceneview.selected_scene != cur_scene) || old_state_t >= 0.5))
        {
          if(state_t < 0.5) state_t = 0.5; //NO FADE OUT
          else state_t += state_t_speed;
          if(old_state_t < 0.5 && state_t >= 0.5) //ended fadeout
          {
            state_t = 0.5; //ensure it hits "loading" stage at least once
            cur_scene = my_cutsceneview.selected_scene;
            my_cutsceneview.selected_scene = 0;
            cur_scene.met = true;
            cur_room = 0;
            for(var i = 0; i < cur_scene.rooms.length; i++)
              if(cur_scene.rooms[i].primary && (!cur_room || cur_scene.rooms[i].primary > cur_room.primary) && queryreqs(cur_scene.rooms[i].primary,cur_scene.rooms[i].reqs))
                cur_room = cur_scene.rooms[i];
            for(var i = 0; !cur_room && i < cur_scene.rooms.length; i++)
              if(queryreqs(cur_scene.rooms[i].primary,cur_scene.rooms[i].reqs))
                cur_room = cur_scene.rooms[i];
            if(!cur_room) cur_room = cur_scene.rooms[0];
            my_loader.consume_room(cur_room);
            my_navigable.consume_room(cur_room);
            my_avatar.consume_room(cur_room);
            my_familiar.consume_room(cur_room);
            cur_act = 0;
          }
          else if(old_state_t == 0.5)
          {
            if(my_loader.loading) state_t = 0.5;
            else my_navigable.trigger_cutscenes();
          }
        }
        else if(state_to == STATE_PERSON)
        {
          state_t += state_t_speed;
          my_personview.tick();
        }
        else if(state_to == STATE_OBJECT)
        {
          state_t += state_t_speed;
          my_objectview.tick();
        }
        else if(state_to == STATE_OBSERVATION)
        {
          state_t += state_t_speed;
          my_observationview.tick();
        }
        else if(state_to == STATE_WILDCARD)
        {
          state_t += state_t_speed;
          my_wildcardview.tick();
        }
        else if(state_to == STATE_MAP)
        {
          state_t += state_t_speed;
          my_mapview.tick();
        }
        else if(state_to == STATE_CUTSCENE)
        {
          state_t += state_t_speed;
          if(state_t > 0.5 && my_loader.loading) state_t = 0.5;
        }
        else state_t += state_t_speed;
        break;
      case STATE_MAP:
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        if(state_to == STATE_NAV && (my_mapview.selected_scene && my_mapview.selected_scene != cur_scene) || old_state_t >= 0.5)
        {
          state_t += state_t_speed;
          if(old_state_t < 0.5 && state_t >= 0.5) //ended fadeout
          {
            state_t = 0.5; //ensure it hits "loading" stage at least once
            cur_scene = my_mapview.selected_scene;
            my_mapview.selected_scene = 0;
            cur_scene.met = true;
            cur_room = 0;
            for(var i = 0; i < cur_scene.rooms.length; i++)
              if(cur_scene.rooms[i].primary && (!cur_room || cur_scene.rooms[i].primary > cur_room.primary) && queryreqs(cur_scene.rooms[i].primary,cur_scene.rooms[i].reqs))
                cur_room = cur_scene.rooms[i];
            for(var i = 0; !cur_room && i < cur_scene.rooms.length; i++)
              if(queryreqs(cur_scene.rooms[i].primary,cur_scene.rooms[i].reqs))
                cur_room = cur_scene.rooms[i];
            if(!cur_room) cur_room = cur_scene.rooms[0];
            my_loader.consume_room(cur_room);
            my_navigable.consume_room(cur_room);
            my_avatar.consume_room(cur_room);
            my_familiar.consume_room(cur_room);
            cur_act = 0;
          }
          else if(old_state_t == 0.5)
          {
            if(my_loader.loading) state_t = 0.5;
            else my_navigable.trigger_cutscenes();
          }
        }
        else state_t += state_t_speed;
        break;
      case STATE_NOTEBOOK:
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        state_t += state_t_speed;
        break;
      case STATE_PERSON:
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        state_t += state_t_speed;
        if(old_state_t < 0.5 && state_t >= 0.5) //ended fadeout
          my_navigable.trigger_cutscenes();
        break;
      case STATE_OBJECT:
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        state_t += state_t_speed;
        if(old_state_t < 0.5 && state_t >= 0.5) //ended fadeout
          my_navigable.trigger_cutscenes();
        break;
      case STATE_OBSERVATION:
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        state_t += state_t_speed;
        if(old_state_t < 0.5 && state_t >= 0.5) //ended fadeout
          my_navigable.trigger_cutscenes();
        break;
      case STATE_WILDCARD:
        my_navigable.tick();
        my_avatar.tick();
        my_familiar.tick();
        state_t += state_t_speed;
        if(old_state_t < 0.5 && state_t >= 0.5) //ended fadeout
          my_navigable.trigger_cutscenes();
        break;
    }

    if(state_t >= 1)
    {
      state_t = 0;
      state_cur = state_to;
      if(state_cur == STATE_NAV)
      {
        my_navigable.unlock_content();
        my_notebookview.unlock_content();
        my_toolbar.notebook_available = queryreqs(cur_level,cur_level.notebook_reqs);
        my_toolbar.map_available      = queryreqs(cur_level,cur_level.map_reqs);
      }
    }

    my_toolbar.tick();
  };

  var transition_draw = function()
  {
    switch(state_from)
    {
      case STATE_NAV:
      case STATE_CUTSCENE:
        if(state_from == STATE_NAV && state_to == STATE_NAV)
        {
          my_navigable.draw();
          my_toolbar.draw(1);
          var blur = (state_t*2)-1;
          blur = 1-(blur*blur);
          ctx.globalAlpha = blur;
          my_loader.draw();
          ctx.globalAlpha = 1;
        }
        else if(state_from == STATE_CUTSCENE && state_to == STATE_NAV && my_cutsceneview.scene_to)
        {
          my_navigable.draw();
          my_toolbar.draw(1);
          var blur = (state_t*2)-1;
          blur = 1-(blur*blur);
          ctx.globalAlpha = blur;
          my_loader.draw();
          ctx.globalAlpha = 1;
        }
        else if(state_to == STATE_MAP)
        {
          my_navigable.draw();
          my_toolbar.draw(1-state_t);
          my_mapview.draw(state_t);
        }
        else if(state_to == STATE_NOTEBOOK)
        {
          my_navigable.draw();
          my_toolbar.draw(1-state_t);
          my_notebookview.draw(state_t);
        }
        else if(state_to == STATE_PERSON)
        {
          my_navigable.draw();
          if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
          else                              my_toolbar.draw(1-state_t);
          my_personview.draw(state_t);
        }
        else if(state_to == STATE_OBJECT)
        {
          my_navigable.draw();
          if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
          else                              my_toolbar.draw(1-state_t);
          my_objectview.draw(state_t);
        }
        else if(state_to == STATE_OBSERVATION)
        {
          my_navigable.draw();
          if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
          else                              my_toolbar.draw(1-state_t);
          my_observationview.draw(state_t);
        }
        else if(state_to == STATE_WILDCARD)
        {
          my_navigable.draw();
          if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
          else                              my_toolbar.draw(1-state_t);
          my_wildcardview.draw(state_t);
        }
        else if(state_to == STATE_NAV) //guaranteed cutscene->nav by initial if
        {
          my_navigable.draw();
          my_toolbar.draw((state_t-0.5)*2); //wait in case of cutscene
          my_cutsceneview.draw(1-state_t);
        }
        else if(state_to == STATE_CUTSCENE) //guaranteed nav->cutscene, because no cutscene->cutscene
        {
          my_navigable.draw();
          my_toolbar.draw(1-state_t);
          my_cutsceneview.draw(state_t);
          if(my_loader.loading)
          {
            var blur = (state_t*2)-1;
            blur = 1-(blur*blur);
            ctx.globalAlpha = blur;
            my_loader.draw();
            ctx.globalAlpha = 1;
          }
        }
        break;
      case STATE_MAP:
        if(state_to == STATE_NAV)
        {
          if(my_mapview.selected_scene && my_mapview.selected_scene != cur_scene)
          {
            my_navigable.draw();
            my_toolbar.draw(1);
            var blur = (state_t*2)-1;
            blur = 1-(blur*blur);
            my_mapview.draw(1);
            ctx.globalAlpha = blur;
            my_loader.draw();
            ctx.globalAlpha = 1;
          }
          else
          {
            my_navigable.draw();
            my_toolbar.draw(state_t);
            my_mapview.draw(1-state_t);
            var blur = 1-((state_t*2)-1);
            ctx.globalAlpha = blur;
            my_loader.draw();
            ctx.globalAlpha = 1;
          }
        }
        break;
      case STATE_NOTEBOOK:
        if(state_to == STATE_NAV)
        {
          my_navigable.draw();
          my_toolbar.draw(state_t);
          my_notebookview.draw(1-state_t);
        }
        break;
      case STATE_PERSON:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        else                              my_toolbar.draw((state_t-0.5)*2); //wait in case of cutscene
        my_personview.draw(1-state_t);
        break;
      case STATE_OBJECT:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        else                              my_toolbar.draw((state_t-0.5)*2); //wait in case of cutscene
        my_objectview.draw(1-state_t);
        break;
      case STATE_OBSERVATION:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        else                              my_toolbar.draw((state_t-0.5)*2); //wait in case of cutscene
        my_observationview.draw(1-state_t);
        break;
      case STATE_WILDCARD:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        else                              my_toolbar.draw((state_t-0.5)*2); //wait in case of cutscene
        my_wildcardview.draw(1-state_t);
        break;
    }
  };

  self.cleanup = function()
  {
    clicker.detach();
    clicker = null;
    dragger.detach();
    dragger = null;
    hoverer.detach();
    hoverer = null;
    keyer.detach();
    keyer = null;
    if(cur_level)
    {
      for(var i = 0; i < cur_level.audios.length; i++)
        if(cur_level.audios[i].aud && cur_level.audios[i].aud.playing) cur_level.audios[i].aud.pause();
    }
  };

};

