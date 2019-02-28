#!/bin/bash

echo "Generating documentation using jsdoc2md"
jsdoc2md --files ../src/* > README.md
jsdoc2md --files ../src/core/* > core/README.md
jsdoc2md --files ../src/events/* > events/README.md
jsdoc2md --files ../src/exts/* > exts/README.md
jsdoc2md --files ../src/utils/* > utils/README.md
