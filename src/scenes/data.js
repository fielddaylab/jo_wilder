var levels = [];

var tmp_level;
var tmp_map;
var tmp_scene;
var tmp_room;
var tmp_person;
var tmp_object;
var tmp_porthole;
var tmp_wildcard;
var tmp_view;
var tmp_zone;
var tmp_option;
var tmp_lock;

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
                      tmp_lock = new lock();
                      {}
                      tmp_option.locks.push(tmp_lock);//assign
                    }
                  }
                  tmp_person.options.push(tmp_option);//assign
                }
                //reqs (person)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_person.locks.push(tmp_lock);//assign
                }
              }
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
                          tmp_lock = new lock();
                          {}
                          tmp_zone.locks.push(tmp_lock);//assign
                        }
                      }
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_lock = new lock();
                      {}
                      tmp_view.locks.push(tmp_lock);//assign
                    }
                  }
                  tmp_object.views.push(tmp_view);//assign
                }
                //reqs (object)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_object.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.objects.push(tmp_object);//assign
            }
            //portholes
            {
              tmp_porthole = new porthole();
              {
                //reqs (porthole)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_porthole.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.portholes.push(tmp_porthole);//assign
            }
            //wildcards
            {
              tmp_wildcard = new wildcard();
              {
                //reqs (wildcard)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_wildcard.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.wildcards.push(tmp_wildcard);//assign
            }
          }
          tmp_scene.rooms.push(tmp_room);//assign
        }
      }
      tmp_map.scenes.push(tmp_scene);//assign
    }
  }
  tmp_level.map = tmp_map;
}
levels.push(tmp_level);
*/

