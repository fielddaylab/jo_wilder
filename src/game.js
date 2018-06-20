var save_code = 0;
var save_table_code = 0;
var save_codes = [];
var save_table = [];
var save_modules_str = "";

//must be in chronological order
save_codes.push("startgame");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
],],
all:
[
"tunic.historicalsociety.closet",
],
code:"0500000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000"
};
save_codes.push("notebook");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.closet.notebook",
],],
all:
[
],
code:"0500000000000000000000000000000000001001689500000000000000000000000000000000000000000000000000000000"
};
save_codes.push("wiscwonders");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.entry.groupconvo",
],],
all:
[
],
code:"0900000000000000000000000000000000003001843110485762103296000000000000000000000000000000000000000000"
};
save_codes.push("mysteryslip");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.collection.gramps.found",
],],
all:
[
],
code:"0700000000000000000000000000000000003001843110727522103296000000000000000000000000000000000000000000"
};
save_codes.push("plaque");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.kohlcenter.halloffame.plaque.face.date",
],],
all:
[
],
code:"1400000000000000000000000000000000003001843110730082103296000000000000002031616000000200000000000000"
};
save_codes.push("notajersey");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.capitol_0.hall.chap1_finale_c",
],],
all:
[
],
code:"0000208220000000001740800000000000003001843110730082103296000000000000002031616000000200000000000000"
};
save_codes.push("trashed");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.closet_dirty",
],],
all:
[
],
code:"0600208300131072001740800000000000003005119910730162103296000000000000002031616000000200000000000000"
};
save_codes.push("archivist");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.frontdesk.archivist.have_glass",
],],
all:
[
],
code:"1000208300131072001740800000000000003090316710730222103296014761900000002031616000000200000000000000"
};
save_codes.push("textile");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
],],
all:
[
],
code:"1300208300131072001740800000000000003090316710730222103296014768336700162035707000000200000000000000"
};
save_codes.push("logbook");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
],],
all:
[
],
code:"0100208300131072604672000017970000003090316710730222103296014768336700162035707000000200000000000000"
};
save_codes.push("suffragist");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.library.microfiche.reader.paper2.bingo",
],],
all:
[
],
code:"1600208300131072814387200017970000003090316710730222103296014768336700162035707393244600000270000000"
};
save_codes.push("taxidermist");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.library.frontdesk.worker.wells",
],],
all:
[
],
code:"1500208300131072814387200017970000003090316710730222103296014768336700162035707396111800000270000000"
};
save_codes.push("blowthisthingwideopen");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
],],
all:
[
],
code:"1200208300131072814387200017970000003090316710730222103296827517136700312035707396111800000270000000"
};
save_codes.push("mustsaveteddy");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.capitol_1.hall.chap2_finale_c",
],],
all:
[
],
code:"0028061105373973818282700017970000003090316710730222103296827517136700312035707396111800000270000000"
};
save_codes.push("scratches");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.basement.seescratches",
],],
all:
[
],
code:"0328061105373973818282700017970005123090316710730222103296827517136700312035707396111800000270000000"
};
save_codes.push("hesalive");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.cage.teddy.trapped",
],],
all:
[
],
code:"0428061105373973818282700017971012739090316710730222103296827517136700312035707396111800000270000000"
};
save_codes.push("akey");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.frontdesk.key",
],],
all:
[
],
code:"1028061105373973818282700017971045507090316710730222105088828336336700312035707396111800000270000000"
};
save_codes.push("rescued");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.cage.confrontation",
],],
all:
[
],
code:"0428061105373973818282700017977336963090316710730222105088828336336700312035707396111800000270000000"
};
save_codes.push("backtowork");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.collection_flag.gramps.flag",
],],
all:
[
],
code:"0828061105373973818282700017977339011090316713023982105088828336336700312035707396111800000270000000"
};
save_codes.push("sadanimals");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.wildlife.center.wells.nodeer",
],],
all:
[
],
code:"1828061105373973818282700017977339011090316778559986299505828336336700312035707396111800000270481776"
};
save_codes.push("flaglady");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.flaghouse.entry.flag_girl.symbol",
],],
all:
[
],
code:"0228061105373973818282728689977339011090316778559986299505828336336700312035707396111800000271006064"
};
save_codes.push("ecologists");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.library.microfiche.reader_flag.paper2.bingo",
],],
all:
[
],
code:"1628061105373973818282728689977339011090316778559986299505828336336700312035707396118200562191006064"
};
save_codes.push("donethework");
save_table[save_codes[save_codes.length-1]] = {
reqs:[[
"tunic.historicalsociety.stacks.journals_flag.pic_2.bingo",
],],
all:
[
],
code:"1228061105373973818282728689977339011090316778559986299505828336736863992035707396220600562191006064"
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
    {
      scenes[cur_scene].tick();
      //more like QUADRUPLETIME amirite
      if(DOUBLETIME) scenes[cur_scene].tick();
      if(DOUBLETIME) scenes[cur_scene].tick();
    }
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
