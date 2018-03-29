#!/bin/bash

#NOTE- RUN with `. ./goto.sh type search

cd $(./folderfrom.sh $1 `./fqid.sh $1 $2`)

