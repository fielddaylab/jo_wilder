var find = function(id)
{
  var ids = id.split(".");
  var k = 0;
  if(ids.length <= k) return;
  var level; for(var i = 0; i < levels.length; i++) if(levels[i].id == ids[k]) level = levels[i];
  if(!level || ids.length <= ++k) return level;
  var scene; for(var i = 0; i < level.scenes.length; i++) if(level.scenes[i].id == ids[k]) scene = level.scenes[i];
  if(!scene || ids.length <= ++k) return scene;
  var room; for(var i = 0; i < scene.rooms.length; i++) if(scene.rooms[i].id == ids[k]) room = scene.rooms[i];
  if(!room || ids.length <= ++k) return room;
  var person; for(var i = 0; i < room.persons.length; i++) if(room.persons[i].id == ids[k]) person = room.persons[i];
  if(person)
  {
    if(ids.length <= ++k) return person;
    var speak; for(var i = 0; i < person.speaks.length; i++) if(person.speaks[i].id == ids[k]) speak = person.speaks[i];
    if(!speak || ids.length <= ++k) return speak;
    return;
  }
  var object; for(var i = 0; i < room.objects.length; i++) if(room.objects[i].id == ids[k]) object = room.objects[i];
  if(object)
  {
    if(ids.length <= ++k) return object;
    var view; for(var i = 0; i < object.views.length; i++) if(object.views[i].id == ids[k]) view = object.views[i];
    if(!view || ids.length <= ++k) return view;
    var zone; for(var i = 0; i < view.zones.length; i++) if(view.zones[i].id == ids[k]) zone = view.zones[i];
    if(!zone || ids.length <= ++k) return zone;
    return;
  }
  var observation; for(var i = 0; i < room.observations.length; i++) if(room.observations[i].id == ids[k]) observation = room.observations[i];
  if(observation)
  {
    if(ids.length <= ++k) return observation;
    return;
  }
  var porthole; for(var i = 0; i < room.portholes.length; i++) if(room.portholes[i].id == ids[k]) porthole = room.portholes[i];
  if(porthole)
  {
    if(ids.length <= ++k) return porthole;
    return;
  }
  var wildcard; for(var i = 0; i < room.wildcards.length; i++) if(room.wildcards[i].id == ids[k]) wildcard = room.wildcards[i];
  if(wildcard)
  {
    if(ids.length <= ++k) return wildcard;
    return;
  }
  var cutscene; for(var i = 0; i < room.cutscenes.length; i++) if(room.cutscenes[i].id == ids[k]) cutscene = room.cutscenes[i];
  if(cutscene)
  {
    if(ids.length <= ++k) return cutscene;
    return;
  }
  var inert; for(var i = 0; i < room.inerts.length; i++) if(room.inerts[i].id == ids[k]) inert = room.inerts[i];
  if(inert)
  {
    if(ids.length <= ++k) return inert;
    return;
  }
}
var find_animcycle = function(id,animcycles)
{
  var animcycle = null_animcycle;
  for(var i = 0; i < animcycles.length; i++)
    if(animcycles[i].id == id) animcycle = animcycles[i];
  return animcycle;
}

var save_slate = function()
{
  var self = this;
  self.slate = [];

  self.insert = function(o)
  {
    var i;
    for(i = 0; i < self.slate.length && o.fqid > self.slate[i]; i++) ;
    self.slate.splice(i,0,o);
  }
  self.gen_slate = function(level)
  {
    self.insert(level);
    for(var i = 0; i < level.scenes.length; i++)
    {
      var scene = level.scenes[i];
      self.insert(scene);
      for(var j = 0; j < scene.rooms.length; j++)
      {
        var room = scene.rooms[j];
        self.insert(room);
        for(var k = 0; k < room.persons.length; k++)
        {
          var person = room.persons[k];
          self.insert(person);
          for(var l = 0; l < person.speaks.length; l++)
          {
            var speak = person.speaks[l];
            self.insert(speak);
            for(var m = 0; m < speak.options.length; m++)
            {
              option = speak.options[m];
              self.insert(option);
            }
          }
        }
        for(var k = 0; k < room.objects.length; k++)
        {
          var object = room.objects[k];
          self.insert(object);
          for(var l = 0; l < object.views.length; l++)
          {
            var view = object.views[l];
            self.insert(view);
            for(var m = 0; m < view.zones.length; m++)
            {
              var zone = view.zones[m];
              self.insert(zone);
            }
          }
        }
        for(var k = 0; k < room.observations.length; k++)
        {
          var observation = room.observations[k];
          self.insert(observation);
        }
        for(var k = 0; k < room.portholes.length; k++)
        {
          var porthole = room.portholes[k];
          self.insert(porthole);
        }
        for(var k = 0; k < room.wildcards.length; k++)
        {
          var wildcard = room.wildcards[k];
          self.insert(wildcard);
        }
        for(var k = 0; k < room.cutscenes.length; k++)
        {
          var cutscene = room.cutscenes[k];
          self.insert(cutscene);
        }
      }
    }
  }
  var ac_pow = 23;
  var ac_pt = 8388608;
  var ac_len = (""+(ac_pt-1)).length;
  //accrue pt = 2 ^ 23 (chosen for high significant digit)
  self.code = function()
  {
    var c = "";
    var a = 0;
    var p = 1;
    for(var i = 0; i < self.slate.length; i++)
    {
      if(self.slate[i].key) a += p;
      p *= 2;
      if(p == ac_pt || i == self.slate.length-1)
      {
        var len = ac_len-(""+a).length;
        for(var j = 0; j < len; j++) c += "0";
        c += a;
        p = 1;
        a = 0;
      }
    }
    return c;
  }
  self.decode = function(c)
  {
    var slate_i = 0;
    while(c.length > 0)
    {
      var sub_c = c.substring(0,ac_len);
      var int_c = parseInt(sub_c);
      var c = c.substring(ac_len);
      var p = ac_pt/2;
      for(var sub_slate_i = 0; sub_slate_i < ac_pow; sub_slate_i++)
      {
        if(int_c >= p)
        {
          int_c -= p;
          self.slate[slate_i+ac_pow-1-sub_slate_i].key = 1;
        }
        p /= 2;
      }
      slate_i += ac_pow;
    }
  }
}

var get_save_code = function()
{
  var s = new save_slate();
  s.gen_slate(cur_level);
  console.log(s.code());
  console.log((window.location.href+"?").substring(0,(window.location.href+"?").indexOf("?"))+"?save="+s.code());
}

var load_save_code = function(code)
{
  var s = new save_slate();
  s.gen_slate(cur_level);
  s.decode(code);
}

var querylocked = function(reqs)
{
  if(UNLOCK) return false;

  var locked = true;
  for(var i = 0; locked && i < reqs.length; i++)
  {
    locked = false;
    for(var j = 0; !locked && j < reqs[i].length; j++)
    {
      var l = reqs[i][j];
      if(l.charAt(0) == "!") locked = find(l.substr(1)).key;
      else                   locked = !find(l).key;
    }
  }

  return locked;
}

var level = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.intro_room_id = "null";
  self.avatar_walk_animcycle_id = "null";
  self.avatar_idle_animcycle_id = "null";
  self.avatar_act_animcycle_id = "null";
  self.avatar_ww = 0;
  self.avatar_wh = 0;
  self.exit_animcycle_id = "null";
  self.toolbar_animcycle_id = "null";
  self.toolbar_audio_id = "null";
  self.map_animcycle_id = "null";
  self.map_audio_id = "null";
  self.notebook_animcycle_id = "null";
  self.notebook_audio_id = "null";
  self.notebook_next_animcycle_id = "null";
  self.notebook_prev_animcycle_id = "null";
  self.icon_map_animcycle_id = "null";
  self.icon_notebook_animcycle_id = "null";
  self.ui_hover_animcycle_id = "null";
  self.ripple_click_animcycle_id = "click_ripple";
  self.cursor_w = 0;
  self.cursor_h = 0;
  self.hover_w = 0;
  self.hover_h = 0;
  self.notifications_w = 0;
  self.notifications_h = 0;
  self.target_lerp_s = 0.03;
  self.animcycles = [];
  self.audios = [];
  self.entrys = [];
  self.scenes = [];
  self.raw_notifications = [];
  self.reqs = [];
  self.notebook_reqs = [];
  self.map_reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.notifications = [];
}

var scene = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  //for display on the map
  self.wx = 0;
  self.wy = 0;
  self.ww = 0;
  self.wh = 0;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.rooms = [];
  self.raw_notifications = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.notifications = [];
}

var room = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.wx = 0;
  self.wy = 0;
  self.ww = 0;
  self.wh = 0;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.cam_wh = 660;
  self.nav_min_wz = 0;
  self.nav_max_wz = 1;
  self.navs = [];
  self.lights = [];
  self.shadows = [];
  self.light_color = "rgba(255,255,255,0.2)";
  self.shadow_color = "rgba(0,0,0,0.2)";
  self.ambient_color = "rgba(0,0,0,0)";
  self.target_start_wx = 0; //self-target (room entered "from nowhere")
  self.target_start_wy = 0; //self-target (room entered "from nowhere")
  self.cutscenes = [];
  self.persons = [];
  self.objects = [];
  self.observations = [];
  self.portholes = [];
  self.wildcards = [];
  self.inerts = [];
  self.raw_notifications = [];
  self.reqs = [];
  //
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.nav_min_wz_wy = 0;
  self.nav_max_wz_wy = 1;
  self.entry_portholes_found = []; //auto precompiled in
  self.notifications = [];
}

var person = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_PERSON;
  self.ww = 0;
  self.wh = 0;
  self.wx = 0;
  self.wy = 0;
  self.wz = 0;
  self.act_wx = 0;
  self.act_wy = 0;
  self.act_anim = true;
  self.hover_icon_wx = 0;
  self.hover_icon_wy = 0;
  self.animcycle_id = "null";
  self.hover_cursor_animcycle_id = "null";
  self.hover_icon_animcycle_id = "null";
  self.notice_icon_animcycle_id = "null";
  self.audio_id = "null";
  self.speaks = [];
  self.raw_notifications = [];
  self.notice_reqs = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.hover_cursor_animcycle_inst;
  self.hover_icon_animcycle_inst;
  self.notice_icon_animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.hover_icon_x = 0;
  self.hover_icon_y = 0;
  self.notifications = [];
}

var object = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_OBJECT;
  self.ww = 0;
  self.wh = 0;
  self.wx = 0;
  self.wy = 0;
  self.wz = 0;
  self.act_wx = 0;
  self.act_wy = 0;
  self.act_anim = true;
  self.hover_icon_wx = 0;
  self.hover_icon_wy = 0;
  self.animcycle_id = "null";
  self.hover_cursor_animcycle_id = "null";
  self.hover_icon_animcycle_id = "null";
  self.notice_icon_animcycle_id = "null";
  self.audio_id = "null";
  self.views = [];
  self.raw_notifications = [];
  self.notice_reqs = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.hover_cursor_animcycle_inst;
  self.hover_icon_animcycle_inst;
  self.notice_icon_animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.hover_icon_x = 0;
  self.hover_icon_y = 0;
  self.notifications = [];
}

