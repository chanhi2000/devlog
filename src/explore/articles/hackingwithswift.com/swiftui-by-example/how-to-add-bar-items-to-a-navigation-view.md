---
lang: ko-KR
title: How to add bar items to a navigation view
description: Article(s) > How to add bar items to a navigation view
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
      content: Article(s) > How to add bar items to a navigation view
    - property: og:description
      content: How to add bar items to a navigation view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-bar-items-to-a-navigation-view.html
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
  "title": "How to add bar items to a navigation view | SwiftUI by Example",
  "desc": "How to add bar items to a navigation view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-bar-items-to-a-navigation-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

The `toolbar()` modifier lets us add single or multiple bar button items to the leading and trailing edge of a navigation stack, as well as other parts of our view if needed. These might be tappable buttons, but there are no restrictions – you can add any sort of view.

For example, this adds two buttons to the trailing edge of a navigation bar:

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            Text("SwiftUI")
                .navigationTitle("Welcome")
                .toolbar {
                    Button("About") {
                        print("About tapped!")
                    }

                    Button("Help") {
                        print("Help tapped!")
                    }
                }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-bar-items-to-a-navigation-view-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-bar-items-to-a-navigation-view-1~dark.mp4" />

We haven't specified where the buttons should be displayed, but that's okay – SwiftUI knows that on iOS the trailing edge is the best place for left to right languages, and will automatically flip that to the other side for right to left languages.

If you want to control the exact position of your button, you can do so by wrapping it in a `ToolbarItem` and specifying the placement you want. For example, this will create a button and force it be on the leading edge of the navigation bar:

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            Text("SwiftUI")
                .navigationTitle("Welcome")
                .toolbar {
                    ToolbarItem(placement: .navigationBarLeading) {
                        Button("Help") {
                            print("Help tapped!")
                        }
                    }
                }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-bar-items-to-a-navigation-view-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-bar-items-to-a-navigation-view-2~dark.mp4" />

If you want to place multiple bar buttons in different locations, you can just repeat `ToolbarItem` as many times as you need and specify a different placement each time.

To put multiple bar buttons in the *same* locations, you should wrap them in a `ToolbarItemGroup`, like this:

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            Text("SwiftUI")
                .navigationTitle("Welcome")
                .toolbar {
                    ToolbarItemGroup(placement: .primaryAction) {
                        Button("About") {
                            print("About tapped!")
                        }

                        Button("Help") {
                            print("Help tapped!")
                        }
                    }
                }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-bar-items-to-a-navigation-view-3.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-bar-items-to-a-navigation-view-3~dark.mp4" />

That uses the `.primaryAction` placement, which will position the buttons depending on where the platform thinks the most important buttons go.

There's also a `.secondaryAction` placement designed for actions that are useful but not *required*, and on iOS that will cause buttons in that group to be collapsed down to a single details button.

So, in this code sample some buttons are always displayed, and others are hidden under a menu:

```swift
NavigationStack {
    Text("SwiftUI")
        .navigationTitle("Welcome")
        .toolbar {
            ToolbarItemGroup(placement: .primaryAction) {
                Button("About") {
                    print("About tapped!")
                }

                Button("Help") {
                    print("Help tapped!")
                }
            }

            ToolbarItemGroup(placement: .secondaryAction) {
                Button("Settings") {
                    print("Credits tapped")
                }

                Button("Email Me") {
                    print("Email tapped")
                }
            }
        }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-bar-items-to-a-navigation-view-4.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to hide the tab bar, navigation bar, or other toolbars | SwiftUI by Example",
  "desc": "How to hide the tab bar, navigation bar, or other toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.md",
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

```component VPCard
{
  "title": "How to add a search bar to filter your data | SwiftUI by Example",
  "desc": "How to add a search bar to filter your data",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-search-bar-to-filter-your-data.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Adding items to an order with @EnvironmentObject | SwiftUI by Example",
  "desc": "Adding items to an order with @EnvironmentObject",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/adding-items-to-an-order-with-environmentobject.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to embed a view in a navigation view | SwiftUI by Example",
  "desc": "How to embed a view in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-embed-a-view-in-a-navigation-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />