---
lang: ko-KR
title: "How to group arrays using dictionaries"
description: "Article(s) > How to group arrays using dictionaries"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to group arrays using dictionaries"
    - property: og:description
      content: "How to group arrays using dictionaries"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-group-arrays-using-dictionaries.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to group arrays using dictionaries | Language - free Swift example code",
  "desc": "How to group arrays using dictionaries",
  "link": "https://hackingwithswift.com/example-code/language/how-to-group-arrays-using-dictionaries",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you have an array of items and want to group them according to some criteria, Swift has a special dictionary initializer just for you.

Here’s an example sequence we can work with:

```swift
let singers = ["Ed Sheeran", "Ariana Grande", "Taylor Swift", "Adele Adkins"]
```

We can now create a dictionary that groups those singers together by the length of their names:

```swift
let groupedByLength = Dictionary(grouping: singers) { $0.count }
```

That will put Taylor and Adele into an array under the “12” key, Ariana under 13, and Ed under 10.

Alternatively, we could group them by the first letters of each of their names:

```swift
let groupedByFirst = Dictionary(grouping: singers) { $0.first! }
```

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-create-a-task-group-and-add-tasks-to-it">How to create a task group and add tasks to it 
/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group 
/quick-start/concurrency/how-to-cancel-a-task-group">How to cancel a task group 
/example-code/system/how-to-group-user-notifications-using-threadidentifier-and-summaryargument">How to group user notifications using threadIdentifier and summaryArgument 
/quick-start/swiftui/how-to-group-views-together">How to group views together</a>
-->

:::

---

<TagLinks />