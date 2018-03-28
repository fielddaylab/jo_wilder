#!/bin/bash

folder=~/Desktop/convos
mkdir $folder

for i in `./fqid.sh person . | xargs`; do
  ./convo_to_csv.sh $i $folder/$i.csv
done

