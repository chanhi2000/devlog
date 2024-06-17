---
lang: ko-KR
title: "Wrap up: our SwiftData project is complete"
description: "Article(s) > Wrap up: our SwiftData project is complete"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Wrap up: our SwiftData project is complete"
    - property: og:description
      content: "Wrap up: our SwiftData project is complete"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/wrap-up-our-swiftdata-project-is-complete.html
next: /explore/articles/hackingwithswift.com/swiftdata/whats-the-difference-between-modelcontainer-modelcontext-and-modelconfiguration.md
date: 2023-10-12
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Wrap up: our SwiftData project is complete | SwiftData by Example",
  "desc": "Wrap up: our SwiftData project is complete",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/wrap-up-our-swiftdata-project-is-complete", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/bx3U10UHCnU" />

This introductory project was designed to teach you the absolute fundamentals of building with SwiftData, so you've met models, model containers, model contexts, queries, sort descriptors, predicates, relationships, and more.

Each of those things have significantly more power than can be shown off in a small tutorial like this one, but I hope you can appreciate how powerful SwiftData is, and how it makes it even complex data management easy.

The rest of this book is dedicated to showing off much more of the power of SwiftData, but you should also keep in mind that it's just going to keep growing and growing as it matures in the future.

And if you’d like to see my completed version of this project, you can find it here on GitHub: [<FontIcon icon="iconfont icon-github"/>`twostraws/iTour`](https://github.com/twostraws/iTour).

---

## Challenges

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Add swipe to delete for sights.
2. Use an array of sort descriptors to initialize `DestinationListingView`, with the first sort being the one the user chose and the second sort being a sensible alternative – arrival date then name, for example.
3. Add a second picker menu to the toolbar in `ContentView`, allowing the user to toggle showing all destinations or only ones that are in the future.

Hacking with Swift+ subscribers can find the solutions to these three challenges – plus a huge exploration of bonus challenges – at this link: [https://hackingwithswift.com/plus/solutions/itour](https://hackingwithswift.com/plus/solutions/itour).


---

<TagLinks />
