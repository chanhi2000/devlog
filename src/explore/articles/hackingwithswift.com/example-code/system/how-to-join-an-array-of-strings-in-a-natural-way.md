---
lang: ko-KR
title: "How to join an array of strings in a natural way"
description: "Article(s) > How to join an array of strings in a natural way"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to join an array of strings in a natural way"
    - property: og:description
      content: "How to join an array of strings in a natural way"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-join-an-array-of-strings-in-a-natural-way.html
date: 2019-10-07
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
  "title": "How to join an array of strings in a natural way | System - free Swift example code",
  "desc": "How to join an array of strings in a natural way",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-join-an-array-of-strings-in-a-natural-way",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift provides the <code>ListFormatter</code> class as a built-in way of joining lists of strings into a single string so that the last item has “and” before it, like a natural English string. So, rather than just getting “A, B, C” you actually get “A, B and C” –&nbsp;it’s much more suitable for user interfaces.</p>
<p>Here’s some example code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Ash"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Brock"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Misty"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> joined1 <span class="token operator">=</span> <span class="token class-name">ListFormatter</span><span class="token punctuation">.</span><span class="token function">localizedString</span><span class="token punctuation">(</span>byJoining<span class="token punctuation">:</span> names<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>joined1<span class="token punctuation">)</span></code></pre>
<p>That will print “Ash, Brock and Misty”. (No, there’s no way of asking it for the Oxford comma, so “Ash, Brock, and Misty” isn’t possible.)</p>
<p>If you want to join the strings without using the “and” at the end, you should just use the <code>joined(separator:)</code> method, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> joined2 <span class="token operator">=</span> names<span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span>separator<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">", "</span></span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>joined2<span class="token punctuation">)</span></code></pre>
<p>That will print “Ash, Brock, Misty”.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string</a></li><li><a href="/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays</a></li><li><a href="/quick-start/swiftui/two-way-bindings-in-swiftui">Two-way bindings in SwiftUI</a></li><li><a href="/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space">How to adjust the way an image is fitted to its space</a></li><li><a href="/quick-start/swiftui/how-to-customize-the-way-links-are-opened">How to customize the way links are opened</a></li></ul>
-->

:::

---

<TagLinks />