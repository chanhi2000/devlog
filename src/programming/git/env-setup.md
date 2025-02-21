---
lang: ko-KR
title: Environment Setup
description: Git > Environment Setup
icon: fas fa-toolbox
category:
  - Git
  - Environment Setup
tag: 
  - git
  - git-cli
  - bash
  - terminal
  - windows-terminal
head:
  - - meta:
    - property: og:title
      content: Git > Environment Setup
    - property: og:description
      content: Environment Setup
    - property: og:url
      content: https://chanhi2000.github.io/programming/git/env-setup.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

## `.gitconfig`

```toml :collapsed-lines title="~/.gitconfig"
[user]
  name = chanhi2000
  email = chanhi2000@gmail.com
[filter "lfs"]
  process = git-lfs filter-process
  required = true
  clean = git-lfs clean -- %f
  smudge = git-lfs smudge -- %f
# INCLUDES
# --------
# Local/Private config goes in the include
[include]
  path = ~/.gitconfig.local
# URL ALIASES
# -----------
# Alias for Dracula Org repositories
[url "https://github.com/dracula/"]
  insteadOf = dracula://
# COLORS
# ------
# Dracula Dark Theme
[color]
  ui = auto
[color "branch"]
  current = cyan bold reverse
  local = white
  plain =
  remote = cyan
[color "diff"]
  commit =
  func = cyan
  plain =
  whitespace = magenta reverse
  meta = white
  frag = cyan bold reverse
  old = red
  new = green
[color "grep"]
  context =
  filename =
  function =
  linenumber = white
  match =
  selected =
  separator =
[color "interactive"]
  error =
  header =
  help =
  prompt =
[color "status"]
  added = green
  changed = white
  header =
  localBranch =
  nobranch =
  remoteBranch = cyan bold
  unmerged = magenta bold reverse
  untracked = red
  updated = green bold
```

---

<TagLinks />