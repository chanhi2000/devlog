---
lang: ko-KR
title: How to limit the number of items in a fetch request
description: Article(s) > How to limit the number of items in a fetch request
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
      content: Article(s) > How to limit the number of items in a fetch request
    - property: og:description
      content: How to limit the number of items in a fetch request
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-limit-the-number-of-items-in-a-fetch-request.html
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
  "title": "How to limit the number of items in a fetch request | SwiftUI by Example",
  "desc": "How to limit the number of items in a fetch request",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-limit-the-number-of-items-in-a-fetch-request",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `@FetchRequest` property wrapper is great for making simple requests for objects, providing both sorting and filtering. But if you want to adjust the number of items you get back – perhaps to say “show me the first 10 items in my results” – then you need to do a little more work yourself.

First, create your `@FetchRequest` property without an initial value. For example, if we wanted to work with a “ProgrammingLanguage” entity we might use this:

```swift
@FetchRequest var languages: FetchedResults<ProgrammingLanguage>
```

And now create a custom initializer for your view that uses `NSFetchRequest` to build the exact request you want. Once you’re ready, you can put that into a regular `FetchRequest` and assign it directly to your property.

For example, if we wanted to read the first 10 programming languages without any sorting or filtering, we would use this:

```swift
init() {
    let request: NSFetchRequest<ProgrammingLanguage> = ProgrammingLanguage.fetchRequest()
    request.fetchLimit = 10

    _languages = FetchRequest(fetchRequest: request)
}
```

Or if we wanted to have filtering, sorting, <em>and</em> row limiting we can do that too:

```swift
init() {
    let request: NSFetchRequest<ProgrammingLanguage> = ProgrammingLanguage.fetchRequest()
    request.predicate = NSPredicate(format: "active = true")

    request.sortDescriptors = [
        NSSortDescriptor(keyPath: \ProgrammingLanguage.name, ascending: true)
    ]

    request.fetchLimit = 10
    _languages = FetchRequest(fetchRequest: request)
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a Core Data fetch request using @FetchRequest | SwiftUI by Example",
  "desc": "How to create a Core Data fetch request using @FetchRequest",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-core-data-fetch-request-using-fetchrequest.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to filter Core Data fetch requests using a predicate | SwiftUI by Example",
  "desc": "How to filter Core Data fetch requests using a predicate",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-filter-core-data-fetch-requests-using-a-predicate.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a badge to TabView items and List rows | SwiftUI by Example",
  "desc": "How to add a badge to TabView items and List rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-badge-to-tabview-items-and-list-rows.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Adding items to an order with @EnvironmentObject | SwiftUI by Example",
  "desc": "Adding items to an order with @EnvironmentObject",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/adding-items-to-an-order-with-environmentobject.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add bar items to a navigation view | SwiftUI by Example",
  "desc": "How to add bar items to a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-bar-items-to-a-navigation-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />