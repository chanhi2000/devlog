---
lang: ko-KR
title: "How to make a UIView glow using shadowColor"
description: "Article(s) > How to make a UIView glow using shadowColor"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make a UIView glow using shadowColor"
    - property: og:description
      content: "How to make a UIView glow using shadowColor"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-make-a-uiview-glow-using-shadowcolor.html
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
  "title": "How to make a UIView glow using shadowColor | CALayer - free Swift example code",
  "desc": "How to make a UIView glow using shadowColor",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-make-a-uiview-glow-using-shadowcolor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!-- 
<p>All views can have shadows thanks to the <code>CALayer</code> behind them, but you can use that same property to create glow effects. For example, this creates a 128x128 view then gives it a 20-point yellow glow:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> vw <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
vw<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>white

vw<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowOffset <span class="token operator">=</span> <span class="token punctuation">.</span>zero
vw<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>yellow<span class="token punctuation">.</span>cgColor
vw<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowRadius <span class="token operator">=</span> <span class="token number">20</span>
vw<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowOpacity <span class="token operator">=</span> <span class="token number">1</span>
vw<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowPath <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>rect<span class="token punctuation">:</span> vw<span class="token punctuation">.</span>bounds<span class="token punctuation">)</span><span class="token punctuation">.</span>cgPath</code></pre>
<p>Bright glows work best on a dark background, so try making your main view black:</p>
<pre class=" language-swift"><code class=" language-swift">view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>black</code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-make-a-button-glow-when-tapped-with-showstouchwhenhighlighted">How to make a button glow when tapped with showsTouchWhenHighlighted</a></li><li><a href="/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a></li><li><a href="/example-code/uikit/how-to-add-a-shadow-to-a-uiview">How to add a shadow to a UIView</a></li><li><a href="/example-code/calayer/how-to-make-a-uiview-fade-out">How to make a UIView fade out</a></li><li><a href="/example-code/uikit/how-to-make-a-uiview-fill-the-screen-using-auto-layout-anchors">How to make a UIView fill the screen using Auto Layout anchors</a></li></ul>
-->

:::

---

<TagLinks />