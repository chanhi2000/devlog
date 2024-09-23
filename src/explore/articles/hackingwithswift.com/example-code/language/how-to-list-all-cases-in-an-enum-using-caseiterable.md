---
lang: ko-KR
title: "How to list all cases in an enum using CaseIterable"
description: "Article(s) > How to list all cases in an enum using CaseIterable"
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
      content: "Article(s) > How to list all cases in an enum using CaseIterable"
    - property: og:description
      content: "How to list all cases in an enum using CaseIterable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-list-all-cases-in-an-enum-using-caseiterable.html
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
  "title": "How to list all cases in an enum using CaseIterable | Language - free Swift example code",
  "desc": "How to list all cases in an enum using CaseIterable",
  "link": "https://hackingwithswift.com/example-code/language/how-to-list-all-cases-in-an-enum-using-caseiterable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift has a <code>CaseIterable</code> protocol that automatically generates an array property of all cases in an enum. To enable it, all you need to do is make your enum conform to the <code>CaseIterable</code> protocol and at compile time Swift will automatically generate an <code>allCases</code> property that is an array of all your enum’s cases, in the order you defined them.</p>
<p>For example, this creates an enum of colors and asks Swift to automatically generate an <code>allCases</code> array for it:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">Color</span><span class="token punctuation">:</span> <span class="token class-name">CaseIterable</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue
<span class="token punctuation">}</span></code></pre>
<p>You can then use that property as a regular array –&nbsp;it will be a <code>[Color]</code> given the code above, so we could print each case like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> color <span class="token keyword">in</span> <span class="token class-name">Color</span><span class="token punctuation">.</span>allCases <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"My favorite color is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">color</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>This automatic synthesis of <code>allCases</code> will only take place for enums that do not have associated values. Adding those automatically wouldn’t make sense, however if you want you can add it yourself:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">Car</span><span class="token punctuation">:</span> <span class="token class-name">CaseIterable</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">var</span> allCases<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Car</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>ford<span class="token punctuation">,</span> <span class="token punctuation">.</span>toyota<span class="token punctuation">,</span> <span class="token punctuation">.</span>jaguar<span class="token punctuation">,</span> <span class="token punctuation">.</span>bmw<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token function">porsche</span><span class="token punctuation">(</span>convertible<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token function">porsche</span><span class="token punctuation">(</span>convertible<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">case</span> ford<span class="token punctuation">,</span> toyota<span class="token punctuation">,</span> jaguar<span class="token punctuation">,</span> bmw
    <span class="token keyword">case</span> <span class="token function">porsche</span><span class="token punctuation">(</span>convertible<span class="token punctuation">:</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Swift can’t synthesize an <code>allCases</code> property if any enum cases are marked unavailable. So, if you need <code>allCases</code> then you’ll need to add it yourself, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">Direction</span><span class="token punctuation">:</span> <span class="token class-name">CaseIterable</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">var</span> allCases<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Direction</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>north<span class="token punctuation">,</span> <span class="token punctuation">.</span>south<span class="token punctuation">,</span> <span class="token punctuation">.</span>east<span class="token punctuation">,</span> <span class="token punctuation">.</span>west<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">case</span> north<span class="token punctuation">,</span> south<span class="token punctuation">,</span> east<span class="token punctuation">,</span> west

    <span class="token attribute atrule">@available</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span> unavailable<span class="token punctuation">)</span>
    <span class="token keyword">case</span> all
<span class="token punctuation">}</span></code></pre>
<p><strong>Note:</strong> You must add <code>CaseIterable</code> to the original declaration of your enum rather than an extension in order for the <code>allCases</code> array to be synthesized – you can’t use extensions to retroactively make existing enums conform to the protocol.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/language/what-is-an-enum">What is an enum?</a></li><li><a href="/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition</a></li><li><a href="/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array</a></li><li><a href="/example-code/language/checking-all-array-elements-match-a-condition-allsatisfy">Checking all array elements match a condition: allSatisfy()</a></li></ul>
-->

:::

---

<TagLinks />