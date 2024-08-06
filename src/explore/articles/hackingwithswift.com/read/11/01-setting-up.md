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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/11/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/11/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/PPKU1_k86tQ" />

This project is going to feel like a bit of a reset for you, because we're going to go back to basics. This isn't because I like repeating myself, but instead because you're going to learn a wholly new technology called SpriteKit.

So far, everything you've made has been based on UIKit, Apple's user interface toolkit for iOS. We've made several games with it, and it really is very powerful, but even UIKit has its limits – and 2D games aren't its strong suit.

A much better solution is called SpriteKit, and it's Apple's fast and easy toolkit designed specifically for 2D games. It includes sprites, fonts, physics, particle effects and more, and it's built into every iOS device. What's not to like?

So, this is going to be a long tutorial because you're going to learn an awful lot. To help keep you sane, I've tried to make the project as iterative as possible. That means we'll make a small change and discuss the results, then make another small change and discuss the results, until the project is finished.

And what are we building? Well, we're going to produce a game similar to pachinko, although a lot of people know it by the name "Peggle." To get started, create a new project in Xcode and choose Game. Name it Project11, set its Game Technology to be SpriteKit, then make sure all the checkboxes are deselected before saving it somewhere.

Before we start, please configure your project so that it runs only for iPads in landscape mode.

::: warning

When working with SpriteKit projects, I strongly recommend you use a real device for testing your projects because the iPad simulator is extraordinarily slow for games. If you don’t have a device, please choose the lowest-spec iPad simulator available to you instead, but be prepared for dreadful performance that is not at all indicative of a real device.

:::

---

<TagLinks />