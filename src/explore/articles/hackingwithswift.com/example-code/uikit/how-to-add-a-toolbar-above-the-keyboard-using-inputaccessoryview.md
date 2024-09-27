---
lang: ko-KR
title: "How to add a toolbar above the keyboard using inputAccessoryView"
description: "Article(s) > How to add a toolbar above the keyboard using inputAccessoryView"
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
      content: "Article(s) > How to add a toolbar above the keyboard using inputAccessoryView"
    - property: og:description
      content: "How to add a toolbar above the keyboard using inputAccessoryView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-toolbar-above-the-keyboard-using-inputaccessoryview.html
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
  "title": "How to add a toolbar above the keyboard using inputAccessoryView | UIKit - free Swift example code",
  "desc": "How to add a toolbar above the keyboard using inputAccessoryView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-toolbar-above-the-keyboard-using-inputaccessoryview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
If your user is likely to want common editing operations to appear while they are typing, you should set a custom view for your text fields’ `inputAccessoryView` property. For example, Tweetbot shows common Twitter symbols right above the keyboard, such as `@` and `#`, so you can type them without having to adjust the iOS keyboard.

There are several ways you can do this, but the easiest is just to create a `UIToolbar` with any buttons you want. You can then call `sizeToFit()` on it so the toolbar fits all its buttons, then assign that to the `inputAccessoryView` property of any text fields and text views that should use it.

Here’s some code to get you started:

```swift
let bar = UIToolbar()
let reset = UIBarButtonItem(title: "Reset", style: .plain, target: self, action: #selector(resetTapped))
bar.items = [reset]
bar.sizeToFit()
textField.inputAccessoryView = bar
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard">How to add a toolbar to the keyboard 
/quick-start/swiftui/how-to-let-users-customize-toolbar-buttons">How to let users customize toolbar buttons 
/quick-start/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it">How to create a toolbar and add buttons to it 
/example-code/uikit/how-to-show-and-hide-a-toolbar-inside-a-uinavigationcontroller">How to show and hide a toolbar inside a UINavigationController 
/quick-start/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut">How to add keyboard shortcuts using keyboardShortcut()</a>
-->

:::

---

<TagLinks />