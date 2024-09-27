---
lang: ko-KR
title: "How to add raw values to enums"
description: "Article(s) > How to add raw values to enums"
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
      content: "Article(s) > How to add raw values to enums"
    - property: og:description
      content: "How to add raw values to enums"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-add-raw-values-to-enums.html
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
  "title": "How to add raw values to enums | Language - free Swift example code",
  "desc": "How to add raw values to enums",
  "link": "https://hackingwithswift.com/example-code/language/how-to-add-raw-values-to-enums",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Raw values for enums are primitive values that sit behind each case. For example, you might create an enum for the planets in our solar system, and want to refer to each planet by a number as well as its name:

```swift
enum Planets: Int {
    case mercury
    case venus
    case earth
    case mars
} 
```

Swift will assign each case a raw integer value, starting from 0 and counting up. You can then use this to load and save the enum, or perhaps transfer it over the network.

You can provide custom raw values for any or all of your cases, and Swift will fill in the rest. For example, if we wanted `mercury` to be planet number 1, `venus` to be number 2, and so on, we could do this:

```swift
enum Planets: Int {
    case mercury = 1
    case venus
    case earth
    case mars
}
```

That will cause Swift to count upwards from 1.

If your raw value type is `String`, Swift will automatically create strings from each case name.

So, this:

```swift
enum Planets: String {
    case mercury
    case venus
    case earth
    case mars
}
```

Is equivalent to this:

```swift
enum Planets: String {
    case mercury = "mercury"
    case venus = "venus"
    case earth = "earth"
    case mars = "mars"
}
```

Finally, you can create enums from their raw value, but you get back an *optional* enum because your raw value might not match any of the available cases. For example, given our original `Planets` enum with integer raw values starting from 0, this would create an optional `Planet` pointing at Venus:

```swift
let venus = Planets(rawValue: 1)
```

-->

::: details Similar solutions…

<!--
/example-code/strings/how-do-you-make-raw-strings-in-swift">How do you make raw strings in Swift? 
/example-code/language/how-to-add-associated-values-to-enums">How to add associated values to enums 
/example-code/language/what-are-indirect-enums">What are indirect enums? 
/quick-start/concurrency/how-to-create-and-use-task-local-values">How to create and use task local values 
/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a>
-->

:::

---

<TagLinks />