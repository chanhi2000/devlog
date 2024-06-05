---
lang: ko-KR
title: How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”
description: Article(s) > How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”
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
      content: Article(s) > How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”
    - property: og:description
      content: How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.html
date: 2022-12-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” | SwiftUI by Example",
  "desc": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

This is a particularly confusing problem, and it occurs because SwiftUI relies heavily on opaque return types. The problem happens because of code like this:

```swift
struct ContentView: View {
    var body: View {
        Text("SwiftUI")
    }
}
```

It feels like such a tiny thing, but the `body` property is declared as returning `View` rather than `some View`. The difference is small but important – you can find out more about it in my article [How to use opaque return types in Swift 5.1](https://www.hackingwithswift.com/quick-start/swiftui/how-to-use-opaque-return-types-in-swift-5-1). <!-- NOTE: broken link -->

So, to fix the problem use this instead:

```swift
struct ContentView: View {
  var body: some View {
    Text("SwiftUI")
  }
}
```

::: details Similar solutions…

```component VPCard  
{
  "title": "How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type” | SwiftUI by Example",
  "desc": "How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type” | SwiftUI by Example",
  "desc": "How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-type.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Cannot assign to property: 'self' is immutable” | SwiftUI by Example",
  "desc": "How to fix “Cannot assign to property: 'self' is immutable”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-assign-to-property-self-is-immutable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to clip a view so only part is visible | SwiftUI by Example",
  "desc": "How to clip a view so only part is visible",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-clip-a-view-so-only-part-is-visible.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />