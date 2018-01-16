var find = function(id,node)
{
  var keys = id.split(".");
  var k = 0;
  if(keys.length <= k) return;
  var level; if(node.id == keys[k]) level = node;
  if(!level || keys.length <= ++k) return level;
  var map; if(level.map.id == keys[k]) map = level.map;
  if(!map || keys.length <= ++k) return map;
  var scene; for(var i = 0; i < map.scenes.length; i++) if(map.scenes[i].id == keys[k]) scene = map.scenes[i];
  if(!scene || keys.length <= ++k) return scene;
  var room; for(var i = 0; i < scene.rooms.length; i++) if(scene.rooms[i].id == keys[k]) room = scene.rooms[i];
  if(!room || keys.length <= ++k) return room;
  var person; for(var i = 0; i < room.persons.length; i++) if(room.persons[i].id == keys[k]) person = room.persons[i];
  if(person)
  {
    if(keys.length <= ++k) return person;
    var option; for(var i = 0; i < person.options.length; i++) if(person.options[i].id == keys[k]) option = person.options[i];
    if(!option || keys.length <= ++k) return option;
    var lock; for(var i = 0; i < option.locks.length; i++) if(option.locks[i].id == keys[k]) lock = option.locks[i];
    if(!lock || keys.length <= ++k) return lock;
    return;
  }
  var object; for(var i = 0; i < room.objects.length; i++) if(room.objects[i].id == keys[k]) object = room.objects[i];
  if(object)
  {
    if(keys.length <= ++k) return object;
    var view; for(var i = 0; i < object.views.length; i++) if(object.views[i].id == keys[k]) view = object.views[i];
    if(!view || keys.length <= ++k) return view;
    var zone; for(var i = 0; i < view.zones.length; i++) if(view.zones[i].id == keys[k]) zone = view.zones[i];
    if(!zone || keys.length <= ++k) return zone;
    var lock; for(var i = 0; i < zone.locks.length; i++) if(zone.locks[i].id == keys[k]) lock = zone.locks[i];
    if(!lock || keys.length <= ++k) return lock;
    return;
  }
  var porthole; for(var i = 0; i < room.portholes.length; i++) if(room.portholes[i].id == keys[k]) porthole = room.portholes[i];
  if(porthole)
  {
    if(keys.length <= ++k) return porthole;
    var lock; for(var i = 0; i < porthole.locks.length; i++) if(porthole.locks[i].id == keys[k]) lock = porthole.locks[i];
    if(!lock || keys.length <= ++k) return lock;
    return;
  }
  var wildcard; for(var i = 0; i < room.wildcards.length; i++) if(room.wildcards[i].id == keys[k]) wildcard = room.wildcards[i];
  if(wildcard)
  {
    if(keys.length <= ++k) return wildcard;
    var lock; for(var i = 0; i < wildcard.locks.length; i++) if(wildcard.locks[i].id == keys[k]) lock = wildcard.locks[i];
    if(!lock || keys.length <= ++k) return lock;
    return;
  }
}

var querylocked = function(o)
{
  if(o.locked)
  {
    locked = false;
    for(var i = 0; i < o.locks.length; i++) if(!find(o.locks[i]).key) locked = true;
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
}

var map = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.scenes = [];
  self.anim;
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
  self.parent = "null";
  self.locks = [];
  self.key = false;
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
  self.key = false;
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
  self.target_room;
  self.locks = [];
  self.key = false;
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
  self.key = false;
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
  self.key = false;
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
  self.locks = [];
  self.key = false;
  self.locked = true;
}

var option = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.anim;
  self.qtext = "null";
  self.atext = "null";
  self.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
  self.locks = [];
  self.key = false;
  self.locked = true;
}

var lock = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
}