var observation = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_OBSERVATION;
  self.ww = 0;
  self.wh = 0;
  self.wx = 0;
  self.wy = 0;
  self.wz = 0;
  self.act_wx = 0;
  self.act_wy = 0;
  self.act_anim = false;
  self.hover_icon_wx = 0;
  self.hover_icon_wy = 0;
  self.animcycle_id = "null";
  self.hover_cursor_animcycle_id = "null";
  self.hover_icon_animcycle_id = "null";
  self.notice_icon_animcycle_id = "null";
  self.audio_id = "null";
  self.raw_text = "null";
  self.text = stextToLines(self.raw_text,self.blip_w);
  self.blip_wx = 0;
  self.blip_wy = 0;
  self.blip_w = 0;
  self.blip_h = 0;
  self.raw_notifications = [];
  self.notice_reqs = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.hover_cursor_animcycle_inst;
  self.hover_icon_animcycle_inst;
  self.notice_icon_animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.hover_icon_x = 0;
  self.hover_icon_y = 0;
  self.blip_x = 0;
  self.blip_y = 0;
  self.notifications = [];
}

var porthole = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_PORTHOLE;
  self.ww = 0;
  self.wh = 0;
  self.wx = 0;
  self.wy = 0;
  self.wz = 0;
  self.act_wx = 0;
  self.act_wy = 0;
  self.act_anim = true;
  self.hover_icon_wx = 0;
  self.hover_icon_wy = 0;
  self.animcycle_id = "null";
  self.hover_cursor_animcycle_id = "null";
  self.hover_icon_animcycle_id = "null";
  self.notice_icon_animcycle_id = "null";
  self.audio_id = "null";
  self.target_room = "null";
  self.target_start_wx = 0;
  self.target_start_wy = 0;
  self.raw_notifications = [];
  self.notice_reqs = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.hover_cursor_animcycle_inst;
  self.hover_icon_animcycle_inst;
  self.notice_icon_animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.hover_icon_x = 0;
  self.hover_icon_y = 0;
  self.target_start_x = 0;
  self.target_start_y = 0;
  self.target_room_found; //auto precompiled in
  self.notifications = [];
}

var wildcard = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_WILDCARD;
  self.ww = 0;
  self.wh = 0;
  self.wx = 0;
  self.wy = 0;
  self.wz = 0;
  self.act_wx = 0;
  self.act_wy = 0;
  self.act_anim = true;
  self.hover_icon_wx = 0;
  self.hover_icon_wy = 0;
  self.animcycle_id = "null";
  self.hover_cursor_animcycle_id = "null";
  self.hover_icon_animcycle_id = "null";
  self.notice_icon_animcycle_id = "null";
  self.audio_id = "null";
  self.raw_notifications = [];
  self.notice_reqs = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.hover_cursor_animcycle_inst;
  self.hover_icon_animcycle_inst;
  self.notice_icon_animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.hover_icon_x = 0;
  self.hover_icon_y = 0;
  self.notifications = [];
}

var inert = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.act = ACT_INERT;
  self.ww = 0;
  self.wh = 0;
  self.wx = 0;
  self.wy = 0;
  self.wz = 0;
  self.g = 0; //"ground", as in "foreground", "background", etc... (bg < 0 < fg)
  self.animcycle_id = "null";
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.dw = 0;
  self.dh = 0;
  self.dx = 0;
  self.dy = 0;
  self.dz = 0;
}

var view = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.zones = [];
  self.raw_notifications = [];
  self.reqs = [];
  //
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.notifications = [];
}

var zone = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.wx = 0;
  self.wy = 0;
  self.ww = 0;
  self.wh = 0;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.target_view = "null";
  self.raw_notifications = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.notifications = [];
}

var stextToLines = function(text,w)
{
  return textToLines(text_font, w, text, ctx)
}

var speak_command = function()
{
  var self = this;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.wx = 0; //defines top-left
  self.wy = 0; //defines top-left
  self.w = 0;
  self.h = 0;
  self.raw_atext = "null";
  self.atext = stextToLines(self.raw_atext,self.w);
  self.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
  //
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.text;
}

var speak = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.commands = [];
  self.options_wx = 0;
  self.options_wy = 0;
  self.options_w = 0;
  self.options_h = 0;
  self.options = [];
  self.raw_notifications = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.options_x = 0;
  self.options_y = 0;
  self.notifications = [];
}

var option = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null"
  self.index = 0;
  self.raw_qtext = "null";
  self.qtext = stextToLines(self.raw_qtext,self.w);
  self.target_speak = "null";
  self.raw_notifications = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.target_speak_found; //auto pre-compiled in
  self.notifications = [];
}

var entry = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null";
  self.ww = canv.width/2;
  self.wh = 100;
  self.wx = 0;
  self.wy = 0;
  self.wz = 0;
  self.page = 0;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.raw_notifications = [];
  self.reqs = [];
  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.notifications = [];
}

var animcycle = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null";
  self.w = 0;
  self.h = 0;
  self.frame_files = [];
  self.frames = [];
  self.frame_t = 0;
  self.offset_t = 0;
}

var audio = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null";
  self.aud;
}

var cutscene_command = function()
{
  var self = this;

  self.command = CUTSCENE_COMMAND_NULL;
  self.cutscene_entity_id = "null";
  self.cutscene_entity_type = CUTSCENE_ENTITY_NULL;
  self.cutscene_target_entity_id = "null";
  self.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
  self.t = 0;
  self.end_t = 0;
  self.ww = CUTSCENE_COMMAND_IGNORE;
  self.wh = CUTSCENE_COMMAND_IGNORE;
  self.wx = CUTSCENE_COMMAND_IGNORE;
  self.wy = CUTSCENE_COMMAND_IGNORE;
  self.wz = CUTSCENE_COMMAND_IGNORE;
  self.w;
  self.h;
  self.raw_text = "null";
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.animcycle_offset_t = 0;

  //ephemeral
  self.cutscene_entity;
  self.cutscene_target_entity;
  self.from_wx;
  self.from_wy;
  self.from_wz;
  self.from_ww;
  self.from_wh;
  self.from_x;
  self.from_y;
  self.from_z;
  self.from_w;
  self.from_h;
  self.x;
  self.y;
  self.text = stextToLines(self.raw_text,self.w);
  self.command_state = 0;
  self.command_t = 0;
}

var cutscene = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null";
  self.act = ACT_CUTSCENE;

  self.commands = [];

  self.trigger = CUTSCENE_TRIGGER_AUTO;
  self.ww = 10;
  self.wh = 10;
  self.wx = 10;
  self.wy = 10;
  self.wz = 10;
  self.act_wx = 0;
  self.act_wy = 0;
  self.act_anim = false;
  self.hover_icon_wx = 0;
  self.hover_icon_wy = 0;
  self.animcycle_id = "null";
  self.hover_cursor_animcycle_id = "null";
  self.hover_icon_animcycle_id = "null";
  self.notice_icon_animcycle_id = "null";
  self.raw_notifications = [];
  self.notice_reqs = [];
  self.reqs = [];

  //
  self.locked = true;
  self.key = false;
  self.dirty = false;
  self.animcycle_inst;
  self.hover_cursor_animcycle_inst;
  self.hover_icon_animcycle_inst;
  self.notice_icon_animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.hover_icon_x = 0;
  self.hover_icon_y = 0;
  self.notifications = [];
}

var print_level_meta = function(l)
{
  var str = "SAVE level "+l.fqid+"\n"+
  "tmp_level.primary = "+l.primary+";\n"+
  "tmp_level.intro_room_id = \""+l.intro_room_id+"\";\n"+
  "tmp_level.avatar_walk_animcycle_id = \""+l.avatar_walk_animcycle_id+"\";\n"+
  "tmp_level.avatar_idle_animcycle_id = \""+l.avatar_idle_animcycle_id+"\";\n"+
  "tmp_level.avatar_act_animcycle_id = \""+l.avatar_act_animcycle_id+"\";\n"+
  "tmp_level.avatar_ww = "+l.avatar_ww+";\n"+
  "tmp_level.avatar_wh = "+l.avatar_wh+";\n"+
  "tmp_level.exit_animcycle_id = \""+l.exit_animcycle_id+"\";\n"+
  "tmp_level.toolbar_animcycle_id = \""+l.toolbar_animcycle_id+"\";\n"+
  "tmp_level.toolbar_audio_id = \""+l.toolbar_audio_id+"\";\n"+
  "tmp_level.map_animcycle_id = \""+l.map_animcycle_id+"\";\n"+
  "tmp_level.map_audio_id = \""+l.map_audio_id+"\";\n"+
  "tmp_level.notebook_animcycle_id = \""+l.notebook_animcycle_id+"\";\n"+
  "tmp_level.notebook_audio_id = \""+l.notebook_audio_id+"\";\n"+
  "tmp_level.notebook_next_animcycle_id = \""+l.notebook_next_animcycle_id+"\";\n"+
  "tmp_level.notebook_prev_animcycle_id = \""+l.notebook_prev_animcycle_id+"\";\n"+
  "tmp_level.icon_map_animcycle_id = \""+l.icon_map_animcycle_id+"\";\n"+
  "tmp_level.icon_notebook_animcycle_id = \""+l.icon_notebook_animcycle_id+"\";\n"+
  "tmp_level.ui_hover_animcycle_id = \""+l.ui_hover_animcycle_id+"\";\n"+
  "tmp_level.ripple_click_animcycle_id = \""+l.ripple_click_animcycle_id+"\";\n"+
  "tmp_level.cursor_w = "+l.cursor_w+";\n"+
  "tmp_level.cursor_h = "+l.cursor_h+";\n"+
  "tmp_level.hover_w = "+l.hover_w+";\n"+
  "tmp_level.hover_h = "+l.hover_h+";\n"+
  "tmp_level.notifications_w = "+l.notifications_w+";\n"+
  "tmp_level.notifications_h = "+l.notifications_h+";\n"+
  "tmp_level.target_lerp_s = "+l.target_lerp_s+";\n"+
  "tmp_level.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_level.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_level.notebook_reqs = [[\n";
  for(var i = 0; i < l.notebook_reqs.length; i++)
  {
    for(var j = 0; j < l.notebook_reqs[i].length; j++)
      str += "\""+l.notebook_reqs[i][j]+"\",\n";
    if(i < l.notebook_reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_level.map_reqs = [[\n";
  for(var i = 0; i < l.map_reqs.length; i++)
  {
    for(var j = 0; j < l.map_reqs[i].length; j++)
      str += "\""+l.map_reqs[i][j]+"\",\n";
    if(i < l.map_reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n";
  console.log(str);
}

var print_entry_meta = function(l)
{
  var str = "SAVE entry "+l.fqid+"\n"+
  "tmp_entry.primary = "+l.primary+";\n"+
  "tmp_entry.ww = "+l.ww+";\n"+
  "tmp_entry.wh = "+l.wh+";\n"+
  "tmp_entry.wx = "+l.wx+";\n"+
  "tmp_entry.wy = "+l.wy+";\n"+
  "tmp_entry.wz = "+l.wz+";\n"+
  "tmp_entry.page = "+l.page+";\n"+
  "tmp_entry.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_entry.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_entry.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_entry.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"
  console.log(str);
}

var print_scene_meta = function(l)
{
  var str = "SAVE scene "+l.fqid+"\n"+
  "tmp_scene.primary = "+l.primary+";\n"+
  "tmp_scene.ww = "+l.ww+";\n"+
  "tmp_scene.wh = "+l.wh+";\n"+
  "tmp_scene.wx = "+l.wx+";\n"+
  "tmp_scene.wy = "+l.wy+";\n"+
  "tmp_scene.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_scene.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_scene.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_scene.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"
  console.log(str);
}

var rgba = function(a,b,c,d) { return "rgba("+a+","+b+","+c+","+d+")";};
var print_room_meta = function(l)
{
  var str = "SAVE room "+l.fqid+"\n"+
  "tmp_room.primary = "+l.primary+";\n"+
  "tmp_room.ww = "+l.ww+";\n"+
  "tmp_room.wh = "+l.wh+";\n"+
  "tmp_room.wx = "+l.wx+";\n"+
  "tmp_room.wy = "+l.wy+";\n"+
  "tmp_room.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_room.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_room.cam_wh = "+l.cam_wh+";\n"+
  "tmp_room.nav_min_wz = "+l.nav_min_wz+";\n"+
  "tmp_room.nav_max_wz = "+l.nav_max_wz+";\n"+
  "tmp_room.navs = [\n";
  for(var i = 0; i < l.navs.length; i++)
    str += "{wx:"+l.navs[i].wx+", wy:"+l.navs[i].wy+", ww:"+l.navs[i].ww+", wh:"+l.navs[i].wh+" },\n";
  str +=
  "];\n"+
  "tmp_room.lights = [\n";
  for(var i = 0; i < l.lights.length; i++)
    str += "{wx:"+l.lights[i].wx+", wy:"+l.lights[i].wy+", ww:"+l.lights[i].ww+", wh:"+l.lights[i].wh+" },\n";
  str +=
  "];\n"+
  "tmp_room.shadows = [\n";
  for(var i = 0; i < l.shadows.length; i++)
    str += "{wx:"+l.shadows[i].wx+", wy:"+l.shadows[i].wy+", ww:"+l.shadows[i].ww+", wh:"+l.shadows[i].wh+" },\n";
  str +=
  "];\n"+
  "tmp_room.light_color = \""+l.light_color+"\";\n"+
  "tmp_room.shadow_color = \""+l.shadow_color+"\";\n"+
  "tmp_room.ambient_color = \""+l.ambient_color+"\";\n"+
  "tmp_room.target_start_wx = "+l.target_start_wx+";\n"+
  "tmp_room.target_start_wy = "+l.target_start_wy+";\n"+
  "tmp_room.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_room.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "//SUGGEST_H:"+l.wh/660+"\n";
  console.log(str);
}

var print_person_meta = function(l)
{
  var str = "SAVE person "+l.fqid+"\n"+
  "tmp_person.ww = "+l.ww+";\n"+
  "tmp_person.wh = "+l.wh+";\n"+
  "tmp_person.wx = "+l.wx+";\n"+
  "tmp_person.wy = "+l.wy+";\n"+
  "tmp_person.wz = "+l.wz+";\n"+
  "tmp_person.act_wx = "+l.act_wx+";\n"+
  "tmp_person.act_wy = "+l.act_wy+";\n"+
  "tmp_person.act_anim = "+l.act_anim+";\n"+
  "tmp_person.hover_icon_wx = "+l.hover_icon_wx+";\n"+
  "tmp_person.hover_icon_wy = "+l.hover_icon_wy+";\n"+
  "tmp_person.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_person.hover_cursor_animcycle_id = \""+l.hover_cursor_animcycle_id+"\";\n"+
  "tmp_person.hover_icon_animcycle_id = \""+l.hover_icon_animcycle_id+"\";\n"+
  "tmp_person.notice_icon_animcycle_id = \""+l.notice_icon_animcycle_id+"\";\n"+
  "tmp_person.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_person.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_person.notice_reqs = [[\n";
  for(var i = 0; i < l.notice_reqs.length; i++)
  {
    for(var j = 0; j < l.notice_reqs[i].length; j++)
      str += "\""+l.notice_reqs[i][j]+"\",\n";
    if(i < l.notice_reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_person.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"
  console.log(str);
}

var print_speak_meta = function(l)
{
  var str = "SAVE speak "+l.fqid+"\n"+
  "tmp_speak.primary = "+l.primary+";\n"+
  "tmp_speak.options_wx = "+l.options_wx+";\n"+
  "tmp_speak.options_wy = "+l.options_wy+";\n"+
  "tmp_speak.options_w = "+l.options_w+";\n"+
  "tmp_speak.options_h = "+l.options_h+";\n"+
  "tmp_speak.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_speak.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_speak.commands = [];\n";
  var c;
  for(var i = 0; i < l.commands.length; i++)
  {
    c = l.commands[i];
    str += "tmp_speak_command = new speak_command();\n"+
    "tmp_speak_command.wx = "+c.wx+";\n"+
    "tmp_speak_command.wy = "+c.wy+";\n"+
    "tmp_speak_command.w = "+c.w+";\n"+
    "tmp_speak_command.h = "+c.h+";\n"+
    "tmp_speak_command.animcycle_id = \""+c.animcycle_id+"\";\n"+
    "tmp_speak_command.audio_id = \""+c.audio_id+"\";\n"+
    "tmp_speak_command.raw_atext = \""+c.raw_atext.replace(/"/g,"\\\"")+"\";\n"+
    "tmp_speak_command.speaker = "+(c.speaker == SPEAKER_PLAYER ? "SPEAKER_PLAYER" : "SPEAKER_PERSON" )+";\n"+
    "tmp_speak.commands.push(tmp_speak_command);\n";
  }
  console.log(str);
}

var print_option_meta = function(l)
{
  var str = "SAVE option "+l.fqid+"\n"+
  "tmp_option.index = "+l.index+";\n"+
  "tmp_option.raw_qtext = \""+l.raw_qtext.replace(/"/g,"\\\"")+"\";\n"+
  "tmp_option.target_speak = \""+l.target_speak+"\";\n"+
  "tmp_option.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_option.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"
  console.log(str);
}

var print_object_meta = function(l)
{
  var str = "SAVE object "+l.fqid+"\n"+
  "tmp_object.ww = "+l.ww+";\n"+
  "tmp_object.wh = "+l.wh+";\n"+
  "tmp_object.wx = "+l.wx+";\n"+
  "tmp_object.wy = "+l.wy+";\n"+
  "tmp_object.wz = "+l.wz+";\n"+
  "tmp_object.act_wx = "+l.act_wx+";\n"+
  "tmp_object.act_wy = "+l.act_wy+";\n"+
  "tmp_object.act_anim = "+l.act_anim+";\n"+
  "tmp_object.hover_icon_wx = "+l.hover_icon_wx+";\n"+
  "tmp_object.hover_icon_wy = "+l.hover_icon_wy+";\n"+
  "tmp_object.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_object.hover_cursor_animcycle_id = \""+l.hover_cursor_animcycle_id+"\";\n"+
  "tmp_object.hover_icon_animcycle_id = \""+l.hover_icon_animcycle_id+"\";\n"+
  "tmp_object.notice_icon_animcycle_id = \""+l.notice_icon_animcycle_id+"\";\n"+
  "tmp_object.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_object.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_object.notice_reqs = [[\n";
  for(var i = 0; i < l.notice_reqs.length; i++)
  {
    for(var j = 0; j < l.notice_reqs[i].length; j++)
      str += "\""+l.notice_reqs[i][j]+"\",\n";
    if(i < l.notice_reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_object.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n";
  console.log(str);
}

var print_observation_meta = function(l)
{
  var str = "SAVE observation "+l.fqid+"\n"+
  "tmp_observation.ww = "+l.ww+";\n"+
  "tmp_observation.wh = "+l.wh+";\n"+
  "tmp_observation.wx = "+l.wx+";\n"+
  "tmp_observation.wy = "+l.wy+";\n"+
  "tmp_observation.wz = "+l.wz+";\n"+
  "tmp_observation.act_wx = "+l.act_wx+";\n"+
  "tmp_observation.act_wy = "+l.act_wy+";\n"+
  "tmp_observation.act_anim = "+l.act_anim+";\n"+
  "tmp_observation.hover_icon_wx = "+l.hover_icon_wx+";\n"+
  "tmp_observation.hover_icon_wy = "+l.hover_icon_wy+";\n"+
  "tmp_observation.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_observation.hover_cursor_animcycle_id = \""+l.hover_cursor_animcycle_id+"\";\n"+
  "tmp_observation.hover_icon_animcycle_id = \""+l.hover_icon_animcycle_id+"\";\n"+
  "tmp_observation.notice_icon_animcycle_id = \""+l.notice_icon_animcycle_id+"\";\n"+
  "tmp_observation.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_observation.raw_text = \""+l.raw_text.replace(/"/g,"\\\"")+"\";\n"+
  "tmp_observation.blip_wx = "+l.blip_wx+";\n"+
  "tmp_observation.blip_wy = "+l.blip_wy+";\n"+
  "tmp_observation.blip_w = "+l.blip_w+";\n"+
  "tmp_observation.blip_h = "+l.blip_h+";\n"+
  "tmp_observation.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_observation.notice_reqs = [[\n";
  for(var i = 0; i < l.notice_reqs.length; i++)
  {
    for(var j = 0; j < l.notice_reqs[i].length; j++)
      str += "\""+l.notice_reqs[i][j]+"\",\n";
    if(i < l.notice_reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_observation.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n";
  console.log(str);
}

var print_view_meta = function(l)
{
  var str = "SAVE view "+l.fqid+"\n"+
  "tmp_view.primary = "+l.primary+";\n"+
  "tmp_view.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_view.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_view.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_view.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"
  console.log(str);
}

var print_zone_meta = function(l)
{
  var str = "SAVE zone "+l.fqid+"\n"+
  "tmp_zone.ww = "+l.ww+";\n"+
  "tmp_zone.wh = "+l.wh+";\n"+
  "tmp_zone.wx = "+l.wx+";\n"+
  "tmp_zone.wy = "+l.wy+";\n"+
  "tmp_zone.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_zone.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_zone.target_view = \""+l.target_view+"\";\n"+
  "tmp_zone.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_zone.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"
  console.log(str);
}

var print_porthole_meta = function(l)
{
  var str = "SAVE porthole "+l.fqid+"\n"+
  "tmp_porthole.ww = "+l.ww+";\n"+
  "tmp_porthole.wh = "+l.wh+";\n"+
  "tmp_porthole.wx = "+l.wx+";\n"+
  "tmp_porthole.wy = "+l.wy+";\n"+
  "tmp_porthole.wz = "+l.wz+";\n"+
  "tmp_porthole.act_wx = "+l.act_wx+";\n"+
  "tmp_porthole.act_wy = "+l.act_wy+";\n"+
  "tmp_porthole.act_anim = "+l.act_anim+";\n"+
  "tmp_porthole.hover_icon_wx = "+l.hover_icon_wx+";\n"+
  "tmp_porthole.hover_icon_wy = "+l.hover_icon_wy+";\n"+
  "tmp_porthole.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_porthole.hover_cursor_animcycle_id = \""+l.hover_cursor_animcycle_id+"\";\n"+
  "tmp_porthole.hover_icon_animcycle_id = \""+l.hover_icon_animcycle_id+"\";\n"+
  "tmp_porthole.notice_icon_animcycle_id = \""+l.notice_icon_animcycle_id+"\";\n"+
  "tmp_porthole.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_porthole.target_room = \""+l.target_room+"\";\n"+
  "tmp_porthole.target_start_wx = "+l.target_start_wx+";\n"+
  "tmp_porthole.target_start_wy = "+l.target_start_wy+";\n"+
  "tmp_porthole.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_porthole.notice_reqs = [[\n";
  for(var i = 0; i < l.notice_reqs.length; i++)
  {
    for(var j = 0; j < l.notice_reqs[i].length; j++)
      str += "\""+l.notice_reqs[i][j]+"\",\n";
    if(i < l.notice_reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_porthole.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n";
  console.log(str);
}

var print_wildcard_meta = function(l)
{
  var str = "SAVE wildcard "+l.fqid+"\n"+
  "tmp_wildcard.ww = "+l.ww+";\n"+
  "tmp_wildcard.wh = "+l.wh+";\n"+
  "tmp_wildcard.wx = "+l.wx+";\n"+
  "tmp_wildcard.wy = "+l.wy+";\n"+
  "tmp_wildcard.wz = "+l.wz+";\n"+
  "tmp_wildcard.act_wx = "+l.act_wx+";\n"+
  "tmp_wildcard.act_wy = "+l.act_wy+";\n"+
  "tmp_wildcard.act_anim = "+l.act_anim+";\n"+
  "tmp_wildcard.hover_icon_wx = "+l.hover_icon_wx+";\n"+
  "tmp_wildcard.hover_icon_wy = "+l.hover_icon_wy+";\n"+
  "tmp_wildcard.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_wildcard.hover_cursor_animcycle_id = \""+l.hover_cursor_animcycle_id+"\";\n"+
  "tmp_wildcard.hover_icon_animcycle_id = \""+l.hover_icon_animcycle_id+"\";\n"+
  "tmp_wildcard.notice_icon_animcycle_id = \""+l.notice_icon_animcycle_id+"\";\n"+
  "tmp_wildcard.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_wildcard.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_wildcard.notice_reqs = [[\n";
  for(var i = 0; i < l.notice_reqs.length; i++)
  {
    for(var j = 0; j < l.notice_reqs[i].length; j++)
      str += "\""+l.notice_reqs[i][j]+"\",\n";
    if(i < l.notice_reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_wildcard.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n";
  console.log(str);
}

var print_cutscene_meta = function(l)
{
  var str = "SAVE cutscene "+l.fqid+"\n"+
  "tmp_cutscene.trigger = "+(l.trigger == CUTSCENE_TRIGGER_AUTO ? "CUTSCENE_TRIGGER_AUTO" : "CUTSCENE_TRIGGER_ACT" )+";\n"+
  "tmp_cutscene.ww = "+l.ww+";\n"+
  "tmp_cutscene.wh = "+l.wh+";\n"+
  "tmp_cutscene.wx = "+l.wx+";\n"+
  "tmp_cutscene.wy = "+l.wy+";\n"+
  "tmp_cutscene.wz = "+l.wz+";\n"+
  "tmp_cutscene.act_wx = "+l.act_wx+";\n"+
  "tmp_cutscene.act_wy = "+l.act_wy+";\n"+
  "tmp_cutscene.act_anim = "+l.act_anim+";\n"+
  "tmp_cutscene.hover_icon_wx = "+l.hover_icon_wx+";\n"+
  "tmp_cutscene.hover_icon_wy = "+l.hover_icon_wy+";\n"+
  "tmp_cutscene.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_cutscene.hover_cursor_animcycle_id = \""+l.hover_cursor_animcycle_id+"\";\n"+
  "tmp_cutscene.hover_icon_animcycle_id = \""+l.hover_icon_animcycle_id+"\";\n"+
  "tmp_cutscene.notice_icon_animcycle_id = \""+l.notice_icon_animcycle_id+"\";\n"+
  "tmp_cutscene.raw_notifications = [\n";
  for(var i = 0; i < l.raw_notifications.length; i++)
    str += "\""+l.raw_notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str +=
  "];\n"+
  "tmp_cutscene.notice_reqs = [[\n";
  for(var i = 0; i < l.notice_reqs.length; i++)
  {
    for(var j = 0; j < l.notice_reqs[i].length; j++)
      str += "\""+l.notice_reqs[i][j]+"\",\n";
    if(i < l.notice_reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_cutscene.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"+
  "tmp_cutscene.commands = [];\n";
  var c;
  for(var i = 0; i < l.commands.length; i++)
  {
    c = l.commands[i];
    str += "tmp_cutscene_command = new cutscene_command();\n";
    switch(c.command)
    {
      case CUTSCENE_COMMAND_CREATE:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;\n"+
        "tmp_cutscene_command.ww = "+c.ww+";\n"+
        "tmp_cutscene_command.wh = "+c.wh+";\n"+
        "tmp_cutscene_command.wx = "+c.wx+";\n"+
        "tmp_cutscene_command.wy = "+c.wy+";\n"+
        "tmp_cutscene_command.wz = "+c.wz+";\n"+
        "tmp_cutscene_command.animcycle_id = \""+c.animcycle_id+"\";\n"+
        "tmp_cutscene_command.animcycle_offset_t = "+c.animcycle_offset_t+";\n"+
        "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_DESTROY:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_DESTROY;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;\n"+
        "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_ANIMATE:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = ";
             if(c.cutscene_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        str +=
        "tmp_cutscene_command.ww = "+c.ww+";\n"+
        "tmp_cutscene_command.wh = "+c.wh+";\n"+
        "tmp_cutscene_command.wx = "+c.wx+";\n"+
        "tmp_cutscene_command.wy = "+c.wy+";\n"+
        "tmp_cutscene_command.wz = "+c.wz+";\n"+
        "tmp_cutscene_command.animcycle_id = \""+c.animcycle_id+"\";\n"+
        "tmp_cutscene_command.animcycle_offset_t = "+c.animcycle_offset_t+";\n"+
        "tmp_cutscene_command.t = 0;\n";
        break;
      case CUTSCENE_COMMAND_SPEAK:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = ";
             if(c.cutscene_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        str +=
        "tmp_cutscene_command.wx = "+c.wx+";\n"+
        "tmp_cutscene_command.wy = "+c.wy+";\n"+
        "tmp_cutscene_command.w = "+c.w+";\n"+
        "tmp_cutscene_command.h = "+c.h+";\n"+
        "tmp_cutscene_command.raw_text = \""+c.raw_text.replace(/"/g,"\\\"")+"\";\n"+
        "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_ACT:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;\n"+
        "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_AUDIO:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_AUDIO;\n"+
        "tmp_cutscene_command.audio_id = \""+c.audio_id+"\";\n"+
        "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_TWEEN:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = ";
             if(c.cutscene_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        str +=
        "tmp_cutscene_command.cutscene_target_entity_id = \""+c.cutscene_target_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_target_entity_type = ";
             if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        str +=
        "tmp_cutscene_command.ww = "+c.ww+";\n"+
        "tmp_cutscene_command.wh = "+c.wh+";\n"+
        "tmp_cutscene_command.wx = "+c.wx+";\n"+
        "tmp_cutscene_command.wy = "+c.wy+";\n"+
        "tmp_cutscene_command.wz = "+c.wz+";\n"+
        "tmp_cutscene_command.t = "+c.t+";\n"+
        "tmp_cutscene_command.end_t = "+c.end_t+";\n";
        break;
      case CUTSCENE_COMMAND_TARGET:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = ";
             if(c.cutscene_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        str +=
        "tmp_cutscene_command.cutscene_target_entity_id = \""+c.cutscene_target_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_target_entity_type = ";
             if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        str +=
        "tmp_cutscene_command.ww = "+c.ww+";\n"+
        "tmp_cutscene_command.wh = "+c.wh+";\n"+
        "tmp_cutscene_command.wx = "+c.wx+";\n"+
        "tmp_cutscene_command.wy = "+c.wy+";\n"+
        "tmp_cutscene_command.wz = "+c.wz+";\n"+
        "tmp_cutscene_command.t = "+c.t+";\n"+
        "tmp_cutscene_command.end_t = "+c.end_t+";\n";
        break;
      case CUTSCENE_COMMAND_WAIT:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_WAIT;\n"+
        "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_END:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_END;\n"+
        "tmp_cutscene_command.t = "+c.t+";\n";
        break;
    }
    str += "tmp_cutscene.commands.push(tmp_cutscene_command);\n";
  }
  console.log(str);
}

var print_inert_meta = function(l)
{
  var str = "SAVE inert "+l.fqid+"\n"+
  "tmp_inert.ww = "+l.ww+";\n"+
  "tmp_inert.wh = "+l.wh+";\n"+
  "tmp_inert.wx = "+l.wx+";\n"+
  "tmp_inert.wy = "+l.wy+";\n"+
  "tmp_inert.wz = "+l.wz+";\n"+
  "tmp_inert.g = "+l.g+";\n"+
  "tmp_inert.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_inert.reqs = [[\n";
  for(var i = 0; i < l.reqs.length; i++)
  {
    for(var j = 0; j < l.reqs[i].length; j++)
      str += "\""+l.reqs[i][j]+"\",\n";
    if(i < l.reqs.length-1)
      str += "],[\n";
  }
  str +=
  "]];\n"
  console.log(str);
}

var print_whole_level = function(level, full)
{
  console.log("===BEGIN_IMPORT===");
  if(full || level.dirty) print_level_meta(level);
  var entry;
  for(var i = 0; i < level.entrys.length; i++)
  {
    entry = level.entrys[i];
    if(full || entry.dirty) print_entry_meta(entry);
  }
  var scene;
  for(var i = 0; i < level.scenes.length; i++)
  {
    scene = level.scenes[i];
    if(full || scene.dirty) print_scene_meta(scene);
    var room;
    for(var j = 0; j < scene.rooms.length; j++)
    {
      room = scene.rooms[j];
      if(full || room.dirty) print_room_meta(room);
      var person;
      for(var k = 0; k < room.persons.length; k++)
      {
        person = room.persons[k];
        if(full || person.dirty) print_person_meta(person);
        var speak;
        for(var l = 0; l < person.speaks.length; l++)
        {
          speak = person.speaks[l];
          if(full || speak.dirty) print_speak_meta(speak);
          var option;
          for(var m = 0; m < speak.options.length; m++)
          {
            option = speak.options[m];
            if(full || option.dirty) print_option_meta(option);
          }
        }
      }
      var object;
      for(var k = 0; k < room.objects.length; k++)
      {
        object = room.objects[k];
        if(full || object.dirty) print_object_meta(object);
        var view;
        for(var l = 0; l < object.views.length; l++)
        {
          view = object.views[l];
          if(full || view.dirty) print_view_meta(view);
          var zone;
          for(var m = 0; m < view.zones.length; m++)
          {
            zone = view.zones[m];
            if(full || zone.dirty) print_zone_meta(zone);
          }
        }
      }
      var observation;
      for(var k = 0; k < room.observations.length; k++)
      {
        observation = room.observations[k];
        if(full || observation.dirty) print_observation_meta(observation);
      }
      var porthole;
      for(var k = 0; k < room.portholes.length; k++)
      {
        porthole = room.portholes[k];
        if(full || porthole.dirty) print_porthole_meta(porthole);
      }
      var wildcard;
      for(var k = 0; k < room.wildcards.length; k++)
      {
        wildcard = room.wildcards[k];
        if(full || wildcard.dirty) print_wildcard_meta(wildcard);
      }
      var cutscene;
      for(var k = 0; k < room.cutscenes.length; k++)
      {
        cutscene = room.cutscenes[k];
        if(full || cutscene.dirty) print_cutscene_meta(cutscene);
      }
      var inert;
      for(var k = 0; k < room.inerts.length; k++)
      {
        inert = room.inerts[k];
        if(full || inert.dirty) print_inert_meta(inert);
      }
    }
  }
  console.log("===END_IMPORT===");
}

