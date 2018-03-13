#!/bin/bash

#THIS IS INCREDIBLY INEFFICIENT
echo "This is really inefficient- w/ ~20 rooms it will likely take ~1m. Get some coffee."
echo "(Or, make it faster- it actually shouldn't be that hard)"

./list.sh type room | while read line; do
  if [ "@`echo $line | grep ' '`" == @ ]; then continue; fi
  fqid=`echo $line | tr -d '[:cntrl:]' | sed -e 's@[^[]*\[[^[]*\[[^[]*\[[^[]*\[2m@@' -e 's@\[.*$@@'`
  file=`./filefrom.sh room $fqid`
  aid=`cat $file | grep '^tmp_room.animcycle_id = ' | sed -e 's/^[^"]*"//' -e 's/";.*$//'`
  afile=''
  ./list.sh type animcycle search $aid | while read aline; do
    if [ "@`echo $aline | grep ' '`" == @ ]; then continue; fi
    afqid=`echo $aline | tr -d '[:cntrl:]' | sed -e 's@[^[]*\[[^[]*\[[^[]*\[[^[]*\[2m@@' -e 's@\[.*$@@'`
    afile=`./folderfrom.sh animcycle $afqid`/0.*
    asize=`identify $afile | sed -e 's/[^ ]* [^ ]* //' -e 's/ .*$//'`
    echo "//$asize" >> $file
    w=`echo $asize | sed 's/x.*//'`
    h=`echo $asize | sed 's/[^x]*x//'`
    echo "tmp_room.ww = $w*670/$h;" >> $file
    echo "tmp_room.wh = 670;" >> $file
  done
done

