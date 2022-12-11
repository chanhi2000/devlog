---
lang: ko-KR
title: 🖥️macOS > Environment Setup
description: 🖥️macOS > Environment Setup
  - sh
  - bash
  - zsh
  - oh-my-zsh
  - ohmyzsh
  - homebrew
  - starship
---

# {{ $frontmatter.title }} 관련

[[toc]]

---
## A. Homebrew

### A1. 🧰Prerequesite(s)
- `terminal`

### A2. 👨‍🏫Guide
Copy and Paste the following to the Terminal Prompt

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
### A3. 🛠️Configure

Copy and Paste the following to the Terminal Prompt

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
## B. Apps from App Store

### B1. 🧰Prerequesite(s)
- `App Store`

### B2. 👨‍🏫Guide
Install the following(s)

- [XCode](https://apps.apple.com/us/app/xcode/id497799835)
- [One Thing](https://apps.apple.com/us/app/one-thing/id1604176982)
- [Particulars](https://apps.apple.com/us/app/particulars/id885120167)
- [Hidden Bar](https://apps.apple.com/us/app/hidden-bar/id1452453066)
- [Copy Clip](https://apps.apple.com/us/app/copyclip-clipboard-history/id595191960)


---
## C. Oh-My-Zsh

### C1. 🧰Prerequesite(s)
- `terminal`
- `zsh`

### C2. 👨‍🏫Guide
Copy and Paste the following to the Terminal Prompt

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### C3. 🛠️Configure
```sh

```

---
## D. Starship


### D1. 🧰Prerequesite(s)
- `terminal`

### D2. 👨‍🏫Guide
Copy and Paste the following to the Terminal Prompt

```sh
curl -sS https://starship.rs/install.sh | sh
mkdir -p ~/.config && touch ~/.config/starship.toml
```

### D3. 🛠️Configure

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

### Terminal.app

<a href="https://draculatheme.com/terminal">
  <img width="30%" height="auto" alt="dracula-terminal-app" src="https://draculatheme.com/static/icons/used/pack-1/035-cauldron.svg" />
</a>

Copy and Paste the following to the Terminal Prompt
```sh
git clone https://github.com/dracula/terminal-app.git
```
- _Terminal_ > _Settings_ Tab
- Click "_Gear_" icon
- Click _Import..._
- Select the `Dracula.terminal` file
- Click Default

### zsh

<a href="https://draculatheme.com/zsh">
  <img width="30%" height="auto" alt="dracula-zsh" src="https://draculatheme.com/static/icons/used/pack-1/034-eye.svg" />
</a>

Copy and Paste the following to the Terminal Prompt
```sh
git clone https://github.com/dracula/zsh.git
```

And creating a symbolic link to `oh-my-zsh`'s theme folder:

```sh
ln -s $DRACULA_THEME/dracula.zsh-theme $OH_MY_ZSH/themes/dracula.zsh-theme
```

### Visual Studio Code

<a href="https://draculatheme.com/visual-studio-code">
  <img width="30%" height="auto" alt="dracula-visual-studio-code" src="https://draculatheme.com/static/icons/used/pack-1/048-frankenstein.svg" />
</a>

1. Go to _View_ -> _Command Palette_ or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
2. Then enter `Install Extension`
3. Write `Dracula Official`
4. Select it or press <kbd>Enter</kbd> to install

### Sublime Text

<a href="https://draculatheme.com/sublime">
  <img width="30%" height="auto" alt="dracula-sublime" src="https://draculatheme.com/static/icons/used/pack-1/044-spider-web.svg" />
</a>

If you are using `Package Control`, you can easily install Dracula Theme via the `Package Control: Install Package` menu item. The Dracula Theme package is listed as `Dracula Color Scheme` in the packages list.

### Jetbrains

<a href="https://draculatheme.com/jetbrains">
  <img width="30%" height="auto" alt="dracula-jetbrains" src="https://draculatheme.com/static/icons/used/pack-1/046-zombie.svg" />
</a>

#### Setup

| No. | Step | Image |
| :---: | :---- | :---: |
| 1 | Go to `Plugin Marketplace`, and search `Dracula`, click `Install`. | ![jetbrains-01][jetbrains-01] | 
| 2 | Go to `Preferences` > `Appearance & Behavior` > `Appearance`, select `Dracula` from the dropdown menu. | ![jetbrains-02][jetbrains-02] |
| 3 | Go to `Preferences` > `Editor` > `Color Scheme`, select `Dracula` from the dropdown menu. | ![jetbrains-03][jetbrains-03]


[jetbrains-01]: https://raw.githubusercontent.com/dracula/jetbrains/master/docs/screenshots/dracula-plugin-install.png
[jetbrains-02]: https://raw.githubusercontent.com/dracula/jetbrains/master/docs/screenshots/dracula-setup-appearance.png
[jetbrains-03]: https://raw.githubusercontent.com/dracula/jetbrains/master/docs/screenshots/dracula-setup-scheme.png