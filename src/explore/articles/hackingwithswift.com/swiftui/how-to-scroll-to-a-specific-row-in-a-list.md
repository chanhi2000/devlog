---
lang: ko-KR
title: How to scroll to a specific row in a list
description: Article(s) > How to scroll to a specific row in a list
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
      content: Article(s) > How to scroll to a specific row in a list
    - property: og:description
      content: How to scroll to a specific row in a list
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-scroll-to-a-specific-row-in-a-list.html
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
  "title": "How to scroll to a specific row in a list | SwiftUI by Example",
  "desc": "How to scroll to a specific row in a list",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-scroll-to-a-specific-row-in-a-list",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you want to programmatically make SwiftUI's `List` move to show a specific row, you should embed it inside a `ScrollViewReader`. This provides a `scrollTo()` method on its proxy that can move to any row inside the list, just by providing its ID and optionally also an anchor.

For example, this creates 100 rows in a list, and when you press the button it will scroll directly to the row with ID 50:

```swift
struct ContentView: View {
    var body: some View {
        ScrollViewReader { proxy in
            VStack {
                Button("Jump to #50") {
                    proxy.scrollTo(50)
                }

                List(0..<100, id: \.self) { i in
                    Text("Example \(i)")
                    .id(i)
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-scroll-to-a-specific-row-in-a-list-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-scroll-to-a-specific-row-in-a-list-1~dark.mp4" />

For more control over your scroll behavior, add an `anchor` as the second parameter, like this: `proxy.scrollTo(50, anchor: .top)`.

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-scroll-to-a-specific-row-in-a-list-2~dark.mp4" />

::: tip

If you call `scrollTo()` inside `withAnimation()` the movement will be animated.

:::

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
  "title": "How to hide the scroll indicators in ScrollView, List, and more | SwiftUI by Example",
  "desc": "How to hide the scroll indicators in ScrollView, List, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to allow row selection in a list | SwiftUI by Example",
  "desc": "How to allow row selection in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-allow-row-selection-in-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust List row separator insets | SwiftUI by Example",
  "desc": "How to adjust List row separator insets",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-list-row-separator-insets.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />