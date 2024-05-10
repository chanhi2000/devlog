---
lang: ko-KR
title: How to push a new view when a list row is tapped
description: Article(s) > How to push a new view when a list row is tapped
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
      content: Article(s) > How to push a new view when a list row is tapped
    - property: og:description
      content: How to push a new view when a list row is tapped
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-push-a-new-view-when-a-list-row-is-tapped.html
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
  "title": "How to push a new view when a list row is tapped | SwiftUI by Example",
  "desc": "How to push a new view when a list row is tapped",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 16**

SwiftUI's `NavigationLink` can be used inside list rows to present new views when a row is tapped. If the `NavigationLink` wraps around your entire row, the system automatically understands to make the entire row tappable in order to present the new view.

There are two ways of specifying a navigation destination: by providing one explicitly for your link, or if you're targeting iOS 16 and later we can use `navigationDestination()`.

::: important

If you can – if you don't need highly custom navigation and you're able to target iOS 16 or later – using `navigationDestination()` is strongly preferred, because it allows SwiftUI to instantiate your destination views lazily.

:::

To demonstrate navigation, here's a simple detail view that expects to be handled the name of a football player:

```swift
struct PlayerView: View {
    let name: String

    var body: some View {
        Text("Selected player: \(name)")
            .font(.largeTitle)
    }
}
```

We can now create a `NavigationStack` with a `List` inside, allowing the user to select any player:

```swift
struct ContentView: View {
    let players = [
        "Roy Kent",
        "Richard Montlaur",
        "Dani Rojas",
        "Jamie Tartt",
    ]

    var body: some View {
        NavigationStack {
            List(players, id: \.self) { player in
                NavigationLink(player, value: player)
            }
            .navigationDestination(for: String.self, destination: PlayerView.init)
            .navigationTitle("Select a player")
        }
    }
}
```

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped-1~dark.mp4" />

Using this modern value/destination approach to navigation breaks the work down into two steps:

1. The `NavigationLink` view stores a player as its value. This is a string in the code above, but it can be anything that conforms to `Hashable`.
2. That value gets sent to `navigationDestination()` when the link is tapped. We told it to watch for strings, so it will receive the player string that was tapped. We're passing that directly to `PlayerView`, which expects a player name to work with.

To get that same result using the older API, we need to pass in a `PlayerView` for every navigation link, like this:

```swift
struct ContentView: View {
    let players = [
        "Roy Kent",
        "Richard Montlaur",
        "Dani Rojas",
        "Jamie Tartt",
    ]

    var body: some View {
        NavigationStack {
            List(players, id: \.self) { player in
                NavigationLink {
                    PlayerView(name: player)
                } label: {
                    Text(player)
                }
            }
            .navigationTitle("Select a player")
        }
    }
}
```

You can attach `navigationDestination()` to watch multiple different types of data, like this:

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            List {
                NavigationLink("Show an integer", value: 42)
                NavigationLink("Show a string", value: "Hello, world!")
                NavigationLink("Show a Double", value: Double.pi)
            }
            .navigationDestination(for: Int.self) { Text("Received Int: \($0)") }
            .navigationDestination(for: String.self) { Text("Received String: \($0)") }
            .navigationDestination(for: Double.self) { Text("Received Double: \($0)") }
            .navigationTitle("Select a value")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped-3.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to push a new view onto a NavigationStack | SwiftUI by Example",
  "desc": "How to push a new view onto a NavigationStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-push-a-new-view-onto-a-navigationstack.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/composing-views-to-create-a-list-row.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
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