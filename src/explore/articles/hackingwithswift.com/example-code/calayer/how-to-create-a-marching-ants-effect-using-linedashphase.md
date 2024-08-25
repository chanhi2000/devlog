---
lang: ko-KR
title: "How to create a marching ants effect using lineDashPhase"
description: "Article(s) > How to create a marching ants effect using lineDashPhase"
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
      content: "Article(s) > How to create a marching ants effect using lineDashPhase"
    - property: og:description
      content: "How to create a marching ants effect using lineDashPhase"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase.html
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
  "title": "How to create a marching ants effect using lineDashPhase | Array - free Swift example code",
  "desc": "How to create a marching ants effect using lineDashPhase",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!-- 
<p>“Marching ants” is the informal name used for animation of a selection: you see a dashed line around whatever you selected, and the dashes slowly move around the selection to show that it’s active.</p>
<p>iOS can achieve most of this effect for you when you’re using a <code>CAShapeLayer</code>. To try it out, first create a shape layer with a dashed stroke like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> layer <span class="token operator">=</span> <span class="token class-name">CAShapeLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> bounds <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">250</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">250</span><span class="token punctuation">)</span>
layer<span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>roundedRect<span class="token punctuation">:</span> bounds<span class="token punctuation">,</span> byRoundingCorners<span class="token punctuation">:</span> <span class="token punctuation">.</span>allCorners<span class="token punctuation">,</span> cornerRadii<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cgPath
layer<span class="token punctuation">.</span>strokeColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black<span class="token punctuation">.</span>cgColor
layer<span class="token punctuation">.</span>fillColor <span class="token operator">=</span> <span class="token nil constant">nil</span>
layer<span class="token punctuation">.</span>lineDashPattern <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
view<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">addSublayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span></code></pre>
<p>Now you need to create a <code>CABasicAnimation</code> to animate the <code>lineDashPhase</code> property. Annoyingly, the <code>lineDashPattern</code> – the part that describes the way the dashed are drawn –&nbsp;is actually an array of <code>NSNumber</code> so we need to boil it down to an integer with code like this:</p>
<pre class=" language-swift"><code class=" language-swift">layer<span class="token punctuation">.</span>lineDashPattern<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">-</span> <span class="token short-argument">$1</span><span class="token punctuation">.</span>intValue <span class="token punctuation">}</span> <span class="token operator">??</span> <span class="token number">0</span></code></pre>
<p>With the line dash pattern used above –&nbsp;8, 6 – that will result in <code>toValue</code> being set to 14. </p>
<p>Here’s the animation you need to give the above shape layer a marching ants effect:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> animation <span class="token operator">=</span> <span class="token class-name">CABasicAnimation</span><span class="token punctuation">(</span>keyPath<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"lineDashPhase"</span></span><span class="token punctuation">)</span>
animation<span class="token punctuation">.</span>fromValue <span class="token operator">=</span> <span class="token number">0</span>
animation<span class="token punctuation">.</span>toValue <span class="token operator">=</span> layer<span class="token punctuation">.</span>lineDashPattern<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">-</span> <span class="token short-argument">$1</span><span class="token punctuation">.</span>intValue <span class="token punctuation">}</span> <span class="token operator">??</span> <span class="token number">0</span>
animation<span class="token punctuation">.</span>duration <span class="token operator">=</span> <span class="token number">1</span>
animation<span class="token punctuation">.</span>repeatCount <span class="token operator">=</span> <span class="token punctuation">.</span>infinity
layer<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>animation<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"line"</span></span><span class="token punctuation">)</span></code></pre>
<p>I used <code>.infinity</code> for the repeat count so that it lasts forever.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-create-a-marching-ants-border-effect">How to create a marching ants border effect</a></li><li><a href="/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller">How to create a page curl effect using UIPageViewController</a></li><li><a href="/example-code/libraries/how-to-get-a-cover-flow-effect-on-ios">How to get a Cover Flow effect on iOS</a></li><li><a href="/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview">How to animate a blur effect using UIVisualEffectView</a></li><li><a href="/example-code/system/nstexteffectletterpressstyle-how-to-add-a-letterpress-effect-to-text">NSTextEffectLetterpressStyle: How to add a letterpress effect to text</a></li></ul>
-->

:::

---

<TagLinks />