---
lang: ko-KR
title: "What is a segue?"
description: "Article(s) > What is a segue?"
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
      content: "Article(s) > What is a segue?"
    - property: og:description
      content: "What is a segue?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/what-is-a-segue.html
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
  "title": "What is a segue? | UIKit - free Swift example code",
  "desc": "What is a segue?",
  "link": "https://hackingwithswift.com/example-code/uikit/what-is-a-segue",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
Segues are visual connectors between view controllers in your storyboards, shown as lines between the two controllers. They allow you to present one view controller from another, optionally using adaptive presentation so iPads behave one way while iPhones behave another.

When a segue is triggered – perhaps through a button press or a table view selection – the `prepare(for:)` method will be called on your view controller, at which point you can configure your destination view controller by setting some properties.

For example, you might write something like this in response to a table view selection:

```swift
override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
    guard let selectedPath = tableView.indexPathForSelectedRow else { return }
    if let target = segue.destination as? UserViewController {
        target.selectedUser = selectedPath.row
    }
}
```

That finds the row that was tapped, typecasts the destination to be a `UserViewController`, then tells it which row was selected.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-perform-a-segue-programmatically-using-performsegue">How to perform a segue programmatically using performSegue() 
/example-code/system/how-to-pass-data-between-two-view-controllers">How to pass data between two view controllers 
/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview">How to add peek and pop to a UITableView 
/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access">How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access” 
/example-code/xcode/how-to-use-storyboard-references-to-simplify-your-storyboards">How to use storyboard references to simplify your storyboards</a>
-->

:::

---

<TagLinks />