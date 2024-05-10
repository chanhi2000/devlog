---
lang: ko-KR
title: How to show a context menu
description: Article(s) > How to show a context menu
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
      content: Article(s) > How to show a context menu
    - property: og:description
      content: How to show a context menu
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-context-menu.html
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
  "title": "How to show a context menu | SwiftUI by Example",
  "desc": "How to show a context menu",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-a-context-menu",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us the `ContextMenu` modifier for creating popup menus in our apps. In iOS this is usually triggered with a long press, but it works just the same as a right-click on macOS – it’s a flexible API.

A context menu is built from a collection of buttons, each with their own action, text, and icon. The text and icon can be provided directly inside the button, because SwiftUI will provide an implicit `HStack` to make sure they fit the system standard look and feel.

So, if we wanted a context menu to be attached to some text, we could provide two buttons for the menu like this:

```swift
Text("Options")
    .contextMenu {
        Button {
            print("Change country setting")
        } label: {
            Label("Choose Country", systemImage: "globe")
        }

        Button {
            print("Enable geolocation")
        } label: {
            Label("Detect Location", systemImage: "location.circle")
        }
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-a-context-menu-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-a-context-menu-1~dark.mp4" />

To try that out on iOS, long press on the “Options” text to bring up the menu, or right-click on macOS. It’s worth adding that you can attach these sorts of menus to any SwiftUI views, not just text views.


::: details Similar solutions…

```component VPCard
{
  "title": "How to show a menu when a button is pressed | SwiftUI by Example",
  "desc": "How to show a menu when a button is pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-menu-when-a-button-is-pressed.md",
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
  "title": "How to access a Core Data managed object context from a SwiftUI view | SwiftUI by Example",
  "desc": "How to access a Core Data managed object context from a SwiftUI view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show an alert | SwiftUI by Example",
  "desc": "How to show an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-alert.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />