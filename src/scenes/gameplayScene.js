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

    cur_state = STATE_INSPECT;
  };

  self.tick = function()
  {
    switch(cur_state)
    {
      case STATE_INSPECT:
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
        break;
    }
    clicker.flush();
  };

  self.draw = function()
  {
    switch(cur_state)
    {
      case STATE_INSPECT:
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

