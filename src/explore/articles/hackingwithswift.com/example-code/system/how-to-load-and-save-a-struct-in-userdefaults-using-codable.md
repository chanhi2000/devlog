---
lang: ko-KR
title: "How to load and save a struct in UserDefaults using Codable"
description: "Article(s) > How to load and save a struct in UserDefaults using Codable"
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
      content: "Article(s) > How to load and save a struct in UserDefaults using Codable"
    - property: og:description
      content: "How to load and save a struct in UserDefaults using Codable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-load-and-save-a-struct-in-userdefaults-using-codable.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to load and save a struct in UserDefaults using Codable | System - free Swift example code",
  "desc": "How to load and save a struct in UserDefaults using Codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-load-and-save-a-struct-in-userdefaults-using-codable",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>Codable</code> protocol makes it easy to load and save native Swift types to JSON, and with a little typecasting you can get that data into <code>UserDefaults</code> so it’s safe.</p>
<p>Here’s some trivial <code>Codable</code> data we can work with:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">Codable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> taylor <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">)</span></code></pre>
<p>To save that to <code>UserDefaults</code> you must first encode it as JSON using <code>JSONEncoder</code>, which will send back a <code>Data</code> instance you can send straight to <code>UserDefaults</code>. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> encoder <span class="token operator">=</span> <span class="token class-name">JSONEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token keyword">let</span> encoded <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> encoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>taylor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> defaults <span class="token operator">=</span> <span class="token class-name">UserDefaults</span><span class="token punctuation">.</span>standard
    defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>encoded<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"SavedPerson"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Reading saved data back into a <code>Person</code> instance is a matter of converting from <code>Data</code> using a <code>JSONDecoder</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> savedPerson <span class="token operator">=</span> defaults<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"SavedPerson"</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> decoder <span class="token operator">=</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> loadedPerson <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> decoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> savedPerson<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>loadedPerson<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/how-to-save-and-load-navigationstack-paths-using-codable">How to save and load NavigationStack paths using Codable</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/system/how-to-save-user-settings-using-userdefaults">How to save user settings using UserDefaults</a></li></ul>
-->

:::

---

<TagLinks />