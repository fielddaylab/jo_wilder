# JOWILDER
## Logging Events
Each log is sent with a number of fields required by [simplelog](https://github.com/fielddaylab/simplelog). Simple log allows for a custom field called event_data_complex along with its category enumerator:
  event_custom: category enumerator
  event_data_complex: JSON.stringify(log_data)
Each log_data is a JSON object for that specific category as defined below.
Note: Note: event_custom will always map to a string of the event name. For example, if an event called FOO had a field of "event_custom", its value would be a string "FOO". Not all events have this field.

#### Change Log
Versions:
1. Original
2. Restructured to flatten logging objects (which originally contained many sub-objects)
3. Simple log now sends player_id (if present) from the URL to log.php (9/24/2019)
4. Change name, type, and subtype to representitive strings instead of numbers (11/12/2019)
5. Intermediate Change. (11/26/2019)
6. Big Change. Will update readme later with all that has been changed (11/26/2019).
7. Add "script_type" and "script_version" to [startgame](#startgame) (7/22/2020).
8. Add "quiz_number" to [quiz](#log_type_quiz) (7/23/2020). Quiz questions subject to change, but now there is a quiz after each chapter end.

### Event Categories
0. [checkpoint](#checkpoint)
1. [startgame](#startgame)
1. [endgame](#endgame)
1. [navigate_click](#navigate_click)
1. [notebook_click](#notebook_click)
1. [map_click](#map_click)
1. [notification_click](#notification_click)
1. [object_click](#object_click)
1. [observation_click](#observation_click)
1. [person_click](#person_click)
1. [cutscene_click](#cutscene_click)
1. [wildcard_click](#wildcard_click)
1. [navigate_hover](#navigate_hover)
1. [notebook_hover](#notebook_hover)
1. [map_hover](#map_hover)
1. [notification_hover](#notification_hover)
1. [object_hover](#object_hover)
1. [observation_hover](#observation_hover)
1. [person_hover](#person_hover)
1. [cutscene_hover](#cutscene_hover)
1. [wildcard_hover](#wildcard_hover)
1. [quiz](#log_type_quiz)

### Enumerators and Constants
1. [Event Categories](#EventCategories)
1. [Log Types](#Types)
1. [Log Subtypes](#Subtypes)
1. [Log Names](#Names)
1. [Script Types](#script_types)

<a name="checkpoint"/>

#### checkpoint (index=0)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|name |event name | |
|level |enum for current checkpoint | |




<a name="startgame"/>

#### startgame (index=1)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|save_code | | |
|fullscreen | | |
|music | | |
|hq | | |
|script_type | enum of which script is being used. See [script_types](#script_types) for details and mappings from enum to type. | |
|script_version | Version of the script | |
|name |event name | |
|level |enum for current checkpoint | |




<a name="endgame"/>

#### endgame (index=2)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|name |event name | |
|level |enum for current checkpoint | |




<a name="navigate_click"/>

#### navigate_click (index=3)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|screen_coor |x,y integer array of where the mouse is in current room | |
|room_coor |x,y integer array of where the mouse is in the game screen | |
|level |enum for current checkpoint | |




<a name="notebook_click"/>

#### notebook_click (index=4)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|screen_coor |x,y integer array of where the mouse is in current room | |
|room_coor |x,y integer array of where the mouse is in the game screen | |
|name |event name | |
|page | | |
|level |enum for current checkpoint | |




<a name="map_click"/>

#### map_click (index=5)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|screen_coor |x,y integer array of where the mouse is in current room | |
|room_coor |x,y integer array of where the mouse is in the game screen | |
|name |event name | |
|level |enum for current checkpoint | |




<a name="notification_click"/>

#### notification_click (index=6)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|screen_coor |x,y integer array of where the mouse is in current room | |
|room_coor |x,y integer array of where the mouse is in the game screen | |
|name |event name | |
|level |enum for current checkpoint | |
|text_fqid |c.fqid|Text fqid (v6+)|
|text|c_text|Text  (v6+)|





<a name="object_click"/>

#### object_click (index=7)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|screen_coor |x,y integer array of where the mouse is in current room | |
|room_coor |x,y integer array of where the mouse is in the game screen | |
|name |event name | |
|level |enum for current checkpoint | |




<a name="observation_click"/>

#### observation_click (index=8)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|screen_coor |x,y integer array of where the mouse is in current room | |
|room_coor |x,y integer array of where the mouse is in the game screen | |
|name |event name | |
|level |enum for current checkpoint | |
|text_fqid |obs_fqid|Text fqid (v6+)|
|text|obs_text|Text  (v6+)|




<a name="person_click"/>

#### person_click (index=9)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|screen_coor |x,y integer array of where the mouse is in current room | |
|room_coor |x,y integer array of where the mouse is in the game screen | |
|name |event name | |
|level |enum for current checkpoint | |
|text_fqid |speak.fqid|Text fqid (v6+)|
|text|speak_text| (v6+) |




<a name="cutscene_click"/>

#### cutscene_click (index=10)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|screen_coor |x,y integer array of where the mouse is in current room | |
|room_coor |x,y integer array of where the mouse is in the game screen | |
|name |event name | |
|level |enum for current checkpoint | |
|text_fqid |cutscene.fqid|Text fqid (v6+)|
|text|txt| Either cutscene text or 'undefined' (v6+)|




<a name="wildcard_click"/>

#### wildcard_click (index=11)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|screen_coor |x,y integer array of where the mouse is in current room | |
|room_coor |x,y integer array of where the mouse is in the game screen | |
|name |event name | |
|level |enum for current checkpoint | |

|correct | correct answer to the problem (only exists for event name CHOICE) - sometimes doesn't exist?? | Only exists in versions 1-4. (v4-)|
|answer | selected answer (only exists for event name CHOICE) | Only exists in versions 1-4. (v4-)|
|cur_cmd_fqid| cmd_type == 1 ? cur_cmd.speak_fqid : wc.cur_command.entry_fqid|Only exists in versions 6+ (v6+)|
|cur_cmd_type|  cmd_type| Only exists in versions 6+ (v6+)|
|text|  cmd_txt| Only exists in versions 6+ (v6+)|
|name|  wc.cmd_type == 1 ? LOG_NAME_BASIC : LOG_NAME_CHOICE| Only exists in versions 6+ (v6+)|
|interacted_fqid|  clicked_fqid| Only exists in versions 6+ (v6+)|




<a name="navigate_hover"/>

#### navigate_hover (index=12)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|start_time |client side timestamp for the time the hover started | |
|end_time |client side timestamp for the time the hover ended | |
|name |event name | |
|level |enum for current checkpoint | |





<a name="notebook_hover"/>

#### notebook_hover (index=13)
| event Name | Description | Note |
| --- | --- | --- |




<a name="map_hover"/>

#### map_hover (index=14)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|start_time |client side timestamp for the time the hover started | |
|end_time |client side timestamp for the time the hover ended | |
|name |event name | |
|level |enum for current checkpoint | |




<a name="notification_hover"/>

#### notification_hover (index=15)
| event Name | Description | Note |
| --- | --- | --- |




<a name="object_hover"/>

#### object_hover (index=16)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|start_time |client side timestamp for the time the hover started | |
|end_time |client side timestamp for the time the hover ended | |
|level |enum for current checkpoint | |
|name |event name - sometimes doesn't exist?? | |




<a name="observation_hover"/>

#### observation_hover (index=17)
| event Name | Description | Note |
| --- | --- | --- |




<a name="person_hover"/>

#### person_hover (index=18)
| event Name | Description | Note |
| --- | --- | --- |




<a name="cutscene_hover"/>

#### cutscene_hover (index=19)
| event Name | Description | Note |
| --- | --- | --- |




<a name="wildcard_hover"/>

#### wildcard_hover (index=20)
| event Name | Description | Note |
| --- | --- | --- |
|room_fqid |fully qualified id of the room | |
|type |type name | |
|subtype |subtype name | |
|fqid |fqid of the interaction, with the room_fqid subtracted | |
|event_custom |event enum | |
|start_time |client side timestamp for the time the hover started | |
|end_time |client side timestamp for the time the hover ended | |
|name |event name - sometimes doesn't exist?? | |
|level |enum for current checkpoint | |
|correct | correct answer to the problem (only exists for event name CHOICE) - sometimes doesn't exist?? | Only exists in versions 1-4. (v4-)|
|answer |selected answer (only exists for event name CHOICE) | Only exists in versions 1-4. (v4-)|
|cur_cmd_fqid| cmd_type == 1 ? cur_cmd.speak_fqid : wc.cur_command.entry_fqid|Only exists in versions 6+ (v6+)|
|cur_cmd_type|  cmd_type| Only exists in versions 6+ (v6+)|
|text|  cmd_txt| Only exists in versions 6+ (v6+)|
|name|  wc.cmd_type == 1 ? LOG_NAME_BASIC : LOG_NAME_CHOICE| Only exists in versions 6+ (v6+)|
|interacted_fqid|  clicked_fqid| Only exists in versions 6+ (v6+)|

<a name="log_type_quiz"/>

#### quiz (index=21)
Only exists in logs v6+.
quiz_number only exists in logs v8+.

| event Name | Description | Note |
| --- | --- | --- |
|room_fqid|fully qualified id of the room| |
|type|type enum| |
|subtype|subtype enum| |
|fqid|fqid of the interaction, with the room_fqid subtracted| |
|event_custom|event enum| |
|questions|array of question objects, each has question, response, and response_index| |
|quiz_number|number of the quiz sent (default startgame quiz is number 0) | |
|name|event name enum| |
|level|enum for current checkpoint| |

## Enumerators and Constants

<a name="EventCategories"/>

#### Event Categories 
| Index | Name | Description |
| --- | --- | --- | 
|0|checkpoint| |
|1|startgame| |
|2|endgame| |
|3|navigate_click| |
|4|notebook_click| |
|5|map_click| |
|6|notification_click| |
|7|object_click| |
|8|observation_click| |
|9|person_click| |
|10|cutscene_click| |
|11|wildcard_click| |
|12|navigate_hover| |
|13|notebook_hover| |
|14|map_hover| |
|15|notification_hover| |
|16|object_hover| |
|17|observation_hover| |
|18|person_hover| |
|19|cutscene_hover| |
|20|wildcard_hover| |

<a name="Types"/>

#### Log Types 
| Index | Name | Description |
| --- | --- | --- | 
|0| checkpoint | |
|1| startgame |  |
|2| endgame |  |
|3| click |  |
|4| hover | |


<a name="Subtypes"/>

#### Log Subtypes 
| Index | Name | Description |
| --- | --- | --- | 
|0| basic| |
|1| navigate| |
|2| notebook| |
|3| map| |
|4| notification| |
|5| object| |
|6| observation| |
|7| person  | |
|8| cutscene| |
|9| wildcard| |

<a name="Names"/>

#### Log Names 
| Index | Name | Description |
| --- | --- | --- | 
| 0 | basic  | |
| 1 | open  | |
| 2 | close | |
| 3 | choice| |
| 4 | next| |
| 5 | prev| |

<a name="script_types"/>

#### Script Types
Starting in v7, multiple scripts were added to the game for AB tests on snark and humor. The game will randomly choose between 4 different data files: data_dry.js, data_nohumor.js, data_nosnark.js, and the original data.js. They are each built from their respective data folder in assets. The type of script used is only logged once, in [startgame](#startgame).

| Index | Name | Description |
| --- | --- | --- |
|0 | dry  | no humor or snark |
|1 | nohumor  |no humor (includes snark) |
|2 | nosnark  | no snark (includes humor). No snark can also be thought of as "obedient" |
|3 | normal | base script (includes snark and humor) |



-- OLD README --

## Logging Events
Each log is sent with a number of fields required by [simplelog](https://github.com/fielddaylab/simplelog). Simple log allows for a custom field called event_data_complex along with its category enumerator:
  event_custom: category enumerator
  event_data_complex: JSON.stringify(log_data)
Each log_data is a JSON object for that specific category as defined below.
Note: Note: event_custom will always map to a string of the event name. For example, if an event called FOO had a field of "event_custom", its value would be a string "FOO". Not all events have this field.

#### Change Log
Versions:
1. Original
2. Restructured to flatten logging objects (which originally contained many sub-objects)
3. Simple log now sends player_id (if present) from the URL to log.php (9/24/2019)

### Logging 
Each event is comprised of:
1. Event Type (int):
   - checkpoint (0)
   - startgame (1)
   - endgame (2)
   - click (0)
   - hover (1)
2. Fields for Type Data
3. Event Subtype (int):
   - basic (1)
   - navigate (1)
   - notebook (2)
   - map (3)
   - notification (4)
   - object (5)
   - observation (6)
   - person (7)
   - cutscene (8)
   - wildcard (9) (assessments)
4. Fields for Subtype Data
5. Event Name (int) (contained within subtype data):
   - basic  (0) (default name)
   - open (1) (only used for the notebook/map)
   - close (2) (only used for the closeable items)
   - choice (3) (only used for the assessments)
   - next (4) (only used for the notebook)
   - prev (5) (only used for the notebook)
6. room fqid (Fully Qualified ID) (string, or 0 if not applicable e.g. for startgame)
7. id (fqid minus the room fqid) (string, or 0 if not applicable e.g. for startgame)

Data is as follows (none if not listed):
- Click: screen coordinates (int array), room coordinates (int array)
- Hover: start_time (int), end_time (int) (client-side time)
- Startgame: save code (int, 0 if not used), fullscreen mode on/off (bool), music on/off (bool), high quality graphics on/off (bool)
- notebook: page_number (int)
- wildcard: correct (string, the correct answer to the problem), answer (string, the selected answer)

Note: Each element in the game has a unique FQID.

When sent to the server, each log also contains a level (index of current save code, range 0-23).
Each log also gets its specific enumerator:
 - LOG_CHECKPOINT            = 0
 - LOG_STARTGAME             = 1
 - LOG_ENDGAME               = 2
 - LOG_NAVIGATE_CLICK        = 3
 - LOG_NOTEBOOK_CLICK        = 4
 - LOG_MAP_CLICK             = 5
 - LOG_NOTIFICATION_CLICK    = 6
 - LOG_OBJECT_CLICK          = 7
 - LOG_OBSERVATION_CLICK     = 8
 - LOG_PERSON_CLICK          = 9
 - LOG_CUTSCENE_CLICK        = 10
 - LOG_WILDCARD_CLICK        = 11
 - LOG_NAVIGATE_HOVER        = 12
 - LOG_NOTEBOOK_HOVER        = 13
 - LOG_MAP_HOVER             = 14
 - LOG_NOTIFICATION_HOVER    = 15
 - LOG_OBJECT_HOVER          = 16
 - LOG_OBSERVATION_HOVER     = 17
 - LOG_PERSON_HOVER          = 18
 - LOG_CUTSCENE_HOVER        = 19
 - LOG_WILDCARD_HOVER        = 20

