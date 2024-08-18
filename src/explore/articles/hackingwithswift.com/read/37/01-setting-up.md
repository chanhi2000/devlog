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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/37/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/37/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

Are you psychic? Of course not. But what if we could use our coding skills to make a game to fool your friends into thinking otherwise – while also learning some new techniques along the way?

In this project we're going to build a simple game that recreates the classic [<FontIcon icon="fa-brands fa-wikipedia-w"/>Zener test](https://en.wikipedia.org/wiki/Zener_cards) for extrasensory perception. Our game will show the user eight cards face down, and users need to tap the card that has a star on its flip side. Casual players will get it right 1 in 8 times, but you'll get it right every time. Magic!

Well, no. We'll be cheating, naturally, but even in this cheating I'm going to find new things to teach you. First, we're going to build a tiny watchOS app that silently taps your wrist when your finger moves over the star card. Then we're going to add 3D Touch support so that pressing hard on any card will automatically make it the star. Whichever technique you use is going to be enough to baffle your friends, although I hope you use your powers for good!

At the same time we'll also be learning about `CAEmitterLayer`, `CAGradientLayer`, `@IBDesignable` and `@IBInspectable`, as well as how to create a 3D card flip effect using the `transition(with:)` method.

I've left the Apple Watch and 3D Touch code until the end of the project, so at the very least you'll be able to work through the majority of the tutorial without needing special hardware. That being said, we'll be using one of Xcode's built-in iOS/watchOS templates to make the end result easier to reach.

Are you ready to take your first step into the Twilight Zone? Go ahead and launch Xcode, then create a new project. When Xcode asks you which template you want, please select watchOS then iOS App with WatchKit App. Set the target to be iPhone, the language to be Swift, then deselect Include Notification Scene. Finally, name it Project37 and click Next.

Once the project is created, please set it to support landscape left and right only; no portrait this time. You will also need to copy the image assets for this project into your project's asset catalog – you can find them all on [GitHub (<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`)](https://github.com/twostraws/HackingWithSwift). You'll also find a Content directory in that download; please add that to your project too, because it contains some music for later on.

---

<TagLinks />