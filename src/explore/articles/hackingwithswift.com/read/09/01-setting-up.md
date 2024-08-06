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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/09/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/9/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/u7ovZkewpHc" />

In this technique project we're going to return to project 7 to solve a critical problem using one of the most important Apple frameworks available: Grand Central Dispatch, or GCD. I already mentioned the problem to you, but here's a recap from project 7:

*By downloading data from the internet in `viewDidLoad()` our app will lock up until all the data has been transferred. There are solutions to this, but to avoid complexity they won't be covered until project 9.*

We're going to solve this problem by using GCD, which will allow us to fetch the data without locking up the user interface. But be warned: even though GCD might seem easy at first, it opens up a new raft of problems, so be careful!

If you want to keep your previous work for reference, take a copy of project 7 now and call it project 9. Otherwise, just modify it in place.

---

<TagLinks />