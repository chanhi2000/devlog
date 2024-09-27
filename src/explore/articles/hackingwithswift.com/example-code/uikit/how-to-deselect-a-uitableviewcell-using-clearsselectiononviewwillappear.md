---
lang: ko-KR
title: "How to deselect a UITableViewCell using clearsSelectionOnViewWillAppear"
description: "Article(s) > How to deselect a UITableViewCell using clearsSelectionOnViewWillAppear"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to deselect a UITableViewCell using clearsSelectionOnViewWillAppear"
    - property: og:description
      content: "How to deselect a UITableViewCell using clearsSelectionOnViewWillAppear"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-deselect-a-uitableviewcell-using-clearsselectiononviewwillappear.html
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
  "title": "How to deselect a UITableViewCell using clearsSelectionOnViewWillAppear | UIKit - free Swift example code",
  "desc": "How to deselect a UITableViewCell using clearsSelectionOnViewWillAppear",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-deselect-a-uitableviewcell-using-clearsselectiononviewwillappear",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
When a user taps a table view row, it automatically gets highlighted by iOS, and frequently we use that action to show another view controller with more detailed information. When the user goes back, though, you probably want their selection to go away so that it doesn't remain selected, and if you're using a `UITableViewController` that's easy to do with `clearsSelectionOnViewWillAppear`

If you set this property to be `true` the user's selected cell will automatically be deselected when they return to the table view. It does this intelligently, though: the row starts selected, and animates to be deselected, meaning that the user gets a brief reminder of the row they tapped before it gets deselected.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse">How to register a cell for UITableViewCell reuse 
/example-code/uikit/how-to-make-uitableviewcell-separators-go-edge-to-edge">How to make UITableViewCell separators go edge to edge 
/example-code/uikit/how-to-let-users-tap-on-a-uitableviewcell-while-editing-is-enabled">How to let users tap on a UITableViewCell while editing is enabled 
/example-code/uikit/how-to-add-a-button-to-a-uitableviewcell">How to add a button to a UITableViewCell 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a>
-->

:::

---

<TagLinks />