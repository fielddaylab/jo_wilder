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

    canv_clicker = {x:0,y:0,w:canv.width,h:canv.height,click:function(evt){ }};

    cur_state = STATE_INSPECT;
  };

  self.tick = function()
  {
    clicker.filter(my_toolbar);
    clicker.filter(my_navigable);
    clicker.filter(canv_clicker);
    clicker.flush();
    my_avatar.tick();
    my_navigable.tick();
  };

  self.draw = function()
  {
    my_navigable.draw();
    my_avatar.draw();
    my_toolbar.draw();
  };

  self.cleanup = function()
  {
  };

};

