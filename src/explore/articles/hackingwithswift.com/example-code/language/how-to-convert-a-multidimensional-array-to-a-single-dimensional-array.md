---
lang: ko-KR
title: "How to convert a multidimensional array to a single-dimensional array"
description: "Article(s) > How to convert a multidimensional array to a single-dimensional array"
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
      content: "Article(s) > How to convert a multidimensional array to a single-dimensional array"
    - property: og:description
      content: "How to convert a multidimensional array to a single-dimensional array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array.html
date: 2019-10-11
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
  "title": "How to convert a multidimensional array to a single-dimensional array | Language - free Swift example code",
  "desc": "How to convert a multidimensional array to a single-dimensional array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you have an array of arrays –&nbsp;for example, an array of an array of integers –&nbsp;you can convert it to a single, flat array by using the <code>joined()</code> method. Because Swift sends back an optimized type (<code>FlattenSequence&lt;[[YourType]]&gt;</code>, in this case), you might also want to add an array conversion for easier use.</p>
<p>For example, here’s an array of arrays of strings, such as you might find if you had one array for each class of students, grouped into a larger array to represent the whole school:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> classes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Ash"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Brock"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Misty"</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Gloria"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Piper"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Suzanne"</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Picard"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Riker"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Troi"</span></span><span class="token punctuation">]</span>
<span class="token punctuation">]</span></code></pre>
<p>We can use <code>joined()</code> to get a single array of names like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> allStudents <span class="token operator">=</span> classes<span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>As noted, that will make <code>allStudents</code> an instance of <code>FlattenSequence&lt;[[String]]&gt;</code> rather than an array, so if you need to send it back from a method or want to subscript it you should convert it to an array first, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> allStudents <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>classes<span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>That will set <code>allStudents</code> to an array containing Ash, Brock, Misty, Gloria, Piper, Suzanne, Picard, Riker, and Troi.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string</a></li><li><a href="/example-code/language/how-to-use-reduce-to-condense-an-array-into-a-single-value">How to use reduce() to condense an array into a single value</a></li><li><a href="/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view">How to show multiple alerts in a single view</a></li><li><a href="/example-code/strings/how-to-read-a-single-character-from-a-string">How to read a single character from a string</a></li><li><a href="/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert">How to convert a CGPoint in one UIView to another view using convert()</a></li></ul>
-->

:::

---

<TagLinks />