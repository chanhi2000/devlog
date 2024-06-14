---
lang: ko-KR
title: How to use @ObservedObject to manage state from external objects
description: Article(s) > How to use @ObservedObject to manage state from external objects
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
      content: Article(s) > How to use @ObservedObject to manage state from external objects
    - property: og:description
      content: How to use @ObservedObject to manage state from external objects
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects.html
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
  "title": "How to use @ObservedObject to manage state from external objects | SwiftUI by Example",
  "desc": "How to use @ObservedObject to manage state from external objects",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When using observed objects there are three key things we need to work with: the `ObservableObject` protocol is used with some sort of class that can store data, the `@ObservedObject` property wrapper is used inside a view to store an observable object instance, and the `@Published` property wrapper is added to any properties inside an observed object that should cause views to update when they change.

::: tip

It is really important that you use `@ObservedObject` only with views that were passed in from elsewhere. You should *not* use this property wrapper to create the initial instance of an observable object – that's what `@StateObject` is for.

:::

As an example, here's a `UserProgress` class that conforms to `ObservableObject`:

```swift
class UserProgress: ObservableObject {
    @Published var score = 0
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects-1~dark.mp4" />

I know that doesn't look like much code, but that's because SwiftUI is doing a remarkable amount on our behalf! There are two things that matter in there:

1. The `ObservableObject` conformance allows instances of this class to be used inside views, so that when important changes happen the view will reload.
2. The `@Published` property wrapper tells SwiftUI that changes to `score` should trigger view reloads.

We can use that `UserProgress` class with code like this:

```swift
class UserProgress: ObservableObject {
    @Published var score = 0
}

struct InnerView: View {
    @ObservedObject var progress: UserProgress

    var body: some View {
        Button("Increase Score") {
            progress.score += 1
        }
    }
}

struct ContentView: View {
    @StateObject var progress = UserProgress()

    var body: some View {
        VStack {
            Text("Your score is \(progress.score)")
            InnerView(progress: progress)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects-1~dark.mp4" />

As you can see, other than using the `@ObservedObject` property wrapper with `progress`, everything else more or less looks the same – SwiftUI takes care of all the implementation details for us.

There is *one* important difference, though: the `progress` property isn't declared as private. This is because bound objects can be used by more than one view, so it's common to share it openly.

Remember, please do *not* use `@ObservedObject` to create instances of your object. If that's what you want to do, use `@StateObject` instead.

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
  "title": "How to use @StateObject to create and monitor external objects | SwiftUI by Example",
  "desc": "How to use @StateObject to create and monitor external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects.md",
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
  "title": "Observable objects, environment objects, and @Published | SwiftUI by Example",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "/explore/articles/hackingwithswift.com/swiftui/observable-objects-environment-objects-and-published.md",
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

:::

---

<TagLinks />