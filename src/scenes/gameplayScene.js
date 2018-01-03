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
    my_navigable = new navigable();
    my_navigable.consume_room(cur_room);

    canv_clicker = {x:0,y:0,w:canv.width,h:canv.height,click:function(evt){ }};
  };

  self.tick = function()
  {
    clicker.filter(canv_clicker);
    clicker.filter(my_navigable);
    clicker.flush();
    my_avatar.tick();
    my_navigable.tick();
  };

  self.draw = function()
  {
    my_navigable.draw();
    my_avatar.draw();
  };

  self.cleanup = function()
  {
  };

};

