---
lang: ko-KR
title: How to rotate a view in 3D
description: Article(s) > How to rotate a view in 3D
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
      content: Article(s) > How to rotate a view in 3D
    - property: og:description
      content: How to rotate a view in 3D
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-rotate-a-view-in-3d.html
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
  "title": "How to rotate a view in 3D | SwiftUI by Example",
  "desc": "How to rotate a view in 3D",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-rotate-a-view-in-3d",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `rotation3DEffect()` modifier lets us rotate views in 3D space to create beautiful effects in almost no code. It accepts two parameters: what angle to rotate (in degrees or radians), plus a tuple containing the X, Y, and Z axis around which to perform the rotation.

::: important

If you’ve never done 3D rotation before you should think about the X/Y/Z axes as being skewers through your views. The X axis goes horizontally, so if you rotate on the X axis it’s like putting a horizontal skewer through your view – any rotation makes the top or bottom nearer or further, but won’t adjust the leading and trailing edges.

:::

So, if you wanted to rotate some text by 45 degrees around the X axis (which would cause the top of the text to look further away than the bottom), you might write this:

```swift
Text("EPISODE LLVM")
    .font(.largeTitle)
    .foregroundStyle(.yellow)
    .rotation3DEffect(.degrees(45), axis: (x: 1, y: 0, z: 0))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-rotate-a-view-in-3d-1.zip)

![The text “EPISODE LLVM” in yellow, distorted such that the top appears further into the screen, evoking the Star Wars opening exposition crawl.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-rotate-a-view-in-3d-1~dark@2x.png)

Yes, you can make your own Star Wars crawl in SwiftUI.

::: details Similar solutions…

```component VPCard
{
  "title": "How to rotate a view | SwiftUI by Example",
  "desc": "How to rotate a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-rotate-a-view.md",
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
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />