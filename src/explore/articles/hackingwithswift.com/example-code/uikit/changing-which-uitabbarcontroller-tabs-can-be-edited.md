---
lang: ko-KR
title: "Changing which UITabBarController tabs can be edited"
description: "Article(s) > Changing which UITabBarController tabs can be edited"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Changing which UITabBarController tabs can be edited"
    - property: og:description
      content: "Changing which UITabBarController tabs can be edited"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/changing-which-uitabbarcontroller-tabs-can-be-edited.html
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
  "title": "Changing which UITabBarController tabs can be edited | UIKit - free Swift example code",
  "desc": "Changing which UITabBarController tabs can be edited",
  "link": "https://hackingwithswift.com/example-code/uikit/changing-which-uitabbarcontroller-tabs-can-be-edited",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
If you have a More tab in your tab bar controller, this will automatically get an Edit button so that users can drag tabs around to customize the user interface. This doesn't actually save the tab ordering for you, which means the tabs will revert on next run unless you persist the user's choices yourself, but it does do everything else for you.

By default, users can move any and all tabs, but if you want to force some tabs to be in place you should set the `customizableViewControllers` property of your tab bar controller. This should be an array of the view controllers you want to give your users access to edit, or an empty array if you want the Edit button to go away entirely.

If your tab bar controller is your window's root view controller (for example, if you started with the Xcode tab bar template project), you can allow users to customize the first three view controllers like this:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    if let tabBarController = window?.rootViewController as? UITabBarController {
        let slice = tabBarController.viewControllers![0...2]
        let array = Array(slice)

        tabBarController.customizableViewControllers = array
    }

    return true
}
```

Place that into your <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift` file in place of the existing `didFinishLaunchingWithOptions` method, and you're done.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-set-the-tabs-in-a-uitabbarcontroller">How to set the tabs in a UITabBarController 
/example-code/uikit/how-do-you-show-a-modal-view-controller-when-a-uitabbarcontroller-tab-is-tapped">How do you show a modal view controller when a UITabBarController tab is tapped? 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/system/how-to-detect-which-country-a-user-is-in">How to detect which country a user is in 
/quick-start/concurrency/what-is-an-actor-and-why-does-swift-have-them">What is an actor and why does Swift have them?</a>
-->

:::

---

<TagLinks />