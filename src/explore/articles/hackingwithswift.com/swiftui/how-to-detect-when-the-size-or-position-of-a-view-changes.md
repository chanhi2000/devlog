---
lang: ko-KR
title: How to detect when the size or position of a view changes
description: Article(s) > How to detect when the size or position of a view changes
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
      content: Article(s) > How to detect when the size or position of a view changes
    - property: og:description
      content: How to detect when the size or position of a view changes
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes.html
next: /explore/articles/hackingwithswift.com/swiftui/how-to-create-stacks-using-vstack-and-hstack.md
date: 2024-06-21
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
  "title": "How to detect when the size or position of a view changes | SwiftUI by Example",
  "desc": "How to detect when the size or position of a view changes",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**New in iOS 18**

SwiftUI’s `onGeometryChange()` modifier lets us track when a view's frame, size, or safe area insets change, then take any action as a result. Additionally, this modifier will also report the *initial* value of whatever you're watching, so it's helpful for both one-off and continuous monitoring.

For example, we could print the frame of a view when it's first created and whenever it changes, like this:

```swift
Text("Hello, world")
    .onGeometryChange(for: CGRect.self) { proxy in
        proxy.frame(in: .global)
    } action: { newValue in
        print("Frame is now \(newValue)")
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes-1.zip)

*Frame* refers to the view's size and position, which means that rotating your device or changing window size is likely to trigger the action closure.

Breaking this modifier down, you'll see it accepts three values:

1. The type of value you're interested in. We're watching a `CGRect` in the code above, but you might also use `Double` if you only wanted one value, or perhaps use `Bool` if the thing you're watching can be boiled down to a simple true or false.
2. A transformation closure, which is given a `GeometryProxy` and should return a value of whatever you specified, e.g. a `CGRect`. This is the value SwiftUI will watch for changes going forward.
3. An action closure, which will be triggered whenever the watched value changes.

::: important

Although you can use the action closure to set view state, make sure you don't accidentally get stuck in a layout loop. For example, the code below gets into a loop because it tries to display the view's size in the view itself:

```swift
struct ContentView: View {
    @State private var textFrame = CGRect.zero

    var body: some View {
        Text("Size is: \(textFrame)")
            .onGeometryChange(for: CGRect.self) { proxy in
                proxy.frame(in: .global)
            } action: { newValue in
                textFrame = newValue
            }
    }
}
```

:::

Being able to track a view's size and position unlocks a variety of abilities, such as being able to create views elsewhere with a matched size. For example, in the code below the rectangle always has the same frame as the text view:

```swift
struct ContentView: View {
    @State private var textFrame = CGRect.zero
    @State private var textSize = 17.0

    var body: some View {
        VStack {
            Text("Hello, world")
                .font(.system(size: textSize))
                .onGeometryChange(for: CGRect.self) { proxy in
                    proxy.frame(in: .global)
                } action: { newValue in
                    textFrame = newValue
                }

            Rectangle()
                .frame(width: textFrame.width, height: textFrame.height)

            Slider(value: $textSize, in: 10...30)
                .padding()
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes-2.zip)

::: details Similar solutions…

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
  "title": "How to position and style subviews that come from a different view | SwiftUI by Example",
  "desc": "How to position and style subviews that come from a different view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to position views in a grid using LazyVGrid and LazyHGrid | SwiftUI by Example",
  "desc": "How to position views in a grid using LazyVGrid and LazyHGrid",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the position of a view using its offset | SwiftUI by Example",
  "desc": "How to adjust the position of a view using its offset",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to position views in a fixed grid | SwiftUI by Example",
  "desc": "How to position views in a fixed grid",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-fixed-grid.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />