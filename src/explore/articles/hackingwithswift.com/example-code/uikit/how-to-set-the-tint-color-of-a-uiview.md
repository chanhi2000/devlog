---
lang: ko-KR
title: "How to set the tint color of a UIView"
description: "Article(s) > How to set the tint color of a UIView"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to set the tint color of a UIView"
    - property: og:description
      content: "How to set the tint color of a UIView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-set-the-tint-color-of-a-uiview.html
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
  "title": "How to set the tint color of a UIView | UIKit - free Swift example code",
  "desc": "How to set the tint color of a UIView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-set-the-tint-color-of-a-uiview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
The `tintColor` property of any `UIView` subclass lets you change the coloring effect applied to it. The exact effect depends on what control you're changing: for navigation bars and tab bars this means the text and icons on their buttons, for text views it means the selection cursor and highlighted text, for progress bars it's the track color, and so on.

`tintColor` can be set for any individual view to color just one view, for the whole view in your view controller to color all its subviews, or even for the whole window in your application so that all views and subviews are tinted at once.

To tint just the current view controller, use this code:

```swift
override func viewDidLoad() {
    view.tintColor = UIColor.red
}
```

If you want to tint all views in your app, put this in your <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift`:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // Override point for customization after application launch.
    window?.tintColor = UIColor.red

    return true
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-change-the-tint-color-for-individual-list-rows">How to change the tint color for individual list rows 
/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView 
/quick-start/swiftui/how-to-set-the-background-color-of-list-rows-using-listrowbackground">How to set the background color of list rows using listRowBackground() 
/example-code/calayer/how-to-add-a-border-outline-color-to-a-uiview">How to add a border outline color to a UIView 
/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet</a>
-->

:::

---

<TagLinks />