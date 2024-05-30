---
lang: ko-KR
title: How to provide relative sizes using GeometryReader
description: Article(s) > How to provide relative sizes using GeometryReader
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
      content: Article(s) > How to provide relative sizes using GeometryReader
    - property: og:description
      content: How to provide relative sizes using GeometryReader
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-relative-sizes-using-geometryreader.html
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
  "title": "How to provide relative sizes using GeometryReader | SwiftUI by Example",
  "desc": "How to provide relative sizes using GeometryReader",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-provide-relative-sizes-using-geometryreader",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Although it's usually best to let SwiftUI perform automatic layout using stacks, it's also possible to give our views sizes relative to their containers using `GeometryReader`. For example, if you wanted two views to take up half the available width on the screen, this wouldn't be possible using hard-coded values because we don't know ahead of time what the screen width will be.

To solve this, `GeometryReader` provides us with an input value telling us the width and height we have available, and we can then use that with whatever calculations we need. So, if we had two views and we wanted one to take up a third of the screen and the other take up two thirds, we could write this:

```swift
GeometryReader { geometry in
    HStack(spacing: 0) {
        Text("Left")
            .font(.largeTitle)
            .foregroundStyle(.black)
            .frame(width: geometry.size.width * 0.33)
            .background(.yellow)
        Text("Right")
            .font(.largeTitle)
            .foregroundStyle(.black)
            .frame(width: geometry.size.width * 0.67)
            .background(.orange)
    }
}
.frame(height: 50)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-provide-relative-sizes-using-geometryreader-1.zip)

![A yellow rectangle with the word “Left” beside a twice as wide orange rectangle with the word “Right”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-provide-relative-sizes-using-geometryreader-1~dark.png)

::: note

`GeometryReader` doesn't take into account any offsets or spacing further down in the view hierarchy, which is why there is no spacing on the `HStack` – if we allowed spacing in there, the views would be a little too large for the available space.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the size of a view relative to its container | SwiftUI by Example",
  "desc": "How to adjust the size of a view relative to its container",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-size-of-a-view-relative-to-its-container.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to specify the Dynamic Type sizes a view supports | SwiftUI by Example",
  "desc": "How to specify the Dynamic Type sizes a view supports",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-specify-the-dynamic-type-sizes-a-view-supports.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to provide visual structure using foreground styles | SwiftUI by Example",
  "desc": "How to provide visual structure using foreground styles",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-visual-structure-using-foreground-styles.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create 3D effects like Cover Flow using ScrollView and GeometryReader | SwiftUI by Example",
  "desc": "How to create 3D effects like Cover Flow using ScrollView and GeometryReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />