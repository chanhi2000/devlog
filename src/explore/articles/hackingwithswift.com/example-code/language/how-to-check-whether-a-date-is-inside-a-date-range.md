---
lang: ko-KR
title: "How to check whether a date is inside a date range"
description: "Article(s) > How to check whether a date is inside a date range"
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
      content: "Article(s) > How to check whether a date is inside a date range"
    - property: og:description
      content: "How to check whether a date is inside a date range"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range.html
date: 2022-03-23
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
  "title": "How to check whether a date is inside a date range | Language - free Swift example code",
  "desc": "How to check whether a date is inside a date range",
  "link": "https://hackingwithswift.com/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Everyone knows you can create ranges from two integers such as <code>1...5</code>, but few people realize the same applies to dates. This means you can create a date range using the same closed-range operator (<code>...</code>) and half-open range operator (<code>..&lt;</code>) you already know, allowing you to check whether one date lies inside a range.</p>
<p>For example, we could create three <code>Date</code> objects like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>now
<span class="token keyword">let</span> soon <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>now<span class="token punctuation">.</span><span class="token function">addingTimeInterval</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> later <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>now<span class="token punctuation">.</span><span class="token function">addingTimeInterval</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span></code></pre>
<p>We can then compare <code>now</code> and <code>later</code> into a single range like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> range <span class="token operator">=</span> now<span class="token operator">...</span>later</code></pre>
<p>Finally, we can check whether that range contains the <code>soon</code> date using the <code>contains()</code> method of ranges, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> range<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>soon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"The date is inside the range"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"The date is outside the range"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a></li><li><a href="/example-code/system/how-to-check-whether-one-date-is-similar-to-another">How to check whether one date is similar to another</a></li><li><a href="/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition</a></li><li><a href="/example-code/strings/how-to-check-whether-a-string-contains-any-words-from-an-array">How to check whether a string contains any words from an array</a></li><li><a href="/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up</a></li></ul>
-->

:::

---

<TagLinks />