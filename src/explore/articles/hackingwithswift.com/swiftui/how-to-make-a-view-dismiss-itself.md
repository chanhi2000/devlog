---
lang: ko-KR
title: How to make a view dismiss itself
description: Article(s) > How to make a view dismiss itself
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
      content: Article(s) > How to make a view dismiss itself
    - property: og:description
      content: How to make a view dismiss itself
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-view-dismiss-itself.html
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
  "title": "How to make a view dismiss itself | SwiftUI by Example",
  "desc": "How to make a view dismiss itself",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-view-dismiss-itself",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When you show a SwiftUI view using a sheet, it’s common to want to dismiss that view when something happens – when the user taps on a button, for example. There are two ways of solving this in SwiftUI, and I’m going to show you both so you can decide which suits your needs.

The first option is to tell the view to dismiss itself using its presentation mode environment key. Any view can dismiss itself, regardless of how it was presented, using `@Environment(\.dismiss)`, and calling that property as a function will cause the view to be dismissed.

For example, we could create a detail view that is able to dismiss itself using its presentation mode environment key, and present that from `ContentView`;

```swift
struct DismissingView1: View {
    @Environment(\.dismiss) var dismiss

    var body: some View {
        Button("Dismiss Me") {
            dismiss()
        }
    }
}

struct ContentView: View {
    @State private var showingDetail = false

    var body: some View {
        Button("Show Detail") {
            showingDetail = true
        }
        .sheet(isPresented: $showingDetail) {
            DismissingView1()
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-make-a-view-dismiss-itself-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-a-view-dismiss-itself-1~dark.mp4" />

The other option is to pass a binding into the view that was shown, so it can changing the binding’s value back to false. You still need to have some sort of state property in your presenting view, but now you pass that *into* the detail view as a binding.

Using this approach, the detail view settings its binding to false also updates the state in the original view, causing the detail view to dismiss – both the detail view and original view point to the same Boolean value, so changing one changes it in the other place too.

Here’s that in code:

```swift
struct DismissingView2: View {
    @Binding var isPresented: Bool

    var body: some View {
        Button("Dismiss Me") {
            isPresented = false
        }
    }
}

struct ContentView: View {
    @State private var showingDetail = false

    var body: some View {
        Button("Show Detail") {
            showingDetail = true
        }
        .sheet(isPresented: $showingDetail) {
            DismissingView2(isPresented: $showingDetail)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-make-a-view-dismiss-itself-2.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to dismiss the keyboard for a TextField | SwiftUI by Example",
  "desc": "How to dismiss the keyboard for a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-for-a-textfield.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dismiss the keyboard when the user scrolls | SwiftUI by Example",
  "desc": "How to dismiss the keyboard when the user scrolls",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-and-compose-custom-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />