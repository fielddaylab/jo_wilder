#!/bin/bash

./list.sh $@ | sed 's@ \[.*@@g'

