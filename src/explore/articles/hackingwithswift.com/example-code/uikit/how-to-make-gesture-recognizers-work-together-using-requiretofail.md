---
lang: ko-KR
title: "How to make gesture recognizers work together using require(toFail:)"
description: "Article(s) > How to make gesture recognizers work together using require(toFail:)"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make gesture recognizers work together using require(toFail:)"
    - property: og:description
      content: "How to make gesture recognizers work together using require(toFail:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-gesture-recognizers-work-together-using-requiretofail.html
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
  "title": "How to make gesture recognizers work together using require(toFail:) | UIKit - free Swift example code",
  "desc": "How to make gesture recognizers work together using require(toFail:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-gesture-recognizers-work-together-using-requiretofail",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
It’s common to have multiple gesture recognizers attached to a single view, all doing different things depending on the user’s taps on your screen. By default, iOS lets them fight for control, but usually you want to execute them in some sort of particular order: one gesture should only be matched if another failed. 

For example, here are two gesture recognizers that exist on the same view:

```swift
let swipe = UISwipeGestureRecognizer(target: self, action: #selector(executeSwipe))
let tap = UITapGestureRecognizer(target: self, action: #selector(executeTap))

view.addGestureRecognizer(swipe)
view.addGestureRecognizer(tap)
```

A swipe gesture is a tap followed by a linear movement, whereas a tap is just a tap – we need to make sure the swipe gesture has definitely not been recognizer before the tap gesture is checked.

iOS often does a fairly good job of this, but there’s no need to leave it up to chance: if you call `require(toFail:)` on the tap gesture recognizer, passing in the swipe recognizer, iOS will definitely make sure they don’t compete:

```swift
tap.require(toFail: swipe)
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view">How to add a gesture recognizer to a view 
/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture() 
/quick-start/swiftui/how-to-create-gesture-chains-using-sequencedbefore">How to create gesture chains using sequenced(before:) 
/quick-start/swiftui/how-to-combine-text-views-together">How to combine text views together 
/example-code/uikit/how-to-detect-a-double-tap-gesture">How to detect a double tap gesture</a>
-->

:::

---

<TagLinks />