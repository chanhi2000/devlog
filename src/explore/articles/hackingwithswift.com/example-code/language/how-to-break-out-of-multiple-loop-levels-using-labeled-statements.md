---
lang: ko-KR
title: "How to break out of multiple loop levels using labeled statements"
description: "Article(s) > How to break out of multiple loop levels using labeled statements"
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
      content: "Article(s) > How to break out of multiple loop levels using labeled statements"
    - property: og:description
      content: "How to break out of multiple loop levels using labeled statements"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-break-out-of-multiple-loop-levels-using-labeled-statements.html
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
  "title": "How to break out of multiple loop levels using labeled statements | Language - free Swift example code",
  "desc": "How to break out of multiple loop levels using labeled statements",
  "link": "https://hackingwithswift.com/example-code/language/how-to-break-out-of-multiple-loop-levels-using-labeled-statements",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift has a built-in <code>break</code> keyword that escapes the current loop you’re in, but what happens if you’re in two loops or more and want to break out of them all?</p>
<p>Swift’s labeled statements are designed to solve this problem: they let you exit any number of loops or conditions, so execution picks up directly after the block you labeled.</p>
<p>For example, consider this pair of loops that will find the first number that, when squared, makes 144:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">...</span><span class="token number">100</span>

<span class="token keyword">for</span> number1 <span class="token keyword">in</span> numbers <span class="token punctuation">{</span>
    <span class="token keyword">for</span> number2 <span class="token keyword">in</span> numbers <span class="token punctuation">{</span>
        <span class="token keyword">if</span> number1 <span class="token operator">==</span> number2 <span class="token operator">&amp;&amp;</span> number1 <span class="token operator">*</span> number2 <span class="token operator">==</span> <span class="token number">144</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Square found: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">number1</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>As soon as we’ve found that square, we can stop looking. The problem is, a regular <code>break</code> won’t work here because it will exit only the inner loop –&nbsp;the outer loop will keep counting 13, 14, 15, and so on up to 100. However, if we add a label to the outer loop we can break out of both loops at once, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token label important">outerLoop</span><span class="token punctuation">:</span> <span class="token keyword">for</span> number1 <span class="token keyword">in</span> numbers <span class="token punctuation">{</span>
    <span class="token keyword">for</span> number2 <span class="token keyword">in</span> numbers <span class="token punctuation">{</span>
        <span class="token keyword">if</span> number1 <span class="token operator">==</span> number2 <span class="token operator">&amp;&amp;</span> number1 <span class="token operator">*</span> number2 <span class="token operator">==</span> <span class="token number">144</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Square found: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">number1</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token label important"> outerLoop</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Notice the <code>outerLoop:</code> before the <code>for number1</code> loop, and also the matching <code>break outerLoop</code> –&nbsp;that will cause both loops to exit as soon as the correct number is found.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-ty">How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”</a></li><li><a href="/example-code/calayer/how-to-make-a-uiview-fade-out">How to make a UIView fade out</a></li><li><a href="/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out">How to get bordered buttons that stand out</a></li><li><a href="/example-code/system/how-to-spell-out-numbers-using-numberformatters-spellout-style">How to spell out numbers using NumberFormatter's spellOut style</a></li><li><a href="/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach">How to create views in a loop using ForEach</a></li></ul>
-->

:::

---

<TagLinks />