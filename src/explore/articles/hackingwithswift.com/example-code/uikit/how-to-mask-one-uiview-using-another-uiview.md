---
lang: ko-KR
title: "How to mask one UIView using another UIView"
description: "Article(s) > How to mask one UIView using another UIView"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to mask one UIView using another UIView"
    - property: og:description
      content: "How to mask one UIView using another UIView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-mask-one-uiview-using-another-uiview.html
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
  "title": "How to mask one UIView using another UIView | UIKit - free Swift example code",
  "desc": "How to mask one UIView using another UIView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-mask-one-uiview-using-another-uiview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
All views have a `mask` property that allows you to cut out parts depending on what you need. This mask can be any other kind of `UIView`, so you could for example use a label to cut out an image view.

To try it out, first create a view with some obvious content such as a background color:

```swift
let redView = UIView(frame: CGRect(x: 50, y: 50, width: 128, height: 128))
redView.backgroundColor = .red
view.addSubview(redView)
```

Now create your mask as a separate `UIView`. Although it won’t be directly visible you should give this either a background color or some other content because the alpha channel of this mask determines what shows through in the original view.

To demonstrate this, here’s a mask view that’s the same size as the original view, but it’s offset 64 pixels to the right and has a 64-point corner radius. When used as a mask for the previous view it will have the effect of turning it into a semi-circle:

```swift
let maskView = UIView(frame: CGRect(x: 64, y: 0, width: 128, height: 128))
maskView.backgroundColor = .blue
maskView.layer.cornerRadius = 64
redView.mask = maskView
```

The blue background color won’t be visible – that’s just there to make sure all pixels in the mask are opaque.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-mask-one-view-with-another">How to mask one view with another 
/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert">How to convert a CGPoint in one UIView to another view using convert() 
/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture() 
/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition 
/example-code/language/how-to-append-one-array-to-another-array">How to append one array to another array</a>
-->

:::

---

<TagLinks />