#!/bin/bash

find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
echo 'Deleted all node_modules folders in this path.'

rm -f package.lock
rm -f yarn.lock
echo 'Deleted lock files.'
