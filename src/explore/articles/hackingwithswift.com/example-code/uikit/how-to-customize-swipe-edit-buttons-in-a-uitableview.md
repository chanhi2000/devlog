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
<p>As of iOS 8.0 there's an easy way to customize the list of buttons that appear when the user swipes from right to left: <code>editActionsForRowAt</code>. Return an array of <code>UITableViewRowAction</code> objects that have titles and styles (and also background colors if you want to customize their appearance), and iOS does the rest.</p>
<p>When you create a <code>UITableViewRowAction</code> object you give it a trailing closure describing what should happen when the user taps the button. You'll get reminded of what action triggered the code, and you'll also be given the index path of the row where the user was tapping. For example, you might do this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> editActionsForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">UITableViewRowAction</span><span class="token punctuation">]</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> delete <span class="token operator">=</span> <span class="token class-name">UITableViewRowAction</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token punctuation">.</span>destructive<span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Delete"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>action<span class="token punctuation">,</span> indexPath<span class="token punctuation">)</span> <span class="token keyword">in</span>
        <span class="token comment">// delete item at indexPath</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> share <span class="token operator">=</span> <span class="token class-name">UITableViewRowAction</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Disable"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>action<span class="token punctuation">,</span> indexPath<span class="token punctuation">)</span> <span class="token keyword">in</span>
        <span class="token comment">// share item at indexPath</span>
    <span class="token punctuation">}</span>

    share<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>blue

    <span class="token keyword">return</span> <span class="token punctuation">[</span>delete<span class="token punctuation">,</span> share<span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre>
<p>Note that the first button uses a <code>.destructive</code> style so it will be colored red by default, but the second button specifically has a blue color assigned to it.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-let-users-edit-your-navigation-title">How to let users edit your navigation title</a></li><li><a href="/quick-start/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row">How to add custom swipe action buttons to a List row</a></li><li><a href="/quick-start/swiftui/how-to-let-users-customize-toolbar-buttons">How to let users customize toolbar buttons</a></li><li><a href="/example-code/uikit/how-to-reload-a-uitableview-while-preserving-selections">How to reload a UITableView while preserving selections</a></li><li><a href="/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview">How to add peek and pop to a UITableView</a></li></ul>
-->

:::

---

<TagLinks />