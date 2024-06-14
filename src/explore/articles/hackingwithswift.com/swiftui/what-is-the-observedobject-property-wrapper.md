---
lang: ko-KR
title: What is the @ObservedObject property wrapper?
description: Article(s) > What is the @ObservedObject property wrapper?
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
      content: Article(s) > What is the @ObservedObject property wrapper?
    - property: og:description
      content: What is the @ObservedObject property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.html
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
  "title": "What is the @ObservedObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @ObservedObject property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-observedobject-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us the `@ObservedObject` property wrapper so that views can watch the state of an external object, and be notified when something important has changed. It is similar in behavior to `@StateObject`, except it must *not* be used to create objects – use `@ObservedObject` only with objects that have been created elsewhere, otherwise SwiftUI might accidentally destroy the object.

For example, we might use something like this:

```swift
class Order: ObservableObject {
    @Published var items = [String]()
}

struct ContentView: View {
    @ObservedObject var order: Order

    var body: some View {
        // your code here
    }
}
```

That `Order` class uses `@Published` so it will automatically send change announcements when `items` changes, and `ContentView` uses `@ObservedObject` to watch for those announcements. Without `@ObservedObject` the change announcements would be sent but ignored.

Although that looks straightforward enough, it’s worth digging into a few specifics.

First, any type you mark with `@ObservedObject` must conform to the `ObservableObject` protocol, which in turn means it must be a class rather than a struct. This isn’t optional – SwiftUI requires us to use a class here.

Second, observed objects are specifically designed for data that is external to your view, which means it might be shared across more than one view. The `@ObservedObject` property wrapper will automatically make sure the property is watched closely so that important changes will reload any views using it. This also means the data must be created elsewhere, then sent in to your view.

Third, not all properties in an observed object cause views to refresh – you need to decide which properties should send change notifications, either using `@Published` or custom announcements. Types that conform to `ObservableObject` are given a default `objectWillChange` publisher to make custom announcements as needed.

::: details Similar solutions…

```component VPCard
{
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @ObservedObject to manage state from external objects | SwiftUI by Example",
  "desc": "How to use @ObservedObject to manage state from external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'” | SwiftUI by Example",
  "desc": "How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @EnvironmentObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @EnvironmentObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-environmentobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @StateObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @StateObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-stateobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />