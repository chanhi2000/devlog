---
lang: ko-KR
title: 🧰Environment Setup
description: 🖥️macOS > 🧰Environment Setup
tags: ["sh", "bash", "zsh", "oh-my-zsh", "ohmyzsh", "homebrew", "pacman", "starship", "dracula", "dracula-theme", "draculatheme", "jdk", "jdk11", "temurin", "temurin11", "docker", "neofetch"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## A. Homebrew

### A1. Prerequesite(s)

- `terminal`

### A2. Guide

Copy and Paste the following to the Terminal Prompt

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### A3. Configure

Copy and Paste the following to the Terminal Prompt

```shell
# Install taps
brew tap homebrew/cask-versions;
brew tap homebrew/cask-fonts;

# Install formula
brew install bat bat-extras autojump amazon-ecs-cli awscli bison \
    cocoapods ffmpeg fizz flac git \
    mas neofetch nvm openssl pixman \
    python scrcpy starship tmux watchman \
    wget xz zsh;

# Install cask(s)
brew install --cask airflow alt-tab appcleaner cheatsheet  \
    dbeaver-community docker eul flipper font-jetbrains-mono \
    google-chrome grandperspective iina intellij-idea-ce notion \
    opencore-patcher oversight pennywise raycast resilio-sync \
    sf-symbols shottr spectacle sublime-merge sublime-text \
    the-unarchiver taskexplorer temurin11 transmission visual-studio-code \
    vlc wireshark;
```

---

## B. Apps from App Store

### B1. Prerequesite(s)

- `App Store`
- `mas`

### B2. Guide

Install the following(s)

- [XCode](https://apps.apple.com/us/app/xcode/id497799835)
- [One Thing](https://apps.apple.com/us/app/one-thing/id1604176982)
- [Particulars](https://apps.apple.com/us/app/particulars/id885120167)
- [Hidden Bar](https://apps.apple.com/us/app/hidden-bar/id1452453066)
- [Copy Clip](https://apps.apple.com/us/app/copyclip-clipboard-history/id595191960)
- [Cheetah - Virtual Machines](https://apps.apple.com/us/app/cheetah-vmm/id1612199418)

### B3. Use `mas` to install

```shell
# 497799835: XCode
# 1604176982: One Thing
# 885120167: Particulars
# 1452453066: Hidden Bar
# 595191960: Copy Clip
# 1612199418: Cheetah - Virtual Machines
mas install 497799835 \
    1604176982 \
    885120167 \
    1452453066 \
    595191960 \
    1612199418
```

---

## C. Oh-My-Zsh

### C1. Prerequesite(s)

- `terminal`
- `zsh`

### C2. Guide

Copy and Paste the following to the Terminal Prompt

```shell
# Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)";
## zsh-autosuggestion plugin
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions;
## zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting;

# Install Starship.sh
curl -sS https://starship.rs/install.sh | sh;
mkdir -p ~/.config && touch ~/.config/starship.toml;
```

### C3. Configure

#### C3-i. `~/.zshrc`

```shell
# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:/opt/homebrew/bin:/opt/hombrew/opt/nvm:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="agnoster"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
  git
  autojump
  zsh-autosuggestions
  zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# Configure NVM
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
export NODE_OPTIONS=--openssl-legacy-provider # 18이상일 경우

# My alias
#
# m3u8Get $1 $2 
# $1: m3u8 file to download from
# $2: output file name
alias m3u8Get='f(){ ffmpeg -protocol_whitelist https,tls,tcp -allowed_exte    nsions ALL -i $1 -bsf:a aac_adtstoasc -c copy $2; unset -f f; }; f'

# launch starship.sh
eval "$(starship init zsh)"

# launch neofetch
neofetch
```

#### C3-ii. `~/.config/starship.toml`

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

## E. Last Setup

### Configure

```shell
### Disable Animation ###
## Disable animations when opening and closing windows.
defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool false;
#defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool true;

## Disable animations when opening a Quick Look window.
defaults write -g QLPanelAnimationDuration -float 0;
#defaults delete -g QLPanelAnimationDuration

## Accelerated playback when adjusting the window size (Cocoa applications).
defaults write NSGlobalDomain NSWindowResizeTime -float 0.001;
#defaults write NSGlobalDomain NSWindowResizeTime -float 0.2;

## Disable animation when opening the Info window in Finder (cmd⌘ + i).
defaults write com.apple.finder DisableAllAnimations -bool true;
#defaults write com.apple.finder DisableAllAnimations -bool false;

## Disable animations when you open an application from the Dock.
defaults write com.apple.dock launchanim -bool false;
#defaults write com.apple.dock launchanim -bool true;

## Make all animations faster that are used by Mission Control.
defaults write com.apple.dock expose-animation-duration -float 0.1;

## Disable the delay when you hide the Dock
defaults write com.apple.Dock autohide-delay -float 0;

### Mail ###
## Disable the animation when you sending and replying an e-mail
defaults write com.apple.mail DisableReplyAnimations -bool true;
defaults write com.apple.mail DisableSendAnimations -bool true;

## Disable the standard delay in rendering a Web page.
defaults write com.apple.Safari WebKitInitialTimedLayoutDelay 0.25;


### Disable TimeMachine ###
sudo sysctl debug.lowpri_throttle_enabled=0;
# sudo sysctl debug.lowpri_throttle_enabled=1;


### Disable Spotlight search index ###
sudo mdutil -a -i off;

### Finder ###
## Show hidden files ALWAYS
defaults write com.apple.finder AppleShowAllFiles TRUE;
## Display Files’ directory in the title bar
defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES;
killall Finder;

### Recent Files ###
## VLC
defaults delete org.videolan.vlc.LSSharedFileList RecentDocuments;
defaults write org.videolan.vlc NSRecentDocumentsLimit 0;
defaults write org.videolan.vlc.LSSharedFileList RecentDocuments -dict-add MaxAmount 0;

## QuickTime
defaults delete com.apple.QuickTimePlayerX.LSSharedFileList RecentDocuments;
defaults write com.apple.QuickTimePlayerX NSRecentDocumentsLimit 0;
defaults write com.apple.QuickTimePlayerX.LSSharedFileList RecentDocuments -dict-add MaxAmount 0;
killall dock;

### Change Screenshot Location ###
defaults write com.apple.screencapture location ~/../Shared/Screenshots;
killall SystemUIServer;
```

<TagLinks />