---
lang: ko-KR
title: How to filter Core Data fetch requests using a predicate
description: Article(s) > How to filter Core Data fetch requests using a predicate
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
      content: Article(s) > How to filter Core Data fetch requests using a predicate
    - property: og:description
      content: How to filter Core Data fetch requests using a predicate
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-filter-core-data-fetch-requests-using-a-predicate.html
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
  "title": "How to filter Core Data fetch requests using a predicate | SwiftUI by Example",
  "desc": "How to filter Core Data fetch requests using a predicate",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-filter-core-data-fetch-requests-using-a-predicate",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Core Data fetch requests can use predicates in SwiftUI just like they can with UIKit, all by providing a `predicate` property to your `@FetchRequest` property wrapper.

If you followed my [Core Data and SwiftUI set up instructions](/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-configure-core-data-to-work-with-swiftui.md), you’ve already injected your managed object context into the SwiftUI environment. 

Once that’s done, you can create a fetch request for one of your entities, passing in one or more sort descriptors and a predicate. These predicates are the same instances of `NSPredicate` that you would use without SwiftUI, which means you can use the same variety of string operations you would normally use.

For example, using the example data from my setup instructions we could create a predicate like this:

```swift
NSPredicate(format: "name == %@", "Python")
```

That will show details about Python, while ignoring other data.

We could use that inside a fetch request like this:

```swift
@FetchRequest(
    sortDescriptors: [SortDescriptor(\.name)],
    predicate: NSPredicate(format: "name == %@", "Python")
) var languages: FetchedResults<ProgrammingLanguage>
```

Because `@FetchRequest` uses standard Core Data predicates, you can create compound predicates too.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a Core Data fetch request using @FetchRequest | SwiftUI by Example",
  "desc": "How to create a Core Data fetch request using @FetchRequest",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-core-data-fetch-request-using-fetchrequest.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to limit the number of items in a fetch request | SwiftUI by Example",
  "desc": "How to limit the number of items in a fetch request",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-limit-the-number-of-items-in-a-fetch-request.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a search bar to filter your data | SwiftUI by Example",
  "desc": "How to add a search bar to filter your data",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-search-bar-to-filter-your-data.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to configure Core Data to work with SwiftUI | SwiftUI by Example",
  "desc": "How to configure Core Data to work with SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-configure-core-data-to-work-with-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />