#!/usr/bin/env bash

git config --global user.email "github@github.com";	
git config --global user.name "GitHub Actions";
export PACKAGE_VERSION=$(npm run get_version | tail -n 1);
echo "PACKAGE VERSION: $PACKAGE_VERSION"
echo "Search in existing… $(git tag -l "$PACKAGE_VERSION")"
if ! [ $(git tag -l "$PACKAGE_VERSION") ]; then
    echo "TAGGING $PACKAGE_VERSION...";
    git tag $PACKAGE_VERSION;
    git push --tags;
fi