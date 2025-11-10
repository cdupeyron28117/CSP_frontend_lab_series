# 1.0.1 – Git Intro (Source Control)
**Mode:** VS Code Source Control (UI)  
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


### 📝 Tasks (VS Code Source Control Tab)
1) **Initialize Git**  
   - Open this folder in VS Code → Source Control tab → “**Initialize Repository**”  
   - Confirm a hidden `.git` folder now exists.

2) **First Change & Commit**  
   - Open `project/index.html` → change `<h1>` to include your name (e.g., “Hello, Git — Ana!”).  
   - Go to **Source Control** → stage the change (plus icon) → commit with message: `feat: personalize heading`.

3) **Multiple Files Commit**  
   - Edit `project/style.css` → add a new rule: `p { line-height: 1.6; }`  
   - Create a new file `project/notes.txt` with 2 lines describing Git.  
   - Stage **both** files → commit with message: `style: improve text legibility`.

4) **Amend a Commit (UI)**  
   - Modify `project/notes.txt` by adding a third line.  
   - Use the **Commit** dropdown → **Amend** last commit (no new message).

5) **Create and Switch Branch (UI)**  
   - Switch branch menu (bottom-left) → **Create new branch** named `feature/readme`.  
   - Add `README.md` at the project root with 2–3 lines.  
   - Stage & commit: `docs: add minimal readme`.

6) **Merge Branch (UI)**  
   - Switch back to `main` → **Merge Branch** → select `feature/readme`.  
   - Resolve any conflict if prompted (unlikely). Commit merge.

7) **Connect to Remote (UI)**  
   - Use the **Publish Branch** button to create a new private repo on GitHub under your account.  
   - After publishing, make one more change to `project/index.html`, stage/commit, then use **Sync Changes**.

### 🎟 Exit Ticket
- In 2–3 sentences: What’s the difference between **staging** and **committing**?


### ✅ Submission Checklist
- [ ] At least **3 commits** with meaningful messages.
- [ ] A merged branch named `feature/readme`.
- [ ] A published remote on GitHub with your latest changes.
- [ ] Screenshot of **git log --oneline** (CLI) or **Commits** view (UI).

