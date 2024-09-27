---
lang: ko-KR
title: "How to create a custom OptionSet"
description: "Article(s) > How to create a custom OptionSet"
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
      content: "Article(s) > How to create a custom OptionSet"
    - property: og:description
      content: "How to create a custom OptionSet"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-a-custom-optionset.html
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
  "title": "How to create a custom OptionSet | Language - free Swift example code",
  "desc": "How to create a custom OptionSet",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-a-custom-optionset",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Option sets are similar to enums, but they are designed to work as a set so you can use more than one at a time. For example, when using the `range(of:)` method of a string, you can specify `.caseInsensitive` to have the search ignore case, you can specify `.backwards` to have the search start from the end of the string, or you can combine the two:

```swift
let string = "The rain in Spain"
let range = string.range(of: "rain", options: [.caseInsensitive, .backwards])
```

That searches through the string backwards and ignoring case – we provided both options at the same time. This functionality looks like an enum, but it can also be treated as an array; Swift figures it out for you.

You can write your own by making a custom struct that conforms to the `OptionSet` protocol, and it doesn’t take much:

1. Create a constant describing what the underlying value is – it’s normally an integer, but you need to be specific. 
<li>Make static instances of your struct for each option you want to represent.
<li>Each of those should have a unique raw value, so its common to use bit-shifting to avoid mistakes.
<li>Add any groups of those instances as new statics.

To demonstrate this, let’s create a `UserRoles` struct that defines roles a user might have in a GitHub account: they can create things, destroy things, and get the status of things.

All three of those roles need unique raw values, so we’re going to use bit shifting – `1 << 0`, `1 << 1`, and so on – to make that clear.

Here’s how it looks in Swift:

```swift
struct UserRoles: OptionSet {
    let rawValue: Int

    static let status = UserRoles(rawValue: 1 << 0)
    static let create = UserRoles(rawValue: 1 << 1)
    static let destroy = UserRoles(rawValue: 1 << 2)
    static let all: UserRoles = [.status, .create, .destroy]
}
```

You can now use any of those roles by themselves or in an array:

```swift
let roles1: UserRoles = [.create]
let roles2: UserRoles = [.create, .destroy]
let roles3: UserRoles = [.create, .destroy, .status]
let roles4 = UserRoles.all
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-create-and-compose-custom-views">How to create and compose custom views 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-create-a-custom-transition">How to create a custom transition 
/quick-start/swiftui/how-to-create-custom-animated-drawings-with-timelineview-and-canvas">How to create custom animated drawings with TimelineView and Canvas 
/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics">How to play custom vibrations using Core Haptics</a>
-->

:::

---

<TagLinks />