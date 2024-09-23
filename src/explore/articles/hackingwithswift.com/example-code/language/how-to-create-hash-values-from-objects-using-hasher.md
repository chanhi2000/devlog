---
lang: ko-KR
title: "How to create hash values from objects using Hasher"
description: "Article(s) > How to create hash values from objects using Hasher"
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
      content: "Article(s) > How to create hash values from objects using Hasher"
    - property: og:description
      content: "How to create hash values from objects using Hasher"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-hash-values-from-objects-using-hasher.html
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
  "title": "How to create hash values from objects using Hasher | Language - free Swift example code",
  "desc": "How to create hash values from objects using Hasher",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-hash-values-from-objects-using-hasher",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Hash values are an invaluable way of identifying data uniquely, and any type that conforms to the <code>Hashable</code> protocol can be used to create all or part of a hash value by using the <code>Hasher</code> struct.</p>
<p>To use this, create an instance of <code>Hasher</code>, provide it with whatever objects you want to hash, then call <code>finalize()</code> to generate the final value as an integer. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> iPad<span class="token punctuation">:</span> <span class="token class-name">Hashable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> serialNumber<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> capacity<span class="token punctuation">:</span> <span class="token class-name">Int</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token function">iPad</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"12345"</span></span><span class="token punctuation">,</span> capacity<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token function">iPad</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"abcde"</span></span><span class="token punctuation">,</span> capacity<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> hasher <span class="token operator">=</span> <span class="token class-name">Hasher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
hasher<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>
hasher<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span>
<span class="token keyword">let</span> hash <span class="token operator">=</span> hasher<span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance">How to calculate the SHA hash of a String or Data instance</a></li><li><a href="/quick-start/swiftui/observable-objects-environment-objects-and-published">Observable objects, environment objects, and @Published</a></li><li><a href="/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects">How to use @StateObject to create and monitor external objects</a></li><li><a href="/quick-start/swiftui/how-to-delete-core-data-objects-from-swiftui-views">How to delete Core Data objects from SwiftUI views</a></li><li><a href="/quick-start/swiftui/how-to-add-core-data-objects-from-swiftui-views">How to add Core Data objects from SwiftUI views</a></li></ul>
-->

:::

---

<TagLinks />