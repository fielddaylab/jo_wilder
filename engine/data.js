
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
level.id = l1;
{
map = new map();
map.id = map;
{
map.img = GenImg("assets/data//levels/l1/map/map.png");
scene = new scene();
scene.id = capitol;
{
scene.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol.png");
room = new room();
room.id = entrance;
{
room.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/entrance.png");
person = new person();
person.id = uncle;
{
person.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/entrance/persons/uncle.png");
option = new option();
option.id = option;
{
},
},
object = new object();
object.id = book;
{
view = new view();
view.id = front;
{
view.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/entrance/objects/book/views/front.png");
zone = new zone();
zone.id = zone;
{
},
},
view = new view();
view.id = open;
{
view.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/entrance/objects/book/views/open.png");
zone = new zone();
zone.id = zone;
{
},
},
},
porthole = new porthole();
porthole.id = porthole;
{
},
wildcard = new wildcard();
wildcard.id = wildcard;
{
},
},
room = new room();
room.id = exhibit;
{
room.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/exhibit.png");
person = new person();
person.id = person;
{
person.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/exhibit/persons/person.png");
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
view.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/exhibit/objects/object/views/view.png");
zone = new zone();
zone.id = zone;
{
},
},
},
porthole = new porthole();
porthole.id = porthole;
{
},
wildcard = new wildcard();
wildcard.id = wildcard;
{
},
},
},
scene = new scene();
scene.id = library;
{
scene.img = GenImg("assets/data//levels/l1/map/map/scenes/library.png");
room = new room();
room.id = room;
{
room.img = GenImg("assets/data//levels/l1/map/map/scenes/library/rooms/room.png");
person = new person();
person.id = person;
{
person.img = GenImg("assets/data//levels/l1/map/map/scenes/library/rooms/room/persons/person.png");
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
view.img = GenImg("assets/data//levels/l1/map/map/scenes/library/rooms/room/objects/object/views/view.png");
zone = new zone();
zone.id = zone;
{
},
},
},
porthole = new porthole();
porthole.id = porthole;
{
},
wildcard = new wildcard();
wildcard.id = wildcard;
{
},
},
},
},
},
}
