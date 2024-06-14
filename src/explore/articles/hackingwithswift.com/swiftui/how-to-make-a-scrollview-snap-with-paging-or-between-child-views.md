---
lang: ko-KR
title: How to make a ScrollView snap with paging or between child views
description: Article(s) > How to make a ScrollView snap with paging or between child views
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
      content: Article(s) > How to make a ScrollView snap with paging or between child views
    - property: og:description
      content: How to make a ScrollView snap with paging or between child views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-scrollview-snap-with-paging-or-between-child-views.html
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
  "title": "How to make a ScrollView snap with paging or between child views | SwiftUI by Example",
  "desc": "How to make a ScrollView snap with paging or between child views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-scrollview-snap-with-paging-or-between-child-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI's `ScrollView` moves smoothly by default, but with the `scrollTargetLayout()` and `scrollTargetBehavior()` modifiers we can make it automatically snap to either to specific child views or to whole pages.

As an example, this places 10 rounded rectangles in a horizontal scroll view, with each one being a scroll target. Because `.scrollTargetBehavior()` is set to `.viewAligned`, SwiftUI will automatically snap between each of the rounded rectangles.

```swift
struct ContentView: View {
    var body: some View {
        ScrollView(.horizontal) {
            LazyHStack {
                ForEach(0..<10) { i in
                    RoundedRectangle(cornerRadius: 25)
                        .fill(Color(hue: Double(i) / 10, saturation: 1, brightness: 1).gradient)
                        .frame(width: 300, height: 100)
                }
            }
            .scrollTargetLayout()
        }
        .scrollTargetBehavior(.viewAligned)
        .safeAreaPadding(.horizontal, 40)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-make-a-scrollview-snap-with-paging-or-between-child-views-1.zip)

![Coloured shapes scrolling horizontally, with each scroll swipe snapping to a view.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-a-scrollview-snap-with-paging-or-between-child-views-1~dark@2x.gif)

That uses `scrollTargetLayout()` to make everything inside the layout be a scroll target. If you only want *some* child views to be snapped to, you should remove that and instead attach `scrollTarget()` to individual views.

An alternative scroll targeting behavior is `.paging`, which makes the `ScrollView` move by exactly one screen width or height depending on your scroll direction:

```swift
ScrollView {
    ForEach(0..<50) { i in
        Text("Item \(i)")
            .font(.largeTitle)
            .frame(maxWidth: .infinity)
            .frame(height: 200)
            .background(.blue)
            .foregroundStyle(.white)
            .clipShape(.rect(cornerRadius: 20))
    }
}
.scrollTargetBehavior(.paging)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-make-a-scrollview-snap-with-paging-or-between-child-views-2.zip)

![Text scrolling vertically, with each scroll swipe moving one page at a time.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-a-scrollview-snap-with-paging-or-between-child-views-2~dark@2x.gif)

::: details Similar solutions…

```component VPCard
{
  "title": "How to make a ScrollView start at the bottom | SwiftUI by Example",
  "desc": "How to make a ScrollView start at the bottom",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-scrollview-start-at-the-bottom.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to flash the scroll bar indicators of a ScrollView or List | SwiftUI by Example",
  "desc": "How to flash the scroll bar indicators of a ScrollView or List",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to disable ScrollView clipping so contents overflow | SwiftUI by Example",
  "desc": "How to disable ScrollView clipping so contents overflow",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-disable-scrollview-clipping-so-contents-overflow",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add horizontal and vertical scrolling using ScrollView | SwiftUI by Example",
  "desc": "How to add horizontal and vertical scrolling using ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to indent the content or scroll indicators in a ScrollView | SwiftUI by Example",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />