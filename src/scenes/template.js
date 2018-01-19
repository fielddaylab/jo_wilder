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
    var option; for(var i = 0; i < person.options.length; i++) if(person.options[i].id == ids[k]) option = person.options[i];
    if(!option || ids.length <= ++k) return option;
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
  self.map;
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
}

var map = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.scenes = [];
  self.anim;
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
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
  self.anim;
  self.rooms = [];
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
}

var room = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.img;
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
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
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
  self.anim;
  self.options = [];
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
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
  self.anim;
  self.views = [];
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
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
  self.target_room = "null";
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
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
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
}

var view = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.anim;
  self.zones = [];
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
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
  self.target_view = "null";
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
}

var otextToLines = function(text)
{
  return textToLines(option_font, canv.width/2, text, ctx)
}
var option = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.anim;
  self.parent = "null";
  self.qtext = otextToLines("null");
  self.atext = otextToLines("null");
  self.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
  self.locks = [];
  self.notlocks = [];
  self.key = false;
  self.noteworthy = false;
  self.locked = true;
}

