
var levels = [];

var tmp_animcycle;
var tmp_audio;
var tmp_entry;
var tmp_cutscene;
var tmp_level;
var tmp_map;
var tmp_scene;
var tmp_room;
var tmp_person;
var tmp_speak;
var tmp_option;
var tmp_object;
var tmp_view;
var tmp_zone;
var tmp_porthole;
var tmp_wildcard;
var tmp_inert;

var init_levels = function()
{

tmp_level = new level();
tmp_level.id = "tunic";
tmp_level.fqid = "tunic";
{
tmp_level.primary = true;
tmp_level.toolbar_animcycle_id = "toolbar";
tmp_level.icon_map_animcycle_id = "icon_map";
tmp_level.icon_notebook_animcycle_id = "icon_notebook";
tmp_level.notebook_animcycle_id = "notebook";
tmp_level.avatar_walk_animcycle_id = "avatar_walk";
tmp_level.avatar_idle_animcycle_id = "avatar_idle";
tmp_level.avatar_act_animcycle_id = "avatar_act";
tmp_level.avatar_ww = 158;
tmp_level.avatar_wh = 271;
tmp_level.person_hover_animcycle_id = "hover_person";
tmp_level.object_hover_animcycle_id = "hover_object";
tmp_level.porthole_hover_animcycle_id = "hover_porthole";
tmp_level.zone_hover_animcycle_id = "hover_zone";
tmp_level.cursor_w = 20;
tmp_level.cursor_h = 20;
tmp_level.noteworthy = false;
tmp_level.locks = [
];
tmp_level.notlocks = [
];

tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist";
tmp_animcycle.fqid = "tunic.archivist";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/archivist/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_act";
tmp_animcycle.fqid = "tunic.avatar_act";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_act/0.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_act/1.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_act/2.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_idle";
tmp_animcycle.fqid = "tunic.avatar_idle";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_idle/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_walk";
tmp_animcycle.fqid = "tunic.avatar_walk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 5;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/0.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/1.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/2.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/3.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/4.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/5.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/6.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/7.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/8.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/9.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/10.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/11.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "bg";
tmp_animcycle.fqid = "tunic.bg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/bg/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner";
tmp_animcycle.fqid = "tunic.cleaner";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/cleaner/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "door";
tmp_animcycle.fqid = "tunic.door";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/door/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "ecologist";
tmp_animcycle.fqid = "tunic.ecologist";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/ecologist/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fg";
tmp_animcycle.fqid = "tunic.fg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/fg/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "gramps";
tmp_animcycle.fqid = "tunic.gramps";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/gramps/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_map";
tmp_animcycle.fqid = "tunic.hover_map";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/hover_map/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_object";
tmp_animcycle.fqid = "tunic.hover_object";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/hover_object/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_option";
tmp_animcycle.fqid = "tunic.hover_option";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/hover_option/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_person";
tmp_animcycle.fqid = "tunic.hover_person";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/hover_person/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_porthole";
tmp_animcycle.fqid = "tunic.hover_porthole";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/hover_porthole/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_zone";
tmp_animcycle.fqid = "tunic.hover_zone";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/hover_zone/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "icon_map";
tmp_animcycle.fqid = "tunic.icon_map";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/icon_map/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "icon_notebook";
tmp_animcycle.fqid = "tunic.icon_notebook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/icon_notebook/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journalsaz";
tmp_animcycle.fqid = "tunic.journalsaz";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/journalsaz/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journalsaz_front";
tmp_animcycle.fqid = "tunic.journalsaz_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/journalsaz_front/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "librarian";
tmp_animcycle.fqid = "tunic.librarian";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/librarian/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "logbook";
tmp_animcycle.fqid = "tunic.logbook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/logbook/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "logbook_front";
tmp_animcycle.fqid = "tunic.logbook_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/logbook_front/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "map";
tmp_animcycle.fqid = "tunic.map";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/map/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "newspaper";
tmp_animcycle.fqid = "tunic.newspaper";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/newspaper/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "newspaper_front";
tmp_animcycle.fqid = "tunic.newspaper_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/newspaper_front/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook";
tmp_animcycle.fqid = "tunic.notebook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/notebook/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "null";
tmp_animcycle.fqid = "tunic.null";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/null/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "oldpictures";
tmp_animcycle.fqid = "tunic.oldpictures";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/oldpictures/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "oldpictures_front";
tmp_animcycle.fqid = "tunic.oldpictures_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/oldpictures_front/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_capitol_entry";
tmp_animcycle.fqid = "tunic.room_capitol_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_capitol_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_capitol_hall";
tmp_animcycle.fqid = "tunic.room_capitol_hall";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_capitol_hall/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_drycleaner_entry";
tmp_animcycle.fqid = "tunic.room_drycleaner_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_drycleaner_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_drycleaner_frontdesk";
tmp_animcycle.fqid = "tunic.room_drycleaner_frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_drycleaner_frontdesk/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_historicalsociety_closet/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_entry";
tmp_animcycle.fqid = "tunic.room_historicalsociety_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_historicalsociety_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_frontdesk";
tmp_animcycle.fqid = "tunic.room_historicalsociety_frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_historicalsociety_frontdesk/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_stacks";
tmp_animcycle.fqid = "tunic.room_historicalsociety_stacks";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_historicalsociety_stacks/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_humanecology_entry";
tmp_animcycle.fqid = "tunic.room_humanecology_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_humanecology_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_humanecology_frontdesk";
tmp_animcycle.fqid = "tunic.room_humanecology_frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_humanecology_frontdesk/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_humanecology_hallway";
tmp_animcycle.fqid = "tunic.room_humanecology_hallway";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_humanecology_hallway/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_kohlcenter_entry";
tmp_animcycle.fqid = "tunic.room_kohlcenter_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_kohlcenter_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_kohlcenter_halloffame";
tmp_animcycle.fqid = "tunic.room_kohlcenter_halloffame";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_kohlcenter_halloffame/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_library_entry";
tmp_animcycle.fqid = "tunic.room_library_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_library_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_library_frontdesk";
tmp_animcycle.fqid = "tunic.room_library_frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_library_frontdesk/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_library_microfiche";
tmp_animcycle.fqid = "tunic.room_library_microfiche";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_library_microfiche/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_capitol";
tmp_animcycle.fqid = "tunic.scene_capitol";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_capitol/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_drycleaner";
tmp_animcycle.fqid = "tunic.scene_drycleaner";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_drycleaner/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_historicalsociety";
tmp_animcycle.fqid = "tunic.scene_historicalsociety";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_historicalsociety/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_humanecology";
tmp_animcycle.fqid = "tunic.scene_humanecology";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_humanecology/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_kohlcenter";
tmp_animcycle.fqid = "tunic.scene_kohlcenter";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_kohlcenter/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_library";
tmp_animcycle.fqid = "tunic.scene_library";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_library/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "toolbar";
tmp_animcycle.fqid = "tunic.toolbar";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/toolbar/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic";
tmp_animcycle.fqid = "tunic.tunic";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/tunic/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_back";
tmp_animcycle.fqid = "tunic.tunic_back";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/tunic_back/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_front";
tmp_animcycle.fqid = "tunic.tunic_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/tunic_front/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_slip";
tmp_animcycle.fqid = "tunic.tunic_slip";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/tunic_slip/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "youngboy";
tmp_animcycle.fqid = "tunic.youngboy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/youngboy/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
for(var i = 0; i < tmp_level.animcycles.length; i++)
if(tmp_level.animcycles[i].id == "null") null_animcycle = tmp_level.animcycles[i];
tmp_audio = new audio();
tmp_audio.id = "door";
tmp_audio.fqid = "tunic.door";
{
tmp_audio.aud = GenAudio("assets/data/levels/tunic/audios/door.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "null";
tmp_audio.fqid = "tunic.null";
{
tmp_audio.aud = GenAudio("assets/data/levels/tunic/audios/null.mp3");
}
tmp_level.audios.push(tmp_audio);
for(var i = 0; i < tmp_level.audios.length; i++)
if(tmp_level.audios[i].id == "null") null_audio = tmp_level.audios[i];
tmp_entry = new entry();
tmp_entry.id = "null";
tmp_entry.fqid = "tunic.null";
{
tmp_entry.index = 0;
tmp_entry.wx = 0;
tmp_entry.wy = 0;
tmp_entry.ww = canv.width/2;
tmp_entry.wh = 100;
tmp_entry.animcycle_id = "null";
tmp_entry.locks = [
];
tmp_entry.notlocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
}
tmp_level.entrys.push(tmp_entry);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "null";
tmp_cutscene.fqid = "tunic.null";
{
tmp_cutscene.noteworthy = false;
tmp_cutscene.locks = [
];
tmp_cutscene.notlocks = [
];

tmp_cutscene.commands = [];

/*
Possible Commands:
COMMAND_CREATE
COMMAND_DESTROY
COMMAND_ANIMATE
COMMAND_TWEEN
COMMAND_WAIT
COMMAND_END

Possible Entity Types:
ENTITY_ANIM
ENTITY_TEXT
*/

/*
//skeleton command addition
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = COMMAND_NULL;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = ENTITY_NULL;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene_command.ww = 10;
tmp_cutscene_command.wh = 10;
tmp_cutscene_command.wx = 10;
tmp_cutscene_command.wy = 10;
tmp_cutscene_command.wz = 0;
tmp_cutscene_command.animcycle_id = "null";
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.raw_text = "null";
tmp_cutscene_command.text = stextToLines(tmp_cutscene_command.raw_text,tmp_cutscene_command.ww);
tmp_cutscene.commands.push(tmp_cutscene_command);
*/

//Leave this at the end- remember to set tmp_cutscene_command.t!
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = COMMAND_END;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

}
tmp_level.cutscenes.push(tmp_cutscene);
tmp_map = new map();
tmp_map.id = "madison";
tmp_map.fqid = "tunic.madison";
{
tmp_map.animcycle_id = "map";
tmp_map.audio_id = "null";
tmp_map.noteworthy = false;
tmp_map.locks = [
];
tmp_map.notlocks = [
];

tmp_map.animcycle_inst = gen_animcycle_inst(tmp_map.animcycle_id,tmp_level.animcycles);
tmp_scene = new scene();
tmp_scene.id = "capitol";
tmp_scene.fqid = "tunic.madison.capitol";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = -7.105427357601002e-15;
tmp_scene.wy = -10;
tmp_scene.animcycle_id = "scene_capitol";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.capitol.entry";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_capitol_entry";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:-9, wy:-179.49999999999997, ww:876, wh:275 },
];
tmp_room.lights = [
{wx:-9, wy:-179.49999999999997, ww:876, wh:275 },
];
tmp_room.shadows = [
{wx:-9, wy:-179.49999999999997, ww:876, wh:275 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = -330;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tohall";
tmp_porthole.fqid = "tunic.madison.capitol.entry.tohall";
{
tmp_porthole.ww = 264;
tmp_porthole.wh = 229;
tmp_porthole.wx = 20.999999999999986;
tmp_porthole.wy = 78.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "hall";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.capitol.entry.tomap";
{
tmp_porthole.ww = 760;
tmp_porthole.wh = 98.00000000000001;
tmp_porthole.wx = 56;
tmp_porthole.wy = -287;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "hall";
tmp_room.fqid = "tunic.madison.capitol.hall";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_capitol_hall";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:20.5, wy:-150.5, ww:831, wh:351 },
];
tmp_room.lights = [
{wx:20.5, wy:-150.5, ww:831, wh:351 },
];
tmp_room.shadows = [
{wx:20.5, wy:-150.5, ww:831, wh:351 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = 0;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "youngboy";
tmp_person.fqid = "tunic.madison.capitol.hall.youngboy";
{
tmp_person.ww = 128;
tmp_person.wh = 224;
tmp_person.wx = -104.99999999999997;
tmp_person.wy = 41;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = true;
tmp_person.animcycle_id = "youngboy";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.capitol.hall.youngboy.hub";
{
tmp_speak.primary = false;
tmp_speak.ww = 440;
tmp_speak.wh = 30;
tmp_speak.wx = 280.00000000000006;
tmp_speak.wy = 165;
tmp_speak.animcycle_id = "youngboy";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Get away from me, I have a speech to give...";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 440;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 280.00000000000006;
tmp_speak.options_wy = 95;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.capitol.hall.youngboy.hub.goodbye";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.capitol.hall.toentry";
{
tmp_porthole.ww = 739;
tmp_porthole.wh = 65;
tmp_porthole.wx = 54.50000000000006;
tmp_porthole.wy = -293.50000000000006;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "drycleaner";
tmp_scene.fqid = "tunic.madison.drycleaner";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = 211.00000000000003;
tmp_scene.wy = -123.99999999999996;
tmp_scene.animcycle_id = "scene_drycleaner";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
"tunic.madison.humanecology.frontdesk.worker.slip",
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.drycleaner.entry";
{
tmp_room.primary = true;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_drycleaner_entry";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:-12.000000000000057, wy:-246, ww:866, wh:173.99999999999997 },
];
tmp_room.lights = [
{wx:-12.000000000000057, wy:-246, ww:866, wh:173.99999999999997 },
];
tmp_room.shadows = [
{wx:-12.000000000000057, wy:-246, ww:866, wh:173.99999999999997 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = -330;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.drycleaner.entry.tofrontdesk";
{
tmp_porthole.ww = 138;
tmp_porthole.wh = 194;
tmp_porthole.wx = 18.999999999999993;
tmp_porthole.wy = -65.00000000000001;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.drycleaner.entry.tomap";
{
tmp_porthole.ww = 715;
tmp_porthole.wh = 91;
tmp_porthole.wx = 49.5;
tmp_porthole.wy = -296.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.madison.drycleaner.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_drycleaner_frontdesk";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:-2, wy:-197.99999999999997, ww:868, wh:244 },
];
tmp_room.lights = [
{wx:-2, wy:-197.99999999999997, ww:868, wh:244 },
];
tmp_room.shadows = [
{wx:-2, wy:-197.99999999999997, ww:868, wh:244 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = -330;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.madison.drycleaner.frontdesk.worker";
{
tmp_person.ww = 150;
tmp_person.wh = 187;
tmp_person.wx = -305;
tmp_person.wy = 94.5;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = true;
tmp_person.animcycle_id = "cleaner";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.drycleaner.frontdesk.worker.hub";
{
tmp_speak.primary = true;
tmp_speak.ww = 440;
tmp_speak.wh = 30;
tmp_speak.wx = 280.00000000000006;
tmp_speak.wy = 165;
tmp_speak.animcycle_id = "cleaner";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How can I help you?";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 440;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 280.00000000000006;
tmp_speak.options_wy = 95;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.drycleaner.frontdesk.worker.hub.goodbye";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.madison.drycleaner.frontdesk.worker.hub.inquire_slip";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 0;
tmp_option.raw_qtext = "Hey, what do you know about this slip?";
tmp_option.target_speak = "slip";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip";
tmp_speak.fqid = "tunic.madison.drycleaner.frontdesk.worker.slip";
{
tmp_speak.primary = false;
tmp_speak.ww = 440;
tmp_speak.wh = 30;
tmp_speak.wx = 280.00000000000006;
tmp_speak.wy = 165;
tmp_speak.animcycle_id = "cleaner";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Wow, that looks old. Here, check the logbook over on the desk.";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 440;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 280.00000000000006;
tmp_speak.options_wy = 95;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.madison.drycleaner.frontdesk.worker.slip.return";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Ok, thanks!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "logbook";
tmp_object.fqid = "tunic.madison.drycleaner.frontdesk.logbook";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 212.99999999999997;
tmp_object.wy = 4.999999999999986;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.animcycle_id = "logbook";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
"tunic.madison.drycleaner.frontdesk.worker.slip",
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.drycleaner.frontdesk.logbook.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "logbook_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.drycleaner.frontdesk.toentry";
{
tmp_porthole.ww = 771;
tmp_porthole.wh = 88;
tmp_porthole.wx = 52.5;
tmp_porthole.wy = -281;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "historicalsociety";
tmp_scene.fqid = "tunic.madison.historicalsociety";
{
tmp_scene.primary = true;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = -126.99999999999997;
tmp_scene.wy = -62;
tmp_scene.animcycle_id = "scene_historicalsociety";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "closet";
tmp_room.fqid = "tunic.madison.historicalsociety.closet";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_closet";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:-3.5, wy:-174.50000000000003, ww:867, wh:293 },
];
tmp_room.lights = [
{wx:-315.5, wy:-82.5, ww:359, wh:466.99999999999994 },
];
tmp_room.shadows = [
{wx:138.00000000000003, wy:-16, ww:588, wh:594 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = 0;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.madison.historicalsociety.closet.gramps";
{
tmp_person.ww = 205;
tmp_person.wh = 332;
tmp_person.wx = -323.5;
tmp_person.wy = -7;
tmp_person.wz = 0;
tmp_person.act_wx = 150;
tmp_person.act_wy = 41;
tmp_person.act_anim = true;
tmp_person.animcycle_id = "gramps";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "help";
tmp_speak.fqid = "tunic.madison.historicalsociety.closet.gramps.help";
{
tmp_speak.primary = false;
tmp_speak.ww = 317;
tmp_speak.wh = 30;
tmp_speak.wx = -84.5;
tmp_speak.wy = 235;
tmp_speak.animcycle_id = "gramps";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I've got work to do- but youngboy is going to tell everyone that this is a basketball jersey! I just know he's wrong... If only I could prove it...";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 212;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 25;
tmp_speak.options_wy = 84;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.madison.historicalsociety.closet.gramps.help.return";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "I'll see what I can do...";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.historicalsociety.closet.gramps.hub";
{
tmp_speak.primary = true;
tmp_speak.ww = 197;
tmp_speak.wh = 30;
tmp_speak.wx = -142.5;
tmp_speak.wy = 156;
tmp_speak.animcycle_id = "gramps";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hey there youngster...";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 261;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 60.500000000000014;
tmp_speak.options_wy = 92.99999999999999;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.historicalsociety.closet.gramps.hub.goodbye";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_problem";
tmp_option.fqid = "tunic.madison.historicalsociety.closet.gramps.hub.inquire_problem";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 0;
tmp_option.raw_qtext = "What's the matter gramps?";
tmp_option.target_speak = "help";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "tunic";
tmp_object.fqid = "tunic.madison.historicalsociety.closet.tunic";
{
tmp_object.ww = 109;
tmp_object.wh = 130;
tmp_object.wx = 279.50000000000006;
tmp_object.wy = 85;
tmp_object.wz = 0;
tmp_object.act_wx = -85;
tmp_object.act_wy = 120;
tmp_object.act_anim = true;
tmp_object.animcycle_id = "tunic";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.historicalsociety.closet.tunic.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "tunic_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "slip";
tmp_zone.fqid = "tunic.madison.historicalsociety.closet.tunic.hub.slip";
{
tmp_zone.ww = 100;
tmp_zone.wh = 100;
tmp_zone.wx = -50.000000000000014;
tmp_zone.wy = -59.99999999999999;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "slip";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "slip";
tmp_view.fqid = "tunic.madison.historicalsociety.closet.tunic.slip";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "tunic_slip";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "return";
tmp_zone.fqid = "tunic.madison.historicalsociety.closet.tunic.slip.return";
{
tmp_zone.ww = 100;
tmp_zone.wh = 100;
tmp_zone.wx = -50.000000000000014;
tmp_zone.wy = -59.99999999999999;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "hub";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.historicalsociety.closet.toentry";
{
tmp_porthole.ww = 104;
tmp_porthole.wh = 407;
tmp_porthole.wx = 423.00000000000006;
tmp_porthole.wy = -126.50000000000001;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = -35;
tmp_porthole.act_wy = 35;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "bg";
tmp_inert.fqid = "tunic.madison.historicalsociety.closet.bg";
{
tmp_inert.ww = 880;
tmp_inert.wh = 660;
tmp_inert.wx = 0;
tmp_inert.wy = 0;
tmp_inert.wz = 0;
tmp_inert.g = -1;
tmp_inert.animcycle_id = "bg";
tmp_inert.noteworthy = false;
tmp_inert.locks = [
];
tmp_inert.notlocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fg";
tmp_inert.fqid = "tunic.madison.historicalsociety.closet.fg";
{
tmp_inert.ww = 880;
tmp_inert.wh = 660;
tmp_inert.wx = 0;
tmp_inert.wy = 0;
tmp_inert.wz = 0;
tmp_inert.g = 1;
tmp_inert.animcycle_id = "fg";
tmp_inert.noteworthy = false;
tmp_inert.locks = [
];
tmp_inert.notlocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.historicalsociety.entry";
{
tmp_room.primary = true;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_entry";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:5, wy:-163.5, ww:876, wh:323 },
];
tmp_room.lights = [
{wx:-278.99999999999994, wy:-130.5, ww:324, wh:383 },
];
tmp_room.shadows = [
{wx:290.5, wy:-151.5, ww:275, wh:341.00000000000006 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = -330;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset";
tmp_porthole.fqid = "tunic.madison.historicalsociety.entry.tocloset";
{
tmp_porthole.ww = 99;
tmp_porthole.wh = 409.00000000000006;
tmp_porthole.wx = -400.5;
tmp_porthole.wy = -128.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 17;
tmp_porthole.act_wy = 20;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "closet";
tmp_porthole.target_start_wx = 440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.historicalsociety.entry.tomap";
{
tmp_porthole.ww = 885;
tmp_porthole.wh = 86.99999999999999;
tmp_porthole.wx = 23.5;
tmp_porthole.wy = -296.49999999999994;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "map";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tostacks";
tmp_porthole.fqid = "tunic.madison.historicalsociety.entry.tostacks";
{
tmp_porthole.ww = 92;
tmp_porthole.wh = 167.99999999999997;
tmp_porthole.wx = -20.000000000000014;
tmp_porthole.wy = 88.00000000000001;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 32;
tmp_porthole.act_wy = 24;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fg";
tmp_inert.fqid = "tunic.madison.historicalsociety.entry.fg";
{
tmp_inert.ww = 880;
tmp_inert.wh = 660;
tmp_inert.wx = 0;
tmp_inert.wy = 0;
tmp_inert.wz = 0;
tmp_inert.g = 1;
tmp_inert.animcycle_id = "fg";
tmp_inert.noteworthy = false;
tmp_inert.locks = [
];
tmp_inert.notlocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.madison.historicalsociety.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_frontdesk";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:1, wy:-163.5, ww:868, wh:327 },
];
tmp_room.lights = [
{wx:1, wy:-163.5, ww:868, wh:327 },
];
tmp_room.shadows = [
{wx:1, wy:-163.5, ww:868, wh:327 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = 0;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "archivist";
tmp_person.fqid = "tunic.madison.historicalsociety.frontdesk.archivist";
{
tmp_person.ww = 141;
tmp_person.wh = 293;
tmp_person.wx = -265.5;
tmp_person.wy = 59.5;
tmp_person.wz = 0;
tmp_person.act_wx = 90;
tmp_person.act_wy = 72;
tmp_person.act_anim = true;
tmp_person.animcycle_id = "archivist";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.hub";
{
tmp_speak.primary = true;
tmp_speak.ww = 200;
tmp_speak.wh = 30;
tmp_speak.wx = -36;
tmp_speak.wy = 191;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How can I help you?";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 375;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 90.5;
tmp_speak.options_wy = 122;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.hub.goodbye";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_log";
tmp_option.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.hub.inquire_log";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 0;
tmp_option.raw_qtext = "What can you tell me about this log?";
tmp_option.target_speak = "log";
tmp_option.noteworthy = false;
tmp_option.locks = [
"tunic.madison.drycleaner.frontdesk.logbook.hub",
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_newspaper";
tmp_option.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.hub.inquire_newspaper";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 0;
tmp_option.raw_qtext = "I found a newspaper!";
tmp_option.target_speak = "newspaper";
tmp_option.noteworthy = false;
tmp_option.locks = [
"tunic.madison.library.microfiche.newspaper.hub",
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.hub.inquire_slip";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 0;
tmp_option.raw_qtext = "Do you know what this piece of paper is?";
tmp_option.target_speak = "slip";
tmp_option.noteworthy = false;
tmp_option.locks = [
"tunic.madison.historicalsociety.closet.tunic.slip",
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "log";
tmp_speak.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.log";
{
tmp_speak.primary = false;
tmp_speak.ww = 285;
tmp_speak.wh = 30;
tmp_speak.wx = -14.5;
tmp_speak.wy = 195;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I'll get started on looking; but in the meanwhile, you might also want to check out the library!";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 97;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = -45.5;
tmp_speak.options_wy = 95;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.log.return";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Ok I will!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "newspaper";
tmp_speak.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.newspaper";
{
tmp_speak.primary = false;
tmp_speak.ww = 359;
tmp_speak.wh = 30;
tmp_speak.wx = 15.500000000000028;
tmp_speak.wy = 203;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "That's great! Also, you should check the archives- I think we have something. It's #12345";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 161;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = -9.500000000000014;
tmp_speak.options_wy = 96.00000000000001;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.newspaper.return";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Thanks a bunch!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip";
tmp_speak.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.slip";
{
tmp_speak.primary = false;
tmp_speak.ww = 312;
tmp_speak.wh = 30;
tmp_speak.wx = 4;
tmp_speak.wy = 186;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I have no idea what that is- you might want to ask a specialist over in the Human Ecology building.";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 203;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = -12.499999999999972;
tmp_speak.options_wy = 86.00000000000001;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.slip.return";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Thanks for your help!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "tostacks";
tmp_porthole.fqid = "tunic.madison.historicalsociety.frontdesk.tostacks";
{
tmp_porthole.ww = 767;
tmp_porthole.wh = 86.99999999999999;
tmp_porthole.wx = 46.5;
tmp_porthole.wy = -299.50000000000006;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "stacks";
tmp_room.fqid = "tunic.madison.historicalsociety.stacks";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_stacks";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:-25, wy:-139, ww:390, wh:406 },
];
tmp_room.lights = [
{wx:-25, wy:-139, ww:390, wh:406 },
];
tmp_room.shadows = [
{wx:-25, wy:-139, ww:390, wh:406 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = 0;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "journalsaz";
tmp_object.fqid = "tunic.madison.historicalsociety.stacks.journalsaz";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 325.99999999999994;
tmp_object.wy = -81.00000000000001;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.animcycle_id = "journalsaz";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
"tunic.madison.historicalsociety.frontdesk.archivist.newspaper",
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.historicalsociety.stacks.journalsaz.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "journalsaz_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.historicalsociety.stacks.toentry";
{
tmp_porthole.ww = 768;
tmp_porthole.wh = 83;
tmp_porthole.wx = 23;
tmp_porthole.wy = -310.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.historicalsociety.stacks.tofrontdesk";
{
tmp_porthole.ww = 85;
tmp_porthole.wh = 134;
tmp_porthole.wx = -48.499999999999986;
tmp_porthole.wy = 89.00000000000003;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "humanecology";
tmp_scene.fqid = "tunic.madison.humanecology";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = 4.999999999999993;
tmp_scene.wy = 170.00000000000003;
tmp_scene.animcycle_id = "scene_humanecology";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
"tunic.madison.historicalsociety.frontdesk.archivist.slip",
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.humanecology.entry";
{
tmp_room.primary = true;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_humanecology_entry";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:1, wy:-258, ww:870, wh:142 },
];
tmp_room.lights = [
{wx:1, wy:-258, ww:870, wh:142 },
];
tmp_room.shadows = [
{wx:1, wy:-258, ww:870, wh:142 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = -330;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tohallway";
tmp_porthole.fqid = "tunic.madison.humanecology.entry.tohallway";
{
tmp_porthole.ww = 114;
tmp_porthole.wh = 175;
tmp_porthole.wx = 0.9999999999999787;
tmp_porthole.wy = -95.49999999999997;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "hallway";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.humanecology.entry.tomap";
{
tmp_porthole.ww = 862;
tmp_porthole.wh = 60;
tmp_porthole.wx = 6;
tmp_porthole.wy = -302;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.madison.humanecology.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_humanecology_frontdesk";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:-3.5, wy:-200.49999999999997, ww:873, wh:253.00000000000003 },
];
tmp_room.lights = [
{wx:-3.5, wy:-200.49999999999997, ww:873, wh:253.00000000000003 },
];
tmp_room.shadows = [
{wx:-3.5, wy:-200.49999999999997, ww:873, wh:253.00000000000003 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = 0;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.madison.humanecology.frontdesk.worker";
{
tmp_person.ww = 170;
tmp_person.wh = 310;
tmp_person.wx = 156;
tmp_person.wy = 55;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = true;
tmp_person.animcycle_id = "ecologist";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.humanecology.frontdesk.worker.hub";
{
tmp_speak.primary = true;
tmp_speak.ww = 440;
tmp_speak.wh = 30;
tmp_speak.wx = 280.00000000000006;
tmp_speak.wy = 165;
tmp_speak.animcycle_id = "ecologist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How can I help you?";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 440;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 280.00000000000006;
tmp_speak.options_wy = 95;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.humanecology.frontdesk.worker.hub.goodbye";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.madison.humanecology.frontdesk.worker.hub.inquire_slip";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 0;
tmp_option.raw_qtext = "I was told you might know something about this slip...";
tmp_option.target_speak = "slip";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip";
tmp_speak.fqid = "tunic.madison.humanecology.frontdesk.worker.slip";
{
tmp_speak.primary = false;
tmp_speak.ww = 440;
tmp_speak.wh = 30;
tmp_speak.wx = 280.00000000000006;
tmp_speak.wy = 165;
tmp_speak.animcycle_id = "ecologist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hey! That looks like a drycleaner's tag- and an old one at that! They haven't used these printing methods since the early 40s? Not sure what more I can tell you...";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 440;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 280.00000000000006;
tmp_speak.options_wy = 95;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.madison.humanecology.frontdesk.worker.slip.return";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "That's a start!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "tohallway";
tmp_porthole.fqid = "tunic.madison.humanecology.frontdesk.tohallway";
{
tmp_porthole.ww = 91;
tmp_porthole.wh = 287;
tmp_porthole.wx = -394.5;
tmp_porthole.wy = -93.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "hallway";
tmp_porthole.target_start_wx = 440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "hallway";
tmp_room.fqid = "tunic.madison.humanecology.hallway";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_humanecology_hallway";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:50, wy:-154, ww:780, wh:308 },
];
tmp_room.lights = [
{wx:50, wy:-154, ww:780, wh:308 },
];
tmp_room.shadows = [
{wx:50, wy:-154, ww:780, wh:308 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = 0;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.humanecology.hallway.toentry";
{
tmp_porthole.ww = 794;
tmp_porthole.wh = 80;
tmp_porthole.wx = 41;
tmp_porthole.wy = -283;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.humanecology.hallway.tofrontdesk";
{
tmp_porthole.ww = 77;
tmp_porthole.wh = 395;
tmp_porthole.wx = 395.49999999999994;
tmp_porthole.wy = -128.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "kohlcenter";
tmp_scene.fqid = "tunic.madison.kohlcenter";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = -89;
tmp_scene.wy = -232;
tmp_scene.animcycle_id = "scene_kohlcenter";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.kohlcenter.entry";
{
tmp_room.primary = true;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_kohlcenter_entry";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:-10.5, wy:-250.5, ww:793, wh:147 },
];
tmp_room.lights = [
{wx:-10.5, wy:-250.5, ww:793, wh:147 },
];
tmp_room.shadows = [
{wx:-10.5, wy:-250.5, ww:793, wh:147 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = -330;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tohalloffame";
tmp_porthole.fqid = "tunic.madison.kohlcenter.entry.tohalloffame";
{
tmp_porthole.ww = 244;
tmp_porthole.wh = 179.00000000000003;
tmp_porthole.wx = -7.999999999999972;
tmp_porthole.wy = -70.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "halloffame";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.kohlcenter.entry.tomap";
{
tmp_porthole.ww = 689;
tmp_porthole.wh = 57;
tmp_porthole.wx = 47.5;
tmp_porthole.wy = -298.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "halloffame";
tmp_room.fqid = "tunic.madison.kohlcenter.halloffame";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_kohlcenter_halloffame";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:0, wy:-235.49999999999997, ww:866, wh:169 },
];
tmp_room.lights = [
{wx:0, wy:-235.49999999999997, ww:866, wh:169 },
];
tmp_room.shadows = [
{wx:0, wy:-235.49999999999997, ww:866, wh:169 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = 0;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "oldpictures";
tmp_object.fqid = "tunic.madison.kohlcenter.halloffame.oldpictures";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 105.99999999999997;
tmp_object.wy = 55.000000000000014;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.animcycle_id = "oldpictures";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.kohlcenter.halloffame.oldpictures.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "oldpictures_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.kohlcenter.halloffame.toentry";
{
tmp_porthole.ww = 764;
tmp_porthole.wh = 78;
tmp_porthole.wx = 45;
tmp_porthole.wy = -281;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "library";
tmp_scene.fqid = "tunic.madison.library";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = 238.99999999999997;
tmp_scene.wy = 55.000000000000014;
tmp_scene.animcycle_id = "scene_library";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
"tunic.madison.historicalsociety.frontdesk.archivist.log",
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.library.entry";
{
tmp_room.primary = true;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_library_entry";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:4.5, wy:-206, ww:855, wh:236.00000000000003 },
];
tmp_room.lights = [
{wx:4.5, wy:-206, ww:855, wh:236.00000000000003 },
];
tmp_room.shadows = [
{wx:4.5, wy:-206, ww:855, wh:236.00000000000003 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = -330;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.library.entry.tofrontdesk";
{
tmp_porthole.ww = 271;
tmp_porthole.wh = 173.99999999999997;
tmp_porthole.wx = 29.49999999999997;
tmp_porthole.wy = -15.999999999999972;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.library.entry.tomap";
{
tmp_porthole.ww = 738;
tmp_porthole.wh = 73;
tmp_porthole.wx = 50;
tmp_porthole.wy = -293.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.madison.library.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_library_frontdesk";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:5, wy:-195, ww:844, wh:250 },
];
tmp_room.lights = [
{wx:226.5, wy:-156.5, ww:645, wh:359 },
];
tmp_room.shadows = [
{wx:-321, wy:-28.5, ww:488, wh:585 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = 0;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.madison.library.frontdesk.worker";
{
tmp_person.ww = 117.00000000000001;
tmp_person.wh = 216;
tmp_person.wx = 138.50000000000003;
tmp_person.wy = -29;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = true;
tmp_person.animcycle_id = "librarian";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.library.frontdesk.worker.hub";
{
tmp_speak.primary = true;
tmp_speak.ww = 440;
tmp_speak.wh = 30;
tmp_speak.wx = 280.00000000000006;
tmp_speak.wy = 165;
tmp_speak.animcycle_id = "librarian";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How can I help you?";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 440;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 280.00000000000006;
tmp_speak.options_wy = 95;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.library.frontdesk.worker.hub.goodbye";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_log";
tmp_option.fqid = "tunic.madison.library.frontdesk.worker.hub.inquire_log";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 0;
tmp_option.raw_qtext = "What can you tell me about [historical lady's name]?";
tmp_option.target_speak = "log";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "log";
tmp_speak.fqid = "tunic.madison.library.frontdesk.worker.log";
{
tmp_speak.primary = false;
tmp_speak.ww = 440;
tmp_speak.wh = 30;
tmp_speak.wx = 280.00000000000006;
tmp_speak.wy = 165;
tmp_speak.animcycle_id = "librarian";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I don't know off the top of my head, but you're more than welcome to the microfiche in back; we've got tons of old papers!";
tmp_speak.speaker = 2;
tmp_speak.options_ww = 440;
tmp_speak.options_wh = 30;
tmp_speak.options_wx = 280.00000000000006;
tmp_speak.options_wy = 95;
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.ww);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.madison.library.frontdesk.worker.log.return";
{
tmp_option.ww = 440;
tmp_option.wh = 30;
tmp_option.wx = -120;
tmp_option.wy = 215.00000000000003;
tmp_option.static = false;
tmp_option.index = 999;
tmp_option.raw_qtext = "Alright, thanks!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.ww : tmp_speak.options_ww);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.library.frontdesk.toentry";
{
tmp_porthole.ww = 751;
tmp_porthole.wh = 73;
tmp_porthole.wx = 51.5;
tmp_porthole.wy = -291.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomicrofiche";
tmp_porthole.fqid = "tunic.madison.library.frontdesk.tomicrofiche";
{
tmp_porthole.ww = 148;
tmp_porthole.wh = 235;
tmp_porthole.wx = -178.99999999999997;
tmp_porthole.wy = 73.50000000000003;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "microfiche";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
"tunic.madison.library.frontdesk.worker.log",
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "microfiche";
tmp_room.fqid = "tunic.madison.library.microfiche";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_library_microfiche";
tmp_room.audio_id = "null";
tmp_room.navs = [
{wx:11, wy:-194.49999999999997, ww:744, wh:261 },
];
tmp_room.lights = [
{wx:11, wy:-194.49999999999997, ww:744, wh:261 },
];
tmp_room.shadows = [
{wx:11, wy:-194.49999999999997, ww:744, wh:261 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.start_wx = 0;
tmp_room.start_wy = 0;
tmp_room.noteworthy = false;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "newspaper";
tmp_object.fqid = "tunic.madison.library.microfiche.newspaper";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 172.00000000000003;
tmp_object.wy = 11.999999999999993;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.animcycle_id = "newspaper";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.library.microfiche.newspaper.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "newspaper_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.library.microfiche.tofrontdesk";
{
tmp_porthole.ww = 755;
tmp_porthole.wh = 86;
tmp_porthole.wx = 10.5;
tmp_porthole.wy = -282;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.animcycle_id = "door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];
tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
}
tmp_level.map = tmp_map;
}
levels.push(tmp_level);

  //precompile in any .find's
  for(var i = 0; i < levels.length; i++)
  {
    tmp_level = levels[i];
    tmp_map = tmp_level.map;
    for(var j = 0; j < tmp_map.scenes.length; j++)
    {
      tmp_scene = tmp_map.scenes[j];
      for(var k = 0; k < tmp_scene.rooms.length; k++)
      {
        tmp_room = tmp_scene.rooms[k];
        for(var l = 0; l < tmp_room.portholes.length; l++)
        {
          tmp_porthole = tmp_room.portholes[l];
          var id = tmp_scene.fqid+"."+tmp_porthole.target_room;
          tmp_porthole.target_room_found = find(id);
        }
      }
    }
  }
}

