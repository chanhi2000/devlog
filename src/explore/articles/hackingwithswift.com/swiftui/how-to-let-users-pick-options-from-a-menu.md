---
lang: ko-KR
title: How to let users pick options from a menu
description: Article(s) > How to let users pick options from a menu
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
      content: Article(s) > How to let users pick options from a menu
    - property: og:description
      content: How to let users pick options from a menu
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-pick-options-from-a-menu.html
next: /explore/articles/hackingwithswift.com/swiftui/how-to-present-a-new-view-using-sheets.md
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
  "title": "How to let users pick options from a menu | SwiftUI by Example",
  "desc": "How to let users pick options from a menu",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-pick-options-from-a-menu",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI’s `Picker` view has a dedicated style called `.menu` that shows a popup menu of its options, with the label for the picker being shown as a tappable button. The menu itself will automatically show a checkmark next to the currently selected option, and can display upwards or downwards depending on the position of the picker on-screen.

To demonstrate this, we could make a small menu button to let the user select a paint color:


```swift
struct ContentView: View {
    @State private var selection = "Red"
    let colors = ["Red", "Green", "Blue", "Black", "Tartan"]

    var body: some View {
        VStack {
            Picker("Select a paint color", selection: $selection) {
                ForEach(colors, id: \.self) {
                    Text($0)
                }
            }
            .pickerStyle(.menu)

            Text("Selected color: \(selection)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-pick-options-from-a-menu-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-let-users-pick-options-from-a-menu-1~dark.mp4" />

::: important

If you’re using Xcode 12, you need to use `MenuPickerStyle()` rather than `.menu`.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui/building-a-menu-using-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a menu when a button is pressed | SwiftUI by Example",
  "desc": "How to show a menu when a button is pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-a-menu-when-a-button-is-pressed.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a context menu | SwiftUI by Example",
  "desc": "How to show a context menu",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-a-context-menu.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users import videos using PhotosPicker | SwiftUI by Example",
  "desc": "How to let users import videos using PhotosPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-import-videos-using-photospicker.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users share content using the system share sheet | SwiftUI by Example",
  "desc": "How to let users share content using the system share sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-share-content-using-the-system-share-sheet.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::


---

<TagLinks />