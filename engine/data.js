
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
tmp_level.primary = false;

tmp_map = new map();
tmp_map.id = "map";
tmp_map.fqid = "l1.map";
{
tmp_map.img = GenImg("assets/data/levels/l1/maps/map.png");
tmp_scene = new scene();
tmp_scene.id = "archives";
tmp_scene.fqid = "l1.map.archives";
{
tmp_scene.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives.png");
tmp_scene.primary = false;
tmp_scene.x = 100;
tmp_scene.y = 100;
tmp_scene.w = 100;
tmp_scene.h = 100;
tmp_

tmp_room = new room();
tmp_room.id = "main";
tmp_room.fqid = "l1.map.archives.main";
{
tmp_room.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main.png");
tmp_room.primary = false;
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;

tmp_person = new person();
tmp_person.id = "archivist";
tmp_person.fqid = "l1.map.archives.main.archivist";
{
tmp_person.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist.png");
tmp_person.x = 70;
tmp_person.y = canv.height/2-100;
tmp_person.w = 100;
tmp_person.h = 120;

tmp_option = new option();
tmp_option.id = "dryclean";
tmp_option.fqid = "l1.map.archives.main.archivist.dryclean";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/options/dryclean.png");
tmp_option.primary = false;
tmp_option.qtext = "null";
tmp_option.atext = "null";
tmp_option.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER

}
tmp_person.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "hello";
tmp_option.fqid = "l1.map.archives.main.archivist.hello";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/options/hello.png");
tmp_option.primary = false;
tmp_option.qtext = "null";
tmp_option.atext = "null";
tmp_option.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER

}
tmp_person.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "paper";
tmp_option.fqid = "l1.map.archives.main.archivist.paper";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/options/paper.png");
tmp_option.primary = false;
tmp_option.qtext = "null";
tmp_option.atext = "null";
tmp_option.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER

}
tmp_person.options.push(tmp_option);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "paper";
tmp_object.fqid = "l1.map.archives.main.paper";
{
tmp_object.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/objects/paper.png");
tmp_object.x = canv.width-200;
tmp_object.y = 100;
tmp_object.w = 80;
tmp_object.h = 80;

tmp_view = new view();
tmp_view.id = "pic";
tmp_view.fqid = "l1.map.archives.main.paper.pic";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/objects/paper/views/pic.png");
tmp_view.primary = false;

tmp_zone = new zone();
tmp_zone.id = "conclusion";
tmp_zone.fqid = "l1.map.archives.main.paper.pic.conclusion";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;

}
tmp_views.zone.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "rh";
tmp_view.fqid = "l1.map.archives.main.paper.rh";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/objects/paper/views/rh.png");
tmp_view.primary = false;

}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "capitol";
tmp_scene.fqid = "l1.map.capitol";
{
tmp_scene.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol.png");
tmp_scene.primary = false;
tmp_scene.x = 100;
tmp_scene.y = 100;
tmp_scene.w = 100;
tmp_scene.h = 100;

tmp_room = new room();
tmp_room.id = "exhibit";
tmp_room.fqid = "l1.map.capitol.exhibit";
{
tmp_room.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit.png");
tmp_room.primary = false;
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;

tmp_person = new person();
tmp_person.id = "uncle";
tmp_person.fqid = "l1.map.capitol.exhibit.uncle";
{
tmp_person.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle.png");
tmp_person.x = 70;
tmp_person.y = canv.height/2-100;
tmp_person.w = 100;
tmp_person.h = 120;

tmp_option = new option();
tmp_option.id = "dispute";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.dispute";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/options/dispute.png");
tmp_option.primary = false;
tmp_option.qtext = "null";
tmp_option.atext = "null";
tmp_option.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER

}
tmp_person.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "help";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.help";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/options/help.png");
tmp_option.primary = false;
tmp_option.qtext = "null";
tmp_option.atext = "null";
tmp_option.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER

}
tmp_person.options.push(tmp_option);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "tunic";
tmp_object.fqid = "l1.map.capitol.exhibit.tunic";
{
tmp_object.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/objects/tunic.png");
tmp_object.x = canv.width-200;
tmp_object.y = 100;
tmp_object.w = 80;
tmp_object.h = 80;

tmp_view = new view();
tmp_view.id = "pocket";
tmp_view.fqid = "l1.map.capitol.exhibit.tunic.pocket";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/objects/tunic/views/pocket.png");
tmp_view.primary = false;

tmp_zone = new zone();
tmp_zone.id = "slip";
tmp_zone.fqid = "l1.map.capitol.exhibit.tunic.pocket.slip";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;

}
tmp_views.zone.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "tunic";
tmp_view.fqid = "l1.map.capitol.exhibit.tunic.tunic";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/objects/tunic/views/tunic.png");
tmp_view.primary = false;

}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "drycleaner";
tmp_scene.fqid = "l1.map.drycleaner";
{
tmp_scene.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner.png");
tmp_scene.primary = false;
tmp_scene.x = 100;
tmp_scene.y = 100;
tmp_scene.w = 100;
tmp_scene.h = 100;

tmp_room = new room();
tmp_room.id = "main";
tmp_room.fqid = "l1.map.drycleaner.main";
{
tmp_room.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main.png");
tmp_room.primary = false;
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;

tmp_person = new person();
tmp_person.id = "cleaner";
tmp_person.fqid = "l1.map.drycleaner.main.cleaner";
{
tmp_person.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/persons/cleaner.png");
tmp_person.x = 70;
tmp_person.y = canv.height/2-100;
tmp_person.w = 100;
tmp_person.h = 120;

tmp_option = new option();
tmp_option.id = "hello";
tmp_option.fqid = "l1.map.drycleaner.main.cleaner.hello";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/persons/cleaner/options/hello.png");
tmp_option.primary = false;
tmp_option.qtext = "null";
tmp_option.atext = "null";
tmp_option.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER

}
tmp_person.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "log";
tmp_option.fqid = "l1.map.drycleaner.main.cleaner.log";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/persons/cleaner/options/log.png");
tmp_option.primary = false;
tmp_option.qtext = "null";
tmp_option.atext = "null";
tmp_option.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER

}
tmp_person.options.push(tmp_option);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "log";
tmp_object.fqid = "l1.map.drycleaner.main.log";
{
tmp_object.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/objects/log.png");
tmp_object.x = canv.width-200;
tmp_object.y = 100;
tmp_object.w = 80;
tmp_object.h = 80;

tmp_view = new view();
tmp_view.id = "number";
tmp_view.fqid = "l1.map.drycleaner.main.log.number";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/objects/log/views/number.png");
tmp_view.primary = false;

tmp_zone = new zone();
tmp_zone.id = "bingo";
tmp_zone.fqid = "l1.map.drycleaner.main.log.number.bingo";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;

}
tmp_views.zone.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "rh";
tmp_view.fqid = "l1.map.drycleaner.main.log.rh";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/objects/log/views/rh.png");
tmp_view.primary = false;

}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
}
tmp_level.map = tmp_map;
}
levels.push(tmp_level);
}

