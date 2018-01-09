#!/bin/bash

ENGINE_DD=../assets/data
GAME_DD=assets/data
STUB_D=stubs
OUT=data.js

id() #turns ../assets/data/levels/my_level/maps/my_map/.../banana.meta into banana (removes path + .meta) #engine/game
{
  basename $@ | sed 's@.meta@@'
}
dir() #turns ../assets/data/levels/my_level/maps/my_map/.../banana.meta into ../assets/data/levels/my_level/maps/my_map/.../banana (removes .meta) #engine
{
  echo $@ | sed 's@.meta@@'
}
img() #turns ../assets/data/levels/my_level/maps/my_map/.../banana.meta into levels/my_level/maps/my_map/.../banana.png (makes .png relative to data directory) #engine/game
{
  echo $@ | sed -e "s@^$ENGINE_DD@@" -e 's@.meta@.png@'
}

queryfix()
{
  echo -n "Fix? (y)/n:" >&1;
  read x
  if [ "@"$x == "@n" ]; then return 1; #1 = fail
  else return 0; #default success
  fi
}
querystub()
{
  echo -n "Stub? y/(n):" >&1;
  read x
  if [ "@"$x == "@y" ]; then return 0; #0 = success
  else return 1; #default fail
  fi
}

echo > $OUT

cat data.pre_stub >> $OUT

levels_dir=$ENGINE_DD/levels
if [ ! -d $levels_dir ]; then echo "ERROR: Levels directory not found (expected $levels_dir)"; if queryfix; then mkdir $levels_dir; else exit; fi fi
for level in $levels_dir/*.meta; do #levels

  if [ ! -f $level ]; then echo "ERROR: No levels found in $levels_dir"; if querystub; then cp $STUB_D/level.meta $levels_dir; mkdir $levels_dir/level; else continue; fi fi
  level_id=`id $level`
  level_dir=`dir $level`
  if [ ! -d $level_dir ]; then echo "ERROR: No directory found for $level_id (expected $level_dir)"; if queryfix; then mkdir $level_dir; else continue; fi fi
  echo - Note: Genning $level_id #debug
  echo "level = new level();" >> $OUT
  echo "level.id = $level_id;" >> $OUT
  echo "{" >> $OUT
  cat $level >> $OUT

  maps_dir=$level_dir/map
  if [ ! -d $maps_dir ]; then echo "ERROR: Maps directory not found (expected $maps_dir)"; if queryfix; then mkdir $maps_dir; else continue; fi fi
  for map in $maps_dir/*.meta; do #maps

    if [ ! -f $map ]; then echo "ERROR: Map not found in $maps_dir"; if querystub; then cp $STUB_D/map.meta $maps_dir; cp $STUB_D/map.png $maps_dir; mkdir $maps_dir/map; else continue; fi fi
    map_id=`id $map`
    map_dir=`dir $map`
    if [ ! -d $map_dir ]; then echo "ERROR: No directory found for $map_id (expected $map_dir)"; if queryfix; then mkdir $map_dir; else continue; fi fi
    map_img=`img $map`
    echo - Note: Genning $map_id #debug
    echo "map = new map();" >> $OUT
    echo "map.id = $map_id;" >> $OUT
    echo "{" >> $OUT
    if [ ! -f $ENGINE_DD/$map_img ]; then echo "ERROR: Map img not found (expected $map_img)"; if queryfix; then cp $STUB_D/map.png $ENGINE_DD/$map_img; else continue; fi fi
    echo "map.img = GenImg(\"$GAME_DD/$map_img\");" >> $OUT
    cat $map >> $OUT

    scenes_dir=$map_dir/scenes
    if [ ! -d $scenes_dir ]; then echo "ERROR: Scenes directory not found (expected $scenes_dir)"; if queryfix; then mkdir $scenes_dir; else continue; fi fi
    for scene in $scenes_dir/*.meta; do #scenes

      if [ ! -f $scene ]; then echo "ERROR: No scenes found in $scenes_dir"; if querystub; then cp $STUB_D/scene.meta $scenes_dir; cp $STUB_D/scene.png $scenes_dir; mkdir $scenes_dir/scene; else continue; fi fi
      scene_id=`id $scene`
      scene_dir=`dir $scene`
      if [ ! -d $scene_dir ]; then echo "ERROR: No directory found for $scene_id (expected $scene_dir)"; if queryfix; then mkdir $scene_dir; else continue; fi fi
      scene_img=`img $scene`
      echo - Note: Genning $scene_id #debug
      echo "scene = new scene();" >> $OUT
      echo "scene.id = $scene_id;" >> $OUT
      echo "{" >> $OUT
      if [ ! -f $ENGINE_DD/$scene_img ]; then echo "ERROR: Scene img not found (expected $scene_img)"; if queryfix; then cp $STUB_D/scene.png $ENGINE_DD/$scene_img; else continue; fi fi
      echo "scene.img = GenImg(\"$GAME_DD/$scene_img\");" >> $OUT
      cat $scene >> $OUT

      rooms_dir=$scene_dir/rooms
      if [ ! -d $rooms_dir ]; then echo "ERROR: Rooms directory not found (expected $rooms_dir)"; if queryfix; then mkdir $rooms_dir; else continue; fi fi
      for room in $rooms_dir/*.meta; do #rooms

        if [ ! -f $room ]; then echo "ERROR: No rooms found in $rooms_dir"; if querystub; then cp $STUB_D/room.meta $rooms_dir; cp $STUB_D/room.png $rooms_dir; mkdir $rooms_dir/room; else continue; fi fi
        room_id=`id $room`
        room_dir=`dir $room`
        if [ ! -d $room_dir ]; then echo "ERROR: No directory found for $room_id (expected $room_dir)"; if queryfix; then mkdir $room_dir; else continue; fi fi
        room_img=`img $room`
        echo - Note: Genning $room_id #debug
        echo "room = new room();" >> $OUT
        echo "room.id = $room_id;" >> $OUT
        echo "{" >> $OUT
        if [ ! -f $ENGINE_DD/$room_img ]; then echo "ERROR: Room img not found (expected $room_img)"; if queryfix; then cp $STUB_D/room.png $ENGINE_DD/$room_img; else continue; fi fi
        echo "room.img = GenImg(\"$GAME_DD/$room_img\");" >> $OUT
        cat $room >> $OUT

        persons_dir=$room_dir/persons
        if [ ! -d $persons_dir ]; then echo "ERROR: Persons directory not found (expected $persons_dir)"; if queryfix; then mkdir $persons_dir; else continue; fi fi
        for person in $persons_dir/*.meta; do #persons

          if [ ! -f $person ]; then echo "Warning: No persons found in $persons_dir"; if querystub; then cp $STUB_D/person.meta $persons_dir; cp $STUB_D/person.png $persons_dir; mkdir $persons_dir/person; else continue; fi fi
          person_id=`id $person`
          person_dir=`dir $person`
          if [ ! -d $person_dir ]; then echo "ERROR: No directory found for $person_id (expected $person_dir)"; if queryfix; then mkdir $person_dir; else continue; fi fi
          person_img=`img $person`
          echo - Note: Genning $person_id #debug
          echo "person = new person();" >> $OUT
          echo "person.id = $person_id;" >> $OUT
          echo "{" >> $OUT
          if [ ! -f $ENGINE_DD/$person_img ]; then echo "ERROR: Person img not found (expected $person_img)"; if queryfix; then cp $STUB_D/person.png $ENGINE_DD/$person_img; else continue; fi fi
          echo "person.img = GenImg(\"$GAME_DD/$person_img\");" >> $OUT
          cat $person >> $OUT

          options_dir=$person_dir/options
          if [ ! -d $options_dir ]; then echo "ERROR: Options directory not found (expected $options_dir)"; if queryfix; then mkdir $options_dir; else continue; fi fi
          for option in $options_dir/*.meta; do #options

            if [ ! -f $option ]; then echo "Warning: No options found in $options_dir"; if querystub; then cp $STUB_D/option.meta $options_dir; mkdir $options_dir/option; else continue; fi fi
            option_id=`id $option`
            option_dir=`dir $option`
            if [ ! -d $option_dir ]; then echo "ERROR: No directory found for $option_id (expected $option_dir)"; if queryfix; then mkdir $option_dir; else continue; fi fi
            echo - Note: Genning $option_id #debug
            echo "option = new option();" >> $OUT
            echo "option.id = $option_id;" >> $OUT
            echo "{" >> $OUT
            cat $option >> $OUT

            echo "}," >> $OUT

          done

          echo "}," >> $OUT

        done

        objects_dir=$room_dir/objects
        if [ ! -d $objects_dir ]; then echo "ERROR: Objects directory not found (expected $objects_dir)"; if queryfix; then mkdir $objects_dir; else continue; fi fi
        for object in $objects_dir/*.meta; do #objects

          if [ ! -f $object ]; then echo "Warning: No objects found in $objects_dir"; if querystub; then cp $STUB_D/object.meta $objects_dir; mkdir $objects_dir/object; else continue; fi fi
          object_id=`id $object`
          object_dir=`dir $object`
          if [ ! -d $object_dir ]; then echo "ERROR: No directory found for $object_id (expected $object_dir)"; if queryfix; then mkdir $object_dir; else continue; fi fi
          echo - Note: Genning $object_id #debug
          echo "object = new object();" >> $OUT
          echo "object.id = $object_id;" >> $OUT
          echo "{" >> $OUT
          cat $object >> $OUT

          views_dir=$object_dir/views
          if [ ! -d $views_dir ]; then echo "ERROR: Views directory not found (expected $views_dir)"; if queryfix; then mkdir $views_dir; else continue; fi fi
          for view in $views_dir/*.meta; do #views

            if [ ! -f $view ]; then echo "Warning: No views found in $views_dir"; if querystub; then cp $STUB_D/view.meta $views_dir; mkdir $views_dir/view; else continue; fi fi
            view_id=`id $view`
            view_dir=`dir $view`
            if [ ! -d $view_dir ]; then echo "ERROR: No directory found for $view_id (expected $view_dir)"; if queryfix; then mkdir $view_dir; else continue; fi fi
            view_img=`img $view`
            echo - Note: Genning $view_id #debug
            echo "view = new view();" >> $OUT
            echo "view.id = $view_id;" >> $OUT
            echo "{" >> $OUT
            if [ ! -f $ENGINE_DD/$view_img ]; then echo "ERROR: View img not found (expected $view_img)"; if queryfix; then cp $STUB_D/view.png $ENGINE_DD/$view_img; else continue; fi fi
            echo "view.img = GenImg(\"$GAME_DD/$view_img\");" >> $OUT
            cat $view >> $OUT

            zones_dir=$view_dir/zones
            if [ ! -d $zones_dir ]; then echo "ERROR: zones directory not found (expected $zones_dir)"; if queryfix; then mkdir $zones_dir; else continue; fi fi
            for zone in $zones_dir/*.meta; do #zones

              if [ ! -f $zone ]; then echo "Warning: No Zones found in $zones_dir"; if querystub; then cp $STUB_D/zone.meta $zones_dir; mkdir $zones_dir/zone; else continue; fi fi
              zone_id=`id $zone`
              zone_dir=`dir $zone`
              if [ ! -d $zone_dir ]; then echo "ERROR: No directory found for $zone_id (expected $zone_dir)"; if queryfix; then mkdir $zone_dir; else continue; fi fi
              echo - Note: Genning $zone_id #debug
              echo "zone = new zone();" >> $OUT
              echo "zone.id = $zone_id;" >> $OUT
              echo "{" >> $OUT
              cat $zone >> $OUT

              echo "}," >> $OUT

            done

            echo "}," >> $OUT

          done

          echo "}," >> $OUT

        done

        portholes_dir=$room_dir/portholes
        if [ ! -d $portholes_dir ]; then echo "ERROR: Portholes directory not found (expected $portholes_dir)"; if queryfix; then mkdir $portholes_dir; else continue; fi fi
        for porthole in $portholes_dir/*.meta; do #portholes

          if [ ! -f $porthole ]; then echo "Warning: No portholes found in $portholes_dir"; if querystub; then cp $STUB_D/porthole.meta $portholes_dir; mkdir $portholes_dir/porthole; else continue; fi fi
          porthole_id=`id $porthole`
          porthole_dir=`dir $porthole`
          if [ ! -d $porthole_dir ]; then echo "ERROR: No directory found for $porthole_id (expected $porthole_dir)"; if queryfix; then mkdir $porthole_dir; else continue; fi fi
          echo - Note: Genning $porthole_id #debug
          echo "porthole = new porthole();" >> $OUT
          echo "porthole.id = $porthole_id;" >> $OUT
          echo "{" >> $OUT
          cat $porthole >> $OUT

          echo "}," >> $OUT

        done

        wildcards_dir=$room_dir/wildcards
        if [ ! -d $wildcards_dir ]; then echo "ERROR: Wildcards directory not found (expected $wildcards_dir)"; if queryfix; then mkdir $wildcards_dir; else continue; fi fi
        for wildcard in $wildcards_dir/*.meta; do #wildcards

          if [ ! -f $wildcard ]; then echo "Warning: No wildcards found in $wildcards_dir"; if querystub; then cp $STUB_D/wildcard.meta $wildcards_dir; mkdir $wildcards_dir/wildcard; else continue; fi fi
          wildcard_id=`id $wildcard`
          wildcard_dir=`dir $wildcard`
          if [ ! -d $wildcard_dir ]; then echo "ERROR: No directory found for $wildcard_id (expected $wildcard_dir)"; if queryfix; then mkdir $wildcard_dir; else continue; fi fi
          echo - Note: Genning $wildcard_id #debug
          echo "wildcard = new wildcard();" >> $OUT
          echo "wildcard.id = $wildcard_id;" >> $OUT
          echo "{" >> $OUT
          cat $wildcard >> $OUT

          echo "}," >> $OUT

        done

        echo "}," >> $OUT

      done

      echo "}," >> $OUT

    done

    echo "}," >> $OUT

  done

  echo "}," >> $OUT

done

cat data.post_stub >> $OUT

