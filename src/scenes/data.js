
var levels = [];

var tmp_animcycle;
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

var init_levels = function()
{

tmp_level = new level();
tmp_level.id = "l1";
tmp_level.fqid = "l1";
{
tmp_level.primary = false;

tmp_animcycle = new animcycle();
tmp_animcycle.id = "archives";
tmp_animcycle.fqid = "l1.archives";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/archives/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archives_scene";
tmp_animcycle.fqid = "l1.archives_scene";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/archives_scene/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist";
tmp_animcycle.fqid = "l1.archivist";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/archivist/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist_drycleaning";
tmp_animcycle.fqid = "l1.archivist_drycleaning";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/archivist_drycleaning/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist_hello";
tmp_animcycle.fqid = "l1.archivist_hello";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/archivist_hello/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist_hub";
tmp_animcycle.fqid = "l1.archivist_hub";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/archivist_hub/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist_paper";
tmp_animcycle.fqid = "l1.archivist_paper";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/archivist_paper/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "capitol";
tmp_animcycle.fqid = "l1.capitol";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/capitol/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner";
tmp_animcycle.fqid = "l1.cleaner";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/cleaner/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner_hello";
tmp_animcycle.fqid = "l1.cleaner_hello";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/cleaner_hello/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner_hub";
tmp_animcycle.fqid = "l1.cleaner_hub";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/cleaner_hub/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner_log";
tmp_animcycle.fqid = "l1.cleaner_log";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/cleaner_log/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "drycleaners";
tmp_animcycle.fqid = "l1.drycleaners";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/drycleaners/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "drycleaners_scene";
tmp_animcycle.fqid = "l1.drycleaners_scene";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/drycleaners_scene/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "exhibit";
tmp_animcycle.fqid = "l1.exhibit";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/exhibit/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "log_evidence";
tmp_animcycle.fqid = "l1.log_evidence";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/log_evidence/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "log_evidence_swapback";
tmp_animcycle.fqid = "l1.log_evidence_swapback";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/log_evidence_swapback/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "log_number";
tmp_animcycle.fqid = "l1.log_number";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/log_number/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "log_number_swapback";
tmp_animcycle.fqid = "l1.log_number_swapback";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/log_number_swapback/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "log_number_to_evidence";
tmp_animcycle.fqid = "l1.log_number_to_evidence";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/log_number_to_evidence/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "log_redherring";
tmp_animcycle.fqid = "l1.log_redherring";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/log_redherring/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "log_redherring_swapback";
tmp_animcycle.fqid = "l1.log_redherring_swapback";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/log_redherring_swapback/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "ls";
tmp_animcycle.fqid = "l1.ls";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/ls/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "map";
tmp_animcycle.fqid = "l1.map";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/map/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "my_cutscene";
tmp_animcycle.fqid = "l1.my_cutscene";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/my_cutscene/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "null";
tmp_animcycle.fqid = "l1.null";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/null/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "paper";
tmp_animcycle.fqid = "l1.paper";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/paper/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "paper_evidence";
tmp_animcycle.fqid = "l1.paper_evidence";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/paper_evidence/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "paper_evidence_zone";
tmp_animcycle.fqid = "l1.paper_evidence_zone";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/paper_evidence_zone/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "paper_pic";
tmp_animcycle.fqid = "l1.paper_pic";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/paper_pic/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "paper_swapback";
tmp_animcycle.fqid = "l1.paper_swapback";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/paper_swapback/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "paper_view_redherring";
tmp_animcycle.fqid = "l1.paper_view_redherring";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/paper_view_redherring/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "test_entry";
tmp_animcycle.fqid = "l1.test_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/test_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic";
tmp_animcycle.fqid = "l1.tunic";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_back";
tmp_animcycle.fqid = "l1.tunic_back";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic_back/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_back_swapback";
tmp_animcycle.fqid = "l1.tunic_back_swapback";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic_back_swapback/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_back_zone";
tmp_animcycle.fqid = "l1.tunic_back_zone";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic_back_zone/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_object";
tmp_animcycle.fqid = "l1.tunic_object";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic_object/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_pocket";
tmp_animcycle.fqid = "l1.tunic_pocket";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic_pocket/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_pocket_swapback";
tmp_animcycle.fqid = "l1.tunic_pocket_swapback";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic_pocket_swapback/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_slip";
tmp_animcycle.fqid = "l1.tunic_slip";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic_slip/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_slip_swapback";
tmp_animcycle.fqid = "l1.tunic_slip_swapback";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic_slip_swapback/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_to_slip";
tmp_animcycle.fqid = "l1.tunic_to_slip";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/tunic_to_slip/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "uncle";
tmp_animcycle.fqid = "l1.uncle";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/uncle/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "uncle_dispute";
tmp_animcycle.fqid = "l1.uncle_dispute";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/uncle_dispute/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "uncle_help";
tmp_animcycle.fqid = "l1.uncle_help";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/uncle_help/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "uncle_hub";
tmp_animcycle.fqid = "l1.uncle_hub";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/uncle_hub/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "uncle_philtest";
tmp_animcycle.fqid = "l1.uncle_philtest";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 1;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/l1/animcycles/uncle_philtest/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
for(var i = 0; i < tmp_level.animcycles.length; i++)
if(tmp_level.animcycles[i].id == "null") null_animcycle = tmp_level.animcycles[i];
tmp_entry = new entry();
tmp_entry.id = "testentry";
tmp_entry.fqid = "l1.testentry";
{
tmp_entry.index = 0;
tmp_entry.animcycle_id = "null";
tmp_entry.locks = [
];
tmp_entry.notlocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
}
tmp_level.entrys.push(tmp_entry);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "my_cutscene";
tmp_cutscene.fqid = "l1.my_cutscene";
{
tmp_cutscene.x = canv.width-200;
tmp_cutscene.y = 100;
tmp_cutscene.w = 100;
tmp_cutscene.h = 100;
tmp_cutscene.animations = [
];
tmp_cutscene.noteworthy = false;
tmp_cutscene.locks = [
];
tmp_cutscene.notlocks = [
];

tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = COMMAND_NULL;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene_command.cutscene_entity_id = "null"; //references entity
tmp_cutscene_command.animation_id = "null"; //references animation ("penny")
tmp_cutscene_command.animation_anim = 0; //references anim ("walk")
tmp_cutscene_command.x = 10;
tmp_cutscene_command.y = 10;
tmp_cutscene_command.w = 10;
tmp_cutscene_command.h = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

}
tmp_level.cutscenes.push(tmp_cutscene);
tmp_map = new map();
tmp_map.id = "map";
tmp_map.fqid = "l1.map";
{
tmp_map.animcycle_inst = gen_animcycle_inst(tmp_map.animcycle_id,tmp_level.animcycles);
tmp_scene = new scene();
tmp_scene.id = "archives";
tmp_scene.fqid = "l1.map.archives";
{
tmp_scene.primary = false;
tmp_scene.animcycle_id = "null";
tmp_scene.x = 198;
tmp_scene.y = 420;
tmp_scene.w = 102;
tmp_scene.h = 83;
tmp_scene.locks = [
  "l1.map.capitol.exhibit.tunic.slip",
];
tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "main";
tmp_room.fqid = "l1.map.archives.main";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "null";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "archivist";
tmp_person.fqid = "l1.map.archives.main.archivist";
{
tmp_person.x = 150;
tmp_person.y = canv.height/2-170;
tmp_person.w = 100;
tmp_person.h = 200;
tmp_person.animcycle_id = "null";

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "dryclean";
tmp_speak.fqid = "l1.map.archives.main.archivist.dryclean";
{
tmp_speak.primary = false;
tmp_speak.animcycle_id = "null";
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.raw_atext = "I don't know- I guess it looks like a dry cleaner tag?";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
  "l1.map.capitol.exhibit.tunic.slip",
];
tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.archives.main.archivist.dryclean.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "null";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hello";
tmp_speak.fqid = "l1.map.archives.main.archivist.hello";
{
tmp_speak.primary = false;
tmp_speak.animcycle_id = "null";
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.raw_atext = "I'm p good thanks";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.archives.main.archivist.hello.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "null";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "l1.map.archives.main.archivist.hub";
{
tmp_speak.primary = true;
tmp_speak.animcycle_id = "null";
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.raw_atext = "Hello customer";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
];
tmp_speak.notlocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "dryclean";
tmp_option.fqid = "l1.map.archives.main.archivist.hub.dryclean";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "Hey mister what's this slip?";
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.archives.main.archivist.dryclean";
tmp_option.noteworthy = false;
tmp_option.locks = [
  "l1.map.capitol.exhibit.tunic.slip",
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "hello";
tmp_option.fqid = "l1.map.archives.main.archivist.hub.hello";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "Hey there";
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.archives.main.archivist.hello";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "paper";
tmp_option.fqid = "l1.map.archives.main.archivist.hub.paper";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "What do you have about this lady?";
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.archives.main.archivist.paper";
tmp_option.noteworthy = false;
tmp_option.locks = [
  "l1.map.drycleaner.main.log.bingo",
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.archives.main.archivist.hub.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "Thanks";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "paper";
tmp_speak.fqid = "l1.map.archives.main.archivist.paper";
{
tmp_speak.primary = false;
tmp_speak.animcycle_id = "null";
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.raw_atext = "I've got this stack of papers about this lady!";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
  "l1.map.drycleaner.main.log.bingo",
];
tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.archives.main.archivist.paper.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "null";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
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
tmp_object.x = canv.width-200;
tmp_object.y = 100;
tmp_object.w = 80;
tmp_object.h = 80;
tmp_object.animcycle_id = "null";
tmp_object.locks = [
  "l1.map.archives.main.archivist.paper",
];
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "conclusion";
tmp_view.fqid = "l1.map.archives.main.paper.conclusion";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";
tmp_view.noteworthy = false;
tmp_view.locks = [
];
tmp_view.notlocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.archives.main.paper.conclusion.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.archives.main.paper.pic";
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
tmp_view.id = "pic";
tmp_view.fqid = "l1.map.archives.main.paper.pic";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.archives.main.paper.pic.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.archives.main.paper.rh";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
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
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.archives.main.paper.conclusion";

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "rh";
tmp_view.fqid = "l1.map.archives.main.paper.rh";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.archives.main.paper.rh.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.archives.main.paper.pic";
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
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "capitol";
tmp_scene.fqid = "l1.map.capitol";
{
tmp_scene.primary = true;
tmp_scene.animcycle_id = "null";
tmp_scene.x = canv.width/2-55;
tmp_scene.y = canv.height/2-60;
tmp_scene.w = 124;
tmp_scene.h = 124;
tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "exhibit";
tmp_room.fqid = "l1.map.capitol.exhibit";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "exhibit";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "uncle";
tmp_person.fqid = "l1.map.capitol.exhibit.uncle";
{
tmp_person.x = 150;
tmp_person.y = canv.height/2-160;
tmp_person.w = 120;
tmp_person.h = 270;
tmp_person.animcycle_id = "null";
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "dispute";
tmp_speak.fqid = "l1.map.capitol.exhibit.uncle.dispute";
{
tmp_speak.primary = false;
tmp_speak.animcycle_id = "null";
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.raw_atext = "Wow you did it!";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
];
tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.dispute.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "thanks";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "help";
tmp_speak.fqid = "l1.map.capitol.exhibit.uncle.help";
{
tmp_speak.primary = false;
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.animcycle_id = "null";
tmp_speak.raw_atext = "You have to help me! I don't know what the heck this tunic is for!";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.help.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "thanks";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "l1.map.capitol.exhibit.uncle.hub";
{
tmp_speak.primary = true;
tmp_speak.animcycle_id = "null";
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30;
tmp_speak.raw_atext = "Hello neice";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30;
tmp_speak.locks = [
];
tmp_speak.notlocks = [
];
tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "dispute";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.hub.dispute";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "I think you're wrong";
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.capitol.exhibit.uncle.dispute";
tmp_option.noteworthy = false;
tmp_option.locks = [
  "l1.map.archives.main.paper.conclusion",
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "help";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.hub.help";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "What's up";
tmp_option.index = 0;
tmp_option.target_speak = "l1.map.capitol.exhibit.uncle.help";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.hub.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "thanks";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "philtest";
tmp_speak.fqid = "l1.map.capitol.exhibit.uncle.philtest";
{
tmp_speak.primary = false;
tmp_speak.animcycle_id = "null";
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.noteworthy = false;
tmp_speak.locks = [
];
tmp_speak.notlocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "l1.map.capitol.exhibit.uncle.philtest.goodbye";
{
tmp_option.x = 100;
tmp_option.y = 100;
tmp_option.w = canv.width/2;
tmp_option.h = 30; //h of single line
tmp_option.static = false; //static = use xyw
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
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
tmp_object.x = canv.width-220;
tmp_object.y = 180;
tmp_object.w = 120;
tmp_object.h = 120;
tmp_object.animcycle_id = "null";

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "pocket";
tmp_view.fqid = "l1.map.capitol.exhibit.tunic.pocket";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.capitol.exhibit.tunic.pocket.back";
{
tmp_zone.x = canv.width/2+200;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.capitol.exhibit.tunic.tunic";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
}
tmp_view.zones.push(tmp_zone);
tmp_zone = new zone();
tmp_zone.id = "slip";
tmp_zone.fqid = "l1.map.capitol.exhibit.tunic.pocket.slip";
{
tmp_zone.x = canv.width/2+40;
tmp_zone.y = canv.height/2+30;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.capitol.exhibit.tunic.slip"
tmp_zone.noteworthy = false;

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "slip";
tmp_view.fqid = "l1.map.capitol.exhibit.tunic.slip";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";
tmp_view.noteworthy = true;
tmp_view.locks = [
];
tmp_view.notlocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.capitol.exhibit.tunic.slip.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.capitol.exhibit.tunic.pocket";
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
tmp_view.id = "tunic";
tmp_view.fqid = "l1.map.capitol.exhibit.tunic.tunic";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "null";

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.capitol.exhibit.tunic.tunic.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.capitol.exhibit.tunic.pocket";
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
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "drycleaner";
tmp_scene.fqid = "l1.map.drycleaner";
{
tmp_scene.primary = false;
tmp_scene.animcycle_id = "null";
tmp_scene.x = canv.width-422;
tmp_scene.y = canv.height-222;
tmp_scene.w = 80;
tmp_scene.h = 80;
tmp_scene.locks = [
  "l1.map.archives.main.archivist.dryclean",
];
tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "main";
tmp_room.fqid = "l1.map.drycleaner.main";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "drycleaners";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "cleaner";
tmp_person.fqid = "l1.map.drycleaner.main.cleaner";
{
tmp_person.x = 70;
tmp_person.y = canv.height/2-100;
tmp_person.w = 100;
tmp_person.h = 120;
tmp_person.animcycle_id = "null";

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hello";
tmp_speak.fqid = "l1.map.drycleaner.main.cleaner.hello";
{
tmp_speak.primary = false;
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.animcycle_id = "null";
tmp_speak.raw_atext = "Honestly I've been better";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.drycleaner.main.cleaner.hello.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "null";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "l1.map.drycleaner.main.cleaner.hub";
{
tmp_speak.primary = true;
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.raw_atext = "Hello customer";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.animcycle_id = "null";
tmp_speak.locks = [
];
tmp_speak.notlocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "log";
tmp_option.fqid = "l1.map.drycleaner.main.cleaner.hub.log";
{
tmp_option.x = 100;
tmp_option.y = 100;
tmp_option.w = canv.width/2;
tmp_option.h = 30; //h of single line
tmp_option.static = false; //static = use xyw
tmp_option.index = 0;
tmp_option.raw_qtext = "Can I see your log I have this slip";
tmp_option.target_speak = "l1.map.drycleaner.main.cleaner.log";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.drycleaner.main.cleaner.hub.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "null";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "log";
tmp_speak.fqid = "l1.map.drycleaner.main.cleaner.log";
{
tmp_speak.primary = false;
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.animcycle_id = "null";
tmp_speak.raw_atext = "I don't really care here's a log from the past 100 years of customers knock yourself out";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.locks = [
  "l1.map.capitol.exhibit.tunic.slip",
];
tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "thanks";
tmp_option.fqid = "l1.map.drycleaner.main.cleaner.log.thanks";
{
tmp_option.h = 30;
tmp_option.raw_qtext = "null";
tmp_option.index = 0;
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
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
tmp_object.x = canv.width-200;
tmp_object.y = 250;
tmp_object.w = 80;
tmp_object.h = 80;
tmp_object.animcycle_id = "log";
tmp_object.locks = [
  "l1.map.drycleaner.main.cleaner.log",
];
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "bingo";
tmp_view.fqid = "l1.map.drycleaner.main.log.bingo";
{
tmp_view.primary = false;
tmp_view.noteworthy = false;
tmp_view.animcycle_id = "paper_evidence";
tmp_view.locks = [
];
tmp_view.notlocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.drycleaner.main.log.bingo.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.drycleaner.main.log.number";
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
tmp_view.id = "number";
tmp_view.fqid = "l1.map.drycleaner.main.log.number";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.drycleaner.main.log.number.back";
{
tmp_zone.x = 100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.drycleaner.main.log.rh";
tmp_zone.noteworthy = false;
tmp_zone.locks = [
];
tmp_zone.notlocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
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
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.drycleaner.main.log.bingo";

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "rh";
tmp_view.fqid = "l1.map.drycleaner.main.log.rh";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "log_redherring";

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
tmp_zone = new zone();
tmp_zone.id = "back";
tmp_zone.fqid = "l1.map.drycleaner.main.log.rh.back";
{
tmp_zone.x = canv.width/2-100;
tmp_zone.y = canv.width/2-100;
tmp_zone.w = 100;
tmp_zone.h = 100;
tmp_zone.animcycle_id = "null";
tmp_zone.target_view = "l1.map.drycleaner.main.log.number";
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
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
}
tmp_level.map = tmp_map;
}
levels.push(tmp_level);
}

