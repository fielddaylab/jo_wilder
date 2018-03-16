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
MAP=`        echo $BREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $BREAKDOWN | grep '\.'` != "@" ]; then BREAKDOWN=`echo $BREAKDOWN | sed 's/^[^.]*\.//g'`; else BREAKDOWN=""; fi
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

  if [ "@"$1 == "@level" ];       then echo ../assets/data/levels;
elif [ "@"$1 == "@animcycle" ];   then echo ../assets/data/levels/$LEVEL/animcycles/$ANIMCYCLE; # this is the only one that opens _into_ the directory
elif [ "@"$1 == "@entry" ];       then echo ../assets/data/levels/$LEVEL/entrys;
elif [ "@"$1 == "@cutscene" ];    then echo ../assets/data/levels/$LEVEL/cutscenes;
elif [ "@"$1 == "@map" ];         then echo ../assets/data/levels/$LEVEL/maps;
elif [ "@"$1 == "@scene" ];       then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes;
elif [ "@"$1 == "@room" ];        then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms;
elif [ "@"$1 == "@person" ];      then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/persons;
elif [ "@"$1 == "@speak" ];       then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/persons/$PERSON/speaks;
elif [ "@"$1 == "@option" ];      then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/persons/$PERSON/speaks/$SPEAK/options;
elif [ "@"$1 == "@object" ];      then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/objects;
elif [ "@"$1 == "@view" ];        then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT/views;
elif [ "@"$1 == "@zone" ];        then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT/views/$VIEW/zones;
elif [ "@"$1 == "@observation" ]; then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/observations;
elif [ "@"$1 == "@porthole" ];    then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/portholes;
elif [ "@"$1 == "@wildcard" ];    then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/wildcards;
elif [ "@"$1 == "@inert" ];       then echo ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/inerts;
fi

