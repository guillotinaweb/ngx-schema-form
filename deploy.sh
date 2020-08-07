#!/usr/bin/env bash

git config --global user.email "build@travis-ci.com";
git config --global user.name "Travis CI";
export PACKAGE_VERSION=$(npm run get_version | tail -n 1);
if ! [ $(git tag -l "$PACKAGE_VERSION") ]; then
    echo "TAGGING $PACKAGE_VERSION...";
    export TRAVIS_TAG=$PACKAGE_VERSION;
    git tag $PACKAGE_VERSION;
fi
