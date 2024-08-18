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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/32/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/32/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

I hope you're all set for a massive project, because this one is going to cram a lot in. In this project, you're going to make an app for this tutorial series, Hacking with Swift – very meta, I know. The app is going to list all the projects and let users choose which ones they favorite, which by itself sounds like the kind of thing we might have done in project 7 or so.

So how come it's way back here as project 32? Simple: when users favorite a project, we're going to store that in Core Spotlight so they can find it later. And when they view a project, we'll use the `SFSafariViewController` class for them to read, which lets you embed Safari right inside your app. If those two new features weren't enough for you, I'm going to throw in a little bit of `UITableViewCell` automatic sizing, a little bit of Dynamic Type and even some attributed strings to handle formatted string drawing.

Are you feeling it now? I hope so. Please go ahead and create a new project in Xcode, choosing the Single View App template. Name it Project32, then choose Swift for your language.

---

<TagLinks />