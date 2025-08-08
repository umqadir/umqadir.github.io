# Uzair Qadir — Minimal Personal Site (Jekyll on GitHub Pages)

This repository contains a ready-to-deploy minimalist personal site with a Web‑1.0-inspired, modern-typography design.

## How to use

1. Create a new GitHub repository named `uzairqadir.github.io` (or your own username).
2. Upload the files in this folder to the repository root.
3. In the repository settings, enable **GitHub Pages** (if needed). User sites publish automatically from the `main` branch.
4. Visit `https://<your-username>.github.io`.

### Adding a new post
- Add a Markdown file to `_posts/` named `YYYY-MM-DD-slug.md` with at least:

```yaml
---
layout: post
title: "Your Title"
date: YYYY-MM-DD
description: "Optional short blurb."
---
Your content in **Markdown**.
```

- If you want this post on the homepage, **also add a link** to `_data/links.yml` under the appropriate section.

### Adding or editing homepage sections
Edit `_data/links.yml`. Each item can be an internal post URL (e.g., `/posts/your-slug/`) or an external URL (e.g., `https://example.com`). Items display identically.

### Header links
In `_layouts/home.html`, update the three placeholder links in the `linkgrid` to your real GitHub, résumé, and Substack URLs.

### Theme
- The theme control is a 3‑state slider: **Auto / Light / Dark**.
- Default is **Auto** which follows `prefers-color-scheme`. If undetectable, the site renders in light with a neutral sepia paper tone.
- Your preference is saved in `localStorage`.

### Font
System-first serif stack: `ui-serif, Charter, Georgia, "Times New Roman", serif`. No webfonts are bundled.

## Notes
- No frameworks, minimal CSS/JS.
- Clean permalinks: `/posts/:title/`.
- Images in `assets/img/`.
