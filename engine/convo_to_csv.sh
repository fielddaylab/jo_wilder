#!/bin/bash

outf="../../convo.csv"
echo $1 > $outf
speaks_folder=`./filefrom.sh person $1 | sed 's@.meta@/speaks@'`

for i in $speaks_folder/*.meta; do
  speak_name=`echo $i | sed -e 's@.*/@@' -e 's/.meta//'`
  echo -n "\"$speak_name\",\""                                                   >> $outf
  cat $i | grep raw_atext | sed -e 's/^[^"]*"//' -e 's/"[^"]*$//' | tr -d '\n'   >> $outf
  echo "\""                                                                      >> $outf
  options_folder=$speaks_folder/$speak_name/options
  for j in $options_folder/*.meta; do
    option_name=`echo $j | sed -e 's@.*/@@' -e 's/.meta//'`
    echo -n "\"$speak_name.$option_name\",\""                                    >> $outf
    cat $j | grep raw_qtext | sed -e 's/^[^"]*"//' -e 's/"[^"]*$//' | tr -d '\n' >> $outf
    echo -n "\",\""                                                              >> $outf
    cat $j | grep target | sed -e 's/^[^"]*"//' -e 's/"[^"]*$//' | tr -d '\n'    >> $outf
    echo  "\""                                                                   >> $outf
  done
done

