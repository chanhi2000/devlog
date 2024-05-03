---
lang: ko-KR
title: How to add actions to alert buttons
description: Article(s) > How to add actions to alert buttons
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
      content: Article(s) > How to add actions to alert buttons
    - property: og:description
      content: How to add actions to alert buttons
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-actions-to-alert-buttons.html
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
  "title": "How to add actions to alert buttons | SwiftUI by Example",
  "desc": "How to add actions to alert buttons",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-actions-to-alert-buttons",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Not needed from iOS 15 on** – you should use buttons directly.

Basic SwiftUI alerts look like this:

```swift
Alert(
    title: Text("Important message"),
    message: Text("Wear sunscreen"),
    dismissButton: .default(Text("Got it!"))
)
```

However, you will often want to attach actions to buttons to perform specific actions when they are tapped. To do that, attach a closure to your button that will be called when it’s tapped, like this:

```swift
struct ContentView: View {
    @State private var showingAlert = false

    var body: some View {
        Button("Show Alert") {
            showingAlert = true
        }
        .alert(isPresented:$showingAlert) {
            Alert(
                title: Text("Are you sure you want to delete this?"),
                message: Text("There is no undo"),
                primaryButton: .destructive(Text("Delete")) {
                    print("Deleting...")
                },
                secondaryButton: .cancel()
            )
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-actions-to-alert-buttons-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-actions-to-alert-buttons-1~dark.mp4" />

There is no way to add more than two buttons to an alert – if you’re looking to do that you should use an action sheet instead.

::: details Similar solutions…

```component VPCard
{
  "title": "Presenting an alert | SwiftUI by Example",
  "desc": "Presenting an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/presenting-an-alert.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a TextField to an alert | SwiftUI by Example",
  "desc": "How to add a TextField to an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-textfield-to-an-alert.md",
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
  "title": "How to create a toolbar and add buttons to it | SwiftUI by Example",
  "desc": "How to create a toolbar and add buttons to it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toolbar-and-add-buttons-to-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />