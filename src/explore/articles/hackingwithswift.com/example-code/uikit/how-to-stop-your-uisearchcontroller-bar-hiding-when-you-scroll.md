---
lang: ko-KR
title: "How to stop your UISearchController bar hiding when you scroll"
description: "Article(s) > How to stop your UISearchController bar hiding when you scroll"
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
      content: "Article(s) > How to stop your UISearchController bar hiding when you scroll"
    - property: og:description
      content: "How to stop your UISearchController bar hiding when you scroll"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-stop-your-uisearchcontroller-bar-hiding-when-you-scroll.html
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
  "title": "How to stop your UISearchController bar hiding when you scroll | UIKit - free Swift example code",
  "desc": "How to stop your UISearchController bar hiding when you scroll",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-stop-your-uisearchcontroller-bar-hiding-when-you-scroll",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!--
You can embed a search controller right into any view controller that’s inside a `UINavigationController` using code like this:

```swift
navigationItem.searchController = yourSearchController
```

However, when your view controller happens to be a scrolling one – most commonly a table view or a collection view – the search bar will automatically hide itself along with your content. 

If this isn’t what you want - if you want the search bar to be visible regardless of the user’s scroll position - then you need to set your navigation item’s `hidesSearchBarWhenScrolling` property to false, like this:

```swift
navigationItem.hidesSearchBarWhenScrolling = false
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />