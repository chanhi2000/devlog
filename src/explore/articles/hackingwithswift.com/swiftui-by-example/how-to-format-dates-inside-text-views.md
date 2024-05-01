---
lang: ko-KR
title: How to format dates inside text views
description: Article(s) > How to format dates inside text views
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to format dates inside text views
    - property: og:description
      content: How to format dates inside text views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-dates-inside-text-views.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to format dates inside text views | SwiftUI by Example",
  "desc": "How to format dates inside text views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-format-dates-inside-text-views",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s text views come with two specific date formatters to make dates look better on screen: one to handle single dates, and one to handle date ranges.

The date range version is actually simpler, because you just provide a closed date range and it will make sure it’s formatted appropriately according to the user’s locale:

```swift
Text(Date.now...Date.now.addingTimeInterval(600))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-format-dates-inside-text-views-1.zip)

The text “2:37–2:47 PM”

For example, that might show “10:30AM-10:40AM”.

When working with single dates, you should provide a `style` parameter to accompany it to determine how the date should be formatted. Here are some options:

```swift
VStack {
    // show just the date
    Text(Date.now.addingTimeInterval(600), style: .date)

    // show just the time
    Text(Date.now.addingTimeInterval(600), style: .time)

    // show the relative distance from now, automatically updating
    Text(Date.now.addingTimeInterval(600), style: .relative)

    // make a timer style, automatically updating
    Text(Date.now.addingTimeInterval(600), style: .timer)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-format-dates-inside-text-views-2.zip)

![The lines “June 29, 2021” and “2:49 PM”, as well as two lines counting down from 10 minutes reading “8 min, 14 sec”, and “8:14” respectively.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-format-dates-inside-text-views-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to format text inside text views",
  "desc": "How to format text inside text views",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-format-text-inside-text-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let the user select multiple dates",
  "desc": "How to let the user select multiple dates",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-let-the-user-select-multiple-dates.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to format a TextField for numbers",
  "desc": "How to format a TextField for numbers",
  "link": "/swift/swiftui-by-example/06-user-interface-controls/how-to-format-a-textfield-for-numbers.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to force views to one side inside a stack using Spacer",
  "desc": "How to force views to one side inside a stack using Spacer",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to draw a border inside a view",
  "desc": "How to draw a border inside a view",
  "link": "/swift/swiftui-by-example/16-transforming-views/how-to-draw-a-border-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />