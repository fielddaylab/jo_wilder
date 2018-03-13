#!/bin/bash

./list.sh type $1 search $2 | while read line; do
  if [ "@`echo $line | grep ' '`" == @ ]; then continue; fi
  fqid=`echo $line | tr -d '[:cntrl:]' | sed -e 's@[^[]*\[[^[]*\[[^[]*\[[^[]*\[2m@@' -e 's@\[.*$@@'`
  echo $fqid
done

