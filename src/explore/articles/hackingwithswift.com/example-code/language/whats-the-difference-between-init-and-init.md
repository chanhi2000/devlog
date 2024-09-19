---
lang: ko-KR
title: "What’s the difference between init?() and init()?"
description: "Article(s) > What’s the difference between init?() and init()?"
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
      content: "Article(s) > What’s the difference between init?() and init()?"
    - property: og:description
      content: "What’s the difference between init?() and init()?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/whats-the-difference-between-init-and-init.html
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
  "title": "What’s the difference between init?() and init()? | Language - free Swift example code",
  "desc": "What’s the difference between init?() and init()?",
  "link": "https://hackingwithswift.com/example-code/language/whats-the-difference-between-init-and-init",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>It’s the job of a regular Swift initializer to create a fully fledged instance of a new type, however sometimes the data that has been provided is insufficient or incorrect, and creation can’t proceed.</p>
<p>For example, consider this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ssn<span class="token punctuation">:</span> <span class="token class-name">String</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>socialSecurityNumber<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>ssn <span class="token operator">=</span> socialSecurityNumber
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>socialSecurityNumber<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"111-11-1111"</span></span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span></code></pre>
<p>That defines a <code>Person</code> struct that can be created using a nine-digit social security number, then creates an instance of that struct.</p>
<p>But what should happen here?</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>socialSecurityNumber<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"FISH"</span></span><span class="token punctuation">)</span></code></pre>
<p>In that instance we’re passing an invalid social security number, so really we expect creating a <code>Person</code> to fail. </p>
<p>This is where failable initializers come in: they are written as <code>init?()</code>, and can return nil rather than a value if something goes wrong during creation. For example, we could write a quick check to make sure the social security number is more or less correct like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ssn<span class="token punctuation">:</span> <span class="token class-name">String</span>

    <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>socialSecurityNumber<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> socialSecurityNumber<span class="token punctuation">.</span>count <span class="token operator">&lt;</span> <span class="token number">11</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>ssn <span class="token operator">=</span> socialSecurityNumber
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Notice the initializer is now called <code>init?()</code> to reflect that it returns an optional –&nbsp;the process might return <code>nil</code> if the creation fails. The logic is pretty simple: if there are 11 digits we assume it’s correct, otherwise we return nil. Note: if you <em>really</em> wanted to validate that number you’d need to use a regular expression.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />