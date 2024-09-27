---
lang: ko-KR
title: "How to send an email"
description: "Article(s) > How to send an email"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to send an email"
    - property: og:description
      content: "How to send an email"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-send-an-email.html
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
  "title": "How to send an email | UIKit - free Swift example code",
  "desc": "How to send an email",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-send-an-email",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!--
In the MessageUI framework lies the `MFMailComposeViewController` class, which handles sending emails from your app. You get to set the recipients, message title and message text, but you don't get to send it – that's for the user to tap themselves.

Here's some example code:

```swift
func sendEmail() {
    if MFMailComposeViewController.canSendMail() {
        let mail = MFMailComposeViewController()
        mail.mailComposeDelegate = self
        mail.setToRecipients(["you@yoursite.com"])
        mail.setMessageBody("<p>You're so awesome!</p>", isHTML: true)

        present(mail, animated: true)
    } else {
        // show failure alert
    }
}

func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: Error?) {
    controller.dismiss(animated: true)
}
```

Make sure you add `import MessageUI` to any Swift file that uses this code, and you’ll also need to conform to the `MFMailComposeViewControllerDelegate` protocol.

Note that not all users have their device configure to send emails, which is why we need to check the result of `canSendMail()` before trying to send. Note also that you need to catch the `didFinishWith` callback in order to dismiss the mail window.

Warning: this code frequently fails in the iOS Simulator. If you want to test it, try on a real device.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-send-state-updates-manually-using-objectwillchange">How to send state updates manually using objectWillChange 
/example-code/system/how-to-send-notifications-asynchronously-using-notificationqueue">How to send notifications asynchronously using NotificationQueue 
/quick-start/swiftui/how-to-create-and-compose-custom-views">How to create and compose custom views 
/quick-start/swiftui/how-to-read-user-contacts-with-contactaccessbutton">How to read user contacts with ContactAccessButton 
/quick-start/swiftui/how-to-let-users-customize-toolbar-buttons">How to let users customize toolbar buttons</a>
-->

:::

---

<TagLinks />