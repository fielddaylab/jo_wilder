var levels       = []; var tmp_level;
var maps         = []; var tmp_map;
var scenes       = []; var tmp_scene;
var rooms        = []; var tmp_room;
var persons      = []; var tmp_person;
var objects      = []; var tmp_object;
var triggers     = []; var tmp_trigger;
var wildcards    = []; var tmp_wildcard;
var views        = []; var tmp_view;
var zones        = []; var tmp_zone;
var options      = []; var tmp_option;
var requirements = []; var tmp_requirement;

//BASE LEVEL STRUCTURE
//level
tmp_level = new level();
{
  //map
  tmp_map = new map();
  {
    //scenes
    tmp_scene = new scene();
    {
      //rooms
      tmp_room = new room();
      {
        //persons
        tmp_person = new person();
        {
          //options
          tmp_option = new option();
          {
            //reqs (option)
            tmp_requirement = new requirement();
            {}
            requirements.push(tmp_requirement);
            tmp_option.requirements.push(tmp_requirement);
          }
          options.push(tmp_option);
          tmp_person.options.push(tmp_option);
          //reqs (person)
          tmp_requirement = new requirement();
          {}
          tmp_person.requirements.push(tmp_requirement);
          requirements.push(tmp_requirement);
        }
        persons.push(tmp_person);
        tmp_room.persons.push(tmp_person);
        //objects
        tmp_object = new object();
        {
          //views
          tmp_view = new view();
          {
            //zones
            tmp_zone = new zone();
            {
              //reqs (zone)
              tmp_requirement = new requirement();
              {}
              requirements.push(tmp_requirement);
              tmp_zone.requirements.push(tmp_requirement);
            }
            zones.push(tmp_zone);
            tmp_view.zones.push(tmp_zone);
            //reqs (view)
            tmp_requirement = new requirement();
            {}
            requirements.push(tmp_requirement);
            tmp_view.requirements.push(tmp_requirement);
          }
          tmp_object.views.push(tmp_view);
          views.push(tmp_view);
          //reqs (object)
          tmp_requirement = new requirement();
          {}
          requirements.push(tmp_requirement);
          tmp_object.requirements.push(tmp_requirement);
        }
        objects.push(tmp_object);
        tmp_room.objects.push(tmp_object);
        //triggers
        tmp_trigger = new trigger();
        {
          //reqs (trigger)
          tmp_requirement = new requirement();
          {}
          requirements.push(tmp_requirement);
          tmp_trigger.requirements.push(tmp_requirement);
        }
        triggers.push(tmp_trigger);
        tmp_room.triggers.push(tmp_trigger);
        //wildcards
        tmp_wildcard = new wildcard();
        {
          //reqs (wildcard)
          tmp_requirement = new requirement();
          {}
          requirements.push(tmp_requirement);
          tmp_wildcard.requirements.push(tmp_requirement);
        }
        wildcards.push(tmp_wildcard);
        tmp_room.wildcards.push(tmp_wildcard);
      }
      rooms.push(tmp_room);
      tmp_scene.rooms.push(tmp_room);
    }
    scenes.push(tmp_scene);
    tmp_map.scenes.push(tmp_scene);
  }
  maps.push(tmp_map);
  tmp_level.map = tmp_map;
}
levels.push(tmp_level);

