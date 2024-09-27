---
lang: ko-KR
title: "How to read the interface orientation: portrait or landscape?"
description: "Article(s) > How to read the interface orientation: portrait or landscape?"
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
      content: "Article(s) > How to read the interface orientation: portrait or landscape?"
    - property: og:description
      content: "How to read the interface orientation: portrait or landscape?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-read-the-interface-orientation-portrait-or-landscape.html
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
  "title": "How to read the interface orientation: portrait or landscape? | UIKit - free Swift example code",
  "desc": "How to read the interface orientation: portrait or landscape?",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-read-the-interface-orientation-portrait-or-landscape",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
Apple generally doesn’t want developers to think about things like “portrait” and “landscape” because devices come in a range of sizes, and in the case of iPad you get slide over and split view on top. However, sometimes it’s just *useful*, particularly on iPhone where the difference between portrait and landscape is huge.

If you just want to read the *current* interface orientation you can do so using `UIApplication.shared.statusBarOrientation`, which will contain a value such as `.portraitUpsideDown`. Alternatively, you can use its `isLandscape` and `isPortrait` properties to check for both values of landscape or both values of portrait at once.

If you want your interface to adapt every time the user moves between landscape and portrait, you should check `UIApplication.shared.statusBarOrientation` inside the `willTransition(to:)` method, which is triggered when the trait collection of your app changes.

Something like this ought to do the trick:

```swift
override func willTransition(to newCollection: UITraitCollection, with coordinator: UIViewControllerTransitionCoordinator) {
    coordinator.animate(alongsideTransition: { context in
        if UIApplication.shared.statusBarOrientation.isLandscape {
            // activate landscape changes
        } else {
            // activate portrait changes
        }
    })
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-preview-your-layout-in-portrait-or-landscape">How to preview your layout in portrait or landscape 
/example-code/uikit/how-to-lock-a-view-controllers-orientation-using-supportedinterfaceorientations">How to lock a view controller’s orientation using supportedInterfaceOrientations 
/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards">SwiftUI vs Interface Builder and storyboards 
/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder">How to use IBInspectable to adjust values in Interface Builder 
/example-code/uikit/how-to-make-your-user-interface-in-code">How to make your user interface in code</a>
-->

:::

---

<TagLinks />