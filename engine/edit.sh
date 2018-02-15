#!/bin/bash

BREAKDOWN=$2

LEVEL=`    echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
if [ "@"$1 == "@animcycle" ]; then
ANIMCYCLE=`echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@entry" ]; then
ENTRY=`    echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@cutscene" ]; then
CUTSCENE=` echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
else
MAP=`      echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
SCENE=`    echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
ROOM=`     echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
if [ "@"$1 == "@person" ] || [ "@"$1 == "@speak" ] || [ "@"$1 == "@option" ]; then
PERSON=`   echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
SPEAK=`    echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
OPTION=`   echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@object" ] || [ "@"$1 == "@view" ] || [ "@"$1 == "@zone" ]; then
OBJECT=`   echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
VIEW=`     echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
ZONE=`     echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@porthole" ]; then
PORTHOLE=` echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@wildcard" ]; then
WILDCARD=` echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
fi
fi

  if [ "@"$1 == "@level" ];     then $EDITOR ../assets/data/levels/$LEVEL.meta;
elif [ "@"$1 == "@animcycle" ]; then $EDITOR ../assets/data/levels/$LEVEL/animcycles/$ANIMCYCLE.meta;
elif [ "@"$1 == "@entry" ];     then $EDITOR ../assets/data/levels/$LEVEL/entrys/$ENTRY.meta;
elif [ "@"$1 == "@cutscene" ];  then $EDITOR ../assets/data/levels/$LEVEL/cutscenes/$CUTSCENE.meta;
elif [ "@"$1 == "@map" ];       then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP.meta;
elif [ "@"$1 == "@scene" ];     then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE.meta;
elif [ "@"$1 == "@room" ];      then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM.meta;
elif [ "@"$1 == "@person" ];    then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/persons/$PERSON.meta;
elif [ "@"$1 == "@speak" ];     then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/persons/$PERSON/speaks/$SPEAK.meta;
elif [ "@"$1 == "@option" ];    then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/persons/$PERSON/speaks/$SPEAK/options/$OPTION.meta;
elif [ "@"$1 == "@object" ];    then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT.meta;
elif [ "@"$1 == "@view" ];      then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT/views/$VIEW.meta;
elif [ "@"$1 == "@zone" ];      then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT/views/$VIEW/zones/$ZONE.meta;
elif [ "@"$1 == "@porthole" ];  then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/portholes/$PORTHOLE.meta;
elif [ "@"$1 == "@wildcard" ];  then $EDITOR ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/wildcards/$WILDCARD.meta;
fi

