---
lang: ko-KR
title: "How to register a cell for UITableViewCell reuse"
description: "Article(s) > How to register a cell for UITableViewCell reuse"
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
      content: "Article(s) > How to register a cell for UITableViewCell reuse"
    - property: og:description
      content: "How to register a cell for UITableViewCell reuse"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse.html
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
  "title": "How to register a cell for UITableViewCell reuse | UIKit - free Swift example code",
  "desc": "How to register a cell for UITableViewCell reuse",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
<p>Reusing table view cells has been one of the most important performance optimizations in iOS ever since iOS 2.0, but it was only with iOS 6.0 that the API got cleaned up a little with the addition of the <code>register()</code> method.</p>
<p>There are two variants to <code>register</code>, but both take a parameter called <code>forCellReuseIdentifier</code>, which is a string that lets you register different kinds of table view cells. For example, you might have a reuse identifier "DefaultCell", another one called "Heading cell", another one "CellWithTextField", and so on. Re-using different cells this way helps save system resources.</p>
<p>If you want to use <code>register()</code> with a Swift class, you provide a table view cell class as its first parameter. This is useful if your cell is defined entirely in code. As an example, this uses the default <code>UITableViewCell</code> class:</p>
<pre class=" language-swift"><code class=" language-swift">tableView<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">UITableViewCell</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> forCellReuseIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"DefaultCell"</span></span><span class="token punctuation">)</span></code></pre>
<p>The other option is to use <code>register()</code> with an Interface Builder nib file, like this:</p>
<pre class=" language-swift"><code class=" language-swift">tableView<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">UINib</span><span class="token punctuation">(</span>nibName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"yourNib"</span></span><span class="token punctuation">,</span> bundle<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span><span class="token punctuation">,</span> forCellReuseIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"CellFromNib"</span></span><span class="token punctuation">)</span></code></pre>
<p>Regardless of which option you choose, you can dequeue your cells like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> cellForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UITableViewCell</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"DefaultCell"</span></span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">return</span> cell
<span class="token punctuation">}</span></code></pre>
<p>If there aren't any cells created that can be reused, iOS will automatically create them – this API really is very easy.</p>
<p>Although knowing the above code is definitely useful, if you're using storyboards you will find it easier to create prototype cells and give them a reuse identifier directly inside Interface Builder.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-register-a-cell-for-uicollectionview-reuse">How to register a cell for UICollectionView reuse</a></li><li><a href="/example-code/uikit/why-can-i-not-register-for-push-notifications">Why can I not register for push notifications?</a></li><li><a href="/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier"</a></li><li><a href="/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource"</a></li><li><a href="/example-code/uikit/how-to-add-a-button-to-a-uitableviewcell">How to add a button to a UITableViewCell</a></li></ul>
-->

:::

---

<TagLinks />