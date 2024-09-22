---
lang: ko-KR
title: "How to convert Data to a String"
description: "Article(s) > How to convert Data to a String"
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
      content: "Article(s) > How to convert Data to a String"
    - property: og:description
      content: "How to convert Data to a String"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-data-to-a-string.html
date: 2024-03-16
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
  "title": "How to convert Data to a String | Language - free Swift example code",
  "desc": "How to convert Data to a String",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-data-to-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you know an instance of <code>Data</code> contains a <code>String</code> and you want to convert it, you can use the <code>String(decoding:as:)</code> initializer, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>decoding<span class="token punctuation">:</span> data<span class="token punctuation">,</span> <span class="token keyword">as</span><span class="token punctuation">:</span> UTF8<span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span></code></pre>
<p>If the <code>Data</code> instance can’t be converted to a UTF-8 string, you’ll might be sent back an empty string, but Swift might replace any bad characters with the Unicode replacement character. You do need to know which format is used to store the string, but UTF-8 is usually the best to go with.</p>
<p>If you're unsure about whether the string can safely be converted or not, there's a failable initializer you should use instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> data<span class="token punctuation">,</span> encoding<span class="token punctuation">:</span> <span class="token punctuation">.</span>utf8<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Successfully decoded: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">str</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Using this optional approach avoids any problems around decoding invalid strings – if it succeeds you can be sure the string that was loaded is intact and correct.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter</a></li><li><a href="/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions</a></li><li><a href="/example-code/language/how-to-convert-a-string-to-data">How to convert a String to Data</a></li><li><a href="/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert">How to convert a CGPoint in one UIView to another view using convert()</a></li></ul>
-->

:::

---

<TagLinks />