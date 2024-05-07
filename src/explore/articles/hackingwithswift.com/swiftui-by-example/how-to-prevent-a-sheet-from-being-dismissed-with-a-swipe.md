---
lang: ko-KR
title: How to prevent a sheet from being dismissed with a swipe
description: Article(s) > How to prevent a sheet from being dismissed with a swipe
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
      content: Article(s) > How to prevent a sheet from being dismissed with a swipe
    - property: og:description
      content: How to prevent a sheet from being dismissed with a swipe
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.html
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
  "title": "How to prevent a sheet from being dismissed with a swipe | SwiftUI by Example",
  "desc": "How to prevent a sheet from being dismissed with a swipe",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI provides the `interactiveDismissDisabled()` modifier to control whether the user can swipe downwards to dismiss a sheet. Although swipe to dismiss is usually nice to have, sometimes that’s something you can’t allow – if the user must accept some terms and conditions, for example, then they must take some sort of action before the sheet can be dismissed.

In its simplest form, you just need to attach the `interactiveDismissDisabled()` modifier directly to your sheet content, like this:

```swift
struct ExampleSheet: View {
    @Environment(\.dismiss) var dismiss

    var body: some View {
        VStack {
            Text("Sheet view")

            Button("Dismiss", action: close)
        }
        .interactiveDismissDisabled()
    }

    func  close() {
        dismiss()
    }
}

struct ContentView: View {
    @State private var showingSheet = false

    var body: some View {
        Button("Show Sheet") {
            showingSheet.toggle()
        }
        .sheet(isPresented: $showingSheet, content: ExampleSheet.init)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe-1~dark.mp4" />

If you prefer, you can bind a Boolean to the modifier to allow swipe to dismiss only when some criteria is successfully met. So, our terms and conditions example might look like this:

```swift
struct ExampleSheet: View {
    @Environment(\.dismiss) var dismiss
    @State private var termsAccepted = false

    var body: some View {
        VStack {
            Text("Terms and conditions")
                .font(.title)
            Text("Lots of legalese here.")
            Toggle("Accept", isOn: $termsAccepted)
        }
        .padding()
        .interactiveDismissDisabled(!termsAccepted)
    }

    func  close() {
        dismiss()
    }
}

struct ContentView: View {
    @State private var showingSheet = false

    var body: some View {
        Button("Show Sheet") {
            showingSheet.toggle()
        }
        .sheet(isPresented: $showingSheet, content: ExampleSheet.init)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe-2~dark.mp4" />

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
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show an action sheet | SwiftUI by Example",
  "desc": "How to show an action sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-action-sheet.md",
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
  "title": "Adding swipe to delete and EditButton | SwiftUI by Example",
  "desc": "Adding swipe to delete and EditButton",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/adding-swipe-to-delete-and-editbutton.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />