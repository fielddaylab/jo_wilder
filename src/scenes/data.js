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

/*
//BASE LEVEL STRUCTURE
//level
tmp_level = new level();
{
  //map
  tmp_map = new map();
  {
    //scenes
    {
      tmp_scene = new scene();
      {
        //rooms
        {
          tmp_room = new room();
          {
            //persons
            {
              tmp_person = new person();
              {
                //options
                {
                  tmp_option = new option();
                  {
                    //reqs (option)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_option.requirements.push(tmp_requirement);//assign
                    }
                  }
                  options.push(tmp_option);//register
                  tmp_person.options.push(tmp_option);//assign
                }
                //reqs (person)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_person.requirements.push(tmp_requirement);//assign
                }
              }
              persons.push(tmp_person);//register
              tmp_room.persons.push(tmp_person);//assign
            }
            //objects
            {
              tmp_object = new object();
              {
                //views
                {
                  tmp_view = new view();
                  {
                    //zones
                    {
                      tmp_zone = new zone();
                      {
                        //reqs (zone)
                        {
                          tmp_requirement = new requirement();
                          {}
                          requirements.push(tmp_requirement);//register
                          tmp_zone.requirements.push(tmp_requirement);//assign
                        }
                      }
                      zones.push(tmp_zone);//register
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_view.requirements.push(tmp_requirement);//assign
                    }
                  }
                  views.push(tmp_view);//register
                  tmp_object.views.push(tmp_view);//assign
                }
                //reqs (object)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_object.requirements.push(tmp_requirement);//assign
                }
              }
              objects.push(tmp_object);//register
              tmp_room.objects.push(tmp_object);//assign
            }
            //triggers
            {
              tmp_trigger = new trigger();
              {
                //reqs (trigger)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_trigger.requirements.push(tmp_requirement);//assign
                }
              }
              triggers.push(tmp_trigger);//register
              tmp_room.triggers.push(tmp_trigger);//assign
            }
            //wildcards
            {
              tmp_wildcard = new wildcard();
              {
                //reqs (wildcard)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_wildcard.requirements.push(tmp_requirement);//assign
                }
              }
              wildcards.push(tmp_wildcard);//register
              tmp_room.wildcards.push(tmp_wildcard);//assign
            }
          }
          rooms.push(tmp_room);//register
          tmp_scene.rooms.push(tmp_room);//assign
        }
      }
      scenes.push(tmp_scene);//register
      tmp_map.scenes.push(tmp_scene);//assign
    }
  }
  maps.push(tmp_map);//register
  tmp_level.map = tmp_map;
}
levels.push(tmp_level);
*/

var init_levels = function()
{

//LEVEL 1
tmp_level = new level();
{
  //map
  tmp_map = new map();
  {
    //scenes
    {
      //capitol
      tmp_scene = new scene();
      {
        //rooms
        {
          //entrance
          tmp_room = new room();
          {
            tmp_room.x = 100;
            tmp_room.y = canv.height/2;
            tmp_room.w = canv.width-tmp_room.x*2;
            tmp_room.h = canv.height/2-100;

            //persons
            {
              //uncle
              tmp_person = new person();
              {
                tmp_person.x = 150;
                tmp_person.y = canv.height/2-50;
                tmp_person.w = 50;
                tmp_person.h = 150;

                //options
                {
                  //hello
                  tmp_option = new option();
                  {
                    //reqs (option)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_option.requirements.push(tmp_requirement);//assign
                    }
                  }
                  options.push(tmp_option);//register
                  tmp_person.options.push(tmp_option);//assign

                  //goodbye
                  tmp_option = new option();
                  {
                    //reqs (option)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_option.requirements.push(tmp_requirement);//assign
                    }
                  }
                  options.push(tmp_option);//register
                  tmp_person.options.push(tmp_option);//assign
                }
                //reqs (person)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_person.requirements.push(tmp_requirement);//assign
                }
              }
              persons.push(tmp_person);//register
              tmp_room.persons.push(tmp_person);//assign
            }
            //objects
            {
              //book
              tmp_object = new object();
              {
                tmp_object.x = canv.width-280;
                tmp_object.y = canv.height/2-100;
                tmp_object.w = 40;
                tmp_object.h = 40;

                //views
                {
                  //front
                  tmp_view = new view();
                  {
                    //zones
                    {
                      tmp_zone = new zone();
                      {
                        //reqs (zone)
                        {
                          tmp_requirement = new requirement();
                          {}
                          requirements.push(tmp_requirement);//register
                          tmp_zone.requirements.push(tmp_requirement);//assign
                        }
                      }
                      zones.push(tmp_zone);//register
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_view.requirements.push(tmp_requirement);//assign
                    }
                  }
                  views.push(tmp_view);//register
                  tmp_object.views.push(tmp_view);//assign

                  //open
                  tmp_view = new view();
                  {
                    //zones
                    {
                      tmp_zone = new zone();
                      {
                        //reqs (zone)
                        {
                          tmp_requirement = new requirement();
                          {}
                          requirements.push(tmp_requirement);//register
                          tmp_zone.requirements.push(tmp_requirement);//assign
                        }
                      }
                      zones.push(tmp_zone);//register
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_view.requirements.push(tmp_requirement);//assign
                    }
                  }
                }
                //reqs (object)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_object.requirements.push(tmp_requirement);//assign
                }
              }
              objects.push(tmp_object);//register
              tmp_room.objects.push(tmp_object);//assign
            }
            //triggers
            {
              //door
              tmp_trigger = new trigger();
              {
                tmp_trigger.x = canv.width/2-50;
                tmp_trigger.y = canv.height/2-100;
                tmp_trigger.w = 100;
                tmp_trigger.h = 200;

                //reqs (trigger)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_trigger.requirements.push(tmp_requirement);//assign
                }
              }
              triggers.push(tmp_trigger);//register
              tmp_room.triggers.push(tmp_trigger);//assign
            }
            //wildcards
            {
              //?
              tmp_wildcard = new wildcard();
              {
                //reqs (wildcard)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_wildcard.requirements.push(tmp_requirement);//assign
                }
              }
              wildcards.push(tmp_wildcard);//register
              tmp_room.wildcards.push(tmp_wildcard);//assign
            }
          }
          rooms.push(tmp_room);//register
          tmp_scene.rooms.push(tmp_room);//assign

          //exhibit
          tmp_room = new room();
          {
            //persons
            {
              tmp_person = new person();
              {
                //options
                {
                  tmp_option = new option();
                  {
                    //reqs (option)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_option.requirements.push(tmp_requirement);//assign
                    }
                  }
                  options.push(tmp_option);//register
                  tmp_person.options.push(tmp_option);//assign
                }
                //reqs (person)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_person.requirements.push(tmp_requirement);//assign
                }
              }
              persons.push(tmp_person);//register
              tmp_room.persons.push(tmp_person);//assign
            }
            //objects
            {
              tmp_object = new object();
              {
                //views
                {
                  tmp_view = new view();
                  {
                    //zones
                    {
                      tmp_zone = new zone();
                      {
                        //reqs (zone)
                        {
                          tmp_requirement = new requirement();
                          {}
                          requirements.push(tmp_requirement);//register
                          tmp_zone.requirements.push(tmp_requirement);//assign
                        }
                      }
                      zones.push(tmp_zone);//register
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_view.requirements.push(tmp_requirement);//assign
                    }
                  }
                  views.push(tmp_view);//register
                  tmp_object.views.push(tmp_view);//assign
                }
                //reqs (object)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_object.requirements.push(tmp_requirement);//assign
                }
              }
              objects.push(tmp_object);//register
              tmp_room.objects.push(tmp_object);//assign
            }
            //triggers
            {
              tmp_trigger = new trigger();
              {
                //reqs (trigger)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_trigger.requirements.push(tmp_requirement);//assign
                }
              }
              triggers.push(tmp_trigger);//register
              tmp_room.triggers.push(tmp_trigger);//assign
            }
            //wildcards
            {
              tmp_wildcard = new wildcard();
              {
                //reqs (wildcard)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_wildcard.requirements.push(tmp_requirement);//assign
                }
              }
              wildcards.push(tmp_wildcard);//register
              tmp_room.wildcards.push(tmp_wildcard);//assign
            }
          }
          rooms.push(tmp_room);//register
          tmp_scene.rooms.push(tmp_room);//assign
        }
      }
      scenes.push(tmp_scene);//register
      tmp_map.scenes.push(tmp_scene);//assign

      //library
      tmp_scene = new scene();
      {
        //rooms
        {
          tmp_room = new room();
          {
            //persons
            {
              tmp_person = new person();
              {
                //options
                {
                  tmp_option = new option();
                  {
                    //reqs (option)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_option.requirements.push(tmp_requirement);//assign
                    }
                  }
                  options.push(tmp_option);//register
                  tmp_person.options.push(tmp_option);//assign
                }
                //reqs (person)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_person.requirements.push(tmp_requirement);//assign
                }
              }
              persons.push(tmp_person);//register
              tmp_room.persons.push(tmp_person);//assign
            }
            //objects
            {
              tmp_object = new object();
              {
                //views
                {
                  tmp_view = new view();
                  {
                    //zones
                    {
                      tmp_zone = new zone();
                      {
                        //reqs (zone)
                        {
                          tmp_requirement = new requirement();
                          {}
                          requirements.push(tmp_requirement);//register
                          tmp_zone.requirements.push(tmp_requirement);//assign
                        }
                      }
                      zones.push(tmp_zone);//register
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_requirement = new requirement();
                      {}
                      requirements.push(tmp_requirement);//register
                      tmp_view.requirements.push(tmp_requirement);//assign
                    }
                  }
                  views.push(tmp_view);//register
                  tmp_object.views.push(tmp_view);//assign
                }
                //reqs (object)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_object.requirements.push(tmp_requirement);//assign
                }
              }
              objects.push(tmp_object);//register
              tmp_room.objects.push(tmp_object);//assign
            }
            //triggers
            {
              tmp_trigger = new trigger();
              {
                //reqs (trigger)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_trigger.requirements.push(tmp_requirement);//assign
                }
              }
              triggers.push(tmp_trigger);//register
              tmp_room.triggers.push(tmp_trigger);//assign
            }
            //wildcards
            {
              tmp_wildcard = new wildcard();
              {
                //reqs (wildcard)
                {
                  tmp_requirement = new requirement();
                  {}
                  requirements.push(tmp_requirement);//register
                  tmp_wildcard.requirements.push(tmp_requirement);//assign
                }
              }
              wildcards.push(tmp_wildcard);//register
              tmp_room.wildcards.push(tmp_wildcard);//assign
            }
          }
          rooms.push(tmp_room);//register
          tmp_scene.rooms.push(tmp_room);//assign
        }
      }
      scenes.push(tmp_scene);//register
      tmp_map.scenes.push(tmp_scene);//assign
    }
  }
  maps.push(tmp_map);//register
  tmp_level.map = tmp_map;
}
levels.push(tmp_level);

}

