#!/bin/bash

inf=$1
person=0
speak=0
option=0

while IFS= read -r line
do
  if [ "$person" == "0" ]; then
    person=`echo $line | sed 's/"//g'`
  else
    pt0=`echo $line | sed -e 's/"//' -e 's/".*//'`
    pt1=`echo $line | sed -e 's/"[^"]*","//' -e 's/".*//'`
    pt2=`echo $line | sed -e 's/"[^"]*","//' -e 's/[^"]*","//' -e 's/".*//'`
    pt3=`echo $line | sed -e 's/"[^"]*","//' -e 's/[^"]*","//' -e 's/[^"]*","//' -e 's/".*//'`
    if [ "@$pt0" == "@" ]; then
      continue;
    elif [ "@$pt0" == "@S" ]; then #speak
      speak=$person.$pt1
      speakfile=`./filefrom.sh speak $speak`
      if [ ! -f $speakfile ]; then ./add.sh speak $speak; fi
      cat $speakfile | sed -e "s/^tmp_speak.raw_atext *= *\".*/tmp_speak.raw_atext = \"$pt2\";/" > $speakfile.tmp
      mv $speakfile.tmp $speakfile
    elif [ "@$pt0" == "@O" ]; then #speak
      option=$person.$pt1
      optionfile=`./filefrom.sh option $option`
      if [ ! -f $optionfile ]; then ./add.sh option $option; fi
      cat $optionfile     | sed -e "s/tmp_option.raw_qtext *= *\".*/tmp_option.raw_qtext = \"$pt2\";/" > $optionfile.tmp
      cat $optionfile.tmp | sed -e "s/tmp_option.target_speak *= *\".*/tmp_option.target_speak = \"$pt3\";/" > $optionfile
      rm $optionfile.tmp
    fi
  fi
done < $inf

