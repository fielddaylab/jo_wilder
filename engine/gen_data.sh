#!/bin/bash

ENGINE_DD=../assets/data
GAME_DD=assets/data
OUT=data.js

id()
{
  basename $@ | sed 's@.meta@@'
}
dir()
{
  echo $@ | sed 's@.meta@@'
}

echo > $OUT

cat data.pre_stub >> $OUT

for level in $ENGINE_DD/*.meta; do #levels

  if [ ! -f $level ]; then echo "ERROR: Level not found in $ENGINE_DD"; continue; fi
  level_id=`id $level`
  level_dir=`dir $level`
  echo - Note: Genning $level_id #debug
  echo "tmp_level = new level();" >> $OUT
  echo "tmp_level.id = $level_id;" >> $OUT
  echo "{" >> $OUT
  cat $level >> $OUT

  for map in $level_dir/*.meta; do #maps

    if [ ! -f $map ]; then echo "ERROR: Map not found in $level_dir"; continue; fi
    map_id=`id $map`
    map_dir=`dir $map`
    echo - Note: Genning $map_id #debug
    echo "tmp_map = new map();" >> $OUT
    echo "tmp_map.id = $map_id;" >> $OUT
    echo "{" >> $OUT
    img=$level_id/$map_id.png
    if [ ! -f $ENGINE_DD/$img ]; then echo "ERROR: Map img not found (expected $img)";
    else echo "tmp_map.img = GenImg(\"$GAME_DD/$img\");" >> $OUT
    fi
    cat $map >> $OUT

    for scene in $map_dir/*.meta; do #scenes

      if [ ! -f $scene ]; then echo "ERROR: Scene not found in $map_dir"; continue; fi
      scene_id=`id $scene`
      scene_dir=`dir $scene`
      echo - Note: Genning $scene_id #debug
      echo "tmp_scene = new scene();" >> $OUT
      echo "tmp_scene.id = $scene_id;" >> $OUT
      echo "{" >> $OUT
      img=$level_id/$map_id/$scene_id.png
      if [ ! -f $ENGINE_DD/$img ]; then echo "ERROR: Scene img not found (expected $img)";
      else echo "tmp_scene.img = GenImg(\"$GAME_DD/$img\");" >> $OUT
      fi
      cat $scene >> $OUT

      for room in $scene_dir/*.meta; do #rooms

        if [ ! -f $room ]; then echo "ERROR: Room not found in $scene_dir"; continue; fi
        room_id=`id $room`
        room_dir=`dir $room`
        echo - Note: Genning $room_id #debug
        echo "tmp_room = new room();" >> $OUT
        echo "tmp_room.id = $room_id;" >> $OUT
        echo "{" >> $OUT
        img=$level_id/$map_id/$scene_id/$room_id.png
        if [ ! -f $ENGINE_DD/$img ]; then echo "ERROR: Room img not found (expected $img)";
        else echo "tmp_room.img = GenImg(\"$GAME_DD/$img\");" >> $OUT
        fi
        cat $room >> $OUT

        for person in $room_dir/persons/*.meta; do #persons

          if [ ! -f $person ]; then echo "Warning: Person not found in $room_dir/persons"; continue; fi
          person_id=`id $person`
          person_dir=`dir $person`
          echo - Note: Genning $person_id #debug
          echo "tmp_person = new person();" >> $OUT
          echo "tmp_person.id = $person_id;" >> $OUT
          echo "{" >> $OUT
          img=$level_id/$map_id/$scene_id/$room_id/persons/$person_id.png
          if [ ! -f $ENGINE_DD/$img ]; then echo "ERROR: Person img not found (expected $img)";
          else echo "tmp_person.img = GenImg(\"$GAME_DD/$img\");" >> $OUT
          fi
          cat $person >> $OUT

          for option in $person_dir/*.meta; do #options
            echo "TODO";
          done

          echo "}," >> $OUT

        done

        for object in $room_dir/objects/*.meta; do #objects

          if [ ! -f $object ]; then echo "Warning: Object not found in $room_dir/objects"; continue; fi
          object_id=`id $object`
          object_dir=`dir $object`
          echo - Note: Genning $object_id #debug
          echo "tmp_object = new object();" >> $OUT
          echo "tmp_object.id = $object_id;" >> $OUT
          echo "{" >> $OUT
          img=$level_id/$map_id/$scene_id/$room_id/objects/$object_id.png
          if [ ! -f $ENGINE_DD/$img ]; then echo "ERROR: Object img not found (expected $img)";
          else echo "tmp_object.img = GenImg(\"$GAME_DD/$img\");" >> $OUT
          fi
          cat $object >> $OUT

          for view in $object_dir/*.meta; do #views
            echo "TODO";
          done

          echo "}," >> $OUT

        done

        for porthole in $room_dir/portholes/*.meta; do #portholes

          if [ ! -f $porthole ]; then echo "Warning: Porthole not found in $room_dir/portholes"; continue; fi
          porthole_id=`id $porthole`
          porthole_dir=`dir $porthole`
          echo - Note: Genning $porthole_id #debug
          echo "tmp_porthole = new porthole();" >> $OUT
          echo "tmp_porthole.id = $porthole_id;" >> $OUT
          echo "{" >> $OUT
          img=$level_id/$map_id/$scene_id/$room_id/portholes/$porthole_id.png
          if [ ! -f $ENGINE_DD/$img ]; then echo "ERROR: Porthole img not found (expected $img)";
          else echo "tmp_porthole.img = GenImg(\"$GAME_DD/$img\");" >> $OUT
          fi
          cat $porthole >> $OUT

          echo "}," >> $OUT

        done

        for wildcard in $room_dir/wildcards/*.meta; do #wildcards

          if [ ! -f $wildcard ]; then echo "Warning: Wildcard not found in $room_dir/wildcards"; continue; fi
          wildcard_id=`id $wildcard`
          wildcard_dir=`dir $wildcard`
          echo - Note: Genning $wildcard_id #debug
          echo "tmp_wildcard = new wildcard();" >> $OUT
          echo "tmp_wildcard.id = $wildcard_id;" >> $OUT
          echo "{" >> $OUT
          img=$level_id/$map_id/$scene_id/$room_id/wildcards/$wildcard_id.png
          if [ ! -f $ENGINE_DD/$img ]; then echo "ERROR: Wildcard img not found (expected $img)";
          else echo "tmp_wildcard.img = GenImg(\"$GAME_DD/$img\");" >> $OUT
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

