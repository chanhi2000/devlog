---
lang: ko-KR
title: What is the @FetchRequest property wrapper?
description: Article(s) > What is the @FetchRequest property wrapper?
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
      content: Article(s) > What is the @FetchRequest property wrapper?
    - property: og:description
      content: What is the @FetchRequest property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/what-is-the-fetchrequest-property-wrapper.html
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
  "title": "What is the @FetchRequest property wrapper? | SwiftUI by Example",
  "desc": "What is the @FetchRequest property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-fetchrequest-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us a dedicated property wrapper for working with Core Data fetch requests, and it allows us to embed data directly into SwiftUI views without having to write extra logic.

You must provide `@FetchRequest` with at least one value, which is an array of sort descriptors to arrange the data. You can optionally also provide a predicate to filter the data as needed.

::: important

Before using `@FetchRequest` you must first have injected a Core Data managed object context into the environment – see [how to access a Core Data managed object context from a SwiftUI view](/explore/articles/hackingwithswift.com/swiftui/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view.mdd) for instructions on how to do that.

:::

As a basic example, we could show all users from a Core Data context like this: 

```swift
@FetchRequest(
    sortDescriptors: []
) var users: FetchedResults<User>
```

That applies no sorting to the data, so the users will be returned in the order they were added. `@FetchRequest` automatically implies `@ObservedObject`, so if you use your data in a `List`, `ForEach`, or similar, it will automatically be refreshed when the underlying data changes.

::: tip

I’ve split the `@FetchRequest` code across several lines to make it easier to read, but it’s not required.

:::

If you want to sort your data, provide your sort descriptors as an array of key paths, like this: 

```swift
@FetchRequest(
    sortDescriptors: [
        SortDescriptor(\.name, order: .reverse)
    ]
) var users: FetchedResults<User>
```

You can provide as many as you want, and they will be evaluated in order.

To add a predicate as well, create an `NSPredicate` using your format like this:

```swift
@FetchRequest(
    sortDescriptors: [
        SortDescriptor(\.name, order: .reverse)
    ],
    predicate: NSPredicate(format: "surname == %@", "Hudson")
) var users: FetchedResults<User>
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a Core Data fetch request using @FetchRequest | SwiftUI by Example",
  "desc": "How to create a Core Data fetch request using @FetchRequest",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-core-data-fetch-request-using-fetchrequest.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @GestureState property wrapper? | SwiftUI by Example",
  "desc": "What is the @GestureState property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-gesturestate-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Published property wrapper? | SwiftUI by Example",
  "desc": "What is the @Published property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-published-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ScaledMetric property wrapper? | SwiftUI by Example",
  "desc": "What is the @ScaledMetric property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-scaledmetric-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ObservedObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @ObservedObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />