---
lang: ko-KR
title: "How to limit the number of characters in a UITextField or UITextView"
description: "Article(s) > How to limit the number of characters in a UITextField or UITextView"
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
      content: "Article(s) > How to limit the number of characters in a UITextField or UITextView"
    - property: og:description
      content: "How to limit the number of characters in a UITextField or UITextView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview.html
date: 2019-09-19
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
  "title": "How to limit the number of characters in a UITextField or UITextView | UIKit - free Swift example code",
  "desc": "How to limit the number of characters in a UITextField or UITextView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
If you have a `UITextField` or `UITextView` and want to stop users typing in more than a certain number of letters, you need to set yourself as the delegate for the control then implement either `shouldChangeCharactersIn` (for text fields) or `shouldChangeTextIn` (for text views).

Next, add one of these two methods, depending on whether you are working with text fields (single line) or text views (multiple lines):

```swift
// Use this if you have a UITextField
func textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
    // get the current text, or use an empty string if that failed
    let currentText = textField.text ?? ""

    // attempt to read the range they are trying to change, or exit if we can't
    guard let stringRange = Range(range, in: currentText) else { return false }

    // add their new text to the existing text
    let updatedText = currentText.replacingCharacters(in: stringRange, with: string)

    // make sure the result is under 16 characters
    return updatedText.count <= 16
}

// Use this if you have a UITextView
func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool {
    // get the current text, or use an empty string if that failed
    let currentText = textView.text ?? ""

    // attempt to read the range they are trying to change, or exit if we can't
    guard let stringRange = Range(range, in: currentText) else { return false }

    // add their new text to the existing text
    let updatedText = currentText.replacingCharacters(in: stringRange, with: text)

    // make sure the result is under 16 characters
    return updatedText.count <= 16
}
```

I've specified 16 as the maximum number of characters, but just change that to whatever you need.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-limit-the-number-of-items-in-a-fetch-request">How to limit the number of items in a fetch request 
/quick-start/swiftui/how-to-make-voiceover-read-characters-individually">How to make VoiceOver read characters individually 
/example-code/uikit/how-to-pad-a-uitextview-by-setting-its-text-container-inset">How to pad a UITextView by setting its text container inset 
/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return">How to move to the next UITextField when the user presses return 
/example-code/uikit/how-to-hide-passwords-in-a-uitextfield">How to hide passwords in a UITextField</a>
-->

:::

---

<TagLinks />