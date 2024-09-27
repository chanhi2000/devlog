---
lang: ko-KR
title: "How to reload a UITableView while preserving selections"
description: "Article(s) > How to reload a UITableView while preserving selections"
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
      content: "Article(s) > How to reload a UITableView while preserving selections"
    - property: og:description
      content: "How to reload a UITableView while preserving selections"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-reload-a-uitableview-while-preserving-selections.html
date: 2019-10-10
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
  "title": "How to reload a UITableView while preserving selections | UIKit - free Swift example code",
  "desc": "How to reload a UITableView while preserving selections",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-reload-a-uitableview-while-preserving-selections",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
When you call `reloadData()` on a `UITableView` it will refresh all cells from your data source, but it will also lose any selections the user has made.

If you want to reload your table view while also saving and restoring any selections, you should take a copy of the `indexPathsForSelectedRows` property before the reload, then re-apply those selections after calling `reloadData()`.

This can be put into a simple `UITableView` extension for easier use:

```swift
extension UITableView {
    /// Reloads a table view without losing track of what was selected.
    func reloadDataSavingSelections() {
        let selectedRows = indexPathsForSelectedRows

        reloadData()

        if let selectedRow = selectedRows {
            for indexPath in selectedRow {
                selectRow(at: indexPath, animated: false, scrollPosition: .none)
            }
        }
    }
}
```

With that in place, you can now call `yourTableView.reloadDataSavingSelections()` to try it out.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview">How to add peek and pop to a UITableView 
/example-code/uikit/how-to-customize-swipe-edit-buttons-in-a-uitableview">How to customize swipe edit buttons in a UITableView 
/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview">How to stop empty row separators appearing in UITableView 
/example-code/uikit/how-to-remove-cells-from-a-uitableview">How to remove cells from a UITableView 
/example-code/uikit/how-to-let-users-tap-on-a-uitableviewcell-while-editing-is-enabled">How to let users tap on a UITableViewCell while editing is enabled</a>
-->

:::

---

<TagLinks />