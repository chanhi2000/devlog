---
lang: ko-KR
title: What is the @Environment property wrapper?
description: Article(s) > What is the @Environment property wrapper?
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
      content: Article(s) > What is the @Environment property wrapper?
    - property: og:description
      content: What is the @Environment property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-environment-property-wrapper.html
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
  "title": "What is the @Environment property wrapper? | SwiftUI by Example",
  "desc": "What is the @Environment property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-environment-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us both `@Environment` and `@EnvironmentObject` property wrappers, but they are subtly different: whereas `@EnvironmentObject` allows us to inject arbitrary values into the environment, `@Environment` is specifically there to work with SwiftUI’s own pre-defined keys.

For example, `@Environment` is great for reading out things like a Core Data managed object context, whether the device is in dark mode or light mode, what size class your view is being rendered with, and more – fixed properties that come from the system. In code, it looks like this:

```swift
@Environment(\.horizontalSizeClass) var horizontalSizeClass
@Environment(\.managedObjectContext) var managedObjectContext
```

On the other hand, `@EnvironmentObject` is designed for arbitrary objects to be read from the environment, like this:

```swift
@EnvironmentObject var order: Order
```

That difference might sound small, but it’s important because of the way `@EnvironmentObject` is implemented. When we say that `order` is of type `Order` SwiftUI will look through its environment to find an object of that type and attach it to the `order` property. However, when using `@Environment` the same behavior isn’t possible, because many things might share the same data type.

For example:

```swift
@Environment(\.accessibilityReduceMotion) var reduceMotion
@Environment(\.accessibilityReduceTransparency) var reduceTransparency
@Environment(\.accessibilityEnabled) var accessibilityEnabled
```

All three of those environment keys return a Boolean, so without specifying exactly which key we mean it would be impossible to read them correctly.

::: details Similar solutions…

```component VPCard
{
  "title": "Observable objects, environment objects, and @Published | SwiftUI by Example",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/observable-objects-environment-objects-and-published.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @GestureState property wrapper? | SwiftUI by Example",
  "desc": "What is the @GestureState property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-gesturestate-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Published property wrapper? | SwiftUI by Example",
  "desc": "What is the @Published property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-published-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ScaledMetric property wrapper? | SwiftUI by Example",
  "desc": "What is the @ScaledMetric property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-scaledmetric-property-wrapper.md",
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

:::

---

<TagLinks />