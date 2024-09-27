---
lang: ko-KR
title: "How do you show a modal view controller when a UITabBarController tab is tapped?"
description: "Article(s) > How do you show a modal view controller when a UITabBarController tab is tapped?"
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
      content: "Article(s) > How do you show a modal view controller when a UITabBarController tab is tapped?"
    - property: og:description
      content: "How do you show a modal view controller when a UITabBarController tab is tapped?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-do-you-show-a-modal-view-controller-when-a-uitabbarcontroller-tab-is-tapped.html
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
  "title": "How do you show a modal view controller when a UITabBarController tab is tapped? | UIKit - free Swift example code",
  "desc": "How do you show a modal view controller when a UITabBarController tab is tapped?",
  "link": "https://hackingwithswift.com/example-code/uikit/how-do-you-show-a-modal-view-controller-when-a-uitabbarcontroller-tab-is-tapped",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
Usually tapping a tab in a `UITabBar` shows that tab, but it's often the case that you want to override that behavior, for example to show a view modally. If you're using one of Xcode's built-in storyboard templates for creating your user interface, it's not immediately obvious how to do this, but fortunately it's not so hard using the approach below.

First, find the `viewDidLoad()` method for your initial view controller – whichever one is shown first in your app. Now add this code to it:

```swift
self.tabBarController?.delegate = UIApplication.shared.delegate as? UITabBarControllerDelegate
```

That sets up your application delegate (in <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift`) to handle events from the tab bar controller. This line uses optionals safely, so it will do nothing if you change your app structure later.

Now open <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift`, and add `UITabBarControllerDelegate` to the list of protocols your app delegate conforms to, like this:

```swift
class AppDelegate: UIResponder, UIApplicationDelegate, UITabBarControllerDelegate {
```

Finally, you should implement the `shouldSelect` method on your app delegate, which must return true or false depending on whether you want the regular tab behavior (return true) or your own (return false).

In the example below, I want the regular view controller behavior for all tabs unless the user is trying to show one with the class `YourViewController`. When that happens, I'll create a new view controller and show it modally instead:

```swift
func tabBarController(_ tabBarController: UITabBarController, shouldSelect viewController: UIViewController) -> Bool {
    if viewController is YourViewController {
        if let newVC = tabBarController.storyboard?.instantiateViewController(withIdentifier: "YourVCStoryboardIdentifier") {
            tabBarController.present(newVC, animated: true)
            return false
        }
    }

    return true
}
```

There are two things to note about that code. First, you'll need to give your view controller a storyboard identifier so that `instantiateViewController(withIdentifier:)` will work. Second, this won't have any extra performance impact on your code – the view that would have been shown wasn't created yet, so creating a new one here won't be duplicating any work.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview">How to embed views in a tab bar using TabView 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />