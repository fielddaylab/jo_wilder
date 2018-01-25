
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
var tmp_speak;
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
tmp_scene.x = 130;
tmp_scene.y = 240;
tmp_scene.w = 100;
tmp_scene.h = 100;
tmp_scene.locks = [
  "l1.map.capitol.exhibit.tunic.slip",
];
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

tmp_speak = new speak();
tmp_speak.id = "dryclean";
tmp_speak.fqid = "l1.map.archives.main.archivist.dryclean";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/dryclean.png");
tmp_speak.primary = false;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.atext = stextToLines("I don't know- I guess it looks like a dry cleaner tag?",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
  "l1.map.capitol.exhibit.tunic.slip",
];
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.archives.main.archivist.dryclean.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/dryclean/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("null",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hello";
tmp_speak.fqid = "l1.map.archives.main.archivist.hello";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/hello.png");
tmp_speak.primary = false;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.atext = stextToLines("I'm p good thanks",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line

tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.archives.main.archivist.hello.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/hello/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("null",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "l1.map.archives.main.archivist.hub";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/hub.png");
tmp_speak.primary = true;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.atext = stextToLines("Hello customer",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
];
tmp_speak.notlocks = [
];

tmp_option = new option();
tmp_option.id = "dryclean";
tmp_option.fqid = "l1.map.archives.main.archivist.hub.dryclean";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/hub/options/dryclean.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("Hey mister what's this slip?",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.archives.main.archivist.dryclean";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "hello";
tmp_option.fqid = "l1.map.archives.main.archivist.hub.hello";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/hub/options/hello.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("Hey there",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.archives.main.archivist.hello";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "paper";
tmp_option.fqid = "l1.map.archives.main.archivist.hub.paper";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/hub/options/paper.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("What do you have about this lady?",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.archives.main.archivist.paper";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.archives.main.archivist.hub.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/hub/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("Thanks",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "paper";
tmp_speak.fqid = "l1.map.archives.main.archivist.paper";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/paper.png");
tmp_speak.primary = false;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.atext = stextToLines("I've got this stack of papers about this lady!",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
  "l1.map.drycleaner.main.log.bingo",
];
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.archives.main.archivist.paper.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/persons/archivist/speaks/paper/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("null",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
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
tmp_object.locks = [
  "l1.map.archives.main.archivist.paper",
];
tmp_view = new view();
tmp_view.id = "conclusion";
tmp_view.fqid = "l1.map.archives.main.paper.conclusion";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/objects/paper/views/conclusion.png");
tmp_view.primary = false;
tmp_view.noteworthy = false;
tmp_view.locks = [
];
tmp_view.notlocks = [
];

tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.archives.main.paper.conclusion.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.archives.main.paper.pic";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "pic";
tmp_view.fqid = "l1.map.archives.main.paper.pic";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/objects/paper/views/pic.png");
tmp_view.primary = false;

tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.archives.main.paper.pic.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.archives.main.paper.rh";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "conclusion";
tmp_zone.fqid = "l1.map.archives.main.paper.pic.conclusion";
{
tmp_zone.x = canv.width/2+100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.archives.main.paper.conclusion";

}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "rh";
tmp_view.fqid = "l1.map.archives.main.paper.rh";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/archives/rooms/main/objects/paper/views/rh.png");
tmp_view.primary = false;

tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.archives.main.paper.rh.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.archives.main.paper.pic";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

}
tmp_view.zones.push(tmp_zone);
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
tmp_scene.primary = true;
tmp_scene.x = canv.width/2-75;
tmp_scene.y = canv.height/2-50;
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
tmp_person.x = 40;
tmp_person.y = canv.height/2-140;
tmp_person.w = 300;
tmp_person.h = 300;

tmp_speak = new speak();
tmp_speak.id = "dispute";
tmp_speak.fqid = "l1.map.capitol.exhibit.uncle.dispute";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/speaks/dispute.png");
tmp_speak.primary = false;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.atext = stextToLines("Wow you did it!",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
];
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.dispute.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/speaks/dispute/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("thanks",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "help";
tmp_speak.fqid = "l1.map.capitol.exhibit.uncle.help";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/speaks/help.png");
tmp_speak.primary = false;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.atext = stextToLines("You have to help me! I don't know what the heck this tunic is for!",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line

tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.help.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/speaks/help/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("thanks",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "l1.map.capitol.exhibit.uncle.hub";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/speaks/hub.png");
tmp_speak.primary = true;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30;
tmp_speak.atext = stextToLines("Hello neice",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30;
tmp_speak.locks = [
];
tmp_speak.notlocks = [
];

tmp_option = new option();
tmp_option.id = "dispute";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.hub.dispute";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/speaks/hub/options/dispute.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("I think you're wrong",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.capitol.exhibit.uncle.dispute";
tmp_option.noteworthy = false;
tmp_option.locks = [
  "l1.map.archives.main.paper.conclusion",
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "help";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.hub.help";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/speaks/hub/options/help.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("what's up",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.capitol.exhibit.uncle.help";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.hub.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/persons/uncle/speaks/hub/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("thanks",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "tunic";
tmp_object.fqid = "l1.map.capitol.exhibit.tunic";
{
tmp_object.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/objects/tunic.png");
tmp_object.x = canv.width-220;
tmp_object.y = 180;
tmp_object.w = 120;
tmp_object.h = 120;

tmp_view = new view();
tmp_view.id = "pocket";
tmp_view.fqid = "l1.map.capitol.exhibit.tunic.pocket";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/objects/tunic/views/pocket.png");
tmp_view.primary = false;

tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.capitol.exhibit.tunic.pocket.back";
{
tmp_zone.x = canv.width/2+200;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.capitol.exhibit.tunic.tunic";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "slip";
tmp_zone.fqid = "l1.map.capitol.exhibit.tunic.pocket.slip";
{
tmp_zone.x = canv.width/2-300;
tmp_zone.y = canv.width/2-300;
tmp_zone.w = 300;
tmp_zone.h = 300;
tmp_zone.target_view = "l1.map.capitol.exhibit.tunic.slip"
tmp_zone.noteworthy = false;

}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "slip";
tmp_view.fqid = "l1.map.capitol.exhibit.tunic.slip";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/objects/tunic/views/slip.png");
tmp_view.primary = false;
tmp_view.noteworthy = true;
tmp_view.locks = [
];
tmp_view.notlocks = [
];

tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.capitol.exhibit.tunic.slip.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.capitol.exhibit.tunic.pocket";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "tunic";
tmp_view.fqid = "l1.map.capitol.exhibit.tunic.tunic";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/capitol/rooms/exhibit/objects/tunic/views/tunic.png");
tmp_view.primary = true;
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.capitol.exhibit.tunic.tunic.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.capitol.exhibit.tunic.pocket";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

}
tmp_view.zones.push(tmp_zone);
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
tmp_scene.x = canv.width-400;
tmp_scene.y = canv.height-200;
tmp_scene.w = 100;
tmp_scene.h = 100;
tmp_scene.locks = [
  "l1.map.archives.main.archivist.dryclean",
];
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

tmp_speak = new speak();
tmp_speak.id = "hello";
tmp_speak.fqid = "l1.map.drycleaner.main.cleaner.hello";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/persons/cleaner/speaks/hello.png");
tmp_speak.primary = false;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.atext = stextToLines("Honestly I've been better",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line

tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.drycleaner.main.cleaner.hello.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/persons/cleaner/speaks/hello/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("null",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "l1.map.drycleaner.main.cleaner.hub";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/persons/cleaner/speaks/hub.png");
tmp_speak.primary = true;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.atext = stextToLines("Hello customer",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
];
tmp_speak.notlocks = [
];

tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.drycleaner.main.cleaner.hub.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/persons/cleaner/speaks/hub/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("null",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "log";
tmp_speak.fqid = "l1.map.drycleaner.main.cleaner.log";
{
tmp_speak.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/persons/cleaner/speaks/log.png");
tmp_speak.primary = false;
tmp_speak.x = 100;
tmp_speak.y = 100;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.atext = stextToLines("I don't really care here's a log from the past 100 years of customers knock yourself out",tmp_speak.w);
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 100;
tmp_speak.options_y = 200;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
  "l1.map.capitol.exhibit.tunic.slip",
];
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.drycleaner.main.cleaner.log.thanks";
{
tmp_option.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/persons/cleaner/speaks/log/options/thanks.png");
tmp_option.h = 30;
tmp_option.qtext = stextToLines("null",tmp_option.static ? tmp_option.w : tmp_speak.options_w);
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
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
tmp_object.locks = [
  "l1.map.drycleaner.main.cleaner.log",
];
tmp_view = new view();
tmp_view.id = "bingo";
tmp_view.fqid = "l1.map.drycleaner.main.log.bingo";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/objects/log/views/bingo.png");
tmp_view.primary = false;
tmp_view.noteworthy = false;
tmp_view.locks = [
];
tmp_view.notlocks = [
];

tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.drycleaner.main.log.bingo.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.drycleaner.main.log.number";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "number";
tmp_view.fqid = "l1.map.drycleaner.main.log.number";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/objects/log/views/number.png");
tmp_view.primary = false;

tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.drycleaner.main.log.number.back";
{
tmp_zone.x = 100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.drycleaner.main.log.rh";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "bingo";
tmp_zone.fqid = "l1.map.drycleaner.main.log.number.bingo";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.drycleaner.main.log.bingo";

}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "rh";
tmp_view.fqid = "l1.map.drycleaner.main.log.rh";
{
tmp_view.img = GenImg("assets/data/levels/l1/maps/map/scenes/drycleaner/rooms/main/objects/log/views/rh.png");
tmp_view.primary = false;

tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.drycleaner.main.log.rh.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.target_view = "l1.map.drycleaner.main.log.number";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

}
tmp_view.zones.push(tmp_zone);
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

