---
lang: ko-KR
title: How to present a new view using sheets
description: Article(s) > How to present a new view using sheets
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
      content: Article(s) > How to present a new view using sheets
    - property: og:description
      content: How to present a new view using sheets
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-a-new-view-using-sheets.html
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-pick-options-from-a-menu.md
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
  "title": "How to present a new view using sheets | SwiftUI by Example",
  "desc": "How to present a new view using sheets",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-present-a-new-view-using-sheets",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI’s sheets are used to present new views over existing ones, while still allowing users to drag down to dismiss the new view when they are ready.

To use a sheet, give it something to show (some text, an image, a custom view, etc), add a Boolean that defines whether the detail view should be showing, then attach it to your main view as a modal sheet.

For example, this creates a simple detail view, then presents it from `ContentView` when a button is tapped:

```swift
struct SheetView: View {
    @Environment(\.dismiss) var dismiss

    var body: some View {
        Button("Press to dismiss") {
            dismiss()
        }
        .font(.title)
        .padding()
        .background(.black)
    }
}

struct ContentView: View {
    @State private var showingSheet = false

    var body: some View {
        Button("Show Sheet") {
            showingSheet.toggle()
        }
        .sheet(isPresented: $showingSheet) {
            SheetView()
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-present-a-new-view-using-sheets-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-present-a-new-view-using-sheets-1~dar.mp4" />

::: important

If you’re targeting iOS 14 or below, you should use `@Environment(\.presentationMode) var presentationMode` and `presentationMode.wrappedValue.dismiss()` instead.

:::

Unlike navigation links, sheets don’t require a navigation stack to work.

::: tip

If you don’t want your sheet to be dismissible by dragging downwards on iOS, use the `fullScreenCover()` modifier instead.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to present multiple sheets | SwiftUI by Example",
  "desc": "How to present multiple sheets",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-multiple-sheets.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to present a full screen modal view using fullScreenCover() | SwiftUI by Example",
  "desc": "How to present a full screen modal view using fullScreenCover()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-a-full-screen-modal-view-using-fullscreencover.md",
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
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to push a new view onto a NavigationStack | SwiftUI by Example",
  "desc": "How to push a new view onto a NavigationStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-push-a-new-view-onto-a-navigationstack.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />