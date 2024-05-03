---
lang: ko-KR
title: How to add a border to a TextField
description: Article(s) > How to add a border to a TextField
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
      content: Article(s) > How to add a border to a TextField
    - property: og:description
      content: How to add a border to a TextField
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-border-to-a-textfield.html
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
  "title": "How to add a border to a TextField | SwiftUI by Example",
  "desc": "How to add a border to a TextField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-border-to-a-textfield",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated for iOS 15**

SwiftUI's `TextField` view has no styling by default, which means it's an empty space on the screen. If that fits the style you want, great – you're done. But many of us will prefer to add a border around the text field to make it clearer.

If you want to get the “rounded rect” text field style that we're used to with `UITextField`, you should use the `.textFieldStyle(.roundedBorder))` modifier, like this:

```swift
struct ContentView: View {
    @State private var name: String = "Tim"

    var body: some View {
        VStack(alignment: .leading) {
            TextField("Enter your name", text: $name)
                .textFieldStyle(.roundedBorder)
            Text("Hello, \(name)!")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-border-to-a-textfield-1.zip)

A text field with a thin grey border above the text “Hello Tim!”

::: important

If you're using Xcode 12 you need to use `RoundedBorderTextFieldStyle()` rather than `.roundedBorder`.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to draw a border around a view | SwiftUI by Example",
  "desc": "How to draw a border around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-around-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a border inside a view | SwiftUI by Example",
  "desc": "How to draw a border inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a marching ants border effect | SwiftUI by Example",
  "desc": "How to create a marching ants border effect",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-marching-ants-border-effect.md",
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
  "title": "How to add a placeholder to a TextField | SwiftUI by Example",
  "desc": "How to add a placeholder to a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-placeholder-to-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />