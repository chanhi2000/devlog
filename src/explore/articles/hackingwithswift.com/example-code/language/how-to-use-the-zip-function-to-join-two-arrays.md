---
lang: ko-KR
title: "How to use the zip() function to join two arrays"
description: "Article(s) > How to use the zip() function to join two arrays"
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
      content: "Article(s) > How to use the zip() function to join two arrays"
    - property: og:description
      content: "How to use the zip() function to join two arrays"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-the-zip-function-to-join-two-arrays.html
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
  "title": "How to use the zip() function to join two arrays | Language - free Swift example code",
  "desc": "How to use the zip() function to join two arrays",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-the-zip-function-to-join-two-arrays",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>zip()</code> function is designed to merge two sequences into a single sequence of tuples. For example, here is an array of wizards:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> wizards1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Harry"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Ron"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Hermione"</span></span><span class="token punctuation">]</span></code></pre>
<p>And here’s a matching array of the animals owned by those wizards:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> animals1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Hedwig"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Scabbers"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Crookshanks"</span></span><span class="token punctuation">]</span></code></pre>
<p>Using <code>zip()</code> we can combine them together:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> combined1 <span class="token operator">=</span> <span class="token function">zip</span><span class="token punctuation">(</span>wizards1<span class="token punctuation">,</span> animals1<span class="token punctuation">)</span></code></pre>
<p>That will produce a single sequence combining the earlier two. To avoid doing extra work, Swift actually creates a special type called <code>Zip2Sequence</code> that stores both sequences internally –&nbsp;this is more efficient than doing the actual joining, but it does make the output harder to read if you’re using a playground. So, if you <em>are</em> using a playground you should wrap the output from <code>zip()</code> into a new array to make its output easier to read:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> combined2 <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token function">zip</span><span class="token punctuation">(</span>wizards1<span class="token punctuation">,</span> animals1<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>If you print <code>combined</code> you’ll see it contains this array:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Harry"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Hedwig"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Ron"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Scabbers"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hermione"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Crookshanks"</span></span><span class="token punctuation">)</span><span class="token punctuation">]</span></code></pre>
<p>One of the helpful features of <code>zip()</code> is that if your two arrays differ in size it will automatically choose the shorter of the two. This avoids trying to read two arrays at the same time and accidentally going out of bounds when one is shorter.</p>
<p>For example, this code will print out the animals belonging to the first three wizards, but nothing for Draco because he doesn’t have a matching animal:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> wizards2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Harry"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Ron"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Hermione"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Draco"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> animals2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Hedwig"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Scabbers"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Crookshanks"</span></span><span class="token punctuation">]</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>wizard<span class="token punctuation">,</span> animal<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token function">zip</span><span class="token punctuation">(</span>wizards2<span class="token punctuation">,</span> animals2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">wizard</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> has </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">animal</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-join-an-array-of-strings-in-a-natural-way">How to join an array of strings in a natural way</a></li><li><a href="/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string</a></li><li><a href="/example-code/language/how-to-find-the-difference-between-two-arrays">How to find the difference between two arrays</a></li><li><a href="/quick-start/swiftui/two-way-bindings-in-swiftui">Two-way bindings in SwiftUI</a></li><li><a href="/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a></li></ul>
-->

:::

---

<TagLinks />