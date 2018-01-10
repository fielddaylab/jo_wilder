#!/bin/bash

ENGINE_DD=../assets/data
GAME_DD=assets/data
STUB_D=stubs
OUT=data.js
FINAL=../src/scenes
TTY=`tty`
AUTOFIX="0"
NOSTUB="0"
GENCMD=""
GENFQID=""
RMCMD=""
RMFQID=""

while [ $# -gt 0 ]; do
  if [ "@"$1 == "@autofix" ]; then AUTOFIX="1"; fi
  if [ "@"$1 == "@nostub" ];  then NOSTUB="1";  fi
  if [ "@"$1 == "@genlevel" ];    then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genlevel level";                                fi fi
  if [ "@"$1 == "@genmap" ];      then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genmap level.map";                              fi fi
  if [ "@"$1 == "@genscene" ];    then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genscene level.map.scene";                      fi fi
  if [ "@"$1 == "@genroom" ];     then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genroom level.map.scene.room";                  fi fi
  if [ "@"$1 == "@genperson" ];   then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genperson level.map.scene.room.person";         fi fi
  if [ "@"$1 == "@genoption" ];   then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genoption level.map.scene.room.person.option";  fi fi
  if [ "@"$1 == "@genobject" ];   then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genobject level.map.scene.room.object";         fi fi
  if [ "@"$1 == "@genview" ];     then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genview level.map.scene.room.object.view";      fi fi
  if [ "@"$1 == "@genzone" ];     then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genzone level.map.scene.room.object.view.zone"; fi fi
  if [ "@"$1 == "@genporthole" ]; then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genporthole level.map.scene.room.porthole";     fi fi
  if [ "@"$1 == "@genwildcard" ]; then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genwildcard level.map.scene.room.wildcard";     fi fi
  if [ "@"$1 == "@rmlevel" ];    then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmlevel level";                                fi fi
  if [ "@"$1 == "@rmmap" ];      then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmmap level.map";                              fi fi
  if [ "@"$1 == "@rmscene" ];    then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmscene level.map.scene";                      fi fi
  if [ "@"$1 == "@rmroom" ];     then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmroom level.map.scene.room";                  fi fi
  if [ "@"$1 == "@rmperson" ];   then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmperson level.map.scene.room.person";         fi fi
  if [ "@"$1 == "@rmoption" ];   then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmoption level.map.scene.room.person.option";  fi fi
  if [ "@"$1 == "@rmobject" ];   then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmobject level.map.scene.room.object";         fi fi
  if [ "@"$1 == "@rmview" ];     then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmview level.map.scene.room.object.view";      fi fi
  if [ "@"$1 == "@rmzone" ];     then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmzone level.map.scene.room.object.view.zone"; fi fi
  if [ "@"$1 == "@rmporthole" ]; then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmporthole level.map.scene.room.porthole";     fi fi
  if [ "@"$1 == "@rmwildcard" ]; then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmwildcard level.map.scene.room.wildcard";     fi fi
  shift;
done

#gen command
GENBREAKDOWN=$GENFQID

GENLEVEL=`   echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENMAP=`     echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENSCENE=`   echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENROOM=`    echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
if [ "@"$GENCMD == "@genperson" ] || [ "@"$GENCMD == "@genoption" ]; then
GENPERSON=`  echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENOPTION=`  echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@genobject" ] || [ "@"$GENCMD == "@genview" ] || [ "@"$GENCMD == "@genzone" ]; then
GENOBJECT=`  echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENVIEW=`    echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENZONE=`    echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@genporthole" ]; then
GENPORTHOLE=`echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@genwildcard" ]; then
GENWILDCARD=`echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
fi

GENDIR=$ENGINE_DD
if [ "@"$GENLEVEL != "@" ]; then
  GENDIR=$GENDIR/levels/$GENLEVEL
  if [ ! -f $GENDIR.meta ]; then
    cp $STUB_D/level.meta $GENDIR.meta; mkdir $GENDIR;
  fi
  if [ "@"$GENMAP != "@" ]; then
    GENDIR=$GENDIR/maps/$GENMAP
    if [ ! -f $GENDIR.meta ]; then
      cp $STUB_D/map.meta $GENDIR.meta; cp $STUB_D/map.png $GENDIR.png; mkdir $GENDIR;
    fi
    if [ "@"$GENSCENE != "@" ]; then
      GENDIR=$GENDIR/scenes/$GENSCENE
      if [ ! -f $GENDIR.meta ]; then
        cp $STUB_D/scene.meta $GENDIR.meta; cp $STUB_D/scene.png $GENDIR.png; mkdir $GENDIR;
      fi
      if [ "@"$GENROOM != "@" ]; then
        GENDIR=$GENDIR/rooms/$GENROOM
        if [ ! -f $GENDIR.meta ]; then
          cp $STUB_D/room.meta $GENDIR.meta; cp $STUB_D/room.png $GENDIR.png; mkdir $GENDIR;
        fi

        if [ "@"$GENCMD == "@genperson" ] || [ "@"$GENCMD == "@genoption" ]; then

          if [ "@"$GENPERSON != "@" ]; then
            GENDIR=$GENDIR/persons/$GENPERSON
            if [ ! -f $GENDIR.meta ]; then
              cp $STUB_D/person.meta $GENDIR.meta; cp $STUB_D/person.png $GENDIR.png; mkdir $GENDIR;
            fi
            if [ "@"$GENOPTION != "@" ]; then
              GENDIR=$GENDIR/options/$GENOPTION
              if [ ! -f $GENDIR.meta ]; then
                cp $STUB_D/option.meta $GENDIR.meta; mkdir $GENDIR;
              fi
            fi #option
          fi #person

        elif [ "@"$GENCMD == "@genobject" ] || [ "@"$GENCMD == "@genview" ] || [ "@"$GENCMD == "@genzone" ]; then

          if [ "@"$GENOBJECT != "@" ]; then
            GENDIR=$GENDIR/objects/$GENOBJECT
            if [ ! -f $GENDIR.meta ]; then
              cp $STUB_D/object.meta $GENDIR.meta; mkdir $GENDIR;
            fi
            if [ "@"$GENVIEW != "@" ]; then
              GENDIR=$GENDIR/views/$GENVIEW
              if [ ! -f $GENDIR.meta ]; then
                cp $STUB_D/view.meta $GENDIR.meta; cp $STUB_D/view.png $GENDIR.png; mkdir $GENDIR;
              fi
              if [ "@"$GENZONE != "@" ]; then
                GENDIR=$GENDIR/zones/$GENZONE
                if [ ! -f $GENDIR.meta ]; then
                  cp $STUB_D/zone.meta $GENDIR.meta; mkdir $GENDIR;
                fi
              fi #zone
            fi #view
          fi #object

        elif [ "@"$GENCMD == "@genporthole" ]; then

          if [ "@"$GENPORTHOLE != "@" ]; then
            GENDIR=$GENDIR/portholes/$GENPORTHOLE
            if [ ! -f $GENDIR.meta ]; then
              cp $STUB_D/porthole.meta $GENDIR.meta; mkdir $GENDIR;
            fi
          fi #porthole

        elif [ "@"$GENCMD == "@genwildcard" ]; then

          if [ "@"$GENWILDCARD != "@" ]; then
            GENDIR=$GENDIR/wildcards/$GENWILDCARD
            if [ ! -f $GENDIR.meta ]; then
              cp $STUB_D/wildcard.meta $GENDIR.meta; mkdir $GENDIR;
            fi
          fi #wildcard

        fi #type

      fi #room
    fi #scene
  fi #map
fi #level

#rm command
RMBREAKDOWN=$RMFQID

RMLEVEL=`   echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMMAP=`     echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMSCENE=`   echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMROOM=`    echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
if [ "@"$RMCMD == "@genperson" ] || [ "@"$RMCMD == "@genoption" ]; then
RMPERSON=`  echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMOPTION=`  echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@genobject" ] || [ "@"$RMCMD == "@genview" ] || [ "@"$RMCMD == "@genzone" ]; then
RMOBJECT=`  echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMVIEW=`    echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMZONE=`    echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@genporthole" ]; then
RMPORTHOLE=`echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@genwildcard" ]; then
RMWILDCARD=`echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
fi

RMDIR=$ENGINE_DD
RMDIR=$RMDIR/levels/$RMLEVEL
if [ "@"$RMCMD == "@rmlevel" ] && [ "@"$RMLEVEL != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/maps/$RMMAP
if [ "@"$RMCMD == "@rmmap" ] && [ "@"$RMMAP != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/scenes/$RMSCENE
if [ "@"$RMCMD == "@rmscene" ] && [ "@"$RMSCENE != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/rooms/$RMROOM
if [ "@"$RMCMD == "@rmroom" ] && [ "@"$RMROOM != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/persons/$RMPERSON
if [ "@"$RMCMD == "@rmperson" ] && [ "@"$RMPERSON != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/options/$RMOPTION
if [ "@"$RMCMD == "@rmoption" ] && [ "@"$RMOPTION != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/objectss/$RMOBJECT
if [ "@"$RMCMD == "@rmobject" ] && [ "@"$RMOBJECT != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/views/$RMVIEW
if [ "@"$RMCMD == "@rmview" ] && [ "@"$RMVIEW != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/zones/$RMZONE
if [ "@"$RMCMD == "@rmzone" ] && [ "@"$RMZONE != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/portholes/$RMPORTHOLE
if [ "@"$RMCMD == "@rmporthole" ] && [ "@"$RMPORTHOLE != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi
RMDIR=$RMDIR/wildcards/$RMWILDCARD
if [ "@"$RMCMD == "@rmwildcard" ] && [ "@"$RMWILDCARD != "@"] && [ -d $RMDIR ]; then rm -r $RMDIR; rm $RMDIR.meta; rm $RMDIR.png; fi

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
  if [ $AUTOFIX == "1" ]; then echo "(autofix)" > $TTY; return 0; fi #yes
  echo -n "Fix? (y)/n:" > $TTY
  read x
  if [ "@"$x == "@n" ]; then return 1; #1 = fail
  else return 0; #default success
  fi
}
querystub()
{
  if [ $NOSTUB == "1" ]; then echo "(nostub)" > $TTY; return 1; fi #no
  echo -n "Stub? y/(n):" > $TTY
  read x
  if [ "@"$x == "@y" ]; then return 0; #0 = success
  else return 1; #default fail
  fi
}
getname()
{
  echo -n "Name ($@):" > $TTY
  read name
  if [ "@"$name == "@" ]; then echo $@
  else echo $name
  fi
}

echo > $OUT

cat data.pre_stub >> $OUT

levels_dir=$ENGINE_DD/levels
if [ ! -d $levels_dir ]; then echo "ERROR: Levels directory not found (expected $levels_dir)"; if queryfix; then mkdir $levels_dir; else exit; fi fi
for level in $levels_dir/*.meta; do #levels

  if [ ! -f $level ]; then echo "ERROR: No levels found in $levels_dir"; if querystub; then name=`getname level`; level=$levels_dir/$name.meta; cp $STUB_D/level.meta $level; mkdir $levels_dir/$name; else continue; fi fi
  level_id=`id $level`
  level_dir=`dir $level`
  if [ ! -d $level_dir ]; then echo "ERROR: No directory found for $level_id (expected $level_dir)"; if queryfix; then mkdir $level_dir; else continue; fi fi
  echo - Note: Genning $level_id #debug
  echo "tmp_level = new level();" >> $OUT
  echo "tmp_level.id = \"$level_id\";" >> $OUT
  echo "tmp_level.fqid = \"$level_id\";" >> $OUT
  echo "{" >> $OUT
  cat $level >> $OUT

  maps_dir=$level_dir/maps
  if [ ! -d $maps_dir ]; then echo "ERROR: Maps directory not found (expected $maps_dir)"; if queryfix; then mkdir $maps_dir; else continue; fi fi
  for map in $maps_dir/*.meta; do #maps

    if [ ! -f $map ]; then echo "ERROR: Map not found in $maps_dir"; if querystub; then name=`getname map`; map=$maps_dir/$name.meta; cp $STUB_D/map.meta $map; cp $STUB_D/map.png $maps_dir/$name.png; mkdir $maps_dir/$name; else continue; fi fi
    map_id=`id $map`
    map_dir=`dir $map`
    if [ ! -d $map_dir ]; then echo "ERROR: No directory found for $map_id (expected $map_dir)"; if queryfix; then mkdir $map_dir; else continue; fi fi
    map_img=`img $map`
    echo - Note: Genning $map_id #debug
    echo "tmp_map = new map();" >> $OUT
    echo "tmp_map.id = \"$map_id\";" >> $OUT
    echo "tmp_map.fqid = \"$level_id.$map_id\";" >> $OUT
    echo "{" >> $OUT
    if [ ! -f $ENGINE_DD/$map_img ]; then echo "ERROR: Map img not found (expected $map_img)"; if queryfix; then cp $STUB_D/map.png $ENGINE_DD/$map_img; else continue; fi fi
    echo "tmp_map.img = GenImg(\"$GAME_DD/$map_img\");" >> $OUT
    cat $map >> $OUT

    scenes_dir=$map_dir/scenes
    if [ ! -d $scenes_dir ]; then echo "ERROR: Scenes directory not found (expected $scenes_dir)"; if queryfix; then mkdir $scenes_dir; else continue; fi fi
    for scene in $scenes_dir/*.meta; do #scenes

      if [ ! -f $scene ]; then echo "ERROR: No scenes found in $scenes_dir"; if querystub; then name=`getname scene`; scene=$scenes_dir/$name.meta; cp $STUB_D/scene.meta $scene; cp $STUB_D/scene.png $scenes_dir/$name.png; mkdir $scenes_dir/$name; else continue; fi fi
      scene_id=`id $scene`
      scene_dir=`dir $scene`
      if [ ! -d $scene_dir ]; then echo "ERROR: No directory found for $scene_id (expected $scene_dir)"; if queryfix; then mkdir $scene_dir; else continue; fi fi
      scene_img=`img $scene`
      echo - Note: Genning $scene_id #debug
      echo "tmp_scene = new scene();" >> $OUT
      echo "tmp_scene.id = \"$scene_id\";" >> $OUT
      echo "tmp_scene.fqid = \"$level_id.$map_id.$scene_id\";" >> $OUT
      echo "{" >> $OUT
      if [ ! -f $ENGINE_DD/$scene_img ]; then echo "ERROR: Scene img not found (expected $scene_img)"; if queryfix; then cp $STUB_D/scene.png $ENGINE_DD/$scene_img; else continue; fi fi
      echo "tmp_scene.img = GenImg(\"$GAME_DD/$scene_img\");" >> $OUT
      cat $scene >> $OUT

      rooms_dir=$scene_dir/rooms
      if [ ! -d $rooms_dir ]; then echo "ERROR: Rooms directory not found (expected $rooms_dir)"; if queryfix; then mkdir $rooms_dir; else continue; fi fi
      for room in $rooms_dir/*.meta; do #rooms

        if [ ! -f $room ]; then echo "ERROR: No rooms found in $rooms_dir"; if querystub; then name=`getname room`; room=$rooms_dir/$name.meta; cp $STUB_D/room.meta $room; cp $STUB_D/room.png $rooms_dir/$name.png; mkdir $rooms_dir/$name; else continue; fi fi
        room_id=`id $room`
        room_dir=`dir $room`
        if [ ! -d $room_dir ]; then echo "ERROR: No directory found for $room_id (expected $room_dir)"; if queryfix; then mkdir $room_dir; else continue; fi fi
        room_img=`img $room`
        echo - Note: Genning $room_id #debug
        echo "tmp_room = new room();" >> $OUT
        echo "tmp_room.id = \"$room_id\";" >> $OUT
        echo "tmp_room.fqid = \"$level_id.$map_id.$scene_id.$room_id\";" >> $OUT
        echo "{" >> $OUT
        if [ ! -f $ENGINE_DD/$room_img ]; then echo "ERROR: Room img not found (expected $room_img)"; if queryfix; then cp $STUB_D/room.png $ENGINE_DD/$room_img; else continue; fi fi
        echo "tmp_room.img = GenImg(\"$GAME_DD/$room_img\");" >> $OUT
        cat $room >> $OUT

        persons_dir=$room_dir/persons
        if [ ! -d $persons_dir ]; then echo "ERROR: Persons directory not found (expected $persons_dir)"; if queryfix; then mkdir $persons_dir; else continue; fi fi
        for person in $persons_dir/*.meta; do #persons

          if [ ! -f $person ]; then echo "Warning: No persons found in $persons_dir"; if querystub; then name=`getname person`; person=$persons_dir/$name.meta; cp $STUB_D/person.meta $person; cp $STUB_D/person.png $persons_dir/$name.png; mkdir $persons_dir/$name; else continue; fi fi
          person_id=`id $person`
          person_dir=`dir $person`
          if [ ! -d $person_dir ]; then echo "ERROR: No directory found for $person_id (expected $person_dir)"; if queryfix; then mkdir $person_dir; else continue; fi fi
          person_img=`img $person`
          echo - Note: Genning $person_id #debug
          echo "tmp_person = new person();" >> $OUT
          echo "tmp_person.id = \"$person_id\";" >> $OUT
          echo "tmp_person.id = \"$level_id.$map_id.$scene_id.$room_id.$person_id\";" >> $OUT
          echo "{" >> $OUT
          if [ ! -f $ENGINE_DD/$person_img ]; then echo "ERROR: Person img not found (expected $person_img)"; if queryfix; then cp $STUB_D/person.png $ENGINE_DD/$person_img; else continue; fi fi
          echo "tmp_person.img = GenImg(\"$GAME_DD/$person_img\");" >> $OUT
          cat $person >> $OUT

          options_dir=$person_dir/options
          if [ ! -d $options_dir ]; then echo "ERROR: Options directory not found (expected $options_dir)"; if queryfix; then mkdir $options_dir; else continue; fi fi
          for option in $options_dir/*.meta; do #options

            if [ ! -f $option ]; then echo "Warning: No options found in $options_dir"; if querystub; then name=`getname option`; option=$options_dir/$name.meta; cp $STUB_D/option.meta $option; mkdir $options_dir/$name; else continue; fi fi
            option_id=`id $option`
            option_dir=`dir $option`
            if [ ! -d $option_dir ]; then echo "ERROR: No directory found for $option_id (expected $option_dir)"; if queryfix; then mkdir $option_dir; else continue; fi fi
            echo - Note: Genning $option_id #debug
            echo "tmp_option = new option();" >> $OUT
            echo "tmp_option.id = \"$level_id.$map_id.$scene_id.$room_id.$person_id.$option_id\";" >> $OUT
            echo "{" >> $OUT
            cat $option >> $OUT

            echo "}" >> $OUT
            echo "tmp_person.options.push(tmp_option);" >> $OUT

          done

          echo "}" >> $OUT
          echo "tmp_room.persons.push(tmp_person);" >> $OUT

        done

        objects_dir=$room_dir/objects
        if [ ! -d $objects_dir ]; then echo "ERROR: Objects directory not found (expected $objects_dir)"; if queryfix; then mkdir $objects_dir; else continue; fi fi
        for object in $objects_dir/*.meta; do #objects

          if [ ! -f $object ]; then echo "Warning: No objects found in $objects_dir"; if querystub; then name=`getname object`; object=$objects_dir/$name.meta; cp $STUB_D/object.meta $object; mkdir $objects_dir/$name; else continue; fi fi
          object_id=`id $object`
          object_dir=`dir $object`
          if [ ! -d $object_dir ]; then echo "ERROR: No directory found for $object_id (expected $object_dir)"; if queryfix; then mkdir $object_dir; else continue; fi fi
          echo - Note: Genning $object_id #debug
          echo "tmp_object = new object();" >> $OUT
          echo "tmp_object.id = \"$object_id\";" >> $OUT
          echo "tmp_object.fqid = \"$level_id.$map_id.$scene_id.$room_id.$object_id\";" >> $OUT
          echo "{" >> $OUT
          cat $object >> $OUT

          views_dir=$object_dir/views
          if [ ! -d $views_dir ]; then echo "ERROR: Views directory not found (expected $views_dir)"; if queryfix; then mkdir $views_dir; else continue; fi fi
          for view in $views_dir/*.meta; do #views

            if [ ! -f $view ]; then echo "Warning: No views found in $views_dir"; if querystub; then name=`getname view`; view=$views_dir/$name.meta; cp $STUB_D/view.meta $view; mkdir $views_dir/$name; else continue; fi fi
            view_id=`id $view`
            view_dir=`dir $view`
            if [ ! -d $view_dir ]; then echo "ERROR: No directory found for $view_id (expected $view_dir)"; if queryfix; then mkdir $view_dir; else continue; fi fi
            view_img=`img $view`
            echo - Note: Genning $view_id #debug
            echo "tmp_view = new view();" >> $OUT
            echo "tmp_view.id = \"$view_id\";" >> $OUT
            echo "tmp_view.fqid = \"$level_id.$map_id.$scene_id.$room_id.$object_id.$view_id\";" >> $OUT
            echo "{" >> $OUT
            if [ ! -f $ENGINE_DD/$view_img ]; then echo "ERROR: View img not found (expected $view_img)"; if queryfix; then cp $STUB_D/view.png $ENGINE_DD/$view_img; else continue; fi fi
            echo "tmp_view.img = GenImg(\"$GAME_DD/$view_img\");" >> $OUT
            cat $view >> $OUT

            zones_dir=$view_dir/zones
            if [ ! -d $zones_dir ]; then echo "ERROR: zones directory not found (expected $zones_dir)"; if queryfix; then mkdir $zones_dir; else continue; fi fi
            for zone in $zones_dir/*.meta; do #zones

              if [ ! -f $zone ]; then echo "Warning: No Zones found in $zones_dir"; if querystub; then name=`getname zone`; zone=$zones_dir/$name.meta; cp $STUB_D/zone.meta $zone; mkdir $zones_dir/$name; else continue; fi fi
              zone_id=`id $zone`
              zone_dir=`dir $zone`
              if [ ! -d $zone_dir ]; then echo "ERROR: No directory found for $zone_id (expected $zone_dir)"; if queryfix; then mkdir $zone_dir; else continue; fi fi
              echo - Note: Genning $zone_id #debug
              echo "tmp_zone = new zone();" >> $OUT
              echo "tmp_zone.id = \"$zone_id\";" >> $OUT
              echo "tmp_zone.fqid = \"$level_id.$map_id.$scene_id.$room_id.$object_id.$view_id.$zone_id\";" >> $OUT
              echo "{" >> $OUT
              cat $zone >> $OUT

              echo "}" >> $OUT
              echo "tmp_views.zone.push(tmp_zone);" >> $OUT

            done

            echo "}" >> $OUT
            echo "tmp_object.views.push(tmp_view);" >> $OUT

          done

          echo "}" >> $OUT
          echo "tmp_room.objects.push(tmp_object);" >> $OUT

        done

        portholes_dir=$room_dir/portholes
        if [ ! -d $portholes_dir ]; then echo "ERROR: Portholes directory not found (expected $portholes_dir)"; if queryfix; then mkdir $portholes_dir; else continue; fi fi
        for porthole in $portholes_dir/*.meta; do #portholes

          if [ ! -f $porthole ]; then echo "Warning: No portholes found in $portholes_dir"; if querystub; then name=`getname porthole`; porthole=$portholes_dir/$name.meta; cp $STUB_D/porthole.meta $porthole; mkdir $portholes_dir/$name; else continue; fi fi
          porthole_id=`id $porthole`
          porthole_dir=`dir $porthole`
          if [ ! -d $porthole_dir ]; then echo "ERROR: No directory found for $porthole_id (expected $porthole_dir)"; if queryfix; then mkdir $porthole_dir; else continue; fi fi
          echo - Note: Genning $porthole_id #debug
          echo "tmp_porthole = new porthole();" >> $OUT
          echo "tmp_porthole.id = \"$porthole_id\";" >> $OUT
          echo "tmp_porthole.fqid = \"$level_id.$map_id.$scene_id.$room_id.$porthole_id\";" >> $OUT
          echo "{" >> $OUT
          cat $porthole >> $OUT

          echo "}" >> $OUT
          echo "tmp_room.portholes.push(tmp_porthole);" >> $OUT

        done

        wildcards_dir=$room_dir/wildcards
        if [ ! -d $wildcards_dir ]; then echo "ERROR: Wildcards directory not found (expected $wildcards_dir)"; if queryfix; then mkdir $wildcards_dir; else continue; fi fi
        for wildcard in $wildcards_dir/*.meta; do #wildcards

          if [ ! -f $wildcard ]; then echo "Warning: No wildcards found in $wildcards_dir"; if querystub; then name=`getname wildcard`; wildcard=$wildcards_dir/$name.meta; cp $STUB_D/wildcard.meta $wildcard; mkdir $wildcards_dir/$name; else continue; fi fi
          wildcard_id=`id $wildcard`
          wildcard_dir=`dir $wildcard`
          if [ ! -d $wildcard_dir ]; then echo "ERROR: No directory found for $wildcard_id (expected $wildcard_dir)"; if queryfix; then mkdir $wildcard_dir; else continue; fi fi
          echo - Note: Genning $wildcard_id #debug
          echo "tmp_wildcard = new wildcard();" >> $OUT
          echo "tmp_wildcard.id = \"$wildcard_id\";" >> $OUT
          echo "tmp_wildcard.fqid = \"$level_id.$map_id.$scene_id.$room_id.$wildcard_id\";" >> $OUT
          echo "{" >> $OUT
          cat $wildcard >> $OUT

          echo "}" >> $OUT
          echo "tmp_room.wildcards.push(tmp_wildcard);" >> $OUT

        done

        echo "}" >> $OUT
        echo "tmp_scene.rooms.push(tmp_room);" >> $OUT

      done

      echo "}" >> $OUT
      echo "tmp_map.scenes.push(tmp_scene);" >> $OUT

    done

    echo "}" >> $OUT
    echo "tmp_level.map = tmp_map;" >> $OUT

  done

  echo "}" >> $OUT
  echo "levels.push(tmp_level);" >> $OUT

done

cat data.post_stub >> $OUT
cp $OUT $FINAL

