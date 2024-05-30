---
lang: ko-KR
title: How to adjust the accent color of a view
description: Article(s) > How to adjust the accent color of a view
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
      content: Article(s) > How to adjust the accent color of a view
    - property: og:description
      content: How to adjust the accent color of a view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-accent-color-of-a-view.html
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
  "title": "How to adjust the accent color of a view | SwiftUI by Example",
  "desc": "How to adjust the accent color of a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-accent-color-of-a-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

iOS uses tint colors to give apps a coordinated theme, and the same functionality is available in SwiftUI under the name *accent colors*. Just like in UIKit, when you set the accent color of one view it affects all those inside it, so if you set the access color of your top-level control then everything gets colored.

For example, this creates a button inside a `VStack`, then gives it an orange accent color:

```swift
VStack {
    Button("Press Here") {
        print("Button pressed!")
    }
}
.accentColor(.orange)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-accent-color-of-a-view-1.zip)

![The text “Press Here” in orange.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-accent-color-of-a-view-1~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to dynamically adjust the color of an SF Symbol | SwiftUI by Example",
  "desc": "How to dynamically adjust the color of an SF Symbol",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-color-of-an-sf-symbol.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust List row separator visibility and color | SwiftUI by Example",
  "desc": "How to adjust List row separator visibility and color",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-list-row-separator-visibility-and-color.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the opacity of a view | SwiftUI by Example",
  "desc": "How to adjust the opacity of a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-opacity-of-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />