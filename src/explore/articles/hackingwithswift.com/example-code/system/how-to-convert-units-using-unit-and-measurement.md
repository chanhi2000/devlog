---
lang: ko-KR
title: "How to convert units using Unit and Measurement"
description: "Article(s) > How to convert units using Unit and Measurement"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to convert units using Unit and Measurement"
    - property: og:description
      content: "How to convert units using Unit and Measurement"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-units-using-unit-and-measurement.html
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
  "title": "How to convert units using Unit and Measurement | System - free Swift example code",
  "desc": "How to convert units using Unit and Measurement",
  "link": "https://hackingwithswift.com/example-code/system/how-to-convert-units-using-unit-and-measurement",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS 10 introduced a new system for calculating distance, length, area, volume, duration, and many more measurements. Let’s start with something simple. If you’re six feet tall, you’d create a <code>Measurement</code> instance like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> heightFeet <span class="token operator">=</span> <span class="token class-name">Measurement</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token class-name">UnitLength</span><span class="token punctuation">.</span>feet<span class="token punctuation">)</span></code></pre>
<p>Note that Swift can’t infer <code>.feet</code> to mean <code>UnitLength.feet</code> because there are lots of <code>Unit</code> subclasses as you’ll see soon.</p>
<p>Once you have a measurement ready, you can convert it to other units like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> heightInches <span class="token operator">=</span> heightFeet<span class="token punctuation">.</span><span class="token function">converted</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">UnitLength</span><span class="token punctuation">.</span>inches<span class="token punctuation">)</span>
<span class="token keyword">let</span> heightSensible <span class="token operator">=</span> heightFeet<span class="token punctuation">.</span><span class="token function">converted</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">UnitLength</span><span class="token punctuation">.</span>meters<span class="token punctuation">)</span></code></pre>
<p>You should see “72.0 in” and “1.8288 m” in your output, showing that the conversion process has worked. </p>
<p>The <code>UnitLength</code> class, like all unit subclasses, spans a huge range of units from old to futuristic. For example, you can convert feet to astronomical units, which is equal to the average distance between the Earth and the Sun, or about 150 million kilometers:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> heightAUs <span class="token operator">=</span> heightFeet<span class="token punctuation">.</span><span class="token function">converted</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">UnitLength</span><span class="token punctuation">.</span>astronomicalUnits<span class="token punctuation">)</span></code></pre>
<p>Once you’ve used one unit, the rest work identically. Here are some more examples to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// convert degrees to radians</span>
<span class="token keyword">let</span> degrees <span class="token operator">=</span> <span class="token class-name">Measurement</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token number">180</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token class-name">UnitAngle</span><span class="token punctuation">.</span>degrees<span class="token punctuation">)</span>
<span class="token keyword">let</span> radians <span class="token operator">=</span> degrees<span class="token punctuation">.</span><span class="token function">converted</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token punctuation">.</span>radians<span class="token punctuation">)</span>

<span class="token comment">// convert square meters to square centimeters</span>
<span class="token keyword">let</span> squareMeters <span class="token operator">=</span> <span class="token class-name">Measurement</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token class-name">UnitArea</span><span class="token punctuation">.</span>squareMeters<span class="token punctuation">)</span>
<span class="token keyword">let</span> squareCentimeters <span class="token operator">=</span> squareMeters<span class="token punctuation">.</span><span class="token function">converted</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token punctuation">.</span>squareCentimeters<span class="token punctuation">)</span>

<span class="token comment">// convert bushels to imperial teaspoons</span>
<span class="token keyword">let</span> bushels <span class="token operator">=</span> <span class="token class-name">Measurement</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token class-name">UnitVolume</span><span class="token punctuation">.</span>bushels<span class="token punctuation">)</span>
<span class="token keyword">let</span> teaspoons <span class="token operator">=</span> bushels<span class="token punctuation">.</span><span class="token function">converted</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token punctuation">.</span>imperialTeaspoons<span class="token punctuation">)</span></code></pre>
<p>Honestly, I have no idea what the bushels to imperial teaspoons ratio is, but it’s nice to be given the option!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />