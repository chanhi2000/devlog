---
lang: ko-KR
title: Working with lists
description: Article(s) > Working with lists
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > Working with lists
    - property: og:description
      content: Working with lists
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-lists.html
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Working with lists | SwiftUI by Example",
  "desc": "Working with lists",
  "link": "https://hackingwithswift.com/quick-start/swiftui/working-with-lists",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `List` view is similar to `UITableView` in that it can show static or dynamic table view cells based on your needs. However, it is significantly simpler to use: we don't need to create prototype cells in storyboards, or register them in code; we don't need to tell it how many rows there are; we don't need to dequeue and configure cells by hand, and more.

Instead, SwiftUI's lists are designed for composability – designed to be able to build bigger things from smaller things. So, rather than having one large view controller that configures cells by hand, SwiftUI has us build small views that know how to configure themselves as list rows, then uses those.

In terms of code size if nothing else, the difference is staggering – you can delete almost all your table view code and still get the same great look and feel you're used to.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to get translucent lists on macOS | SwiftUI by Example",
  "desc": "How to get translucent lists on macOS",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-translucent-lists-on-macos.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create grouped and inset grouped lists | SwiftUI by Example",
  "desc": "How to create grouped and inset grouped lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-grouped-and-inset-grouped-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create expanding lists | SwiftUI by Example",
  "desc": "How to create expanding lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-expanding-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make carousel lists on watchOS | SwiftUI by Example",
  "desc": "How to make carousel lists on watchOS",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-carousel-lists-on-watchos.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />