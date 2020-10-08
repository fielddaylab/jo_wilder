//ADDLOG write logging functions here
// script v0s are original game
// script v1s are with the first chapter implemented
// script v2 involves a slight change in the wording of the survey questions.
// script v3 implements  the whole game script
// I should document this better.
LOG_SCRIPT_VERSION_DRY       = 3;
LOG_SCRIPT_VERSION_NOHUMOR   = 3;
LOG_SCRIPT_VERSION_NOSNARK   = 3;
LOG_SCRIPT_VERSION_NORMAL    = 2;

var ENUM;

ENUM = 0;
var LOG_TYPE_CHECKPOINT         = ENUM; ENUM++;
var LOG_TYPE_STARTGAME          = ENUM; ENUM++;
var LOG_TYPE_ENDGAME            = ENUM; ENUM++;
var LOG_TYPE_CLICK              = ENUM; ENUM++;
var LOG_TYPE_HOVER              = ENUM; ENUM++;
var LOG_TYPE_QUIZ               = ENUM; ENUM++;
var LOG_TYPE_QUIZQUESTION       = ENUM; ENUM++;
var LOG_TYPE_QUIZSTART          = ENUM; ENUM++;
var LOG_TYPE_QUIZEND            = ENUM; ENUM++;
var LOG_TYPE_COUNT              = ENUM; ENUM++;

ENUM = 0;
var LOG_SUBTYPE_BASIC           = ENUM; ENUM++;
var LOG_SUBTYPE_NAVIGATE        = ENUM; ENUM++;
var LOG_SUBTYPE_NOTEBOOK        = ENUM; ENUM++;
var LOG_SUBTYPE_MAP             = ENUM; ENUM++;
var LOG_SUBTYPE_NOTIFICATION    = ENUM; ENUM++;
var LOG_SUBTYPE_OBJECT          = ENUM; ENUM++;
var LOG_SUBTYPE_OBSERVATION     = ENUM; ENUM++;
var LOG_SUBTYPE_PERSON          = ENUM; ENUM++;
var LOG_SUBTYPE_CUTSCENE        = ENUM; ENUM++;
var LOG_SUBTYPE_WILDCARD        = ENUM; ENUM++;
var LOG_SUBTYPE_COUNT           = ENUM; ENUM++;

ENUM = 0;
var LOG_NAME_BASIC              = ENUM; ENUM++;
var LOG_NAME_OPEN               = ENUM; ENUM++;
var LOG_NAME_CLOSE              = ENUM; ENUM++;
var LOG_NAME_CHOICE             = ENUM; ENUM++;
var LOG_NAME_NEXT               = ENUM; ENUM++;
var LOG_NAME_PREV               = ENUM; ENUM++;
var LOG_NAME_COUNT              = ENUM; ENUM++;

ENUM = 0;
var LOG_CHECKPOINT            = ENUM; ENUM++;
var LOG_STARTGAME             = ENUM; ENUM++;
var LOG_ENDGAME               = ENUM; ENUM++;
var LOG_NAVIGATE_CLICK        = ENUM; ENUM++;
var LOG_NOTEBOOK_CLICK        = ENUM; ENUM++;
var LOG_MAP_CLICK             = ENUM; ENUM++;
var LOG_NOTIFICATION_CLICK    = ENUM; ENUM++;
var LOG_OBJECT_CLICK          = ENUM; ENUM++;
var LOG_OBSERVATION_CLICK     = ENUM; ENUM++;
var LOG_PERSON_CLICK          = ENUM; ENUM++;
var LOG_CUTSCENE_CLICK        = ENUM; ENUM++;
var LOG_WILDCARD_CLICK        = ENUM; ENUM++;
var LOG_NAVIGATE_HOVER        = ENUM; ENUM++;
var LOG_NOTEBOOK_HOVER        = ENUM; ENUM++;
var LOG_MAP_HOVER             = ENUM; ENUM++;
var LOG_NOTIFICATION_HOVER    = ENUM; ENUM++;
var LOG_OBJECT_HOVER          = ENUM; ENUM++;
var LOG_OBSERVATION_HOVER     = ENUM; ENUM++;
var LOG_PERSON_HOVER          = ENUM; ENUM++;
var LOG_CUTSCENE_HOVER        = ENUM; ENUM++;
var LOG_WILDCARD_HOVER        = ENUM; ENUM++;
var LOG_QUIZ                  = ENUM; ENUM++;
var LOG_QUIZQUESTION          = ENUM; ENUM++;
var LOG_QUIZSTART             = ENUM; ENUM++;
var LOG_QUIZEND               = ENUM; ENUM++;
var LOG_COUNT                 = ENUM; ENUM++;

ENUM = 0;
var LOG_DATA_DRY              = ENUM; ENUM++;
var LOG_DATA_NOHUMOR          = ENUM; ENUM++;
var LOG_DATA_NOSNARK          = ENUM; ENUM++;
var LOG_DATA_NORMAL           = ENUM; ENUM++;

var Logger = function(init){
  self = this;
  self.type_to_str = {
    0: "checkpoint",
    1: "startgame",
    2: "endgame",
    3: "click",
    4: "hover",
    5: "quiz",
    6: "quizquestion",
    7: "quizstart",
    8: "quizend"
}
self.subtype_to_str = {
    0: "basic",
    1: "navigate",
    2: "notebook",
    3: "map",
    4: "notification",
    5: "object",
    6: "observation",
    7: "person",
    8: "cutscene",
    9: "wildcard"
}
self.names_to_str = {
    0: "basic",
    1: "open",
    2: "close",
    3: "choice",
    4: "next",
    5: "prev"
}
  self.current_click_info = null;
  self.current_hover_info = {
    start_time: null,
    subtype_data: {},
    o_found: null,
    fqid: 0
  };
  self.current_checkpoint_info = null;

  self.mySlog = new slog("JOWILDER",10);
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
    let script_version = -1;
    if (LOAD_DATA_TYPE == LOG_DATA_DRY) {
        script_version = LOG_SCRIPT_VERSION_DRY;
    }
    else if (LOAD_DATA_TYPE == LOG_DATA_NOHUMOR) {
        script_version = LOG_SCRIPT_VERSION_NOHUMOR;
    }
    else if (LOAD_DATA_TYPE == LOG_DATA_NOSNARK) {
        script_version = LOG_SCRIPT_VERSION_NOSNARK;
    }
    else if (LOAD_DATA_TYPE == LOG_DATA_NORMAL) {
        script_version = LOG_SCRIPT_VERSION_NORMAL;
    }
    var type_data =
    {
      save_code: save_code,
      fullscreen: fullscreen,
      music: music,
      hq: hq,
      script_type: LOAD_DATA_TYPE,
      script_version: script_version
    };
    return type_data;
  }

  self.get_endgame_type_data = function(){
    return {};
  }

  self.get_quiz_type_data = function(quiz){
    return {questions: quiz.questions.map(
      (ques) => {return {
        question: ques.q,
        response: ques.a[ques.response],
        response_index: ques.response
      }}
    ),
            quiz_number: quiz.quizn };

  }

  self.get_quizquestion_type_data = function(quiz, question_index){
    ques = quiz.questions[question_index]
    return {
        quiz_number: quiz.quizn,
        question: ques.q,
        question_index: question_index,
        response: ques.a[ques.response],
        response_index: ques.response
      }
  }

  self.get_quizstart_type_data = function(quiz){
    return {
      quiz_number: quiz.quizn,
    }
  }

  self.get_quizend_type_data = function(quiz){
    return {
      quiz_number: quiz.quizn,
    }
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
  self.get_notification_subtype_data = function(c, c_text){
    return {
      name: LOG_NAME_BASIC,
      text_fqid: c.fqid,
      text: c_text
    };
  }
  self.get_object_subtype_data = function(event_name){
    return {name: event_name};
  }
  self.get_observation_subtype_data = function(obs_fqid, obs_text){
    return {
      name: LOG_NAME_BASIC,
      text_fqid: obs_fqid,
      text: obs_text
    };
  }
  self.get_person_subtype_data = function(speak, speak_text){
    return {
      name: LOG_NAME_BASIC,
      text_fqid: speak.fqid,
      text: speak_text
    };
  }
  self.get_cutscene_subtype_data = function(cutscene, cutscene_text){
    var txt;
    if (typeof cutscene_text == "string")
    {
      txt = cutscene_text;
    }
    else
    {
      txt = 'undefined';
    }
    return {
      name: LOG_NAME_BASIC,
      text_fqid: cutscene.fqid,
      text: txt
    };
  }
  self.get_wildcard_subtype_data = function(clicked_fqid){
    let wc = my_wildcardview.wildcard;
    let cur_cmd = wc.cur_command;
    if(!cur_cmd){
      return {}
    }
    let cmd_type = wc.cur_command.command;
    let cmd_txt = wc.cur_speak ? wc.cur_speak.commands[wc.cur_speak_command_i].raw_atext : '';
    return {
      cur_cmd_fqid: cmd_type == 1 ? cur_cmd.speak_fqid : wc.cur_command.entry_fqid,
      cur_cmd_type: cmd_type,
      text: cmd_txt,
      name: wc.cmd_type == 1 ? LOG_NAME_BASIC : LOG_NAME_CHOICE,
      interacted_fqid: clicked_fqid
    }
  }
  self.get_checkpoint_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_quiz_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }

  self.get_quizquestion_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_quizstart_subtype_data = function(){
    return {name: LOG_NAME_BASIC};
  }
  self.get_quizend_subtype_data = function(){
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

  self.log_quizstart = function(quiz){
    log_quizstart_type_data = my_logger.get_quizstart_type_data(quiz);
    log_quizstart_subtype_data = my_logger.get_quizstart_subtype_data();
    log_data = my_logger.get_log_data(LOG_TYPE_QUIZSTART, log_quizstart_type_data, LOG_SUBTYPE_BASIC, log_quizstart_subtype_data);
    my_logger.send_log(log_data);
  }

  self.log_quizend = function(quiz){
    log_quizend_type_data = my_logger.get_quizend_type_data(quiz);
    log_quizend_subtype_data = my_logger.get_quizend_subtype_data();
    log_data = my_logger.get_log_data(LOG_TYPE_QUIZEND, log_quizend_type_data, LOG_SUBTYPE_BASIC, log_quizend_subtype_data);
    my_logger.send_log(log_data);
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

  self.flatten_log = function(log){
    type_data = log.type_data;
    subtype_data = log.subtype_data;
    delete log.type_data;
    delete log.subtype_data;
    for(var key in type_data) {
        log[key] = type_data[key];
    }
    for(var key in subtype_data) {
      log[key] = subtype_data[key];
    }
    log['type'] = self.type_to_str[log['type']] || 'undefined';
    log['subtype'] = self.subtype_to_str[log['subtype']] || 'undefined';
    log['name'] = self.names_to_str[log['name']] || 'undefined';
    return log;
  }

  self.log_enum = function(type, subtype){
    if(type == LOG_TYPE_QUIZ) return LOG_QUIZ;
    if(type == LOG_TYPE_QUIZQUESTION) return LOG_QUIZQUESTION;
    if(type == LOG_TYPE_QUIZSTART) return LOG_QUIZSTART;
    if(type == LOG_TYPE_QUIZEND) return LOG_QUIZEND;
    if(type < LOG_TYPE_CLICK) return type;
    type -= LOG_TYPE_CLICK;
    return LOG_ENDGAME + 9*type + subtype;
  }
  self.get_save_number = function(){
    save_codes.indexof(my_notebookview.current_code)
  }


  self.send_log = function(log_data){
    //console.log(log_data);
    log_data.event_custom = self.log_enum(log_data.type, log_data.subtype);
    log_data = self.flatten_log(log_data);
    log_data.level = my_notebookview ? save_codes.indexOf(my_notebookview.current_code) : null;
    console.log(log_data)
    if('text' in log_data){
      console.log('text:', log_data.text)

    }
    formatted_log_data = {
      level: log_data.level,
      event: "CUSTOM",
      event_custom: log_data.event_custom,
      event_data_complex: JSON.stringify(log_data)
    };
    self.mySlog.log(formatted_log_data);
  }
}

var my_logger = new Logger();