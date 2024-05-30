---
lang: ko-KR
title: How to preview your layout in light and dark mode
description: Article(s) > How to preview your layout in light and dark mode
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
      content: Article(s) > How to preview your layout in light and dark mode
    - property: og:description
      content: How to preview your layout in light and dark mode
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-light-and-dark-mode.html
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
  "title": "How to preview your layout in light and dark mode | SwiftUI by Example",
  "desc": "How to preview your layout in light and dark mode",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-preview-your-layout-in-light-and-dark-mode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Most of Apple’s operating systems support both light and dark mode user interfaces, so it’s no surprise that SwiftUI has support for this functionality built right in.

Even better, once you’ve designed your interface Xcode allows you to preview your layouts in either appearance by setting the `‌preferredColorScheme()` modifier value in your preview.

For example, this shows a preview using dark mode:

```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView().preferredColorScheme(.dark)
    }
}
```

![An Xcode Preview in Dark Mode.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-preview-your-layout-in-light-and-dark-mode-1~dark@2x.png)

If you want to see both light and dark mode side by side, place multiple previews in a group, like this:

```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ForEach(ColorScheme.allCases, id: \.self) { 
             ContentView().preferredColorScheme($0)
        }
    }
}
```

![Xcode showing Previews in Light and Dark Mode.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-preview-your-layout-in-light-and-dark-mode-2~dark@2x.png)

For a little extra conciseness, you can boil that down even further: 

```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ForEach(ColorScheme.allCases, id: \.self, content: ContentView().preferredColorScheme)
    }
}
```

::: tip

If your preview is zoomed right in, you should either scroll around or zoom out to the other previews.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to detect dark mode | SwiftUI by Example",
  "desc": "How to detect dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-dark-mode.md",
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
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />