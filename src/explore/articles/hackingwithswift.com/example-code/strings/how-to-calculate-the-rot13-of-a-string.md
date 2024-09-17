---
lang: ko-KR
title: "How to calculate the ROT13 of a string"
description: "Article(s) > How to calculate the ROT13 of a string"
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
      content: "Article(s) > How to calculate the ROT13 of a string"
    - property: og:description
      content: "How to calculate the ROT13 of a string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-calculate-the-rot13-of-a-string.html
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
  "title": "How to calculate the ROT13 of a string | Strings - free Swift example code",
  "desc": "How to calculate the ROT13 of a string",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-calculate-the-rot13-of-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>ROT13 is a simple algorithm that shifts letters in a string forward 13 places. It’s obviously not suitable for any serious encryption, but it’s very useful for hiding text so its meaning is not obvious –&nbsp;posting spoilers on a forum, for example, is best done using ROT13 to avoid someone getting annoyed.</p>
<p>It’s not hard to write a <code>rot13()</code> function, but it <em>is</em> a little harder to wrap it up neatly so you avoid global variables while still making it easy to use. Because you can’t add stored variables to an extension on <code>String</code>, the cleanest thing to do is create a new <code>ROT13</code> type that can store the transformation from regular letters to ROT13, then run the calculation.</p>
<p>In code, it looks like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> ROT13 <span class="token punctuation">{</span>
    <span class="token comment">// create a dictionary that will store our character mapping</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">var</span> key <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Character</span><span class="token punctuation">:</span> <span class="token class-name">Character</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// create arrays of all uppercase and lowercase letters</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">let</span> uppercase <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"ABCDEFGHIJKLMNOPQRSTUVWXYZ"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">let</span> lowercase <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"abcdefghijklmnopqrstuvwxyz"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function-definition function">string</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> string<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token comment">// if this is the first time the method is being called, calculate the ROT13 key dictionary</span>
        <span class="token keyword">if</span> ROT13<span class="token punctuation">.</span>key<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> <span class="token number">26</span> <span class="token punctuation">{</span>
                ROT13<span class="token punctuation">.</span>key<span class="token punctuation">[</span>ROT13<span class="token punctuation">.</span>uppercase<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> ROT13<span class="token punctuation">.</span>uppercase<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">26</span><span class="token punctuation">]</span>
                ROT13<span class="token punctuation">.</span>key<span class="token punctuation">[</span>ROT13<span class="token punctuation">.</span>lowercase<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> ROT13<span class="token punctuation">.</span>lowercase<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">26</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// now return the transformed string</span>
        <span class="token keyword">let</span> transformed <span class="token operator">=</span> string<span class="token punctuation">.</span>map <span class="token punctuation">{</span> ROT13<span class="token punctuation">.</span>key<span class="token punctuation">[</span><span class="token short-argument">$0</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token short-argument">$0</span> <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">(</span>transformed<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>I’ve used private properties there because there’s no reason these implementation details should leak out, and it’s all static because there’s no need to create new <code>ROT13</code> instances every time we need to run the conversion.</p>
<p>With that in place we can write an extension on <code>String</code> to calculate the ROT13 using our struct:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">rot13</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ROT13<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That extension can now be called on a regular string, so users don’t need to care about how we implemented ROT13:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">.</span><span class="token function">rot13</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance">How to calculate the SHA hash of a String or Data instance</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-manhattan-distance-between-two-cgpoints">How to calculate the Manhattan distance between two CGPoints</a></li><li><a href="/example-code/language/how-to-calculate-division-remainder-using-modulo">How to calculate division remainder using modulo</a></li></ul>
-->

:::

---

<TagLinks />