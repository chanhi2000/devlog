---
lang: ko-KR
title: How to make a ScrollView start at the bottom
description: Article(s) > How to make a ScrollView start at the bottom
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
      content: Article(s) > How to make a ScrollView start at the bottom
    - property: og:description
      content: How to make a ScrollView start at the bottom
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scrollview-start-at-the-bottom.html
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
  "title": "How to make a ScrollView start at the bottom | SwiftUI by Example",
  "desc": "How to make a ScrollView start at the bottom",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-scrollview-start-at-the-bottom",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI's `ScrollView` starts scrolling from the top by default, but if you want to create a UI like Apple's Messages app you can ask the scroll view to start at the bottom by using the `scrollPosition()` modifier with an initial anchor of `.bottom`.

For example, this shows 50 text views in a scroll view, but asks the scroll view to start its position from the bottom rather than the top:

```swift
ScrollView {
    ForEach(0..<50) { i in
        Text("Item \(i)")
            .frame(maxWidth: .infinity)
            .padding()
            .background(.blue)
            .clipShape(.rect(cornerRadius: 25))
    }
}
.scrollPosition(initialAnchor: .bottom)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-make-a-scrollview-start-at-the-bottom-1.zip)

![A scrollview containing many items, showing that it scrolls from the bottom up rather than the top down.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-a-scrollview-start-at-the-bottom-1~dark@2x.png)

If your UI alters somehow without the user scrolling – for example if the keyboard appears, or you adjust the size of the scroll view – then the scroll position will remain anchored to the bottom. However, if the user adjusts the scroll position manually, it will scroll freely as normal.

::: tip

The `initialAnchor` parameter is any `UnitPoint`, so you can use `.trailing` to start a horizontal scroll view from the right edge, or any exact value you need for your UI.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to display a bottom sheet | SwiftUI by Example",
  "desc": "How to display a bottom sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-a-bottom-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a ScrollView snap with paging or between child views | SwiftUI by Example",
  "desc": "How to make a ScrollView snap with paging or between child views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scrollview-snap-with-paging-or-between-child-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to follow this quick start guide | SwiftUI by Example",
  "desc": "How to follow this quick start guide",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-follow-this-quick-start-guide.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to start an animation immediately after a view appears | SwiftUI by Example",
  "desc": "How to start an animation immediately after a view appears",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-start-an-animation-immediately-after-a-view-appears.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to flash the scroll bar indicators of a ScrollView or List | SwiftUI by Example",
  "desc": "How to flash the scroll bar indicators of a ScrollView or List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />