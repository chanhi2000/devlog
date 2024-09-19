---
lang: ko-KR
title: "What is the Result type?"
description: "Article(s) > What is the Result type?"
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
      content: "Article(s) > What is the Result type?"
    - property: og:description
      content: "What is the Result type?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-the-result-type.html
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
  "title": "What is the Result type? | Language - free Swift example code",
  "desc": "What is the Result type?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-the-result-type",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p style="margin: 0; margin-bottom: 20px;"><a href="/about">Paul Hudson</a> &nbsp;&nbsp; <i class="fab fa-twitter" aria-hidden="true" style="color: #4099ff"></i> <a href="https://twitter.com/twostraws" target="_blank">@twostraws</a> &nbsp;&nbsp; <time itemprop="dateModified" datetime="2019-05-28T20:41:20+00:00">May 28th 2019</time><meta itemprop="datePublished" content="2019-05-28T20:41:20+00:00"></p>
<p>The <code>Result</code> type lets us encapsulate the success or failure of a method call in a single value, while also storing the contents of the successful return or the type of failure that occurred. More importantly, <code>Result</code> only stores one of these at a time: it will either be a success or a failure.</p>
<p>For example, we could use <code>Result</code> to handle networking. First we’d create a NetworkError` enum containing all the things that might go wrong:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">NetworkError</span><span class="token punctuation">:</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> badURL
<span class="token punctuation">}</span></code></pre>
<p>Next we’d write a method that calls a completion handler with some sort of <code>Result</code>. In this instance we’re going to return the number of unread messages a user has in their inbox, or a <code>NetworkError</code> if something went wrong:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">fetchUnreadCount</span><span class="token punctuation">(</span>from urlString<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> completionHandler<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">Int</span><span class="token punctuation">,</span> <span class="token class-name">NetworkError</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> urlString<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">completionHandler</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">failure</span><span class="token punctuation">(</span><span class="token punctuation">.</span>badURL<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// complicated networking code here</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Fetching </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">url<span class="token punctuation">.</span>absoluteString</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">..."</span></span><span class="token punctuation">)</span>
    <span class="token function">completionHandler</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p><strong>Tip:</strong> That code uses a completion handler rather than a simple return type because networking code will block the main thread –&nbsp;we want the method to return immediately and perform any complicated networking code in the background.</p>
<p>We can now call that method with a URL and evaluate what gets sent back. Remember. this will either be a success (sending us back the unread messages count), or a failure (sending us back what went wrong). Here’s the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">fetchUnreadCount</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://www.hackingwithswift.com"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> result <span class="token keyword">in</span>
    <span class="token keyword">switch</span> result <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token keyword">let</span> count<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> unread messages."</span></span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">failure</span><span class="token punctuation">(</span><span class="token keyword">let</span> error<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-get-a-result-from-a-task">How to get a Result from a task</a></li><li><a href="/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group</a></li><li><a href="/quick-start/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-ty">How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”</a></li><li><a href="/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type">How to fix “Cannot convert value of type '() -&gt; ()' to expected argument type '() -&gt; _’”</a></li><li><a href="/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text">How to fix “Cannot convert value of type 'String' to expected argument type 'Text'"</a></li></ul>
-->

:::

---

<TagLinks />