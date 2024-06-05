---
lang: ko-KR
title: "How to fix “Fatal error: No ObservableObject of type SomeType found”"
description: "Article(s) > How to fix “Fatal error: No ObservableObject of type SomeType found”"
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
      content: "Article(s) > How to fix “Fatal error: No ObservableObject of type SomeType found”"
    - property: og:description
      content: "How to fix “Fatal error: No ObservableObject of type SomeType found”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-fatal-error-no-observableobject-of-type-sometype-found.html
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
  "title": "How to fix “Fatal error: No ObservableObject of type SomeType found” | SwiftUI by Example",
  "desc": "How to fix “Fatal error: No ObservableObject of type SomeType found”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-fatal-error-no-observableobject-of-type-sometype-found",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When you’re using environment objects, SwiftUI automatically connects your properties by scanning the environment for matching types. So, if you have an environment property of type `User`, SwiftUI expects to find an instance of that class in the environment before it is used.

This error occurs because no matching object could be found, which is usually a result of you forgetting to put it into the environment, or putting it into the *wrong* environment. Remember, you can have multiple environments active in your SwiftUI app: you might have individual environments for each of the tabs in a `TabView` for example.

To fix the problem, make sure the view that causes the crash has the correct environment set, like this:

```swift
YourView().environmentObject(yourEnvironmentObject)
```

::: details Similar solutions…

```component VPCard  
{
  "title": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'” | SwiftUI by Example",
  "desc": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'” | SwiftUI by Example",
  "desc": "How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type” | SwiftUI by Example",
  "desc": "How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-type.md",
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

:::

---

<TagLinks />