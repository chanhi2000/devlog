---
lang: ko-KR
title: "How to make a UIView fill the screen using Auto Layout anchors"
description: "Article(s) > How to make a UIView fill the screen using Auto Layout anchors"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make a UIView fill the screen using Auto Layout anchors"
    - property: og:description
      content: "How to make a UIView fill the screen using Auto Layout anchors"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-a-uiview-fill-the-screen-using-auto-layout-anchors.html
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
  "title": "How to make a UIView fill the screen using Auto Layout anchors | UIKit - free Swift example code",
  "desc": "How to make a UIView fill the screen using Auto Layout anchors",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-a-uiview-fill-the-screen-using-auto-layout-anchors",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
You can make one view fill all available space inside another by pinning all four of its anchors to the same anchors in its parent container. If you use this when the parent container is the view for your view controller, your child view will fill the screen.

Although it takes only four lines of code, this is the sort of thing I’d put into an extension:

```swift
extension UIView {
    func pinEdges(to other: UIView) {
        leadingAnchor.constraint(equalTo: other.leadingAnchor).isActive = true
        trailingAnchor.constraint(equalTo: other.trailingAnchor).isActive = true
        topAnchor.constraint(equalTo: other.topAnchor).isActive = true
        bottomAnchor.constraint(equalTo: other.bottomAnchor).isActive = true
    }
}
```

You can now call `pinEdges(to: someOtherView)` directly on the view you want to adjust.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-position-a-view-using-auto-layout-anchors">How to position a view using Auto Layout anchors 
/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time">How to fill and stroke shapes at the same time 
/example-code/uikit/how-to-adjust-image-content-mode-using-aspect-fill-aspect-fit-and-scaling">How to adjust image content mode using aspect fill, aspect fit and scaling 
/example-code/uikit/whats-the-difference-between-leading-trailing-left-and-right-anchors">What’s the difference between leading, trailing, left, and right anchors? 
/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a>
-->

:::

---

<TagLinks />