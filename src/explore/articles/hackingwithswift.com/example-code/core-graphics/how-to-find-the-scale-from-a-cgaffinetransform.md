---
lang: ko-KR
title: "How to find the scale from a CGAffineTransform"
description: "Article(s) > How to find the scale from a CGAffineTransform"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to find the scale from a CGAffineTransform"
    - property: og:description
      content: "How to find the scale from a CGAffineTransform"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-find-the-scale-from-a-cgaffinetransform.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Graphics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-graphics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to find the scale from a CGAffineTransform | Core Graphics - free Swift example code",
  "desc": "How to find the scale from a CGAffineTransform",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-find-the-scale-from-a-cgaffinetransform",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
If you have a `CGAffineTransform` and want to know what its scale component is – regardless of whether it has been rotated or translated – use this code:

```swift
func scale(from transform: CGAffineTransform) -> Double {
    return sqrt(Double(transform.a * transform.a + transform.c * transform.c))
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-scale-stretch-move-and-rotate-uiviews-using-cgaffinetransform">How to scale, stretch, move, and rotate UIViews using CGAffineTransform 
/quick-start/swiftui/how-to-scale-a-view-up-or-down">How to scale a view up or down 
/example-code/core-graphics/how-to-find-the-rotation-from-a-cgaffinetransform">How to find the rotation from a CGAffineTransform 
/example-code/core-graphics/how-to-find-the-translation-from-a-cgaffinetransform">How to find the translation from a CGAffineTransform 
/example-code/uikit/how-to-find-a-uiview-subview-using-viewwithtag">How to find a UIView subview using viewWithTag()</a>
-->

:::

---

<TagLinks />