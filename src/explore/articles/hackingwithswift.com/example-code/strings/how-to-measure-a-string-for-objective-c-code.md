---
lang: ko-KR
title: "How to measure a string for Objective-C code"
description: "Article(s) > How to measure a string for Objective-C code"
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
      content: "Article(s) > How to measure a string for Objective-C code"
    - property: og:description
      content: "How to measure a string for Objective-C code"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-measure-a-string-for-objective-c-code.html
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
  "title": "How to measure a string for Objective-C code | Strings - free Swift example code",
  "desc": "How to measure a string for Objective-C code",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-measure-a-string-for-objective-c-code",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Regular Swift code can treat strings like other kinds of sequence, so you can use its <code>count</code> property to read the number of characters it contains:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Hello, world"</span></span>
<span class="token keyword">let</span> count <span class="token operator">=</span> str<span class="token punctuation">.</span>count</code></pre>
<p>However, this falls down when you need to work with Objective-C code, for example <code>NSRegularExpression</code>, <code>NSDataDetector</code>, <code>UITextChecker</code>, and more –&nbsp;they use UTF-16 rather than Swift’s extended grapheme clusters, and so if you use <code>count</code> with them you’re likely to miss characters.</p>
<p>Instead, the correct solution is to measure your string’s length using <code>utf16.count</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> input <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"This is a test with the URL https://www.hackingwithswift.com to be detected."</span></span>
<span class="token keyword">let</span> detector <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">!</span> <span class="token class-name">NSDataDetector</span><span class="token punctuation">(</span>types<span class="token punctuation">:</span> <span class="token class-name">NSTextCheckingResult</span><span class="token punctuation">.</span><span class="token class-name">CheckingType</span><span class="token punctuation">.</span>link<span class="token punctuation">.</span>rawValue<span class="token punctuation">)</span>
<span class="token keyword">let</span> matches <span class="token operator">=</span> detector<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> input<span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> range<span class="token punctuation">:</span> <span class="token class-name">NSRange</span><span class="token punctuation">(</span>location<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">:</span> input<span class="token punctuation">.</span>utf16<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>That guarantees your string’s length is reported fully when interacting with Objective-C code.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-create-an-objective-c-bridging-header-to-use-code-in-swift">How to create an Objective-C bridging header to use code in Swift</a></li><li><a href="/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”</a></li><li><a href="/example-code/testing/how-to-write-performance-tests-using-measure">How to write performance tests using measure()</a></li><li><a href="/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />