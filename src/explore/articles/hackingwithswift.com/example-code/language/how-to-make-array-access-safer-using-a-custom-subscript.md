---
lang: ko-KR
title: "How to make array access safer using a custom subscript"
description: "Article(s) > How to make array access safer using a custom subscript"
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
      content: "Article(s) > How to make array access safer using a custom subscript"
    - property: og:description
      content: "How to make array access safer using a custom subscript"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-make-array-access-safer-using-a-custom-subscript.html
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
  "title": "How to make array access safer using a custom subscript | Language - free Swift example code",
  "desc": "How to make array access safer using a custom subscript",
  "link": "https://hackingwithswift.com/example-code/language/how-to-make-array-access-safer-using-a-custom-subscript",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift likes to be safe, but one problematic area can be reading from arrays and dictionaries. In the case of dictionaries, reading a missing key will return `nil` rather than the value you might have expected, but in the case of *arrays* it’s worse: your app will crash.

Dictionaries have a special subscript method that can send back a default value if you request a missing key, but arrays don’t. Fortunately, we can fix that using Swift’s extensions:

```swift
extension Array {
    public subscript(index: Int, default defaultValue: @autoclosure () -> Element) -> Element {
        guard index >= 0, index < endIndex else {
            return defaultValue()
        }

        return self[index]
    }
}
```

That uses `@autoclosure()` so your default value can be calculated however you need without incurring a performance hit in times when you use a valid array index.

With that extension in place you can now create and use arrays as usual:

```swift
var names = ["Paul"]
let paul = names[0]
```

But if you want, you can now also read any index using the new subscript and be sure to get back a safe value:

```swift
let anon1 = names[-1, default: "Anonymous"]
let anon2 = names[1, default: "Anonymous"]
let anon3 = names[556, default: "Anonymous"]
```

Alternatively, you could write a `safeIndex` subscript that returns an optional value – `nil` if the index is out of bounds, or the value in question otherwise:

```swift
extension Array {
    public subscript(safeIndex index: Int) -> Element? {
        guard index >= 0, index < endIndex else {
            return nil
        }

        return self[index]
    }
}
```

Both solutions have their uses, so try experimenting and see which works best for you.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access">How to make SwiftUI modifiers safer to use with @warn_unqualified_access 
/quick-start/swiftui/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view">How to access a Core Data managed object context from a SwiftUI view 
/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access">How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access” 
/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup">How to handle unknown properties and methods using @dynamicMemberLookup 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />