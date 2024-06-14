---
lang: ko-KR
title: How to access a Core Data managed object context from a SwiftUI view
description: Article(s) > How to access a Core Data managed object context from a SwiftUI view
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
      content: Article(s) > How to access a Core Data managed object context from a SwiftUI view
    - property: og:description
      content: How to access a Core Data managed object context from a SwiftUI view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to access a Core Data managed object context from a SwiftUI view | SwiftUI by Example",
  "desc": "How to access a Core Data managed object context from a SwiftUI view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you followed my [Core Data and SwiftUI set up instructions](/explore/articles/hackingwithswift.com/swiftui/how-to-configure-core-data-to-work-with-swiftui.md), you’ve already injected your managed object context into the SwiftUI environment.

If not, make sure you add this code to your scene delegate:

```swift
ContentView()
    .environment(\.managedObjectContext, yourCoreDataContext)
```

That passes our view context directly into `ContentView` as environment data, which means we can add an `@Environment` property to `ContentView` to read the managed object context right out:

```swift
@Environment(\.managedObjectContext) var managedObjectContext
```

::: note

Adding a local property for the managed object context isn’t required for performing fetch requests using `@FetchRequest` – you only need it for saving, deleting, and some other tasks.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a context menu | SwiftUI by Example",
  "desc": "How to show a context menu",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-a-context-menu.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to delete Core Data objects from SwiftUI views | SwiftUI by Example",
  "desc": "How to delete Core Data objects from SwiftUI views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-delete-core-data-objects-from-swiftui-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />