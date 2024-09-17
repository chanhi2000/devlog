---
lang: ko-KR
title: "How to load a string from a file in your bundle"
description: "Article(s) > How to load a string from a file in your bundle"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to load a string from a file in your bundle"
    - property: og:description
      content: "How to load a string from a file in your bundle"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-load-a-string-from-a-file-in-your-bundle.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to load a string from a file in your bundle | Strings - free Swift example code",
  "desc": "How to load a string from a file in your bundle",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-load-a-string-from-a-file-in-your-bundle",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>If you have an important text file built into your app bundle that want to load it at runtime fact, <code>String</code> has an initializer just for this purpose. It’s called <code>contentsOfFile</code>, and here it is in action:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> filepath <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span>forResource<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example"</span></span><span class="token punctuation">,</span> ofType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"txt"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> contents <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">String</span><span class="token punctuation">(</span>contentsOfFile<span class="token punctuation">:</span> filepath<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
        <span class="token comment">// contents could not be loaded</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// example.txt not found!</span>
<span class="token punctuation">}</span></code></pre>
<p>That code loads a file called <strong>example.txt</strong> into a string called <code>contents</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-find-the-path-to-a-file-in-your-bundle">How to find the path to a file in your bundle</a></li><li><a href="/example-code/system/how-to-decode-json-from-your-app-bundle-the-easy-way">How to decode JSON from your app bundle the easy way</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto">How to save a string to a file on disk with write(to:)</a></li></ul>
-->

:::

---

<TagLinks />