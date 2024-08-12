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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/27/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/27/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/O-4-xPOXkj0" />

You're probably tired of me saying this: iOS is full of powerful and easy to use programming frameworks. It's true, and you've already met UIKit, SpriteKit, Core Animation, Core Motion, Core Image, Core Location, Grand Central Dispatch and more. But how would you feel if I said that we've yet to use one of the biggest, most powerful and most important frameworks of all?

Well, it's true. And in this technique project we're going to right that wrong. The framework is called Core Graphics, and it's responsible for device-independent 2D drawing – when you want to draw shapes, paths, shadows, colors or so on, you'll want Core Graphics. Being device-independent means you can draw things to the screen or draw them in a PDF without having to change your code.

Create a new Single View App project, name it Project27, then adjust its project settings so that it’s iPad-only. We're going to create a Core Graphics sandbox that's similar to project 15's Core Animation sandbox – a button you can type will trigger Core Graphics drawing in different ways.

If you haven't already downloaded the files for this project, please do so now from [GitHub (<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`)](https://github.com/twostraws/HackingWithSwift), then copy the mouse picture into your project.

---

<TagLinks />