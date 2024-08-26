---
lang: ko-KR
title: "How to round only specific corners using maskedCorners"
description: "Article(s) > How to round only specific corners using maskedCorners"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to round only specific corners using maskedCorners"
    - property: og:description
      content: "How to round only specific corners using maskedCorners"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-round-only-specific-corners-using-maskedcorners.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CALayer - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/calayer/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to round only specific corners using maskedCorners | CALayer - free Swift example code",
  "desc": "How to round only specific corners using maskedCorners",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-round-only-specific-corners-using-maskedcorners",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
<p style="margin: 0; margin-bottom: 20px;"><a href="/about">Paul Hudson</a> &nbsp;&nbsp; <i class="fab fa-twitter" aria-hidden="true" style="color: #4099ff"></i> <a href="https://twitter.com/twostraws" target="_blank">@twostraws</a> &nbsp;&nbsp; <time itemprop="dateModified" datetime="2019-05-28T20:41:20+00:00">May 28th 2019</time><meta itemprop="datePublished" content="2019-05-28T20:41:20+00:00"></p>
<p>You can set the <code>cornerRadius</code> property of any <code>UIView</code> to have its edges rounded, but by default that rounds all corners at the same time. If you want only <em>some</em> corners to be rounded, you should set the layer’s <code>maskedCorners</code> property to be an array of the corners you want –&nbsp;it’s an option set, so you can set one or many depending on your needs.</p>
<p>For example, this code rounds the top-left and bottom-right corners of a view, leaving the other two square:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> redBox <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
redBox<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>red
redBox<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>cornerRadius <span class="token operator">=</span> <span class="token number">25</span>
redBox<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>maskedCorners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>layerMinXMinYCorner<span class="token punctuation">,</span> <span class="token punctuation">.</span>layerMaxXMaxYCorner<span class="token punctuation">]</span>
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>redBox<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-round-the-corners-of-a-view">How to round the corners of a view</a></li><li><a href="/example-code/calayer/how-to-round-the-corners-of-a-uiview">How to round the corners of a UIView</a></li><li><a href="/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round"</a></li><li><a href="/example-code/system/how-to-run-code-at-a-specific-time">How to run code at a specific time</a></li><li><a href="/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext">How to help VoiceOver read specific kinds of text using accessibilityTextualContext</a></li></ul>
-->

:::

---

<TagLinks />