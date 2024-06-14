---
lang: ko-KR
title: What is the @EnvironmentObject property wrapper?
description: Article(s) > What is the @EnvironmentObject property wrapper?
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
      content: Article(s) > What is the @EnvironmentObject property wrapper?
    - property: og:description
      content: What is the @EnvironmentObject property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/what-is-the-environmentobject-property-wrapper.html
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
  "title": "What is the @EnvironmentObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @EnvironmentObject property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-environmentobject-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `@EnvironmentObject` property wrapper lets us create views that rely on shared data, often across an entire SwiftUI app. For example, if you create a user that will be shared across many parts of your app, you should use `@EnvironmentObject`.

For example, we might have an `Order` class like this one:

```swift
class Order: ObservableObject {
    @Published var items = [String]()
}
```

That conforms to `ObservableObject`, which means we can use it with either `@ObservedObject` or `@EnvironmentObject`. In this instance, we might create a view that uses it with `@EnvironmentObject`, like this:

```swift
struct ContentView: View {
    @EnvironmentObject var order: Order

    var body: some View {
        // your code here
    }
}
```

Notice how the `order` property isn’t given a default value – by using `@EnvironmentObject` we’re saying that value will be provided by the SwiftUI environment rather than explicitly created by this view.

`@EnvironmentObject` has a lot in common with `@ObservedObject`: both must refer to a class that conforms to `ObservableObject`, both can be shared across many views, and both will update any views that are watching when significant changes happen. However, `@EnvironmentObject` specifically means “this object will be provided from some outside entity, rather than being created by the current view or specifically passed in.

In practical terms, imagine if you had view A, and view A had some data that view E wanted. Using `@ObservedObject` view A would need to hand the object to view B, which would hand it to view C, then view D, and finally view E – all the intermediate views would need to be sent the object even though they didn’t actually need it.

When using `@EnvironmentObject`, view A can create an object and place it into the environment. Any views inside it can then gain access to that environment object whenever they want just by asking for it, rather than having to pass it around explicitly – it makes our code much simpler.

::: warning

When a view using `@EnvironmentObject` is shown, SwiftUI will immediately search the environment for an object of the correct type. If such an object can’t be found – i.e., if you forgot to place it in the environment – then your app will immediately crash. When you use `@EnvironmentObject` you are effectively promising that object will exist in the environment by the time it is needed, a bit like using implicitly unwrapped optionals.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to use @EnvironmentObject to share data between views | SwiftUI by Example",
  "desc": "How to use @EnvironmentObject to share data between views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-environmentobject-to-share-data-between-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Adding items to an order with @EnvironmentObject | SwiftUI by Example",
  "desc": "Adding items to an order with @EnvironmentObject",
  "link": "/explore/articles/hackingwithswift.com/swiftui/adding-items-to-an-order-with-environmentobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "What is the @Environment property wrapper? | SwiftUI by Example",
  "desc": "What is the @Environment property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-environment-property-wrapper.md",
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

:::

---

<TagLinks />