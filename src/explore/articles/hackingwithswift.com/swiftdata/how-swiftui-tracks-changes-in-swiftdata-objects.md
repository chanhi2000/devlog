---
lang: ko-KR
title: How SwiftUI tracks changes in SwiftData objects
description: Article(s) > How SwiftUI tracks changes in SwiftData objects
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
      content: Article(s) > How SwiftUI tracks changes in SwiftData objects
    - property: og:description
      content: How SwiftUI tracks changes in SwiftData objects
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-swiftui-tracks-changes-in-swiftdata-objects.html
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
  "title": "How SwiftUI tracks changes in SwiftData objects | SwiftData by Example",
  "desc": "How SwiftUI tracks changes in SwiftData objects",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-swiftui-tracks-changes-in-swiftdata-objects", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI and SwiftData are built with tight coordination, which allows SwiftUI to update its views only when your SwiftData object changes a value that actually matters – any property that is actually used by the view will cause an update, but changing other values won't.

Internally this is all powered by Swift's observation system: when SwiftUI renders a view it makes a list of all the properties that are read from `Observable` objects, then watch those properties – and only those – for changes. When any *do* change, that view gets re-evaluated and the whole process repeats.

::: tip

This whole process works equally well with computed properties – as long as calling a computed property refers to a stored property on your object, SwiftUI will take note that it was accessed when your view was rendered.

:::

Because SwiftData's objects are built on top of the Swift's observation system, all our objects automatically inherit this same power: views that use one of your model objects won't update until a property they directly rely on has changed. So, if your view refers to a user's name, it won't refresh if that's user's age changes – it's a big performance win.

::: important

If you have a SwiftUI view that depends on one or more properties from a SwiftData object, changing that property will cause the view to be invalidated and re-rendered even if it's currently positioned off-screen.

:::


---

<TagLinks />