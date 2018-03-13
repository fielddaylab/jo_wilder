#!/bin/bash

#THIS IS INCREDIBLY INEFFICIENT
echo "This is really inefficient- w/ ~20 rooms it will likely take ~1m. Get some coffee."
echo "(Or, make it faster- it actually shouldn't be that hard)"

./list.sh type room | while read line; do
  if [ "@`echo $line | grep ' '`" == @ ]; then continue; fi
  fqid=`echo $line | tr -d '[:cntrl:]' | sed -e 's@[^[]*\[[^[]*\[[^[]*\[[^[]*\[2m@@' -e 's@\[.*$@@'`
  file=`./filefrom.sh room $fqid`
  aid=`cat $file | grep '^tmp_room.animcycle_id = ' | sed -e 's/^[^"]*"//' -e 's/";.*$//'`
  suggest_tip=`cat $file | grep '^\/\/SUGGEST_H:' | sed 's@^\/\/SUGGEST_H:@@'`
  if [ "@$suggest_tip" == "@" ]; then suggest_tip=1; fi
  afqid=`./fqid.sh animcycle $aid`
  afile=`./folderfrom.sh animcycle $afqid`/0.*
  asize=`identify $afile | sed -e 's/[^ ]* [^ ]* //' -e 's/ .*$//'`
  echo "//$asize" >> $file
  w=`echo $asize | sed 's/x.*//'`
  h=`echo $asize | sed 's/[^x]*x//'`
  echo "tmp_room.ww = $w*660/$h*$suggest_tip;" >> $file
  echo "tmp_room.wh = 660*$suggest_tip;" >> $file
done

