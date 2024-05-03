---
lang: ko-KR
title: How to show a menu when a button is pressed
description: Article(s) > How to show a menu when a button is pressed
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
      content: Article(s) > How to show a menu when a button is pressed
    - property: og:description
      content: How to show a menu when a button is pressed
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-menu-when-a-button-is-pressed.html
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
  "title": "How to show a menu when a button is pressed | SwiftUI by Example",
  "desc": "How to show a menu when a button is pressed",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-a-menu-when-a-button-is-pressed",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI gives us a dedicated view for showing popup menus from buttons, helpfully called `Menu`. This can be created from a simple string or using a custom view, but either way you get to send in a variety of buttons to control what you want to appear in the menu.

::: tip

On macOS, `Menu` is automatically rendered as a pulldown button.

:::

For example, we could create a simple button with several options like this:

```swift
struct ContentView: View {
    var body: some View {
        Menu("Options") {
            Button("Order Now", action: placeOrder)
            Button("Adjust Order", action: adjustOrder)
            Button("Cancel", action: cancelOrder)
        }
    }

    func placeOrder() { }
    func adjustOrder() { }
    func cancelOrder() { }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-a-menu-when-a-button-is-pressed-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-a-menu-when-a-button-is-pressed-1~dark.mp4" />

You can also place menus inside menus if you want, which will cause iOS to reveal the second menu when the first option is tapped:

```swift
struct ContentView: View {
    var body: some View {
        Menu("Options") {
            Button("Order Now", action: placeOrder)
            Button("Adjust Order", action: adjustOrder)
            Menu("Advanced") {
                Button("Rename", action: rename)
                Button("Delay", action: delay)
            }
            Button("Cancel", action: cancelOrder)
        }
    }

    func placeOrder() { }
    func adjustOrder() { }
    func rename() { }
    func delay() { }
    func cancelOrder() { }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-a-menu-when-a-button-is-pressed-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-a-menu-when-a-button-is-pressed-2~dark.mp4" />

If you wanted a customized label using some text and an icon, you could use this:

```swift
struct ContentView: View {
    var body: some View {
        Menu {
            Button("Order Now", action: placeOrder)
            Button("Adjust Order", action: adjustOrder)
        } label: {
            Label("Options", systemImage: "paperplane")
        }
    }

    func placeOrder() { }
    func adjustOrder() { }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-a-menu-when-a-button-is-pressed-3.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-a-menu-when-a-button-is-pressed-3~dark.mp4" />

Finally, in iOS 15 and later menus can also have a primary action, which is triggered when the menu’s button is tapped rather than held down – press and release to trigger the primary action, or hold down to get the full menu of options.

So, we could create a menu that supports both simple taps as well as a full set of options:

```swift
struct ContentView: View {
    var body: some View {
        Menu("Options") {
            Button("Order Now", action: placeOrder)
            Button("Adjust Order", action: adjustOrder)
            Button("Cancel", action: cancelOrder)
        } primaryAction: {
            justDoIt()
        }
    }

    func justDoIt() {
        print("Button was tapped")
    }

    func placeOrder() { }
    func adjustOrder() { }
    func cancelOrder() { }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-a-menu-when-a-button-is-pressed-4.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-a-menu-when-a-button-is-pressed-4~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to make buttons that repeat their action when pressed | SwiftUI by Example",
  "desc": "How to make buttons that repeat their action when pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-buttons-that-repeat-their-action-when-pressed.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a context menu | SwiftUI by Example",
  "desc": "How to show a context menu",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-context-menu.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users pick options from a menu | SwiftUI by Example",
  "desc": "How to let users pick options from a menu",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-pick-options-from-a-menu.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing Button with ButtonStyle | SwiftUI by Example",
  "desc": "Customizing Button with ButtonStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-button-with-buttonstyle.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />