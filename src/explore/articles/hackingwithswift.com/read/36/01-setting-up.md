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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/36/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/36/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

In this project we're going to produce a Flappy Bird clone called Crashy Plane. Flappy Bird might seem like a remarkably simple game when you’re playing it, but has a lot going on behind the scenes: there’s physics, animation, infinite scrolling, and more – it’s a worthy choice for a learning project.

Before you start, please download the assets for this project from [<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`](https://github.com/twostraws/HackingWithSwift) so you can follow along. If you haven't played Flappy Bird before, the concept is simple: tap the screen to keep your bird flying, and don't touch the floor or any pipes. In our game it'll be a plane with mountains as obstacles, but the idea is the same.

The assets you download are all licensed under CC0 / public domain, which means you can use them however you want without attribution. If you want to attribute the original authors, see the README.txt file in the zip. The game art comes from a designer called Kenney, who offers a huge selection of public domain game assets in return for a donation – if you're serious about making games you should definitely [<FontIcon icon="fas fa-globe"/>visit his home page](http://kenney.itch.io/kenney-donation).

All set? Great! Launch Xcode and create a new project from the game template. Choose Swift for your language and SpriteKit for the game technology, then name it Project36 and click Next then Finish. Before we go any further, please change its project settings so that it supports only iPhone in portrait – that’s the natural environment of Flappy Bird.

---

<TagLinks />