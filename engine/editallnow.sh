#!/bin/bash

vim `find ../assets/data -name '*.meta' | grep "/$1/[^/]*\.meta" | xargs`