var init_levels = function()
{

//LEVEL 1
tmp_level = new level();
tmp_level.id = "l1";
{
  //map
  tmp_map = new map();
  tmp_map.id = "map";
  {
    tmp_map.img = GenImg("assets/"+tmp_level.id+"/"+tmp_map.id+".png");
    //scenes
    {
      //capitol
      tmp_scene = new scene();
      tmp_scene.id = "capitol";
      {
        tmp_scene.img = GenImg("assets/"+tmp_level.id+"/"+tmp_map.id+"/"+tmp_scene.id+".png");
        //rooms
        {
          //entrance
          tmp_room = new room();
          tmp_room.id = "entrance";
          {
            tmp_room.img = GenImg("assets/"+tmp_level.id+"/"+tmp_map.id+"/"+tmp_scene.id+"/"+tmp_room.id+".png");
            tmp_room.nav_x = 100;
            tmp_room.nav_y = canv.height/2;
            tmp_room.nav_w = canv.width-tmp_room.nav_x*2;
            tmp_room.nav_h = canv.height/2-100;
            tmp_room.start_x = canv.width/2;
            tmp_room.start_y = canv.height/2;

            //persons
            {
              //uncle
              tmp_person = new person();
              tmp_person.id = "uncle";
              {
                tmp_person.img = GenImg("assets/person_0.png");
                tmp_person.x = 150;
                tmp_person.y = canv.height/2-50;
                tmp_person.w = 50;
                tmp_person.h = 150;

                //options
                {
                  //hello
                  tmp_option = new option();
                  tmp_option.id = "hello";
                  {
                    //reqs (option)
                    {
                      tmp_lock = new lock();
                      {}
                      tmp_option.locks.push(tmp_lock);//assign
                    }
                  }
                  tmp_person.options.push(tmp_option);//assign

                  //goodbye
                  tmp_option = new option();
                  tmp_option.id = "goodbye";
                  {
                    //reqs (option)
                    {
                      tmp_lock = new lock();
                      {}
                      tmp_option.locks.push(tmp_lock);//assign
                    }
                  }
                  tmp_person.options.push(tmp_option);//assign
                }
                //reqs (person)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_person.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.persons.push(tmp_person);//assign
            }
            //objects
            {
              //book
              tmp_object = new object();
              tmp_object.id = "book";
              {
                tmp_object.x = canv.width-280;
                tmp_object.y = canv.height/2-100;
                tmp_object.w = 40;
                tmp_object.h = 40;

                //views
                {
                  //front
                  tmp_view = new view();
                  tmp_view.id = "front";
                  {
                    tmp_view.img = GenImg("assets/object_0_view_0.png");
                    //zones
                    {
                      tmp_zone = new zone();
                      {
                        //reqs (zone)
                        {
                          tmp_lock = new lock();
                          {}
                          tmp_zone.locks.push(tmp_lock);//assign
                        }
                      }
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_lock = new lock();
                      {}
                      tmp_view.locks.push(tmp_lock);//assign
                    }
                  }
                  tmp_object.views.push(tmp_view);//assign

                  //open
                  tmp_view = new view();
                  tmp_view.id = "open";
                  {
                    tmp_view.img = GenImg("assets/object_0_view_1.png");
                    //zones
                    {
                      tmp_zone = new zone();
                      {
                        //reqs (zone)
                        {
                          tmp_lock = new lock();
                          {}
                          tmp_zone.locks.push(tmp_lock);//assign
                        }
                      }
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_lock = new lock();
                      {}
                      tmp_view.locks.push(tmp_lock);//assign
                    }
                  }
                }
                //reqs (object)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_object.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.objects.push(tmp_object);//assign
            }
            //portholes
            {
              //door
              tmp_porthole = new porthole();
              tmp_porthole.id = "door";
              {
                tmp_porthole.x = canv.width/2-50;
                tmp_porthole.y = canv.height/2-100;
                tmp_porthole.w = 100;
                tmp_porthole.h = 200;
                tmp_porthole.target_room = "exhibit";

                //reqs (porthole)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_porthole.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.portholes.push(tmp_porthole);//assign
            }
            //wildcards
            {
              //?
              tmp_wildcard = new wildcard();
              tmp_wildcard.id = "?";
              {
                //reqs (wildcard)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_wildcard.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.wildcards.push(tmp_wildcard);//assign
            }
          }
          tmp_scene.rooms.push(tmp_room);//assign

          //exhibit
          tmp_room = new room();
          tmp_room.id = "exhibit";
          {
            tmp_room.img = GenImg("assets/scene_0_room_1.png");
            tmp_room.nav_x = 100;
            tmp_room.nav_y = canv.height/2;
            tmp_room.nav_w = canv.width-tmp_room.nav_x*2;
            tmp_room.nav_h = canv.height/2-100;
            tmp_room.start_x = canv.width/2;
            tmp_room.start_y = canv.height/2;

            //persons
            {
              tmp_person = new person();
              {
                tmp_person.x = 150;
                tmp_person.y = canv.height/2-50;
                tmp_person.w = 50;
                tmp_person.h = 150;

                //options
                {
                  tmp_option = new option();
                  {
                    //reqs (option)
                    {
                      tmp_lock = new lock();
                      {}
                      tmp_option.locks.push(tmp_lock);//assign
                    }
                  }
                  tmp_person.options.push(tmp_option);//assign
                }
                //reqs (person)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_person.locks.push(tmp_lock);//assign
                }
              }
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
                          tmp_lock = new lock();
                          {}
                          tmp_zone.locks.push(tmp_lock);//assign
                        }
                      }
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_lock = new lock();
                      {}
                      tmp_view.locks.push(tmp_lock);//assign
                    }
                  }
                  tmp_object.views.push(tmp_view);//assign
                }
                //reqs (object)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_object.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.objects.push(tmp_object);//assign
            }
            //portholes
            {
              tmp_porthole = new porthole();
              {
                //reqs (porthole)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_porthole.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.portholes.push(tmp_porthole);//assign
            }
            //wildcards
            {
              tmp_wildcard = new wildcard();
              {
                //reqs (wildcard)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_wildcard.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.wildcards.push(tmp_wildcard);//assign
            }
          }
          tmp_scene.rooms.push(tmp_room);//assign
        }
      }
      tmp_map.scenes.push(tmp_scene);//assign

      //library
      tmp_scene = new scene();
      tmp_scene.id = "library";
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
                      tmp_lock = new lock();
                      {}
                      tmp_option.locks.push(tmp_lock);//assign
                    }
                  }
                  tmp_person.options.push(tmp_option);//assign
                }
                //reqs (person)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_person.locks.push(tmp_lock);//assign
                }
              }
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
                          tmp_lock = new lock();
                          {}
                          tmp_zone.locks.push(tmp_lock);//assign
                        }
                      }
                      tmp_view.zones.push(tmp_zone);//assign
                    }
                    //reqs (view)
                    {
                      tmp_lock = new lock();
                      {}
                      tmp_view.locks.push(tmp_lock);//assign
                    }
                  }
                  tmp_object.views.push(tmp_view);//assign
                }
                //reqs (object)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_object.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.objects.push(tmp_object);//assign
            }
            //portholes
            {
              tmp_porthole = new porthole();
              {
                //reqs (porthole)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_porthole.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.portholes.push(tmp_porthole);//assign
            }
            //wildcards
            {
              tmp_wildcard = new wildcard();
              {
                //reqs (wildcard)
                {
                  tmp_lock = new lock();
                  {}
                  tmp_wildcard.locks.push(tmp_lock);//assign
                }
              }
              tmp_room.wildcards.push(tmp_wildcard);//assign
            }
          }
          tmp_scene.rooms.push(tmp_room);//assign
        }
      }
      tmp_map.scenes.push(tmp_scene);//assign
    }
  }
  tmp_level.map = tmp_map;
}
levels.push(tmp_level);

}

