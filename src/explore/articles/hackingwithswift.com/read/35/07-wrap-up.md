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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/35/07-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/36/overview.md
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
  "link": "https://hackingwithswift.com/read/35/7/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

I realize technique projects can be a little dry, but I hope you can see some real advantages to using GameplayKit randomization over other solutions. Not only does it offer a wider range of functionality (shuffled and Gaussian distributions are awesome!) but it makes your code much simpler, and also has the guarantee of being provably random.

Of course, if you're stuck supporting prior versions of iOS, you'll need to mix and match GameplayKit randomization with calls to `arc4random_uniform()` and the like. 

It bears repeating that this is only a small slice of what GameplayKit offers. If you haven't already read tutorial 34, you should check it out now - it's a [tutorial for GKMinmaxStrategist` from `GameplayKit`](/explore/articles/hackingwithswift.com/read/34/overview.md) that shows you how to create an AI for Four in a Row.

---

<TagLinks />