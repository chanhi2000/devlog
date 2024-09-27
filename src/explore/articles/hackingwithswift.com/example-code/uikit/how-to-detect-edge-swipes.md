---
lang: ko-KR
title: "How to detect edge swipes"
description: "Article(s) > How to detect edge swipes"
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
      content: "Article(s) > How to detect edge swipes"
    - property: og:description
      content: "How to detect edge swipes"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-edge-swipes.html
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
  "title": "How to detect edge swipes | UIKit - free Swift example code",
  "desc": "How to detect edge swipes",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-edge-swipes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
Detecting pan gestures is easy enough with a regular `UIPanGestureRecognizer`, but there's a special gesture recognizer to use if you want to detect the user swiping from the edge of their screen. The example below demonstrates detecting the user swiping from the left edge of the screen:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    let edgePan = UIScreenEdgePanGestureRecognizer(target: self, action: #selector(screenEdgeSwiped))
    edgePan.edges = .left

    view.addGestureRecognizer(edgePan)
}

@objc func screenEdgeSwiped(_ recognizer: UIScreenEdgePanGestureRecognizer) {
    if recognizer.state == .recognized {
        print("Screen edge swiped!")
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-make-uitableviewcell-separators-go-edge-to-edge">How to make UITableViewCell separators go edge to edge 
/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration 
/quick-start/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view">How to detect the location of a tap inside a view 
/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded() 
/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage">CIDetectorTypeFace: How to detect faces in a UIImage</a>
-->

:::

---

<TagLinks />