---
lang: ko-KR
title: "How to calculate the SHA hash of a String or Data instance"
description: "Article(s) > How to calculate the SHA hash of a String or Data instance"
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
      content: "Article(s) > How to calculate the SHA hash of a String or Data instance"
    - property: og:description
      content: "How to calculate the SHA hash of a String or Data instance"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance.html
date: 2019-10-09
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CryptoKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/cryptokit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to calculate the SHA hash of a String or Data instance | CryptoKit - free Swift example code",
  "desc": "How to calculate the SHA hash of a String or Data instance",
  "link": "https://hackingwithswift.com/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS 13 introduced a new framework called CryptoKit, which adds important cryptographic functionality such as encryption and hashing.</p>
<p>If you want to calculate the hash value of a string you need to convert it to an instance of <code>Data</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> inputString <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Hello, world!"</span></span>
<span class="token keyword">let</span> inputData <span class="token operator">=</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>inputString<span class="token punctuation">.</span>utf8<span class="token punctuation">)</span></code></pre>
<p>You then call the <code>hash(data:)</code> method of whichever kind of hash you want: SHA-256, SHA-384, or SHA-512. For example, if you wanted to calculate the SHA-256 hash of your data you’d use this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> hashed <span class="token operator">=</span> SHA256<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> inputData<span class="token punctuation">)</span></code></pre>
<p>Finally, you can print out the textual representation of the hash –&nbsp;what we’d considered the user-facing hash string itself – like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span>hashed<span class="token punctuation">.</span>description<span class="token punctuation">)</span></code></pre>
<p>Obviously if you have an instance of <code>Data</code> you want to hash, you can put that directly into <code>SHA256.hash(data:)</code>.</p>
<p>If you want to get the <em>string</em> of your hash, you should convert using the <code>String(format:)</code> initializer, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> hashString <span class="token operator">=</span> hashed<span class="token punctuation">.</span>compactMap <span class="token punctuation">{</span> <span class="token class-name">String</span><span class="token punctuation">(</span>format<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"%02x"</span></span><span class="token punctuation">,</span> <span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-create-hash-values-from-objects-using-hasher">How to create hash values from objects using Hasher</a></li><li><a href="/example-code/strings/how-to-calculate-the-rot13-of-a-string">How to calculate the ROT13 of a string</a></li><li><a href="/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a></li></ul>
-->

:::

---

<TagLinks />