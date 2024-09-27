---
lang: ko-KR
title: "How to convert a CGPoint in one UIView to another view using convert()"
description: "Article(s) > How to convert a CGPoint in one UIView to another view using convert()"
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
      content: "Article(s) > How to convert a CGPoint in one UIView to another view using convert()"
    - property: og:description
      content: "How to convert a CGPoint in one UIView to another view using convert()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to convert a CGPoint in one UIView to another view using convert() | UIKit - free Swift example code",
  "desc": "How to convert a CGPoint in one UIView to another view using convert()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
Each view has its own co-ordinate system, meaning that if I tap a button and ask iOS where I tapped, it will tell me where I tapped *relative to the top-left of the button*. This is usually what you want, but if you want to translate a position in one view into a position it's easy enough to do.

As an example, this code creates two views, creates a virtual "tap", then converts it from the first view's co-ordinate space to the second's:

```swift
let view1 = UIView(frame: CGRect(x: 50, y: 50, width: 128, height: 128))
let view2 = UIView(frame: CGRect(x: 200, y: 200, width: 128, height: 128))

let tap = CGPoint(x: 10, y: 10)
let convertedTap = view1.convert(tap, to: view2)
```

That will set `convertedTap` to X -140.0, Y -140.0.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect">How to synchronize animations from one view to another with matchedGeometryEffect() 
/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture() 
/quick-start/swiftui/how-to-mask-one-view-with-another">How to mask one view with another</a>
-->

:::

---

<TagLinks />