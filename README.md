# Simple Static Web Page (demo)

This repository contains a minimal, responsive static web page you can run locally and deploy to GitHub Pages.

**Files added:**
- `index.html`: main page
- `css/styles.css`: site styles
- `js/script.js`: small client-side behavior (menu toggle, form handling)

**Run locally**

Start a simple HTTP server from the repo root:

```bash
# from repository root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

**Deploy to GitHub (GitHub Pages)**

Option A — manual (UI):
- Create a new repository on GitHub and push this code (or create the repo and push):

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
# replace with your repo URL
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

- On GitHub, open the repository page → `Settings` → `Pages` → Under `Build and deployment` choose `Deploy from a branch` → `Branch: main` and `Folder: / (root)` → Save. The site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO` after a minute or two.

Option B — create + push with `gh` CLI (convenient):

```bash
# If you have GitHub CLI installed and are logged in:
gh repo create YOUR_USERNAME/YOUR_REPO --public --source=. --remote=origin --push
# Then enable Pages via the UI or via API if preferred.
```

Notes:
- If you want the site to be at `https://YOUR_USERNAME.github.io/` (no repo name), create a repository named `YOUR_USERNAME.github.io` and push to `main` — GitHub Pages will serve it at the root domain.
- For private repos you can still use Pages, but adjust repo visibility and Pages settings.

If you want, I can:
- run a local server for you here in the container, or
- create a `gh` command (fill in your username/repo) and push for you if you provide the remote URL or GitHub access.
# RakeshDemo
test
