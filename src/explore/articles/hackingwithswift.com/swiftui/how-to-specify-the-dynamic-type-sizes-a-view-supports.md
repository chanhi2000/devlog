---
lang: ko-KR
title: How to specify the Dynamic Type sizes a view supports
description: Article(s) > How to specify the Dynamic Type sizes a view supports
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
      content: Article(s) > How to specify the Dynamic Type sizes a view supports
    - property: og:description
      content: How to specify the Dynamic Type sizes a view supports
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports.html
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
  "title": "How to specify the Dynamic Type sizes a view supports | SwiftUI by Example",
  "desc": "How to specify the Dynamic Type sizes a view supports",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s automatic support of Dynamic Type means our views are free to grow and shrink according to the user’s preference. However, sometimes you might need to place limits on just how far your user interface is able to adjust, and for that we have the `dynamicTypeSize()` modifier.

This can used with a fixed value, meaning that your view will ignore all Dynamic Type sizes:

```swift
Text("This will stay small")
    .dynamicTypeSize(.xxLarge)
```

This is helpful if you want to force a particular kind of preview, for example.

You can also specify ranges, such as this one that allows any size up to and including the large size:

```swift
Text("This won't go above large")
    .dynamicTypeSize(...DynamicTypeSize.large)
```

If you enable Xcode’s environment overrides, you can see how each of these variants adjust:

```swift
VStack {
    Text("This will stay small")
        .dynamicTypeSize(.small)
    Text("This won't go above large")
        .dynamicTypeSize(...DynamicTypeSize.large)
    Text("This will scale within a range")
        .dynamicTypeSize(DynamicTypeSize.large...DynamicTypeSize.xxxLarge)
    Text("This will scale to any size")
}
```

Remember, many users rely on larger Dynamic Type sizes in order to use your app, and a surprisingly large number of users use it to cram more information onto their screen. So, try to avoid limiting the sizes you support to those times when it’s really necessary.

::: details Similar solutions…

```component VPCard
{
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to provide relative sizes using GeometryReader | SwiftUI by Example",
  "desc": "How to provide relative sizes using GeometryReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-provide-relative-sizes-using-geometryreader.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to use Dynamic Type with a custom font | SwiftUI by Example",
  "desc": "How to use Dynamic Type with a custom font",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-dynamic-type-with-a-custom-font.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a list of dynamic items | SwiftUI by Example",
  "desc": "How to create a list of dynamic items",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-of-dynamic-items.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />