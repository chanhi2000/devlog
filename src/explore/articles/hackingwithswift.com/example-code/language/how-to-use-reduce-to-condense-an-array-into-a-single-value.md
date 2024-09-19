---
lang: ko-KR
title: "How to use reduce() to condense an array into a single value"
description: "Article(s) > How to use reduce() to condense an array into a single value"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use reduce() to condense an array into a single value"
    - property: og:description
      content: "How to use reduce() to condense an array into a single value"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-reduce-to-condense-an-array-into-a-single-value.html
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
  "title": "How to use reduce() to condense an array into a single value | Language - free Swift example code",
  "desc": "How to use reduce() to condense an array into a single value",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-reduce-to-condense-an-array-into-a-single-value",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>The <code>reduce()</code> method iterates over all items in array, combining them together somehow until you end up with a single value. The “somehow” is specified by a closure you provide, for example you might want to count how many characters are provided in an array of names, which looks like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Taylor"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Adele"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> names<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">+</span> <span class="token short-argument">$1</span><span class="token punctuation">.</span>count <span class="token punctuation">}</span>
<span class="token function">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span></code></pre>
<p>That starts with a total of 0 (the parameter passed in to <code>reduce()</code>, then adds that to the count of each string in the array. So, it starts by adding 6 for Taylor (so the running total is 6), then adds 4 for Paul (so the running total is 10), then adds 5 more for Adele (so the running total is 15.)</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string</a></li><li><a href="/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array</a></li><li><a href="/example-code/language/how-to-sum-an-array-of-numbers-using-reduce">How to sum an array of numbers using reduce()</a></li><li><a href="/quick-start/swiftui/how-to-reduce-animations-when-requested">How to reduce animations when requested</a></li><li><a href="/quick-start/swiftui/how-to-detect-the-reduce-motion-accessibility-setting">How to detect the Reduce Motion accessibility setting</a></li></ul>
-->

:::

---

<TagLinks />