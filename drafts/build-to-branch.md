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
