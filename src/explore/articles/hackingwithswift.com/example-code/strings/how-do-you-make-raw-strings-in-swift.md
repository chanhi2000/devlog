---
lang: ko-KR
title: "How do you make raw strings in Swift?"
description: "Article(s) > How do you make raw strings in Swift?"
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
      content: "Article(s) > How do you make raw strings in Swift?"
    - property: og:description
      content: "How do you make raw strings in Swift?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-do-you-make-raw-strings-in-swift.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How do you make raw strings in Swift? | Strings - free Swift example code",
  "desc": "How do you make raw strings in Swift?",
  "link": "https://hackingwithswift.com/example-code/strings/how-do-you-make-raw-strings-in-swift",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Raw strings place hash signs – `#` – before and after their quote mark, and modify the way Swift handles strings in two ways.

First, a string that starts with `#"` must *end* with a `"#`, which means any quote marks inside the string are ignored:

```swift
let string1 = #"The rain in "Spain" falls mainly on the Spaniards"#
```

Second, any escape sequences – things that start with `\` – now have their regular meaning. So, this will print one line of text:

```swift
let string2 = #"The rain\nin Spain\nfalls mainly\non the Spaniards"#
```

With a regular Swift string the instances of `\n` would have been interpreted as line breaks.

If you want to use escape characters, for example if you want to use string interpolation, you must use `\#(yourValue)`, like this:

```swift
let name = "Duane Dibbley"
print(#"Hello! My name is \#(name)."#)
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />