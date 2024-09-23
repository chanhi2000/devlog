---
lang: ko-KR
title: "How to remove the first or last item from an array"
description: "Article(s) > How to remove the first or last item from an array"
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
      content: "Article(s) > How to remove the first or last item from an array"
    - property: og:description
      content: "How to remove the first or last item from an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-remove-the-first-or-last-item-from-an-array.html
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
  "title": "How to remove the first or last item from an array | Language - free Swift example code",
  "desc": "How to remove the first or last item from an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-remove-the-first-or-last-item-from-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Arrays have built-in methods for removing the first or last items, but there’s a subtle difference between them.</p>
<p>First, there are two ways of removing the last item: <code>popLast()</code> and <code>removeLast()</code>. Both remove the last item from the array, but <code>popLast()</code> returns an optional –&nbsp;if the array was empty, you get back nil. If you call <code>removeLast()</code> on an empty array, your app crashes.</p>
<p>So, in this example <code>last1</code> will contain 5 and <code>last2</code> will contain 4:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> last1 <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">popLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> last2 <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>As for removing items from the start of the array, there’s only <em>one</em> method: <code>removeFirst()</code>. This, like <code>removeLast()</code>, will crash your app if called when the array is empty.</p>
<p>So, continuing the above example, this will put 1 into <code>first1</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> first1 <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>There is no <code>popFirst()</code> because it’s an expensive operation and the developers want you to think twice –&nbsp;each time you remove an item from the front the rest of the items have to move down, so trying to use <code>popFirst()</code> in a loop would be inefficient.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-create-an-array-by-repeating-an-item">How to create an array by repeating an item</a></li><li><a href="/example-code/arrays/how-to-find-an-item-in-an-array-using-firstindexof">How to find an item in an array using firstIndex(of:)</a></li><li><a href="/example-code/language/how-to-remove-duplicate-items-from-an-array">How to remove duplicate items from an array</a></li><li><a href="/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array</a></li><li><a href="/example-code/language/how-to-remove-items-from-an-array-using-filter">How to remove items from an array using filter()</a></li></ul>
-->

:::

---

<TagLinks />