
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
tmp_level.hover_w = 56;
tmp_level.hover_h = 56;
tmp_level.notifications_w = 200;
tmp_level.notifications_h = 30;
tmp_level.target_lerp_s = 0.03;
tmp_level.raw_notifications = [
];
tmp_level.raw_notification_ws = [
];
tmp_level.notification_reqs = [[
]]
tmp_level.reqs = [[
]]
tmp_level.notebook_reqs = [[
"tunic.historicalsociety.closet.notebook",
]]
tmp_level.map_reqs = [[
]]
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
tmp_entry.wx = -190;
tmp_entry.wy = -85.00000000000001;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_basketballplaque";
tmp_entry.fqid = "tunic.entry_basketballplaque";
{
tmp_entry.ww = 314;
tmp_entry.wh = 162.99999999999997;
tmp_entry.wx = -184.0000000000001;
tmp_entry.wy = 210.5;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_cleanercard";
tmp_entry.fqid = "tunic.entry_cleanercard";
{
tmp_entry.ww = 366.0000000000001;
tmp_entry.wh = 148.00000000000003;
tmp_entry.wx = 183;
tmp_entry.wy = -61.9999999999999;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_expert";
tmp_entry.fqid = "tunic.entry_expert";
{
tmp_entry.ww = 226.00000000000006;
tmp_entry.wh = 102.99999999999999;
tmp_entry.wx = 126.00000000000003;
tmp_entry.wy = 21.499999999999964;
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
tmp_entry.id = "entry_javajacket";
tmp_entry.fqid = "tunic.entry_javajacket";
{
tmp_entry.ww = 360;
tmp_entry.wh = 182.00000000000009;
tmp_entry.wx = -180;
tmp_entry.wy = -158;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_logbook";
tmp_entry.fqid = "tunic.entry_logbook";
{
tmp_entry.ww = 348;
tmp_entry.wh = 182.00000000000003;
tmp_entry.wx = -192.00000000000023;
tmp_entry.wy = 197.00000000000017;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_logbook_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_newspaper";
tmp_entry.fqid = "tunic.entry_newspaper";
{
tmp_entry.ww = 239.00000000000006;
tmp_entry.wh = 96.00000000000001;
tmp_entry.wx = 192.50000000000006;
tmp_entry.wy = 68.99999999999997;
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
tmp_entry.id = "entry_quest_archivist_0";
tmp_entry.fqid = "tunic.entry_quest_archivist_0";
{
tmp_entry.ww = 357;
tmp_entry.wh = 127;
tmp_entry.wx = 189.49999999999997;
tmp_entry.wy = 204.5;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_quest_archivist_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.closet_dirty.gramps.news",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_archivist_1";
tmp_entry.fqid = "tunic.entry_quest_archivist_1";
{
tmp_entry.ww = 357;
tmp_entry.wh = 127;
tmp_entry.wx = -184.5;
tmp_entry.wy = 58.500000000000014;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_quest_archivist_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_archivist_x_0";
tmp_entry.fqid = "tunic.entry_quest_archivist_x_0";
{
tmp_entry.ww = 363;
tmp_entry.wh = 93;
tmp_entry.wx = 192.49999999999997;
tmp_entry.wy = 204.5000000000001;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_0.slip",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_archivist_x_1";
tmp_entry.fqid = "tunic.entry_quest_archivist_x_1";
{
tmp_entry.ww = 363;
tmp_entry.wh = 93;
tmp_entry.wx = -193.5;
tmp_entry.wy = 50.500000000000114;
tmp_entry.wz = 100;
tmp_entry.page = 2;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.historicalsociety.frontdesk.archivist_1.library",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_basketball";
tmp_entry.fqid = "tunic.entry_quest_basketball";
{
tmp_entry.ww = 358.00000000000006;
tmp_entry.wh = 132.00000000000003;
tmp_entry.wx = 185.00000000000023;
tmp_entry.wy = -103.00000000000007;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_quest_basketball_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_library";
tmp_entry.fqid = "tunic.entry_quest_library";
{
tmp_entry.ww = 368;
tmp_entry.wh = 122.99999999999999;
tmp_entry.wx = -185;
tmp_entry.wy = -208.49999999999974;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_museum";
tmp_entry.fqid = "tunic.entry_quest_museum";
{
tmp_entry.ww = 364.99999999999994;
tmp_entry.wh = 127.00000000000003;
tmp_entry.wx = -184.49999999999997;
tmp_entry.wy = 91.49999999999999;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_museum_x";
tmp_entry.fqid = "tunic.entry_quest_museum_x";
{
tmp_entry.ww = 367.00000000000006;
tmp_entry.wh = 85.99999999999986;
tmp_entry.wx = -190.50000000000003;
tmp_entry.wy = 86.99999999999984;
tmp_entry.wz = 100;
tmp_entry.page = 1;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.reqs = [[
"tunic.capitol.hall.chap1_finale",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_squeakycleaners";
tmp_entry.fqid = "tunic.entry_quest_squeakycleaners";
{
tmp_entry.ww = 351;
tmp_entry.wh = 131;
tmp_entry.wx = 192.49999999999977;
tmp_entry.wy = -183.4999999999998;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_squeakycleaners_x";
tmp_entry.fqid = "tunic.entry_quest_squeakycleaners_x";
{
tmp_entry.ww = 348;
tmp_entry.wh = 102.00000000000001;
tmp_entry.wx = 190;
tmp_entry.wy = -187;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_textile";
tmp_entry.fqid = "tunic.entry_quest_textile";
{
tmp_entry.ww = 366;
tmp_entry.wh = 125.00000000000003;
tmp_entry.wx = 181.99999999999994;
tmp_entry.wy = 101.50000000000013;
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
"tunic.historicalsociety.frontdesk.archivist_0.slip",
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_textile_x";
tmp_entry.fqid = "tunic.entry_quest_textile_x";
{
tmp_entry.ww = 353;
tmp_entry.wh = 86.99999999999997;
tmp_entry.wx = 176.5;
tmp_entry.wy = 102.50000000000001;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_teddytaken";
tmp_entry.fqid = "tunic.entry_teddytaken";
{
tmp_entry.ww = 359;
tmp_entry.wh = 166.99999999999997;
tmp_entry.wx = -192.50000000000006;
tmp_entry.wy = -48.49999999999998;
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_wellsid";
tmp_entry.fqid = "tunic.entry_wellsid";
{
tmp_entry.ww = 360;
tmp_entry.wh = 189.00000000000006;
tmp_entry.wx = 178.99999999999997;
tmp_entry.wy = -61.500000000000036;
tmp_entry.wz = 100;
tmp_entry.page = 2;
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
tmp_entry.raw_notifications = [
];
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
tmp_scene.ww = 213;
tmp_scene.wh = 211.99999999999997;
tmp_scene.wx = 2.500000000000014;
tmp_scene.wy = 13.000000000000014;
tmp_scene.hover_icon_wx = -6.999999999999999;
tmp_scene.hover_icon_wy = 99;
tmp_scene.animcycle_id = "scene_capitol";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.raw_notification_ws = [
];
tmp_scene.notification_reqs = [[
]]
tmp_scene.notice_reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
"!tunic.capitol.hall.chapter2",
]]
tmp_scene.reqs = [[
"tunic.kohlcenter.halloffame.plaque.face.date",
]]

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
tmp_cutscene.id = "chapter2";
tmp_cutscene.fqid = "tunic.capitol.hall.chapter2";
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
"tunic.capitol.hall.chap1_finale",
"!tunic.capitol.hall.chapter2",
]];

tmp_cutscene.commands = [];

//setup black
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.ww = 880*2;
tmp_cutscene_command.wh = 660*2;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "black";
tmp_cutscene.commands.push(tmp_cutscene_command);

//setup chap
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "chapter2";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.ww = 880*2;
tmp_cutscene_command.wh = 660*2;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "chapter2";
tmp_cutscene.commands.push(tmp_cutscene_command);

//fade in black
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.t = 1;
tmp_cutscene_command.end_t = 50;
tmp_cutscene_command.a = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

//fade in chap
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter2";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.t = 100;
tmp_cutscene_command.end_t = 150;
tmp_cutscene_command.a = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

//fade out chap
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter2";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.t = 300;
tmp_cutscene_command.end_t = 350;
tmp_cutscene_command.a = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

//fade out black
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.t = 350;
tmp_cutscene_command.end_t = 380;
tmp_cutscene_command.a = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 380+81;
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
tmp_person.act_wx = -128.71268817057654;
tmp_person.act_wy = -132.32292036952302;
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -61.98269362666298;
tmp_speak_command.wy = 92.04119536641127;
tmp_speak_command.w = 132.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wells is wrong!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 344.34152276734835;
tmp_speak_command.wy = 289.85151664245063;
tmp_speak_command.w = 99.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Excuse me?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -100.39729675077723;
tmp_speak_command.wy = 136.924359272598;
tmp_speak_command.w = 160;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The shirt is not a basketball jersey!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -26.374195897146876;
tmp_speak_command.wy = 329.09150372483043;
tmp_speak_command.w = 183;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Slow down- what are you talking about?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -96.66667779527143;
tmp_speak_command.wy = 134.45454584177537;
tmp_speak_command.w = 158;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The yellow shirt in the collections-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -22.57829585861238;
tmp_speak_command.wy = 379.91950304014085;
tmp_speak_command.w = 179.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -74.0934473737639;
tmp_speak_command.wy = 328.40435152498935;
tmp_speak_command.w = 212.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Ah yes! THAT shirt. What's the problem now?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -170.8099922988929;
tmp_speak_command.wy = 130.76060754762608;
tmp_speak_command.w = 207.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wells is wrong- IT ISN'T A BASKETBALL JERSEY!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -161.0033573568378;
tmp_speak_command.wy = 333.89405624229494;
tmp_speak_command.w = 272;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Jolie, you can't just go around making accusations like that.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -83.73063008411049;
tmp_speak_command.wy = 329.34860169684043;
tmp_speak_command.w = 220;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak_command.raw_atext = "Wow!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 347.37182588292535;
tmp_speak_command.wy = 288.33636512338364;
tmp_speak_command.w = 144.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Excellent work!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -129.900901389802;
tmp_speak_command.wy = 380.7606075476261;
tmp_speak_command.w = 251.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I think you're right, Jolie- we definitely can't put Wells' shoddy research on display...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -151.11302260192323;
tmp_speak_command.wy = 336.82121360823214;
tmp_speak_command.w = 265.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I need you to work on this right away.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -8.68878017768074;
tmp_speak_command.wy = 88.3363651233837;
tmp_speak_command.w = 98.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wait- what";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -55.658477147377766;
tmp_speak_command.wy = 341.3666681536867;
tmp_speak_command.w = 200.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You'll need to find the story behind this shirt.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -90.50696199586261;
tmp_speak_command.wy = 333.7909105779291;
tmp_speak_command.w = 225.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "In the mean time, I need to have a word with Wells...";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -274.0934473737639;
tmp_speak_command.wy = 170.82859394923173;
tmp_speak_command.w = 273.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The plaque at the basketball museum shows that the women's team didn't start until 1974!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -98.08271957162017;
tmp_speak_command.wy = 380.7606075476261;
tmp_speak_command.w = 229.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Interesting- but I don't see how that means it isn't a basketball jersey...";
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
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];

tmp_speak.commands = [];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -129.90090138980202;
tmp_speak_command.wy = 374.70000148702;
tmp_speak_command.w = 323.69814225923324;
tmp_speak_command.h = 30;
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -222.57829585861236;
tmp_speak_command.wy = 128.40435152498935;
tmp_speak_command.w = 241.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I found this slip attached to the shirt- it's from 1916!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -208.94193222224874;
tmp_speak_command.wy = 126.88920000983781;
tmp_speak_command.w = 231.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "That's 58 years BEFORE the women's team was formed!";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -190.76011404043055;
tmp_speak_command.wy = 131.43465455529235;
tmp_speak_command.w = 221.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I found this slip attached- it's from 1916!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -104.14332563222621;
tmp_speak_command.wy = 383.79091057792914;
tmp_speak_command.w = 233.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -222.32514381404445;
tmp_speak_command.wy = 286.82121360823214;
tmp_speak_command.w = 313.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -268.0328413131578;
tmp_speak_command.wy = 182.9498060704439;
tmp_speak_command.w = 273.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The plaque at the basketball museum shows that the women's team didn't start until 1974-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -157.4267807070972;
tmp_speak_command.wy = 129.9195030401408;
tmp_speak_command.w = 197.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak_command.wx = 344.01768509522645;
tmp_speak_command.wy = 335.3209313765378;
tmp_speak_command.w = 172.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Jolie! I was hoping you'd stop by soon-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 345.8566737597514;
tmp_speak_command.wy = 327.730304545241;
tmp_speak_command.w = 216.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Have you found anything regarding the shirt exhibit?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 45.59306394909412;
tmp_speak_command.wy = 96.5866499118658;
tmp_speak_command.w = 63.698142259233265;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I did it!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -164.03366038714088;
tmp_speak_command.wy = 135.40920775744644;
tmp_speak_command.w = 202;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I've solved the mystery of the yellow tunic!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -26.374195897146876;
tmp_speak_command.wy = 329.09150372483043;
tmp_speak_command.w = 183;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "(\"MYSTERY\" is a bit over the top, but...)";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 40.292470769519916;
tmp_speak_command.wy = 333.636958270285;
tmp_speak_command.w = 140;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Ok then! What's the story?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -55.75758688618049;
tmp_speak_command.wy = 132.93939432662387;
tmp_speak_command.w = 130;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -22.57829585861238;
tmp_speak_command.wy = 379.91950304014085;
tmp_speak_command.w = 179.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak_command.wx = -74.0934473737639;
tmp_speak_command.wy = 328.40435152498935;
tmp_speak_command.w = 212.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Alright- well what is it?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -226.8705983594989;
tmp_speak_command.wy = 92.88181966883816;
tmp_speak_command.w = 243.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "It's a Dry Cleaner's receipt!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 26.875430521950108;
tmp_speak_command.wy = 333.89405624229494;
tmp_speak_command.w = 148;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Huh? How did you figure that out?";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak_command.wx = -74.0934473737639;
tmp_speak_command.wy = 328.40435152498935;
tmp_speak_command.w = 212.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Aha! An expert opinion- good thinking!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -130.15405343436996;
tmp_speak_command.wy = 287.4952606158985;
tmp_speak_command.w = 253.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Where did you go from there?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -173.84029532919595;
tmp_speak_command.wy = 179.24545603247452;
tmp_speak_command.w = 207.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak_command.raw_atext = "And this turned out to be the dry cleaner with the slip?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -16.517689798006273;
tmp_speak_command.wy = 285.9801091007469;
tmp_speak_command.w = 176.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "What a lucky break!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -328.38574987465046;
tmp_speak_command.wy = 89.85151663853516;
tmp_speak_command.w = 313.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Can't get far without a little luck!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -61.00335735683777;
tmp_speak_command.wy = 329.34860169684043;
tmp_speak_command.w = 207;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Alright, so what did you when you got there?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -182.93120442010502;
tmp_speak_command.wy = 130.76060754762608;
tmp_speak_command.w = 213.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Well I wanted to find out who the owner was-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -49.597871086771676;
tmp_speak_command.wy = 138.33636512338364;
tmp_speak_command.w = 124.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak_command.wx = -114.74938623828686;
tmp_speak_command.wy = 138.33636512338364;
tmp_speak_command.w = 167.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "It was owned by Theodora Youmans!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 139.54291626259982;
tmp_speak_command.wy = 284.4649575855954;
tmp_speak_command.w = 71.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Hooray!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -13.487386767703256;
tmp_speak_command.wy = 334.46495758559547;
tmp_speak_command.w = 172.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wait. Who is Theodora Youmans?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -70.80999229889292;
tmp_speak_command.wy = 136.82121360823209;
tmp_speak_command.w = 138.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "That's the same question I had.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -170.8099922988929;
tmp_speak_command.wy = 130.76060754762608;
tmp_speak_command.w = 207.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak_command.raw_atext = "Wow! So Theodora Youmans was a suffragist?";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -154.14332563222624;
tmp_speak_command.wy = 177.73030451732308;
tmp_speak_command.w = 194.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Yep! That means that she fought for womens' right to vote.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 33.4823102019937;
tmp_speak_command.wy = 293.5558666765045;
tmp_speak_command.w = 141.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Very good Jolie!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -105.9116291919457;
tmp_speak_command.wy = 370.8285939492318;
tmp_speak_command.w = 234.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The fight for womens' right to vote is an important part of Wisconsin history,";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 15.30049202017554;
tmp_speak_command.wy = 332.94980607044386;
tmp_speak_command.w = 155.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak_command.wx = 13.785340505023996;
tmp_speak_command.wy = 289.0104121310499;
tmp_speak_command.w = 157.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wow! There she is!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -74.0934473737639;
tmp_speak_command.wy = 328.40435152498935;
tmp_speak_command.w = 212.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "This shirt was used in marches by suffragists!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 3.179279898963415;
tmp_speak_command.wy = 334.46495758559547;
tmp_speak_command.w = 163.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "What a fanstastic piece of history-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -152.88132616164265;
tmp_speak_command.wy = 287.4952606158985;
tmp_speak_command.w = 265.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak_command.raw_atext = "I'm going to need you and Leopold to write this up A.S.A.P.!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -249.85102313133967;
tmp_speak_command.wy = 329.9195030401409;
tmp_speak_command.w = 328.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "The fight to ensure women had a right to vote needs to be celebrated!";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 1.664128383811871;
tmp_speak_command.wy = 331.4346545552924;
tmp_speak_command.w = 162.69814225923326;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
"tunic.historicalsociety.closet_dirty",
"!tunic.historicalsociety.stacks.journals.pic_2.bingo",
]]

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 344.34152276734835;
tmp_speak_command.wy = 289.85151664245063;
tmp_speak_command.w = 99.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Jolie! I was hoping you'd stop by soon-";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 344.34152276734835;
tmp_speak_command.wy = 289.85151664245063;
tmp_speak_command.w = 99.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Have you found anything regarding the shirt exhibit?"
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 344.34152276734835;
tmp_speak_command.wy = 289.85151664245063;
tmp_speak_command.w = 99.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I'm haven't quite figured it out just yet..."
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 344.34152276734835;
tmp_speak_command.wy = 289.85151664245063;
tmp_speak_command.w = 99.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "We need to have this exhibit ready! Get on it!"
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
tmp_speak_command.wx = -15.24765102218548;
tmp_speak_command.wy = 334.4654377906537;
tmp_speak_command.w = 177.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I need you to get to work on this shirt!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -230.1645121504759;
tmp_speak_command.wy = 332.9502862755022;
tmp_speak_command.w = 349.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Now that we know what this jersy ISN'T, we need to find out what it IS!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -230.39742081960944;
tmp_speak_command.wy = 337.49574082095677;
tmp_speak_command.w = 321.69814225923324;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "If you don't know where to start, maybe you can ask Leop- er, Gramps.";
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
tmp_speak_command.raw_atext = "The fight to ensure women had a right to vote needs to be celebrated!";
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

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.capitol.hall.gramps.hub";
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
tmp_speak_command.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
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
tmp_wildcard.id = "chap1_finale";
tmp_wildcard.fqid = "tunic.capitol.hall.chap1_finale";
{
tmp_wildcard.ww = 426.91231555545414;
tmp_wildcard.wh = 371.7675989508338;
tmp_wildcard.wx = 163.45710119735844;
tmp_wildcard.wy = 10.983533523144644;
tmp_wildcard.wz = 1;
tmp_wildcard.act_wx = 25.753374984032348;
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
"!self",
]];

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
tmp_wildcard.ww = 154.18504282818134;
tmp_wildcard.wh = 323.2827504659853;
tmp_wildcard.wx = 298.30558604584337;
tmp_wildcard.wy = 39.771412311023454;
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
tmp_wildcard.audio_id = "null";
tmp_wildcard.raw_notifications = [
];
tmp_wildcard.raw_notification_ws = [
];
tmp_wildcard.notification_reqs = [[
]]
tmp_wildcard.notice_reqs = [[
]]
tmp_wildcard.reqs = [[
"tunic.historicalsociety.stacks.journals.pic_2.bingo",
"!self",
]]

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
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_expert", prompt:stextToLines("From whom did I learn it was a dry cleaners?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap2_finale_1_fail"] },
{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap2_finale_2" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_cleanercard", prompt:stextToLines("How did I learn which dry cleaner to go to?", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap2_finale_2_fail"] },

{ command:FINALE_WILDCARD_COMMAND_SPEAK, speak_fqid:"tunic.capitol.hall.boss.chap2_finale_3" },
{ command:FINALE_WILDCARD_COMMAND_NOTEBOOK, entry_fqid:"tunic.entry_logbook", prompt:stextToLines("Show her how I figured out the name of the shirt's owner.", tmp_level.notifications_w), fail:["tunic.capitol.hall.boss.chap2_finale_3_fail"] },

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
          my_notebookview.cache_available_entrys[i].hoverexpand = min(1,my_notebookview.cache_available_entrys[i].hoverexpand+0.2);
        }
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
tmp_inert.reqs = [[
]];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "tunic";
tmp_inert.fqid = "tunic.capitol.hall.tunic";
{
tmp_inert.ww = 84.99947873925443;
tmp_inert.wh = 227.2764210563526;
tmp_inert.wx = 437.12436656161833;
tmp_inert.wy = 36.842995349206774;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "capitol_tunic";
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
tmp_scene.hover_icon_wx = -44;
tmp_scene.hover_icon_wy = 24;
tmp_scene.animcycle_id = "scene_drycleaner";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
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
tmp_person.wz = 1;
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
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip01";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip01";
{
tmp_speak.primary = false;
tmp_speak.options_wx = -368;
tmp_speak.options_wy = 142;
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
tmp_speak_command.wx = -295;
tmp_speak_command.wy = 136.00000000000003;
tmp_speak_command.w = 179;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "No thanks. I need to figure out who this slip belonged to.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
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
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip04";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip04";
{
tmp_speak.primary = false;
tmp_speak.options_wx = -345;
tmp_speak.options_wy = 112.99999999999996;
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
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
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
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_option.raw_notification_ws[i] ? tmp_option.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_speak_command.speaker = SPEAKER_AVATAR;
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
tmp_speak_command.speaker = SPEAKER_AVATAR;
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
tmp_speak_command.speaker = SPEAKER_AVATAR;
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
tmp_object.notifications_persistent = 1;
tmp_object.raw_notifications = [
"I have to find the entry for this slip",
];
tmp_object.raw_notification_ws = [
];
tmp_object.notification_reqs = [[
]];
tmp_object.view_overlay_reqs = [[
]];
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
tmp_object.view_overlay_animcycle_inst = gen_animcycle_inst(tmp_object.view_overlay_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_object.raw_notification_ws[i] ? tmp_object.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_view.exit_reqs = [[
"tunic.drycleaner.frontdesk.logbook.page.bingo"
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
tmp_zone.target_view = "page";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"The number matches the slip-",
"Theodora Youmans must be the owner.",
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
tmp_scene.hover_icon_wx = -22;
tmp_scene.hover_icon_wy = 12.999999999999998;
tmp_scene.animcycle_id = "scene_historicalsociety";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
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
"tunic.capitol.hall.chapter2",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
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
];
tmp_room.shadows = [
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
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_observation.raw_notification_ws[i] ? tmp_observation.raw_notification_ws[i] : tmp_level.notifications_w);
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
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
]];

tmp_cutscene.commands = [];

//move avi
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

//move cam
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "gramps";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);

//setup black
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.ww = 880;
tmp_cutscene_command.wh = 660;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 1;
tmp_cutscene_command.animcycle_id = "black";
tmp_cutscene.commands.push(tmp_cutscene_command);

//setup chap
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;
tmp_cutscene_command.cutscene_entity_id = "chapter1";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.ww = 880;
tmp_cutscene_command.wh = 660;
tmp_cutscene_command.wz = 999;
tmp_cutscene_command.a = 0;
tmp_cutscene_command.animcycle_id = "chapter1";
tmp_cutscene.commands.push(tmp_cutscene_command);

//fade in chap
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter1";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.t = 10;
tmp_cutscene_command.end_t = 50;
tmp_cutscene_command.a = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);

//fade out chap
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "chapter1";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.t = 200;
tmp_cutscene_command.end_t = 250;
tmp_cutscene_command.a = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

//fade out black
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "black";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;
tmp_cutscene_command.t = 250;
tmp_cutscene_command.end_t = 280;
tmp_cutscene_command.a = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_WAIT;
tmp_cutscene_command.t = 280+1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 280+1;
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
tmp_cutscene_command.t = 280+2;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "teddy";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 280+80;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 280+81;
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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
"!tunic.historicalsociety.closet.teddy.intro_0_cs_0",
]]
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 200.1141705840032;
tmp_speak_command.wy = -7.068034501009009;
tmp_speak_command.w = 164;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "avatar_angry";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Teddy, you have to stay hidden today!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 211.60354799515324;
tmp_speak_command.wy = -7.502648845687112;
tmp_speak_command.w = 155;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "avatar_nervous";
tmp_speak_command.audio_id = "null";
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
tmp_option.raw_notifications = [
];
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
tmp_speak.raw_notifications = [
];
tmp_speak.reqs = [[
]];
tmp_speak.commands = [];
tmp_speak_command = new speak_command();
tmp_speak_command.wx = 503.99470230862664;
tmp_speak_command.wy = -54.625662211421684;
tmp_speak_command.w = 103;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
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
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
"My notebook!",
];
tmp_object.raw_notification_ws = [
118,
];
tmp_object.notice_reqs = [[
]]
tmp_object.notification_reqs = [[
]]
tmp_object.reqs = [[
"!tunic.historicalsociety.closet.notebook",
]]

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
tmp_view.animcycle_id = "notebook";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
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
"Gramps is the best historian I've ever met!",
];
tmp_view.raw_notification_ws = [
336,
164,
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
tmp_porthole = new porthole();
tmp_porthole.id = "tosecret";
tmp_porthole.fqid = "tunic.historicalsociety.closet.tosecret";
{
tmp_porthole.ww = 100;
tmp_porthole.wh = 100;
tmp_porthole.wx = 703.1164392547275;
tmp_porthole.wy = -153.00850952657993;
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
tmp_porthole.target_room = "secret";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
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
tmp_inert.wx = 495.13090142039175;
tmp_inert.wy = 25.409940747932296;
tmp_inert.wz = 999;
tmp_inert.g = 0.2;
tmp_inert.animcycle_id = "room_historicalsociety_closet_fgpipes";
tmp_inert.deck_animcycle_ids = [
];
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
tmp_inert.id = "gidle";
tmp_inert.fqid = "tunic.historicalsociety.closet.gidle";
{
tmp_inert.ww = 882.9123074499626;
tmp_inert.wh = 440.9999593461816;
tmp_inert.wx = -499.6497021814614;
tmp_inert.wy = 131.6112239061366;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "gramps_idle";
tmp_inert.deck_animcycle_ids = [
];
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
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -300.2397092357229;
tmp_cutscene_command.wy = 1.7180637800989729;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.a = -927345892;
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
tmp_cutscene_command.raw_text = "I should help Gramps clean-";
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
tmp_cutscene_command.raw_text = "Then I can tell him about the jersey!";
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
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -300.2397092357229;
tmp_cutscene_command.wy = 1.7180637800989729;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.a = -927345892;
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
tmp_cutscene_command.raw_text = "I need to tell Gramps the good news about the jersey!";
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
tmp_cutscene_command.wx = 325.60678391848876;
tmp_cutscene_command.wy = -37.74577410560228;
tmp_cutscene_command.wz = -927345892;
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
tmp_cutscene_command.raw_text = "Nope, I only drink Holdgers!";
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
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -26.21054725108695;
tmp_cutscene_command.wy = -47.316511166522886;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.a = -927345892;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -54.75293298639433;
tmp_cutscene_command.wy = 11.607584570325315;
tmp_cutscene_command.w = 194;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Teddy's scarf is here! Where is he?";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -447.76600362306937;
tmp_cutscene_command.wy = 156.84622477659704;
tmp_cutscene_command.w = 231;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "I'm sure he's okay, Jo. Maybe he's out for a walk.";
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = -57.82992245664413;
tmp_cutscene_command.wy = 47.43299414558694;
tmp_cutscene_command.w = 217;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "But he never goes anywhere without his scarf. Someone took him!";
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
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -316.7991661263066;
tmp_cutscene_command.wy = -8.58032647069195;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.a = -927345892;
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
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -600;
tmp_cutscene_command.wy = -160;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.a = -927345892;
tmp_cutscene_command.t = 2;
tmp_cutscene_command.end_t = 80;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "gramps";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -389.8354361452792;
tmp_cutscene_command.wy = -9.427083168642291;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.a = -927345892;
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
tmp_cutscene_command.raw_text = "What happened here!?";
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
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
"!tunic.historicalsociety.closet_dirty.gramps",
]]
tmp_person.notification_reqs = [[
]]
tmp_person.reqs = [[
]]

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
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]]
tmp_speak.reqs = [[
"tunic.historicalsociety.closet_dirty.gramps.news",
]]

tmp_speak_command = new speak_command();
tmp_speak_command.wx = -697.495978309857;
tmp_speak_command.wy = 138.8628126296922;
tmp_speak_command.w = 141;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "So much to do...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -589.495978309857;
tmp_speak_command.wy = 53.8628126296922;
tmp_speak_command.w = 165;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Where do you want me to go, again?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -694.990349968848;
tmp_speak_command.wy = 158.8548703987072;
tmp_speak_command.w = 299;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Go show what you've found to the archivist. He might be able to help.";
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
tmp_speak_command.wx = -775.368612777346;
tmp_speak_command.wy = 191.00025319616577;
tmp_speak_command.w = 207;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Well, looks like we need to get to cleanin'!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -639.0076065647739;
tmp_speak_command.wy = 62.8554732246652;
tmp_speak_command.w = 209;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "But the jersey! I talked to the boss and-";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -743.9909450405889;
tmp_speak_command.wy = 169.854891205863;
tmp_speak_command.w = 231;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "Now now- help me clean up first and then we'll talk.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -733.9903540783639;
tmp_speak_command.wy = 164.85487054239968;
tmp_speak_command.w = 294;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "You've got a bit of a mess over in your area- why not start there?";
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
tmp_speak_command.raw_atext = "Thanks for helping clean up the place.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -691.5505726915911;
tmp_speak_command.wy = 159.8547968194623;
tmp_speak_command.w = 187;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I don't know who could have done this!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -583.495978309857;
tmp_speak_command.wy = 17.862812629692186;
tmp_speak_command.w = 136;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I have an idea...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -582.495978309857;
tmp_speak_command.wy = 49.86281262969217;
tmp_speak_command.w = 321;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "He's wrong about basketball jerseys and his name rhymes with \"smells\"...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -690.9903543841413;
tmp_speak_command.wy = 163.85486998778583;
tmp_speak_command.w = 265;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Wrong about the jersey- does this mean you found a clue!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -576.990349968848;
tmp_speak_command.wy = 53.85487039870716;
tmp_speak_command.w = 337;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "YES! I even talked to the boss- she says that I'm hired to fix Wells' mess!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -584.9903499688528;
tmp_speak_command.wy = 18.85487039870719;
tmp_speak_command.w = 292;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "And I need your help- I'M LIKE 12.";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -694.990349968848;
tmp_speak_command.wy = 154.85487039870713;
tmp_speak_command.w = 166;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Oh no, Jolie I don't have time for this!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -581.495978309857;
tmp_speak_command.wy = 19.862812629692193;
tmp_speak_command.w = 23;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -694.990349968848;
tmp_speak_command.wy = 155.8548703987072;
tmp_speak_command.w = 292;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "I'd love to work on this case, but I've lost my paperwork again,";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -694.990349968848;
tmp_speak_command.wy = 127.85487039870718;
tmp_speak_command.w = 259;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "and my office is still trashed!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -690.990349968848;
tmp_speak_command.wy = 121.85487039870718;
tmp_speak_command.w = 207;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "You're on your own, Jo!";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -693.990349968848;
tmp_speak_command.wy = 156.8548703987072;
tmp_speak_command.w = 205;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "At least until I can get my things in order...";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -587.990349968848;
tmp_speak_command.wy = 23.8548703987072;
tmp_speak_command.w = 128;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Leave it to me!";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -580.990349968848;
tmp_speak_command.wy = 24.854870398707163;
tmp_speak_command.w = 33;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -582.990349968848;
tmp_speak_command.wy = 22.85487039870719;
tmp_speak_command.w = 37;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -585.990349968848;
tmp_speak_command.wy = 23.8548703987072;
tmp_speak_command.w = 43;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Um...";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -588.990349968848;
tmp_speak_command.wy = 21.854870398707185;
tmp_speak_command.w = 156;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Where do I start?";
tmp_speak_command.speaker = SPEAKER_AVATAR;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -693.990349968848;
tmp_speak_command.wy = 158.8548703987072;
tmp_speak_command.w = 299;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Go show what you've found to the archivist. He might be able to help.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -693.990349968848;
tmp_speak_command.wy = 158.8548703987072;
tmp_speak_command.w = 203;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "He's our expert record keeper- right upstairs.";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);
tmp_speak_command = new speak_command();
tmp_speak_command.wx = -583.990349968848;
tmp_speak_command.wy = 21.854870398707185;
tmp_speak_command.w = 52;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.raw_atext = "Right!";
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
