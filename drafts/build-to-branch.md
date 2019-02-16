### Add the build folder

First, add the `build` directory to your `.gitignore` so it is ignored on the master branch:

```sh
echo "build" >> .gitignore
```

### Initialize the `build` branch

Now initialize an empty `build` branch using `--orphan` and clean up its history.

```sh
git checkout --orphan build
git reset --hard
git commit --allow-empty -m "Init build branch"
git push origin build
git checkout master
```

### Connect branch

Using git's worktree feature you can checkout multiple branches of the same repository in different directories:

```sh
rm -rf public
git worktree add -B build build origin/build
```

Deploy script:

```sh
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
```
