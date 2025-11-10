# 1.0.2 – Git Intro (Terminal)
**Mode:** Terminal (CLI)  
**Estimated Time:** 35–45 minutes

### 🎯 Learning Goals
- I can initialize a Git repository and make commits.
- I can stage changes and write meaningful commit messages.
- I can create/switch branches and merge safely.
- I can connect a local repo to GitHub and sync.

### 📖 Pre-Lab
- Open this folder in VS Code.
- Sign in to GitHub in VS Code (UI) or be ready with your GitHub account (CLI).

### 🧰 Setup
- Work inside the `project/` folder provided.
- Do **not** delete the `.gitignore` file.


### 📝 Tasks (Integrated Terminal)
> Open the terminal in VS Code (View → Terminal).

1) **Initialize Git**
```bash
git init
git status
```
Confirm `.git/` was created.

2) **First Change & Commit**
- Edit `project/index.html` → change `<h1>` to include your name.  
```bash
git add project/index.html
git commit -m "feat: personalize heading"
git log --oneline
```

3) **Multiple Files Commit**
- Edit `project/style.css` and create `project/notes.txt` (2 lines about Git).
```bash
git add .
git commit -m "style: improve text legibility"
```

4) **Amend Last Commit**
- Append a third line to `project/notes.txt`  
```bash
git add project/notes.txt
git commit --amend --no-edit
```

5) **Branching**
```bash
git branch feature/readme
git switch feature/readme   # or: git checkout -b feature/readme
echo "Mini readme" > README.md
git add README.md
git commit -m "docs: add minimal readme"
```

6) **Merge to main**
```bash
git switch main
git merge feature/readme
```

7) **Connect Remote + Push**
- Create a new empty repo on GitHub (no README). Then:
```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```
Make a small change, commit, then:
```bash
git pull --rebase
git push
```

### 🎟 Exit Ticket
- Explain: What’s the difference between **git add** and **git commit**?


### ✅ Submission Checklist
- [ ] At least **3 commits** with meaningful messages.
- [ ] A merged branch named `feature/readme`.
- [ ] A published remote on GitHub with your latest changes.
- [ ] Screenshot of **git log --oneline** (CLI) or **Commits** view (UI).

