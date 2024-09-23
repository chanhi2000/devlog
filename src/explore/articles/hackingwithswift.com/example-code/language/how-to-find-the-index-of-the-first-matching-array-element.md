---
lang: ko-KR
title: "How to find the index of the first matching array element"
description: "Article(s) > How to find the index of the first matching array element"
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
      content: "Article(s) > How to find the index of the first matching array element"
    - property: og:description
      content: "How to find the index of the first matching array element"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-find-the-index-of-the-first-matching-array-element.html
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
  "title": "How to find the index of the first matching array element | Language - free Swift example code",
  "desc": "How to find the index of the first matching array element",
  "link": "https://hackingwithswift.com/example-code/language/how-to-find-the-index-of-the-first-matching-array-element",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you have an array of items and want to find the first item that matches a specific condition, you should use the <code>index(where:)</code> method. This accepts a closure of code to use as a test, applies that test to all elements in an array, then returns the index of the first item to match it. If no item matches you’ll get back nil, so be prepared to unwrap the optional you get sent back.</p>
<p>For example, if we had an array of numbers:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span></code></pre>
<p>We could find the first odd number like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> firstOdd <span class="token operator">=</span> numbers<span class="token punctuation">.</span>index <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">}</span></code></pre>
<p>That will send back 4 as an optional integer, because the first odd number (9) is at index four.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-find-the-first-matching-element-in-an-array">How to find the first matching element in an array</a></li><li><a href="/example-code/language/how-to-count-element-frequencies-in-an-array">How to count element frequencies in an array</a></li><li><a href="/example-code/language/how-to-get-a-random-element-from-an-array-using-randomelement">How to get a random element from an array using randomElement()</a></li><li><a href="/example-code/language/how-to-count-matching-items-in-an-array">How to count matching items in an array</a></li><li><a href="/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array</a></li></ul>
-->

:::

---

<TagLinks />