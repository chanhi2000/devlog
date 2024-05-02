---
lang: ko-KR
title: How to automatically switch between HStack and VStack based on size class
description: Article(s) > How to automatically switch between HStack and VStack based on size class
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to automatically switch between HStack and VStack based on size class
    - property: og:description
      content: How to automatically switch between HStack and VStack based on size class
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.html
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
  "title": "How to automatically switch between HStack and VStack based on size class | SwiftUI by Example",
  "desc": "How to automatically switch between HStack and VStack based on size class",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us monitor the current size class to decide how things should be laid out, for example switching from a `HStack` when space is plentiful to a `VStack` when space is restricted.

With a little thinking, we can write a new `AdaptiveStack` view that automatically switches between horizontal and vertical layouts for us. This makes creating great layouts on iPad simpler, because our layouts will automatically adjust to split view and slipover scenarios.

Here's how it looks:

```swift
struct AdaptiveStack<Content: View>: View {
    @Environment(\.horizontalSizeClass) var sizeClass
    let horizontalAlignment: HorizontalAlignment
    let verticalAlignment: VerticalAlignment
    let spacing: CGFloat?
    let content: () -> Content

    init(horizontalAlignment: HorizontalAlignment = .center, verticalAlignment: VerticalAlignment = .center, spacing: CGFloat? = nil, @ViewBuilder content: @escaping () -> Content) {
        self.horizontalAlignment = horizontalAlignment
        self.verticalAlignment = verticalAlignment
        self.spacing = spacing
        self.content = content
    }

    var body: some View {
        Group {
            if sizeClass == .compact {
                VStack(alignment: horizontalAlignment, spacing: spacing, content: content)
            } else {
                HStack(alignment: verticalAlignment, spacing: spacing, content: content)
            }
        }
    }
}

struct ContentView: View {
    var body: some View {
        AdaptiveStack {
            Text("Horizontal when there's lots of space")
            Text("but")
            Text("Vertical when space is restricted")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class-1.zip)

![An iPad showing two lines of text side-by-side in an app that spans the right two thirds of the screen. Another iPad showing two lines stacked vertically in an app that spans only the right third of the screen](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class-1~dark.png)

To try it out, run the app in an iPad simulator, then try different sizes of split view – you'll see `ContentView` automatically switch to a `VStack` when space runs low.

Now to explain how the custom view works:

- It monitors the `horizontalSizeClass` environment key, so that it will be updated every time that size class changes.
- We've given it parameters to store horizontal and vertical alignment individually, so you can control exactly how your layout should adapt.
- There's an optional `CGFloat` for spacing, because that's what `VStack` and `HStack` work with. If you wanted even more control you could add `horizontalSpacing` and `verticalSpacing` properties.
- The `content` property is a function that accepts no parameters and returns some sort of content, which is the view builder end users will rely on to create their layouts.
- Our initializer stashes them all away for later.
- Inside the `body` property we can read the horizontal size class, then wrap a call to `content()` in either a `VStack` or `HStack`.

And that's it! The actual code isn't as hard you might imagine, but it gives us some really helpful flexibility.

::: details Similar solutions…

```component VPCard
{
  "title": "How to dynamically change between VStack and HStack | SwiftUI by Example",
  "desc": "How to dynamically change between VStack and HStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-change-between-vstack-and-hstack.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create stacks using VStack and HStack | SwiftUI by Example",
  "desc": "How to create stacks using VStack and HStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-stacks-using-vstack-and-hstack.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a document-based app using FileDocument and DocumentGroup | SwiftUI by Example",
  "desc": "How to create a document-based app using FileDocument and DocumentGroup",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a toggle switch | SwiftUI by Example",
  "desc": "How to create a toggle switch",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toggle-switch.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />