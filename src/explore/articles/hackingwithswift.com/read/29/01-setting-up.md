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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/29/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/29/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/BQbaIjBkoE0" />

This game project will be hugely recognizable to people over the age of 35 because it was the classic way to waste time during computer classes at school.

The game? It's called Gorillas, and it first shipped with an old text-based operating system called MS-DOS 5.0 way back in 1991. Of course, we're going to re-make it using SpriteKit, but at the same time you're going to learn some new things: how to make colors from hues, texture atlases, scene transitions, mixing UIKit with SpriteKit, and destructible terrain. You'll also get a recap on the Core Graphics techniques from project 27.

"Destructible terrain" means "terrain that can be destroyed," which is a key part of Gorillas. If you've never played it before, you won't know that it pits two players against each other, both standing on high-rise buildings and both flinging exploding bananas at each other using physics. Realistic, right? Well, no, but it's certainly fun!

Make a new SpriteKit project named Project29. Please make it target iPads in landscape orientation, then through the usual project cleaning effort to remove all of the unneeded template code – including, as always, setting the anchor point to X:0 Y:0 and size 1024x768. You should download the files for this project from [GitHub (<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`)](https://github.com/twostraws/HackingWithSwift), but for now please don’t copy any of its files into your project.

---

<TagLinks />