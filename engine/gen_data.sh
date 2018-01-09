#!/bin/bash

ENGINE_DD=../assets/data
GAME_DD=assets/data
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
  echo -n "Fix? y/(n):" >&1;
  read x
  if [ "@"$x == "@y" ]; then return 0; #0 = success
  else return 1;
  fi
}

echo > $OUT

cat data.pre_stub >> $OUT

levels_dir=$ENGINE_DD/levels
if [ ! -d $levels_dir ]; then echo "ERROR: Levels directory not found (expected $levels_dir)"; if queryfix; then mkdir $levels_dir; else exit; fi fi
for level in $levels_dir/*.meta; do #levels

  if [ ! -f $level ]; then echo "ERROR: No levels found in $levels_dir"; continue; fi
  level_id=`id $level`
  level_dir=`dir $level`
  echo - Note: Genning $level_id #debug
  echo "level = new level();" >> $OUT
  echo "level.id = $level_id;" >> $OUT
  echo "{" >> $OUT
  cat $level >> $OUT

  maps_dir=$level_dir/map
  if [ ! -d $maps_dir ]; then echo "ERROR: Maps directory not found (expected $maps_dir)"; if queryfix; then mkdir $maps_dir; else continue; fi fi
  for map in $maps_dir/*.meta; do #maps

    if [ ! -f $map ]; then echo "ERROR: Map not found in $maps_dir"; continue; fi
    map_id=`id $map`
    map_dir=`dir $map`
    map_img=`img $map`
    echo - Note: Genning $map_id #debug
    echo "map = new map();" >> $OUT
    echo "map.id = $map_id;" >> $OUT
    echo "{" >> $OUT
    if [ ! -f $ENGINE_DD/$map_img ]; then echo "ERROR: Map img not found (expected $map_img)";
    else echo "map.img = GenImg(\"$GAME_DD/$map_img\");" >> $OUT
    fi
    cat $map >> $OUT

    scenes_dir=$map_dir/scenes
    if [ ! -d $scenes_dir ]; then echo "ERROR: Scenes directory not found (expected $scenes_dir)"; if queryfix; then mkdir $scenes_dir; else continue; fi fi
    for scene in $scenes_dir/*.meta; do #scenes

      if [ ! -f $scene ]; then echo "ERROR: No scenes found in $scenes_dir"; continue; fi
      scene_id=`id $scene`
      scene_dir=`dir $scene`
      scene_img=`img $scene`
      echo - Note: Genning $scene_id #debug
      echo "scene = new scene();" >> $OUT
      echo "scene.id = $scene_id;" >> $OUT
      echo "{" >> $OUT
      if [ ! -f $ENGINE_DD/$scene_img ]; then echo "ERROR: Scene img not found (expected $scene_img)";
      else echo "scene.img = GenImg(\"$GAME_DD/$scene_img\");" >> $OUT
      fi
      cat $scene >> $OUT

      rooms_dir=$scene_dir/rooms
      if [ ! -d $rooms_dir ]; then echo "ERROR: Rooms directory not found (expected $rooms_dir)"; if queryfix; then mkdir $rooms_dir; else continue; fi fi
      for room in $rooms_dir/*.meta; do #rooms

        if [ ! -f $room ]; then echo "ERROR: No rooms found in $rooms_dir"; continue; fi
        room_id=`id $room`
        room_dir=`dir $room`
        room_img=`img $room`
        echo - Note: Genning $room_id #debug
        echo "room = new room();" >> $OUT
        echo "room.id = $room_id;" >> $OUT
        echo "{" >> $OUT
        if [ ! -f $ENGINE_DD/$room_img ]; then echo "ERROR: Room img not found (expected $room_img)";
        else echo "room.img = GenImg(\"$GAME_DD/$room_img\");" >> $OUT
        fi
        cat $room >> $OUT

        persons_dir=$room_dir/persons
        if [ ! -d $persons_dir ]; then echo "ERROR: Persons directory not found (expected $persons_dir)"; if queryfix; then mkdir $persons_dir; else continue; fi fi
        for person in $persons_dir/*.meta; do #persons

          if [ ! -f $person ]; then echo "Warning: No persons found in $persons_dir"; continue; fi
          person_id=`id $person`
          person_dir=`dir $person`
          person_img=`img $person`
          echo - Note: Genning $person_id #debug
          echo "person = new person();" >> $OUT
          echo "person.id = $person_id;" >> $OUT
          echo "{" >> $OUT
          if [ ! -f $ENGINE_DD/$person_img ]; then echo "ERROR: Person img not found (expected $person_img)";
          else echo "person.img = GenImg(\"$GAME_DD/$person_img\");" >> $OUT
          fi
          cat $person >> $OUT

          options_dir=$person_dir/options
          if [ ! -d $options_dir ]; then echo "ERROR: Options directory not found (expected $options_dir)"; if queryfix; then mkdir $options_dir; else continue; fi fi
          for option in $options_dir/*.meta; do #options
            echo "TODO";
          done

          echo "}," >> $OUT

        done

        objects_dir=$room_dir/objects
        if [ ! -d $objects_dir ]; then echo "ERROR: Objects directory not found (expected $objects_dir)"; if queryfix; then mkdir $objects_dir; else continue; fi fi
        for object in $objects_dir/*.meta; do #objects

          if [ ! -f $object ]; then echo "Warning: No objects found in $objects_dir"; continue; fi
          object_id=`id $object`
          object_dir=`dir $object`
          object_img=`img $object`
          echo - Note: Genning $object_id #debug
          echo "object = new object();" >> $OUT
          echo "object.id = $object_id;" >> $OUT
          echo "{" >> $OUT
          cat $object >> $OUT

          views_dir=$object_dir/views
          if [ ! -d $views_dir ]; then echo "ERROR: Views directory not found (expected $views_dir)"; if queryfix; then mkdir $views_dir; else continue; fi fi
          for view in $views_dir/*.meta; do #views
            echo "TODO";
          done

          echo "}," >> $OUT

        done

        portholes_dir=$room_dir/portholes
        if [ ! -d $portholes_dir ]; then echo "ERROR: Portholes directory not found (expected $portholes_dir)"; if queryfix; then mkdir $portholes_dir; else continue; fi fi
        for porthole in $portholes_dir/*.meta; do #portholes

          if [ ! -f $porthole ]; then echo "Warning: No portholes found in $portholes_dir"; continue; fi
          porthole_id=`id $porthole`
          porthole_dir=`dir $porthole`
          porthole_img=`img $porthole`
          echo - Note: Genning $porthole_id #debug
          echo "porthole = new porthole();" >> $OUT
          echo "porthole.id = $porthole_id;" >> $OUT
          echo "{" >> $OUT
          if [ ! -f $ENGINE_DD/$porthole_img ]; then echo "ERROR: Porthole img not found (expected $porthole_img)";
          else echo "porthole.img = GenImg(\"$GAME_DD/$porthole_img\");" >> $OUT
          fi
          cat $porthole >> $OUT

          echo "}," >> $OUT

        done

        wildcards_dir=$room_dir/wildcards
        if [ ! -d $wildcards_dir ]; then echo "ERROR: Wildcards directory not found (expected $wildcards_dir)"; if queryfix; then mkdir $wildcards_dir; else continue; fi fi
        for wildcard in $wildcards_dir/*.meta; do #wildcards

          if [ ! -f $wildcard ]; then echo "Warning: No wildcards found in $wildcards_dir"; continue; fi
          wildcard_id=`id $wildcard`
          wildcard_dir=`dir $wildcard`
          wildcard_img=`img $wildcard`
          echo - Note: Genning $wildcard_id #debug
          echo "wildcard = new wildcard();" >> $OUT
          echo "wildcard.id = $wildcard_id;" >> $OUT
          echo "{" >> $OUT
          if [ ! -f $ENGINE_DD/$wildcard_img ]; then echo "ERROR: Wildcard img not found (expected $wildcard_img)";
          else echo "wildcard.img = GenImg(\"$GAME_DD/$wildcard_img\");" >> $OUT
          fi
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

