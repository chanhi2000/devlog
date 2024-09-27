---
lang: ko-KR
title: "How to swipe to delete UITableViewCells"
description: "Article(s) > How to swipe to delete UITableViewCells"
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
      content: "Article(s) > How to swipe to delete UITableViewCells"
    - property: og:description
      content: "How to swipe to delete UITableViewCells"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-swipe-to-delete-uitableviewcells.html
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
  "title": "How to swipe to delete UITableViewCells | UIKit - free Swift example code",
  "desc": "How to swipe to delete UITableViewCells",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-swipe-to-delete-uitableviewcells",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
It takes just one method to enable swipe to delete in table views: `tableView(_:commit:forRowAt:)`. This method gets called when a user tries to delete one of your table rows using swipe to delete, but its very presence is what enables swipe to delete in the first place – that is, iOS literally checks to see whether the method exists, and, if it does, enables swipe to delete.

When you want to handle deleting, you have to do three things: first, check that it's a delete that's happening and not an insert (this is down to how you use the UI); second, delete the item from the data source you used to build the table; and third, call `deleteRows(at:)` on your table view.

**It is crucial that you do those things in exactly that order.** iOS checks the number of rows before and after a delete operation, and expects them to add up correctly following the change.

Here's an example that does everything correctly:

```swift
override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
    if editingStyle == .delete {
        objects.remove(at: indexPath.row)
        tableView.deleteRows(at: [indexPath], with: .fade)
    } else if editingStyle == .insert {
        // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view.
    }
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/adding-swipe-to-delete-and-editbutton">Adding swipe to delete and EditButton 
/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content">How to make UITableViewCells auto resize to their content 
/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray">How to give UITableViewCells a selected color other than gray 
/quick-start/swiftui/how-to-let-users-delete-rows-from-a-list">How to let users delete rows from a list 
/quick-start/swiftui/how-to-delete-core-data-objects-from-swiftui-views">How to delete Core Data objects from SwiftUI views</a>
-->

:::

---

<TagLinks />