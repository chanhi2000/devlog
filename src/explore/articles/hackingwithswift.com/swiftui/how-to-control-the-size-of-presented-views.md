---
lang: ko-KR
title: How to control the size of presented views
description: Article(s) > How to control the size of presented views
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
      content: Article(s) > How to control the size of presented views
    - property: og:description
      content: How to control the size of presented views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-control-the-size-of-presented-views.html
next: /explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset.md
date: 2023-06-21
isOriginal: false
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
  "title": "How to control the size of presented views | SwiftUI by Example",
  "desc": "How to control the size of presented views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-control-the-size-of-presented-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**Improved in iOS 18**

SwiftUI has a dedicated `presentationSizing()` modifier that gives us fine-grained control over how presented views are sized on the screen.

**This is _different_ from the `presentationDetents()` modifier that allows us to create bottom sheets and similar – `presentationSizing()` is for controlling the *shape* of the view.**

For example, we could make a `DetailView` struct such as this one

```swift
struct DetailView: View {
    var body: some View {
        Text("Detail View")
            .font(.largeTitle)
            .presentationSizing(.form)
    }
}
```

That uses the `.form` setting, which is one of the built-in sizes – on iPhone it will just be a regular sheet, but on iPad it's a large square shape that's centered neatly.

You don't need to do anything special to present a view sized this way; just using the regular `sheet()` modifier is fine, like this:

```swift
struct ContentView: View {
    @State private var showingSheet = false

    var body: some View {
        Button("Show Detail View") {
            showingSheet.toggle()
        }
        .sheet(isPresented: $showingSheet, content: DetailView.init)
    }
}
```

Another great option for `presentationSizing()` is `.fitted`, which sizes the sheet according to its content. Even better, this can be *added* to other sizes: you can use `.form.fitted(horizontal: true, vertical: false)` to mean "start with the form size, but shrink horizontally to fit my content".

If you have more complex layouts, try using sticky sizing to tell SwiftUI to expand the sheet automatically in one or both dimensions based on the size of your content. It will still honor the minimum size you request, but it has that potential to grow as needed.

The best way to understand sticky sizing is to try it yourself. In the code below, tapping the button adds more text to `content`, and it will eventually cause the sheet to expand because of that sticky sizing:

```swift
struct ContentView: View {
    @State private var content = "This is some very important content."

    var body: some View {
        VStack {
            Text(content)
                .fixedSize(horizontal: false, vertical: true)

            Button("Tap to expand") {
                content += "This is more important content. This is more important content. This is more important content. This is more important content."
            }
        }
        .font(.largeTitle)
        .presentationSizing(.form.sticky())
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-control-the-size-of-presented-views-2.zip)

::: tip

I used `fixedSize()` on the text to stop it from clipping.

:::

You can go even further if you want – you could use fitted *and* sticky sizing.

Where things get really interesting is the `PresentationSizing` protocol, which lets you create your own sizes. Adopting this protocol means adding just one method that asks you to propose a size for some content.

For example, we could make a `PaddedSizing` type that asks its contents for their ideal size, then adds 100 points of extra width and height:

```swift
struct PaddedSizing: PresentationSizing {
    func proposedSize(for root: PresentationSizingRoot, context: PresentationSizingContext) -> ProposedViewSize {
        let size = root.sizeThatFits(.unspecified)
        return ProposedViewSize(width: size.width + 100, height: size.height + 100)
    }
}
```

It's not required, but adding a small extension on `PresentationSizing` makes this new sizing type easier to use:

```swift
extension PresentationSizing where Self == PaddedSizing {
    static var padded: Self {
        PaddedSizing()
    }
}
```

And now we can use that by adding `.presentationSizing(.padded)` to any sheet content.

::: details Similar solutions…

```component VPCard
{
  "title": "How to make a fixed size Spacer | SwiftUI by Example",
  "desc": "How to make a fixed size Spacer",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-fixed-size-spacer.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the size of a view relative to its container | SwiftUI by Example",
  "desc": "How to adjust the size of a view relative to its container",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-size-of-a-view-relative-to-its-container.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read the size and position of a scrollview | SwiftUI by Example",
  "desc": "How to read the size and position of a scrollview",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-size-and-position-of-a-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to animate the size of text | SwiftUI by Example",
  "desc": "How to animate the size of text",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-animate-the-size-of-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />