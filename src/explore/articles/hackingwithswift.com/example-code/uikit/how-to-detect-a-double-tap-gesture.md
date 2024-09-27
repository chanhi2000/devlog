---
lang: ko-KR
title: "How to detect a double tap gesture"
description: "Article(s) > How to detect a double tap gesture"
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
      content: "Article(s) > How to detect a double tap gesture"
    - property: og:description
      content: "How to detect a double tap gesture"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-a-double-tap-gesture.html
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
  "title": "How to detect a double tap gesture | UIKit - free Swift example code",
  "desc": "How to detect a double tap gesture",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-a-double-tap-gesture",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
The iOS `UITapGestureRecognizer` class has a built-in way to detect a double tap on any view. All you need to do is create the recognizer, set its `numberOfTapsRequired` property to 2, then add it to the view you want to monitor.

Here's an example:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    let tap = UITapGestureRecognizer(target: self, action: #selector(doubleTapped))
    tap.numberOfTapsRequired = 2
    view.addGestureRecognizer(tap)
}

@objc func doubleTapped() {
    // do something here
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-read-tap-and-double-tap-gestures">How to read tap and double-tap gestures 
/quick-start/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view">How to detect the location of a tap inside a view 
/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view">How to add a gesture recognizer to a view 
/example-code/uikit/how-to-let-users-tap-on-a-uitableviewcell-while-editing-is-enabled">How to let users tap on a UITableViewCell while editing is enabled 
/example-code/uikit/how-to-make-gesture-recognizers-work-together-using-requiretofail">How to make gesture recognizers work together using require(toFail:)</a>
-->

:::

---

<TagLinks />