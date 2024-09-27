---
lang: ko-KR
title: "How to find a UIView subview using viewWithTag()"
description: "Article(s) > How to find a UIView subview using viewWithTag()"
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
      content: "Article(s) > How to find a UIView subview using viewWithTag()"
    - property: og:description
      content: "How to find a UIView subview using viewWithTag()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-find-a-uiview-subview-using-viewwithtag.html
date: 2019-09-26
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
  "title": "How to find a UIView subview using viewWithTag() | UIKit - free Swift example code",
  "desc": "How to find a UIView subview using viewWithTag()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-find-a-uiview-subview-using-viewwithtag",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
If you need a quick way to get hold of a view inside a complicated view hierarchy, you're looking for `viewWithTag()` – give it the tag to find and a view to search from, and this method will search all subviews, and all sub-subviews, and so on, until it finds a view with the matching tag number. The method returns an optional `UIView` because it might not find a view with that tag, so unwrap it carefully.

Here's an example:

```swift
if let foundView = view.viewWithTag(0xDEADBEEF) {
    foundView.removeFromSuperview()
}
```

Easy to remember tags such as `0xDEADBEEF` are quite common amongst coders.

NB: Extensive use of `viewWithTag()` is a sign of poor code structure. It's good for the occasional shortcut, but really shouldn't be relied on for serious development.

You see, if you use `viewWithTag()` to find some specific nested view then you’re effectively saying “there's a view that I have given a magic number to, and it's definitely a `UIImageView` (for example), so please find it and use it.” This means you're bypassing all the safety of the Swift compiler: that number might change or be removed, or the view in question might change type or be removed – and neither of those would cause problems or get caught.

If you use `viewWithTag()` rarely then it's fine, but if you find yourself doing it a lot then really you should be thinking about an alternative – making a custom subclass for your table view cell, for example.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-bring-a-subview-to-the-front-of-a-uiview">How to bring a subview to the front of a UIView 
/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView 
/example-code/uikit/how-to-force-a-uiview-to-redraw-setneedsdisplay">How to force a UIView to redraw: setNeedsDisplay() 
/example-code/calayer/how-to-add-a-border-outline-color-to-a-uiview">How to add a border outline color to a UIView 
/example-code/media/how-to-render-a-uiview-to-a-uiimage">How to render a UIView to a UIImage</a>
-->

:::

---

<TagLinks />