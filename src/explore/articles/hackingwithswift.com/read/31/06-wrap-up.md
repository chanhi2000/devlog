---
lang: ko-KR
title: "Wrap up"
description: "Article(s) > Wrap up"
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
      content: "Article(s) > Wrap up"
    - property: og:description
      content: "Wrap up"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/31/06-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/32/overview.md
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
  "title": "Wrap up | Hacking with iOS",
  "desc": "Wrap up",
  "link": "https://hackingwithswift.com/read/31/6/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

With `UIStackView` in place that's another UIKit component under your belt – good job! The addition of multitasking and size classes helps make the app much more polished, and I think you have the seeds of a great app here.

If you want to try extending this project, the sensible place to start is in the URL entry: if users don't type "http://" before their web site addresses the app fails, which isn't very helpful.

Another smart place to improve the app is inside the `setDefaultTitle()` method: it just writes Multibrowser in the navigation bar while leaving a large white space in the center – hardly intuitive, and it wouldn't be hard to add a placeholder label in there telling users what to do.

---

<TagLinks />