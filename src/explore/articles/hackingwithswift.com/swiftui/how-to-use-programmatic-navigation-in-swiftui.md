---
lang: ko-KR
title: How to use programmatic navigation in SwiftUI
description: Article(s) > How to use programmatic navigation in SwiftUI
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
      content: Article(s) > How to use programmatic navigation in SwiftUI
    - property: og:description
      content: How to use programmatic navigation in SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-use-programmatic-navigation-in-swiftui.html
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
  "title": "How to use programmatic navigation in SwiftUI | SwiftUI by Example",
  "desc": "How to use programmatic navigation in SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-programmatic-navigation-in-swiftui",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated for iOS 16**

We can use SwiftUI to programmatically push a new view onto a `NavigationStack` using `NavigationLink`, meaning that we can trigger the navigation when we're ready rather than just when the user tapped a button or list row.

::: important

There are two approaches to programmatic navigation: the newer, more powerful option available from iOS 16 and later, or the older, simpler option available available in earlier releases. Apple has formally deprecated the older API, so you should move away as soon as you're able. In the meantime, if you need to support iOS 15 and earlier you should see below.

:::

From iOS 16 and later, we can pass an array of `Hashable` data directly to the `NavigationStack` to control which data is currently on the stack. For example, this tracks numbers being presented, and starts by immediately pushing 1, 4, and 8 onto the stack:

```swift
struct ContentView: View {
    @State private var presentedNumbers = [1, 4, 8]

    var body: some View {
        NavigationStack(path: $presentedNumbers) {
            List(1..<50) { i in
                NavigationLink(value: i) {
                    Label("Row \(i)", systemImage: "\(i).circle")
                }
            }
            .navigationDestination(for: Int.self) { i in
                Text("Detail \(i)")
            }
            .navigationTitle("Navigation")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-programmatic-navigation-in-swiftui-1.zip)

When that code runs, the user will see “Detail 8”, and can tap back to “Detail 4”, then “Detail 1”, until eventually reaching the list of numbers.

This approach is powerful, because we can at any point modify the navigation stack to push a custom view on there – it's a simple array, so we can append items, or insert them, remove them, or whatever else we need. In this code sample the path array starts empty, then gets added to over time by using the `List` or clicking buttons:

```swift
struct ContentView: View {
    @State private var presentedNumbers = [Int]()

    var body: some View {
        NavigationStack(path: $presentedNumbers) {
            List(1..<50) { i in
                NavigationLink(value: i) {
                    Label("Row \(i)", systemImage: "\(i).circle")
                }
            }
            .navigationDestination(for: Int.self) { i in
                VStack {
                    Text("Detail \(i)")

                    Button("Go to Next") {
                        presentedNumbers.append(i + 1)
                    }
                }
            }
            .navigationTitle("Navigation")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-programmatic-navigation-in-swiftui-2.zip)

::: tip

This means you can restore the full state of an app – including its full navigation state – by serializing your navigation path.

:::

Using a simple array for your navigation path is fine if you're only pushing one data type onto your stack, but if you need heterogeneous data to use a special type-erased wrapper called `NavigationPath`. This can work with any hashable data, so you could add a few strings, a few integers, a few custom structs, etc, and as long as they all conform to `Hashable` you're okay.

For example, this code lets the user navigate to any row in a list using a string navigation destination, but also has a button to insert a number into the path:

```swift
struct ContentView: View {
    @State private var navPath = NavigationPath()

    var body: some View {
        NavigationStack(path: $navPath) {
            Button("Jump to random") {
                navPath.append(Int.random(in: 1..<50))
            }

            List(1..<50) { i in
                NavigationLink(value: "Row \(i)") {
                    Label("Row \(i)", systemImage: "\(i).circle")
                }
            }
            .navigationDestination(for: Int.self) { i in
                Text("Int Detail \(i)")
            }
            .navigationDestination(for: String.self) { i in
                Text("String Detail \(i)")
            }
            .navigationTitle("Navigation")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-programmatic-navigation-in-swiftui-3.zip)

You can adjust your path however you want – we appended a single value there, but you could append multiple values at once if needed, and something like the old UIKit “pop to root view controller” becomes just as simple as clearing everything from your path – something like `navPath.removeLast(navPath.count)` should do the trick.

---

## Supporting iOS 15 and earlier

There are two ways of doing this, both of which rely on initializers for `NavigationLink`. The first is binding the `NavigationLink` to a Boolean state – when that Boolean becomes true the navigation will happen immediately, and when it becomes false again the new view will be dismissed.

SwiftUI does require that we pass some sort of view to `NavigationLink` even when doing programmatic navigation. You'll probably want to use `EmptyView` to show nothing at all, for example here's a complete example of programmatic navigation, where I'm toggling the Boolean on a button press:

```swift
struct ContentView: View {
    @State private var isShowingDetailView = false

    var body: some View {
        NavigationView {
            VStack {
                NavigationLink(destination: Text("Second View"), isActive: $isShowingDetailView) { EmptyView() }

                Button("Tap to show detail") {
                    isShowingDetailView = true
                }
            }
            .navigationTitle("Navigation")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-programmatic-navigation-in-swiftui-4.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-programmatic-navigation-in-swiftui-1~dark.mp4" />

The advantage to this approach over a simple `NavigationLink` is that our button can do any amount of other work before triggering the programmatic navigation – maybe you want to save some data, or authenticate the user, etc.

If you have several possible destinations, you can bind more than one `NavigationLink` to some selection state, giving each one a unique tag. When you update your selection state to match one of those tags will cause the appropriate `NavigationLink` to activate, which gives you multi-destination programmatic navigation without having lots of Booleans.

For example, this navigates to one of two destination text views depending on the value of a `selection` property:

```swift
struct ContentView: View {
    @State private var selection: String? = nil

    var body: some View {
        NavigationView {
            VStack {
                NavigationLink(destination: Text("View A"), tag: "A", selection: $selection) { EmptyView() }
                NavigationLink(destination: Text("View B"), tag: "B", selection: $selection) { EmptyView() }

                Button("Tap to show A") {
                    selection = "A"
                }

                Button("Tap to show B") {
                    selection = "B"
                }
            }
            .navigationTitle("Navigation")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-programmatic-navigation-in-swiftui-5.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-programmatic-navigation-in-swiftui-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to embed a view in a navigation view | SwiftUI by Example",
  "desc": "How to embed a view in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-embed-a-view-in-a-navigation-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Introduction to navigation | SwiftUI by Example",
  "desc": "Introduction to navigation",
  "link": "/explore/articles/hackingwithswift.com/swiftui/introduction-to-navigation.md",
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
  "title": "How to add bar items to a navigation view | SwiftUI by Example",
  "desc": "How to add bar items to a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-bar-items-to-a-navigation-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />