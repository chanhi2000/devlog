---
lang: ko-KR
title: "Setting up"
description: "Article(s) > Setting up"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Setting up"
    - property: og:description
      content: "Setting up"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/26/01-setting-up.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Setting up | Hacking with iOS",
  "desc": "Setting up",
  "link": "https://hackingwithswift.com/read/26/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/PPVsT4DePJw" />

In this game project you'll create a rolling ball game for iPad, using the accelerometer – you tilt your device, and the balls rolls in that direction, hopefully avoiding holes as you go.

Along with the accelerometer, you're also going to learn how to load level layouts, how to have fine-grained contact bitmasks, and how to write code that executes in the simulator but not on devices (or vice versa). So, you learn things, you make a cool game, and I get to bask in the warmth of knowing that your Swift mastery continues to grow.

Create a new SpriteKit project named it Project26, then configure it to work on iPads in **landscape right** orientation, which is more restrictive than we usually use. We can't enable landscape left because we'll be tilting the device in all directions, and it would be annoying to have the device rotate because we tipped the iPad too far!

Please do the usual cleaning job on Xcode’s SpriteKit template, remembering to set the anchor point to X:0 Y:0 and size to 1024x768 in GameScene.sks. Now download the files for this project from [GitHub (<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`)](https://github.com/twostraws/HackingWithSwift) and copy its Content folder into your project.

In this project we're going to use the accelerometer, which is not supported in the iOS Simulator. To make things easier, we're going to add some code that lets you control the game through touch – it's nowhere near as fun, but at least it can be tested in the simulator.

---

<TagLinks />