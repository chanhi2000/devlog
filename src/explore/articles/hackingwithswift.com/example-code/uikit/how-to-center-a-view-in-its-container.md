---
lang: ko-KR
title: "How to center a view in its container"
description: "Article(s) > How to center a view in its container"
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
      content: "Article(s) > How to center a view in its container"
    - property: og:description
      content: "How to center a view in its container"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-center-a-view-in-its-container.html
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
  "title": "How to center a view in its container | UIKit - free Swift example code",
  "desc": "How to center a view in its container",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-center-a-view-in-its-container",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
There are two ways to center one `UIView` inside another, depending on whether you use Auto Layout.

If you don’t use Auto Layout, it’s only one line of code:

```swift
childView.center = parentView.center
```

That sets the position once, so it won’t update when your user rotates their device or if they use something like Slide Over to change the size of your app.

If you’re using Auto Layout, you can center your child view inside its parent like this:

```swift
childView.centerXAnchor.constraint(equalTo: parentView.centerXAnchor).isActive = true
childView.centerYAnchor.constraint(equalTo: parentView.centerYAnchor).isActive = true
```

Those constraints will automatically update as the available space changes.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-adjust-the-size-of-a-view-relative-to-its-container">How to adjust the size of a view relative to its container 
/example-code/uikit/how-to-pad-a-uitextview-by-setting-its-text-container-inset">How to pad a UITextView by setting its text container inset 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location">How to dynamically adjust the appearance of a view based on its size and location 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />