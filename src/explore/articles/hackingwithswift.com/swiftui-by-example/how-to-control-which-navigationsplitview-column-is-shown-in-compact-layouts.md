---
lang: ko-KR
title: How to control which NavigationSplitView column is shown in compact layouts
description: Article(s) > How to control which NavigationSplitView column is shown in compact layouts
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
      content: Article(s) > How to control which NavigationSplitView column is shown in compact layouts
    - property: og:description
      content: How to control which NavigationSplitView column is shown in compact layouts
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-an-inspector-to-any-view.html
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
  "title": "How to control which NavigationSplitView column is shown in compact layouts | SwiftUI by Example",
  "desc": "How to control which NavigationSplitView column is shown in compact layouts",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-an-inspector-to-any-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI's `inspector()` modifier lets us add an inspector view anywhere we need it. This works just like Xcode: the inspector slides in on the trailing edge of your UI, and can work alongside `NavigationStack` or `NavigationSplitView` as needed.

As a simple example, this brings up an inspector view when a button is pressed:

```swift
struct ContentView: View {
    @State private var isShowingInspector = false

    var body: some View {
        Button("Hello, world!") {
            isShowingInspector.toggle()
        }
        .font(.largeTitle)
        .inspector(isPresented: $isShowingInspector) {
            Text("Inspector View")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-an-inspector-to-any-view-1.zip)

![A button that opens then closes an inspector window when pressed.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-an-inspector-to-any-view-1@2x.gif)

When there's lots of space, such as with full-screen iPad apps or macOS, the inspector sits alongside the button. However, when space is restricted such as on iPhone, the inspector slides up as a sheet.

On platforms that support it, you can adjust how much space the inspector occupies by providing it with a fixed size (`.inspectorColumnWidth(500)`) – or by providing it with a range of sizes (`.inspectorColumnWidth(min: 50, ideal: 150, max: 200)`). This modifier should be applied to the contents of the inspector, like this:

```swift
struct ContentView: View {
    @State private var isShowingInspector = false

    var body: some View {
        Button("Hello, world!") {
            isShowingInspector.toggle()
        }
        .font(.largeTitle)
        .inspector(isPresented: $isShowingInspector) {
            Text("Inspector View")
                .inspectorColumnWidth(min: 50, ideal: 150, max: 200)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-an-inspector-to-any-view-2.zip)

![A button that opens then closes an inspector window when pressed, but this time the inspector starts small.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-an-inspector-to-any-view-2~dark@2x.gif)

The ideal size will be used for your inspector's size when it's first shown, but the system will remember changes from the user.

You can add multiple inspectors if you want, although I'm not sure it's a good idea.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add Metal shaders to SwiftUI views using layer effects | SwiftUI by Example",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add advanced text styling using AttributedString | SwiftUI by Example",
  "desc": "How to add advanced text styling using AttributedString",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-advanced-text-styling-using-attributedstring.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a view dismiss itself | SwiftUI by Example",
  "desc": "How to make a view dismiss itself",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-view-dismiss-itself.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />