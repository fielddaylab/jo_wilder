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
}

var querylocked = function(o)
{
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
  self.nav_x = 0;
  self.nav_y = 0;
  self.nav_w = 0;
  self.nav_h = 0;
  self.start_x = 0;
  self.start_y = 0;
  self.persons = [];
  self.objects = [];
  self.portholes = [];
  self.wildcards = [];
  self.noteworthy = false;
  self.key = false;
}

var person = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_PERSON;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
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
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
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
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
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
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
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

