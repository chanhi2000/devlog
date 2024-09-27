---
lang: ko-KR
title: "How to round only specific corners using maskedCorners"
description: "Article(s) > How to round only specific corners using maskedCorners"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to round only specific corners using maskedCorners"
    - property: og:description
      content: "How to round only specific corners using maskedCorners"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-round-only-specific-corners-using-maskedcorners.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CALayer - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/calayer/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to round only specific corners using maskedCorners | CALayer - free Swift example code",
  "desc": "How to round only specific corners using maskedCorners",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-round-only-specific-corners-using-maskedcorners",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
<p style="margin: 0; margin-bottom: 20px;"><a href="/about">Paul Hudson</a>    <i class="fab fa-twitter" aria-hidden="true" style="color: #4099ff"></i> <a href="https://twitter.com/twostraws" target="_blank">@twostraws</a>    <time itemprop="dateModified" datetime="2019-05-28T20:41:20+00:00">May 28th 2019</time><meta itemprop="datePublished" content="2019-05-28T20:41:20+00:00">

You can set the `cornerRadius` property of any `UIView` to have its edges rounded, but by default that rounds all corners at the same time. If you want only *some* corners to be rounded, you should set the layer’s `maskedCorners` property to be an array of the corners you want – it’s an option set, so you can set one or many depending on your needs.

For example, this code rounds the top-left and bottom-right corners of a view, leaving the other two square:

```swift
let redBox = UIView(frame: CGRect(x: 100, y: 100, width: 128, height: 128))
redBox.backgroundColor = .red
redBox.layer.cornerRadius = 25
redBox.layer.maskedCorners = [.layerMinXMinYCorner, .layerMaxXMaxYCorner]
view.addSubview(redBox)
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-round-the-corners-of-a-view">How to round the corners of a view 
/example-code/calayer/how-to-round-the-corners-of-a-uiview">How to round the corners of a UIView 
/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round" 
/example-code/system/how-to-run-code-at-a-specific-time">How to run code at a specific time 
/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext">How to help VoiceOver read specific kinds of text using accessibilityTextualContext</a>
-->

:::

---

<TagLinks />