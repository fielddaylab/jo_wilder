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
    clicker = new Clicker({source:canvas});
    my_person = new person();
    my_map = new map();
    my_map.nav_box.x = 0;
    my_map.nav_box.y = canv.height/2;
    my_map.nav_box.w = canv.width;
    my_map.nav_box.h = canv.height/2;
    my_map.act_boxes.push({x:10, y:10, w:10, h:10 });
    my_map.act_boxes.push({x:80, y:200,w:10, h:10 });
    my_map.act_boxes.push({x:0,  y:0,  w:0,  h:0  });
    my_map.act_boxes.push({x:0,  y:0,  w:0,  h:0  });
    canv_clicker = {x:0,y:0,w:canv.width,h:canv.height,click:function(evt){ my_person.toX = evt.doX-my_person.w/2; my_person.toY = evt.doY-my_person.h/2; }};
  };

  self.tick = function()
  {
    //clicker.filter(canv_clicker);
    clicker.filter(my_map);
    clicker.flush();
    my_person.tick();
    my_map.tick();
  };

  self.draw = function()
  {
    my_map.draw();
    my_person.draw();
  };

  self.cleanup = function()
  {
  };

};

