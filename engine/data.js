
var levels = [];

var level;
var map;
var scene;
var room;
var person;
var object;
var porthole;
var wildcard;
var view;
var zone;
var option;
var lock;

var init_levels = function()
{

level = new level();
level.id = level;
{
map = new map();
map.id = map;
{
map.img = GenImg("assets/data//levels/level/map/map.png");
scene = new scene();
scene.id = scene;
{
scene.img = GenImg("assets/data//levels/level/map/map/scenes/scene.png");
room = new room();
room.id = room;
{
room.img = GenImg("assets/data//levels/level/map/map/scenes/scene/rooms/room.png");
person = new person();
person.id = person;
{
person.img = GenImg("assets/data//levels/level/map/map/scenes/scene/rooms/room/persons/person.png");
option = new option();
option.id = option;
{
},
},
object = new object();
object.id = object;
{
view = new view();
view.id = view;
{
view.img = GenImg("assets/data//levels/level/map/map/scenes/scene/rooms/room/objects/object/views/view.png");
},
},
},
},
},
},
}
