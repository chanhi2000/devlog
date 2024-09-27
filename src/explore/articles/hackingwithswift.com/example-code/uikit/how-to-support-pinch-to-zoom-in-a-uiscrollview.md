---
lang: ko-KR
title: "How to support pinch to zoom in a UIScrollView"
description: "Article(s) > How to support pinch to zoom in a UIScrollView"
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
      content: "Article(s) > How to support pinch to zoom in a UIScrollView"
    - property: og:description
      content: "How to support pinch to zoom in a UIScrollView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-support-pinch-to-zoom-in-a-uiscrollview.html
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
  "title": "How to support pinch to zoom in a UIScrollView | UIKit - free Swift example code",
  "desc": "How to support pinch to zoom in a UIScrollView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-support-pinch-to-zoom-in-a-uiscrollview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
Making a scroll view zoom when you pinch is a multi-step approach, and you need to do all the steps in order for things to work correctly.

First, make sure your scroll view has a maximum zoom scale larger than the default of 1.0. You can change this in Interface Builder if you want, or use the `maximumZoomScale` property in code.

Second, make your view controller the delegate of your scroll view. Again, you can do this in Interface Builder by Ctrl-dragging from the scroll view to your view controller.

Third, make your view controller conform to the `UIScrollViewDelegate` protocol, then add the `viewForZooming(in:)` method, like this:

```swift
func viewForZooming(in scrollView: UIScrollView) -> UIView? {
    return someView
}
```

That's it for code, but make sure you create your layouts consistently – whether you use Auto Layout or not, you need to be careful to [<FontIcon icon="fa-brands fa-apple"/>follow Apple's instructions](https://developer.apple.com/library/ios/technotes/tn2154/_index.html).

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-handle-pinch-to-zoom-for-views">How to handle pinch to zoom for views 
/quick-start/swiftui/how-to-create-zoom-animations-between-views">How to create zoom animations between views 
/example-code/uikit/how-to-adjust-a-uiscrollview-to-fit-the-keyboard">How to adjust a UIScrollView to fit the keyboard 
/example-code/uikit/how-to-change-the-scroll-indicator-inset-for-a-uiscrollview">How to change the scroll indicator inset for a UIScrollView 
/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset">How to make empty UITableViews look more attractive using DZNEmptyDataSet</a>
-->

:::

---

<TagLinks />