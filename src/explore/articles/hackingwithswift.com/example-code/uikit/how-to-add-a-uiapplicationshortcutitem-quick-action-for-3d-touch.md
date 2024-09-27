---
lang: ko-KR
title: "How to add a UIApplicationShortcutItem quick action for 3D Touch"
description: "Article(s) > How to add a UIApplicationShortcutItem quick action for 3D Touch"
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
      content: "Article(s) > How to add a UIApplicationShortcutItem quick action for 3D Touch"
    - property: og:description
      content: "How to add a UIApplicationShortcutItem quick action for 3D Touch"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch.html
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
  "title": "How to add a UIApplicationShortcutItem quick action for 3D Touch | UIKit - free Swift example code",
  "desc": "How to add a UIApplicationShortcutItem quick action for 3D Touch",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
There are two ways to add a shortcut item for 3D Touch: you can register a list of static items that always get shown, or you can create a dynamic list in code based on user information.

Let's start by tackling static lists. Open your Info.plist file, and add a new key called `UIApplicationShortcutItems`, then set it to be an Array. Add one new item in there, which will get the name "Item 0", and set its data type to be Dictionary. Finally, add these three keys to that dictionary, all using the String data type:

- Key name: `UIApplicationShortcutItemIconType`, value: `UIApplicationShortcutIconTypeAdd`.
<li>Key name: `UIApplicationShortcutItemTitle`, value: `Add User`.
<li>Key name: `UIApplicationShortcutItemType`, value: `com.yoursite.yourapp.adduser`.

You need all three of those keys, but you will want to change the values to whatever fits your needs.

The first one should be one of the built-in icon types, such as `UIApplicationShortcutIconTypeCompose`, `UIApplicationShortcutIconTypePlay`, `UIApplicationShortcutIconTypeSearch`, `UIApplicationShortcutIconTypeLove`, `UIApplicationShortcutIconTypeShare`, or `UIApplicationShortcutIconTypeAlarm`.

The second key should be the text string to show next to the shortcut icon. I've used "Add User" above, but you might want "Start Game", "Favorites", "New Message", and so on.

The third key should be a unique identifier, which is usually specified as your app's bundle ID followed by a new string. This is what identifies the command relative to other shortcuts you might add.

The shortcut item type is used when your app is launched using a shortcut menu item. The `launchOptions` dictionary of `didFinishLaunchingWithOptions` will have a key set called `UIApplication.LaunchOptionsKey.shortcutItem`, which you can check to see what shortcut was triggered.

The code below – placed into your app delegate – will catch the shortcut we just created, although you should change the type string to match whatever you're using:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    if let shortcutItem = launchOptions?[UIApplication.LaunchOptionsKey.shortcutItem] as? UIApplicationShortcutItem {
        if shortcutItem.type == "com.yoursite.yourapp.adduser" {
            // shortcut was triggered!
        }
    }

    return true
}
```

If you want to create *dynamic* quick actions – which can live alongside static actions if you want - you need to create instances of `UIApplicationShortcutIcon` and `UIApplicationShortcutItem`, then assign to your application's `shortcutItems` property like this:

```swift
let icon = UIApplicationShortcutIcon(type: .add)
let item = UIApplicationShortcutItem(type: "com.yoursite.yourapp.adduser", localizedTitle: "Add User", localizedSubtitle: "Meet someone new", icon: icon, userInfo: nil)
UIApplication.shared.shortcutItems = [item]
```

If your shortcut item should provide some sort of identifying information – perhaps it's the name of the most recently used contact – then you should place that into the `userInfo` dictionary. This will then be provided back to you when the application gets launched, and you can respond appropriately.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch 
/quick-start/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row">How to add custom swipe action buttons to a List row 
/example-code/system/how-to-use-touch-id-to-authenticate-users-by-fingerprint">How to use Touch ID to authenticate users by fingerprint 
/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:) 
/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:)</a>
-->

:::

---

<TagLinks />