---
lang: ko-KR
title: "How to loop over non-nil items in an array"
description: "Article(s) > How to loop over non-nil items in an array"
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
      content: "Article(s) > How to loop over non-nil items in an array"
    - property: og:description
      content: "How to loop over non-nil items in an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-loop-over-non-nil-items-in-an-array.html
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
  "title": "How to loop over non-nil items in an array | Language - free Swift example code",
  "desc": "How to loop over non-nil items in an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-loop-over-non-nil-items-in-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>Consider an array of items containing some optionals, like this one:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token operator">?</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span></code></pre>
<p>If you want to loop over all the items and print them out, you’d write something like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> number <span class="token keyword">in</span> numbers <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>However, that prints out all items in their current state: optionally wrapped integers for some, nil for others. </p>
<p>With a small change to that loop, you can have Swift unwrap all the optionals then only enter the loop for any that contain a value –&nbsp;any <code>nil</code> items are ignored. This is done using <code>for case let</code> syntax, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> <span class="token keyword">case</span> <span class="token keyword">let</span> number<span class="token operator">?</span> <span class="token keyword">in</span> numbers <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That will print the numbers 1, 3, and 5.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array">How to use the forEach method to loop over an array</a></li><li><a href="/example-code/language/using-stride-to-loop-over-a-range-of-numbers">Using stride() to loop over a range of numbers</a></li><li><a href="/example-code/arrays/how-to-loop-through-items-in-an-array">How to loop through items in an array</a></li><li><a href="/quick-start/swiftui/how-to-detect-the-user-hovering-over-a-view">How to detect the user hovering over a view</a></li><li><a href="/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve">How to modify haptic events over time using CHHapticParameterCurve</a></li></ul>
-->

:::

---

<TagLinks />