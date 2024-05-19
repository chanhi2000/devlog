---
lang: ko-KR
title: How to stack modifiers to create more advanced effects
description: Article(s) > How to stack modifiers to create more advanced effects
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
      content: Article(s) > How to stack modifiers to create more advanced effects
    - property: og:description
      content: How to stack modifiers to create more advanced effects
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stack-modifiers-to-create-more-advanced-effects.html
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
  "title": "How to stack modifiers to create more advanced effects | SwiftUI by Example",
  "desc": "How to stack modifiers to create more advanced effects",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-stack-modifiers-to-create-more-advanced-effects",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Each modifier you add to a view adjusts whatever came before it, and you’re able to repeat modifiers more than once.

For example, we could add padding and a background color around a text view, then add some more padding and a different background color, then add some *more* padding and a *third* background color, all to make a particular effect:

```swift
Text("Forecast: Sun")
    .font(.largeTitle)
    .foregroundStyle(.white)
    .padding()
    .background(.red)
    .padding()
    .background(.orange)
    .padding()
    .background(.yellow)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-stack-modifiers-to-create-more-advanced-effects-1.zip)

![The text “Forecast: Sun” in white on concentric rectangles colored (from inside outwards) red, orange, and yellow.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-stack-modifiers-to-create-more-advanced-effects-1~dark@2x.png)

This is particularly useful for things like shadows, where you can create stronger shadow effects by repeating them as often as you need.

::: details Similar solutions…

```component VPCard
{
  "title": "How to customize stack layouts with alignment and spacing | SwiftUI by Example",
  "desc": "How to customize stack layouts with alignment and spacing",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-stack-layouts-with-alignment-and-spacing.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add advanced text styling using AttributedString | SwiftUI by Example",
  "desc": "How to add advanced text styling using AttributedString",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-advanced-text-styling-using-attributedstring.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to force views to one side inside a stack using Spacer | SwiftUI by Example",
  "desc": "How to force views to one side inside a stack using Spacer",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create modifiers for a UIViewRepresentable struct | SwiftUI by Example",
  "desc": "How to create modifiers for a UIViewRepresentable struct",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-modifiers-for-a-uiviewrepresentable-struct.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add Metal shaders to SwiftUI views using layer effects | SwiftUI by Example",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />