---
lang: ko-KR
title: How to use @StateObject to create and monitor external objects
description: Article(s) > How to use @StateObject to create and monitor external objects
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to use @StateObject to create and monitor external objects
    - property: og:description
      content: How to use @StateObject to create and monitor external objects
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-stateobject-to-create-and-monitor-external-objects.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use @StateObject to create and monitor external objects | SwiftUI by Example",
  "desc": "How to use @StateObject to create and monitor external objects",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `@StateObject` property wrapper is a specialized form of `@ObservedObject`, having all the same functionality with one important addition: it should be used to *create* observed objects, rather than just store one that was passed in externally. 

When you add a property to a view using `@StateObject`, SwiftUI considers that view to be the owner of the observable object. All other views where you pass that object should use `@ObservedObject`.

**This really matters.** Seriously, if you get this wrong you might find your object gets destroyed by accident, which will cause your app to crash seemingly randomly.

So, to be clear: you should create your observable object somewhere using `@StateObject`, and in all subsequent places where you pass that object you should use `@ObservedObject`.

Here's an example in code:

```swift
// An example class to work with
class Player: ObservableObject {
    @Published var name = "Taylor"
    @Published var age = 26
}

// A view that creates and owns the Player object.
struct ContentView: View {
    @StateObject var player = Player()

    var body: some View {
        NavigationStack {
            NavigationLink {
                PlayerNameView(player: player)
            } label: {
                Text("Show detail view")
            }
        }
    }
}

// A view that monitors the Player object for changes, but
// doesn't own it.
struct PlayerNameView: View {
    @ObservedObject var player: Player

    var body: some View {
        Text("Hello, \(player.name)!")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects-1~dark.mp4" />

If you're finding it hard to remember the distinction, try this: whenever you see “State” in a property wrapper, e.g. `@State`, `@StateObject`, `@GestureState`, it means “the current view owns this data.”

::: details Similar solutions…

```component VPCard
{
  "title": "How to use @ObservedObject to manage state from external objects | SwiftUI by Example",
  "desc": "How to use @ObservedObject to manage state from external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-observedobject-to-manage-state-from-external-objects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @StateObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @StateObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-stateobject-property-wrapper.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Observable objects, environment objects, and @Published | SwiftUI by Example",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/observable-objects-environment-objects-and-published.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />