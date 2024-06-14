---
lang: ko-KR
title: What is the @StateObject property wrapper?
description: Article(s) > What is the @StateObject property wrapper?
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
      content: Article(s) > What is the @StateObject property wrapper?
    - property: og:description
      content: What is the @StateObject property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/what-is-the-stateobject-property-wrapper.html
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
  "title": "What is the @StateObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @StateObject property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-stateobject-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `@StateObject` property wrapper is designed to fill a very specific gap in state management: when you need to create a reference type inside one of your views and make sure it stays alive for use in that view and others you share it with.

As an example, consider a simple `User` class such as this one:

```swift
class User: ObservableObject {
    var username = "@twostraws"
}
```

If you want to use that inside various views, you either need to create it externally to SwiftUI and inject it in, or create it inside one of your SwiftUI views and use `@StateObject`, like this:

```swift
struct ContentView: View {
    @StateObject var user = User()

    var body: some View {
        Text("Username: \(user.username)")
    }
}
```

That will make sure the `User` instance does not get destroyed when the view updates. 

Previously you might have used `@ObservedObject` to get the same result, but that was dangerous – sometimes, and only sometimes, `@ObservedObject` could accidentally release the object it was storing, because it wasn’t designed to be the ultimate source of truth for the object. This won’t happen with `@StateObject`, so you should use it instead.

::: important

You should use `@StateObject` only once per object, which should be in whichever view is responsible for creating the object. All other views that share your object should use `@ObservedObject`.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to use @StateObject to create and monitor external objects | SwiftUI by Example",
  "desc": "How to use @StateObject to create and monitor external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects.md",
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
  "title": "What is the @ObservedObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @ObservedObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Published property wrapper? | SwiftUI by Example",
  "desc": "What is the @Published property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-published-property-wrapper.md",
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

:::

---

<TagLinks />