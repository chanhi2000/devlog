---
lang: ko-KR
title: "How to create custom text input using UIKeyInput"
description: "Article(s) > How to create custom text input using UIKeyInput"
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
      content: "Article(s) > How to create custom text input using UIKeyInput"
    - property: og:description
      content: "How to create custom text input using UIKeyInput"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput.html
date: 2020-04-23
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
  "title": "How to create custom text input using UIKeyInput | UIKit - free Swift example code",
  "desc": "How to create custom text input using UIKeyInput",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
Although we can use `pressesBegan()` and `pressesEnded()` to read keypresses, they won’t show the on-screen keyboard and so won’t let you provide custom text input for users without a hardware keyboard. If you need that keyboard to be shown, you should create a class that adopts the `UIKeyInput` protocol instead, which has just three requirements:

- What to do when text is inserted.
<li>What to do when text is deleted.
<li>Whether your custom text input currently has text or not.

The only other thing you need to know is that your custom input control will show the keyboard when it becomes first responder. So, you should override the `canBecomeFirstResponder` property of your subclass, setting it to true rather than the default of false.

To demonstrate this, we could create a simple `UIView` subclass that draws text to the screen as it’s typed, like this:

```swift
class TextRenderingView: UIView, UIKeyInput {
    // the string we'll be drawing
    var input = ""

    override var canBecomeFirstResponder: Bool {
        true
    }

    var hasText: Bool {
        input.isEmpty == false
    }

    func insertText(_ text: String) {
        input += text
        setNeedsDisplay()
    }

    func deleteBackward() {
        _ = input.popLast()
        setNeedsDisplay()
    }

    override func draw(_ rect: CGRect) {
        let attrs: [NSAttributedString.Key: Any] = [.font: UIFont.systemFont(ofSize: 32)]
        let attributedString = NSAttributedString(string: input, attributes: attrs)
        attributedString.draw(in: rect)
    }
}
```

If you want to handle more complex user input, such as selecting ranges of text or drawing the caret, you should use the more advanced `UITextInput` protocol instead.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded() 
/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a>
-->

:::

---

<TagLinks />