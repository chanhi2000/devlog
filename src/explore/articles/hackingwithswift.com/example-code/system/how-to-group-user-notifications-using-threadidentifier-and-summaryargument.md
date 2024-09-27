---
lang: ko-KR
title: "How to group user notifications using threadIdentifier and summaryArgument"
description: "Article(s) > How to group user notifications using threadIdentifier and summaryArgument"
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
  - ios-12.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to group user notifications using threadIdentifier and summaryArgument"
    - property: og:description
      content: "How to group user notifications using threadIdentifier and summaryArgument"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-group-user-notifications-using-threadidentifier-and-summaryargument.html
date: 2019-11-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to group user notifications using threadIdentifier and summaryArgument | System - free Swift example code",
  "desc": "How to group user notifications using threadIdentifier and summaryArgument",
  "link": "https://hackingwithswift.com/example-code/how-to-group-user-notifications-using-threadidentifier-and-summaryargument",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 12.0

<!-- TODO: 작성 -->

<!-- 
If your app shows notifications that can be split into sensible groups – such as messages from a person, updates for a news story, scores from a sports match, and so on on – you can have iOS group them together using the `threadIdentifier` and `summaryArgument` properties of `UNMutableNotificationContent`. iOS will then show those messages together, rather than in a long chain mixed up with other messages.

For example, you might write code like this:

```swift
let content = UNMutableNotificationContent()
content.title = reminder.title
content.threadIdentifier = "F39-C521-A7A"
```

The “F39-C521-A7A” part is a free text string – it won’t be shown to users, but it’s what allows iOS to group things together so it should be unique enough that you don’t get message crossover. If you were building a messaging app you might use the user’s unique identifier for your notification rather than their name, to avoid two messages from different people called Andrew being grouped together.

If you want to customize this further, you can also set the `summaryArgument` property of your notification content. This is a string that *is* shown to users, so you might write something like this:

```swift
content.summaryArgument = messageSender.name
```

That will make iOS write something “5 more alerts from Andrew” in small text underneath the alert, which helps make it clear to users which reminder group that alert belongs to.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />