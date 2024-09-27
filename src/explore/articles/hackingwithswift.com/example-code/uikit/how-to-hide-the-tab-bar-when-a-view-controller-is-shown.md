---
lang: ko-KR
title: "How to hide the tab bar when a view controller is shown"
description: "Article(s) > How to hide the tab bar when a view controller is shown"
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
      content: "Article(s) > How to hide the tab bar when a view controller is shown"
    - property: og:description
      content: "How to hide the tab bar when a view controller is shown"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-hide-the-tab-bar-when-a-view-controller-is-shown.html
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
  "title": "How to hide the tab bar when a view controller is shown | UIKit - free Swift example code",
  "desc": "How to hide the tab bar when a view controller is shown",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-hide-the-tab-bar-when-a-view-controller-is-shown",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
If you’re using `UITabBarController` to display a tab strip at the bottom of your user interface, the default behavior for iOS is to display the tabs at all times – even if the user has navigated deep into a `UINavigationController` in one of the tabs.

If you don’t want that behavior, you should set `hidesBottomBarWhenPushed` to true where applicable. This will hide the tab bar along with any toolbars you had showing, but only when a view controller is pushed onto the navigation stack. This allows you to show the tab bar at first, then hide it when you need more room.

If you’re using segues, the best place to set this property is inside the `prepare(for:)` method, where you configure any other properties in your destination view controller:

```swift
override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
    self.hidesBottomBarWhenPushed = true
}
```

If you aren’t using segues, you will usually need to override the initializer for your view controller and set `hidesBottomBarWhenPushed` to true there, like this:

```swift
override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
    super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
    hidesBottomBarWhenPushed = true
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars">How to hide the tab bar, navigation bar, or other toolbars 
/example-code/uikit/how-do-you-show-a-modal-view-controller-when-a-uitabbarcontroller-tab-is-tapped">How do you show a modal view controller when a UITabBarController tab is tapped? 
/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview">How to embed views in a tab bar using TabView 
/quick-start/swiftui/how-to-run-an-asynchronous-task-when-a-view-is-shown">How to run an asynchronous task when a view is shown 
/quick-start/swiftui/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts">How to control which NavigationSplitView column is shown in compact layouts</a>
-->

:::

---

<TagLinks />