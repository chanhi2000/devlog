---
lang: ko-KR
title: "How to make a UIView glow using shadowColor"
description: "Article(s) > How to make a UIView glow using shadowColor"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make a UIView glow using shadowColor"
    - property: og:description
      content: "How to make a UIView glow using shadowColor"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-make-a-uiview-glow-using-shadowcolor.html
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
  "title": "How to make a UIView glow using shadowColor | CALayer - free Swift example code",
  "desc": "How to make a UIView glow using shadowColor",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-make-a-uiview-glow-using-shadowcolor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!-- 
All views can have shadows thanks to the `CALayer` behind them, but you can use that same property to create glow effects. For example, this creates a 128x128 view then gives it a 20-point yellow glow:

```swift
let vw = UIView(frame: CGRect(x: 100, y: 100, width: 128, height: 128))
vw.backgroundColor = .white

vw.layer.shadowOffset = .zero
vw.layer.shadowColor = UIColor.yellow.cgColor
vw.layer.shadowRadius = 20
vw.layer.shadowOpacity = 1
vw.layer.shadowPath = UIBezierPath(rect: vw.bounds).cgPath
```

Bright glows work best on a dark background, so try making your main view black:

```swift
view.backgroundColor = .black
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-make-a-button-glow-when-tapped-with-showstouchwhenhighlighted">How to make a button glow when tapped with showsTouchWhenHighlighted 
/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView 
/example-code/uikit/how-to-add-a-shadow-to-a-uiview">How to add a shadow to a UIView 
/example-code/calayer/how-to-make-a-uiview-fade-out">How to make a UIView fade out 
/example-code/uikit/how-to-make-a-uiview-fill-the-screen-using-auto-layout-anchors">How to make a UIView fill the screen using Auto Layout anchors</a>
-->

:::

---

<TagLinks />