---
lang: ko-KR
title: Setup
description: 🖥️macOS > Setup
  - sh
  - bash
  - zsh
  - homebrew
  - starship
---

# {{ $frontmatter.title }} 관련

[[toc]]

---
## Homebrew

### 🚀Install Homebrew

Coyp and Paste the following to the Terminal Prompt

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 🛠️Configure Homebrew(s)

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
## Apps from App Store

- [XCode](https://apps.apple.com/us/app/xcode/id497799835)
- [One Thing](https://apps.apple.com/us/app/one-thing/id1604176982)
- [Particulars](https://apps.apple.com/us/app/particulars/id885120167)
- [Hidden Bar](https://apps.apple.com/us/app/hidden-bar/id1452453066)
- [Copy Clip](https://apps.apple.com/us/app/copyclip-clipboard-history/id595191960)


---
## Zsh

### 🚀Install Zsh

Coyp and Paste the following to the Terminal Prompt

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 🛠️Configure Zsh
```sh

```

---
## Starship

### 🚀Install Starship

Coyp and Paste the following to the Terminal Prompt

```sh
curl -sS https://starship.rs/install.sh | sh
mkdir -p ~/.config && touch ~/.config/starship.toml
```

### 🛠️Configure Starship

```yaml
add_newline = true

[battery]
full_symbol = "🔋 "
charging_symbol = "⚡️ "
discharging_symbol = "💀 "

[[battery.display]] # "bold red" style and discharging_symbol when capacity is between 0% and 10%
threshold = 10
style = "bold red"

[[battery.display]] # "bold yellow" style and 💦 symbol when capacity is between 10% and 30%
threshold = 30
style = "bold yellow"
discharging_symbol = "💦"
```

---
## Dracula Theme

### 🚀Install Dracula Themes

Coyp and Paste the following to the Terminal Prompt

#### Terminal.app

```sh
git clone https://github.com/dracula/terminal-app.git
```
- _Terminal_ > _Settings_ Tab
- Click "_Gear_" icon
- Click _Import..._
- Select the `Dracula.terminal` file
- Click Default

#### zsh

```sh
git clone https://github.com/dracula/zsh.git
```

And creating a symbolic link to `oh-my-zsh`'s theme folder:

```sh
ln -s $DRACULA_THEME/dracula.zsh-theme $OH_MY_ZSH/themes/dracula.zsh-theme
```






