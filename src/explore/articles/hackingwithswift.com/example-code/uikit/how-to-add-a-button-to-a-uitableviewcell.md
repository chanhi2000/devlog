---
lang: ko-KR
title: "How to add a button to a UITableViewCell"
description: "Article(s) > How to add a button to a UITableViewCell"
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
      content: "Article(s) > How to add a button to a UITableViewCell"
    - property: og:description
      content: "How to add a button to a UITableViewCell"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-button-to-a-uitableviewcell.html
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
  "title": "How to add a button to a UITableViewCell | UIKit - free Swift example code",
  "desc": "How to add a button to a UITableViewCell",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-button-to-a-uitableviewcell",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
There are two steps to add a working button to a table view cell. The first step is to add a button like this:

```swift
cell.accessoryType = .detailDisclosureButton
```

The second step is to take action when the button is tapped by creating the `accessoryButtonTappedForRowWith` method:

```swift
override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
    doSomethingWithItem(indexPath.row)
}
```

That's it!

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse">How to register a cell for UITableViewCell reuse 
/example-code/uikit/how-to-make-uitableviewcell-separators-go-edge-to-edge">How to make UITableViewCell separators go edge to edge 
/example-code/uikit/how-to-deselect-a-uitableviewcell-using-clearsselectiononviewwillappear">How to deselect a UITableViewCell using clearsSelectionOnViewWillAppear 
/example-code/uikit/how-to-let-users-tap-on-a-uitableviewcell-while-editing-is-enabled">How to let users tap on a UITableViewCell while editing is enabled 
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar</a>
-->

:::

---

<TagLinks />