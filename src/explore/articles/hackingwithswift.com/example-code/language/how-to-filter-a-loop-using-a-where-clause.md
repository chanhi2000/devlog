---
lang: ko-KR
title: "How to filter a loop using a where clause"
description: "Article(s) > How to filter a loop using a where clause"
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
      content: "Article(s) > How to filter a loop using a where clause"
    - property: og:description
      content: "How to filter a loop using a where clause"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-filter-a-loop-using-a-where-clause.html
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
  "title": "How to filter a loop using a where clause | Language - free Swift example code",
  "desc": "How to filter a loop using a where clause",
  "link": "https://hackingwithswift.com/example-code/language/how-to-filter-a-loop-using-a-where-clause",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>A regular <code>for-in</code> loop goes over all the items in an array, allowing you to manipulate them as you need. However, sometimes you don’t need <em>all</em> items and instead only want a subset, and in those circumstances the <code>where</code> keyword is useful.</p>
<p>For example, consider this array:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Michael Jackson"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Michael Caine"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Adele Adkins"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Michael Jordan"</span></span><span class="token punctuation">]</span></code></pre>
<p>A regular <code>for-in</code> loop could print out all those names, but by adding a <code>where</code> clause we could restrict the loop so it operates only on people named Michael:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> name <span class="token keyword">in</span> names <span class="token keyword">where</span> name<span class="token punctuation">.</span><span class="token function">hasPrefix</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Michael"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>If you need multiple conditions in your <code>where</code> clause, join them using <code>&amp;&amp;</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more">How to manipulate an AsyncSequence using map(), filter(), and more</a></li><li><a href="/example-code/language/how-to-remove-items-from-an-array-using-filter">How to remove items from an array using filter()</a></li><li><a href="/quick-start/swiftui/how-to-filter-core-data-fetch-requests-using-a-predicate">How to filter Core Data fetch requests using a predicate</a></li><li><a href="/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data">How to add a search bar to filter your data</a></li><li><a href="/example-code/media/how-to-filter-images-using-core-image-and-cifilter">How to filter images using Core Image and CIFilter</a></li></ul>
-->

:::

---

<TagLinks />