---
lang: ko-KR
title: "Fixing ”Ambiguous reference to member when using ceil or round”"
description: "Article(s) > Fixing ”Ambiguous reference to member when using ceil or round”"
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
      content: "Article(s) > Fixing ”Ambiguous reference to member when using ceil or round”"
    - property: og:description
      content: "Fixing ”Ambiguous reference to member when using ceil or round”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Fixing ”Ambiguous reference to member when using ceil or round” | Language - free Swift example code",
  "desc": "Fixing ”Ambiguous reference to member when using ceil or round”",
  "link": "https://hackingwithswift.com/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>If you've ever come across the error message "No 'ceil' candidates produce the expected contextual result type 'Int'" –&nbsp;which can happen with calls to <code>ceil()</code>, <code>floor()</code>, and <code>round()</code> – it's usually down to Swift being unable to satisfy type requirements you have asked for.</p>
<p>Put simply, you might think calling <code>ceil()</code> rounds a floating-point number up to its nearest integer, but actually it doesn't return an integer at all: if you give it a <code>Float</code> it returns a <code>Float</code>, and if you give it a <code>Double</code> it returns a <code>Double</code>.</p>
<p>So, this code works because <code>c</code> ends up being a <code>Double</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0.5</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">ceil</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span></code></pre>
<p>…whereas this code causes your exact issue because it tries to force a <code>Double</code> into an <code>Int</code> without a typecast:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> c<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token function">ceil</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span></code></pre>
<p>If you need <code>c</code> to be an integer, the solution is to convert the return value of <code>ceil()</code> to be an integer, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token function">ceil</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>The same is true of the <code>floor()</code> and <code>round()</code> functions, so you'd need the same solution.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource"</a></li><li><a href="/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier"</a></li><li><a href="/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers"</a></li></ul>
-->

:::

---

<TagLinks />