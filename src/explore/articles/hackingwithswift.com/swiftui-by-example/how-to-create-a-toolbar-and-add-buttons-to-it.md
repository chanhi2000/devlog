---
lang: ko-KR
title: How to create a toolbar and add buttons to it
description: Article(s) > How to create a toolbar and add buttons to it
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
      content: Article(s) > How to create a toolbar and add buttons to it
    - property: og:description
      content: How to create a toolbar and add buttons to it
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toolbar-and-add-buttons-to-it.html
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
  "title": "How to create a toolbar and add buttons to it | SwiftUI by Example",
  "desc": "How to create a toolbar and add buttons to it",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `toolbar()` modifier lets us place bar button items anywhere in the top or bottom space, but only when our view is embedded inside a `NavigationStack`.

If you want to place buttons into a toolbar at the bottom of the screen, use `toolbar()` then create a `ToolbarItem` with the placement of `.bottomBar`, like this:

```swift
NavigationStack {
    Text("Hello, World!").padding()
        .navigationTitle("SwiftUI")
        .toolbar {
            ToolbarItem(placement: .bottomBar) {
                Button("Press Me") {
                    print("Pressed")
                }
            }
        }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it-1~dark.mp4" />

To get more than one button, use `ToolbarItemGroup` instead of a simple `ToolbarItem`, then place multiple buttons inside there:

```swift
NavigationStack {
    Text("Hello, World!").padding()
        .navigationTitle("SwiftUI")
        .toolbar {
            ToolbarItemGroup(placement: .bottomBar) {
                Button("First") {
                    print("Pressed")
                }

                Button("Second") {
                    print("Pressed")
                }
            }
        }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it-2~dark.mp4" />

If you want to separate buttons inside a `ToolbarItemGroup`, add a spacer view wherever you want it. For example, this will place one button on the left edge of the toolbar, and one on the right edge:

```swift
NavigationStack {
    Text("Hello, World!").padding()
        .navigationTitle("SwiftUI")
        .toolbar {
            ToolbarItemGroup(placement: .bottomBar) {
                Button("First") {
                    print("Pressed")
                }

                Spacer()

                Button("Second") {
                    print("Pressed")
                }
            }
        }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to let users customize toolbar buttons | SwiftUI by Example",
  "desc": "How to let users customize toolbar buttons",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-customize-toolbar-buttons.md",
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
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a toolbar to the keyboard | SwiftUI by Example",
  "desc": "How to add a toolbar to the keyboard",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-toolbar-to-the-keyboard.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />