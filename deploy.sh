#!/bin/sh
if [[ $(git status -s) ]]
then
    echo "Working directory is dirty. Please commit any pending changes."
    exit 1
fi

echo "Clean up public directory"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checkout master"
git worktree add -B master public origin/master

echo "Remove existing files"
rm -rf public/*

echo "Generate site"
hugo

echo "Update master"
cd public && git add --all && git commit -m "Deploy to master (deploy.sh)" && cd ..

echo "Deploy to master"
git push origin master
