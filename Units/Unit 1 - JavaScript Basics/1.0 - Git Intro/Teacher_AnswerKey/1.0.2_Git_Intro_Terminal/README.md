# 1.0.2 – Git Intro (Terminal) — Teacher Notes

## Expected Commands (minimal path)
```bash
git init
git add project/index.html
git commit -m "feat: personalize heading"
git add .
git commit -m "style: improve text legibility"
git add project/notes.txt
git commit --amend --no-edit
git branch -M main
git branch feature/readme
git switch feature/readme
git add README.md
git commit -m "docs: add minimal readme"
git switch main
git merge feature/readme
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```
(Allow `git checkout -b` instead of `git switch`.)

## Quick Rubric (10 pts)
- (2) Initialized repo, .git present
- (3) Three meaningful commits (includes amend)
- (2) Branch + merge completed
- (2) Remote connected + 1 push
- (1) Exit ticket response completeness

## Notes
- If rebase conflicts occur during `git pull --rebase`, guide students to run:
```bash
git rebase --abort
git pull --no-rebase
```
