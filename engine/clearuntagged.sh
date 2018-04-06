#!/bin/bash

for i in `find ../assets/data -name '*.meta' | grep "/speaks/[^/]*\.meta" | xargs` `find ../assets/data -name '*.meta' | grep "/options/[^/]*\.meta" | xargs`; do
  if [ "@`grep "TAGGED" $i`" == "@" ]; then
    rm $i
    rm -rf `echo $i | sed 's/.meta//'`
  fi
done

