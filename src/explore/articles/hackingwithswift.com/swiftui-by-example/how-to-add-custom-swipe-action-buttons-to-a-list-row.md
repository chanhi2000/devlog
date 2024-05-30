---
lang: ko-KR
title: How to add custom swipe action buttons to a List row
description: Article(s) > How to add custom swipe action buttons to a List row
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
      content: Article(s) > How to add custom swipe action buttons to a List row
    - property: og:description
      content: How to add custom swipe action buttons to a List row
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-custom-swipe-action-buttons-to-a-list-row.html
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
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI's `swipeActions()` modifier lets you add one or more swipe action buttons to your list rows, optionally controlling which side they belong to, and also whether they should be triggered using a full swipe.

For example, this creates a list with two static items and attaches a different swipe action to each of them:

```swift
List {
    Text("Pepperoni pizza")
        .swipeActions {
            Button("Order") {
                print("Awesome!")
            }
            .tint(.green)
        }

    Text("Pepperoni with pineapple")
        .swipeActions {
            Button("Burn") {
                print("Right on!")
            }
            .tint(.red)
        }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row-1~dark.mp4" />

Notice how the buttons are tinted to make them stand out – without that each button will just appear gray.

::: tip

For genuinely destructive buttons, you should use `Button(role: .destructive)` rather than just assigning a red tint color.

:::

By default, the first of your swipe actions will be automatically triggered if the user swipes far enough. If you want to disable this, set `allowsFullSwipe` to false when creating your swipe actions.

To demonstrate this, here's a list that adds two swipe actions per friend shown in the list, but neither of them are triggered by default no matter how far the user swipes:

```swift
struct ContentView: View {
    let friends = ["Antoine", "Bas", "Curt", "Dave", "Erica"]

    var body: some View {
        NavigationStack {
            List {
                ForEach(friends, id: \.self) { friend in
                    Text(friend)
                        .swipeActions(allowsFullSwipe: false) {
                            Button {
                                print("Muting conversation")
                            } label: {
                                Label("Mute", systemImage: "bell.slash.fill")
                            }
                            .tint(.indigo)

                            Button(role: .destructive) {
                                print("Deleting conversation")
                            } label: {
                                Label("Delete", systemImage: "trash.fill")
                            }
                        }
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row-2~dark.mp4" />

SwiftUI is smart enough to adapt our label to show only the icon when used as a swipe action, but our text label still gets read out by VoiceOver.

If you want to add different swipe actions to either side of a row, just call `swipeActions()` twice with different edges. For example, we could make a swipe action calculator by adding or subtracting numbers depending on which side was swiped:

```swift
struct ContentView: View {
    @State private var total = 0

    var body: some View {
        NavigationStack {
            List {
                ForEach(1..<100) { i in
                    Text("\(i)")
                        .swipeActions(edge: .leading) {
                            Button {
                                total += i
                            } label: {
                                Label("Add \(i)", systemImage: "plus.circle")
                            }
                            .tint(.indigo)
                        }
                        .swipeActions(edge: .trailing) {
                            Button {
                                total -= i
                            } label: {
                                Label("Subtract \(i)", systemImage: "minus.circle")
                            }
                        }
                }
            }
            .navigationTitle("Total: \(total)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row-3~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to make buttons that repeat their action when pressed | SwiftUI by Example",
  "desc": "How to make buttons that repeat their action when pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-buttons-that-repeat-their-action-when-pressed.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/composing-views-to-create-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to allow row selection in a list | SwiftUI by Example",
  "desc": "How to allow row selection in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-allow-row-selection-in-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust List row separator insets | SwiftUI by Example",
  "desc": "How to adjust List row separator insets",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-list-row-separator-insets.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to push a new view when a list row is tapped | SwiftUI by Example",
  "desc": "How to push a new view when a list row is tapped",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-push-a-new-view-when-a-list-row-is-tapped.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />