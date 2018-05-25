var save_code = 0;
var save_codes = [];
var save_table = [];

//must be in chronological order

save_codes.push("startgame");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"00000000000000000000000000000000000000000000000000000000000000000"
};

save_codes.push("notebook");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"03000000000000008372480000003200000000000000000000000000000000000"
};

save_codes.push("wiscwonders");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"05000000000000008372992026217902933120000001000000000000000000000"
};

save_codes.push("jersey");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"060000000000000044563244194304013126400000000000000000000000000000000000",
};

save_codes.push("mysteryslip");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"05000000000000008372992183504302933590000001000000000000000000000",
};

save_codes.push("plaque");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"11000000000000008372992183504302933590000001000000000022960000000",
};

save_codes.push("notajersey");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"00000290200204808372992183504302933590000001000000000022960000000",
};

save_codes.push("trashed");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"04000290200204808372992196617902933590000001000000000022960000000",
};

save_codes.push("uptome");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"04000290200204808372992206614702933590000001000000000022960000000",
};

save_codes.push("archivist");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"07000290200204808372992206614702933590018463000000000022960000000",
};

save_codes.push("expert");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"060000000000000044563244194304013126400000000000000000000000000000000000"
};

save_codes.push("oldestcleaner");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"060000000000000044563244194304013126400000000000000000000000000000000000"
};

save_codes.push("logbook");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"060000000000000044563244194304013126400000000000000000000000000000000000"
};

save_codes.push("checkbacklater");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"060000000000000044563244194304013126400000000000000000000000000000000000"
};

save_codes.push("suffragist");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"060000000000000044563244194304013126400000000000000000000000000000000000"
};

save_codes.push("taxidermist");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"060000000000000044563244194304013126400000000000000000000000000000000000"
};

save_codes.push("stacks");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"060000000000000044563244194304013126400000000000000000000000000000000000"
};

save_codes.push("photo");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"060000000000000044563244194304013126400000000000000000000000000000000000"
};

save_codes.push("blowthisthingwideopen");
save_table[save_codes[save_codes.length-1]] = {
  reqs:[[
  ]],
  code:"000020830602636883594848265607039500083885768362708837210357384030030691"
};

var url_json = jsonFromURL();
var cookie;
if(url_json.save)
{
  save_code = url_json.save;
  setCookie("save", url_json.save, 100);
}
else save_code = getCookie("save");

var Game = function(init)
{
  var default_init =
  {
    width:640,
    height:320,
    container:"stage_container"
  }

  var self = this;
  doMapInitDefaults(init,init,default_init);

  var stage = new Stage({width:init.width,height:init.height,container:init.container});
  var scenes = [
    new NullScene(self, stage),
    new LoadingScene(self, stage),
    new MenuScene(self, stage),
    new GamePlayScene(self, stage),
  ];
  var cur_scene     =  0;
  var old_cur_scene = -1;

  self.resize = function(args)
  {
    document.getElementById(init.container).removeChild(stage.canv.canvas);
    if(args.stage) stage = args.stage;
    else stage = new Stage({width:args.width,height:args.height,container:init.container});
    for(var i = 0; i < scenes.length; i++)
      scenes[i].resize(stage);
  }

  var flip;
  var flop;
  self.begin = function()
  {
    self.nextScene();
    flip = Date.now();
    tick();
  };

  var tick = function()
  {
    requestAnimFrame(tick,stage.canv.canvas);
    scenes[cur_scene].tick();
    var slow = false;
    flop = Date.now();
    slow = flop-flip > 25;
    flip = flop;
    if(old_cur_scene == cur_scene && (DOUBLETIME || slow))
      scenes[cur_scene].tick();
    if(old_cur_scene == cur_scene) //still in same scene- draw
    {
      stage.clear();
      scenes[cur_scene].draw();
      stage.draw(); //blits from offscreen canvas to on screen one
    }
    old_cur_scene = cur_scene;
  };

  self.nextScene = function()
  {
    self.setScene(cur_scene+1);
  };

  self.setScene = function(i)
  {
    scenes[cur_scene].cleanup();
    cur_scene = i;
    scenes[cur_scene].ready();
  }
};

