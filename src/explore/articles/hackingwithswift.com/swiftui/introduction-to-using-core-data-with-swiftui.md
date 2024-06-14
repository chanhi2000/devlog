---
lang: ko-KR
title: Introduction to using Core Data with SwiftUI
description: Article(s) > Introduction to using Core Data with SwiftUI
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
      content: Article(s) > Introduction to using Core Data with SwiftUI
    - property: og:description
      content: Introduction to using Core Data with SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/introduction-to-using-core-data-with-swiftui.html
prev: /explore/articles/hackingwithswift.com/swiftui/how-to-enable-vertical-page-scrolling.md
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
  "title": "Introduction to using Core Data with SwiftUI | SwiftUI by Example",
  "desc": "Introduction to using Core Data with SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/introduction-to-using-core-data-with-swiftui",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

As two massive pieces of Apple’s software platform, it won’t surprise you to learn that Core Data and SwiftUI have been written to work well together: we get property wrappers, environment support, and more, all to make sure we can integrate Core Data into our SwiftUI apps with the least hassle.

Before SwiftUI it was common to find a range of ways you might find Core Data being used from an architectural perspective – Apple strongly encouraged us to create containers at the AppDelegate level then reach back up as needed, others preferred using manager classes, and some preferred abstracting Core Data away entirely so they had the freedom to move to Realm or other options at a later date.

However, SwiftUI’s integration with Core Data is different because it points very strongly in one direction: create the Core Data container once when the app starts, inject its managed object context into the environment, then perform fetch requests directly on there.

This isn’t me guessing – Apple literally designed it in a highly specific way, and if you want to take advantage of all the features of SwiftUI’s Core Data integration then you ought to follow the path Apple is laying down for us.

Here are the four specific features that will help you see what I mean:

1. `NSManagedObject` conforms to the `ObservableObject` protocol, which means we can bind any object to part of our user interface.
2. There’s a `managedObjectContext` key in the environment designed to store our active Core Data managed object context.
3. Xcode’s template then injects that context into the initial content view.
4. There’s a `@FetchRequest` property wrapper that uses the environment’s managed object context to perform fetch requests.

So, we create a managed object context when the app launches, attach it to the environment for our views, then use `@FetchRequest` to load data for the app to use.

::: details Similar solutions…

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
  "title": "How to configure Core Data to work with SwiftUI | SwiftUI by Example",
  "desc": "How to configure Core Data to work with SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-configure-core-data-to-work-with-swiftui.md",
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

```component VPCard
{
  "title": "How to add Core Data objects from SwiftUI views | SwiftUI by Example",
  "desc": "How to add Core Data objects from SwiftUI views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-core-data-objects-from-swiftui-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "Introduction to accessibility with SwiftUI | SwiftUI by Example",
  "desc": "Introduction to accessibility with SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/introduction-to-accessibility-with-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />