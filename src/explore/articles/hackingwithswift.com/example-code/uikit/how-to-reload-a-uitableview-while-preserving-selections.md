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
<p>When you call <code>reloadData()</code> on a <code>UITableView</code> it will refresh all cells from your data source, but it will also lose any selections the user has made.</p>
<p>If you want to reload your table view while also saving and restoring any selections, you should take a copy of the <code>indexPathsForSelectedRows</code> property before the reload, then re-apply those selections after calling <code>reloadData()</code>.</p>
<p>This can be put into a simple <code>UITableView</code> extension for easier use:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UITableView</span> <span class="token punctuation">{</span>
    <span class="token comment">/// Reloads a table view without losing track of what was selected.</span>
    <span class="token keyword">func</span> <span class="token function-definition function">reloadDataSavingSelections</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> selectedRows <span class="token operator">=</span> indexPathsForSelectedRows

        <span class="token function">reloadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token keyword">let</span> selectedRow <span class="token operator">=</span> selectedRows <span class="token punctuation">{</span>
            <span class="token keyword">for</span> indexPath <span class="token keyword">in</span> selectedRow <span class="token punctuation">{</span>
                <span class="token function">selectRow</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> indexPath<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> scrollPosition<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">none</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that in place, you can now call <code>yourTableView.reloadDataSavingSelections()</code> to try it out.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview">How to add peek and pop to a UITableView</a></li><li><a href="/example-code/uikit/how-to-customize-swipe-edit-buttons-in-a-uitableview">How to customize swipe edit buttons in a UITableView</a></li><li><a href="/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview">How to stop empty row separators appearing in UITableView</a></li><li><a href="/example-code/uikit/how-to-remove-cells-from-a-uitableview">How to remove cells from a UITableView</a></li><li><a href="/example-code/uikit/how-to-let-users-tap-on-a-uitableviewcell-while-editing-is-enabled">How to let users tap on a UITableViewCell while editing is enabled</a></li></ul>
-->

:::

---

<TagLinks />