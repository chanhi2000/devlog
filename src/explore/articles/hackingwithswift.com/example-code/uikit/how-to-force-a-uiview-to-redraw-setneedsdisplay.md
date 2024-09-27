---
lang: ko-KR
title: "How to force a UIView to redraw: setNeedsDisplay()"
description: "Article(s) > How to force a UIView to redraw: setNeedsDisplay()"
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
      content: "Article(s) > How to force a UIView to redraw: setNeedsDisplay()"
    - property: og:description
      content: "How to force a UIView to redraw: setNeedsDisplay()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-force-a-uiview-to-redraw-setneedsdisplay.html
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
  "title": "How to force a UIView to redraw: setNeedsDisplay() | UIKit - free Swift example code",
  "desc": "How to force a UIView to redraw: setNeedsDisplay()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-force-a-uiview-to-redraw-setneedsdisplay",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
All views and subclasses are rendered using the `drawRect()` method, but you should never call that method directly yourself. Instead, it gets called by the system whenever drawing is required, which allows it to to avoid multiple redraws if `drawRect()` is called several times in a row.

Instead, if you want a view to redraw immediately, you should call its `setNeedsDisplay()` method like this:

```swift
myButton.setNeedsDisplay()
```

That will ask UIKit to redraw the button using `drawRect()`, but only if a redraw is not already queued.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView 
/example-code/uikit/how-to-force-a-view-controller-to-use-light-or-dark-mode">How to force a view controller to use light or dark mode 
/example-code/language/when-is-it-safe-to-force-unwrap-optionals">When is it safe to force unwrap optionals? 
/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture() 
/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer">How to force views to one side inside a stack using Spacer</a>
-->

:::

---

<TagLinks />