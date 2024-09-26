---
lang: ko-KR
title: "Fixing ”Failed to obtain a cell from its DataSource”"
description: "Article(s) > Fixing ”Failed to obtain a cell from its DataSource”"
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
      content: "Article(s) > Fixing ”Failed to obtain a cell from its DataSource”"
    - property: og:description
      content: "Fixing ”Failed to obtain a cell from its DataSource”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource.html
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
  "title": "Fixing ”Failed to obtain a cell from its DataSource” | UIKit - free Swift example code",
  "desc": "Fixing ”Failed to obtain a cell from its DataSource”",
  "link": "https://hackingwithswift.com/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
<p>This is a common error, but it's easily fixed. There are two main reasons why table views fail to return cells, but they give different error messages. If you get an error like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">Terminating</span> app due to uncaught exception '<span class="token class-name">NSInternalInconsistencyException</span>'<span class="token punctuation">,</span> reason<span class="token punctuation">:</span> '<span class="token class-name">UITableView</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token class-name">UITableView</span><span class="token punctuation">:</span> <span class="token number">0x7f9cd8830c00</span><span class="token punctuation">;</span> frame <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token number">414</span> <span class="token number">736</span><span class="token punctuation">)</span><span class="token punctuation">;</span> clipsToBounds <span class="token operator">=</span> <span class="token constant">YES</span><span class="token punctuation">;</span> autoresize <span class="token operator">=</span> <span class="token class-name">W</span><span class="token operator">+</span><span class="token class-name">H</span><span class="token punctuation">;</span> gestureRecognizers <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token class-name">NSArray</span><span class="token punctuation">:</span> <span class="token number">0x7f9cd8430900</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> layer <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token class-name">CALayer</span><span class="token punctuation">:</span> <span class="token number">0x7f9cd8428370</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> contentOffset<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">64</span><span class="token punctuation">}</span><span class="token punctuation">;</span> contentSize<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token number">414</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> failed to obtain a cell from its dataSource </code></pre>
<p>…it means that your <code>cellForRowAt</code> method is returning nil for some reason, and it's usually because you are failing to dequeue a reusable cell.</p>
<p>If you want to confirm this, just set a breakpoint after your current dequeue call. For example, if you have code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> cellForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UITableViewCell</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">let</span> object <span class="token operator">=</span> objects<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span>
    cell<span class="token punctuation">.</span>textLabel<span class="token operator">!</span><span class="token punctuation">.</span>text <span class="token operator">=</span> object<span class="token punctuation">.</span>description
    <span class="token keyword">return</span> cell
<span class="token punctuation">}</span></code></pre>
<p>…then you should set the breakpoint on the <code>let object =</code> line. If the problem is that <code>tableView.dequeueReusableCell(withIdentifier:)</code> is returning nil, you'll find <code>cell</code> is set to nil.</p>
<p>If you're using modern Xcode templates where you get a prototype cell made for you, you should probably be using this instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> indexPath<span class="token punctuation">)</span></code></pre>
<p>If you aren't using an Xcode template, use that line of code anyway then register your own re-use identifier like this:</p>
<pre class=" language-swift"><code class=" language-swift">tableView<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">UITableViewCell</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> forCellReuseIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">)</span></code></pre>
<p>All being well that should resolve the problem. If not, check that the cell identifier is correct: it's "Cell" by default, but you might have changed it. Such a misspelling ought to cause a crash when <code>tableView.dequeueReusableCell(withIdentifier:)</code> fails, but it's worth checking anyway.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier"</a></li><li><a href="/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers"</a></li><li><a href="/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round"</a></li></ul>
-->

:::

---

<TagLinks />