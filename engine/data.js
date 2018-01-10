
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
tmp_level.id = "l1";
tmp_level.fqid = "l1";
{
tmp_map = new map();
tmp_map.id = "map";
tmp_map.fqid = "l1.map";
{
tmp_map.img = GenImg("assets/data//levels/l1/maps/map.png");
tmp_scene = new scene();
tmp_scene.id = "capitol";
tmp_scene.fqid = "l1.map.capitol";
{
tmp_scene.img = GenImg("assets/data//levels/l1/maps/map/scenes/capitol.png");
scene.x = 100;
scene.y = 100;
scene.w = 100;
scene.h = 100;
tmp_room = new room();
tmp_room.id = "entrance";
tmp_room.fqid = "l1.map.capitol.entrance";
{
tmp_room.img = GenImg("assets/data//levels/l1/maps/map/scenes/capitol/rooms/entrance.png");
room.nav_x = 100;
room.nav_y = canv.height/2;
room.nav_w = canv.width-200;
room.nav_h = canv.height/2-100;
room.start_x = canv.width/2;
room.start_y = canv.height/2;
tmp_person = new person();
tmp_person.id = "uncle";
tmp_person.id = "l1.map.capitol.entrance.uncle";
{
tmp_person.img = GenImg("assets/data//levels/l1/maps/map/scenes/capitol/rooms/entrance/persons/uncle.png");
person.x = 70;
person.y = canv.height/2-100;
person.w = 100;
person.h = 120;
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "book";
tmp_object.fqid = "l1.map.capitol.entrance.book";
{
object.x = canv.width-200;
object.y = 100;
object.w = 80;
object.h = 80;
tmp_view = new view();
tmp_view.id = "front";
tmp_view.fqid = "l1.map.capitol.entrance.book.front";
{
tmp_view.img = GenImg("assets/data//levels/l1/maps/map/scenes/capitol/rooms/entrance/objects/book/views/front.png");
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "door";
tmp_porthole.fqid = "l1.map.capitol.entrance.door";
{
porthole.x = canv.width/2-50;
porthole.y = canv.height/2-50;
porthole.w = 100;
porthole.h = 100;
porthole.target_room = "null"
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "library";
tmp_scene.fqid = "l1.map.library";
{
tmp_scene.img = GenImg("assets/data//levels/l1/maps/map/scenes/library.png");
scene.x = 100;
scene.y = 100;
scene.w = 100;
scene.h = 100;
tmp_room = new room();
tmp_room.id = "entrance";
tmp_room.fqid = "l1.map.library.entrance";
{
tmp_room.img = GenImg("assets/data//levels/l1/maps/map/scenes/library/rooms/entrance.png");
room.nav_x = 100;
room.nav_y = canv.height/2;
room.nav_w = canv.width-200;
room.nav_h = canv.height/2-100;
room.start_x = canv.width/2;
room.start_y = canv.height/2;
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
}
tmp_level.map = tmp_map;
}
levels.push(tmp_level);
}

