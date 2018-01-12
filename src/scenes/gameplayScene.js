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
    cur_level = levels[0];
    cur_map = cur_level.map;
    cur_scene = cur_map.scenes[0];
    cur_room = cur_scene.rooms[0];

    clicker = new Clicker({source:canvas});
    my_avatar = new avatar();
    my_avatar.consume_room(cur_room);
    my_navigable = new navigable();
    my_navigable.consume_room(cur_room);
    my_toolbar = new toolbar();
    my_overworld = new overworld();
    my_overworld.consume_map(cur_map);
    my_notebook = new notebook();
    my_objectview = new objectview();
    my_personview = new personview();

    canv_clicker = {x:0,y:0,w:canv.width,h:canv.height,click:function(evt){ }};

    cur_state = STATE_NAV;
    state_t = 0;
  };

  self.tick = function()
  {
    switch(cur_state)
    {
      case STATE_NAV:
        if(
        !clicker.filter(my_toolbar) &&
        !clicker.filter(my_navigable) &&
        !clicker.filter(canv_clicker) &&
        false) ;
        my_avatar.tick();
        my_navigable.tick();
        break;
      case STATE_MAP:
        if(
        !clicker.filter(my_overworld) &&
        false) ;
        my_avatar.tick();
        my_navigable.tick();
        my_overworld.tick();
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
        my_avatar.tick();
        my_navigable.tick();
        my_objectview.tick();
        break;
      case STATE_WILDCARD:
        my_avatar.tick();
        my_navigable.tick();
        break;
      case STATE_TRANSITION:
        transition_tick();
        break;
    }
    clicker.flush();
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
        my_overworld.draw(0);
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
      case STATE_TRANSITION:
        transition_draw();
        break;
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
          state_t += 0.01*state_t_speed;
          if(old_state_t < 0.5 && state_t >= 0.5)
          {
            if(cur_act.act == ACT_PORTHOLE)
            {
              var r = find(cur_level.id+"."+cur_map.id+"."+cur_scene.id+"."+cur_act.target_room,cur_level);
              if(r) cur_room = r;
              my_avatar.consume_room(cur_room);
              my_navigable.consume_room(cur_room);
              cur_act = 0;
            }
          }
        }
        else state_t += 0.01*state_t_speed;
        break;
      case STATE_MAP:
        my_avatar.tick();
        my_navigable.tick;
        if(state_to == STATE_NAV && my_overworld.selected_scene && my_overworld.selected_scene != cur_scene)
        {
          state_t += 0.01*state_t_speed;
          if(old_state_t < 0.5 && state_t >= 0.5)
          {
            cur_scene = my_overworld.selected_scene;
            my_overworld.selected_scene = 0;
            cur_room = cur_scene.rooms[0];
            my_avatar.consume_room(cur_room);
            my_navigable.consume_room(cur_room);
            cur_act = 0;
          }
        }
        else state_t += 0.01*state_t_speed;
        break;
      case STATE_NOTEBOOK:
        my_avatar.tick();
        my_navigable.tick();
        state_t += 0.01*state_t_speed;
        break;
      case STATE_PERSON:
        my_avatar.tick();
        my_navigable.tick();
        state_t += 0.01*state_t_speed;
        break;
      case STATE_OBJECT:
        my_avatar.tick();
        my_navigable.tick();
        state_t += 0.01*state_t_speed;
        break;
      case STATE_WILDCARD:
        my_avatar.tick();
        my_navigable.tick();
        state_t += 0.01*state_t_speed;
        break;
    }

    if(state_t >= 1)
    {
      state_t = 0;
      cur_state = state_to;
    }
  }

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
          my_overworld.draw((1-state_t)*my_overworld.h);
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
        break;
      case STATE_MAP:
        if(state_to == STATE_NAV)
        {
          if(my_overworld.selected_scene && my_overworld.selected_scene != cur_scene)
          {
            my_navigable.draw();
            my_avatar.draw();
            my_toolbar.draw(0);
            var blur = (state_t*2)-1;
            blur = 1-(blur*blur);
            if(state_t < 0.5)
              my_overworld.draw(0);
            ctx.fillStyle = "rgba(0,0,0,"+blur+")";
            ctx.fillRect(0,0,canv.width,canv.height);
          }
          else
          {
            my_navigable.draw();
            my_avatar.draw();
            my_toolbar.draw((1-state_t)*my_toolbar.h);
            my_overworld.draw(state_t*my_overworld.h);
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
          my_personview.draw(state_t*my_notebook.h);
        }
        break;
      case STATE_OBJECT:
        if(state_to == STATE_NAV)
        {
          my_navigable.draw();
          my_avatar.draw();
          my_toolbar.draw((1-state_t)*my_toolbar.h);
          my_objectview.draw(state_t*my_notebook.h);
        }
        break;
      case STATE_WILDCARD:
        break;
    }
  }

  self.cleanup = function()
  {
  };

};

