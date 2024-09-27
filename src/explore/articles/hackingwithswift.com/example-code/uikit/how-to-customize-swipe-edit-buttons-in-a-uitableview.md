---
lang: ko-KR
title: "How to customize swipe edit buttons in a UITableView"
description: "Article(s) > How to customize swipe edit buttons in a UITableView"
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
      content: "Article(s) > How to customize swipe edit buttons in a UITableView"
    - property: og:description
      content: "How to customize swipe edit buttons in a UITableView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-customize-swipe-edit-buttons-in-a-uitableview.html
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
  "title": "How to customize swipe edit buttons in a UITableView | UIKit - free Swift example code",
  "desc": "How to customize swipe edit buttons in a UITableView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-customize-swipe-edit-buttons-in-a-uitableview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
As of iOS 8.0 there's an easy way to customize the list of buttons that appear when the user swipes from right to left: `editActionsForRowAt`. Return an array of `UITableViewRowAction` objects that have titles and styles (and also background colors if you want to customize their appearance), and iOS does the rest.

When you create a `UITableViewRowAction` object you give it a trailing closure describing what should happen when the user taps the button. You'll get reminded of what action triggered the code, and you'll also be given the index path of the row where the user was tapping. For example, you might do this:

```swift
func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
    let delete = UITableViewRowAction(style: .destructive, title: "Delete") { (action, indexPath) in
        // delete item at indexPath
    }

    let share = UITableViewRowAction(style: .normal, title: "Disable") { (action, indexPath) in
        // share item at indexPath
    }

    share.backgroundColor = UIColor.blue

    return [delete, share]
}
```

Note that the first button uses a `.destructive` style so it will be colored red by default, but the second button specifically has a blue color assigned to it.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-let-users-edit-your-navigation-title">How to let users edit your navigation title 
/quick-start/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row">How to add custom swipe action buttons to a List row 
/quick-start/swiftui/how-to-let-users-customize-toolbar-buttons">How to let users customize toolbar buttons 
/example-code/uikit/how-to-reload-a-uitableview-while-preserving-selections">How to reload a UITableView while preserving selections 
/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview">How to add peek and pop to a UITableView</a>
-->

:::

---

<TagLinks />