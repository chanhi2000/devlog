---
lang: ko-KR
title: How to access a SwiftData container from widgets
description: Article(s) > How to access a SwiftData container from widgets
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
      content: Article(s) > How to access a SwiftData container from widgets
    - property: og:description
      content: How to access a SwiftData container from widgets
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-access-a-swiftdata-container-from-widgets.html
next: /explore/articles/hackingwithswift.com/swiftdata/how-to-use-mvvm-to-separate-swiftdata-from-your-views.md
date: 2023-09-30
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
  "title": "How to access a SwiftData container from widgets | SwiftData by Example",
  "desc": "How to access a SwiftData container from widgets",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-access-a-swiftdata-container-from-widgets", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData works great with widgets, and it only takes a few minutes to synchronize data between your main app and widgets.

Assuming you already have a widget target added to your project, it takes five steps to configure your widget to share data with your main app:

1. Go to your main app target's Signing & Capabilities, and add the App Groups capability.
2. Click <FontIcon icon="iconfont icon-select"/>`[+]` and add a new group, or select one you made previously.
3. Repeat steps 1 and 2 for your widget.
4. Make sure whatever Swift files contain your SwiftData models have been added to both your app and widget targets.
5. Add the `modelContainer()` modifier to your widget, e.g. in your `StaticConfiguration` or `AppIntentConfiguration`.

And that's it: when your app runs next, SwiftData will automatically copy any existing data into the shared app group so it's accessible by your widget.

At this point you can go ahead and use SwiftData normally inside your widget, for example using `@Query` inside your widget view, modifying data, and so on. 

One thing to be mindful of is that iOS limits how often widgets are refreshed, so you should explicitly ask for a widget refresh when you know something important has changed.

To do that, first add an import for WidgetKit, then call this:

```swift
WidgetCenter.shared.reloadAllTimelines()
```

---

<TagLinks />