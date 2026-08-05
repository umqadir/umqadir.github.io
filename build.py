#!/usr/bin/env python3
"""Render content.md into index.html via template.html.

content.md is the single source of truth for both this site and the
profile README at github.com/umqadir/umqadir (synced by a workflow there).
"""
from pathlib import Path

import markdown

here = Path(__file__).parent
content = markdown.markdown((here / "content.md").read_text())
html = (here / "template.html").read_text().replace("{{ content }}", content)
(here / "index.html").write_text(html)
print(f"wrote index.html ({len(html)} bytes)")
