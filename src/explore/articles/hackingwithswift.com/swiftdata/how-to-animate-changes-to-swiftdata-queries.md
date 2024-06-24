---
lang: ko-KR
title: How to animate changes to SwiftData queries
description: Article(s) > How to animate changes to SwiftData queries
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
      content: Article(s) > How to animate changes to SwiftData queries
    - property: og:description
      content: How to animate changes to SwiftData queries
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-animate-changes-to-swiftdata-queries.html
date: 2023-09-26
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
  "title": "How to animate changes to SwiftData queries | SwiftData by Example",
  "desc": "How to animate changes to SwiftData queries",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-animate-changes-to-swiftdata-queries", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData's `@Query` macro comes with a built-in `animation` parameter, which can be used by itself or alongside other options such as sorting and filtering. If you don't specify any animation then changes to your query will appear immediately, but if you want them to animate smoothly then specify any other value.

For example, if we had a `User` model with results being shown in a SwiftUI `List`, we could make those changes slide into position correctly like so:

```swift
@Query(sort: \User.age, animation: .default) var users: [User]
```

Exactly what animation happens depends on how your data is changing and what platform your code is running on. For example, rows you're adding might fade in, rows you're deleting might fade out, and other rows might slide to their new location.

Things are slightly trickier if you want *conditional* animations – if you want to animate some changes but not others. Here you might find it easier to apply the `animation()` modifier to your list rather than to your `@Query` property, like this:

```swift
.animation(.default, value: users)
```

With this approach you can at least adjust the animation dynamically based on other properties, like so:

```swift
.animation(isLoaded ? .default : nil, value: users)
```

It might seem like this latter approach is going to be more CPU-intensive because of the `Equatable` check, but I haven't found much difference between the two even with tens of thousands of objects.


---

<TagLinks />    