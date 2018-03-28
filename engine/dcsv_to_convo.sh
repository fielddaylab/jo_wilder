#!/bin/bash

inf=$1

while read line; do
  quoted=0
  echo $line | dos2unix | while read -n1 char; do
    if [ "@$char" == "@\"" ]; then
      if [ $quoted == 1 ]; then quoted=0; else quoted=1; fi
    elif [ "@$char" == "@," ]; then
      if [ $quoted == 1 ]; then echo -n "\\,"; else echo -n ","; fi
    elif [ "@$char@" == "@@" ]; then
      echo -n ' '
    else
      echo -n "$char"
    fi
  done | awk '{print "\"" $0 "\"" }' | sed -e 's/ "/"/' -e 's/" /"/' -e 's/,/","/g' -e 's/\\","/,/g' -e 's/""/"/g' -e 's/","$/"/' -e 's/","$/"/' -e 's/","$/"/' -e 's/^"$//'
done < $inf > $inf.tmp

mv $inf.tmp $inf

./csv_to_convo.sh $inf

