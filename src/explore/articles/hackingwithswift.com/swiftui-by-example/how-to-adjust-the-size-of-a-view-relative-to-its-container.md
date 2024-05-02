---
lang: ko-KR
title: How to adjust the size of a view relative to its container
description: Article(s) > How to adjust the size of a view relative to its container
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
      content: Article(s) > How to adjust the size of a view relative to its container
    - property: og:description
      content: How to adjust the size of a view relative to its container
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-size-of-a-view-relative-to-its-container.html
next: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-stacks-using-vstack-and-hstack.md
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
  "title": "How to adjust the size of a view relative to its container | SwiftUI by Example",
  "desc": "How to adjust the size of a view relative to its container",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-size-of-a-view-relative-to-its-container",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI's `containerRelativeFrame()` is a simple but powerful way to make views have a size relative to their container, which might be their whole window, the scroll view they are inside, or even just one column in your layout.

There are three core values you need to provide it: which axis you're trying to set, how many parts you want to divide the space into, and also how many parts should be given to each view.

For example, this tells views inside a `ScrollView` that they should be 2/5ths the width of their container:

```swift
ScrollView(.horizontal, showsIndicators: false) {
    HStack {
        ForEach(0..<10) { i in
            Text("Item \(i)")
                .foregroundStyle(.white)
                .containerRelativeFrame(.horizontal, count: 5, span: 2, spacing: 10)
                .background(.blue)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-size-of-a-view-relative-to-its-container-1.zip)

![A horizontally scrolling list of views, where each view is 2/5ths the width of the parent view.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-size-of-a-view-relative-to-its-container-1~dark.gif)

To be clear: the `count` parameter refers to how many parts the scroll view's horizontal space should be split into, and the `span` parameter refers to how many parts should be allocated to each text view. We've used 5 for `count`, meaning that the scroll view's horizontal space will be split into 5, then used 2 for `span`, meaning that each text view will be given 2/5ths of the space.

This kind of uneven span means users will see 2.5 views when the app runs – they see two things immediately, then see just enough of the next thing to know that scrolling is possible.

Exactly how you divide your space is down to you, but using a count of 12 is common in websites because it's divisible by 1, 2, 3, 4, 6, and 12, giving you lots of flexibility.

There are two extra things to know about using container relative frames:

1. You can provide more than one axis if you want, using `[.horizontal, .vertical]`.
2. The default alignment is `.center`, but you can specify a custom `alignment` parameter with whatever you want.

::: details Similar solutions…

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
  "title": "How to adjust the position of a view using its offset | SwiftUI by Example",
  "desc": "How to adjust the position of a view using its offset",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-position-of-a-view-using-its-offset.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to provide relative sizes using GeometryReader | SwiftUI by Example",
  "desc": "How to provide relative sizes using GeometryReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-relative-sizes-using-geometryreader.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the way an image is fitted to its space | SwiftUI by Example",
  "desc": "How to adjust the way an image is fitted to its space",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-way-an-image-is-fitted-to-its-space.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to animate the size of text | SwiftUI by Example",
  "desc": "How to animate the size of text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-the-size-of-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />