#!/bin/bash

echo "Generating documentation using jsdoc2md"
jsdoc2md --files src/*.js > src/README.md
jsdoc2md --files src/core/*.js > src/core/README.md
jsdoc2md --files src/events/*.js > src/events/README.md
jsdoc2md --files src/exts/*.js > src/exts/README.md
jsdoc2md --files src/utils/*.js > src/utils/README.md
