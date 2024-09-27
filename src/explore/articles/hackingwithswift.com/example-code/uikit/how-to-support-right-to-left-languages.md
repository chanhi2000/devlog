---
lang: ko-KR
title: "How to support right-to-left languages"
description: "Article(s) > How to support right-to-left languages"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to support right-to-left languages"
    - property: og:description
      content: "How to support right-to-left languages"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-support-right-to-left-languages.html
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
  "title": "How to support right-to-left languages | UIKit - free Swift example code",
  "desc": "How to support right-to-left languages",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-support-right-to-left-languages",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
Hebrew, Arabic, Farsi, and more are all languages that use a right-to-left layout, and it doesn’t take much work to make your iOS apps fit in more naturally for those languages. In fact, there are four things you need to do to get most of the way there, and I want to walk through them briefly with some code.

First, make sure you use natural text alignment for your labels and text views. “Natural” automatically becomes either left aligned or right aligned depending on the user’s region, which means you don’t need to worry about. For example:

```swift
label.textAlignment = .natural
```

Second, use leading and trailing constraints rather than left and right, and again UIKit will automatically flip these when running on right-to-left devices:

```swift
label.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
label.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
```

Third, flip any images that need it. Most images should be fine without flipping, but if you have images that point to parts of your user interface then they should be flipped. This takes one line of code:

```swift
let flipped = originalImage.imageFlippedForRightToLeftLayoutDirection()
```

Note: that doesn’t actually flip the `UIImage`, but instead configures the image to be drawn flipped when it’s placed inside a `UIImageView`.

Finally, test your changes using a right-to-left region. The easiest way to do this is to go to the Product menu, hold down <kbd>Alt</kbd>, then click “Run…” to adjust your run schema. Now go to the Options tab and change Application Language from “System Language” to “Right-to-Left Pseudolanguage”. Now run your app in the simulator, and you should see your flipped layout working.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-support-drag-and-drop-in-swiftui">How to support drag and drop in SwiftUI 
/example-code/uikit/how-to-support-pinch-to-zoom-in-a-uiscrollview">How to support pinch to zoom in a UIScrollView 
/example-code/networking/how-to-support-low-data-mode-networking-using-allowsconstrainednetworkaccess">How to support low data mode networking using allowsConstrainedNetworkAccess 
/quick-start/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency">How to fix the error “async call in a function that does not support concurrency” 
/quick-start/swiftui/how-to-create-a-core-data-fetch-request-using-fetchrequest">How to create a Core Data fetch request using @FetchRequest</a>
-->

:::

---

<TagLinks />