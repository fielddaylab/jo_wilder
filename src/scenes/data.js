
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
tmp_level.cursor_w = 27;
tmp_level.cursor_h = 31;
tmp_level.hover_w = 65;
tmp_level.hover_h = 56;
tmp_level.notifications_w = 200;
tmp_level.notifications_h = 30;
tmp_level.target_lerp_s = 0.03;
tmp_level.raw_notifications = [
];
tmp_level.reqs = [[
]];
tmp_level.notebook_reqs = [[
"tunic.historicalsociety.closet.notebook",
]];
tmp_level.map_reqs = [[
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner_card_0/0.jpg");
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner_card_1/0.jpg");
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner_card_bingo/0.jpg");
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
tmp_animcycle.id = "entry_javajacket";
tmp_animcycle.fqid = "tunic.entry_javajacket";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_javajacket/enty_javajacket.png");
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
tmp_animcycle.id = "enty_javajacket";
tmp_animcycle.fqid = "tunic.enty_javajacket";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/enty_javajacket/0.png");
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe1/4.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe1/5.jpg");
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe2/4.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe2/5.jpg");
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
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe3/4.jpg");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/microficheframe3/5.jpg");
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
tmp_entry.id = "entry_archivistcoffee";
tmp_entry.fqid = "tunic.entry_archivistcoffee";
{
tmp_entry.ww = 348;
tmp_entry.wh = 182.00000000000003;
tmp_entry.wx = -191;
tmp_entry.wy = 50.000000000000014;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_archivistcoffee_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_2.coffee",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_basketballplaque";
tmp_entry.fqid = "tunic.entry_basketballplaque";
{
tmp_entry.ww = 314;
tmp_entry.wh = 162.99999999999997;
tmp_entry.wx = -182.0000000000001;
tmp_entry.wy = 205.5;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_basketballplaque_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_cleanercard";
tmp_entry.fqid = "tunic.entry_cleanercard";
{
tmp_entry.ww = 366.0000000000001;
tmp_entry.wh = 148.00000000000003;
tmp_entry.wx = 183;
tmp_entry.wy = 104.00000000000007;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_cleanercard_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_cleanerslip";
tmp_entry.fqid = "tunic.entry_cleanerslip";
{
tmp_entry.ww = 313;
tmp_entry.wh = 118.99999999999997;
tmp_entry.wx = 183.50000000000023;
tmp_entry.wy = 29.499999999999886;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_cleanerslip_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.collection.tunic.slip",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_exhibition";
tmp_entry.fqid = "tunic.entry_exhibition";
{
tmp_entry.ww = 348;
tmp_entry.wh = 182.00000000000003;
tmp_entry.wx = -185;
tmp_entry.wy = 21.999999999999986;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_exhibition_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.entry.groupconvo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_javajacket";
tmp_entry.fqid = "tunic.entry_javajacket";
{
tmp_entry.ww = 360;
tmp_entry.wh = 182.00000000000009;
tmp_entry.wx = -176;
tmp_entry.wy = -168;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_javajacket";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet_dirty.trigger_coffee",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_logbook";
tmp_entry.fqid = "tunic.entry_logbook";
{
tmp_entry.ww = 348;
tmp_entry.wh = 182.00000000000003;
tmp_entry.wx = 180.9999999999998;
tmp_entry.wy = -163.99999999999994;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_logbook_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_microfiche";
tmp_entry.fqid = "tunic.entry_microfiche";
{
tmp_entry.ww = 353;
tmp_entry.wh = 182.00000000000003;
tmp_entry.wx = 184.50000000000009;
tmp_entry.wy = 177;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_microfiche_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.library.microfiche.reader.paper2.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_nowells";
tmp_entry.fqid = "tunic.entry_nowells";
{
tmp_entry.ww = 332;
tmp_entry.wh = 170.99999999999997;
tmp_entry.wx = -187;
tmp_entry.wy = -160.49999999999991;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_nowells_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.entry.nobadgers",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_archivist";
tmp_entry.fqid = "tunic.entry_quest_archivist";
{
tmp_entry.ww = 357;
tmp_entry.wh = 127;
tmp_entry.wx = -186.5;
tmp_entry.wy = 216.5;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_quest_archivist_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet_dirty.door_archivist",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_archivist_x";
tmp_entry.fqid = "tunic.entry_quest_archivist_x";
{
tmp_entry.ww = 363;
tmp_entry.wh = 93;
tmp_entry.wx = -194.5;
tmp_entry.wy = 212.5000000000001;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_0.slip",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_basketball";
tmp_entry.fqid = "tunic.entry_quest_basketball";
{
tmp_entry.ww = 358.00000000000006;
tmp_entry.wh = 132.00000000000003;
tmp_entry.wx = 187.0000000000001;
tmp_entry.wy = -103.00000000000007;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_quest_basketball_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.collection.gramps.found_0",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_basketball_x";
tmp_entry.fqid = "tunic.entry_quest_basketball_x";
{
tmp_entry.ww = 361.0000000000001;
tmp_entry.wh = 106.00000000000003;
tmp_entry.wx = 177.49999999999997;
tmp_entry.wy = -103.00000000000004;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_final";
tmp_entry.fqid = "tunic.entry_quest_final";
{
tmp_entry.ww = 331;
tmp_entry.wh = 123.00000000000003;
tmp_entry.wx = -186.5;
tmp_entry.wy = 32.5;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_quest_final_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.stacks.journals.pic_2",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_library";
tmp_entry.fqid = "tunic.entry_quest_library";
{
tmp_entry.ww = 368;
tmp_entry.wh = 122.99999999999999;
tmp_entry.wx = -185;
tmp_entry.wy = -91.49999999999982;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_quest_library_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_1.library",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_museum";
tmp_entry.fqid = "tunic.entry_quest_museum";
{
tmp_entry.ww = 364.99999999999994;
tmp_entry.wh = 127.00000000000003;
tmp_entry.wx = -187.49999999999997;
tmp_entry.wy = 81.49999999999993;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_quest_museum_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_museum_x";
tmp_entry.fqid = "tunic.entry_quest_museum_x";
{
tmp_entry.ww = 367.00000000000006;
tmp_entry.wh = 85.99999999999986;
tmp_entry.wx = -191.50000000000003;
tmp_entry.wy = 77.9999999999999;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet_dirty.gramps.paperwork",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_squeakycleaners";
tmp_entry.fqid = "tunic.entry_quest_squeakycleaners";
{
tmp_entry.ww = 351;
tmp_entry.wh = 131;
tmp_entry.wx = 186.49999999999977;
tmp_entry.wy = -18.499999999999993;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_quest_squeakycleaners_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_squeakycleaners_x";
tmp_entry.fqid = "tunic.entry_quest_squeakycleaners_x";
{
tmp_entry.ww = 348;
tmp_entry.wh = 102.00000000000001;
tmp_entry.wx = 189.00000000000003;
tmp_entry.wy = -20.99999999999996;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_textile";
tmp_entry.fqid = "tunic.entry_quest_textile";
{
tmp_entry.ww = 366;
tmp_entry.wh = 110;
tmp_entry.wx = 187.99999999999994;
tmp_entry.wy = 233.00000000000006;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_quest_textile_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_0.slip",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_textile_x";
tmp_entry.fqid = "tunic.entry_quest_textile_x";
{
tmp_entry.ww = 353;
tmp_entry.wh = 86.99999999999997;
tmp_entry.wx = 178.50000000000003;
tmp_entry.wy = 225.49999999999994;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_taxidermy";
tmp_entry.fqid = "tunic.entry_taxidermy";
{
tmp_entry.ww = 348;
tmp_entry.wh = 95.99999999999996;
tmp_entry.wx = 184;
tmp_entry.wy = -173;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_taxidermy_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.library.frontdesk.worker.wells",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_teddytaken";
tmp_entry.fqid = "tunic.entry_teddytaken";
{
tmp_entry.ww = 359;
tmp_entry.wh = 166.99999999999997;
tmp_entry.wx = -191.50000000000006;
tmp_entry.wy = -55.499999999999986;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_teddytaken_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet_dirty.trigger_scarf",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_theodora";
tmp_entry.fqid = "tunic.entry_theodora";
{
tmp_entry.ww = 348;
tmp_entry.wh = 182.00000000000003;
tmp_entry.wx = -189;
tmp_entry.wy = 192;
tmp_entry.wz = 100;
tmp_entry.page = 3;
tmp_entry.animcycle_id = "entry_theodora_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.stacks.journals.pic_2",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_tunic";
tmp_entry.fqid = "tunic.entry_tunic";
{
tmp_entry.ww = 348;
tmp_entry.wh = 182.00000000000003;
tmp_entry.wx = 180.00000000000009;
tmp_entry.wy = 190.00000000000006;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_tunic_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.collection.tunic",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_voteforgramps";
tmp_entry.fqid = "tunic.entry_voteforgramps";
{
tmp_entry.ww = 348;
tmp_entry.wh = 182.00000000000003;
tmp_entry.wx = -192.00000000000006;
tmp_entry.wy = 192;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_voteforgramps_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet.retirement_letter.hub",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_wellsid";
tmp_entry.fqid = "tunic.entry_wellsid";
{
tmp_entry.ww = 360;
tmp_entry.wh = 189.00000000000006;
tmp_entry.wx = 183;
tmp_entry.wy = -24.500000000000014;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_wellsid_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.library.frontdesk.wellsbadge.hub",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
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
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_scene = new scene();
tmp_scene.id = "capitol";
tmp_scene.fqid = "tunic.capitol";
{
tmp_scene.primary = false;
tmp_scene.ww = 213;
tmp_scene.wh = 211.99999999999997;
tmp_scene.wx = 2.500000000000014;
tmp_scene.wy = 13.000000000000014;
tmp_scene.animcycle_id = "scene_capitol";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.reqs = [[
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
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
tmp_room.cam_wh = 1000;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:112.16666666666663, wy:-217.46969696969683, ww:1129.4848484848485, wh:217.6666666666667 },
];
tmp_room.lights = [
{wx:781.5606060606058, wy:379.34848484848465, ww:126.45454545454568, wh:61.60606060606062 },
];
tmp_room.shadows = [
{wx:653.681818181818, wy:371.77272727272714, ww:117.36363636363622, wh:67.66666666666671 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 648.2945573024847;
tmp_room.target_start_wy = -253.58367957138657;
tmp_room.raw_notifications = [
];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.7606060606060605

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "ending";
tmp_cutscene.fqid = "tunic.capitol.hall.ending";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 100;
tmp_cutscene.wh = 100;
tmp_cutscene.wx = 481.21213778194294;
tmp_cutscene.wy = 140.30400738735185;
tmp_cutscene.wz = 5;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.reqs = [[
"tunic.capitol.hall.gramps.ending",
]];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -53.91712301631122;
tmp_cutscene_command.wy = 327.7067052542433;
tmp_cutscene_command.w = 148;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Couldn’t have done it without you, Grampa.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 153.65863455944634;
tmp_cutscene_command.wy = 333.76731131484934;
tmp_cutscene_command.w = 239;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Excellent work, you two.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -326.64439574358386;
tmp_cutscene_command.wy = 324.6764022239402;
tmp_cutscene_command.w = 236;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "What?! You believe them?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 179.4162103170221;
tmp_cutscene_command.wy = 333.76731131484934;
tmp_cutscene_command.w = 206;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I believe the evidence.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -385.7353048344931;
tmp_cutscene_command.wy = 397.403674951213;
tmp_cutscene_command.w = 319;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "But... he can’t even keep track of his paperwork! He lost the Wisconsin Wonders application, you know.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -478.1595472587355;
tmp_cutscene_command.wy = 291.34306889060696;
tmp_cutscene_command.w = 184;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Actually, I just turned it in! Worked on it all day long.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -97.85651695570522;
tmp_cutscene_command.wy = 348.91882646636446;
tmp_cutscene_command.w = 190;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wells, how did YOU know the papers went missing?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -220.5837896829779;
tmp_cutscene_command.wy = 312.5551901027281;
tmp_cutscene_command.w = 42;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "...";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -106.94742604661428;
tmp_cutscene_command.wy = 401.9491294966675;
tmp_cutscene_command.w = 204;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Hey, Wells. Did you hear the one about the wanna-be historian who tried to capture a badger?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -226.64439574358397;
tmp_cutscene_command.wy = 300.433977981516;
tmp_cutscene_command.w = 56;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "No...";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -50.88681998600822;
tmp_cutscene_command.wy = 342.8582204057584;
tmp_cutscene_command.w = 135;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "It did NOT end well for him.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -320.58378968297797;
tmp_cutscene_command.wy = 398.9188264663645;
tmp_cutscene_command.w = 192;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wait and see... I’ve still got a few tricks up my sleeve.";
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
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
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
tmp_person.act_wx = -242.34903739818594;
tmp_person.act_wy = -17.171405218007862;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 72.77820480249332;
tmp_person.hover_icon_wy = 183.46748014757537;
tmp_person.animcycle_id = "boss";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "finale_enough";
tmp_speak.fqid = "tunic.capitol.hall.boss.finale_enough";
{
tmp_speak.primary = 5;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -74.29929833373379;
tmp_speak_command.wy = 392.42473454086644;
tmp_speak_command.w = 346;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "That’s enough, Wells. Jolie, what can you tell us about Theodora Youmans?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finale_slip_yes";
tmp_speak.fqid = "tunic.capitol.hall.boss.finale_slip_yes";
{
tmp_speak.primary = 4;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -91.97554151963809;
tmp_speak_command.wy = 310.6154841753587;
tmp_speak_command.w = 179;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I found this slip attached to the tunic. It has the date 1916 on it!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 75.75757152629556;
tmp_speak_command.wy = 413.6363636737529;
tmp_speak_command.w = 258;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Jolie, you seem to be on to something. Do you know what that slip is?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finale_suffragist_yes";
tmp_speak.fqid = "tunic.capitol.hall.boss.finale_suffragist_yes";
{
tmp_speak.primary = 6;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -29.56140350387859;
tmp_speak_command.wy = 217.54546140074393;
tmp_speak_command.w = 120;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "She was a suffragist!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 27.378787866829576;
tmp_speak_command.wy = 370.0000000001028;
tmp_speak_command.w = 293;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "And what does women’s suffrage have to do with our tunic?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_1";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_1";
{
tmp_speak.primary = 3;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -101.3661746464911;
tmp_speak_command.wy = 85.98010910074687;
tmp_speak_command.w = 148.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Where's Wells?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -129.90090138980202;
tmp_speak_command.wy = 374.70000148702;
tmp_speak_command.w = 323.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "He's meeting me here. He said he had to take care of something first.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -212.51850887198924;
tmp_speak_command.wy = 133.894056242295;
tmp_speak_command.w = 224;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wells was wrong. It's not a basketball jersey!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 158.50000001387514;
tmp_speak_command.wy = 370.000000047556;
tmp_speak_command.w = 176;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Oh really? How do you know?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -337.57576869555163;
tmp_speak_command.wy = 225.36363675066252;
tmp_speak_command.w = 302;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I checked the old jerseys at the basketball Center! The tunic looks totally different. And the women's team didn't even start until 1974.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 167.50000000000006;
tmp_speak_command.wy = 367;
tmp_speak_command.w = 161;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Do you have any other leads?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -106.84848488456134;
tmp_speak_command.wy = 124.833333334589;
tmp_speak_command.w = 154;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Yes! I found this on the tunic.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 215.50000000000006;
tmp_speak_command.wy = 367;
tmp_speak_command.w = 106;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Intriguing. What is it?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_2";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_2";
{
tmp_speak.primary = 3;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 76.9346213378118;
tmp_speak_command.wy = 367.20000148701513;
tmp_speak_command.w = 270.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Hmmm. Wells sure is taking his time with that plaque…";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -212.51850887198924;
tmp_speak_command.wy = 133.894056242295;
tmp_speak_command.w = 224;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wells was wrong. It's not a basketball jersey!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 158.50000001387514;
tmp_speak_command.wy = 370.000000047556;
tmp_speak_command.w = 176;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Oh really? How do you know?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -337.57576869555163;
tmp_speak_command.wy = 225.36363675066252;
tmp_speak_command.w = 302;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I checked the old jerseys at the basketball Center! The tunic looks totally different. And the women's team didn't even start until 1974.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 167.50000000000006;
tmp_speak_command.wy = 367;
tmp_speak_command.w = 161;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Do you have any other leads?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -106.84848488456134;
tmp_speak_command.wy = 124.833333334589;
tmp_speak_command.w = 154;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Yes! I found this on the tunic.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 215.50000000000006;
tmp_speak_command.wy = 367;
tmp_speak_command.w = 106;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Intriguing. What is it?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_3";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_3";
{
tmp_speak.primary = 3;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 174.43462133781077;
tmp_speak_command.wy = 322.2000014870106;
tmp_speak_command.w = 152.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Back so soon?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -212.51850887198924;
tmp_speak_command.wy = 133.894056242295;
tmp_speak_command.w = 224;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wells was wrong. It's not a basketball jersey!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 158.50000001387514;
tmp_speak_command.wy = 370.000000047556;
tmp_speak_command.w = 176;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Oh really? How do you know?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -337.57576869555163;
tmp_speak_command.wy = 225.36363675066252;
tmp_speak_command.w = 302;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I checked the old jerseys at the basketball Center! The tunic looks totally different. And the women's team didn't even start until 1974.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 167.50000000000006;
tmp_speak_command.wy = 367;
tmp_speak_command.w = 161;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Do you have any other leads?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -106.84848488456134;
tmp_speak_command.wy = 124.833333334589;
tmp_speak_command.w = 154;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Yes! I found this on the tunic.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 215.50000000000006;
tmp_speak_command.wy = 367;
tmp_speak_command.w = 106;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Intriguing. What is it?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_cleaner_no";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_cleaner_no";
{
tmp_speak.primary = 2;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -133.33333333333505;
tmp_speak_command.wy = 134.848484848485;
tmp_speak_command.w = 179;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Um… still working on that part.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 15.15151515151532;
tmp_speak_command.wy = 418.1818181818182;
tmp_speak_command.w = 290;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "It's not enough to tell me what the tunic is NOT. Come back when you figure out what it is.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_cleaner_yes";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_cleaner_yes";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -167.20220038970342;
tmp_speak_command.wy = 196.37943202192537;
tmp_speak_command.w = 229;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "A dry cleaning receipt!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 143.50000000000003;
tmp_speak_command.wy = 362.5;
tmp_speak_command.w = 182;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Who did the receipt belong to?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_march_no";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_march_no";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 58.00000000000012;
tmp_speak_command.wy = 296.4999999999999;
tmp_speak_command.w = 132;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Um…";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 58.00000000000012;
tmp_speak_command.wy = 296.4999999999999;
tmp_speak_command.w = 132;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I'm impressed, Jolie. You might just figure this out.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_suffragist_no";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_suffragist_no";
{
tmp_speak.primary = 2;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 100;
tmp_speak_command.wy = 100;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Um… a lady who liked tunics?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 100;
tmp_speak_command.wy = 100;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You're close, Jolie. But not quite there yet. What else was going on back then?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_suffragist_yes";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_suffragist_yes";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 58.00000000000012;
tmp_speak_command.wy = 296.4999999999999;
tmp_speak_command.w = 132;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "A suffragist!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 58.00000000000012;
tmp_speak_command.wy = 296.4999999999999;
tmp_speak_command.w = 132;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Nice work. But what does women's suffrage have to do with a Wisconsin tunic?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_theodora_no";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_theodora_no";
{
tmp_speak.primary = 2;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -137.8787974671168;
tmp_speak_command.wy = 200.00000118077222;
tmp_speak_command.w = 200;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Um… not sure yet.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 115.15151515048684;
tmp_speak_command.wy = 400.0000000001267;
tmp_speak_command.w = 208;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Well, come back if you figure it out.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "unfinished_theodora_yes";
tmp_speak.fqid = "tunic.capitol.hall.boss.unfinished_theodora_yes";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 26.50000000000012;
tmp_speak_command.wy = 313;
tmp_speak_command.w = 182;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Theodora Youmans!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 89.50000000000006;
tmp_speak_command.wy = 370;
tmp_speak_command.w = 220;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Hmm. Sounds familiar. Who was she?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.capitol.hall.gramps";
{
tmp_person.ww = 154.5475097877732;
tmp_person.wh = 289.39342840109845;
tmp_person.wx = -278.15069260154064;
tmp_person.wy = -31.040449201128297;
tmp_person.wz = 1;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_cursor_animcycle_id = "null";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"tunic.historicalsociety.stacks.journals.hub",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "ending";
tmp_speak.fqid = "tunic.capitol.hall.gramps.ending";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -156.06075403002205;
tmp_speak_command.wy = 457.5757583276369;
tmp_speak_command.w = 233;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Youmans and the other suffragists from Wisconsin wore these tunics to a women’s march in Chicago! They wanted to represent their home state.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -98.48484848484834;
tmp_speak_command.wy = 431.81818181818187;
tmp_speak_command.w = 206;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Just five years later, Wisconsin signed the very first women’s rights bill, right here at the Capitol!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -371.21212121212113;
tmp_speak_command.wy = 284.8484848484849;
tmp_speak_command.w = 135;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Great Scott! You did it, Jo!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "wells";
tmp_person.fqid = "tunic.capitol.hall.wells";
{
tmp_person.ww = 150.0737668615271;
tmp_person.wh = 313.3287704263341;
tmp_person.wx = -185.14394777014013;
tmp_person.wy = 27.351109752973315;
tmp_person.wz = -1;
tmp_person.act_wx = 242.1620760294804;
tmp_person.act_wy = -2.24670712996709;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 63.687295711584234;
tmp_person.hover_icon_wy = 148.61899529909056;
tmp_person.animcycle_id = "youngboy";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"tunic.historicalsociety.stacks.journals.hub",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "finale";
tmp_speak.fqid = "tunic.capitol.hall.wells.finale";
{
tmp_speak.primary = 3;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -52.882446145100204;
tmp_speak_command.wy = 205.67737311369277;
tmp_speak_command.w = 148.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "What happened to you, Wells?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -293.53726660745434;
tmp_speak_command.wy = 368.63939584195447;
tmp_speak_command.w = 323.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "None of your business. We're just adding the finishing touches.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -61.003357363652185;
tmp_speak_command.wy = 203.59102594105542;
tmp_speak_command.w = 156;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Hold up. You've got it all wrong!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -333.92424241036724;
tmp_speak_command.wy = 356.3636364111924;
tmp_speak_command.w = 202;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Ha! You're just a kid. What do you know?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -83.03031415009715;
tmp_speak_command.wy = 273.84848523551096;
tmp_speak_command.w = 180;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I know it's not a basketball jersey. And I have proof!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -274.8333333194582;
tmp_speak_command.wy = 388.1818182293742;
tmp_speak_command.w = 165;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Ridiculous. It’s clearly a jersey! Look at the logo.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finale_cleaner_yes";
tmp_speak.fqid = "tunic.capitol.hall.wells.finale_cleaner_yes";
{
tmp_speak.primary = 5;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -84.92297221248879;
tmp_speak_command.wy = 421.21276260170833;
tmp_speak_command.w = 184;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The curator at the textile museum said it was a dry cleaning receipt. She helped me find the only one that was around in 1916!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -345.45454545454703;
tmp_speak_command.wy = 359.0909090909091;
tmp_speak_command.w = 254;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "But… how do you know who the slip belonged to?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finale_jersey_yes";
tmp_speak.fqid = "tunic.capitol.hall.wells.finale_jersey_yes";
{
tmp_speak.primary = 4;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -63.83401607356569;
tmp_speak_command.wy = 281.81987495293095;
tmp_speak_command.w = 157;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The women’s basketball team didn’t even start until 1974!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -293.9393939509266;
tmp_speak_command.wy = 348.4848484849473;
tmp_speak_command.w = 208;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "How do you know the tunic isn’t from 1974?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finale_theodora_yes";
tmp_speak.fqid = "tunic.capitol.hall.wells.finale_theodora_yes";
{
tmp_speak.primary = 6;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -63.643136940244474;
tmp_speak_command.wy = 368.1818752340582;
tmp_speak_command.w = 157;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I checked the cleaner’s old log books. The slip was under the name \"Theodora Youmans\".";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -343.93939401232774;
tmp_speak_command.wy = 337.87878787940224;
tmp_speak_command.w = 329;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Does anybody actually believe this?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
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
tmp_wildcard.id = "finale";
tmp_wildcard.fqid = "tunic.capitol.hall.finale";
{
tmp_wildcard.ww = 746.6092852524237;
tmp_wildcard.wh = 391.4645686478035;
tmp_wildcard.wx = 11.184373924631132;
tmp_wildcard.wy = 14.771412311023369;
tmp_wildcard.wz = 1;
tmp_wildcard.act_wx = 45.45034468100204;
tmp_wildcard.act_wy = 12.120698091296784;
tmp_wildcard.act_anim = 1;
tmp_wildcard.hover_icon_wx = 34.848484848490784;
tmp_wildcard.hover_icon_wy = -34.8484848481152;
tmp_wildcard.animcycle_id = "null";
tmp_wildcard.hover_cursor_animcycle_id = "hover_ui";
tmp_wildcard.hover_icon_animcycle_id = "null";
tmp_wildcard.audio_id = "null";
tmp_wildcard.raw_notifications = [
];
tmp_wildcard.reqs = [[
"tunic.historicalsociety.stacks.journals.hub",
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
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.wells.finale" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("It's not a jersey, because…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_cleaner_no"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.wells.finale_jersey_yes" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("I know when the tunic is from, because…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_cleaner_no"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.finale_slip_yes" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("The slip on the tunic is…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_cleaner_no"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.wells.finale_cleaner_yes" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("The receipt belonged to…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_theodora_no"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.wells.finale_theodora_yes" },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.finale_enough" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("Theodora Youmans was…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_suffragist_no"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.finale_suffragist_yes" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("This is it! The tunic is connected to women's suffrage because…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_march_no"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.gramps.ending" },
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
        if(ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
          my_cursor.mode = CURSOR_UI;
    }
  }
  self.unhover = function(evt)
  {
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
          if(ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
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
for(var i = 0; i < tmp_wildcard.raw_notifications.length; i++) tmp_wildcard.notifications[i] = stextToLines(tmp_wildcard.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.wildcards.push(tmp_wildcard);
tmp_wildcard = new wildcard();
tmp_wildcard.id = "unfinished_1";
tmp_wildcard.fqid = "tunic.capitol.hall.unfinished_1";
{
tmp_wildcard.ww = 163.69696768113278;
tmp_wildcard.wh = 325.84848523435653;
tmp_wildcard.wx = 298.5161040321052;
tmp_wildcard.wy = 41.518847984903005;
tmp_wildcard.wz = 2;
tmp_wildcard.act_wx = -241.90263073900184;
tmp_wildcard.act_wy = -17.913782213670626;
tmp_wildcard.act_anim = 1;
tmp_wildcard.hover_icon_wx = 0;
tmp_wildcard.hover_icon_wy = 0;
tmp_wildcard.animcycle_id = "null";
tmp_wildcard.hover_cursor_animcycle_id = "hover_ui";
tmp_wildcard.hover_icon_animcycle_id = "null";
tmp_wildcard.audio_id = "null";
tmp_wildcard.raw_notifications = [
];
tmp_wildcard.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
"!tunic.historicalsociety.stacks.journals.hub",
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
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.unfinished_1" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("The slip on the tunic is…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_cleaner_no"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.unfinished_cleaner_yes" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("The receipt belonged to…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_theodora_no"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.unfinished_theodora_yes" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("Theodora Youmans was…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_suffragist_no"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.unfinished_suffragist_yes" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.not_possible", prompt:stextToLines("The tunic is connected to women's suffrage because…", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.unfinished_march_no"] },
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
        if(ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
          my_cursor.mode = CURSOR_UI;
    }
  }
  self.unhover = function(evt)
  {
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
        self.failed_command_i = 0;

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
          if(ptWithinBox(my_notebookview.cache_available_entrys[i],evt.doX,evt.doY))
          {
            if(my_notebookview.cache_available_entrys[i].fqid != self.cur_command.entry_fqid)
              self.failed = 1;
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
for(var i = 0; i < tmp_wildcard.raw_notifications.length; i++) tmp_wildcard.notifications[i] = stextToLines(tmp_wildcard.raw_notifications[i], tmp_level.notifications_w);
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
tmp_inert.reqs = [[
]];

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
tmp_scene.ww = 193.99999999999997;
tmp_scene.wh = 138;
tmp_scene.wx = 135.99999999999997;
tmp_scene.wy = 217.00000000000006;
tmp_scene.animcycle_id = "scene_drycleaner";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.reqs = [[
"tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
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
{wx:26.500010478189893, wy:-188.4999999999999, ww:925.0000209563811, wh:224.9999999999998 },
];
tmp_room.lights = [
{wx:-372.499856373247, wy:279, ww:203.0002872535049, wh:82.00000000000003 },
];
tmp_room.shadows = [
{wx:-332.96422942709796, wy:244.4999999999999, ww:178, wh:57.00000000000003 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 465.05530747325474;
tmp_room.target_start_wy = -55.99999999999992;
tmp_room.raw_notifications = [
];
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
tmp_person.wz = 0;
tmp_person.act_wx = -283.32082648203334;
tmp_person.act_wy = -70;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 52.95424753419206;
tmp_person.hover_icon_wy = 120.99999999999999;
tmp_person.animcycle_id = "cleaner";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "done";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.done";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 69.98295216110182;
tmp_speak_command.wy = 197.99999999999994;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Good luck!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.hub";
{
tmp_speak.primary = 2;
tmp_speak.options_wx = -305.52561965577746;
tmp_speak.options_wy = 121.00000000000001;
tmp_speak.options_w = 197;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.drycleaner.frontdesk.worker.slip01",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -4.974729340696678;
tmp_speak_command.wy = 261;
tmp_speak_command.w = 169.99426888971652;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "cleaner";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Welcome to Squeaky Cleaners! How can I help you?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
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
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
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
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
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
tmp_speak.options_wx = -359;
tmp_speak.options_wy = 147;
tmp_speak.options_w = 254;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -85.00000000000003;
tmp_speak_command.wy = 261.99999999999994;
tmp_speak_command.w = 253;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I see the problem. Dirt, grass stains, ice cream. You need the heavy-duty wash.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -277;
tmp_speak_command.wy = 145.00000000000003;
tmp_speak_command.w = 183;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "No thanks. I need to figure out who this slip belonged to.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -74.00000000000001;
tmp_speak_command.wy = 236.99999999999994;
tmp_speak_command.w = 243;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Oh… well… I can't show our log books to just anybody.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "please1";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip01.please1";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? I won't tell anybody!";
tmp_option.target_speak = "slip04";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "please2";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip01.please2";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? It's for my Grampa Leo… he's a historian.";
tmp_option.target_speak = "slip05";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
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
tmp_speak.options_wx = -337.99999999999994;
tmp_speak.options_wy = 117.99999999999996;
tmp_speak.options_w = 233;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -31.999999999999986;
tmp_speak_command.wy = 204;
tmp_speak_command.w = 203;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Sorry. Rules are rules.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
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
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
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
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 33.00000000000013;
tmp_speak_command.wy = 229.99999999999994;
tmp_speak_command.w = 133;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Leo… you don't mean Leopold?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -240.00000000000003;
tmp_speak_command.wy = 90.99999999999993;
tmp_speak_command.w = 131;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Yep, that's him.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -71.99999999999999;
tmp_speak_command.wy = 257.99999999999994;
tmp_speak_command.w = 238;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Your gramps is my favorite customer! Always full of stories. Poor guy…";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -272.9999999999999;
tmp_speak_command.wy = 88.00000000000001;
tmp_speak_command.w = 168;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "What do you mean?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -17.99999999999994;
tmp_speak_command.wy = 260;
tmp_speak_command.w = 183;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "He came in last week. I found this in his jacket pocket.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -330;
tmp_speak_command.wy = 177.99999999999994;
tmp_speak_command.w = 224;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "...Missing paperwork? This doesn't make sense! Grampa's always so careful with his work.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 14.000000000000117;
tmp_speak_command.wy = 235.99999999999997;
tmp_speak_command.w = 149;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Guess he's losing track of things.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -320;
tmp_speak_command.wy = 116.99999999999999;
tmp_speak_command.w = 215;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "If I don't figure this out, he could lose his job!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -43.99999999999993;
tmp_speak_command.wy = 228.99999999999994;
tmp_speak_command.w = 209;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Here's the log book. Go ahead, take a peek.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_object.wx = 19.99999999999998;
tmp_object.wy = 95.00000000000003;
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
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.notice_reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];
tmp_object.reqs = [[
"tunic.drycleaner.frontdesk.worker.slip01",
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "page";
tmp_view.fqid = "tunic.drycleaner.frontdesk.logbook.page";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "logbook_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "page";
tmp_zone.raw_notifications = [
"The number matches the slip-",
"She must be the owner!",
"I'll make a note of this...",
];
tmp_zone.reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page.bingo"
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "I should find the logbook in here...";
tmp_observation.blip_wx = 276.0907405569176;
tmp_observation.blip_wy = 86;
tmp_observation.blip_w = 148;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "I should check that logbook to see who owned this slip...";
tmp_observation.blip_wx = 245.28716492945168;
tmp_observation.blip_wy = 95.99999999999996;
tmp_observation.blip_w = 175;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
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
tmp_scene.id = "historicalsociety";
tmp_scene.fqid = "tunic.historicalsociety";
{
tmp_scene.primary = true;
tmp_scene.ww = 238.99999999999997;
tmp_scene.wh = 144.00000000000003;
tmp_scene.wx = -190.5000000000001;
tmp_scene.wy = 220.99999999999994;
tmp_scene.animcycle_id = "scene_historicalsociety";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.reqs = [[
]];

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
{wx:-15.409090909090821, wy:-146.7272727272725, ww:794.2727272727274, wh:410.00000000000017 },
];
tmp_room.lights = [
{wx:340, wy:242.5, ww:51.99999999999998, wh:24.999999999999993 },
];
tmp_room.shadows = [
{wx:5.954545454545325, wy:-277.3999999999997, ww:871, wh:161.99999999999997 },
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = -300;
tmp_room.target_start_wy = -77.00000000000001;
tmp_room.raw_notifications = [
];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.0303030303030303

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_observation = new observation();
tmp_observation.id = "janitor";
tmp_observation.fqid = "tunic.historicalsociety.basement.janitor";
{
tmp_observation.ww = 157.00000000000003;
tmp_observation.wh = 222.99999999999997;
tmp_observation.wx = -221.49999999999994;
tmp_observation.wy = 115.50000000000001;
tmp_observation.wz = 0;
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
tmp_observation.raw_text = "Door's locked...";
tmp_observation.blip_wx = -101.50489675125361;
tmp_observation.blip_wy = 199.12874568164509;
tmp_observation.blip_w = 140;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset";
tmp_porthole.fqid = "tunic.historicalsociety.basement.tocloset";
{
tmp_porthole.ww = 140.54545454545473;
tmp_porthole.wh = 222.18181818181822;
tmp_porthole.wx = 129.69795344466908;
tmp_porthole.wy = 117.2715424956355;
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
tmp_porthole.target_room = "closet";
tmp_porthole.target_start_wx = -374.75951624996645;
tmp_porthole.target_start_wy = -34.4078948742569;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.ww = 140.5454545454546;
tmp_porthole.wh = 222.18181818181822;
tmp_porthole.wx = 127.7272727004599;
tmp_porthole.wy = 118.09090908982567;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 4;
tmp_porthole.act_wy = -76;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 26;
tmp_porthole.hover_icon_wy = 72;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "closet_dirty";
tmp_porthole.target_start_wx = -374.75951624996645;
tmp_porthole.target_start_wy = -34.4078948742569;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.ww = 126.54545454545456;
tmp_porthole.wh = 554.4545454545454;
tmp_porthole.wx = -455.27272727272987;
tmp_porthole.wy = 71.86363636363643;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 32;
tmp_porthole.act_wy = -130;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 59;
tmp_porthole.hover_icon_wy = -3;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 581.1727590073484;
tmp_porthole.target_start_wy = -3.124616842446756;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.ww = 1008.9370390464723;
tmp_inert.wh = 914.004317156754;
tmp_inert.wx = -26.637644918115086;
tmp_inert.wy = 53.28041040300866;
tmp_inert.wz = 999;
tmp_inert.g = 0.4;
tmp_inert.animcycle_id = "fgpipes";
tmp_inert.reqs = [[
]];

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
{wx:-123.55473283839729, wy:-223.73561300618343, ww:2033.1000861592847, wh:226.6862476527108 },
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
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
]];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 400;
tmp_cutscene_command.wy = -200;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "gramps";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -325.7726516874074;
tmp_cutscene_command.wy = 4.685313829772184;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
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
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 336.1178252794906;
tmp_cutscene_command.wy = -45.7487331224705;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = 2;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "teddy";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 80;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 81;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.historicalsociety.closet.gramps.intro_0_cs_0",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_0";
{
tmp_speak.primary = 1;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -215.6655164034022;
tmp_speak_command.wy = -41.988481166464084;
tmp_speak_command.w = 269;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "What happened next, Gramps?!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -363.9504738760633;
tmp_speak_command.wy = 242.88850546780085;
tmp_speak_command.w = 312;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Sorry, Jo. Gotta run to my meeting!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -143.66551640340222;
tmp_speak_command.wy = -42.988481166464055;
tmp_speak_command.w = 194;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Meetings are BORING!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -364.7265613608749;
tmp_speak_command.wy = 244.2628432563792;
tmp_speak_command.w = 189;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Grab your notebook and meet me upstairs!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0";
{
tmp_speak.primary = 10;
tmp_speak.options_wx = -304.576136087485;
tmp_speak.options_wy = -68.81594167679211;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.historicalsociety.closet.teddy.intro_0_cs_0",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 135.3084650828769;
tmp_speak_command.wy = -12.009152533810969;
tmp_speak_command.w = 226;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Teddy, please stay hidden! I'll be back soon.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 233.60354799515324;
tmp_speak_command.wy = -3.502648845687112;
tmp_speak_command.w = 133;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Where did I put my notebook?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
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
tmp_speak.options_wx = -330.7717132442285;
tmp_speak.options_wy = 1.0389307411907944;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 503.99470230862664;
tmp_speak_command.wy = -54.625662211421684;
tmp_speak_command.w = 117;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "zzzzzzzzz";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
"Here's my notebook!",
];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
"!tunic.historicalsociety.closet.notebook",
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_view.reqs = [[
]];

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
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.notice_icon_animcycle_id = "null";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_view.reqs = [[
]];

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
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I feel like I'm forgetting something...";
tmp_observation.blip_wx = -319.39018232082714;
tmp_observation.blip_wy = 164.00019803198495;
tmp_observation.blip_w = 316;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.historicalsociety.closet.notebook",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_observation.hover_icon_wx = 34.95945286875974;
tmp_observation.hover_icon_wy = 38.970690791400216;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I love these photos of me and Teddy.";
tmp_observation.blip_wx = 141.0757818219442;
tmp_observation.blip_wy = 3.4127062912952084;
tmp_observation.blip_w = 175;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = 107.99999999999996;
tmp_porthole.target_start_wy = 31.000000000000018;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "shadows";
tmp_inert.fqid = "tunic.historicalsociety.closet.shadows";
{
tmp_inert.ww = 560.0074564785687;
tmp_inert.wh = 455.00054492879343;
tmp_inert.wx = 375.0409646498976;
tmp_inert.wy = -5.502993747924677;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "closetshadows";
tmp_inert.reqs = [[
]];

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
tmp_room.reqs = [[
]];
//SUGGEST_H:1.2

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "door_archivist";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.door_archivist";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 189.00000418521006;
tmp_cutscene.wh = 311.9999743822939;
tmp_cutscene.wx = -352.48029428157275;
tmp_cutscene.wy = 145.12061887921436;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "hover_ui";
tmp_cutscene.hover_icon_animcycle_id = "hblip_interact";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"!tunic.historicalsociety.closet_dirty.door_archivist",
]];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -698.706909090909;
tmp_cutscene_command.wy = 189.42147531205103;
tmp_cutscene_command.w = 279;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Oy. Gotta re-do the paperwork, or I'm a goner! Wish I had time to see the archivist…";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -307.706909090909;
tmp_cutscene_command.wy = 171.42147531205106;
tmp_cutscene_command.w = 205;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Archivist? Who's that?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -693.706909090909;
tmp_cutscene_command.wy = 186.42147531205097;
tmp_cutscene_command.w = 280;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "He's an expert record-keeper… He knows EVERYTHING about this place.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -306.706909090909;
tmp_cutscene_command.wy = 232.421475312051;
tmp_cutscene_command.w = 197;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Ooh, maybe he can help rescue Teddy! Where can I find him?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -694.706909090909;
tmp_cutscene_command.wy = 211.42147531205103;
tmp_cutscene_command.w = 249;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Upstairs and through the stacks. Ask him about that mysterious slip… he might have some answers.";
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
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "door_block";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.door_block";
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
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"!tunic.historicalsociety.closet_dirty.trigger_coffee",
"!tunic.historicalsociety.closet_dirty.trigger_scarf",
]];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -691.706909090909;
tmp_cutscene_command.wy = 159.42147531205106;
tmp_cutscene_command.w = 198;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "No time to waste! Can you help me tidy up?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -315.70690909090905;
tmp_cutscene_command.wy = 213.42147531205106;
tmp_cutscene_command.w = 244;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I wonder if there are any more clues around here…";
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
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "trigger_coffee";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.trigger_coffee";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 80.99342279216228;
tmp_cutscene.wh = 71.00029447787803;
tmp_cutscene.wx = -0.6663785670119751;
tmp_cutscene.wy = -202.77993103529144;
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
tmp_cutscene.raw_notifications = [
];
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
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -104.91162482311245;
tmp_cutscene_command.wy = -44.17225529482458;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -80.7069090909091;
tmp_cutscene_command.wy = -21.578524687948935;
tmp_cutscene_command.w = 194;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Is this yours, Grampa?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -518.9529358223791;
tmp_cutscene_command.wy = 119.72324930962087;
tmp_cutscene_command.w = 245;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Nope, I only drink Holdgers!";
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
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "trigger_scarf";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.trigger_scarf";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 101.42205127979476;
tmp_cutscene.wh = 63.803494135112985;
tmp_cutscene.wx = 526.6710542594461;
tmp_cutscene.wy = -165.13131865706274;
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
tmp_cutscene.raw_notifications = [
];
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
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 379.8347068531166;
tmp_cutscene_command.wy = -38.60898384490877;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 494.77984668065864;
tmp_cutscene_command.wy = 6.918826466364443;
tmp_cutscene_command.w = 199;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Oh no… Teddy's scarf!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -28.76795404838174;
tmp_cutscene_command.wy = 131.84626267535603;
tmp_cutscene_command.w = 225;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm sure he's okay, Jo. He's a scrappy little fella.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 498.71880172318566;
tmp_cutscene_command.wy = 65.95775720755535;
tmp_cutscene_command.w = 243;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "But he never goes anywhere without his scarf. I think someone took him!";
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
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
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
tmp_person.hover_icon_wx = 78.96245190417704;
tmp_person.hover_icon_wy = 152.98428692308397;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "notice";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
"!tunic.historicalsociety.closet_dirty.gramps",
]];
tmp_person.reqs = [[
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "paperwork";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.paperwork";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -586.1422264025356;
tmp_speak_command.wy = 48.8852149777123;
tmp_speak_command.w = 129;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Yikes. What happened here?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -696.9903499688413;
tmp_speak_command.wy = 157.85487039870785;
tmp_speak_command.w = 201;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The Wisconsin Wonders paperwork… It's gone!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "I love these photos of me and Teddy.";
tmp_observation.blip_wx = 236.38354274260067;
tmp_observation.blip_wy = 62.37115888408396;
tmp_observation.blip_w = 175;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = 107.99999999999996;
tmp_porthole.target_start_wy = 31.000000000000018;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.reqs = [[
]];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "desk";
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.desk";
{
tmp_inert.ww = 372.77620325031677;
tmp_inert.wh = 306.648311065679;
tmp_inert.wx = -729.0817869460672;
tmp_inert.wy = -57.90802445557321;
tmp_inert.wz = 0.1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "room_historicalsociety_closet_dirty_desk";
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgpipes";
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.fgpipes";
{
tmp_inert.ww = 917.8841312272183;
tmp_inert.wh = 853.8504981773996;
tmp_inert.wx = 584.74876318705;
tmp_inert.wy = 39.64786873874294;
tmp_inert.wz = 999;
tmp_inert.g = 0.2;
tmp_inert.animcycle_id = "room_historicalsociety_closet_fgpipes";
tmp_inert.reqs = [[
]];

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
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
]];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -400.90909090909093;
tmp_cutscene_command.wy = 243.93939393939405;
tmp_cutscene_command.w = 140;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Take a look Jo!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 200;
tmp_cutscene_command.wy = -100;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 166.26161336463082;
tmp_cutscene_command.wy = -8.077989127665601;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 230.98484848484856;
tmp_cutscene_command.wy = 144.621212121212;
tmp_cutscene_command.w = 169;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "It's a boring old shirt.";
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
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
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
tmp_person.hover_icon_wx = -54.69696969637356;
tmp_person.hover_icon_wy = 155.45454545454547;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.notice_icon_animcycle_id = "notice";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
"tunic.historicalsociety.collection.cs",
"!tunic.historicalsociety.collection.gramps.intro_0",
],
[
"tunic.historicalsociety.collection.tunic.slip",
"!tunic.historicalsociety.collection.gramps.found_0",
]];
tmp_person.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "found_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.found_0";
{
tmp_speak.primary = 5;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"tunic.historicalsociety.collection.tunic.slip",
"!tunic.historicalsociety.collection.gramps.found_0",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -402.3484848484849;
tmp_speak_command.wy = 284.24242424242425;
tmp_speak_command.w = 141;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Hey, what'd you find there, Jo?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 117.27272727272737;
tmp_speak_command.wy = 182.04545454545456;
tmp_speak_command.w = 171;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Not sure- looks like it's from 1916...";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -484.39393939393943;
tmp_speak_command.wy = 282.8030303030303;
tmp_speak_command.w = 198;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Hot Dog! That's a clue if I've ever seen one!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.found_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "found_3";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "found_3";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.found_3";
{
tmp_speak.primary = 2;
tmp_speak.options_wx = 245.37878787878805;
tmp_speak.options_wy = -104.39393939393936;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 121.5909090909092;
tmp_speak_command.wy = 138.86363636363637;
tmp_speak_command.w = 143;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "So... now what?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "aheadofthegame";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.found_3.aheadofthegame";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "lead_0";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.found_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "lead_0";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.intro_0";
{
tmp_speak.primary = 10;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.historicalsociety.collection.gramps.intro_0",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -409.5454545469995;
tmp_speak_command.wy = 282.803030303202;
tmp_speak_command.w = 147;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I wish I had time to investigate.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 114.3920090401845;
tmp_speak_command.wy = 140.30326050135807;
tmp_speak_command.w = 194;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I can help you gramps!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 121.5909090902827;
tmp_speak_command.wy = 177.72727272734744;
tmp_speak_command.w = 165;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "History, shmistory. This will be easy!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -508.8636364057118;
tmp_speak_command.wy = 281.3636363343669;
tmp_speak_command.w = 215;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "First we need some proof that Wells is wrong.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -536.2121212541967;
tmp_speak_command.wy = 281.3636363343669;
tmp_speak_command.w = 235;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Can you skedaddle over to the Basketball Center?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -467.1212121212121;
tmp_speak_command.wy = 323.10606060606057;
tmp_speak_command.w = 184;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Go look for clues to see if this is really a basketball jersey.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 118.71212121212126;
tmp_speak_command.wy = 186.36363636363643;
tmp_speak_command.w = 132;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I doubt it is. Wells is stupid.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "lead_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.lead_0";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 192.12121212121102;
tmp_speak.options_wy = -32.42424242424292;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -484.3939393939394;
tmp_speak_command.wy = 321.66666666666674;
tmp_speak_command.w = 199;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You should check out the Basketball Center to test Wells' theory-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -454.1666666666666;
tmp_speak_command.wy = 281.3636363636364;
tmp_speak_command.w = 181;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "and hopefully rustle up some more clues!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 118.7121212117455;
tmp_speak_command.wy = 138.8636363634689;
tmp_speak_command.w = 148;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Ooh, I like clues!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.historicalsociety.collection.gramps.look_0",
"!tunic.historicalsociety.collection.tunic.slip",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -438.3333333584987;
tmp_speak_command.wy = 281.3636363657549;
tmp_speak_command.w = 167;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You should have a look at the tunic!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "look_1";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.look_1";
{
tmp_speak.primary = 4;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.historicalsociety.collection.tunic.slip",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -464.2424242424242;
tmp_speak_command.wy = 324.54545454545456;
tmp_speak_command.w = 184;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The first step in uncovering history is CLOSE inspection...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "lost_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.lost_0";
{
tmp_speak.primary = 3;
tmp_speak.options_wx = -396.59090920705773;
tmp_speak.options_wy = 30.909090911870123;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"tunic.historicalsociety.collection.gramps.found_0",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 115.61603186688953;
tmp_speak_command.wy = 141.74762384153541;
tmp_speak_command.w = 163;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "What should I do?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "aheadofthegame";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.lost_0.aheadofthegame";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "lead_0";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.lost_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "lead_0";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
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
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.notice_reqs = [[
"tunic.historicalsociety.collection.gramps.intro_0",
"!tunic.historicalsociety.collection.tunic.slip",
]];
tmp_object.reqs = [[
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "slip";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

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
"Huh? What's this?",
"I'll make a note of it...",
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "return";
tmp_zone.fqid = "tunic.historicalsociety.collection.tunic.slip.return";
{
tmp_zone.ww = 100;
tmp_zone.wh = 100;
tmp_zone.wx = 385.00000000000006;
tmp_zone.wy = 275;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "hub";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = -903.2438530313668;
tmp_porthole.target_start_wy = -94.39707135640161;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

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
tmp_room.nav_min_wz = 0.01;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-59.107017151491846, wy:-286.2998844146749, ww:1769.5494376878196, wh:580.1788249790067 },
];
tmp_room.lights = [
{wx:-904.7812513801985, wy:-112.84463746779527, ww:180.58030180345966, wh:176.24968715495018 },
];
tmp_room.shadows = [
{wx:739.604087455775, wy:-235.36991876942966, ww:534.5070793466381, wh:679.6472630265524 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 915.4377020179154;
tmp_room.target_start_wy = -27.33622572459731;
tmp_room.raw_notifications = [
];
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
tmp_cutscene.raw_notifications = [
];
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
tmp_cutscene_command.cutscene_target_entity_id = "boss";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 202.0929377284699;
tmp_cutscene_command.wy = 13.601481655334382;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -250.3753149720998;
tmp_cutscene_command.wy = 412.2648701907596;
tmp_cutscene_command.w = 185;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Ugh. Is this a museum or a daycare?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 364.9832727272726;
tmp_cutscene_command.wy = 415.4625454545452;
tmp_cutscene_command.w = 165;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Who is in charge of the first artifact?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -230.99781818181776;
tmp_cutscene_command.wy = 374.7534545454545;
tmp_cutscene_command.w = 175;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm already finished!.";
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
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -436.17163636363614;
tmp_cutscene_command.wy = 224.94399999999996;
tmp_cutscene_command.w = 209;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "This isn't real research!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -330.3279999999996;
tmp_cutscene_command.wy = 421.976;
tmp_cutscene_command.w = 238;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Who are you to say? You're always losing papers.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 366.6116363636362;
tmp_cutscene_command.wy = 413.8341818181816;
tmp_cutscene_command.w = 190;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "No more bickering. Get to work you two.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 366.6116363636362;
tmp_cutscene_command.wy = 413.8341818181816;
tmp_cutscene_command.w = 202;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Keep your eyes open for that pesky badger.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -436.1716363636362;
tmp_cutscene_command.wy = 273.794909090909;
tmp_cutscene_command.w = 210;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Jo! Let's go take a gander at the artifact!";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "tocollection";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -940.6694207088169;
tmp_cutscene_command.wy = 26.292612746742293;
tmp_cutscene_command.wz = -927345892;
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
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.historicalsociety.collection.tunic.slip",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.boss.hub";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 350.8951714962277;
tmp_speak_command.wy = 419.15019736085225;
tmp_speak_command.w = 293;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I believe your grandpa is waiting for you in the collection room.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.historicalsociety.entry.groupconvo",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.gramps.hub";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 100;
tmp_speak_command.wy = 100;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "null";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.historicalsociety.collection.tunic.slip",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.wells.hub";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -272.9491931680918;
tmp_speak_command.wy = 425.67371677073874;
tmp_speak_command.w = 201;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Why don't you go play with your Grandpa...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
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
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
"!tunic.historicalsociety.entry.groupconvo",
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "closeup";
tmp_view.fqid = "tunic.historicalsociety.entry.report.closeup";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "report";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "I should see what Grampa is up to!";
tmp_observation.blip_wx = -854.9690446686695;
tmp_observation.blip_wy = 228.6486546252998;
tmp_observation.blip_w = 154;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.historicalsociety.entry.groupconvo",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "I should see what Grampa is up to!";
tmp_observation.blip_wx = 514.2486023506824;
tmp_observation.blip_wy = 241.29371071991753;
tmp_observation.blip_w = 160;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.historicalsociety.entry.groupconvo",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "I should go meet Grampa in the collection!";
tmp_observation.blip_wx = 416.0839371996251;
tmp_observation.blip_wy = 230.30721467924008;
tmp_observation.blip_w = 213;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.historicalsociety.collection",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "nobadgers";
tmp_observation.fqid = "tunic.historicalsociety.entry.nobadgers";
{
tmp_observation.ww = 135.82399999883302;
tmp_observation.wh = 139.08072727272523;
tmp_observation.wx = -522.6333672513509;
tmp_observation.wy = 247.68741118806082;
tmp_observation.wz = 0;
tmp_observation.act_wx = 68.39127272727269;
tmp_observation.act_wy = -244.25454545454528;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 56.99272727272724;
tmp_observation.hover_icon_wy = 63.50618181818178;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "Better keep Teddy hidden...";
tmp_observation.blip_wx = -803.4966993830346;
tmp_observation.blip_wy = 183.15575583186893;
tmp_observation.blip_w = 163;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "postedreport";
tmp_observation.fqid = "tunic.historicalsociety.entry.postedreport";
{
tmp_observation.ww = 148.8497921463892;
tmp_observation.wh = 174.90472351388297;
tmp_observation.wx = -343.24849379978514;
tmp_observation.wy = 237.8643938329022;
tmp_observation.wz = 0;
tmp_observation.act_wx = 87.93163636363631;
tmp_observation.act_wy = -236.11272727272706;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 50.47927272727269;
tmp_observation.hover_icon_wy = 63.50618181818178;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "Wells' report- \"Basketball Jersey\"";
tmp_observation.blip_wx = -646.5803116438763;
tmp_observation.blip_wy = 178.1998090247268;
tmp_observation.blip_w = 178;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = -371;
tmp_porthole.target_start_wy = -48.000000000000014;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.target_room = "collection";
tmp_porthole.target_start_wx = 621.9243073212195;
tmp_porthole.target_start_wy = -136.7670926438998;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.target_room = "map";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.reqs = [[
]];

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
tmp_room.nav_min_wz = 5;
tmp_room.nav_max_wz = 10;
tmp_room.navs = [
{wx:-38.3504355536046, wy:-202, ww:821.0001785495492, wh:223.99999999999997 },
];
tmp_room.lights = [
{wx:-451.0000000019295, wy:238.50000000000006, ww:158, wh:58.999999999999986 },
];
tmp_room.shadows = [
{wx:-432.5234022248209, wy:288.5, ww:96.9999978953515, wh:67 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 44.502020905923295;
tmp_room.target_start_wy = -171.6;
tmp_room.raw_notifications = [
];
tmp_room.reqs = [[
]];
//SUGGEST_H:1

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "archivist_0";
tmp_person.fqid = "tunic.historicalsociety.frontdesk.archivist_0";
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
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"!tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "badger";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_0.badger";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -259.00000000000006;
tmp_speak_command.wy = 181;
tmp_speak_command.w = 208;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Sorry, no badgers here.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139.99999999999994;
tmp_speak_command.wy = 76.99999999999999;
tmp_speak_command.w = 126;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Are you sure?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -198.00000000000006;
tmp_speak_command.wy = 216.99999999999997;
tmp_speak_command.w = 144;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I think I'd notice a badger, kid.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist_0.badger.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "hub";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "have_glass";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_0.have_glass";
{
tmp_speak.primary = 97;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"tunic.historicalsociety.frontdesk.magnify",
"!tunic.historicalsociety.frontdesk.archivist_0.have_glass",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -282.7866110915223;
tmp_speak_command.wy = 211.99999999999997;
tmp_speak_command.w = 236;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Now that's more like it! Guess I can spare a minute.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist_0.have_glass.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "hub";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hello";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_0.hello";
{
tmp_speak.primary = 100;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.historicalsociety.frontdesk.archivist_0.hello",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -169.86907889616415;
tmp_speak_command.wy = 181.99999999999997;
tmp_speak_command.w = 123;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Are you lost?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 134.9474871857554;
tmp_speak_command.wy = 99.99999999999999;
tmp_speak_command.w = 219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Actually, I'm on a quest. I need your help!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -270;
tmp_speak_command.wy = 239.99999999999994;
tmp_speak_command.w = 218;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wait a minute… you're that troublemaker Wells was talking about.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.99999950057014;
tmp_speak_command.wy = 102.99999999999997;
tmp_speak_command.w = 205;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I'm not a troublemaker. My friend is missing!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.99999999986176;
tmp_speak_command.wy = 103;
tmp_speak_command.w = 165;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Whatever. Can you help me or not?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -311.00000000000006;
tmp_speak_command.wy = 211.99999999999997;
tmp_speak_command.w = 255;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Hmm. Wish I could help. But I don't have time for kid stuff.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -349.0000000000001;
tmp_speak_command.wy = 214.99999999999994;
tmp_speak_command.w = 296;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I'm busy. Now if only I could read this thing… blasted tiny letters…";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_0.hub";
{
tmp_speak.primary = 96;
tmp_speak.options_wx = 152.99975974215684;
tmp_speak.options_wy = 163;
tmp_speak.options_w = 307;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_0.have_glass",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -208.0000031522239;
tmp_speak_command.wy = 184.99999999999994;
tmp_speak_command.w = 156;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "What d'you need?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "inquire_badger";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist_0.hub.inquire_badger";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I'm looking for my badger, Teddy. He's been kidnapped!";
tmp_option.target_speak = "badger";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist_0.hub.inquire_slip";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Do you know what this is? It was pinned to an old tunic.";
tmp_option.target_speak = "slip";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "nevermind";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist_0.hub.nevermind";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Nevermind.";
tmp_option.target_speak = "leave";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "leave";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_0.leave";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 137;
tmp_speak_command.wy = 133.99999999999994;
tmp_speak_command.w = 218;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "If you find Teddy, please call Grampa Leo! He'll know what to do.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -300.9999999999999;
tmp_speak_command.wy = 241;
tmp_speak_command.w = 243;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Leo? Leopold, you mean? Weren't they thinking about getting rid of him?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139.00000000000003;
tmp_speak_command.wy = 106.99999999999996;
tmp_speak_command.w = 166;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "No way! Not while I'm around.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "need_glass_0";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_0.need_glass_0";
{
tmp_speak.primary = 99;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.historicalsociety.frontdesk.magnify",
"!tunic.historicalsociety.frontdesk.archivist_0.need_glass_0",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -320.93676496422404;
tmp_speak_command.wy = 245;
tmp_speak_command.w = 266;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Didn't you hear me? I'm busy. Now if only I could read this thing… blasted tiny letters…";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "need_glass_1";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_0.need_glass_1";
{
tmp_speak.primary = 98;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.historicalsociety.frontdesk.magnify",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -311.00000000403656;
tmp_speak_command.wy = 216;
tmp_speak_command.w = 252;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I used to have a magnifying glass around here…";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_0.slip";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 158.50425087108016;
tmp_speak.options_wy = 27.000000000000014;
tmp_speak.options_w = 200.20961672473868;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -303;
tmp_speak_command.wy = 272;
tmp_speak_command.w = 250;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "archivist";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "A tunic? Try the Human Ecology building. You'll be able to talk to some textile experts at the university.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist_0.slip.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "hub";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "archivist_1";
tmp_person.fqid = "tunic.historicalsociety.frontdesk.archivist_1";
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
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
"!tunic.library.microfiche.reader.paper2.bingo",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "dontcare";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_1.dontcare";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 135;
tmp_speak.options_wy = 74;
tmp_speak.options_w = 173;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -154.99999999999994;
tmp_speak_command.wy = 181.99999999999997;
tmp_speak_command.w = 104;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Don't care.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist_1.dontcare.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Wanna hear a joke?";
tmp_option.target_speak = "library";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_1.library";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -94.00000000000001;
tmp_speak_command.wy = 181.99999999999997;
tmp_speak_command.w = 44;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Fine.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.00000000000006;
tmp_speak_command.wy = 136.99999999999997;
tmp_speak_command.w = 173;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Ok. Let's see… um… Where do baby cows go to eat lunch?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -187.99999999999994;
tmp_speak_command.wy = 181.99999999999991;
tmp_speak_command.w = 134;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Um… the barn?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.00000000000006;
tmp_speak_command.wy = 78.99999999999996;
tmp_speak_command.w = 180;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "No, the calf-eteria!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -276;
tmp_speak_command.wy = 211;
tmp_speak_command.w = 224;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Ha! That's a knee slapper. How can I help ya, kid?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 135;
tmp_speak_command.wy = 82.99999999999999;
tmp_speak_command.w = 216;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I found a name and date.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -318.99999999999994;
tmp_speak_command.wy = 271.99999999999994;
tmp_speak_command.w = 267;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Excellent! You'll want to try the library… They'll have all sorts of info on Youmans. I'll dig up some stuff around here.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "recap";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_1.recap";
{
tmp_speak.primary = 94;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -319.99999999999994;
tmp_speak_command.wy = 270.99999999999994;
tmp_speak_command.w = 266;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You'll want to try the library… They'll have all sorts of info on Youmans. I'll dig up some stuff around here.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "whatnow";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_1.whatnow";
{
tmp_speak.primary = 95;
tmp_speak.options_wx = 143.00000021061211;
tmp_speak.options_wy = 106.99999999999996;
tmp_speak.options_w = 173;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.historicalsociety.frontdesk.archivist_1.whatnow",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -153.9969950472184;
tmp_speak_command.wy = 179.00000000000003;
tmp_speak_command.w = 98;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "What now?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "found";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist_1.whatnow.found";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I found something!";
tmp_option.target_speak = "dontcare";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "joke";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist_1.whatnow.joke";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Wanna hear a joke?";
tmp_option.target_speak = "library";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "archivist_2";
tmp_person.fqid = "tunic.historicalsociety.frontdesk.archivist_2";
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
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
"tunic.library.microfiche.reader.paper2.bingo",
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "coffee";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_2.coffee";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 100;
tmp_speak_command.wy = 100;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Hold on… what's that coffee cup doing on your desk?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 100;
tmp_speak_command.wy = 100;
tmp_speak_command.w = 100;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Is this another joke? Sorry, kid, work to do.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "newspaper";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_2.newspaper";
{
tmp_speak.primary = 93;
tmp_speak.options_wx = 210.5;
tmp_speak.options_wy = 16.999999999999986;
tmp_speak.options_w = 161;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.historicalsociety.frontdesk.archivist_2.newspaper",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -0.4999798421843913;
tmp_speak_command.wy = 207.00000000000006;
tmp_speak_command.w = 268;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Hey! I've got a good one. Why did the scarecrow win a prize?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 137.50000000000063;
tmp_speak_command.wy = 80;
tmp_speak_command.w = 164;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I don't have time—";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 0.5000000000000249;
tmp_speak_command.wy = 242.00000000000003;
tmp_speak_command.w = 359;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Because he was outstanding in his field! Ha! Get it? Out, standing in his field? Because he's a scarecrow?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.5000000000001;
tmp_speak_command.wy = 73;
tmp_speak_command.w = 138;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Where's Teddy?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.4999999999999822;
tmp_speak_command.wy = 180.00000000000003;
tmp_speak_command.w = 292;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Your badger? How should I know?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 134.50000000000006;
tmp_speak_command.wy = 138.00000000000006;
tmp_speak_command.w = 294;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You've got a BeanTown cup on your desk. And I found a BeanTown cup at the crime scene.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -9.499999999999986;
tmp_speak_command.wy = 216.00000000000003;
tmp_speak_command.w = 393;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Well, lots of people get coffee at BeanTown. I just ran into Wells there this morning.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 135.50000000000006;
tmp_speak_command.wy = 77.99999999999999;
tmp_speak_command.w = 66;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wells?!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139.5;
tmp_speak_command.wy = 79.00000000000003;
tmp_speak_command.w = 155;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I need to find him!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -2.499999999952653;
tmp_speak_command.wy = 239.00000000000003;
tmp_speak_command.w = 333;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Last I heard, he was supposed to meet the boss at the Capitol. She's been waiting all day. Anything else?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 136.50000000000006;
tmp_speak_command.wy = 133;
tmp_speak_command.w = 173;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Yes… I found out about Youmans. She was a suffragist!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -5.499999999999993;
tmp_speak_command.wy = 213.00000000000003;
tmp_speak_command.w = 320;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Nice work, kid! Knew you'd figure it out. I dug up some inspiration for ya!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 2.499999999999993;
tmp_speak_command.wy = 265;
tmp_speak_command.w = 382;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "These suffragists were there for the signing of the very first women's rights bill, right at our own state Capitol! Youmans had a big part in making that happen.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 138.5000000000001;
tmp_speak_command.wy = 80.00000000000004;
tmp_speak_command.w = 244;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wow… that's my kinda lady!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 134.50000000000006;
tmp_speak_command.wy = 167;
tmp_speak_command.w = 203;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "How does the tunic fit in? I need to figure this out fast. Grampa's job is at stake!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -5.499999999999993;
tmp_speak_command.wy = 211;
tmp_speak_command.w = 291;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "There's more info at the Stacks. Here's a call number you can use.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 135.50000000000006;
tmp_speak_command.wy = 81.00000000000004;
tmp_speak_command.w = 204;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Where are the Stacks?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 2.499999999999993;
tmp_speak_command.wy = 175.00000000000003;
tmp_speak_command.w = 208;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Right outside the door.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "recap";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist_2.recap";
{
tmp_speak.primary = 92;
tmp_speak.options_wx = 210.5;
tmp_speak.options_wy = 16.999999999999986;
tmp_speak.options_w = 161;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 3.500000000000007;
tmp_speak_command.wy = 212.00000000000006;
tmp_speak_command.w = 268;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You should check the Stacks. They're right outside the door.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "I have no need for that right now.";
tmp_observation.blip_wx = 308.97395854447853;
tmp_observation.blip_wy = 78.99999999999996;
tmp_observation.blip_w = 163;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.historicalsociety.frontdesk.archivist_0.hello",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "I bet the Archivist could use this!";
tmp_observation.blip_wx = 268.1565178623663;
tmp_observation.blip_wy = 86.99999999999997;
tmp_observation.blip_w = 160;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 65.24595080983798;
tmp_porthole.target_start_wy = 110.4;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

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
{wx:-5.677623339535728, wy:-192.46889622075565, ww:562.2493101379723, wh:431.4884823035393 },
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
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_2.newspaper",
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.stacks.journals.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "journals_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "pic_0";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "pic_1";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "pic_2";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];
tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "pic_0";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];
tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
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
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "\"Out To Lunch\"- better check back later.";
tmp_observation.blip_wx = 79.80582133754872;
tmp_observation.blip_wy = 235.0047667573491;
tmp_observation.blip_w = 143;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.historicalsociety.closet_dirty",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 270.2744446093198;
tmp_porthole.target_start_wy = -60.01625878934189;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 46.15024390243908;
tmp_porthole.target_start_wy = -296.40000000000003;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.reqs = [[
]];

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
tmp_scene.ww = 216;
tmp_scene.wh = 132.00000000000003;
tmp_scene.wx = -238;
tmp_scene.wy = 79.00000000000001;
tmp_scene.animcycle_id = "scene_humanecology";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_0.slip",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
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
{wx:265.8006328841143, wy:280.5, ww:118.99694458696656, wh:41.000000000000036 },
];
tmp_room.shadows = [
{wx:407.65378462802823, wy:276, ww:102.10704193407042, wh:55.999999999999964 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 443.3278918589005;
tmp_room.target_start_wy = -177.99999999999997;
tmp_room.raw_notifications = [
];
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
tmp_person.wz = 0;
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
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "badger1";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.badger1";
{
tmp_speak.primary = 97;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -2.1917952839700696;
tmp_speak_command.wy = 42.999999999999986;
tmp_speak_command.w = 276;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You haven't seen any badgers around here, have you?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -198.00035021557673;
tmp_speak_command.wy = 182.99999999999997;
tmp_speak_command.w = 333;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Badgers? No… but I hear the museum's got one on the loose. Smart little critter, by the sounds of it.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -8.000000000495703;
tmp_speak_command.wy = 38.99999999999999;
tmp_speak_command.w = 190;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Yep. And super good at checkers.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "better";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.better";
{
tmp_speak.primary = 98;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.humanecology.frontdesk.worker.better",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -194.02957293488913;
tmp_speak_command.wy = 181.99999999999991;
tmp_speak_command.w = 267;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Ahhhh. Much better. Come to think of it, I've got a file of dry cleaners on the table. Take a look!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro1";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro1";
{
tmp_speak.primary = 100;
tmp_speak.options_wx = -3.1041490835105012;
tmp_speak.options_wy = 58.00000000000001;
tmp_speak.options_w = 295;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.humanecology.frontdesk.worker.intro1",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -196.00331858813087;
tmp_speak_command.wy = 175;
tmp_speak_command.w = 340;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "How lovely, a visitor! Take a look around. Would you care for some tea?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
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
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
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
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
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
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -193;
tmp_speak_command.wy = 125;
tmp_speak_command.w = 267;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Oh, all right. How can I help?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -8.000000000000057;
tmp_speak_command.wy = 8.999999999999984;
tmp_speak_command.w = 270;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Do you know what this slip is?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -195.00000000000009;
tmp_speak_command.wy = 149.00000000000006;
tmp_speak_command.w = 147;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Looks like a dry cleaning receipt.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -6.000000000000117;
tmp_speak_command.wy = 65.00000000000001;
tmp_speak_command.w = 247;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I need to find all the dry cleaners that were around in 1916! Can you help me?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro6";
tmp_option.raw_notifications = [
];
tmp_option.reqs = [[
]];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
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
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.humanecology.frontdesk.cookies",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -192.00000000000003;
tmp_speak_command.wy = 150.99999999999997;
tmp_speak_command.w = 292;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Oh, I don't know… it's so hard to think on an empty stomach…";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "businesscards";
tmp_object.fqid = "tunic.humanecology.frontdesk.businesscards";
{
tmp_object.ww = 55.06871334921671;
tmp_object.wh = 35.000000000000036;
tmp_object.wx = 317.2191683281635;
tmp_object.wy = 29.499999999999883;
tmp_object.wz = 0;
tmp_object.act_wx = -112.2398460734563;
tmp_object.act_wy = -82;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = -0.29508815856570436;
tmp_object.hover_icon_wy = 36;
tmp_object.animcycle_id = "businesscards";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "null";
tmp_object.notice_icon_animcycle_id = "null";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
"tunic.humanecology.frontdesk.worker.better",
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "card_0";
tmp_view.fqid = "tunic.humanecology.frontdesk.businesscards.card_0";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "cleaner_card_0";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "card_1";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "card_bingo";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "bingo";
tmp_zone.fqid = "tunic.humanecology.frontdesk.businesscards.card_bingo.bingo";
{
tmp_zone.ww = 153.99999999999994;
tmp_zone.wh = 45;
tmp_zone.wx = 126.00000000000001;
tmp_zone.wy = 63.4999999999999;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "card_bingo";
tmp_zone.raw_notifications = [
"Whoah this is the only dry cleaner old enough to be around in 1916!",
];
tmp_zone.reqs = [[
"!tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "card_0";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.ww = 129.71702233250622;
tmp_observation.wh = 355.57174051754725;
tmp_observation.wx = 527.099447020509;
tmp_observation.wy = 1.3192981212334587;
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
tmp_observation.raw_text = "I have a feeling there's a clue to be found in here...";
tmp_observation.blip_wx = 226.82958718105655;
tmp_observation.blip_wy = 140.99999999999994;
tmp_observation.blip_w = 160;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.humanecology.frontdesk.businesscards",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "block_1";
tmp_observation.fqid = "tunic.humanecology.frontdesk.block_1";
{
tmp_observation.ww = 120.99999999999996;
tmp_observation.wh = 338;
tmp_observation.wx = 528.5000000000001;
tmp_observation.wy = 2.842170943040401e-14;
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
tmp_observation.raw_text = "I wonder if there's a clue in those business cards...";
tmp_observation.blip_wx = 196.99999999999994;
tmp_observation.blip_wy = 126.99999999999997;
tmp_observation.blip_w = 219;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.humanecology.frontdesk.businesscards.card_bingo.bingo",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "cookies";
tmp_observation.fqid = "tunic.humanecology.frontdesk.cookies";
{
tmp_observation.ww = 48.83049558594934;
tmp_observation.wh = 29.99999999999997;
tmp_observation.wx = -467.8687297944439;
tmp_observation.wy = -104.00000000000001;
tmp_observation.wz = 0;
tmp_observation.act_wx = 91.99886999755478;
tmp_observation.act_wy = -36;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 23.818149455701587;
tmp_observation.hover_icon_wy = 25;
tmp_observation.animcycle_id = "cookie";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I bet the Curator could use these!";
tmp_observation.blip_wx = -524.7516153454889;
tmp_observation.blip_wy = 56.99999999999989;
tmp_observation.blip_w = 165;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"tunic.humanecology.frontdesk.worker.intro6",
"!tunic.humanecology.frontdesk.cookies",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
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
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "hallway";
tmp_porthole.target_start_wx = 440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
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
tmp_scene.id = "kohlcenter";
tmp_scene.fqid = "tunic.kohlcenter";
{
tmp_scene.primary = false;
tmp_scene.ww = 270;
tmp_scene.wh = 167.99999999999997;
tmp_scene.wx = -177.99999999999994;
tmp_scene.wy = -181;
tmp_scene.animcycle_id = "scene_kohlcenter";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.reqs = [[
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
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
{wx:-3.7451113105665854, wy:-132.89674896634952, ww:1755.747656813266, wh:240.4149242970439 },
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
tmp_room.target_start_wx = -850.6470185633716;
tmp_room.target_start_wy = -92.52184571016575;
tmp_room.raw_notifications = [
];
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
tmp_cutscene.raw_notifications = [
];
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
tmp_cutscene_command.wx = 386;
tmp_cutscene_command.wy = 139.00000000000003;
tmp_cutscene_command.w = 161;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Gramps was right!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 362;
tmp_cutscene_command.wy = 200.99999999999994;
tmp_cutscene_command.w = 182;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "That old tunic can't have been a basketball jersey-";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 373;
tmp_cutscene_command.wy = 169.99999999999991;
tmp_cutscene_command.w = 175;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I should tell gramps the good news!";
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
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_object = new object();
tmp_object.id = "plaque";
tmp_object.fqid = "tunic.kohlcenter.halloffame.plaque";
{
tmp_object.ww = 142.1575314199598;
tmp_object.wh = 84.99999999999999;
tmp_object.wx = 693.6810968538962;
tmp_object.wy = 87.50000000000003;
tmp_object.wz = 0;
tmp_object.act_wx = -116.20669261312605;
tmp_object.act_wy = -107.00000000000003;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 53.33503386534471;
tmp_object.hover_icon_wy = 41.99999999999997;
tmp_object.animcycle_id = "plaque";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.notice_icon_animcycle_id = "notice";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.notice_reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
]];
tmp_object.reqs = [[
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "face";
tmp_view.fqid = "tunic.kohlcenter.halloffame.plaque.face";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "plaque_face";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "face";
tmp_zone.raw_notifications = [
"The slip I found is from wayyy back in 1916. But the women's team didn't even start until 1974!",
];
tmp_zone.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "Grandpa said to look for clues. Better look around.";
tmp_observation.blip_wx = -818.3862029221006;
tmp_observation.blip_wy = 176.3533393169813;
tmp_observation.blip_w = 181;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "Maybe I should take a closer look at that plaque...";
tmp_observation.blip_wx = -821.981718409314;
tmp_observation.blip_wy = 161.28815679119526;
tmp_observation.blip_w = 254;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
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
tmp_scene.id = "library";
tmp_scene.fqid = "tunic.library";
{
tmp_scene.primary = false;
tmp_scene.ww = 177;
tmp_scene.wh = 172.00000000000006;
tmp_scene.wx = 280.5;
tmp_scene.wy = -122.00000000000004;
tmp_scene.animcycle_id = "scene_library";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_1.library",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
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
tmp_room.cam_wh = 860;
tmp_room.nav_min_wz = 11;
tmp_room.nav_max_wz = 20;
tmp_room.navs = [
{wx:-49.471606682383594, wy:-123.60355294095385, ww:1540.8093726827826, wh:244.5454545454547 },
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
tmp_room.target_start_wx = -747.5492172000397;
tmp_room.target_start_wy = -11.572982721124806;
tmp_room.raw_notifications = [
];
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
tmp_cutscene.raw_notifications = [
];
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
tmp_cutscene_command.raw_text = "Did you drop something, dear? There's a card on the floor over there.";
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
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
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
tmp_person.raw_notifications = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.reqs = [[
]];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "droppedbadge";
tmp_speak.fqid = "tunic.library.frontdesk.worker.droppedbadge";
{
tmp_speak.primary = 98;
tmp_speak.options_wx = -279.9644806234643;
tmp_speak.options_wy = 299.0676710642626;
tmp_speak.options_w = 257;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.library.frontdesk.wellsbadge.hub",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -454.0552430446311;
tmp_speak_command.wy = 396.038988652927;
tmp_speak_command.w = 338.00000181982193;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Did you drop something, dear? There's a card on the floor over there.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.library.frontdesk.worker.hello",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -361.02743385165303;
tmp_speak_command.wy = 342.6184844564415;
tmp_speak_command.w = 145.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Oh! Hello there!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -357.06324101725846;
tmp_speak_command.wy = 377.79656441794396;
tmp_speak_command.w = 178.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You look like you're on a mission.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -271.0632409075751;
tmp_speak_command.wy = 186.25110986504825;
tmp_speak_command.w = 167.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "A quest, actually.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -272.36627121060536;
tmp_speak_command.wy = 224.03898865292697;
tmp_speak_command.w = 235.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I'm looking for information on Theodora Youmans.";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -366.1844530287872;
tmp_speak_command.wy = 383.008685622624;
tmp_speak_command.w = 226.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Theodora Youmans? Check out our microfiche.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
"!tunic.library.microfiche.reader.paper2.bingo",
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -366.1844530287872;
tmp_speak_command.wy = 381.7056553195937;
tmp_speak_command.w = 228.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Theodora Youmans? Check out our microfiche.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
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
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -272.4367540364369;
tmp_speak_command.wy = 184.956749281008;
tmp_speak_command.w = 244.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "What was Wells doing here?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -355.76021195029705;
tmp_speak_command.wy = 406.46323108566395;
tmp_speak_command.w = 481.00000181982193;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "That new historian? I don't like him. He was looking for a number for a taxidermist… When I told him they're closed 'til tomorrow, he just about chewed my ear off.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -271.0632409075751;
tmp_speak_command.wy = 222.73595834989672;
tmp_speak_command.w = 129.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "A taxidermist? What's that?";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -366.1844530287872;
tmp_speak_command.wy = 351.7359583498967;
tmp_speak_command.w = 212.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Here, look for yourself.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -271.0632409075751;
tmp_speak_command.wy = 183.64504925898763;
tmp_speak_command.w = 133.0000018198219;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Oh no… Teddy!";
tmp_speak_command.speaker = SPEAKER_PLAYER;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "wellsbadge";
tmp_object.fqid = "tunic.library.frontdesk.wellsbadge";
{
tmp_object.ww = 42.66666666666814;
tmp_object.wh = 58.303030303030226;
tmp_object.wx = 133.88152529317244;
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
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
"tunic.library.microfiche.reader.paper2.bingo",
"!tunic.library.frontdesk.wellsbadge.hub",
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.library.frontdesk.wellsbadge.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "wellsbadge_big";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
"Hmm... what was Wells doing here? I should ask the librarian.",
];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
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
tmp_porthole.target_room = "microfiche";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgdesks";
tmp_inert.fqid = "tunic.library.frontdesk.fgdesks";
{
tmp_inert.ww = 1663.0390033943024;
tmp_inert.wh = 455.9523950763754;
tmp_inert.wx = -21.837976507968165;
tmp_inert.wy = -286.8602001523072;
tmp_inert.wz = 999;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "libraryfg";
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

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
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 4;
tmp_room.nav_max_wz = 10;
tmp_room.navs = [
{wx:10.504266621348336, wy:-164, ww:566.00666856617, wh:338 },
];
tmp_room.lights = [
{wx:-8, wy:-249.5, ww:744, wh:261 },
];
tmp_room.shadows = [
{wx:-29, wy:-225.50000000000028, ww:744, wh:261 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -22.989826129018468;
tmp_room.target_start_wy = -293;
tmp_room.raw_notifications = [
];
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
tmp_object.hover_cursor_animcycle_id = "null";
tmp_object.hover_icon_animcycle_id = "null";
tmp_object.notice_icon_animcycle_id = "null";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
]];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "paper0";
tmp_view.fqid = "tunic.library.microfiche.reader.paper0";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "microficheframe1";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];
tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper0.next";
{
tmp_zone.ww = 41.99999999999998;
tmp_zone.wh = 43.000000000000014;
tmp_zone.wx = 28.00000000000007;
tmp_zone.wy = -223.49999999999997;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "paper1";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];
tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper1.next";
{
tmp_zone.ww = 36.99999999999998;
tmp_zone.wh = 27.000000000000018;
tmp_zone.wx = 25.49999999999997;
tmp_zone.wy = -223.5000000000001;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "paper2";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "prev";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper1.prev";
{
tmp_zone.ww = 35.99999999999998;
tmp_zone.wh = 31.000000000000018;
tmp_zone.wx = -24.00000000000001;
tmp_zone.wy = -222.49999999999997;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "paper0";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.reqs = [[
]];
tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
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
tmp_zone.target_view = "paper2";
tmp_zone.raw_notifications = [
"Aha! Youmans was an influential Suffragist?!",
];
tmp_zone.reqs = [[
"!tunic.library.microfiche.reader.paper2.bingo",
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "next";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper2.next";
{
tmp_zone.ww = 34.99999999999998;
tmp_zone.wh = 26.00000000000002;
tmp_zone.wx = 24.50000000000007;
tmp_zone.wy = -223.0000000000001;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "paper0";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "prev";
tmp_zone.fqid = "tunic.library.microfiche.reader.paper2.prev";
{
tmp_zone.ww = 33.99999999999998;
tmp_zone.wh = 28.00000000000002;
tmp_zone.wx = -23.000000000000025;
tmp_zone.wy = -225.00000000000014;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "paper1";
tmp_zone.raw_notifications = [
];
tmp_zone.reqs = [[
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
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
tmp_observation.raw_text = "The libarian said I could find some information on Youmans in here...";
tmp_observation.blip_wx = -340.8884327562052;
tmp_observation.blip_wy = -92;
tmp_observation.blip_w = 301;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.reqs = [[
"!tunic.library.microfiche.reader.paper2.bingo",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
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
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 566.6043398295117;
tmp_porthole.target_start_wy = 33.70785839485907;
tmp_porthole.raw_notifications = [
];
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
tmp_inert.reqs = [[
]];

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
tmp_inert.reqs = [[
]];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
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

