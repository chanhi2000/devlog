---
lang: ko-KR
title: "What is a throwing function?"
description: "Article(s) > What is a throwing function?"
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
      content: "Article(s) > What is a throwing function?"
    - property: og:description
      content: "What is a throwing function?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-throwing-function.html
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
  "title": "What is a throwing function? | Language - free Swift example code",
  "desc": "What is a throwing function?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-throwing-function",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Throwing functions are those that will flag up errors if problems happen, and Swift requires you to handle those errors in your code.</p>
<p>To make a throwing function, just write <code>throws</code> before your function’s return value. You should define the error types you can throw, so users of this function know what to expect.</p>
<p>As an example, try adding this custom error enum to a playground:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">LoginErrors</span><span class="token punctuation">:</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> badUsername
    <span class="token keyword">case</span> badPassword
<span class="token punctuation">}</span></code></pre>
<p>We can now use that to create a throwing function called <code>login()</code>. If the username is empty we’ll throw <code>badUsername</code>, if the password is empty we’ll throw <code>badPassword</code>, and if both are non-empty we’ll return true:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> password<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> username<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token class-name">LoginErrors</span><span class="token punctuation">.</span>badUsername <span class="token punctuation">}</span>
    <span class="token keyword">if</span> password<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token class-name">LoginErrors</span><span class="token punctuation">.</span>badPassword <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>Because that function throws errors, it must be called using either <code>try</code>, <code>try?</code>, or <code>try!</code>.</p>
<p>There’s a subtle difference between throwing functions and functions that return optionals, but it’s usually a better idea to use throwing functions if there might be several different reasons why the function failed.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-call-async-throwing-functions">How to call async throwing functions</a></li><li><a href="/example-code/testing/how-to-test-throwing-functions">How to test throwing functions</a></li><li><a href="/quick-start/concurrency/what-is-an-asynchronous-function">What is an asynchronous function?</a></li><li><a href="/quick-start/concurrency/what-is-a-synchronous-function">What is a synchronous function?</a></li><li><a href="/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a></li></ul>
-->

:::

---

<TagLinks />