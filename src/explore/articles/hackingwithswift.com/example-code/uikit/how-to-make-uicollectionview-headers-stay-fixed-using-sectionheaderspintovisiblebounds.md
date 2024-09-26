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
<p>Since the earliest days of iOS, <code>UITableView</code> has had fixed headers: as you scrolled within a table section the header stayed still, only moving off when another section reached the top.</p>
<p>This same functionality was added for <code>UICollectionView</code> in iOS 9.0, although it’s not enabled by default and only available with <code>UICollectionViewFlowLayout</code>.</p>
<p>To use it yourself, first make sure your collection view’s <code>collectionViewLayout</code> property is an instance of <code>UICollectionViewFlowLayout</code>, then set that flow layout’s <code>sectionHeadersPinToVisibleBounds</code> property to true. For example, you might write this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> layout <span class="token operator">=</span> collectionView<span class="token punctuation">.</span>collectionViewLayout <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">UICollectionViewFlowLayout</span> <span class="token punctuation">{</span>
    layout<span class="token punctuation">.</span>sectionHeadersPinToVisibleBounds <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>There’s a similar property to make footers behave the same way: <code>sectionFootersPinToVisibleBounds</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-make-a-fixed-size-spacer">How to make a fixed size Spacer</a></li><li><a href="/quick-start/swiftui/how-to-position-views-in-a-fixed-grid">How to position views in a fixed grid</a></li><li><a href="/example-code/uikit/how-to-register-a-cell-for-uicollectionview-reuse">How to register a cell for UICollectionView reuse</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li></ul>
-->

:::

---

<TagLinks />