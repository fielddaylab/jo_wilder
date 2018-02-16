var GamePlayScene = function(game, stage)
{
  var self = this;

  self.resize = function(stage)
  {
    canv = stage.canv;
    canvas = canv.canvas;
    ctx = canv.context;
  }
  self.resize(stage);

  self.ready = function()
  {
    init_levels();
    cur_level = levels[0];         for(var i = 1; i < levels.length;          i++) if(levels[i].primary)          cur_level = levels[i];
    cur_map = cur_level.map;
    cur_scene = cur_map.scenes[0]; for(var i = 1; i < cur_map.scenes.length;  i++) if(cur_map.scenes[i].primary)  cur_scene = cur_map.scenes[i];
    cur_room = cur_scene.rooms[0]; for(var i = 1; i < cur_scene.rooms.length; i++) if(cur_scene.rooms[i].primary) cur_room  = cur_scene.rooms[i];

    clicker = new Clicker({source:canvas});
    dragger = new Dragger({source:canvas});
    keyer = new Keyer({source:canvas});
    my_navigable = new navigable();
    my_navigable.consume_room(cur_room);
    my_avatar = new avatar();
    my_avatar.consume_level(cur_level);
    my_avatar.consume_room(cur_room);
    my_toolbar = new toolbar();
    my_toolbar.consume_level(cur_level);
    my_mapview = new mapview();
    my_mapview.consume_map(cur_map);
    my_notebook = new notebook();
    my_notebook.consume_level(cur_level);
    my_objectview = new objectview();
    my_personview = new personview();
    my_cutsceneview = new cutsceneview();

    my_placer = new placer(null, 100,100,100,100, canv);
    my_keyable = new keyable({});
    my_keyable.key = function(evt)
    {
      if(evt.key == " ") print_whole_level(cur_level);
    }
    my_keyable.key_down = function(evt)
    {
      if(evt.key == "e") my_keyable.e = 1;
    }
    my_keyable.key_up = function(evt)
    {
      if(evt.key == "e") my_keyable.e = 0;
    }

    canv_clicker = {x:0,y:0,w:canv.width,h:canv.height,click:function(evt){ }};

    cur_state = STATE_NAV;
    state_t = 0;

  };

  self.tick = function()
  {
    if(DEBUG)
    {
      //clicker.filter(my_placer);
      //dragger.filter(my_placer);
      keyer.filter(my_keyable);
    }

    switch(cur_state)
    {
      case STATE_NAV:
        if(
        !clicker.filter(my_toolbar) &&
        !clicker.filter(my_navigable) &&
        !clicker.filter(canv_clicker) &&
        false) ;
        if(DEBUG && my_keyable.e) dragger.filter(my_navigable);
        my_avatar.tick();
        my_navigable.tick();
        //trigger cutscenes only from within nav
        if(cur_state == STATE_NAV) //_still_ must be NAV...
        {
          for(var i = 0; i < cur_level.cutscenes.length; i++)
          {
            var cutscene = cur_level.cutscenes[i];
            var found = 0;
            if(!found && !cutscene.key && !querylocked(cutscene)) found = cutscene;
            if(found)
            {
              cur_act = found;
              state_from = cur_state;
              cur_state = STATE_TRANSITION;
              state_to = STATE_CUTSCENE;
              my_cutsceneview.consume_cutscene(cur_act);
              state_t = 0;
            }
          }
        }
        break;
      case STATE_MAP:
        if(DEBUG && my_keyable.e) dragger.filter(my_mapview);
        else if(
        !clicker.filter(my_mapview) &&
        false) ;
        my_avatar.tick();
        my_navigable.tick();
        my_mapview.tick();
        break;
      case STATE_NOTEBOOK:
        if(
        !clicker.filter(my_notebook) &&
        false) ;
        my_avatar.tick();
        my_navigable.tick();
        my_notebook.tick();
        break;
      case STATE_PERSON:
        if(
        !clicker.filter(my_personview) &&
        false) ;
        my_avatar.tick();
        my_navigable.tick();
        my_personview.tick();
        break;
      case STATE_OBJECT:
        if(
        !clicker.filter(my_objectview) &&
        false) ;
        if(DEBUG && my_keyable.e) dragger.filter(my_objectview);
        my_avatar.tick();
        my_navigable.tick();
        my_objectview.tick();
        break;
      case STATE_WILDCARD:
        my_avatar.tick();
        my_navigable.tick();
        break;
      case STATE_CUTSCENE:
        if(
        !clicker.filter(my_cutsceneview) &&
        false) ;
        my_avatar.tick();
        my_navigable.tick();
        my_cutsceneview.tick();
        break;
      case STATE_TRANSITION:
        transition_tick();
        break;
    }
    clicker.flush();
    dragger.flush();
    keyer.flush();
  };

  self.draw = function()
  {
    switch(cur_state)
    {
      case STATE_NAV:
        my_navigable.draw();
        my_avatar.draw();
        my_toolbar.draw(0);
        break;
      case STATE_MAP:
        my_navigable.draw();
        my_avatar.draw();
        my_mapview.draw(0);
        break;
      case STATE_NOTEBOOK:
        my_navigable.draw();
        my_avatar.draw();
        my_notebook.draw(0);
        break;
      case STATE_PERSON:
        my_navigable.draw();
        my_avatar.draw();
        my_personview.draw(0);
        break;
      case STATE_OBJECT:
        my_navigable.draw();
        my_avatar.draw();
        my_objectview.draw(0);
        break;
      case STATE_WILDCARD:
        my_navigable.draw();
        my_avatar.draw();
        break;
      case STATE_CUTSCENE:
        my_navigable.draw();
        my_avatar.draw();
        my_cutsceneview.draw(0);
        break;
      case STATE_TRANSITION:
        transition_draw();
        break;
    }

    if(DEBUG)
    {
      //my_placer.draw(ctx);
    }
  };

  var transition_tick = function()
  {
    var old_state_t = state_t;
    switch(state_from)
    {
      case STATE_NAV:
        my_avatar.tick();
        my_navigable.tick();
        if(state_to == STATE_NAV)
        {
          state_t += state_t_speed;
          if(old_state_t < 0.5 && state_t >= 0.5)
          {
            if(cur_act.act == ACT_PORTHOLE)
            {
              if(cur_act.target_room_found) cur_room = cur_act.target_room_found;
              my_navigable.consume_room(cur_room);
              my_avatar.consume_room(cur_room);
              my_avatar.from_porthole(cur_act);
              cur_act = 0;
            }
          }
        }
        else state_t += state_t_speed;
        break;
      case STATE_MAP:
        my_avatar.tick();
        my_navigable.tick;
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
            my_avatar.consume_room(cur_room);
            my_navigable.consume_room(cur_room);
            cur_act = 0;
          }
        }
        else state_t += state_t_speed;
        break;
      case STATE_NOTEBOOK:
        my_avatar.tick();
        my_navigable.tick();
        state_t += state_t_speed;
        break;
      case STATE_PERSON:
        my_avatar.tick();
        my_navigable.tick();
        state_t += state_t_speed;
        break;
      case STATE_OBJECT:
        my_avatar.tick();
        my_navigable.tick();
        state_t += state_t_speed;
        break;
      case STATE_WILDCARD:
        my_avatar.tick();
        my_navigable.tick();
        state_t += state_t_speed;
        break;
      case STATE_CUTSCENE:
        my_avatar.tick();
        my_navigable.tick();
        state_t += state_t_speed;
        break;
    }

    if(state_t >= 1)
    {
      state_t = 0;
      cur_state = state_to;
    }
  };

  var transition_draw = function()
  {
    switch(state_from)
    {
      case STATE_NAV:
        if(state_to == STATE_NAV)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw(0);
          var blur = (state_t*2)-1;
          blur = 1-(blur*blur);
          ctx.fillStyle = "rgba(0,0,0,"+blur+")";
          ctx.fillRect(0,0,canv.width,canv.height);
        }
        if(state_to == STATE_MAP)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw(state_t*my_toolbar.h);
          my_mapview.draw((1-state_t)*my_mapview.h);
        }
        if(state_to == STATE_NOTEBOOK)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw(state_t*my_toolbar.h);
          my_notebook.draw((1-state_t)*my_notebook.h);
        }
        if(state_to == STATE_PERSON)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw(state_t*my_toolbar.h);
          my_personview.draw((1-state_t)*my_personview.h);
        }
        if(state_to == STATE_OBJECT)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw(state_t*my_toolbar.h);
          my_objectview.draw((1-state_t)*my_objectview.h);
        }
        if(state_to == STATE_WILDCARD)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw(state_t*my_toolbar.h);
        }
        if(state_to == STATE_CUTSCENE)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw(state_t*my_toolbar.h);
          my_cutsceneview.draw((1-state_t)*my_cutsceneview.h);
        }
        break;
      case STATE_MAP:
        if(state_to == STATE_NAV)
        {
          if(my_mapview.selected_scene && my_mapview.selected_scene != cur_scene)
          {
            my_navigable.draw();
            my_avatar.draw();
            my_toolbar.draw(0);
            var blur = (state_t*2)-1;
            blur = 1-(blur*blur);
            if(state_t < 0.5)
              my_mapview.draw(0);
            ctx.fillStyle = "rgba(0,0,0,"+blur+")";
            ctx.fillRect(0,0,canv.width,canv.height);
          }
          else
          {
            my_navigable.draw();
            my_avatar.draw();
            my_toolbar.draw((1-state_t)*my_toolbar.h);
            my_mapview.draw(state_t*my_mapview.h);
          }
        }
        break;
      case STATE_NOTEBOOK:
        if(state_to == STATE_NAV)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw((1-state_t)*my_toolbar.h);
          my_notebook.draw(state_t*my_notebook.h);
        }
        break;
      case STATE_PERSON:
        if(state_to == STATE_NAV)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw((1-state_t)*my_toolbar.h);
          my_personview.draw(state_t*my_personview.h);
        }
        break;
      case STATE_OBJECT:
        if(state_to == STATE_NAV)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw((1-state_t)*my_toolbar.h);
          my_objectview.draw(state_t*my_objectview.h);
        }
        break;
      case STATE_WILDCARD:
        break;
      case STATE_CUTSCENE:
        if(state_to == STATE_NAV)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw((1-state_t)*my_toolbar.h);
          my_cutsceneview.draw(state_t*my_cutsceneview.h);
        }
        break;
    }
  };

  self.cleanup = function()
  {
  };

};

