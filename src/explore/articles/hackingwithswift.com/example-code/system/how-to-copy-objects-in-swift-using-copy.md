---
lang: ko-KR
title: "How to copy objects in Swift using copy()"
description: "Article(s) > How to copy objects in Swift using copy()"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to copy objects in Swift using copy()"
    - property: og:description
      content: "How to copy objects in Swift using copy()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-copy-objects-in-swift-using-copy.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to copy objects in Swift using copy() | System - free Swift example code",
  "desc": "How to copy objects in Swift using copy()",
  "link": "https://hackingwithswift.com/example-code/system/how-to-copy-objects-in-swift-using-copy",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>There are two main complex data types in Swift – objects and structs –&nbsp;and they do so many things similarly that you'd be forgiven for not being sure exactly where they differ. Well, one of the key areas is down to copying: two variables can point at the same object so that changing one changes them both, whereas if you tried that with structs you'd find that Swift creates a full copy so that changing the copy does not affect the original.</p>
<p>Having lots of objects point at the same data can be useful, but frequently you'll want to modify <em>copies</em> so that modifying one object doesn't have an effect on anything else. To make this work you need to do three things:</p>
<ul>
<li>Make your class conform to <code>NSCopying</code>. This isn't strictly required, but it makes your intent clear.</li>
<li>Implement the method <code>copy(with:)</code>, where the actual copying happens.</li>
<li>Call <code>copy()</code> on your object.</li>
</ul>
<p>Here's an example of a <code>Person</code> class that conforms fully to the <code>NSCopying</code> protocol:</p>
<pre class=" language-swift"><code class=" language-swift">    <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">NSObject</span><span class="token punctuation">,</span> <span class="token class-name">NSCopying</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> firstName<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> lastName<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> lastName<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> firstName
        <span class="token keyword">self</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lastName
        <span class="token keyword">self</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">copy</span><span class="token punctuation">(</span>with zone<span class="token punctuation">:</span> <span class="token class-name">NSZone</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">Any</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> copy <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">:</span> lastName<span class="token punctuation">,</span> age<span class="token punctuation">:</span> age<span class="token punctuation">)</span>
        <span class="token keyword">return</span> copy
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Note that <code>copy(with:)</code> is implemented by creating a new <code>Person</code> object using the current person's information.</p>
<p>With that done, you can test out your copying like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> paul <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">,</span> lastName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Hudson"</span></span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">36</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> sophie <span class="token operator">=</span> paul<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">Person</span>

sophie<span class="token punctuation">.</span>firstName <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Sophie"</span></span>
sophie<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">6</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">paul<span class="token punctuation">.</span>firstName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">paul<span class="token punctuation">.</span>lastName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">paul<span class="token punctuation">.</span>age</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">sophie<span class="token punctuation">.</span>firstName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">sophie<span class="token punctuation">.</span>lastName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">sophie<span class="token punctuation">.</span>age</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/observable-objects-environment-objects-and-published">Observable objects, environment objects, and @Published</a></li><li><a href="/example-code/language/what-is-copy-on-write">What is copy on write?</a></li><li><a href="/example-code/system/how-to-copy-text-to-the-clipboard-using-uipasteboard">How to copy text to the clipboard using UIPasteboard</a></li><li><a href="/example-code/uikit/how-to-disable-undo-redo-copy-and-paste-gestures-using-editinginteractionconfiguration">How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration</a></li><li><a href="/example-code/language/how-to-convert-json-into-swift-objects-using-codable">How to convert JSON into Swift objects using Codable</a></li></ul>
-->

:::

---

<TagLinks />