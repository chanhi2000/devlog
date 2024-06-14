---
lang: ko-KR
title: How to fix “Missing argument for parameter 'content' in call”
description: Article(s) > How to fix “Missing argument for parameter 'content' in call”
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
      content: Article(s) > How to fix “Missing argument for parameter 'content' in call”
    - property: og:description
      content: How to fix “Missing argument for parameter 'content' in call”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-fix-missing-argument-for-parameter-content-in-call.html
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
  "title": "How to fix “Missing argument for parameter 'content' in call” | SwiftUI by Example",
  "desc": "How to fix “Missing argument for parameter 'content' in call”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-missing-argument-for-parameter-content-in-call",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

This error usually comes up because you created the wrong kind of view by accident, and rather than using a simple view instead created a container that expected some content inside it.

Try looking for code like this:

```swift
VStack()
```

`VStack` expects to have something inside it, so at the very least that ought to read as follows:

```swift
VStack {
    EmptyView()
}
```

::: details Similar solutions…

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
  "title": "How to indent the content or scroll indicators in a ScrollView | SwiftUI by Example",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to inset the safe area with custom content | SwiftUI by Example",
  "desc": "How to inset the safe area with custom content",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-inset-the-safe-area-with-custom-content.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />