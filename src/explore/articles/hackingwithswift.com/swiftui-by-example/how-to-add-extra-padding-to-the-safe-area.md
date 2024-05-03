---
lang: ko-KR
title: How to add extra padding to the safe area
description: Article(s) > How to add extra padding to the safe area
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
      content: Article(s) > How to add extra padding to the safe area
    - property: og:description
      content: How to add extra padding to the safe area
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-extra-padding-to-the-safe-area.html
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
  "title": "How to add extra padding to the safe area | SwiftUI by Example",
  "desc": "How to add extra padding to the safe area",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-extra-padding-to-the-safe-area",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI's `safeAreaPadding()` modifier insets the safe area by some amount of your choosing, either on all edges or on a subset. When dealing with scrolling content this behaves differently from using the plain `padding()` modifier, because it will inset the contents of the scroll view rather than the scroll view itself.

First, here'a simple example that draws a red circle to fill all the safe area, minus 50 points on each side:

```swift
Circle()
    .fill(.red)
    .safeAreaPadding(50)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-extra-padding-to-the-safe-area-1.zip)

You can request only some edges by adding a second parameter, like this:

```swift
Circle()
    .fill(.red)
    .safeAreaPadding(.horizontal, 50)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-extra-padding-to-the-safe-area-2.zip)

And for complete control, you can pass in an `EdgeInsets` object to get exact insets on all four edges:

```swift
Circle()
    .fill(.red)
    .safeAreaPadding(.init(top: 20, leading: 50, bottom: 20, trailing: 50))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-extra-padding-to-the-safe-area-3.zip)

Things get more interesting when we apply `safeAreaPadding()` to a `ScrollView`, because it ensures our content starts away from the screen edge but still scrolls next to it:

```swift
ScrollView(.horizontal) {
    HStack {
        ForEach(0..<10) { i in
            Circle()
                .frame(width: 50, height: 50)
        }
    }
}
.safeAreaPadding(50)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-extra-padding-to-the-safe-area-4.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to place content outside the safe area | SwiftUI by Example",
  "desc": "How to place content outside the safe area",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-place-content-outside-the-safe-area.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to inset the safe area with custom content | SwiftUI by Example",
  "desc": "How to inset the safe area with custom content",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-inset-the-safe-area-with-custom-content.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

How to place content into the safe area

```component VPCard
{
  "title": "How to control spacing around individual views using padding | SwiftUI by Example",
  "desc": "How to control spacing around individual views using padding",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-spacing-around-individual-views-using-padding.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to color the padding around a view | SwiftUI by Example",
  "desc": "How to color the padding around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-color-the-padding-around-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />