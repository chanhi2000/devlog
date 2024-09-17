---
lang: ko-KR
title: "How to run a case-insensitive search for one string inside another"
description: "Article(s) > How to run a case-insensitive search for one string inside another"
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
      content: "Article(s) > How to run a case-insensitive search for one string inside another"
    - property: og:description
      content: "How to run a case-insensitive search for one string inside another"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-run-a-case-insensitive-search-for-one-string-inside-another.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to run a case-insensitive search for one string inside another | Strings - free Swift example code",
  "desc": "How to run a case-insensitive search for one string inside another",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-run-a-case-insensitive-search-for-one-string-inside-another",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>You can search for one string inside another using the <code>range(of:)</code> method, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"The rain in Spain"</span></span>
<span class="token keyword">let</span> range1 <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"rain"</span></span><span class="token punctuation">)</span></code></pre>
<p>That returns an optional string index: if the word was found it will say where it was found, otherwise it will be nil.</p>
<p>However, <code>range(of:)</code> does a <em>case-sensitive</em> search by default, which means it will match “rain” but not “Rain” or “RAIN”. If you want a case-insensitive search you need to provide an extra parameter called <code>options</code>, passing it <code>.caseInsensitive</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> range2 <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"rain"</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>caseInsensitive<span class="token punctuation">)</span></code></pre>
<p>That returns the same optional value depending on what was found, so you can wrap the whole thing in an <code>if let</code> to see whether a match was found:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> range3 <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"rain"</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>caseInsensitive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// match</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// no match</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-add-search-tokens-to-a-search-field">How to add search tokens to a search field</a></li><li><a href="/example-code/system/how-to-convert-between-camel-case-and-snake-case-with-codable-and-keyencodingstrategy">How to convert between camel case and snake case with Codable and keyEncodingStrategy</a></li><li><a href="/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data">How to add a search bar to filter your data</a></li><li><a href="/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture()</a></li><li><a href="/example-code/system/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency">How to make one operation wait for another to complete using addDependency()</a></li></ul>
-->

:::

---

<TagLinks />