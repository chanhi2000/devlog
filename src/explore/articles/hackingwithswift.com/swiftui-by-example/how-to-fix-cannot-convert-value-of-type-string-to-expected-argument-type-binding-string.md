---
lang: ko-KR
title: How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”
description: Article(s) > How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”
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
      content: Article(s) > How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”
    - property: og:description
      content: How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string.html
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
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s components expect to have two-way bindings to properties, using something like `@State` or `@ObservedObject`. This error occurs because you tried to create an interactive component *without* a binding, such as this:

```swift
TextField("Enter your name", text: name)
```

To fix the problem, make sure your property is marked with `@State`, like this:

```swift
@State private var name = ""
```

Now create your component using a two-way binding, like this:

```swift
TextField("Enter your name", text: $name)
```

::: details Similar solutions…

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Text'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Text'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type.md",
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
  "title": "How to fix “Missing argument for parameter 'content' in call” | SwiftUI by Example",
  "desc": "How to fix “Missing argument for parameter 'content' in call”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-missing-argument-for-parameter-content-in-call.md",
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

:::

---

<TagLinks />