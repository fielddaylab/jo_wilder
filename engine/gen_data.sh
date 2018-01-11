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
annotate() #type dir name
{
  echo $1
  echo $2
  convert $2/$3.png -gravity south -stroke '#000C' -strokewidth 2 -annotate 0 "$1 $3" -stroke none -fill white -annotate 0 "$1 $3" $2/$3.png
}

stubimg() #type dir name
{
  cp $STUB_D/$1.png $2/$3.png
  annotate "$1" "$2" "$3"
}

stubmeta() #type dir name
{
  cp $STUB_D/$1.meta $2/$3.meta
}

stubfull() #type dir name
{
  stubmeta "$1" "$2" "$3"
  stubimg "$1" "$2" "$3"
  mkdir $2/$3
}

stubfullifdne() #type dir name
{
  if [ ! -f $2/$3.meta ]; then
    stubfull "$1" "$2" "$3"
  fi
}

rmfullnoimg() #type dir name
{
  rm $2/$3.meta
  rm -r $2/$3
}

rmfull() #type dir name
{
  rm $2/$3.meta
  rm $2/$3.png
  rm -r $2/$3
}

ensuredelimeter() #type dir
{
  if [ ! -d $2/${1}s ]; then
    echo "ERROR: ${1}s directory not found (expected $2/${1}s)" >&2
    if queryfix; then
      mkdir ${1}s
    else
      return 1
    fi
  fi
}

stubifnone() #type dir file
{
  if [ ! -f $3 ]; then
    echo "ERROR: No ${1}s found in $2" >&2
    if querystub; then
      stubfull $1 $2 `getname $3`
    else
      return 1
    fi
  fi
}

fixifdne() #type dir name
{
  #img
  if [ ! -f $2/$3.png ]; then
    echo "ERROR: $1 img not found for $3 (expected $2/$3.png)" >&2
    if queryfix; then
      stubimg "$1" "$2" "$3"
    fi
  fi
  #dir
  if [ ! -d $2/$3 ]; then
    echo "ERROR: $1 directory not found for $3 (expected $2/$3)" >&2
    if queryfix; then
      mkdir $2/$3
    else
      return 1
    fi
  fi
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

GENDIR=$ENGINE_DD/levels; if [ "@"$GENLEVEL != "@" ]; then stubfullifdne level $GENDIR $GENLEVEL;
  GENDIR=$GENDIR/$GENLEVEL/maps; if [ "@"$GENMAP != "@" ]; then stubfullifdne map $GENDIR $GENMAP;
    GENDIR=$GENDIR/$GENMAP/scenes; if [ "@"$GENSCENE != "@" ]; then stubfullifdne scene $GENDIR $GENSCENE;
      GENDIR=$GENDIR/$GENSCENE/rooms; if [ "@"$GENROOM != "@" ]; then stubfullifdne room $GENDIR $GENROOM;

        if [ "@"$GENCMD == "@genperson" ] || [ "@"$GENCMD == "@genoption" ]; then

          GENDIR=$GENDIR/$GENROOM/persons; if [ "@"$GENPERSON != "@" ]; then stubfullifdne person $GENDIR $GENPERSON;
            GENDIR=$GENDIR/$GENPERSON/options; if [ "@"$GENOPTION != "@" ]; then stubfullifdne option $GENDIR $GENOPTION; fi #option
          fi #person

        elif [ "@"$GENCMD == "@genobject" ] || [ "@"$GENCMD == "@genview" ] || [ "@"$GENCMD == "@genzone" ]; then

          GENDIR=$GENDIR/$GENROOM/objects; if [ "@"$GENOBJECT != "@" ]; then stubfullifdne object $GENDIR $GENOBJECT;
            GENDIR=$GENDIR/$GENOBJECT/views; if [ "@"$GENVIEW != "@" ]; then stubfullifdne view $GENDIR $GENVIEW;
              GENDIR=$GENDIR/$GENVIEW/zones; if [ "@"$GENZONE != "@" ]; then stubfullifdne zone $GENDIR $GENZONE; fi #zone
            fi #view
          fi #object

        elif [ "@"$GENCMD == "@genporthole" ]; then

          GENDIR=$GENDIR/$GENROOM/portholes; if [ "@"$GENPORTHOLE != "@" ]; then stubfullifdne porthole $GENDIR $GENPORTHOLE; fi #porthole

        elif [ "@"$GENCMD == "@genwildcard" ]; then

          GENDIR=$GENDIR/$GENROOM/wildcards; if [ "@"$GENWILDCARD != "@" ]; then stubfullifdne wildcard $GENDIR $GENWILDCARD; fi #wildcard

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
if [ "@"$RMCMD == "@rmperson" ] || [ "@"$RMCMD == "@rmoption" ]; then
RMPERSON=`  echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMOPTION=`  echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rmobject" ] || [ "@"$RMCMD == "@rmview" ] || [ "@"$RMCMD == "@rmzone" ]; then
RMOBJECT=`  echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMVIEW=`    echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMZONE=`    echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rmporthole" ]; then
RMPORTHOLE=`echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rmwildcard" ]; then
RMWILDCARD=`echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
fi

RMDIR=$ENGINE_DD
RMDIR=$RMDIR/levels;            if [ "@"$RMCMD == "@rmlevel" ]    && [ "@"$RMLEVEL != "@" ]    && [ -d $RMDIR/$RMLEVEL ];    then rmfull level     $RMDIR $RMLEVEL;    fi
RMDIR=$RMDIR/$RMLEVEL/maps;     if [ "@"$RMCMD == "@rmmap" ]      && [ "@"$RMMAP != "@" ]      && [ -d $RMDIR/$RMMAP ];      then rmfull map       $RMDIR $RMMAP;      fi
RMDIR=$RMDIR/$RMMAP/scenes;     if [ "@"$RMCMD == "@rmscene" ]    && [ "@"$RMSCENE != "@" ]    && [ -d $RMDIR/$RMSCENE ];    then rmfull scene     $RMDIR $RMSCENE;    fi
RMDIR=$RMDIR/$RMSCENE/rooms;    if [ "@"$RMCMD == "@rmroom" ]     && [ "@"$RMROOM != "@" ]     && [ -d $RMDIR/$RMROOM ];     then rmfull room      $RMDIR $RMROOM;     fi
if [ "@"$RMCMD == "@rmperson" ] || [ "@"$RMCMD == "@rmoption" ]; then
RMDIR=$RMDIR/$RMROOM/persons;   if [ "@"$RMCMD == "@rmperson" ]   && [ "@"$RMPERSON != "@" ]   && [ -d $RMDIR/$RMPERSON ];   then rmfull person    $RMDIR $RMPERSON;   fi
RMDIR=$RMDIR/$RMPERSON/options; if [ "@"$RMCMD == "@rmoption" ]   && [ "@"$RMOPTION != "@" ]   && [ -d $RMDIR/$RMOPTION ];   then rmfull option    $RMDIR $RMOPTION;   fi
elif [ "@"$RMCMD == "@rmobject" ] || [ "@"$RMCMD == "@rmview" ] || [ "@"$RMCMD == "@rmzone" ]; then
RMDIR=$RMDIR/$RMROOM/objects;   if [ "@"$RMCMD == "@rmobject" ]   && [ "@"$RMOBJECT != "@" ]   && [ -d $RMDIR/$RMOBJECT ];   then rmfull object    $RMDIR $RMOBJECT;   fi
RMDIR=$RMDIR/$RMOBJECT/views;   if [ "@"$RMCMD == "@rmview" ]     && [ "@"$RMVIEW != "@" ]     && [ -d $RMDIR/$RMVIEW ];     then rmfull view      $RMDIR $RMVIEW;     fi
RMDIR=$RMDIR/$RMVIEW/zones;     if [ "@"$RMCMD == "@rmzone" ]     && [ "@"$RMZONE != "@" ]     && [ -d $RMDIR/$RMZONE ];     then rmfullnoimg zone $RMDIR $RMZONE;     fi
elif [ "@"$RMCMD == "@rmporthole" ]; then
RMDIR=$RMDIR/$RMROOM/portholes; if [ "@"$RMCMD == "@rmporthole" ] && [ "@"$RMPORTHOLE != "@" ] && [ -d $RMDIR/$RMPORTHOLE ]; then rmfull porthole  $RMDIR $RMPORTHOLE; fi
elif [ "@"$RMCMD == "@rmwildcard" ]; then
RMDIR=$RMDIR/$RMROOM/wildcards; if [ "@"$RMCMD == "@rmwildcard" ] && [ "@"$RMWILDCARD != "@" ] && [ -d $RMDIR/$RMWILDCARD ]; then rmfull wildcard  $RMDIR $RMWILDCARD; fi
fi

# BEGIN
echo > $OUT

cat data.pre_stub >> $OUT

if ensuredelimeter level $ENGINE_DD; then :; else exit; fi
levels_dir=$ENGINE_DD/levels
for level in $levels_dir/*.meta; do #levels

  if stubifnone level $levels_dir $level; then level=$levels_dir/*.meta; else continue; fi
  level_id=`id $level`
  level_dir=`dir $level`
  fixifdne level $levels_dir $level_id
  echo - Note: Genning $level_id #debug
  echo "tmp_level = new level();" >> $OUT
  echo "tmp_level.id = \"$level_id\";" >> $OUT
  echo "tmp_level.fqid = \"$level_id\";" >> $OUT
  echo "{" >> $OUT
  cat $level >> $OUT

  if ensuredelimeter map $level_dir; then :; else continue; fi
  maps_dir=$level_dir/maps
  for map in $maps_dir/*.meta; do #maps

    if stubifnone map $maps_dir $map; then map=$maps_dir/*.meta; else continue; fi
    map_id=`id $map`
    map_dir=`dir $map`
    map_img=`img $map`
    fixifdne map $maps_dir $map_id
    echo - Note: Genning $map_id #debug
    echo "tmp_map = new map();" >> $OUT
    echo "tmp_map.id = \"$map_id\";" >> $OUT
    echo "tmp_map.fqid = \"$level_id.$map_id\";" >> $OUT
    echo "{" >> $OUT
    echo "tmp_map.img = GenImg(\"$GAME_DD/$map_img\");" >> $OUT
    cat $map >> $OUT

    if ensuredelimeter scene $map_dir; then :; else continue; fi
    scenes_dir=$map_dir/scenes
    for scene in $scenes_dir/*.meta; do #scenes

      if stubifnone scene $scenes_dir $scene; then scene=$scenes_dir/*.meta; else continue; fi
      scene_id=`id $scene`
      scene_dir=`dir $scene`
      scene_img=`img $scene`
      fixifdne scene $scenes_dir $scene_id
      echo - Note: Genning $scene_id #debug
      echo "tmp_scene = new scene();" >> $OUT
      echo "tmp_scene.id = \"$scene_id\";" >> $OUT
      echo "tmp_scene.fqid = \"$level_id.$map_id.$scene_id\";" >> $OUT
      echo "{" >> $OUT
      echo "tmp_scene.img = GenImg(\"$GAME_DD/$scene_img\");" >> $OUT
      cat $scene >> $OUT

      if ensuredelimeter room $scene_dir; then :; else continue; fi
      rooms_dir=$scene_dir/rooms
      for room in $rooms_dir/*.meta; do #rooms

        if stubifnone room $rooms_dir $room; then room=$rooms_dir/*.meta; else continue; fi
        room_id=`id $room`
        room_dir=`dir $room`
        room_img=`img $room`
        fixifdne room $rooms_dir $room_id
        echo - Note: Genning $room_id #debug
        echo "tmp_room = new room();" >> $OUT
        echo "tmp_room.id = \"$room_id\";" >> $OUT
        echo "tmp_room.fqid = \"$level_id.$map_id.$scene_id.$room_id\";" >> $OUT
        echo "{" >> $OUT
        echo "tmp_room.img = GenImg(\"$GAME_DD/$room_img\");" >> $OUT
        cat $room >> $OUT

        if ensuredelimeter person $room_dir; then :; else continue; fi
        persons_dir=$room_dir/persons
        for person in $persons_dir/*.meta; do #persons

          if stubifnone person $persons_dir $person; then person=$persons_dir/*.meta; else continue; fi
          person_id=`id $person`
          person_dir=`dir $person`
          person_img=`img $person`
          fixifdne person $persons_dir $person_id
          echo - Note: Genning $person_id #debug
          echo "tmp_person = new person();" >> $OUT
          echo "tmp_person.id = \"$person_id\";" >> $OUT
          echo "tmp_person.id = \"$level_id.$map_id.$scene_id.$room_id.$person_id\";" >> $OUT
          echo "{" >> $OUT
          echo "tmp_person.img = GenImg(\"$GAME_DD/$person_img\");" >> $OUT
          cat $person >> $OUT

          if ensuredelimeter option $person_dir; then :; else continue; fi
          options_dir=$person_dir/options
          for option in $options_dir/*.meta; do #options

            if stubifnone option $options_dir $option; then option=$options_dir/*.meta; else continue; fi
            option_id=`id $option`
            option_dir=`dir $option`
            option_img=`img $option`
            fixifdne option $options_dir $option_id
            echo - Note: Genning $option_id #debug
            echo "tmp_option = new option();" >> $OUT
            echo "tmp_option.id = \"$level_id.$map_id.$scene_id.$room_id.$person_id.$option_id\";" >> $OUT
            echo "{" >> $OUT
            echo "tmp_option.img = GenImg(\"$GAME_DD/$option_img\");" >> $OUT
            cat $option >> $OUT

            echo "}" >> $OUT
            echo "tmp_person.options.push(tmp_option);" >> $OUT

          done

          echo "}" >> $OUT
          echo "tmp_room.persons.push(tmp_person);" >> $OUT

        done

        if ensuredelimeter object $room_dir; then :; else continue; fi
        objects_dir=$room_dir/objects
        for object in $objects_dir/*.meta; do #objects

          if stubifnone object $objects_dir $object; then object=$objects_dir/*.meta; else continue; fi
          object_id=`id $object`
          object_dir=`dir $object`
          object_img=`img $object`
          fixifdne object $objects_dir $object_id
          echo - Note: Genning $object_id #debug
          echo "tmp_object = new object();" >> $OUT
          echo "tmp_object.id = \"$object_id\";" >> $OUT
          echo "tmp_object.fqid = \"$level_id.$map_id.$scene_id.$room_id.$object_id\";" >> $OUT
          echo "{" >> $OUT
          echo "tmp_object.img = GenImg(\"$GAME_DD/$object_img\");" >> $OUT
          cat $object >> $OUT

          if ensuredelimeter view $object_dir; then :; else continue; fi
          views_dir=$object_dir/views
          for view in $views_dir/*.meta; do #views

            if stubifnone view $views_dir $view; then view=$views_dir/*.meta; else continue; fi
            view_id=`id $view`
            view_dir=`dir $view`
            view_img=`img $view`
            fixifdne view $views_dir $view_id
            echo - Note: Genning $view_id #debug
            echo "tmp_view = new view();" >> $OUT
            echo "tmp_view.id = \"$view_id\";" >> $OUT
            echo "tmp_view.fqid = \"$level_id.$map_id.$scene_id.$room_id.$object_id.$view_id\";" >> $OUT
            echo "{" >> $OUT
            echo "tmp_view.img = GenImg(\"$GAME_DD/$view_img\");" >> $OUT
            cat $view >> $OUT

            if ensuredelimeter zone $view_dir; then :; else continue; fi
            zones_dir=$view_dir/zones
            for zone in $zones_dir/*.meta; do #zones

              if stubifnone zone $zones_dir $zone; then zone=$zones_dir/*.meta; else continue; fi
              zone_id=`id $zone`
              zone_dir=`dir $zone`
              fixifdne zone $zones_dir $zone_id
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

        if ensuredelimeter porthole $room_dir; then :; else continue; fi
        portholes_dir=$room_dir/portholes
        for porthole in $portholes_dir/*.meta; do #portholes

          if stubifnone porthole $portholes_dir $porthole; then porthole=$portholes_dir/*.meta; else continue; fi
          porthole_id=`id $porthole`
          porthole_dir=`dir $porthole`
          porthole_img=`img $porthole`
          fixifdne porthole $portholes_dir $porthole_id
          echo - Note: Genning $porthole_id #debug
          echo "tmp_porthole = new porthole();" >> $OUT
          echo "tmp_porthole.id = \"$porthole_id\";" >> $OUT
          echo "tmp_porthole.fqid = \"$level_id.$map_id.$scene_id.$room_id.$porthole_id\";" >> $OUT
          echo "{" >> $OUT
          echo "tmp_porthole.img = GenImg(\"$GAME_DD/$porthole_img\");" >> $OUT
          cat $porthole >> $OUT

          echo "}" >> $OUT
          echo "tmp_room.portholes.push(tmp_porthole);" >> $OUT

        done

        if ensuredelimeter wildcard $room_dir; then :; else continue; fi
        wildcards_dir=$room_dir/wildcards
        for wildcard in $wildcards_dir/*.meta; do #wildcards

          if stubifnone wildcard $wildcards_dir $wildcard; then wildcard=$wildcards_dir/*.meta; else continue; fi
          wildcard_id=`id $wildcard`
          wildcard_dir=`dir $wildcard`
          wildcard_img=`img $wildcard`
          fixifdne wildcard $wildcards_dir $wildcard_id
          echo - Note: Genning $wildcard_id #debug
          echo "tmp_wildcard = new wildcard();" >> $OUT
          echo "tmp_wildcard.id = \"$wildcard_id\";" >> $OUT
          echo "tmp_wildcard.fqid = \"$level_id.$map_id.$scene_id.$room_id.$wildcard_id\";" >> $OUT
          echo "{" >> $OUT
          echo "tmp_wildcard.img = GenImg(\"$GAME_DD/$wildcard_img\");" >> $OUT
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

