```sh
git remote add wiki git@github.com:username/repository.wiki.git
git fetch wiki

git subtree wiki wiki/master
# or
git checkout -b wiki wiki/master
```
