---
lang: ko-KR
title: Environment Setup
description: Linux - Fedora > Environment Setup
icon: fas fa-toolbox
category:
  - Linux 
  - Fedora
  - Environment Setup
tag:
  - linux
  - redhat
  - centos
  - yum
  - sh
  - bash
  - zsh
  - oh-my-zsh
  - ohmyzsh
  - apt-get
  - starship
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
      content: Linux - Fedora > Environment Setup
    - property: og:description
      content: Environment Setup
    - property: og:url
      content: https://chanhi2000.github.io/devops/linux-fedora/env-setup.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. Install Package(s)

Copy and Paste the following to the Terminal Prompt

```sh :collapsed-lines
# enable
dnf copr enable gvalkov/vicinae

# install
dnf install vicinae

```

## C. Oh-My-Zsh

::: note Prerequesite(s)

- `terminal`
- `zsh`

:::

### C1. Guide

Copy and Paste the following to the Terminal Prompt

```sh
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

### C2. Configure

#### ZSH

```sh :collapsed-lines title=".zshrc"
# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:$HOME/.rd/bin:$HOME/.local/bin:/usr/local/bin:/opt/homebrew/bin:/opt/hombrew/opt/nvm:/opt/homebrew/opt/openvpn/sbin:$PATH
# for Rancher Desktop
export DOCKER_HOST=unix:///var/run/docker.sock
# for Ghostty
export GHOSTTY_CONFIG="$HOME/Library/Application\ Support/com.mitchellh.ghostty/config"

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
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting…%f"
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
  poetry
  zsh-autosuggestions
  zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

# User configuration
# export MANPATH="/usr/local/man:$MANPATH"
# You may need to manually set your language environment
export LANG=en_US.UTF-8

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
alias zshconf="vi ~/.zshrc"
alias zshset=source ~/.zshrc
# alias ohmyzsh="mate ~/.oh-my-zsh"

# Configure NVM
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
export NODE_OPTIONS=--openssl-legacy-provider --max_old_space_size=16384
# 18이상일 경우

# My alias
#
# m3u8Get $1 $2 
# $1: m3u8 file to download from
# $2: output file name
alias m3u8Get='f(){ ffmpeg -protocol_whitelist https,tls,tcp -allowed_extensions ALL -i $1 -bsf:a aac_adtstoasc -c copy $2; unset -f f; }; f'
alias startKVM='brew services start libvirt'
alias stopKVM='brew services stop libvirt'
alias ghostty-config="vi $GHOSTTY_CONFIG"

lg() {
  export LAZYGIT_NEW_DIR_FILE=~/.lazygit/newdir

  lazygit "$@"

  if [ -f $LAZYGIT_NEW_DIR_FILE ]; then
    cd "$(cat $LAZYGIT_NEW_DIR_FILE)"
    rm -f $LAZYGIT_NEW_DIR_FILE > /dev/null
  fi
}
ld() {
  ld "$@"
}
# Configure Dev
export PATH_DEV=$HOME/../Shared/development
alias cdd='cd $PATH_DEV'
alias cddi='cd $PATH_DEV/ititcloud'
alias cddc='cd $PATH_DEV/chanhi2000'

# launch starship.sh
eval "$(starship init zsh)"

# launch fastfetch
fastfetch

### RANCHER DESKTOP
export PATH="$PATH:/Users/chlee/.rd/bin"
### pipx
export PATH="$PATH:/Users/chlee/.local/bin"
```

---

<TagLinks />