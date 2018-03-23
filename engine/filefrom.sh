#!/bin/bash

BREAKDOWN=$2

LEVEL=`      echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
if [ "@"$1 == "@animcycle" ]; then
ANIMCYCLE=`  echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@entry" ]; then
ENTRY=`      echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@cutscene" ]; then
CUTSCENE=`   echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
else
SCENE=`      echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
ROOM=`       echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
if [ "@"$1 == "@person" ] || [ "@"$1 == "@speak" ] || [ "@"$1 == "@option" ]; then
PERSON=`     echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
SPEAK=`      echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
OPTION=`     echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@object" ] || [ "@"$1 == "@view" ] || [ "@"$1 == "@zone" ]; then
OBJECT=`     echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
VIEW=`       echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
ZONE=`       echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@observation" ]; then
OBSERVATION=`echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@porthole" ]; then
PORTHOLE=`   echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@wildcard" ]; then
WILDCARD=`   echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
elif [ "@"$1 == "@inert" ]; then
INERT=`      echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
fi
fi

  if [ "@"$1 == "@level" ];       then echo ../assets/data/levels/$LEVEL.meta;
elif [ "@"$1 == "@animcycle" ];   then echo ../assets/data/levels/$LEVEL/animcycles/$ANIMCYCLE.meta;
elif [ "@"$1 == "@entry" ];       then echo ../assets/data/levels/$LEVEL/entrys/$ENTRY.meta;
elif [ "@"$1 == "@cutscene" ];    then echo ../assets/data/levels/$LEVEL/cutscenes/$CUTSCENE.meta;
elif [ "@"$1 == "@scene" ];       then echo ../assets/data/levels/$LEVEL/scenes/$SCENE.meta;
elif [ "@"$1 == "@room" ];        then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM.meta;
elif [ "@"$1 == "@person" ];      then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/persons/$PERSON.meta;
elif [ "@"$1 == "@speak" ];       then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/persons/$PERSON/speaks/$SPEAK.meta;
elif [ "@"$1 == "@option" ];      then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/persons/$PERSON/speaks/$SPEAK/options/$OPTION.meta;
elif [ "@"$1 == "@object" ];      then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT.meta;
elif [ "@"$1 == "@view" ];        then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT/views/$VIEW.meta;
elif [ "@"$1 == "@zone" ];        then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT/views/$VIEW/zones/$ZONE.meta;
elif [ "@"$1 == "@observation" ]; then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/observations/$OBSERVATION.meta;
elif [ "@"$1 == "@porthole" ];    then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/portholes/$PORTHOLE.meta;
elif [ "@"$1 == "@wildcard" ];    then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/wildcards/$WILDCARD.meta;
elif [ "@"$1 == "@inert" ];       then echo ../assets/data/levels/$LEVEL/scenes/$SCENE/rooms/$ROOM/inerts/$INERT.meta;
fi

