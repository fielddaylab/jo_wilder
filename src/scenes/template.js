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
    var requirement; for(var i = 0; i < option.requirements.length; i++) if(option.requirements[i].id == keys[k]) requirement = option.requirements[i];
    if(!requirement || keys.length <= ++k) return requirement;
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
    var requirement; for(var i = 0; i < zone.requirements.length; i++) if(zone.requirements[i].id == keys[k]) requirement = zone.requirements[i];
    if(!requirement || keys.length <= ++k) return requirement;
    return;
  }
  var porthole; for(var i = 0; i < room.portholes.length; i++) if(room.portholes[i].id == keys[k]) porthole = room.portholes[i];
  if(porthole)
  {
    if(keys.length <= ++k) return porthole;
    var requirement; for(var i = 0; i < porthole.requirements.length; i++) if(porthole.requirements[i].id == keys[k]) requirement = porthole.requirements[i];
    if(!requirement || keys.length <= ++k) return requirement;
    return;
  }
  var wildcard; for(var i = 0; i < room.wildcards.length; i++) if(room.wildcards[i].id == keys[k]) wildcard = room.wildcards[i];
  if(wildcard)
  {
    if(keys.length <= ++k) return wildcard;
    var requirement; for(var i = 0; i < wildcard.requirements.length; i++) if(wildcard.requirements[i].id == keys[k]) requirement = wildcard.requirements[i];
    if(!requirement || keys.length <= ++k) return requirement;
    return;
  }
}

var level = function()
{
  var self = this;
  self.id = "null"
  self.map;
}

var map = function()
{
  var self = this;
  self.id = "null"
  self.scenes = [];
  self.img;
}

var scene = function()
{
  var self = this;
  self.id = "null"
  //for display on the map
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.rooms = [];
}

var room = function()
{
  var self = this;
  self.id = "null"

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
  self.act = ACT_PERSON;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.anim;

  self.options = [];
  self.requirements = [];
}

var object = function()
{
  var self = this;
  self.id = "null"
  self.act = ACT_OBJECT;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.anim;

  self.views = [];
  self.requirements = [];
}

var porthole = function()
{
  var self = this;
  self.id = "null"
  self.act = ACT_PORTHOLE;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.target_room;
  self.requirements = [];
}

var wildcard = function()
{
  var self = this;
  self.id = "null"
  self.act = ACT_WILDCARD;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.requirements = [];
}

var view = function()
{
  var self = this;
  self.id = "null"
  self.anim;
  self.zones = [];
  self.requirements = [];
}

var zone = function()
{
  var self = this;
  self.id = "null"
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.requirements = [];
}

var option = function()
{
  var self = this;
  self.id = "null"
  self.requirements = [];
}

var requirement = function()
{
  var self = this;
  self.id = "null"
}

