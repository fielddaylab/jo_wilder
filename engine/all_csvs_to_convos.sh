#!/bin/bash

folder=~/Desktop/convos

for i in $folder/*; do
  ./csv_to_convo.sh $i
done

