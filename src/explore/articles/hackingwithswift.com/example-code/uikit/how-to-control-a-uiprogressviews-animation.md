---
lang: ko-KR
title: "How to control a UIProgressView’s animation"
description: "Article(s) > How to control a UIProgressView’s animation"
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
      content: "Article(s) > How to control a UIProgressView’s animation"
    - property: og:description
      content: "How to control a UIProgressView’s animation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-control-a-uiprogressviews-animation.html
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
  "title": "How to control a UIProgressView’s animation | UIKit - free Swift example code",
  "desc": "How to control a UIProgressView’s animation",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-control-a-uiprogressviews-animation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
The `UIProgressView` class has a built-in `setProgress()` method that adjusts its progress with animation, but by default you don’t have control over the timing of that animation.

Fortunately, if you want to time the animation to match other aspects of your user interface you can wrap it inside an animation block of your own.

For example, given a `UIProgressView` stored in a `progressView` property, this will animate the progress view to completion over four seconds:

```swift
UIView.animate(withDuration: 4.0) {
    self.progressView.setProgress(1.0, animated: true)
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-start-an-animation-immediately-after-a-view-appears">How to start an animation immediately after a view appears 
/quick-start/swiftui/how-to-create-an-explicit-animation">How to create an explicit animation 
/quick-start/swiftui/how-to-create-a-spring-animation">How to create a spring animation 
/quick-start/swiftui/how-to-delay-an-animation">How to delay an animation 
/quick-start/swiftui/how-to-run-a-completion-callback-when-an-animation-finishes">How to run a completion callback when an animation finishes</a>
-->

:::

---

<TagLinks />