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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/17/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/17/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/d9ZOHDEc120" />

In this game project we'll seek to answer the question, "how fast can you make a fun game in SpriteKit?" Spoiler warning: the answer is very fast. And that's even when you ignore learning about `Timer`, advancing particle systems, linear and angular damping, and per-pixel collision detection.

The game we're going to produce is a very simple survival game: our player will have to pilot a spaceship safely through a field of space junk. The longer they stay alive the higher their score will be, but they need to keep moving otherwise certain death awaits!

Remarkably, we're going to make this project in just over 100 lines of code. To begin, create a new SpriteKit project in Xcode named Project17. Configure it to work only on landscape iPads, then download the files for this project and copy the Content folder into your project.

Now for the most important – and most boring - part: please clean Xcode’s template project so that it’s back to showing a large empty screen. Don’t forget to change the anchor point and size of the scene!

All done? Start the clock – let's see how long it takes to make this game!

---

<TagLinks />