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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/24/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/24/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/V9cWsGJ4aLc" />

After a long project 23, it’s time to ease off and look at something that you might think would be much easier: strings. Yes, those pieces of text we take for granted in almost every program we write – they ought to be fairly straightforward things, but it turns out that they are complicated little beasts and take a little thinking.

In this technique project we’re going to look at why strings often confuse newcomers to Swift, we’ll try out a variety of properties and methods that are useful, and we’re also going to look at how to add *formatting* to strings – bold, italics, color, and more – using a separate class called `NSAttributedString`. Supported for attributed strings is baked into most of UIKit, so you can use it with `UILabel`, `UITextView`, and more.

In Xcode, go to the File menu and choose New > Playground. Name it Project24, make sure iOS is selected as the platform, then choose Next and save it somewhere you can find later.

---

<TagLinks />