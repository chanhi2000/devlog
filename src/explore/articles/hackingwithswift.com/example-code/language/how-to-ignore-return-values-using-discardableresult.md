---
lang: ko-KR
title: "How to ignore return values using @discardableResult"
description: "Article(s) > How to ignore return values using @discardableResult"
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
      content: "Article(s) > How to ignore return values using @discardableResult"
    - property: og:description
      content: "How to ignore return values using @discardableResult"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-ignore-return-values-using-discardableresult.html
date: 2022-03-23
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
  "title": "How to ignore return values using @discardableResult | Language - free Swift example code",
  "desc": "How to ignore return values using @discardableResult",
  "link": "https://hackingwithswift.com/example-code/language/how-to-ignore-return-values-using-discardableresult",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Many functions return values, but sometimes you don’t care what the return value is –&nbsp;you might want to ignore it sometimes, and use it other times.</p>
<p>As an example, Swift’s dictionaries have an <code>updateValue()</code> method that lets you change the value for a given key. If the key was found you’ll be sent back the previous value, but if the key wasn’t found you’ll get back nil. This makes it a nice way to update and check at the same time, if you need it:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Sophie"</span></span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"James"</span></span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">]</span>
scores<span class="token punctuation">.</span><span class="token function">updateValue</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"James"</span></span><span class="token punctuation">)</span></code></pre>
<p>That code will return 2, because it was the previous score for James:</p>
<p>The <code>updateValue()</code> method is marked with <code>@discardableResult</code> because it’s the kind of thing you might want to use for a while then stop using, or vice versa. Without that attribute in place you’d need to assign the result to underscore to silence the warning, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token omit keyword">_</span> <span class="token operator">=</span> scores<span class="token punctuation">.</span><span class="token function">updateValue</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"James"</span></span><span class="token punctuation">)</span></code></pre>
<p>You can use <code>@discardableResult</code> in your own functions. For example, you might write a logging function that accepts a string and optionally also a log level. This function will internally assemble a complete log line out of the message, log level, and current date, but it will also return that log message in case it needs to be used elsewhere.</p>
<p>In code it would look something like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">LogLevel</span><span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> trace<span class="token punctuation">,</span> debug<span class="token punctuation">,</span> info<span class="token punctuation">,</span> warn<span class="token punctuation">,</span> error<span class="token punctuation">,</span> fatal
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">log</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> message<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> level<span class="token punctuation">:</span> <span class="token class-name">LogLevel</span> <span class="token operator">=</span> <span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> logLine <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"[</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">level</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">] </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation"><span class="token class-name">Date</span><span class="token punctuation">.</span>now</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">message</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span>
    <span class="token function">print</span><span class="token punctuation">(</span>logLine<span class="token punctuation">)</span>
    <span class="token keyword">return</span> logLine
<span class="token punctuation">}</span>

<span class="token function">log</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span></code></pre>
<p>Although the result from <code>log()</code> is interesting and might be useful sometimes, most of the time users aren’t going to care so this is a sensible place to use <code>@discardableResult</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@discardableResult</span> <span class="token keyword">func</span> <span class="token function-definition function">discardableLog</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> message<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> level<span class="token punctuation">:</span> <span class="token class-name">LogLevel</span> <span class="token operator">=</span> <span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> logLine <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"[</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">level</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">] </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation"><span class="token class-name">Date</span><span class="token punctuation">.</span>now</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">message</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span>
    <span class="token function">print</span><span class="token punctuation">(</span>logLine<span class="token punctuation">)</span>
    <span class="token keyword">return</span> logLine
<span class="token punctuation">}</span></code></pre>
<p>If you expect folks to use the result most or nearly all of the time, it’s probably better to leave off <code>@discardableResult</code> and make them use <code>_</code> to silence the warning instead.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-ty">How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”</a></li><li><a href="/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return">How to move to the next UITextField when the user presses return</a></li><li><a href="/quick-start/swiftui/how-to-return-different-view-types">How to return different view types</a></li><li><a href="/example-code/language/what-is-the-never-return-type">What is the Never return type?</a></li><li><a href="/quick-start/concurrency/how-to-create-and-use-task-local-values">How to create and use task local values</a></li></ul>
-->

:::

---

<TagLinks />