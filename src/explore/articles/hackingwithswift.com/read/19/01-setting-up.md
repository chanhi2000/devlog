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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/19/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/19/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/Y-EujA71RMY" />

In this project you're going to create a Safari extension, which lets us embed a version of our app directly inside Safari's action menu, then manipulate Safari data in interesting ways. 

What do I mean by "interesting ways"? Well, our little Safari extension is going to read in the URL and page title that the user was visiting, then show them a large text area they can type JavaScript into. When the extension is dismissed, we'll execute that JavaScript in Safari.

This is the first of two projects that are *hard*. This is not because I want to torture you, but because this isn’t one of Apple’s better APIs – in fact, I’d say it’s downright ugly in places. In this project, the actual amount of code you're going to be writing is quite small. However, it's dense, and there's a lot to take in, so it might feel like slow going.

At the very least, the project will still be useful and you'll learn a lot too – not least about Safari extensions and a new class called `NotificationCenter`.

Let's get started: create a new Single View App project in Xcode, naming it Project19.

---

<TagLinks />