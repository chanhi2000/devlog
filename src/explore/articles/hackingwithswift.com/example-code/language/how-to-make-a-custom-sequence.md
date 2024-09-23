---
lang: ko-KR
title: "How to make a custom sequence"
description: "Article(s) > How to make a custom sequence"
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
      content: "Article(s) > How to make a custom sequence"
    - property: og:description
      content: "How to make a custom sequence"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-make-a-custom-sequence.html
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
  "title": "How to make a custom sequence | Language - free Swift example code",
  "desc": "How to make a custom sequence",
  "link": "https://hackingwithswift.com/example-code/language/how-to-make-a-custom-sequence",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>When you use a <code>for-in</code> loop, Swift maps that code to a <code>while</code> loop that generates an iterator for your data. Swift then calls <code>next()</code> on that iterator repeatedly until it gets back <code>nil</code> to signal that the loop has ended.</p>
<p>This functionality is all handled through two protocols: <code>Sequence</code> describes something that can be looped over, and <code>IteratorProtocol</code> describes something that iterates over a sequence. If you combine them both into a single type, all you need to do is implement a <code>next()</code> method returning whatever value comes next in your sequence.</p>
<p>Let’s walk through a simple sequence that counts doubles up from 1, so it will count 1, 2, 4, 8, 16, 32, 64, 128, 256, and so on until we run out of integers that can be stored in <code>Int</code>.</p>
<p>In code this means creating a new <code>DoubleGenerator</code> struct that conforms to both <code>Sequence</code> and <code>IteratorProtocol</code>. Because this type conforms to both protocols, we only need to implement one method: <code>next()</code>. This should double the current number then return it, however we need to do that doubling inside a <code>defer</code> block so that we only double <em>after</em> we’ve returned.</p>
<p>Here’s the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">DoubleGenerator</span><span class="token punctuation">:</span> <span class="token class-name">Sequence</span><span class="token punctuation">,</span> <span class="token class-name">IteratorProtocol</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> current <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token punctuation">{</span>
            current <span class="token operator">*=</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> current
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>As that’s an infinite sequence you should be careful using it. For example, this code increments a counter each time its loop goes around and exits the loop when the counter reaches 10.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token class-name">DoubleGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> number <span class="token keyword">in</span> numbers <span class="token punctuation">{</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span> <span class="token keyword">break</span> <span class="token punctuation">}</span>

    <span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That will print doubles of 1 through to 256.</p>
<p>If you want your iterator and sequences to be <em>different</em> types, you’ll need to add a <code>makeIterator()</code> method to your sequence.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream">What’s the difference between Sequence, AsyncSequence, and AsyncStream?</a></li><li><a href="/quick-start/concurrency/how-to-convert-an-asyncsequence-into-a-sequence">How to convert an AsyncSequence into a Sequence</a></li><li><a href="/example-code/language/what-is-a-lazy-sequence">What is a lazy sequence?</a></li><li><a href="/example-code/games/how-to-run-skactions-in-a-sequence">How to run SKActions in a sequence</a></li><li><a href="/example-code/language/how-to-find-the-longest-initial-sequence-in-an-array">How to find the longest initial sequence in an array</a></li></ul>
-->

:::

---

<TagLinks />