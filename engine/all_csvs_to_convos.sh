#!/bin/bash

folder=~/Desktop/convos

for i in $folder/*; do
  ./dcsv_to_convo.sh $i
done

