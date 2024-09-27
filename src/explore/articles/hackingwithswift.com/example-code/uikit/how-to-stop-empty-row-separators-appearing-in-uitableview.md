---
lang: ko-KR
title: "How to stop empty row separators appearing in UITableView"
description: "Article(s) > How to stop empty row separators appearing in UITableView"
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
      content: "Article(s) > How to stop empty row separators appearing in UITableView"
    - property: og:description
      content: "How to stop empty row separators appearing in UITableView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview.html
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
  "title": "How to stop empty row separators appearing in UITableView | UIKit - free Swift example code",
  "desc": "How to stop empty row separators appearing in UITableView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
Table views show separators between empty rows by default, which looks quite strange when you have only a handful of visible rows. Fortunately, one simple line of code is all it takes to force iOS not to draw these separators, and it's this:

```swift
tableView.tableFooterView = UIView()
```

What's actually happening is that you're creating an empty `UIView` and making it act as the footer of the table – this is the bottom most thing visible in the table. When iOS reaches the bottom of the cells you provide, it draws this view at the end rather than drawing empty rows and their separators, so it totally clears up the problem.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-make-uitableviewcell-separators-go-edge-to-edge">How to make UITableViewCell separators go edge to edge 
/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset">How to make empty UITableViews look more attractive using DZNEmptyDataSet 
/example-code/uikit/how-to-reload-a-uitableview-while-preserving-selections">How to reload a UITableView while preserving selections 
/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview">How to add peek and pop to a UITableView 
/example-code/uikit/how-to-customize-swipe-edit-buttons-in-a-uitableview">How to customize swipe edit buttons in a UITableView</a>
-->

:::

---

<TagLinks />