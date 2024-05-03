---
lang: ko-KR
title: How to create an adaptive layout with ViewThatFits
description: Article(s) > How to create an adaptive layout with ViewThatFits
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
      content: Article(s) > How to create an adaptive layout with ViewThatFits
    - property: og:description
      content: How to create an adaptive layout with ViewThatFits
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-an-adaptive-layout-with-viewthatfits.html
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
  "title": "How to create an adaptive layout with ViewThatFits | SwiftUI by Example",
  "desc": "How to create an adaptive layout with ViewThatFits",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-an-adaptive-layout-with-viewthatfits",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI gives us `ViewThatFits` so that we can have it select from one of several possible layouts based on what fits into the available screen space. This makes it a fantastic way to make sure your app looks great from the largest tvOS screen down to the smallest Apple Watch.

In its simplest form, you should list all the layout alternatives you want from most preferred to least preferred, and SwiftUI will try them all until it finds one that fits into the space:

```swift
ViewThatFits {
    Label("Welcome to AwesomeApp", systemImage: "bolt.shield")
        .font(.largeTitle)

    Label("Welcome", systemImage: "bolt.shield")
        .font(.largeTitle)

    Label("Welcome", systemImage: "bolt.shield")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-an-adaptive-layout-with-viewthatfits-1.zip)

That attempts a long title in large text, a short title in large text, then finally a short title in small text – SwiftUI will try them in that order, and stop as soon as one fits into the available space.

This is particularly useful when you're working with views that can be arranged vertically or horizontally depending on space. For example, this creates a view with four different buttons, then decides to arrange them horizontally or vertically depending on how much space there is:

```swift
struct OptionsView: View {
    var body: some View {
        Button("Log in") { }
            .buttonStyle(.borderedProminent)

        Button("Create Account") { }
            .buttonStyle(.bordered)

        Button("Settings") { }
            .buttonStyle(.bordered)

        Spacer().frame(width: 50, height: 50)

        Button("Need Help?") { }
    }
}

struct ContentView: View {
    var body: some View {
        ViewThatFits {
            HStack(content: OptionsView.init)
            VStack(content: OptionsView.init)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-an-adaptive-layout-with-viewthatfits-2.zip)

Where things get more interesting is how `ViewThatFits` handles handles text layout. Text in SwiftUI prefers to sit on one line, and by default `ViewThatFits` will prefer to avoid layouts the cause text to wrap. So, when space is limited code like this will default to a `VStack` rather than use a `HStack` with wrapping text:

```swift
ViewThatFits {
    HStack {
        Text("The rain")
        Text("in Spain")
        Text("falls mainly")
        Text("on the Spaniards")
    }

    VStack {
        Text("The rain")
        Text("in Spain")
        Text("falls mainly")
        Text("on the Spaniards")
    }
}
.font(.title)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-an-adaptive-layout-with-viewthatfits-3.zip)

What's happening here is that `ViewThatFits` is measuring our text both horizontally and vertically, and is trying to find something that fits the text in both those dimensions – something where the text fits all on one line, without being truncated vertically.

This sometimes causes problems, but fortunately we can tell `ViewThatFits` to care about only one dimension so that we can get more control.

For example, say you wanted to display some terms and conditions to the user, and have it as fixed text if it can be fitted into the space, but scrolling text otherwise. This kind of code won't work as you expect:

```swift
struct ContentView: View {
    let terms = String(repeating: "abcde ", count: 100)

    var body: some View {
        ViewThatFits {
            Text(terms)

            ScrollView {
                Text(terms)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-an-adaptive-layout-with-viewthatfits-4.zip)

Unless you have a huge screen, that will _always_ choose the scrolling version because we asked `ViewThatFits` to care about both horizontal and vertical axes for our text. This means as soon as the text runs across more than one line, SwiftUI will prefer to avoid that layout.

To fix this we need to restrict `ViewThatFits` to measure only the vertical axis, like this:

```swift
struct ContentView: View {
    let terms = String(repeating: "abcde ", count: 100)

    var body: some View {
        ViewThatFits(in: .vertical) {
            Text(terms)

            ScrollView {
                Text(terms)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-an-adaptive-layout-with-viewthatfits-5.zip)

Now that will allow the text to wrap horizontally, but as soon as it runs out of _vertical_ space SwiftUI will move on to the `ScrollView`.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a custom layout using the Layout protocol | SwiftUI by Example",
  "desc": "How to create a custom layout using the Layout protocol",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-custom-layout-using-the-layout-protocol.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a two-column or three-column layout with NavigationSplitView | SwiftUI by Example",
  "desc": "How to create a two-column or three-column layout with NavigationSplitView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in a navigation view | SwiftUI by Example",
  "desc": "How to preview your layout in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-a-navigation-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control layout priority using layoutPriority() | SwiftUI by Example",
  "desc": "How to control layout priority using layoutPriority()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-layout-priority-using-layoutpriority.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in portrait or landscape | SwiftUI by Example",
  "desc": "How to preview your layout in portrait or landscape",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-portrait-or-landscape.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />