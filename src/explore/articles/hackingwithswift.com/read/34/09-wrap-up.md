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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/34/09-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/35/overview.md
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
  "link": "https://hackingwithswift.com/read/34/9/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

I don't know about you, but I certainly enjoyed this tutorial – not only does it involve some of the most impressive iOS features, but it's always fun to watch an artificial intelligence "think" its way through a problem and come to a solution. Plus, I got the chance to sneak in more `UIStackView` action, which is always a good thing!

If you're looking to extend this project, the first thing you're likely to target is the heuristic function. As I said at the beginning, this project is based on some less-than-perfect Apple sample code, which I went on to rewrite in Swift, then refactor to make it easier to understand. The heuristic code is what makes the AI smart, but it doesn't take into account how many moves it takes for a win to happen, and so it performs fairly poorly.

As for other improvements, you've seen how this game could work in one- or two-player modes, so you could easily add a user interface to let the player select what kind of game they wanted. Then, by adjusting the level of look ahead, you could implement Easy, Medium and Hard computer opponents.

For a much easier improvement to make, you could switch out our `UIView` chips for `UIImageViews`, then draw your own red and black chip graphics. There isn't much coding required to make this happen, but let's face it: you've just written a mountain of code, so you probably deserve a break!

Anyway, that's it for this project. Once again you've made a useful, real-world project that is now your own to extend in whichever direction you want. As a heavy user of iOS apps, I'm particularly looking forward to seeing how apps (not games!) will use AI – can it recommend songs with some real intelligence, for example? Have fun!

---

<TagLinks />