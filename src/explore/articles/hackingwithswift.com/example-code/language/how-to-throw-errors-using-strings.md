---
lang: ko-KR
title: "How to throw errors using strings"
description: "Article(s) > How to throw errors using strings"
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
      content: "Article(s) > How to throw errors using strings"
    - property: og:description
      content: "How to throw errors using strings"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-throw-errors-using-strings.html
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
  "title": "How to throw errors using strings | Language - free Swift example code",
  "desc": "How to throw errors using strings",
  "link": "https://hackingwithswift.com/example-code/language/how-to-throw-errors-using-strings",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Throwing functions in Swift are the main way we have of signaling that an operation failed, but sometimes it can be annoying to define a whole new error enum just to report a simple failure.</p>
<p>With a small extension to <code>String</code> you can make the whole process easier:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token class-name">LocalizedError</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">var</span> errorDescription<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">self</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that change you can now throw strings as errors, and they work just like regular errors. For example, you can create a throwing function like this one:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">doDangerousThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token string-literal"><span class="token string">"I'm sorry, Dave, I can't do that."</span></span>
<span class="token punctuation">}</span></code></pre>
<p>Then attempt to run it and print any errors that are thrown, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token function">doDangerousThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>This only really works for errors that have one case, because you can’t match specific string errors.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-create-continuations-that-can-throw-errors">How to create continuations that can throw errors</a></li><li><a href="/example-code/language/how-to-add-warnings-and-errors-to-your-code-using-warning-and-error">How to add warnings and errors to your code using #warning and #error</a></li><li><a href="/quick-start/swiftui/common-swiftui-errors-and-how-to-fix-them">Common SwiftUI errors and how to fix them</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/strings/how-to-concatenate-strings-to-make-one-joined-string">How to concatenate strings to make one joined string</a></li></ul>
-->

:::

---

<TagLinks />