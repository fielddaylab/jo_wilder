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

    canv_clicker = {x:0,y:0,w:canv.width,h:canv.height,click:function(evt){ }};

    cur_state = STATE_NAV;
    state_t = 0;
  };

  self.tick = function()
  {
    switch(cur_state)
    {
      case STATE_NAV:
        clicker.filter(my_toolbar);
        clicker.filter(my_navigable);
        clicker.filter(canv_clicker);
        my_avatar.tick();
        my_navigable.tick();
        break;
      case STATE_MAP:
        clicker.filter(my_overworld);
        my_overworld.tick();
        break;
      case STATE_NOTEBOOK:
        clicker.filter(my_notebook);
        my_notebook.tick();
        break;
      case STATE_PERSON:
        break;
      case STATE_OBJECT:
        break;
      case STATE_WILDCARD:
        break;
      case STATE_TRANSITION:
        var old_state_t = state_t;
        state_t += 0.01;
        if(old_state_t < 0.5 && state_t >= 0.5)
        {
          if(cur_act.act == ACT_PORTHOLE)
          {
            var r = find(cur_level.id+"."+cur_map.id+"."+cur_scene.id+"."+cur_act.target_room,cur_level);
            if(r) cur_room = r;
            console.log(r);
            my_avatar.consume_room(cur_room);
            my_navigable.consume_room(cur_room);
            cur_act = 0;
          }
        }
        if(state_t >= 1)
        {
          state_t = 0;
          cur_state = state_to;
        }
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
        my_toolbar.draw();
        break;
      case STATE_MAP:
        my_overworld.draw();
        break;
      case STATE_NOTEBOOK:
        my_notebook.draw();
        break;
      case STATE_PERSON:
        break;
      case STATE_OBJECT:
        break;
      case STATE_WILDCARD:
        break;
      case STATE_TRANSITION:
        break;
    }
  };

  self.cleanup = function()
  {
  };

};

