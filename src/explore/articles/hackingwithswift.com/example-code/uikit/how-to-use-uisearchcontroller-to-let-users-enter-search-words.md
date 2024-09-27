---
lang: ko-KR
title: "How to use UISearchController to let users enter search words"
description: "Article(s) > How to use UISearchController to let users enter search words"
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
      content: "Article(s) > How to use UISearchController to let users enter search words"
    - property: og:description
      content: "How to use UISearchController to let users enter search words"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-uisearchcontroller-to-let-users-enter-search-words.html
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
  "title": "How to use UISearchController to let users enter search words | UIKit - free Swift example code",
  "desc": "How to use UISearchController to let users enter search words",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-uisearchcontroller-to-let-users-enter-search-words",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
`UISearchController` is a small component designed to make it easy and consistent to add searching to any view controller. Adding it only takes a few small steps: 

1. Embed your view controller in a navigation controller.
2. Add a conformance to `UISearchResultsUpdating`.
3. Create the search controller and assign it to your view controller.
4. Implement its sole required method: `updateSearchResults()`.

Let’s go through them here. First, open Main.storyboard, select your view controller, then embed it in a navigation controller – go to the Editor menu and choose Embed In > Navigation Controller.

Second, modify your view controller’s definition so that it includes a conformance for `UISearchResultsUpdating`.

Third, add some code to `viewDidLoad()` to create the search controller and assign it to the current view controller. The search controller actually belongs as a property of the navigation item of the view controller, which automatically places it inside your navigation bar when the view controller is displayed.

```swift
let search = UISearchController(searchResultsController: nil)
search.searchResultsUpdater = self
search.obscuresBackgroundDuringPresentation = false
search.searchBar.placeholder = "Type something here to search"
navigationItem.searchController = search
```

Finally, implement the `updateSearchResults()` method to update your search results. This method gets called every time the user types anything into the search bar, so it’s your job to use their new text to filter your data however you want:

```swift
func updateSearchResults(for searchController: UISearchController) {
    guard let text = searchController.searchBar.text else { return }
    print(text)
}
```

That’s it!

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-search-tokens-to-a-search-field">How to add search tokens to a search field 
/example-code/naturallanguage/how-to-find-similar-words-for-a-search-term">How to find similar words for a search term 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let 
/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller">How to add scopes to a UISearchController 
/example-code/uikit/how-to-stop-your-uisearchcontroller-bar-hiding-when-you-scroll">How to stop your UISearchController bar hiding when you scroll</a>
-->

:::

---

<TagLinks />