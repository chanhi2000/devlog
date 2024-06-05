---
lang: ko-KR
title: How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”
description: Article(s) > How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”
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
      content: Article(s) > How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”
    - property: og:description
      content: How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject.html
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
  "title": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'” | SwiftUI by Example",
  "desc": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

This error happens because you’re trying to use the `@ObservedObject` property wrapper on a type that doesn’t conform to the `ObservableObject` protocol.
For example, you have a type like this:

```swift
class User {
    @Published var name = ""
}
```

And you use it in a view like this:

```swift
struct ContentView: View {
    @ObservedObject var user: User

    var body: some View {
        Text(user.name)
    }
}
```

To fix the problem, simply add the `ObservableObject` conformance to your type, like this:

```swift
class User: ObservableObject {
    @Published var name = ""
}
```

::: details Similar solutions…

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
  "title": "How to fix “Fatal error: No ObservableObject of type SomeType found” | SwiftUI by Example",
  "desc": "How to fix “Fatal error: No ObservableObject of type SomeType found”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-fatal-error-no-observableobject-of-type-sometype-found.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ObservedObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @ObservedObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-observedobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @ObservedObject to manage state from external objects | SwiftUI by Example",
  "desc": "How to use @ObservedObject to manage state from external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-observedobject-to-manage-state-from-external-objects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />