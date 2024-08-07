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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/16/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/16/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/p0dOywHx0VI" />

It's time for another app project, and this time you're going to learn about MapKit: Apple's mapping framework that lets us drops pins, plan routes, and zoom around the world with just a few swipes.

Working with MapKit requires you to learn quite a few new classes, so I've tried to construct a project simple enough that we can focus on the mapping element. In this project you'll make an app that shows the locations of capital cities around the world, and when one of them is tapped you can bring up more information.

Create a new Single View App project in Xcode, naming it Project16. Now go to Interface Builder for your view controller, and embed it inside a navigation controller. Search for "map" in the object library, drop a map view into your view controller so that it occupies the full view, then use Resolve Auto Layout Issues > Add Missing Constraints so that it stays next to each edge.

Now, run your program and you should see a basic map working nicely.

---

<TagLinks />