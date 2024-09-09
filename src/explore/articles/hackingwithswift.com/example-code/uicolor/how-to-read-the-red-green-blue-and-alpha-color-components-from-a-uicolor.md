---
lang: ko-KR
title: "How to read the red, green, blue, and alpha color components from a UIColor"
description: "Article(s) > How to read the red, green, blue, and alpha color components from a UIColor"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to read the red, green, blue, and alpha color components from a UIColor"
    - property: og:description
      content: "How to read the red, green, blue, and alpha color components from a UIColor"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-read-the-red-green-blue-and-alpha-color-components-from-a-uicolor.html
date: 2019-10-23
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIClolr - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uicolor/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to read the red, green, blue, and alpha color components from a UIColor | UIClolr - free Swift example code",
  "desc": "How to read the red, green, blue, and alpha color components from a UIColor",
  "link": "https://hackingwithswift.com/example-code/uicolor/how-to-read-the-red-green-blue-and-alpha-color-components-from-a-uicolor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
<p>Creating a <code>UIColor</code> from red, green, blue, and alpha (RGBA) is easy enough:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> color <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span></code></pre>
<p>But when you want to read those values back, you need to do a little more work. <code>UIColor</code> has a built-in method called <code>getRed()</code>, which unpacks the RGBA values into variable floats –&nbsp;you need to create four variables first, then pass them in by reference:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> red<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">var</span> green<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">var</span> blue<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">var</span> alpha<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">0</span>

color<span class="token punctuation">.</span><span class="token function">getRed</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>red<span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token operator">&amp;</span>green<span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token operator">&amp;</span>blue<span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token operator">&amp;</span>alpha<span class="token punctuation">)</span></code></pre>
<p>When that runs, <code>red</code> will have 0.8, <code>green</code> will have 0.1, and so on.</p>
<p>Because this is a pain to use you might find it best to wrap it up in an extension:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UIColor</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> rgba<span class="token punctuation">:</span> <span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> red<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">var</span> green<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">var</span> blue<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">var</span> alpha<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token function">getRed</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>red<span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token operator">&amp;</span>green<span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token operator">&amp;</span>blue<span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token operator">&amp;</span>alpha<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span>red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> alpha<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Now you can use <code>color.rgba</code> to get back a tuple of all four color values.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color">How to read the red, green, and blue values from a Color</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/strings/how-to-split-a-string-into-an-array-componentsseparatedby">How to split a string into an array: components(separatedBy:)</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li></ul>
-->

:::

---

<TagLinks />