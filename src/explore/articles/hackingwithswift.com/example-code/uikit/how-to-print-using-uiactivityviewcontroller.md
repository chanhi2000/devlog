---
lang: ko-KR
title: "How to print using UIActivityViewController"
description: "Article(s) > How to print using UIActivityViewController"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to print using UIActivityViewController"
    - property: og:description
      content: "How to print using UIActivityViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-print-using-uiactivityviewcontroller.html
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
  "title": "How to print using UIActivityViewController | UIKit - free Swift example code",
  "desc": "How to print using UIActivityViewController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-print-using-uiactivityviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
Printing in iOS used to be done using `UIPrintInteractionController`, and, while that still works, it has a much better replacement in the form of `UIActivityViewController`. This new class is responsible for taking a wide variety of actions of which printing is just one, but users can also tweet, post to Facebook, send by email, and any other action that has been registered by another app.

If you have a `UIImage` you want to print, you can just pass it in. If you want to print text, you can wrap it inside an `NSAttributedString` with some formatting, then place that inside a `UISimpleTextPrintFormatter` object, then print *that* – iOS automatically takes care of pagination, margins and more.

Below are two example functions that print an image and some text to help get you started:

```swift
func share(image: UIImage) {
    let vc = UIActivityViewController(activityItems: [image], applicationActivities: [])
    present(vc, animated: true)
}

func share(text: String) {
    let attrs = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 72), NSAttributedString.Key.foregroundColor: UIColor.red]
    let str = NSAttributedString(string: text, attributes: attrs)
    let print = UISimpleTextPrintFormatter(attributedText: str)

    let vc = UIActivityViewController(activityItems: [print], applicationActivities: nil)
    present(vc, animated: true)
}
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-print-debug-text-in-swift">How to print debug text in Swift 
/example-code/uikit/how-to-share-content-with-uiactivityviewcontroller">How to share content with UIActivityViewController 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />