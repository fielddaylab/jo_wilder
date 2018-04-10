var cur_level;
var cur_scene;
var cur_room;
var cur_act;

var state_cur;
var state_stack;
var act_stack;
var state_t; //0-1
var state_t_speed = 0.08;
var state_from;
var state_to;
var walk_speed = 6;
var option_h = 20;
var option_font = option_h+"px Patrick";

var cursor_prev;
var cursor;
var cursor_x = 0;
var cursor_y = 0;

var DEBUG = 0;
var UNLOCK = 0;
var SHOW_GROUNDS = 1;
var QUALITY = 1;
var CUTSCENE_ADVANCE = 0;
var COMPRESS_SPEAKS = 0;

