var ENUM;

ENUM = 0;
var STATE_NULL       = ENUM; ENUM++;
var STATE_NAV        = ENUM; ENUM++;
var STATE_MAP        = ENUM; ENUM++;
var STATE_NOTEBOOK   = ENUM; ENUM++;
var STATE_PERSON     = ENUM; ENUM++;
var STATE_OBJECT     = ENUM; ENUM++;
var STATE_WILDCARD   = ENUM; ENUM++;
var STATE_TRANSITION = ENUM; ENUM++;
var STATE_COUNT      = ENUM; ENUM++;

ENUM = 0;
var ACT_NULL     = ENUM; ENUM++;
var ACT_PERSON   = ENUM; ENUM++;
var ACT_OBJECT   = ENUM; ENUM++;
var ACT_PORTHOLE = ENUM; ENUM++;
var ACT_WILDCARD = ENUM; ENUM++;
var ACT_COUNT    = ENUM; ENUM++;

ENUM = 0;
var ANIM_NULL  = ENUM; ENUM++;
var ANIM_IDLE  = ENUM; ENUM++;
var ANIM_WALK  = ENUM; ENUM++;
var ANIM_ACT   = ENUM; ENUM++;
var ANIM_COUNT = ENUM; ENUM++;

ENUM = 0;
var AVATAR_NULL  = ENUM; ENUM++;
var AVATAR_IDLE  = ENUM; ENUM++;
var AVATAR_WALK  = ENUM; ENUM++;
var AVATAR_ACT   = ENUM; ENUM++;
var AVATAR_COUNT = ENUM; ENUM++;

ENUM = 0;
var SPEAKER_NULL   = ENUM; ENUM++;
var SPEAKER_PLAYER = ENUM; ENUM++;
var SPEAKER_PERSON = ENUM; ENUM++;
var SPEAKER_COUNT  = ENUM; ENUM++;

ENUM = 0;
var COMMAND_NULL    = ENUM; ENUM++;
var COMMAND_CREATE  = ENUM; ENUM++;
var COMMAND_ANIMATE = ENUM; ENUM++;
var COMMAND_MOVE    = ENUM; ENUM++;
var COMMAND_END     = ENUM; ENUM++;

