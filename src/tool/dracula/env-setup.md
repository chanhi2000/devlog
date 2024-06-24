---
lang: ko-KR
title: Environment Setup
description: Dracula > Environment Setup
icon: fas fa-toolbox
category:
  - Dracula
  - Environment Setup
tag: 
  - sh
  - bash
  - zsh
  - dracula
  - dracula-theme
  - draculatheme
  - terminal
  - windows-terminal
  - zsh
  - vscode
  - visual-studio-code
  - sublime-text
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Terminal.app

<SiteInfo
  name="Termainal.app"
  desc="..."
  url="https://github.com/dracula/terminal-app/blob/bd0239288d43dc480b7047ce778e9e043ec8df7f/INSTALL.md"
  logo="https://draculatheme.com/icons/used/pack-1/035-cauldron.svg"
  preview="https://github.com/dracula/terminal-app/raw/bd0239288d43dc480b7047ce778e9e043ec8df7f/screenshot.png"/>

Copy and Paste the following to the Terminal Prompt

```sh
git clone https://github.com/dracula/terminal-app.git
```

- <FontIcon icon="iconfont icon-select"/>`[Terminal]` > `[Settings]` Tab
- Click <FontIcon icon="fas fa-gear"/> icon
- Click <FontIcon icon="iconfont icon-select"/>`[Import...]`
- Select the `Dracula.terminal` file
- Click Default

---

## zsh

<SiteInfo
  name="zsh"
  desc="..."
  url="https://github.com/dracula/zsh/blob/615c5352d265409a0b95ee21f1171506847b52fb/INSTALL.md"
  logo="https://draculatheme.com/icons/used/pack-1/034-eye.svg"
  preview="https://github.com/dracula/zsh/raw/615c5352d265409a0b95ee21f1171506847b52fb/screenshot.png"/>

```sh
# Copy and Paste the following to the Terminal Prompt
git clone https://github.com/dracula/zsh.git
# And creating a symbolic link to `oh-my-zsh`'s theme folder:
ln -s $DRACULA_THEME/dracula.zsh-theme $OH_MY_ZSH/themes/dracula.zsh-theme
```

---

## Oh My Posh

<SiteInfo
  name="Oh My Posh"
  desc="..."
  url="https://github.com/dracula/oh-my-posh/blob/18a355a996ac5f84a00bac9d38ba4b31fc4fb70c/INSTALL.md"
  logo="https://draculatheme.com/icons/used/pack-7/046-zombie.svg"
  preview="https://github.com/dracula/oh-my-posh/raw/18a355a996ac5f84a00bac9d38ba4b31fc4fb70c/screenshot.png"/>

### Installation

