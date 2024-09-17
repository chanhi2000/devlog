---
lang: ko-KR
title: "How to get the lines in a string as an array"
description: "Article(s) > How to get the lines in a string as an array"
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
      content: "Article(s) > How to get the lines in a string as an array"
    - property: og:description
      content: "How to get the lines in a string as an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-get-the-lines-in-a-string-as-an-array.html
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
  "title": "How to get the lines in a string as an array | Strings - free Swift example code",
  "desc": "How to get the lines in a string as an array",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-get-the-lines-in-a-string-as-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift’s strings have their lines separated by the <code>\n</code> character, which is a line break on Unix operating systems. Using that plus the <code>components(separatedBy:)</code> method, you can get an array of all the lines in a string like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> lines <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">components</span><span class="token punctuation">(</span>separatedBy<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"\n"</span></span><span class="token punctuation">)</span></code></pre>
<p>If you intend to use that regularly, consider making an extension on <code>String</code> like this one:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> lines<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">components</span><span class="token punctuation">(</span>separatedBy<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"\n"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect</a></li><li><a href="/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:)</a></li><li><a href="/quick-start/concurrency/how-to-get-a-result-from-a-task">How to get a Result from a task</a></li><li><a href="/example-code/language/how-to-get-a-random-element-from-an-array-using-randomelement">How to get a random element from an array using randomElement()</a></li><li><a href="/example-code/strings/how-to-get-the-length-of-a-string">How to get the length of a string</a></li></ul>
-->

:::

---

<TagLinks />