---
title: "Common Git Commands"
date: "2024-12-19"
tags: ["git", "commands", "development"]
---

## 🔹 Creating & Switching Branches

**Create a new branch and switch to it:**

```bash
git checkout -b feature/new-feature
```

**Switch to an existing branch:**

```bash
git checkout main
```

**Create a new branch from current branch:**

```bash
git branch feature/new-feature
git checkout feature/new-feature
```

## 🔹 Staging & Committing

**Add all files to staging:**

```bash
git add .
```

**Add specific files:**

```bash
git add filename.txt
```

**Commit with message:**

```bash
git commit -m "Add new feature"
```

**Add and commit in one command:**

```bash
git commit -am "Quick commit"
```

## 🔹 Pushing & Pulling

**Push to remote repository:**

```bash
git push origin main
```

**Push new branch to remote:**

```bash
git push -u origin feature/new-feature
```

**Pull latest changes:**

```bash
git pull origin main
```

**Fetch remote changes:**

```bash
git fetch origin
```

## 🔹 Branch Management

**List all branches:**

```bash
git branch
```

**List all branches (including remote):**

```bash
git branch -a
```

**Delete local branch:**

```bash
git branch -d feature/old-feature
```

**Delete remote branch:**

```bash
git push origin --delete feature/old-feature
```

## 🔹 Status & History

**Check repository status:**

```bash
git status
```

**View commit history:**

```bash
git log
```

**View commit history (one line):**

```bash
git log --oneline
```

**View changes in last commit:**

```bash
git show
```

## 🔹 Merging & Rebasing

**Merge branch into current:**

```bash
git merge feature/new-feature
```

**Rebase current branch:**

```bash
git rebase main
```

**Abort rebase:**

```bash
git rebase --abort
```

## 🔹 Stashing

**Stash current changes:**

```bash
git stash
```

**Stash with message:**

```bash
git stash push -m "Work in progress"
```

**List stashes:**

```bash
git stash list
```

**Apply last stash:**

```bash
git stash pop
```

## 🔹 Useful Aliases

**Quick status:**

```bash
git st
```

**Quick commit:**

```bash
git ci
```

**Quick checkout:**

```bash
git co
```

**Quick branch:**

```bash
git br
```
