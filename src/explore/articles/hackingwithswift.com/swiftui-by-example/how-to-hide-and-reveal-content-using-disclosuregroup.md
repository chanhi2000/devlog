---
lang: ko-KR
title: How to hide and reveal content using DisclosureGroup
description: Article(s) > How to hide and reveal content using DisclosureGroup
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
      content: Article(s) > How to hide and reveal content using DisclosureGroup
    - property: og:description
      content: How to hide and reveal content using DisclosureGroup
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-reveal-content-using-disclosuregroup.html
date: 2022-12-01
isOriginal: false
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
  "title": "How to hide and reveal content using DisclosureGroup | SwiftUI by Example",
  "desc": "How to hide and reveal content using DisclosureGroup",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-hide-and-reveal-content-using-disclosuregroup",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has a dedicated `DisclosureGroup` view that presents a disclosure indicator and contains content inside. In its simplest form it can be controlled entirely by the user, but you can also bind it to a Boolean property to determine programmatically whether its content is currently visible or not.

For example, this creates a `DisclosureGroup` with lots of text inside:

```swift
DisclosureGroup("Show Terms") {
    Text("Long terms and conditions here long terms and conditions here long terms and conditions here long terms and conditions here long terms and conditions here long terms and conditions here.")
}
.frame(width: 300)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-hide-and-reveal-content-using-disclosuregroup-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-hide-and-reveal-content-using-disclosuregroup-1~dark.mp4" />

If you wanted to track whether the disclosure group was opened or not, bind it to a Boolean like this:

```swift
struct ContentView: View {
    @State private var revealDetails = false

    var body: some View {
        DisclosureGroup("Show Terms", isExpanded: $revealDetails) {
            Text("Long terms and conditions here long terms and conditions here long terms and conditions here long terms and conditions here long terms and conditions here long terms and conditions here.")
        }
        .frame(width: 300)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-hide-and-reveal-content-using-disclosuregroup-2.zip)

You can of course modify the Boolean's state programmatically to control whether the group is expanded or not.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide and show the sidebar programmatically | SwiftUI by Example",
  "desc": "How to hide and show the sidebar programmatically",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-show-the-sidebar-programmatically.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />