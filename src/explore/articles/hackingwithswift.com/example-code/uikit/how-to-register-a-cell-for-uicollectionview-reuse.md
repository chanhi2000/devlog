---
lang: ko-KR
title: "How to register a cell for UICollectionView reuse"
description: "Article(s) > How to register a cell for UICollectionView reuse"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to register a cell for UICollectionView reuse"
    - property: og:description
      content: "How to register a cell for UICollectionView reuse"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-register-a-cell-for-uicollectionview-reuse.html
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
  "title": "How to register a cell for UICollectionView reuse | UIKit - free Swift example code",
  "desc": "How to register a cell for UICollectionView reuse",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-register-a-cell-for-uicollectionview-reuse",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
If you're working entirely in code, you can register a `UICollectionViewCell` subclass for use with your collection view, so that new cells are dequeued and re-use automatically by the system.

Here's the most basic form of this technique:

```swift
collectionView.register(UICollectionViewCell.self, forCellWithReuseIdentifier: "Cell")
```

That registers a basic collection view cell, which you can then customize in code if you want to. You can then dequeue a cell with this:

```swift
func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "Cell", for: indexPath)
    return cell
}
```

If a cell doesn't already exist that can be re-used, a new one will be created automatically.

As you might imagine, you will most of the time want to create your own custom `UICollectionViewCell` subclass and use that instead, but the code is the same – just use your class name instead.

If you're working with Interface Builder, all this work is done for you by creating prototype cells.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse">How to register a cell for UITableViewCell reuse 
/example-code/uikit/why-can-i-not-register-for-push-notifications">Why can I not register for push notifications? 
/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier" 
/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource" 
/example-code/uikit/how-to-make-uicollectionview-headers-stay-fixed-using-sectionheaderspintovisiblebounds">How to make UICollectionView headers stay fixed using sectionHeadersPinToVisibleBounds</a>
-->

:::

---

<TagLinks />