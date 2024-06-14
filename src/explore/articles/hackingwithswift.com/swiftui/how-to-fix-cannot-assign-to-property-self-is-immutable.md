---
lang: ko-KR
title: "How to fix “Cannot assign to property: 'self' is immutable”"
description: "Article(s) > How to fix “Cannot assign to property: 'self' is immutable”"
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
      content: "Article(s) > How to fix “Cannot assign to property: 'self' is immutable”"
    - property: og:description
      content: "How to fix “Cannot assign to property: 'self' is immutable”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-assign-to-property-self-is-immutable.html
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
  "title": "How to fix “Cannot assign to property: 'self' is immutable” | SwiftUI by Example",
  "desc": "How to fix “Cannot assign to property: 'self' is immutable”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-cannot-assign-to-property-self-is-immutable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s views should be structs, which means they are immutable by default. If this were our own code we could mark methods using `mutating` to tell Swift they will change values, but we can’t do that in SwiftUI because it uses a computed property.

If you want to change a property’s value while your program runs, you should mark it using `@State`, like this:

```swift
@State private var runCount = 0
```

For more complex properties, such as reference types or values that are shared across multiple views, you should use `@StateObject`, `@ObservedObject` or `@EnvironmentObject` instead.

::: details Similar solutions…

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Text'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Text'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type.md",
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

```component VPCard  
{
  "title": "How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type” | SwiftUI by Example",
  "desc": "How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />
