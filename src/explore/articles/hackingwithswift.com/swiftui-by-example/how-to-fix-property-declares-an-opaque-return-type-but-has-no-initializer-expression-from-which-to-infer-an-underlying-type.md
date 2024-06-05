---
lang: ko-KR
title: How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”
description: Article(s) > How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”
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
      content: Article(s) > How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”
    - property: og:description
      content: How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type.html
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
  "title": "How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type” | SwiftUI by Example",
  "desc": "How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

This usually happens because you accidentally created a view without filling in its contents, like this:

```swift
struct DetailView: View {
    var body: some View {

    }
}
```

If you created that view as a placeholder, just give it so temporary content to make the compiler happy, like this:

```swift
struct DetailView: View {
    var body: some View {
        Text("Placeholder")
    }
}
```

::: details Similar solutions…

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
  "title": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'” | SwiftUI by Example",
  "desc": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
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
  "title": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” | SwiftUI by Example",
  "desc": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />