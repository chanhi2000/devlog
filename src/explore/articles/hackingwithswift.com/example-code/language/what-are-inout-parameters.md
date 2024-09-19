---
lang: ko-KR
title: "What are inout parameters?"
description: "Article(s) > What are inout parameters?"
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
      content: "Article(s) > What are inout parameters?"
    - property: og:description
      content: "What are inout parameters?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-inout-parameters.html
date: 2019-10-18
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
  "title": "What are inout parameters? | Language - free Swift example code",
  "desc": "What are inout parameters?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-inout-parameters",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>When you pass value types as parameters into a function, they are constants and so can’t be modified. Sometimes it would be convenient to change this so you <em>can</em> modify the values, and that’s what <code>inout</code> does for us: it lets us modify parameters inside a function, and have those changes persist <em>outside</em> the function.</p>
<p>For example, we could write a function that accepts a number and doubles it:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">double</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> number<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    number <span class="token operator">*=</span> <span class="token number">2</span>
<span class="token punctuation">}</span></code></pre>
<p>That doesn’t return a value –&nbsp;it modifies the value that was passed in directly.</p>
<p>When it comes to <em>calling</em> functions with <code>inout</code> parameters, Swift has two rules: we must pass in variables, and we also need to use <code>&amp;</code> before the parameter name to acknowledge that it might be changed.</p>
<p>So, we would call <code>double()</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">5</span>
<span class="token function">double</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>number<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span></code></pre>
<p>That will print 10.</p>
<p><code>inout</code> parameters are more common than you might realize. For example, if you use <code>+=</code> to append one string to another, it uses <code>inout</code> to modify the string in place.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-make-function-parameters-isolated">How to make function parameters isolated</a></li><li><a href="/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations</a></li><li><a href="/quick-start/swiftui/what-is-the-gesturestate-property-wrapper">What is the @GestureState property wrapper?</a></li><li><a href="/quick-start/swiftui/how-to-create-a-custom-layout-using-the-layout-protocol">How to create a custom layout using the Layout protocol</a></li><li><a href="/example-code/language/how-to-conform-to-the-hashable-protocol">How to conform to the Hashable protocol</a></li></ul>
-->

:::

---

<TagLinks />