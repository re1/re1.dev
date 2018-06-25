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

echo "Checkout gh-pages"
git worktree add -B gh-pages public origin/gh-pages

echo "Remove existing files"
rm -rf public/*

echo "Generate site"
hugo

echo "Update gh-pages"
cd public && git add --all && git commit -m "Deploy to gh-pages (deploy.sh)" && cd ..

echo "Deploy to gh-pages"
git push origin gh-pages
