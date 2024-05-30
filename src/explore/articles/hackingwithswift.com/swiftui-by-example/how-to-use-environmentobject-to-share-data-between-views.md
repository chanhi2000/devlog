---
lang: ko-KR
title: How to use @EnvironmentObject to share data between views
description: Article(s) > How to use @EnvironmentObject to share data between views
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
      content: Article(s) > How to use @EnvironmentObject to share data between views
    - property: og:description
      content: How to use @EnvironmentObject to share data between views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-environmentobject-to-share-data-between-views.html
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
  "title": "How to use @EnvironmentObject to share data between views | SwiftUI by Example",
  "desc": "How to use @EnvironmentObject to share data between views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-environmentobject-to-share-data-between-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

For data that should be shared with many views in your app, SwiftUI gives us the `@EnvironmentObject` property wrapper. This lets us share model data anywhere it's needed, while also ensuring that our views automatically stay updated when that data changes.

Think of `@EnvironmentObject` as a smarter, simpler way of using `@ObservedObject` on lots of views. Rather than creating some data in view A, then passing it to view B, then view C, then view D before finally using it, you can create it in view A and put it into the environment so that views B, C, and D will automatically have access to it.

Just like `@ObservedObject`, you never assign a value to an `@EnvironmentObject` property. Instead, it should be passed in from elsewhere, and ultimately you're probably going to want to use `@StateObject` to create it somewhere.

However, *unlike* `@ObservedObject` we don't pass our objects into other views by hand. Instead, we use send the data into a modifier called `environmentObject()`, which makes the object available in SwiftUI's environment for that view plus any others inside it.

::: note

Environment objects *must* be supplied by an ancestor view – if SwiftUI can't find an environment object of the correct type you'll get a crash. This applies for previews too, so be careful.

:::

To demonstrate environment objects, we're going to define three things:

1. A `GameSettings` class that contains a single published property called `score`.
2. A `ScoreView` view that expects to receive a `GameSettings` object in the environment, and displays its `score` property.
3. A `ContentView` view that creates a `GameSettings` object, has a button to add 1 to its `score` property, and a `NavigationLink` to show the detail view.

Here's the code:

```swift
// Our observable object class
class GameSettings: ObservableObject {
    @Published var score = 0
}

// A view that expects to find a GameSettings object
// in the environment, and shows its score.
struct ScoreView: View {
    @EnvironmentObject var settings: GameSettings

    var body: some View {
        Text("Score: \(settings.score)")
    }
}

// A view that creates the GameSettings object,
// and places it into the environment for the
// navigation stack.
struct ContentView: View {
    @StateObject var settings = GameSettings()

    var body: some View {
        NavigationStack {
            VStack {
                // A button that writes to the environment settings
                Button("Increase Score") {
                    settings.score += 1
                }

                NavigationLink {
                    ScoreView()
                } label: {
                    Text("Show Detail View")
                }
            }
            .frame(height: 200)
        }
        .environmentObject(settings)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-environmentobject-to-share-data-between-views-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-environmentobject-to-share-data-between-views-1~dark.mp4" />

There are several important parts I want to pick out in that code:

1. Just like `@StateObject` and `@ObservedObject`, all classes used with `@EnvironmentObject` must conform to the `ObservableObject` protocol.
2. We put `GameSettings` into the environment for the navigation stack, which means all views inside the navigation stack can read that object if they want it, as well as any views that get shown by the navigation stack.
3. When you use the `@EnvironmentObject` property wrapper, you declare the type of thing you expect to receive but you do *not* create it – you're expecting to receive it from the environment, after all.
4. Because our detail view is shown inside the navigation stack, it will get access to the same environment, which in turn means it can read the `GameSettings` object we created.
5. We didn't need to explicitly associate the `GameSettings` instance in the environment with the `settings` property in `ScoreView` – SwiftUI automatically figured out that it has a `GameSettings` instance in the environment, so that's the one it uses.

::: warning

Now that our views rely on an environment object being present, it's important that you also update your preview code to provide some example settings to use. For example, using something like `ScoreView().environmentObject(GameSettings())` for your preview ought to do it.

:::

If you need to add multiple objects to the environment, you should add multiple `environmentObject()` modifiers – just call them one after the other.

::: details Similar solutions…

```component VPCard
{
  "title": "How to let users share content using the system share sheet | SwiftUI by Example",
  "desc": "How to let users share content using the system share sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-share-content-using-the-system-share-sheet.md",
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
  "title": "What is the @EnvironmentObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @EnvironmentObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-environmentobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Adding items to an order with @EnvironmentObject | SwiftUI by Example",
  "desc": "Adding items to an order with @EnvironmentObject",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/adding-items-to-an-order-with-environmentobject.html",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a ScrollView snap with paging or between child views | SwiftUI by Example",
  "desc": "How to make a ScrollView snap with paging or between child views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scrollview-snap-with-paging-or-between-child-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />