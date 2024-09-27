---
lang: ko-KR
title: "How to make a background image run under the safe area"
description: "Article(s) > How to make a background image run under the safe area"
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
      content: "Article(s) > How to make a background image run under the safe area"
    - property: og:description
      content: "How to make a background image run under the safe area"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-a-background-image-run-under-the-safe-area.html
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
  "title": "How to make a background image run under the safe area | UIKit - free Swift example code",
  "desc": "How to make a background image run under the safe area",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-a-background-image-run-under-the-safe-area",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
Broadly speaking it’s important to place your views so they are inside the safe area layout guide, but there are some occasions when you want to ignore that and have some that run *under* the safe area. Apple’s Weather app, for example, goes edge to edge with background weather graphics, then places the important content inside the safe area.

This is easy enough to accomplish: just make sure your background view goes edge to edge using your main view’s leading, trailing, top, and bottom anchors, then use the safe area layout guide’s anchors for your foreground view.

Here’s how that looks in code:

```swift
let background = UIView()
background.translatesAutoresizingMaskIntoConstraints = false
background.backgroundColor = .red
view.addSubview(background)

let foreground = UIView()
foreground.translatesAutoresizingMaskIntoConstraints = false
foreground.backgroundColor = .blue
view.addSubview(foreground)

background.leadingAnchor.constraint(equalTo: view.leadingAnchor).isActive = true
background.trailingAnchor.constraint(equalTo: view.trailingAnchor).isActive = true
background.topAnchor.constraint(equalTo: view.topAnchor).isActive = true
background.bottomAnchor.constraint(equalTo: view.bottomAnchor).isActive = true

foreground.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
foreground.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
foreground.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor).isActive = true
foreground.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor).isActive = true
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/what-is-the-safe-area-layout-guide">What is the safe area layout guide? 
/quick-start/swiftui/how-to-place-content-outside-the-safe-area">How to place content outside the safe area 
/quick-start/swiftui/how-to-inset-the-safe-area-with-custom-content">How to inset the safe area with custom content 
/quick-start/swiftui/how-to-add-extra-padding-to-the-safe-area">How to add extra padding to the safe area 
/quick-start/swiftui/how-to-place-content-into-the-safe-area">How to place content into the safe area</a>
-->

:::

---

<TagLinks />