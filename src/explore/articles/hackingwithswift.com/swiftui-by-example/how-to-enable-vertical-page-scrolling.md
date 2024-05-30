---
lang: ko-KR
title: How to enable vertical page scrolling
description: Article(s) > How to enable vertical page scrolling
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
      content: Article(s) > How to enable vertical page scrolling
    - property: og:description
      content: How to enable vertical page scrolling
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-vertical-page-scrolling.html
next: /explore/articles/hackingwithswift.com/swiftui-by-example/introduction-to-using-core-data-with-swiftui.md
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
  "title": "How to enable vertical page scrolling | SwiftUI by Example",
  "desc": "How to enable vertical page scrolling",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-enable-vertical-page-scrolling",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in watchOS 10**

SwiftUI provides a `.verticalPage` tab view style that allows us to make vertically scrolling tabs on watchOS, as opposed to the default horizontal. Because these live alongside scrolling lists, it's really important you think carefully about mixing the two.

First, here's a simple code sample:

```swift
TabView {
    Text("First")
        .navigationTitle("First Title")
    Text("Second")
        .navigationTitle("Second Title")
    Text("Third")
        .navigationTitle("Third Title")
}
.tabViewStyle(.verticalPage)
```

watchOS will automatically use each tab's navigation title as the user scrolls through.

When dealing with other scrolling containers inside tabs, it's imperative you keep scrolling to the last view in a tab, otherwise users might be trying to flick through and accidentally change tabs instead.

So, in this code sample there are two regular tabs, followed by a scrolling list:

```swift
TabView {
    Text("First")
        .navigationTitle("First Title")
    Text("Second")
        .navigationTitle("Second Title")
    List(1..<50) { i in
        Text("Row \(i)")
    }
    .navigationTitle("Third Title")
}
.tabViewStyle(.verticalPage)
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to add horizontal and vertical scrolling using ScrollView | SwiftUI by Example",
  "desc": "How to add horizontal and vertical scrolling using ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md",
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
  "title": "How to enable editing on a list using EditButton | SwiftUI by Example",
  "desc": "How to enable editing on a list using EditButton",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-editing-on-a-list-using-editbutton.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to enable pull to refresh | SwiftUI by Example",
  "desc": "How to enable pull to refresh",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-pull-to-refresh.md",
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

:::

---

<TagLinks />