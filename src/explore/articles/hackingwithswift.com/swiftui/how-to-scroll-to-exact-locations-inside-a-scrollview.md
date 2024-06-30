---
lang: ko-KR
title: How to scroll to exact locations inside a scrollview
description: Article(s) > How to scroll to exact locations inside a scrollview
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
      content: Article(s) > How to scroll to exact locations inside a scrollview
    - property: og:description
      content: How to scroll to exact locations inside a scrollview
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-scroll-to-exact-locations-inside-a-scrollview.html
date: 2024-06-21
isOriginal: false
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
  "title": "How to scroll to exact locations inside a scrollview | SwiftUI by Example",
  "desc": "How to scroll to exact locations inside a scrollview",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-scroll-to-exact-locations-inside-a-scrollview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**Improved in iOS 18**

SwiftUI’s `scrollPosition()` modifier lets us make a `ScrollView` move to a specific edge of the screen, jump to the top or bottom of its content, or scroll to an exact X/Y position, all in one.

This takes three steps, starting with a new property that stores the current scroll position:

```swift
@State private var position = ScrollPosition(edge: .top)
```

Next, you need to attach to the scrollview you're working with, like this:

```swift
.scrollPosition($position)
```

And finally, you can call various methods on that `position` object to jump wherever you need:

```swift
// Go to the top or bottom edge
position.scrollTo(edge: .top)
position.scrollTo(edge: .bottom)

// Move to a particular view
position.scrollTo(id: "Avatar")

// Move to an exact X/Y coordinate
position.scrollTo(x: 0, y: 500)
```

Generally speaking I think you're likely to make ID-based scrolling your first choice, then edges, and finally exact coordinates last.

Here's a complete example, showing you how to move through items in a list in three different ways:

```swift
struct ContentView: View {
    @State private var position = ScrollPosition(edge: .top)

    var body: some View {
        VStack {
            ScrollView {
                ForEach(0..<100) { i in
                    Text("Item \(i)")
                        .padding()
                        .id(i)
                }
            }
            .scrollPosition($position)

            HStack(spacing: 50) {
                Button("Top") {
                    position.scrollTo(edge: .top)
                }

                Button("Bottom") {
                    position.scrollTo(edge: .bottom)
                }

                Button("Random") {
                    position.scrollTo(id: Int.random(in: 0..<100))
                }
            }
        }
        .font(.title)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-scroll-to-exact-locations-inside-a-scrollview-1.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to indent the content or scroll indicators in a ScrollView | SwiftUI by Example",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
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
  "title": "How to hide the scroll indicators in ScrollView, List, and more | SwiftUI by Example",
  "desc": "How to hide the scroll indicators in ScrollView, List, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a scroll view move to a location using ScrollViewReader | SwiftUI by Example",
  "desc": "How to make a scroll view move to a location using ScrollViewReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make views scroll with a custom transition | SwiftUI by Example",
  "desc": "How to make views scroll with a custom transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-views-scroll-with-a-custom-transition.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />