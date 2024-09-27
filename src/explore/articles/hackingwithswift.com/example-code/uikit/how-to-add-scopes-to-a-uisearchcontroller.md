---
lang: ko-KR
title: "How to add scopes to a UISearchController"
description: "Article(s) > How to add scopes to a UISearchController"
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
      content: "Article(s) > How to add scopes to a UISearchController"
    - property: og:description
      content: "How to add scopes to a UISearchController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller.html
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
  "title": "How to add scopes to a UISearchController | UIKit - free Swift example code",
  "desc": "How to add scopes to a UISearchController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
By default a `UISearchController` provides just a text input field, but with a few small changes you can make it add scopes buttons underneath to let the user control how their search happens.

First, make your view controller conform to `UISearchBarDelegate` as well as `UISearchResultsUpdating`.

You need to add two new lines where you create your search controller: one to add the scope button titles you want to use, and one to tell the search bar to report changes back to the view controller:

```swift
search.searchBar.scopeButtonTitles = ["Friends", "Everyone"]
search.searchBar.delegate = self
```

Finally, implement the `selectedScopeButtonIndexDidChange` method so you get notified when the user tapped a scope button:

```swift
func searchBar(_ searchBar: UISearchBar, selectedScopeButtonIndexDidChange selectedScope: Int) {
    print("New scope index is now \(selectedScope)")
}
```

You can read the selected index at any time by using the `searchController.searchBar.selectedScopeButtonIndex` property.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-use-uisearchcontroller-to-let-users-enter-search-words">How to use UISearchController to let users enter search words 
/example-code/uikit/how-to-stop-your-uisearchcontroller-bar-hiding-when-you-scroll">How to stop your UISearchController bar hiding when you scroll 
/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data">How to add a search bar to filter your data 
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar 
/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a>
-->

:::

---

<TagLinks />