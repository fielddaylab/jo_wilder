
var levels = [];

var tmp_level;
var tmp_map;
var tmp_scene;
var tmp_room;
var tmp_person;
var tmp_object;
var tmp_porthole;
var tmp_wildcard;
var tmp_view;
var tmp_zone;
var tmp_option;
var tmp_lock;

var init_levels = function()
{

tmp_level = new level();
tmp_level.id = l1;
{
tmp_map = new map();
tmp_map.id = map;
{
tmp_map.img = GenImg("assets/data/l1/map.png");
tmp_scene = new scene();
tmp_scene.id = capitol;
{
tmp_scene.img = GenImg("assets/data/l1/map/capitol.png");
tmp_room = new room();
tmp_room.id = entrance;
{
tmp_room.img = GenImg("assets/data/l1/map/capitol/entrance.png");
tmp_person = new person();
tmp_person.id = uncle;
{
tmp_person.img = GenImg("assets/data/l1/map/capitol/entrance/persons/uncle.png");
},
tmp_object = new object();
tmp_object.id = book;
{
},
},
tmp_room = new room();
tmp_room.id = exhibit;
{
tmp_room.img = GenImg("assets/data/l1/map/capitol/exhibit.png");
},
},
tmp_scene = new scene();
tmp_scene.id = library;
{
tmp_scene.img = GenImg("assets/data/l1/map/library.png");
},
},
},
}
