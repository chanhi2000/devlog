---
lang: ko-KR
title: How to add visual effect blurs
description: Article(s) > How to add visual effect blurs
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
      content: Article(s) > How to add visual effect blurs
    - property: og:description
      content: How to add visual effect blurs
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-visual-effect-blurs.html
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
  "title": "How to add visual effect blurs | SwiftUI by Example",
  "desc": "How to add visual effect blurs",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-visual-effect-blurs",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI has a brilliantly simple equivalent to `UIVisualEffectView`, that combines `ZStack`, the `background()` modifier, and a range of built-in materials. 

For example, this places some text over an image, applying a standard blur effect to the text:

```swift
ZStack {
    Image("singapore")

    Text("Visit Singapore")
        .padding()
        .background(.thinMaterial)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-visual-effect-blurs-1.zip)

![The words “Visit Singapore” on a grey rectangle over an image of Singapore's Jewel indoor waterfall. The rectangle has a slightly translucent frosted glass effect.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-visual-effect-blurs-1~dark@2x.png)

You can adjust the “thickness” of your material – how much of the background content shines through – by using one of several material types. From thinnest to thickest, they are:

- `.ultraThinMaterial`
- `.thinMaterial`
- `.regularMaterial`
- `.thickMaterial`
- `.ultraThickMaterial`

If you’re using the `secondary` foreground style, SwiftUI automatically adjusts the text color so that it has a vibrant effect and can stand out from the background:

```swift
ZStack {
    Image("singapore")

    Text("Visit Singapore")
        .foregroundStyle(.secondary)
        .padding()
        .background(.ultraThinMaterial)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-visual-effect-blurs-2.zip)

![The words “Visit Singapore” in grey on a rectangle over an image of Singapore's Jewel indoor waterfall. The rectangle has a translucent frosted glass effect.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-visual-effect-blurs-2~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to provide visual structure using foreground styles | SwiftUI by Example",
  "desc": "How to provide visual structure using foreground styles",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-visual-structure-using-foreground-styles.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a marching ants border effect | SwiftUI by Example",
  "desc": "How to create a marching ants border effect",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-marching-ants-border-effect.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add in-app purchases in SwiftUI | SwiftUI by Example",
  "desc": "How to add in-app purchases in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-in-app-purchases-in-swiftui.md",
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

```component VPCard
{
  "title": "Two-way bindings in SwiftUI | SwiftUI by Example",
  "desc": "Two-way bindings in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/two-way-bindings-in-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />