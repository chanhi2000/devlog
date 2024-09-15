---
lang: ko-KR
title: "How to spell out numbers using NumberFormatter's spellOut style"
description: "Article(s) > How to spell out numbers using NumberFormatter's spellOut style"
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
      content: "Article(s) > How to spell out numbers using NumberFormatter's spellOut style"
    - property: og:description
      content: "How to spell out numbers using NumberFormatter's spellOut style"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-spell-out-numbers-using-numberformatters-spellout-style.html
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
  "title": "How to spell out numbers using NumberFormatter's spellOut style | System - free Swift example code",
  "desc": "How to spell out numbers using NumberFormatter's spellOut style",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-spell-out-numbers-using-numberformatters-spellout-style",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS makes it easy to convert numbers like 10 or 100 into their written equivalents: "ten" and "one hundred", and it even handles other languages. For example, to convert the number 556 into "five hundred fifty-six", you would use this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> formatter <span class="token operator">=</span> <span class="token class-name">NumberFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formatter<span class="token punctuation">.</span>numberStyle <span class="token operator">=</span> <span class="token punctuation">.</span>spellOut
<span class="token keyword">let</span> english <span class="token operator">=</span> formatter<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token number">556</span><span class="token punctuation">)</span></code></pre>
<p>If you wanted to get that in Spanish, you would set a locale like this:</p>
<pre class=" language-swift"><code class=" language-swift">formatter<span class="token punctuation">.</span>locale <span class="token operator">=</span> <span class="token class-name">Locale</span><span class="token punctuation">(</span>identifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"es_ES"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> spanish <span class="token operator">=</span> formatter<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token number">556</span><span class="token punctuation">)</span></code></pre>
<p>Running that code would make the <code>english</code> constant equal to <code>five hundred fifty-six</code> and the <code>spanish</code> constant equal to <code>quinientos cincuenta y seis</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-format-dates-with-an-ordinal-suffix-using-numberformatters-ordinalstyle">How to format dates with an ordinal suffix using NumberFormatter's ordinalStyle</a></li><li><a href="/quick-start/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more">How to style text views with fonts, colors, line spacing, and more</a></li><li><a href="/quick-start/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view">How to position and style subviews that come from a different view</a></li><li><a href="/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title">How to style the font in a UINavigationBar's title</a></li><li><a href="/example-code/calayer/how-to-make-a-uiview-fade-out">How to make a UIView fade out</a></li></ul>
-->

:::

---

<TagLinks />