---
lang: ko-KR
title: "How to set local alerts using UNNotificationCenter"
description: "Article(s) > How to set local alerts using UNNotificationCenter"
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
      content: "Article(s) > How to set local alerts using UNNotificationCenter"
    - property: og:description
      content: "How to set local alerts using UNNotificationCenter"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-set-local-alerts-using-unnotificationcenter.html
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
  "title": "How to set local alerts using UNNotificationCenter | System - free Swift example code",
  "desc": "How to set local alerts using UNNotificationCenter",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-set-local-alerts-using-unnotificationcenter",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Local notifications are messages that appear on the user's lock screen when your app isn't running. The user can then swipe to unlock their device and go straight to your app, at which point you can act on the notification.

All this is done using the User Notifications framework, so import that now:

```swift
import UserNotifications
```

To begin with, you need to ask for permission in order to show messages on the lock screen. Here's how that's done:

```swift
let center = UNUserNotificationCenter.current()

center.requestAuthorization(options: [.alert, .badge, .sound]) { (granted, error) in
    if granted {
        print("Yay!")
    } else {
        print("D'oh")
    }
}
```

That will show an alert to the user asking them if they want to let you show notifications. When it comes to scheduling a notification, you need to choose a trigger (when to show) and content (what to show), then combine them together into a single request. 

Here's the code required to show a local notification:

```swift
func scheduleNotification() {
    let center = UNUserNotificationCenter.current()

    let content = UNMutableNotificationContent()
    content.title = "Late wake up call"
    content.body = "The early bird catches the worm, but the second mouse gets the cheese."
    content.categoryIdentifier = "alarm"
    content.userInfo = ["customData": "fizzbuzz"]
    content.sound = UNNotificationSound.default

    var dateComponents = DateComponents()
    dateComponents.hour = 10
    dateComponents.minute = 30
    let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 5, repeats: false)

    let request = UNNotificationRequest(identifier: UUID().uuidString, content: content, trigger: trigger)
    center.add(request)
}
```

The `trigger` constant is being created using a time interval, which means this notification will appear five seconds after you schedule it. 

If you want a specific time, use `UNCalendarNotificationTrigger` instead, like this:

```swift
var dateComponents = DateComponents()
dateComponents.hour = 10
dateComponents.minute = 30
let trigger = UNCalendarNotificationTrigger(dateMatching: dateComponents, repeats: true)
```

That will show an alert at 10:30am every day, because its `repeats` property is set to true.

The notification request code above also set a `userInfo` property on the notification, which is a dictionary where you can store any kind of context data you want. This dictionary gets given back to you when the user unlocks their device using your notification, so you can act on the alert in a meaningful way.

If you want to attach custom buttons to your notification, you need to use the `UNNotificationAction` class, then register various actions against a category string. We used the category identifier string of “alarm” above, so we could attach a button to that category like this:

```swift
func registerCategories() {
    let center = UNUserNotificationCenter.current()
    center.delegate = self

    let show = UNNotificationAction(identifier: "show", title: "Tell me more…", options: .foreground)
    let category = UNNotificationCategory(identifier: "alarm", actions: [show], intentIdentifiers: [])

    center.setNotificationCategories([category])
}
```

Note that that code sets `self` to be the delegate for the notification center, so you’ll need to make your view controller conform to the `UNUserNotificationCenterDelegate` protocol.

When a message comes in, your delegate will get notified and you can take the appropriate action. We gave the “Tell me more…” button the identifier “show”, so that’s what will be passed to us if the user taps that button. Alternatively, we’ll be sent `UNNotificationDefaultActionIdentifier` to mean “the user swiped to unlock using our notification.” 

Here’s some code handling both options:

```swift
func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
    // pull out the buried userInfo dictionary
    let userInfo = response.notification.request.content.userInfo

    if let customData = userInfo["customData"] as? String {
        print("Custom data received: \(customData)")

        switch response.actionIdentifier {
        case UNNotificationDefaultActionIdentifier:
            // the user swiped to unlock
            print("Default identifier")

        case "show":
            // the user tapped our "show more info…" button
            print("Show more information…")
            break

        default:
            break
        }
    }

    // you must call the completion handler when you're done
    completionHandler()
}
```

That code also pulls out the `CustomField1` value that was set in the `userInfo` earlier.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view">How to show multiple alerts in a single view 
/quick-start/concurrency/how-to-create-and-use-task-local-values">How to create and use task local values 
/example-code/language/how-to-use-local-variable-observers">How to use local variable observers 
/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet 
/example-code/language/when-to-use-a-set-rather-than-an-array">When to use a set rather than an array</a>
-->

:::

---

<TagLinks />