To install [Oh My Posh](https://ohmyposh.dev) on MacOS/Windows/Linux follow documentation [<FontIcon icon="fas fa-globe"/>here](https://ohmyposh.dev/docs/installation/windows).

### Activating Theme

For instructions on activating this theme in `powershell`, `cmd`, `xsh`, `bash`, `fish` and `nu` please refer to the documentation [<FontIcon icon="fas fa-globe"/>here](https://ohmyposh.dev/docs/installation/customize).

### Fonts

Nerd Fonts are required for the Dracula theme. To display all icons, the use of [Nerd Fonts](https://www.nerdfonts.com) is recommended. More information on fonts can be found [here](https://ohmyposh.dev/docs/installation/fonts).

---


## <FontIcon icon="iconfont icon-vscode"/>Visual Studio Code

<SiteInfo
  name="Visual Studio Code"
  desc="..."
  url="https://github.com/dracula/visual-studio-code/blob/764c3b59aaff75c43399adb9814e143edb494be4/INSTALL.md"
  logo="https://draculatheme.com/icons/used/pack-1/048-frankenstein.svg"
  preview="https://raw.githubusercontent.com/dracula/visual-studio-code/master/screenshot.png"/>


1. Go to _View_ -> _Command Palette_ or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
2. Then enter `Install Extension`
3. Write `Dracula Official`
4. Select it or press <kbd>Enter</kbd> to install

---

## <FontIcon icon="iconfont icon-subl"/>Sublime Text

<SiteInfo
  name="Sublime Text"
  desc="..."
  url="https://github.com/dracula/sublime/blob/09faa29057c3c39e9a45f3a51a5e262375e3bf9f/INSTALL.md"
  logo="https://draculatheme.com/icons/used/pack-1/044-spider-web.svg"
  preview="https://github.com/dracula/sublime/raw/09faa29057c3c39e9a45f3a51a5e262375e3bf9f/screenshot.png"/>

If you are using `Package Control`, you can easily install Dracula Theme via the `Package Control: Install Package` menu item. The Dracula Theme package is listed as `Dracula Color Scheme` in the packages list.

---

## <FontIcon icon="iconfont icon-jetbrains"/>Jetbrains

<SiteInfo
  name="Jetbrains"
  desc="..."
  url="https://github.com/dracula/jetbrains/blob/1cb9e0896c1f5d7bd796a2896f1c533048ebdbc3/INSTALL.md"
  logo="https://draculatheme.com/icons/used/pack-1/046-zombie.svg"
  preview="https://draculatheme.com/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdracula%2Fjetbrains%2Fmaster%2Fscreenshot.png&w=1920&q=100"/>


![Go to `Plugin Marketplace`, and search `Dracula`, click <FontIcon icon="iconfont icon-select"/>`[Install]`.](https://raw.githubusercontent.com/dracula/jetbrains/master/docs/screenshots/dracula-plugin-install.png)

![Go to `Preferences` > `Appearance & Behavior` > `Appearance`, select <FontIcon icon="iconfont icon-select"/>`[Dracula]` from the dropdown menu.](https://raw.githubusercontent.com/dracula/jetbrains/master/docs/screenshots/dracula-setup-appearance.png)

![Go to <FontIcon icon="iconfont icon-select"/>`[Preferences]` > `[Editor]` > `[Color Scheme]`, select <FontIcon icon="iconfont icon-select"/>`[Dracula]` from the dropdown menu.](https://raw.githubusercontent.com/dracula/jetbrains/master/docs/screenshots/dracula-setup-scheme.png)


---

## vim

::: info vim

[![Vim](https://draculatheme.com/icons/used/pack-1/040-zombie-1.svg =x150)](https://draculatheme.com/vim)

:::

---

## XCode

::: info XCode

[![XCode](https://draculatheme.com/icons/used/pack-3/048-unicorn.svg =x150)](https://draculatheme.com/xcode)

Create the custom themes folder
 
Move `Dracula.xccolortheme` file to this custom themes folder.

```sh
git clone https://github.com/dracula/xcode dracula-xcode
mkdir ~/Library/Developer/Xcode/UserData/FontAndColorThemes
mv ./dracula-xcode/Dracula.xccolortheme ~/Library/Developer/Xcode/UserData/FontAndColorThemes
```

`Xcode` > `Preferences` > `Themes` > Select the Dracula theme

:::

---

## Windows Terminal

::: info Windows Terminal

[![Windows Termianl](https://draculatheme.com/icons/used/pack-3/047-tube.svg =x150)](https://draculatheme.com/windows-terminal)

```sh
git clone https://github.com/dracula/windows-terminal dracula-win-terminal
```

Start Windows Terminal and click on the down arrow symbol `˅` from menu bar. This will open a drop down menu from which select Settings option. Alternatively use <kbd>Ctrl</kbd>+<kbd>,</kbd> to open Settings directly.

In the <FontIcon icon="iconfont icon-json"/>`settings.json` settings file for Windows Terminal, find the schemes section and paste the content of <FontIcon icon="iconfont icon-json"/>`dracula.json`.

```json
"schemes": [
  {
    "name": "Dracula",
    "cursorColor": "#F8F8F2",
    "selectionBackground": "#44475A",
    "background": "#282A36",
    "foreground": "#F8F8F2",
    "black": "#21222C",
    "blue": "#BD93F9",
    "cyan": "#8BE9FD",
    "green": "#50FA7B",
    "purple": "#FF79C6",
    "red": "#FF5555",
    "white": "#F8F8F2",
    "yellow": "#F1FA8C",
    "brightBlack": "#6272A4",
    "brightBlue": "#D6ACFF",
    "brightCyan": "#A4FFFF",
    "brightGreen": "#69FF94",
    "brightPurple": "#FF92DF",
    "brightRed": "#FF6E6E",
    "brightWhite": "#FFFFFF",
    "brightYellow": "#FFFFA5"
  }
]
```

Once the color scheme has been defined, it's time to enable it. Find the profiles section and add a colorScheme value to the default profile.

```json
"profiles": {
    "defaults": {
        "colorScheme" : "Dracula"
    }
}
```

:::

> .<FontIcon icon="iconfont icon-json"/>`settings.json` 파일경로: <FontIcon icon="fas fa-folder-open"/>`%APPDATA%\Local\Packages\Microsoft.WindowsTerminal_????????\LocalState`

---

## Powershell

::: info Powershell

[![Powershell](https://draculatheme.com/icons/used/pack-5/046-magic%20trick.svg =x150)](https://draculatheme.com/powershell)

1. Install the prerequisites:
  - PSReadLine 2.0 or later. It's installed by default in Windows 10, but you'll most likely `need to upgrade it`. You can verify your PSReadLine version by running 
  `(Get-Module PSReadLine).Version.Major`
  - Install git integration (`posh-git`) with `Install-Module -Name posh-git -AllowPrerelease -Force`. If you don't have an `-AllowPrerelease` flag, upgrade PowerShellGet with `Install-Module -Name PowerShellGet -Force` first. If that still doesn't work, see this reported fix (thanks @LukeSavefrogs!).
2. [Download and unzip](https://raw.githubusercontent.com/waf/dracula-cmd/master/dist/ColorTool.zip) ColorTool. The source code is available from Microsoft.
3. Open PowerShell, navigate to the unzipped `ColorTool` directory, and run `install.cmd`.
4. Include this powershell configuration in your PowerShell `$profile` file
5. Right-click on the window titlebar and choose `Properties`, then on the `Font` tab choose Consolas. Click `OK` to save.

Set the environment variable `prompt` to `the value in this file`. These crazy strings are called `ANSI Escape Sequences`.

In Windows 10, the titlebar color can be set system-wide in [Settings] → [Personalization] → [Colors] → [Custom color] → [More] → #262835.

트루타입폰트로 지정

```powershell
$key = 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont'
Set-ItemProperty -Path $key -Name '000' -Value '<트루타입폰트이름>' # Set-ItemProperty -Path $key -Name '000' -Value 'JetBrainsMono Nerd Font Mono'
```

:::

> 📁`$profile 위치` 파일경로: `%USERPROFILE%\Documents\WindowsPowerShell`

---

## Youtube

::: info Youtube

[![Youtube](https://draculatheme.com/icons/used/pack-9/005-dracula.svg =x150)](https://draculatheme.com/youtube)

Install using browser extesion

Install Stylus for

- [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
- [Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/styl-us) or
- [Opera](https://addons.opera.com/pt-br/extensions/details/stylus)


[![shield-stylus][shield-stylus]](https://github.com/dracula/youtube/raw/main/dracula.user.css)

Once installed, it will replace the default theme for Dracula!

:::

---

## <FontIcon icon="fa-brands fa-stack-overflow"/>Stackoverflow

::: info StackOverflow

[![StackOverflow](https://draculatheme.com/icons/used/pack-5/026-candlestick.svg =x150)](https://draculatheme.com/stackoverflow)

> ⚠️ NOTE: You need to have dark mode enabled in stackoverflow settings (Click on your `avatar` -> Click `Settings` -> Set Theme to Dark - [screenshot])

Install Stylus for

- [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
- [Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/styl-us) or
- [Opera](https://addons.opera.com/pt-br/extensions/details/stylus)

[![shield-stylus][shield-stylus]](https://raw.githubusercontent.com/dracula/stackoverflow/master/dracula_for_stackoverflow.user.css)

This theme is highly configurable to your liking and the options are shown below. These settings can be configured by pressing the cogwheel icon next to the name of the theme

![stackoverflow-conf][stackoverflow-conf]

For more information about configuration and settings please see [DOCUMENTATION.md](https://github.com/dracula/stackoverflow/blob/master/DOCUMENTATION.md)

:::

---

## Github Pages

::: info Github Pages

[![Github Pages](https://draculatheme.com/icons/used/pack-1/037-candies.svg =x150)](https://draculatheme.com/github-pages)

Clone the following repositories

```sh
git clone https://github.com/dracula/gh-pages.git
```

:::

---

<TagLinks />

[shield-stylus]: https://img.shields.io/badge/Install%20directly%20with-Stylus-00adad.svg
[stackoverflow-conf]: https://i.imgur.com/bGgBaMI.png
