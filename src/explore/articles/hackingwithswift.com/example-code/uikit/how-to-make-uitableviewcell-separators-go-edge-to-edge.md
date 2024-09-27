---
lang: ko-KR
title: "How to make UITableViewCell separators go edge to edge"
description: "Article(s) > How to make UITableViewCell separators go edge to edge"
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
      content: "Article(s) > How to make UITableViewCell separators go edge to edge"
    - property: og:description
      content: "How to make UITableViewCell separators go edge to edge"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-uitableviewcell-separators-go-edge-to-edge.html
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
  "title": "How to make UITableViewCell separators go edge to edge | UIKit - free Swift example code",
  "desc": "How to make UITableViewCell separators go edge to edge",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-uitableviewcell-separators-go-edge-to-edge",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
All table view cells have a separator underneath them by default, and that separator likes to start a little way from the left edge of the screen for stylistic reasons. If this clashes with your own personal aesthetic, you might *think* it's easy to remove but Apple has made the matter quite confused by changing its mind more than once.

If you absolutely, definitely want to remove the separator inset from all cells, you need to do two things. First, add these two lines of code to your table view controller's `viewDidLoad()` method:

```swift
tableView.layoutMargins = UIEdgeInsets.zero
tableView.separatorInset = UIEdgeInsets.zero
```

Now look for you `cellForRowAt` method and add this:

```swift
cell.layoutMargins = UIEdgeInsets.zero
```

Done!

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview">How to stop empty row separators appearing in UITableView 
/example-code/uikit/how-to-detect-edge-swipes">How to detect edge swipes 
/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse">How to register a cell for UITableViewCell reuse 
/example-code/uikit/how-to-deselect-a-uitableviewcell-using-clearsselectiononviewwillappear">How to deselect a UITableViewCell using clearsSelectionOnViewWillAppear 
/example-code/uikit/how-to-let-users-tap-on-a-uitableviewcell-while-editing-is-enabled">How to let users tap on a UITableViewCell while editing is enabled</a>
-->

:::

---

<TagLinks />