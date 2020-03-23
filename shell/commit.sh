#!/usr/bin/env sh
set -e
echo "This version: $VERSION"

# commit
git add -A
git cz
