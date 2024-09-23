---
lang: ko-KR
title: "How to use @available to deprecate old APIs"
description: "Article(s) > How to use @available to deprecate old APIs"
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
      content: "Article(s) > How to use @available to deprecate old APIs"
    - property: og:description
      content: "How to use @available to deprecate old APIs"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-available-to-deprecate-old-apis.html
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
  "title": "How to use @available to deprecate old APIs | Language - free Swift example code",
  "desc": "How to use @available to deprecate old APIs",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-available-to-deprecate-old-apis",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p><a href="/example-code/language/how-to-use-available-to-check-for-api-availability">Swift availability checking</a> is most commonly used to mark sections of code that should target specific versions of iOS or other platforms. However, it’s also useful when you make Swift APIs for others to use, because you can use it to mark certain calls as deprecated or even obsoleted as needed.</p>
<p>Let’s start with a simple example: if you have a function that used to parse some data, but now you want users to stop calling it. To do that, use <code>@available</code> with the <code>deprecated</code> flag, passing in the message you want to show:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@available</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span> deprecated<span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Parse your data by hand instead"</span></span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function-definition function">parseData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></code></pre>
<p>If you are <em>renaming</em> the API – for example the way one usage of <code>flatMap()</code> became <code>compactMap()</code> in Swift 4.1 –&nbsp;you can pass the new function name to the <code>renamed</code> flag like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@available</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span> deprecated<span class="token punctuation">,</span> renamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"loadData"</span></span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function-definition function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></code></pre>
<p>This will cause Xcode to generate a fix-it automatically –&nbsp;users can click Fix to have Xcode perform the rename for them.</p>
<p>Deprecated APIs generate warnings but can still be called. If you want to <em>obsolete</em> an API –&nbsp;stop it from being called entirely –&nbsp;you should use the <code>obsoleted</code> flag instead, specifying the minimum Swift version where it is no longer available:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@available</span><span class="token punctuation">(</span>swift<span class="token punctuation">,</span> obsoleted<span class="token punctuation">:</span> <span class="token number">4.1</span><span class="token punctuation">,</span> renamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"attemptConnection"</span></span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function-definition function">testConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></code></pre>
<p>You can even combine <code>deprecated</code> and <code>obsoleted</code> together if you want:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@available</span><span class="token punctuation">(</span>swift<span class="token punctuation">,</span> deprecated<span class="token punctuation">:</span> <span class="token number">4.0</span><span class="token punctuation">,</span> obsoleted<span class="token punctuation">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"This will be removed in v5.0; please migrate to a different API."</span></span><span class="token punctuation">)</span></code></pre>
<p>Finally, there’s an <code>introduced</code> flag that lets you control when specific API was introduced, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@available</span><span class="token punctuation">(</span>swift<span class="token punctuation">,</span> introduced<span class="token punctuation">:</span> <span class="token number">4.2</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function-definition function">loadUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></code></pre>
<p>Using <code>@available</code> in this way lets your APIs behave just like Apple’s own – Xcode will draw red lines through deprecated methods, issue compile warnings and errors, and even automatically generate fix-its as needed.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport()</a></li><li><a href="/example-code/language/how-to-use-available-to-check-for-api-availability">How to use #available to check for API availability</a></li><li><a href="/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth()</a></li><li><a href="/quick-start/swiftui/how-to-tell-the-user-that-no-content-is-available">How to tell the user that no content is available</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li></ul>
-->

:::

---

<TagLinks />