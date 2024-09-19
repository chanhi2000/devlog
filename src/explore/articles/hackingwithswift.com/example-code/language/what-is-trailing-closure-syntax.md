---
lang: ko-KR
title: "What is trailing closure syntax?"
description: "Article(s) > What is trailing closure syntax?"
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
      content: "Article(s) > What is trailing closure syntax?"
    - property: og:description
      content: "What is trailing closure syntax?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-trailing-closure-syntax.html
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
  "title": "What is trailing closure syntax? | Language - free Swift example code",
  "desc": "What is trailing closure syntax?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-trailing-closure-syntax",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>Trailing closure syntax is a little piece of syntactic sugar that makes particularly common code more pleasant to read and write. Many functions in iOS accept multiple parameters where the final parameter is a closure. For example, if you've done animation in iOS you'll be familiar with this method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token keyword">func</span> <span class="token function-definition function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token class-name">TimeInterval</span><span class="token punctuation">,</span> animations<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span></code></pre>
<p>That accepts an animation duration as its first parameter, and a closure containing animation instructions as its second.</p>
<p>One way of calling this method is like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> animations<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token keyword">in</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>
<p>While that is perfectly valid Swift code, it's harder to read than it ought to be. If a closure is the last parameter to a method, as seen here, Swift allows you write your code like this instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token keyword">in</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
<span class="token punctuation">}</span></code></pre>
<p>That's shorter, and avoids the double closing <code>})</code> code.</p>
<p>This functionality is available wherever a closure is the final parameter to a function. For testing purposes, we could write a simple one like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">greetThenRunClosure</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> closure<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">!"</span></span><span class="token punctuation">)</span>
    <span class="token function">closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That prints a message, then runs a closure. Because the closure is the final parameter to the function, we can call it using trailing closure syntax like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">greetThenRunClosure</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"The closure was run"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/whats-the-difference-between-leading-trailing-left-and-right-anchors">What’s the difference between leading, trailing, left, and right anchors?</a></li><li><a href="/example-code/language/what-is-a-closure">What is a closure?</a></li><li><a href="/example-code/language/what-is-an-escaping-closure">What is an escaping closure?</a></li><li><a href="/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value</a></li><li><a href="/example-code/language/whats-the-difference-between-a-function-and-a-closure">What’s the difference between a function and a closure?</a></li></ul>
-->

:::

---

<TagLinks />