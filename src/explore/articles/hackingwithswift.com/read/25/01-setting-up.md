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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/25/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/25/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/1KnE6UpWvf8" />

This project is going to give you some practice with collection views, the image picker and GCD, but at the same time introduce you to a new technology called the multipeer connectivity framework. This is a way to let users form impromptu connections to each other and send data, rather like BitTorrent.

The app we're going to make will show photos of your choosing in a collection view. That much is easy enough, because we did pretty much that already in project 10. But this time there's a subtle difference: when you add a photo it's going to automatically send it to any other devices you are currently connected to, and any photos they select will appear for you.

Create a new Single View App project in Xcode, naming it Project25. Please note: the nature of peer-to-peer apps is that you need to have at least two copies of your app running, one to send and one to receive. There are a few ways of setting this up, but I recommend using one physical device talking to the iOS simulator – that’s more than enough.

---

<TagLinks />