---
lang: ko-KR
title: "How to use compactMap() to transform an array"
description: "Article(s) > How to use compactMap() to transform an array"
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
      content: "Article(s) > How to use compactMap() to transform an array"
    - property: og:description
      content: "How to use compactMap() to transform an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-compactmap-to-transform-an-array.html
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
  "title": "How to use compactMap() to transform an array | Language - free Swift example code",
  "desc": "How to use compactMap() to transform an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-compactmap-to-transform-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>The <code>compactMap()</code> method lets us transform the elements of an array just like <code>map()</code> does, except once the transformation completes an extra step happens: all optionals get unwrapped, and any nil values get discarded.</p>
<p>This is useful whenever you have an array of things you need to convert, but the conversion process might fail.</p>
<p>For example, consider this array of strings:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"1"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"2"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Fish"</span></span><span class="token punctuation">]</span></code></pre>
<p>Two of those hold a number, but one does not. We can use <code>compactMap()</code> to convert those to integers, because creating an <code>Int</code> from a <code>String</code> is a failable initializer –&nbsp;it returns an <code>Int?</code> because you might have passed an invalid number. </p>
<p><code>compactMap()</code> will read those optional integers, unwrap all the optionals for us, then discard any items that returned <code>nil</code>, all in one line of code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> integers <span class="token operator">=</span> numbers<span class="token punctuation">.</span>compactMap <span class="token punctuation">{</span> <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></code></pre>
<p>When that code runs, <code>integers</code> will hold an array of <code>Int</code> rather than an array of <code>Int?</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-use-map-to-transform-an-array">How to use map() to transform an array</a></li><li><a href="/example-code/language/how-to-transform-a-dictionary-using-mapvalues">How to transform a dictionary using mapValues()</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array</a></li></ul>
-->

:::

---

<TagLinks />