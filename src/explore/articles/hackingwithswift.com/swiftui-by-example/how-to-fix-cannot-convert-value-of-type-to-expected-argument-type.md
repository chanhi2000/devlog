---
lang: ko-KR
title: How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'”
description: Article(s) > How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'”
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
      content: Article(s) > How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'”
    - property: og:description
      content: How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type.html
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
  "title": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

This rather confusing error message usually happens because you created a container but forgot to include some content inside it – you were probably just experimenting, and wrote code like this:

```swift
VStack {

}
```

If you just want a placeholder while you’re working on something else, use an `EmptyView` to keep the compiler happy, like this:

```swift
VStack {
    EmptyView()
}
```

::: details Similar solutions…

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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