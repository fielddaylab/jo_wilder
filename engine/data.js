
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
tmp_level.familiar_wh = 120;
tmp_level.familiar_off_wx = 0;
tmp_level.familiar_off_wy = -80;
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/capitol_rotunda/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "capitol_tunic";
tmp_animcycle.fqid = "tunic.capitol_tunic";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/capitol_tunic/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "chapter1";
tmp_animcycle.fqid = "tunic.chapter1";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/chapter1/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "chapter2";
tmp_animcycle.fqid = "tunic.chapter2";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/chapter2/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "chapter3";
tmp_animcycle.fqid = "tunic.chapter3";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/chapter3/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "chapter4";
tmp_animcycle.fqid = "tunic.chapter4";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/chapter4/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "chapter5";
tmp_animcycle.fqid = "tunic.chapter5";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/chapter5/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "chapterfin";
tmp_animcycle.fqid = "tunic.chapterfin";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/chapterfin/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner";
tmp_animcycle.fqid = "tunic.cleaner";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 36;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner_card_0";
tmp_animcycle.fqid = "tunic.cleaner_card_0";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner_card_0/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner_card_1";
tmp_animcycle.fqid = "tunic.cleaner_card_1";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner_card_1/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner_card_bingo";
tmp_animcycle.fqid = "tunic.cleaner_card_bingo";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner_card_bingo/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.id = "closet_chair";
tmp_animcycle.fqid = "tunic.closet_chair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closet_chair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "closetshadows";
tmp_animcycle.fqid = "tunic.closetshadows";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 30;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closetshadows/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closetshadows/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closetshadows/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closetshadows/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closetshadows/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closetshadows/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closetshadows/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closetshadows/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/closetshadows/8.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "clueoverlay_flagstiched";
tmp_animcycle.fqid = "tunic.clueoverlay_flagstiched";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/clueoverlay_flagstiched/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "clueoverlay_logbook";
tmp_animcycle.fqid = "tunic.clueoverlay_logbook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/clueoverlay_logbook/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "clueoverlay_microfiche";
tmp_animcycle.fqid = "tunic.clueoverlay_microfiche";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/clueoverlay_microfiche/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "clueoverlay_stacks";
tmp_animcycle.fqid = "tunic.clueoverlay_stacks";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/clueoverlay_stacks/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "clueoverlay_stacksflag";
tmp_animcycle.fqid = "tunic.clueoverlay_stacksflag";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/clueoverlay_stacksflag/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "clueoverlay_theta";
tmp_animcycle.fqid = "tunic.clueoverlay_theta";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/clueoverlay_theta/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "coffeecup";
tmp_animcycle.fqid = "tunic.coffeecup";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/coffeecup/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "coffeecupup";
tmp_animcycle.fqid = "tunic.coffeecupup";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/coffeecupup/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cookie";
tmp_animcycle.fqid = "tunic.cookie";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cookie/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "directory_closeup";
tmp_animcycle.fqid = "tunic.directory_closeup";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/directory_closeup/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.frame_t = 40;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/ecologist/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/ecologist/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/ecologist/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/ecologist/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_archivist_angry";
tmp_animcycle.fqid = "tunic.emote_archivist_angry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_archivist_angry/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_archivist_annoyed";
tmp_animcycle.fqid = "tunic.emote_archivist_annoyed";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_archivist_annoyed/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_archivist_glasses_angry";
tmp_animcycle.fqid = "tunic.emote_archivist_glasses_angry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_archivist_glasses_angry/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_archivist_glasses_annoyed";
tmp_animcycle.fqid = "tunic.emote_archivist_glasses_annoyed";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_archivist_glasses_annoyed/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_archivist_glasses_happy";
tmp_animcycle.fqid = "tunic.emote_archivist_glasses_happy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_archivist_glasses_happy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_archivist_happy";
tmp_animcycle.fqid = "tunic.emote_archivist_happy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_archivist_happy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_archivist_scared";
tmp_animcycle.fqid = "tunic.emote_archivist_scared";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_archivist_scared/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_boss_annoyed";
tmp_animcycle.fqid = "tunic.emote_boss_annoyed";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_boss_annoyed/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_boss_frown";
tmp_animcycle.fqid = "tunic.emote_boss_frown";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_boss_frown/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_boss_happy";
tmp_animcycle.fqid = "tunic.emote_boss_happy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_boss_happy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_cleaner_recall";
tmp_animcycle.fqid = "tunic.emote_cleaner_recall";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_cleaner_recall/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_cleaner_think";
tmp_animcycle.fqid = "tunic.emote_cleaner_think";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_cleaner_think/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_cleaner_worried";
tmp_animcycle.fqid = "tunic.emote_cleaner_worried";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_cleaner_worried/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_flag_explaining";
tmp_animcycle.fqid = "tunic.emote_flag_explaining";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_flag_explaining/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_flag_happy";
tmp_animcycle.fqid = "tunic.emote_flag_happy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_flag_happy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_flag_thinking";
tmp_animcycle.fqid = "tunic.emote_flag_thinking";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_flag_thinking/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_gramps_angry";
tmp_animcycle.fqid = "tunic.emote_gramps_angry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_gramps_angry/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_gramps_sad";
tmp_animcycle.fqid = "tunic.emote_gramps_sad";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_gramps_sad/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_gramps_worried";
tmp_animcycle.fqid = "tunic.emote_gramps_worried";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_gramps_worried/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_jo_angry";
tmp_animcycle.fqid = "tunic.emote_jo_angry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_jo_angry/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_jo_annoyed";
tmp_animcycle.fqid = "tunic.emote_jo_annoyed";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_jo_annoyed/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_jo_happy";
tmp_animcycle.fqid = "tunic.emote_jo_happy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_jo_happy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_jo_worried";
tmp_animcycle.fqid = "tunic.emote_jo_worried";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_jo_worried/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_librarian_happy";
tmp_animcycle.fqid = "tunic.emote_librarian_happy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_librarian_happy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_librarian_surprised";
tmp_animcycle.fqid = "tunic.emote_librarian_surprised";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_librarian_surprised/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_ranger_happy";
tmp_animcycle.fqid = "tunic.emote_ranger_happy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_ranger_happy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_wells_angry";
tmp_animcycle.fqid = "tunic.emote_wells_angry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_wells_angry/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_wells_annoyed";
tmp_animcycle.fqid = "tunic.emote_wells_annoyed";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_wells_annoyed/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "emote_wells_worried";
tmp_animcycle.fqid = "tunic.emote_wells_worried";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/emote_wells_worried/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_activists_img";
tmp_animcycle.fqid = "tunic.entry_activists_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_activists_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_archivistcoffee_img";
tmp_animcycle.fqid = "tunic.entry_archivistcoffee_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_archivistcoffee_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_basketballplaque_img";
tmp_animcycle.fqid = "tunic.entry_basketballplaque_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_basketballplaque_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_cleanercard_img";
tmp_animcycle.fqid = "tunic.entry_cleanercard_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_cleanercard_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_cleanerslip_img";
tmp_animcycle.fqid = "tunic.entry_cleanerslip_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_cleanerslip_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_doodle_0_img";
tmp_animcycle.fqid = "tunic.entry_doodle_0_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_doodle_0_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_doodle_1_img";
tmp_animcycle.fqid = "tunic.entry_doodle_1_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_doodle_1_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_ecologyflag_img";
tmp_animcycle.fqid = "tunic.entry_ecologyflag_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_ecologyflag_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_exhibition_img";
tmp_animcycle.fqid = "tunic.entry_exhibition_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_exhibition_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_expert_img";
tmp_animcycle.fqid = "tunic.entry_expert_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_expert_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_flag_img";
tmp_animcycle.fqid = "tunic.entry_flag_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_flag_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_flagguess_img";
tmp_animcycle.fqid = "tunic.entry_flagguess_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_flagguess_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_flaglady_img";
tmp_animcycle.fqid = "tunic.entry_flaglady_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_flaglady_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_glasses_img";
tmp_animcycle.fqid = "tunic.entry_glasses_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_glasses_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_javajacket_img";
tmp_animcycle.fqid = "tunic.entry_javajacket_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_javajacket_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_key_img";
tmp_animcycle.fqid = "tunic.entry_key_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_key_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_littering_img";
tmp_animcycle.fqid = "tunic.entry_littering_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_littering_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_logbook_img";
tmp_animcycle.fqid = "tunic.entry_logbook_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_logbook_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_microfiche_img";
tmp_animcycle.fqid = "tunic.entry_microfiche_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_microfiche_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_mugs_img";
tmp_animcycle.fqid = "tunic.entry_mugs_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_mugs_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_nelson_img";
tmp_animcycle.fqid = "tunic.entry_nelson_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_nelson_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_nelsonphoto_img";
tmp_animcycle.fqid = "tunic.entry_nelsonphoto_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_nelsonphoto_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_newspaper_img";
tmp_animcycle.fqid = "tunic.entry_newspaper_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_newspaper_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_nowells_img";
tmp_animcycle.fqid = "tunic.entry_nowells_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_nowells_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_onthecase_img";
tmp_animcycle.fqid = "tunic.entry_onthecase_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_onthecase_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_archivist_img";
tmp_animcycle.fqid = "tunic.entry_quest_archivist_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_archivist_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_backbackbacktoarchivist_img";
tmp_animcycle.fqid = "tunic.entry_quest_backbackbacktoarchivist_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_backbackbacktoarchivist_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_backbacktoarchivist_img";
tmp_animcycle.fqid = "tunic.entry_quest_backbacktoarchivist_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_backbacktoarchivist_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_backtoarchivist_img";
tmp_animcycle.fqid = "tunic.entry_quest_backtoarchivist_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_backtoarchivist_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_backtolibrary_img";
tmp_animcycle.fqid = "tunic.entry_quest_backtolibrary_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_backtolibrary_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_backtooffice_img";
tmp_animcycle.fqid = "tunic.entry_quest_backtooffice_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_backtooffice_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_basketball_img";
tmp_animcycle.fqid = "tunic.entry_quest_basketball_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_basketball_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_checkoutflag_img";
tmp_animcycle.fqid = "tunic.entry_quest_checkoutflag_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_checkoutflag_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_checkstaff_img";
tmp_animcycle.fqid = "tunic.entry_quest_checkstaff_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_checkstaff_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_collection_img";
tmp_animcycle.fqid = "tunic.entry_quest_collection_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_collection_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_dnr_img";
tmp_animcycle.fqid = "tunic.entry_quest_dnr_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_dnr_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_final_img";
tmp_animcycle.fqid = "tunic.entry_quest_final_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_final_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_flaglady_img";
tmp_animcycle.fqid = "tunic.entry_quest_flaglady_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_flaglady_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_library_img";
tmp_animcycle.fqid = "tunic.entry_quest_library_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_library_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_meeting_img";
tmp_animcycle.fqid = "tunic.entry_quest_meeting_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_meeting_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_museum_img";
tmp_animcycle.fqid = "tunic.entry_quest_museum_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_museum_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_notajersey_img";
tmp_animcycle.fqid = "tunic.entry_quest_notajersey_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_notajersey_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_squeakycleaners_img";
tmp_animcycle.fqid = "tunic.entry_quest_squeakycleaners_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_squeakycleaners_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_stacks_img";
tmp_animcycle.fqid = "tunic.entry_quest_stacks_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_stacks_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_textile_img";
tmp_animcycle.fqid = "tunic.entry_quest_textile_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_textile_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_toend_img";
tmp_animcycle.fqid = "tunic.entry_quest_toend_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_toend_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_scratches_img";
tmp_animcycle.fqid = "tunic.entry_scratches_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_scratches_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_stacks_slip_img";
tmp_animcycle.fqid = "tunic.entry_stacks_slip_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_stacks_slip_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_staffdir_img";
tmp_animcycle.fqid = "tunic.entry_staffdir_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_staffdir_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_taxidermy_img";
tmp_animcycle.fqid = "tunic.entry_taxidermy_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_taxidermy_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_teddyfound_img";
tmp_animcycle.fqid = "tunic.entry_teddyfound_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_teddyfound_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_teddyfree_img";
tmp_animcycle.fqid = "tunic.entry_teddyfree_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_teddyfree_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_teddytaken_img";
tmp_animcycle.fqid = "tunic.entry_teddytaken_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_teddytaken_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_theodora_img";
tmp_animcycle.fqid = "tunic.entry_theodora_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_theodora_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_theta_img";
tmp_animcycle.fqid = "tunic.entry_theta_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_theta_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_tracks_img";
tmp_animcycle.fqid = "tunic.entry_tracks_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_tracks_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_tunic_img";
tmp_animcycle.fqid = "tunic.entry_tunic_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_tunic_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_voteforgramps_img";
tmp_animcycle.fqid = "tunic.entry_voteforgramps_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_voteforgramps_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_wellshoof_img";
tmp_animcycle.fqid = "tunic.entry_wellshoof_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_wellshoof_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_wellsid_img";
tmp_animcycle.fqid = "tunic.entry_wellsid_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_wellsid_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_x_img";
tmp_animcycle.fqid = "tunic.entry_x_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_x_img/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgartifacts/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgcans";
tmp_animcycle.fqid = "tunic.fgcans";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgcans/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgpipes/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgtextile";
tmp_animcycle.fqid = "tunic.fgtextile";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgtextile/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "flag_girl";
tmp_animcycle.fqid = "tunic.flag_girl";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/flag_girl/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/flag_girl/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/flag_girl/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/flag_girl/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/flag_girl/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "flagbox";
tmp_animcycle.fqid = "tunic.flagbox";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/flagbox/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "flaghouse_book";
tmp_animcycle.fqid = "tunic.flaghouse_book";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/flaghouse_book/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "flaghouse_desk";
tmp_animcycle.fqid = "tunic.flaghouse_desk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/flaghouse_desk/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "frontdesk";
tmp_animcycle.fqid = "tunic.frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/frontdesk/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "frontdesk_chair";
tmp_animcycle.fqid = "tunic.frontdesk_chair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/frontdesk_chair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "frontdesk_deskchair";
tmp_animcycle.fqid = "tunic.frontdesk_deskchair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/frontdesk_deskchair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fuzzy";
tmp_animcycle.fqid = "tunic.fuzzy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fuzzy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "glasses";
tmp_animcycle.fqid = "tunic.glasses";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/glasses/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "gramps";
tmp_animcycle.fqid = "tunic.gramps";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 48;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "gramps_idle";
tmp_animcycle.fqid = "tunic.gramps_idle";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/8.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/9.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/10.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/11.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/12.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/13.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/14.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/15.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/16.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/17.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/18.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/19.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/20.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/21.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/22.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/23.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/24.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/25.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/26.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/27.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/28.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/29.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/30.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/31.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/32.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/33.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/34.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/35.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/36.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/37.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/38.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/39.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/40.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/41.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/42.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/43.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/44.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/45.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/46.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/47.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/48.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/49.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/50.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/51.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/52.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/53.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/54.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/55.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/56.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/57.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/58.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/59.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/60.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_idle/61.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "gramps_walk";
tmp_animcycle.fqid = "tunic.gramps_walk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 5;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_walk/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_walk/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_walk/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_walk/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_walk/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_walk/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps_walk/6.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hblip_person/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hiker";
tmp_animcycle.fqid = "tunic.hiker";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hiker/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_ui";
tmp_animcycle.fqid = "tunic.hover_ui";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_ui/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/icon_notebook/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "janitorcart";
tmp_animcycle.fqid = "tunic.janitorcart";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/janitorcart/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/jersey_front/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journals";
tmp_animcycle.fqid = "tunic.journals";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journals/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journals_flag_pic_0";
tmp_animcycle.fqid = "tunic.journals_flag_pic_0";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journals_flag_pic_0/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journals_flag_pic_1";
tmp_animcycle.fqid = "tunic.journals_flag_pic_1";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journals_flag_pic_1/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journals_flag_pic_2";
tmp_animcycle.fqid = "tunic.journals_flag_pic_2";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journals_flag_pic_2/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journals_front";
tmp_animcycle.fqid = "tunic.journals_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journals_front/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journals_pic_0";
tmp_animcycle.fqid = "tunic.journals_pic_0";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journals_pic_0/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journals_pic_1";
tmp_animcycle.fqid = "tunic.journals_pic_1";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journals_pic_1/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journals_pic_2";
tmp_animcycle.fqid = "tunic.journals_pic_2";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journals_pic_2/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "key";
tmp_animcycle.fqid = "tunic.key";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/key/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "librarian";
tmp_animcycle.fqid = "tunic.librarian";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 41;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarian/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarian/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarian/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarian/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarian/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "librarydesk";
tmp_animcycle.fqid = "tunic.librarydesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarydesk/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "librarydeskchair";
tmp_animcycle.fqid = "tunic.librarydeskchair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarydeskchair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "libraryfg";
tmp_animcycle.fqid = "tunic.libraryfg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/libraryfg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "libraryscanner";
tmp_animcycle.fqid = "tunic.libraryscanner";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/libraryscanner/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/logbook/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/logbook_front/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "magnifyingglass";
tmp_animcycle.fqid = "tunic.magnifyingglass";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/magnifyingglass/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/map/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "microfichechair";
tmp_animcycle.fqid = "tunic.microfichechair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microfichechair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "microfichefg";
tmp_animcycle.fqid = "tunic.microfichefg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microfichefg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "microficheframe1";
tmp_animcycle.fqid = "tunic.microficheframe1";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 0;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe1/0.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe1/1.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe1/2.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe1/3.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe1/4.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "microficheframe2";
tmp_animcycle.fqid = "tunic.microficheframe2";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 0;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe2/0.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe2/1.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe2/2.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe2/3.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe2/4.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "microficheframe3";
tmp_animcycle.fqid = "tunic.microficheframe3";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 0;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe3/0.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe3/1.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe3/2.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe3/3.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe3/4.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "microficheframe4";
tmp_animcycle.fqid = "tunic.microficheframe4";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 0;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe4/0.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe4/1.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe4/2.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe4/3.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe4/4.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "microficheframe5";
tmp_animcycle.fqid = "tunic.microficheframe5";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 0;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe5/0.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe5/1.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe5/2.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe5/3.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe5/4.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "microficheframe6";
tmp_animcycle.fqid = "tunic.microficheframe6";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 0;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe6/0.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe6/1.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe6/2.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe6/3.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe6/4.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "nelson_sign";
tmp_animcycle.fqid = "tunic.nelson_sign";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/nelson_sign/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "nelson_sign_closeup";
tmp_animcycle.fqid = "tunic.nelson_sign_closeup";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/nelson_sign_closeup/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/newspaper_front/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "nextarrow";
tmp_animcycle.fqid = "tunic.nextarrow";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/nextarrow/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notebook/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook_baked";
tmp_animcycle.fqid = "tunic.notebook_baked";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notebook_baked/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook_next";
tmp_animcycle.fqid = "tunic.notebook_next";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notebook_next/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notebook_object/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook_prev";
tmp_animcycle.fqid = "tunic.notebook_prev";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notebook_prev/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notice";
tmp_animcycle.fqid = "tunic.notice";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notice/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/null/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "outtolunch";
tmp_animcycle.fqid = "tunic.outtolunch";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/outtolunch/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "plaque";
tmp_animcycle.fqid = "tunic.plaque";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/plaque/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "plaque_face";
tmp_animcycle.fqid = "tunic.plaque_face";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/plaque_face/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "report";
tmp_animcycle.fqid = "tunic.report";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/report/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "report_hand";
tmp_animcycle.fqid = "tunic.report_hand";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/report_hand/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/retirement_letter_closeup/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "retirement_letter_overlay";
tmp_animcycle.fqid = "tunic.retirement_letter_overlay";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/retirement_letter_overlay/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_cage";
tmp_animcycle.fqid = "tunic.room_cage";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_cage/0.jpg");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_drycleaner_frontdesk/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_elevator";
tmp_animcycle.fqid = "tunic.room_elevator";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_elevator/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_flaghouse";
tmp_animcycle.fqid = "tunic.room_flaghouse";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_flaghouse/0.jpg");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_desk/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_dirty";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_dirty";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_dirty/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_dirty_chair";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_dirty_chair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_dirty_chair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_dirty_desk";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_dirty_desk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_dirty_desk/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_collection/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_collection_flag";
tmp_animcycle.fqid = "tunic.room_historicalsociety_collection_flag";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_collection_flag/0.jpg");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_library_microfiche/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_nelson_trail";
tmp_animcycle.fqid = "tunic.room_nelson_trail";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_nelson_trail/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_wildlife_center";
tmp_animcycle.fqid = "tunic.room_wildlife_center";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_wildlife_center/0.jpg");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_capitol/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_drycleaner/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_flaghouse";
tmp_animcycle.fqid = "tunic.scene_flaghouse";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_flaghouse/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_historicalsociety/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_historicalsociety_cage";
tmp_animcycle.fqid = "tunic.scene_historicalsociety_cage";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_historicalsociety_cage/0.jpg");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_humanecology/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_kohlcenter/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_library/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_nelson";
tmp_animcycle.fqid = "tunic.scene_nelson";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_nelson/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_trail_city";
tmp_animcycle.fqid = "tunic.scene_trail_city";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_trail_city/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_trail_lake";
tmp_animcycle.fqid = "tunic.scene_trail_lake";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_trail_lake/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_trail_midground";
tmp_animcycle.fqid = "tunic.scene_trail_midground";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_trail_midground/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_trail_sky";
tmp_animcycle.fqid = "tunic.scene_trail_sky";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_trail_sky/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_trail_sun";
tmp_animcycle.fqid = "tunic.scene_trail_sun";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_trail_sun/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_trail_trees";
tmp_animcycle.fqid = "tunic.scene_trail_trees";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_trail_trees/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_wildlife";
tmp_animcycle.fqid = "tunic.scene_wildlife";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_wildlife/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scratches";
tmp_animcycle.fqid = "tunic.scratches";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scratches/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "secret_bg";
tmp_animcycle.fqid = "tunic.secret_bg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/secret_bg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "secret_fg";
tmp_animcycle.fqid = "tunic.secret_fg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/secret_fg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "stacks_shelf";
tmp_animcycle.fqid = "tunic.stacks_shelf";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/stacks_shelf/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "stacks_shelf_callout";
tmp_animcycle.fqid = "tunic.stacks_shelf_callout";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/stacks_shelf_callout/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "teddy";
tmp_animcycle.fqid = "tunic.teddy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 25;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "teddy_idle";
tmp_animcycle.fqid = "tunic.teddy_idle";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 0;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_idle/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "teddy_noscarf";
tmp_animcycle.fqid = "tunic.teddy_noscarf";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_noscarf/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "teddy_walk";
tmp_animcycle.fqid = "tunic.teddy_walk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/8.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_walk/9.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/toolbar/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tracks";
tmp_animcycle.fqid = "tunic.tracks";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tracks/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tracks_closeup";
tmp_animcycle.fqid = "tunic.tracks_closeup";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tracks_closeup/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "trail_dust";
tmp_animcycle.fqid = "tunic.trail_dust";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/trail_dust/0.png");
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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tunic_slip/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wellsbadge_big";
tmp_animcycle.fqid = "tunic.wellsbadge_big";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wellsbadge_big/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wellsbadge_small";
tmp_animcycle.fqid = "tunic.wellsbadge_small";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wellsbadge_small/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_animal_bison";
tmp_animcycle.fqid = "tunic.wildlife_animal_bison";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/8.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/9.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/10.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/11.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/12.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/13.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/14.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/15.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/16.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/17.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/18.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/19.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/20.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/21.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/22.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/23.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/24.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/25.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/26.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/27.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/28.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/29.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/30.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/31.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/32.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/33.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/34.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_bison/35.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_animal_crane";
tmp_animcycle.fqid = "tunic.wildlife_animal_crane";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane/7.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_animal_crane_cup";
tmp_animcycle.fqid = "tunic.wildlife_animal_crane_cup";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/8.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/9.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/10.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/11.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/12.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/13.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/14.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/16.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/17.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/18.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/19.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/20.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/21.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/22.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/23.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/24.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/25.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/26.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/28.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/29.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/30.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_crane_cup/31.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_animal_fox";
tmp_animcycle.fqid = "tunic.wildlife_animal_fox";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/8.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/9.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/10.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_fox/11.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_animal_lynx";
tmp_animcycle.fqid = "tunic.wildlife_animal_lynx";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_lynx/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_lynx/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_lynx/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_lynx/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_lynx/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_lynx/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_lynx/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_lynx/7.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_animal_owl";
tmp_animcycle.fqid = "tunic.wildlife_animal_owl";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/8.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/9.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/10.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/11.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/12.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/13.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/14.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/15.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/16.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/17.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/18.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/19.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/20.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/21.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/22.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/23.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/24.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/25.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/26.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_animal_owl/27.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_expert";
tmp_animcycle.fqid = "tunic.wildlife_expert";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 35;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_expert/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_expert/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_expert/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_expert/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_expert/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_fencing";
tmp_animcycle.fqid = "tunic.wildlife_fencing";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_fencing/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_fg";
tmp_animcycle.fqid = "tunic.wildlife_fg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_fg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_fox";
tmp_animcycle.fqid = "tunic.wildlife_fox";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_fox/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "wildlife_tree";
tmp_animcycle.fqid = "tunic.wildlife_tree";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_tree/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "youngboy";
tmp_animcycle.fqid = "tunic.youngboy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 40;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/youngboy/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/youngboy/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/youngboy/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/youngboy/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/youngboy/4.png");
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
tmp_entry.id = "entry_activists";
tmp_entry.fqid = "tunic.entry_activists";
{
tmp_entry.ww = 393.9999999999999;
tmp_entry.wh = 208.99999999999994;
tmp_entry.wx = 202.99999999999994;
tmp_entry.wy = -119.49999999999996;
tmp_entry.wz = 100;
tmp_entry.page = 6;
tmp_entry.animcycle_id = "entry_activists_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.confrontation",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_archivistcoffee";
tmp_entry.fqid = "tunic.entry_archivistcoffee";
{
tmp_entry.ww = 382;
tmp_entry.wh = 178;
tmp_entry.wx = 199.99999999999991;
tmp_entry.wy = 98.00000000000011;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_archivistcoffee_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.have_glass",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_basketballplaque";
tmp_entry.fqid = "tunic.entry_basketballplaque";
{
tmp_entry.ww = 383;
tmp_entry.wh = 191.99999999999994;
tmp_entry.wx = 200.49999999999972;
tmp_entry.wy = -117;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_basketballplaque_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_cleanercard";
tmp_entry.fqid = "tunic.entry_cleanercard";
{
tmp_entry.ww = 398.0000000000001;
tmp_entry.wh = 173.00000000000003;
tmp_entry.wx = -201;
tmp_entry.wy = 184.5000000000001;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_cleanercard_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_cleanerslip";
tmp_entry.fqid = "tunic.entry_cleanerslip";
{
tmp_entry.ww = 364.00000000000006;
tmp_entry.wh = 184.99999999999997;
tmp_entry.wx = 200.00000000000017;
tmp_entry.wy = 153.4999999999999;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_cleanerslip_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.collection.tunic.slip",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_doodle_0";
tmp_entry.fqid = "tunic.entry_doodle_0";
{
tmp_entry.ww = 141;
tmp_entry.wh = 95.00000000000001;
tmp_entry.wx = 319.5;
tmp_entry.wy = 218.5;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_doodle_0_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_doodle_1";
tmp_entry.fqid = "tunic.entry_doodle_1";
{
tmp_entry.ww = 248.99999999999994;
tmp_entry.wh = 93;
tmp_entry.wx = 18.499999999999943;
tmp_entry.wy = -261.5;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_doodle_1_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_ecologyflag";
tmp_entry.fqid = "tunic.entry_ecologyflag";
{
tmp_entry.ww = 371;
tmp_entry.wh = 173.00000000000003;
tmp_entry.wx = -218.5;
tmp_entry.wy = 43.500000000000014;
tmp_entry.wz = 100;
tmp_entry.page = 6;
tmp_entry.animcycle_id = "entry_ecologyflag_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.flaghouse.entry.flag_girl.symbol",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_expert";
tmp_entry.fqid = "tunic.entry_expert";
{
tmp_entry.ww = 390.00000000000006;
tmp_entry.wh = 176.99999999999994;
tmp_entry.wx = 193.00000000000003;
tmp_entry.wy = -141.49999999999977;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_expert_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.humanecology.frontdesk.worker.intro2",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_flag";
tmp_entry.fqid = "tunic.entry_flag";
{
tmp_entry.ww = 392;
tmp_entry.wh = 180;
tmp_entry.wx = -203.99999999999977;
tmp_entry.wy = 192;
tmp_entry.wz = 100;
tmp_entry.page = 5;
tmp_entry.animcycle_id = "entry_flag_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.collection_flag.gramps.flag",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_flagguess";
tmp_entry.fqid = "tunic.entry_flagguess";
{
tmp_entry.ww = 21.99999999999999;
tmp_entry.wh = 29.00000000000004;
tmp_entry.wx = 4.9999999999999805;
tmp_entry.wy = -297.5000000000001;
tmp_entry.wz = 100;
tmp_entry.page = 6;
tmp_entry.animcycle_id = "entry_flagguess_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.flaghouse.entry.flag_girl.symbol",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_flaglady";
tmp_entry.fqid = "tunic.entry_flaglady";
{
tmp_entry.ww = 330;
tmp_entry.wh = 172;
tmp_entry.wx = 192.99999999999994;
tmp_entry.wy = -169;
tmp_entry.wz = 100;
tmp_entry.page = 5;
tmp_entry.animcycle_id = "entry_flaglady_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.flaghouse.entry.flag_girl",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_glasses";
tmp_entry.fqid = "tunic.entry_glasses";
{
tmp_entry.ww = 358.99999999999994;
tmp_entry.wh = 306.9999999999999;
tmp_entry.wx = -203.49999999999991;
tmp_entry.wy = -21.5;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_glasses_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.cage.glasses",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_javajacket";
tmp_entry.fqid = "tunic.entry_javajacket";
{
tmp_entry.ww = 366;
tmp_entry.wh = 189.00000000000009;
tmp_entry.wx = -193;
tmp_entry.wy = -163.5;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_javajacket_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet_dirty.trigger_coffee",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_key";
tmp_entry.fqid = "tunic.entry_key";
{
tmp_entry.ww = 366;
tmp_entry.wh = 175;
tmp_entry.wx = 220.00000000000017;
tmp_entry.wy = -99.50000000000009;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_key_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.key",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_littering";
tmp_entry.fqid = "tunic.entry_littering";
{
tmp_entry.ww = 383;
tmp_entry.wh = 180.00000000000003;
tmp_entry.wx = 199.49999999999994;
tmp_entry.wy = 142.9999999999999;
tmp_entry.wz = 100;
tmp_entry.page = 5;
tmp_entry.animcycle_id = "entry_littering_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.wildlife.center.coffee",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_logbook";
tmp_entry.fqid = "tunic.entry_logbook";
{
tmp_entry.ww = 380;
tmp_entry.wh = 197.00000000000003;
tmp_entry.wx = -208.00000000000023;
tmp_entry.wy = -50.49999999999985;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_logbook_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_microfiche";
tmp_entry.fqid = "tunic.entry_microfiche";
{
tmp_entry.ww = 385;
tmp_entry.wh = 205;
tmp_entry.wx = 200.50000000000014;
tmp_entry.wy = 165.5;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_microfiche_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_nelson";
tmp_entry.fqid = "tunic.entry_nelson";
{
tmp_entry.ww = 394;
tmp_entry.wh = 170;
tmp_entry.wx = 203.99999999999997;
tmp_entry.wy = 160;
tmp_entry.wz = 100;
tmp_entry.page = 6;
tmp_entry.animcycle_id = "entry_nelson_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.library.microfiche.reader_flag.paper2.bingo",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_newspaper";
tmp_entry.fqid = "tunic.entry_newspaper";
{
tmp_entry.ww = 392.00000000000006;
tmp_entry.wh = 196.00000000000003;
tmp_entry.wx = 207.00000000000009;
tmp_entry.wy = -26.000000000000057;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_newspaper_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_onthecase";
tmp_entry.fqid = "tunic.entry_onthecase";
{
tmp_entry.ww = 276;
tmp_entry.wh = 162.00000000000009;
tmp_entry.wx = -153.0000000000001;
tmp_entry.wy = 116.99999999999984;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_onthecase_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.capitol_0.hall.chap1_finale_c",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_archivist";
tmp_entry.fqid = "tunic.entry_quest_archivist";
{
tmp_entry.ww = 379;
tmp_entry.wh = 67;
tmp_entry.wx = 202.4999999999999;
tmp_entry.wy = 225.5;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_quest_archivist_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet_dirty.gramps.news",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_archivist_x";
tmp_entry.fqid = "tunic.entry_quest_archivist_x";
{
tmp_entry.ww = 35.99999999999998;
tmp_entry.wh = 36.00000000000001;
tmp_entry.wx = 30.999999999999986;
tmp_entry.wy = 224.00000000000009;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.have_glass",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backbackbacktoarchivist";
tmp_entry.fqid = "tunic.entry_quest_backbackbacktoarchivist";
{
tmp_entry.ww = 389;
tmp_entry.wh = 74.99999999999999;
tmp_entry.wx = 202.49999999999994;
tmp_entry.wy = 31.499999999999908;
tmp_entry.wz = 100;
tmp_entry.page = 6;
tmp_entry.animcycle_id = "entry_quest_backbackbacktoarchivist_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.library.frontdesk.worker.nelson",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backbackbacktoarchivist_x";
tmp_entry.fqid = "tunic.entry_quest_backbackbacktoarchivist_x";
{
tmp_entry.ww = 35.99999999999999;
tmp_entry.wh = 37.00000000000006;
tmp_entry.wx = 25.000000000000178;
tmp_entry.wy = 30.499999999999957;
tmp_entry.wz = 100;
tmp_entry.page = 6;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.confrontation",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backbacktoarchivist";
tmp_entry.fqid = "tunic.entry_quest_backbacktoarchivist";
{
tmp_entry.ww = 388;
tmp_entry.wh = 74.99999999999999;
tmp_entry.wx = 200.0000000000002;
tmp_entry.wy = 26.499999999999908;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_quest_backbacktoarchivist_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.entry.directory.closeup.archivist",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backbacktoarchivist_x";
tmp_entry.fqid = "tunic.entry_quest_backbacktoarchivist_x";
{
tmp_entry.ww = 30.999999999999993;
tmp_entry.wh = 31.999999999999986;
tmp_entry.wx = 21.500000000000107;
tmp_entry.wy = 24.999999999999908;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.key",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backtoarchivist";
tmp_entry.fqid = "tunic.entry_quest_backtoarchivist";
{
tmp_entry.ww = 390.99999999999994;
tmp_entry.wh = 69.99999999999997;
tmp_entry.wx = 202.50000000000006;
tmp_entry.wy = -148;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_quest_backtoarchivist_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.library.frontdesk.worker.wells",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backtoarchivist_x";
tmp_entry.fqid = "tunic.entry_quest_backtoarchivist_x";
{
tmp_entry.ww = 35;
tmp_entry.wh = 32.99999999999998;
tmp_entry.wx = 24.499999999999986;
tmp_entry.wy = -147.5;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.newspaper",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backtolibrary";
tmp_entry.fqid = "tunic.entry_quest_backtolibrary";
{
tmp_entry.ww = 386;
tmp_entry.wh = 68.99999999999997;
tmp_entry.wx = -201;
tmp_entry.wy = -88.49999999999997;
tmp_entry.wz = 100;
tmp_entry.page = 6;
tmp_entry.animcycle_id = "entry_quest_backtolibrary_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.flaghouse.entry.flag_girl.symbol",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backtolibrary_x";
tmp_entry.fqid = "tunic.entry_quest_backtolibrary_x";
{
tmp_entry.ww = 39.99999999999999;
tmp_entry.wh = 39.99999999999993;
tmp_entry.wx = -377.99999999999994;
tmp_entry.wy = -96.00000000000003;
tmp_entry.wz = 100;
tmp_entry.page = 6;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.library.frontdesk.worker.flag",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backtooffice";
tmp_entry.fqid = "tunic.entry_quest_backtooffice";
{
tmp_entry.ww = 391;
tmp_entry.wh = 70.00000000000001;
tmp_entry.wx = -214.5;
tmp_entry.wy = 70.00000000000006;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_quest_backtooffice_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.capitol_0.hall.chap1_finale_c",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_backtooffice_x";
tmp_entry.fqid = "tunic.entry_quest_backtooffice_x";
{
tmp_entry.ww = 42.99999999999999;
tmp_entry.wh = 38.99999999999999;
tmp_entry.wx = -388.5;
tmp_entry.wy = 71.5;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet_dirty.what_happened",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_basketball";
tmp_entry.fqid = "tunic.entry_quest_basketball";
{
tmp_entry.ww = 380.00000000000006;
tmp_entry.wh = 69.00000000000004;
tmp_entry.wx = 199.00000000000026;
tmp_entry.wy = 15.499999999999936;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_quest_basketball_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.collection.gramps.found",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_basketball_x";
tmp_entry.fqid = "tunic.entry_quest_basketball_x";
{
tmp_entry.ww = 39.99999999999998;
tmp_entry.wh = 38.99999999999999;
tmp_entry.wx = 27.999999999999943;
tmp_entry.wy = 12.499999999999844;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_checkoutflag";
tmp_entry.fqid = "tunic.entry_quest_checkoutflag";
{
tmp_entry.ww = 268;
tmp_entry.wh = 64.99999999999994;
tmp_entry.wx = 148.00000000000006;
tmp_entry.wy = -203.5;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_quest_checkoutflag_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.basement.savedteddy",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_checkoutflag_x";
tmp_entry.fqid = "tunic.entry_quest_checkoutflag_x";
{
tmp_entry.ww = 38.99999999999999;
tmp_entry.wh = 36.99999999999993;
tmp_entry.wx = 20.500000000000064;
tmp_entry.wy = -200.49999999999997;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.collection_flag.gramps.flag",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_checkstaff";
tmp_entry.fqid = "tunic.entry_quest_checkstaff";
{
tmp_entry.ww = 370.0000000000001;
tmp_entry.wh = 63.99999999999998;
tmp_entry.wx = -202;
tmp_entry.wy = -216.00000000000009;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_quest_checkstaff_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.cage.glasses",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_checkstaff_x";
tmp_entry.fqid = "tunic.entry_quest_checkstaff_x";
{
tmp_entry.ww = 40;
tmp_entry.wh = 34.999999999999986;
tmp_entry.wx = -365.99999999999994;
tmp_entry.wy = -215.50000000000003;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.entry.directory.closeup.archivist",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_collection";
tmp_entry.fqid = "tunic.entry_quest_collection";
{
tmp_entry.ww = 387;
tmp_entry.wh = 74;
tmp_entry.wx = -207.5;
tmp_entry.wy = -35.99999999999996;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_quest_collection_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.entry.groupconvo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_collection_x";
tmp_entry.fqid = "tunic.entry_quest_collection_x";
{
tmp_entry.ww = 43.99999999999998;
tmp_entry.wh = 39.99999999999999;
tmp_entry.wx = -383.9999999999999;
tmp_entry.wy = -34.99999999999991;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.collection.tunic",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_dnr";
tmp_entry.fqid = "tunic.entry_quest_dnr";
{
tmp_entry.ww = 387.00000000000006;
tmp_entry.wh = 73;
tmp_entry.wx = -205.49999999999997;
tmp_entry.wy = -45.50000000000002;
tmp_entry.wz = 100;
tmp_entry.page = 5;
tmp_entry.animcycle_id = "entry_quest_dnr_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.entry.boss.flag",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_dnr_x";
tmp_entry.fqid = "tunic.entry_quest_dnr_x";
{
tmp_entry.ww = 33.00000000000011;
tmp_entry.wh = 32.999999999999986;
tmp_entry.wx = -380.5;
tmp_entry.wy = -46.49999999999989;
tmp_entry.wz = 100;
tmp_entry.page = 5;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.wildlife",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_final";
tmp_entry.fqid = "tunic.entry_quest_final";
{
tmp_entry.ww = 393;
tmp_entry.wh = 101.99999999999999;
tmp_entry.wx = 205.50000000000003;
tmp_entry.wy = -68.99999999999996;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_quest_final_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.stacks.journals.pic_2",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_final_x";
tmp_entry.fqid = "tunic.entry_quest_final_x";
{
tmp_entry.ww = 41.99999999999999;
tmp_entry.wh = 38.99999999999997;
tmp_entry.wx = 27.99999999999998;
tmp_entry.wy = -89.50000000000007;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.capitol_1.hall.boss.chap2_finale_6",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_flaglady";
tmp_entry.fqid = "tunic.entry_quest_flaglady";
{
tmp_entry.ww = 382.99999999999994;
tmp_entry.wh = 68.99999999999994;
tmp_entry.wx = 202.5000000000001;
tmp_entry.wy = -21.49999999999996;
tmp_entry.wz = 100;
tmp_entry.page = 5;
tmp_entry.animcycle_id = "entry_quest_flaglady_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.wildlife.center.wells.nodeer",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_flaglady_x";
tmp_entry.fqid = "tunic.entry_quest_flaglady_x";
{
tmp_entry.ww = 29.99999999999998;
tmp_entry.wh = 25.99999999999996;
tmp_entry.wx = 27.999999999999986;
tmp_entry.wy = -24.000000000000014;
tmp_entry.wz = 100;
tmp_entry.page = 5;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.flaghouse",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_library";
tmp_entry.fqid = "tunic.entry_quest_library";
{
tmp_entry.ww = 379;
tmp_entry.wh = 67.00000000000001;
tmp_entry.wx = -209.49999999999994;
tmp_entry.wy = -189.49999999999997;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_quest_library_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.drycleaner.frontdesk.worker.done",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_library_x";
tmp_entry.fqid = "tunic.entry_quest_library_x";
{
tmp_entry.ww = 36.99999999999998;
tmp_entry.wh = 34.99999999999993;
tmp_entry.wx = -380.5;
tmp_entry.wy = -190.49999999999994;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.library.microfiche.reader.paper2.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_meeting";
tmp_entry.fqid = "tunic.entry_quest_meeting";
{
tmp_entry.ww = 390.00000000000006;
tmp_entry.wh = 69.99999999999999;
tmp_entry.wx = -208.00000000000009;
tmp_entry.wy = 215.00000000000006;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_quest_meeting_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_meeting_x";
tmp_entry.fqid = "tunic.entry_quest_meeting_x";
{
tmp_entry.ww = 39.99999999999998;
tmp_entry.wh = 38;
tmp_entry.wx = -385;
tmp_entry.wy = 212.99999999999994;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.entry.groupconvo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_notajersey";
tmp_entry.fqid = "tunic.entry_quest_notajersey";
{
tmp_entry.ww = 374;
tmp_entry.wh = 66.99999999999999;
tmp_entry.wx = -220;
tmp_entry.wy = 231.5;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_quest_notajersey_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.kohlcenter.halloffame.togrampa",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_notajersey_x";
tmp_entry.fqid = "tunic.entry_quest_notajersey_x";
{
tmp_entry.ww = 43.99999999999998;
tmp_entry.wh = 41.000000000000014;
tmp_entry.wx = -385.00000000000006;
tmp_entry.wy = 228.5;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.capitol_0.hall.chap1_finale_c",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_squeakycleaners";
tmp_entry.fqid = "tunic.entry_quest_squeakycleaners";
{
tmp_entry.ww = 384;
tmp_entry.wh = 64.99999999999996;
tmp_entry.wx = -211.0000000000001;
tmp_entry.wy = 77.50000000000017;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_quest_squeakycleaners_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_squeakycleaners_x";
tmp_entry.fqid = "tunic.entry_quest_squeakycleaners_x";
{
tmp_entry.ww = 32.00000000000003;
tmp_entry.wh = 34;
tmp_entry.wx = -387;
tmp_entry.wy = 77.99999999999991;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_stacks";
tmp_entry.fqid = "tunic.entry_quest_stacks";
{
tmp_entry.ww = 394;
tmp_entry.wh = 56.999999999999986;
tmp_entry.wx = 204.99999999999994;
tmp_entry.wy = 222.49999999999994;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_quest_stacks_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.newspaper",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_stacks_x";
tmp_entry.fqid = "tunic.entry_quest_stacks_x";
{
tmp_entry.ww = 39.99999999999998;
tmp_entry.wh = 38.99999999999999;
tmp_entry.wx = 25.000000000000036;
tmp_entry.wy = 219.50000000000003;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_textile";
tmp_entry.fqid = "tunic.entry_quest_textile";
{
tmp_entry.ww = 384;
tmp_entry.wh = 60.000000000000036;
tmp_entry.wx = 201.00000000000023;
tmp_entry.wy = -25.999999999999957;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_quest_textile_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.have_glass",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_textile_x";
tmp_entry.fqid = "tunic.entry_quest_textile_x";
{
tmp_entry.ww = 37.99999999999994;
tmp_entry.wh = 33.99999999999995;
tmp_entry.wx = 27.00000000000002;
tmp_entry.wy = -26.999999999999964;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_scratches";
tmp_entry.fqid = "tunic.entry_scratches";
{
tmp_entry.ww = 389;
tmp_entry.wh = 192.00000000000006;
tmp_entry.wx = -195.5;
tmp_entry.wy = 194.00000000000014;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_scratches_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.basement.seescratches",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_stacks_slip";
tmp_entry.fqid = "tunic.entry_stacks_slip";
{
tmp_entry.ww = 391;
tmp_entry.wh = 170;
tmp_entry.wx = -201.5;
tmp_entry.wy = -158.99999999999994;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_stacks_slip_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.newspaper",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_staffdir";
tmp_entry.fqid = "tunic.entry_staffdir";
{
tmp_entry.ww = 382;
tmp_entry.wh = 190.00000000000003;
tmp_entry.wx = 203.99999999999972;
tmp_entry.wy = 174;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_staffdir_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.entry.directory.closeup.archivist",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_taxidermy";
tmp_entry.fqid = "tunic.entry_taxidermy";
{
tmp_entry.ww = 387;
tmp_entry.wh = 110.99999999999996;
tmp_entry.wx = -208.5;
tmp_entry.wy = 206.49999999999997;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_taxidermy_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.library.frontdesk.worker.wells",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_teddyfound";
tmp_entry.fqid = "tunic.entry_teddyfound";
{
tmp_entry.ww = 23.99999999999998;
tmp_entry.wh = 34.000000000000014;
tmp_entry.wx = 31.000000000000004;
tmp_entry.wy = -307.00000000000006;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_teddyfound_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.cage.teddy",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_teddyfree";
tmp_entry.fqid = "tunic.entry_teddyfree";
{
tmp_entry.ww = 24.99999999999999;
tmp_entry.wh = 28.999999999999986;
tmp_entry.wx = -3.5000000000000124;
tmp_entry.wy = -309.50000000000006;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_teddyfree_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.cage.unlockdoor",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_teddytaken";
tmp_entry.fqid = "tunic.entry_teddytaken";
{
tmp_entry.ww = 396;
tmp_entry.wh = 187.00000000000006;
tmp_entry.wx = -216.00000000000006;
tmp_entry.wy = -49.500000000000036;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_teddytaken_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet_dirty.trigger_scarf",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_theodora";
tmp_entry.fqid = "tunic.entry_theodora";
{
tmp_entry.ww = 389;
tmp_entry.wh = 188;
tmp_entry.wx = 202.49999999999994;
tmp_entry.wy = 83.99999999999989;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_theodora_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.stacks.journals.pic_2",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_theta";
tmp_entry.fqid = "tunic.entry_theta";
{
tmp_entry.ww = 371;
tmp_entry.wh = 173.00000000000003;
tmp_entry.wx = -215.5;
tmp_entry.wy = 194.5;
tmp_entry.wz = 100;
tmp_entry.page = 6;
tmp_entry.animcycle_id = "entry_theta_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.flaghouse.entry.flag_girl.symbol",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_tracks";
tmp_entry.fqid = "tunic.entry_tracks";
{
tmp_entry.ww = 382;
tmp_entry.wh = 178;
tmp_entry.wx = -207;
tmp_entry.wy = -176;
tmp_entry.wz = 100;
tmp_entry.page = 5;
tmp_entry.animcycle_id = "entry_tracks_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.wildlife.center.tracks.hub.deer",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_tunic";
tmp_entry.fqid = "tunic.entry_tunic";
{
tmp_entry.ww = 402;
tmp_entry.wh = 189.99999999999997;
tmp_entry.wx = -210.99999999999977;
tmp_entry.wy = -171.99999999999986;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_tunic_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.collection.tunic",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_voteforgramps";
tmp_entry.fqid = "tunic.entry_voteforgramps";
{
tmp_entry.ww = 366;
tmp_entry.wh = 158.00000000000006;
tmp_entry.wx = -208.0000000000001;
tmp_entry.wy = 91.00000000000003;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_voteforgramps_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet.retirement_letter.hub",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_wellshoof";
tmp_entry.fqid = "tunic.entry_wellshoof";
{
tmp_entry.ww = 396;
tmp_entry.wh = 179.00000000000003;
tmp_entry.wx = -216;
tmp_entry.wy = 71.50000000000007;
tmp_entry.wz = 100;
tmp_entry.page = 5;
tmp_entry.animcycle_id = "entry_wellshoof_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.historicalsociety.entry.wells.flag",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_wellsid";
tmp_entry.fqid = "tunic.entry_wellsid";
{
tmp_entry.ww = 392;
tmp_entry.wh = 192.00000000000006;
tmp_entry.wx = -209;
tmp_entry.wy = 40;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_wellsid_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
"tunic.library.frontdesk.wellsbadge.hub",
]];
tmp_entry.interactive = 1;

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "null";
tmp_entry.fqid = "tunic.null";
{
tmp_entry.ww = 116.99999999999996;
tmp_entry.wh = 244.9999999999999;
tmp_entry.wx = -427.50000000000006;
tmp_entry.wy = -206.50000000000006;
tmp_entry.wz = 0;
tmp_entry.page = -1;
tmp_entry.animcycle_id = "null";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_scene = new scene();
tmp_scene.id = "capitol_0";
tmp_scene.fqid = "tunic.capitol_0";
{
tmp_scene.primary = false;
tmp_scene.ww = 130;
tmp_scene.wh = 142.99999999999997;
tmp_scene.wx = 24.999999999999986;
tmp_scene.wy = 21.499999999999986;
tmp_scene.hover_icon_wx = 20;
tmp_scene.hover_icon_wy = 41.99999999999999;
tmp_scene.animcycle_id = "scene_capitol";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
tmp_scene.deck_animcycle_ids = [
];
tmp_scene.notifications_persistent = 0;
tmp_scene.raw_notifications = [
];
tmp_scene.raw_notification_ws = [
];
tmp_scene.notification_reqs = [[
]];
tmp_scene.notice_reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
"!tunic.capitol_0.hall.chap1_finale_c",
]];
tmp_scene.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
"!tunic.historicalsociety.closet_dirty",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "hall";
tmp_room.fqid = "tunic.capitol_0.hall";
{
tmp_room.primary = false;
tmp_room.ww = 2000;
tmp_room.wh = 1162;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_capitol_hall";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 1000;
tmp_room.nav_min_wz = 1;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:112.16666666666663, wy:-217.46969696969683, ww:1129.4848484848485, wh:217.6666666666667 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 648.2945573024847;
tmp_room.target_start_wy = -253.58367957138657;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.7606060606060605

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "chap1_finale_c";
tmp_cutscene.fqid = "tunic.capitol_0.hall.chap1_finale_c";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 10;
tmp_cutscene.wh = 10;
tmp_cutscene.wx = 10;
tmp_cutscene.wy = -100000;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.capitol_0.hall.chap1_finale",
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "black";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "chapter2";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "chapter2";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter2";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 1;
tmp_cutscene_command.end_t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter2";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 100;
tmp_cutscene_command.end_t = 150;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter2";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 300;
tmp_cutscene_command.end_t = 350;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 350;
tmp_cutscene_command.end_t = 380;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 95.51515151515171;
tmp_cutscene_command.wy = 291.2727272727273;
tmp_cutscene_command.w = 125;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "There's no time to waste!";
tmp_cutscene_command.t = 381;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -331.75757575757575;
tmp_cutscene_command.wy = 283.69696969696963;
tmp_cutscene_command.w = 222;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Meet me back in my office and we'll get started!";
tmp_cutscene_command.t = 381;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "gramps_walk";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = 382;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "toentry";
tmp_cutscene_command.t = 383;
tmp_cutscene_command.end_t = 480;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "null";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = 481;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 999999;
tmp_cutscene_command.wy = 999999;
tmp_cutscene_command.t = 482;
tmp_cutscene_command.end_t = 482;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "boss";
tmp_person.fqid = "tunic.capitol_0.hall.boss";
{
tmp_person.ww = 139.46770625546648;
tmp_person.wh = 275.4499825475462;
tmp_person.wx = 259.5530192269189;
tmp_person.wy = 2.35095054543865;
tmp_person.wz = -1;
tmp_person.act_wx = -343.86420332209167;
tmp_person.act_wy = -185.35322339982605;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 77.32365934794788;
tmp_person.hover_icon_wy = 156.19475287484812;
tmp_person.animcycle_id = "boss";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_0";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_0";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -96.53014801393523;
tmp_speak_command.wy = 256.49073552559;
tmp_speak_command.w = 270.30377197265625;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Jolie! What are you doing here?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -326.1305090928587;
tmp_speak_command.wy = 80.86896606199502;
tmp_speak_command.w = 160;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The shirt is not a basketball jersey!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -379.4044989277195;
tmp_speak_command.wy = 241.21271584604017;
tmp_speak_command.w = 243.35177612304688;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Aha! Did you find something?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 159.98944046644573;
tmp_speak_command.wy = 239.69756433089145;
tmp_speak_command.w = 251.89578247070312;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What are you talking about?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -366.36364174078034;
tmp_speak_command.wy = 76.87878949635046;
tmp_speak_command.w = 187;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Gramps had me fact check Wells's report.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -401.2121322716009;
tmp_speak_command.wy = 81.42424282625937;
tmp_speak_command.w = 208;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "WELLS WAS WRONG AND GRAMPS WAS RIGHT!!!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 152.41368289073185;
tmp_speak_command.wy = 248.78847342180015;
tmp_speak_command.w = 72.80793762207031;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hold on.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 61.50459198164117;
tmp_speak_command.wy = 297.2733219066487;
tmp_speak_command.w = 136;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What report? Which artifact?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_0_fail";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_0_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -22.57829585861238;
tmp_speak_command.wy = 379.91950304014085;
tmp_speak_command.w = 179.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I don't think we have anything like THAT in the collections...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_1";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_1";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -111.97223525255166;
tmp_speak_command.wy = 329.9195030401409;
tmp_speak_command.w = 238.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Ah, yes! The basketball jersey. What's the problem?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -452.6281741170744;
tmp_speak_command.wy = 70.15454694156548;
tmp_speak_command.w = 275.8237609863281;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "IT ISN'T A BASKETBALL JERSEY!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -67.06396341744377;
tmp_speak_command.wy = 302.0758744241132;
tmp_speak_command.w = 219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you have any evidence to back up your claim?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_1_fail";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_1_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_2";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_2";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 238.28091679201623;
tmp_speak_command.wy = 258.03333482035333;
tmp_speak_command.w = 44.51197814941406;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wow!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -67.77968926858988;
tmp_speak_command.wy = 258.03333482035333;
tmp_speak_command.w = 218.7997589111328;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I think you're right, Jolie.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -38.991810480710996;
tmp_speak_command.wy = 311.0636378506564;
tmp_speak_command.w = 209.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Leopold, I need you to work on this right away.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 65.55364406474357;
tmp_speak_command.wy = 242.8818196688382;
tmp_speak_command.w = 57.13594055175781;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yippee!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -76.87059835949907;
tmp_speak_command.wy = 303.48788027489877;
tmp_speak_command.w = 233.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Jolie, you help your grampa get to the bottom of this.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -60.203931692832306;
tmp_speak_command.wy = 294.39697118398965;
tmp_speak_command.w = 219.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "In the meantime, I need to have a word with Wells...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_plaquefirst_0";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_plaquefirst_0";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -486.2146594949761;
tmp_speak_command.wy = 148.101321221959;
tmp_speak_command.w = 271.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The sign at the Basketball Center shows that the women's team didn't start until 1974!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -26.870598359498974;
tmp_speak_command.wy = 379.2454560324746;
tmp_speak_command.w = 182.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Interesting. But how does that prove our shirt is not a jersey?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_plaquefirst_0_fail";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_plaquefirst_0_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -216.26453775343828;
tmp_speak_command.wy = 288.33636512338364;
tmp_speak_command.w = 308.5597229003906;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I don't think that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_plaquefirst_1";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_plaquefirst_1";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -443.7904170707336;
tmp_speak_command.wy = 105.67707879771658;
tmp_speak_command.w = 236.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found this slip attached to the shirt. It's from 1916!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -448.3358716161882;
tmp_speak_command.wy = 107.1922303128681;
tmp_speak_command.w = 230.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's 58 years BEFORE the women's team started!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_slipfirst_0";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_slipfirst_0";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -401.36617464649106;
tmp_speak_command.wy = 114.7679878886257;
tmp_speak_command.w = 232.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found this slip attached- the shirt is from 1916!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -84.44635593525649;
tmp_speak_command.wy = 350.4575772445958;
tmp_speak_command.w = 229.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Interesting- but I don't see how that means it isn't a basketball jersey...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_slipfirst_0_fail";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_slipfirst_0_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -222.32514381404445;
tmp_speak_command.wy = 286.82121360823214;
tmp_speak_command.w = 308.5597229003906;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I don't think that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap1_finale_slipfirst_1";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.chap1_finale_slipfirst_1";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -492.27526555558205;
tmp_speak_command.wy = 151.13162425226216;
tmp_speak_command.w = 271.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The plaque at the Basketball Center shows that the women's team didn't start until 1974-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -354.3964776767942;
tmp_speak_command.wy = 116.28313940377717;
tmp_speak_command.w = 193.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's 58 years AFTER this shirt was used!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "talktogramps";
tmp_speak.fqid = "tunic.capitol_0.hall.boss.talktogramps";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.capitol_0.hall.chap1_finale",
"!tunic.historicalsociety.closet_dirty",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -122.8233948419119;
tmp_speak_command.wy = 329.9199691935775;
tmp_speak_command.w = 244.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You better get to work. The exhibit opens tomorrow!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -15.245905668094284;
tmp_speak_command.wy = 328.4048317300477;
tmp_speak_command.w = 170.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Your grampa's waiting in his office.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.capitol_0.hall.gramps";
{
tmp_person.ww = 166.66666666666666;
tmp_person.wh = 289.3939393939394;
tmp_person.wx = 999999;
tmp_person.wy = 999999;
tmp_person.wz = 0;
tmp_person.act_wx = -86.36363636363636;
tmp_person.act_wy = -157.57575757575756;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 71.2121212121212;
tmp_person.hover_icon_wy = 139.3939393939394;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.capitol_0.hall.chap1_finale_c",
],[
"_tunic.capitol_1.hall.chap2_finale_c",
"!tunic.capitol_1.hall.chap2_finale_c",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.capitol_0.hall.gramps.hub";
{
tmp_speak.primary = false;
tmp_speak.commands = [];
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 100;
tmp_speak_command.wy = 100;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30; //h of a single line
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [];
tmp_speak_command.raw_atext = "null";
tmp_speak_command.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_AVATAR
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.capitol_0.hall.toentry";
{
tmp_porthole.ww = 231.7272727272727;
tmp_porthole.wh = 378.6363636363637;
tmp_porthole.wx = 790.8636363636366;
tmp_porthole.wy = -71.22727272727273;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -140.9090909090909;
tmp_porthole.act_wy = -87.87878787878788;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 3.03030303030303;
tmp_porthole.hover_icon_wy = 62.12121212121212;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_wildcard = new wildcard();
tmp_wildcard.id = "chap1_finale";
tmp_wildcard.fqid = "tunic.capitol_0.hall.chap1_finale";
{
tmp_wildcard.ww = 426.91231555545414;
tmp_wildcard.wh = 371.7675989508338;
tmp_wildcard.wx = 166.48740422766184;
tmp_wildcard.wy = 1.8926244322354648;
tmp_wildcard.wz = 1;
tmp_wildcard.act_wx = -210.610261379604;
tmp_wildcard.act_wy = -163.63687766627896;
tmp_wildcard.act_anim = 1;
tmp_wildcard.hover_icon_wx = 34.848484848490784;
tmp_wildcard.hover_icon_wy = -34.8484848481152;
tmp_wildcard.animcycle_id = "null";
tmp_wildcard.hover_cursor_animcycle_id = "hover_ui";
tmp_wildcard.hover_icon_animcycle_id = "null";
tmp_wildcard.notice_icon_animcycle_id = "null";
tmp_wildcard.deck_animcycle_ids = [
];
tmp_wildcard.audio_id = "null";
tmp_wildcard.notifications_persistent = 0;
tmp_wildcard.raw_notifications = [
];
tmp_wildcard.raw_notification_ws = [
];
tmp_wildcard.notification_reqs = [[
]];
tmp_wildcard.notice_reqs = [[
]];
tmp_wildcard.reqs = [[
"!self",
]];

ENUM=0;
var FINALE_WILDCARD_COMMAND_NULL     = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_SPEAK    = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_NOTEBOOK = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_COUNT    = ENUM; ENUM++;

//members are one of the following: (ensure all speak_fqid exist on a person w/in the room)
//{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.path.to.speak" },
//{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.path.to.entry", prompt_raw:"I need to show them I know blah blah", prompt_w:tmp_level.notifications_w, fail:[ "tunic.path.to.speak", "tunic.path.to.speak" ] },

tmp_wildcard.commands = [ //NOTE- CHANGING ORDERING WILL RESULT IN NECESSARY CHANGE TO HACKME
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_0.hall.boss.chap1_finale_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_tunic", prompt_raw:"I'll show her my photo of the shirt to remind her.", prompt_w:220, fail:["tunic.capitol_0.hall.boss.chap1_finale_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_0.hall.boss.chap1_finale_1" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"HACKME", prompt_raw:"What evidence do I have that the shirt isn't a basketball jersey?", prompt_w:220, fail:["tunic.capitol_0.hall.boss.chap1_finale_1_fail"] },

//pick slip
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_0.hall.boss.chap1_finale_slipfirst_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_basketballplaque", prompt_raw:"Why is the date on the slip relevant?", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_0.hall.boss.chap1_finale_slipfirst_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_0.hall.boss.chap1_finale_slipfirst_1" },

//pick tunic
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_0.hall.boss.chap1_finale_plaquefirst_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanerslip", prompt_raw:"Why does it matter that the basketball team started in 1974?", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_0.hall.boss.chap1_finale_plaquefirst_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_0.hall.boss.chap1_finale_plaquefirst_1" },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_0.hall.boss.chap1_finale_2" },
];

for(var i = 0; i < tmp_wildcard.commands.length; i++)
{
  var c = tmp_wildcard.commands[i];
  if(c.command == FINALE_WILDCARD_COMMAND_NOTEBOOK) c.prompt = stextToLines(c.prompt_raw, c.prompt_w);
}

//view
{
  var self = tmp_wildcard;

  self.failed = 0;
  self.failed_command_i = 0;
  self.cur_command_i = 0;
  self.cur_command = 0;
  self.cur_speak = 0;
  self.person = 0;
  self.cur_speak_command_i = 0;
  self.revert_commands; //set to the true, "canonical" commands for easy revert on leave

  self.bubble_color = "#242224";
  self.text_color = white;
  self.hover_color = "#4EBBC5";

  ENUM = 0;
  var UI_STATE_NULL   = ENUM; ENUM++;
  var UI_STATE_IN     = ENUM; ENUM++;
  var UI_STATE_SELECT = ENUM; ENUM++;
  var UI_STATE_OUT    = ENUM; ENUM++;
  var UI_STATE_COUNT  = ENUM; ENUM++;

  self.ui_state = UI_STATE_NULL;
  self.ui_state_t = 0;
  self.ui_state_t_max = [];
  self.ui_state_t_max[UI_STATE_IN]     = 30;
  self.ui_state_t_max[UI_STATE_SELECT] = 0;
  self.ui_state_t_max[UI_STATE_OUT]    = 10;
  self.ui_state_p = 0;

  self.consume_command = function()
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      self.cur_speak = find(self.cur_command.speak_fqid);
      self.cur_speak.pre_met = true;
      self.cur_speak.met = true;
      self.person = find(self.cur_speak.fqid.replace("."+self.cur_speak.id,""));
      self.cur_speak_command_i = 0;
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_notebookview.exit_available = 0;
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
    }
  }
  self.consume_self = function(wildcard)
  {
    self = wildcard;
    self.revert_commands = self.commands;
    self.failed = 0;
    self.failed_command_i = 0;
    self.cur_command_i = 0;
    self.cur_command = self.commands[self.cur_command_i];
    self.consume_command();

    my_notebookview.unlock_content();
  }

  self.dismiss = function()
  {
    if(self.cur_speak_command_i < self.cur_speak.commands.length-1)
    {
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak_command_i++;
    }
    else if(self.cur_speak_command_i == self.cur_speak.commands.length-1)
    {
      self.ui_state = UI_STATE_NULL;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak = 0;
      self.cur_speak_command_i = 0;

      self.cur_command_i++;
      if(self.cur_command_i >= self.commands.length)
      {
        if(self.commands != self.revert_commands)
        {
          self.commands = self.revert_commands;
          self.failed = 0;
          self.cur_command_i = self.failed_command_i;
          self.cur_command = self.commands[self.cur_command_i];
          self.consume_command();
          self.ui_state = UI_STATE_IN;
          self.ui_state_t = 0;
          self.ui_state_p = 0;
        }
        else
        {
          state_from = state_cur;
          state_to = state_stack;
          state_cur = STATE_TRANSITION;
          state_t = 0;
          my_notebookview.exit_available = 1;
        }
      }
      else
      {
        self.cur_command = self.commands[self.cur_command_i];
        self.consume_command();
      }
    }
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.speak_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.cur_speak_command;
    self.consume_speak_command = function(s)
    {
      self.cur_speak_command = s;
      self.x = self.cur_speak_command.x;
      self.y = self.cur_speak_command.y;
      self.w = self.cur_speak_command.w;
      self.h = self.cur_speak_command.h;
      self.cur_speak_command.wx = worldSpaceXpt(my_camera,canv,self.cur_speak_command.x);
      self.cur_speak_command.wy = worldSpaceYpt(my_camera,canv,self.cur_speak_command.y);
    }
    self.edit = function()
    {
      self.cur_speak_command.x = self.x;
      self.cur_speak_command.y = self.y;
      self.cur_speak_command.w = self.w;
      self.cur_speak_command.h = self.h;
      self.cur_speak_command.wx = worldSpaceXpt(my_camera,canv,self.cur_speak_command.x);
      self.cur_speak_command.wy = worldSpaceYpt(my_camera,canv,self.cur_speak_command.y);

      self.cur_speak_command.atext = stextToLines(self.cur_speak_command.raw_atext, self.cur_speak_command.w);
    }
  })();
  self.dragStart = function(evt)
  {
    self.edit_o = 0;
    if(self.cur_command.command != FINALE_WILDCARD_COMMAND_SPEAK) return;
    if(!self.edit_o && ptWithinBox(self.cur_speak.commands[self.cur_speak_command_i],evt.doX,evt.doY)) { self.edit_o = self.speak_editor; self.speak_editor.consume_speak_command(self.cur_speak.commands[self.cur_speak_command_i]); self.cur_speak.dirty = true; }

    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w)//right 10%
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_o == self.speak_editor)   self.speak_editor.edit();
    else worldSpace(my_camera,canv,self.edit_o);
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      my_cursor.mode = CURSOR_NORMAL;

      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];

      var x = speak_command.x;
      var y = speak_command.y+5;
      var w = speak_command.w;
      var h = speak_command.h*speak_command.atext.length;
      if(ptWithin(x,y,w,h,evt.doX,evt.doY))
        my_cursor.mode = CURSOR_UI;
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_cursor.mode = CURSOR_NORMAL;
      for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
        if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && my_notebookview.cache_available_entrys[i].interactive && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
        {
          my_cursor.mode = CURSOR_UI;
          if(!my_notebookview.cache_available_entrys[i].hoverexpand) my_notebookview.cache_available_entrys[i].hoverexpand = 0;
          my_notebookview.cache_available_entrys[i].hovering = 1;
        }
        else my_notebookview.cache_available_entrys[i].hovering = 0;
    }
  }
  self.unhover = function(evt)
  {
    for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
      my_notebookview.cache_available_entrys[i].hovering = 0;
  }

  self.click = function(evt)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      self.ui_state_t = self.ui_state_t_max[self.ui_state];

      if(self.ui_state != UI_STATE_OUT)
      {
        self.ui_state_t = 0;
        self.ui_state_p = 0;
        self.ui_state = UI_STATE_OUT;
      }
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      if(self.ui_state != UI_STATE_SELECT) return;
      var bogus_state_from = 99999999;
      var saved_state_from = state_from;
      state_from = bogus_state_from;
      var saved_state_to = state_to;
      var saved_state_cur = state_cur;
      var saved_state_t = state_t;
      var saved_page = my_notebookview.page;
      my_notebookview.click(evt);
      if(state_from != bogus_state_from) //intercepted x click
      {
        //re-set to correct info
        state_from = saved_state_from;
        state_to = saved_state_to;
        state_cur = saved_state_cur;
        state_t = saved_state_t;

        self.failed = 1;
        self.failed_command_i = self.cur_command_i;

        self.ui_state_t = 0;
        self.ui_state_p = 0;
        self.ui_state = UI_STATE_OUT;
      }
      else if(my_notebookview.page != saved_page) //intercepted page turn
      {
        //do nothing- allow turn
      }
      else
      {
        //find response
        for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
        {
          if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && my_notebookview.cache_available_entrys[i].interactive && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
          {
            if(self.cur_command.entry_fqid == "HACKME")
            {
              if(my_notebookview.cache_available_entrys[i].fqid == "tunic.entry_cleanerslip")
                self.commands.splice(7,3);
              else if(my_notebookview.cache_available_entrys[i].fqid == "tunic.entry_basketballplaque")
                self.commands.splice(4,3);
              else
              {
                self.failed = 1;
                self.failed_command_i = self.cur_command_i;
              }
            }
            else if(my_notebookview.cache_available_entrys[i].fqid != self.cur_command.entry_fqid)
            {
              self.failed = 1;
              self.failed_command_i = self.cur_command_i;
            }

            self.ui_state_t = 0;
            self.ui_state_p = 0;
            self.ui_state = UI_STATE_OUT;
          }
        }
      }
    }
  }

  self.tick = function()
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];
      speak.animcycle_inst.tick();
      speak_command.x = screenSpaceXpt(my_camera,canv,speak_command.wx);
      speak_command.y = screenSpaceYpt(my_camera,canv,speak_command.wy);

      self.ui_state_t++;
      self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
      switch(self.ui_state)
      {
        case UI_STATE_IN: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT: if(self.ui_state_p >= 1) self.dismiss(); break;
      }
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_notebookview.tick();

      self.ui_state_t++;
      self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
      switch(self.ui_state)
      {
        case UI_STATE_IN: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT: if(self.ui_state_p >= 1)
        {
          if(self.failed)
          {
            if(self.cur_command.fail.length)
            {
              var bogus_commands = [];
              for(var i = 0; i < self.cur_command.fail.length; i++)
                bogus_commands.push({command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:self.cur_command.fail[i] });
              self.commands = bogus_commands;
              self.cur_command_i = 0;
              self.cur_command = self.commands[self.cur_command_i];
              self.consume_command();
            }
            else
            {
              state_from = state_cur;
              state_to = state_stack;
              state_cur = STATE_TRANSITION;
              state_t = 0;
            }
          }
          else
          {
            self.ui_state = UI_STATE_NULL;
            self.ui_state_t = 0;
            self.ui_state_p = 0;
            self.cur_speak = 0;
            self.cur_speak_command_i = 0;

            self.cur_command_i++;
            if(self.cur_command_i >= self.commands.length)
            {
              state_from = state_cur;
              state_to = state_stack;
              state_cur = STATE_TRANSITION;
              state_t = 0;
              self.commands = self.revert_commands;
            }
            else
            {
              self.cur_command = self.commands[self.cur_command_i];
              self.consume_command();
            }
          }
        }
        break;
      }
    }
  }

  self.draw = function(t)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      if(self.ui_state == UI_STATE_NULL) return;

      var yoff = 0;
      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];
      var oyoff;

      var a = 1;
      switch(self.ui_state)
      {
        case UI_STATE_IN:     a = bubble_in_a(self.ui_state_p); yoff = bubble_in_y(self.ui_state_p); break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT:    a = bubble_out_a(self.ui_state_p); yoff = bubble_out_y(self.ui_state_p); break;
      }
      ctx.globalAlpha = a;

      var b = 10;
      ctx.fillStyle = self.bubble_color;
      fillRRect(speak_command.x-b-5,speak_command.y-b+5+yoff,speak_command.w+b*2+10,speak_command.h*speak_command.atext.length+b*2+5,b,ctx);

      //tail
      var y = speak_command.y-b+5+yoff+speak_command.h*speak_command.atext.length+b*2+5-0.5;
      var x;
      var w = 20;
      var h = 20;
      if(speak_command.speaker == SPEAKER_PERSON)
        x = clamp(speak_command.x, speak_command.x+speak_command.w-w, self.person.x + self.person.w/2-w/2);
      else
        x = clamp(speak_command.x, speak_command.x+speak_command.w-w, my_avatar.x + my_avatar.w/2-w/2);
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+w/2-2,y+h-2);
      ctx.quadraticCurveTo(x+w/2,y+h,x+w/2+2,y+h-2);
      ctx.lineTo(x+w,y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = self.text_color;
      ctx.font = text_font;
      oyoff = 0;
      for(var j = 0; j < speak_command.atext.length; j++)
      {
        ctx.fillText(speak_command.atext[j],speak_command.x,speak_command.y+yoff+oyoff+speak_command.h);
        oyoff += speak_command.h;
      }

      ctx.globalAlpha = 1;

      if(DEBUG)
      {
        ctx.strokeStyle = white;

        yoff = 0;
        oyoff = 0;
        for(var j = 0; j < speak_command.atext.length; j++)
        {
          ctx.strokeRect(speak_command.x,speak_command.y+yoff,speak_command.w,speak_command.h);
          oyoff += speak_command.h;
        }
      }
    }

    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      var t = 1;
      if(self.ui_state == UI_STATE_IN)     t = self.ui_state_p;
      if(self.ui_state == UI_STATE_SELECT) ;
      if(self.ui_state == UI_STATE_OUT)    t = 1-self.ui_state_p;
      my_notebookview.draw(t);

      var a = 1;
      switch(self.ui_state)
      {
        case UI_STATE_IN:     a = bubble_in_a(self.ui_state_p); yoff = bubble_in_y(self.ui_state_p); break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT:    a = bubble_out_a(self.ui_state_p); yoff = bubble_out_y(self.ui_state_p); break;
      }
      ctx.globalAlpha = a;

      var yoff = 0;

      var b = 10;
      var h = cur_level.notifications_h*self.cur_command.prompt.length;
      var w = self.cur_command.prompt_w;
      var x = canv.width/2-w/2;
      var y = canv.height-30-h;
      ctx.fillStyle = self.bubble_color;
      fillRRect(x-b-5,y-b+5+yoff,w+b*2+10,h+b*2+5,b,ctx);
      ctx.fillStyle = self.text_color;
      var oyoff = 0;
      for(var i = 0; i < self.cur_command.prompt.length; i++)
      {
        ctx.fillText(self.cur_command.prompt[i],x,y+yoff+cur_level.notifications_h+oyoff);
        oyoff += cur_level.notifications_h;
      }
      ctx.globalAlpha = 1;
    }

  }
}

tmp_wildcard.animcycle_inst = gen_animcycle_inst(tmp_wildcard.animcycle_id,tmp_level.animcycles);
tmp_wildcard.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_wildcard.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_wildcard.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_wildcard.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_wildcard.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_wildcard.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_wildcard.raw_notifications.length; i++) tmp_wildcard.notifications[i] = stextToLines(tmp_wildcard.raw_notifications[i], tmp_wildcard.raw_notification_ws[i] ? tmp_wildcard.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.wildcards.push(tmp_wildcard);
tmp_inert = new inert();
tmp_inert.id = "rotunda";
tmp_inert.fqid = "tunic.capitol_0.hall.rotunda";
{
tmp_inert.ww = 1019.7274168712107;
tmp_inert.wh = 267.73319864195986;
tmp_inert.wx = 30.234019141953524;
tmp_inert.wy = -442.418249480281;
tmp_inert.wz = 999;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "capitol_rotunda";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "capitol_1";
tmp_scene.fqid = "tunic.capitol_1";
{
tmp_scene.primary = false;
tmp_scene.ww = 130;
tmp_scene.wh = 142.99999999999997;
tmp_scene.wx = 24.999999999999986;
tmp_scene.wy = 21.499999999999986;
tmp_scene.hover_icon_wx = 20;
tmp_scene.hover_icon_wy = 41.99999999999999;
tmp_scene.animcycle_id = "scene_capitol";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
tmp_scene.deck_animcycle_ids = [
];
tmp_scene.notifications_persistent = 0;
tmp_scene.raw_notifications = [
];
tmp_scene.raw_notification_ws = [
];
tmp_scene.notification_reqs = [[
]];
tmp_scene.notice_reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
"!tunic.capitol_0.hall.chap1_finale_c",
]];
tmp_scene.reqs = [[
"tunic.historicalsociety.closet_dirty",
"!tunic.historicalsociety.basement.ch3start"
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "hall";
tmp_room.fqid = "tunic.capitol_1.hall";
{
tmp_room.primary = false;
tmp_room.ww = 2000;
tmp_room.wh = 1162;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_capitol_hall";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 1000;
tmp_room.nav_min_wz = 1;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:112.16666666666663, wy:-217.46969696969683, ww:1129.4848484848485, wh:217.6666666666667 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 648.2945573024847;
tmp_room.target_start_wy = -253.58367957138657;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.7606060606060605

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "chap2_finale_c";
tmp_cutscene.fqid = "tunic.capitol_1.hall.chap2_finale_c";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 159.0909090909091;
tmp_cutscene.wh = 330.3030303030303;
tmp_cutscene.wx = 298.6363636363635;
tmp_cutscene.wy = 40.30303030303011;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = -319.6969696969697;
tmp_cutscene.act_wy = -168.18181818181827;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 71.2121212121212;
tmp_cutscene.hover_icon_wy = 183.33333333333331;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -166.66666666666666;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "toentry";
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "gramps_walk";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "toentry";
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "gramps_walk";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "black";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "chapter3";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "chapter3";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter3";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -375.02578533227086;
tmp_cutscene_command.wy = 77.67729078258972;
tmp_cutscene_command.w = 211;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I figured out the shirt!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -263.57602230170926;
tmp_cutscene_command.wy = 115.51516519855994;
tmp_cutscene_command.w = 135;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "AND I know who took Teddy!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -96.90909140548425;
tmp_cutscene_command.wy = 224.60606063171858;
tmp_cutscene_command.w = 200.4878387451172;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Who on earth is Teddy?";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -68.121212124908;
tmp_cutscene_command.wy = 230.66666666685768;
tmp_cutscene_command.w = 182.48785400390625;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "And where's Leopold?";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 494;
tmp_cutscene_command.wy = 100.36363636363632;
tmp_cutscene_command.w = 84.75993347167969;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Here I am!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

template.js:1830 tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 100;
tmp_cutscene_command.wy = 50;
tmp_cutscene_command.t = 2;
tmp_cutscene_command.end_t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "gramps";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = 166.66666666666666;
tmp_cutscene_command.t = 50;
tmp_cutscene_command.end_t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 140.969696969697;
tmp_cutscene_command.wy = 323.0909090909091;
tmp_cutscene_command.w = 119;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Sorry for the delay, Boss.";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 139.45454545454552;
tmp_cutscene_command.wy = 326.1212121212122;
tmp_cutscene_command.w = 224;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "There was a bit of a...situation...in my office.";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -421.1515151515149;
tmp_cutscene_command.wy = 76.12121212121198;
tmp_cutscene_command.w = 236.7518310546875;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wells sabotaged Gramps!";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -345.39393939393926;
tmp_cutscene_command.wy = 70.06060606060606;
tmp_cutscene_command.w = 187.09585571289062;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "AND he stole Teddy!!!";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -146.90909090909085;
tmp_cutscene_command.wy = 276.121212121212;
tmp_cutscene_command.w = 134.2478790283203;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Whoa there, Jo.";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -207.5151515151514;
tmp_cutscene_command.wy = 273.09090909090907;
tmp_cutscene_command.w = 170;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "One step at a time.";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -330.24242424242425;
tmp_cutscene_command.wy = 277.63636363636357;
tmp_cutscene_command.w = 252;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Did you figure out the shirt?";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "chap2_finale";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 51;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -86.30303030303037;
tmp_cutscene_command.wy = 351.8787878787878;
tmp_cutscene_command.w = 146;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I knew you could do it, Jolie!";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -231.75757575757578;
tmp_cutscene_command.wy = 138.2424242424242;
tmp_cutscene_command.w = 145;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "But wait, it gets even better!";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -325.69696969696975;
tmp_cutscene_command.wy = 107.93939393939385;
tmp_cutscene_command.w = 261;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I also know who stole Teddy!";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 550.060606060606;
tmp_cutscene_command.wy = 129.15151515151516;
tmp_cutscene_command.w = 51.15997314453125;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Whew.";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 0;
tmp_cutscene_command.wy = 0;
tmp_cutscene_command.t = 53;
tmp_cutscene_command.end_t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "youngboy";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -581.7575757575758;
tmp_cutscene_command.wy = 247.3333333333332;
tmp_cutscene_command.w = 351;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You wouldn't BELIEVE the day I've had...";
tmp_cutscene_command.t = 100;
template.js:1830 tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -125.6969696969696;
tmp_cutscene_command.wy = 70.06060606060595;
tmp_cutscene_command.w = 44.07997131347656;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "YOU!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -18.121212121212103;
tmp_cutscene_command.wy = 273.090909090909;
tmp_cutscene_command.w = 9.831985473632812;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "?";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -312.06060606060623;
tmp_cutscene_command.wy = 73.09090909090907;
tmp_cutscene_command.w = 165.49586486816406;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "YOU STOLE TEDDY!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -306.0000000000001;
tmp_cutscene_command.wy = 239.75757575757564;
tmp_cutscene_command.w = 168.72784423828125;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I did no such thing!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -302.9696969696969;
tmp_cutscene_command.wy = 241.2727272727272;
tmp_cutscene_command.w = 165.8798828125;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wait- who's Teddy?";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -278.72727272727275;
tmp_cutscene_command.wy = 73.09090909090907;
tmp_cutscene_command.w = 143.223876953125;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Don't play dumb!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 147.03030303030286;
tmp_cutscene_command.wy = 277.63636363636346;
tmp_cutscene_command.w = 95.99189758300781;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Easy, Jolie.";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 147.03030303030272;
tmp_cutscene_command.wy = 280.66666666666646;
tmp_cutscene_command.w = 286;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Why don't you make your case?";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "chap2_teddy_finale";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 101;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 143.99999999999977;
tmp_cutscene_command.wy = 321.57575757575745;
tmp_cutscene_command.w = 214;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Keep your chin up, Jo. We'll find Teddy.";
tmp_cutscene_command.t = 102;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 306.121212121212;
tmp_cutscene_command.wy = 276.121212121212;
tmp_cutscene_command.w = 191;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "And when you do, keep him out of my museum!";
tmp_cutscene_command.t = 102;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = 102;
tmp_cutscene_command.end_t = 102;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter3";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = 102;
tmp_cutscene_command.end_t = 102;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 103;
tmp_cutscene_command.end_t = 152;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter3";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 202;
tmp_cutscene_command.end_t = 252;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter3";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 402;
tmp_cutscene_command.end_t = 452;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 452;
tmp_cutscene_command.end_t = 482;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 300.060606060606;
tmp_cutscene_command.wy = 276.121212121212;
tmp_cutscene_command.w = 146;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Jolie- good work with the shirt.";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 298.5454545454544;
template.js:1827 tmp_cutscene_command.wy = 277.63636363636357;
tmp_cutscene_command.w = 171;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Leopold- I need this written up A.S.A.P.";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 145.5151515151517;
tmp_cutscene_command.wy = 276.121212121212;
tmp_cutscene_command.w = 113.67988586425781;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Alright boss!";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 150.06060606060623;
tmp_cutscene_command.wy = 326.12121212121207;
tmp_cutscene_command.w = 157;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Jolie- meet me back at my office.";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 156.12121212121227;
tmp_cutscene_command.wy = 323.090909090909;
tmp_cutscene_command.w = 177;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "We'll write this up, and then find Teddy!";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "gramps_walk";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "toentry";
tmp_cutscene_command.t = 484;
tmp_cutscene_command.end_t = 542;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "null";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = 543;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 999999;
tmp_cutscene_command.wy = 999999;
tmp_cutscene_command.t = 544;
tmp_cutscene_command.end_t = 544;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 9.151515151515305;
tmp_cutscene_command.wy = 251.87878787878776;
tmp_cutscene_command.w = 102.11187744140625;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm out too.";
tmp_cutscene_command.t = 545;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 15.212121212121481;
tmp_cutscene_command.wy = 291.27272727272714;
tmp_cutscene_command.w = 176;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I hope you find your skunk, or whatever.";
tmp_cutscene_command.t = 545;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "toentry";
tmp_cutscene_command.t = 545;
tmp_cutscene_command.end_t = 602;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "null";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = 602;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 999999;
tmp_cutscene_command.wy = 999999;
tmp_cutscene_command.t = 602;
tmp_cutscene_command.end_t = 602;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 603;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "boss";
tmp_person.fqid = "tunic.capitol_1.hall.boss";
{
tmp_person.ww = 139.46770625546648;
tmp_person.wh = 275.4499825475462;
tmp_person.wx = 259.5530192269189;
tmp_person.wy = 2.35095054543865;
tmp_person.wz = -1;
tmp_person.act_wx = -343.86420332209167;
tmp_person.act_wy = -185.35322339982605;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 72.77820480249332;
tmp_person.hover_icon_wy = 183.46748014757537;
tmp_person.animcycle_id = "boss";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_0";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_0";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -266.5281481721181;
tmp_speak_command.wy = 73.85937718459314;
tmp_speak_command.w = 136.62387084960938;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yes! I solved it!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 300.89853137558043;
tmp_speak_command.wy = 233.63695827028494;
tmp_speak_command.w = 193.3598175048828;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "So? What's the story?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -392.1212232498169;
tmp_speak_command.wy = 70.81818220541194;
tmp_speak_command.w = 218.34381103515625;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, remember that slip?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 307.8787767501832;
tmp_speak_command.wy = 229.9090912963208;
tmp_speak_command.w = 89.41592407226562;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What slip?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_0_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_0_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -22.57829585861238;
tmp_speak_command.wy = 379.91950304014085;
tmp_speak_command.w = 147.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That is definitely no slip...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_1";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_1";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 301.664128383812;
tmp_speak_command.wy = 234.4649575855953;
tmp_speak_command.w = 147.255859375;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Okay. What is it?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -426.8705983594989;
tmp_speak_command.wy = 71.66969845671701;
tmp_speak_command.w = 240.27978515625;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It's a dry cleaner's receipt!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 301.1178547643741;
tmp_speak_command.wy = 279.34860169684055;
tmp_speak_command.w = 144;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Oh? How did you figure that out?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_1_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_1_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_2";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_2";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 306.2095829292664;
tmp_speak_command.wy = 279.91950304014074;
tmp_speak_command.w = 156.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "An expert opinion. Good thinking!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 300.14897686866016;
tmp_speak_command.wy = 273.85889697953485;
tmp_speak_command.w = 130.09576416015625;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Where did you go from there?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -475.3554468443474;
tmp_speak_command.wy = 118.63939542641384;
tmp_speak_command.w = 273.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, I had to figure out WHICH cleaner the receipt was from...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 301.11785476437444;
tmp_speak_command.wy = 276.3182986665374;
tmp_speak_command.w = 147.86380004882812;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "How did you narrow it down?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_2_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_2_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_3";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_3";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 203.17927989896336;
tmp_speak_command.wy = 296.5861697068076;
tmp_speak_command.w = 254.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "And that turned out to be the dry cleaner with the slip?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 178.9368556565391;
tmp_speak_command.wy = 267.7982909189287;
tmp_speak_command.w = 264.4237365722656;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's quite a stroke of luck.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -334.4463559352565;
tmp_speak_command.wy = 147.4272742142927;
tmp_speak_command.w = 219.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, Gramps always says I'm his good luck charm!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 246.57240021891974;
tmp_speak_command.wy = 300.5607229089616;
tmp_speak_command.w = 163;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "So what did you do at the cleaner's?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -270.8099922988929;
tmp_speak_command.wy = 151.97272875974735;
tmp_speak_command.w = 177.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I wanted to find out who the owner was-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -192.02211351101403;
tmp_speak_command.wy = 161.06363785065645;
tmp_speak_command.w = 122.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "So I checked their records.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_3_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_3_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_4";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_4";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -314.7493862382869;
tmp_speak_command.wy = 118.63939542641384;
tmp_speak_command.w = 167.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It belonged to Theodora Youmans!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 228.93685565653908;
tmp_speak_command.wy = 298.10132122195904;
tmp_speak_command.w = 201.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmm. That name sounds awfully familiar...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 218.33079505047863;
tmp_speak_command.wy = 246.58616970680754;
tmp_speak_command.w = 230.53579711914062;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Who is Theodora Youmans?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -219.29484078374142;
tmp_speak_command.wy = 162.57878936580784;
tmp_speak_command.w = 135.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's the same question I had.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -325.3554468443473;
tmp_speak_command.wy = 155.00303179005027;
tmp_speak_command.w = 206.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "So I went to the library to get some answers.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_4_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_4_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_5";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_5";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 247.1186738383573;
tmp_speak_command.wy = 298.10132122195904;
tmp_speak_command.w = 230.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Of course! Theodora Youmans was a suffragist!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -376.870598359499;
tmp_speak_command.wy = 155.00303179005044;
tmp_speak_command.w = 236.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yep! That means she fought for women's right to vote.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 236.51261323229656;
tmp_speak_command.wy = 246.5861697068076;
tmp_speak_command.w = 145.98385620117188;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Very good, Jolie!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 230.45200717169055;
tmp_speak_command.wy = 342.0407151613529;
tmp_speak_command.w = 226.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The fight for women's suffrage is an important part of Wisconsin history.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 241.05806777775112;
tmp_speak_command.wy = 298.101321221959;
tmp_speak_command.w = 152.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "But where does the shirt come in?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_5_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_5_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_6";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_6";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 221.36109808078172;
tmp_speak_command.wy = 252.64677576741371;
tmp_speak_command.w = 144.087890625;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wow! That's her!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 215.30049202017554;
tmp_speak_command.wy = 296.5861697068076;
tmp_speak_command.w = 235.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "So Youmans wore this shirt in women's rights marches!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 228.93685565653922;
tmp_speak_command.wy = 296.5861697068076;
tmp_speak_command.w = 151.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What a fantastic piece of history-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 207.72473444441792;
tmp_speak_command.wy = 251.1316242522621;
tmp_speak_command.w = 265.8878173828125;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "and what impeccable research!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_6_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.chap2_finale_6_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "haveyougotit";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.haveyougotit";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.historicalsociety.closet_dirty",
"!tunic.historicalsociety.stacks.journals.pic_2.bingo",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -175.35544692962122;
tmp_speak_command.wy = 329.24545603639;
tmp_speak_command.w = 278.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Jolie! I was hoping you'd stop by. Any news on the shirt artifact?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -369.29484086901516;
tmp_speak_command.wy = 103.48788027881426;
tmp_speak_command.w = 195.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I haven't quite figured it out just yet...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -90.50696208113642;
tmp_speak_command.wy = 374.70000149093556;
tmp_speak_command.w = 225.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, get on it. I'm counting on you and your gramps to figure this out!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "writeitup";
tmp_speak.fqid = "tunic.capitol_1.hall.boss.writeitup";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.capitol_1.hall.chap2_finale",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -183.20767292686372;
tmp_speak_command.wy = 328.40435152498935;
tmp_speak_command.w = 284.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm going to need you and Leopold to write this up A.S.A.P.!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -157.42923128427043;
tmp_speak_command.wy = 329.9188223238029;
tmp_speak_command.w = 267.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The fight to win votes for women needs to be celebrated!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.capitol_1.hall.gramps";
{
tmp_person.ww = 166.66666666666666;
tmp_person.wh = 289.3939393939394;
tmp_person.wx = 46.96969696969707;
tmp_person.wy = 16.666666666666657;
tmp_person.wz = 0;
tmp_person.act_wx = -86.36363636363636;
tmp_person.act_wy = -157.57575757575756;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 80.3030303030303;
tmp_person.hover_icon_wy = 166.66666666666666;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.capitol_0.hall.chap1_finale_c",
],[
"_tunic.capitol_1.hall.chap2_finale_c",
"!tunic.capitol_1.hall.chap2_finale_c",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_0";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_0";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -172.92223104626729;
tmp_speak_command.wy = 69.33461620414951;
tmp_speak_command.w = 72.32794189453125;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Alright-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -350.6244026338402;
tmp_speak_command.wy = 70.00107756869986;
tmp_speak_command.w = 190.76785278320312;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I first noticed Teddy-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -565.7681441726156;
tmp_speak_command.wy = 71.51574670020713;
tmp_speak_command.w = 333.5916748046875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "(Teddy is the name of my pet badger...)";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -400.61662013957095;
tmp_speak_command.wy = 118.48544311876992;
tmp_speak_command.w = 223;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "was stolen when Gramps's office was ransacked.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 141.21211008351605;
tmp_speak_command.wy = 320.8181822054117;
tmp_speak_command.w = 147;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "How do you know he was stolen?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_0_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_0_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -22.57829585861238;
tmp_speak_command.wy = 379.91950304014085;
tmp_speak_command.w = 147.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That is definitely no slip...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_1";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_1";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -293.7904170707336;
tmp_speak_command.wy = 72.34374546438312;
tmp_speak_command.w = 151.52786254882812;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found his scarf!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -377.123750404067;
tmp_speak_command.wy = 117.7982909189287;
tmp_speak_command.w = 208.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Teddy would NEVER leave without his scarf!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 181.96715868684234;
tmp_speak_command.wy = 229.91950304014085;
tmp_speak_command.w = 239.17579650878906;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Alright, everybody hold up-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 178.93685565653925;
tmp_speak_command.wy = 278.40435152498935;
tmp_speak_command.w = 239.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Are you telling me there's a LIVE badger in MY museum?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -587.7298110101274;
tmp_speak_command.wy = 69.31344243408017;
tmp_speak_command.w = 348.39971923828125;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "WE'LL DEAL WITH THAT LATER, MERRIAM.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 141.05806777775135;
tmp_speak_command.wy = 276.88920000983785;
tmp_speak_command.w = 51.927947998046875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmmm.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.28091679201643;
tmp_speak_command.wy = 321.6696984567168;
tmp_speak_command.w = 179.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What other evidence do you have?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_1_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_1_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_2";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_2";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -330.15405343436987;
tmp_speak_command.wy = 117.79829091892859;
tmp_speak_command.w = 176.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found a coffee cup from Bean Town!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -281.6692049495214;
tmp_speak_command.wy = 114.76798788862564;
tmp_speak_command.w = 144.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "And Gramps only drinks Holdgers!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 142.57321929290265;
tmp_speak_command.wy = 276.88920000983785;
tmp_speak_command.w = 106.26390075683594;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's true.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 144.08837080805458;
tmp_speak_command.wy = 325.37404849468635;
tmp_speak_command.w = 196.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "But what does that have to do with Wells?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_2_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_2_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_3";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_3";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -466.51768979800624;
tmp_speak_command.wy = 120.8285939492317;
tmp_speak_command.w = 268.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The archivist said he saw Wells at Bean Town this morning!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -493.7904170707336;
tmp_speak_command.wy = 285.98010910074703;
tmp_speak_command.w = 293.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I mean, I WAS there, but that doesn't mean I stole your badger!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -390.50696199586275;
tmp_speak_command.wy = 321.669698456717;
tmp_speak_command.w = 295.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You've also just confirmed that the ARCHIVIST was at Bean Town.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 300.40212891322835;
tmp_speak_command.wy = 270.1545469415655;
tmp_speak_command.w = 177.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Heck, I stop at Bean Town every day!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -306.4579028113834;
tmp_speak_command.wy = 73.28799563623446;
tmp_speak_command.w = 162.9998321533203;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "But...there's more!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_3_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_3_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 142.57321929290265;
tmp_speak_command.wy = 346.5861697068076;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_4";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_4";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -543.5372650261656;
tmp_speak_command.wy = 71.66969845671701;
tmp_speak_command.w = 318.59173583984375;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wells was looking for a taxidermist!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -407.17362866252927;
tmp_speak_command.wy = 74.70000148701996;
tmp_speak_command.w = 228.2318115234375;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "HE WANTS TO KILL TEDDY!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 300.14897686866016;
tmp_speak_command.wy = 228.40435152498935;
tmp_speak_command.w = 94.11990356445312;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Actually...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 301.66412838381177;
tmp_speak_command.wy = 279.9195030401408;
tmp_speak_command.w = 160.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I asked Wells to find a taxidermist.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 301.66412838381177;
tmp_speak_command.wy = 278.40435152498935;
tmp_speak_command.w = 193.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I want to have animals at the exhibit!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 304.69443141411443;
tmp_speak_command.wy = 322.3437454643832;
tmp_speak_command.w = 179.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'd prefer live animals. But we need a back-up plan.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -205.91162919194556;
tmp_speak_command.wy = 69.31344243408034;
tmp_speak_command.w = 96.9998779296875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wha...but...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -377.12375040406687;
tmp_speak_command.wy = 72.34374546438329;
tmp_speak_command.w = 209.31982421875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Then who took Teddy???";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -204.14332563222607;
tmp_speak_command.wy = 245.91212269914132;
tmp_speak_command.w = 104.39189147949219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "No idea, kid.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -278.3857498746504;
tmp_speak_command.wy = 242.88181966883803;
tmp_speak_command.w = 147.51986694335938;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "But it wasn't me.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_4_fail";
tmp_speak.fqid = "tunic.capitol_1.hall.gramps.chap2_teddy_finale_4_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "wells";
tmp_person.fqid = "tunic.capitol_1.hall.wells";
{
tmp_person.ww = 168.18181816536378;
tmp_person.wh = 327.272727272716;
tmp_person.wx = 9.848484379258224;
tmp_person.wy = 21.212121212461085;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "youngboy";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"_tunic.capitol_1.hall.chap2_finale_c",
"!tunic.capitol_1.hall.chap2_finale_c",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.capitol_1.hall.wells.hub";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 100;
tmp_speak_command.wy = 100;
tmp_speak_command.w = 36.759979248046875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "null";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.capitol_1.hall.toentry";
{
tmp_porthole.ww = 231.7272727272727;
tmp_porthole.wh = 378.6363636363637;
tmp_porthole.wx = 790.8636363636366;
tmp_porthole.wy = -71.22727272727273;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -140.9090909090909;
tmp_porthole.act_wy = -87.87878787878788;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 3.03030303030303;
tmp_porthole.hover_icon_wy = 62.12121212121212;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_wildcard = new wildcard();
tmp_wildcard.id = "chap2_finale";
tmp_wildcard.fqid = "tunic.capitol_1.hall.chap2_finale";
{
tmp_wildcard.ww = 55.70019434333287;
tmp_wildcard.wh = 46.010023193258014;
tmp_wildcard.wx = -226.69441395415663;
tmp_wildcard.wy = 361.7411092807203;
tmp_wildcard.wz = 1;
tmp_wildcard.act_wx = -125.76177653111915;
tmp_wildcard.act_wy = -86.36415039355171;
tmp_wildcard.act_anim = 1;
tmp_wildcard.hover_icon_wx = 34.848484848490784;
tmp_wildcard.hover_icon_wy = -34.8484848481152;
tmp_wildcard.animcycle_id = "null";
tmp_wildcard.hover_cursor_animcycle_id = "hover_ui";
tmp_wildcard.hover_icon_animcycle_id = "null";
tmp_wildcard.notice_icon_animcycle_id = "null";
tmp_wildcard.deck_animcycle_ids = [
];
tmp_wildcard.audio_id = "null";
tmp_wildcard.notifications_persistent = 0;
tmp_wildcard.raw_notifications = [
];
tmp_wildcard.raw_notification_ws = [
];
tmp_wildcard.notification_reqs = [[
]];
tmp_wildcard.notice_reqs = [[
]];
tmp_wildcard.reqs = [[
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
"!self",
]];

ENUM=0;
var FINALE_WILDCARD_COMMAND_NULL     = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_SPEAK    = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_NOTEBOOK = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_COUNT    = ENUM; ENUM++;

//members are one of the following: (ensure all speak_fqid exist on a person w/in the room)
//{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.path.to.speak" },
//{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.path.to.entry", prompt_raw:"I need to show them I know blah blah", prompt_w:tmp_level.notifications_w, fail:[ "tunic.path.to.speak", "tunic.path.to.speak" ] },

tmp_wildcard.commands = [
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.boss.chap2_finale_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanerslip", prompt_raw:"I need to show her the slip I found on the shirt.", prompt_w:230, fail:["tunic.capitol_1.hall.boss.chap2_finale_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.boss.chap2_finale_1" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_expert", prompt_raw:"How did I learn it was from a dry cleaner?", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_1.hall.boss.chap2_finale_1_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.boss.chap2_finale_2" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt_raw:"How did I learn which dry cleaner to go to?", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_1.hall.boss.chap2_finale_2_fail"] },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.boss.chap2_finale_3" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_logbook", prompt_raw:"How did I find the shirt's owner?", prompt_w:150, fail:["tunic.capitol_1.hall.boss.chap2_finale_3_fail"] },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.boss.chap2_finale_4" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_newspaper", prompt_raw:"I'll show her why Youmans is famous", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_1.hall.boss.chap2_finale_4_fail"] },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.boss.chap2_finale_5" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_theodora", prompt_raw:"Time to show her Youmans wearing the shirt!", prompt_w:250, fail:["tunic.capitol_1.hall.boss.chap2_finale_5_fail"] },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.boss.chap2_finale_6" },

];

for(var i = 0; i < tmp_wildcard.commands.length; i++)
{
  var c = tmp_wildcard.commands[i];
  if(c.command == FINALE_WILDCARD_COMMAND_NOTEBOOK) c.prompt = stextToLines(c.prompt_raw, c.prompt_w);
}

//view
{
  var self = tmp_wildcard;

  self.failed = 0;
  self.failed_command_i = 0;
  self.cur_command_i = 0;
  self.cur_command = 0;
  self.cur_speak = 0;
  self.person = 0;
  self.cur_speak_command_i = 0;
  self.revert_commands; //set to the true, "canonical" commands for easy revert on leave

  self.bubble_color = "#242224";
  self.text_color = white;
  self.hover_color = "#4EBBC5";

  ENUM = 0;
  var UI_STATE_NULL   = ENUM; ENUM++;
  var UI_STATE_IN     = ENUM; ENUM++;
  var UI_STATE_SELECT = ENUM; ENUM++;
  var UI_STATE_OUT    = ENUM; ENUM++;
  var UI_STATE_COUNT  = ENUM; ENUM++;

  self.ui_state = UI_STATE_NULL;
  self.ui_state_t = 0;
  self.ui_state_t_max = [];
  self.ui_state_t_max[UI_STATE_IN]     = 30;
  self.ui_state_t_max[UI_STATE_SELECT] = 0;
  self.ui_state_t_max[UI_STATE_OUT]    = 10;
  self.ui_state_p = 0;

  self.consume_command = function()
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      self.cur_speak = find(self.cur_command.speak_fqid);
      self.cur_speak.pre_met = true;
      self.cur_speak.met = true;
      self.person = find(self.cur_speak.fqid.replace("."+self.cur_speak.id,""));
      self.cur_speak_command_i = 0;
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_notebookview.exit_available = 0;
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
    }
  }
  self.consume_self = function(wildcard)
  {
    self = wildcard;
    self.revert_commands = self.commands;
    self.failed = 0;
    self.failed_command_i = 0;
    self.cur_command_i = 0;
    self.cur_command = self.commands[self.cur_command_i];
    self.consume_command();

    my_notebookview.unlock_content();
  }

  self.dismiss = function()
  {
    if(self.cur_speak_command_i < self.cur_speak.commands.length-1)
    {
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak_command_i++;
    }
    else if(self.cur_speak_command_i == self.cur_speak.commands.length-1)
    {
      self.ui_state = UI_STATE_NULL;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak = 0;
      self.cur_speak_command_i = 0;

      self.cur_command_i++;
      if(self.cur_command_i >= self.commands.length)
      {
        if(self.commands != self.revert_commands)
        {
          self.commands = self.revert_commands;
          self.failed = 0;
          self.cur_command_i = self.failed_command_i;
          self.cur_command = self.commands[self.cur_command_i];
          self.consume_command();
          self.ui_state = UI_STATE_IN;
          self.ui_state_t = 0;
          self.ui_state_p = 0;
        }
        else
        {
          state_from = state_cur;
          state_to = state_stack;
          state_cur = STATE_TRANSITION;
          state_t = 0;
          my_notebookview.exit_available = 1;
        }
      }
      else
      {
        self.cur_command = self.commands[self.cur_command_i];
        self.consume_command();
      }
    }
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.speak_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.cur_speak_command;
    self.consume_speak_command = function(s)
    {
      self.cur_speak_command = s;
      self.x = self.cur_speak_command.x;
      self.y = self.cur_speak_command.y;
      self.w = self.cur_speak_command.w;
      self.h = self.cur_speak_command.h;
      self.cur_speak_command.wx = worldSpaceXpt(my_camera,canv,self.cur_speak_command.x);
      self.cur_speak_command.wy = worldSpaceYpt(my_camera,canv,self.cur_speak_command.y);
    }
    self.edit = function()
    {
      self.cur_speak_command.x = self.x;
      self.cur_speak_command.y = self.y;
      self.cur_speak_command.w = self.w;
      self.cur_speak_command.h = self.h;
      self.cur_speak_command.wx = worldSpaceXpt(my_camera,canv,self.cur_speak_command.x);
      self.cur_speak_command.wy = worldSpaceYpt(my_camera,canv,self.cur_speak_command.y);

      self.cur_speak_command.atext = stextToLines(self.cur_speak_command.raw_atext, self.cur_speak_command.w);
    }
  })();
  self.dragStart = function(evt)
  {
    self.edit_o = 0;
    if(self.cur_command.command != FINALE_WILDCARD_COMMAND_SPEAK) return;
    if(!self.edit_o && ptWithinBox(self.cur_speak.commands[self.cur_speak_command_i],evt.doX,evt.doY)) { self.edit_o = self.speak_editor; self.speak_editor.consume_speak_command(self.cur_speak.commands[self.cur_speak_command_i]); self.cur_speak.dirty = true; }

    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w)//right 10%
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_o == self.speak_editor)   self.speak_editor.edit();
    else worldSpace(my_camera,canv,self.edit_o);
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      my_cursor.mode = CURSOR_NORMAL;

      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];

      var x = speak_command.x;
      var y = speak_command.y+5;
      var w = speak_command.w;
      var h = speak_command.h*speak_command.atext.length;
      if(ptWithin(x,y,w,h,evt.doX,evt.doY))
        my_cursor.mode = CURSOR_UI;
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_cursor.mode = CURSOR_NORMAL;
      for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
        if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && my_notebookview.cache_available_entrys[i].interactive && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
        {
          my_cursor.mode = CURSOR_UI;
          if(!my_notebookview.cache_available_entrys[i].hoverexpand) my_notebookview.cache_available_entrys[i].hoverexpand = 0;
          my_notebookview.cache_available_entrys[i].hovering = 1;
        }
        else my_notebookview.cache_available_entrys[i].hovering = 0;
    }
  }
  self.unhover = function(evt)
  {
    for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
      my_notebookview.cache_available_entrys[i].hovering = 0;
  }

  self.click = function(evt)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      self.ui_state_t = self.ui_state_t_max[self.ui_state];

      if(self.ui_state != UI_STATE_OUT)
      {
        self.ui_state_t = 0;
        self.ui_state_p = 0;
        self.ui_state = UI_STATE_OUT;
      }
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      if(self.ui_state != UI_STATE_SELECT) return;
      var bogus_state_from = 99999999;
      var saved_state_from = state_from;
      state_from = bogus_state_from;
      var saved_state_to = state_to;
      var saved_state_cur = state_cur;
      var saved_state_t = state_t;
      var saved_page = my_notebookview.page;
      my_notebookview.click(evt);
      if(state_from != bogus_state_from) //intercepted x click
      {
        //re-set to correct info
        state_from = saved_state_from;
        state_to = saved_state_to;
        state_cur = saved_state_cur;
        state_t = saved_state_t;

        self.failed = 1;
        self.failed_command_i = self.cur_command_i;

        self.ui_state_t = 0;
        self.ui_state_p = 0;
        self.ui_state = UI_STATE_OUT;
      }
      else if(my_notebookview.page != saved_page) //intercepted page turn
      {
        //do nothing- allow turn
      }
      else
      {
        //find response
        for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
        {
          if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && my_notebookview.cache_available_entrys[i].interactive && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
          {
            if(my_notebookview.cache_available_entrys[i].fqid != self.cur_command.entry_fqid)
            {
              self.failed = 1;
              self.failed_command_i = self.cur_command_i;
            }

            self.ui_state_t = 0;
            self.ui_state_p = 0;
            self.ui_state = UI_STATE_OUT;
          }
        }
      }
    }
  }

  self.tick = function()
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];
      speak.animcycle_inst.tick();
      speak_command.x = screenSpaceXpt(my_camera,canv,speak_command.wx);
      speak_command.y = screenSpaceYpt(my_camera,canv,speak_command.wy);

      self.ui_state_t++;
      self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
      switch(self.ui_state)
      {
        case UI_STATE_IN: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT: if(self.ui_state_p >= 1) self.dismiss(); break;
      }
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_notebookview.tick();

      self.ui_state_t++;
      self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
      switch(self.ui_state)
      {
        case UI_STATE_IN: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT: if(self.ui_state_p >= 1)
        {
          if(self.failed)
          {
            if(self.cur_command.fail.length)
            {
              var bogus_commands = [];
              for(var i = 0; i < self.cur_command.fail.length; i++)
                bogus_commands.push({command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:self.cur_command.fail[i] });
              self.commands = bogus_commands;
              self.cur_command_i = 0;
              self.cur_command = self.commands[self.cur_command_i];
              self.consume_command();
            }
            else
            {
              state_from = state_cur;
              state_to = state_stack;
              state_cur = STATE_TRANSITION;
              state_t = 0;
            }
          }
          else
          {
            self.ui_state = UI_STATE_NULL;
            self.ui_state_t = 0;
            self.ui_state_p = 0;
            self.cur_speak = 0;
            self.cur_speak_command_i = 0;

            self.cur_command_i++;
            if(self.cur_command_i >= self.commands.length)
            {
              state_from = state_cur;
              state_to = state_stack;
              state_cur = STATE_TRANSITION;
              state_t = 0;
              self.commands = self.revert_commands;
            }
            else
            {
              self.cur_command = self.commands[self.cur_command_i];
              self.consume_command();
            }
          }
        }
        break;
      }
    }
  }

  self.draw = function(t)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      if(self.ui_state == UI_STATE_NULL) return;

      var yoff = 0;
      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];
      var oyoff;

      var a = 1;
      switch(self.ui_state)
      {
        case UI_STATE_IN:     a = bubble_in_a(self.ui_state_p); yoff = bubble_in_y(self.ui_state_p); break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT:    a = bubble_out_a(self.ui_state_p); yoff = bubble_out_y(self.ui_state_p); break;
      }
      ctx.globalAlpha = a;

      var b = 10;
      ctx.fillStyle = self.bubble_color;
      fillRRect(speak_command.x-b-5,speak_command.y-b+5+yoff,speak_command.w+b*2+10,speak_command.h*speak_command.atext.length+b*2+5,b,ctx);

      //tail
      var y = speak_command.y-b+5+yoff+speak_command.h*speak_command.atext.length+b*2+5-0.5;
      var x;
      var w = 20;
      var h = 20;
      if(speak_command.speaker == SPEAKER_PERSON)
        x = clamp(speak_command.x, speak_command.x+speak_command.w-w, self.person.x + self.person.w/2-w/2);
      else
        x = clamp(speak_command.x, speak_command.x+speak_command.w-w, my_avatar.x + my_avatar.w/2-w/2);
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+w/2-2,y+h-2);
      ctx.quadraticCurveTo(x+w/2,y+h,x+w/2+2,y+h-2);
      ctx.lineTo(x+w,y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = self.text_color;
      ctx.font = text_font;
      oyoff = 0;
      for(var j = 0; j < speak_command.atext.length; j++)
      {
        ctx.fillText(speak_command.atext[j],speak_command.x,speak_command.y+yoff+oyoff+speak_command.h);
        oyoff += speak_command.h;
      }

      ctx.globalAlpha = 1;

      if(DEBUG)
      {
        ctx.strokeStyle = white;

        yoff = 0;
        oyoff = 0;
        for(var j = 0; j < speak_command.atext.length; j++)
        {
          ctx.strokeRect(speak_command.x,speak_command.y+yoff,speak_command.w,speak_command.h);
          oyoff += speak_command.h;
        }
      }
    }

    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      var t = 1;
      if(self.ui_state == UI_STATE_IN)     t = self.ui_state_p;
      if(self.ui_state == UI_STATE_SELECT) ;
      if(self.ui_state == UI_STATE_OUT)    t = 1-self.ui_state_p;
      my_notebookview.draw(t);

      var a = 1;
      switch(self.ui_state)
      {
        case UI_STATE_IN:     a = bubble_in_a(self.ui_state_p); yoff = bubble_in_y(self.ui_state_p); break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT:    a = bubble_out_a(self.ui_state_p); yoff = bubble_out_y(self.ui_state_p); break;
      }
      ctx.globalAlpha = a;

      var yoff = 0;

      var b = 10;
      var h = cur_level.notifications_h*self.cur_command.prompt.length;
      var w = self.cur_command.prompt_w;
      var x = canv.width/2-w/2;
      var y = canv.height-30-h;
      ctx.fillStyle = self.bubble_color;
      fillRRect(x-b-5,y-b+5+yoff,w+b*2+10,h+b*2+5,b,ctx);
      ctx.fillStyle = self.text_color;
      var oyoff = 0;
      for(var i = 0; i < self.cur_command.prompt.length; i++)
      {
        ctx.fillText(self.cur_command.prompt[i],x,y+yoff+cur_level.notifications_h+oyoff);
        oyoff += cur_level.notifications_h;
      }
      ctx.globalAlpha = 1;
    }

  }
}

tmp_wildcard.animcycle_inst = gen_animcycle_inst(tmp_wildcard.animcycle_id,tmp_level.animcycles);
tmp_wildcard.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_wildcard.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_wildcard.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_wildcard.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_wildcard.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_wildcard.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_wildcard.raw_notifications.length; i++) tmp_wildcard.notifications[i] = stextToLines(tmp_wildcard.raw_notifications[i], tmp_wildcard.raw_notification_ws[i] ? tmp_wildcard.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.wildcards.push(tmp_wildcard);
tmp_wildcard = new wildcard();
tmp_wildcard.id = "chap2_teddy_finale";
tmp_wildcard.fqid = "tunic.capitol_1.hall.chap2_teddy_finale";
{
tmp_wildcard.ww = 55.70019434333287;
tmp_wildcard.wh = 46.010023193258014;
tmp_wildcard.wx = -226.69441395415663;
tmp_wildcard.wy = 361.7411092807203;
tmp_wildcard.wz = 1;
tmp_wildcard.act_wx = -125.76177653111915;
tmp_wildcard.act_wy = -86.36415039355171;
tmp_wildcard.act_anim = 1;
tmp_wildcard.hover_icon_wx = 34.848484848490784;
tmp_wildcard.hover_icon_wy = -34.8484848481152;
tmp_wildcard.animcycle_id = "null";
tmp_wildcard.hover_cursor_animcycle_id = "hover_ui";
tmp_wildcard.hover_icon_animcycle_id = "null";
tmp_wildcard.notice_icon_animcycle_id = "null";
tmp_wildcard.deck_animcycle_ids = [
];
tmp_wildcard.audio_id = "null";
tmp_wildcard.notifications_persistent = 0;
tmp_wildcard.raw_notifications = [
];
tmp_wildcard.raw_notification_ws = [
];
tmp_wildcard.notification_reqs = [[
]];
tmp_wildcard.notice_reqs = [[
]];
tmp_wildcard.reqs = [[
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
"!self",
]];

ENUM=0;
var FINALE_WILDCARD_COMMAND_NULL     = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_SPEAK    = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_NOTEBOOK = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_COUNT    = ENUM; ENUM++;

//members are one of the following: (ensure all speak_fqid exist on a person w/in the room)
//{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.path.to.speak" },
//{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.path.to.entry", prompt:stextToLines("I need to show them I know blah blah", tmp_level.notifications_w), fail:[ "tunic.path.to.speak", "tunic.path.to.speak" ] },

tmp_wildcard.commands = [
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.gramps.chap2_teddy_finale_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_teddytaken", prompt_raw:"How do I know he was taken?", prompt_w:260, fail:["tunic.capitol_1.hall.gramps.chap2_teddy_finale_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.gramps.chap2_teddy_finale_1" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_javajacket", prompt_raw:"What other evidence did I find at the crime scene?", prompt_w:270, fail:["tunic.capitol_1.hall.gramps.chap2_teddy_finale_1_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.gramps.chap2_teddy_finale_2" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_archivistcoffee", prompt_raw:"How can I connect the coffee to Wells?", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_1.hall.gramps.chap2_teddy_finale_2_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.gramps.chap2_teddy_finale_3" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_taxidermy", prompt_raw:"How else can I connect Wells to Teddy?", prompt_w:220, fail:["tunic.capitol_1.hall.gramps.chap2_teddy_finale_3_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_1.hall.gramps.chap2_teddy_finale_4" },

];

for(var i = 0; i < tmp_wildcard.commands.length; i++)
{
  var c = tmp_wildcard.commands[i];
  if(c.command == FINALE_WILDCARD_COMMAND_NOTEBOOK) c.prompt = stextToLines(c.prompt_raw, c.prompt_w);
}

//view
{
  var self = tmp_wildcard;

  self.failed = 0;
  self.failed_command_i = 0;
  self.cur_command_i = 0;
  self.cur_command = 0;
  self.cur_speak = 0;
  self.person = 0;
  self.cur_speak_command_i = 0;
  self.revert_commands; //set to the true, "canonical" commands for easy revert on leave

  self.bubble_color = "#242224";
  self.text_color = white;
  self.hover_color = "#4EBBC5";

  ENUM = 0;
  var UI_STATE_NULL   = ENUM; ENUM++;
  var UI_STATE_IN     = ENUM; ENUM++;
  var UI_STATE_SELECT = ENUM; ENUM++;
  var UI_STATE_OUT    = ENUM; ENUM++;
  var UI_STATE_COUNT  = ENUM; ENUM++;

  self.ui_state = UI_STATE_NULL;
  self.ui_state_t = 0;
  self.ui_state_t_max = [];
  self.ui_state_t_max[UI_STATE_IN]     = 30;
  self.ui_state_t_max[UI_STATE_SELECT] = 0;
  self.ui_state_t_max[UI_STATE_OUT]    = 10;
  self.ui_state_p = 0;

  self.consume_command = function()
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      self.cur_speak = find(self.cur_command.speak_fqid);
      self.cur_speak.pre_met = true;
      self.cur_speak.met = true;
      self.person = find(self.cur_speak.fqid.replace("."+self.cur_speak.id,""));
      self.cur_speak_command_i = 0;
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_notebookview.exit_available = 0;
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
    }
  }
  self.consume_self = function(wildcard)
  {
    self = wildcard;
    self.revert_commands = self.commands;
    self.failed = 0;
    self.failed_command_i = 0;
    self.cur_command_i = 0;
    self.cur_command = self.commands[self.cur_command_i];
    self.consume_command();

    my_notebookview.unlock_content();
  }

  self.dismiss = function()
  {
    if(self.cur_speak_command_i < self.cur_speak.commands.length-1)
    {
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak_command_i++;
    }
    else if(self.cur_speak_command_i == self.cur_speak.commands.length-1)
    {
      self.ui_state = UI_STATE_NULL;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak = 0;
      self.cur_speak_command_i = 0;

      self.cur_command_i++;
      if(self.cur_command_i >= self.commands.length)
      {
        if(self.commands != self.revert_commands)
        {
          self.commands = self.revert_commands;
          self.failed = 0;
          self.cur_command_i = self.failed_command_i;
          self.cur_command = self.commands[self.cur_command_i];
          self.consume_command();
          self.ui_state = UI_STATE_IN;
          self.ui_state_t = 0;
          self.ui_state_p = 0;
        }
        else
        {
          state_from = state_cur;
          state_to = state_stack;
          state_cur = STATE_TRANSITION;
          state_t = 0;
          my_notebookview.exit_available = 1;
        }
      }
      else
      {
        self.cur_command = self.commands[self.cur_command_i];
        self.consume_command();
      }
    }
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.speak_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.cur_speak_command;
    self.consume_speak_command = function(s)
    {
      self.cur_speak_command = s;
      self.x = self.cur_speak_command.x;
      self.y = self.cur_speak_command.y;
      self.w = self.cur_speak_command.w;
      self.h = self.cur_speak_command.h;
      self.cur_speak_command.wx = worldSpaceXpt(my_camera,canv,self.cur_speak_command.x);
      self.cur_speak_command.wy = worldSpaceYpt(my_camera,canv,self.cur_speak_command.y);
    }
    self.edit = function()
    {
      self.cur_speak_command.x = self.x;
      self.cur_speak_command.y = self.y;
      self.cur_speak_command.w = self.w;
      self.cur_speak_command.h = self.h;
      self.cur_speak_command.wx = worldSpaceXpt(my_camera,canv,self.cur_speak_command.x);
      self.cur_speak_command.wy = worldSpaceYpt(my_camera,canv,self.cur_speak_command.y);

      self.cur_speak_command.atext = stextToLines(self.cur_speak_command.raw_atext, self.cur_speak_command.w);
    }
  })();
  self.dragStart = function(evt)
  {
    self.edit_o = 0;
    if(self.cur_command.command != FINALE_WILDCARD_COMMAND_SPEAK) return;
    if(!self.edit_o && ptWithinBox(self.cur_speak.commands[self.cur_speak_command_i],evt.doX,evt.doY)) { self.edit_o = self.speak_editor; self.speak_editor.consume_speak_command(self.cur_speak.commands[self.cur_speak_command_i]); self.cur_speak.dirty = true; }

    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w)//right 10%
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_o == self.speak_editor)   self.speak_editor.edit();
    else worldSpace(my_camera,canv,self.edit_o);
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      my_cursor.mode = CURSOR_NORMAL;

      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];

      var x = speak_command.x;
      var y = speak_command.y+5;
      var w = speak_command.w;
      var h = speak_command.h*speak_command.atext.length;
      if(ptWithin(x,y,w,h,evt.doX,evt.doY))
        my_cursor.mode = CURSOR_UI;
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_cursor.mode = CURSOR_NORMAL;
      for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
        if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && my_notebookview.cache_available_entrys[i].interactive && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
        {
          my_cursor.mode = CURSOR_UI;
          if(!my_notebookview.cache_available_entrys[i].hoverexpand) my_notebookview.cache_available_entrys[i].hoverexpand = 0;
          my_notebookview.cache_available_entrys[i].hovering = 1;
        }
        else my_notebookview.cache_available_entrys[i].hovering = 0;
    }
  }
  self.unhover = function(evt)
  {
    for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
      my_notebookview.cache_available_entrys[i].hovering = 0;
  }

  self.click = function(evt)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      self.ui_state_t = self.ui_state_t_max[self.ui_state];

      if(self.ui_state != UI_STATE_OUT)
      {
        self.ui_state_t = 0;
        self.ui_state_p = 0;
        self.ui_state = UI_STATE_OUT;
      }
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      if(self.ui_state != UI_STATE_SELECT) return;
      var bogus_state_from = 99999999;
      var saved_state_from = state_from;
      state_from = bogus_state_from;
      var saved_state_to = state_to;
      var saved_state_cur = state_cur;
      var saved_state_t = state_t;
      var saved_page = my_notebookview.page;
      my_notebookview.click(evt);
      if(state_from != bogus_state_from) //intercepted x click
      {
        //re-set to correct info
        state_from = saved_state_from;
        state_to = saved_state_to;
        state_cur = saved_state_cur;
        state_t = saved_state_t;

        self.failed = 1;
        self.failed_command_i = self.cur_command_i;

        self.ui_state_t = 0;
        self.ui_state_p = 0;
        self.ui_state = UI_STATE_OUT;
      }
      else if(my_notebookview.page != saved_page) //intercepted page turn
      {
        //do nothing- allow turn
      }
      else
      {
        //find response
        for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
        {
          if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && my_notebookview.cache_available_entrys[i].interactive && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
          {
            if(my_notebookview.cache_available_entrys[i].fqid != self.cur_command.entry_fqid)
            {
              self.failed = 1;
              self.failed_command_i = self.cur_command_i;
            }

            self.ui_state_t = 0;
            self.ui_state_p = 0;
            self.ui_state = UI_STATE_OUT;
          }
        }
      }
    }
  }

  self.tick = function()
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];
      speak.animcycle_inst.tick();
      speak_command.x = screenSpaceXpt(my_camera,canv,speak_command.wx);
      speak_command.y = screenSpaceYpt(my_camera,canv,speak_command.wy);

      self.ui_state_t++;
      self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
      switch(self.ui_state)
      {
        case UI_STATE_IN: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT: if(self.ui_state_p >= 1) self.dismiss(); break;
      }
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_notebookview.tick();

      self.ui_state_t++;
      self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
      switch(self.ui_state)
      {
        case UI_STATE_IN: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT: if(self.ui_state_p >= 1)
        {
          if(self.failed)
          {
            if(self.cur_command.fail.length)
            {
              var bogus_commands = [];
              for(var i = 0; i < self.cur_command.fail.length; i++)
                bogus_commands.push({command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:self.cur_command.fail[i] });
              self.commands = bogus_commands;
              self.cur_command_i = 0;
              self.cur_command = self.commands[self.cur_command_i];
              self.consume_command();
            }
            else
            {
              state_from = state_cur;
              state_to = state_stack;
              state_cur = STATE_TRANSITION;
              state_t = 0;
            }
          }
          else
          {
            self.ui_state = UI_STATE_NULL;
            self.ui_state_t = 0;
            self.ui_state_p = 0;
            self.cur_speak = 0;
            self.cur_speak_command_i = 0;

            self.cur_command_i++;
            if(self.cur_command_i >= self.commands.length)
            {
              state_from = state_cur;
              state_to = state_stack;
              state_cur = STATE_TRANSITION;
              state_t = 0;
              self.commands = self.revert_commands;
            }
            else
            {
              self.cur_command = self.commands[self.cur_command_i];
              self.consume_command();
            }
          }
        }
        break;
      }
    }
  }

  self.draw = function(t)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      if(self.ui_state == UI_STATE_NULL) return;

      var yoff = 0;
      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];
      var oyoff;

      var a = 1;
      switch(self.ui_state)
      {
        case UI_STATE_IN:     a = bubble_in_a(self.ui_state_p); yoff = bubble_in_y(self.ui_state_p); break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT:    a = bubble_out_a(self.ui_state_p); yoff = bubble_out_y(self.ui_state_p); break;
      }
      ctx.globalAlpha = a;

      var b = 10;
      ctx.fillStyle = self.bubble_color;
      fillRRect(speak_command.x-b-5,speak_command.y-b+5+yoff,speak_command.w+b*2+10,speak_command.h*speak_command.atext.length+b*2+5,b,ctx);

      //tail
      var y = speak_command.y-b+5+yoff+speak_command.h*speak_command.atext.length+b*2+5-0.5;
      var x;
      var w = 20;
      var h = 20;
      if(speak_command.speaker == SPEAKER_PERSON)
        x = clamp(speak_command.x, speak_command.x+speak_command.w-w, self.person.x + self.person.w/2-w/2);
      else
        x = clamp(speak_command.x, speak_command.x+speak_command.w-w, my_avatar.x + my_avatar.w/2-w/2);
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+w/2-2,y+h-2);
      ctx.quadraticCurveTo(x+w/2,y+h,x+w/2+2,y+h-2);
      ctx.lineTo(x+w,y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = self.text_color;
      ctx.font = text_font;
      oyoff = 0;
      for(var j = 0; j < speak_command.atext.length; j++)
      {
        ctx.fillText(speak_command.atext[j],speak_command.x,speak_command.y+yoff+oyoff+speak_command.h);
        oyoff += speak_command.h;
      }

      ctx.globalAlpha = 1;

      if(DEBUG)
      {
        ctx.strokeStyle = white;

        yoff = 0;
        oyoff = 0;
        for(var j = 0; j < speak_command.atext.length; j++)
        {
          ctx.strokeRect(speak_command.x,speak_command.y+yoff,speak_command.w,speak_command.h);
          oyoff += speak_command.h;
        }
      }
    }

    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      var t = 1;
      if(self.ui_state == UI_STATE_IN)     t = self.ui_state_p;
      if(self.ui_state == UI_STATE_SELECT) ;
      if(self.ui_state == UI_STATE_OUT)    t = 1-self.ui_state_p;
      my_notebookview.draw(t);

      var a = 1;
      switch(self.ui_state)
      {
        case UI_STATE_IN:     a = bubble_in_a(self.ui_state_p); yoff = bubble_in_y(self.ui_state_p); break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT:    a = bubble_out_a(self.ui_state_p); yoff = bubble_out_y(self.ui_state_p); break;
      }
      ctx.globalAlpha = a;

      var yoff = 0;

      var b = 10;
      var h = cur_level.notifications_h*self.cur_command.prompt.length;
      var w = self.cur_command.prompt_w;
      var x = canv.width/2-w/2;
      var y = canv.height-30-h;
      ctx.fillStyle = self.bubble_color;
      fillRRect(x-b-5,y-b+5+yoff,w+b*2+10,h+b*2+5,b,ctx);
      ctx.fillStyle = self.text_color;
      var oyoff = 0;
      for(var i = 0; i < self.cur_command.prompt.length; i++)
      {
        ctx.fillText(self.cur_command.prompt[i],x,y+yoff+cur_level.notifications_h+oyoff);
        oyoff += cur_level.notifications_h;
      }
      ctx.globalAlpha = 1;
    }

  }
}

tmp_wildcard.animcycle_inst = gen_animcycle_inst(tmp_wildcard.animcycle_id,tmp_level.animcycles);
tmp_wildcard.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_wildcard.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_wildcard.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_wildcard.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_wildcard.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_wildcard.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_wildcard.raw_notifications.length; i++) tmp_wildcard.notifications[i] = stextToLines(tmp_wildcard.raw_notifications[i], tmp_wildcard.raw_notification_ws[i] ? tmp_wildcard.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.wildcards.push(tmp_wildcard);
tmp_inert = new inert();
tmp_inert.id = "rotunda";
tmp_inert.fqid = "tunic.capitol_1.hall.rotunda";
{
tmp_inert.ww = 1019.7274168712107;
tmp_inert.wh = 267.73319864195986;
tmp_inert.wx = 30.234019141953524;
tmp_inert.wy = -442.418249480281;
tmp_inert.wz = 999;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "capitol_rotunda";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "capitol_2";
tmp_scene.fqid = "tunic.capitol_2";
{
tmp_scene.primary = false;
tmp_scene.ww = 130;
tmp_scene.wh = 142.99999999999997;
tmp_scene.wx = 24.999999999999986;
tmp_scene.wy = 21.499999999999986;
tmp_scene.hover_icon_wx = 20;
tmp_scene.hover_icon_wy = 41.99999999999999;
tmp_scene.animcycle_id = "scene_capitol";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
tmp_scene.deck_animcycle_ids = [
];
tmp_scene.notifications_persistent = 0;
tmp_scene.raw_notifications = [
];
tmp_scene.raw_notification_ws = [
];
tmp_scene.notification_reqs = [[
]];
tmp_scene.notice_reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
"!tunic.capitol_0.hall.chap1_finale_c",
]];
tmp_scene.reqs = [[
"tunic.historicalsociety.basement.ch3start",
"!tunic.nelson"
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "hall";
tmp_room.fqid = "tunic.capitol_2.hall";
{
tmp_room.primary = false;
tmp_room.ww = 2000;
tmp_room.wh = 1162;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_capitol_hall";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 1000;
tmp_room.nav_min_wz = 1;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:112.16666666666663, wy:-217.46969696969683, ww:1129.4848484848485, wh:217.6666666666667 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 648.2945573024847;
tmp_room.target_start_wy = -253.58367957138657;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.7606060606060605

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "chap4_finale_c";
tmp_cutscene.fqid = "tunic.capitol_2.hall.chap4_finale_c";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 159.0909090909091;
tmp_cutscene.wh = 330.3030303030303;
tmp_cutscene.wx = 257.30205303597495;
tmp_cutscene.wy = 2.5662694124168013;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = -319.6969696969697;
tmp_cutscene.act_wy = -168.18181818181827;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 71.2121212121212;
tmp_cutscene.hover_icon_wy = 183.33333333333331;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.confrontation",
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "black";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "chapter5";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "chapter5";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 6.614697252849702;
tmp_cutscene_command.wy = 226.35309860622363;
tmp_cutscene_command.w = 133;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "There you are-";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -31.855493141268603;
tmp_cutscene_command.wy = 271.5796080578542;
tmp_cutscene_command.w = 159;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "How's research on that flag going?";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -195.39393939393915;
tmp_cutscene_command.wy = 33.69696969696961;
tmp_cutscene_command.w = 61;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Great!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -416.60606060606057;
tmp_cutscene_command.wy = 79.15151515151518;
tmp_cutscene_command.w = 206;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I think I have a lot of great information here.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 125.8181606575439;
tmp_cutscene_command.wy = 232.1818203295406;
tmp_cutscene_command.w = 57;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Hit me.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "chap4_finale";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 51;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -27.212121212121097;
tmp_cutscene_command.wy = 276.12121212121195;
tmp_cutscene_command.w = 159;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm glad I put you on the case, Jolie.";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 4.606060606060645;
tmp_cutscene_command.wy = 270.0606060606059;
tmp_cutscene_command.w = 136;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You really pulled through.";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 103;
tmp_cutscene_command.end_t = 152;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter5";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = 153;
tmp_cutscene_command.end_t = 153;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter5";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 202;
tmp_cutscene_command.end_t = 252;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
template.js:1827 tmp_cutscene_command.cutscene_entity_id = "chapter5";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 401;
tmp_cutscene_command.end_t = 451;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 451;
tmp_cutscene_command.end_t = 481;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -121.15151515151508;
tmp_cutscene_command.wy = 277.63636363636346;
tmp_cutscene_command.w = 220;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Alright Jolie- I'll see you tomorrow at the exhibit!";
tmp_cutscene_command.t = 481;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 481;
tmp_cutscene_command.end_t = 520;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_LOAD_SCENE;
tmp_cutscene_command.cutscene_entity_id = "nelson";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SPECIAL;
tmp_cutscene_command.t = 520;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 521;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "boss";
tmp_person.fqid = "tunic.capitol_2.hall.boss";
{
tmp_person.ww = 139.46770625546648;
tmp_person.wh = 275.4499825475462;
tmp_person.wx = 259.5530192269189;
tmp_person.wy = 2.35095054543865;
tmp_person.wz = -1;
tmp_person.act_wx = -343.86420332209167;
tmp_person.act_wy = -185.35322339982605;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 72.77820480249332;
tmp_person.hover_icon_wy = 183.46748014757537;
tmp_person.animcycle_id = "boss";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_0";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_0";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -18.79843832138913;
tmp_speak_command.wy = 230.6066552399819;
tmp_speak_command.w = 153.255859375;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What is this flag?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_0_fail";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_0_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 38.027764747446945;
tmp_speak_command.wy = 311.7376848583228;
tmp_speak_command.w = 147.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That is definitely no slip...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_1";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_1";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -372.3251438140443;
tmp_speak_command.wy = 35.30606209308058;
tmp_speak_command.w = 178.2638397216797;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It's an ecology flag!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -235.24578159926196;
tmp_speak_command.wy = 271.77284412108276;
tmp_speak_command.w = 295;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Interesting- I wonder who decided we needed an ecology flag...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_1_fail";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_1_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_2";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_2";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -567.77968926859;
tmp_speak_command.wy = 82.27575906277752;
tmp_speak_command.w = 308.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Governor Nelson had the flag created as a symbol for Earth Day!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 72.32997597649548;
tmp_speak_command.wy = 229.3486016968404;
tmp_speak_command.w = 94.91191101074219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Of course!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -39.79123614471651;
tmp_speak_command.wy = 277.83345018168893;
tmp_speak_command.w = 165;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "How could I forget Governor Nelson-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -277.67002402350454;
tmp_speak_command.wy = 320.2576926059314;
tmp_speak_command.w = 321;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "He was the Wisconsin Governor responsible for bringing National Recognition to things like Earth Day.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -158.68878017768083;
tmp_speak_command.wy = 39.851516638535095;
tmp_speak_command.w = 35.53596496582031;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yep!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -451.1130226019233;
tmp_speak_command.wy = 124.70000148701999;
tmp_speak_command.w = 227.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "He's pretty great [INSERT SOME OTHER FACT ABOUT NELSON HERE]";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -73.12456947804986;
tmp_speak_command.wy = 274.8031471513859;
tmp_speak_command.w = 189;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I wonder why he chose that bizzare symbol?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_2_fail";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_2_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 25.906552626236163;
tmp_speak_command.wy = 304.16192728256516;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_3";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_3";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -424.0934473737639;
tmp_speak_command.wy = 37.495260615898424;
tmp_speak_command.w = 209.84780883789062;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's a \"theta\" symbol.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -466.5176897980064;
tmp_speak_command.wy = 34.46495758559542;
tmp_speak_command.w = 239.05577087402344;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It looks a bit like an earth.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -431.6692049495215;
tmp_speak_command.wy = 76.88920000983785;
tmp_speak_command.w = 215.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "But it's also the letters \"e\" and \"o\" combined.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -525.6085988889156;
tmp_speak_command.wy = 125.37404849468629;
tmp_speak_command.w = 275.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That stands for \"ecology\" and \"organism\"- the earth is a living thing we need to care about!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 56.20958292926629;
tmp_speak_command.wy = 231.43465455529244;
tmp_speak_command.w = 106.16792297363281;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Fascinating!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -186.214659494976;
tmp_speak_command.wy = 322.3437454643833;
tmp_speak_command.w = 263.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you have any more context for how this flag and that symbology was used?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_3_fail";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_3_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_4";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_4";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -451.113022601923;
tmp_speak_command.wy = 123.18484997186846;
tmp_speak_command.w = 229.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It has a great history of being used in protests and other forms of activism.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -368.03284131315786;
tmp_speak_command.wy = 126.88920000983782;
tmp_speak_command.w = 173.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "These pictures show students marching on the capitol";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -320.8099922988928;
tmp_speak_command.wy = 38.33636512338362;
tmp_speak_command.w = 142.8158721923828;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "er, THIS capitol!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -60.457083737400325;
tmp_speak_command.wy = 278.40435152498935;
tmp_speak_command.w = 179.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "This is some really great material Jolie!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap4_finale_4_fail";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.chap4_finale_4_fail";
{
tmp_speak.primary = 0;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not sure that's relevant here...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "haveyougotit";
tmp_speak.fqid = "tunic.capitol_2.hall.boss.haveyougotit";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.historicalsociety.closet_dirty",
"!tunic.historicalsociety.stacks.journals.pic_2.bingo",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -175.35544692962122;
tmp_speak_command.wy = 329.24545603639;
tmp_speak_command.w = 278.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Jolie! I was hoping you'd stop by. Any news on the flag artifact?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -369.29484086901516;
tmp_speak_command.wy = 103.48788027881426;
tmp_speak_command.w = 195.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I haven't quite figured it out just yet...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -90.50696208113642;
tmp_speak_command.wy = 374.70000149093556;
tmp_speak_command.w = 225.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, get on it. I'm counting on you to figure this out!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.capitol_2.hall.toentry";
{
tmp_porthole.ww = 231.7272727272727;
tmp_porthole.wh = 378.6363636363637;
tmp_porthole.wx = 790.8636363636366;
tmp_porthole.wy = -71.22727272727273;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -140.9090909090909;
tmp_porthole.act_wy = -87.87878787878788;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 3.03030303030303;
tmp_porthole.hover_icon_wy = 62.12121212121212;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_wildcard = new wildcard();
tmp_wildcard.id = "chap4_finale";
tmp_wildcard.fqid = "tunic.capitol_2.hall.chap4_finale";
{
tmp_wildcard.ww = 55.70019434333287;
tmp_wildcard.wh = 46.010023193258014;
tmp_wildcard.wx = -226.69441395415663;
tmp_wildcard.wy = 361.7411092807203;
tmp_wildcard.wz = 1;
tmp_wildcard.act_wx = -125.76177653111915;
tmp_wildcard.act_wy = -86.36415039355171;
tmp_wildcard.act_anim = 1;
tmp_wildcard.hover_icon_wx = 34.848484848490784;
tmp_wildcard.hover_icon_wy = -34.8484848481152;
tmp_wildcard.animcycle_id = "null";
tmp_wildcard.hover_cursor_animcycle_id = "hover_ui";
tmp_wildcard.hover_icon_animcycle_id = "null";
tmp_wildcard.notice_icon_animcycle_id = "null";
tmp_wildcard.deck_animcycle_ids = [
];
tmp_wildcard.audio_id = "null";
tmp_wildcard.notifications_persistent = 0;
tmp_wildcard.raw_notifications = [
];
tmp_wildcard.raw_notification_ws = [
];
tmp_wildcard.notification_reqs = [[
]];
tmp_wildcard.notice_reqs = [[
]];
tmp_wildcard.reqs = [[
"tunic.nelson.trail.sign.view",
"!self",
]];

ENUM=0;
var FINALE_WILDCARD_COMMAND_NULL     = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_SPEAK    = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_NOTEBOOK = ENUM; ENUM++;
var FINALE_WILDCARD_COMMAND_COUNT    = ENUM; ENUM++;

//members are one of the following: (ensure all speak_fqid exist on a person w/in the room)
//{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.path.to.speak" },
//{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.path.to.entry", prompt:stextToLines("I need to show them I know blah blah", tmp_level.notifications_w), fail:[ "tunic.path.to.speak", "tunic.path.to.speak" ] },

tmp_wildcard.commands = [
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_2.hall.boss.chap4_finale_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_ecologyflag", prompt_raw:"What is this flag?", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_2.hall.boss.chap4_finale_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_2.hall.boss.chap4_finale_1" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_nelson", prompt_raw:"What was the flag for?", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_2.hall.boss.chap4_finale_1_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_2.hall.boss.chap4_finale_2" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_theta", prompt_raw:"What do I know about the symbols?", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_2.hall.boss.chap4_finale_2_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_2.hall.boss.chap4_finale_3" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_activists", prompt_raw:"What materials do I have regarding its history?", prompt_w:tmp_level.notifications_w, fail:["tunic.capitol_2.hall.boss.chap4_finale_3_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol_2.hall.boss.chap4_finale_4" },

];

for(var i = 0; i < tmp_wildcard.commands.length; i++)
{
  var c = tmp_wildcard.commands[i];
  if(c.command == FINALE_WILDCARD_COMMAND_NOTEBOOK) c.prompt = stextToLines(c.prompt_raw, c.prompt_w);
}

//view
{
  var self = tmp_wildcard;

  self.failed = 0;
  self.failed_command_i = 0;
  self.cur_command_i = 0;
  self.cur_command = 0;
  self.cur_speak = 0;
  self.person = 0;
  self.cur_speak_command_i = 0;
  self.revert_commands; //set to the true, "canonical" commands for easy revert on leave

  self.bubble_color = "#242224";
  self.text_color = white;
  self.hover_color = "#4EBBC5";

  ENUM = 0;
  var UI_STATE_NULL   = ENUM; ENUM++;
  var UI_STATE_IN     = ENUM; ENUM++;
  var UI_STATE_SELECT = ENUM; ENUM++;
  var UI_STATE_OUT    = ENUM; ENUM++;
  var UI_STATE_COUNT  = ENUM; ENUM++;

  self.ui_state = UI_STATE_NULL;
  self.ui_state_t = 0;
  self.ui_state_t_max = [];
  self.ui_state_t_max[UI_STATE_IN]     = 30;
  self.ui_state_t_max[UI_STATE_SELECT] = 0;
  self.ui_state_t_max[UI_STATE_OUT]    = 10;
  self.ui_state_p = 0;

  self.consume_command = function()
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      self.cur_speak = find(self.cur_command.speak_fqid);
      self.cur_speak.pre_met = true;
      self.cur_speak.met = true;
      self.person = find(self.cur_speak.fqid.replace("."+self.cur_speak.id,""));
      self.cur_speak_command_i = 0;
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_notebookview.exit_available = 0;
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
    }
  }
  self.consume_self = function(wildcard)
  {
    self = wildcard;
    self.revert_commands = self.commands;
    self.failed = 0;
    self.failed_command_i = 0;
    self.cur_command_i = 0;
    self.cur_command = self.commands[self.cur_command_i];
    self.consume_command();

    my_notebookview.unlock_content();
  }

  self.dismiss = function()
  {
    if(self.cur_speak_command_i < self.cur_speak.commands.length-1)
    {
      self.ui_state = UI_STATE_IN;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak_command_i++;
    }
    else if(self.cur_speak_command_i == self.cur_speak.commands.length-1)
    {
      self.ui_state = UI_STATE_NULL;
      self.ui_state_t = 0;
      self.ui_state_p = 0;
      self.cur_speak = 0;
      self.cur_speak_command_i = 0;

      self.cur_command_i++;
      if(self.cur_command_i >= self.commands.length)
      {
        if(self.commands != self.revert_commands)
        {
          self.commands = self.revert_commands;
          self.failed = 0;
          self.cur_command_i = self.failed_command_i;
          self.cur_command = self.commands[self.cur_command_i];
          self.consume_command();
          self.ui_state = UI_STATE_IN;
          self.ui_state_t = 0;
          self.ui_state_p = 0;
        }
        else
        {
          state_from = state_cur;
          state_to = state_stack;
          state_cur = STATE_TRANSITION;
          state_t = 0;
          my_notebookview.exit_available = 1;
        }
      }
      else
      {
        self.cur_command = self.commands[self.cur_command_i];
        self.consume_command();
      }
    }
  }

  //DRAG DEBUG EDIT STUFF
  self.edit_cur_dragging = false;
  self.edit_cur_resizing = false;
  self.edit_offX;
  self.edit_offY;
  self.edit_o = 0;
  self.speak_editor = new (function()
  {
    var self = this;
    self.x = 0;
    self.y = 0;
    self.w = 0;
    self.h = 0;
    self.cur_speak_command;
    self.consume_speak_command = function(s)
    {
      self.cur_speak_command = s;
      self.x = self.cur_speak_command.x;
      self.y = self.cur_speak_command.y;
      self.w = self.cur_speak_command.w;
      self.h = self.cur_speak_command.h;
      self.cur_speak_command.wx = worldSpaceXpt(my_camera,canv,self.cur_speak_command.x);
      self.cur_speak_command.wy = worldSpaceYpt(my_camera,canv,self.cur_speak_command.y);
    }
    self.edit = function()
    {
      self.cur_speak_command.x = self.x;
      self.cur_speak_command.y = self.y;
      self.cur_speak_command.w = self.w;
      self.cur_speak_command.h = self.h;
      self.cur_speak_command.wx = worldSpaceXpt(my_camera,canv,self.cur_speak_command.x);
      self.cur_speak_command.wy = worldSpaceYpt(my_camera,canv,self.cur_speak_command.y);

      self.cur_speak_command.atext = stextToLines(self.cur_speak_command.raw_atext, self.cur_speak_command.w);
    }
  })();
  self.dragStart = function(evt)
  {
    self.edit_o = 0;
    if(self.cur_command.command != FINALE_WILDCARD_COMMAND_SPEAK) return;
    if(!self.edit_o && ptWithinBox(self.cur_speak.commands[self.cur_speak_command_i],evt.doX,evt.doY)) { self.edit_o = self.speak_editor; self.speak_editor.consume_speak_command(self.cur_speak.commands[self.cur_speak_command_i]); self.cur_speak.dirty = true; }

    if(!self.edit_o) return;

    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_offX > 0.4*self.edit_o.w)//right 10%
      self.edit_cur_resizing = true
    else
      self.edit_cur_dragging = true;
  };
  self.drag = function(evt)
  {
    if(!self.edit_o) return;
    self.deltaX = (evt.doX-(self.edit_o.x+(self.edit_o.w/2)))-self.edit_offX;
    self.deltaY = (evt.doY-(self.edit_o.y+(self.edit_o.h/2)))-self.edit_offY;

    if(self.edit_cur_dragging)
    {
      self.edit_o.x += self.deltaX;
      self.edit_o.y += self.deltaY;
    }
    else if(self.edit_cur_resizing)
    {
      self.edit_o.w += self.deltaX;
    }

    self.edit_offX = evt.doX-(self.edit_o.x+(self.edit_o.w/2));
    self.edit_offY = evt.doY-(self.edit_o.y+(self.edit_o.h/2));

    if(self.edit_o == self.speak_editor)   self.speak_editor.edit();
    else worldSpace(my_camera,canv,self.edit_o);
  };
  self.dragFinish = function()
  {
    self.edit_o = 0;
    self.edit_cur_dragging = false;
    self.edit_cur_resizing = false;
  };
  //DRAG DEBUG EDIT STUFF END

  self.hover = function(evt)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      my_cursor.mode = CURSOR_NORMAL;

      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];

      var x = speak_command.x;
      var y = speak_command.y+5;
      var w = speak_command.w;
      var h = speak_command.h*speak_command.atext.length;
      if(ptWithin(x,y,w,h,evt.doX,evt.doY))
        my_cursor.mode = CURSOR_UI;
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_cursor.mode = CURSOR_NORMAL;
      for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
        if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && my_notebookview.cache_available_entrys[i].interactive && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
        {
          my_cursor.mode = CURSOR_UI;
          if(!my_notebookview.cache_available_entrys[i].hoverexpand) my_notebookview.cache_available_entrys[i].hoverexpand = 0;
          my_notebookview.cache_available_entrys[i].hovering = 1;
        }
        else my_notebookview.cache_available_entrys[i].hovering = 0;
    }
  }
  self.unhover = function(evt)
  {
    for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
      my_notebookview.cache_available_entrys[i].hovering = 0;
  }

  self.click = function(evt)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      self.ui_state_t = self.ui_state_t_max[self.ui_state];

      if(self.ui_state != UI_STATE_OUT)
      {
        self.ui_state_t = 0;
        self.ui_state_p = 0;
        self.ui_state = UI_STATE_OUT;
      }
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      if(self.ui_state != UI_STATE_SELECT) return;
      var bogus_state_from = 99999999;
      var saved_state_from = state_from;
      state_from = bogus_state_from;
      var saved_state_to = state_to;
      var saved_state_cur = state_cur;
      var saved_state_t = state_t;
      var saved_page = my_notebookview.page;
      my_notebookview.click(evt);
      if(state_from != bogus_state_from) //intercepted x click
      {
        //re-set to correct info
        state_from = saved_state_from;
        state_to = saved_state_to;
        state_cur = saved_state_cur;
        state_t = saved_state_t;

        self.failed = 1;
        self.failed_command_i = self.cur_command_i;

        self.ui_state_t = 0;
        self.ui_state_p = 0;
        self.ui_state = UI_STATE_OUT;
      }
      else if(my_notebookview.page != saved_page) //intercepted page turn
      {
        //do nothing- allow turn
      }
      else
      {
        //find response
        for(var i = 0; i < my_notebookview.cache_available_entrys.length; i++)
        {
          if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && my_notebookview.cache_available_entrys[i].interactive && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
          {
            if(my_notebookview.cache_available_entrys[i].fqid != self.cur_command.entry_fqid)
            {
              self.failed = 1;
              self.failed_command_i = self.cur_command_i;
            }

            self.ui_state_t = 0;
            self.ui_state_p = 0;
            self.ui_state = UI_STATE_OUT;
          }
        }
      }
    }
  }

  self.tick = function()
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];
      speak.animcycle_inst.tick();
      speak_command.x = screenSpaceXpt(my_camera,canv,speak_command.wx);
      speak_command.y = screenSpaceYpt(my_camera,canv,speak_command.wy);

      self.ui_state_t++;
      self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
      switch(self.ui_state)
      {
        case UI_STATE_IN: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT: if(self.ui_state_p >= 1) self.dismiss(); break;
      }
    }
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      my_notebookview.tick();

      self.ui_state_t++;
      self.ui_state_p = self.ui_state_t/self.ui_state_t_max[self.ui_state];
      switch(self.ui_state)
      {
        case UI_STATE_IN: if(self.ui_state_p >= 1) { self.ui_state = UI_STATE_SELECT; self.ui_state_t = 0; self.ui_state_p = 0; } break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT: if(self.ui_state_p >= 1)
        {
          if(self.failed)
          {
            if(self.cur_command.fail.length)
            {
              var bogus_commands = [];
              for(var i = 0; i < self.cur_command.fail.length; i++)
                bogus_commands.push({command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:self.cur_command.fail[i] });
              self.commands = bogus_commands;
              self.cur_command_i = 0;
              self.cur_command = self.commands[self.cur_command_i];
              self.consume_command();
            }
            else
            {
              state_from = state_cur;
              state_to = state_stack;
              state_cur = STATE_TRANSITION;
              state_t = 0;
            }
          }
          else
          {
            self.ui_state = UI_STATE_NULL;
            self.ui_state_t = 0;
            self.ui_state_p = 0;
            self.cur_speak = 0;
            self.cur_speak_command_i = 0;

            self.cur_command_i++;
            if(self.cur_command_i >= self.commands.length)
            {
              state_from = state_cur;
              state_to = state_stack;
              state_cur = STATE_TRANSITION;
              state_t = 0;
              self.commands = self.revert_commands;
            }
            else
            {
              self.cur_command = self.commands[self.cur_command_i];
              self.consume_command();
            }
          }
        }
        break;
      }
    }
  }

  self.draw = function(t)
  {
    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_SPEAK)
    {
      if(self.ui_state == UI_STATE_NULL) return;

      var yoff = 0;
      var speak = self.cur_speak;
      var speak_command = self.cur_speak.commands[self.cur_speak_command_i];
      var oyoff;

      var a = 1;
      switch(self.ui_state)
      {
        case UI_STATE_IN:     a = bubble_in_a(self.ui_state_p); yoff = bubble_in_y(self.ui_state_p); break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT:    a = bubble_out_a(self.ui_state_p); yoff = bubble_out_y(self.ui_state_p); break;
      }
      ctx.globalAlpha = a;

      var b = 10;
      ctx.fillStyle = self.bubble_color;
      fillRRect(speak_command.x-b-5,speak_command.y-b+5+yoff,speak_command.w+b*2+10,speak_command.h*speak_command.atext.length+b*2+5,b,ctx);

      //tail
      var y = speak_command.y-b+5+yoff+speak_command.h*speak_command.atext.length+b*2+5-0.5;
      var x;
      var w = 20;
      var h = 20;
      if(speak_command.speaker == SPEAKER_PERSON)
        x = clamp(speak_command.x, speak_command.x+speak_command.w-w, self.person.x + self.person.w/2-w/2);
      else
        x = clamp(speak_command.x, speak_command.x+speak_command.w-w, my_avatar.x + my_avatar.w/2-w/2);
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+w/2-2,y+h-2);
      ctx.quadraticCurveTo(x+w/2,y+h,x+w/2+2,y+h-2);
      ctx.lineTo(x+w,y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = self.text_color;
      ctx.font = text_font;
      oyoff = 0;
      for(var j = 0; j < speak_command.atext.length; j++)
      {
        ctx.fillText(speak_command.atext[j],speak_command.x,speak_command.y+yoff+oyoff+speak_command.h);
        oyoff += speak_command.h;
      }

      ctx.globalAlpha = 1;

      if(DEBUG)
      {
        ctx.strokeStyle = white;

        yoff = 0;
        oyoff = 0;
        for(var j = 0; j < speak_command.atext.length; j++)
        {
          ctx.strokeRect(speak_command.x,speak_command.y+yoff,speak_command.w,speak_command.h);
          oyoff += speak_command.h;
        }
      }
    }

    if(self.cur_command.command == FINALE_WILDCARD_COMMAND_NOTEBOOK)
    {
      var t = 1;
      if(self.ui_state == UI_STATE_IN)     t = self.ui_state_p;
      if(self.ui_state == UI_STATE_SELECT) ;
      if(self.ui_state == UI_STATE_OUT)    t = 1-self.ui_state_p;
      my_notebookview.draw(t);

      var a = 1;
      switch(self.ui_state)
      {
        case UI_STATE_IN:     a = bubble_in_a(self.ui_state_p); yoff = bubble_in_y(self.ui_state_p); break;
        case UI_STATE_SELECT: break;
        case UI_STATE_OUT:    a = bubble_out_a(self.ui_state_p); yoff = bubble_out_y(self.ui_state_p); break;
      }
      ctx.globalAlpha = a;

      var yoff = 0;

      var b = 10;
      var h = cur_level.notifications_h*self.cur_command.prompt.length;
      var w = self.cur_command.prompt_w;
      var x = canv.width/2-w/2;
      var y = canv.height-30-h;
      ctx.fillStyle = self.bubble_color;
      fillRRect(x-b-5,y-b+5+yoff,w+b*2+10,h+b*2+5,b,ctx);
      ctx.fillStyle = self.text_color;
      var oyoff = 0;
      for(var i = 0; i < self.cur_command.prompt.length; i++)
      {
        ctx.fillText(self.cur_command.prompt[i],x,y+yoff+cur_level.notifications_h+oyoff);
        oyoff += cur_level.notifications_h;
      }
      ctx.globalAlpha = 1;
    }

  }
}

tmp_wildcard.animcycle_inst = gen_animcycle_inst(tmp_wildcard.animcycle_id,tmp_level.animcycles);
tmp_wildcard.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_wildcard.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_wildcard.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_wildcard.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_wildcard.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_wildcard.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_wildcard.raw_notifications.length; i++) tmp_wildcard.notifications[i] = stextToLines(tmp_wildcard.raw_notifications[i], tmp_wildcard.raw_notification_ws[i] ? tmp_wildcard.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.wildcards.push(tmp_wildcard);
tmp_inert = new inert();
tmp_inert.id = "rotunda";
tmp_inert.fqid = "tunic.capitol_2.hall.rotunda";
{
tmp_inert.ww = 1019.7274168712107;
tmp_inert.wh = 267.73319864195986;
tmp_inert.wx = 30.234019141953524;
tmp_inert.wy = -442.418249480281;
tmp_inert.wz = 999;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "capitol_rotunda";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "capitol_3";
tmp_scene.fqid = "tunic.capitol_3";
{
tmp_scene.primary = false;
tmp_scene.ww = 130;
tmp_scene.wh = 142.99999999999997;
tmp_scene.wx = 24.999999999999986;
tmp_scene.wy = 21.499999999999986;
tmp_scene.hover_icon_wx = 20;
tmp_scene.hover_icon_wy = 41.99999999999999;
tmp_scene.animcycle_id = "scene_capitol";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
tmp_scene.deck_animcycle_ids = [
];
tmp_scene.notifications_persistent = 0;
tmp_scene.raw_notifications = [
];
tmp_scene.raw_notification_ws = [
];
tmp_scene.notification_reqs = [[
]];
tmp_scene.notice_reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
"!tunic.capitol_0.hall.chap1_finale_c",
]];
tmp_scene.reqs = [[
"tunic.nelson"
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "hall";
tmp_room.fqid = "tunic.capitol_3.hall";
{
tmp_room.primary = false;
tmp_room.ww = 2000;
tmp_room.wh = 1162;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_capitol_hall";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 1000;
tmp_room.nav_min_wz = 1;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:112.16666666666663, wy:-217.46969696969683, ww:1129.4848484848485, wh:217.6666666666667 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 648.2945573024847;
tmp_room.target_start_wy = -253.58367957138657;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.7606060606060605

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "chap5_finale_c";
tmp_cutscene.fqid = "tunic.capitol_3.hall.chap5_finale_c";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 159.0909090909091;
tmp_cutscene.wh = 330.3030303030303;
tmp_cutscene.wx = 298.6363636363635;
tmp_cutscene.wy = 40.30303030303011;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = -319.6969696969697;
tmp_cutscene.act_wy = -168.18181818181827;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 71.2121212121212;
tmp_cutscene.hover_icon_wy = 183.33333333333331;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.nelson.trail.gramps.question",
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "black";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "chapterfin";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "chapterfin";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapterfin";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 52.80455528407311;
tmp_cutscene_command.wy = 292.79135308629793;
tmp_cutscene_command.w = 133;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "BLAH BLAH";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 13.628846018801678;
tmp_cutscene_command.wy = 332.1826447187166;
tmp_cutscene_command.w = 159;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "BLAH BLAH";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -139.33333333333312;
tmp_cutscene_command.wy = 74.60606060606051;
tmp_cutscene_command.w = 61;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "BLAH BLAH";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -363.5757575757575;
tmp_cutscene_command.wy = 121.57575757575756;
tmp_cutscene_command.w = 206;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "BLAH BLAH";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 165.2121212121214;
tmp_cutscene_command.wy = 288.24242424242425;
tmp_cutscene_command.w = 57;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "BLAH BLAH";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "chap4_finale";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 51;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 12.181818181818244;
tmp_cutscene_command.wy = 326.12121212121195;
tmp_cutscene_command.w = 159;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "BLAH BLAH";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 43.999999999999986;
tmp_cutscene_command.wy = 323.09090909090895;
tmp_cutscene_command.w = 136;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "BLAH BLAH";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -162.06060606060606;
tmp_cutscene_command.wy = 68.54545454545446;
tmp_cutscene_command.w = 72;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "BLAH BLAH";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -81.75757575757582;
tmp_cutscene_command.wy = 332.181818181818;
tmp_cutscene_command.w = 220;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "BLAH BLAH";
tmp_cutscene_command.t = 102;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 103;
tmp_cutscene_command.end_t = 152;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapterfin";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 202;
tmp_cutscene_command.end_t = 252;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapterfin";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 402;
tmp_cutscene_command.end_t = 452;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 452;
tmp_cutscene_command.end_t = 482;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 603;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.capitol_3.hall.toentry";
{
tmp_porthole.ww = 231.7272727272727;
tmp_porthole.wh = 378.6363636363637;
tmp_porthole.wx = 790.8636363636366;
tmp_porthole.wy = -71.22727272727273;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -140.9090909090909;
tmp_porthole.act_wy = -87.87878787878788;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 3.03030303030303;
tmp_porthole.hover_icon_wy = 62.12121212121212;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "rotunda";
tmp_inert.fqid = "tunic.capitol_3.hall.rotunda";
{
tmp_inert.ww = 1019.7274168712107;
tmp_inert.wh = 267.73319864195986;
tmp_inert.wx = 30.234019141953524;
tmp_inert.wy = -442.418249480281;
tmp_inert.wz = 999;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "capitol_rotunda";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "drycleaner";
tmp_scene.fqid = "tunic.drycleaner";
{
tmp_scene.primary = false;
tmp_scene.ww = 160.99999999999997;
tmp_scene.wh = 114;
tmp_scene.wx = -203.5;
tmp_scene.wy = -93.99999999999983;
tmp_scene.hover_icon_wx = 21;
tmp_scene.hover_icon_wy = 29;
tmp_scene.animcycle_id = "scene_drycleaner";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
tmp_scene.deck_animcycle_ids = [
];
tmp_scene.notifications_persistent = 0;
tmp_scene.raw_notifications = [
];
tmp_scene.raw_notification_ws = [
];
tmp_scene.notification_reqs = [[
]];
tmp_scene.notice_reqs = [[
"!self",
]];
tmp_scene.reqs = [[
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 2;
tmp_room.nav_max_wz = 3;
tmp_room.navs = [
{wx:26.500010478189893, wy:-188.4999999999999, ww:925.0000209563811, wh:224.9999999999998 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 465.05530747325474;
tmp_room.target_start_wy = -55.99999999999992;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.drycleaner.frontdesk.worker";
{
tmp_person.ww = 184.99878922602898;
tmp_person.wh = 306;
tmp_person.wx = -114.21617098486826;
tmp_person.wy = 24.99999999999997;
tmp_person.wz = 1;
tmp_person.act_wx = 271.17109843124683;
tmp_person.act_wy = -61;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 58.954396174418434;
tmp_person.hover_icon_wy = 135;
tmp_person.animcycle_id = "cleaner";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "notice";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
"!tunic.drycleaner.frontdesk.worker.done",
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "done";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.done";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 203.1611318865032;
tmp_speak_command.wy = 123.99999999999991;
tmp_speak_command.w = 246;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found her! Do you know who Theodora Youmans was?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -72.01703916293675;
tmp_speak_command.wy = 260.99999999999994;
tmp_speak_command.w = 225;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmmm...not sure. Why don't you try the library?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 197.98295218566489;
tmp_speak_command.wy = 96.99999999999993;
tmp_speak_command.w = 162.49586486816406;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Good idea. Thanks!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.hub";
{
tmp_speak.primary = 2;
tmp_speak.options_wx = 198.47438034422245;
tmp_speak.options_wy = 154;
tmp_speak.options_w = 259;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"!self",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -87.60843215037966;
tmp_speak_command.wy = 262;
tmp_speak_command.w = 169.99426888971652;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hey, what's up? Wanna hear a joke?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 198.0247889512282;
tmp_speak_command.wy = 121.00000000000001;
tmp_speak_command.w = 221.99426888971652;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Uh...actually, I'm sort of working a case right now.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -80.00000000016908;
tmp_speak_command.wy = 230.99999999999994;
tmp_speak_command.w = 253.76776123046875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "A case? Are you a detective?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -73.00000000000419;
tmp_speak_command.wy = 282.99999999999994;
tmp_speak_command.w = 252;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Don't worry, this'll only take a sec. What do you call a pony with a sore throat?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 68.99999999999993;
tmp_speak_command.wy = 91;
tmp_speak_command.w = 41.12794494628906;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Um...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -84.99999999999997;
tmp_speak_command.wy = 228.99999999999994;
tmp_speak_command.w = 125.67988586425781;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "A little horse!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -74.99999999999997;
tmp_speak_command.wy = 225.9999999999999;
tmp_speak_command.w = 343.3356628417969;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Get it? A little hoarse? Oh, nevermind...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 18.02479392984866;
tmp_speak_command.wy = 95.99999999999996;
tmp_speak_command.w = 101.48789978027344;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Ha! I like it!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 201.02479392984856;
tmp_speak_command.wy = 122.00000000000001;
tmp_speak_command.w = 228.99426888971652;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Can you help me? I need to find the owner of this slip.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -74;
tmp_speak_command.wy = 258.99999999999994;
tmp_speak_command.w = 224;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, I can't show our log books to just anybody.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "toleo";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.hub.toleo";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? It's for my Grampa Leo. He's a historian.";
tmp_option.target_speak = "leo";
tmp_option.notifications_persistent = 0;
tmp_option.raw_notifications = [
];
tmp_option.raw_notification_ws = [
];
tmp_option.notification_reqs = [[
]];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "toplease";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.hub.toplease";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? I won't tell anybody!";
tmp_option.target_speak = "please";
tmp_option.notifications_persistent = 0;
tmp_option.raw_notifications = [
];
tmp_option.raw_notification_ws = [
];
tmp_option.notification_reqs = [[
]];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "leo";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.leo";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -81.99999999999986;
tmp_speak_command.wy = 233.99999999999997;
tmp_speak_command.w = 203.8957977294922;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Leo...you mean Leopold?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 201.00000000000014;
tmp_speak_command.wy = 93.99999999999991;
tmp_speak_command.w = 130.40785217285156;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yup, that's him.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -76.99999999999996;
tmp_speak_command.wy = 257.99999999999994;
tmp_speak_command.w = 292;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Your gramps is my favorite customer! Always full of stories.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -76.99999999999996;
tmp_speak_command.wy = 260.9999999999999;
tmp_speak_command.w = 203;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Guess it couldn't hurt to let you take a look.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -76.99999999999986;
tmp_speak_command.wy = 230.99999999999991;
tmp_speak_command.w = 173.94381713867188;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Here's the log book.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "please";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.please";
{
tmp_speak.primary = false;
tmp_speak.options_wx = -345;
tmp_speak.options_wy = 112.99999999999996;
tmp_speak.options_w = 233;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -76.99999999999991;
tmp_speak_command.wy = 259;
tmp_speak_command.w = 163;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Sorry. Gotta stick to the rules.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "takealook";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.takealook";
{
tmp_speak.primary = true;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.drycleaner.frontdesk.worker.leo",
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -130.0252834610024;
tmp_speak_command.wy = 259;
tmp_speak_command.w = 109.83990478515625;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Take a look!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "tryagain";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.tryagain";
{
tmp_speak.primary = true;
tmp_speak.options_wx = 204.00000000000006;
tmp_speak.options_wy = 149.99999999999997;
tmp_speak.options_w = 256;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.drycleaner.frontdesk.worker.please",
"!tunic.drycleaner.frontdesk.worker.leo",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 25.914700544464647;
tmp_speak_command.wy = 456.3629764065335;
tmp_speak_command.w = 80.91993713378906;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "try again";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "toleo";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.tryagain.toleo";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? It's for my Grampa Leo. He's a historian.";
tmp_option.target_speak = "leo";
tmp_option.notifications_persistent = 0;
tmp_option.raw_notifications = [
];
tmp_option.raw_notification_ws = [
];
tmp_option.notification_reqs = [[
]];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "toplease";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.tryagain.toplease";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? I won't tell anybody!";
tmp_option.target_speak = "please";
tmp_option.notifications_persistent = 0;
tmp_option.raw_notifications = [
];
tmp_option.raw_notification_ws = [
];
tmp_option.notification_reqs = [[
]];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_object.wx = 28.999999999999986;
tmp_object.wy = 39.00000000000003;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 39;
tmp_object.hover_icon_wy = 41;
tmp_object.animcycle_id = "logbook";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.notice_icon_animcycle_id = "notice";
tmp_object.view_overlay_animcycle_id = "clueoverlay_logbook";
tmp_object.audio_id = "null";
tmp_object.deck_animcycle_ids = [
];
tmp_object.notifications_persistent = 1;
tmp_object.raw_notifications = [
"I have to find the entry for this slip",
];
tmp_object.raw_notification_ws = [
156,
];
tmp_object.notification_reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];
tmp_object.view_overlay_reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];
tmp_object.notice_reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];
tmp_object.reqs = [[
"tunic.drycleaner.frontdesk.worker.leo",
]];

if(tmp_object.ww < 0) { tmp_object.ww *= -1; tmp_object.flip = 1; }
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_object.view_overlay_animcycle_inst = gen_animcycle_inst(tmp_object.view_overlay_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_object.raw_notification_ws[i] ? tmp_object.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "page";
tmp_view.fqid = "tunic.drycleaner.frontdesk.logbook.page";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "logbook_front";
tmp_view.magnify = false;
tmp_view.audio_id = "null";
tmp_view.deck_animcycle_ids = [
];
tmp_view.notifications_persistent = 0;
tmp_view.raw_notifications = [
];
tmp_view.raw_notification_ws = [
];
tmp_view.notification_reqs = [[
]];
tmp_view.exit_reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "bingo";
tmp_zone.fqid = "tunic.drycleaner.frontdesk.logbook.page.bingo";
{
tmp_zone.ww = 679;
tmp_zone.wh = 51.99999999999996;
tmp_zone.wx = 40.50000000000006;
tmp_zone.wy = 13.000000000000014;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "page";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"The number matches the slip.",
"Theodora Youmans must be the owner!",
"I'll make a note of this.",
];
tmp_zone.raw_notification_ws = [
247.7677764892578,
332.36773681640625,
202.91180419921875,
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_observation = new observation();
tmp_observation.id = "block_0";
tmp_observation.fqid = "tunic.drycleaner.frontdesk.block_0";
{
tmp_observation.ww = 142.1456885723186;
tmp_observation.wh = 348.99999999999994;
tmp_observation.wx = 507.11048041255634;
tmp_observation.wy = 3.5;
tmp_observation.wz = 0;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I should find the logbook in here...";
tmp_observation.blip_wx = 276.0907405569176;
tmp_observation.blip_wy = 86;
tmp_observation.blip_w = 148;
tmp_observation.blip_h = 30;
tmp_observation.notifications_persistent = 0;
tmp_observation.raw_notifications = [
];
tmp_observation.raw_notification_ws = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.notification_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_observation.raw_notification_ws[i] ? tmp_observation.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "block_1";
tmp_observation.fqid = "tunic.drycleaner.frontdesk.block_1";
{
tmp_observation.ww = 137.99999999981253;
tmp_observation.wh = 359.9999999999999;
tmp_observation.wx = 502.9999999647827;
tmp_observation.wy = 4;
tmp_observation.wz = 0;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I should check that logbook to see who owned this slip...";
tmp_observation.blip_wx = 245.28716492945168;
tmp_observation.blip_wy = 95.99999999999996;
tmp_observation.blip_w = 175;
tmp_observation.blip_h = 30;
tmp_observation.notifications_persistent = 0;
tmp_observation.raw_notifications = [
];
tmp_observation.raw_notification_ws = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.notification_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_observation.raw_notification_ws[i] ? tmp_observation.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.drycleaner.frontdesk.toentry";
{
tmp_porthole.ww = 112.0000000117358;
tmp_porthole.wh = 347.00000000000006;
tmp_porthole.wx = 495.00000010763;
tmp_porthole.wy = 2.5;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -17;
tmp_porthole.act_wy = -108;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 8;
tmp_porthole.hover_icon_wy = 132;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "flaghouse";
tmp_scene.fqid = "tunic.flaghouse";
{
tmp_scene.primary = false;
tmp_scene.ww = 124.99999999999999;
tmp_scene.wh = 94.99999999999997;
tmp_scene.wx = 155.50000000000003;
tmp_scene.wy = -11.499999999999972;
tmp_scene.hover_icon_wx = 21;
tmp_scene.hover_icon_wy = 34;
tmp_scene.animcycle_id = "scene_flaghouse";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
tmp_scene.deck_animcycle_ids = [
];
tmp_scene.notifications_persistent = 0;
tmp_scene.raw_notifications = [
];
tmp_scene.raw_notification_ws = [
];
tmp_scene.notification_reqs = [[
]];
tmp_scene.notice_reqs = [[
"!self",
]];
tmp_scene.reqs = [[
"tunic.wildlife.center.wells.nodeer",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.flaghouse.entry";
{
tmp_room.primary = false;
tmp_room.ww = 1250;
tmp_room.wh = 680;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_flaghouse";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:195.8635512270381, wy:-129.88652109924757, ww:247.40778649852865, wh:162.7987580532254 },
{wx:435.0121547069717, wy:-232.50004173250022, ww:148.0004761082019, wh:139.00000163468943 },
{wx:20.91358565125784, wy:22.570527867132732, ww:119.47779487982518, wh:22.9969661585629 },
];
tmp_room.lights = [
{wx:-326, wy:245.99999999999994, ww:100, wh:100 },
];
tmp_room.shadows = [
{wx:-199.99999999999986, wy:246.99999999999994, ww:100, wh:100 },
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = 496.32270031916676;
tmp_room.target_start_wy = -166.5842040431845;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.0303030303030303

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "flag_girl";
tmp_person.fqid = "tunic.flaghouse.entry.flag_girl";
{
tmp_person.ww = 184.9999999998853;
tmp_person.wh = 296.99999999999994;
tmp_person.wx = 244.70367505102087;
tmp_person.wy = 36.50776872663042;
tmp_person.wz = 0;
tmp_person.act_wx = -115.83567257385425;
tmp_person.act_wy = -93.25900108072;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 82.99735897658456;
tmp_person.hover_icon_wy = 136.0000000074151;
tmp_person.animcycle_id = "flag_girl";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "notice";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
"tunic.flaghouse.entry.colorbook",
"!tunic.flaghouse.entry.flag_girl.symbol",
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hello";
tmp_speak.fqid = "tunic.flaghouse.entry.flag_girl.hello";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"!self",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 128.7015202914498;
tmp_speak_command.wy = 289.974946496717;
tmp_speak_command.w = 154;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hey! Gil said you'd be dropping by.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -34.994374440117085;
tmp_speak_command.wy = 112.00058296434578;
tmp_speak_command.w = 122.5838623046875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Gil? Who's Gil?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 83.00008502029175;
tmp_speak_command.wy = 256.0000088100805;
tmp_speak_command.w = 232.26377868652344;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Gilbert Wells, history guy?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 121.00000042936932;
tmp_speak_command.wy = 290.0000000444945;
tmp_speak_command.w = 151;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I used to tutor him in high school.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -34.999999993212235;
tmp_speak_command.wy = 162.0000000007034;
tmp_speak_command.w = 155;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You've got a million flags here!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 161.00000000007995;
tmp_speak_command.wy = 281.00000000000824;
tmp_speak_command.w = 77;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yep. I'm a vexillophile!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 13.000000000002991;
tmp_speak_command.wy = 137.00000000000026;
tmp_speak_command.w = 109.71994018554688;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "A vexy-wha?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 111.99999999999999;
tmp_speak_command.wy = 286;
tmp_speak_command.w = 201;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It just means flag expert. How can I help?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -93.00000000000003;
tmp_speak_command.wy = 136.99999999999997;
tmp_speak_command.w = 225.71177673339844;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm investigating this flag.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -54.99999999999996;
tmp_speak_command.wy = 139.99999999999997;
tmp_speak_command.w = 187.86383056640625;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Can you take a look?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 37.00000000000006;
tmp_speak_command.wy = 286;
tmp_speak_command.w = 223;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hey, I've seen that symbol before! Check it out!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hello_recap";
tmp_speak.fqid = "tunic.flaghouse.entry.flag_girl.hello_recap";
{
tmp_speak.primary = true;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.flaghouse.entry.flag_girl.hello",
"!tunic.flaghouse.entry.colorbook",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -40.000000001586585;
tmp_speak_command.wy = 250.00000000002393;
tmp_speak_command.w = 260;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "There should be some info about that symbol in my book.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "symbol";
tmp_speak.fqid = "tunic.flaghouse.entry.flag_girl.symbol";
{
tmp_speak.primary = 999;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.flaghouse.entry.colorbook",
"!self",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -2.3922235928012796;
tmp_speak_command.wy = 177.02564822338502;
tmp_speak_command.w = 133;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "This must be an ecology flag!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -88.55966175010107;
tmp_speak_command.wy = 171.0085117270681;
tmp_speak_command.w = 188;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you know anything about Earth Day?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 141.00013494149752;
tmp_speak_command.wy = 267.00000198907304;
tmp_speak_command.w = 135.25584411621094;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmm...not much.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 48.00000000802984;
tmp_speak_command.wy = 289.0000000001181;
tmp_speak_command.w = 240;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "If I were you, I'd go to the library and do some digging.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "symbol_recap";
tmp_speak.fqid = "tunic.flaghouse.entry.flag_girl.symbol_recap";
{
tmp_speak.primary = true;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.flaghouse.entry.flag_girl.symbol",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 32.0647215113342;
tmp_speak_command.wy = 295.0933277431003;
tmp_speak_command.w = 240;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "If I were you, I'd go to the library and do some digging.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_observation = new observation();
tmp_observation.id = "colorbook";
tmp_observation.fqid = "tunic.flaghouse.entry.colorbook";
{
tmp_observation.ww = 87.98534996738672;
tmp_observation.wh = 72.00177749957291;
tmp_observation.wx = -49.87389794193018;
tmp_observation.wy = -87.2622840552314;
tmp_observation.wz = 3;
tmp_observation.act_wx = 117.99183704899941;
tmp_observation.act_wy = 21.00031032693539;
tmp_observation.act_anim = 1;
tmp_observation.hover_icon_wx = 35.711280829471036;
tmp_observation.hover_icon_wy = 33.67962457212013;
tmp_observation.animcycle_id = "flaghouse_book";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.notice_icon_animcycle_id = "notice";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "Huh… “The ecology symbol, by Ron Cobb.”";
tmp_observation.blip_wx = -260.395513623895;
tmp_observation.blip_wy = 104.00897617603255;
tmp_observation.blip_w = 363;
tmp_observation.blip_h = 30;
tmp_observation.notifications_persistent = 0;
tmp_observation.raw_notifications = [
];
tmp_observation.raw_notification_ws = [
];
tmp_observation.notice_reqs = [[
"!self",
]];
tmp_observation.notification_reqs = [[
]];
tmp_observation.reqs = [[
"tunic.flaghouse.entry.flag_girl.hello",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_observation.raw_notification_ws[i] ? tmp_observation.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.flaghouse.entry.tomap";
{
tmp_porthole.ww = 91.0468881352172;
tmp_porthole.wh = 452.0010502775448;
tmp_porthole.wx = 519.4919488824786;
tmp_porthole.wy = -55.99858734293602;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "null";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 0;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "desk";
tmp_inert.fqid = "tunic.flaghouse.entry.desk";
{
tmp_inert.ww = 195.99856189644183;
tmp_inert.wh = 275;
tmp_inert.wx = -76.36995026821269;
tmp_inert.wy = -138.49997934118434;
tmp_inert.wz = 1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "flaghouse_desk";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "historicalsociety";
tmp_scene.fqid = "tunic.historicalsociety";
{
tmp_scene.primary = true;
tmp_scene.ww = 119.0000000000001;
tmp_scene.wh = 144.00000000000003;
tmp_scene.wx = 117.49999999999977;
tmp_scene.wy = 162.99999999999983;
tmp_scene.hover_icon_wx = 27;
tmp_scene.hover_icon_wy = 41.99999999999999;
tmp_scene.animcycle_id = "scene_historicalsociety";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
tmp_scene.deck_animcycle_ids = [
];
tmp_scene.notifications_persistent = 0;
tmp_scene.raw_notifications = [
];
tmp_scene.raw_notification_ws = [
];
tmp_scene.notification_reqs = [[
]];
tmp_scene.notice_reqs = [[
"!self",
]];
tmp_scene.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
],[
"tunic.capitol_0.hall.chap1_finale_c",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "basement";
tmp_room.fqid = "tunic.historicalsociety.basement";
{
tmp_room.primary = false;
tmp_room.ww = 1600;
tmp_room.wh = 980;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_hallway";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 920;
tmp_room.nav_min_wz = 1;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:73.43684040313263, wy:-239.22199449511453, ww:996.3941997472244, wh:188.36363645637445 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = -300;
tmp_room.target_start_wy = -77.00000000000001;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.4848484848484849
tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "ch3start";
tmp_cutscene.fqid = "tunic.historicalsociety.basement.ch3start";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 0;
tmp_cutscene.wh = 0;
tmp_cutscene.wx = 0;
tmp_cutscene.wy = 0;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.capitol_1.hall.chap2_finale_c",
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -501.6363636363635;
tmp_cutscene_command.wy = 10.393939393939455;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -283.51515153500634;
tmp_cutscene_command.wy = 75.81818182679176;
tmp_cutscene_command.w = 158;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "There you are, Jo!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -403.3940766248419;
tmp_cutscene_command.wy = 117.63642321792207;
tmp_cutscene_command.w = 253;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Come look- we've recieved the next artifact!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 306;
tmp_cutscene_command.wy = -110;
tmp_cutscene_command.t = 1;
tmp_cutscene_command.end_t = 140;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 295;
tmp_cutscene_command.wy = -110;
tmp_cutscene_command.t = 141;
tmp_cutscene_command.end_t = 142;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 267.67365699116954;
tmp_cutscene_command.wy = 113.45210633063581;
tmp_cutscene_command.w = 93;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "What is it?";
tmp_cutscene_command.t = 142;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -326.7269256585187;
tmp_cutscene_command.wy = 112.06060460793029;
tmp_cutscene_command.w = 192;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "It's a flag! I'm not sure WHAT flag it is...";
tmp_cutscene_command.t = 142;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 339.5757659130529;
tmp_cutscene_command.wy = 128.78787875298272;
tmp_cutscene_command.w = 157;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I can't waste time on this right now";
tmp_cutscene_command.t = 142;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 336.7878788706299;
tmp_cutscene_command.wy = 127.39393939359312;
tmp_cutscene_command.w = 152;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Teddy is still out there somewhere!";
tmp_cutscene_command.t = 142;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -269.5757575749555;
tmp_cutscene_command.wy = 71.63636363636036;
tmp_cutscene_command.w = 149;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "We'll find him, Jo.";
tmp_cutscene_command.t = 142;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -309.9999999999854;
tmp_cutscene_command.wy = 103.69696969696972;
tmp_cutscene_command.w = 183;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "We just have to keep vigilant for clues!";
tmp_cutscene_command.t = 142;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 143;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "savedteddy";
tmp_cutscene.fqid = "tunic.historicalsociety.basement.savedteddy";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 0;
tmp_cutscene.wh = 0;
tmp_cutscene.wx = 0;
tmp_cutscene.wy = 0;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.historicalsociety.cage.unlockdoor",
"!tunic.historicalsociety.basement.savedteddy",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.animcycle_id = "black";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "chapter4";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = 1760;
tmp_cutscene_command.wh = 1320;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "chapter4";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter4";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter4";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 50;
tmp_cutscene_command.end_t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter4";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 250;
tmp_cutscene_command.end_t = 300;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 300;
tmp_cutscene_command.end_t = 330;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -301.6363636363635;
tmp_cutscene_command.wy = 35.393939393939455;
tmp_cutscene_command.w = 186;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Gramps must be up in the collection room.";
tmp_cutscene_command.t = 331;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -340.6666666666666;
tmp_cutscene_command.wy = 36.78787878787886;
tmp_cutscene_command.w = 145;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Let's go find him!";
tmp_cutscene_command.t = 331;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 332;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "seescratches";
tmp_cutscene.fqid = "tunic.historicalsociety.basement.seescratches";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 226.69696969694482;
tmp_cutscene.wh = 321.96969696970814;
tmp_cutscene.wx = -221.49999792571265;
tmp_cutscene.wy = -25.984848540048603;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = -90.26702699536304;
tmp_cutscene.act_wy = -186.45549996097253;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 70.47568782654913;
tmp_cutscene.hover_icon_wy = -23.25528061561551;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "notice";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.historicalsociety.basement.ch3start",
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -579.030303030303;
tmp_cutscene_command.wy = 24.242424242424125;
tmp_cutscene_command.w = 165;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Hey, look at those scratches!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -606.909090909091;
tmp_cutscene_command.wy = 21.45454545454542;
tmp_cutscene_command.w = 183;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Maybe someone took him on the elevator!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -182.18916849603553;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 30.12121212121248;
tmp_cutscene_command.wy = 119.030303030303;
tmp_cutscene_command.w = 116;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Great Scott! You’re right!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -558.121212121212;
tmp_cutscene_command.wy = 24.242424242424125;
tmp_cutscene_command.w = 147;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Why isn't the button working?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 35.69696969696976;
tmp_cutscene_command.wy = 158.06060606060598;
tmp_cutscene_command.w = 201;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You'll need a key card. Wish I had mine...Teddy chewed it up.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -595.7575757575758;
tmp_cutscene_command.wy = -21.757575757575715;
tmp_cutscene_command.w = 172;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I’ve got Wells’s ID!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 31.515151515151558;
tmp_cutscene_command.wy = 116.24242424242422;
tmp_cutscene_command.w = 160;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Excellent. That’ll do the trick.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 38.4848484848486;
tmp_cutscene_command.wy = 152.48484848484853;
tmp_cutscene_command.w = 240;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I need to take the artifact upstairs. Do you want to wait until I get back?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -569.2727272727273;
tmp_cutscene_command.wy = 21.45454545454542;
tmp_cutscene_command.w = 156;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "It's okay, Gramps. I can handle this.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -590.1818181818182;
tmp_cutscene_command.wy = -21.757575757575715;
tmp_cutscene_command.w = 169;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Teddy, here I come!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.historicalsociety.basement.gramps";
{
tmp_person.ww = 182.18916849603553;
tmp_person.wh = 306.3600350707112;
tmp_person.wx = -12.967829764427321;
tmp_person.wy = -159.69914005152015;
tmp_person.wz = -1;
tmp_person.act_wx = 304.09879703112875;
tmp_person.act_wy = -80.69530436206782;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 84.59315607990388;
tmp_person.hover_icon_wy = 133.69941325192826;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"tunic.capitol_1.hall.chap2_finale_c",
"!tunic.historicalsociety.cage",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "seeyalater";
tmp_speak.fqid = "tunic.historicalsociety.basement.gramps.seeyalater";
{
tmp_speak.primary = true;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.historicalsociety.basement.seescratches",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 13.560128675733907;
tmp_speak_command.wy = 182.1983873539678;
tmp_speak_command.w = 292;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'll be in the collections when you're ready to work on the flag.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 26.121212032576537;
tmp_speak_command.wy = 141.81818166086583;
tmp_speak_command.w = 95.7279052734375;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Good luck!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "whatdo";
tmp_speak.fqid = "tunic.historicalsociety.basement.gramps.whatdo";
{
tmp_speak.primary = true;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"!tunic.historicalsociety.basement.seescratches",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -28.28615447477877;
tmp_speak_command.wy = 112.51697153606912;
tmp_speak_command.w = 143.12789916992188;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "We'll find Teddy.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -33.819133383712256;
tmp_speak_command.wy = 118.12173859932649;
tmp_speak_command.w = 263.87176513671875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "We just have to stay vigilant!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_observation = new observation();
tmp_observation.id = "janitor";
tmp_observation.fqid = "tunic.historicalsociety.basement.janitor";
{
tmp_observation.ww = 203.00002239341683;
tmp_observation.wh = 255.06060645548385;
tmp_observation.wx = -220.79999277901507;
tmp_observation.wy = -13.439447520644407;
tmp_observation.wz = 1;
tmp_observation.act_wx = 79.44757984260579;
tmp_observation.act_wy = -72.17094866785862;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = -0.9711467315839303;
tmp_observation.hover_icon_wy = 95.19657210202551;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_door";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "Button's not working.";
tmp_observation.blip_wx = -420.2421164205936;
tmp_observation.blip_wy = 59.758475447343294;
tmp_observation.blip_w = 195;
tmp_observation.blip_h = 30;
tmp_observation.notifications_persistent = 0;
tmp_observation.raw_notifications = [
];
tmp_observation.raw_notification_ws = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.notification_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.capitol_1.hall.chap2_finale_c",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_observation.raw_notification_ws[i] ? tmp_observation.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tocage";
tmp_porthole.fqid = "tunic.historicalsociety.basement.tocage";
{
tmp_porthole.ww = 235.06060606060612;
tmp_porthole.wh = 270.3939393939393;
tmp_porthole.wx = -220.10605853176065;
tmp_porthole.wy = -9.954545509739688;
tmp_porthole.wz = 0;
tmp_porthole.act_wx = -27.539754275225416;
tmp_porthole.act_wy = -67.97065147609759;
tmp_porthole.act_anim = 0;
tmp_porthole.hover_icon_wx = -0.9660300356730398;
tmp_porthole.hover_icon_wy = 42.22853561356718;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "cage";
tmp_porthole.target_start_wx = -1882.2787584745208;
tmp_porthole.target_start_wy = -146.50043445789868;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
"tunic.historicalsociety.basement.seescratches",
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset";
tmp_porthole.fqid = "tunic.historicalsociety.basement.tocloset";
{
tmp_porthole.ww = 179.57575757575765;
tmp_porthole.wh = 258.42424242424244;
tmp_porthole.wx = 160.9088599346644;
tmp_porthole.wy = -18.053196447695854;
tmp_porthole.wz = -0.9;
tmp_porthole.act_wx = 15.510160117984167;
tmp_porthole.act_wy = -103.87935434254663;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 5.484848484848451;
tmp_porthole.hover_icon_wy = 96.3030303030303;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "closet";
tmp_porthole.target_start_wx = -353.23167421726015;
tmp_porthole.target_start_wy = -11.494478557684735;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset_dirty";
tmp_porthole.fqid = "tunic.historicalsociety.basement.tocloset_dirty";
{
tmp_porthole.ww = 176.7878787878788;
tmp_porthole.wh = 254.24242424242425;
tmp_porthole.wx = 161.89882103462503;
tmp_porthole.wy = -17.911441762352183;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 14.854463191345499;
tmp_porthole.act_wy = -103.91054119884059;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 5.090909090909119;
tmp_porthole.hover_icon_wy = 97.09090909090912;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "closet_dirty";
tmp_porthole.target_start_wx = -374.75951624996645;
tmp_porthole.target_start_wy = -34.4078948742569;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
"!tunic.capitol_1.hall.chap2_finale_c",
],[
"tunic.historicalsociety.cage",
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.historicalsociety.basement.toentry";
{
tmp_porthole.ww = 284.06060606060595;
tmp_porthole.wh = 735.6666666666665;
tmp_porthole.wx = -561.9088870657874;
tmp_porthole.wy = 57.924237000260575;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 69.47294391599398;
tmp_porthole.act_wy = -169.03151397278108;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = -2.3333333333333197;
tmp_porthole.hover_icon_wy = -57.36363636363639;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 581.1727590073484;
tmp_porthole.target_start_wy = -3.124616842446756;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "box";
tmp_inert.fqid = "tunic.historicalsociety.basement.box";
{
tmp_inert.ww = 180.84848484848473;
tmp_inert.wh = 130.66666666666669;
tmp_inert.wx = 155.7575757575757;
tmp_inert.wy = -160.6666666666668;
tmp_inert.wz = -1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "flagbox";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
"tunic.capitol_1.hall.chap2_finale_c",
"!tunic.historicalsociety.cage",
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgpipes";
tmp_inert.fqid = "tunic.historicalsociety.basement.fgpipes";
{
tmp_inert.ww = 524.225895385451;
tmp_inert.wh = 993.4567891357317;
tmp_inert.wx = 469.4167914133037;
tmp_inert.wy = 4.572438020427114;
tmp_inert.wz = 999;
tmp_inert.g = 0.4;
tmp_inert.animcycle_id = "fgpipes";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "janitorcart";
tmp_inert.fqid = "tunic.historicalsociety.basement.janitorcart";
{
tmp_inert.ww = 258.909090909091;
tmp_inert.wh = 278.4242424242424;
tmp_inert.wx = -191.33333333258065;
tmp_inert.wy = -61.696969696983075;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "janitorcart";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
"!tunic.capitol_1.hall.chap2_finale_c"
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "scratches";
tmp_inert.fqid = "tunic.historicalsociety.basement.scratches";
{
tmp_inert.ww = 130.5151515151517;
tmp_inert.wh = 197.9090909090908;
tmp_inert.wx = -206.86363428933635;
tmp_inert.wy = -97.77272732792146;
tmp_inert.wz = -1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "scratches";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
"tunic.capitol_1.hall.chap2_finale_c",
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "cage";
tmp_room.fqid = "tunic.historicalsociety.cage";
{
tmp_room.primary = false;
tmp_room.ww = 4000;
tmp_room.wh = 800;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "scene_historicalsociety_cage";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 749.0909090909091;
tmp_room.nav_min_wz = 1;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-1068, wy:-216.0454545454547, ww:1771.2727272727273, wh:229.54545454545416 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = -793.6363636363636;
tmp_room.target_start_wy = -171.8181818181818;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.2121212121212122

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "confrontation";
tmp_cutscene.fqid = "tunic.historicalsociety.cage.confrontation";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 1823.7878787878785;
tmp_cutscene.wh = 875.9090909090911;
tmp_cutscene.wx = -1212.8030303030307;
tmp_cutscene.wy = 10.984848484848612;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = 842.7781402833142;
tmp_cutscene.act_wy = -125.95271757353505;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 273.6363636363636;
tmp_cutscene.hover_icon_wy = 270.45454545454544;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.historicalsociety.cage.unlockdoor",
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = 120;
tmp_cutscene_command.wh = 300;
tmp_cutscene_command.wx = -1050;
tmp_cutscene_command.wy = -80;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.animcycle_id = "archivist";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.ww = -120;
tmp_cutscene_command.wh = 300;
tmp_cutscene_command.wx = -1250;
tmp_cutscene_command.wy = -80;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.animcycle_id = "boss";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -850;
tmp_cutscene_command.wy = -110;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.wx = -630;
tmp_cutscene_command.wy = -110;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1005.1971588744905;
tmp_cutscene_command.wy = 133.35014185840885;
tmp_cutscene_command.w = 39;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Hey!";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1060.3756338339012;
tmp_cutscene_command.wy = 187.088154237637;
tmp_cutscene_command.w = 148;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "What are you doing down here?";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = -762.0331339764816;
tmp_cutscene_command.wy = -60.17630853845938;
tmp_cutscene_command.w = 91;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "GRRRRRRR";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1058.1046836443345;
tmp_cutscene_command.wy = 188.2231404958726;
tmp_cutscene_command.w = 200;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "GAH! And what is THAT doing out of its cage?!";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -888.6721763125834;
tmp_cutscene_command.wy = 95.57851239669398;
tmp_cutscene_command.w = 301;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You stole Teddy! How could you?!";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.wx = -872.797037129337;
tmp_cutscene_command.wy = -0.12429706896413606;
tmp_cutscene_command.t = 49;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1297.1438384860387;
tmp_cutscene_command.wy = 162.3153240850475;
tmp_cutscene_command.w = 288;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Okay, I'm here. What's going on?";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1044.4129154153836;
tmp_cutscene_command.wy = 158.30313705628805;
tmp_cutscene_command.w = 97;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I told you!";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1109.1791426521365;
tmp_cutscene_command.wy = 163.1790668199204;
tmp_cutscene_command.w = 307;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I captured a badger in our museum!";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1053.7878787906916;
tmp_cutscene_command.wy = 198.66115702491604;
tmp_cutscene_command.w = 221;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "He's been eating my lunch every day this week!";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

template.js:1830 tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -856.0552496627738;
tmp_cutscene_command.wy = 97.72727773595138;
tmp_cutscene_command.w = 117;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "No he hasn't!";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = -767.4848647175473;
tmp_cutscene_command.wy = -55.85950352684421;
tmp_cutscene_command.w = 26;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "😐";
tmp_cutscene_command.t = 60;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -843;
tmp_cutscene_command.wy = -110;
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -841.0027548210479;
tmp_cutscene_command.wy = 85.36363636363984;
tmp_cutscene_command.w = 64;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Teddy!";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -854.6225895316868;
tmp_cutscene_command.wy = 118.2782369146007;
tmp_cutscene_command.w = 227;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Have you been stealing Gramps's paperwork too?!";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = -761.7355371901043;
tmp_cutscene_command.wy = -49.961432506886275;
tmp_cutscene_command.w = 24;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "😐";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -854.6225895316805;
tmp_cutscene_command.wy = 93.30853994490349;
tmp_cutscene_command.w = 179;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "And my homework?!?!";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = -756.5068870523417;
tmp_cutscene_command.wy = -55.26446280991733;
tmp_cutscene_command.w = 29;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "😐";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1032;
tmp_cutscene_command.wy = 148.3856749311294;
tmp_cutscene_command.w = 41;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "See?!";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -850;
tmp_cutscene_command.wy = -110;
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1056.8209366391186;
tmp_cutscene_command.wy = 143.4738292011018;
tmp_cutscene_command.w = 205;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "That thing's a monster!";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1261.068870523416;
tmp_cutscene_command.wy = 221.4738292011018;
tmp_cutscene_command.w = 244;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Jolie- you need to keep your badger under control, or he'll have to go.";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1042.3636363636365;
tmp_cutscene_command.wy = 155.66115702479328;
tmp_cutscene_command.w = 51;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "YEAH!";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1268.6033057851241;
tmp_cutscene_command.wy = 175.3471074380165;
tmp_cutscene_command.w = 143;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "And you, Frank-";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1037.8236914600552;
tmp_cutscene_command.wy = 150.1349862258952;
tmp_cutscene_command.w = 53;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "YEAH!";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1034.4187327823693;
tmp_cutscene_command.wy = 152.7024793388429;
tmp_cutscene_command.w = 87;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wait- me?";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1313.7438016528927;
tmp_cutscene_command.wy = 213.65840220385667;
tmp_cutscene_command.w = 376;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You can't just steal Jolie's pet. Don't you know badgers are protected?";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
template.js:1827 tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1254.716253443526;
tmp_cutscene_command.wy = 166.5840220385674;
tmp_cutscene_command.w = 346;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Besides, he looks pretty friendly to me.";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1015.1239669421489;
tmp_cutscene_command.wy = 135.82644628099163;
tmp_cutscene_command.w = 44;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wha?!";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1013.9146005509642;
tmp_cutscene_command.wy = 130.98898071625334;
tmp_cutscene_command.w = 112;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Ugh. Fine.";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = -760.9724517906337;
tmp_cutscene_command.wy = -57.46005509641896;
tmp_cutscene_command.w = 22;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "😝";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1211.0909090909092;
tmp_cutscene_command.wy = 170.06336088154262;
tmp_cutscene_command.w = 131;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Alright, Jolie. Back to work.";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -1212.7851239669421;
tmp_cutscene_command.wy = 173.26446280991723;
tmp_cutscene_command.w = 237;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Your grampa is waiting for you in the collection room.";
tmp_cutscene_command.t = 61;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.wx = -460;
tmp_cutscene_command.wy = -110;
tmp_cutscene_command.t = 62;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -843;
tmp_cutscene_command.wy = -110;
tmp_cutscene_command.t = 62;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -806.9531680440773;
tmp_cutscene_command.wy = 68.33884297520652;
tmp_cutscene_command.w = 188;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Come on, Teddy.";
tmp_cutscene_command.t = 62;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -810.1729966971486;
tmp_cutscene_command.wy = 70.6042143833924;
tmp_cutscene_command.w = 188;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Let's go find Grampa!";
tmp_cutscene_command.t = 62;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 62;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "unlockdoor";
tmp_cutscene.fqid = "tunic.historicalsociety.cage.unlockdoor";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 153.37904534840507;
tmp_cutscene.wh = 482.26721762881266;
tmp_cutscene.wx = -125.8968354857674;
tmp_cutscene.wy = -47.23771318709771;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = -54;
tmp_cutscene.act_wy = -20.999999999999996;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = -34.09090295823749;
tmp_cutscene.hover_icon_wy = 45.264462792109335;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "notice";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.historicalsociety.frontdesk.key",
"!tunic.historicalsociety.cage.unlockdoor",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.wx = -100;
tmp_cutscene_command.wy = -110;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "teddy";
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -143.39332287910005;
tmp_cutscene_command.wy = 78.17469269522635;
tmp_cutscene_command.w = 170;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I've got you, Teddy!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "teddy";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 92.35775268835415;
tmp_cutscene_command.wy = -49.38407478489991;
tmp_cutscene_command.w = 24;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "❤️";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -140.59228650137743;
tmp_cutscene_command.wy = 109.96143250688709;
tmp_cutscene_command.w = 148;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Come on, let's get out of here!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "glasses";
tmp_person.fqid = "tunic.historicalsociety.cage.glasses";
{
tmp_person.ww = 75.87868469126526;
tmp_person.wh = 32.51513234444093;
tmp_person.wx = -677.3887525887745;
tmp_person.wy = -247.9888500364154;
tmp_person.wz = 0;
tmp_person.act_wx = -94.15980017432396;
tmp_person.act_wy = 56.30831848259591;
tmp_person.act_anim = 0;
tmp_person.hover_icon_wx = 36.48788766557281;
tmp_person.hover_icon_wy = 24.359381199249835;
tmp_person.animcycle_id = "glasses";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.notice_icon_animcycle_id = "notice";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
"tunic.historicalsociety.cage.teddy.trapped",
"!tunic.historicalsociety.cage.glasses.afterteddy",
"!tunic.historicalsociety.frontdesk.key",
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.historicalsociety.cage.glasses.afterteddy",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "afterteddy";
tmp_speak.fqid = "tunic.historicalsociety.cage.glasses.afterteddy";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -739.4264863403898;
tmp_speak_command.wy = 19.99679817777874;
tmp_speak_command.w = 201;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Whoever dropped these is probably the culprit!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -734.6978106143633;
tmp_speak_command.wy = 19.15701436949996;
tmp_speak_command.w = 218;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "There are a bunch of pictures in the entryway.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -732.5924213891303;
tmp_speak_command.wy = 20.140495645076122;
tmp_speak_command.w = 181;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I should check who wears these glasses!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "beforeteddy";
tmp_speak.fqid = "tunic.historicalsociety.cage.glasses.beforeteddy";
{
tmp_speak.primary = true;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"!tunic.historicalsociety.cage.teddy.trapped",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -798.8317043271127;
tmp_speak_command.wy = 56.384295660711786;
tmp_speak_command.w = 180;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmm...I wonder whose glasses these are.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "teddy";
tmp_person.fqid = "tunic.historicalsociety.cage.teddy";
{
tmp_person.ww = 192.54554082386383;
tmp_person.wh = 136.21212197790402;
tmp_person.wx = 98.95089017041023;
tmp_person.wy = -200.15168443355955;
tmp_person.wz = 0;
tmp_person.act_wx = -146.29687625848175;
tmp_person.act_wy = 29.395068590892784;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 51.96969698838423;
tmp_person.hover_icon_wy = 73.4242424246125;
tmp_person.animcycle_id = "teddy_noscarf";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "notice";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
"!tunic.historicalsociety.cage.teddy.trapped",
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.historicalsociety.cage.unlockdoor",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "trapped";
tmp_speak.fqid = "tunic.historicalsociety.cage.teddy.trapped";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -189.23985342074792;
tmp_speak_command.wy = 38.87732734912554;
tmp_speak_command.w = 69.37596130371094;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Teddy!!!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 73.6438157944921;
tmp_speak_command.wy = -47.189990278451106;
tmp_speak_command.w = 65.991943359375;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "(HELP!)";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -202.99700966638503;
tmp_speak_command.wy = 67.56945741534417;
tmp_speak_command.w = 298.4557189941406;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hang on. I’ll get you out of there!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_observation = new observation();
tmp_observation.id = "lockeddoor";
tmp_observation.fqid = "tunic.historicalsociety.cage.lockeddoor";
{
tmp_observation.ww = 164.82808103888618;
tmp_observation.wh = 484.0303030290258;
tmp_observation.wx = -125.83458081984895;
tmp_observation.wy = -51.984848473282256;
tmp_observation.wz = 0;
tmp_observation.act_wx = -54;
tmp_observation.act_wy = -20.999999999999996;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 1;
tmp_observation.hover_icon_wy = -3;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "It’s locked!";
tmp_observation.blip_wx = -352.28703100072187;
tmp_observation.blip_wy = 55.85660171930205;
tmp_observation.blip_w = 108;
tmp_observation.blip_h = 30;
tmp_observation.notifications_persistent = 0;
tmp_observation.raw_notifications = [
];
tmp_observation.raw_notification_ws = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.notification_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.historicalsociety.frontdesk.key",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_observation.raw_notification_ws[i] ? tmp_observation.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tobasement";
tmp_porthole.fqid = "tunic.historicalsociety.cage.tobasement";
{
tmp_porthole.ww = 180.7272727272729;
tmp_porthole.wh = 438.818181818182;
tmp_porthole.wx = -1898.4545454545453;
tmp_porthole.wy = -27.681818181817988;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = -331.75757575757575;
tmp_porthole.target_start_wy = -202.12121212121215;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "door";
tmp_inert.fqid = "tunic.historicalsociety.cage.door";
{
tmp_inert.ww = 132.13794897840634;
tmp_inert.wh = 458.58677685806566;
tmp_inert.wx = -124.57780814390468;
tmp_inert.wy = -47.514874239673304;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "cage_door";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
"!tunic.historicalsociety.cage.unlockdoor",
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fence";
tmp_inert.fqid = "tunic.historicalsociety.cage.fence";
{
tmp_inert.ww = 1548.1818181818187;
tmp_inert.wh = 770.9090909090911;
tmp_inert.wx = -487.62799980762736;
tmp_inert.wy = -12.48570187647141;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "cage_fence";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fg";
tmp_inert.fqid = "tunic.historicalsociety.cage.fg";
{
tmp_inert.ww = 2137.272727272728;
tmp_inert.wh = 217.27272727272697;
tmp_inert.wx = -998.3520791076021;
tmp_inert.wy = -394.1361730615679;
tmp_inert.wz = 2;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "cage_fg";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "pipes";
tmp_inert.fqid = "tunic.historicalsociety.cage.pipes";
{
tmp_inert.ww = 2382.727272727273;
tmp_inert.wh = 465.4545454545453;
tmp_inert.wx = -843.3411594009792;
tmp_inert.wy = 198.80804348941118;
tmp_inert.wz = 2;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "cage_pipes";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
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
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-374.79431084122393, wy:-113.2998170346518, ww:211.86808265684846, wh:240.3455245259692 },
{wx:-250.55043107055712, wy:-229.10042304738005, ww:1779.108689694965, wh:237.41586773510298 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -279.4194896719319;
tmp_room.target_start_wy = -143.99999999999997;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.2

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
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 400;
tmp_cutscene_command.wy = -200;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "gramps";
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.ww = 880;
tmp_cutscene_command.wh = 660;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.animcycle_id = "black";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "chapter1";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.ww = 880;
tmp_cutscene_command.wh = 660;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "chapter1";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter1";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 10;
tmp_cutscene_command.end_t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter1";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 200;
tmp_cutscene_command.end_t = 250;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.t = 250;
tmp_cutscene_command.end_t = 280;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_WAIT;
tmp_cutscene_command.t = 281;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 281;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = 282;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "teddy";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 360;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 361;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_person.hover_icon_wx = 82.99999398111603;
tmp_person.hover_icon_wy = 172.00000000662442;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.historicalsociety.closet.gramps.intro_0_cs_0",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_0";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -381.9504738760633;
tmp_speak_command.wy = 242.8885054678009;
tmp_speak_command.w = 265.1437683105469;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Whatcha doing over there, Jo?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -137.66551640340225;
tmp_speak_command.wy = -31.988481166464098;
tmp_speak_command.w = 197.12782287597656;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Just talking to Teddy.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -383.9504738760633;
tmp_speak_command.wy = 241.88850546780083;
tmp_speak_command.w = 229.28778076171875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I gotta run to my meeting!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -132.66551640340222;
tmp_speak_command.wy = -25.98848116646413;
tmp_speak_command.w = 190.2638702392578;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Meetings are BORING!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -378.7265613608749;
tmp_speak_command.wy = 272.26284325637914;
tmp_speak_command.w = 176;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Grab your notebook and come upstairs!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_person.hover_icon_wx = 22.698364775670484;
tmp_person.hover_icon_wy = 60.9951334748406;
tmp_person.animcycle_id = "teddy";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0";
{
tmp_speak.primary = 10;
tmp_speak.options_wx = -304.576136087485;
tmp_speak.options_wy = -68.81594167679211;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"!tunic.historicalsociety.closet.teddy.intro_0_cs_0",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 225.1141705840032;
tmp_speak_command.wy = -5.068034501008995;
tmp_speak_command.w = 138;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "avatar_nervous";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Teddy, you have to stay hidden.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 195.1141705840032;
tmp_speak_command.wy = -9.068034501009024;
tmp_speak_command.w = 171;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "avatar_angry";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Please don't eat my homework this time!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 203.60402956144299;
tmp_speak_command.wy = -1.5026840391547296;
tmp_speak_command.w = 154;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Now where did I put my notebook?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.notifications_persistent = 0;
tmp_option.raw_notifications = [
];
tmp_option.raw_notification_ws = [
];
tmp_option.notification_reqs = [[
]];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_5";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_5";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = -330.7717132442285;
tmp_speak.options_wy = 1.0389307411907944;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 503.99470230862664;
tmp_speak_command.wy = -54.625662211421684;
tmp_speak_command.w = 98.19989013671875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "zzzzzzzzz";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.notice_icon_animcycle_id = "notice";
tmp_object.view_overlay_animcycle_id = "null";
tmp_object.audio_id = "null";
tmp_object.deck_animcycle_ids = [
];
tmp_object.notifications_persistent = 0;
tmp_object.raw_notifications = [
];
tmp_object.raw_notification_ws = [
];
tmp_object.notification_reqs = [[
]];
tmp_object.view_overlay_reqs = [[
]];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
"!tunic.historicalsociety.closet.notebook",
]];

if(tmp_object.ww < 0) { tmp_object.ww *= -1; tmp_object.flip = 1; }
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_object.view_overlay_animcycle_inst = gen_animcycle_inst(tmp_object.view_overlay_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_object.raw_notification_ws[i] ? tmp_object.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet.notebook.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "notebook_baked";
tmp_view.magnify = false;
tmp_view.audio_id = "null";
tmp_view.deck_animcycle_ids = [
];
tmp_view.notifications_persistent = 0;
tmp_view.raw_notifications = [
];
tmp_view.raw_notification_ws = [
];
tmp_view.notification_reqs = [[
]];
tmp_view.exit_reqs = [[
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.notice_icon_animcycle_id = "null";
tmp_object.view_overlay_animcycle_id = "null";
tmp_object.audio_id = "null";
tmp_object.deck_animcycle_ids = [
];
tmp_object.notifications_persistent = 0;
tmp_object.raw_notifications = [
];
tmp_object.raw_notification_ws = [
];
tmp_object.notification_reqs = [[
]];
tmp_object.view_overlay_reqs = [[
]];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
]];

if(tmp_object.ww < 0) { tmp_object.ww *= -1; tmp_object.flip = 1; }
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_object.view_overlay_animcycle_inst = gen_animcycle_inst(tmp_object.view_overlay_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_object.raw_notification_ws[i] ? tmp_object.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet.retirement_letter.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "retirement_letter_closeup";
tmp_view.magnify = false;
tmp_view.audio_id = "null";
tmp_view.deck_animcycle_ids = [
];
tmp_view.notifications_persistent = 0;
tmp_view.raw_notifications = [
"Gramps is in trouble for losing papers?",
"This can't be right!",
"Gramps is the best historian ever!",
];
tmp_view.raw_notification_ws = [
336.711669921875,
164.6558380126953,
293.24774169921875,
];
tmp_view.notification_reqs = [[
]];
tmp_view.exit_reqs = [[
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I feel like I'm forgetting something...";
tmp_observation.blip_wx = -319.39018232082714;
tmp_observation.blip_wy = 164.00019803198495;
tmp_observation.blip_w = 316;
tmp_observation.blip_h = 30;
tmp_observation.notifications_persistent = 0;
tmp_observation.raw_notifications = [
];
tmp_observation.raw_notification_ws = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.notification_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.historicalsociety.closet.notebook",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_observation.raw_notification_ws[i] ? tmp_observation.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "photo";
tmp_observation.fqid = "tunic.historicalsociety.closet.photo";
{
tmp_observation.ww = 242.5221929444906;
tmp_observation.wh = 164.0023109162744;
tmp_observation.wx = 470.6778497512441;
tmp_observation.wy = -45.05610468928798;
tmp_observation.wz = 0;
tmp_observation.act_wx = -107.51714131069957;
tmp_observation.act_wy = -129.10494391114588;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 34.95945286875974;
tmp_observation.hover_icon_wy = 38.970690791400216;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I love these photos of me and Teddy.";
tmp_observation.blip_wx = 141.0757818219442;
tmp_observation.blip_wy = 3.4127062912952084;
tmp_observation.blip_w = 175;
tmp_observation.blip_h = 30;
tmp_observation.notifications_persistent = 0;
tmp_observation.raw_notifications = [
];
tmp_observation.raw_notification_ws = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.notification_reqs = [[
]];
tmp_observation.reqs = [[
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_observation.raw_notification_ws[i] ? tmp_observation.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_porthole.act_wx = 7.874801075255277;
tmp_porthole.act_wy = -156.90879998335018;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = -1;
tmp_porthole.hover_icon_wy = 40;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = 107.99999999999996;
tmp_porthole.target_start_wy = 31.000000000000018;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
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
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
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
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgpipes";
tmp_inert.fqid = "tunic.historicalsociety.closet.fgpipes";
{
tmp_inert.ww = 917.8841312272183;
tmp_inert.wh = 853.8504981773996;
tmp_inert.wx = 495.13090142039175;
tmp_inert.wy = 25.409940747932296;
tmp_inert.wz = 999;
tmp_inert.g = 0.2;
tmp_inert.animcycle_id = "room_historicalsociety_closet_fgpipes";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fire";
tmp_inert.fqid = "tunic.historicalsociety.closet.fire";
{
tmp_inert.ww = 47.00130850444964;
tmp_inert.wh = 119.00001169978962;
tmp_inert.wx = 708.5007027208226;
tmp_inert.wy = -147.50000677546035;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "boilerfire";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
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
tmp_room.animcycle_id = "room_historicalsociety_closet_dirty";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-374.79431084122393, wy:-113.2998170346518, ww:211.86808265684846, wh:240.3455245259692 },
{wx:-65.82606900496341, wy:-213.30999063694617, ww:1423.350903794153, wh:150.08050843283627 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -279.4194896719319;
tmp_room.target_start_wy = -143.99999999999997;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.2

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "door_block_clean";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.door_block_clean";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 197;
tmp_cutscene.wh = 319;
tmp_cutscene.wx = -353.4999999999494;
tmp_cutscene.wy = 145.5000000003107;
tmp_cutscene.wz = 2;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "hblip_interact";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"!tunic.historicalsociety.closet_dirty.trigger_coffee",
],[
"!tunic.historicalsociety.closet_dirty.trigger_scarf",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -634.706909090909;
tmp_cutscene_command.wy = 173.42147531205106;
tmp_cutscene_command.w = 242;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I should help Gramps clean.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -546.706909090909;
tmp_cutscene_command.wy = 200.42147531205106;
tmp_cutscene_command.w = 161;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Maybe there's a clue in this mess!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 2;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "door_block_talk";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.door_block_talk";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 197;
tmp_cutscene.wh = 319;
tmp_cutscene.wx = -353.4999999999494;
tmp_cutscene.wy = 145.5000000003107;
tmp_cutscene.wz = 2;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "hblip_interact";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"tunic.historicalsociety.closet_dirty.trigger_coffee",
"tunic.historicalsociety.closet_dirty.trigger_scarf",
"!tunic.historicalsociety.closet_dirty.gramps.news",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -637.1765263623739;
tmp_cutscene_command.wy = 200.61850746132185;
tmp_cutscene_command.w = 248;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I should talk to Gramps again.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 2;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "trigger_coffee";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.trigger_coffee";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 80.99342279216228;
tmp_cutscene.wh = 71.00029447787803;
tmp_cutscene.wx = 505.0430401706471;
tmp_cutscene.wy = -170.7567817296105;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = -118.83786278383491;
tmp_cutscene.act_wy = 11.127464041278927;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 26.807657779852434;
tmp_cutscene.hover_icon_wy = 32.89586241203352;
tmp_cutscene.animcycle_id = "coffeecup";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "hblip_interact";
tmp_cutscene.notice_icon_animcycle_id = "notice";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"!tunic.historicalsociety.closet_dirty.trigger_coffee",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 424.7439842003414;
tmp_cutscene_command.wy = 9.668451136987407;
tmp_cutscene_command.w = 259;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Is this coffee yours, Gramps?";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -92.01398077985169;
tmp_cutscene_command.wy = 66.66750204352135;
tmp_cutscene_command.w = 245;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Nope, that's from Bean Town. I only drink Holdgers!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 2;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "trigger_scarf";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.trigger_scarf";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 101.42205127979476;
tmp_cutscene.wh = 63.803494135112985;
tmp_cutscene.wx = 37.73516503875414;
tmp_cutscene.wy = -209.90345032250144;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = -67.47436300287609;
tmp_cutscene.act_wy = 1.3581909898817344;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 53.65769190494859;
tmp_cutscene.hover_icon_wy = 38.98610390510555;
tmp_cutscene.animcycle_id = "scarf";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "hblip_interact";
tmp_cutscene.notice_icon_animcycle_id = "notice";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"!tunic.historicalsociety.closet_dirty.trigger_scarf",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 7.170742975506791;
tmp_cutscene_command.wy = -8.494223349608411;
tmp_cutscene_command.w = 215;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Teddy's scarf! Somebody must've taken him!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -447.76600362306937;
tmp_cutscene_command.wy = 156.84622477659707;
tmp_cutscene_command.w = 255;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Don't panic, Jo. Maybe he just got scared and ran off.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 12.170127277207612;
tmp_cutscene_command.wy = -14.567006542105872;
tmp_cutscene_command.w = 316;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "But he never goes anywhere without his scarf. I think he's in trouble!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 2;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
