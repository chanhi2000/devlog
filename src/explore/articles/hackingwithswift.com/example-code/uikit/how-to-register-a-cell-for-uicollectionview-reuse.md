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
<p>If you're working entirely in code, you can register a <code>UICollectionViewCell</code> subclass for use with your collection view, so that new cells are dequeued and re-use automatically by the system.</p>
<p>Here's the most basic form of this technique:</p>
<pre class=" language-swift"><code class=" language-swift">collectionView<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">UICollectionViewCell</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> forCellWithReuseIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">)</span></code></pre>
<p>That registers a basic collection view cell, which you can then customize in code if you want to. You can then dequeue a cell with this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">collectionView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> collectionView<span class="token punctuation">:</span> <span class="token class-name">UICollectionView</span><span class="token punctuation">,</span> cellForItemAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UICollectionViewCell</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cell <span class="token operator">=</span> collectionView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withReuseIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> indexPath<span class="token punctuation">)</span>
    <span class="token keyword">return</span> cell
<span class="token punctuation">}</span></code></pre>
<p>If a cell doesn't already exist that can be re-used, a new one will be created automatically.</p>
<p>As you might imagine, you will most of the time want to create your own custom <code>UICollectionViewCell</code> subclass and use that instead, but the code is the same&nbsp;–&nbsp;just use your class name instead.</p>
<p>If you're working with Interface Builder, all this work is done for you by creating prototype cells.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse">How to register a cell for UITableViewCell reuse</a></li><li><a href="/example-code/uikit/why-can-i-not-register-for-push-notifications">Why can I not register for push notifications?</a></li><li><a href="/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier"</a></li><li><a href="/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource"</a></li><li><a href="/example-code/uikit/how-to-make-uicollectionview-headers-stay-fixed-using-sectionheaderspintovisiblebounds">How to make UICollectionView headers stay fixed using sectionHeadersPinToVisibleBounds</a></li></ul>
-->

:::

---

<TagLinks />