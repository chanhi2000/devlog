---
lang: ko-KR
title: "How to make custom types from strings using ExpressibleByStringLiteral"
description: "Article(s) > How to make custom types from strings using ExpressibleByStringLiteral"
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
      content: "Article(s) > How to make custom types from strings using ExpressibleByStringLiteral"
    - property: og:description
      content: "How to make custom types from strings using ExpressibleByStringLiteral"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-make-custom-types-from-strings-using-expressiblebystringliteral.html
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
  "title": "How to make custom types from strings using ExpressibleByStringLiteral | Language - free Swift example code",
  "desc": "How to make custom types from strings using ExpressibleByStringLiteral",
  "link": "https://hackingwithswift.com/example-code/language/how-to-make-custom-types-from-strings-using-expressiblebystringliteral",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift’s <code>ExpressibleByStringLiteral</code> protocol lets us create any type directly from a string –&nbsp;as long as Swift understands what type you mean, you can create whatever you want.</p>
<p>For example, if you regularly hard-code URLs and are tired of force unwrapping them when you know they are definitely correct, you can make <code>URL</code> conform to <code>ExpressibleByStringLiteral</code> so that URLs can be created directly from strings:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token constant">URL</span><span class="token punctuation">:</span> <span class="token class-name">ExpressibleByStringLiteral</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">init</span><span class="token punctuation">(</span>stringLiteral value<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span> <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> value<span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that extension in place you can now write code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"https://www.hackingwithswift.com"</span></span>
<span class="token function">print</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>absoluteString<span class="token punctuation">)</span></code></pre>
<p>Notice that I’ve clearly marked <code>url</code> as being of type <code>URL</code> so that Swift doesn’t think it’s a regular string.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced">How to safely use reference types inside value types with isKnownUniquelyReferenced()</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/strings/how-to-concatenate-strings-to-make-one-joined-string">How to concatenate strings to make one joined string</a></li><li><a href="/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li></ul>
-->

:::

---

<TagLinks />