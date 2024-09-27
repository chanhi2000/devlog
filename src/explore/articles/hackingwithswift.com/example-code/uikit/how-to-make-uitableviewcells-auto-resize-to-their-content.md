---
lang: ko-KR
title: "How to make UITableViewCells auto resize to their content"
description: "Article(s) > How to make UITableViewCells auto resize to their content"
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
      content: "Article(s) > How to make UITableViewCells auto resize to their content"
    - property: og:description
      content: "How to make UITableViewCells auto resize to their content"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content.html
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
  "title": "How to make UITableViewCells auto resize to their content | UIKit - free Swift example code",
  "desc": "How to make UITableViewCells auto resize to their content",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
Since iOS 11, table view cells automatically resize to fit their content as long as your cells use Auto Layout to configure themselves. For example, if you use the built-in Basic style for your cell prototype, all you need to do is change the Lines property to 0 for its label and the cell will grow as needed.

**Tip:** If you find your cells *aren’t* autosizing, go to the size inspector with your table view selected then check “Automatic” next to both Row Height and Estimate.

The situation is slightly more complicated when you want some cells to be autosized and others not. To make this work you should add two methods to your table view controller, `heightForRowAt` and `estimatedHeightForRowAt`, then make them both return the special value `UITableView.automaticDimension` for the cells you want to be sized automatically.

In case you're still not sure, here's some example code. This demonstrates a fairly common scenario where you want some important cells at the start to show all their content, but cells in subsequent sections to get clipped:

```swift
func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
    if indexPath.section == 0 {
        return UITableView.automaticDimension
    } else {
        return 40
    }
}

override func tableView(_ tableView: UITableView, estimatedHeightForRowAt indexPath: IndexPath) -> CGFloat {
    if indexPath.section == 0 {
        return UITableView.automaticDimension
    } else {
        return 40
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-use-dynamic-type-to-resize-your-apps-text">How to use Dynamic Type to resize your app's text 
/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics">How to resize a custom font using UIFontMetrics 
/example-code/uikit/how-to-swipe-to-delete-uitableviewcells">How to swipe to delete UITableViewCells 
/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray">How to give UITableViewCells a selected color other than gray 
/quick-start/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed">How to make buttons that repeat their action when pressed</a>
-->

:::

---

<TagLinks />