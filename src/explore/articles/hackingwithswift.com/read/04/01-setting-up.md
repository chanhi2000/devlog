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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/04/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/4/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/kZnzMswPUkw" />

In this project you're going to build on your new knowledge of `UIBarButtonItem` and `UIAlertController` by producing a simple web browser app. Yes, I realize this is another easy project, but learning is as much about tackling new challenges as going over what you've already learned.

To sweeten the deal, I'm going to use this opportunity to teach you lots of new things: `WKWebView` (Apple's extraordinary web widget), `UIToolbar` (a toolbar component that holds `UIBarButtonItem`s), `UIProgressView`, delegation, key-value observing, and how to create your views in code. Plus, this is the last easy app project, so enjoy it while it lasts!

To get started, create a new Xcode project using the Single View App template, and call it Project4. Make sure Swift is selected for the language, then save the project on your desktop.

Open up Main.storyboard, select the view controller, and choose Editor > Embed In > Navigation Controller – that's our storyboard finished. Nice!

---

<TagLinks />