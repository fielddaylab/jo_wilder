
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
tmp_level.avatar_ww = 124.2914274419755;
tmp_level.avatar_wh = 227.189352938386;
tmp_level.familiar_walk_animcycle_id = "teddy_walk";
tmp_level.familiar_idle_animcycle_id = "teddy_idle";
tmp_level.familiar_act_animcycle_id = "teddy_idle";
tmp_level.familiar_ww = 153;
tmp_level.familiar_wh = 90;
tmp_level.familiar_off_wx = 0;
tmp_level.familiar_off_wy = -80;
tmp_level.audio_id = "music";
tmp_level.exit_animcycle_id = "exit";
tmp_level.toolbar_animcycle_id = "null";
tmp_level.toolbar_audio_id = "null";
tmp_level.map_animcycle_id = "map";
tmp_level.map_audio_id = "null";
tmp_level.notebook_animcycle_id = "notebook";
tmp_level.notebook_audio_id = "null";
tmp_level.notebook_next_animcycle_id = "notebook_next";
tmp_level.notebook_prev_animcycle_id = "notebook_prev";
tmp_level.icon_map_animcycle_id = "icon_map";
tmp_level.icon_notebook_animcycle_id = "icon_notebook";
tmp_level.ui_hover_animcycle_id = "hover_ui";
tmp_level.ripple_click_animcycle_id = "click_ripple";
tmp_level.deck_animcycle_ids = [
];
tmp_level.cursor_w = 27;
tmp_level.cursor_h = 31;
tmp_level.hover_w = 56;
tmp_level.hover_h = 56;
tmp_level.notifications_w = 200;
tmp_level.notifications_h = 30;
tmp_level.target_lerp_s = 0.03;
tmp_level.notifications_persistent = 0;
tmp_level.raw_notifications = [
];
tmp_level.raw_notification_ws = [
];
tmp_level.notification_reqs = [[
]];
tmp_level.reqs = [[
]];
tmp_level.notebook_reqs = [[
"tunic.historicalsociety.closet.notebook",
]];
tmp_level.map_reqs = [[
]];
tmp_level.familiar_reqs = [[
"tunic.historicalsociety.cage.unlockdoor",
]];
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivephotos1";
tmp_animcycle.fqid = "tunic.archivephotos1";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivephotos1/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivephotos2";
tmp_animcycle.fqid = "tunic.archivephotos2";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivephotos2/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivephotos3";
tmp_animcycle.fqid = "tunic.archivephotos3";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivephotos3/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist";
tmp_animcycle.fqid = "tunic.archivist";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist_glasses";
tmp_animcycle.fqid = "tunic.archivist_glasses";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist_glasses/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist_glasses/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist_glasses/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist_glasses/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist_glasses/4.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_act/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_angry";
tmp_animcycle.fqid = "tunic.avatar_angry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 50;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_angry/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_happy";
tmp_animcycle.fqid = "tunic.avatar_happy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_happy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_idle";
tmp_animcycle.fqid = "tunic.avatar_idle";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 30;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_idle/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_idle/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_idle/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_idle/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_idle/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_nervous";
tmp_animcycle.fqid = "tunic.avatar_nervous";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 50;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_nervous/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_sad";
tmp_animcycle.fqid = "tunic.avatar_sad";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_sad/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.id = "balcony";
tmp_animcycle.fqid = "tunic.balcony";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/balcony/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/bg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "black";
tmp_animcycle.fqid = "tunic.black";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/black/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "boilerfire";
tmp_animcycle.fqid = "tunic.boilerfire";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 14;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boilerfire/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boilerfire/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boilerfire/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boilerfire/3.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "boss";
tmp_animcycle.fqid = "tunic.boss";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 38;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boss/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boss/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boss/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boss/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boss/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "businesscards";
tmp_animcycle.fqid = "tunic.businesscards";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/businesscards/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cage_door";
tmp_animcycle.fqid = "tunic.cage_door";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cage_door/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cage_fence";
tmp_animcycle.fqid = "tunic.cage_fence";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cage_fence/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cage_fg";
tmp_animcycle.fqid = "tunic.cage_fg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cage_fg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cage_pipes";
tmp_animcycle.fqid = "tunic.cage_pipes";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cage_pipes/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "capitol_crowd";
tmp_animcycle.fqid = "tunic.capitol_crowd";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/capitol_crowd/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "capitol_flag";
tmp_animcycle.fqid = "tunic.capitol_flag";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/capitol_flag/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "capitol_rotunda";
tmp_animcycle.fqid = "tunic.capitol_rotunda";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
