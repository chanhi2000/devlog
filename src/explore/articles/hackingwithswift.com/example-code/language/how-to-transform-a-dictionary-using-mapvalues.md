---
lang: ko-KR
title: "How to transform a dictionary using mapValues()"
description: "Article(s) > How to transform a dictionary using mapValues()"
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
      content: "Article(s) > How to transform a dictionary using mapValues()"
    - property: og:description
      content: "How to transform a dictionary using mapValues()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-transform-a-dictionary-using-mapvalues.html
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
  "title": "How to transform a dictionary using mapValues() | Language - free Swift example code",
  "desc": "How to transform a dictionary using mapValues()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-transform-a-dictionary-using-mapvalues",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Although dictionaries have a general <code>map()</code> method, they also have a specialized form of <code>map()</code> called <code>mapValues()</code> –&nbsp;it transforms just the <em>values</em> of the dictionary, leaving the keys untouched.</p>
<p>This extra method is useful because dictionaries can’t have duplicate keys, but if you’re only transforming the <em>values</em> from a dictionary then this is not a problem.</p>
<p>Let’s try it out on a dictionary containing the height in centimeters of various people:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> peopleMetric <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Taylor"</span></span><span class="token punctuation">:</span> <span class="token number">178.0</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Justin"</span></span><span class="token punctuation">:</span> <span class="token number">175.0</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Ed"</span></span><span class="token punctuation">:</span> <span class="token number">173.0</span><span class="token punctuation">]</span></code></pre>
<p>If we want to convert those heights to inches without changing the keys, we can use <code>mapValues()</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> peopleImperial <span class="token operator">=</span> peopleMetric<span class="token punctuation">.</span>mapValues <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">/</span> <span class="token number">2.54</span> <span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-use-map-to-transform-an-array">How to use map() to transform an array</a></li><li><a href="/example-code/language/how-to-use-compactmap-to-transform-an-array">How to use compactMap() to transform an array</a></li><li><a href="/example-code/uikit/showing-dictionary-definitions-using-uireferencelibraryviewcontroller">Showing dictionary definitions using UIReferenceLibraryViewController</a></li><li><a href="/example-code/language/what-is-a-dictionary">What is a dictionary?</a></li><li><a href="/example-code/language/how-to-specify-default-values-for-dictionary-keys">How to specify default values for dictionary keys</a></li></ul>
-->

:::

---

<TagLinks />