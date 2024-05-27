---
lang: ko-KR
title: Tips
description: macOS > Tips
icon: fas fa-lightbulb
category:
  - macOS
  - Tips
tag: 
  - sh
  - bash
  - zsh
head:
  - - meta:
    - property: og:title
      content: macOS > Tips
    - property: og:description
      content: Tips
    - property: og:url
      content: https://chanhi2000.github.io/devops/macos/tips.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## How to disable opening an app automatically at login in Mac

::: info Guide

- Go to `System Preferences` > `Users & Groups`
- Navigate to `Login Items` tab and select the App that you want to remove from automatically opening during login.
- Click the minus sign at the bottom.

Now after restarting Mac, the app will not open automatically.

:::

---

## Show hidden files and folders on Mac

::: info Guide

Hidden files and folders are by default not shown on your Mac. Here are the different ways you can show hidden files and folders.

- On Terminal Type below

```sh
defaults write com.apple.Finder AppleShowAllFiles true;
killall Finder;
```

:::

---

<TagLinks />