---
lang: ko-KR
title: How to hide the scroll indicators in ScrollView, List, and more
description: Article(s) > How to hide the scroll indicators in ScrollView, List, and more
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
      content: Article(s) > How to hide the scroll indicators in ScrollView, List, and more
    - property: og:description
      content: How to hide the scroll indicators in ScrollView, List, and more
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.html
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
  "title": "How to hide the scroll indicators in ScrollView, List, and more | SwiftUI by Example",
  "desc": "How to hide the scroll indicators in ScrollView, List, and more",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `scrollIndicators()` modifier allows us to determine whether to show the scroll indicators or not – those are the little flashing bars that both give the user a sense of the size of our content, but also allows for a long press scroll.

Use it like this:

```swift
struct ContentView: View {
    var body: some View {
        List(1..<100) { i in
            Text("Row \(i)")
        }
        .scrollIndicators(.hidden)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more-1.zip)

There are four options available to us, and there are subtle distinctions:

1. The default is `.automatic`, which is what you'd get without the modifier in place - SwiftUI will do whatever it thinks is best.
2. Specify `.visible` to get auto-hiding indicators on iOS, or to respect whatever is the user's preference on macOS.
3. Use `.hidden` to hide the indicators on iOS, and *mostly* hide them on macOS too – if the user connects a mouse, the scroll indicators will return.
4. Use `.never` to hide the indicators on iOS and also on macOS, regardless of what pointing device user has.

::: details Similar solutions…

```component VPCard
{
  "title": "How to flash the scroll bar indicators of a ScrollView or List | SwiftUI by Example",
  "desc": "How to flash the scroll bar indicators of a ScrollView or List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to indent the content or scroll indicators in a ScrollView | SwiftUI by Example",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to scroll to a specific row in a list | SwiftUI by Example",
  "desc": "How to scroll to a specific row in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-scroll-to-a-specific-row-in-a-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden() | SwiftUI by Example",
  "desc": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make views scroll with a custom transition | SwiftUI by Example",
  "desc": "How to make views scroll with a custom transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-views-scroll-with-a-custom-transition.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />