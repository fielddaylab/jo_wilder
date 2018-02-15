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

  if [ "@"$1 == "@level" ];     then open ../assets/data/levels;
elif [ "@"$1 == "@animcycle" ]; then open ../assets/data/levels/$LEVEL/animcycles/$ANIMCYCLE; # this is the only one that opens _into_ the directory
elif [ "@"$1 == "@entry" ];     then open ../assets/data/levels/$LEVEL/entrys;
elif [ "@"$1 == "@cutscene" ];  then open ../assets/data/levels/$LEVEL/cutscenes;
elif [ "@"$1 == "@map" ];       then open ../assets/data/levels/$LEVEL/maps;
elif [ "@"$1 == "@scene" ];     then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes;
elif [ "@"$1 == "@room" ];      then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms;
elif [ "@"$1 == "@person" ];    then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/persons;
elif [ "@"$1 == "@speak" ];     then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/persons/$PERSON/speaks;
elif [ "@"$1 == "@option" ];    then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/persons/$PERSON/speaks/$SPEAK/options;
elif [ "@"$1 == "@object" ];    then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/objects;
elif [ "@"$1 == "@view" ];      then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT/views;
elif [ "@"$1 == "@zone" ];      then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/objects/$OBJECT/views/$VIEW/zones;
elif [ "@"$1 == "@porthole" ];  then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/portholes;
elif [ "@"$1 == "@wildcard" ];  then open ../assets/data/levels/$LEVEL/maps/$MAP/scenes/$SCENE/rooms/$ROOM/wildcards;
fi

