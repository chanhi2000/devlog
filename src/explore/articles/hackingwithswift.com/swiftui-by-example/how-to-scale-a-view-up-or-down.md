---
lang: ko-KR
title: How to scale a view up or down
description: Article(s) > How to scale a view up or down
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
      content: Article(s) > How to scale a view up or down
    - property: og:description
      content: How to scale a view up or down
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-scale-a-view-up-or-down.html
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
  "title": "How to scale a view up or down | SwiftUI by Example",
  "desc": "How to scale a view up or down",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-scale-a-view-up-or-down",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `scaleEffect()` modifier lets us increase or decrease the size of a view freely.

For example, we could make a text view five times its regular size like this:

```swift
Text("Up we go")
    .scaleEffect(5)
    .frame(width: 300, height: 300)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-scale-a-view-up-or-down-1.zip)

![The large, slightly blurry text “Up we go”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-scale-a-view-up-or-down-1~dark@2x.png)

You can scale the X and Y dimensions independently if you want, allowing you to squash views like this:

```swift
Text("Up we go")
    .scaleEffect(x: 1, y: 5)
    .frame(width: 300, height: 300)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-scale-a-view-up-or-down-2.zip)

![The text “Up we go” stretched vertically.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-scale-a-view-up-or-down-2~dark@2x.png)

If you want more control, you can specify an anchor for your scaling like this:

```swift
VStack {
    Text("Up we go")
        .scaleEffect(2, anchor: .bottomTrailing)
    Text("Up we go")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-scale-a-view-up-or-down-3.zip)

![Two lines, both reading “Up we go”. The upper line is both larger and offset to the left such that the lines' trailing edges align.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-scale-a-view-up-or-down-3~dark@2x.png)

That makes the text view twice its regular size, scaled from the bottom-right corner.

::: tip

Scaling up a view won’t cause it to be redrawn at its new size, only stretched up or down. This means small text will look fuzzy, and small images might look pixellated or blurry.

:::

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
  "title": "How to make a view dismiss itself | SwiftUI by Example",
  "desc": "How to make a view dismiss itself",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-view-dismiss-itself.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-and-compose-custom-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

What’s the difference between @ObservedObject, @State, and @EnvironmentObject? <!-- TODO: add link -->

:::

---

<TagLinks />