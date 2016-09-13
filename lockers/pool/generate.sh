#!/bin/bash

CDIR=${PWD}

read SITE
SITE_E=$(echo $SITE | sed -e 's/[\/&]/\\&/g')
echo $SITE_E

cat htaccess.templ | sed "s/WEBSITE/$SITE_E/g" \
    | sed "s/DIR/$CDIR/g" \
          > .htaccess
