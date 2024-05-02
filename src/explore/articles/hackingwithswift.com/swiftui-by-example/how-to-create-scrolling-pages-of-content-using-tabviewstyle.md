---
lang: ko-KR
title: How to create scrolling pages of content using tabViewStyle()
description: Article(s) > How to create scrolling pages of content using tabViewStyle()
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to create scrolling pages of content using tabViewStyle()
    - property: og:description
      content: How to create scrolling pages of content using tabViewStyle()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-scrolling-pages-of-content-using-tabviewstyle.html
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
  "title": "How to create scrolling pages of content using tabViewStyle() | SwiftUI by Example",
  "desc": "How to create scrolling pages of content using tabViewStyle()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI's `TabView` doubles up as the equivalent to a `UIPageViewController`, letting us swipe through multiple screens of content, with paging dots at the bottom to show users where they are.

To activate the page view style, attach the `.tabViewStyle()` modifier to your `TabView`, passing in `.page`.

For example, you could add this to your `@main` Swift file:

```swift
TabView {
    Text("First")
    Text("Second")
    Text("Third")
    Text("Fourth")
}
.tabViewStyle(.page)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle-1~dark.mp4" />

::: important

If you're using Xcode 12 you need to use `PageTabViewStyle()` rather than `.page`.

:::

When that runs on iOS, tvOS, and watchOS, you'll find you can swipe through a list of pages. On macOS `.page` is not supported.

::: warning

The paging dots are white and translucent white, so if your view background is also white you won't see them.

:::

To solve this, you can ask SwiftUI to place a background behind by placing extra modifier after `tabViewStyle()`:

```swift
TabView {
    Text("First")
    Text("Second")
    Text("Third")
    Text("Fourth")
}
.tabViewStyle(.page)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle-1.zip)

```swift
.indexViewStyle(.page(backgroundDisplayMode: .always))
```

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle-2~dark.mp4" />

::: important

If you're using Xcode 12 you need to use `PageIndexViewStyle(backgroundDisplayMode: .always)` rather than `.page(backgroundDisplayMode: .always)`.

:::

You can control the way paging dots are shown by adding an extra parameter to the `.page` method. For example, if you never wanted the paging dots to be shown, you would use this:

```swift
TabView {
    Text("First")
    Text("Second")
    Text("Third")
    Text("Fourth")
}
.tabViewStyle(.page(indexDisplayMode: .never))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle-3.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle-3~dark.mp4 "/>

::: details Similar solutions…

```component VPCard
{
  "title": "How to enable vertical page scrolling | SwiftUI by Example",
  "desc": "How to enable vertical page scrolling",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-vertical-page-scrolling.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add horizontal and vertical scrolling using ScrollView | SwiftUI by Example",
  "desc": "How to add horizontal and vertical scrolling using ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render Markdown content in text | SwiftUI by Example",
  "desc": "How to render Markdown content in text",
  "link": "https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-markdown-content-in-text.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to mark content as a placeholder using redacted() | SwiftUI by Example",
  "desc": "How to mark content as a placeholder using redacted()",
  "link": "https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-a-placeholder-using-redacted.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to mark content as private using privacySensitive() | SwiftUI by Example",
  "desc": "How to mark content as private using privacySensitive()",
  "link": "https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-private-using-privacysensitive.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />