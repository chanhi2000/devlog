---
lang: ko-KR
title: "How to remove cells from a UITableView"
description: "Article(s) > How to remove cells from a UITableView"
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
      content: "Article(s) > How to remove cells from a UITableView"
    - property: og:description
      content: "How to remove cells from a UITableView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-remove-cells-from-a-uitableview.html
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
  "title": "How to remove cells from a UITableView | UIKit - free Swift example code",
  "desc": "How to remove cells from a UITableView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-remove-cells-from-a-uitableview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>It's easy to delete rows from a table view, but there is one catch: you need to remove it from the data source first. If you don't do this, iOS will realize there's a mis-match between what the data source thinks should be showing and what the table view is actually showing, and you'll get a crash.</p>
<p>So, to remove a cell from a table view you first remove it from your data source, then you call <code>deleteRows(at:)</code> on your table view, providing it with an array of index paths that should be zapped. You can create index paths yourself, you just need a section and row number.</p>
<p>Here's some example code to get you started:</p>
<pre class=" language-swift"><code class=" language-swift">objects<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> indexPath <span class="token operator">=</span> <span class="token class-name">IndexPath</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> section<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
tableView<span class="token punctuation">.</span><span class="token function">deleteRows</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token punctuation">[</span>indexPath<span class="token punctuation">]</span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token punctuation">.</span>fade<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-reload-a-uitableview-while-preserving-selections">How to reload a UITableView while preserving selections</a></li><li><a href="/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview">How to add peek and pop to a UITableView</a></li><li><a href="/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview">How to stop empty row separators appearing in UITableView</a></li><li><a href="/example-code/uikit/how-to-customize-swipe-edit-buttons-in-a-uitableview">How to customize swipe edit buttons in a UITableView</a></li><li><a href="/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array</a></li></ul>
-->

:::

---

<TagLinks />