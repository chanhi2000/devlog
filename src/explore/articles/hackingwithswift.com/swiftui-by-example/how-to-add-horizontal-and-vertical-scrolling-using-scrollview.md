---
lang: ko-KR
title: How to add horizontal and vertical scrolling using ScrollView
description: Article(s) > How to add horizontal and vertical scrolling using ScrollView
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
      content: Article(s) > How to add horizontal and vertical scrolling using ScrollView
    - property: og:description
      content: How to add horizontal and vertical scrolling using ScrollView
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.html
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
  "title": "How to add horizontal and vertical scrolling using ScrollView | SwiftUI by Example",
  "desc": "How to add horizontal and vertical scrolling using ScrollView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `ScrollView` allows us to create scrolling containers of views relatively easily, because it automatically sizes itself to fit the content we place inside it and also automatically adds extra insets to avoid the safe area.

For example, we could create a scroll list of ten text views like this:

```swift
ScrollView {
    VStack(spacing: 20) {
        ForEach(0..<10) {
            Text("Item \($0)")
                .foregroundStyle(.white)
                .font(.largeTitle)
                .frame(width: 200, height: 200)
                .background(.red)
        }
    }
}
.frame(height: 350)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-1.zip)

Some red squares stretching off of the top and bottom of the image.

Scroll views are vertical by default, but you can control the axis by passing in `.horizontal` as the first parameter. So, we could flip our previous example to be horizontal like this:

```swift
ScrollView(.horizontal) {
    HStack(spacing: 20) {
        ForEach(0..<10) {
            Text("Item \($0)")
                .foregroundStyle(.white)
                .font(.largeTitle)
                .frame(width: 200, height: 200)
                .background(.red)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-2.zip)

![Some red squares stretching off of the left and right of the image.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-2~dark.png)

You can specify both axes at the same time using `[.horizontal, .vertical]`.

Finally, you can decide whether to show the scroll indicators as the scroll action happens, like this:

```swift
ScrollView(.horizontal, showsIndicators: false) {
    HStack(spacing: 20) {
        ForEach(0..<10) {
            Text("Item \($0)")
                .foregroundStyle(.white)
                .font(.largeTitle)
                .frame(width: 200, height: 200)
                .background(.red)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview-3~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to enable vertical page scrolling | SwiftUI by Example",
  "desc": "How to enable vertical page scrolling",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-vertical-page-scrolling.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create scrolling pages of content using tabViewStyle() | SwiftUI by Example",
  "desc": "How to create scrolling pages of content using tabViewStyle()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-scrolling-pages-of-content-using-tabviewstyle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to disable ScrollView clipping so contents overflow | SwiftUI by Example",
  "desc": "How to disable ScrollView clipping so contents overflow",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-scrollview-clipping-so-contents-overflow",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to indent the content or scroll indicators in a ScrollView | SwiftUI by Example",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
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

:::

---

<TagLinks />