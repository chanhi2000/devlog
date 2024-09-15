---
lang: ko-KR
title: "How to convert dates and times to a string using DateFormatter"
description: "Article(s) > How to convert dates and times to a string using DateFormatter"
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
      content: "Article(s) > How to convert dates and times to a string using DateFormatter"
    - property: og:description
      content: "How to convert dates and times to a string using DateFormatter"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter.html
date: 2022-03-23
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
  "title": "How to convert dates and times to a string using DateFormatter | System - free Swift example code",
  "desc": "How to convert dates and times to a string using DateFormatter",
  "link": "https://hackingwithswift.com/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>If you want to get a string from a <code>Date</code>, Apple’s <code>DateFormatter</code> class has everything you need: you can get short dates, long dates, dates with times, and can even go the opposite way to give you a <code>Date</code> from a string.</p>
<p>There are four primary ways you’re going to use it:</p>
<ol>
<li>Converting a <code>Date</code> instance to a string using one of the built-in date formats.</li>
<li>Converting a <code>Date</code> instance to a string using one of the built-in <em>time</em> formats.</li>
<li>Converting a <code>Date</code> instance to a string using a completely custom format.</li>
<li>Converting a string instance to a <code>Date</code>.</li>
</ol>
<p>Below are examples of each to get you started.</p>
<p>First, this converts a <code>Date</code> to a short date string using <code>dateStyle</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> today <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>now
<span class="token keyword">let</span> formatter1 <span class="token operator">=</span> <span class="token class-name">DateFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formatter1<span class="token punctuation">.</span>dateStyle <span class="token operator">=</span> <span class="token punctuation">.</span>short
<span class="token function">print</span><span class="token punctuation">(</span>formatter1<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> today<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>That will print something like “12/31/2019” depending on the user’s locale.</p>
<p>Second, this converts the same date to a medium time string using <code>timeStyle</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> formatter2 <span class="token operator">=</span> <span class="token class-name">DateFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formatter2<span class="token punctuation">.</span>timeStyle <span class="token operator">=</span> <span class="token punctuation">.</span>medium
<span class="token function">print</span><span class="token punctuation">(</span>formatter2<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> today<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>That will print something like “20:27:32” or “8:27:32pm” depending on the user’s locale.</p>
<p>Third, this converts the same date to a date <em>and</em> time string using a custom date format:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> formatter3 <span class="token operator">=</span> <span class="token class-name">DateFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formatter3<span class="token punctuation">.</span>dateFormat <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"HH:mm E, d MMM y"</span></span>
<span class="token function">print</span><span class="token punctuation">(</span>formatter3<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> today<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>That will print something like “20:32 Wed, 30 Oct 2019”.</p>
<p>Finally, this attempts to convert a string to a date</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"20:32 Wed, 30 Oct 2019"</span></span>
<span class="token keyword">let</span> formatter4 <span class="token operator">=</span> <span class="token class-name">DateFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formatter4<span class="token punctuation">.</span>dateFormat <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"HH:mm E, d MMM y"</span></span>
<span class="token function">print</span><span class="token punctuation">(</span>formatter4<span class="token punctuation">.</span><span class="token function">date</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"Unknown date"</span></span><span class="token punctuation">)</span></code></pre>
<p><code>date(from:)</code> returns an optional <code>Date</code> because it might be given a string containing an invalid value, so that code uses nil coalescing to make sure there’s a default value printed.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />