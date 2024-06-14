---
lang: ko-KR
title: How to fix “Cannot convert value of type 'String' to expected argument type 'Text'”
description: Article(s) > How to fix “Cannot convert value of type 'String' to expected argument type 'Text'”
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
      content: Article(s) > How to fix “Cannot convert value of type 'String' to expected argument type 'Text'”
    - property: og:description
      content: How to fix “Cannot convert value of type 'String' to expected argument type 'Text'”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text.html
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
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Text'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Text'”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

This is a really common error, and happens because you tried to use a string where SwiftUI expects to have a `Text` view. As a simple example, it means creating an alert like this:

```swift
Alert(title: "Meh")
```

There are many places where SwiftUI wants to have a `Text` view rather than a plain string, so just wrap your strings in text like this:

```swift
Alert(title: Text("Meh"))
```

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
  "title": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Cannot assign to property: 'self' is immutable” | SwiftUI by Example",
  "desc": "How to fix “Cannot assign to property: 'self' is immutable”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-assign-to-property-self-is-immutable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Missing argument for parameter 'content' in call” | SwiftUI by Example",
  "desc": "How to fix “Missing argument for parameter 'content' in call”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-missing-argument-for-parameter-content-in-call.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to format text inside text views | SwiftUI by Example",
  "desc": "How to format text inside text views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-format-text-inside-text-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />