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
<p>Since iOS 11, table view cells automatically resize to fit their content as long as your cells use Auto Layout to configure themselves. For example, if you use the built-in Basic style for your cell prototype, all you need to do is change the Lines property to 0 for its label and the cell will grow as needed.</p>
<p><strong>Tip:</strong> If you find your cells <em>aren’t</em> autosizing, go to the size inspector with your table view selected then check “Automatic” next to both Row Height and Estimate.</p>
<p>The situation is slightly more complicated when you want some cells to be autosized and others not. To make this work you should add two methods to your table view controller, <code>heightForRowAt</code> and <code>estimatedHeightForRowAt</code>, then make them both return the special value <code>UITableView.automaticDimension</code> for the cells you want to be sized automatically.</p>
<p>In case you're still not sure, here's some example code. This demonstrates a fairly common scenario where you want some important cells at the start to show all their content, but cells in subsequent sections to get clipped:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> heightForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">CGFloat</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> indexPath<span class="token punctuation">.</span>section <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">UITableView</span><span class="token punctuation">.</span>automaticDimension
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">40</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> estimatedHeightForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">CGFloat</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> indexPath<span class="token punctuation">.</span>section <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">UITableView</span><span class="token punctuation">.</span>automaticDimension
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">40</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-use-dynamic-type-to-resize-your-apps-text">How to use Dynamic Type to resize your app's text</a></li><li><a href="/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics">How to resize a custom font using UIFontMetrics</a></li><li><a href="/example-code/uikit/how-to-swipe-to-delete-uitableviewcells">How to swipe to delete UITableViewCells</a></li><li><a href="/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray">How to give UITableViewCells a selected color other than gray</a></li><li><a href="/quick-start/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed">How to make buttons that repeat their action when pressed</a></li></ul>
-->

:::

---

<TagLinks />