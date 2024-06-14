---
lang: ko-KR
title: What is the @Published property wrapper?
description: Article(s) > What is the @Published property wrapper?
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
      content: Article(s) > What is the @Published property wrapper?
    - property: og:description
      content: What is the @Published property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/what-is-the-published-property-wrapper.html
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
  "title": "What is the @Published property wrapper? | SwiftUI by Example",
  "desc": "What is the @Published property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-published-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

`@Published` is one of the most useful property wrappers in SwiftUI, allowing us to create observable objects that automatically announce when changes occur. SwiftUI will automatically monitor for such changes, and re-invoke the `body` property of any views that rely on the data.

In practical terms, that means whenever an object with a property marked `@Published` is changed, all views using that object will be reloaded to reflect those changes.

For example, if we have an observable object such as this one:

```swift
class Bag: ObservableObject {
    var items = [String]()
}
```

That conforms to the `ObservableObject` protocol, which means SwiftUI’s views can watch it for changes. But because its only property isn’t marked with `@Published`, no change announcements will ever be sent – you can add items to the array freely and no views will update.

If you wanted change announcements to be sent whenever something was added or removed from `items`, you would mark it with `@Published`, like this:

```swift
class Bag: ObservableObject {
    @Published var items = [String]()
}
```

You don’t need to do anything else – the `@Published` property wrapper effectively adds a `willSet` property observer to `items`, so that any changes are automatically sent out to observers.

As you can see, `@Published` is *opt-in* – you need to list which properties should cause announcements, because the default is that changes don’t cause reloads. This means you can have properties that store caches, properties for internal use, and more, and they won’t force SwiftUI to reload views when they change unless you specifically mark them with `@Published`.

::: details Similar solutions…

```component VPCard
{
  "title": "Observable objects, environment objects, and @Published | SwiftUI by Example",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "/explore/articles/hackingwithswift.com/swiftui/observable-objects-environment-objects-and-published.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ObservedObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @ObservedObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @GestureState property wrapper? | SwiftUI by Example",
  "desc": "What is the @GestureState property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-gesturestate-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ScaledMetric property wrapper? | SwiftUI by Example",
  "desc": "What is the @ScaledMetric property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-scaledmetric-property-wrapper.md",
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

:::

---

<TagLinks />