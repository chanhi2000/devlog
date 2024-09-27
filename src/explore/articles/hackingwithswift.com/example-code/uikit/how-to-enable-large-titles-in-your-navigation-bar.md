---
lang: ko-KR
title: "How to enable large titles in your navigation bar"
description: "Article(s) > How to enable large titles in your navigation bar"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to enable large titles in your navigation bar"
    - property: og:description
      content: "How to enable large titles in your navigation bar"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-enable-large-titles-in-your-navigation-bar.html
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
  "title": "How to enable large titles in your navigation bar | UIKit - free Swift example code",
  "desc": "How to enable large titles in your navigation bar",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-enable-large-titles-in-your-navigation-bar",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
iOS 11 introduced a new design for navigation bar titles, allowing developers to enable large titles for view controllers that needed to be particularly prominent.

By default these large titles are disabled, but you can enable them with one line of code in your navigation controller’s top view controller:

```swift
navigationController?.navigationBar.prefersLargeTitles = true
```

That will enable large titles for all view controllers that subsequently get pushed, but you can be more selective by adjusting the `navigationItem.largeTitleDisplayMode` property of your view controllers.

For example, if you wanted subsequent view controllers to never use large titles, you would put this into their `viewDidLoad()` method:

```swift
navigationItem.largeTitleDisplayMode = .never
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/how-to-enable-pull-to-refresh">How to enable pull to refresh 
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar 
/quick-start/swiftui/how-to-enable-editing-on-a-list-using-editbutton">How to enable editing on a list using EditButton 
/quick-start/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars">How to hide the tab bar, navigation bar, or other toolbars</a>
-->

:::

---

<TagLinks />