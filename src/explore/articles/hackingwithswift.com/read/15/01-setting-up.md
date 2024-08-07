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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/15/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/15/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/RpKB144qWKI" />

It's time to introduce one of the most important techniques in iOS development: animation. Sadly, many people don't consider animation important at all, which makes for some thoroughly awful user interface design.

Animation – making things move, scale, and so on – of your views is not only about making things pretty, although that's certainly a large part. Its main purpose is to give users a sense of what's changing and why, and it helps them make sense of a state change in your program.

When we use a navigation controller to show a new view controller, we don't just want it to appear. Instead, we want it to slide in, making it clear that the old screen hasn't gone away, it's just to the left of where we were.

You're almost certainly tired of hearing me say this, but iOS has a ridiculously powerful animation toolkit that's also easy to use. I know, I'm a broken record, right?

Well, don't just take my word for it – let's try out some animation together so you can see exactly how it works. So, create a new Single View App project in Xcode, naming it Project15.

Please download the files for this project from [GitHub (<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`)](https://github.com/twostraws/HackingWithSwift) and copy its Content folder into your Xcode project. Finally, set it to work on landscape iPads only. Animation of course works on all devices and in all orientations, but it's easier to work with a fixed size for now.

---

<TagLinks />