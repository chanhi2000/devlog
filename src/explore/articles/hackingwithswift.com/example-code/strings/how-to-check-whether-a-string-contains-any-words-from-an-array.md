---
lang: ko-KR
title: "How to check whether a string contains any words from an array"
description: "Article(s) > How to check whether a string contains any words from an array"
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
      content: "Article(s) > How to check whether a string contains any words from an array"
    - property: og:description
      content: "How to check whether a string contains any words from an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-check-whether-a-string-contains-any-words-from-an-array.html
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
  "title": "How to check whether a string contains any words from an array | Strings - free Swift example code",
  "desc": "How to check whether a string contains any words from an array",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-check-whether-a-string-contains-any-words-from-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>You should already know that you can check whether a string contains a single word like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"The rain in Spain"</span></span>
<span class="token keyword">let</span> stringResult <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"rain"</span></span><span class="token punctuation">)</span></code></pre>
<p>You should also know that you can check an array of strings to see whether a particular string is in there, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"clouds"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"rain"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"wind"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arrayResult <span class="token operator">=</span> words<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"rain"</span></span><span class="token punctuation">)</span></code></pre>
<p>Well, both those <code>contains()</code> methods can be combined together to form a new meaning: “do any of the words in this array exist in this string?” like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> combinedResult <span class="token operator">=</span> words<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">where</span><span class="token punctuation">:</span> string<span class="token punctuation">.</span>contains<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/arrays/how-to-tell-if-an-array-contains-an-object">How to tell if an array contains an object</a></li><li><a href="/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition</a></li><li><a href="/example-code/system/how-to-check-whether-your-other-apps-are-installed">How to check whether your other apps are installed</a></li><li><a href="/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a></li><li><a href="/example-code/system/how-to-check-whether-one-date-is-similar-to-another">How to check whether one date is similar to another</a></li></ul>
-->

:::

---

<TagLinks />