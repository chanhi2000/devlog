---
lang: ko-KR
title: "How to make UICollectionView headers stay fixed using sectionHeadersPinToVisibleBounds"
description: "Article(s) > How to make UICollectionView headers stay fixed using sectionHeadersPinToVisibleBounds"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make UICollectionView headers stay fixed using sectionHeadersPinToVisibleBounds"
    - property: og:description
      content: "How to make UICollectionView headers stay fixed using sectionHeadersPinToVisibleBounds"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-uicollectionview-headers-stay-fixed-using-sectionheaderspintovisiblebounds.html
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
  "title": "How to make UICollectionView headers stay fixed using sectionHeadersPinToVisibleBounds | UIKit - free Swift example code",
  "desc": "How to make UICollectionView headers stay fixed using sectionHeadersPinToVisibleBounds",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-uicollectionview-headers-stay-fixed-using-sectionheaderspintovisiblebounds",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
Since the earliest days of iOS, `UITableView` has had fixed headers: as you scrolled within a table section the header stayed still, only moving off when another section reached the top.

This same functionality was added for `UICollectionView` in iOS 9.0, although it’s not enabled by default and only available with `UICollectionViewFlowLayout`.

To use it yourself, first make sure your collection view’s `collectionViewLayout` property is an instance of `UICollectionViewFlowLayout`, then set that flow layout’s `sectionHeadersPinToVisibleBounds` property to true. For example, you might write this:

```swift
if let layout = collectionView.collectionViewLayout as? UICollectionViewFlowLayout {
    layout.sectionHeadersPinToVisibleBounds = true
}
```

There’s a similar property to make footers behave the same way: `sectionFootersPinToVisibleBounds`.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-make-a-fixed-size-spacer">How to make a fixed size Spacer 
/quick-start/swiftui/how-to-position-views-in-a-fixed-grid">How to position views in a fixed grid 
/example-code/uikit/how-to-register-a-cell-for-uicollectionview-reuse">How to register a cell for UICollectionView reuse 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a>
-->

:::

---

<TagLinks />