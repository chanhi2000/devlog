---
lang: ko-KR
title: "How to make UIViewPropertyAnimator scrub with a custom curve: scrubsLinearly"
description: "Article(s) > How to make UIViewPropertyAnimator scrub with a custom curve: scrubsLinearly"
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
      content: "Article(s) > How to make UIViewPropertyAnimator scrub with a custom curve: scrubsLinearly"
    - property: og:description
      content: "How to make UIViewPropertyAnimator scrub with a custom curve: scrubsLinearly"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-uiviewpropertyanimator-scrub-with-a-custom-curve-scrubslinearly.html
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
  "title": "How to make UIViewPropertyAnimator scrub with a custom curve: scrubsLinearly | UIKit - free Swift example code",
  "desc": "How to make UIViewPropertyAnimator scrub with a custom curve: scrubsLinearly",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-uiviewpropertyanimator-scrub-with-a-custom-curve-scrubslinearly",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
`UIViewPropertyAnimator` is an incredibly easy way to build custom animations on iOS, making it trivial to support scrubbable, reversible animations. However, by default scrubbing behaves differently from your regular animation: scrubbing always happens linearly, even if your animation was performed using a curve such as ease-in-ease-out.

This is actually a feature rather than a bug, and it’s incredibly intelligent – iOS automatically maps your curve onto a linear animation at the same point, and does the same in reverse, because it can be confusing for users if they try to scrub an animation and it doesn’t follow their finger.

On the flip side, of you’re scrubbing an animation programmatically this behavior isn’t always desirable. Fortunately, iOS 11 introduced a `scrubsLinearly` property for `UIViewPropertyAnimator`: set this to false to make scrubbing retain your custom animation curve.

The default setting is true, which makes `UIViewPropertyAnimator` continue working like it did on iOS 10. To change it, just add this code:

```swift
animator.scrubsLinearly = false
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-animate-views-using-uiviewpropertyanimator">How to animate views using UIViewPropertyAnimator 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/system/how-to-make-your-app-open-with-a-custom-url-scheme">How to make your app open with a custom URL scheme 
/example-code/language/how-to-make-custom-types-from-strings-using-expressiblebystringliteral">How to make custom types from strings using ExpressibleByStringLiteral</a>
-->

:::

---

<TagLinks />