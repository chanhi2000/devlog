---
lang: ko-KR
title: "How to use @available to deprecate old APIs"
description: "Article(s) > How to use @available to deprecate old APIs"
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
      content: "Article(s) > How to use @available to deprecate old APIs"
    - property: og:description
      content: "How to use @available to deprecate old APIs"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-available-to-deprecate-old-apis.html
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
  "title": "How to use @available to deprecate old APIs | Language - free Swift example code",
  "desc": "How to use @available to deprecate old APIs",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-available-to-deprecate-old-apis",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<a href="/example-code/language/how-to-use-available-to-check-for-api-availability">Swift availability checking</a> is most commonly used to mark sections of code that should target specific versions of iOS or other platforms. However, it’s also useful when you make Swift APIs for others to use, because you can use it to mark certain calls as deprecated or even obsoleted as needed.

Let’s start with a simple example: if you have a function that used to parse some data, but now you want users to stop calling it. To do that, use `@available` with the `deprecated` flag, passing in the message you want to show:

```swift
@available(*, deprecated, message: "Parse your data by hand instead")
func parseData() { }
```

If you are *renaming* the API – for example the way one usage of `flatMap()` became `compactMap()` in Swift 4.1 – you can pass the new function name to the `renamed` flag like this:

```swift
@available(*, deprecated, renamed: "loadData")
func fetchData() { }
```

This will cause Xcode to generate a fix-it automatically – users can click Fix to have Xcode perform the rename for them.

Deprecated APIs generate warnings but can still be called. If you want to *obsolete* an API – stop it from being called entirely – you should use the `obsoleted` flag instead, specifying the minimum Swift version where it is no longer available:

```swift
@available(swift, obsoleted: 4.1, renamed: "attemptConnection")
func testConnection() { }
```

You can even combine `deprecated` and `obsoleted` together if you want:

```swift
@available(swift, deprecated: 4.0, obsoleted: 5.0, message: "This will be removed in v5.0; please migrate to a different API.")
```

Finally, there’s an `introduced` flag that lets you control when specific API was introduced, like this:

```swift
@available(swift, introduced: 4.2)
func loadUsers() { }
```

Using `@available` in this way lets your APIs behave just like Apple’s own – Xcode will draw red lines through deprecated methods, issue compile warnings and errors, and even automatically generate fix-its as needed.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport() 
/example-code/language/how-to-use-available-to-check-for-api-availability">How to use #available to check for API availability 
/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth() 
/quick-start/swiftui/how-to-tell-the-user-that-no-content-is-available">How to tell the user that no content is available 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a>
-->

:::

---

<TagLinks />