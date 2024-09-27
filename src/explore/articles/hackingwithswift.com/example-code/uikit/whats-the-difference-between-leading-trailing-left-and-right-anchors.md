---
lang: ko-KR
title: "What’s the difference between leading, trailing, left, and right anchors?"
description: "Article(s) > What’s the difference between leading, trailing, left, and right anchors?"
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
      content: "Article(s) > What’s the difference between leading, trailing, left, and right anchors?"
    - property: og:description
      content: "What’s the difference between leading, trailing, left, and right anchors?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/whats-the-difference-between-leading-trailing-left-and-right-anchors.html
date: 2019-10-26
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
  "title": "What’s the difference between leading, trailing, left, and right anchors? | UIKit - free Swift example code",
  "desc": "What’s the difference between leading, trailing, left, and right anchors?",
  "link": "https://hackingwithswift.com/example-code/uikit/whats-the-difference-between-leading-trailing-left-and-right-anchors",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
If you wanted to pin a button to the left edge of its parent, you might write code like this:

```swift
button.leftAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leftAnchor).isActive = true
```

However, that has a problem: in right-to-left languages, the user interface ought to be flipped horizontally for the most part, but your button won’t move – you’ve specifically asked it to be pinned to the left edge regardless of the user’s device settings.

If that’s what you want, you don’t have a problem. However, if you meant “left edge for left-to-right languages and *right* edge for right-to-left languages,” then you should use `leadingAnchor` instead of `leftAnchor`, like this:

```swift
button.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
```

For the same effect on the opposite edge, you should use `trailingAnchor` rather than `rightAnchor`. Again, if you specifically want something to appear on the right regardless of language then this does not apply.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-support-right-to-left-languages">How to support right-to-left languages 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/uikit/how-to-position-a-view-using-auto-layout-anchors">How to position a view using Auto Layout anchors</a>
-->

:::

---

<TagLinks />