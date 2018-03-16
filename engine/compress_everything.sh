#!/bin/bash

cd ../assets/data/levels/tunic/animcycles
for i in *; do
  if [ -d $i ]; then
    for j in $i/*; do
      of=$j
      nf=`echo $j | sed -e 's@/@/new_@' -e 's/png/jpg/'`
      echo "$of -> $nf"
      convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% $of $nf
      if [ `du -k $of | cut -f1` -gt `du -k $nf | cut -f1` ]; then
        rm $of
        mv $nf `echo $of | sed 's/png/jpg/'`
      else
        rm $nf
      fi
    done;
  fi;
done

