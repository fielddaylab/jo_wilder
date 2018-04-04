
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
tmp_level.intro_room_id = "tunic.historicalsociety.entry";
tmp_level.avatar_walk_animcycle_id = "avatar_walk";
tmp_level.avatar_idle_animcycle_id = "avatar_idle";
tmp_level.avatar_act_animcycle_id = "avatar_act";
tmp_level.avatar_ww = 124.29142744197549;
tmp_level.avatar_wh = 227.18935293838604;
tmp_level.exit_animcycle_id = "exit";
tmp_level.toolbar_animcycle_id = "toolbar";
tmp_level.toolbar_audio_id = "null";
tmp_level.map_animcycle_id = "map";
tmp_level.map_audio_id = "null";
tmp_level.notebook_animcycle_id = "notebook";
tmp_level.notebook_audio_id = "null";
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
tmp_level.notifications_w = 200;
tmp_level.notifications_h = 30;
tmp_level.target_lerp_s = 0.03;
tmp_level.raw_notifications = [
];
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
tmp_animcycle.id = "boss";
tmp_animcycle.fqid = "tunic.boss";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boss/0.png");
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
tmp_animcycle.id = "exit";
tmp_animcycle.fqid = "tunic.exit";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/exit/0.png");
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
tmp_animcycle.id = "fgartifacts";
tmp_animcycle.fqid = "tunic.fgartifacts";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgartifacts/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgcarts";
tmp_animcycle.fqid = "tunic.fgcarts";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgcarts/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgdust";
tmp_animcycle.fqid = "tunic.fgdust";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgdust/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgoffice";
tmp_animcycle.fqid = "tunic.fgoffice";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgoffice/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgpipes";
tmp_animcycle.fqid = "tunic.fgpipes";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgpipes/0.png");
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
tmp_animcycle.id = "jersey";
tmp_animcycle.fqid = "tunic.jersey";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/jersey/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "jersey_front";
tmp_animcycle.fqid = "tunic.jersey_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/jersey_front/0.png");
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
tmp_animcycle.id = "retirement_letter";
tmp_animcycle.fqid = "tunic.retirement_letter";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/retirement_letter/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "retirement_letter_closeup";
tmp_animcycle.fqid = "tunic.retirement_letter_closeup";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/retirement_letter_closeup/0.png");
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
tmp_animcycle.id = "room_historicalsociety_hallway";
tmp_animcycle.fqid = "tunic.room_historicalsociety_hallway";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_hallway/0.jpg");
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
tmp_animcycle.id = "teddy";
tmp_animcycle.fqid = "tunic.teddy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy/0.png");
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
tmp_entry.primary = undefined;
tmp_entry.ww = 116.99999999999996;
tmp_entry.wh = 244.9999999999999;
tmp_entry.wx = -260.50000000000006;
tmp_entry.wy = 79.49999999999997;
tmp_entry.wz = 0;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "null";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
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
tmp_scene.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "boss";
tmp_person.fqid = "tunic.capitol.hall.boss";
{
tmp_person.ww = 150.0737668615271;
tmp_person.wh = 313.3287704263341;
tmp_person.wx = 299.70453437843406;
tmp_person.wy = 40.98731418180236;
tmp_person.wz = 0;
tmp_person.act_wx = -140.83388568593585;
tmp_person.act_wy = 5.555867533397077;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 48.53549656579855;
tmp_person.hover_icon_wy = 136.49783377739953;
tmp_person.animcycle_id = "boss";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
"tunic.kohlcenter.halloffame.oldpictures.hub",
"tunic.kohlcenter.halloffame.jersey.hub",
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_01a";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_01a";
{
tmp_speak.primary = false;
tmp_speak.wx = -14.565378662189346;
tmp_speak.wy = 314.7000014870106;
tmp_speak.w = 228.69814225923326;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Where's Wells?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 239.216253647685;
tmp_speak.options_wy = 100.71702878373762;
tmp_speak.options_w = 146.9697885196375;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.capitol.hall.boss.boss_chain_01a",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_01a.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_01b";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_01b";
{
tmp_speak.primary = false;
tmp_speak.wx = 76.9346213378118;
tmp_speak.wy = 367.20000148701513;
tmp_speak.w = 270.69814225923324;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hmmm. Wells sure is taking his time with that plaque…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 239.216253647685;
tmp_speak.options_wy = 100.71702878373762;
tmp_speak.options_w = 146.9697885196375;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.capitol.hall.boss.boss_chain_01b",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_01b.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_01c";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_01c";
{
tmp_speak.primary = false;
tmp_speak.wx = 174.43462133781077;
tmp_speak.wy = 322.2000014870106;
tmp_speak.w = 152.69814225923326;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Back so soon?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 239.216253647685;
tmp_speak.options_wy = 100.71702878373762;
tmp_speak.options_w = 146.9697885196375;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_01c.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_02";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_02";
{
tmp_speak.primary = false;
tmp_speak.wx = -129.90090138980202;
tmp_speak.wy = 374.70000148702;
tmp_speak.w = 323.69814225923324;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "He’s meeting me here. Said he had to take care of something first.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 239.216253647685;
tmp_speak.options_wy = 100.71702878373762;
tmp_speak.options_w = 146.9697885196375;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_03";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_03";
{
tmp_speak.primary = false;
tmp_speak.wx = -10.999999999910159;
tmp_speak.wy = 344.5000000003081;
tmp_speak.w = 224;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Wells was wrong. It’s not a basketball jersey!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_03.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_04";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_04";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_04";
{
tmp_speak.primary = false;
tmp_speak.wx = 158.50000001387514;
tmp_speak.wy = 370.000000047556;
tmp_speak.w = 176;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Oh really? How do you know?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_04.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_05";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_05";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_05";
{
tmp_speak.primary = false;
tmp_speak.wx = -79.9999999999952;
tmp_speak.wy = 439.0000000000173;
tmp_speak.w = 336;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I checked the old jerseys at the basketball Center! The tunic looks totally different. And the women’s team didn’t even start until 1974.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_05.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_06";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_06";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_06";
{
tmp_speak.primary = false;
tmp_speak.wx = 167.50000000000006;
tmp_speak.wy = 367;
tmp_speak.w = 161;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Do you have any other leads?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_06.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_07";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_07";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_07";
{
tmp_speak.primary = false;
tmp_speak.wx = 28.00000000000007;
tmp_speak.wy = 341.5;
tmp_speak.w = 210;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Yes! I found this on the tunic.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_07.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_08";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_08";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_08";
{
tmp_speak.primary = false;
tmp_speak.wx = 215.50000000000006;
tmp_speak.wy = 367;
tmp_speak.w = 106;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Intriguing. What is it?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_08.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_09";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_09";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_09";
{
tmp_speak.primary = false;
tmp_speak.wx = 2.5000000000000355;
tmp_speak.wy = 308.5;
tmp_speak.w = 229;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "A dry cleaning receipt!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_09.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_10";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_10";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_10";
{
tmp_speak.primary = false;
tmp_speak.wx = 143.50000000000003;
tmp_speak.wy = 362.5;
tmp_speak.w = 182;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Who did the receipt belong to?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_10.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_11";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_11";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_11";
{
tmp_speak.primary = false;
tmp_speak.wx = 26.50000000000012;
tmp_speak.wy = 313;
tmp_speak.w = 182;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Theodora Youmans!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_11.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_12";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_12";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_12";
{
tmp_speak.primary = false;
tmp_speak.wx = 89.50000000000006;
tmp_speak.wy = 370;
tmp_speak.w = 220;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hmm. Sounds familiar. Who was she?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_12.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_13";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_13";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_13";
{
tmp_speak.primary = false;
tmp_speak.wx = 58.00000000000012;
tmp_speak.wy = 296.4999999999999;
tmp_speak.w = 132;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "A suffragist!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_13.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_scene.raw_notifications = [
];
tmp_scene.unlocks = [
"tunic.humanecology.frontdesk.drycleaners",
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
tmp_room.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_room.target_start_wx = 262.00011508808285;
tmp_room.target_start_wy = -142.99999999999994;
tmp_room.raw_notifications = [
];
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
tmp_person.wx = -129.4004012505804;
tmp_person.wy = 9.499999999999972;
tmp_person.wz = 0;
tmp_person.act_wx = 194.67917351796666;
tmp_person.act_wy = 20.999999999999996;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 64.95803294402975;
tmp_person.hover_icon_wy = 100.99999999999999;
tmp_person.animcycle_id = "cleaner";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.hub";
{
tmp_speak.primary = true;
tmp_speak.wx = -113.86646775955367;
tmp_speak.wy = 261;
tmp_speak.w = 300.9942688897165;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "cleaner";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Welcome to Squeaky Cleaners! How can I help you?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 24.49999846531547;
tmp_speak.options_wy = 154;
tmp_speak.options_w = 229;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.hub.goodbye";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "Nevermind!";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.hub.inquire_slip";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I was just wondering…";
tmp_option.target_speak = "slip01";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip01";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip01";
{
tmp_speak.primary = false;
tmp_speak.wx = -145;
tmp_speak.wy = 287.99999999999994;
tmp_speak.w = 305;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I see the problem. Dirt, grass stains, ice cream. You need the heavy-duty wash.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip01.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip02";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip02";
{
tmp_speak.primary = false;
tmp_speak.wx = 16.00000000000001;
tmp_speak.wy = 199;
tmp_speak.w = 211;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "No thanks. I need to figure out who this slip belonged to.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip03";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip03";
{
tmp_speak.primary = false;
tmp_speak.wx = -158.00000000000006;
tmp_speak.wy = 264;
tmp_speak.w = 256;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Oh… well… I can't show our log books to just anybody.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 27.00000000000002;
tmp_speak.options_wy = 171.99999999999997;
tmp_speak.options_w = 312;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "please1";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip03.please1";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? I won't tell anybody!";
tmp_option.target_speak = "slip04";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "please2";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip03.please2";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? It's for my Grampa Leo… he's a historian.";
tmp_option.target_speak = "slip05";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip04";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip04";
{
tmp_speak.primary = false;
tmp_speak.wx = -173;
tmp_speak.wy = 249;
tmp_speak.w = 227;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Sorry. Rules are rules.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 27.00000000000002;
tmp_speak.options_wy = 168.99999999999994;
tmp_speak.options_w = 313;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "please2";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip04.please2";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? It's for my Grampa Leo… he's a historian.";
tmp_option.target_speak = "slip05";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip05";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip05";
{
tmp_speak.primary = false;
tmp_speak.wx = -172;
tmp_speak.wy = 264.99999999999994;
tmp_speak.w = 159;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Leo… you don't mean Leopold?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip05.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip06";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip06";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip06";
{
tmp_speak.primary = false;
tmp_speak.wx = 14.000000000000007;
tmp_speak.wy = 136.99999999999997;
tmp_speak.w = 159;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Yep, that's him.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip06.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip07";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip07";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip07";
{
tmp_speak.primary = false;
tmp_speak.wx = -199;
tmp_speak.wy = 267.99999999999994;
tmp_speak.w = 353;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Your gramps is my favorite customer! Always full of stories. Poor guy…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip07.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip08";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip08";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip08";
{
tmp_speak.primary = false;
tmp_speak.wx = 13.000000000000007;
tmp_speak.wy = 128.00000000000003;
tmp_speak.w = 197;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "What do you mean?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip08.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip09";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip09";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip09";
{
tmp_speak.primary = false;
tmp_speak.wx = -198;
tmp_speak.wy = 273;
tmp_speak.w = 275;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "He came in last week. I found this in his jacket pocket.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip09.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip10";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip10";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip10";
{
tmp_speak.primary = false;
tmp_speak.wx = 9.000000000000004;
tmp_speak.wy = 183.99999999999994;
tmp_speak.w = 294;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "… Missing paperwork? This doesn't make sense! Grampa's always so careful with his work.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip10.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip11";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip11";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip11";
{
tmp_speak.primary = false;
tmp_speak.wx = -178;
tmp_speak.wy = 269;
tmp_speak.w = 188;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Guess he's losing track of things.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip11.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip12";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip12";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip12";
{
tmp_speak.primary = false;
tmp_speak.wx = 11.000000000000005;
tmp_speak.wy = 161.99999999999997;
tmp_speak.w = 218;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "If I don't figure this out, he could lose his job!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip12.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip13";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip13";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip13";
{
tmp_speak.primary = false;
tmp_speak.wx = -198;
tmp_speak.wy = 285.99999999999994;
tmp_speak.w = 190;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Here's the log book. Go ahead, take a peek.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip13.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = ">";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
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
tmp_object.wx = 66.00000000000001;
tmp_object.wy = 100;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "logbook";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
"tunic.drycleaner.frontdesk.worker.slip13",
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.drycleaner.frontdesk.logbook.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "logbook_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_scene.raw_notifications = [
];
tmp_scene.unlocks = [
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "basement";
tmp_room.fqid = "tunic.historicalsociety.basement";
{
tmp_room.primary = false;
tmp_room.ww = 1000;
tmp_room.wh = 680;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_hallway";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-49.499999999999886, wy:-136.49999999999977, ww:707.0000000000001, wh:395.0000000000001 },
];
tmp_room.lights = [
{wx:340, wy:242.5, ww:51.99999999999998, wh:24.999999999999993 },
];
tmp_room.shadows = [
{wx:-14.500000000000057, wy:-262.3999999999999, ww:871, wh:161.99999999999997 },
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = -300;
tmp_room.target_start_wy = -77.00000000000001;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset";
tmp_porthole.fqid = "tunic.historicalsociety.basement.tocloset";
{
tmp_porthole.ww = 116.00000000000009;
tmp_porthole.wh = 214.00000000000006;
tmp_porthole.wx = -68.02931928260352;
tmp_porthole.wy = 119.9988152229082;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "closet";
tmp_porthole.target_start_wx = -374.75951624996645;
tmp_porthole.target_start_wy = -34.4078948742569;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset_dirty";
tmp_porthole.fqid = "tunic.historicalsociety.basement.tocloset_dirty";
{
tmp_porthole.ww = 116.00000000000009;
tmp_porthole.wh = 214.00000000000006;
tmp_porthole.wx = 154.9999999731874;
tmp_porthole.wy = 113.99999999891651;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "closet_dirty";
tmp_porthole.target_start_wx = -374.75951624996645;
tmp_porthole.target_start_wy = -34.4078948742569;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.historicalsociety.basement.toentry";
{
tmp_porthole.ww = 102;
tmp_porthole.wh = 489.0000000000001;
tmp_porthole.wx = -398.0000000000026;
tmp_porthole.wy = 85.49999999999989;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 32;
tmp_porthole.act_wy = -130;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 59;
tmp_porthole.hover_icon_wy = -3;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 581.1727590073484;
tmp_porthole.target_start_wy = -3.124616842446756;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fgpipes";
tmp_inert.fqid = "tunic.historicalsociety.basement.fgpipes";
{
tmp_inert.ww = 1008.9370390464723;
tmp_inert.wh = 914.0043171567542;
tmp_inert.wx = -32.18309946356959;
tmp_inert.wy = 42.28041040300866;
tmp_inert.wz = 999;
tmp_inert.g = 0.4;
tmp_inert.animcycle_id = "fgpipes";
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
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "intro";
tmp_cutscene.fqid = "tunic.historicalsociety.closet.intro";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 10;
tmp_cutscene.wh = 10;
tmp_cutscene.wx = 10;
tmp_cutscene.wy = 10;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.unlocks = [
];
tmp_cutscene.relocks = [
];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 400;
tmp_cutscene_command.wy = -200;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "gramps";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -353.9914052226322;
tmp_cutscene_command.wy = 4.685313829772184;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_WAIT;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = 2;
tmp_cutscene_command.end_t = 0;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 336.1178252794906;
tmp_cutscene_command.wy = -45.7487331224705;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "teddy";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 8;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
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
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
"tunic.historicalsociety.closet.gramps.intro_0_cs_5",
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_0";
{
tmp_speak.primary = 1;
tmp_speak.wx = -359;
tmp_speak.wy = 249;
tmp_speak.w = 283;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...and then, the Eagle Company marched off to battle,";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_1";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_1";
{
tmp_speak.primary = false;
tmp_speak.wx = -362.00000000000006;
tmp_speak.wy = 296;
tmp_speak.w = 213;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...and Old Abe became the most famous soldier in the Union!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
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
tmp_speak.raw_atext = "Wow! An eagle in the army?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_3";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_3";
{
tmp_speak.primary = false;
tmp_speak.wx = -149.6655164034023;
tmp_speak.wy = -31.98848116646402;
tmp_speak.w = 203;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "What happened next?!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = -285.0787849331714;
tmp_speak.options_wy = 71.91061968408266;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_4";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_4";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_4";
{
tmp_speak.primary = false;
tmp_speak.wx = -359.8442770352371;
tmp_speak.wy = 221.45842041312287;
tmp_speak.w = 20;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -304.576136087485;
tmp_speak.options_wy = -68.81594167679211;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
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
tmp_speak.wy = 249.88850546780083;
tmp_speak.w = 282;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I'll have to tell you the rest later- or I'll be late to my meeting!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -330.7717132442285;
tmp_speak.options_wy = 1.0389307411907944;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_6";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_6";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_6";
{
tmp_speak.primary = false;
tmp_speak.wx = -360.7265613608749;
tmp_speak.wy = 249.2628432563792;
tmp_speak.w = 172;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Grab your stuff and meet me upstairs!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_6.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
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
tmp_person.ww = 117.17960669467911;
tmp_person.wh = 66.03035396647023;
tmp_person.wx = 519.952742113279;
tmp_person.wy = -163.06261370005947;
tmp_person.wz = 0;
tmp_person.act_wx = -120.0008846143378;
tmp_person.act_wy = -63.00001416167618;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 51.6980142932689;
tmp_person.hover_icon_wy = 23.995165550000877;
tmp_person.animcycle_id = "teddy";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0";
{
tmp_speak.primary = 10;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.closet.teddy.intro_0_cs_0",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_1";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_1";
{
tmp_speak.primary = false;
tmp_speak.wx = 186.48008999415615;
tmp_speak.wy = -9.978884071925954;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_2";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_2";
{
tmp_speak.primary = false;
tmp_speak.wx = 213.87791314612574;
tmp_speak.wy = -7.30177416656651;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_3";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_3";
{
tmp_speak.primary = false;
tmp_speak.wx = 503.8053463021331;
tmp_speak.wy = -48.413268530215525;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_4";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_4";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_4";
{
tmp_speak.primary = false;
tmp_speak.wx = 191.60354799515318;
tmp_speak.wy = -9.50264884568709;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_5";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_5";
{
tmp_speak.primary = 1;
tmp_speak.wx = 503.99470230862664;
tmp_speak.wy = -54.625662211421684;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "notebook";
tmp_object.fqid = "tunic.historicalsociety.closet.notebook";
{
tmp_object.ww = 99.99999999999999;
tmp_object.wh = 99.99999999999999;
tmp_object.wx = -906.1699383473281;
tmp_object.wy = -261.8594471586292;
tmp_object.wz = 0.12;
tmp_object.act_wx = 63;
tmp_object.act_wy = 7;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 35.84897967830983;
tmp_object.hover_icon_wy = 43.00093435578584;
tmp_object.animcycle_id = "notebook_object";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
"Here's my notebook!",
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
"tunic.historicalsociety.closet.notebook",
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet.notebook.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "notebook";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_object = new object();
tmp_object.id = "retirement_letter";
tmp_object.fqid = "tunic.historicalsociety.closet.retirement_letter";
{
tmp_object.ww = 75.96120312606216;
tmp_object.wh = 43.70875183001083;
tmp_object.wx = -602.2304427458864;
tmp_object.wy = -32.13363429074393;
tmp_object.wz = 0.11;
tmp_object.act_wx = -61.12301336573512;
tmp_object.act_wy = -32.01681652490887;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 33.63053029083767;
tmp_object.hover_icon_wy = 26.87826993962551;
tmp_object.animcycle_id = "retirement_letter";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet.retirement_letter.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "retirement_letter_closeup";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
"Oh no! Retirement? That's not fair!",
"Grampa loves this place!",
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_observation = new observation();
tmp_observation.id = "doorblock";
tmp_observation.fqid = "tunic.historicalsociety.closet.doorblock";
{
tmp_observation.ww = 192.99999999922755;
tmp_observation.wh = 312.99999999997175;
tmp_observation.wx = -353.5349141682593;
tmp_observation.wy = 147.05942951322734;
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
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
"tunic.historicalsociety.closet.notebook",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tobasement";
tmp_porthole.fqid = "tunic.historicalsociety.closet.tobasement";
{
tmp_porthole.ww = 183.0013270648818;
tmp_porthole.wh = 304.9987868792919;
tmp_porthole.wx = -354.2595672433551;
tmp_porthole.wy = 146.62020075243996;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = 107.99999999999996;
tmp_porthole.target_start_wy = 31.000000000000018;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.wx = -154.6498065812714;
tmp_inert.wy = -40.670959022911916;
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
tmp_inert.wx = 584.561579617127;
tmp_inert.wy = 38.4489603959309;
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
tmp_room.id = "closet_dirty";
tmp_room.fqid = "tunic.historicalsociety.closet_dirty";
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
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.historicalsociety.closet_dirty.gramps";
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
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
"tunic.historicalsociety.closet.gramps.intro_0_cs_5",
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_0";
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_1";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_1";
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_2";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_2";
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_3";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_3";
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_4";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_4";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_4";
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_5";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_5";
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.gramps.intro_0_cs_5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "teddy";
tmp_person.fqid = "tunic.historicalsociety.closet_dirty.teddy";
{
tmp_person.ww = 117.17960669467911;
tmp_person.wh = 66.03035396647023;
tmp_person.wx = 519.952742113279;
tmp_person.wy = -163.06261370005947;
tmp_person.wz = 0;
tmp_person.act_wx = -120.0008846143378;
tmp_person.act_wy = -63.00001416167618;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 51.6980142932689;
tmp_person.hover_icon_wy = 23.995165550000877;
tmp_person.animcycle_id = "teddy";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_0";
{
tmp_speak.primary = 10;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.closet.teddy.intro_0_cs_0",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_1";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_1";
{
tmp_speak.primary = false;
tmp_speak.wx = 238.1640049963171;
tmp_speak.wy = 2.0442158156241845;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_2";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_2";
{
tmp_speak.primary = false;
tmp_speak.wx = 268.87791314612576;
tmp_speak.wy = -4.301774166566503;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_3";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_3";
{
tmp_speak.primary = false;
tmp_speak.wx = 503.8053463021331;
tmp_speak.wy = -48.413268530215525;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_4";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_4";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_4";
{
tmp_speak.primary = false;
tmp_speak.wx = 242.60354799515318;
tmp_speak.wy = -5.502648845687119;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_5";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_5";
{
tmp_speak.primary = 1;
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.teddy.intro_0_cs_5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "newspaper";
tmp_object.fqid = "tunic.historicalsociety.closet_dirty.newspaper";
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
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet_dirty.newspaper.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "null";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_object = new object();
tmp_object.id = "notebook";
tmp_object.fqid = "tunic.historicalsociety.closet_dirty.notebook";
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
tmp_object.raw_notifications = [
"Here's my notebook!",
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
"tunic.historicalsociety.closet.notebook",
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet_dirty.notebook.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_observation = new observation();
tmp_observation.id = "doorblock";
tmp_observation.fqid = "tunic.historicalsociety.closet_dirty.doorblock";
{
tmp_observation.ww = 192.99999999922755;
tmp_observation.wh = 312.99999999997175;
tmp_observation.wx = -353.5349141682593;
tmp_observation.wy = 147.05942951322734;
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
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
"tunic.historicalsociety.closet.notebook",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "photo";
tmp_observation.fqid = "tunic.historicalsociety.closet_dirty.photo";
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
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "scarf";
tmp_observation.fqid = "tunic.historicalsociety.closet_dirty.scarf";
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
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tobasement";
tmp_porthole.fqid = "tunic.historicalsociety.closet_dirty.tobasement";
{
tmp_porthole.ww = 183.0013270648818;
tmp_porthole.wh = 304.9987868792919;
tmp_porthole.wx = -354.2595672433551;
tmp_porthole.wy = 146.62020075243996;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = 107.99999999999996;
tmp_porthole.target_start_wy = 31.000000000000018;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.chair";
{
tmp_inert.ww = 288.7991253327396;
tmp_inert.wh = 291.62036450312695;
tmp_inert.wx = -154.6498065812714;
tmp_inert.wy = -40.670959022911916;
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
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.desk";
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
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.fgdesk";
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
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.fgpipes";
{
tmp_inert.ww = 917.8841312272183;
tmp_inert.wh = 853.8504981773996;
tmp_inert.wx = 584.561579617127;
tmp_inert.wy = 38.4489603959309;
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
{wx:71.12826086956488, wy:-241.2801242236024, ww:1187.7378881987577, wh:470.5999999999999 },
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
tmp_room.raw_notifications = [
];
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
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.collection.tunic.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "tunic_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.raw_notifications = [
];
tmp_zone.unlocks = [
];
tmp_zone.relocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.raw_notifications = [
];
tmp_zone.unlocks = [
];
tmp_zone.relocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.ww = 153.87679637483404;
tmp_porthole.wh = 572.4719217920203;
tmp_porthole.wx = 687.3406850310062;
tmp_porthole.wy = -17.26626392631357;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -21.65419677812778;
tmp_porthole.act_wy = -114.22244306336432;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = -903.2438530313667;
tmp_porthole.target_start_wy = -94.39707135640175;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "dust";
tmp_inert.fqid = "tunic.historicalsociety.collection.dust";
{
tmp_inert.ww = 100;
tmp_inert.wh = 100;
tmp_inert.wx = 100;
tmp_inert.wy = 100;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "fgdust";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgartifacts";
tmp_inert.fqid = "tunic.historicalsociety.collection.fgartifacts";
{
tmp_inert.ww = 100;
tmp_inert.wh = 100;
tmp_inert.wx = 100;
tmp_inert.wy = 100;
tmp_inert.wz = 999;
tmp_inert.g = 0.1;
tmp_inert.animcycle_id = "fgartifacts";
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
{wx:-58.46881985379787, wy:-285.73075088101905, ww:1769.5494376878196, wh:580.1788249790067 },
];
tmp_room.lights = [
{wx:606.2655502392346, wy:297.6909090909091, ww:63.28443135811556, wh:38.25454545454535 },
];
tmp_room.shadows = [
{wx:823.8303840997834, wy:-94.66594879303324, ww:827.579765922105, wh:498.90981818191256 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 10.349635627530388;
tmp_room.target_start_wy = -548.64;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "groupconvo";
tmp_cutscene.fqid = "tunic.historicalsociety.entry.groupconvo";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 564.0836363636361;
tmp_cutscene.wh = 492.4356363636362;
tmp_cutscene.wx = 131.31309090909107;
tmp_cutscene.wy = 35.23963636363638;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.unlocks = [
];
tmp_cutscene.relocks = [
];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "boss";
tmp_person.fqid = "tunic.historicalsociety.entry.boss";
{
tmp_person.ww = 166.762908720071;
tmp_person.wh = 345.88290909851037;
tmp_person.wx = 317.3865236070164;
tmp_person.wy = 95.92908700775376;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "boss";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.boss.hub";
{
tmp_speak.primary = false;
tmp_speak.wx = 100;
tmp_speak.wy = 100;
tmp_speak.w = 100;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "hub";
tmp_option.fqid = "tunic.historicalsociety.entry.boss.hub.hub";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.historicalsociety.entry.gramps";
{
tmp_person.ww = 176.53309090909076;
tmp_person.wh = 337.7410909090905;
tmp_person.wx = -57.16530107597346;
tmp_person.wy = -33.52817409153707;
tmp_person.wz = 0.1;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.gramps.hub";
{
tmp_speak.primary = false;
tmp_speak.wx = 100;
tmp_speak.wy = 100;
tmp_speak.w = 100;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "hub";
tmp_option.fqid = "tunic.historicalsociety.entry.gramps.hub.hub";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "wells";
tmp_person.fqid = "tunic.historicalsociety.entry.wells";
{
tmp_person.ww = 257.9466452208867;
tmp_person.wh = 380.07886515192297;
tmp_person.wx = 105.20668734536048;
tmp_person.wy = 84.64947342213475;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "youngboy";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.wells.hub";
{
tmp_speak.primary = false;
tmp_speak.wx = 100;
tmp_speak.wy = 100;
tmp_speak.w = 100;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "hub";
tmp_option.fqid = "tunic.historicalsociety.entry.wells.hub.hub";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "tobasement";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tobasement";
{
tmp_porthole.ww = 355.54669929135713;
tmp_porthole.wh = 590.3083054640749;
tmp_porthole.wx = 603.8251613784361;
tmp_porthole.wy = 248.0542443995854;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -48.29829959514169;
tmp_porthole.act_wy = -200.092955465587;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = -34.49878542510121;
tmp_porthole.hover_icon_wy = -100.0464777327935;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = -371;
tmp_porthole.target_start_wy = -48.000000000000014;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 7.948666912035332;
tmp_porthole.act_wy = -130.13163636363635;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "collection";
tmp_porthole.target_start_wx = 621.9243073212195;
tmp_porthole.target_start_wy = -136.7670926438998;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.wx = -85.96453220463718;
tmp_porthole.wy = -555.3585454545455;
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.ww = 404.61578072895446;
tmp_porthole.wh = 675.0683636504855;
tmp_porthole.wx = 197.14968599827517;
tmp_porthole.wy = 289.09932434259326;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 2.374022819286067;
tmp_porthole.act_wy = -335.06909090909085;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = -165.5941700404858;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fgdust";
tmp_inert.fqid = "tunic.historicalsociety.entry.fgdust";
{
tmp_inert.ww = 1179.5969842368888;
tmp_inert.wh = 334.48455629843863;
tmp_inert.wx = -376.7094034420604;
tmp_inert.wy = 249.799638297336;
tmp_inert.wz = 0;
tmp_inert.g = 0.3;
tmp_inert.animcycle_id = "fgdust";
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
tmp_room.raw_notifications = [
];
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
tmp_person.act_wx = 142.59470153053064;
tmp_person.act_wy = -49.00000000000001;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "archivist";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "badger01";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.badger01";
{
tmp_speak.primary = false;
tmp_speak.wx = -232.00000000000003;
tmp_speak.wy = 189.99999999999997;
tmp_speak.w = 229;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Sorry, no badgers here.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.badger01.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "badger02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "badger02";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.badger02";
{
tmp_speak.primary = false;
tmp_speak.wx = -47.000000000000036;
tmp_speak.wy = 108.99999999999997;
tmp_speak.w = 145;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Are you sure?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.badger02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "badger03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "badger03";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.badger03";
{
tmp_speak.primary = false;
tmp_speak.wx = -205.00000000000003;
tmp_speak.wy = 231.99999999999994;
tmp_speak.w = 170;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I think I'd notice a badger, kid.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.badger03.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "hub1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "busy1";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.busy1";
{
tmp_speak.primary = 99;
tmp_speak.wx = -262.936764964224;
tmp_speak.wy = 252;
tmp_speak.w = 281;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Didn't you hear me? I'm busy. Now if only I could read this thing… blasted tiny letters…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.frontdesk.archivist.busy1",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.busy1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "busy2";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.busy2";
{
tmp_speak.primary = 98;
tmp_speak.wx = -258.00000000403656;
tmp_speak.wy = 216.99999999999997;
tmp_speak.w = 269;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I used to have a magnifying glass around here…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.frontdesk.magnify",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.busy2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finish1_01";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_01";
{
tmp_speak.primary = false;
tmp_speak.wx = -26.000000000000018;
tmp_speak.wy = 154.99999999999994;
tmp_speak.w = 229;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "If you find Teddy, please call Grampa Leo! He'll know what to do.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_01.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "finish1_02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finish1_02";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_02";
{
tmp_speak.primary = false;
tmp_speak.wx = -260;
tmp_speak.wy = 246;
tmp_speak.w = 265;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Leo? Leopold, you mean? Weren't they thinking about getting rid of him?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "finish1_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finish1_03";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_03";
{
tmp_speak.primary = false;
tmp_speak.wx = -36.00000000000003;
tmp_speak.wy = 112.99999999999996;
tmp_speak.w = 277;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "No way! Not while I'm around.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_03.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub1";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.hub1";
{
tmp_speak.primary = 96;
tmp_speak.wx = -217.0000000080966;
tmp_speak.wy = 248.99999999999994;
tmp_speak.w = 175;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "What d'you need?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -38.00000000022385;
tmp_speak.options_wy = 188;
tmp_speak.options_w = 307;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.drycleaner.frontdesk.logbook.hub",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "inquire_badger";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub1.inquire_badger";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I'm looking for my badger, Teddy. He's been kidnapped!";
tmp_option.target_speak = "badger01";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub1.inquire_slip";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Do you know what this is? It was pinned to an old tunic.";
tmp_option.target_speak = "slip";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "nevermind";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub1.nevermind";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Nevermind.";
tmp_option.target_speak = "finish1_01";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "log";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.log";
{
tmp_speak.primary = 95;
tmp_speak.wx = -5.523623693379676;
tmp_speak.wy = 166.80000000000004;
tmp_speak.w = 289.69588850174216;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "You'll want to try the library… They'll have all sorts of info on Youmans. I'll dig up some stuff around here.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 197.2809059233447;
tmp_speak.options_wy = 22.99999999999995;
tmp_speak.options_w = 84.7984668989547;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.library.microfiche.newspaper.hub",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.log.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Ok I will!";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "magnify";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.magnify";
{
tmp_speak.primary = 97;
tmp_speak.wx = -242.44615446273787;
tmp_speak.wy = 223.99999999999997;
tmp_speak.w = 255;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Now that's more like it! Guess I can spare a minute.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.frontdesk.archivist.magnify",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.magnify.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "hub1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "newspaper";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.newspaper";
{
tmp_speak.primary = 94;
tmp_speak.wx = 13.5;
tmp_speak.wy = 169;
tmp_speak.w = 359;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "There's more info at the Stacks. Here's a call number you can use.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 210.5;
tmp_speak.options_wy = 16.999999999999986;
tmp_speak.options_w = 161;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.newspaper.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Thanks a bunch!";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.slip";
{
tmp_speak.primary = false;
tmp_speak.wx = -280;
tmp_speak.wy = 283;
tmp_speak.w = 312;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "A tunic? Try the Human Ecology building. You'll be able to talk to some textile experts at the university.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 158.50425087108016;
tmp_speak.options_wy = 27.000000000000014;
tmp_speak.options_w = 200.20961672473868;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.slip.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "hub1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_01";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_01";
{
tmp_speak.primary = 100;
tmp_speak.wx = -203.00009641483433;
tmp_speak.wy = 194;
tmp_speak.w = 144;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Are you lost?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.frontdesk.archivist.start1_01",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_01.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_02";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_02";
{
tmp_speak.primary = false;
tmp_speak.wx = -44.05251298977522;
tmp_speak.wy = 129;
tmp_speak.w = 221;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Actually, I'm on a quest. I need your help!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_03";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_03";
{
tmp_speak.primary = false;
tmp_speak.wx = -238.00000000000009;
tmp_speak.wy = 258.99999999999994;
tmp_speak.w = 236;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Wait a minute… you're that troublemaker Wells was talking about.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_03.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_04";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_04";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_04";
{
tmp_speak.primary = false;
tmp_speak.wx = -40.000000499429945;
tmp_speak.wy = 129.99999999999997;
tmp_speak.w = 218;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I'm not a troublemaker. My friend is missing!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_04.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_05";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_05";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_05";
{
tmp_speak.primary = false;
tmp_speak.wx = -34.00000000013807;
tmp_speak.wy = 133;
tmp_speak.w = 185;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Whatever. Can you help me or not?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_05.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_06";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_06";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_06";
{
tmp_speak.primary = false;
tmp_speak.wx = -257.00000000000006;
tmp_speak.wy = 226.99999999999997;
tmp_speak.w = 281;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hmm. Wish I could help. But I don't have time for kid stuff.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_06.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_07";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_07";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_07";
{
tmp_speak.primary = false;
tmp_speak.wx = -236.00000000000009;
tmp_speak.wy = 229.99999999999994;
tmp_speak.w = 238;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hmmph. Wells was right. Kids these days.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_07.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_observation = new observation();
tmp_observation.id = "magnify";
tmp_observation.fqid = "tunic.historicalsociety.frontdesk.magnify";
{
tmp_observation.ww = 100;
tmp_observation.wh = 100;
tmp_observation.wx = 123.99999999999997;
tmp_observation.wy = 9.000000000000014;
tmp_observation.wz = 0;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I bet the Archivist could use this!";
tmp_observation.blip_wx = 100;
tmp_observation.blip_wy = 100;
tmp_observation.blip_w = 100;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tostacks";
tmp_porthole.fqid = "tunic.historicalsociety.frontdesk.tostacks";
{
tmp_porthole.ww = 767;
tmp_porthole.wh = 86.99999999999999;
tmp_porthole.wx = 46.5;
tmp_porthole.wy = -299.50000000000006;
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fgoffice";
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.fgoffice";
{
tmp_inert.ww = 837;
tmp_inert.wh = 135;
tmp_inert.wx = 25.499999999999886;
tmp_inert.wy = -288.5;
tmp_inert.wz = 999;
tmp_inert.g = 0.1;
tmp_inert.animcycle_id = "fgoffice";
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
tmp_room.id = "stacks";
tmp_room.fqid = "tunic.historicalsociety.stacks";
{
tmp_room.primary = false;
tmp_room.ww = 1100;
tmp_room.wh = 695;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_stacks";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:1.0983803239353165, wy:-175.46889622075582, ww:562.2493101379723, wh:431.4884823035393 },
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
tmp_room.raw_notifications = [
];
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
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
"tunic.historicalsociety.frontdesk.archivist.newspaper",
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.stacks.journalsaz.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "journalsaz_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.historicalsociety.stacks.toentry";
{
tmp_porthole.ww = 658.7506898620272;
tmp_porthole.wh = 117.5736652669466;
tmp_porthole.wx = 19.401619676064854;
tmp_porthole.wy = -325.6754349130175;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 270.2744446093198;
tmp_porthole.target_start_wy = -60.01625878934189;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.ww = 109.79346130773845;
tmp_porthole.wh = 232.63611277744448;
tmp_porthole.wx = -7.395050989802094;
tmp_porthole.wy = 105.41307738452316;
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fgcarts";
tmp_inert.fqid = "tunic.historicalsociety.stacks.fgcarts";
{
tmp_inert.ww = 870.0000000000002;
tmp_inert.wh = 214;
tmp_inert.wx = 2.483609070950479;
tmp_inert.wy = -272.9478270719087;
tmp_inert.wz = 999;
tmp_inert.g = 0.1;
tmp_inert.animcycle_id = "fgcarts";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
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
tmp_scene.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.humanecology.frontdesk.worker";
{
tmp_person.ww = 201.0001201081107;
tmp_person.wh = 273.00000000000006;
tmp_person.wx = -183.4790369791401;
tmp_person.wy = -3.699999999999932;
tmp_person.wz = 0;
tmp_person.act_wx = 153.9461063577049;
tmp_person.act_wy = -28;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 27.999999999999996;
tmp_person.hover_icon_wy = 28;
tmp_person.animcycle_id = "ecologist";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "badger1";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.badger1";
{
tmp_speak.primary = 97;
tmp_speak.wx = -57.19179528397005;
tmp_speak.wy = 188.99999999999997;
tmp_speak.w = 210;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "You haven't seen any badgers around here, have you?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.badger1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "badger2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "badger2";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.badger2";
{
tmp_speak.primary = false;
tmp_speak.wx = -292.00035021557676;
tmp_speak.wy = 277.99999999999994;
tmp_speak.w = 333;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Badgers? No… but I hear the museum's got one on the loose. Smart little critter, by the sounds of it.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.badger2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "badger3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "badger3";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.badger3";
{
tmp_speak.primary = false;
tmp_speak.wx = -56.000000000495696;
tmp_speak.wy = 161.99999999999997;
tmp_speak.w = 207;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Yep. And super good at checkers.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.badger3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "better";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.better";
{
tmp_speak.primary = 98;
tmp_speak.wx = -300.44849052355795;
tmp_speak.wy = 274.99999999999994;
tmp_speak.w = 282;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Ahhhh. Much better. Come to think of it, I've got a file of dry cleaners here. Take a look!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.humanecology.frontdesk.worker.better",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.better.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro1";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro1";
{
tmp_speak.primary = 100;
tmp_speak.wx = -149.00000063243886;
tmp_speak.wy = 297;
tmp_speak.w = 334;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How lovely, a visitor! Take a look around. Would you care for some tea?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -55.00000827480898;
tmp_speak.options_wy = 171.99999999999997;
tmp_speak.options_w = 295;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.humanecology.frontdesk.worker.intro1",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next1";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro1.next1";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Well, maybe one cup… but I need to ask you something first.";
tmp_option.target_speak = "intro2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "next2";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro1.next2";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I'm sort of in a hurry.";
tmp_option.target_speak = "intro2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro2";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro2";
{
tmp_speak.primary = false;
tmp_speak.wx = -178;
tmp_speak.wy = 277;
tmp_speak.w = 267;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Oh, all right. How can I help?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro3";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro3";
{
tmp_speak.primary = false;
tmp_speak.wx = -13.000000000000007;
tmp_speak.wy = 206.99999999999997;
tmp_speak.w = 183;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Do you know what this slip is?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro4";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro4";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro4";
{
tmp_speak.primary = false;
tmp_speak.wx = -218;
tmp_speak.wy = 281;
tmp_speak.w = 311;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Looks like a dry cleaning receipt.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro5";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro5";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro5";
{
tmp_speak.primary = false;
tmp_speak.wx = -39.00000000000007;
tmp_speak.wy = 211;
tmp_speak.w = 247;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I need to find all the dry cleaners that were around in 1916! Can you help me?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro6";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro6";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro6";
{
tmp_speak.primary = 99;
tmp_speak.wx = -231;
tmp_speak.wy = 309;
tmp_speak.w = 246;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Oh, I don't know… it's so hard to think on an empty stomach…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.humanecology.frontdesk.cookies",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro6.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_observation = new observation();
tmp_observation.id = "cookies";
tmp_observation.fqid = "tunic.humanecology.frontdesk.cookies";
{
tmp_observation.ww = 100;
tmp_observation.wh = 100;
tmp_observation.wx = -377;
tmp_observation.wy = 31.000000000000014;
tmp_observation.wz = 0;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I bet the Curator could use these!";
tmp_observation.blip_wx = -506.7235116729863;
tmp_observation.blip_wy = 179.99999999999991;
tmp_observation.blip_w = 165;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
"tunic.humanecology.frontdesk.worker.intro6",
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "drycleaners";
tmp_observation.fqid = "tunic.humanecology.frontdesk.drycleaners";
{
tmp_observation.ww = 100;
tmp_observation.wh = 100;
tmp_observation.wx = 283.0000000057347;
tmp_observation.wy = 45.99999999999996;
tmp_observation.wz = 0;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = -8.999997844033715;
tmp_observation.hover_icon_wy = 3;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "This one was established in 1910!";
tmp_observation.blip_wx = 181.86333001482677;
tmp_observation.blip_wy = 197;
tmp_observation.blip_w = 194;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
"tunic.humanecology.frontdesk.worker.better",
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tohallway";
tmp_porthole.fqid = "tunic.humanecology.frontdesk.tohallway";
{
tmp_porthole.ww = 117.06292803970226;
tmp_porthole.wh = 336.19999999999993;
tmp_porthole.wx = 527.4760794044665;
tmp_porthole.wy = 0.7000000000001023;
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_scene.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "jersey";
tmp_object.fqid = "tunic.kohlcenter.halloffame.jersey";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 523.0000038416794;
tmp_object.wy = 88;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "jersey";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.kohlcenter.halloffame.jersey.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "jersey_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
"This doesn't look anything like the tunic!",
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_object = new object();
tmp_object.id = "oldpictures";
tmp_object.fqid = "tunic.kohlcenter.halloffame.oldpictures";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 415.0004004745276;
tmp_object.wy = 89.00000000000003;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "oldpictures";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.kohlcenter.halloffame.oldpictures.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "oldpictures_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
"The slip I found is from wayyy back in 1916. But the women's team didn't even start until 1974!",
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_scene.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
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
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.library.frontdesk.worker.hub.goodbye";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_log";
tmp_option.fqid = "tunic.library.frontdesk.worker.hub.inquire_log";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "What can you tell me about [historical lady's name]?";
tmp_option.target_speak = "log";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
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
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.library.frontdesk.worker.log.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Alright, thanks!";
tmp_option.target_speak = "hub";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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
tmp_room.raw_notifications = [
];
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
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.library.microfiche.newspaper.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "newspaper_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.wz = -1;
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
tmp_porthole.raw_notifications = [
];
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

