---
lang: ko-KR
title: "How to delay execution of code using the defer keyword"
description: "Article(s) > How to delay execution of code using the defer keyword"
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
      content: "Article(s) > How to delay execution of code using the defer keyword"
    - property: og:description
      content: "How to delay execution of code using the defer keyword"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword.html
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
  "title": "How to delay execution of code using the defer keyword | Language - free Swift example code",
  "desc": "How to delay execution of code using the defer keyword",
  "link": "https://hackingwithswift.com/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>defer</code> keyword is new in Swift 2 and lets you schedule some code to be run at a later date. That later date is when your code exits its current scope, which might be when a function returns or at the end of a loop, for example.</p>
<p>If you've used other programming languages, <code>defer</code> will seem similar to <code>try/finally</code>. Any code you defer will run no matter what, even if you throw an exception.</p>
<p>In the example code below, the <code>closeFile()</code> function will get called no matter how the <code>writeLog()</code> function ends:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">writeLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token function">openFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> <span class="token punctuation">{</span> <span class="token function">closeFile</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token keyword">let</span> hardwareStatus <span class="token operator">=</span> <span class="token function">fetchHardwareStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">guard</span> hardwareStatus <span class="token operator">!=</span> <span class="token string-literal"><span class="token string">"disaster"</span></span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
    file<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>hardwareStatus<span class="token punctuation">)</span>

    <span class="token keyword">let</span> softwareStatus <span class="token operator">=</span> <span class="token function">fetchSoftwareStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">guard</span> softwareStatus <span class="token operator">!=</span> <span class="token string-literal"><span class="token string">"disaster"</span></span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
    file<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>softwareStatus<span class="token punctuation">)</span>

    <span class="token keyword">let</span> networkStatus <span class="token operator">=</span> <span class="token function">fetchNetworkStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">guard</span> networkStatus <span class="token operator">!=</span> <span class="token string-literal"><span class="token string">"disaster"</span></span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
    file<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>networkStatus<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/measuring-execution-speed-using-cfabsolutetimegetcurrent">Measuring execution speed using CFAbsoluteTimeGetCurrent()</a></li><li><a href="/example-code/system/how-to-run-code-after-a-delay-using-asyncafter-and-perform">How to run code after a delay using asyncAfter() and perform()</a></li><li><a href="/quick-start/swiftui/how-to-delay-an-animation">How to delay an animation</a></li><li><a href="/example-code/language/how-to-use-the-rethrows-keyword">How to use the rethrows keyword</a></li><li><a href="/example-code/language/what-does-the-open-keyword-do">What does the open keyword do?</a></li></ul>
-->

:::

---

<TagLinks />