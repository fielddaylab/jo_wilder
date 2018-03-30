
var levels = [];

var tmp_animcycle;
var tmp_audio;
var tmp_entry;
var tmp_level;
var tmp_scene;
var tmp_room;
var tmp_cutscene;
var tmp_person;
var tmp_speak;
var tmp_option;
var tmp_object;
var tmp_observation;
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
tmp_level.intro_room_id = "tunic.historicalsociety.closet";
tmp_level.avatar_walk_animcycle_id = "avatar_walk";
tmp_level.avatar_idle_animcycle_id = "avatar_idle";
tmp_level.avatar_act_animcycle_id = "avatar_act";
tmp_level.avatar_ww = 140.2914274419754;
tmp_level.avatar_wh = 254.18935293838607;
tmp_level.map_animcycle_id = "map";
tmp_level.map_audio_id = "null";
tmp_level.notebook_animcycle_id = "notebook";
tmp_level.notebook_audio_id = "null";
tmp_level.toolbar_animcycle_id = "toolbar";
tmp_level.toolbar_audio_id = "null";
tmp_level.icon_map_animcycle_id = "icon_map";
tmp_level.icon_notebook_animcycle_id = "icon_notebook";
tmp_level.person_hover_animcycle_id = "hover_person";
tmp_level.object_hover_animcycle_id = "hover_object";
tmp_level.observation_hover_animcycle_id = "hover_observation";
tmp_level.porthole_hover_animcycle_id = "hover_porthole";
tmp_level.zone_hover_animcycle_id = "hover_zone";
tmp_level.option_hover_animcycle_id = "hover_option";
tmp_level.map_hover_animcycle_id = "hover_map";
tmp_level.ripple_click_animcycle_id = "click_ripple";
tmp_level.cursor_w = 40;
tmp_level.cursor_h = 40;
tmp_level.hover_w = 40;
tmp_level.hover_h = 40;
tmp_level.target_lerp_s = 0.03;
tmp_level.noteworthy = false;
tmp_level.unlocks = [
];
tmp_level.relocks = [
];

tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist";
tmp_animcycle.fqid = "tunic.archivist";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_act/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_idle/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/8.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/9.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/10.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/11.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/bg/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "click_ripple";
tmp_animcycle.fqid = "tunic.click_ripple";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 3;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/4.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/door/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/ecologist/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fg/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hblip_door";
tmp_animcycle.fqid = "tunic.hblip_door";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hblip_door/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hblip_interact";
tmp_animcycle.fqid = "tunic.hblip_interact";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hblip_interact/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hblip_person";
tmp_animcycle.fqid = "tunic.hblip_person";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hblip_person/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_map/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_object/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_observation";
tmp_animcycle.fqid = "tunic.hover_observation";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_observation/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_option/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_person/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_porthole/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_zone/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/icon_map/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/icon_notebook/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journalsaz/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journalsaz_front/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarian/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/logbook/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/logbook_front/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/map/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/newspaper/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/newspaper_front/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notebook/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook_object";
tmp_animcycle.fqid = "tunic.notebook_object";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notebook_object/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/null/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/oldpictures/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/oldpictures_front/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_capitol_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_capitol_hall/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_drycleaner_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_drycleaner_frontdesk/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_chair";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_chair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_chair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_desk";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_desk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_desk/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_fgdesk";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_fgdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_fgdesk/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_fgpipes";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_fgpipes";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_fgpipes/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_collection";
tmp_animcycle.fqid = "tunic.room_historicalsociety_collection";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_collection/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_frontdesk/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_stacks/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_humanecology_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_humanecology_frontdesk/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_humanecology_hallway/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_kohlcenter_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_kohlcenter_halloffame/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_library_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_library_frontdesk/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_library_microfiche/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scarf";
tmp_animcycle.fqid = "tunic.scarf";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scarf/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_capitol/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_drycleaner/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_historicalsociety/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_humanecology/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_kohlcenter/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_library/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/toolbar/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tunic/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tunic_back/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tunic_front/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tunic_slip/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/youngboy/0.jpg");
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
tmp_entry.ww = canv.width/2;
tmp_entry.wh = 100;
tmp_entry.wx = 0;
tmp_entry.wy = 0;
tmp_entry.wz = 0;
tmp_entry.animcycle_id = "null";
tmp_entry.audio_id = "null";
tmp_entry.noteworthy = false;
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
}
tmp_level.entrys.push(tmp_entry);
tmp_scene = new scene();
tmp_scene.id = "capitol";
tmp_scene.fqid = "tunic.capitol";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = -7.105427357601002e-15;
tmp_scene.wy = -10;
tmp_scene.animcycle_id = "scene_capitol";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.unlocks = [
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.capitol.entry";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_capitol_entry";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tohall";
tmp_porthole.fqid = "tunic.capitol.entry.tohall";
{
tmp_porthole.ww = 264;
tmp_porthole.wh = 229;
tmp_porthole.wx = 20.999999999999986;
tmp_porthole.wy = 78.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "hall";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.capitol.entry.tomap";
{
tmp_porthole.ww = 760;
tmp_porthole.wh = 98.00000000000001;
tmp_porthole.wx = 56;
tmp_porthole.wy = -287;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "hall";
tmp_room.fqid = "tunic.capitol.hall";
{
tmp_room.primary = false;
tmp_room.ww = 1836.6565961732124;
tmp_room.wh = 1320;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_capitol_hall";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 990;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "youngboy";
tmp_person.fqid = "tunic.capitol.hall.youngboy";
{
tmp_person.ww = 128;
tmp_person.wh = 224;
tmp_person.wx = -104.99999999999997;
tmp_person.wy = 41;
tmp_person.wz = 0;
tmp_person.act_wx = 82.50390303146884;
tmp_person.act_wy = -20;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "youngboy";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.capitol.hall.youngboy.hub";
{
tmp_speak.primary = false;
tmp_speak.wx = 33.599824844023715;
tmp_speak.wy = 214.20000000000002;
tmp_speak.w = 228.69814225923326;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "youngboy";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Get away from me, I have a speech to give...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 108.75528699034571;
tmp_speak.options_wy = 126.19999999999999;
tmp_speak.options_w = 146.9697885196375;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.capitol.hall.youngboy.hub.goodbye";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.capitol.hall.toentry";
{
tmp_porthole.ww = 739;
tmp_porthole.wh = 65;
tmp_porthole.wx = 54.50000000000006;
tmp_porthole.wy = -293.50000000000006;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "drycleaner";
tmp_scene.fqid = "tunic.drycleaner";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = 211.00000000000003;
tmp_scene.wy = -123.99999999999996;
tmp_scene.animcycle_id = "scene_drycleaner";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.unlocks = [
"tunic.humanecology.frontdesk.worker.slip",
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.drycleaner.entry";
{
tmp_room.primary = true;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_drycleaner_entry";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.drycleaner.entry.tofrontdesk";
{
tmp_porthole.ww = 138;
tmp_porthole.wh = 194;
tmp_porthole.wx = 18.999999999999993;
tmp_porthole.wy = -65.00000000000001;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.drycleaner.entry.tomap";
{
tmp_porthole.ww = 715;
tmp_porthole.wh = 91;
tmp_porthole.wx = 49.5;
tmp_porthole.wy = -296.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.drycleaner.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 1117.168784029038;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_drycleaner_frontdesk";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.drycleaner.frontdesk.worker";
{
tmp_person.ww = 230.99999999999991;
tmp_person.wh = 279;
tmp_person.wx = -148.5;
tmp_person.wy = 75.5;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "cleaner";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.hub";
{
tmp_speak.primary = true;
tmp_speak.wx = -34.86646775955366;
tmp_speak.wy = 259;
tmp_speak.w = 196.9942688897165;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "cleaner";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How can I help you?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 78.4999984653155;
tmp_speak.options_wy = 78.00000000000001;
tmp_speak.options_w = 359;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.hub.goodbye";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.hub.inquire_slip";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Hey, what do you know about this slip?";
tmp_option.target_speak = "slip";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip";
{
tmp_speak.primary = false;
tmp_speak.wx = 66.9999999999994;
tmp_speak.wy = 230;
tmp_speak.w = 298;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "cleaner";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Wow, that looks old. Here, check the logbook over on the desk.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 52.00000000000005;
tmp_speak.options_wy = 39.00000000000002;
tmp_speak.options_w = 114;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Ok, thanks!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "logbook";
tmp_object.fqid = "tunic.drycleaner.frontdesk.logbook";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 85.00000000000001;
tmp_object.wy = 89.00000000000003;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "logbook";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.unlocks = [
"tunic.drycleaner.frontdesk.worker.slip",
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.drycleaner.frontdesk.logbook.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "logbook_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.drycleaner.frontdesk.toentry";
{
tmp_porthole.ww = 771;
tmp_porthole.wh = 88;
tmp_porthole.wx = 52.5;
tmp_porthole.wy = -281;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "historicalsociety";
tmp_scene.fqid = "tunic.historicalsociety";
{
tmp_scene.primary = true;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = -126.99999999999997;
tmp_scene.wy = -62;
tmp_scene.animcycle_id = "scene_historicalsociety";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.unlocks = [
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "closet";
tmp_room.fqid = "tunic.historicalsociety.closet";
{
tmp_room.primary = false;
tmp_room.ww = 2134.4544349939247;
tmp_room.wh = 792;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_closet";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-374.79431084122393, wy:-113.2998170346518, ww:211.86808265684846, wh:240.3455245259692 },
{wx:-118.55473324394916, wy:-223.7356130025576, ww:2033.1000861592847, wh:226.6862476527108 },
];
tmp_room.lights = [
{wx:522.4986865359258, wy:-105.99060828993512, ww:347.770278611425, wh:411.47272797892475 },
{wx:-394.0363142292491, wy:223.8727272727272, ww:61.77025691699601, wh:56.472727272727056 },
{wx:-394.0363142292491, wy:223.8727272727272, ww:61.77025691699601, wh:56.472727272727056 },
];
tmp_room.shadows = [
{wx:943.0457915933541, wy:-146.67414349544742, ww:198.0771365697986, wh:459.98419283740435 },
{wx:-948.0429452590882, wy:-70.49091146868366, ww:149.78539483522562, wh:427.22621485165007 },
{wx:72.03004853348523, wy:-151.83534632269135, ww:200.31107256569817, wh:430.8939187065737 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -279.4194896719319;
tmp_room.target_start_wy = -143.99999999999997;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "intro";
tmp_cutscene.fqid = "tunic.historicalsociety.closet.intro";
{
tmp_cutscene.noteworthy = false;
tmp_cutscene.unlocks = [
];
tmp_cutscene.relocks = [
];

tmp_cutscene.commands = [];

/*
Possible Commands:
CUTSCENE_COMMAND_CREATE
CUTSCENE_COMMAND_DESTROY
CUTSCENE_COMMAND_ANIMATE
CUTSCENE_COMMAND_ACT
CUTSCENE_COMMAND_AUDIO
CUTSCENE_COMMAND_TWEEN
CUTSCENE_COMMAND_WAIT
CUTSCENE_COMMAND_END
CUTSCENE_COMMAND_IGNORE

Possible Entity Types:
CUTSCENE_ENTITY_CAMERA
CUTSCENE_ENTITY_AVATAR
CUTSCENE_ENTITY_SCENE
CUTSCENE_ENTITY_CUTSCENE
*/

/*
//skeleton command addition
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_NULL;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene_command.wx = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wy = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wz = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.ww = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wh = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.animcycle_id = "null";
tmp_cutscene_command.audio_id = "null";
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
*/

//setup jolie
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene_command.wx = 400;
tmp_cutscene_command.wy = -100;
tmp_cutscene.commands.push(tmp_cutscene_command);

//setup cam
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "gramps";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

//get click
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_WAIT;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

//gramps talk
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

//cam move to jo
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = 2;
tmp_cutscene.commands.push(tmp_cutscene_command);

//get click
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_WAIT;
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

//Leave this at the end- remember to set tmp_cutscene_command.t!
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.historicalsociety.closet.gramps";
{
tmp_person.ww = 176.99999935560783;
tmp_person.wh = 343.9999890712546;
tmp_person.wx = -423.82473587498396;
tmp_person.wy = 18.755278900937242;
tmp_person.wz = 1;
tmp_person.act_wx = 137.58904854645314;
tmp_person.act_wy = -113.1608805092052;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.unlocks = [
];
tmp_person.relocks = [
"tunic.historicalsociety.closet.gramps.intro_0_cs_5",
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_0";
{
tmp_speak.primary = 1;
tmp_speak.wx = -361;
tmp_speak.wy = 273;
tmp_speak.w = 259;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...and then, they found boxes of counterfeit Mexican pesos that were used as payment!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_1";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_1";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_1";
{
tmp_speak.primary = false;
tmp_speak.wx = -158.00000000000009;
tmp_speak.wy = -34.000000000000036;
tmp_speak.w = 221;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Wow! Like, fake money?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_2";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_2";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_2";
{
tmp_speak.primary = false;
tmp_speak.wx = -142.99999999999994;
tmp_speak.wy = -37.000000000000014;
tmp_speak.w = 205;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "What happened next?!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_3";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_3";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_3";
{
tmp_speak.primary = false;
tmp_speak.wx = -356.6655164034023;
tmp_speak.wy = 237.011518833536;
tmp_speak.w = 40;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -285.0787849331714;
tmp_speak.options_wy = 71.91061968408266;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_4";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_4";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_4";
{
tmp_speak.primary = false;
tmp_speak.wx = -355.8442770352371;
tmp_speak.wy = 248.45842041312287;
tmp_speak.w = 286;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I'll have to tell you the rest later- or I'll be late to my meeting!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -304.576136087485;
tmp_speak.options_wy = -68.81594167679211;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_5";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_5";
{
tmp_speak.primary = false;
tmp_speak.wx = -356.9504738760633;
tmp_speak.wy = 250.8885054678008;
tmp_speak.w = 173;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Grab your stuff and meet me upstairs!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -330.7717132442285;
tmp_speak.options_wy = 1.0389307411907944;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "teddy";
tmp_person.fqid = "tunic.historicalsociety.closet.teddy";
{
tmp_person.ww = 156.1871803883297;
tmp_person.wh = 84.02997955443563;
tmp_person.wx = 531.6062380096464;
tmp_person.wy = -145.05502554019702;
tmp_person.wz = 0;
tmp_person.act_wx = -120.0008846143378;
tmp_person.act_wy = -63.00001416167618;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 51.6980142932689;
tmp_person.hover_icon_wy = 23.995165550000877;
tmp_person.animcycle_id = "null";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0";
{
tmp_speak.primary = 1;
tmp_speak.wx = 132.13159507828425;
tmp_speak.wy = -43.99510699953347;
tmp_speak.w = 239;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Teddy, please stay hidden!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_1";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_1";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_1";
{
tmp_speak.primary = false;
tmp_speak.wx = 167.1629910649115;
tmp_speak.wy = -14.955728203071438;
tmp_speak.w = 183;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "You're not supposed to be here-";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 166.00000170519166;
tmp_speak.options_wy = -126.99999911049399;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_2";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_2";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_2";
{
tmp_speak.primary = false;
tmp_speak.wx = 202.87791008798058;
tmp_speak.wy = -27.3017739977198;
tmp_speak.w = 152;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "But don't worry, I'll be back soon.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 201.8716889428919;
tmp_speak.options_wy = -161.95577156743605;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_3";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_3";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_3";
{
tmp_speak.primary = false;
tmp_speak.wx = 584.8053462940463;
tmp_speak.wy = -40.41326852976903;
tmp_speak.w = 40;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -285.0787849331714;
tmp_speak.options_wy = 71.91061968408266;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_4";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_4";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_4";
{
tmp_speak.primary = false;
tmp_speak.wx = 193.6035479951397;
tmp_speak.wy = -20.50264884568637;
tmp_speak.w = 176;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Now where did I put my notebook...?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = -304.576136087485;
tmp_speak.options_wy = -68.81594167679211;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_5";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_5";
{
tmp_speak.primary = false;
tmp_speak.wx = 572.9947023086266;
tmp_speak.wy = -36.625662211421655;
tmp_speak.w = 117;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "ZZZZzzzzz...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -330.7717132442285;
tmp_speak.options_wy = 1.0389307411907944;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "newspaper";
tmp_object.fqid = "tunic.historicalsociety.closet.newspaper";
{
tmp_object.ww = 114.55309842041304;
tmp_object.wh = 76.71504252733904;
tmp_object.wx = -629.3983715585547;
tmp_object.wy = -70.80189845650153;
tmp_object.wz = 0.11;
tmp_object.act_wx = -61.12301336573512;
tmp_object.act_wy = -32.01681652490887;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 33.63053029083767;
tmp_object.hover_icon_wy = 26.87826993962551;
tmp_object.animcycle_id = "newspaper";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet.newspaper.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "null";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_object = new object();
tmp_object.id = "notebook";
tmp_object.fqid = "tunic.historicalsociety.closet.notebook";
{
tmp_object.ww = 99.99999999999999;
tmp_object.wh = 99.99999999999999;
tmp_object.wx = -648.2464271144283;
tmp_object.wy = -231.28498112045608;
tmp_object.wz = 0.12;
tmp_object.act_wx = 63;
tmp_object.act_wy = 7;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 35.84897967830983;
tmp_object.hover_icon_wy = 43.00093435578584;
tmp_object.animcycle_id = "notebook_object";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.noteworthy = "Here's my notebook!";
tmp_object.unlocks = [
];
tmp_object.relocks = [
"tunic.historicalsociety.closet.notebook",
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet.notebook.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_observation = new observation();
tmp_observation.id = "doorblock";
tmp_observation.fqid = "tunic.historicalsociety.closet.doorblock";
{
tmp_observation.ww = 161.99999999923818;
tmp_observation.wh = 293.9999999999717;
tmp_observation.wx = -357.58622595388425;
tmp_observation.wy = 139.7229316072807;
tmp_observation.wz = 0.1;
tmp_observation.act_wx = -13.999999999999998;
tmp_observation.act_wy = -71;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 17.04946868792308;
tmp_observation.hover_icon_wy = 55.99791017800129;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I feel like I'm forgetting something...";
tmp_observation.blip_wx = -319.39018232082714;
tmp_observation.blip_wy = 164.00019803198495;
tmp_observation.blip_w = 316;
tmp_observation.blip_h = 30;
tmp_observation.noteworthy = false;
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
"tunic.historicalsociety.closet.notebook",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "photo";
tmp_observation.fqid = "tunic.historicalsociety.closet.photo";
{
tmp_observation.ww = 242.5221929444906;
tmp_observation.wh = 164.0023109162744;
tmp_observation.wx = 465.67784975346535;
tmp_observation.wy = -49.05610468928902;
tmp_observation.wz = 0;
tmp_observation.act_wx = -107.51714131069957;
tmp_observation.act_wy = -129.10494391114588;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 63.95945286875973;
tmp_observation.hover_icon_wy = 41.970690791400216;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I love these photos of me and Teddy.";
tmp_observation.blip_wx = 236.38354274260067;
tmp_observation.blip_wy = 62.37115888408396;
tmp_observation.blip_w = 175;
tmp_observation.blip_h = 30;
tmp_observation.noteworthy = false;
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "scarf";
tmp_observation.fqid = "tunic.historicalsociety.closet.scarf";
{
tmp_observation.ww = 120.37433778857825;
tmp_observation.wh = 73.80442284325629;
tmp_observation.wx = 43.24291616038822;
tmp_observation.wy = -268.1933900364518;
tmp_observation.wz = 0;
tmp_observation.act_wx = 81.12909904618942;
tmp_observation.act_wy = 40.02207172547418;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = -10.417556825988527;
tmp_observation.hover_icon_wy = 23.98785932808255;
tmp_observation.animcycle_id = "scarf";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "Hmmm. This is Teddy's scarf...";
tmp_observation.blip_wx = -81.62296005362904;
tmp_observation.blip_wy = -55.31645986077656;
tmp_observation.blip_w = 139;
tmp_observation.blip_h = 30;
tmp_observation.noteworthy = false;
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.historicalsociety.closet.toentry";
{
tmp_porthole.ww = 180.92363614055145;
tmp_porthole.wh = 293.25044068209445;
tmp_porthole.wx = -354.078082084402;
tmp_porthole.wy = 144.40697453797793;
tmp_porthole.wz = 0;
tmp_porthole.act_wx = 5.416817557475431;
tmp_porthole.act_wy = -87.38181818181819;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 54.977911706972236;
tmp_porthole.hover_icon_wy = 57.13171436533542;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 484.56744939271255;
tmp_porthole.target_start_wy = -132.23999999999992;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "chair";
tmp_inert.fqid = "tunic.historicalsociety.closet.chair";
{
tmp_inert.ww = 288.7991253327396;
tmp_inert.wh = 291.62036450312695;
tmp_inert.wx = -196.01916720368874;
tmp_inert.wy = -35.07498882454156;
tmp_inert.wz = 0.1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "room_historicalsociety_closet_chair";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "desk";
tmp_inert.fqid = "tunic.historicalsociety.closet.desk";
{
tmp_inert.ww = 397.1093170356074;
tmp_inert.wh = 309.30835246805276;
tmp_inert.wx = -716.9152300534219;
tmp_inert.wy = -59.238045156760066;
tmp_inert.wz = 0.1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "room_historicalsociety_closet_desk";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgdesk";
tmp_inert.fqid = "tunic.historicalsociety.closet.fgdesk";
{
tmp_inert.ww = 737.4257108140947;
tmp_inert.wh = 155.30177399756974;
tmp_inert.wx = -547.6128797083838;
tmp_inert.wy = -320.58454434993905;
tmp_inert.wz = 999;
tmp_inert.g = 0.2;
tmp_inert.animcycle_id = "room_historicalsociety_closet_fgdesk";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgpipes";
tmp_inert.fqid = "tunic.historicalsociety.closet.fgpipes";
{
tmp_inert.ww = 917.8841312272183;
tmp_inert.wh = 853.8504981773996;
tmp_inert.wx = 589.5612401567035;
tmp_inert.wy = 42.448985204123744;
tmp_inert.wz = 999;
tmp_inert.g = 0.2;
tmp_inert.animcycle_id = "room_historicalsociety_closet_fgpipes";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "collection";
tmp_room.fqid = "tunic.historicalsociety.collection";
{
tmp_room.primary = false;
tmp_room.ww = 1626.7701863354039;
tmp_room.wh = 990;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_collection";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 950;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:126.58633540372637, wy:-267.9000000000001, ww:1440.6267080745342, wh:470.59999999999985 },
];
tmp_room.lights = [
{wx:643.3423913043476, wy:341.0999999999999, ww:58.32826086956502, wh:55.39999999999993 },
];
tmp_room.shadows = [
{wx:570.895652173913, wy:351.6000000000001, ww:67.99999999999962, wh:60.799999999999976 },
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = 58.79999999999998;
tmp_room.target_start_wy = -212.4;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "tunic";
tmp_object.fqid = "tunic.historicalsociety.collection.tunic";
{
tmp_object.ww = 137.78787878787867;
tmp_object.wh = 212.04545454545456;
tmp_object.wx = 7.617966210281686;
tmp_object.wy = 170.51545454545473;
tmp_object.wz = 0;
tmp_object.act_wx = 99.54719920102725;
tmp_object.act_wy = -29.687272727272703;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "null";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.collection.tunic.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "tunic_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "slip";
tmp_zone.fqid = "tunic.historicalsociety.collection.tunic.hub.slip";
{
tmp_zone.ww = 100;
tmp_zone.wh = 100;
tmp_zone.wx = -50.000000000000014;
tmp_zone.wy = -59.99999999999999;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "slip";
tmp_zone.noteworthy = false;
tmp_zone.unlocks = [
];
tmp_zone.relocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "slip";
tmp_view.fqid = "tunic.historicalsociety.collection.tunic.slip";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "tunic_slip";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "return";
tmp_zone.fqid = "tunic.historicalsociety.collection.tunic.slip.return";
{
tmp_zone.ww = 100;
tmp_zone.wh = 100;
tmp_zone.wx = -50.000000000000014;
tmp_zone.wy = -59.99999999999999;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "hub";
tmp_zone.noteworthy = false;
tmp_zone.unlocks = [
];
tmp_zone.relocks = [
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
tmp_porthole.fqid = "tunic.historicalsociety.collection.toentry";
{
tmp_porthole.ww = 155.09472049689438;
tmp_porthole.wh = 357.4;
tmp_porthole.wx = 748.4041925465838;
tmp_porthole.wy = 18.29999999999987;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 10.8;
tmp_porthole.act_wy = -62.4;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = -893.5185425101214;
tmp_porthole.target_start_wy = -300.24000000000007;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.historicalsociety.entry";
{
tmp_room.primary = true;
tmp_room.ww = 2529.910931174089;
tmp_room.wh = 1188;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_entry";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 1074.7199999999993;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-15.563273693588371, wy:-334.48636893977323, ww:2068.426705925653, wh:466.38909090909084 },
];
tmp_room.lights = [
{wx:606.2655502392346, wy:297.6909090909091, ww:63.28443135811556, wh:38.25454545454535 },
];
tmp_room.shadows = [
{wx:623.0212383610126, wy:-292.6775105085614, ww:827.5797659221049, wh:498.90981818191267 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 10.349635627530388;
tmp_room.target_start_wy = -548.64;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tocloset";
{
tmp_porthole.ww = 261.5010285004335;
tmp_porthole.wh = 288.764417060611;
tmp_porthole.wx = 616.4580775618733;
tmp_porthole.wy = 100.78844693001369;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 15.05436142804566;
tmp_porthole.act_wy = -48.218181818181826;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "closet";
tmp_porthole.target_start_wx = -316.7611178614823;
tmp_porthole.target_start_wy = 36.240000000000045;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tocollection";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tocollection";
{
tmp_porthole.ww = 125.42880725150671;
tmp_porthole.wh = 370.959272152761;
tmp_porthole.wx = -921.9432388906349;
tmp_porthole.wy = 21.407521837651274;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = -3.449878542510121;
tmp_porthole.act_wy = -131.76;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "collection";
tmp_porthole.target_start_wx = 744.2767080745341;
tmp_porthole.target_start_wy = -57.59999999999997;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tomap";
{
tmp_porthole.ww = 2539.1354508649247;
tmp_porthole.wh = 160.88000000000005;
tmp_porthole.wx = 45.93292234081696;
tmp_porthole.wy = -527.6763636363636;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "map";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tostacks";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tostacks";
{
tmp_porthole.ww = 356.2906368202588;
tmp_porthole.wh = 688.0952727413944;
tmp_porthole.wx = 182.76160361500496;
tmp_porthole.wy = 301.78872521764254;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 2.374022819286067;
tmp_porthole.act_wy = -335.06909090909085;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fg";
tmp_inert.fqid = "tunic.historicalsociety.entry.fg";
{
tmp_inert.ww = 4180.447692307692;
tmp_inert.wh = 1911.785454545454;
tmp_inert.wx = -690.3270850202434;
tmp_inert.wy = -1326.7363636363636;
tmp_inert.wz = 0;
tmp_inert.g = 1;
tmp_inert.animcycle_id = "fg";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.historicalsociety.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 1208.6968641114984;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_frontdesk";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 44.502020905923295;
tmp_room.target_start_wy = -171.6;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "archivist";
tmp_person.fqid = "tunic.historicalsociety.frontdesk.archivist";
{
tmp_person.ww = 141;
tmp_person.wh = 293;
tmp_person.wx = -131.99393728222998;
tmp_person.wy = -47.299999999999926;
tmp_person.wz = 0;
tmp_person.act_wx = 98.57342676974002;
tmp_person.act_wy = -50;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "archivist";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.hub";
{
tmp_speak.primary = true;
tmp_speak.wx = -36.366286006156514;
tmp_speak.wy = 159.80000000000004;
tmp_speak.w = 310.43094076655035;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How can I help you?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 183.24811736090413;
tmp_speak.options_wy = 90.80000000000005;
tmp_speak.options_w = 212.29644599303128;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub.goodbye";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_log";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub.inquire_log";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "What can you tell me about this log?";
tmp_option.target_speak = "log";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
"tunic.drycleaner.frontdesk.logbook.hub",
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_newspaper";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub.inquire_newspaper";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I found a newspaper!";
tmp_option.target_speak = "newspaper";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
"tunic.library.microfiche.newspaper.hub",
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub.inquire_slip";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Do you know what this piece of paper is?";
tmp_option.target_speak = "slip";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
"tunic.historicalsociety.collection.tunic.hub.slip",
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "log";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.log";
{
tmp_speak.primary = false;
tmp_speak.wx = -5.523623693379676;
tmp_speak.wy = 166.80000000000004;
tmp_speak.w = 289.69588850174216;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I'll get started on looking; but in the meanwhile, you might also want to check out the library!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 197.2809059233447;
tmp_speak.options_wy = 22.99999999999995;
tmp_speak.options_w = 84.7984668989547;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.log.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Ok I will!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "newspaper";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.newspaper";
{
tmp_speak.primary = false;
tmp_speak.wx = 13.5;
tmp_speak.wy = 169;
tmp_speak.w = 359;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "That's great! Also, you should check the archives- I think we have something. It's #12345";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 210.5;
tmp_speak.options_wy = 16.999999999999986;
tmp_speak.options_w = 161;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.newspaper.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Thanks a bunch!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.slip";
{
tmp_speak.primary = false;
tmp_speak.wx = -38;
tmp_speak.wy = 167;
tmp_speak.w = 312;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I have no idea what that is- you might want to ask a specialist over in the Human Ecology building.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 158.50425087108016;
tmp_speak.options_wy = 27.000000000000014;
tmp_speak.options_w = 200.20961672473868;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.slip.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Thanks for your help!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "tostacks";
tmp_porthole.fqid = "tunic.historicalsociety.frontdesk.tostacks";
{
tmp_porthole.ww = 767;
tmp_porthole.wh = 86.99999999999999;
tmp_porthole.wx = 46.5;
tmp_porthole.wy = -299.50000000000006;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 65.24595080983798;
tmp_porthole.target_start_wy = 110.4;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "stacks";
tmp_room.fqid = "tunic.historicalsociety.stacks";
{
tmp_room.primary = false;
tmp_room.ww = 956.9406118776245;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_stacks";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:66.34433113377327, wy:-117.40000000000003, ww:572.6886622675465, wh:487.6 },
];
tmp_room.lights = [
{wx:333.20026994601085, wy:299.6000000000001, ww:44.19646070785856, wh:35.19999999999998 },
];
tmp_room.shadows = [
{wx:391.921625674865, wy:299.59999999999997, ww:46.806298740251876, wh:39.99999999999999 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 43.06232753449308;
tmp_room.target_start_wy = -44.39999999999998;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "journalsaz";
tmp_object.fqid = "tunic.historicalsociety.stacks.journalsaz";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 337.7442711457709;
tmp_object.wy = 120.60000000000002;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "journalsaz";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.unlocks = [
"tunic.historicalsociety.frontdesk.archivist.newspaper",
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.stacks.journalsaz.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "journalsaz_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.historicalsociety.stacks.toentry";
{
tmp_porthole.ww = 381.74397120575856;
tmp_porthole.wh = 216.20000000000005;
tmp_porthole.wx = 19.08524295140981;
tmp_porthole.wy = -255.90000000000035;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 50.076512547581466;
tmp_porthole.target_start_wy = -113.25553782528996;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.historicalsociety.stacks.tofrontdesk";
{
tmp_porthole.ww = 117.622975404919;
tmp_porthole.wh = 170.00000000000003;
tmp_porthole.wx = 59.15581883623271;
tmp_porthole.wy = 155.00000000000006;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 6.524595080983803;
tmp_porthole.act_wy = -19.2;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 46.15024390243908;
tmp_porthole.target_start_wy = -296.40000000000003;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "humanecology";
tmp_scene.fqid = "tunic.humanecology";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = 4.999999999999993;
tmp_scene.wy = 170.00000000000003;
tmp_scene.animcycle_id = "scene_humanecology";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.unlocks = [
"tunic.historicalsociety.frontdesk.archivist.slip",
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.humanecology.entry";
{
tmp_room.primary = true;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_humanecology_entry";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tohallway";
tmp_porthole.fqid = "tunic.humanecology.entry.tohallway";
{
tmp_porthole.ww = 114;
tmp_porthole.wh = 175;
tmp_porthole.wx = 0.9999999999999787;
tmp_porthole.wy = -95.49999999999997;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "hallway";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.humanecology.entry.tomap";
{
tmp_porthole.ww = 862;
tmp_porthole.wh = 60;
tmp_porthole.wx = 6;
tmp_porthole.wy = -302;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.humanecology.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 1194.5508684863523;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_humanecology_frontdesk";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.humanecology.frontdesk.worker";
{
tmp_person.ww = 170;
tmp_person.wh = 310.00000000000006;
tmp_person.wx = -265.8936476426801;
tmp_person.wy = 35.80000000000001;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "ecologist";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.hub";
{
tmp_speak.primary = true;
tmp_speak.wx = -90.05387098655072;
tmp_speak.wy = 214.20000000000002;
tmp_speak.w = 198.34575678620348;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "ecologist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How can I help you?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -20.651167289415696;
tmp_speak.options_wy = 143.4;
tmp_speak.options_w = 241;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.hub.goodbye";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.hub.inquire_slip";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I was told you might know something about this slip...";
tmp_option.target_speak = "slip";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.slip";
{
tmp_speak.primary = false;
tmp_speak.wx = 1.999999999960096;
tmp_speak.wy = 266;
tmp_speak.w = 440;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "ecologist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hey! That looks like a drycleaner's tag- and an old one at that! They haven't used these printing methods since the early 40s? Not sure what more I can tell you...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -62.50000000000006;
tmp_speak.options_wy = 82;
tmp_speak.options_w = 131;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.slip.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "That's a start!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "tohallway";
tmp_porthole.fqid = "tunic.humanecology.frontdesk.tohallway";
{
tmp_porthole.ww = 117.06292803970226;
tmp_porthole.wh = 336.19999999999993;
tmp_porthole.wx = 527.4760794044665;
tmp_porthole.wy = 0.7000000000001023;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "hallway";
tmp_porthole.target_start_wx = 440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "hallway";
tmp_room.fqid = "tunic.humanecology.hallway";
{
tmp_room.primary = false;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_humanecology_hallway";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.humanecology.hallway.toentry";
{
tmp_porthole.ww = 794;
tmp_porthole.wh = 80;
tmp_porthole.wx = 41;
tmp_porthole.wy = -283;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.humanecology.hallway.tofrontdesk";
{
tmp_porthole.ww = 77;
tmp_porthole.wh = 395;
tmp_porthole.wx = 395.49999999999994;
tmp_porthole.wy = -128.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 519.4415384615384;
tmp_porthole.target_start_wy = -13.200000000000042;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "kohlcenter";
tmp_scene.fqid = "tunic.kohlcenter";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = -89;
tmp_scene.wy = -232;
tmp_scene.animcycle_id = "scene_kohlcenter";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.unlocks = [
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.kohlcenter.entry";
{
tmp_room.primary = true;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_kohlcenter_entry";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tohalloffame";
tmp_porthole.fqid = "tunic.kohlcenter.entry.tohalloffame";
{
tmp_porthole.ww = 244;
tmp_porthole.wh = 179.00000000000003;
tmp_porthole.wx = -7.999999999999972;
tmp_porthole.wy = -70.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "halloffame";
tmp_porthole.target_start_wx = -13.902307137707268;
tmp_porthole.target_start_wy = -127.20000000000003;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.kohlcenter.entry.tomap";
{
tmp_porthole.ww = 689;
tmp_porthole.wh = 57;
tmp_porthole.wx = 47.5;
tmp_porthole.wy = -298.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "halloffame";
tmp_room.fqid = "tunic.kohlcenter.halloffame";
{
tmp_room.primary = false;
tmp_room.ww = 2039.0050468637346;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_kohlcenter_halloffame";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-5.560922855082936, wy:-136.49999999999994, ww:2072.720259552992, wh:270.99999999999983 },
];
tmp_room.lights = [
{wx:955.08850036049, wy:236.7, ww:84.69033886085087, wh:43 },
];
tmp_room.shadows = [
{wx:828.5775054073538, wy:225.3, ww:76.34895457822643, wh:32.20000000000002 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -16.682768565248775;
tmp_room.target_start_wy = -128.39999999999998;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "oldpictures";
tmp_object.fqid = "tunic.kohlcenter.halloffame.oldpictures";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 105.99999999999997;
tmp_object.wy = 55.000000000000014;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "oldpictures";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.kohlcenter.halloffame.oldpictures.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "oldpictures_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.kohlcenter.halloffame.toentry";
{
tmp_porthole.ww = 2098.621485219899;
tmp_porthole.wh = 81.6;
tmp_porthole.wx = 0.5126171593367417;
tmp_porthole.wy = -235.99999999999983;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "library";
tmp_scene.fqid = "tunic.library";
{
tmp_scene.primary = false;
tmp_scene.ww = 100;
tmp_scene.wh = 100;
tmp_scene.wx = 238.99999999999997;
tmp_scene.wy = 55.000000000000014;
tmp_scene.animcycle_id = "scene_library";
tmp_scene.audio_id = "null";
tmp_scene.noteworthy = false;
tmp_scene.unlocks = [
"tunic.historicalsociety.frontdesk.archivist.log",
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.library.entry";
{
tmp_room.primary = true;
tmp_room.ww = 880;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_library_entry";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.library.entry.tofrontdesk";
{
tmp_porthole.ww = 271;
tmp_porthole.wh = 173.99999999999997;
tmp_porthole.wx = 29.49999999999997;
tmp_porthole.wy = -15.999999999999972;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = -434.2153261842602;
tmp_porthole.target_start_wy = -71.00000000000006;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.library.entry.tomap";
{
tmp_porthole.ww = 738;
tmp_porthole.wh = 73;
tmp_porthole.wx = 50;
tmp_porthole.wy = -293.5;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.library.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 1424.078303425775;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_library_frontdesk";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:69.08352365415988, wy:-104.99999999999996, ww:1278.9911908646006, wh:430.0000000000001 },
];
tmp_room.lights = [
{wx:541.0918433931482, wy:259.3000000000001, ww:66.30636215334421, wh:29.000000000000053 },
];
tmp_room.shadows = [
{wx:627.6303425774877, wy:258.90000000000003, ww:54.95073409461684, wh:43.79999999999989 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 73.81875195937431;
tmp_room.target_start_wy = -268.4000000000001;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.library.frontdesk.worker";
{
tmp_person.ww = 266.5282218597064;
tmp_person.wh = 232.8;
tmp_person.wx = -192.59820554649252;
tmp_person.wy = 98.20000000000005;
tmp_person.wz = 0;
tmp_person.act_wx = 87.38662316476346;
tmp_person.act_wy = -56.4;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "librarian";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.noteworthy = false;
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.library.frontdesk.worker.hub";
{
tmp_speak.primary = true;
tmp_speak.wx = -85.24061899220952;
tmp_speak.wy = 251.39999999999998;
tmp_speak.w = 195.0000018198219;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "librarian";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How can I help you?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 138.5000000120854;
tmp_speak.options_wy = 186.99999999999997;
tmp_speak.options_w = 257;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.library.frontdesk.worker.hub.goodbye";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_log";
tmp_option.fqid = "tunic.library.frontdesk.worker.hub.inquire_log";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "What can you tell me about [historical lady's name]?";
tmp_option.target_speak = "log";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "log";
tmp_speak.fqid = "tunic.library.frontdesk.worker.log";
{
tmp_speak.primary = false;
tmp_speak.wx = -4.499999999999773;
tmp_speak.wy = 266;
tmp_speak.w = 394.9999999999999;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "librarian";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I don't know off the top of my head, but you're more than welcome to the microfiche in back; we've got tons of old papers!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 55.50000000000014;
tmp_speak.options_wy = 130.99999999999997;
tmp_speak.options_w = 147;
tmp_speak.options_h = 30;
tmp_speak.noteworthy = false;
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.library.frontdesk.worker.log.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Alright, thanks!";
tmp_option.target_speak = "hub";
tmp_option.noteworthy = false;
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.library.frontdesk.toentry";
{
tmp_porthole.ww = 137.35171288743888;
tmp_porthole.wh = 185.8;
tmp_porthole.wx = -490.2970636215334;
tmp_porthole.wy = -37.10000000000002;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 66.02544861337684;
tmp_porthole.act_wy = -15.6;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomicrofiche";
tmp_porthole.fqid = "tunic.library.frontdesk.tomicrofiche";
{
tmp_porthole.ww = 85.85840130505707;
tmp_porthole.wh = 138.99999999999994;
tmp_porthole.wx = 489.81859706362167;
tmp_porthole.wy = 136.29999999999998;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "microfiche";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
"tunic.library.frontdesk.worker.log",
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "microfiche";
tmp_room.fqid = "tunic.library.microfiche";
{
tmp_room.primary = false;
tmp_room.ww = 1139.1489361702127;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_library_microfiche";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
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
tmp_room.target_start_wx = 12.000000000000028;
tmp_room.target_start_wy = -276;
tmp_room.noteworthy = false;
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "newspaper";
tmp_object.fqid = "tunic.library.microfiche.newspaper";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 60.79769690122075;
tmp_object.wy = 173.99999999999997;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "newspaper";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.noteworthy = false;
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.library.microfiche.newspaper.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "newspaper_front";
tmp_view.audio_id = "null";
tmp_view.noteworthy = false;
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.library.microfiche.tofrontdesk";
{
tmp_porthole.ww = 755;
tmp_porthole.wh = 86;
tmp_porthole.wx = 10.5;
tmp_porthole.wy = -282;
tmp_porthole.wz = 999;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 490.0019898988605;
tmp_porthole.target_start_wy = 82.00000000000004;
tmp_porthole.noteworthy = false;
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
}
levels.push(tmp_level);

  for(var i = 0; i < levels.length; i++)
  {
    tmp_level = levels[i];
    for(var j = 0; j < tmp_level.scenes.length; j++)
    {
      tmp_scene = tmp_level.scenes[j];
      for(var k = 0; k < tmp_scene.rooms.length; k++)
      {
        tmp_room = tmp_scene.rooms[k];
        tmp_room.nav_min_wz_wy = -99999;
        tmp_room.nav_max_wz_wy =  99999;
        for(var l = 0; l < tmp_room.navs.length; l++)
        {
          var tmp_nav = tmp_room.navs[l]
          if(tmp_nav.wy+tmp_nav.wh/2 > tmp_room.nav_min_wz_wy) tmp_room.nav_min_wz_wy = tmp_nav.wy+tmp_nav.wh/2;
          if(tmp_nav.wy-tmp_nav.wh/2 < tmp_room.nav_max_wz_wy) tmp_room.nav_max_wz_wy = tmp_nav.wy-tmp_nav.wh/2;
        }
        for(var l = 0; l < tmp_room.portholes.length; l++)
        {
          tmp_porthole = tmp_room.portholes[l];
          var id = tmp_scene.fqid+"."+tmp_porthole.target_room;
          var target_room = find(id);
          tmp_porthole.target_room_found = target_room;
          if(target_room) target_room.entry_portholes_found.push(tmp_porthole);
        }
        for(var l = 0; l < tmp_room.persons.length; l++)
        {
          tmp_person = tmp_room.persons[l];
          for(var m = 0; m < tmp_person.speaks.length; m++)
          {
            tmp_speak = tmp_person.speaks[m];
            for(var n = 0; n < tmp_speak.options.length; n++)
            {
              tmp_option = tmp_speak.options[n];
              var id = tmp_person.fqid+"."+tmp_option.target_speak;
              var target_speak = find(id);
              tmp_option.target_speak_found = target_speak;
            }
          }
        }
      }
    }
  }
}

