
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
tmp_level.avatar_wh = 227.18935293838604;
tmp_level.familiar_walk_animcycle_id = "teddy_walk";
tmp_level.familiar_idle_animcycle_id = "avatar_idle";
tmp_level.familiar_act_animcycle_id = "avatar_act";
tmp_level.familiar_ww = 124.2914274419755;
tmp_level.familiar_wh = 227.18935293838604;
tmp_level.familiar_off_wx = 0.;
tmp_level.familiar_off_wy = -20.;
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
tmp_animcycle.frame_t = 10;
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
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_idle/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_nervous";
tmp_animcycle.fqid = "tunic.avatar_nervous";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
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
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boss/0.png");
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/chapter1/0.png");
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/chapter2/0.png");
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
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner/0.png");
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
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/ecologist/0.png");
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
tmp_animcycle.id = "entry_ecoflag_img";
tmp_animcycle.fqid = "tunic.entry_ecoflag_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_ecoflag_img/0.png");
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
tmp_animcycle.id = "entry_quest_nelsonstatepark_img";
tmp_animcycle.fqid = "tunic.entry_quest_nelsonstatepark_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_nelsonstatepark_img/0.png");
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
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps/0.png");
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
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarian/0.png");
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_trail_lake/0.jpg");
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
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy/0.png");
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
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_idle/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_idle/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_idle/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_idle/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy_idle/4.png");
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
tmp_animcycle.id = "wildlife_expert";
tmp_animcycle.fqid = "tunic.wildlife_expert";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/wildlife_expert/0.png");
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
tmp_animcycle.id = "youngboy";
tmp_animcycle.fqid = "tunic.youngboy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/youngboy/0.png");
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
tmp_entry.ww = 210.9999999999999;
tmp_entry.wh = 33.99999999999995;
tmp_entry.wx = 171.5;
tmp_entry.wy = 21.00000000000001;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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
"tunic.library.frontdesk.cleaner.blog",
]];

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
tmp_entry.id = "entry_ecoflag";
tmp_entry.fqid = "tunic.entry_ecoflag";
{
tmp_entry.ww = 163;
tmp_entry.wh = 33.000000000000014;
tmp_entry.wx = 127.49999999999997;
tmp_entry.wy = -239.5;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_ecoflag_img";
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
"tunic.nelson.trail.sign.view",
]];

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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_flag";
tmp_entry.fqid = "tunic.entry_flag";
{
tmp_entry.ww = 116.00000000000004;
tmp_entry.wh = 31.99999999999999;
tmp_entry.wx = -319;
tmp_entry.wy = -20.00000000000002;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_flagguess";
tmp_entry.fqid = "tunic.entry_flagguess";
{
tmp_entry.ww = 170;
tmp_entry.wh = 37.000000000000036;
tmp_entry.wx = 146;
tmp_entry.wy = 178.4999999999999;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_glasses";
tmp_entry.fqid = "tunic.entry_glasses";
{
tmp_entry.ww = 151.99999999999997;
tmp_entry.wh = 35.00000000000001;
tmp_entry.wx = -175.99999999999994;
tmp_entry.wy = 240.5;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_key";
tmp_entry.fqid = "tunic.entry_key";
{
tmp_entry.ww = 119.99999999999997;
tmp_entry.wh = 30.99999999999999;
tmp_entry.wx = -317.00000000000006;
tmp_entry.wy = 40.5;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_littering";
tmp_entry.fqid = "tunic.entry_littering";
{
tmp_entry.ww = 161;
tmp_entry.wh = 41.99999999999995;
tmp_entry.wx = -228.5;
tmp_entry.wy = -199.00000000000003;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_mugs";
tmp_entry.fqid = "tunic.entry_mugs";
{
tmp_entry.ww = 118;
tmp_entry.wh = 30.99999999999997;
tmp_entry.wx = 123.00000000000003;
tmp_entry.wy = -14.499999999999979;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_mugs_img";
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
tmp_entry.id = "entry_nelson";
tmp_entry.fqid = "tunic.entry_nelson";
{
tmp_entry.ww = 137;
tmp_entry.wh = 32.99999999999997;
tmp_entry.wx = 132.49999999999991;
tmp_entry.wy = 56.500000000000014;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_nelsonphoto";
tmp_entry.fqid = "tunic.entry_nelsonphoto";
{
tmp_entry.ww = 189;
tmp_entry.wh = 39.99999999999997;
tmp_entry.wx = 140.50000000000009;
tmp_entry.wy = -204;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_nelsonphoto_img";
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
"tunic.nelson.trail.sign.view",
]];

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
"tunic.capitol.hall.chap1_finale_c",
]];

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
tmp_entry.ww = 230.00000000000003;
tmp_entry.wh = 36.99999999999999;
tmp_entry.wx = 164;
tmp_entry.wy = -82.50000000000011;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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
tmp_entry.ww = 25.99999999999999;
tmp_entry.wh = 21.00000000000005;
tmp_entry.wx = 44.000000000000135;
tmp_entry.wy = -46.49999999999996;
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
tmp_entry.ww = 183;
tmp_entry.wh = 37.99999999999999;
tmp_entry.wx = -285.5;
tmp_entry.wy = 74.00000000000001;
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
tmp_entry.wx = -383.4999999999999;
tmp_entry.wy = 104.99999999999994;
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
tmp_entry.ww = 265;
tmp_entry.wh = 46.99999999999998;
tmp_entry.wx = 194.5;
tmp_entry.wy = 91.50000000000003;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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
tmp_entry.ww = 32.99999999999999;
tmp_entry.wh = 32.99999999999993;
tmp_entry.wx = 63.50000000000004;
tmp_entry.wy = 132.5;
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
"tunic.capitol.hall.chap1_finale_c",
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
tmp_entry.id = "entry_quest_checkstaff";
tmp_entry.fqid = "tunic.entry_quest_checkstaff";
{
tmp_entry.ww = 242.00000000000006;
tmp_entry.wh = 42.000000000000014;
tmp_entry.wx = -251.99999999999997;
tmp_entry.wy = 176.00000000000006;
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
tmp_entry.wx = -377;
tmp_entry.wy = 204.5;
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
tmp_entry.wx = -212.5;
tmp_entry.wy = -37.99999999999997;
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
tmp_entry.ww = 173.00000000000003;
tmp_entry.wh = 35.99999999999999;
tmp_entry.wx = -280.5;
tmp_entry.wy = -122.00000000000001;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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
tmp_entry.wx = -381.5;
tmp_entry.wy = -90.49999999999994;
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
"tunic.capitol.hall.boss.chap2_finale_6",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_flaglady";
tmp_entry.fqid = "tunic.entry_quest_flaglady";
{
tmp_entry.ww = 212.99999999999997;
tmp_entry.wh = 38.99999999999995;
tmp_entry.wx = -164.4999999999999;
tmp_entry.wy = -268.5;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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
tmp_entry.wx = -284;
tmp_entry.wy = -240;
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
tmp_entry.id = "entry_quest_nelsonstatepark";
tmp_entry.fqid = "tunic.entry_quest_nelsonstatepark";
{
tmp_entry.ww = 223;
tmp_entry.wh = 40.99999999999995;
tmp_entry.wx = 162.50000000000003;
tmp_entry.wy = -161.50000000000003;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_quest_nelsonstatepark_img";
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
tmp_entry.id = "entry_quest_nelsonstatepark_x";
tmp_entry.fqid = "tunic.entry_quest_nelsonstatepark_x";
{
tmp_entry.ww = 38.99999999999999;
tmp_entry.wh = 36.99999999999993;
tmp_entry.wx = 34.50000000000003;
tmp_entry.wy = -129.49999999999991;
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
"tunic.nelson",
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
"tunic.capitol.hall.chap1_finale_c",
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
tmp_entry.id = "entry_quest_toend";
tmp_entry.fqid = "tunic.entry_quest_toend";
{
tmp_entry.ww = 186.99999999999997;
tmp_entry.wh = 35.00000000000003;
tmp_entry.wx = 136.50000000000006;
tmp_entry.wy = -286.5;
tmp_entry.wz = 100;
tmp_entry.page = 4;
tmp_entry.animcycle_id = "entry_quest_toend_img";
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
"tunic.nelson.trail.sign.view",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_toend_x";
tmp_entry.fqid = "tunic.entry_quest_toend_x";
{
tmp_entry.ww = 28.999999999999996;
tmp_entry.wh = 29.99999999999997;
tmp_entry.wx = 30.499999999999908;
tmp_entry.wy = -260.99999999999994;
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
"tunic.nelson.trail.sign.view",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_scratches";
tmp_entry.fqid = "tunic.entry_scratches";
{
tmp_entry.ww = 165;
tmp_entry.wh = 32.99999999999997;
tmp_entry.wx = -321.5;
tmp_entry.wy = 267.50000000000006;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_staffdir";
tmp_entry.fqid = "tunic.entry_staffdir";
{
tmp_entry.ww = 150;
tmp_entry.wh = 41.99999999999999;
tmp_entry.wx = -300;
tmp_entry.wy = 139.00000000000003;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_teddyfound";
tmp_entry.fqid = "tunic.entry_teddyfound";
{
tmp_entry.ww = 179;
tmp_entry.wh = 34.000000000000014;
tmp_entry.wx = -42.50000000000003;
tmp_entry.wy = 214.00000000000003;
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
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_teddyfree";
tmp_entry.fqid = "tunic.entry_teddyfree";
{
tmp_entry.ww = 163.99999999999997;
tmp_entry.wh = 28.00000000000002;
tmp_entry.wx = -294.99999999999994;
tmp_entry.wy = 11.000000000000004;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_theta";
tmp_entry.fqid = "tunic.entry_theta";
{
tmp_entry.ww = 120.99999999999999;
tmp_entry.wh = 31.99999999999997;
tmp_entry.wx = 121.5;
tmp_entry.wy = 213;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_tracks";
tmp_entry.fqid = "tunic.entry_tracks";
{
tmp_entry.ww = 132;
tmp_entry.wh = 34.99999999999999;
tmp_entry.wx = -276;
tmp_entry.wy = -159.50000000000003;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_wellshoof";
tmp_entry.fqid = "tunic.entry_wellshoof";
{
tmp_entry.ww = 152.99999999999997;
tmp_entry.wh = 36.99999999999997;
tmp_entry.wx = -299.5;
tmp_entry.wy = -55.499999999999964;
tmp_entry.wz = 100;
tmp_entry.page = 4;
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
tmp_scene.id = "capitol";
tmp_scene.fqid = "tunic.capitol";
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
"!tunic.capitol.hall.chap1_finale_c",
]];
tmp_scene.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "hall";
tmp_room.fqid = "tunic.capitol.hall";
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
tmp_cutscene.fqid = "tunic.capitol.hall.chap1_finale_c";
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
"tunic.capitol.hall.chap1_finale",
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
tmp_cutscene_command.wx = 90.96969696969705;
tmp_cutscene_command.wy = 315.51515151515144;
tmp_cutscene_command.w = 129;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "There's no time to waste!";
tmp_cutscene_command.t = 381;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 87.93939393939391;
tmp_cutscene_command.wy = 324.6060606060605;
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
tmp_cutscene_command.end_t = 440;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "null";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = 441;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 999999;
tmp_cutscene_command.wy = 999999;
tmp_cutscene_command.t = 442;
tmp_cutscene_command.end_t = 442;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 443;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "chap2_finale_c";
tmp_cutscene.fqid = "tunic.capitol.hall.chap2_finale_c";
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
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 37.93939393939391;
tmp_cutscene_command.wy = 285.21212121212125;
tmp_cutscene_command.w = 142;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Jolie! Any news?";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -230.3105479205922;
tmp_cutscene_command.wy = 117.03112956720142;
tmp_cutscene_command.w = 113;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I figured out the shirt!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -259.0303030303029;
tmp_cutscene_command.wy = 115.51515151515144;
tmp_cutscene_command.w = 137;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "AND I know who took Teddy!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -55.99999999999993;
tmp_cutscene_command.wy = 288.2424242424242;
tmp_cutscene_command.w = 203;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Who on earth is Teddy?";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -28.727272727272663;
tmp_cutscene_command.wy = 291.27272727272725;
tmp_cutscene_command.w = 185;
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
tmp_cutscene_command.w = 87;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Here I am!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
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
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 147.03030303030297;
tmp_cutscene_command.wy = 341.2727272727273;
tmp_cutscene_command.w = 122;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Sorry for the delay, Boss.";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 153.09090909090912;
tmp_cutscene_command.wy = 345.81818181818187;
tmp_cutscene_command.w = 227;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "There was a bit of a...situation...in my office.";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -390.84848484848465;
tmp_cutscene_command.wy = 68.54545454545446;
tmp_cutscene_command.w = 222;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wells sabotaged Gramps!";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -336.30303030303014;
tmp_cutscene_command.wy = 62.48484848484841;
tmp_cutscene_command.w = 189;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "AND he stole Teddy!!!";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 147.030303030303;
tmp_cutscene_command.wy = 300.36363636363626;
tmp_cutscene_command.w = 136;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Whoa there, Jo.";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 154.6060606060608;
tmp_cutscene_command.wy = 335.2121212121212;
tmp_cutscene_command.w = 162;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Let's take this one step at a time.";
tmp_cutscene_command.t = 50;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 148.5454545454546;
tmp_cutscene_command.wy = 341.27272727272725;
tmp_cutscene_command.w = 171;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Did you figure out the shirt artifact?";
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
tmp_cutscene_command.wx = -156;
tmp_cutscene_command.wy = 344.30303030303025;
tmp_cutscene_command.w = 146;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I knew you could do it, Jolie!";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -283.27272727272725;
tmp_cutscene_command.wy = 117.03030303030292;
tmp_cutscene_command.w = 150;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "But wait- it gets even better!";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -254.4848484848485;
tmp_cutscene_command.wy = 117.03030303030292;
tmp_cutscene_command.w = 137;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I also know who stole Teddy!";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 531.8787878787879;
tmp_cutscene_command.wy = 132.18181818181813;
tmp_cutscene_command.w = 60;
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
tmp_cutscene_command.wx = -330.24242424242425;
tmp_cutscene_command.wy = 286.72727272727263;
tmp_cutscene_command.w = 192;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You wouldn't BELIEVE the day I've had...";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -133.27272727272725;
tmp_cutscene_command.wy = 67.03030303030293;
tmp_cutscene_command.w = 49;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "YOU!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -72.66666666666663;
tmp_cutscene_command.wy = 247.33333333333326;
tmp_cutscene_command.w = 15;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "?";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -313.5757575757576;
tmp_cutscene_command.wy = 63.99999999999994;
tmp_cutscene_command.w = 172;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "YOU STOLE TEDDY!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -295.3939393939394;
tmp_cutscene_command.wy = 242.7878787878787;
tmp_cutscene_command.w = 171;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I did no such thing!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -287.81818181818176;
tmp_cutscene_command.wy = 247.33333333333326;
tmp_cutscene_command.w = 169;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wait- who's Teddy?";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -277.21212121212125;
tmp_cutscene_command.wy = 65.51515151515142;
tmp_cutscene_command.w = 145;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Don't play dumb!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 151.5757575757575;
tmp_cutscene_command.wy = 301.87878787878776;
tmp_cutscene_command.w = 98;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Easy, Jolie.";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 150.0606060606059;
tmp_cutscene_command.wy = 342.7878787878787;
tmp_cutscene_command.w = 146;
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
tmp_cutscene_command.wx = 143.9999999999999;
tmp_cutscene_command.wy = 341.27272727272714;
tmp_cutscene_command.w = 144;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm sorry, Jolie. We'll find Teddy.";
tmp_cutscene_command.t = 102;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -49.93939393939405;
tmp_cutscene_command.wy = 338.24242424242414;
tmp_cutscene_command.w = 200;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "And when you do, keep him out of my museum!";
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
tmp_cutscene_command.wx = 350.060606060606;
tmp_cutscene_command.wy = 283.69696969696963;
tmp_cutscene_command.w = 63;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "*ahem*";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 342.4848484848485;
tmp_cutscene_command.wy = 335.21212121212113;
tmp_cutscene_command.w = 148;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Jolie- good work with the shirt.";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 343.9999999999999;
tmp_cutscene_command.wy = 330.66666666666663;
tmp_cutscene_command.w = 173;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Leopold- I need this written up A.S.A.P.";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 157.6363636363636;
tmp_cutscene_command.wy = 298.84848484848476;
tmp_cutscene_command.w = 115;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Alright boss!";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 151.57575757575756;
tmp_cutscene_command.wy = 348.84848484848476;
tmp_cutscene_command.w = 164;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Jolie- meet me back at my office.";
tmp_cutscene_command.t = 483;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 147.03030303030314;
tmp_cutscene_command.wy = 342.7878787878787;
tmp_cutscene_command.w = 181;
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
tmp_cutscene_command.wx = 45.5151515151516;
tmp_cutscene_command.wy = 256.4242424242423;
tmp_cutscene_command.w = 109;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm out too.";
tmp_cutscene_command.t = 545;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 44.000000000000135;
tmp_cutscene_command.wy = 291.2727272727272;
tmp_cutscene_command.w = 166;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I hope you find your badger, Jolie.";
tmp_cutscene_command.t = 545;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 42.48484848484852;
tmp_cutscene_command.wy = 297.33333333333326;
tmp_cutscene_command.w = 146;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "And great work on the shirt.";
tmp_cutscene_command.t = 545;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 34.90909090909102;
tmp_cutscene_command.wy = 298.84848484848476;
tmp_cutscene_command.w = 182;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I could learn a thing or two from you...";
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
tmp_cutscene = new cutscene();
tmp_cutscene.id = "chap4_finale_c";
tmp_cutscene.fqid = "tunic.capitol.hall.chap4_finale_c";
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
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter5";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -7.515151515151473;
tmp_cutscene_command.wy = 333.6969696969697;
tmp_cutscene_command.w = 172;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "There you are-";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -230.3105479205922;
tmp_cutscene_command.wy = 117.03112956720142;
tmp_cutscene_command.w = 113;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "How's research on that flag going?";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -259.0303030303029;
tmp_cutscene_command.wy = 115.51515151515144;
tmp_cutscene_command.w = 137;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Great!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 53.09090909090915;
tmp_cutscene_command.wy = 332.1818181818182;
tmp_cutscene_command.w = 130;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I think I have a lot of great information here.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 94.00000000000009;
tmp_cutscene_command.wy = 335.2121212121212;
tmp_cutscene_command.w = 104;
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
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -283.27272727272725;
tmp_cutscene_command.wy = 117.03030303030292;
tmp_cutscene_command.w = 150;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm glad I put you on the case, Jolie.";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -254.4848484848485;
tmp_cutscene_command.wy = 117.03030303030292;
tmp_cutscene_command.w = 137;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You really pulled through.";
tmp_cutscene_command.t = 52;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -133.27272727272725;
tmp_cutscene_command.wy = 67.03030303030293;
tmp_cutscene_command.w = 49;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Thanks!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -46.909090909090914;
tmp_cutscene_command.wy = 336.7272727272726;
tmp_cutscene_command.w = 200;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Alright Jolie- I'll see you tomorrow at the exhibit!";
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
tmp_cutscene_command.cutscene_entity_id = "chapter5";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 202;
tmp_cutscene_command.end_t = 252;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter5";
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
tmp_person = new person();
tmp_person.id = "boss";
tmp_person.fqid = "tunic.capitol.hall.boss";
{
tmp_person.ww = 150.0737668615271;
tmp_person.wh = 313.3287704263341;
tmp_person.wx = 299.70453437843406;
tmp_person.wy = 40.98731418180236;
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
tmp_speak.id = "chap1_finale_0";
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_0";
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
tmp_speak_command.wx = 347.36744334599797;
tmp_speak_command.wy = 327.7305275469163;
tmp_speak_command.w = 138.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Jolie! What are you doing here?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -317.06396395416306;
tmp_speak_command.wy = 105.10617745926518;
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
tmp_speak_command.wx = -202.13177165472257;
tmp_speak_command.wy = 309.39453402786074;
tmp_speak_command.w = 137;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Aha! Did you find something?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 40.29247076947595;
tmp_speak_command.wy = 333.6369582702853;
tmp_speak_command.w = 135;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What are you talking about?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -372.4242535528473;
tmp_speak_command.wy = 107.18181856904792;
tmp_speak_command.w = 191;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Gramps had me fact check Wells's report.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -401.21213234072593;
tmp_speak_command.wy = 101.12121250844217;
tmp_speak_command.w = 213;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "WELLS WAS WRONG AND GRAMPS WAS RIGHT!!!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 131.20156167861072;
tmp_speak_command.wy = 289.69756433089105;
tmp_speak_command.w = 79;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hold on.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 41.80762228467136;
tmp_speak_command.wy = 333.636958270285;
tmp_speak_command.w = 137;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_0_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_1";
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
tmp_speak_command.wx = -143.79041707073355;
tmp_speak_command.wy = 329.9195030401409;
tmp_speak_command.w = 261.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Ah, yes! The basketball jersey. What's the problem?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -492.0221135110139;
tmp_speak_command.wy = 59.5484863355049;
tmp_speak_command.w = 275.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "IT ISN'T A BASKETBALL JERSEY!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -83.73063008411049;
tmp_speak_command.wy = 329.34860169684043;
tmp_speak_command.w = 220;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_1_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_2";
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
tmp_speak_command.wx = 336.7657652768647;
tmp_speak_command.wy = 292.8818196688382;
tmp_speak_command.w = 47.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wow!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -85.96150745040808;
tmp_speak_command.wy = 288.33636512338364;
tmp_speak_command.w = 223.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I think you're right, Jolie.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -145.05241654131714;
tmp_speak_command.wy = 336.82121360823214;
tmp_speak_command.w = 263.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "We definitely can't put Wells's shoddy research on display.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -70.80999229889287;
tmp_speak_command.wy = 332.2757590627776;
tmp_speak_command.w = 210.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Leopold, I need you to work on this right away.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 89.79606830716776;
tmp_speak_command.wy = 271.669698456717;
tmp_speak_command.w = 58.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yippee!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -154.14332563222627;
tmp_speak_command.wy = 333.79091057792914;
tmp_speak_command.w = 271.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Jolie, you help your grampa get to the bottom of this.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -90.50696199586261;
tmp_speak_command.wy = 333.7909105779291;
tmp_speak_command.w = 225.69814225923324;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_plaquefirst_0";
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
tmp_speak_command.w = 273.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The sign at the Basketball Center shows that the women's team didn't start until 1974!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -98.08271957162017;
tmp_speak_command.wy = 380.7606075476261;
tmp_speak_command.w = 229.69814225923324;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_plaquefirst_0_fail";
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
tmp_speak_command.wx = -129.90090138980202;
tmp_speak_command.wy = 374.70000148702;
tmp_speak_command.w = 323.69814225923324;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_plaquefirst_1";
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
tmp_speak_command.w = 241.69814225923324;
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
tmp_speak_command.w = 244.69814225923326;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_slipfirst_0";
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
tmp_speak_command.wx = -428.6389019192183;
tmp_speak_command.wy = 108.70738182801963;
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
tmp_speak_command.wx = -104.14332563222621;
tmp_speak_command.wy = 383.79091057792914;
tmp_speak_command.w = 233.69814225923324;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_slipfirst_0_fail";
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
tmp_speak_command.w = 313.69814225923324;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap1_finale_slipfirst_1";
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
tmp_speak_command.w = 273.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The plaque at the Basketball Center shows that the women's team didn't start until 1974-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -378.6389019192184;
tmp_speak_command.wy = 105.67707879771658;
tmp_speak_command.w = 197.69814225923326;
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
tmp_speak.id = "chap2_finale_0";
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_0";
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
tmp_speak_command.wx = -257.437239081209;
tmp_speak_command.wy = 70.82907415429007;
tmp_speak_command.w = 136.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yes! I solved it!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -41.52571104866193;
tmp_speak_command.wy = 294.24301887634556;
tmp_speak_command.w = 195;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "So? What's the story?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -252.72728385587752;
tmp_speak_command.wy = 117.78787917510874;
tmp_speak_command.w = 130;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, remember that slip?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 115.45453432594073;
tmp_speak_command.wy = 287.48484887207843;
tmp_speak_command.w = 90;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_0_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_1";
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
tmp_speak_command.wx = 13.785340505024063;
tmp_speak_command.wy = 296.5861697068075;
tmp_speak_command.w = 152.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Okay. What is it?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -420.8099922988928;
tmp_speak_command.wy = 68.63939542641396;
tmp_speak_command.w = 243.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It's a dry cleaner's receipt!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 26.875430521950108;
tmp_speak_command.wy = 333.89405624229494;
tmp_speak_command.w = 148;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_1_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_2";
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
tmp_speak_command.wx = 0.1489768686603945;
tmp_speak_command.wy = 331.4346545552923;
tmp_speak_command.w = 163.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "An expert opinion. Good thinking!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -130.15405343436996;
tmp_speak_command.wy = 287.4952606158985;
tmp_speak_command.w = 253.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Where did you go from there?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -361.7190832079839;
tmp_speak_command.wy = 164.09394088095937;
tmp_speak_command.w = 207.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, I had to figure out WHICH cleaner the receipt was from...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -124.63972099320142;
tmp_speak_command.wy = 292.98496533320406;
tmp_speak_command.w = 248;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_2_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_3";
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
tmp_speak_command.wx = -137.72981101012752;
tmp_speak_command.wy = 329.9195030401409;
tmp_speak_command.w = 256.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "And that turned out to be the dry cleaner with the slip?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 36.512613232296786;
tmp_speak_command.wy = 332.9498060704439;
tmp_speak_command.w = 137.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's quite a stroke of luck.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -387.4766589655595;
tmp_speak_command.wy = 115.6090923961109;
tmp_speak_command.w = 222.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, Gramps always says I'm his good luck charm!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -20.09426644774686;
tmp_speak_command.wy = 336.924359272598;
tmp_speak_command.w = 180;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "So what did you do when you got there?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -331.4160529049535;
tmp_speak_command.wy = 118.639395426414;
tmp_speak_command.w = 183.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I wanted to find out who the owner was-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -248.0827195716201;
tmp_speak_command.wy = 123.18484997186852;
tmp_speak_command.w = 124.69814225923324;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_3_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_4";
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
tmp_speak_command.wx = -305.65847714737777;
tmp_speak_command.wy = 117.12424391126248;
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
tmp_speak_command.wx = -55.91162919194588;
tmp_speak_command.wy = 337.4952606158984;
tmp_speak_command.w = 203.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmm. That name sounds awfully familiar...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -101.36617464649099;
tmp_speak_command.wy = 292.040715161353;
tmp_speak_command.w = 232.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Who is Theodora Youmans?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -261.7190832079838;
tmp_speak_command.wy = 123.1848499718684;
tmp_speak_command.w = 138.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's the same question I had.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -372.3251438140443;
tmp_speak_command.wy = 117.12424391126248;
tmp_speak_command.w = 207.69814225923324;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_4_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_5";
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
tmp_speak_command.wx = -111.97223525255171;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 239.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Of course! Theodora Youmans was a suffragist!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -319.2948407837414;
tmp_speak_command.wy = 159.5484863355049;
tmp_speak_command.w = 175.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yep! That means she fought for women's right to vote.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 25.906552626236056;
tmp_speak_command.wy = 293.55586667650454;
tmp_speak_command.w = 148.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Very good, Jolie!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -101.36617464649113;
tmp_speak_command.wy = 375.3740484946863;
tmp_speak_command.w = 229.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The fight for women's suffrage is an important part of Wisconsin history.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 15.30049202017554;
tmp_speak_command.wy = 332.94980607044386;
tmp_speak_command.w = 155.69814225923326;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_5_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_6";
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
tmp_speak_command.wx = 31.967158686842232;
tmp_speak_command.wy = 290.52556364620153;
tmp_speak_command.w = 145.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wow! That's her!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -108.9419322222487;
tmp_speak_command.wy = 332.94980607044397;
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
tmp_speak_command.wx = 3.179279898963415;
tmp_speak_command.wy = 334.46495758559547;
tmp_speak_command.w = 163.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What a fantastic piece of history-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -152.88132616164265;
tmp_speak_command.wy = 287.4952606158985;
tmp_speak_command.w = 265.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "and what impeccable research!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -24.093447373763908;
tmp_speak_command.wy = 376.8892000098378;
tmp_speak_command.w = 180.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm going to need you and Leopold to write this up A.S.A.P.!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "chap2_finale_6_fail";
tmp_speak.fqid = "tunic.capitol.hall.boss.chap2_finale_6_fail";
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
tmp_speak.id = "chap4_finale_0";
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_0";
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
tmp_speak_command.wx = 9.989440466489626;
tmp_speak_command.wy = 344.2430188763456;
tmp_speak_command.w = 159;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_0_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_1";
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
tmp_speak_command.wx = -420.8099922988928;
tmp_speak_command.wy = 68.63939542641396;
tmp_speak_command.w = 243.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It's an ecology flag!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 26.875430521950108;
tmp_speak_command.wy = 333.89405624229494;
tmp_speak_command.w = 148;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_1_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_2";
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
tmp_speak_command.wx = -361.7190832079839;
tmp_speak_command.wy = 164.09394088095937;
tmp_speak_command.w = 207.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Governor Nelson had the flag created as a symbol for Earth Day!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -124.63972099320142;
tmp_speak_command.wy = 292.98496533320406;
tmp_speak_command.w = 248;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Of course!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -124.63972099320142;
tmp_speak_command.wy = 292.98496533320406;
tmp_speak_command.w = 248;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "How could I forget Governor Nelson-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -124.63972099320142;
tmp_speak_command.wy = 292.98496533320406;
tmp_speak_command.w = 248;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "He was the Wisconsin Governor responsible for bringing National Recognition to things like Earth Day.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -361.7190832079839;
tmp_speak_command.wy = 164.09394088095937;
tmp_speak_command.w = 207.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yep!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -361.7190832079839;
tmp_speak_command.wy = 164.09394088095937;
tmp_speak_command.w = 207.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "He's pretty great [INSERT SOME OTHER FACT ABOUT NELSON HERE]";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -124.63972099320142;
tmp_speak_command.wy = 292.98496533320406;
tmp_speak_command.w = 248;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_2_fail";
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
tmp_speak.id = "chap4_finale_3";
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_3";
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
tmp_speak_command.wx = -137.72981101012752;
tmp_speak_command.wy = 329.9195030401409;
tmp_speak_command.w = 256.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's a \"theta\" symbol.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -137.72981101012752;
tmp_speak_command.wy = 329.9195030401409;
tmp_speak_command.w = 256.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It looks a bit like an earth.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -137.72981101012752;
tmp_speak_command.wy = 329.9195030401409;
tmp_speak_command.w = 256.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "But it's also the letters \"e\" and \"o\" combined.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -137.72981101012752;
tmp_speak_command.wy = 329.9195030401409;
tmp_speak_command.w = 256.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That stands for \"ecology\" and \"organism\"- the earth is a living thing we need to care about!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -16.517689798006273;
tmp_speak_command.wy = 285.9801091007469;
tmp_speak_command.w = 176.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Fascinating!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -16.517689798006273;
tmp_speak_command.wy = 285.9801091007469;
tmp_speak_command.w = 176.69814225923326;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_3_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_4";
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
tmp_speak_command.wx = -305.65847714737777;
tmp_speak_command.wy = 117.12424391126248;
tmp_speak_command.w = 167.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It has a great history of being used in protests and other forms of activism.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 109.23988595956929;
tmp_speak_command.wy = 284.4649575855954;
tmp_speak_command.w = 96.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "These pictures show students marching on the capitol";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -261.7190832079838;
tmp_speak_command.wy = 123.1848499718684;
tmp_speak_command.w = 138.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "er, THIS capitol!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -16.517689798006273;
tmp_speak_command.wy = 285.9801091007469;
tmp_speak_command.w = 176.69814225923326;
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
tmp_speak.fqid = "tunic.capitol.hall.boss.chap4_finale_4_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.boss.haveyougotit";
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
tmp_speak_command.wx = 344.34152276734835;
tmp_speak_command.wy = 289.85151664245063;
tmp_speak_command.w = 99.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Jolie! I was hoping you'd stop by. Any news on the shirt artifact?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 344.34152276734835;
tmp_speak_command.wy = 289.85151664245063;
tmp_speak_command.w = 99.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Have you found anything regarding the shirt artifact?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 344.34152276734835;
tmp_speak_command.wy = 289.85151664245063;
tmp_speak_command.w = 99.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm haven't quite figured it out just yet...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 344.34152276734835;
tmp_speak_command.wy = 289.85151664245063;
tmp_speak_command.w = 99.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Well, get on it. I'm counting on you and your gramps to figure this out!"
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "talktogramps";
tmp_speak.fqid = "tunic.capitol.hall.boss.talktogramps";
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
"tunic.capitol.hall.chap1_finale",
"!tunic.historicalsociety.closet_dirty",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -87.97491210800862;
tmp_speak_command.wy = 331.4351228687488;
tmp_speak_command.w = 223.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You better get to work. The exhibit opens tonight!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -41.00348142567;
tmp_speak_command.wy = 332.95028627550226;
tmp_speak_command.w = 190.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Your grampa's waiting for you in his office.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "writeitup";
tmp_speak.fqid = "tunic.capitol.hall.boss.writeitup";
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
"tunic.capitol.hall.chap2_finale",
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
tmp_speak_command.wx = -246.82072015845307;
tmp_speak_command.wy = 332.94980607044386;
tmp_speak_command.w = 329.69814225923324;
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
tmp_person.fqid = "tunic.capitol.hall.gramps";
{
tmp_person.ww = 166.66666666666666;
tmp_person.wh = 333.3333333333333;
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
"!tunic.capitol.hall.chap1_finale_c",
],[
"_tunic.capitol.hall.chap2_finale_c",
"!tunic.capitol.hall.chap2_finale_c",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "chap2_teddy_finale_0";
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_0";
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
tmp_speak_command.wx = -161.9826936266635;
tmp_speak_command.wy = 70.82907415429007;
tmp_speak_command.w = 74.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Alright-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -347.58631710926795;
tmp_speak_command.wy = 71.51574614907285;
tmp_speak_command.w = 194;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I first noticed Teddy-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -315.7681352910861;
tmp_speak_command.wy = 107.87938251270924;
tmp_speak_command.w = 172;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "(Teddy is the name of my pet badger...)";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -394.5560140789649;
tmp_speak_command.wy = 113.93998857331532;
tmp_speak_command.w = 227;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "was stolen when Gramps's office was ransacked.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 144.24241311381945;
tmp_speak_command.wy = 346.5757579629875;
tmp_speak_command.w = 148;
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
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_0_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_1";
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
tmp_speak_command.wx = -289.244962525279;
tmp_speak_command.wy = 70.82859394923169;
tmp_speak_command.w = 152.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found his scarf!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -363.48738676770324;
tmp_speak_command.wy = 117.79829091892867;
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
tmp_speak_command.wx = 339.5429162625998;
tmp_speak_command.wy = 334.4649575855954;
tmp_speak_command.w = 161.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Alright, everybody hold up-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 225.90655262623613;
tmp_speak_command.wy = 332.94980607044386;
tmp_speak_command.w = 240.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Are you telling me there's a LIVE badger in MY museum?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -349.8510231313395;
tmp_speak_command.wy = 114.76798788862564;
tmp_speak_command.w = 196.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "WE'LL DEAL WITH THAT LATER, MERRIAM.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 147.11867383835735;
tmp_speak_command.wy = 305.6770787977166;
tmp_speak_command.w = 52.698142259233265;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmmm.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 153.43243194353153;
tmp_speak_command.wy = 336.821213608232;
tmp_speak_command.w = 180.69814225923324;
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
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_1_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_2";
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
tmp_speak_command.wx = -324.0934473737638;
tmp_speak_command.wy = 114.76798788862557;
tmp_speak_command.w = 181.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found a coffee cup from Bean Town!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -283.1843564646729;
tmp_speak_command.wy = 114.76798788862564;
tmp_speak_command.w = 148.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "And Gramps only drinks Holdgers!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 144.08837080805424;
tmp_speak_command.wy = 304.16192728256516;
tmp_speak_command.w = 111.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's true.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 148.63382535350894;
tmp_speak_command.wy = 339.01041213104986;
tmp_speak_command.w = 197.69814225923326;
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
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_2_fail";
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
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_3";
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
tmp_speak_command.wx = -469.5479928283093;
tmp_speak_command.wy = 111.73768485832268;
tmp_speak_command.w = 274.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The archivist said he saw Wells at Bean Town this morning!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -499.8510231313396;
tmp_speak_command.wy = 290.52556364620153;
tmp_speak_command.w = 297.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I mean, I WAS there, but that doesn't mean I stole your badger!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 217.06879557989504;
tmp_speak_command.wy = 333.7909105779291;
tmp_speak_command.w = 244.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's a big accusation for some pretty weak evidence-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -376.87059835949907;
tmp_speak_command.wy = 361.06363785065645;
tmp_speak_command.w = 307.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You've also just confirmed that the ARCHIVIST was at Bean Town...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 215.5536440647436;
tmp_speak_command.wy = 333.7909105779291;
tmp_speak_command.w = 204.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Heck, I'm drinking Bean Town coffee right now!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -307.9730543265348;
tmp_speak_command.wy = 65.71223806047682;
tmp_speak_command.w = 170;
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
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_3_fail";
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
tmp_speak.id = "chap2_teddy_finale_4";
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_4";
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
tmp_speak_command.wx = -305.65847714737777;
tmp_speak_command.wy = 117.12424391126248;
tmp_speak_command.w = 167.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wells was looking for a taxidermist!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -401.11302260192303;
tmp_speak_command.wy = 62.57878936580785;
tmp_speak_command.w = 230.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "HE WANTS TO KILL TEDDY!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 219.84594656562996;
tmp_speak_command.wy = 296.58616970680754;
tmp_speak_command.w = 96.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Actually...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 224.39140111108452;
tmp_speak_command.wy = 331.43465455529235;
tmp_speak_command.w = 166.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I asked Wells to find a taxidermist.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 221.36109808078152;
tmp_speak_command.wy = 373.8588969795349;
tmp_speak_command.w = 214.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I want to have local animals at the Wisconsin Wonders exhibit!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 218.3307950504783;
tmp_speak_command.wy = 385.98010910074686;
tmp_speak_command.w = 206.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'd rather have live animals, of course. But we need a back-up plan.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -213.48738676770316;
tmp_speak_command.wy = 64.76798788862575;
tmp_speak_command.w = 108.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wha...but...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -377.12375040406675;
tmp_speak_command.wy = 60.22253334317118;
tmp_speak_command.w = 213.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Then who took Teddy???";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -192.0221135110139;
tmp_speak_command.wy = 251.97272875974733;
tmp_speak_command.w = 106.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "No idea, kid.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -261.71908320798366;
tmp_speak_command.wy = 251.9727287597471;
tmp_speak_command.w = 150.69814225923324;
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
tmp_speak.fqid = "tunic.capitol.hall.gramps.chap2_teddy_finale_4_fail";
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
tmp_person.fqid = "tunic.capitol.hall.wells";
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
"_tunic.capitol.hall.chap2_finale_c",
"!tunic.capitol.hall.chap2_finale_c",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.capitol.hall.wells.hub";
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
tmp_speak_command.w = 100;
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
tmp_porthole.fqid = "tunic.capitol.hall.toentry";
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
tmp_wildcard.fqid = "tunic.capitol.hall.chap1_finale";
{
tmp_wildcard.ww = 426.91231555545414;
tmp_wildcard.wh = 371.7675989508338;
tmp_wildcard.wx = 164.97225271251;
tmp_wildcard.wy = 23.10474564435677;
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
//{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.path.to.entry", prompt:stextToLines("I need to show them I know blah blah", tmp_level.notifications_w), fail:[ "tunic.path.to.speak", "tunic.path.to.speak" ] },

tmp_wildcard.commands = [ //NOTE- CHANGING ORDERING WILL RESULT IN NECESSARY CHANGE TO HACKME
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap1_finale_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_tunic", prompt:stextToLines("I'll show her my photo of the shirt to remind her.", 220), fail:["tunic.capitol.hall.boss.chap1_finale_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap1_finale_1" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"HACKME", prompt:stextToLines("What evidence do I have that the shirt isn't a basketball jersey?", 220), fail:["tunic.capitol.hall.boss.chap1_finale_1_fail"] },

//pick slip
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap1_finale_slipfirst_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_basketballplaque", prompt:stextToLines("Why is the date on the slip relevant?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap1_finale_slipfirst_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap1_finale_slipfirst_1" },

//pick tunic
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap1_finale_plaquefirst_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanerslip", prompt:stextToLines("Why does it matter that the basketball team started in 1974?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap1_finale_plaquefirst_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap1_finale_plaquefirst_1" },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap1_finale_2" },
];

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
        if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
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
          if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
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
      var w = cur_level.notifications_w;
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
tmp_wildcard.id = "chap2_finale";
tmp_wildcard.fqid = "tunic.capitol.hall.chap2_finale";
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
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap2_finale_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanerslip", prompt:stextToLines("I need to show her the slip I found on the shirt.", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap2_finale_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap2_finale_1" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_expert", prompt:stextToLines("How did I learn it was from a dry cleaner?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap2_finale_1_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap2_finale_2" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("How did I learn which dry cleaner to go to?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap2_finale_2_fail"] },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap2_finale_3" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_logbook", prompt:stextToLines("How did I find the shirt's owner?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap2_finale_3_fail"] },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap2_finale_4" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_newspaper", prompt:stextToLines("I'll show her why Youmans is famous", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap2_finale_4_fail"] },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap2_finale_5" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_theodora", prompt:stextToLines("Time to show her Youmans wearing the shirt!", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap2_finale_5_fail"] },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap2_finale_6" },

];

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
        if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
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
          if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
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
      var w = cur_level.notifications_w;
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
tmp_wildcard.fqid = "tunic.capitol.hall.chap2_teddy_finale";
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
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.gramps.chap2_teddy_finale_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_teddytaken", prompt:stextToLines("How do I know he was taken?", tmp_level.notifications_w), fail:["tunic.capitol.hall.gramps.chap2_teddy_finale_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.gramps.chap2_teddy_finale_1" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_javajacket", prompt:stextToLines("What other evidence did I find at the crime scene?", tmp_level.notifications_w), fail:["tunic.capitol.hall.gramps.chap2_teddy_finale_1_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.gramps.chap2_teddy_finale_2" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_archivistcoffee", prompt:stextToLines("How can I connect the coffee to Wells?", tmp_level.notifications_w), fail:["tunic.capitol.hall.gramps.chap2_teddy_finale_2_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.gramps.chap2_teddy_finale_3" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_taxidermy", prompt:stextToLines("How else can I connect Wells to Teddy?", tmp_level.notifications_w), fail:["tunic.capitol.hall.gramps.chap2_teddy_finale_3_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.gramps.chap2_teddy_finale_4" },

];

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
        if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
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
          if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
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
      var w = cur_level.notifications_w;
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
tmp_wildcard.id = "chap4_finale";
tmp_wildcard.fqid = "tunic.capitol.hall.chap4_finale";
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
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap4_finale_0" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_flagguess", prompt:stextToLines("What is this flag?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap4_finale_0_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap4_finale_1" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_nelson", prompt:stextToLines("What was the flag for?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap4_finale_1_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap4_finale_2" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_theta", prompt:stextToLines("What do I know about the symbols?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap4_finale_2_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap4_finale_3" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_activists", prompt:stextToLines("What materials do I have regarding its history?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap4_finale_3_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap4_finale_4" },

];

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
        if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
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
          if(my_notebookview.page == my_notebookview.cache_available_entrys[i].page && ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
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
      var w = cur_level.notifications_w;
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
tmp_inert.fqid = "tunic.capitol.hall.rotunda";
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
tmp_person.ww = 111.99999999999996;
tmp_person.wh = 270;
tmp_person.wx = 207.0995987494196;
tmp_person.wy = 13;
tmp_person.wz = 1;
tmp_person.act_wx = -283.32082648203334;
tmp_person.act_wy = -70;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 52.95424753419206;
tmp_person.hover_icon_wy = 120.99999999999999;
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
tmp_speak_command.wx = -279.28286032863224;
tmp_speak_command.wy = 151.99999999999991;
tmp_speak_command.w = 173;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found her! Do you know who Theodora Youmans was?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 9.98295216110155;
tmp_speak_command.wy = 205.99999999999994;
tmp_speak_command.w = 155;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmmm...not sure. Why don't you try the library?";

tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -200.01704783889815;
tmp_speak_command.wy = 86.99999999999994;
tmp_speak_command.w = 92;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Ooh, good idea. Thanks!";
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
tmp_speak.options_wx = -374.5256196557775;
tmp_speak.options_wy = 147.00000000000003;
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
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -4.974729340696678;
tmp_speak_command.wy = 261;
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
tmp_speak_command.wx = -35.975208828576484;
tmp_speak_command.wy = 149;
tmp_speak_command.w = 159.99426888971652;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Uh...actually, I'm sort of working a case right now.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -83.00000000000006;
tmp_speak_command.wy = 204.99999999999997;
tmp_speak_command.w = 253;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "A case? Are you a detective?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -85.00000000000003;
tmp_speak_command.wy = 261.99999999999994;
tmp_speak_command.w = 253;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Don't worry, this'll only take a sec. What do you call a pony with a sore throat?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -37.999999999999986;
tmp_speak_command.wy = 93.00000000000001;
tmp_speak_command.w = 45;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Um...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 37.999999999999964;
tmp_speak_command.wy = 202.99999999999994;
tmp_speak_command.w = 129;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "A little horse!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -39.00000000000001;
tmp_speak_command.wy = 232.99999999999991;
tmp_speak_command.w = 203;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Get it? A little hoarse? Oh, nevermind...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -36.97520607015136;
tmp_speak_command.wy = 93.00000000000001;
tmp_speak_command.w = 102.99426888971652;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Ha! I like it!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -35.975206070151344;
tmp_speak_command.wy = 146;
tmp_speak_command.w = 160.99426888971652;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Can you help me? I need to find the owner of this slip.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -74.00000000000001;
tmp_speak_command.wy = 236.99999999999994;
tmp_speak_command.w = 243;
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
tmp_speak_command.wx = 33.00000000000013;
tmp_speak_command.wy = 229.99999999999994;
tmp_speak_command.w = 133;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Leo...you mean Leopold?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -240.00000000000003;
tmp_speak_command.wy = 90.99999999999993;
tmp_speak_command.w = 131;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yup, that's him.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -71.99999999999999;
tmp_speak_command.wy = 257.99999999999994;
tmp_speak_command.w = 238;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Your gramps is my favorite customer! Always full of stories.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -71.99999999999999;
tmp_speak_command.wy = 257.99999999999994;
tmp_speak_command.w = 238;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Guess it couldn't hurt to let you take a look.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -43.99999999999993;
tmp_speak_command.wy = 228.99999999999994;
tmp_speak_command.w = 209;
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
tmp_speak_command.wx = -0.999999999999936;
tmp_speak_command.wy = 234;
tmp_speak_command.w = 165;
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
];
tmp_object.notification_reqs = [[
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
"I'll make a note of this...",
];
tmp_zone.raw_notification_ws = [
253,
280,
217,
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
tmp_room.target_start_wx = 45.32138727135213;
tmp_room.target_start_wy = -105.58419639339468;
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
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 65.94890898829405;
tmp_speak_command.wy = 254.89695504589469;
tmp_speak_command.w = 158;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hey! Gil said you'd be dropping by.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -36.99999999990182;
tmp_speak_command.wy = 96.99999999998231;
tmp_speak_command.w = 130;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Gil? Who's Gil?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 93.00000001716116;
tmp_speak_command.wy = 254.00000000139337;
tmp_speak_command.w = 124;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Gilbert Wells, history guy?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 60.000000000001656;
tmp_speak_command.wy = 253.0000000000001;
tmp_speak_command.w = 154;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I used to tutor him in high school.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -66.99999999999996;
tmp_speak_command.wy = 133;
tmp_speak_command.w = 164;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wow, you've got a million flags here!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 103.00000000000006;
tmp_speak_command.wy = 249.99999999999997;
tmp_speak_command.w = 107;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yep. I'm a vexillophile!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -2.999999999999986;
tmp_speak_command.wy = 107.00000000000001;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Vexy-wha?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 81.00000000000001;
tmp_speak_command.wy = 249;
tmp_speak_command.w = 139;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Flag expert. How can I help?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -57.999999999999986;
tmp_speak_command.wy = 134;
tmp_speak_command.w = 150;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm investigating this old flag.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -93.99999999999997;
tmp_speak_command.wy = 107.00000000000001;
tmp_speak_command.w = 194;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Can you take a look?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -20.999999999999986;
tmp_speak_command.wy = 278;
tmp_speak_command.w = 240;
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
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -44.57250880075423;
tmp_speak_command.wy = 130.00832315060615;
tmp_speak_command.w = 141;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "This must be an ecology flag!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 123.00013463885985;
tmp_speak_command.wy = 224.00000198463076;
tmp_speak_command.w = 99;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You got it!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -28.99999999197017;
tmp_speak_command.wy = 250.0000000001181;
tmp_speak_command.w = 247;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "If I were you, I'd stop by the library and do some digging.";
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
tmp_scene.wx = 89.49999999999983;
tmp_scene.wy = 169.9999999999999;
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
"tunic.capitol.hall.chap1_finale_c",
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
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:75.8979690479369, wy:-239.42424385960555, ww:996.3941997472244, wh:188.36363645637445 },
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
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -301.6363636363635;
tmp_cutscene_command.wy = 35.393939393939455;
tmp_cutscene_command.w = 186;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Gramps must be up in the collection room.";
tmp_cutscene_command.t = 0;
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
tmp_cutscene_command.cutscene_entity_id = "chapter4";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.t = 100;
tmp_cutscene_command.end_t = 150;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter4";
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
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -428.48484848484844;
tmp_cutscene_command.wy = 81.39393939393936;
tmp_cutscene_command.w = 225;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Let's go find him!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 381;
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
tmp_cutscene.wx = -224.28787671359146;
tmp_cutscene.wy = -32.95454550974566;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = 77.00570027022911;
tmp_cutscene.act_wy = -61.0009545064006;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 47.81673205629488;
tmp_cutscene.hover_icon_wy = 79.86323876869221;
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
"tunic.historicalsociety.basement.gramps.whatdo",
]];
tmp_cutscene.reqs = [[
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -563.6969696969697;
tmp_cutscene_command.wy = 134.36363636363632;
tmp_cutscene_command.w = 322;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Hey, look at those scratches! Maybe someone took him on the elevator!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 23.15151515151542;
tmp_cutscene_command.wy = 188.7272727272727;
tmp_cutscene_command.w = 116;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Great Scott! You’re right!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -339.27272727272737;
tmp_cutscene_command.wy = 112.06060606060596;
tmp_cutscene_command.w = 147;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Why isn't the button working?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 23.1515151515152;
tmp_cutscene_command.wy = 223.57575757575756;
tmp_cutscene_command.w = 201;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You'll need a key card. Wish I had mine...Teddy chewed it up.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -372.72727272727275;
tmp_cutscene_command.wy = 114.84848484848492;
tmp_cutscene_command.w = 172;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I’ve got Wells’s ID! Could that work?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 21.75757575757585;
tmp_cutscene_command.wy = 192.90909090909088;
tmp_cutscene_command.w = 113;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Yes! That’ll do the trick.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 23.1515151515152;
tmp_cutscene_command.wy = 229.15151515151518;
tmp_cutscene_command.w = 236;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm supposed to take the artifact upstairs. Can you handle this on your own?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -428.4848484848485;
tmp_cutscene_command.wy = 68.84848484848482;
tmp_cutscene_command.w = 221;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Sure! One step at a time.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -353.21212121212136;
tmp_cutscene_command.wy = 66.06060606060612;
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
tmp_person.ww = 140.37458471274593;
tmp_person.wh = 275.6382226718452;
tmp_person.wx = -16.80867934130994;
tmp_person.wy = -72.86402587371214;
tmp_person.wz = 0;
tmp_person.act_wx = -156.30956468966167;
tmp_person.act_wy = -112.90454709221167;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 65.07800456475236;
tmp_person.hover_icon_wy = 128.12365567617067;
tmp_person.animcycle_id = "gramps";
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
"!tunic.historicalsociety.basement.gramps.whatdo",
"!tunic.historicalsociety.basement.seescratches",
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"tunic.capitol.hall.chap2_finale_c",
"!tunic.historicalsociety.basement.savedteddy",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "whatdo";
tmp_speak.fqid = "tunic.historicalsociety.basement.gramps.whatdo";
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
tmp_speak_command.wx = 17.765562686449;
tmp_speak_command.wy = 189.21184713215484;
tmp_speak_command.w = 181;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wowee! That must be the last artifact!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 20.54545454161557;
tmp_speak_command.wy = 143.21212121194296;
tmp_speak_command.w = 190;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Want to have a look?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -380.6626799063011;
tmp_speak_command.wy = 42.80289917696651;
tmp_speak_command.w = 127;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I can't. Teddy is still missing!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -389.02631626993747;
tmp_speak_command.wy = 48.378656752724076;
tmp_speak_command.w = 129;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What if he's gone forever?!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 24.727272718240812;
tmp_speak_command.wy = 186.4242424242424;
tmp_speak_command.w = 153;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Keep a cool head, Jo. We'll find him.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 20.54545453642261;
tmp_speak_command.wy = 190.6060606060606;
tmp_speak_command.w = 194;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "We must've missed something important...";
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
tmp_observation.ww = 235.06060606060612;
tmp_observation.wh = 270.3939393939393;
tmp_observation.wx = -220.1060585317607;
tmp_observation.wy = -7.166666721860878;
tmp_observation.wz = 1;
tmp_observation.act_wx = 77.00570027022911;
tmp_observation.act_wy = -61.0009545064006;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 47.81673205629488;
tmp_observation.hover_icon_wy = 79.86323876869221;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
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
"!tunic.capitol.hall.chap2_finale_c",
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
tmp_porthole.wx = -220.1060585317607;
tmp_porthole.wy = -7.166666721860878;
tmp_porthole.wz = 0;
tmp_porthole.act_wx = 77.00570027022911;
tmp_porthole.act_wy = -61.0009545064006;
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
tmp_porthole.target_start_wx = -737.1428584208346;
tmp_porthole.target_start_wy = -183.94848757764856;
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
tmp_porthole.ww = 172.6060606060607;
tmp_porthole.wh = 255.63636363636374;
tmp_porthole.wx = 162.99976902557344;
tmp_porthole.wy = -16.65925705375662;
tmp_porthole.wz = -0.9;
tmp_porthole.act_wx = 3;
tmp_porthole.act_wy = -76;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 25;
tmp_porthole.hover_icon_wy = 74;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "closet";
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
tmp_porthole.wx = 164.68669982250378;
tmp_porthole.wy = -15.123562974473316;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 5.3924473708724365;
tmp_porthole.act_wy = -74.60607166197283;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 6.484848484848513;
tmp_porthole.hover_icon_wy = 77.5757575757576;
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
tmp_porthole.hover_icon_wx = 59;
tmp_porthole.hover_icon_wy = -3;
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
tmp_inert.id = "fgpipes";
tmp_inert.fqid = "tunic.historicalsociety.basement.fgpipes";
{
tmp_inert.ww = 524.225895385451;
tmp_inert.wh = 993.4567891357317;
tmp_inert.wx = 440.74650293619675;
tmp_inert.wy = -5.003666640100164;
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
"tunic.capitol.hall.chap2_finale_c",
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
tmp_room.ww = 2000;
tmp_room.wh = 800;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "scene_historicalsociety_cage";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 700;
tmp_room.nav_min_wz = 1;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-114.81818181818176, wy:-222.86363636363626, ww:1321.2727272727273, wh:199.54545454545456 },
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
tmp_cutscene.ww = 1616.5151515151515;
tmp_cutscene.wh = 865;
tmp_cutscene.wx = -345.530303030303;
tmp_cutscene.wy = 0.07575757575750686;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = 767.878787878788;
tmp_cutscene.act_wy = -162.27272727272728;
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
tmp_cutscene_command.wx = -100;
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
tmp_cutscene_command.ww = 120;
tmp_cutscene_command.wh = 300;
tmp_cutscene_command.wx = -200;
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
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.wx = 0;
tmp_cutscene_command.wy = -0.6449776293738196;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 100;
tmp_cutscene_command.wy = -100;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -55.197158874490476;
tmp_cutscene_command.wy = 133.35014185840885;
tmp_cutscene_command.w = 39;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Hey!";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -57.03030303030306;
tmp_cutscene_command.wy = 159.84848484848476;
tmp_cutscene_command.w = 148;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "What are you doing down here?";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = 235.69696969696966;
tmp_cutscene_command.wy = 44.24242424242422;
tmp_cutscene_command.w = 91;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "GRRRRRRR";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -52.78787878787884;
tmp_cutscene_command.wy = 130.1515151515151;
tmp_cutscene_command.w = 43;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "GAH!";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -57.03030303030306;
tmp_cutscene_command.wy = 159.84848484848476;
tmp_cutscene_command.w = 198;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "And what is THAT doing out of its cage?!";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 131.75757575757567;
tmp_cutscene_command.wy = 72.8787878787878;
tmp_cutscene_command.w = 151;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You stole Teddy!";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -396.42424242424244;
tmp_cutscene_command.wy = 158.78787878787867;
tmp_cutscene_command.w = 148;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Alright now what's going on?";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -58.090909090909086;
tmp_cutscene_command.wy = 133.33333333333326;
tmp_cutscene_command.w = 97;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I told you!";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -57.03030303030306;
tmp_cutscene_command.wy = 160.90909090909085;
tmp_cutscene_command.w = 173;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I captured a badger in our museum!";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -53.84848484848492;
tmp_cutscene_command.wy = 156.66666666666657;
tmp_cutscene_command.w = 221;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "He's been eating my lunch every day this week!";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 131.75757575757564;
tmp_cutscene_command.wy = 72.87878787878776;
tmp_cutscene_command.w = 117;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "No he hasn't!";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = 232.51515151515147;
tmp_cutscene_command.wy = 47.42424242424239;
tmp_cutscene_command.w = 26;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = ":|";
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 101;
tmp_cutscene_command.wy = -100;
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 131.75757575757564;
tmp_cutscene_command.wy = 72.87878787878776;
tmp_cutscene_command.w = 64;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Teddy!";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 131.75757575757564;
tmp_cutscene_command.wy = 72.87878787878776;
tmp_cutscene_command.w = 217;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Have you been stealing Gramps' paperwork too?!";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = 231.45454545454535;
tmp_cutscene_command.wy = 44.24242424242422;
tmp_cutscene_command.w = 24;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = ":|";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 131.75757575757564;
tmp_cutscene_command.wy = 72.87878787878776;
tmp_cutscene_command.w = 188;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "And my homework?!?!";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = 237.81818181818173;
tmp_cutscene_command.wy = 38.93939393939389;
tmp_cutscene_command.w = 29;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = ":|";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -57.03030303030306;
tmp_cutscene_command.wy = 129.09090909090898;
tmp_cutscene_command.w = 41;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "See!";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -59.15151515151522;
tmp_cutscene_command.wy = 134.3939393939393;
tmp_cutscene_command.w = 205;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "That thing's a monster!";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -417.6363636363637;
tmp_cutscene_command.wy = 187.42424242424232;
tmp_cutscene_command.w = 244;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Jolie- you have to keep your badger under control.";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -54.90909090909095;
tmp_cutscene_command.wy = 138.63636363636357;
tmp_cutscene_command.w = 51;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "YEAH!";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -391.1212121212122;
tmp_cutscene_command.wy = 149.24242424242416;
tmp_cutscene_command.w = 144;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "And you, Frank-";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -54.90909090909095;
tmp_cutscene_command.wy = 136.51515151515142;
tmp_cutscene_command.w = 53;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "YEAH!";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -54.90909090909095;
tmp_cutscene_command.wy = 132.2727272727272;
tmp_cutscene_command.w = 87;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wait- me?";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -427.18181818181824;
tmp_cutscene_command.wy = 169.3939393939393;
tmp_cutscene_command.w = 182;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You can't just lock an animal in a cage.";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -164.15151515151518;
tmp_cutscene_command.wy = 185.30303030303023;
tmp_cutscene_command.w = 324;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "ATTENTION: THIS NEEDS REWRITING";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -233.09090909090912;
tmp_cutscene_command.wy = 160.90909090909082;
tmp_cutscene_command.w = 567;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "IT'S VERY REASONABLE TO JUST LOCK A WILD ANIMAL IN A CAGE";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -54.90909090909095;
tmp_cutscene_command.wy = 130.15151515151504;
tmp_cutscene_command.w = 44;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wha!";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "archivist";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -55.96969696969703;
tmp_cutscene_command.wy = 134.3939393939393;
tmp_cutscene_command.w = 112;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Ugh. Alright.";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_FAMILIAR;
tmp_cutscene_command.wx = 236.7575757575757;
tmp_cutscene_command.wy = 37.878787878787854;
tmp_cutscene_command.w = 22;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = ":P";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -385.81818181818187;
tmp_cutscene_command.wy = 159.84848484848476;
tmp_cutscene_command.w = 131;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Alright Jolie. Back to work.";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.wx = -410.21212121212125;
tmp_cutscene_command.wy = 178.9393939393938;
tmp_cutscene_command.w = 237;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Your grampa is waiting for you in the collections.";
tmp_cutscene_command.t = 11;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 12;
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
tmp_cutscene.ww = 175.73717194797763;
tmp_cutscene.wh = 429.4848484835715;
tmp_cutscene.wx = 615.9836009983322;
tmp_cutscene.wy = 18.924242435808594;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = -54;
tmp_cutscene.act_wy = -20.999999999999996;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 15.848490965451061;
tmp_cutscene.hover_icon_wy = -11.484848503182686;
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
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 335.3939393939394;
tmp_cutscene_command.wy = 45.30303030303026;
tmp_cutscene_command.w = 170;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I've got you, Teddy!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "teddy";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 753.0909090909092;
tmp_cutscene_command.wy = -7.636363636363679;
tmp_cutscene_command.w = 36;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "❤️";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 357.66666666666663;
tmp_cutscene_command.wy = 78.18181818181822;
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
tmp_person.wx = -45.24499541142391;
tmp_person.wy = -248.01467383010876;
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
tmp_speak_command.wx = -430.71552427675437;
tmp_speak_command.wy = 13.191413701274975;
tmp_speak_command.w = 237;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Whoever dropped these is probably the culprit!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -430.5151515157806;
tmp_speak_command.wy = 11.212121212244575;
tmp_speak_command.w = 234;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "There's a staff directory in the entryway.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -384.151515151515;
tmp_speak_command.wy = 11.060606060606005;
tmp_speak_command.w = 194;
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
tmp_speak_command.wx = -372.2156075400726;
tmp_speak_command.wy = 12.119019349076083;
tmp_speak_command.w = 191;
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
tmp_person.ww = 192.54554082386386;
tmp_person.wh = 136.21212197790402;
tmp_person.wx = 769.4812388231852;
tmp_person.wy = -177.4025204342525;
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
tmp_speak_command.wx = 423.68588233773335;
tmp_speak_command.wy = 25.021721353586592;
tmp_speak_command.w = 77;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Teddy!!!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 730.6667966677601;
tmp_speak_command.wy = -25.75768643598547;
tmp_speak_command.w = 71;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "(HELP!)";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 348.24242512787663;
tmp_speak_command.wy = 52.48484776842475;
tmp_speak_command.w = 156;
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
tmp_observation.ww = 175.73717194797763;
tmp_observation.wh = 429.4848484835715;
tmp_observation.wx = 615.9836009983322;
tmp_observation.wy = 18.924242435808594;
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
tmp_observation.blip_wx = 382.1923078422531;
tmp_observation.blip_wy = 35.85644414725577;
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
tmp_porthole.ww = 164.3636363636363;
tmp_porthole.wh = 307.90909090909093;
tmp_porthole.wx = -908.4545454545455;
tmp_porthole.wy = -54.95454545454548;
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
tmp_inert.ww = 119.63657156793829;
tmp_inert.wh = 479.72727272583427;
tmp_inert.wx = 640.1685435537571;
tmp_inert.wy = -38.22716717188271;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "cage_door";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fence";
tmp_inert.fqid = "tunic.historicalsociety.cage.fence";
{
tmp_inert.ww = 1332.7272727272727;
tmp_inert.wh = 784.5454545454548;
tmp_inert.wx = 317.57951316014487;
tmp_inert.wy = 12.969648024762932;
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
tmp_inert.ww = 1504.5454545454547;
tmp_inert.wh = 247.27272727272725;
tmp_inert.wx = -72.10219479395823;
tmp_inert.wy = -346.7282394268359;
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
tmp_inert.ww = 2030.9090909090908;
tmp_inert.wh = 413.63636363636374;
tmp_inert.wx = 7.74927616550201;
tmp_inert.wy = 144.71218679161143;
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
tmp_speak_command.wx = -371.9504738760633;
tmp_speak_command.wy = 235.88850546780088;
tmp_speak_command.w = 265;
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
tmp_speak_command.w = 197;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Just talking to Teddy.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -371.9504738760633;
tmp_speak_command.wy = 240.88850546780085;
tmp_speak_command.w = 230;
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
tmp_speak_command.w = 190;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Meetings are BORING!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -368.7265613608749;
tmp_speak_command.wy = 266.26284325637914;
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
tmp_speak_command.w = 140;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Teddy, you have to stay hidden.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 195.1141705840032;
tmp_speak_command.wy = -9.068034501009024;
tmp_speak_command.w = 173;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Please don't eat my homework this time!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 211.60354799515324;
tmp_speak_command.wy = -7.502648845687112;
tmp_speak_command.w = 155;
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
tmp_speak_command.w = 103;
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
336,
164,
293,
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
tmp_cutscene_command.wx = 427.7796636619204;
tmp_cutscene_command.wy = 8.048440985385888;
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
tmp_cutscene_command.wx = 7.293885664825506;
tmp_cutscene_command.wy = -11.385306428843897;
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
tmp_cutscene_command.w = 242;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Don't panic, Jo. He might've gotten scared and run off.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 11.17007754335587;
tmp_cutscene_command.wy = -11.567005854413082;
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
tmp_cutscene = new cutscene();
tmp_cutscene.id = "what_happened";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.what_happened";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 0;
tmp_cutscene.wh = 0;
tmp_cutscene.wx = 0;
tmp_cutscene.wy = 0;
tmp_cutscene.wz = 0;
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
"!self",
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
tmp_cutscene_command.wx = -519.706909090909;
tmp_cutscene_command.wy = 136.4214753120511;
tmp_cutscene_command.w = 103;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "What the-";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -600;
tmp_cutscene_command.wy = -160;
tmp_cutscene_command.t = 2;
tmp_cutscene_command.end_t = 80;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "gramps";
tmp_cutscene_command.t = 2;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -568.8213632353732;
tmp_cutscene_command.wy = 12.400077509706513;
tmp_cutscene_command.w = 187;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "What happened here?!";
tmp_cutscene_command.t = 81;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -698.706909090909;
tmp_cutscene_command.wy = 129.4214753120511;
tmp_cutscene_command.w = 119;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I don't know!";
tmp_cutscene_command.t = 81;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -693.706909090909;
tmp_cutscene_command.wy = 185.4214753120511;
tmp_cutscene_command.w = 125;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I got here and everything was trashed!";
tmp_cutscene_command.t = 81;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 82;
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
tmp_person.fqid = "tunic.historicalsociety.closet_dirty.gramps";
{
tmp_person.ww = 176.99999935560783;
tmp_person.wh = 343.9999890712546;
tmp_person.wx = -750.2200051306169;
tmp_person.wy = -91.95401594936837;
tmp_person.wz = 1;
tmp_person.act_wx = 133.77832060193523;
tmp_person.act_wy = -55.0328172309695;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 67.96240270846505;
tmp_person.hover_icon_wy = 156.98427772568772;
tmp_person.animcycle_id = "gramps";
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
"!tunic.historicalsociety.closet_dirty.gramps",
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.capitol.hall.chap2_finale_c",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "archivist";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.archivist";
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
"tunic.historicalsociety.closet_dirty.gramps.news",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -585.6161431419457;
tmp_speak_command.wy = 46.85406863090188;
tmp_speak_command.w = 183;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Um...what did you want me to do again?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -694.990349968848;
tmp_speak_command.wy = 158.8548703987072;
tmp_speak_command.w = 299;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Head upstairs and talk to the archivist. He might be able to help!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "helpclean";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.helpclean";
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
"!tunic.historicalsociety.closet_dirty.trigger_coffee",
],[
"!tunic.historicalsociety.closet_dirty.trigger_scarf",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -693.3701536672845;
tmp_speak_command.wy = 145.00069469317947;
tmp_speak_command.w = 188;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Looks like we need to get to cleanin'.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -580.0076086122509;
tmp_speak_command.wy = 68.85547382649081;
tmp_speak_command.w = 141;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What?! We need to find out who did this!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -688.9909450405889;
tmp_speak_command.wy = 154.854891205863;
tmp_speak_command.w = 175;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Help me tidy up first and then we'll talk.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -688.9903540783639;
tmp_speak_command.wy = 151.85487054239968;
tmp_speak_command.w = 294;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You've got a bit of a mess over in your area. Why not start there?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "news";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.news";
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
"tunic.historicalsociety.closet_dirty.trigger_coffee",
"tunic.historicalsociety.closet_dirty.trigger_scarf",
"!self",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -693.9444280619125;
tmp_speak_command.wy = 158.85175738093878;
tmp_speak_command.w = 166;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I wonder who could've done this.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -583.495978309857;
tmp_speak_command.wy = 17.862812629692186;
tmp_speak_command.w = 136;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I have an idea.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -582.495978309857;
tmp_speak_command.wy = 49.8628126296922;
tmp_speak_command.w = 282;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "He's wrong about old shirts and his name rhymes with \"smells\"...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -696.9903543841413;
tmp_speak_command.wy = 150.85486998778578;
tmp_speak_command.w = 245;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Easy, Jo. We can't just jump to conclusions like that.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -581.990349968848;
tmp_speak_command.wy = 14.854870398707163;
tmp_speak_command.w = 195;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "BUT HE STOLE TEDDY!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -695.9903499688528;
tmp_speak_command.wy = 153.8548703987072;
tmp_speak_command.w = 169;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Let's take things one step at a time.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -694.990349968848;
tmp_speak_command.wy = 150.85487039870713;
tmp_speak_command.w = 312;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "While we're investigating the shirt, we can look for clues about Teddy!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -697.495978309857;
tmp_speak_command.wy = 155.8628126296922;
tmp_speak_command.w = 228;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Oh, but it looks like my papers have gone missing...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -585.990349968848;
tmp_speak_command.wy = 18.85487039870719;
tmp_speak_command.w = 154;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Oh no! Not again!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -694.990349968848;
tmp_speak_command.wy = 152.85487039870713;
tmp_speak_command.w = 243;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You'll have to follow up on the shirt case without me.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -583.990349968848;
tmp_speak_command.wy = 47.85487039870716;
tmp_speak_command.w = 311;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Don't worry, Gramps. I'll find Teddy, and I'll figure out the shirt too!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -583.990349968848;
tmp_speak_command.wy = 47.85487039870716;
tmp_speak_command.w = 116;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Where should I start?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -693.990349968848;
tmp_speak_command.wy = 158.8548703987072;
tmp_speak_command.w = 194;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "If I were you, I'd pay a visit to the archivist.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -693.990349968848;
tmp_speak_command.wy = 158.8548703987072;
tmp_speak_command.w = 203;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "He's our expert record keeper, right upstairs.";
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
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I love these photos of me and Teddy.";
tmp_observation.blip_wx = 236.38354274260067;
tmp_observation.blip_wy = 62.37115888408396;
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = 107.99999999999982;
tmp_porthole.target_start_wy = 31.00000000000002;
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
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.chair";
{
tmp_inert.ww = 288.7991253327396;
tmp_inert.wh = 291.62036450312695;
tmp_inert.wx = -187.6692620820057;
tmp_inert.wy = -26.41218718451732;
tmp_inert.wz = 0.1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "room_historicalsociety_closet_dirty_chair";
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
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.desk";
{
tmp_inert.ww = 441.4886923813697;
tmp_inert.wh = 273.649948616459;
tmp_inert.wx = -672.5462720210253;
tmp_inert.wy = -71.41921340324193;
tmp_inert.wz = 0.1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "room_historicalsociety_closet_dirty_desk";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "deskchair";
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.deskchair";
{
tmp_inert.ww = 120.37433778857837;
tmp_inert.wh = 117.46371810449574;
tmp_inert.wx = -687.4557037913441;
tmp_inert.wy = 65.42417994362171;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "closet_chair";
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
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.fgdesk";
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
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.fgpipes";
{
tmp_inert.ww = 917.8841312272183;
tmp_inert.wh = 853.8504981773996;
tmp_inert.wx = 576.950123603211;
tmp_inert.wy = 7.512205523404077;
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
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.fire";
{
tmp_inert.ww = 41.269118963430955;
tmp_inert.wh = 106.98909580510868;
tmp_inert.wx = 712.5234599034269;
tmp_inert.wy = -146.93013383125256;
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
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 950;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:71.12826086956488, wy:-241.2801242236024, ww:1187.7378881987577, wh:470.5999999999999 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = 58.79999999999998;
tmp_room.target_start_wy = -212.4;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.5

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "cs";
tmp_cutscene.fqid = "tunic.historicalsociety.collection.cs";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 100;
tmp_cutscene.wh = 100;
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
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -431.13636363636357;
tmp_cutscene_command.wy = 268.40909090909105;
tmp_cutscene_command.w = 155;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Look at that! It's the bee's knees!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -353.40909090909093;
tmp_cutscene_command.wy = 272.7272727272728;
tmp_cutscene_command.w = 104;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wish I could investigate.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "tunic";
tmp_cutscene_command.t = 2;
tmp_cutscene_command.end_t = 2;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 200;
tmp_cutscene_command.wy = -100;
tmp_cutscene_command.t = 2;
tmp_cutscene_command.end_t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 229.3436414785032;
tmp_cutscene_command.wy = 94.2646149896097;
tmp_cutscene_command.w = 112;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "It's not fair!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 236.7424242424244;
tmp_cutscene_command.wy = 140.30303030303017;
tmp_cutscene_command.w = 151;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You're not losing your papers!";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 230.98484848484867;
tmp_cutscene_command.wy = 95.68181818181807;
tmp_cutscene_command.w = 94;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "...are you?";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -445.53030303030295;
tmp_cutscene_command.wy = 277.0454545454545;
tmp_cutscene_command.w = 171;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Well, SOMETHING is happening to them...";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -432.5757575757574;
tmp_cutscene_command.wy = 278.4848484848484;
tmp_cutscene_command.w = 163;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "But there's no use fretting over it.";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -487.2727272727272;
tmp_cutscene_command.wy = 277.0454545454545;
tmp_cutscene_command.w = 200;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Let's have a look at the artifact, shall we?";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 101;
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
tmp_person.fqid = "tunic.historicalsociety.collection.gramps";
{
tmp_person.ww = 189.24285888530645;
tmp_person.wh = 354.77272727272725;
tmp_person.wx = -159.07506881375969;
tmp_person.wy = -11.553030303030312;
tmp_person.wz = 0;
tmp_person.act_wx = 245.29136436273882;
tmp_person.act_wy = -41.78567838584007;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 83.48484848544463;
tmp_person.hover_icon_wy = 165.53030303030303;
tmp_person.animcycle_id = "gramps";
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
"tunic.historicalsociety.collection.tunic.slip",
"!tunic.historicalsociety.collection.gramps.found",
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "found";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.found";
{
tmp_speak.primary = 10;
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
"tunic.historicalsociety.collection.tunic.slip",
"!tunic.historicalsociety.collection.gramps.found",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -351.97213029455867;
tmp_speak_command.wy = 281.3625512053247;
tmp_speak_command.w = 104;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Did you find anything?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 114.37822950354155;
tmp_speak_command.wy = 140.29711546258577;
tmp_speak_command.w = 209;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found a slip from 1916!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -389.3947042315285;
tmp_speak_command.wy = 278.48450739988357;
tmp_speak_command.w = 134;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hot Dog! I had my suspicions...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 115.8314038681832;
tmp_speak_command.wy = 141.74265438346984;
tmp_speak_command.w = 166;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What do you mean?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -511.7424243434654;
tmp_speak_command.wy = 275.6060605504947;
tmp_speak_command.w = 216;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm not so sure that this is a basketball jersey.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -495.90909095248986;
tmp_speak_command.wy = 320.227272697413;
tmp_speak_command.w = 206;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Why don't you head to the Basketball Center to test Wells's theory?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -455.60606064813595;
tmp_speak_command.wy = 277.0454545161848;
tmp_speak_command.w = 179;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'll be at the Capitol helping the boss.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -445.5303030723784;
tmp_speak_command.wy = 272.72727269800305;
tmp_speak_command.w = 170;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Let me know if you find anything!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "look_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.look_0";
{
tmp_speak.primary = 5;
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
"!tunic.historicalsociety.collection.tunic.slip",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -385.70489402293197;
tmp_speak_command.wy = 278.5111931068908;
tmp_speak_command.w = 131;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Have a look at the artifact!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "lost";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.lost";
{
tmp_speak.primary = 3;
tmp_speak.options_wx = -396.59090920705773;
tmp_speak.options_wy = 30.909090911870123;
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
"tunic.historicalsociety.collection.gramps.found",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 115.61603186688953;
tmp_speak_command.wy = 141.74762384153541;
tmp_speak_command.w = 163;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What should I do?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -508.8636363636362;
tmp_speak_command.wy = 321.66666666666674;
tmp_speak_command.w = 214;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You should check out the Basketball Center to test Wells's theory-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -454.1666666666666;
tmp_speak_command.wy = 281.3636363636364;
tmp_speak_command.w = 181;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "and hopefully rustle up some clues!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 118.7121212117455;
tmp_speak_command.wy = 138.8636363634689;
tmp_speak_command.w = 148;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Ooh, I like clues!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -556.3636363636363;
tmp_speak_command.wy = 284.24242424242425;
tmp_speak_command.w = 253;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'll be at the Capitol. Let me know if you find anything!";
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
tmp_object.hover_icon_wx = 48.93939393939394;
tmp_object.hover_icon_wy = 102.1969696969697;
tmp_object.animcycle_id = "null";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.notice_icon_animcycle_id = "notice";
tmp_object.view_overlay_animcycle_id = "null";
tmp_object.audio_id = "null";
tmp_object.deck_animcycle_ids = [
];
tmp_object.notifications_persistent = 1;
tmp_object.raw_notifications = [
"What do you think, Jo?",
"Anything out of the ordinary?",
];
tmp_object.raw_notification_ws = [
203,
150,
];
tmp_object.notification_reqs = [[
"!tunic.historicalsociety.collection.tunic.slip",
]];
tmp_object.view_overlay_reqs = [[
]];
tmp_object.notice_reqs = [[
"!tunic.historicalsociety.collection.tunic.slip",
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
tmp_view.fqid = "tunic.historicalsociety.collection.tunic.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "tunic_front";
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
"tunic.historicalsociety.collection.tunic.slip",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "slip";
tmp_zone.fqid = "tunic.historicalsociety.collection.tunic.hub.slip";
{
tmp_zone.ww = 100;
tmp_zone.wh = 100;
tmp_zone.wx = 59.00000000000002;
tmp_zone.wy = 194.99999999999994;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "slip";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_view.magnify = false;
tmp_view.audio_id = "null";
tmp_view.deck_animcycle_ids = [
];
tmp_view.notifications_persistent = 0;
tmp_view.raw_notifications = [
"This looks like a clue!",
"I'll record this in my notebook.",
];
tmp_view.raw_notification_ws = [
194,
268,
];
tmp_view.notification_reqs = [[
"!self",
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = -903.2438530313668;
tmp_porthole.target_start_wy = -94.39707135640161;
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
tmp_inert.id = "dust";
tmp_inert.fqid = "tunic.historicalsociety.collection.dust";
{
tmp_inert.ww = 376.36219748078264;
tmp_inert.wh = 141.74109910378758;
tmp_inert.wx = 617.988778991006;
tmp_inert.wy = 296.6550520992953;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "fgdust";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgartifacts";
tmp_inert.fqid = "tunic.historicalsociety.collection.fgartifacts";
{
tmp_inert.ww = 1032.727272727273;
tmp_inert.wh = 180.60606060606062;
tmp_inert.wx = 115.83333333333354;
tmp_inert.wy = -409.54545454545456;
tmp_inert.wz = 999;
tmp_inert.g = 0.1;
tmp_inert.animcycle_id = "fgartifacts";
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
tmp_room.id = "collection_flag";
tmp_room.fqid = "tunic.historicalsociety.collection_flag";
{
tmp_room.primary = false;
tmp_room.ww = 1626.7701863354039;
tmp_room.wh = 990;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_collection_flag";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 950;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:71.12826086956488, wy:-241.2801242236024, ww:1187.7378881987577, wh:470.5999999999999 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = 58.79999999999998;
tmp_room.target_start_wy = -212.4;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.5

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.historicalsociety.collection_flag.gramps";
{
tmp_person.ww = 189.24285888530645;
tmp_person.wh = 354.77272727272725;
tmp_person.wx = -159.07506881375969;
tmp_person.wy = -11.553030303030312;
tmp_person.wz = 0;
tmp_person.act_wx = 245.29136436273882;
tmp_person.act_wy = -41.78567838584007;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 76.28787878847493;
tmp_person.hover_icon_wy = 162.65151515151516;
tmp_person.animcycle_id = "gramps";
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
"!self",
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"tunic.historicalsociety.basement.savedteddy",
"!tunic.historicalsociety.entry.groupconvo_flag",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "flag";
tmp_speak.fqid = "tunic.historicalsociety.collection_flag.gramps.flag";
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
tmp_speak_command.wx = -358.72131490707034;
tmp_speak_command.wy = 277.05281630272134;
tmp_speak_command.w = 113;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Teddy! There you are.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 111.49910404441658;
tmp_speak_command.wy = 187.80314914867574;
tmp_speak_command.w = 155;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "The archivist had him locked up.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -380.7575757575757;
tmp_speak_command.wy = 277.04545454545456;
tmp_speak_command.w = 127;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Gadzooks! Poor critter.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -451.2878787878804;
tmp_speak_command.wy = 279.92424242424244;
tmp_speak_command.w = 176;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Good thing you were on the case, Jolie.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -464.2424242424242;
tmp_speak_command.wy = 323.1060606060606;
tmp_speak_command.w = 184;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Now that Teddy's okay...want to take a crack at this flag?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -380.7575757575757;
tmp_speak_command.wy = 277.04545454545456;
tmp_speak_command.w = 127;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I sure could use your help.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -382.19696969696975;
tmp_speak_command.wy = 278.48484848484856;
tmp_speak_command.w = 124;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Anything jump out at you?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 115.83333333333333;
tmp_speak_command.wy = 137.4242424242425;
tmp_speak_command.w = 208;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It looks hand-stitched.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -363.48484848484856;
tmp_speak_command.wy = 279.9242424242425;
tmp_speak_command.w = 112;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Aha! Good catch, Jolie.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -521.8181818181818;
tmp_speak_command.wy = 279.9242424242425;
tmp_speak_command.w = 224;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Now I'm supposed to meet the boss in the entryway.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -464.24242424242425;
tmp_speak_command.wy = 242.49999999999994;
tmp_speak_command.w = 183;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Let's scoot on over!";
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
tmp_porthole.fqid = "tunic.historicalsociety.collection_flag.toentry";
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = -903.2438530313668;
tmp_porthole.target_start_wy = -94.39707135640161;
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
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 1074.7199999999993;
tmp_room.nav_min_wz = 0.01;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-59.107017151491846, wy:-286.2998844146749, ww:1769.5494376878196, wh:580.1788249790067 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 915.4377020179154;
tmp_room.target_start_wy = -27.33622572459731;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.8

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "groupconvo";
tmp_cutscene.fqid = "tunic.historicalsociety.entry.groupconvo";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 564.0836363636361;
tmp_cutscene.wh = 492.4356363636362;
tmp_cutscene.wx = 132.94157900906043;
tmp_cutscene.wy = 51.52330233226783;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = 273.2659952420667;
tmp_cutscene.act_wy = -96.10993403265934;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 87.64805366290636;
tmp_cutscene.hover_icon_wy = 213.94686296870225;
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
"!tunic.historicalsociety.entry.groupconvo",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "boss";
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 363.05032036028274;
tmp_cutscene_command.wy = 459.47345441597105;
tmp_cutscene_command.w = 193;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Let's get started. The Wisconsin Wonders exhibit opens tonight!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 366.6116363636362;
tmp_cutscene_command.wy = 464.31345454545425;
tmp_cutscene_command.w = 133;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Who wants to investigate the shirt artifact?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -258.67999999999955;
tmp_cutscene_command.wy = 431.74618181818175;
tmp_cutscene_command.w = 194;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Well, Leopold here is always losing papers...";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 438.25963636363633;
tmp_cutscene_command.wy = 159.80945454545457;
tmp_cutscene_command.w = 39;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Hey!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -266.8218181818178;
tmp_cutscene_command.wy = 228.20072727272722;
tmp_cutscene_command.w = 106;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "It's fine, Jo.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -213.08581818181767;
tmp_cutscene_command.wy = 428.48945454545446;
tmp_cutscene_command.w = 168;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Besides, I'm already almost done!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "report";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 368.2399999999999;
tmp_cutscene_command.wy = 364.9832727272725;
tmp_cutscene_command.w = 188;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Well, that settles it.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 361.72654545454543;
tmp_cutscene_command.wy = 417.0909090909092;
tmp_cutscene_command.w = 176;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wells, finish up your excellent report.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 363.35490909090913;
tmp_cutscene_command.wy = 413.8341818181819;
tmp_cutscene_command.w = 242;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Leopold, why don't you help me set up in the Capitol?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 363.35490909090913;
tmp_cutscene_command.wy = 413.8341818181819;
tmp_cutscene_command.w = 212;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I need to talk to you about that paperwork.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -286.3621818181816;
tmp_cutscene_command.wy = 221.68727272727264;
tmp_cutscene_command.w = 120;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Will do, Boss!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -405.232727272727;
tmp_cutscene_command.wy = 317.76072727272714;
tmp_cutscene_command.w = 188;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Hey Jo, let's take a look at the shirt before it's packed up!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "gramps_walk";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -176.53309090909076;
tmp_cutscene_command.t = 1;
tmp_cutscene_command.end_t = 2;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "tocollection";
tmp_cutscene_command.t = 1;
tmp_cutscene_command.end_t = 200;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 201;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "groupconvo_flag";
tmp_cutscene.fqid = "tunic.historicalsociety.entry.groupconvo_flag";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 564.0836363636361;
tmp_cutscene.wh = 492.4356363636362;
tmp_cutscene.wx = 132.94157900906043;
tmp_cutscene.wy = 51.52330233226783;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = 273.2659952420667;
tmp_cutscene.act_wy = -96.10993403265934;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 87.64805366290636;
tmp_cutscene.hover_icon_wy = 213.94686296870225;
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
"tunic.historicalsociety.collection_flag.gramps.flag",
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "boss";
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -319.0883246195871;
tmp_cutscene_command.wy = 420.44251669759177;
tmp_cutscene_command.w = 229;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm telling you, Boss. Taxidermy is our best bet!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -252.47113418517154;
tmp_cutscene_command.wy = 374.79854532506204;
tmp_cutscene_command.w = 186;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "People would love it!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 366.3070476330099;
tmp_cutscene_command.wy = 456.2167271432438;
tmp_cutscene_command.w = 194;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Nonsense. I want live animals at the exhibit, not stuffed ones.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 364.6786839966462;
tmp_cutscene_command.wy = 408.99418168869846;
tmp_cutscene_command.w = 146;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Ah, Jolie! I'm glad you're here.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 364.6786839966462;
tmp_cutscene_command.wy = 412.2509089614257;
tmp_cutscene_command.w = 201;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'd like you to take the lead on the flag case.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -229.67404327608057;
tmp_cutscene_command.wy = 382.94036350688015;
tmp_cutscene_command.w = 171;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wait! Can't I do it?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -278.5249523669896;
tmp_cutscene_command.wy = 423.64945441597104;
tmp_cutscene_command.w = 207;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "That symbol looks sort of like a deer hoof...";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -369.7133160033533;
tmp_cutscene_command.wy = 428.53454532506197;
tmp_cutscene_command.w = 258;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "It could be an early design for the Wisconsin state flag!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 361.42195672391887;
tmp_cutscene_command.wy = 412.2509089614257;
tmp_cutscene_command.w = 315;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Fine. Jolie, you can start by investigating this deer hoof theory.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 364.6786839966462;
tmp_cutscene_command.wy = 412.25090896142564;
tmp_cutscene_command.w = 137;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Your gramps and I will head over to the Capitol and get things ready.";
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
tmp_person.id = "boss";
tmp_person.fqid = "tunic.historicalsociety.entry.boss";
{
tmp_person.ww = 166.762908720071;
tmp_person.wh = 345.88290909851037;
tmp_person.wx = 317.3865236070164;
tmp_person.wy = 95.92908700775376;
tmp_person.wz = 0;
tmp_person.act_wx = -99.3301816625064;
tmp_person.act_wy = -105.8436363572376;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 76.53310990160826;
tmp_person.hover_icon_wy = 198.6603644170071;
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
"!tunic.historicalsociety.collection.tunic.slip",
],[
"tunic.historicalsociety.collection_flag.gramps.flag",
"!tunic.wildlife",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "flag";
tmp_speak.fqid = "tunic.historicalsociety.entry.boss.flag";
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
"tunic.historicalsociety.collection_flag.gramps.flag",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 374.46525009305;
tmp_speak_command.wy = 365.3497468326835;
tmp_speak_command.w = 185;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Can I help you, Jolie?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 367.1791990662043;
tmp_speak_command.wy = 463.1159829244856;
tmp_speak_command.w = 165;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yeah! Do you know where I could find a deer expert?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 362.29371695090924;
tmp_speak_command.wy = 458.23092463356824;
tmp_speak_command.w = 179;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmm...you could try the Aldo Leopold Center in Tomahawk.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 350.89517149622765;
tmp_speak_command.wy = 419.1501973608523;
tmp_speak_command.w = 195;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "They've got a great wildlife rescue exhibit.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -411.1790103219538;
tmp_speak_command.wy = 424.03528826994324;
tmp_speak_command.w = 287;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Ugh. Guess I should head out there and check out the animals.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 258.0784442235005;
tmp_speak_command.wy = 197.69274281539788;
tmp_speak_command.w = 214;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Great! I'll ride with you!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "talktogramps";
tmp_speak.fqid = "tunic.historicalsociety.entry.boss.talktogramps";
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
tmp_speak_command.wx = 350.89668211434093;
tmp_speak_command.wy = 419.1500716173884;
tmp_speak_command.w = 275;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I believe your grampa is waiting for you in the collection room.";
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
tmp_person.hover_icon_wx = 87.93163636363631;
tmp_person.hover_icon_wy = 180.74836363636354;
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
"!tunic.historicalsociety.entry.groupconvo",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.gramps.hub";
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
tmp_speak_command.w = 100;
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
tmp_person = new person();
tmp_person.id = "wells";
tmp_person.fqid = "tunic.historicalsociety.entry.wells";
{
tmp_person.ww = 168.38664563697884;
tmp_person.wh = 358.9101377802236;
tmp_person.wx = 95.00862645870025;
tmp_person.wy = 106.43923129324455;
tmp_person.wz = 0;
tmp_person.act_wx = 87.93042270960882;
tmp_person.act_wy = -86.30340465538065;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 77.72080538508845;
tmp_person.hover_icon_wy = 196.09886789206402;
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
"!tunic.historicalsociety.collection.tunic.slip",
],[
"tunic.historicalsociety.collection_flag.gramps.flag",
"!tunic.wildlife",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "flag";
tmp_speak.fqid = "tunic.historicalsociety.entry.wells.flag";
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
"tunic.historicalsociety.collection_flag.gramps.flag",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -168.27119224340674;
tmp_speak_command.wy = 375.26604895836914;
tmp_speak_command.w = 136;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What now, kid?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 220.44484881176294;
tmp_speak_command.wy = 261.2089930818036;
tmp_speak_command.w = 217;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you really think that symbol is a deer hoof?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -272.9491931680918;
tmp_speak_command.wy = 425.67371677073874;
tmp_speak_command.w = 201;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "No clue. Do I look like a deer expert to you?'";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "talktogramps";
tmp_speak.fqid = "tunic.historicalsociety.entry.wells.talktogramps";
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
tmp_speak_command.wx = -272.9491931680918;
tmp_speak_command.wy = 425.67371677073874;
tmp_speak_command.w = 201;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Why don't you go play with your Grandpa?";
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
tmp_object.id = "directory";
tmp_object.fqid = "tunic.historicalsociety.entry.directory";
{
tmp_object.ww = 357.2803045251266;
tmp_object.wh = 192.81671772629895;
tmp_object.wx = -403.4991472698001;
tmp_object.wy = 241.93551271086807;
tmp_object.wz = 0;
tmp_object.act_wx = 87.93163636363631;
tmp_object.act_wy = -236.11272727272706;
tmp_object.act_anim = 0;
tmp_object.hover_icon_wx = 127.01230366574451;
tmp_object.hover_icon_wy = 91.18836402425126;
tmp_object.animcycle_id = "null";
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
tmp_view.id = "closeup";
tmp_view.fqid = "tunic.historicalsociety.entry.directory.closeup";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "directory_closeup";
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
tmp_zone = new zone();
tmp_zone.id = "archivist";
tmp_zone.fqid = "tunic.historicalsociety.entry.directory.closeup.archivist";
{
tmp_zone.ww = 197;
tmp_zone.wh = 136.00000000000003;
tmp_zone.wx = -8.500000000000043;
tmp_zone.wy = -222;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "closeup";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"Those are the same glasses!",
"If the archivist locked up Teddy, he probably has the key!",
];
tmp_zone.raw_notification_ws = [
243,
190,
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
"tunic.historicalsociety.cage.glasses.afterteddy",
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_object = new object();
tmp_object.id = "report";
tmp_object.fqid = "tunic.historicalsociety.entry.report";
{
tmp_object.ww = 124.34743814082854;
tmp_object.wh = 127.70177174024397;
tmp_object.wx = 41.66996470938192;
tmp_object.wy = 55.02306303276724;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 37.452363636363614;
tmp_object.hover_icon_wy = 48.85090909090906;
tmp_object.animcycle_id = "report_hand";
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
"!tunic.historicalsociety.entry.groupconvo",
]];

if(tmp_object.ww < 0) { tmp_object.ww *= -1; tmp_object.flip = 1; }
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_object.view_overlay_animcycle_inst = gen_animcycle_inst(tmp_object.view_overlay_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_object.raw_notification_ws[i] ? tmp_object.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "closeup";
tmp_view.fqid = "tunic.historicalsociety.entry.report.closeup";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "report";
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
tmp_observation = new observation();
tmp_observation.id = "block_tocollection";
tmp_observation.fqid = "tunic.historicalsociety.entry.block_tocollection";
{
tmp_observation.ww = 196.07267950860955;
tmp_observation.wh = 611.3061610015612;
tmp_observation.wx = -943.5797447030692;
tmp_observation.wy = 38.091179253882046;
tmp_observation.wz = 1;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I should see what Grampa is up to!";
tmp_observation.blip_wx = -854.9690446686695;
tmp_observation.blip_wy = 228.6486546252998;
tmp_observation.blip_w = 154;
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
"!tunic.historicalsociety.entry.groupconvo",
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
tmp_observation.id = "block_tomap1";
tmp_observation.fqid = "tunic.historicalsociety.entry.block_tomap1";
{
tmp_observation.ww = 224.87620708397372;
tmp_observation.wh = 623.2132295249676;
tmp_observation.wx = 932.2124428494194;
tmp_observation.wy = 82.61398091566662;
tmp_observation.wz = 2;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I should see what Gramps is up to!";
tmp_observation.blip_wx = 514.2486023506824;
tmp_observation.blip_wy = 241.29371071991753;
tmp_observation.blip_w = 160;
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
"!tunic.historicalsociety.entry.groupconvo",
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
tmp_observation.id = "block_tomap2";
tmp_observation.fqid = "tunic.historicalsociety.entry.block_tomap2";
{
tmp_observation.ww = 211.2842557213455;
tmp_observation.wh = 608.0459522137528;
tmp_observation.wx = 933.0382886267373;
tmp_observation.wy = 82.74899867824627;
tmp_observation.wz = 1;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I should talk to Gramps in the collection!";
tmp_observation.blip_wx = 416.0839371996251;
tmp_observation.blip_wy = 230.30721467924008;
tmp_observation.blip_w = 213;
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
"!tunic.historicalsociety.collection.gramps.found",
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = -371;
tmp_porthole.target_start_wy = -48.000000000000014;
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
tmp_porthole = new porthole();
tmp_porthole.id = "tocollection";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tocollection";
{
tmp_porthole.ww = 175.90807997877943;
tmp_porthole.wh = 559.8494539709426;
tmp_porthole.wx = -940.6694207088169;
tmp_porthole.wy = 26.292612746742293;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 7.948666912035332;
tmp_porthole.act_wy = -130.13163636363635;
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
tmp_porthole.target_room = "collection";
tmp_porthole.target_start_wx = 621.9243073212195;
tmp_porthole.target_start_wy = -136.7670926438998;
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
"!tunic.capitol.hall.chap2_finale_c",
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tocollectionflag";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tocollectionflag";
{
tmp_porthole.ww = 175.90807997877943;
tmp_porthole.wh = 559.8494539709426;
tmp_porthole.wx = -940.6694207088169;
tmp_porthole.wy = 26.292612746742293;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 7.948666912035332;
tmp_porthole.act_wy = -130.13163636363635;
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
tmp_porthole.target_room = "collection_flag";
tmp_porthole.target_start_wx = 621.9243073212195;
tmp_porthole.target_start_wy = -136.7670926438998;
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
"tunic.capitol.hall.chap2_finale_c",
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tomap";
{
tmp_porthole.ww = 200.8052913823572;
tmp_porthole.wh = 595.6530910614567;
tmp_porthole.wx = 933.5624009371168;
tmp_porthole.wy = 82.07800314346377;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "map";
tmp_porthole.target_start_wx = -440;
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
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
"tunic.historicalsociety.collection",
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 5;
tmp_room.nav_max_wz = 10;
tmp_room.navs = [
{wx:-38.3504355536046, wy:-202, ww:821.0001785495492, wh:223.99999999999997 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 44.502020905923295;
tmp_room.target_start_wy = -171.6;
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
tmp_person.id = "archivist";
tmp_person.fqid = "tunic.historicalsociety.frontdesk.archivist";
{
tmp_person.ww = 97.00000021581084;
tmp_person.wh = 239.99999999999997;
tmp_person.wx = -40.503201494310744;
tmp_person.wy = 8.848222996515759;
tmp_person.wz = 3;
tmp_person.act_wx = 142.59470153053064;
tmp_person.act_wy = -49.00000000000001;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 57.99999921833438;
tmp_person.hover_icon_wy = 127;
tmp_person.animcycle_id = "archivist";
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
"!tunic.historicalsociety.cage",
],[
"tunic.library.frontdesk.worker.flag",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "confrontation";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.confrontation";
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
"tunic.library.frontdesk.worker.flag",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -1.999992820339159;
tmp_speak_command.wy = 249.99999999999991;
tmp_speak_command.w = 190;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Ahhgh! What are you doing here?!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -1.999992820339159;
tmp_speak_command.wy = 249.99999999999991;
tmp_speak_command.w = 190;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I swear, I haven't gone anywhere near your badger.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -5.9999719670758935;
tmp_speak_command.wy = 187.9999999999999;
tmp_speak_command.w = 161;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I said I was sorry!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139.00000000079967;
tmp_speak_command.wy = 101.99999999999996;
tmp_speak_command.w = 212;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Relax. We're just looking for information.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 135.00000000000003;
tmp_speak_command.wy = 105.99999999999999;
tmp_speak_command.w = 235;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm solving a case for the Wisconsin Wonders exhibit!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.0000000000000142;
tmp_speak_command.wy = 210.99999999999997;
tmp_speak_command.w = 352;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wait a minute...YOU'RE that new history detective everybody's talking about?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 134.00000000000006;
tmp_speak_command.wy = 77.99999999999999;
tmp_speak_command.w = 115;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Looks like it!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.00000000000003;
tmp_speak_command.wy = 132.99999999999994;
tmp_speak_command.w = 193;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I need info on Governor Nelson and the first Earth Day.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -10.999999999999964;
tmp_speak_command.wy = 184.99999999999997;
tmp_speak_command.w = 85;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Bah. Fine.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.00000000000003;
tmp_speak_command.wy = 130.99999999999997;
tmp_speak_command.w = 275;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wow! All those people gathered at the Capitol to stand up for what they believed in....";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139;
tmp_speak_command.wy = 112.99999999999996;
tmp_speak_command.w = 190;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "A clean and beautiful world for everyone!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139;
tmp_speak_command.wy = 112.99999999999996;
tmp_speak_command.w = 162;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Including badgers, by the way.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -2.9999999999999645;
tmp_speak_command.wy = 217.99999999999997;
tmp_speak_command.w = 261;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You know, kid, you're actually pretty good at this.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139;
tmp_speak_command.wy = 74;
tmp_speak_command.w = 65;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Thanks.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -0.9999999999999716;
tmp_speak_command.wy = 245.99999999999997;
tmp_speak_command.w = 380;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Recently, I helped some folks set up an Earth Day exhibit over at Governor Nelson State Park. I think you might like it.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139;
tmp_speak_command.wy = 112.99999999999996;
tmp_speak_command.w = 268;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wait a minute...I've heard of Governor Nelson State Park!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139;
tmp_speak_command.wy = 112.99999999999996;
tmp_speak_command.w = 193;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It's right down the street from my house!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "have_glass";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.have_glass";
{
tmp_speak.primary = 97;
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
"tunic.historicalsociety.frontdesk.magnify",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -252.80243921974392;
tmp_speak_command.wy = 214;
tmp_speak_command.w = 198;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Now that's better! Did you have a question?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 141.21338690716152;
tmp_speak_command.wy = 106.99999999999996;
tmp_speak_command.w = 96;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yes! I was wondering-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 137.21338890847773;
tmp_speak_command.wy = 81.99999999999997;
tmp_speak_command.w = 128;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wait a minute!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 136.21338890847767;
tmp_speak_command.wy = 110.99999999999999;
tmp_speak_command.w = 148;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Where did you get that coffee?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -188.7866110915223;
tmp_speak_command.wy = 211.99999999999997;
tmp_speak_command.w = 133;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Oh, that's from Bean Town.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -250.7866110915223;
tmp_speak_command.wy = 211.99999999999997;
tmp_speak_command.w = 194;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I just ran into Wells there this morning.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 136.21338890847767;
tmp_speak_command.wy = 75.99999999999997;
tmp_speak_command.w = 145;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wells? I knew it!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -228.78661109152225;
tmp_speak_command.wy = 216.99999999999997;
tmp_speak_command.w = 171;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Knew what? Did you need something?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 140.21338890847773;
tmp_speak_command.wy = 108;
tmp_speak_command.w = 104;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Nevermind! I mean-yes!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 140.21338890847773;
tmp_speak_command.wy = 105.99999999999999;
tmp_speak_command.w = 188;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found this slip on an old shirt artifact.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 136.21338890847773;
tmp_speak_command.wy = 110.99999999999999;
tmp_speak_command.w = 113;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you know what it is?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -204.99999999999994;
tmp_speak_command.wy = 217;
tmp_speak_command.w = 149;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "archivist";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "An old shirt? Try the university.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -245.99999999999997;
tmp_speak_command.wy = 211.99999999999997;
tmp_speak_command.w = 190;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "archivist";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You can talk to a clothes expert there.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139.21338890847767;
tmp_speak_command.wy = 106.99999999999996;
tmp_speak_command.w = 131;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Great! Thanks for the help!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hello";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.hello";
{
tmp_speak.primary = 100;
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
"!tunic.historicalsociety.frontdesk.archivist.hello",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 136.95006768956975;
tmp_speak_command.wy = 80.99999999999997;
tmp_speak_command.w = 149;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I need your help!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -216.8690788942334;
tmp_speak_command.wy = 178.99999999999997;
tmp_speak_command.w = 163;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "*grumble grumble*";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -169.86907889616415;
tmp_speak_command.wy = 181.99999999999997;
tmp_speak_command.w = 123;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "And you are?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139;
tmp_speak_command.wy = 78.99999999999996;
tmp_speak_command.w = 201;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm Leopold's grandkid!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -167.00005928433905;
tmp_speak_command.wy = 209.99999999999997;
tmp_speak_command.w = 115;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I don't have time for kids.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -306.0000000000001;
tmp_speak_command.wy = 211.99999999999994;
tmp_speak_command.w = 251;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Now if only I could read this thing. Blasted tiny letters...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "need_glass_0";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.need_glass_0";
{
tmp_speak.primary = 99;
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
"!tunic.historicalsociety.frontdesk.magnify",
"!tunic.historicalsociety.frontdesk.archivist.need_glass_0",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -340.93676496422404;
tmp_speak_command.wy = 218.99999999999997;
tmp_speak_command.w = 287;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Blasted tiny letters. Can't believe I lost my reading glasses...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "need_glass_1";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.need_glass_1";
{
tmp_speak.primary = 98;
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
"!tunic.historicalsociety.frontdesk.magnify",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -296.00000000403656;
tmp_speak_command.wy = 208.00000000000003;
tmp_speak_command.w = 238;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I used to have a magnifying glass around here…";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "newspaper";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.newspaper";
{
tmp_speak.primary = 99;
tmp_speak.options_wx = 210.5;
tmp_speak.options_wy = 16.999999999999986;
tmp_speak.options_w = 161;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.library.microfiche.reader.paper2.bingo",
"!self",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.50015099757877;
tmp_speak_command.wy = 83.99999999999999;
tmp_speak_command.w = 178;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I need to find Wells!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -5.499999999998813;
tmp_speak_command.wy = 213.00000000000003;
tmp_speak_command.w = 197;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Sheesh, calm down. No need to make a scene.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 136.50000000000003;
tmp_speak_command.wy = 111.99999999999999;
tmp_speak_command.w = 196;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "YOU calm down. Wells stole my badger!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 131.5;
tmp_speak_command.wy = 110.99999999999999;
tmp_speak_command.w = 178;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I won't stop fighting until he's safe!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -5.499999999999986;
tmp_speak_command.wy = 213.00000000000003;
tmp_speak_command.w = 195;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You? You're just one kid. What can you do?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 133.5;
tmp_speak_command.wy = 77.99999999999999;
tmp_speak_command.w = 53;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "A lot!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 135.50000000000006;
tmp_speak_command.wy = 137;
tmp_speak_command.w = 241;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Look at Theodora Youmans. She was just one lady, but she changed the world!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -6.50000000000005;
tmp_speak_command.wy = 187;
tmp_speak_command.w = 338;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Youmans? Is that who owned the shirt?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 135.50000000000006;
tmp_speak_command.wy = 77.99999999999999;
tmp_speak_command.w = 38;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yep!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -3.5000000000000426;
tmp_speak_command.wy = 189.99999999999997;
tmp_speak_command.w = 246;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wow, why didn't you say so?!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -2.5000000000000284;
tmp_speak_command.wy = 250;
tmp_speak_command.w = 370;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Youmans was a super important suffragist here in Wisconsin. She had a big part in getting support for women's rights!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -2.5000000000000284;
tmp_speak_command.wy = 240.99999999999997;
tmp_speak_command.w = 316;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Thanks to her, Wisconsin became the first state to sign a women's rights bill, right at our own Capitol.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.50000000000017;
tmp_speak_command.wy = 106.00000000000003;
tmp_speak_command.w = 269;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "HA! I bet she didn't listen when people told her to calm down.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -4.4999999999999645;
tmp_speak_command.wy = 216;
tmp_speak_command.w = 367;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmmph. Anyway, there's more info in the Stacks. Here's a call number you can use.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 134.5;
tmp_speak_command.wy = 81.00000000000004;
tmp_speak_command.w = 200;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Where are the Stacks?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 2.4999999999999716;
tmp_speak_command.wy = 175.00000000000003;
tmp_speak_command.w = 204;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Right outside the door.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "recap";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.recap";
{
tmp_speak.primary = 92;
tmp_speak.options_wx = 210.5;
tmp_speak.options_wy = 16.999999999999986;
tmp_speak.options_w = 161;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"tunic.library.microfiche.reader.paper2.bingo",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 3.500000000000007;
tmp_speak_command.wy = 212.00000000000006;
tmp_speak_command.w = 268;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You should check the Stacks. They're right outside the door.";
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
tmp_observation.id = "block_magnify";
tmp_observation.fqid = "tunic.historicalsociety.frontdesk.block_magnify";
{
tmp_observation.ww = 62.888153383271515;
tmp_observation.wh = 46.99999999999998;
tmp_observation.wx = 211.44491589985643;
tmp_observation.wy = 174.5;
tmp_observation.wz = 0;
tmp_observation.act_wx = 46.05760183637142;
tmp_observation.act_wy = -266;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 1.4860235930383396;
tmp_observation.hover_icon_wy = 30.999999999999996;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I don't need that right now.";
tmp_observation.blip_wx = 308.97395854447853;
tmp_observation.blip_wy = 78.99999999999996;
tmp_observation.blip_w = 163;
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
"!tunic.historicalsociety.frontdesk.archivist.hello",
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
tmp_observation.id = "key";
tmp_observation.fqid = "tunic.historicalsociety.frontdesk.key";
{
tmp_observation.ww = 50.146372131457355;
tmp_observation.wh = 35.99999999999997;
tmp_observation.wx = -38.920739017895244;
tmp_observation.wy = -20;
tmp_observation.wz = 4.9;
tmp_observation.act_wx = 78.74262753650089;
tmp_observation.act_wy = -130;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = -0.19702019410135563;
tmp_observation.hover_icon_wy = 32;
tmp_observation.animcycle_id = "key";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "This must be the key for Teddy's cage!";
tmp_observation.blip_wx = -98.95000486866414;
tmp_observation.blip_wy = 107;
tmp_observation.blip_w = 185;
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
"tunic.historicalsociety.cage",
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
tmp_observation = new observation();
tmp_observation.id = "magnify";
tmp_observation.fqid = "tunic.historicalsociety.frontdesk.magnify";
{
tmp_observation.ww = 50.146372131457355;
tmp_observation.wh = 35.99999999999997;
tmp_observation.wx = 213.07926091128468;
tmp_observation.wy = 174;
tmp_observation.wz = 0;
tmp_observation.act_wx = 45.74081256558395;
tmp_observation.act_wy = -264;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = -0.19702019410135563;
tmp_observation.hover_icon_wy = 32;
tmp_observation.animcycle_id = "magnifyingglass";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I bet the archivist could use this!";
tmp_observation.blip_wx = 268.1565178623663;
tmp_observation.blip_wy = 86.99999999999997;
tmp_observation.blip_w = 160;
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
"tunic.historicalsociety.collection.tunic.slip",
"!tunic.historicalsociety.frontdesk.magnify",
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 65.24595080983798;
tmp_porthole.target_start_wy = 110.4;
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
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.chair";
{
tmp_inert.ww = 244.99997814818758;
tmp_inert.wh = 235;
tmp_inert.wx = -364.28238232986445;
tmp_inert.wy = -29.2233449477352;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "frontdesk_chair";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "coffee";
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.coffee";
{
tmp_inert.ww = 49.99999999999998;
tmp_inert.wh = 56.999999999999986;
tmp_inert.wx = -108.00000000000004;
tmp_inert.wy = -12.500000000000036;
tmp_inert.wz = 4.9;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "coffeecupup";
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
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.desk";
{
tmp_inert.ww = 423.94524295076604;
tmp_inert.wh = 241.7588850174216;
tmp_inert.wx = -17.657155158539638;
tmp_inert.wy = -51.879442508710795;
tmp_inert.wz = 4;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "frontdesk";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "deskchair";
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.deskchair";
{
tmp_inert.ww = 148.99999873531505;
tmp_inert.wh = 148.99999999999997;
tmp_inert.wx = -53.500053019559175;
tmp_inert.wy = 1.500000000000071;
tmp_inert.wz = 2;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "frontdesk_deskchair";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgoffice";
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.fgoffice";
{
tmp_inert.ww = 996.8776306620208;
tmp_inert.wh = 130.055331010453;
tmp_inert.wx = -37.96991189093427;
tmp_inert.wy = -264.43477351916385;
tmp_inert.wz = 999;
tmp_inert.g = 0.1;
tmp_inert.animcycle_id = "fgoffice";
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
tmp_room.id = "secret";
tmp_room.fqid = "tunic.historicalsociety.secret";
{
tmp_room.primary = false;
tmp_room.ww = 1280;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "secret_bg";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:0.5000000000000568, wy:-54.5, ww:761, wh:252.99999999999997 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
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
tmp_inert = new inert();
tmp_inert.id = "fg";
tmp_inert.fqid = "tunic.historicalsociety.secret.fg";
{
tmp_inert.ww = 100;
tmp_inert.wh = 100;
tmp_inert.wx = 356.00000000000006;
tmp_inert.wy = 174;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "secret_fg";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fuzzy";
tmp_inert.fqid = "tunic.historicalsociety.secret.fuzzy";
{
tmp_inert.ww = 100;
tmp_inert.wh = 100;
tmp_inert.wx = 237.00000000000003;
tmp_inert.wy = 167;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "fuzzy";
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
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-5.677623339535728, wy:-192.46889622075565, ww:562.2493101379723, wh:431.4884823035393 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 43.06232753449308;
tmp_room.target_start_wy = -44.39999999999998;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.053030303030303

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "journals";
tmp_object.fqid = "tunic.historicalsociety.stacks.journals";
{
tmp_object.ww = 68.97395230899636;
tmp_object.wh = 110.99211147207005;
tmp_object.wx = 335.6818376810318;
tmp_object.wy = 132.10402224800836;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = -0.09659067927304932;
tmp_object.hover_icon_wy = 47.03587341510541;
tmp_object.animcycle_id = "journals";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.notice_icon_animcycle_id = "null";
tmp_object.view_overlay_animcycle_id = "clueoverlay_stacks";
tmp_object.audio_id = "null";
tmp_object.deck_animcycle_ids = [
];
tmp_object.notifications_persistent = 1;
tmp_object.raw_notifications = [
"I need to find more info about Theodora!",
];
tmp_object.raw_notification_ws = [
];
tmp_object.notification_reqs = [[
]];
tmp_object.view_overlay_reqs = [[
"!tunic.historicalsociety.stacks.journals.pic_0",
]];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.newspaper",
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
tmp_view.fqid = "tunic.historicalsociety.stacks.journals.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "journals_front";
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
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "topics";
tmp_zone.fqid = "tunic.historicalsociety.stacks.journals.hub.topics";
{
tmp_zone.ww = 36;
tmp_zone.wh = 283;
tmp_zone.wx = 141.99999999999997;
tmp_zone.wy = -6.500000000000057;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "pic_0";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "pic_0";
tmp_view.fqid = "tunic.historicalsociety.stacks.journals.pic_0";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "journals_pic_0";
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
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.historicalsociety.stacks.journals.pic_0.next";
{
tmp_zone.ww = 32.99999999999998;
tmp_zone.wh = 33.99999999999999;
tmp_zone.wx = 361.50000000000006;
tmp_zone.wy = -75.99999999999997;
tmp_zone.animcycle_id = "nextarrow";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "pic_1";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "pic_1";
tmp_view.fqid = "tunic.historicalsociety.stacks.journals.pic_1";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "journals_pic_1";
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
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.historicalsociety.stacks.journals.pic_1.next";
{
tmp_zone.ww = 32.99999999999998;
tmp_zone.wh = 33.99999999999999;
tmp_zone.wx = 361.50000000000006;
tmp_zone.wy = -75.99999999999997;
tmp_zone.animcycle_id = "nextarrow";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "pic_2";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "pic_2";
tmp_view.fqid = "tunic.historicalsociety.stacks.journals.pic_2";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "journals_pic_2";
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
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "bingo";
tmp_zone.fqid = "tunic.historicalsociety.stacks.journals.pic_2.bingo";
{
tmp_zone.ww = 107;
tmp_zone.wh = 156;
tmp_zone.wx = -176.4999999999999;
tmp_zone.wy = -158;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "pic_2";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"Hey, this is Youmans!",
"And look! She's wearing the shirt!",
"I should go to the Capitol and tell everyone!",
];
tmp_zone.raw_notification_ws = [
0,
295,
230,
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.historicalsociety.stacks.journals.pic_2.next";
{
tmp_zone.ww = 32.99999999999998;
tmp_zone.wh = 33.99999999999999;
tmp_zone.wx = 361.50000000000006;
tmp_zone.wy = -75.99999999999997;
tmp_zone.animcycle_id = "nextarrow";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "pic_0";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
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
tmp_observation.id = "block";
tmp_observation.fqid = "tunic.historicalsociety.stacks.block";
{
tmp_observation.ww = 854.2781582558621;
tmp_observation.wh = 120.40190566783012;
tmp_observation.wx = 7.039776538646265;
tmp_observation.wy = -291.28650670282127;
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
tmp_observation.raw_text = "The archivist said I should look in the stacks.";
tmp_observation.blip_wx = 58.46382852368461;
tmp_observation.blip_wy = -56.114534801898216;
tmp_observation.blip_w = 229;
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
"tunic.historicalsociety.frontdesk.archivist.newspaper",
"!tunic.historicalsociety.stacks.journals.pic_2.bingo",
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
tmp_observation.id = "outtolunch";
tmp_observation.fqid = "tunic.historicalsociety.stacks.outtolunch";
{
tmp_observation.ww = 142.9978654532935;
tmp_observation.wh = 265.00005213259567;
tmp_observation.wx = -8.17981401021953;
tmp_observation.wy = 110.48339672352805;
tmp_observation.wz = 0;
tmp_observation.act_wx = 41.00000000693774;
tmp_observation.act_wy = -90;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 6.004597013486318;
tmp_observation.hover_icon_wy = 25;
tmp_observation.animcycle_id = "outtolunch";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "\"Out To Lunch\"- better check back later.";
tmp_observation.blip_wx = 79.80582133754872;
tmp_observation.blip_wy = 235.0047667573491;
tmp_observation.blip_w = 143;
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
"!tunic.historicalsociety.closet_dirty",
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 270.2744446093198;
tmp_porthole.target_start_wy = -60.01625878934189;
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
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.historicalsociety.stacks.tofrontdesk";
{
tmp_porthole.ww = 129.79363060052737;
tmp_porthole.wh = 254.63611277744448;
tmp_porthole.wx = -8.39496634340773;
tmp_porthole.wy = 110.41307738452319;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 40.524595080989855;
tmp_porthole.act_wy = -88.20000000000002;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 6.619240448664982;
tmp_porthole.hover_icon_wy = 27;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 46.15024390243908;
tmp_porthole.target_start_wy = -296.40000000000003;
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
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "outtolunch";
tmp_inert.fqid = "tunic.historicalsociety.stacks.outtolunch";
{
tmp_inert.ww = 100;
tmp_inert.wh = 100;
tmp_inert.wx = 97.99987088839856;
tmp_inert.wy = 100.99990167162798;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "null";
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
tmp_scene.id = "humanecology";
tmp_scene.fqid = "tunic.humanecology";
{
tmp_scene.primary = false;
tmp_scene.ww = 175.99999999999997;
tmp_scene.wh = 121.00000000000011;
tmp_scene.wx = -12.000000000000028;
tmp_scene.wy = -136.50000000000003;
tmp_scene.hover_icon_wx = 34;
tmp_scene.hover_icon_wy = 34;
tmp_scene.animcycle_id = "scene_humanecology";
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
"tunic.historicalsociety.frontdesk.archivist.have_glass",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.humanecology.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 1500;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_humanecology_frontdesk";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 1;
tmp_room.nav_max_wz = 9;
tmp_room.navs = [
{wx:158.4109366061021, wy:-237.9999999999999, ww:851.3912812235366, wh:115.99999999999994 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 443.3278918589005;
tmp_room.target_start_wy = -177.99999999999997;
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
tmp_person.fqid = "tunic.humanecology.frontdesk.worker";
{
tmp_person.ww = 158.1362046610845;
tmp_person.wh = 286.00000000000006;
tmp_person.wx = -243.38601940974914;
tmp_person.wy = -73.19999999999995;
tmp_person.wz = 3;
tmp_person.act_wx = 201.17807825439044;
tmp_person.act_wy = -83.99999999999999;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 62.245058672949405;
tmp_person.hover_icon_wy = 132;
tmp_person.animcycle_id = "ecologist";
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
tmp_speak.id = "badger1";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.badger1";
{
tmp_speak.primary = 97;
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
tmp_speak_command.wx = -4.192187716309636;
tmp_speak_command.wy = 24.000000000000007;
tmp_speak_command.w = 259;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You haven't seen any badgers around here, have you?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -196.00035021560979;
tmp_speak_command.wy = 172.99999999999997;
tmp_speak_command.w = 297;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Badgers? No. But there are rumors that the museum's got one on the loose! Exciting, isn't it?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -17.000000000495753;
tmp_speak_command.wy = -4.999999999999996;
tmp_speak_command.w = 190;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yeah. Thanks anyway.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro1";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro1";
{
tmp_speak.primary = 100;
tmp_speak.options_wx = -74.2007221987254;
tmp_speak.options_wy = 77.99999999999999;
tmp_speak.options_w = 295;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"!tunic.humanecology.frontdesk.worker.intro1",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -266.7710457893429;
tmp_speak_command.wy = 180;
tmp_speak_command.w = 248;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "How lovely, a visitor! Would you care for some tea?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next1";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro1.next1";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Well, maybe one cup, but I need to ask you something first.";
tmp_option.target_speak = "intro2";
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
tmp_option.id = "next2";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro1.next2";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I'm sort of in a hurry.";
tmp_option.target_speak = "intro2";
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
tmp_speak.id = "intro2";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro2";
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
tmp_speak_command.wx = -281.0000000122775;
tmp_speak_command.wy = 143;
tmp_speak_command.w = 257;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Oh, all right. How can I help?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -86.00000000013301;
tmp_speak_command.wy = 31.000000000000018;
tmp_speak_command.w = 265;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you know what this slip is?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -189.00004236100068;
tmp_speak_command.wy = 122.00000000000006;
tmp_speak_command.w = 302;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Looks like a dry cleaning receipt.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.9999999925591005;
tmp_speak_command.wy = 48.000000000000014;
tmp_speak_command.w = 247;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I need to find all the cleaners that were around in 1916! Can you help me?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -180.0000000173391;
tmp_speak_command.wy = 186.00000000000006;
tmp_speak_command.w = 247;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Certainly! I've got a file of dry cleaners on the table. Take a look!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
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
tmp_object.id = "businesscards";
tmp_object.fqid = "tunic.humanecology.frontdesk.businesscards";
{
tmp_object.ww = 48.06871334920727;
tmp_object.wh = 29.00000000000004;
tmp_object.wx = 469.7215046736234;
tmp_object.wy = -51.50000000000015;
tmp_object.wz = 0;
tmp_object.act_wx = -42.239844649089264;
tmp_object.act_wy = -18;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = -0.29508815856570436;
tmp_object.hover_icon_wy = 36;
tmp_object.animcycle_id = "businesscards";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "null";
tmp_object.notice_icon_animcycle_id = "null";
tmp_object.view_overlay_animcycle_id = "clueoverlay_logbook";
tmp_object.audio_id = "null";
tmp_object.deck_animcycle_ids = [
];
tmp_object.notifications_persistent = 1;
tmp_object.raw_notifications = [
"Which one might know something about this slip?",
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
"tunic.humanecology.frontdesk.worker.intro2",
]];

if(tmp_object.ww < 0) { tmp_object.ww *= -1; tmp_object.flip = 1; }
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_object.view_overlay_animcycle_inst = gen_animcycle_inst(tmp_object.view_overlay_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_object.raw_notification_ws[i] ? tmp_object.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "card_0";
tmp_view.fqid = "tunic.humanecology.frontdesk.businesscards.card_0";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "cleaner_card_0";
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
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.humanecology.frontdesk.businesscards.card_0.next";
{
tmp_zone.ww = 39.99999999999998;
tmp_zone.wh = 42.99999999999999;
tmp_zone.wx = 336.00000000000006;
tmp_zone.wy = 3.4999999999999076;
tmp_zone.animcycle_id = "nextarrow";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "card_1";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "card_1";
tmp_view.fqid = "tunic.humanecology.frontdesk.businesscards.card_1";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "cleaner_card_1";
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
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.humanecology.frontdesk.businesscards.card_1.next";
{
tmp_zone.ww = 41.99999999999998;
tmp_zone.wh = 43.000000000000014;
tmp_zone.wx = 335.99999999999994;
tmp_zone.wy = 3.499999999999897;
tmp_zone.animcycle_id = "nextarrow";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "card_bingo";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "card_bingo";
tmp_view.fqid = "tunic.humanecology.frontdesk.businesscards.card_bingo";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "cleaner_card_bingo";
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
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "bingo";
tmp_zone.fqid = "tunic.humanecology.frontdesk.businesscards.card_bingo.bingo";
{
tmp_zone.ww = 177.99999999999994;
tmp_zone.wh = 77.00000000000003;
tmp_zone.wx = -63.00000000000003;
tmp_zone.wy = -137.5000000000001;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "card_bingo";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"This is the only dry cleaner that was around in 1916!",
];
tmp_zone.raw_notification_ws = [
205,
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
"!tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.humanecology.frontdesk.businesscards.card_bingo.next";
{
tmp_zone.ww = 42.99999999999998;
tmp_zone.wh = 43;
tmp_zone.wx = 336.49999999999994;
tmp_zone.wy = 4.499999999999876;
tmp_zone.animcycle_id = "nextarrow";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "card_0";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
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
tmp_observation.fqid = "tunic.humanecology.frontdesk.block_0";
{
tmp_observation.ww = 130.63116961782663;
tmp_observation.wh = 321.5717405175473;
tmp_observation.wx = 676.28482501416;
tmp_observation.wy = -47.68070187876661;
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
tmp_observation.raw_text = "I have a feeling there's a clue to be found in here...";
tmp_observation.blip_wx = 300.84173327858684;
tmp_observation.blip_wy = -11.000000000000034;
tmp_observation.blip_w = 231;
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
"!tunic.humanecology.frontdesk.businesscards",
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
tmp_observation.fqid = "tunic.humanecology.frontdesk.block_1";
{
tmp_observation.ww = 218.99991917704818;
tmp_observation.wh = 324;
tmp_observation.wx = 723.4999536838183;
tmp_observation.wy = -48;
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
tmp_observation.raw_text = "I wonder if there's a clue in those business cards...";
tmp_observation.blip_wx = 196.99999999999994;
tmp_observation.blip_wy = 126.99999999999997;
tmp_observation.blip_w = 219;
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
"!tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
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
tmp_porthole.id = "tohallway";
tmp_porthole.fqid = "tunic.humanecology.frontdesk.tohallway";
{
tmp_porthole.ww = 65.11587760538475;
tmp_porthole.wh = 314.19999999999993;
tmp_porthole.wx = 654.2427243035245;
tmp_porthole.wy = -48.29999999999981;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "hallway";
tmp_porthole.target_start_wx = 440;
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
tmp_inert.id = "fgtextile";
tmp_inert.fqid = "tunic.humanecology.frontdesk.fgtextile";
{
tmp_inert.ww = 248.00000000000003;
tmp_inert.wh = 169.99999999999991;
tmp_inert.wx = -159.72357885626178;
tmp_inert.wy = -322.99999999999994;
tmp_inert.wz = 5;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "fgtextile";
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
tmp_scene.id = "kohlcenter";
tmp_scene.fqid = "tunic.kohlcenter";
{
tmp_scene.primary = false;
tmp_scene.ww = 203;
tmp_scene.wh = 120.99999999999994;
tmp_scene.wx = 255.50000000000003;
tmp_scene.wy = 107.5;
tmp_scene.hover_icon_wx = 33;
tmp_scene.hover_icon_wy = 25;
tmp_scene.animcycle_id = "scene_kohlcenter";
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
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-3.7451113105665854, wy:-132.89674896634952, ww:1755.747656813266, wh:240.4149242970439 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -850.6470185633716;
tmp_room.target_start_wy = -92.52184571016575;
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
tmp_cutscene = new cutscene();
tmp_cutscene.id = "togrampa";
tmp_cutscene.fqid = "tunic.kohlcenter.halloffame.togrampa";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 100;
tmp_cutscene.wh = 100;
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
"tunic.kohlcenter.halloffame.plaque.face.date",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 319;
tmp_cutscene_command.wy = 170.99999999999997;
tmp_cutscene_command.w = 207;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Our shirt is too old to be a basketball jersey!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 385;
tmp_cutscene_command.wy = 196.99999999999991;
tmp_cutscene_command.w = 139;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I need to get to the Capitol and tell Gramps!";
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
tmp_object = new object();
tmp_object.id = "plaque";
tmp_object.fqid = "tunic.kohlcenter.halloffame.plaque";
{
tmp_object.ww = 98.15753142028846;
tmp_object.wh = 64.99999999999997;
tmp_object.wx = 676.6810968540632;
tmp_object.wy = 85.50000000000004;
tmp_object.wz = 0;
tmp_object.act_wx = -116.20669261312605;
tmp_object.act_wy = -107.00000000000003;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 35.33503385781535;
tmp_object.hover_icon_wy = 29.99999999999997;
tmp_object.animcycle_id = "plaque";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.notice_icon_animcycle_id = "notice";
tmp_object.view_overlay_animcycle_id = "clueoverlay_logbook";
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
"!tunic.kohlcenter.halloffame.plaque.face.date",
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
tmp_view.id = "face";
tmp_view.fqid = "tunic.kohlcenter.halloffame.plaque.face";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "plaque_face";
tmp_view.magnify = false;
tmp_view.audio_id = "null";
tmp_view.deck_animcycle_ids = [
];
tmp_view.notifications_persistent = 1;
tmp_view.raw_notifications = [
"Anything useful on here?",
];
tmp_view.raw_notification_ws = [
230,
];
tmp_view.notification_reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
]];
tmp_view.exit_reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "date";
tmp_zone.fqid = "tunic.kohlcenter.halloffame.plaque.face.date";
{
tmp_zone.ww = 152;
tmp_zone.wh = 40.99999999999997;
tmp_zone.wx = 9.000000000000014;
tmp_zone.wy = -84.49999999999996;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "face";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"That's it!",
"The slip says 1916 but the team didn't start until 1974!",
];
tmp_zone.raw_notification_ws = [
84,
252,
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
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
tmp_observation.fqid = "tunic.kohlcenter.halloffame.block_0";
{
tmp_observation.ww = 179.89570795874226;
tmp_observation.wh = 377.1382369818872;
tmp_observation.wx = -913.6767947265421;
tmp_observation.wy = 36.3331077203774;
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
tmp_observation.raw_text = "Grandpa said to look for clues. Better look around.";
tmp_observation.blip_wx = -818.3862029221006;
tmp_observation.blip_wy = 176.3533393169813;
tmp_observation.blip_w = 181;
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
"!tunic.kohlcenter.halloffame.plaque.face",
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
tmp_observation.fqid = "tunic.kohlcenter.halloffame.block_1";
{
tmp_observation.ww = 177.3989670850315;
tmp_observation.wh = 372.14475523446595;
tmp_observation.wx = -914.9251651633972;
tmp_observation.wy = 36.3331077203774;
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
tmp_observation.raw_text = "Maybe I should take a closer look at that plaque...";
tmp_observation.blip_wx = -821.981718409314;
tmp_observation.blip_wy = 161.28815679119526;
tmp_observation.blip_w = 254;
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
"!tunic.kohlcenter.halloffame.plaque.face.date",
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
tmp_porthole.fqid = "tunic.kohlcenter.halloffame.toentry";
{
tmp_porthole.ww = 155.0789473684213;
tmp_porthole.wh = 359.6461427541456;
tmp_porthole.wx = -915.649423215573;
tmp_porthole.wy = 39.26568132660435;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 38.92645998558038;
tmp_porthole.act_wy = -91.75522710886806;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = -5.560922855082912;
tmp_porthole.hover_icon_wy = 139.02307137707282;
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
tmp_inert = new inert();
tmp_inert.id = "fgcans";
tmp_inert.fqid = "tunic.kohlcenter.halloffame.fgcans";
{
tmp_inert.ww = 1543.9276391066314;
tmp_inert.wh = 194.56092285508296;
tmp_inert.wx = 148.60545925747454;
tmp_inert.wy = -234.91167988464292;
tmp_inert.wz = 5;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "fgcans";
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
tmp_scene.id = "library";
tmp_scene.fqid = "tunic.library";
{
tmp_scene.primary = false;
tmp_scene.ww = 140;
tmp_scene.wh = 121.00000000000007;
tmp_scene.wx = -113;
tmp_scene.wy = 31.500000000000007;
tmp_scene.hover_icon_wx = 47;
tmp_scene.hover_icon_wy = 38;
tmp_scene.animcycle_id = "scene_library";
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
"tunic.drycleaner.frontdesk.worker.done",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.library.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 2000;
tmp_room.wh = 880;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_library_frontdesk";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 860;
tmp_room.nav_min_wz = 11;
tmp_room.nav_max_wz = 20;
tmp_room.navs = [
{wx:-49.471606682383594, wy:-123.60355294095385, ww:1540.8093726827826, wh:244.5454545454547 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -747.5492172000397;
tmp_room.target_start_wy = -11.572982721124806;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.3333333333333333

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "block_badge";
tmp_cutscene.fqid = "tunic.library.frontdesk.block_badge";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 136.51146018325016;
tmp_cutscene.wh = 307.1814585388915;
tmp_cutscene.wx = -817.6726551302843;
tmp_cutscene.wy = 61.53682925262612;
tmp_cutscene.wz = 0;
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
"tunic.library.microfiche.reader.paper2.bingo",
"!tunic.library.frontdesk.wellsbadge.hub",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "worker";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -482.31296969696956;
tmp_cutscene_command.wy = 389.0275359181116;
tmp_cutscene_command.w = 333;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Did you drop something, Dear? There's something on the floor over there.";
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
tmp_person.id = "cleaner";
tmp_person.fqid = "tunic.library.frontdesk.cleaner";
{
tmp_person.ww = 167.75757575757578;
tmp_person.wh = 229;
tmp_person.wx = 67.42424242424222;
tmp_person.wy = -191.2272727272727;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "null";
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
"tunic.flaghouse.entry.flag_girl.symbol",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "blog";
tmp_speak.fqid = "tunic.library.frontdesk.cleaner.blog";
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
tmp_speak_command.wx = 120.6723342209441;
tmp_speak_command.wy = 2.2567593736019056;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hey, Jo!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 255.0608306400568;
tmp_speak_command.wy = -43.33333651562691;
tmp_speak_command.w = 141;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hi! What are you doing here?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 123.45454549354449;
tmp_speak_command.wy = 45.27272727217467;
tmp_speak_command.w = 142;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Just writing up a new blog post.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 122.15151515151513;
tmp_speak_command.wy = 38.75757575757569;
tmp_speak_command.w = 137;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I ran into your gramps earlier!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 275.909090909091;
tmp_speak_command.wy = -42.030303030303095;
tmp_speak_command.w = 129;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What?! Where?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 122.15151515151513;
tmp_speak_command.wy = 38.75757575757569;
tmp_speak_command.w = 125;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "He stopped by the cleaners.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 320.2121212121212;
tmp_speak_command.wy = -60.27272727272736;
tmp_speak_command.w = 113;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's odd...";
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
tmp_person.id = "worker";
tmp_person.fqid = "tunic.library.frontdesk.worker";
{
tmp_person.ww = 105.68675753746182;
tmp_person.wh = 262.4975461528268;
tmp_person.wx = -394.55944433774135;
tmp_person.wy = 139.61035410702456;
tmp_person.wz = 9;
tmp_person.act_wx = 87.38662316476346;
tmp_person.act_wy = -56.4;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 64.62729385380858;
tmp_person.hover_icon_wy = 143.3360981848623;
tmp_person.animcycle_id = "librarian";
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
tmp_speak.id = "droppedbadge";
tmp_speak.fqid = "tunic.library.frontdesk.worker.droppedbadge";
{
tmp_speak.primary = 98;
tmp_speak.options_wx = -279.9644806234643;
tmp_speak.options_wy = 299.0676710642626;
tmp_speak.options_w = 257;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"!tunic.library.frontdesk.wellsbadge.hub",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -454.0552430446311;
tmp_speak_command.wy = 396.038988652927;
tmp_speak_command.w = 338.00000181982193;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Did you drop something, dear? There's a card on the floor over there.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "flag";
tmp_speak.fqid = "tunic.library.frontdesk.worker.flag";
{
tmp_speak.primary = 998;
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
tmp_speak_command.wx = -362.79737285836677;
tmp_speak_command.wy = 382.75918034084367;
tmp_speak_command.w = 181;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Welcome back, Dear! How can I help you?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -267.44928251976086;
tmp_speak_command.wy = 223.7878810780139;
tmp_speak_command.w = 222;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I need to investigate this flag for the new exhibit.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -267.44930459447244;
tmp_speak_command.wy = 223.78788106840824;
tmp_speak_command.w = 159;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It has to do with ecology!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -361.272727259171;
tmp_speak_command.wy = 374.9393939393999;
tmp_speak_command.w = 396;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, let's see...since the flag was found in the Capitol, it must be related to Wisconsin.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -361.27272726267495;
tmp_speak_command.wy = 374.93939393939837;
tmp_speak_command.w = 351;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Why don't you search the microfiche for Wisconsin's three great ecologists? ";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -361.27272726267495;
tmp_speak_command.wy = 374.93939393939837;
tmp_speak_command.w = 188;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Here, I'll write down their names for you.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hello";
tmp_speak.fqid = "tunic.library.frontdesk.worker.hello";
{
tmp_speak.primary = 100;
tmp_speak.options_wx = -279.9644806234643;
tmp_speak.options_wy = 299.0676710642626;
tmp_speak.options_w = 257;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"!tunic.library.frontdesk.worker.hello",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -361.02743385165303;
tmp_speak_command.wy = 342.6184844564415;
tmp_speak_command.w = 145.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Oh, hello there!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -357.06324101725846;
tmp_speak_command.wy = 377.79656441794396;
tmp_speak_command.w = 178.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You look like you're on a mission.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -269.7602212437762;
tmp_speak_command.wy = 216.22080973015267;
tmp_speak_command.w = 176.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yep! I'm a detective. Well...sort of.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -272.3662712106053;
tmp_speak_command.wy = 224.0389886529271;
tmp_speak_command.w = 207.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you have any info on Theodora Youmans?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -366.1844530287872;
tmp_speak_command.wy = 347.8268674408058;
tmp_speak_command.w = 187.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Youmans? Of course!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -366.1844530287872;
tmp_speak_command.wy = 383.008685622624;
tmp_speak_command.w = 254.00000181982193;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Check out our microfiche. It's right through that door.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hello_short";
tmp_speak.fqid = "tunic.library.frontdesk.worker.hello_short";
{
tmp_speak.primary = 99;
tmp_speak.options_wx = -279.9644806234643;
tmp_speak.options_wy = 299.0676710642626;
tmp_speak.options_w = 257;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
"!tunic.library.microfiche.reader.paper2.bingo",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -366.1844530287872;
tmp_speak_command.wy = 381.7056553195937;
tmp_speak_command.w = 228.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Theodora Youmans? Check out our microfiche.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "nelson";
tmp_speak.fqid = "tunic.library.frontdesk.worker.nelson";
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
"tunic.library.microfiche.reader_flag.paper2.bingo",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -271.3933402557868;
tmp_speak_command.wy = 260.2728804945012;
tmp_speak_command.w = 155;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I found the flag! It was used for the first Earth Day!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -271.3933402557868;
tmp_speak_command.wy = 260.2728804945012;
tmp_speak_command.w = 155;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you know where I could find more photos for the exhibit?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -363.87878787880834;
tmp_speak_command.wy = 377.54545454545473;
tmp_speak_command.w = 384;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Try the archives. They've got everything!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -363.87878787880834;
tmp_speak_command.wy = 377.54545454545473;
tmp_speak_command.w = 384;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Though sometimes the archivist is too busy to help...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -266.1515151515152;
tmp_speak_command.wy = 221.1818181818182;
tmp_speak_command.w = 125;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Oh, trust me. He'll make time.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "wells";
tmp_speak.fqid = "tunic.library.frontdesk.worker.wells";
{
tmp_speak.primary = 97;
tmp_speak.options_wx = -279.9644806234643;
tmp_speak.options_wy = 299.0676710642626;
tmp_speak.options_w = 257;
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
tmp_speak_command.wx = -272.4367540364369;
tmp_speak_command.wy = 184.956749281008;
tmp_speak_command.w = 244.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What was Wells doing here?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -364.88192908397593;
tmp_speak_command.wy = 380.4026276008483;
tmp_speak_command.w = 292.00000181982193;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "He was looking for a taxidermist. Seemed rather stressed out.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -271.0632409075751;
tmp_speak_command.wy = 222.73595834989672;
tmp_speak_command.w = 129.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "A taxidermist? What's that?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -363.57839242272655;
tmp_speak_command.wy = 346.5238371377755;
tmp_speak_command.w = 203.00000181982193;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Here, let me look it up.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -363.57839242272655;
tmp_speak_command.wy = 376.49353410747244;
tmp_speak_command.w = 374.00000181982193;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "\"Taxidermy: the art of preparing, stuffing, and mounting the skins of animals.\"";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -271.0632409075751;
tmp_speak_command.wy = 183.64504925898763;
tmp_speak_command.w = 126.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Oh no...Teddy!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -269.7602106045448;
tmp_speak_command.wy = 222.73595834989672;
tmp_speak_command.w = 206.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I need to find Wells. Do you know where he is?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -362.27536211969624;
tmp_speak_command.wy = 380.4026250165634;
tmp_speak_command.w = 249.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I think he's friends with the archivist. You could try him.";
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
tmp_object.id = "wellsbadge";
tmp_object.fqid = "tunic.library.frontdesk.wellsbadge";
{
tmp_object.ww = 58.30303030303185;
tmp_object.wh = 58.303030303030226;
tmp_object.wx = 141.69970711135423;
tmp_object.wy = -98.06060740243169;
tmp_object.wz = 0;
tmp_object.act_wx = -83.76453090423374;
tmp_object.act_wy = 16.963975610653243;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 1.4114559390665895;
tmp_object.hover_icon_wy = -10.422278413943884;
tmp_object.animcycle_id = "wellsbadge_small";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "null";
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
"tunic.library.microfiche.reader.paper2.bingo",
"!tunic.library.frontdesk.wellsbadge.hub",
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
tmp_view.fqid = "tunic.library.frontdesk.wellsbadge.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "wellsbadge_big";
tmp_view.magnify = false;
tmp_view.audio_id = "null";
tmp_view.deck_animcycle_ids = [
];
tmp_view.notifications_persistent = 0;
tmp_view.raw_notifications = [
"Wells! What was he doing here? I should ask the librarian.",
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
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.library.frontdesk.toentry";
{
tmp_porthole.ww = 125.62444016016623;
tmp_porthole.wh = 297.8606060606061;
tmp_porthole.wx = -832.7030623846754;
tmp_porthole.wy = 75.32115027829337;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 37.33446388760615;
tmp_porthole.act_wy = -58.61065359013933;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = -1.4150713002254032;
tmp_porthole.hover_icon_wy = 93.82247002882595;
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
tmp_porthole = new porthole();
tmp_porthole.id = "tomicrofiche";
tmp_porthole.fqid = "tunic.library.frontdesk.tomicrofiche";
{
tmp_porthole.ww = 126.25234069899643;
tmp_porthole.wh = 260.1818181818182;
tmp_porthole.wx = 615.561021306046;
tmp_porthole.wy = 172.1333333333333;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -43;
tmp_porthole.act_wy = -40.39393939393939;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 3.9732208439734737;
tmp_porthole.hover_icon_wy = 11.72690542289878;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "microfiche";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
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
"tunic.library.frontdesk.worker.hello",
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "desk";
tmp_inert.fqid = "tunic.library.frontdesk.desk";
{
tmp_inert.ww = 618.0298311330639;
tmp_inert.wh = 231.72727272727278;
tmp_inert.wx = -234.2300028128559;
tmp_inert.wy = 40.95474068806867;
tmp_inert.wz = 10;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "librarydesk";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "deskchair";
tmp_inert.fqid = "tunic.library.frontdesk.deskchair";
{
tmp_inert.ww = 158.45454814781772;
tmp_inert.wh = 150.18181818181802;
tmp_inert.wx = -388.4754381038839;
tmp_inert.wy = 134.6285018169531;
tmp_inert.wz = 8;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "librarydeskchair";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgdesks";
tmp_inert.fqid = "tunic.library.frontdesk.fgdesks";
{
tmp_inert.ww = 1663.0390033943024;
tmp_inert.wh = 455.9523950763754;
tmp_inert.wx = -29.65615832614992;
tmp_inert.wy = -354.617775909883;
tmp_inert.wz = 999;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "libraryfg";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "scanner";
tmp_inert.fqid = "tunic.library.frontdesk.scanner";
{
tmp_inert.ww = 128.57055136868345;
tmp_inert.wh = 272.0909090909091;
tmp_inert.wx = -832.0926377360481;
tmp_inert.wy = -57.75781798408241;
tmp_inert.wz = 15;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "libraryscanner";
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
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 4;
tmp_room.nav_max_wz = 10;
tmp_room.navs = [
{wx:10.504266621348336, wy:-164, ww:566.00666856617, wh:338 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -22.989826129018468;
tmp_room.target_start_wy = -293;
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
tmp_object = new object();
tmp_object.id = "reader";
tmp_object.fqid = "tunic.library.microfiche.reader";
{
tmp_object.ww = 188;
tmp_object.wh = 218;
tmp_object.wx = -21.000000000000057;
tmp_object.wy = 164;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "null";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "null";
tmp_object.notice_icon_animcycle_id = "null";
tmp_object.view_overlay_animcycle_id = "clueoverlay_microfiche";
tmp_object.audio_id = "null";
tmp_object.deck_animcycle_ids = [
];
tmp_object.notifications_persistent = 1;
tmp_object.raw_notifications = [
"Where are you, Theodora?",
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
"!tunic.flaghouse.entry.colorbook",
]];

if(tmp_object.ww < 0) { tmp_object.ww *= -1; tmp_object.flip = 1; }
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_object.view_overlay_animcycle_inst = gen_animcycle_inst(tmp_object.view_overlay_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_object.raw_notification_ws[i] ? tmp_object.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "paper0";
tmp_view.fqid = "tunic.library.microfiche.reader.paper0";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "microficheframe1";
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
"tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper0.next";
{
tmp_zone.ww = 47.99999999999998;
tmp_zone.wh = 50.00000000000003;
tmp_zone.wx = 33.00000000000011;
tmp_zone.wy = -224;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper1";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "prev";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper0.prev";
{
tmp_zone.ww = 54.99999999999998;
tmp_zone.wh = 49.000000000000114;
tmp_zone.wx = -25.500000000000025;
tmp_zone.wy = -223.50000000000006;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper2";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "paper1";
tmp_view.fqid = "tunic.library.microfiche.reader.paper1";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "microficheframe2";
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
"tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper1.next";
{
tmp_zone.ww = 54.99999999999998;
tmp_zone.wh = 42.000000000000014;
tmp_zone.wx = 32.500000000000036;
tmp_zone.wy = -224.00000000000009;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper2";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "prev";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper1.prev";
{
tmp_zone.ww = 54.99999999999998;
tmp_zone.wh = 42.000000000000014;
tmp_zone.wx = -27.50000000000001;
tmp_zone.wy = -222.99999999999997;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper0";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "paper2";
tmp_view.fqid = "tunic.library.microfiche.reader.paper2";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "microficheframe3";
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
"tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "bingo";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper2.bingo";
{
tmp_zone.ww = 159.99999999999997;
tmp_zone.wh = 56.999999999999986;
tmp_zone.wx = -238;
tmp_zone.wy = -103.5;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper2";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"Wow! Youmans was an important suffragist?!",
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
"!tunic.library.microfiche.reader.paper2.bingo",
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper2.next";
{
tmp_zone.ww = 51.99999999999998;
tmp_zone.wh = 42.000000000000014;
tmp_zone.wx = 36.00000000000018;
tmp_zone.wy = -222.00000000000009;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper0";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "prev";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper2.prev";
{
tmp_zone.ww = 50.99999999999998;
tmp_zone.wh = 42.000000000000014;
tmp_zone.wx = -24.500000000000018;
tmp_zone.wy = -222.00000000000009;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper1";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_object = new object();
tmp_object.id = "reader_flag";
tmp_object.fqid = "tunic.library.microfiche.reader_flag";
{
tmp_object.ww = 188;
tmp_object.wh = 218;
tmp_object.wx = -21.000000000000057;
tmp_object.wy = 164;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "null";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "null";
tmp_object.notice_icon_animcycle_id = "null";
tmp_object.view_overlay_animcycle_id = "clueoverlay_microfiche";
tmp_object.audio_id = "null";
tmp_object.deck_animcycle_ids = [
];
tmp_object.notifications_persistent = 1;
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
"tunic.flaghouse.entry.colorbook",
]];

if(tmp_object.ww < 0) { tmp_object.ww *= -1; tmp_object.flip = 1; }
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_object.view_overlay_animcycle_inst = gen_animcycle_inst(tmp_object.view_overlay_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_object.raw_notification_ws[i] ? tmp_object.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "paper0";
tmp_view.fqid = "tunic.library.microfiche.reader_flag.paper0";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "microficheframe1";
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
"tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.library.microfiche.reader_flag.paper0.next";
{
tmp_zone.ww = 47.99999999999998;
tmp_zone.wh = 50.00000000000003;
tmp_zone.wx = 33.00000000000011;
tmp_zone.wy = -224;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper1";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "prev";
tmp_zone.fqid = "tunic.library.microfiche.reader_flag.paper0.prev";
{
tmp_zone.ww = 54.99999999999998;
tmp_zone.wh = 49.000000000000114;
tmp_zone.wx = -25.500000000000025;
tmp_zone.wy = -223.50000000000006;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper2";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "paper1";
tmp_view.fqid = "tunic.library.microfiche.reader_flag.paper1";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "microficheframe2";
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
"tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.library.microfiche.reader_flag.paper1.next";
{
tmp_zone.ww = 54.99999999999998;
tmp_zone.wh = 42.000000000000014;
tmp_zone.wx = 32.500000000000036;
tmp_zone.wy = -224.00000000000009;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper2";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "prev";
tmp_zone.fqid = "tunic.library.microfiche.reader_flag.paper1.prev";
{
tmp_zone.ww = 54.99999999999998;
tmp_zone.wh = 42.000000000000014;
tmp_zone.wx = -27.50000000000001;
tmp_zone.wy = -222.99999999999997;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper0";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "paper2";
tmp_view.fqid = "tunic.library.microfiche.reader_flag.paper2";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "microficheframe3";
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
"tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "bingo";
tmp_zone.fqid = "tunic.library.microfiche.reader_flag.paper2.bingo";
{
tmp_zone.ww = 159.99999999999997;
tmp_zone.wh = 56.999999999999986;
tmp_zone.wx = -238;
tmp_zone.wy = -103.5;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper2";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"Wow! Youmans was an important suffragist!",
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
"!self",
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.library.microfiche.reader_flag.paper2.next";
{
tmp_zone.ww = 51.99999999999998;
tmp_zone.wh = 42.000000000000014;
tmp_zone.wx = 36.00000000000018;
tmp_zone.wy = -222.00000000000009;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper0";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "prev";
tmp_zone.fqid = "tunic.library.microfiche.reader_flag.paper2.prev";
{
tmp_zone.ww = 50.99999999999998;
tmp_zone.wh = 42.000000000000014;
tmp_zone.wx = -24.500000000000018;
tmp_zone.wy = -222.00000000000009;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "paper1";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
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
tmp_observation.fqid = "tunic.library.microfiche.block_0";
{
tmp_observation.ww = 787.9814463622783;
tmp_observation.wh = 88.00000000000003;
tmp_observation.wx = 6.922210675034194;
tmp_observation.wy = -281.00000000000006;
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
tmp_observation.raw_text = "The libarian said I could find some information on Youmans in here...";
tmp_observation.blip_wx = -340.8884327562052;
tmp_observation.blip_wy = -92;
tmp_observation.blip_w = 301;
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
"!tunic.library.microfiche.reader.paper2.bingo",
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
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.library.microfiche.tofrontdesk";
{
tmp_porthole.ww = 755;
tmp_porthole.wh = 86;
tmp_porthole.wx = 10.5;
tmp_porthole.wy = -282;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 5.502011283149329;
tmp_porthole.act_wy = -10;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = -17.991937588692508;
tmp_porthole.hover_icon_wy = -7;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 566.6043398295117;
tmp_porthole.target_start_wy = 33.70785839485907;
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
tmp_inert.fqid = "tunic.library.microfiche.chair";
{
tmp_inert.ww = 195.00000001659674;
tmp_inert.wh = 199.99999999999997;
tmp_inert.wx = -251.2611670970259;
tmp_inert.wy = -10.000000000000071;
tmp_inert.wz = 1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "microfichechair";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgboxes";
tmp_inert.fqid = "tunic.library.microfiche.fgboxes";
{
tmp_inert.ww = 901.0000000000001;
tmp_inert.wh = 300.00000000000006;
tmp_inert.wx = -7.126003385900219;
tmp_inert.wy = -217.0000000000001;
tmp_inert.wz = 999;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "microfichefg";
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
tmp_scene.id = "nelson";
tmp_scene.fqid = "tunic.nelson";
{
tmp_scene.primary = false;
tmp_scene.ww = 217;
tmp_scene.wh = 204;
tmp_scene.wx = -329.49999999999994;
tmp_scene.wy = 224.00000000000006;
tmp_scene.hover_icon_wx = 14.999999999999998;
tmp_scene.hover_icon_wy = -12;
tmp_scene.animcycle_id = "scene_nelson";
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
]];
tmp_scene.reqs = [[
"tunic.historicalsociety.frontdesk.archivist.confrontation",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "trail";
tmp_room.fqid = "tunic.nelson.trail";
{
tmp_room.primary = false;
tmp_room.ww = 3750;
tmp_room.wh = 680;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_nelson_trail";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 4;
tmp_room.nav_max_wz = 4;
tmp_room.navs = [
{wx:-55.96590909090969, wy:-160.7954545454549, ww:3756.2500000000005, wh:89.77272727272725 },
];
tmp_room.lights = [
{wx:-794.886363636364, wy:565.3409090909091, ww:100, wh:100 },
];
tmp_room.shadows = [
{wx:-528.9772727272737, wy:585.7954545454545, ww:100, wh:100 },
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = -1667.0454545454547;
tmp_room.target_start_wy = -153.40909090909076;
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
tmp_person.id = "hiker";
tmp_person.fqid = "tunic.nelson.trail.hiker";
{
tmp_person.ww = 220;
tmp_person.wh = 327.00000000000006;
tmp_person.wx = -273;
tmp_person.wy = 56.50000000000003;
tmp_person.wz = 0;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "hiker";
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
tmp_speak.id = "question";
tmp_speak.fqid = "tunic.nelson.trail.hiker.question";
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
tmp_speak_command.wx = -193.11230706587446;
tmp_speak_command.wy = 285.00045839871905;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wow, a wild badger!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -229.99983244829588;
tmp_speak_command.wy = 77.99999999999999;
tmp_speak_command.w = 264;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you know where I can find the Governor Nelson exhibit?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -187.00000000000006;
tmp_speak_command.wy = 274;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "It's just up the trail!";
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
tmp_object.id = "sign";
tmp_object.fqid = "tunic.nelson.trail.sign";
{
tmp_object.ww = 284.0909090909092;
tmp_object.wh = 171.5909090909091;
tmp_object.wx = 1335.3863636363635;
tmp_object.wy = -13;
tmp_object.wz = 0;
tmp_object.act_wx = -184.0909090909091;
tmp_object.act_wy = -61.36363636363636;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = -178.97727272727272;
tmp_object.hover_icon_wy = -71.5909090909091;
tmp_object.animcycle_id = "nelson_sign";
tmp_object.hover_cursor_animcycle_id = "null";
tmp_object.hover_icon_animcycle_id = "null";
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
tmp_view.id = "view";
tmp_view.fqid = "tunic.nelson.trail.sign.view";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "nelson_sign_closeup";
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
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.nelson.trail.tomap";
{
tmp_porthole.ww = 686;
tmp_porthole.wh = 102.99999999999999;
tmp_porthole.wx = -7;
tmp_porthole.wy = -177.5;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "null";
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
tmp_inert.id = "city";
tmp_inert.fqid = "tunic.nelson.trail.city";
{
tmp_inert.ww = 1470.454545454546;
tmp_inert.wh = 212.50000000000003;
tmp_inert.wx = -1138.0456765419779;
tmp_inert.wy = 289.25000000003985;
tmp_inert.wz = 1;
tmp_inert.g = -0.8;
tmp_inert.animcycle_id = "scene_trail_city";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "lake";
tmp_inert.fqid = "tunic.nelson.trail.lake";
{
tmp_inert.ww = 1731.2499999999998;
tmp_inert.wh = 452.84090909090935;
tmp_inert.wx = -1060.9431818181815;
tmp_inert.wy = 44.988636363636715;
tmp_inert.wz = 0;
tmp_inert.g = -0.5;
tmp_inert.animcycle_id = "scene_trail_lake";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "midground";
tmp_inert.fqid = "tunic.nelson.trail.midground";
{
tmp_inert.ww = 3878.9772727272725;
tmp_inert.wh = 682.9545454545454;
tmp_inert.wx = -71.27033296445802;
tmp_inert.wy = -10.727272725669593;
tmp_inert.wz = 3;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "scene_trail_midground";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "sun";
tmp_inert.fqid = "tunic.nelson.trail.sun";
{
tmp_inert.ww = 314.77272727272685;
tmp_inert.wh = 4804.545454545458;
tmp_inert.wx = -1286.681818181819;
tmp_inert.wy = -3055.1590909090937;
tmp_inert.wz = 2;
tmp_inert.g = -2.25;
tmp_inert.animcycle_id = "scene_trail_sun";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "trees";
tmp_inert.fqid = "tunic.nelson.trail.trees";
{
tmp_inert.ww = 3838.068181818182;
tmp_inert.wh = 703.4090909090916;
tmp_inert.wx = 30.605305192243804;
tmp_inert.wy = -9.977833941245024;
tmp_inert.wz = 5;
tmp_inert.g = 0.5;
tmp_inert.animcycle_id = "scene_trail_trees";
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
tmp_scene.id = "wildlife";
tmp_scene.fqid = "tunic.wildlife";
{
tmp_scene.primary = false;
tmp_scene.ww = 214;
tmp_scene.wh = 220.00000000000009;
tmp_scene.wx = 328;
tmp_scene.wy = -211.99999999999997;
tmp_scene.hover_icon_wx = 48;
tmp_scene.hover_icon_wy = 35;
tmp_scene.animcycle_id = "scene_wildlife";
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
]];
tmp_scene.reqs = [[
"tunic.historicalsociety.entry.groupconvo_flag",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "center";
tmp_room.fqid = "tunic.wildlife.center";
{
tmp_room.primary = false;
tmp_room.ww = 1904;
tmp_room.wh = 800;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_wildlife_center";
tmp_room.audio_id = "null";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:4.609310433339033, wy:-178.29490619824008, ww:1360.2939313115037, wh:233.3446002146894 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = 26.315106467137145;
tmp_room.target_start_wy = -323.84962243484233;
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
tmp_person = new person();
tmp_person.id = "expert";
tmp_person.fqid = "tunic.wildlife.center.expert";
{
tmp_person.ww = 101.99999999999994;
tmp_person.wh = 300.99999999999994;
tmp_person.wx = 594.27996708303;
tmp_person.wy = 9.245004717330175;
tmp_person.wz = 0;
tmp_person.act_wx = -126.35538090967611;
tmp_person.act_wy = -56;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 64.3060045848083;
tmp_person.hover_icon_wy = 144.0000000032444;
tmp_person.animcycle_id = "wildlife_expert";
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
"!self",
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
tmp_speak.id = "gps";
tmp_speak.fqid = "tunic.wildlife.center.expert.gps";
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
tmp_speak_command.wx = 303.4835090379581;
tmp_speak_command.wy = 132.48872197250236;
tmp_speak_command.w = 133;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hey! Can I ask you something?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 378.00028644460053;
tmp_speak_command.wy = 237.0002641517355;
tmp_speak_command.w = 176;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Sorry. Gotta help this crane get free!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 451.00000003396246;
tmp_speak_command.wy = 241.00000002541688;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "She won't hold still.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 321.0000000000362;
tmp_speak_command.wy = 132.00000000003752;
tmp_speak_command.w = 109;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Poor crane. Can I help?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 375.0000000000173;
tmp_speak_command.wy = 263.99999999999727;
tmp_speak_command.w = 181;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Sure! I'll hold her steady. You get that coffee cup off.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 402.00000000001734;
tmp_speak_command.wy = 238.99999999999724;
tmp_speak_command.w = 153;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Easy now...that beak is sharp!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 401.99999999999994;
tmp_speak_command.wy = 235;
tmp_speak_command.w = 154;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Nice work, kid. You're a natural.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 411.99999999999994;
tmp_speak_command.wy = 234.00000000000003;
tmp_speak_command.w = 145;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What did you want to ask me?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 293;
tmp_speak_command.wy = 127.00000000000003;
tmp_speak_command.w = 141;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I'm investigating this symbol.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 319;
tmp_speak_command.wy = 137.00000000000006;
tmp_speak_command.w = 114;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you think it could be a deer hoof?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 319;
tmp_speak_command.wy = 243;
tmp_speak_command.w = 231;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "There's a diagram of animal tracks over there.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 414.99999999999994;
tmp_speak_command.wy = 214;
tmp_speak_command.w = 143;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Go take a look!";
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
tmp_person.id = "fox";
tmp_person.fqid = "tunic.wildlife.center.fox";
{
tmp_person.ww = 100;
tmp_person.wh = 100;
tmp_person.wx = -390.74518308573863;
tmp_person.wy = 38.654258493068795;
tmp_person.wz = 0;
tmp_person.act_wx = 97.31637532143606;
tmp_person.act_wy = -37.0096457755983;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 32.02862065587664;
tmp_person.hover_icon_wy = 32.00000001990486;
tmp_person.animcycle_id = "wildlife_fox";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "null";
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
tmp_speak.id = "concern";
tmp_speak.fqid = "tunic.wildlife.center.fox.concern";
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
tmp_speak_command.wx = -257.00729835097417;
tmp_speak_command.wy = 103.00013711938395;
tmp_speak_command.w = 189;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What is it, Teddy?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -264.00000060364835;
tmp_speak_command.wy = 164.00000000013873;
tmp_speak_command.w = 168;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Oh no! She got sick from polluted water?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -264.00000060364835;
tmp_speak_command.wy = 164.00000000013873;
tmp_speak_command.w = 168;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "That's not fair. How can she survive if she doesn't even have clean drinking water?!";
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
tmp_person.fqid = "tunic.wildlife.center.wells";
{
tmp_person.ww = 115.00000000000001;
tmp_person.wh = 251;
tmp_person.wx = -418.89992449650987;
tmp_person.wy = -162.6999919264683;
tmp_person.wz = 0;
tmp_person.act_wx = 149;
tmp_person.act_wy = -48;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 44;
tmp_person.hover_icon_wy = 123.99999999999999;
tmp_person.animcycle_id = "youngboy";
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
"!self",
],[
"tunic.wildlife.center.tracks.hub.deer",
"!tunic.wildlife.center.wells.nodeer",
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
tmp_speak.id = "animals";
tmp_speak.fqid = "tunic.wildlife.center.wells.animals";
{
tmp_speak.primary = 3;
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
tmp_speak_command.wx = -391.61300956271316;
tmp_speak_command.wy = 22.740317394125135;
tmp_speak_command.w = 222;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Gah. What am I gonna do?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -229.1687109553855;
tmp_speak_command.wy = -48.006982970650185;
tmp_speak_command.w = 130;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What's wrong?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -387.00000027019576;
tmp_speak_command.wy = 48.00000001707836;
tmp_speak_command.w = 229;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I can't cart these animals off to the exhibit...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -389.000000000158;
tmp_speak_command.wy = 45.99999999999345;
tmp_speak_command.w = 203;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "They need to stay here and get better.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -230.16871095538554;
tmp_speak_command.wy = -19.006982970650185;
tmp_speak_command.w = 169;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Wow...I'm surprised you actually care!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -389.000000000158;
tmp_speak_command.wy = 45.99999999999345;
tmp_speak_command.w = 209;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Trust me, kid. Nobody's more surprised than me.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "animals2";
tmp_speak.fqid = "tunic.wildlife.center.wells.animals2";
{
tmp_speak.primary = 2;
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
"!tunic.wildlife.center.tracks.hub.deer",
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -352.00488418042227;
tmp_speak_command.wy = 192.999791039704;
tmp_speak_command.w = 230;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Aren't you supposed to be investigating or something?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "nodeer";
tmp_speak.fqid = "tunic.wildlife.center.wells.nodeer";
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
tmp_speak_command.wx = -390.8509137556976;
tmp_speak_command.wy = 45.82962400397426;
tmp_speak_command.w = 116;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What'd you find out, kid?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -232.07246154800092;
tmp_speak_command.wy = -23.000993583044192;
tmp_speak_command.w = 145;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Looks like it's not a deer hoof.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -390.0000011528821;
tmp_speak_command.wy = 45.999999984439825;
tmp_speak_command.w = 295;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Great. Just great. I might as well start packing up my desk now.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -240;
tmp_speak_command.wy = -38.99999999999998;
tmp_speak_command.w = 110;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hey Wells...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -236;
tmp_speak_command.wy = -20.999999999999975;
tmp_speak_command.w = 272;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What if I could find you a real, live badger for the exhibit?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -385;
tmp_speak_command.wy = 45.000000000000014;
tmp_speak_command.w = 208;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "What?! You better not be messing with me, kid...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -243.99999999999997;
tmp_speak_command.wy = -7.9999999999999645;
tmp_speak_command.w = 183;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "No, it's for real! Mr. Wells, meet Teddy.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -239.99999999999994;
tmp_speak_command.wy = -3.9999999999999716;
tmp_speak_command.w = 318;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "He eats papers sometimes, but he's super cute and he's great with kids.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -386;
tmp_speak_command.wy = 20.00000000000003;
tmp_speak_command.w = 140;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Yes!!! I'm saved!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -388;
tmp_speak_command.wy = 21.000000000000043;
tmp_speak_command.w = 162;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I owe you big-time!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -233.99999999999997;
tmp_speak_command.wy = -8.999999999999972;
tmp_speak_command.w = 210;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, there IS one thing you could help me with.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -235;
tmp_speak_command.wy = -15.999999999999979;
tmp_speak_command.w = 173;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "I need to solve the flag artifact.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -232;
tmp_speak_command.wy = -15.999999999999979;
tmp_speak_command.w = 182;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Do you know anyone who could help?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -381;
tmp_speak_command.wy = 20.00000000000003;
tmp_speak_command.w = 40;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Hmm....";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -386;
tmp_speak_command.wy = 80.00000000000003;
tmp_speak_command.w = 233;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Come to think of it, I went to school with somebody who LOVES old flags.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -386;
tmp_speak_command.wy = 45.000000000000014;
tmp_speak_command.w = 242;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Why don't you stop by? I'll let her know you're coming.";
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
tmp_object.id = "tracks";
tmp_object.fqid = "tunic.wildlife.center.tracks";
{
tmp_object.ww = 120.0015280149588;
tmp_object.wh = 171.00027154561744;
tmp_object.wx = 731.120208006767;
tmp_object.wy = 39.65630318267593;
tmp_object.wz = 0;
tmp_object.act_wx = -52.99999921473716;
tmp_object.act_wy = -56.00000006357243;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 48.36492123624521;
tmp_object.hover_icon_wy = 54.80854321652794;
tmp_object.animcycle_id = "tracks";
tmp_object.hover_cursor_animcycle_id = "null";
tmp_object.hover_icon_animcycle_id = "null";
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
"tunic.wildlife.center.expert.gps",
"!tunic.wildlife.center.tracks.hub.deer",
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
tmp_view.fqid = "tunic.wildlife.center.tracks.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "tracks_closeup";
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
tmp_zone = new zone();
tmp_zone.id = "deer";
tmp_zone.fqid = "tunic.wildlife.center.tracks.hub.deer";
{
tmp_zone.ww = 100;
tmp_zone.wh = 100;
tmp_zone.wx = 266;
tmp_zone.wy = -18.999999999999982;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "hub";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"That hoofprint doesn't match the flag!",
];
tmp_zone.raw_notification_ws = [
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
"tunic.wildlife.center.expert.gps",
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
tmp_observation.id = "coffee";
tmp_observation.fqid = "tunic.wildlife.center.coffee";
{
tmp_observation.ww = 77;
tmp_observation.wh = 63.99999999999998;
tmp_observation.wx = -309.1469603753192;
tmp_observation.wy = -286.02420280220167;
tmp_observation.wz = 0;
tmp_observation.act_wx = 75.90405352161179;
tmp_observation.act_wy = 63.66740252919851;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 22.724907948520354;
tmp_observation.hover_icon_wy = 21.140178688894366;
tmp_observation.animcycle_id = "coffeecup";
tmp_observation.hover_cursor_animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "Ugh. People need to pick up their trash!";
tmp_observation.blip_wx = -175.72877913878364;
tmp_observation.blip_wy = -81.2000214835279;
tmp_observation.blip_w = 176;
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
"!self",
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
tmp_porthole.fqid = "tunic.wildlife.center.tomap";
{
tmp_porthole.ww = 980.3599999999998;
tmp_porthole.wh = 157.13818181818178;
tmp_porthole.wx = 30.164382938801282;
tmp_porthole.wy = -389.5193107185638;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "null";
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

