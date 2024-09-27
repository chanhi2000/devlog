---
lang: ko-KR
title: "How to send notifications asynchronously using NotificationQueue"
description: "Article(s) > How to send notifications asynchronously using NotificationQueue"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to send notifications asynchronously using NotificationQueue"
    - property: og:description
      content: "How to send notifications asynchronously using NotificationQueue"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-send-notifications-asynchronously-using-notificationqueue.html
date: 2018-03-28
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
  "title": "How to send notifications asynchronously using NotificationQueue | System - free Swift example code",
  "desc": "How to send notifications asynchronously using NotificationQueue",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-send-notifications-asynchronously-using-notificationqueue",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
Any notifications posted using NotificationCenter are delivered *synchronously*, which means all observers get notified simultaneously and execute all their code before control gets passed back to the the poster of the notification.

While that’s often what you want, sometimes it can be problematic because processing repeated notifications during busy periods can slow your app down. Fortunately, Apple gives us an alternative in the shape of `NotificationQueue`: an asynchronous system that queues up notifications at different urgencies, and can even coalesce similar messages to avoid repetition.

You can try it out using this code:

```swift
let notification = Notification(name: Notification.Name("MyValueChanged"))
NotificationQueue.default.enqueue(notification, postingStyle: .whenIdle, coalesceMask: .none, forModes: nil)
```

That will enqueue the “MyValueChanged” notification to be delivered when your app is idle, and without coalescing. You can also use `.asap` for your posting style to deliver in the next run loop, and `.now`, which will cause the notification to be delivered synchronously.

The reason the `.now` posting style is important is because of the ability of `NotificationQueue` to *coalesce* notifications – i.e., join them together. If you specify `.onName` for the `coalesceMask` property it will automatically merge any notifications of the same name, which stops observers being overloaded by repeated notifications.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-asynchronously-using-gcd-async">How to run code asynchronously using GCD async() 
/quick-start/swiftui/how-to-send-state-updates-manually-using-objectwillchange">How to send state updates manually using objectWillChange 
/example-code/uikit/how-to-send-an-email">How to send an email 
/example-code/uikit/why-can-i-not-register-for-push-notifications">Why can I not register for push notifications? 
/example-code/system/how-to-group-user-notifications-using-threadidentifier-and-summaryargument">How to group user notifications using threadIdentifier and summaryArgument</a>
-->

:::

---

<TagLinks />