---
lang: ko-KR
title: How to show an action sheet
description: Article(s) > How to show an action sheet
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
      content: Article(s) > How to show an action sheet
    - property: og:description
      content: How to show an action sheet
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-action-sheet.html
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
  "title": "How to show an action sheet | SwiftUI by Example",
  "desc": "How to show an action sheet",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-an-action-sheet",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI allows us to show a selection of options to the user with using its `confirmationDialog()` modifier, but if you’re targeting iOS 14 or earlier you need to use `ActionSheet` instead. I’ll show you both here, but if you’re targeting iOS 15 or later, or if you want to support macOS, you should use `confirmationDialog()`.

To create your action sheet using `confirmationDialog()`, provide some title text, a binding to determine when the sheet should be shown, and optionally also whether you want the title text to appear – if you don’t specify this, SwiftUI will decide for you based on context.

So, this shows a sheet asking the user to select a paint color from three options:

```swift
struct ContentView: View {
    @State private var showingOptions = false
    @State private var selection = "None"

    var body: some View {
        VStack {
            Text(selection)

            Button("Confirm paint color") {
                showingOptions = true
            }
            .confirmationDialog("Select a color", isPresented: $showingOptions, titleVisibility: .visible) {
                Button("Red") {
                    selection = "Red"
                }

                Button("Green") {
                    selection = "Green"
                }

                Button("Blue") {
                    selection = "Blue"
                }
            }
        }
    }
}
```
> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-show-an-action-sheet-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-an-action-sheet-1~dark.mp4" />

::: tip

This API uses a standard SwiftUI `Button` for each action, so you can attach a role such as `.destructive` to have SwiftUI color it appropriately.

:::

![A menu titled “Select a color” and options Red, Green, and Blue. The Red option is red colored.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-an-action-sheet-2~dark@2x.png)

Because this new API is more flexible, we can actually collapse down those actions into a simple loop using `ForEach`:

```swift
struct ContentView: View {
    @State private var showingOptions = false
    @State private var selection = "None"

    var body: some View {
        VStack {
            Text(selection)

            Button("Confirm paint color") {
                showingOptions = true
            }
            .confirmationDialog("Select a color", isPresented: $showingOptions, titleVisibility: .visible) {
                ForEach(["Red", "Green", "Blue"], id: \.self) { color in
                    Button(color) {
                        selection = color
                    }
                }
            }
        }
    }
}
```
> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-show-an-action-sheet-2.zip)

If you need to target iOS 14 or below you should use the older `ActionSheet` approach to achieve the same result. This also works by defining a property to track whether the action sheet should be visible or not.

For example, here is an example view that triggers an action sheet when a button is tapped:

```swift
struct ContentView: View {
    @State private var showingOptions = false
    @State private var selection = "None"

    var body: some View {
        VStack {
            Text(selection)

            Button("Show Options") {
                showingOptions = true
            }
            .actionSheet(isPresented: $showingOptions) {
                ActionSheet(
                    title: Text("Select a color"),
                    buttons: [
                        .default(Text("Red")) {
                            selection = "Red"
                        },

                        .default(Text("Green")) {
                            selection = "Green"
                        },

                        .default(Text("Blue")) {
                            selection = "Blue"
                        },
                    ]
                )
            }
        }
    }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to display a bottom sheet | SwiftUI by Example",
  "desc": "How to display a bottom sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-a-bottom-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to prevent a sheet from being dismissed with a swipe | SwiftUI by Example",
  "desc": "How to prevent a sheet from being dismissed with a swipe",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users share content using the system share sheet | SwiftUI by Example",
  "desc": "How to let users share content using the system share sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-share-content-using-the-system-share-sheet.md",
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
  "title": "How to make buttons that repeat their action when pressed | SwiftUI by Example",
  "desc": "How to make buttons that repeat their action when pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-buttons-that-repeat-their-action-when-pressed.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::


---

<TagLinks />