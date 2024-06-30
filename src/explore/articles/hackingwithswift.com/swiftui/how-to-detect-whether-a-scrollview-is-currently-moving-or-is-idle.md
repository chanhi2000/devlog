---
lang: ko-KR
title: How to detect whether a scrollview is currently moving or is idle
description: Article(s) > How to detect whether a scrollview is currently moving or is idle
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
      content: Article(s) > How to detect whether a scrollview is currently moving or is idle
    - property: og:description
      content: How to detect whether a scrollview is currently moving or is idle
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-detect-whether-a-scrollview-is-currently-moving-or-is-idle.html
next: /explore/articles/hackingwithswift.com/swiftui/working-with-state.md
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
  "title": "How to detect whether a scrollview is currently moving or is idle | SwiftUI by Example",
  "desc": "How to detect whether a scrollview is currently moving or is idle",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-whether-a-scrollview-is-currently-moving-or-is-idle",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**Improved in iOS 18**

SwiftUI’s `onScrollPhaseChange()` modifier lets us detect when the movement of a scrollview changes somehow.

For example, this changes a color from red to green whenever the user is actively interacting with it:

```swift
struct ContentView: View {
    @State private var backgroundColor = Color.red

    var body: some View {
        ScrollView {
            backgroundColor
                .frame(height: 2000)
        }
        .onScrollPhaseChange { oldPhase, newPhase in
            if newPhase == .interacting {
                backgroundColor = .green
            } else {
                backgroundColor = .red
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-detect-whether-a-scrollview-is-currently-moving-or-is-idle-1.zip)

The `oldPhase` and `newPhase` values can have one of five different values:

- `.animating`: When the scrollview is moving towards one particular view.
- `.decelerating`: When the user has released their finger and the scrollview is slowing down naturally.
- `.idle`: The scrollview is not moving or being interacted with.
- `.interacting`: The user has their finger down right now, either stationary or moving.
- `.tracking`: Used when the system thinks a user scroll event might be coming soon; I suspect this one isn't so helpful.

Having access to both the old and new values allows you to add subtle interactions – perhaps moving to idle after a drag triggers one result, whereas doing so after an animation triggers a different result.

::: details Similar solutions…

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
  "title": "How to add horizontal and vertical scrolling using ScrollView | SwiftUI by Example",
  "desc": "How to add horizontal and vertical scrolling using ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": How to scroll to exact locations inside a scrollview | SwiftUI by Example",
  "desc": "How to scroll to exact locations inside a scrollview",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-scroll-to-exact-locations-inside-a-scrollview.md",
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

```component VPCard
{
  "title": "How to disable ScrollView clipping so contents overflow | SwiftUI by Example",
  "desc": "How to disable ScrollView clipping so contents overflow",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-disable-scrollview-clipping-so-contents-overflow",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />