var find = function(id)
{
  var ids = id.split(".");
  var k = 0;
  if(ids.length <= k) return;
  var level; for(var i = 0; i < levels.length; i++) if(levels[i].id == ids[k]) level = levels[i];
  if(!level || ids.length <= ++k) return level;
  var map; if(level.map.id == ids[k]) map = level.map;
  if(!map || ids.length <= ++k) return map;
  var scene; for(var i = 0; i < map.scenes.length; i++) if(map.scenes[i].id == ids[k]) scene = map.scenes[i];
  if(!scene || ids.length <= ++k) return scene;
  var room; for(var i = 0; i < scene.rooms.length; i++) if(scene.rooms[i].id == ids[k]) room = scene.rooms[i];
  if(!room || ids.length <= ++k) return room;
  var person; for(var i = 0; i < room.persons.length; i++) if(room.persons[i].id == ids[k]) person = room.persons[i];
  if(person)
  {
    if(ids.length <= ++k) return person;
    var speak; for(var i = 0; i < person.speaks.length; i++) if(person.speaks[i].id == ids[k]) speak = person.speaks[i];
    if(!speak || ids.length <= ++k) return speak;
    return;
  }
  var object; for(var i = 0; i < room.objects.length; i++) if(room.objects[i].id == ids[k]) object = room.objects[i];
  if(object)
  {
    if(ids.length <= ++k) return object;
    var view; for(var i = 0; i < object.views.length; i++) if(object.views[i].id == ids[k]) view = object.views[i];
    if(!view || ids.length <= ++k) return view;
    var zone; for(var i = 0; i < view.zones.length; i++) if(view.zones[i].id == ids[k]) zone = view.zones[i];
    if(!zone || ids.length <= ++k) return zone;
    return;
  }
  var porthole; for(var i = 0; i < room.portholes.length; i++) if(room.portholes[i].id == ids[k]) porthole = room.portholes[i];
  if(porthole)
  {
    if(ids.length <= ++k) return porthole;
    return;
  }
  var wildcard; for(var i = 0; i < room.wildcards.length; i++) if(room.wildcards[i].id == keys[k]) wildcard = room.wildcards[i];
  if(wildcard)
  {
    if(ids.length <= ++k) return wildcard;
    return;
  }
  var inert; for(var i = 0; i < room.inerts.length; i++) if(room.inerts[i].id == keys[k]) inert = room.inerts[i];
  if(inert)
  {
    if(ids.length <= ++k) return inert;
    return;
  }
}

var querylocked = function(o)
{
  if(UNLOCK) return false;
  if(o.locked)
  {
    locked = false;
    for(var i = 0; i < o.locks.length;    i++) if(!find(o.locks[i]).key)   locked = true;
    for(var i = 0; i < o.notlocks.length; i++) if(find(o.notlocks[i]).key) locked = true;
    o.locked = locked;
  }
  return o.locked;
}

var level = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.animcycles = [];
  self.entrys = [];
  self.cutscenes = [];
  self.toolbar_animcycle_id = "null";
  self.icon_map_animcycle_id = "null";
  self.icon_notebook_animcycle_id = "null";
  self.notebook_animcycle_id = "null";
  self.avatar_walk_animcycle_id = "null";
  self.avatar_idle_animcycle_id = "null";
  self.avatar_act_animcycle_id = "null";
  self.person_hover_animcycle_id = "null";
  self.object_hover_animcycle_id = "null";
  self.porthole_hover_animcycle_id = "null";
  self.map;
  self.noteworthy = false;
  self.key = false;
}

var map = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.animcycle_id;
  self.animcycle_inst;
  self.scenes = [];
  self.noteworthy = false;
  self.key = false;
}

var scene = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  //for display on the map
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.animcycle_id;
  self.animcycle_inst;
  self.rooms = [];
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var room = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.animcycle_id;
  self.animcycle_inst;
  self.navs = [];
  self.start_x = 0;
  self.start_y = 0;
  self.persons = [];
  self.objects = [];
  self.portholes = [];
  self.wildcards = [];
  self.inerts = [];
  self.noteworthy = false;
  self.key = false;
}

var person = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_PERSON;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.animcycle_id;
  self.animcycle_inst;
  self.speaks = [];
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var object = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_OBJECT;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.animcycle_id;
  self.animcycle_inst;
  self.views = [];
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var porthole = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_PORTHOLE;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.animcycle_id;
  self.animcycle_inst;
  self.target_room = "null";
  self.target_room_found; //auto precompiled in
  self.target_start_x = 0;
  self.target_start_y = 0;
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var wildcard = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_WILDCARD;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.animcycle_id;
  self.animcycle_inst;
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var inert = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_INERT;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.animcycle_id;
  self.animcycle_inst;
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var view = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.animcycle_id;
  self.animcycle_inst;
  self.zones = [];
  self.noteworthy = false;
  self.key = false;
}

var zone = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.animcycle_id;
  self.animcycle_inst;
  self.target_view = "null";
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var stextToLines = function(text,w)
{
  return textToLines(option_font, w, text, ctx)
}

var speak = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.animcycle_id;
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.w = canv.width/2;
  self.h = 0;
  self.raw_atext = "null";
  self.atext_hard_coded = false;
  self.atext = stextToLines(self.raw_atext,self.w);
  self.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
  self.options_x = 0;
  self.options_y = 0;
  self.options_w = canv.width/2;
  self.options_h = 0;
  self.options = [];
  self.noteworthy = false;
  self.key = false;
}

var option = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null"
  self.x = 0;
  self.y = 0;
  self.w = canv.width/2;
  self.h = 0;
  self.static = false;
  self.index = 0;
  self.raw_qtext = "null";
  self.qtext_hard_coded = false;
  self.qtext = stextToLines(self.raw_qtext,self.w);
  self.target_speak = "null";
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var entry = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null";
  self.x = 0;
  self.y = 0;
  self.w = canv.width/2;
  self.h = 100;
  self.animcycle_id;
  self.animcycle_inst;
  self.index = 0;
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var animcycle = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null";
  self.w = 0;
  self.h = 0;
  self.frames = [];
  self.frame_t = 0;
  self.offset_t = 0;
}

var CUTSCENE_COMMAND_IGNORE = -927345892; //lolololol type system
var cutscene_command = function()
{
  var self = this;

  self.command = COMMAND_NULL;
  self.cutscene_entity_id = "null";
  self.cutscene_entity_type = ENTITY_NULL;
  self.t = 0;
  self.end_t = 0;
  self.x = CUTSCENE_COMMAND_IGNORE;
  self.y = CUTSCENE_COMMAND_IGNORE;
  self.z = CUTSCENE_COMMAND_IGNORE;
  self.w = CUTSCENE_COMMAND_IGNORE;
  self.h = CUTSCENE_COMMAND_IGNORE;
  self.animcycle_id = "null";
  self.animcycle_offset_t = 0;
  self.raw_text = "null";
  self.text = stextToLines(self.raw_text,self.w);

  //ephemeral
  self.from_x;
  self.from_y;
  self.from_z;
  self.from_w;
  self.from_h;
}

/*
//example create
c.command = COMMAND_CREATE;
c.t = 4.5;
c.cutscene_entity_id = "penny"; //this is time-of-creation. defines entity
c.animation_id = "penny"; //picks out animation
c.animation_anim = 1;
c.x = 10;
c.y = 10;
c.w = 10;
c.h = 10;

//example set animation
c.command = COMMAND_ANIMATE;
c.t = 4.5;
c.cutscene_entity_id = "penny"; //this is time-of-creation. picks out entity
c.animation_anim = 1;

//example move
c.command = COMMAND_MOVE;
c.t = 8.5;
c.end_t = 12.5;
c.cutscene_entity_id = "penny"; //this is time-of-creation. picks out entity
c.x = 20;
c.y = 20;
c.w = 0; //optional- 0 means stay the same
c.h = 0; //optional- 0 means stay the same

*/

var cutscene = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null";

  self.commands = [];

  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
}

var print_level_meta = function(l)
{
  var str = "SAVE level "+l.fqid+"\n"+
  "tmp_level.primary = "+l.primary+";\n"+
  "tmp_level.toolbar_animcycle_id = \""+l.toolbar_animcycle_id+"\";\n"+
  "tmp_level.icon_map_animcycle_id = \""+l.icon_map_animcycle_id+"\";\n"+
  "tmp_level.icon_notebook_animcycle_id = \""+l.icon_notebook_animcycle_id+"\";\n"+
  "tmp_level.notebook_animcycle_id = \""+l.notebook_animcycle_id+"\";\n"+
  "tmp_level.avatar_walk_animcycle_id = \""+l.avatar_walk_animcycle_id+"\";\n"+
  "tmp_level.avatar_idle_animcycle_id = \""+l.avatar_idle_animcycle_id+"\";\n"+
  "tmp_level.avatar_act_animcycle_id = \""+l.avatar_act_animcycle_id+"\";\n"+
  "tmp_level.person_hover_animcycle_id = \""+l.person_hover_animcycle_id+"\";\n"+
  "tmp_level.object_hover_animcycle_id = \""+l.object_hover_animcycle_id+"\";\n"+
  "tmp_level.porthole_hover_animcycle_id = \""+l.porthole_hover_animcycle_id+"\";\n"+
  "tmp_level.noteworthy = "+l.noteworthy+";\n"+
  "tmp_level.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_level.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_map_meta = function(l)
{
  var str = "SAVE map "+l.fqid+"\n"+
  "tmp_map.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_map.noteworthy = "+l.noteworthy+";\n"+
  "tmp_map.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_map.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_scene_meta = function(l)
{
  var str = "SAVE scene "+l.fqid+"\n"+
  "tmp_scene.primary = "+l.primary+";\n"+
  "tmp_scene.w = "+l.w+";\n"+
  "tmp_scene.h = "+l.h+";\n"+
  "tmp_scene.x = "+l.x+";\n"+
  "tmp_scene.y = "+l.y+";\n"+
  "tmp_scene.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_scene.noteworthy = "+l.noteworthy+";\n"+
  "tmp_scene.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_scene.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_room_meta = function(l)
{
  var str = "SAVE room "+l.fqid+"\n"+
  "tmp_room.primary = "+l.primary+";\n"+
  "tmp_room.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_room.navs = [\n";
  for(var i = 0; i < l.navs.length; i++)
    str += "{x:"+l.navs[i].x+", y:"+l.navs[i].y+", w:"+l.navs[i].w+", h:"+l.navs[i].h+" },\n";
  str +=
  "];\n"+
  "tmp_room.start_x = "+l.start_x+";\n"+
  "tmp_room.start_y = "+l.start_y+";\n"+
  "tmp_room.noteworthy = "+l.noteworthy+";\n";
  console.log(str);
}

var print_person_meta = function(l)
{
  var str = "SAVE person "+l.fqid+"\n"+
  "tmp_person.w = "+l.w+";\n"+
  "tmp_person.h = "+l.h+";\n"+
  "tmp_person.x = "+l.x+";\n"+
  "tmp_person.y = "+l.y+";\n"+
  "tmp_person.z = "+l.z+";\n"+
  "tmp_person.act_x = "+l.act_x+";\n"+
  "tmp_person.act_y = "+l.act_y+";\n"+
  "tmp_person.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_person.noteworthy = "+l.noteworthy+";\n"+
  "tmp_person.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_person.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_speak_meta = function(l)
{
  var str = "SAVE speak "+l.fqid+"\n"+
  "tmp_speak.primary = "+l.primary+";\n"+
  "tmp_speak.w = "+l.w+";\n"+
  "tmp_speak.h = "+l.h+";\n"+
  "tmp_speak.x = "+l.x+";\n"+
  "tmp_speak.y = "+l.y+";\n"+
  "tmp_speak.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_speak.raw_atext = \""+l.raw_atext+"\";\n"+
  "tmp_speak.speaker = "+l.speaker+";\n"+
  "tmp_speak.options_w = "+l.options_w+";\n"+
  "tmp_speak.options_h = "+l.options_h+";\n"+
  "tmp_speak.options_x = "+l.options_x+";\n"+
  "tmp_speak.options_y = "+l.options_y+";\n"+
  "tmp_speak.noteworthy = "+l.noteworthy+";\n";
  console.log(str);
}

var print_option_meta = function(l)
{
  var str = "SAVE option "+l.fqid+"\n"+
  "tmp_option.w = "+l.w+";\n"+
  "tmp_option.h = "+l.h+";\n"+
  "tmp_option.x = "+l.x+";\n"+
  "tmp_option.y = "+l.y+";\n"+
  "tmp_option.static = "+l.static+";\n"+
  "tmp_option.index = "+l.index+";\n"+
  "tmp_option.raw_qtext = \""+l.raw_qtext+"\";\n"+
  "tmp_option.target_speak = \""+l.target_speak+"\";\n"+
  "tmp_option.noteworthy = "+l.noteworthy+";\n"+
  "tmp_option.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_option.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_object_meta = function(l)
{
  var str = "SAVE object "+l.fqid+"\n"+
  "tmp_object.w = "+l.w+";\n"+
  "tmp_object.h = "+l.h+";\n"+
  "tmp_object.x = "+l.x+";\n"+
  "tmp_object.y = "+l.y+";\n"+
  "tmp_object.z = "+l.z+";\n"+
  "tmp_object.act_x = "+l.act_x+";\n"+
  "tmp_object.act_y = "+l.act_y+";\n"+
  "tmp_object.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_object.noteworthy = "+l.noteworthy+";\n"+
  "tmp_object.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_object.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_view_meta = function(l)
{
  var str = "SAVE view "+l.fqid+"\n"+
  "tmp_view.primary = "+l.primary+";\n"+
  "tmp_view.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_view.noteworthy = "+l.noteworthy+";\n";
  console.log(str);
}

var print_zone_meta = function(l)
{
  var str = "SAVE zone "+l.fqid+"\n"+
  "tmp_zone.w = "+l.w+";\n"+
  "tmp_zone.h = "+l.h+";\n"+
  "tmp_zone.x = "+l.x+";\n"+
  "tmp_zone.y = "+l.y+";\n"+
  "tmp_zone.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_zone.target_view = \""+l.target_view+"\";\n"+
  "tmp_zone.noteworthy = "+l.noteworthy+";\n"+
  "tmp_zone.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_zone.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_porthole_meta = function(l)
{
  var str = "SAVE porthole "+l.fqid+"\n"+
  "tmp_porthole.w = "+l.w+";\n"+
  "tmp_porthole.h = "+l.h+";\n"+
  "tmp_porthole.x = "+l.x+";\n"+
  "tmp_porthole.y = "+l.y+";\n"+
  "tmp_porthole.z = "+l.z+";\n"+
  "tmp_porthole.act_x = "+l.act_x+";\n"+
  "tmp_porthole.act_y = "+l.act_y+";\n"+
  "tmp_porthole.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_porthole.target_room = \""+l.target_room+"\";\n"+
  "tmp_porthole.target_start_x = "+l.target_start_x+";\n"+
  "tmp_porthole.target_start_y = "+l.target_start_y+";\n"+
  "tmp_porthole.noteworthy = "+l.noteworthy+";\n"+
  "tmp_porthole.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_porthole.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_wildcard_meta = function(l)
{
  var str = "SAVE wildcard "+l.fqid+"\n"+
  "tmp_wildcard.w = "+l.w+";\n"+
  "tmp_wildcard.h = "+l.h+";\n"+
  "tmp_wildcard.x = "+l.x+";\n"+
  "tmp_wildcard.y = "+l.y+";\n"+
  "tmp_wildcard.z = "+l.z+";\n"+
  "tmp_wildcard.act_x = "+l.act_x+";\n"+
  "tmp_wildcard.act_y = "+l.act_y+";\n"+
  "tmp_wildcard.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_wildcard.noteworthy = "+l.noteworthy+";\n"+
  "tmp_wildcard.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_wildcard.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_inert_meta = function(l)
{
  var str = "SAVE inert "+l.fqid+"\n"+
  "tmp_inert.w = "+l.w+";\n"+
  "tmp_inert.h = "+l.h+";\n"+
  "tmp_inert.x = "+l.x+";\n"+
  "tmp_inert.y = "+l.y+";\n"+
  "tmp_inert.z = "+l.z+";\n"+
  "tmp_inert.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_inert.noteworthy = "+l.noteworthy+";\n"+
  "tmp_inert.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_inert.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_whole_level = function(l)
{
  print_level_meta(l);
  var map = l.map;
  print_map_meta(map);
  var scene;
  for(var i = 0; i < map.scenes.length; i++)
  {
    scene = map.scenes[i];
    print_scene_meta(scene);
    var room;
    for(var j = 0; j < scene.rooms.length; j++)
    {
      room = scene.rooms[j];
      print_room_meta(room);
      var person;
      for(var k = 0; k < room.persons.length; k++)
      {
        person = room.persons[k];
        print_person_meta(person);
        var speak;
        for(var l = 0; l < person.speaks.length; l++)
        {
          speak = person.speaks[l];
          print_speak_meta(speak);
          var option;
          for(var m = 0; m < speak.options.length; m++)
          {
            option = speak.options[m];
            print_option_meta(option);
          }
        }
      }
      var object;
      for(var k = 0; k < room.objects.length; k++)
      {
        object = room.objects[k];
        print_object_meta(object);
        var view;
        for(var l = 0; l < object.views.length; l++)
        {
          view = object.views[l];
          print_view_meta(view);
          var zone;
          for(var m = 0; m < view.zones.length; m++)
          {
            zone = view.zones[m];
            print_zone_meta(zone);
          }
        }
      }
      var porthole;
      for(var k = 0; k < room.portholes.length; k++)
      {
        porthole = room.portholes[k];
        print_porthole_meta(porthole);
      }
      var wildcard;
      for(var k = 0; k < room.wildcards.length; k++)
      {
        wildcard = room.wildcards[k];
        print_wildcard_meta(wildcard);
      }
      var inert;
      for(var k = 0; k < room.inerts.length; k++)
      {
        inert = room.inerts[k];
        print_inert_meta(inert);
      }
    }
  }
}

