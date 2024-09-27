---
lang: ko-KR
title: "How to control which screen edges trigger system gestures using preferredScreenEdgesDeferringSystemGestures"
description: "Article(s) > How to control which screen edges trigger system gestures using preferredScreenEdgesDeferringSystemGestures"
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
      content: "Article(s) > How to control which screen edges trigger system gestures using preferredScreenEdgesDeferringSystemGestures"
    - property: og:description
      content: "How to control which screen edges trigger system gestures using preferredScreenEdgesDeferringSystemGestures"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-control-which-screen-edges-trigger-system-gestures-using-preferredscreenedgesdeferringsystemgestures.html
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
  "title": "How to control which screen edges trigger system gestures using preferredScreenEdgesDeferringSystemGestures | UIKit - free Swift example code",
  "desc": "How to control which screen edges trigger system gestures using preferredScreenEdgesDeferringSystemGestures",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-control-which-screen-edges-trigger-system-gestures-using-preferredscreenedgesdeferringsystemgestures",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
iOS 11.0 was the first to showcase complex system gestures based around the iPhone X, and it’s the point now where all edges of the screen do different things on different devices. 

Historically, iOS apps automatically delayed system gestures from the top and bottom edges if they were run as full screen apps – if they hid the status bar – but as of iOS 11 you should now make your view controllers override the `preferredScreenEdgesDeferringSystemGestures` property to tell the system which edges should delay the built-in system gestures.

For example, if you main view controller uses the bottom screen edge you might give it code like this:

```swift
override func preferredScreenEdgesDeferringSystemGestures() -> UIRectEdge {
    return [.bottom]
}
```

That will allow iOS to use left, right, and top edge swipes freely, but defer the system gesture for bottom swipes.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-stop-system-gestures-from-interfering-with-your-own">How to stop system gestures from interfering with your own 
/quick-start/swiftui/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts">How to control which NavigationSplitView column is shown in compact layouts 
/quick-start/swiftui/how-to-control-which-view-is-shown-when-your-app-launches">How to control which view is shown when your app launches 
/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture">How to make two gestures recognize at the same time using simultaneousGesture() 
/example-code/language/how-to-detect-when-the-system-is-under-pressure-and-you-should-reduce-your-work">How to detect when the system is under pressure and you should reduce your work</a>
-->

:::

---

<TagLinks />