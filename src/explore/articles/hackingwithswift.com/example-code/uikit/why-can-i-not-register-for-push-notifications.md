---
lang: ko-KR
title: "Why can I not register for push notifications?"
description: "Article(s) > Why can I not register for push notifications?"
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
      content: "Article(s) > Why can I not register for push notifications?"
    - property: og:description
      content: "Why can I not register for push notifications?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/why-can-i-not-register-for-push-notifications.html
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
  "title": "Why can I not register for push notifications? | UIKit - free Swift example code",
  "desc": "Why can I not register for push notifications?",
  "link": "https://hackingwithswift.com/example-code/uikit/why-can-i-not-register-for-push-notifications",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!--
When you register for push notifications, one of two methods ought to be called: `didRegisterForRemoteNotificationsWithDeviceToken` is called when everything worked correctly, and `didFailToRegisterForRemoteNotificationsWithError` is called if something went wrong.

First, ensure you're correctly registering for push notifications, like this:

```swift
UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
    if let error = error {
        print("D'oh: \(error.localizedDescription)")
    } else {
        application.registerForRemoteNotifications()
    }
}
```

You should call that every time your app starts, because the user token can change, and the user can also adjust your app's permissions at any time.

Once you're sure you have registered for notifications, add these two methods to your app delegate:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    print("Successfully registered for notifications!")
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    print("Failed to register for notifications: \(error.localizedDescription)")
}
```

Both of those just print out the status of your push request, which should give you an idea of what's going on. The most common reasons push notification request fail are: 1) you're using the iOS simulator, which does not support push notifications, and 2) your user has denied permission for push messages.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse">How to register a cell for UITableViewCell reuse 
/example-code/uikit/how-to-register-a-cell-for-uicollectionview-reuse">How to register a cell for UICollectionView reuse 
/quick-start/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped">How to push a new view when a list row is tapped 
/example-code/system/how-to-send-notifications-asynchronously-using-notificationqueue">How to send notifications asynchronously using NotificationQueue 
/quick-start/swiftui/how-to-push-a-new-view-onto-a-navigationstack">How to push a new view onto a NavigationStack</a>
-->

:::

---

<TagLinks />