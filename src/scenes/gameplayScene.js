var GamePlayScene = function(game, stage)
{
  var self = this;

  self.resize = function(stage)
  {
    canv = stage.canv;
    canvas = canv.canvas;
    ctx = canv.context;

    if(clicker) { clicker = new Clicker({source:canvas}); }
    if(dragger) { dragger = new Dragger({source:canvas}); }
    if(hoverer) { hoverer = new PersistentHoverer({source:canvas}); }
    if(keyer)   { keyer = new Keyer({source:canvas}); }
  }
  self.resize(stage);

  self.ready = function()
  {
    init_levels();
    cur_level = levels[0];         for(var i = 1; i < levels.length;          i++) if(levels[i].primary)          cur_level = levels[i];
    cur_room = find(cur_level.intro_room_id);
    if(cur_room)
    {
      cur_scene = find(cur_room.fqid.substring(0,cur_room.fqid.indexOf(cur_room.id)));
    }
    else
    {
      cur_scene = cur_level.scenes[0]; for(var i = 1; i < cur_level.scenes.length;  i++) if(cur_level.scenes[i].primary)  cur_scene = cur_level.scenes[i];
      cur_room = cur_scene.rooms[0]; for(var i = 1; i < cur_scene.rooms.length; i++) if(cur_scene.rooms[i].primary) cur_room  = cur_scene.rooms[i];
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
    my_navigable = new navigable();
    my_navigable.consume_room(cur_room);
    my_avatar = new avatar();
    my_avatar.consume_level(cur_level);
    my_avatar.consume_room(cur_room);
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
    my_notificationview = new notificationview();

    my_keyable = new keyable({});
    my_keyable.key = function(evt)
    {
      if(evt.key == " ") print_whole_level(cur_level);
      if(evt.key == "c") get_save_code();
      if(evt.key == "d") DEBUG = !DEBUG;
      if(evt.key == "u") UNLOCK = !UNLOCK;
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
          ctx.font = "20px Helvetica";
        }
        else
        {
          stage = new Stage({width:stage.width,height:stage.height,container:stage.container,bspr:4});
          g.resize({stage:stage});
          ctx.font = "20px Helvetica";
        }
      }
    }
    my_keyable.key_down = function(evt)
    {
      if(evt.key == "e") my_keyable.e = 1;
    }
    my_keyable.key_up = function(evt)
    {
      if(evt.key == "e") { my_keyable.eup = 1; dragger.force_end(); }
    }

    canv_clicker = {x:0,y:0,w:canv.width,h:canv.height,click:function(evt){ if(!init_audio) null_audio.aud.play(); init_audio = true; }};

    state_cur = STATE_TRANSITION;
    state_stack = STATE_NAV;
    act_stack = 0;
    state_from = STATE_NAV;
    state_to = state_stack;
    state_t = 0.5;
  };

  self.tick = function()
  {
    keyer.filter(my_keyable);
    if(!init_audio) clicker.filter(canv_clicker);
    hoverer.filter(my_cursor);

    my_notificationview.dequeue();
    my_notificationview.tick();
    if(my_notificationview.note) clicker.filter(my_notificationview);

    switch(state_cur)
    {
      case STATE_NAV:
        if(
        !my_notificationview.note &&
        !hoverer.filter(my_navigable) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          !my_notificationview.note &&
          !dragger.filter(my_avatar) &&
          !dragger.filter(my_navigable) &&
          false) ;
        }
        else
        {
          if(
          !my_notificationview.note &&
          !clicker.filter(my_toolbar) &&
          !clicker.filter(my_navigable) &&
          !clicker.filter(canv_clicker) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        //trigger cutscenes only from within nav
        if(state_cur == STATE_NAV) //_still_ must be NAV...
        {
          for(var i = 0; i < cur_room.cutscenes.length; i++)
          {
            var cutscene = cur_room.cutscenes[i];
            if(!cutscene.key && !querylocked(cutscene))
            {
              cur_act = cutscene;
              state_from = state_cur;
              state_cur = STATE_TRANSITION;
              state_stack = STATE_CUTSCENE;
              state_act = cur_act;
              state_to = state_stack;
              my_cutsceneview.consume_cutscene(cur_act);
              state_t = 0;
            }
          }
        }
        break;
      case STATE_MAP:
        if(
        !my_notificationview.note &&
        !hoverer.filter(my_mapview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          !my_notificationview.note &&
          !dragger.filter(my_mapview) &&
          false) ;
        }
        else
        {
          if(
          !my_notificationview.note &&
          !clicker.filter(my_mapview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_mapview.tick();
        break;
      case STATE_NOTEBOOK:
        if(
        !my_notificationview.note &&
        !hoverer.filter(my_notebookview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          !my_notificationview.note &&
          !dragger.filter(my_notebookview) &&
          false) ;
        }
        else
        {
          if(
          !my_notificationview.note &&
          !clicker.filter(my_notebookview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_notebookview.tick();
        break;
      case STATE_PERSON:
        if(
        !my_notificationview.note &&
        !hoverer.filter(my_personview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          !my_notificationview.note &&
          !dragger.filter(my_personview) &&
          false) ;
        }
        else
        {
          if(
          !my_notificationview.note &&
          !clicker.filter(my_personview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_personview.tick();
        break;
      case STATE_OBJECT:
        if(
        !my_notificationview.note &&
        !hoverer.filter(my_objectview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          !my_notificationview.note &&
          !dragger.filter(my_objectview) &&
          false) ;
        }
        else
        {
          if(
          !my_notificationview.note &&
          !clicker.filter(my_objectview) &&
          false) ;
        }
        my_navigable.tick();
        my_avatar.tick();
        my_objectview.tick();
        break;
      case STATE_OBSERVATION:
        if(
        !my_notificationview.note &&
        !hoverer.filter(my_observationview) &&
        false) ;
        if(DEBUG && my_keyable.e)
        {
          if(
          !my_notificationview.note &&
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
        my_observationview.tick();
        break;
      case STATE_WILDCARD:
        my_navigable.tick();
        my_avatar.tick();
        break;
      case STATE_CUTSCENE:
        if(
        !clicker.filter(my_cutsceneview) &&
        false) ;
        my_navigable.tick();
        my_avatar.tick();
        //my_cutsceneview.tick(); //will tick because of stack
        break;
      case STATE_TRANSITION:
        transition_tick();
        break;
    }

    if(state_stack == STATE_CUTSCENE) my_cutsceneview.tick();

    clicker.flush();
    dragger.flush();
    hoverer.flush();
    keyer.flush();

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
    }

    my_notificationview.draw();
    my_cursor.draw();
  };

  var transition_tick = function()
  {
    var old_state_t = state_t;
    switch(state_from)
    {
      case STATE_NAV:
      case STATE_CUTSCENE:
        my_navigable.tick();
        my_avatar.tick();
        if(state_from == STATE_NAV && state_to == STATE_NAV)
        {
          state_t += state_t_speed;
          if(old_state_t < 0.5 && state_t >= 0.5)
          {
            if(cur_act.act == ACT_PORTHOLE)
            {
              if(cur_act.target_room_found) cur_room = cur_act.target_room_found;
              my_loader.consume_room(cur_room);
              my_navigable.consume_room(cur_room);
              my_avatar.consume_room(cur_room);
              my_avatar.from_porthole(cur_act);
              cur_act = 0;
              if(my_loader.loading) state_t = 0.5;
            }
          }
          else if(state_t >= 0.5 && my_loader.loading) state_t = 0.5;
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
        else if(state_to == STATE_MAP)
        {
          state_t += state_t_speed;
          my_mapview.tick();
        }
        else state_t += state_t_speed;
        break;
      case STATE_MAP:
        my_navigable.tick;
        my_avatar.tick();
        if(state_to == STATE_NAV && my_mapview.selected_scene && my_mapview.selected_scene != cur_scene)
        {
          state_t += state_t_speed;
          if(old_state_t < 0.5 && state_t >= 0.5)
          {
            cur_scene = my_mapview.selected_scene;
            my_mapview.selected_scene = 0;
            cur_room = cur_scene.rooms[0];
            for(var i = 1; i < cur_scene.rooms.length; i++)
              if(cur_scene.rooms[i].primary) cur_room = cur_scene.rooms[i];
            my_loader.consume_room(cur_room);
            my_avatar.consume_room(cur_room);
            my_navigable.consume_room(cur_room);
            cur_act = 0;
            if(my_loader.loading) state_t = 0.5;
          }
        }
        else if(state_t >= 0.5 && my_loader.loading) state_t = 0.5;
        else state_t += state_t_speed;
        break;
      case STATE_NOTEBOOK:
        my_navigable.tick();
        my_avatar.tick();
        state_t += state_t_speed;
        break;
      case STATE_PERSON:
        my_navigable.tick();
        my_avatar.tick();
        state_t += state_t_speed;
        break;
      case STATE_OBJECT:
        my_navigable.tick();
        my_avatar.tick();
        state_t += state_t_speed;
        break;
      case STATE_OBSERVATION:
        my_navigable.tick();
        my_avatar.tick();
        state_t += state_t_speed;
        break;
      case STATE_WILDCARD:
        my_navigable.tick();
        my_avatar.tick();
        state_t += state_t_speed;
        break;
    }

    if(state_t >= 1)
    {
      state_t = 0;
      state_cur = state_to;
      if(state_cur == STATE_NAV)
        my_navigable.unlock_content();
    }
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
          ctx.fillStyle = "rgba(0,0,0,"+blur+")";
          ctx.fillRect(0,0,canv.width,canv.height);
          if(my_loader.loading)
          {
            ctx.fillStyle = white;
            ctx.fillText("loading...",canv.width-100,canv.height-20);
          }
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
        }
        else if(state_to == STATE_NAV) //guaranteed cutscene->nav by initial if
        {
          my_navigable.draw();
          my_toolbar.draw(state_t);
          my_cutsceneview.draw(1-state_t);
        }
        else if(state_to == STATE_CUTSCENE) //guaranteed nav->cutscene, because no cutscene->cutscene
        {
          my_navigable.draw();
          my_toolbar.draw(1-state_t);
          my_cutsceneview.draw(state_t);
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
            ctx.fillStyle = "rgba(0,0,0,"+blur+")";
            ctx.fillRect(0,0,canv.width,canv.height);
          }
          else
          {
            my_navigable.draw();
            my_toolbar.draw(state_t);
            my_mapview.draw(1-state_t);
            ctx.fillStyle = "rgba(0,0,0,"+blur+")";
            ctx.fillRect(0,0,canv.width,canv.height);
          }
          if(my_loader.loading)
          {
            ctx.fillStyle = white;
            ctx.fillText("loading...",canv.width-100,canv.height-20);
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
        else                              my_toolbar.draw(state_t);
        my_personview.draw(1-state_t);
        break;
      case STATE_OBJECT:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        else                              my_toolbar.draw(state_t);
        my_objectview.draw(1-state_t);
        break;
      case STATE_OBSERVATION:
        my_navigable.draw();
        if(state_stack == STATE_CUTSCENE) my_cutsceneview.draw(1);
        else                              my_toolbar.draw(state_t);
        my_observationview.draw(1-state_t);
        break;
      case STATE_WILDCARD:
        break;
    }
  };

  self.cleanup = function()
  {
  };

};

