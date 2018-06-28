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
    var option; for(var i = 0; i < speak.options.length; i++) if(speak.options[i].id == ids[k]) option = speak.options[i];
    if(!option || ids.length <= ++k) return option;
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
  self.rooms = [];

  self.insert = function(o)
  {
    var i;
    for(i = 0; i < self.slate.length && o.fqid > self.slate[i]; i++) ;
    self.slate.splice(i,0,o);
  }
  self.insert_room = function(o)
  {
    var i;
    for(i = 0; i < self.rooms.length && o.fqid > self.rooms[i]; i++) ;
    self.rooms.splice(i,0,o);
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
        self.insert_room(room);
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
    var i;
    for(i = 0; self.rooms[i].fqid != cur_room.fqid && i < self.rooms.length; i++) ;
    var room_len = 1;
    var tmp = self.rooms.length;
    while(tmp >= 10) { room_len++; tmp /= 10; }
    var c = ""+i;
    while(c.length < room_len) c = "0"+c;

    var a = 0;
    var p = 1;
    for(var i = 0; i < self.slate.length; i++)
    {
      if(self.slate[i].met) a += p;
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
    var i;
    for(i = 0; self.rooms[i].fqid != cur_room.fqid && i < self.rooms.length; i++) ;
    var room_len = 1;
    var tmp = self.rooms.length;
    while(tmp >= 10) { room_len++; tmp /= 10; }
    var sub_c = c.substring(0,room_len);
    var int_c = parseInt(sub_c);
    c = c.substring(room_len);
    cur_room = self.rooms[int_c];
    cur_scene = find(cur_room.fqid.substring(0,cur_room.fqid.indexOf(cur_room.id)-1));
    my_loader.consume_room(cur_room);
    my_navigable.consume_room(cur_room);
    my_avatar.consume_room(cur_room);

    var slate_i = 0;
    while(c.length > 0)
    {
      sub_c = c.substring(0,ac_len);
      int_c = parseInt(sub_c);
      c = c.substring(ac_len);
      var p = ac_pt/2;
      for(var sub_slate_i = 0; sub_slate_i < ac_pow; sub_slate_i++)
      {
        if(int_c >= p)
        {
          int_c -= p;
          self.slate[slate_i+ac_pow-1-sub_slate_i].met = 1;
          self.slate[slate_i+ac_pow-1-sub_slate_i].pre_met = 1;
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
  return s.code();
}

var get_save_code_module = function()
{
  var s = new save_slate();
  s.gen_slate(cur_level);

  var code = "startgame";
  if(my_notebookview && my_notebookview.current_code)
    code = my_notebookview.current_code;
  var st = save_table[code];

  var str =
  "save_codes.push(\""+code+"\");\n"+
  "save_table[save_codes[save_codes.length-1]] = {\n"+
  "reqs:[";
  for(var i = 0; i < st.reqs.length; i++)
  {
    str += "[\n";
    for(var j = 0; j < st.reqs[i].length; j++)
      str += "\""+st.reqs[i][j]+"\",\n";
    str += "],";
  }
  str +=
  "],\n"+
  "all:\n"+
  "[\n";
  for(var i = 0; i < s.slate.length; i++)
  {
    if(s.slate[i].met)
      str += "\""+s.slate[i].fqid+"\",\n";
  }
  str +=
  "],\n"+
  "code:\""+s.code()+"\"\n"+
  "};\n";
  return str;
}

var load_save_code = function(code)
{
  var s = new save_slate();
  s.gen_slate(cur_level);
  s.decode(code);
}

var load_save_table_code = function(code)
{
  var s = new save_slate();
  s.gen_slate(cur_level);
  for(var i = 0; i < s.slate.length; i++)
  {
    s.slate[i].met = 0;
    s.slate[i].pre_met = 0;
  }
  var st = save_table[code];
  for(var i = 0; i < st.all.length; i++)
  {
    var o = find(st.all[i]);
    if(!o) console.log("not found "+st.all[i]);
    else
    {
      o.met = 1;
      o.pre_met = 1;
    }
  }
}

var queryreqs = function(self, reqs)
{
  if(UNLOCK) return true;

  var available = false;
  var invert = false;
  var pre = false;
  for(var i = 0; !available && i < reqs.length; i++)
  {
    available = true;
    for(var j = 0; available && j < reqs[i].length; j++)
    {
      var l = reqs[i][j];
      if(l.charAt(0) == "!") { invert = true; l = l.substr(1); } else invert = false;
      if(l.charAt(0) == "_") { pre    = true; l = l.substr(1); } else pre    = false;

      var o = self;
      if(l != "self") o = find(l);
      if(!o) console.log("CAN'T FIND "+l);
      if(pre) available = o.pre_met;
      else    available = o.met;
      if(invert) available = !available;
    }
  }

  return available;
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
  self.familiar_walk_animcycle_id = "null";
  self.familiar_idle_animcycle_id = "null";
  self.familiar_act_animcycle_id = "null";
  self.familiar_ww = 0;
  self.familiar_wh = 0;
  self.familiar_off_wx = 0;
  self.familiar_off_wy = 0;
  self.audio_id = "null";
  self.exit_animcycle_id = "null";
  self.toolbar_animcycle_id = "null";
  self.toolbar_audio_id = "null";
  self.map_animcycle_id = "null";
  self.map_audio_id = "null";
  self.notebook_animcycle_id = "null";
  self.notebook_audio_id = "null";
  self.notebook_turn_audio_id = "null";
  self.notebook_next_animcycle_id = "null";
  self.notebook_prev_animcycle_id = "null";
  self.icon_map_animcycle_id = "null";
  self.icon_notebook_animcycle_id = "null";
  self.ui_hover_animcycle_id = "null";
  self.ripple_click_animcycle_id = "click_ripple";
  self.loading_animcycle_ids = [];
  self.loading_animcycle_reqs = [];
  self.deck_animcycle_ids = [];
  self.stack_animcycle_t = 50;
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
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.reqs = [[]];
  self.notebook_reqs = [[]];
  self.map_reqs = [[]];
  self.familiar_reqs = [[]];
  //
  self.available = false;
  self.met = false;
  self.pre_met = false;
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
  self.hover_icon_wx = 0;
  self.hover_icon_wy = 0;
  self.animcycle_id = "null";
  self.notice_icon_animcycle_id = "null";
  self.deck_animcycle_ids = [];
  self.audio_id = "null";
  self.rooms = [];
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.notice_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.notice = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
  self.notice_icon_animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.hover_icon_x = 0;
  self.hover_icon_y = 0;
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
  self.deck_animcycle_ids = [];
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
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.reqs = [[]];
  //
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
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
  self.deck_animcycle_ids = [];
  self.audio_id = "null";
  self.speaks = [];
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.notice_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.notice = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
  self.hover_cursor_animcycle_inst;
  self.hover_icon_animcycle_inst;
  self.notice_icon_animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.flip = 0;
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
  self.view_overlay_animcycle_id = "null";
  self.deck_animcycle_ids = [];
  self.audio_id = "null";
  self.views = [];
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.view_overlay_reqs = [[]];
  self.notice_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.notice = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
  self.hover_cursor_animcycle_inst;
  self.hover_icon_animcycle_inst;
  self.notice_icon_animcycle_inst;
  self.view_overlay_animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.flip = 0;
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
  self.deck_animcycle_ids = [];
  self.audio_id = "null";
  self.raw_text = "null";
  self.text = stextToLines(self.raw_text,self.blip_w);
  self.blip_wx = 0;
  self.blip_wy = 0;
  self.blip_w = 0;
  self.blip_h = 0;
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.notice_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.notice = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
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
  self.deck_animcycle_ids = [];
  self.audio_id = "null";
  self.target_room = "null";
  self.target_start_wx = 0;
  self.target_start_wy = 0;
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.notice_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.notice = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
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
  self.deck_animcycle_ids = [];
  self.audio_id = "null";
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.notice_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.notice = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
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
  self.deck_animcycle_ids = [];
  self.reqs = [[]];
  //
  self.available = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
  self.w = 0;
  self.h = 0;
  self.x = 0;
  self.y = 0;
  self.flip = 0;
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
  self.magnify = false;
  self.animcycle_id = "null";
  self.audio_id = "null";
  self.deck_animcycle_ids = [];
  self.zones = [];
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.reqs = [[]];
  self.exit_reqs = [[]];
  //
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
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
  self.deck_animcycle_ids = [];
  self.target_view = "null";
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
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
  self.deck_animcycle_ids = [];
  self.wx = 0; //defines tip of carat
  self.wy = 0; //defines tip of carat
  self.w = 0;
  self.h = 0;
  self.raw_atext = "null";
  self.atext = stextToLines(self.raw_atext,self.w);
  self.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_AVATAR
  //
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
  self.x = 0;
  self.y = 0;
  self.atext;
}

var speak = function()
{
  var self = this;
  self.id = "null"
  self.fqid = "null"
  self.primary = false;
  self.deck_animcycle_ids = [];
  self.commands = [];
  self.options_wx = 0;
  self.options_wy = 0;
  self.options_w = 0;
  self.options_h = 0;
  self.options = [];
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.met = false;
  self.pre_met = false;
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
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.met = false;
  self.pre_met = false;
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
  self.deck_animcycle_ids = [];
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.reqs = [[]];
  //
  self.available = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
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
  self.cutscene_entity_id = CUTSCENE_COMMAND_IGNORE;
  self.cutscene_entity_type = CUTSCENE_ENTITY_NULL;
  self.cutscene_target_entity_id = CUTSCENE_COMMAND_IGNORE;
  self.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
  self.t = CUTSCENE_COMMAND_IGNORE;
  self.end_t = CUTSCENE_COMMAND_IGNORE;
  self.ww = CUTSCENE_COMMAND_IGNORE;
  self.wh = CUTSCENE_COMMAND_IGNORE;
  self.wx = CUTSCENE_COMMAND_IGNORE;
  self.wy = CUTSCENE_COMMAND_IGNORE;
  self.wz = CUTSCENE_COMMAND_IGNORE;
  self.w = CUTSCENE_COMMAND_IGNORE;
  self.h = CUTSCENE_COMMAND_IGNORE;
  self.a = CUTSCENE_COMMAND_IGNORE;
  self.raw_text = CUTSCENE_COMMAND_IGNORE;
  self.animcycle_id = CUTSCENE_COMMAND_IGNORE;
  self.audio_id = CUTSCENE_COMMAND_IGNORE;
  self.deck_animcycle_ids = [];
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
  self.from_a;
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
  self.deck_animcycle_ids = [];
  self.notifications_persistent = 0;
  self.raw_notifications = [];
  self.raw_notification_ws = [];
  self.notification_reqs = [[]];
  self.notice_reqs = [[]];
  self.reqs = [[]];

  //
  self.available = false;
  self.notice = false;
  self.met = false;
  self.pre_met = false;
  self.dirty = false;
  self.animcycle_inst;
  self.stack_animcycle_t;
  self.stack_animcycle_inst;
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

var get_notifications_string = function(notifications)
{
  var str = "[\n";
  for(var i = 0; i < notifications.length; i++)
    str += "\""+notifications[i].replace(/"/g,"\\\"")+"\",\n";
  str += "];\n"
  return str;
}

var get_requirements_string = function(reqs)
{
  var str = "[[\n";
  for(var i = 0; i < reqs.length; i++)
  {
    for(var j = 0; j < reqs[i].length; j++)
      str += "\""+reqs[i][j]+"\",\n";
    if(i < reqs.length-1)
      str += "],[\n";
  }
  str += "]];\n";
  return str;
}

var get_requirements_strings = function(reqs)
{
  var str = "[\n";
  for(var i = 0; i < reqs.length; i++)
    str += get_requirements_string(reqs[i]);
  str += "];\n";
  return str;
}

var get_animcycle_id = function(id)
{
  if(id == CUTSCENE_COMMAND_IGNORE) return "CUTSCENE_COMMAND_IGNORE";
  else return "\""+id+"\"";
}

var get_animcycle_ids = function(ids)
{
  var str = "[\n";
  for(var i = 0; i < ids.length; i++)
  {
    for(var j = 0; j < ids[i].length; j++)
      str += "\""+ids[i][j]+"\",\n";
  }
  str += "];\n";
  return str;
}

var print_level_meta = function(l)
{
  var str = "SAVE level "+l.fqid+"\n"+
  "tmp_level.primary = "+l.primary+";\n"+
  "tmp_level.intro_room_id = \""+l.intro_room_id+"\";\n"+
  "tmp_level.avatar_walk_animcycle_id = "+get_animcycle_id(l.avatar_walk_animcycle_id)+";\n"+
  "tmp_level.avatar_idle_animcycle_id = "+get_animcycle_id(l.avatar_idle_animcycle_id)+";\n"+
  "tmp_level.avatar_act_animcycle_id = "+get_animcycle_id(l.avatar_act_animcycle_id)+";\n"+
  "tmp_level.avatar_ww = "+l.avatar_ww+";\n"+
  "tmp_level.avatar_wh = "+l.avatar_wh+";\n"+
  "tmp_level.familiar_walk_animcycle_id = "+get_animcycle_id(l.familiar_walk_animcycle_id)+";\n"+
  "tmp_level.familiar_idle_animcycle_id = "+get_animcycle_id(l.familiar_idle_animcycle_id)+";\n"+
  "tmp_level.familiar_act_animcycle_id = "+get_animcycle_id(l.familiar_act_animcycle_id)+";\n"+
  "tmp_level.familiar_ww = "+l.familiar_ww+";\n"+
  "tmp_level.familiar_wh = "+l.familiar_wh+";\n"+
  "tmp_level.familiar_off_wx = "+l.familiar_off_wx+";\n"+
  "tmp_level.familiar_off_wy = "+l.familiar_off_wy+";\n"+
  "tmp_level.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_level.exit_animcycle_id = "+get_animcycle_id(l.exit_animcycle_id)+";\n"+
  "tmp_level.toolbar_animcycle_id = "+get_animcycle_id(l.toolbar_animcycle_id)+";\n"+
  "tmp_level.toolbar_audio_id = \""+l.toolbar_audio_id+"\";\n"+
  "tmp_level.map_animcycle_id = "+get_animcycle_id(l.map_animcycle_id)+";\n"+
  "tmp_level.map_audio_id = \""+l.map_audio_id+"\";\n"+
  "tmp_level.notebook_animcycle_id = "+get_animcycle_id(l.notebook_animcycle_id)+";\n"+
  "tmp_level.notebook_audio_id = \""+l.notebook_audio_id+"\";\n"+
  "tmp_level.notebook_turn_audio_id = \""+l.notebook_turn_audio_id+"\";\n"+
  "tmp_level.notebook_next_animcycle_id = "+get_animcycle_id(l.notebook_next_animcycle_id)+";\n"+
  "tmp_level.notebook_prev_animcycle_id = "+get_animcycle_id(l.notebook_prev_animcycle_id)+";\n"+
  "tmp_level.icon_map_animcycle_id = "+get_animcycle_id(l.icon_map_animcycle_id)+";\n"+
  "tmp_level.icon_notebook_animcycle_id = "+get_animcycle_id(l.icon_notebook_animcycle_id)+";\n"+
  "tmp_level.ui_hover_animcycle_id = "+get_animcycle_id(l.ui_hover_animcycle_id)+";\n"+
  "tmp_level.ripple_click_animcycle_id = "+get_animcycle_id(l.ripple_click_animcycle_id)+";\n"+
  "tmp_level.loading_animcycle_ids = "+get_animcycle_ids(l.loading_animcycle_ids)+
  "tmp_level.loading_animcycle_reqs = "+get_requirements_strings(l.loading_animcycle_reqs)+
  "tmp_level.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_level.stack_animcycle_t = "+l.stack_animcycle_t+";\n"+
  "tmp_level.cursor_w = "+l.cursor_w+";\n"+
  "tmp_level.cursor_h = "+l.cursor_h+";\n"+
  "tmp_level.hover_w = "+l.hover_w+";\n"+
  "tmp_level.hover_h = "+l.hover_h+";\n"+
  "tmp_level.notifications_w = "+l.notifications_w+";\n"+
  "tmp_level.notifications_h = "+l.notifications_h+";\n"+
  "tmp_level.target_lerp_s = "+l.target_lerp_s+";\n"+
  "tmp_level.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_level.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_level.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_level.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_level.reqs = "+get_requirements_string(l.reqs)+
  "tmp_level.notebook_reqs = "+get_requirements_string(l.notebook_reqs)+
  "tmp_level.map_reqs = "+get_requirements_string(l.map_reqs)+
  "tmp_level.familiar_reqs = "+get_requirements_string(l.familiar_reqs);
  console.log(str);
}

var print_entry_meta = function(l)
{
  var str = "SAVE entry "+l.fqid+"\n"+
  "tmp_entry.ww = "+l.ww+";\n"+
  "tmp_entry.wh = "+l.wh+";\n"+
  "tmp_entry.wx = "+l.wx+";\n"+
  "tmp_entry.wy = "+l.wy+";\n"+
  "tmp_entry.wz = "+l.wz+";\n"+
  "tmp_entry.page = "+l.page+";\n"+
  "tmp_entry.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_entry.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_entry.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_entry.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_entry.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_entry.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_entry.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_entry.reqs = "+get_requirements_string(l.reqs);
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
  "tmp_scene.hover_icon_wx = "+l.hover_icon_wx+";\n"+
  "tmp_scene.hover_icon_wy = "+l.hover_icon_wy+";\n"+
  "tmp_scene.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_scene.notice_icon_animcycle_id = "+get_animcycle_id(l.notice_icon_animcycle_id)+";\n"+
  "tmp_scene.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_scene.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_scene.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_scene.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_scene.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_scene.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_scene.notice_reqs = "+get_requirements_string(l.notice_reqs)+
  "tmp_scene.reqs = "+get_requirements_string(l.reqs);
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
  "tmp_room.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_room.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_room.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
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
  "tmp_room.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_room.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_room.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_room.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_room.reqs = "+get_requirements_string(l.reqs)+
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
  "tmp_person.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_person.hover_cursor_animcycle_id = "+get_animcycle_id(l.hover_cursor_animcycle_id)+";\n"+
  "tmp_person.hover_icon_animcycle_id = "+get_animcycle_id(l.hover_icon_animcycle_id)+";\n"+
  "tmp_person.notice_icon_animcycle_id = "+get_animcycle_id(l.notice_icon_animcycle_id)+";\n"+
  "tmp_person.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_person.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_person.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_person.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_person.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_person.notice_reqs = "+get_requirements_string(l.notice_reqs)+
  "tmp_person.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_person.reqs = "+get_requirements_string(l.reqs);
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
  "tmp_speak.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_speak.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_speak.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_speak.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_speak.reqs = "+get_requirements_string(l.reqs);
  "tmp_speak.commands = [];\n";
  var c;
  for(var i = 0; i < l.commands.length; i++)
  {
    c = l.commands[i];
    str += "//\n"+
    "tmp_speak_command = new speak_command();\n"+
    "tmp_speak_command.wx = "+c.wx+";\n"+
    "tmp_speak_command.wy = "+c.wy+";\n"+
    "tmp_speak_command.w = "+c.w+";\n"+
    "tmp_speak_command.h = "+c.h+";\n"+
    "tmp_speak_command.animcycle_id = "+get_animcycle_id(c.animcycle_id)+";\n"+
    "tmp_speak_command.audio_id = \""+c.audio_id+"\";\n"+
    "tmp_speak_command.deck_animcycle_ids = "+get_animcycle_ids(c.deck_animcycle_ids)+
    "tmp_speak_command.raw_atext = \""+c.raw_atext.replace(/"/g,"\\\"")+"\";\n"+
    "tmp_speak_command.speaker = "+(c.speaker == SPEAKER_AVATAR ? "SPEAKER_AVATAR" : "SPEAKER_PERSON" )+";\n"+
    "tmp_speak.commands.push(tmp_speak_command);\n";
  }

  var i = 0;
  while(i != -1)
  {
    i = nthIndex('\n',200,str);
    if(i == -1 || i > str.length-5) { console.log(str); i = -1; }
    else
    {
      console.log(str.substr(0,i));
      str = str.substr(i+1);
    }
  }
}

var print_option_meta = function(l)
{
  var str = "SAVE option "+l.fqid+"\n"+
  "tmp_option.index = "+l.index+";\n"+
  "tmp_option.raw_qtext = \""+l.raw_qtext.replace(/"/g,"\\\"")+"\";\n"+
  "tmp_option.target_speak = \""+l.target_speak+"\";\n"+
  "tmp_option.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_option.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_option.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_option.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_option.reqs = "+get_requirements_string(l.reqs);
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
  "tmp_object.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_object.hover_cursor_animcycle_id = "+get_animcycle_id(l.hover_cursor_animcycle_id)+";\n"+
  "tmp_object.hover_icon_animcycle_id = "+get_animcycle_id(l.hover_icon_animcycle_id)+";\n"+
  "tmp_object.notice_icon_animcycle_id = "+get_animcycle_id(l.notice_icon_animcycle_id)+";\n"+
  "tmp_object.view_overlay_animcycle_id = "+get_animcycle_id(l.view_overlay_animcycle_id)+";\n"+
  "tmp_object.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_object.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_object.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_object.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_object.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_object.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_object.view_overlay_reqs = "+get_requirements_string(l.view_overlay_reqs)+
  "tmp_object.notice_reqs = "+get_requirements_string(l.notice_reqs)+
  "tmp_object.reqs = "+get_requirements_string(l.reqs);
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
  "tmp_observation.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_observation.hover_cursor_animcycle_id = "+get_animcycle_id(l.hover_cursor_animcycle_id)+";\n"+
  "tmp_observation.hover_icon_animcycle_id = "+get_animcycle_id(l.hover_icon_animcycle_id)+";\n"+
  "tmp_observation.notice_icon_animcycle_id = "+get_animcycle_id(l.notice_icon_animcycle_id)+";\n"+
  "tmp_observation.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_observation.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_observation.raw_text = \""+l.raw_text.replace(/"/g,"\\\"")+"\";\n"+
  "tmp_observation.blip_wx = "+l.blip_wx+";\n"+
  "tmp_observation.blip_wy = "+l.blip_wy+";\n"+
  "tmp_observation.blip_w = "+l.blip_w+";\n"+
  "tmp_observation.blip_h = "+l.blip_h+";\n"+
  "tmp_observation.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_observation.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_observation.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_observation.notice_reqs = "+get_requirements_string(l.notice_reqs)+
  "tmp_observation.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_observation.reqs = "+get_requirements_string(l.reqs);
  console.log(str);
}

var print_view_meta = function(l)
{
  var str = "SAVE view "+l.fqid+"\n"+
  "tmp_view.primary = "+l.primary+";\n"+
  "tmp_view.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_view.magnify = "+l.magnify+";\n"+
  "tmp_view.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_view.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_view.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_view.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_view.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_view.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_view.exit_reqs = "+get_requirements_string(l.exit_reqs)+
  "tmp_view.reqs = "+get_requirements_string(l.reqs);
  console.log(str);
}

var print_zone_meta = function(l)
{
  var str = "SAVE zone "+l.fqid+"\n"+
  "tmp_zone.ww = "+l.ww+";\n"+
  "tmp_zone.wh = "+l.wh+";\n"+
  "tmp_zone.wx = "+l.wx+";\n"+
  "tmp_zone.wy = "+l.wy+";\n"+
  "tmp_zone.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_zone.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_zone.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_zone.target_view = \""+l.target_view+"\";\n"+
  "tmp_zone.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_zone.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_zone.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_zone.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_zone.reqs = "+get_requirements_string(l.reqs);
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
  "tmp_porthole.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_porthole.hover_cursor_animcycle_id = "+get_animcycle_id(l.hover_cursor_animcycle_id)+";\n"+
  "tmp_porthole.hover_icon_animcycle_id = "+get_animcycle_id(l.hover_icon_animcycle_id)+";\n"+
  "tmp_porthole.notice_icon_animcycle_id = "+get_animcycle_id(l.notice_icon_animcycle_id)+";\n"+
  "tmp_porthole.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_porthole.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_porthole.target_room = \""+l.target_room+"\";\n"+
  "tmp_porthole.target_start_wx = "+l.target_start_wx+";\n"+
  "tmp_porthole.target_start_wy = "+l.target_start_wy+";\n"+
  "tmp_porthole.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_porthole.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_porthole.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_porthole.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_porthole.notice_reqs = "+get_requirements_string(l.notice_reqs)+
  "tmp_porthole.reqs = "+get_requirements_string(l.reqs);
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
  "tmp_wildcard.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_wildcard.hover_cursor_animcycle_id = "+get_animcycle_id(l.hover_cursor_animcycle_id)+";\n"+
  "tmp_wildcard.hover_icon_animcycle_id = "+get_animcycle_id(l.hover_icon_animcycle_id)+";\n"+
  "tmp_wildcard.notice_icon_animcycle_id = "+get_animcycle_id(l.notice_icon_animcycle_id)+";\n"+
  "tmp_wildcard.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_wildcard.audio_id = \""+l.audio_id+"\";\n"+
  "tmp_wildcard.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_wildcard.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_wildcard.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_wildcard.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_wildcard.notice_reqs = "+get_requirements_string(l.notice_reqs)+
  "tmp_wildcard.reqs = "+get_requirements_string(l.reqs);
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
  "tmp_cutscene.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_cutscene.hover_cursor_animcycle_id = "+get_animcycle_id(l.hover_cursor_animcycle_id)+";\n"+
  "tmp_cutscene.hover_icon_animcycle_id = "+get_animcycle_id(l.hover_icon_animcycle_id)+";\n"+
  "tmp_cutscene.notice_icon_animcycle_id = "+get_animcycle_id(l.notice_icon_animcycle_id)+";\n"+
  "tmp_cutscene.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_cutscene.notifications_persistent = "+l.notifications_persistent+";\n"+
  "tmp_cutscene.raw_notifications = "+get_notifications_string(l.raw_notifications)+
  "tmp_cutscene.raw_notification_ws = [\n";
  for(var i = 0; i < l.raw_notification_ws.length; i++)
  {
    if(!l.raw_notification_ws[i]) l.raw_notification_ws[i] = 0;
    str += l.raw_notification_ws[i]+",\n";
  }
  str +=
  "];\n"+
  "tmp_cutscene.notification_reqs = "+get_requirements_string(l.notification_reqs)+
  "tmp_cutscene.notice_reqs = "+get_requirements_string(l.notice_reqs)+
  "tmp_cutscene.reqs = "+get_requirements_string(l.reqs)+
  "tmp_cutscene.commands = [];\n";
  var c;
  var pc;
  for(var i = 0; i < l.commands.length; i++)
  {
    c = l.commands[i];
    str += "//\n";
    if(i > 0)
    {
      str += "tmp_prev_cutscene_command = tmp_cutscene_command;\n";
      pc = l.commands[i-1];
    }
    str += "tmp_cutscene_command = new cutscene_command();\n";
    switch(c.command)
    {
      case CUTSCENE_COMMAND_CREATE:
        str +=
        "tmp_cutscene_command.command = CUTSCENE_COMMAND_CREATE;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;\n";
        if(c.cutscene_target_entity_type != CUTSCENE_ENTITY_NULL)
        {
               if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;\n";
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;\n";
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_FAMILIAR) str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_FAMILIAR;\n";
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_SCENE)
          {
            str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;\n"+
            "tmp_cutscene_command.cutscene_target_entity_id = \""+c.cutscene_target_entity_id+"\";\n";
          }
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CUTSCENE)
          {
            str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CUTSCENE;\n"+
            "tmp_cutscene_command.cutscene_target_entity_id = \""+c.cutscene_target_entity_id+"\";\n";
          }
        }
        if(c.ww != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.ww = "+c.ww+";\n";
        if(c.wh != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wh = "+c.wh+";\n";
        if(c.wx != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wx = "+c.wx+";\n";
        if(c.wy != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wy = "+c.wy+";\n";
        if(c.wz != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wz = "+c.wz+";\n";
        if(c.a  != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.a = "+c.a+";\n";
        str +=
        "tmp_cutscene_command.animcycle_id = "+get_animcycle_id(c.animcycle_id)+";\n"+
        "tmp_cutscene_command.deck_animcycle_ids = "+get_animcycle_ids(c.deck_animcycle_ids)+
        "tmp_cutscene_command.animcycle_offset_t = "+c.animcycle_offset_t+";\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_DESTROY:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_DESTROY;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CUTSCENE;\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_ANIMATE:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = ";
             if(c.cutscene_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_FAMILIAR) str += "CUTSCENE_ENTITY_FAMILIAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        if(c.ww != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.ww = "+c.ww+";\n";
        if(c.wh != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wh = "+c.wh+";\n";
        if(c.wx != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wx = "+c.wx+";\n";
        if(c.wy != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wy = "+c.wy+";\n";
        if(c.wz != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wz = "+c.wz+";\n";
        str +=
        "tmp_cutscene_command.animcycle_id = "+get_animcycle_id(c.animcycle_id)+";\n"+
        "tmp_cutscene_command.deck_animcycle_ids = "+get_animcycle_ids(c.deck_animcycle_ids)+
        "tmp_cutscene_command.animcycle_offset_t = "+c.animcycle_offset_t+";\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_SPEAK:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = ";
             if(c.cutscene_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_FAMILIAR) str += "CUTSCENE_ENTITY_FAMILIAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        if(c.wx != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wx = "+c.wx+";\n";
        if(c.wy != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wy = "+c.wy+";\n";
        if(c.w  != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.w = "+c.w+";\n";
        if(c.h  != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.h = "+c.h+";\n";
        str += "tmp_cutscene_command.animcycle_id = "+get_animcycle_id(c.animcycle_id)+";\n"+
        "tmp_cutscene_command.raw_text = \""+c.raw_text.replace(/"/g,"\\\"")+"\";\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_ACT:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_AUDIO:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_AUDIO;\n"+
        "tmp_cutscene_command.audio_id = \""+c.audio_id+"\";\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_TWEEN:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = ";
             if(c.cutscene_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_FAMILIAR) str += "CUTSCENE_ENTITY_FAMILIAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        if(c.cutscene_target_entity_type != CUTSCENE_ENTITY_NULL)
        {
               if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;\n";
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;\n";
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_FAMILIAR) str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_FAMILIAR;\n";
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_SCENE)
          {
            str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;\n"+
            "tmp_cutscene_command.cutscene_target_entity_id = \""+c.cutscene_target_entity_id+"\";\n";
          }
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CUTSCENE)
          {
            str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CUTSCENE;\n"+
            "tmp_cutscene_command.cutscene_target_entity_id = \""+c.cutscene_target_entity_id+"\";\n";
          }
        }
        else
        {
          if(c.ww    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.ww = "+c.ww+";\n";
          if(c.wh    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wh = "+c.wh+";\n";
          if(c.wx    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wx = "+c.wx+";\n";
          if(c.wy    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wy = "+c.wy+";\n";
          if(c.wz    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wz = "+c.wz+";\n";
        }
        if(c.a     != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.a = "+c.a+";\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        str += "tmp_cutscene_command.end_t = tmp_cutscene_command.t+"+(c.end_t-c.t)+";\n";
        break;
      case CUTSCENE_COMMAND_TARGET:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = ";
             if(c.cutscene_entity_type == CUTSCENE_ENTITY_NULL)     str += "CUTSCENE_ENTITY_NULL;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "CUTSCENE_ENTITY_CAMERA;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "CUTSCENE_ENTITY_AVATAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_FAMILIAR) str += "CUTSCENE_ENTITY_FAMILIAR;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_SCENE)    str += "CUTSCENE_ENTITY_SCENE;\n";
        else if(c.cutscene_entity_type == CUTSCENE_ENTITY_CUTSCENE) str += "CUTSCENE_ENTITY_CUTSCENE;\n";
        if(c.cutscene_target_entity_type != CUTSCENE_ENTITY_NULL)
        {
               if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CAMERA)   str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CAMERA;\n";
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_AVATAR)   str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;\n";
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_SCENE)
          {
            str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;\n"+
            "tmp_cutscene_command.cutscene_target_entity_id = \""+c.cutscene_target_entity_id+"\";\n";
          }
          else if(c.cutscene_target_entity_type == CUTSCENE_ENTITY_CUTSCENE)
          {
            str += "tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_CUTSCENE;\n"+
            "tmp_cutscene_command.cutscene_target_entity_id = \""+c.cutscene_target_entity_id+"\";\n";
          }
        }
        else
        {
          if(c.ww    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.ww = "+c.ww+";\n";
          if(c.wh    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wh = "+c.wh+";\n";
          if(c.wx    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wx = "+c.wx+";\n";
          if(c.wy    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wy = "+c.wy+";\n";
          if(c.wz    != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.wz = "+c.wz+";\n";
        }
        if(c.a     != CUTSCENE_COMMAND_IGNORE) str += "tmp_cutscene_command.a = "+c.a+";\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        str += "tmp_cutscene_command.end_t = tmp_cutscene_command.t+"+(c.end_t-c.t)+";\n";
        break;
      case CUTSCENE_COMMAND_WAIT:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_WAIT;\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_END:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_END;\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_LOAD_SCENE:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_LOAD_SCENE;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SPECIAL;\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
      case CUTSCENE_COMMAND_LOAD_ROOM:
        str += "tmp_cutscene_command.command = CUTSCENE_COMMAND_LOAD_ROOM;\n"+
        "tmp_cutscene_command.cutscene_entity_id = \""+c.cutscene_entity_id+"\";\n"+
        "tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SPECIAL;\n";
        if(i > 0) str += "tmp_cutscene_command.t = tmp_prev_cutscene_command.t+"+(c.t-pc.t)+";\n";
        else      str += "tmp_cutscene_command.t = "+c.t+";\n";
        break;
    }
    str += "tmp_cutscene.commands.push(tmp_cutscene_command);\n";
  }

  var i = 0;
  while(i != -1)
  {
    i = nthIndex('\n',200,str);
    if(i == -1 || i > str.length-5) { console.log(str); i = -1; }
    else
    {
      console.log(str.substr(0,i));
      str = str.substr(i+1);
    }
  }
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
  "tmp_inert.animcycle_id = "+get_animcycle_id(l.animcycle_id)+";\n"+
  "tmp_inert.deck_animcycle_ids = "+get_animcycle_ids(l.deck_animcycle_ids)+
  "tmp_inert.reqs = "+get_requirements_string(l.reqs);
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

