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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/23/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/23/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/JNg1kLsttLY" />

I don't want to put you off, but this is by far the longest project in the series. It's not the most *complicated*, but it's long, coming in just short of 500 lines in total. That said, I hope it'll be worth it, because the end result is great: we're going to make a Fruit Ninja-style game, where slicing penguins is good and slicing bombs is bad. I think I must unconsciously have something against penguins…

Anyway, in this project you're going to meet `SKShapeNode` and `AVAudioPlayer`, you're going to create `SKAction` groups, you're going to create shapes with `UIBezierPath`, and more. So, it's the usual recipe: make something cool, and learn at the same time.

This project is hard because you need to write a lot of code before you can start to see results, which I personally find frustrating. I much prefer it when I can write a few lines, see the result, write a few lines more, see the result again, and so on. That isn't possible here, so I suggest you make some coffee before you begin.

Still here? OK!

Create a new SpriteKit project in Xcode, name it Project23, then do the usual cleaning job to create a completely empty SpriteKit project: remove all the code from `didMove(to:)` and `touchesBegan()`, change the anchor point and size of GameScene.sks, and so on.

You should also download the files for this project from [GitHub (<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`)](https://github.com/twostraws/HackingWithSwift), then copy its Content folder into your Xcode project.

Please force the app to run only on landscape iPads before continuing.

::: note Reminder

Don’t forget to use a real device for this project, or, if you must, the lowest-spec iPad in the simulator.

:::

---

<TagLinks />