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
  var wildcard; for(var i = 0; i < room.wildcards.length; i++) if(room.wildcards[i].id == keys[k]) wildcard = room.wildcards[i];
  if(wildcard)
  {
    if(ids.length <= ++k) return wildcard;
    return;
  }
  var inert; for(var i = 0; i < room.inerts.length; i++) if(room.inerts[i].id == keys[k]) inert = room.inerts[i];
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
  //s.decode("00000027437320000204900000000000000");
}

var load_save_code = function(code)
{
  var s = new save_slate();
  s.gen_slate(cur_level);
  s.decode(code);
}

var querylocked = function(o)
{
  if(UNLOCK) return false;
  if(o.locked)
  {
    locked = false;
    for(var i = 0; i < o.locks.length;    i++) if(!find(o.locks[i]).key)   locked = true;
    for(var i = 0; i < o.notlocks.length; i++) if(find(o.notlocks[i]).key) locked = true;
    o.locked = locked;
  }
  return o.locked;
}

var level = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.intro_room_id = "null";
  self.animcycles = [];
  self.audios = [];
  self.entrys = [];
  self.avatar_walk_animcycle_id = "null";
  self.avatar_idle_animcycle_id = "null";
  self.avatar_act_animcycle_id = "null";
  self.avatar_ww = 0;
  self.avatar_wh = 0;
  self.map_animcycle_id = "null";
  self.map_audio_id = "null";
  self.notebook_animcycle_id = "null";
  self.notebook_audio_id = "null";
  self.toolbar_animcycle_id = "null";
  self.toolbar_audio_id = "null";
  self.icon_map_animcycle_id = "null";
  self.icon_notebook_animcycle_id = "null";
  self.person_hover_animcycle_id = "hover_person";
  self.object_hover_animcycle_id = "hover_object";
  self.observation_hover_animcycle_id = "hover_observation";
  self.porthole_hover_animcycle_id = "hover_porthole";
  self.zone_hover_animcycle_id = "hover_zone";
  self.option_hover_animcycle_id = "hover_option";
  self.map_hover_animcycle_id = "hover_map";
  self.ripple_click_animcycle_id = "click_ripple";
  self.cursor_w = 0;
  self.cursor_h = 0;
  self.scenes = [];
  self.noteworthy = false;
  //
  self.key = false;
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
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
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
  self.noteworthy = false;
  //
  self.key = false;
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.entry_portholes_found = []; //auto precompiled in
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
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.speaks = [];
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.act_x = 0;
  self.act_y = 0;
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
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.views = [];
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.act_x = 0;
  self.act_y = 0;
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
  self.act_anim = true;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.raw_text = "null";
  self.text = stextToLines(self.raw_text,self.blip_w);
  self.blip_wx = 0;
  self.blip_wy = 0;
  self.blip_w = 0;
  self.blip_h = 0;
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.blip_x = 0;
  self.blip_y = 0;
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
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.target_room = "null";
  self.target_start_wx = 0;
  self.target_start_wy = 0;
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.act_x = 0;
  self.act_y = 0;
  self.target_start_x = 0;
  self.target_start_y = 0;
  self.target_room_found; //auto precompiled in
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
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
  self.act_x = 0;
  self.act_y = 0;
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
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.z = 0;
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
  self.noteworthy = false;
  //
  self.key = false;
  self.animcycle_inst;
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
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
}

var stextToLines = function(text,w)
{
  return textToLines(option_font, w, text, ctx)
}

var speak = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.wx = 0; //defines top-left
  self.wy = 0; //defines top-left
  self.w = 0;
  self.h = 0;
  self.raw_atext = "null";
  self.atext_hard_coded = false;
  self.atext = stextToLines(self.raw_atext,self.w);
  self.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
  self.options_wx = 0;
  self.options_wy = 0;
  self.options_w = 0;
  self.options_h = 0;
  self.options = [];
  self.noteworthy = false;
  //
  self.key = false;
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.options_x = 0;
  self.options_y = 0;
}

var option = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null"
  self.index = 0;
  self.raw_qtext = "null";
  self.qtext_hard_coded = false;
  self.qtext = stextToLines(self.raw_qtext,self.w);
  self.target_speak = "null";
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.target_speak_found; //auto pre-compiled in
}

var entry = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null";
  self.wx = 0;
  self.wy = 0;
  self.ww = canv.width/2;
  self.wh = 100;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.index = 0;
  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  //
  self.locked = true;
  self.key = false;
  self.animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
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
  self.t = 0;
  self.end_t = 0;
  self.wx = CUTSCENE_COMMAND_IGNORE;
  self.wy = CUTSCENE_COMMAND_IGNORE;
  self.wz = CUTSCENE_COMMAND_IGNORE;
  self.ww = CUTSCENE_COMMAND_IGNORE;
  self.wh = CUTSCENE_COMMAND_IGNORE;
  self.w = CUTSCENE_COMMAND_IGNORE;
  self.h = CUTSCENE_COMMAND_IGNORE;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.animcycle_offset_t = 0;
  self.raw_text = "null";
  self.text = stextToLines(self.raw_text,self.w);

  //ephemeral
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
  self.z;
}

var cutscene = function()
{
  var self = this;
  self.id = "null";
  self.fqid = "null";

  self.commands = [];

  self.noteworthy = false;
  self.locks = [];
  self.notlocks = [];
  self.locked = true;
  self.key = false;
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
  "tmp_level.map_animcycle_id = \""+l.map_animcycle_id+"\";\n"+
  "tmp_level.map_audio_id = \""+l.map_audio_id+"\";\n"+
  "tmp_level.notebook_animcycle_id = \""+l.notebook_animcycle_id+"\";\n"+
  "tmp_level.notebook_audio_id = \""+l.notebook_audio_id+"\";\n"+
  "tmp_level.toolbar_animcycle_id = \""+l.toolbar_animcycle_id+"\";\n"+
  "tmp_level.toolbar_audio_id = \""+l.toolbar_audio_id+"\";\n"+
  "tmp_level.icon_map_animcycle_id = \""+l.icon_map_animcycle_id+"\";\n"+
  "tmp_level.icon_notebook_animcycle_id = \""+l.icon_notebook_animcycle_id+"\";\n"+
  "tmp_level.person_hover_animcycle_id = \""+l.person_hover_animcycle_id+"\";\n"+
  "tmp_level.object_hover_animcycle_id = \""+l.object_hover_animcycle_id+"\";\n"+
  "tmp_level.observation_hover_animcycle_id = \""+l.observation_hover_animcycle_id+"\";\n"+
  "tmp_level.porthole_hover_animcycle_id = \""+l.porthole_hover_animcycle_id+"\";\n"+
  "tmp_level.zone_hover_animcycle_id = \""+l.zone_hover_animcycle_id+"\";\n"+
  "tmp_level.option_hover_animcycle_id = \""+l.option_hover_animcycle_id+"\";\n"+
  "tmp_level.map_hover_animcycle_id = \""+l.map_hover_animcycle_id+"\";\n"+
  "tmp_level.ripple_click_animcycle_id = \""+l.ripple_click_animcycle_id+"\";\n"+
  "tmp_level.cursor_w = "+l.cursor_w+";\n"+
  "tmp_level.cursor_h = "+l.cursor_h+";\n"+
  "tmp_level.noteworthy = "+l.noteworthy+";\n"+
  "tmp_level.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_level.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
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
  "tmp_scene.noteworthy = "+l.noteworthy+";\n"+
  "tmp_scene.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_scene.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
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
  "tmp_room.noteworthy = "+l.noteworthy+";\n"+
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
  "tmp_person.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_person.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_person.noteworthy = "+l.noteworthy+";\n"+
  "tmp_person.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_person.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_speak_meta = function(l)
{
  var str = "SAVE speak "+l.fqid+"\n"+
  "tmp_speak.primary = "+l.primary+";\n"+
  "tmp_speak.wx = "+l.wx+";\n"+
  "tmp_speak.wy = "+l.wy+";\n"+
  "tmp_speak.w = "+l.w+";\n"+
  "tmp_speak.h = "+l.h+";\n"+
  "tmp_speak.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_speak.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_speak.raw_atext = \""+l.raw_atext+"\";\n"+
  "tmp_speak.speaker = "+l.speaker+";\n"+
  "tmp_speak.options_wx = "+l.options_wx+";\n"+
  "tmp_speak.options_wy = "+l.options_wy+";\n"+
  "tmp_speak.options_w = "+l.options_w+";\n"+
  "tmp_speak.options_h = "+l.options_h+";\n"+
  "tmp_speak.noteworthy = "+l.noteworthy+";\n";
  console.log(str);
}

var print_option_meta = function(l)
{
  var str = "SAVE option "+l.fqid+"\n"+
  "tmp_option.index = "+l.index+";\n"+
  "tmp_option.raw_qtext = \""+l.raw_qtext+"\";\n"+
  "tmp_option.target_speak = \""+l.target_speak+"\";\n"+
  "tmp_option.noteworthy = "+l.noteworthy+";\n"+
  "tmp_option.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_option.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
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
  "tmp_object.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_object.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_object.noteworthy = "+l.noteworthy+";\n"+
  "tmp_object.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_object.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
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
  "tmp_observation.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_observation.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_observation.raw_text = \""+l.raw_text+"\";\n"+
  "tmp_observation.blip_wx = "+l.blip_wx+";\n"+
  "tmp_observation.blip_wy = "+l.blip_wy+";\n"+
  "tmp_observation.blip_w = "+l.blip_w+";\n"+
  "tmp_observation.blip_h = "+l.blip_h+";\n"+
  "tmp_observation.noteworthy = "+l.noteworthy+";\n"+
  "tmp_observation.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_observation.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_view_meta = function(l)
{
  var str = "SAVE view "+l.fqid+"\n"+
  "tmp_view.primary = "+l.primary+";\n"+
  "tmp_view.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_view.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_view.noteworthy = "+l.noteworthy+";\n";
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
  "tmp_zone.noteworthy = "+l.noteworthy+";\n"+
  "tmp_zone.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_zone.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
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
  "tmp_porthole.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_porthole.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_porthole.target_room = \""+l.target_room+"\";\n"+
  "tmp_porthole.target_start_wx = "+l.target_start_wx+";\n"+
  "tmp_porthole.target_start_wy = "+l.target_start_wy+";\n"+
  "tmp_porthole.noteworthy = "+l.noteworthy+";\n"+
  "tmp_porthole.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_porthole.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
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
  "tmp_wildcard.animcycle_id = \""+l.animcycle_id+"\";\n"+
  "tmp_wildcard.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_wildcard.noteworthy = "+l.noteworthy+";\n"+
  "tmp_wildcard.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_wildcard.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
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
  "tmp_inert.noteworthy = "+l.noteworthy+";\n"+
  "tmp_inert.locks = [\n";
  for(var i = 0; i < l.locks.length; i++)
    str += "\""+l.locks[i]+"\",\n";
  str +=
  "];\n"+
  "tmp_inert.notlocks = [\n";
  for(var i = 0; i < l.notlocks.length; i++)
    str += "\""+l.notlocks[i]+"\",\n";
  str +=
  "];\n"
  console.log(str);
}

var print_whole_level = function(l)
{
  console.log("===BEGIN_IMPORT===");
  print_level_meta(l);
  var scene;
  for(var i = 0; i < level.scenes.length; i++)
  {
    scene = level.scenes[i];
    print_scene_meta(scene);
    var room;
    for(var j = 0; j < scene.rooms.length; j++)
    {
      room = scene.rooms[j];
      print_room_meta(room);
      var person;
      for(var k = 0; k < room.persons.length; k++)
      {
        person = room.persons[k];
        print_person_meta(person);
        var speak;
        for(var l = 0; l < person.speaks.length; l++)
        {
          speak = person.speaks[l];
          print_speak_meta(speak);
          var option;
          for(var m = 0; m < speak.options.length; m++)
          {
            option = speak.options[m];
            print_option_meta(option);
          }
        }
      }
      var object;
      for(var k = 0; k < room.objects.length; k++)
      {
        object = room.objects[k];
        print_object_meta(object);
        var view;
        for(var l = 0; l < object.views.length; l++)
        {
          view = object.views[l];
          print_view_meta(view);
          var zone;
          for(var m = 0; m < view.zones.length; m++)
          {
            zone = view.zones[m];
            print_zone_meta(zone);
          }
        }
      }
      var observation;
      for(var k = 0; k < room.observations.length; k++)
      {
        observation = room.observations[k];
        print_observation_meta(observation);
      }
      var porthole;
      for(var k = 0; k < room.portholes.length; k++)
      {
        porthole = room.portholes[k];
        print_porthole_meta(porthole);
      }
      var wildcard;
      for(var k = 0; k < room.wildcards.length; k++)
      {
        wildcard = room.wildcards[k];
        print_wildcard_meta(wildcard);
      }
      var inert;
      for(var k = 0; k < room.inerts.length; k++)
      {
        inert = room.inerts[k];
        print_inert_meta(inert);
      }
    }
  }
  console.log("===END_IMPORT===");
}

