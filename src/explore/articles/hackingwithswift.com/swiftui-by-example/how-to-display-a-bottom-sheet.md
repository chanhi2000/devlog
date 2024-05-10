---
lang: ko-KR
title: How to display a bottom sheet
description: Article(s) > How to display a bottom sheet
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
      content: Article(s) > How to display a bottom sheet
    - property: og:description
      content: How to display a bottom sheet
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-a-bottom-sheet.html
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
  "title": "How to display a bottom sheet | SwiftUI by Example",
  "desc": "How to display a bottom sheet",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-display-a-bottom-sheet",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI’s `presentationDetents()` modifier lets us create sheets that slide up from the bottom of our view, but occupy only part of the screen – how much is down to us, and we have as much or as little control as we want.

To use the modifier, provide it with a set of the sizes you want to support, like this:

```swift
struct ContentView: View {
    @State private var showingCredits = false

    var body: some View {
        Button("Show Credits") {
            showingCredits.toggle()
        }
        .sheet(isPresented: $showingCredits) {
            Text("This app was brought to you by Hacking with Swift")
                .presentationDetents([.medium, .large])
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-display-a-bottom-sheet-1.zip)

By supporting both `.medium` (about half the screen) and `.large` (all the screen), SwiftUI will create a resize handle to let the user adjust the sheet between those two sizes. If you don’t want that, add `presentationDragIndicator(.hidden)` to the contents of your sheet, like this:

```swift
struct ContentView: View {
    @State private var showingCredits = false

    var body: some View {
        Button("Show Credits") {
            showingCredits.toggle()
        }
        .sheet(isPresented: $showingCredits) {
            Text("This app was brought to you by Hacking with Swift")
                .presentationDetents([.medium, .large])
                .presentationDragIndicator(.hidden)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-display-a-bottom-sheet-2.zip)

::: tip

If you don’t ask for any detent, the default is `.large`.

:::

Be careful: Even with custom presentation detents in place, sheets will automatically take up the full screen when there’s a compact height size class – an iPhone in landscape, for example. Make sure you provide a way to dismiss your sheet if you support this scenario.

As well as specifying one of the built-in sizes, you can also provide a custom fraction in the range of 0 through 1. For example, this creates a sheet taking up the bottom 15% of the screen:

```swift
struct ContentView: View {
    @State private var showingCredits = false

    var body: some View {
        Button("Show Credits") {
            showingCredits.toggle()
        }
        .sheet(isPresented: $showingCredits) {
            Text("This app was brought to you by Hacking with Swift")
                .presentationDetents([.fraction(0.15)])
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-display-a-bottom-sheet-3.zip)

Or you can specify an exact point height like this:

```swift
struct ContentView: View {
    @State private var showingCredits = false

    var body: some View {
        Button("Show Credits") {
            showingCredits.toggle()
        }
        .sheet(isPresented: $showingCredits) {
            Text("This app was brought to you by Hacking with Swift")
                .presentationDetents([.height(300)])
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-display-a-bottom-sheet-4.zip)

You can attach as many detents to your views as you need – just add them all to the set of detents, and SwiftUI will take care of the rest. For example, this lets the user go between 10% and 100% in 10% steps:

```swift
struct ContentView: View {
    @State private var showingCredits = false

    let heights = stride(from: 0.1, through: 1.0, by: 0.1).map { PresentationDetent.fraction($0) }

    var body: some View {
        Button("Show Credits") {
            showingCredits.toggle()
        }
        .sheet(isPresented: $showingCredits) {
            Text("This app was brought to you by Hacking with Swift")
                .presentationDetents(Set(heights))
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-display-a-bottom-sheet-5.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to make a ScrollView start at the bottom | SwiftUI by Example",
  "desc": "How to make a ScrollView start at the bottom",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scrollview-start-at-the-bottom.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to customize the display mode of NavigationSplitView | SwiftUI by Example",
  "desc": "How to customize the display mode of NavigationSplitView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-display-mode-of-navigationsplitview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to display solid shapes | SwiftUI by Example",
  "desc": "How to display solid shapes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-solid-shapes.md",
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
  "title": "How to show an action sheet | SwiftUI by Example",
  "desc": "How to show an action sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-action-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />