#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION
read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo  # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."
  cp package.json _package.json
  npm --no-git-tag-version version $VERSION
  conventional-changelog -i CHANGELOG.md -s -p angular
  mv -f _package.json package.json
  git add CHANGELOG.md package.json
  git commit -m "docs(CHANGELOG): :pencil: changelog for v $VERSION"
  npm version $VERSION -m 'chore(release): %s'
  git push origin develop
fi
