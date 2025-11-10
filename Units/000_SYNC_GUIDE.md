# 🔄 How to Sync Your Fork with the Teacher Repo

When Mr. Larrubia updates the main repo with fixes or new labs, your fork doesn’t update automatically.  
Follow these steps to **pull the latest updates** into your fork — without losing your work.

---

## 🧰 One-Time Setup (do this once)

1. Open your project folder in **VS Code**.  
2. Open the **Terminal** (View → Terminal).  
3. Check your current remotes:
   ```bash
   git remote -v
   ```
   You’ll see something like:
   ```
   origin  https://github.com/yourusername/CSP_STUDENT.git (fetch)
   origin  https://github.com/yourusername/CSP_STUDENT.git (push)
   ```
4. Add the teacher’s repo as **upstream** (only once):
   ```bash
   git remote add upstream https://github.com/columbushs-labs/CSP_frontend_lab_series
   ```

✅ Now Git knows:
- `origin` → your fork (where you push your work)  
- `upstream` → the teacher’s repo (where you pull new updates)

---

## 🔄 Sync Steps (do this anytime teacher updates)

1. Make sure you’re on your `main` branch:
   ```bash
   git checkout main
   ```

2. Get the latest updates from the teacher repo:
   ```bash
   git fetch upstream
   ```

3. Merge those updates into your own main branch:
   ```bash
   git merge upstream/main
   ```

4. Push the merged updates to your fork on GitHub:
   ```bash
   git push origin main
   ```

🎉 You’re now completely up-to-date with the latest labs and fixes!

---

## ⚠️ If You See a Merge Conflict

If GitHub or VS Code shows a message like:
```
Automatic merge failed; fix conflicts and then commit.
```

Do this:
1. Open the file that shows conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).  
2. Keep the correct lines (usually the teacher’s version) and delete the rest.  
3. Save the file, then run:
   ```bash
   git add .
   git commit -m "Resolved merge conflict with upstream"
   git push origin main
   ```

---

## 💡 Optional: One-Click Sync Script

You can create a simple script to make syncing faster.  
Create a file called `sync_upstream.sh` and paste:
```bash
#!/bin/bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

Then run:
```bash
bash sync_upstream.sh
```

✅ That’s it — you’re synced!

---

## 🧠 Quick Summary

| Step | Command | Purpose |
|------|----------|----------|
| 1️⃣ | `git remote add upstream <teacher_repo>` | Connect to teacher repo (one time) |
| 2️⃣ | `git fetch upstream` | Grab latest commits |
| 3️⃣ | `git merge upstream/main` | Merge teacher updates |
| 4️⃣ | `git push origin main` | Update your GitHub fork |

---

**Need Help?**  
If something looks weird after merging, ask before pushing — it’s always easier to fix locally first.
