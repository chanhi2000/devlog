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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/20/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/20/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/Af_-HBsgL5k" />

In this game project we're going to let users create fireworks displays using their fingers. They'll need to touch fireworks of the same color, then shake their device to make them explode. Shaking an iPad isn't the most pleasant user experience, but I had to find *some* way of teaching you about shake gestures!

On the topic of what you'll learn, you're going to use sprite color blending, you're going to try the `follow()` SpriteKit action, you’ll learn to detect shake gestures, and you’ll also get more practice with `Timer`.

Create a new SpriteKit project in Xcode, name it project 20, and adjust its project setting so that it runs on landscape iPads. Now download the files for this project from [GitHub (<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`)](https://github.com/twostraws/HackingWithSwift) and drag the Content folder into your Xcode project.

You should, like always with SpriteKit, go through the cleaning process to make Apple’s template usable. Particularly important is cleaning up GameScene.sks: make sure its anchor point is X:0 Y:0 and its size is 1024x768.

As always, please use a real iPad device for this project, or if you must use the simulator then choose the lowest-spec iPad on the list.

---

<TagLinks />