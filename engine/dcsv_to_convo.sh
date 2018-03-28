#!/bin/bash

inf=$1

cat $inf | dos2unix | sed -e 's/\r$//' -e 's/,/","/g' -e 's/\\","/,/g' | while read line; do echo \"$line\"; done | sed -e 's/""/"/g' -e 's/","$/"/' -e 's/","$/"/' -e 's/","$/"/' | sed 's/^"$//' > $inf.tmp
mv $inf.tmp $inf

./csv_to_convo.sh $inf

