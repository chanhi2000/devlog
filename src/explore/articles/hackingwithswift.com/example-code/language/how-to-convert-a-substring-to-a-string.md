---
lang: ko-KR
title: "How to convert a Substring to a String"
description: "Article(s) > How to convert a Substring to a String"
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
      content: "Article(s) > How to convert a Substring to a String"
    - property: og:description
      content: "How to convert a Substring to a String"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-a-substring-to-a-string.html
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
  "title": "How to convert a Substring to a String | Language - free Swift example code",
  "desc": "How to convert a Substring to a String",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-a-substring-to-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift has a dedicated <code>Substring</code> type (<code>String.SubSequence</code>) that is designed to hold slices of strings, which is a performance optimization: when you store part of a string in a different variable, Swift can simply point the substring at the parent string rather than copy all the data.</p>
<p>However, while substrings can be used in many of the same ways as regular strings, they aren’t the same – if you have a function that accepts a <code>String</code> as a parameter, you simply cannot send it a <code>Substring</code>.</p>
<p>To fix this, you can wrap your substring in a <code>String</code> initializer like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> quote <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"The revolution will be Swift"</span></span>
<span class="token keyword">let</span> substring <span class="token operator">=</span> quote<span class="token punctuation">.</span><span class="token function">dropFirst</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> realString <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter</a></li><li><a href="/example-code/language/how-to-convert-data-to-a-string">How to convert Data to a String</a></li><li><a href="/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert">How to convert a CGPoint in one UIView to another view using convert()</a></li><li><a href="/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string">How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<string>’”</string></a></li><li><a href="/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor</a></li></ul>
-->

:::

---

<TagLinks />