---
lang: ko-KR
title: "How to add a UITextField to a UIAlertController"
description: "Article(s) > How to add a UITextField to a UIAlertController"
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
      content: "Article(s) > How to add a UITextField to a UIAlertController"
    - property: og:description
      content: "How to add a UITextField to a UIAlertController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-uitextfield-to-a-uialertcontroller.html
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
  "title": "How to add a UITextField to a UIAlertController | UIKit - free Swift example code",
  "desc": "How to add a UITextField to a UIAlertController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-uitextfield-to-a-uialertcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
The `UIAlertController` class from iOS 8.0 lets you add as many text fields as you need, and you can read the value of those text fields when the user taps a button.

The example below creates an alert controller with one button and a text field. When the button is tapped, the text of the text field is pulled out, at which point it's down to you to do something interesting with it:

```swift
func promptForAnswer() {
    let ac = UIAlertController(title: "Enter answer", message: nil, preferredStyle: .alert)
    ac.addTextField()

    let submitAction = UIAlertAction(title: "Submit", style: .default) { [unowned ac] _ in
        let answer = ac.textFields![0]
        // do something interesting with "answer" here
    }

    ac.addAction(submitAction)

    present(ac, animated: true)
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview">How to limit the number of characters in a UITextField or UITextView 
/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return">How to move to the next UITextField when the user presses return 
/example-code/uikit/how-to-hide-passwords-in-a-uitextfield">How to hide passwords in a UITextField 
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar 
/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a>
-->

:::

---

<TagLinks />