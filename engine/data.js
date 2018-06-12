
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
tmp_level.avatar_ww = 124.29142744197551;
tmp_level.avatar_wh = 227.18935293838604;
tmp_level.familiar_walk_animcycle_id = "teddy_walk";
tmp_level.familiar_idle_animcycle_id = "teddy_idle";
tmp_level.familiar_act_animcycle_id = "teddy_idle";
tmp_level.familiar_ww = 153;
tmp_level.familiar_wh = 120;
tmp_level.familiar_off_wx = 0;
tmp_level.familiar_off_wy = -20;
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
