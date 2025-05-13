---
lang: ko-KR
title: Environment Setup
description: Linux - Debain > Environment Setup
icon: fas fa-toolbox
category:
  - Linux 
  - Debain
  - Environment Setup
tag: 
  - sh
  - bash
  - zsh
  - oh-my-zsh
  - ohmyzsh
  - apt-get
  - snapd
  - starship
  - ubuntu
  - debian
  - pacman
  - jdk 
  - jdk11
  - temurin
  - temurin11
  - docker
  - neofetch
head:
  - - meta:
    - property: og:title
      content: Linux - Debain > Environment Setup
    - property: og:description
      content: Environment Setup
    - property: og:url
      content: https://chanhi2000.github.io/devops/linux-debian/env-setup.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## `apt`

```sh
# cairo setup
sudo add-apt-repository ppa:cairo-dock-team/ppa;
# ulauncher setup
sudo add-apt-repository ppa:agornostal/ulauncher;
# temurin setup
wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | apt-key add -;
echo "deb https://packages.adoptium.net/artifactory/deb $(awk -F= '/^VERSION_CODENAME/{print$2}' /etc/os-release) main" | tee /etc/apt/sources.list.d/adoptium.list;

sudo apt-get install curl ffmpeg \ 
  git gpg gnome-terminal gnupg \
  neofetch nvm openssl rustc cargo \
  scrcpy starship scrcpysnapd tmux \
  watchman xz wget zsh;

sudo apt-get update;
sudo apt-get install apt-transport-https cairo-dock cairo-dock-plug-ins \
   redshift xmonad gauke ulauncher temurin-11-jdk;

# install using snapd
sudo snap install --classic code sublime-text sublime-merge;
sudo snap install dbeaver-ce docker notion-snap-reborn vlc;

# Add docker to user/user group
sudo addgroup --system docker;
sudo adduser $USER docker;
newgrp docker;
sudo snap disable docker;
sudo snap enable docker;

# install JetBrainsMono font
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/install_manual.sh)";

# install dash-to-dock
cd ~/; git clone https://github.com/micheleg/dash-to-dock.git;
make -C dash-to-dock install;
```

- [redshift](https://jonls.dk/redshift)
- [xmonad](https://xmonad.org)
- [dwm](https://dwm.suckless.org)
- [guake](https://github.com/Guake/guake)
- [Dash to Dock](https://micheleg.github.io/dash-to-dock/download.html)
- [Cairo-Dock](https://glx-dock.org)
- [i3](https://i3wm.org)
- [linuxJourney](https://linuxjourney.com)

---

## Gnome Extension(s)

- [place-status](https://extensions.gnome.org/extension/8/places-status-indicator/)
- [Application-menu](https://extensions.gnome.org/extension/6/applications-menu/)

---

<TagLinks />