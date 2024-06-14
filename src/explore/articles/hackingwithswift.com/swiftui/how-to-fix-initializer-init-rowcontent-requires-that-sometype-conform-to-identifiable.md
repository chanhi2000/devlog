---
lang: ko-KR
title: How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”
description: Article(s) > How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”
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
      content: Article(s) > How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”
    - property: og:description
      content: How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable.html
date: 2022-12-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'” | SwiftUI by Example",
  "desc": "How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

There are three common reasons this error occurs, and all are relatively easy to fix.

The first reason is using a `List` or `ForEach` like this:

```swift
ForEach(1...10) {
```

SwiftUI supports the half-open range operator, `..<`, but not the closed range operator. As a result, you need to rewrite the above code to this:

```swift
ForEach(0..<10) {
```

The second reason is using a `List` or `ForEach` on primitive types that don’t conform to the `Identifiable` protocol, such as an array of strings or integers. In this situation, you should use `id: \.self` as the second parameter to your `List` or `ForEach`, like this:

```swift
ForEach(stringArray, id: \.self) {
```

That tells SwiftUI that each value in the array is unique, and so can be used to identify each item in the loop.

The final reason its happens is if you’re looping over an array of custom structs that don’t conform to `Identifiable`. Here you should add either add a conformance to that protocol (which means adding an `id` property that is unique), or use `id: \.someUniquePropertyName` as the second parameter to your `List` or `ForEach`, which uses that property instead of the ID.

For example:

```swift
struct User: Identifiable {
    let id = UUID()
    let username: String
}
```

If you were looping over an array of those `User` objects and wanted to identify them uniquely by their username, you’d use this:

```swift
ForEach(users, id: \.username) {
```

::: details Similar solutions…

```component VPCard  
{
  "title": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'” | SwiftUI by Example",
  "desc": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Fatal error: No ObservableObject of type SomeType found” | SwiftUI by Example",
  "desc": "How to fix “Fatal error: No ObservableObject of type SomeType found”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-fatal-error-no-observableobject-of-type-sometype-found.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type” | SwiftUI by Example",
  "desc": "How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Modifying state during view update, this will cause undefined behavior” | SwiftUI by Example",
  "desc": "How to fix “Modifying state during view update, this will cause undefined behavior”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” | SwiftUI by Example",
  "desc": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />