#!/bin/bash
for branch in `git branch -a | grep remotes | grep -v HEAD | grep -v master`; do
    git branch --track ${branch##*/} $branch
done

#http://stevelorek.com/how-to-shrink-a-git-repository.html