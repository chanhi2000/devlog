---
lang: ko-KR
title: "How to adjust a UIScrollView to fit the keyboard"
description: "Article(s) > How to adjust a UIScrollView to fit the keyboard"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to adjust a UIScrollView to fit the keyboard"
    - property: og:description
      content: "How to adjust a UIScrollView to fit the keyboard"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-adjust-a-uiscrollview-to-fit-the-keyboard.html
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
  "title": "How to adjust a UIScrollView to fit the keyboard | UIKit - free Swift example code",
  "desc": "How to adjust a UIScrollView to fit the keyboard",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-adjust-a-uiscrollview-to-fit-the-keyboard",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
If your user interface brings up the keyboard, you should respond by adjusting your layout so that all parts are still visible. If you're using a `UIScrollView` or any classes that have a scroll view as part of their layout (table views and text views, for example), this means adjusting the `contentInset` property to account for the keyboard.

First you need to register for keyboard change notifications. Put this into your `viewDidLoad()` method:

```swift
let notificationCenter = NotificationCenter.default
notificationCenter.addObserver(self, selector: #selector(adjustForKeyboard), name: UIResponder.keyboardWillHideNotification, object: nil)
notificationCenter.addObserver(self, selector: #selector(adjustForKeyboard), name: UIResponder.keyboardWillChangeFrameNotification, object: nil)
```

Now add this method somewhere else in your class:

```swift
@objc func adjustForKeyboard(notification: Notification) {
    guard let keyboardValue = notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue else { return }

    let keyboardScreenEndFrame = keyboardValue.cgRectValue
    let keyboardViewEndFrame = view.convert(keyboardScreenEndFrame, from: view.window)

    if notification.name == UIResponder.keyboardWillHideNotification {
        yourTextView.contentInset = .zero
    } else {
        yourTextView.contentInset = UIEdgeInsets(top: 0, left: 0, bottom: keyboardViewEndFrame.height - view.safeAreaInsets.bottom, right: 0)
    }

    yourTextView.scrollIndicatorInsets = yourTextView.contentInset

    let selectedRange = yourTextView.selectedRange
    yourTextView.scrollRangeToVisible(selectedRange)
}
```

That example code is for adjusting text views. If you want it to apply to a regular scroll view, just take out the last two lines - they are in there so that the text view readjusts itself so the user doesn't lose their place while editing.

**Note:** It’s important to subtract `view.safeAreaInsets.bottom` from the keyboard height to avoid making your text view too small on devices with a home indicator.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-adjust-image-content-mode-using-aspect-fill-aspect-fit-and-scaling">How to adjust image content mode using aspect fill, aspect fit and scaling 
/example-code/uikit/how-to-support-pinch-to-zoom-in-a-uiscrollview">How to support pinch to zoom in a UIScrollView 
/example-code/uikit/how-to-change-the-scroll-indicator-inset-for-a-uiscrollview">How to change the scroll indicator inset for a UIScrollView 
/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view">How to find an aspect fit image’s size inside an image view 
/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset">How to make empty UITableViews look more attractive using DZNEmptyDataSet</a>
-->

:::

---

<TagLinks />