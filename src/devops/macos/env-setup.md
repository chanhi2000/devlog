---
lang: ko-KR
title: Environment Setup
description: macOS > Environment Setup
icon: fas fa-toolbox
category:
  - Apple
  - macOS
  - Environment Setup
tag: 
  - sh
  - bash
  - zsh
  - oh-my-zsh
  - ohmyzsh
  - homebrew
  - pacman
  - starship
  - dracula
  - dracula-theme
  - draculatheme
  - jdk
  - jdk11
  - temurin
  - temurin11
  - docker
  - containerd
  - fastfetch
head:
  - - meta:
    - property: og:title
      content: macOS > Environment Setup
    - property: og:description
      content: Environment Setup
    - property: og:url
      content: https://chanhi2000.github.io/devops/macos/env-setup.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. Homebrew

::: note Prerequesite(s)

`terminal`

:::

### A2. Guide

Copy and Paste the following to the Terminal Prompt

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### A3. Configure

Copy and Paste the following to the Terminal Prompt

```sh :collapsed-lines
# Install taps
brew tap homebrew/cask-versions;
brew tap homebrew/cask-fonts;
brew tap oven-sh/bun; # for macOS and Linux
brew tap mac-cleanup/mac-cleanup-py; # mac-cleanup-py

# Install formula
brew install autojump amazon-ecs-cli awscli bat bat-extras bun bison \
  cheat clipgrab cocoapods exiftool ffmpeg fizz flac git lazygit \
  hyperfine mas fastfetch nushell fnm openssl pixman lazydocker \
  python poetry rust scrcpy starship tmux tokei watchman \
  wget xz zsh zoxide mac-cleanup-py;
brew install koekeishiya/formulae/yabai;
brew install koekeishiya/formulae/skhd;


# KVM 활성화
# 
# 활성화: brew services start libvirt
# 실행: virt-manager -c "qemu:///session" --no-fork
brew install qemu libvirt virt-manager; 

# Install cask(s)
brew install --cask airflow alt-tab appcleaner battery chatgpt clipgrab cheatsheet  \ 
  dbeaver-community dockdoor rancher eul flameshot flipper font-jetbrains-mono-nerd-font \
  ghostty grandperspective intellij-idea-ce jordanbaird-ice \
  maccy notion opencore-patcher oversight pennywise pycharm-ce raycast \
  rectangle resilio-sync sf-symbols shottr sublime-merge sublime-text \
  the-unarchiver taskexplorer usr-sse2-rdm temurin11 transmission visual-studio-code \
  vlc warp webstorm wireshark;
  # aldente
```

---

## B. Apps from App Store

::: note Prerequesite(s)

- `App Store`
- `mas`

:::

### B2. Guide

Install the following(s)

<SiteInfo
  name="Xcode on the Mac App Store"
  desc="Developer Tools"
  url="https://apps.apple.com/us/app/xcode/id497799835"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/47/47/8c/47478c1e-50ec-ef6a-6807-96abb72045a0/Xcode-85-220-0-4-2x-sRGB.png/492x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/c2/6e/fb/c26efb5d-797d-0524-b674-61244898bb51/82b353b3-9ce0-4320-b3cd-9bda6c896a99_Xcode15-01-Preview-Macro.png/1286x0w.webp"/>

<SiteInfo
  name="One Thing on the Mac App Store"
  desc="Put one task in your menu bar"
  url="https://apps.apple.com/us/app/one-thing/id1604176982"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/df/e0/43/dfe043d3-ff4d-6edf-9912-f7859dc1db65/AppIcon-0-0-85-220-0-4-0-2x.png/492x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/f5/47/c8/f547c84e-4ea9-d757-a63f-0feae9e9f2fe/fec70b04-3937-4bea-91ef-ff6fabd0238c_screenshot1.png/1286x0w.webp"/>

<SiteInfo
  name="Particulars on the Mac App Store"
  desc="…"
  url="https://apps.apple.com/us/app/particulars/id885120167"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a2/4e/f3/a24ef382-4865-2fc7-0d26-62a67d781023/AppIcon-0-85-220-4-0-0-2x-0-0.png/492x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/92/8b/ab/928babea-3471-56af-f6b1-76b622879c59/1f58e09c-b08b-4709-8c75-15efe573e782_Screenshot_2023-09-15_at_8.35.13_PM.png/1286x0w.webp"/>

<SiteInfo
  name="Hidden Bar on the Mac App Store"
  desc="Hide menubar items"
  url="https://apps.apple.com/us/app/hidden-bar/id1452453066"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/01/1d/27/011d2738-c5ab-6827-3059-3d64dbcfb4cd/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/492x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/87/ef/ee/87efee47-0191-bf71-9710-0474d7671f03/pr_source.png/1286x0w.webp"/>

<SiteInfo
  name="CopyClip - Clipboard History on the Mac App Store"
  desc="Manage Your Clipboard"
  url="https://apps.apple.com/us/app/copyclip-clipboard-history/id595191960"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7e/69/a4/7e69a465-b76c-cb88-c980-f8ac5bd69904/APPL.png/492x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/87/ef/ee/87efee47-0191-bf71-9710-0474d7671f03/pr_source.png/1286x0w.webp"/>

<SiteInfo
  name="Cheetah - Virtual Machines on the Mac App Store"
  desc="A Lightweight VM Manager"
  url="https://apps.apple.com/us/app/cheetah-virtual-machines/id1612199418"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fe/5d/98/fe5d9890-f0d2-d1a9-651b-2c56dec82c34/AppIcon-85-220-4-0-0-2x-0-0.png/492x0w.webp "
  preview="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/20/d8/38/20d8380b-2f5c-fff1-264e-c7cfb4fd3137/6b30a779-3113-4d87-9946-b33754201fc7_Screenshot_2023-08-21_at_19.27.24.png/1286x0w.webp"/>

<SiteInfo
  name="RunCat on the Mac App Store"
  desc="Cat living in the menubar"
  url="https://apps.apple.com/us/app/runcat/id1429033973"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/90/93/41/90934174-69f0-7621-e810-01cdeb17d62e/AppIcon-0-0-85-220-0-0-4-0-2x-0-0-0.png/460x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/64/6a/f0/646af098-2d40-5833-d318-1d71d3ef0f72/28c44356-7287-4db3-b672-dc3c921674ca_1.png/1286x0w.webp"/>

<SiteInfo
  name="GIPHY Capture. The GIF Maker on the Mac App Store"
  desc="…"
  url="https://apps.apple.com/us/app/giphy-capture-the-gif-maker/id668208984"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/98/b7/63/98b76370-8dd8-e7ff-9832-87a404cc524c/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/460x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/b9/50/0f/b9500fe9-0107-a750-49be-caa47faf7a4a/pr_source.png/626x0w.webp"/>

<SiteInfo
  name="ScanTexter - AI translation on the App Store"
  desc="Text extraction & translation"
  url="https://apps.apple.com/us/app/scantexter-ai-translation/id1635954549"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5c/45/0b/5c450ba9-9f82-9e9d-8c30-a6ba950adf91/AppIcon-0-0-85-220-0-0-4-0-2x.png/492x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/63/d7/7e/63d77eba-8664-a173-6b45-33ee72128440/3db67eb9-a5de-4fa6-a90c-ae4754e8dbf8_previews1.png/1286x0w.webp"/>

<SiteInfo
  name="Dependencies "
  desc="Analyze, explore, and share"
  url="https://apps.apple.com/us/app/dependencies/id1538972026"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/33/76/25/337625f1-0606-e27c-bf0a-200dacdcd653/AppIcon-0-0-85-220-0-0-4-0-2x-sRGB.png/230x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/22/cf/1d/22cf1d7f-9297-4ee3-7f94-d1460a1bfcb6/e04c9b19-1505-4136-9646-c86c80f6667c_Dependencies_Mac_EN_3.png/313x0w.webp"/>

<SiteInfo
  name="MarkChart - Mermaid Preview"
  desc="Markdown diagrams"
  url="https://apps.apple.com/us/app/markchart-mermaid-preview/id6475648822"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/bf/52/9d/bf529dcc-fdf8-1e8e-9e47-ea18496d1510/AppIcon-0-0-85-220-0-4-0-2x-P3.png/217x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/8e/1e/85/8e1e8559-a164-fb75-ea13-0603a826fd03/0bf6f663-ef17-4000-964d-e605cfd45476_MarkChart_Mac_EN_1.png/217x0w.webp"/>

<SiteInfo
  name="DayMoney - Budget, Diary"
  desc="Manage money, Enjoy days"
  url="https://apps.apple.com/us/app/daymoney-budget-diary/id6443419421"
  logo="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/52/3a/49/523a495e-a6d7-b576-63b2-43176a7eeb05/AppIcon-0-0-85-220-0-0-4-0-2x-sRGB.png/460x0w.webp"
  preview="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b2/62/99/b262998c-0105-20f4-7eb7-569da5434768/84d7d4ee-38e2-49a5-9b39-1612311d592e__Ub370_Uc774_Uba38_Ub2c8_Mac__U00281_U0029.jpg/626x0w.webp"/>

### B3. Use `mas` to install

```sh
# 497799835: XCode
# 1604176982: One Thing
# 885120167: Particulars
# 1452453066: Hidden Bar
# 595191960: Copy Clip
# 1612199418: Cheetah - Virtual Machines
# 1429033973: RunCat
# 1635954549: ScanTexter - AI translation 
# 6443419421: DayMoney - Budget, Diary
# 6737156289: Testpiler - Convert XCTests to Testing.fwk
mas install 497799835 \
    1604176982 \
    885120167 \
    1452453066 \
    # 595191960 \
    1612199418 \
    1429033973 \
    1635954549 \
    6737156289 \
    # 6443419421
```

---

## C. Oh-My-Zsh

::: note Prerequesite(s)

- `terminal`
- `zsh`

:::

### C2. Guide

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

### C3. Configure

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

#### Starship

```yaml title=".config/starship.toml"
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

#### Yabai

```sh :collapsed-lines title=".config/yabai/yabairc"
# default layout (can be bsp, stack or float)
yabai -m config layout bsp

# New window spawns to the right if vertical split, or bottom if horizontal split
yabai -m config window_placement second_child

# padding set to 12px
yabai -m config top_padding 12
yabai -m config bottom_padding 12
yabai -m config left_padding 12
yabai -m config right_padding 12
yabai -m config window_gap 12

# center mouse on window with focus
yabai -m config mouse_follows_focus on

yabai -m config mouse_modifier alt
# set modifier + left-click drag to move window
yabai -m config mouse_action1 move
# set modifier + right-click drag to resize window
yabai -m config mouse_action2 resize

# when window is dropped in center of another window, swap them (on edges it will split it)
yabai -m mouse_drop_action swap

yabai -m rule --add app="^System Settings$" manage=off
yabai -m rule --add app="^Calculator$" manage=off
yabai -m rule --add app="^Karabiner-Elements$" manage=off
```

#### Skhd

```sh title=".config/skhd/skhdrc"
# change window focus within space
alt - j : yabai -m window --focus south
alt - k : yabai -m window --focus north
alt - h : yabai -m window --focus west
alt - l : yabai -m window --focus east

# change focus between external displays (left and right)
alt - s: yabai -m display --focus west
alt - g: yabai -m display --focus east

# rotate layout clockwise
shift + alt - r : yabai -m space --rotate 270

# flip along y-axis
shift + alt - y : yabai -m space --mirror y-axis

# flip along x-axis
shift + alt - x : yabai -m space --mirror x-axis

# toggle window float
shift + alt - t : yabai -m window --toggle float --grid 4:4:1:1:2:2

# maximize a window
shift + alt - m : yabai -m window --toggle zoom-fullscreen

# balance out tree of windows (resize to occupy same area)
shift + alt - e : yabai -m space --balance

# swap windows
shift + alt - j : yabai -m window --swap south
shift + alt - k : yabai -m window --swap north
shift + alt - h : yabai -m window --swap west
shift + alt - l : yabai -m window --swap east

# move window and split
ctrl + alt - j : yabai -m window --warp south
ctrl + alt - k : yabai -m window --warp north
ctrl + alt - h : yabai -m window --warp west
ctrl + alt - l : yabai -m window --warp east

# move window to display left and right
shift + alt - s : yabai -m window --display west; yabai -m display --focus west;
shift + alt - g : yabai -m window --display east; yabai -m display --focus east;

#move window to prev and next space
shift + alt - p : yabai -m window --space prev;
shift + alt - n : yabai -m window --space next;

# move window to space #
shift + alt - 1 : yabai -m window --space 1;
shift + alt - 2 : yabai -m window --space 2;
shift + alt - 3 : yabai -m window --space 3;
shift + alt - 4 : yabai -m window --space 4;
shift + alt - 5 : yabai -m window --space 5;
shift + alt - 6 : yabai -m window --space 6;
shift + alt - 7 : yabai -m window --space 7;

# stop/start/restart yabai
ctrl + alt - q : yabai --stop-service
ctrl + alt - s : yabai --start-service
ctrl + alt - r : yabai --restart-service
```

---

## E. Last Setup

### Configure

```sh :collapsed-lines
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
## Display Files' directory in the title bar
defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES;
killall Finder;

### Recent Files ###
## Google Chrome
defaults write com.google.keystone.agent checkinterval 0;

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

---

<TagLinks />