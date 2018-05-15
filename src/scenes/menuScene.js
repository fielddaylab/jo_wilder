var MenuScene = function(game, stage)
{
  var self = this;

  var clicker;

  var canv;
  var canvas;
  var ctx;
  self.resize = function(stage)
  {
    canv = stage.canv;
    canvas = canv.canvas;
    ctx = canv.context;

    if(clicker) { clicker = new Clicker({source:canvas}); }
  }
  self.resize(stage);

  var new_button;
  var continue_button;
  var code_button;

  var next = 0;
  var next_t = 0;

  self.ready = function()
  {
    if(!clicker) clicker = new Clicker({source:canvas});

    var x = 20;
    var y = 20;
    var w = 200;
    var h = 50;
    new_button      = new ButtonBox(x,y,w,h,function(evt){ save_code = 0; setCookie("save", 0, 0); next = 1; }); y += h+10;
    continue_button = new ButtonBox(x,y,w,h,function(evt){                                         next = 1; }); y += h+10;
    code_button     = new ButtonBox(x,y,w,h,function(evt){ save_code = save_table["abc"];          next = 1; }); y += h+10;

    next = 0;
    next_t = 0;
  };

  self.tick = function()
  {
    if(next)
    {
      next_t += 0.01;
      if(next_t >= 1) game.nextScene();
      else clicker.flush();
    }
    else
    {
      if(
        !clicker.filter(new_button) &&
        !clicker.filter(continue_button) &&
        !clicker.filter(code_button) &&
        false)
        ;
      clicker.flush();
    }
  };

  self.draw = function()
  {
    new_button.draw(canv);
    continue_button.draw(canv);
    code_button.draw(canv);
    ctx.fillStyle = black;
    ctx.fillText("New Game",new_button.x+15,new_button.y+new_button.h-10);
    ctx.fillText("Continue",continue_button.x+15,continue_button.y+continue_button.h-10);
    ctx.fillText("Enter Code",code_button.x+15,code_button.y+code_button.h-10);

    if(next)
    {
      ctx.fillStyle = black;
      ctx.globalAlpha = next_t;
      ctx.fillRect(0,0,canv.width,canv.height);
      ctx.globalAlpha = 1;
    }
  };

  self.cleanup = function()
  {
    clicker.detach();
    clicker = null;
  };
};
