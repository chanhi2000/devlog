---
lang: ko-KR
title: 🧰Environment Setup
description: 🧛‍♀️Dracula > 🧰Environment Setup
tags: ["sh", "bash", "zsh", "dracula", "dracula-theme", "draculatheme"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Setup by Tool(s)

::: info Terminal.app

[![Termainal](https://draculatheme.com/static/icons/used/pack-1/035-cauldron.svg =x150)](https://draculatheme.com/terminal)

Copy and Paste the following to the Terminal Prompt

```shell
git clone https://github.com/dracula/terminal-app.git
```

- _Terminal_ > _Settings_ Tab
- Click "_Gear_" icon
- Click _Import..._
- Select the `Dracula.terminal` file
- Click Default

:::


::: info zsh

[![zsh](https://draculatheme.com/static/icons/used/pack-1/034-eye.svg =x150)](https://draculatheme.com/zsh)

Copy and Paste the following to the Terminal Prompt

```shell
git clone https://github.com/dracula/zsh.git
```

And creating a symbolic link to `oh-my-zsh`'s theme folder:

```shell
ln -s $DRACULA_THEME/dracula.zsh-theme $OH_MY_ZSH/themes/dracula.zsh-theme
```
:::

::: info Visual Studio Code

[![Visual Studio Code](https://draculatheme.com/static/icons/used/pack-1/048-frankenstein.svg =x150)](https://draculatheme.com/visual-studio-code)

1. Go to _View_ -> _Command Palette_ or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
2. Then enter `Install Extension`
3. Write `Dracula Official`
4. Select it or press <kbd>Enter</kbd> to install

:::

::: info Sublime Text

[![Sublime Text](https://draculatheme.com/static/icons/used/pack-1/044-spider-web.svg =x150)](https://draculatheme.com/sublime)

If you are using `Package Control`, you can easily install Dracula Theme via the `Package Control: Install Package` menu item. The Dracula Theme package is listed as `Dracula Color Scheme` in the packages list.

:::

::: info Jetbrains

[![Jetbrains](https://draculatheme.com/static/icons/used/pack-1/046-zombie.svg =x150)](https://draculatheme.com/jetbrains)

| No. | Step | Image |
| :---: | :---- | :---: |
| 1 | Go to `Plugin Marketplace`, and search `Dracula`, click `Install`. | ![jetbrains-01][jetbrains-01] | 
| 2 | Go to `Preferences` > `Appearance & Behavior` > `Appearance`, select `Dracula` from the dropdown menu. | ![jetbrains-02][jetbrains-02] |
| 3 | Go to `Preferences` > `Editor` > `Color Scheme`, select `Dracula` from the dropdown menu. | ![jetbrains-03][jetbrains-03]

:::

::: info vim

[![Vim](https://draculatheme.com/static/icons/used/pack-1/040-zombie-1.svg =x150)](https://draculatheme.com/vim)

:::

::: info xcode

[![XCode](https://draculatheme.com/static/icons/used/pack-3/048-unicorn.svg =x150)](https://draculatheme.com/xcode)

Download using the [GitHub .zip download](https://github.com/dracula/xcode/archive/master.zip) option and unzip them.

Create the custom themes folder:

```sh
mkdir ~/Library/Developer/Xcode/UserData/FontAndColorThemes
```

Move `Dracula.xccolortheme` file to this custom themes folder.

`Xcode` > `Preferences` > `Themes` > Select the Dracula theme

:::

<TagLinks />


[jetbrains-01]: https://raw.githubusercontent.com/dracula/jetbrains/master/docs/screenshots/dracula-plugin-install.png
[jetbrains-02]: https://raw.githubusercontent.com/dracula/jetbrains/master/docs/screenshots/dracula-setup-appearance.png
[jetbrains-03]: https://raw.githubusercontent.com/dracula/jetbrains/master/docs/screenshots/dracula-setup-scheme.png