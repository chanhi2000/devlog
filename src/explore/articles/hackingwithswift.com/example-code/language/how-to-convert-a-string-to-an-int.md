---
lang: ko-KR
title: "How to convert a string to a Int"
description: "Article(s) > How to convert a string to a Int"
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
      content: "Article(s) > How to convert a string to a Int"
    - property: og:description
      content: "How to convert a string to a Int"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-a-string-to-an-int.html
date: 2019-09-19
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
  "title": "How to convert a string to a Int | Language - free Swift example code",
  "desc": "How to convert a string to a Int",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-a-string-to-an-int",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<VidStack src="youtube/48QScxC1lBQ" />

<!-- TODO: 작성 -->

<!-- 
<p>If you have an integer hiding inside a string, you can convert between the two just by using the integer's initializer, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> myString1 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"556"</span></span>
<span class="token keyword">let</span> myInt1 <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">(</span>myString1<span class="token punctuation">)</span></code></pre>
<p>Because strings might contain something that isn’t a number –&nbsp;e.g. “Fish” rather than “556” – the <code>Int</code> initializer will return an optional integer, so if you want to force a value you should use nil coalescing like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> myInt2 <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">(</span>myString<span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token number">0</span></code></pre>
<p>That means “attempt to convert <code>myString</code> to an integer, but if the conversion failed because it contained something invalid then use 0 instead.”</p>
<p>As with other data types (<code>Float</code> and <code>Double</code>) it’s also possible to convert by using <code>NSString</code> if you’re desperate:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> myInt3 <span class="token operator">=</span> <span class="token punctuation">(</span>myString1 <span class="token keyword">as</span> <span class="token class-name">NSString</span><span class="token punctuation">)</span><span class="token punctuation">.</span>integerValue</code></pre>
<p>Ideally, though, that shouldn’t needed.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-convert-an-int-to-a-string">How to convert an Int to a String</a></li><li><a href="/example-code/language/how-to-convert-a-float-to-an-int">How to convert a float to an int</a></li><li><a href="/example-code/language/how-to-convert-an-int-to-a-float">How to convert an int to a float</a></li><li><a href="/example-code/language/how-to-multiply-an-int-and-a-double">How to multiply an int and a double</a></li><li><a href="/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter</a></li></ul>
-->

:::

---

<TagLinks />