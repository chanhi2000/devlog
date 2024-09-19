---
lang: ko-KR
title: "How to use the rethrows keyword"
description: "Article(s) > How to use the rethrows keyword"
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
      content: "Article(s) > How to use the rethrows keyword"
    - property: og:description
      content: "How to use the rethrows keyword"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-the-rethrows-keyword.html
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
  "title": "How to use the rethrows keyword | Language - free Swift example code",
  "desc": "How to use the rethrows keyword",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-the-rethrows-keyword",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>rethrows</code> keyword is used when you write a function (let’s call it A) that accepts a throwing function as a parameter (let’s call it B). If function B throws errors, then the function A becomes a throwing function too, but if function B doesn’t throw errors then neither does function A.</p>
<p>First, here’s a simple function that accepts a username and always throws an error because biometric authentication isn’t available:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">authenticateBiometrically</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> user<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token string-literal"><span class="token string">"Failed"</span></span>
<span class="token punctuation">}</span></code></pre>
<p>That little <code>String</code> extension allows us to throw strings as errors, which saves a little time.</p>
<p>Now here’s a second function that doesn’t throw:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">authenticateByPassword</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> user<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>So, biometric authentication (Touch ID, Face ID) always throws an error, and password authentication always works.</p>
<p>Now we want to write an authentication function that can either run biometric authentication or password authentication depending on what its given. Because one of the two possibilities can throw, we mark its parameter as throwing, like this: <code>method: (String) throws -&gt; Bool</code>.</p>
<p>What we’re saying is that this function <em>might</em> be able to throw, not that it <em>must</em> throw.</p>
<p>Try adding this function now:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">authenticateUser</span><span class="token punctuation">(</span>method<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"twostraws"</span></span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Success!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>We can now call that function like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token function">authenticateUser</span><span class="token punctuation">(</span>method<span class="token punctuation">:</span> authenticateByPassword<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"D'oh!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Now for the important part: we both know that <code>authenticateByPassword()</code> doesn’t throw errors, and Swift can see that too, so if we change the definition of <code>authenticateUser</code> from <em>throws</em> to <em>rethrows</em> Swift will no longer require us to use <code>do</code>/<code>catch</code> when passing it a non-throwing parameter.</p>
<p>Change the function to this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">authenticateUser</span><span class="token punctuation">(</span>method<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token keyword">rethrows</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"twostraws"</span></span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Success!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Now Xcode will give you a warning: the <code>catch</code> block later on is unreachable because <code>authenticateUser</code> will never throw errors. But if you were to call it using <code>authenticateBiometrically</code> then you <em>would</em> need the <code>do</code>/<code>catch</code> blocks –&nbsp;Swift is able to evaluate the flow of our code much better, which means we need to write less code.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-does-the-open-keyword-do">What does the open keyword do?</a></li><li><a href="/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword</a></li><li><a href="/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword">How to delay execution of code using the defer keyword</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />