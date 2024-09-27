---
lang: ko-KR
title: "How to use #available to check for API availability"
description: "Article(s) > How to use #available to check for API availability"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use #available to check for API availability"
    - property: og:description
      content: "How to use #available to check for API availability"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-available-to-check-for-api-availability.html
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
  "title": "How to use #available to check for API availability | Language - free Swift example code",
  "desc": "How to use #available to check for API availability",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-available-to-check-for-api-availability",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
One of my favorite Xcode features is the ability to have Xcode automatically check API availability for you, which means it will refuse to run code that is not available on the minimum iOS version you support.

Of course, there are times when you really do need to use a newer feature, for example if you want to use `UIStackView` where it's available but otherwise show a message to users asking them to upgrade. For this, Swift has `#available`, which lets you state that a certain block of code should only execute on specific versions of iOS.

To use the previous example, this code checks whether the user has iOS 9.0 or later on their device:

```swift
if #available(iOS 9, *) {
    // use UIStackView
} else {
    // show sad face emoji
}
```

Any code inside the `// use UIStackView` block can be executed as if your deployment target were iOS 9.0.

If you want, you can mark whole functions or classes as requiring a specific iOS version by using `@available`, like this:

```swift
@available(iOS 9, *)
func useStackView() {
    // use UIStackView
}
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport() 
/example-code/language/how-to-use-available-to-deprecate-old-apis">How to use @available to deprecate old APIs 
/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth() 
/quick-start/swiftui/how-to-tell-the-user-that-no-content-is-available">How to tell the user that no content is available 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a>
-->

:::

---

<TagLinks />