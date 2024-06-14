---
lang: ko-KR
title: How to fix “Ambiguous reference to member 'buildBlock()'”
description: Article(s) > How to fix “Ambiguous reference to member 'buildBlock()'”
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
      content: Article(s) > How to fix “Ambiguous reference to member 'buildBlock()'”
    - property: og:description
      content: How to fix “Ambiguous reference to member 'buildBlock()'”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock.html
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
  "title": "How to fix “Ambiguous reference to member 'buildBlock()'” | SwiftUI by Example",
  "desc": "How to fix “Ambiguous reference to member 'buildBlock()'”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI allows up to 10 static children in each container, so if you try to add 11 or more you’ll get this error. To be clear, this means the following code is valid:

```swift
VStack {
    Text("SwiftUI")
    Text("SwiftUI")
    Text("SwiftUI")
    Text("SwiftUI")
    Text("SwiftUI")
    Text("SwiftUI")
    Text("SwiftUI")
    Text("SwiftUI")
    Text("SwiftUI")
    Text("SwiftUI")
}
```

But if you add a single more `Text("SwiftUI")` then the code will refuse to build.

To fix this problem, wrap your items in groups of 10 or fewer, like this:

```swift
VStack {
    Group {
        Text("SwiftUI")
        Text("SwiftUI")
        Text("SwiftUI")
        Text("SwiftUI")
        Text("SwiftUI")
        Text("SwiftUI")
    }

    Group {
        Text("SwiftUI")
        Text("SwiftUI")
        Text("SwiftUI")
        Text("SwiftUI")
        Text("SwiftUI")
    }
}
```

::: details Similar solutions…

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
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />