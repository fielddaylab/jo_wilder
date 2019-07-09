//ADDLOG write logging functions here
var ENUM;

ENUM = 0;
var LOG_TYPE_CLICK              = ENUM; ENUM++;
var LOG_TYPE_HOVER              = ENUM; ENUM++;
var LOG_TYPE_CHECKPOINT         = ENUM; ENUM++;
var LOG_TYPE_STARTGAME          = ENUM; ENUM++;
var LOG_TYPE_ENDGAME            = ENUM; ENUM++;
var LOG_TYPE_COUNT              = ENUM; ENUM++;

ENUM = 0;
var LOG_SUBTYPE_NAVIGATE        = ENUM; ENUM++;
var LOG_SUBTYPE_NOTEBOOK        = ENUM; ENUM++;
var LOG_SUBTYPE_MAP             = ENUM; ENUM++;
var LOG_SUBTYPE_NOTIFICATION    = ENUM; ENUM++;
var LOG_SUBTYPE_OBJECT          = ENUM; ENUM++;
var LOG_SUBTYPE_OBSERVATION     = ENUM; ENUM++;
var LOG_SUBTYPE_PERSON          = ENUM; ENUM++;
var LOG_SUBTYPE_CUTSCENE        = ENUM; ENUM++;
var LOG_SUBTYPE_WILDCARD        = ENUM; ENUM++;
var LOG_SUBTYPE_BASIC           = ENUM; ENUM++;
var LOG_SUBTYPE_COUNT           = ENUM; ENUM++;

ENUM = 0;
var LOG_NAME_BASIC              = ENUM; ENUM++;
var LOG_NAME_OPEN               = ENUM; ENUM++;
var LOG_NAME_CLOSE              = ENUM; ENUM++;
var LOG_NAME_CHOICE             = ENUM; ENUM++;
var LOG_NAME_NEXT               = ENUM; ENUM++;
var LOG_NAME_PREV               = ENUM; ENUM++;
var LOG_NAME_COUNT              = ENUM; ENUM++;

var Logger = function(init){
  self = this;
  self.current_click_info = null;
  self.current_hover_info = {
    start_time: null,
    subtype_data: {},
    o_found: null,
    fqid: 0
  };
  self.current_checkpoint_info = null;

  self.mySlog = new slog("JOWILDER",1);
  // self.get_null_log = function(){
  //   return get_log_data(null, {}, null, {}, null, null)
  // }
  self.get_log_data = function(event_type, type_data, event_subtype, subtype_data, fqid=0){
    if(fqid && my_navigable){
      fqid = fqid.replace(my_navigable.room.fqid+'.','');
    };
    if(my_navigable){
      room_fqid = my_navigable.room.fqid;
    }
    else{
      room_fqid = 0;
    }
    log_data =
    {
      room_fqid: room_fqid,
      type: event_type,//CLICK, HOVER, CHECKPOINT, STARTGAME, ENDGAME
      type_data: type_data,
      subtype: event_subtype, //navigate, notebook, map, notification, object, observation, person, wildcard
      fqid: fqid,
      subtype_data: subtype_data
    };
    return log_data;
  }
  self.get_click_type_data = function(evt){
    var type_data = {
      screen_coor: [evt.doX, evt.doY],
      room_coor: [worldSpaceXpt(my_camera,canv,evt.doX), worldSpaceYpt(my_camera, canv, evt.doY)]
    };
    return type_data;
  }

  self.get_hover_type_data = function(start_time, end_time){
    var type_data = {
      start_time: start_time,
      end_time: end_time
    }
    return type_data;
  }

  self.get_checkpoint_type_data = function(){
    return {};
  }

  self.get_startgame_type_data = function(save_code, fullscreen, music, hq)
  {
    var type_data =
    {
      save_code: save_code,
      fullscreen: fullscreen,
      music: music,
      hq: hq
    };
    return type_data;
  }

  self.get_endgame_type_data = function(){
    return {};
  }

  self.get_navigate_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_notebook_subtype_data = function(event_name, page_number){
    return {name: event_name, page: page_number};
  }
  self.get_map_subtype_data = function(event_name){
    return {name: event_name};
  }
  self.get_notification_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_object_subtype_data = function(event_name){
    return {name: event_name};
  }
  self.get_observation_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_person_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_cutscene_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_wildcard_subtype_data = function(name, correct, answer){
    return {
      name: name,
      correct: correct,
      answer: answer
    }
  }
  self.get_checkpoint_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_startgame_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_endgame_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.send_log_data_hover = function(subtype,subtype_data, fqid){
    type_data = self.get_hover_type_data(self.current_hover_info.start_time,Date.now());
    log_data = self.get_log_data(LOG_TYPE_HOVER, type_data, subtype, 
      self.current_hover_info.subtype_data, self.current_hover_info.fqid);
    self.reset_current_hover_log_info();
    self.send_log(log_data);
  }


  self.reset_current_hover_log_info = function(){
    self.current_hover_info = {
      start_time: null,
      subtype_data: {},
      o_found: null,
      fqid: 0
    };
  }

  self.should_log_hover = function(){
    return (self.current_hover_info.start_time && !self.current_hover_info.o_found);
  }


  self.send_log = function(log_data){
    //console.log(log_data);
    var formatted_log_data = {
      level: 1, //TODO: make this not 1
      event: "CUSTOM",
      event_custom: 0, //TODO: custom event type indices
      event_data_complex: JSON.stringify(log_data)
    }
    window.mySlog.log(formatted_log_data);
  }
}

var my_logger = new Logger();