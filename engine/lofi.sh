#!/bin/bash

cd ../assets/data/levels/tunic

for i in animcycles/*; do if [ -d $i ]; then echo $i; for j in $i/*; do echo $j; convert $j -resize %50 `echo $j | sed 's/animcycles/lofianimcycles/'`; done; fi; done;

