---
lang: ko-KR
title: "How to make tappable links in NSAttributedString"
description: "Article(s) > How to make tappable links in NSAttributedString"
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
      content: "Article(s) > How to make tappable links in NSAttributedString"
    - property: og:description
      content: "How to make tappable links in NSAttributedString"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-make-tappable-links-in-nsattributedstring.html
date: 2019-06-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make tappable links in NSAttributedString | System - free Swift example code",
  "desc": "How to make tappable links in NSAttributedString",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-make-tappable-links-in-nsattributedstring",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<VidStack src="youtube/qr1XJMIziBg" />

<!-- TODO: 작성 -->

<!-- 
You can make interactive hyperlinks in any attributed string, which in turn means you can add interactive hyperlinks to any UIKit control. If you're working with `UITextView` (which is likely, let's face it), you get basic hyperlinks just by enabling the "Links" data detector in Interface Builder, but that doesn't work for arbitrary strings – for example, maybe you want the words “tap here" to be interactive.

Here is a complete example of arbitrary hyperlinks using a `UITextView`. Make sure your text view has "Selectable" enabled, as this is required by iOS:

```swift
class ViewController: UIViewController, UITextViewDelegate {
    @IBOutlet var textView: UITextView!

    override func viewDidLoad() {
        let attributedString = NSMutableAttributedString(string: "Want to learn iOS? You should visit the best source of free iOS tutorials!")
        attributedString.addAttribute(.link, value: "https://www.hackingwithswift.com", range: NSRange(location: 19, length: 55))

        textView.attributedText = attributedString
    }

    func textView(_ textView: UITextView, shouldInteractWith URL: URL, in characterRange: NSRange, interaction: UITextItemInteraction) -> Bool {
        UIApplication.shared.open(URL)
        return false
    }
}
```

There are three important things to note about this technique. 

First, your view controller should be set as the delegate for your text view in Interface Builder or in code.

Second, the tap cannot be very brief, which means quick taps are ignored by iOS. If you find find this annoying you might consider something like this: <a href="https://gist.github.com/benjaminbojko/c92ac19fe4db3302bd28">https://gist.github.com/benjaminbojko/c92ac19fe4db3302bd28</a>.

Third, this technique is easily used with custom URL schemes, e.g. `yourapp://`, which you can catch and parse inside `shouldInteractWith` to trigger your own behaviors.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-customize-the-way-links-are-opened">How to customize the way links are opened 
/quick-start/swiftui/how-to-open-web-links-in-safari">How to open web links in Safari 
/quick-start/swiftui/how-to-create-a-tappable-button">How to create a tappable button 
/quick-start/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape">How to control the tappable area of a view using contentShape() 
/quick-start/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable">How to fix a Form Picker or a NavigationLink that isn’t tappable</a>
-->

:::

---

<TagLinks />