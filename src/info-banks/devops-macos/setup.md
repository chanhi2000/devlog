---
lang: ko-KR
title: Setup
description: 🖥️macOS > Setup
  - sh
  - bash
  - zsh
  - homebrew
---

# {{ $frontmatter.title }} 관련

[[toc]]

---
## Homebrew

### 🛠️Installation

Paste that in a macOS Terminal or Linux shell prompt.

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---
### 📝Script

```sh
# Install formulae
brew install amazon-ecs-cli awscli bison \
    cocoapods ffmpeg fizz flac git \
    neofetch nvm openssl pixman python \
    scrcpy starship tmux watchman wget \
    xz zsh

# Install cask(s)
brew install --cask airflow appcleaner cheatsheet \
    dbeaver-community docker eul flipper font-jetbrains-mono \
    google-chrome grandperspective iina intellij-idea-ce notion \
    opencore-patcher oversight pennywise raycast resilio-sync \
    sf-symbols shottr spectacle sublime-merge sublime-text \
    taskexplorer temurin11 transmission visual-studio-code vlc
```

---
## Zsh

### 🛠️Installation

Paste that in a macOS Terminal or Linux shell prompt.

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Configure





