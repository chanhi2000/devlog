---
lang: ko-KR
title: How to create a Core Data fetch request using @FetchRequest
description: Article(s) > How to create a Core Data fetch request using @FetchRequest
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
      content: Article(s) > How to create a Core Data fetch request using @FetchRequest
    - property: og:description
      content: How to create a Core Data fetch request using @FetchRequest
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-core-data-fetch-request-using-fetchrequest.html
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
  "title": "How to create a Core Data fetch request using @FetchRequest | SwiftUI by Example",
  "desc": "How to create a Core Data fetch request using @FetchRequest",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-core-data-fetch-request-using-fetchrequest",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Fetch requests allow us to load Core Data results that match specific criteria we specify, and SwiftUI can bind those results directly to user interface elements.

If you followed my [Core Data and SwiftUI set up instructions](/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-configure-core-data-to-work-with-swiftui.md), you’ve already injected your managed object context into the SwiftUI environment. 

**That step is required.** I know, you just want to know how to run a Core Data fetch request and show data inside a SwiftUI list, but if you don’t follow the steps in the link above then using `@FetchRequest` will crash at runtime because SwiftUI expects that setup to have been done.

Once your managed object context is attached to the environment under the `.managedObjectContext` key, you can use the `@FetchRequest` property wrapper to make properties in your views that create and manage Core Data fetch requests automatically.

Creating a fetch request requires two pieces of information: the entity you want to query, and a sort descriptor that determines the order in which results are returned. In my example setup we created a ProgrammingLanguages entity that had name and creator attributes, so we could create a fetch request for it like this:

```swift
@FetchRequest(sortDescriptors: [SortDescriptor(\.name)]) var languages: FetchedResults<ProgrammingLanguage>
```

That loads all programming languages, sorted alphabetically by their name. 

As you can see, the `sortDescriptors` parameter is an array, so you can provide as many sorting options as you need like this:

```swift
@FetchRequest(sortDescriptors: [SortDescriptor(\.name), SortDescriptor(\.creator, order: .reverse)]) var languages: FetchedResults<ProgrammingLanguage>
```

Yes, that’s a massive line of code, so I wouldn’t blame you if you broke it up into something a little easier to read:

```swift
@FetchRequest(sortDescriptors: [
    SortDescriptor(\.name),
    SortDescriptor(\.creator, order: .reverse)
]) var languages: FetchedResults<ProgrammingLanguage>
```

Regardless of how you create your fetch request, the results can be used directly inside SwiftUI views. For example, we could show a table of all languages like this:

```swift
List(languages) { language in
    Text(language.name ?? "Unknown")
}
```

![A list showing several Example Languages.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-core-data-fetch-request-using-fetchrequest-1~dark@2x.png)

::: details Similar solutions…

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
  "title": "How to filter Core Data fetch requests using a predicate | SwiftUI by Example",
  "desc": "How to filter Core Data fetch requests using a predicate",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-filter-core-data-fetch-requests-using-a-predicate.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @FetchRequest property wrapper? | SwiftUI by Example",
  "desc": "What is the @FetchRequest property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-fetchrequest-property-wrapper.md",
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