---
lang: ko-KR
title: "How to give UITableViewCells a selected color other than gray"
description: "Article(s) > How to give UITableViewCells a selected color other than gray"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to give UITableViewCells a selected color other than gray"
    - property: og:description
      content: "How to give UITableViewCells a selected color other than gray"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray.html
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
  "title": "How to give UITableViewCells a selected color other than gray | UIKit - free Swift example code",
  "desc": "How to give UITableViewCells a selected color other than gray",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
Ever since iOS 7.0, table view cells have been gray when tapped, even when you specifically told Interface Builder you wanted them to be blue. Don't worry, though: it's an easy thing to change, as long as you don't mind writing three lines of code. Specifically, you need to add something like this to your `cellForRowAt` method:

```swift
let backgroundView = UIView()
backgroundView.backgroundColor = UIColor.red
cell.selectedBackgroundView = backgroundView
```

You can customize the view as much as you want to, but remember to keep the overall amount of work low to avoid hurting scroll performance.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-give-a-uistackview-a-background-color">How to give a UIStackView a background color 
/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content">How to make UITableViewCells auto resize to their content 
/example-code/uikit/how-to-swipe-to-delete-uitableviewcells">How to swipe to delete UITableViewCells 
/quick-start/swiftui/how-to-give-a-view-a-custom-frame">How to give a view a custom frame 
/example-code/uikit/how-to-give-a-uinavigationbar-a-background-image-setbackgroundimage">How to give a UINavigationBar a background image: setBackgroundImage()</a>
-->

:::

---

<TagLinks />