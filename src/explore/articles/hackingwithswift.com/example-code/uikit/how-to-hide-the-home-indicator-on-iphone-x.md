---
lang: ko-KR
title: "How to hide the home indicator on iPhone X"
description: "Article(s) > How to hide the home indicator on iPhone X"
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
      content: "Article(s) > How to hide the home indicator on iPhone X"
    - property: og:description
      content: "How to hide the home indicator on iPhone X"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x.html
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
  "title": "How to hide the home indicator on iPhone X | UIKit - free Swift example code",
  "desc": "How to hide the home indicator on iPhone X",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
iPhone X did away with the home button for the first time in any iPhone, replacing it with an interactive line that sits at the bottom of the screen called the home indicator.

This indicator always remains visible unless you request others, and generally Apple suggests it’s a good idea to keep it visible. At the same time, there are many times when you want full control of the screen to yourself, for example if the user is watching a video, and in those times you’re going to want to hide the home indicator.

To hide the home indicator on iPhone X all you need to do is return true from the `prefersHomeIndicatorAutoHidden` property in your view controller. You can add logic if you want, allowing you to hide the home indicator only when certain conditions are reached, or you can just always request it be hidden, like this:

```swift
override var prefersHomeIndicatorAutoHidden: Bool {
    return true
}
```

That will cause the home indicator to be hidden after a couple of seconds, but it will reappear as soon as the user touches the screen.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-hide-the-home-indicator-and-other-system-ui">How to hide the home indicator and other system UI 
/example-code/uikit/how-to-change-the-scroll-indicator-inset-for-a-uiscrollview">How to change the scroll indicator inset for a UIScrollView 
/example-code/uikit/how-to-read-the-battery-level-of-an-iphone-or-ipad">How to read the battery level of an iPhone or iPad 
/example-code/location/how-to-make-an-iphone-transmit-an-ibeacon">How to make an iPhone transmit an iBeacon 
/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up</a>
-->

:::

---

<TagLinks />