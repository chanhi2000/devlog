---
lang: ko-KR
title: "How to add a shadow to a UIView"
description: "Article(s) > How to add a shadow to a UIView"
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
      content: "Article(s) > How to add a shadow to a UIView"
    - property: og:description
      content: "How to add a shadow to a UIView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-shadow-to-a-uiview.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to add a shadow to a UIView | UIKit - free Swift example code",
  "desc": "How to add a shadow to a UIView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-shadow-to-a-uiview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<VidStack src="youtube/pwaaU3hyPfk" />

<!-- TODO: 작성 -->

<!--
<p>iOS can dynamically generate shadows for any <code>UIView</code>, and these shadows automatically adjust to fit the shape of the item in question – even following the curves of text inside a <code>UILabel</code>. This functionality is built right in, so all you need to do is configure its properties, and there are four you need to care about:</p>
<ul>
<li><code>shadowColor</code> sets the color of the shadow, and needs to be a <code>CGColor</code>.</li>
<li><code>shadowOpacity</code> sets how transparent the shadow is, where 0 is invisible and 1 is as strong as possible.</li>
<li><code>shadowOffset</code> sets how far away from the view the shadow should be, to give a 3D offset effect.</li>
<li><code>shadowRadius</code> sets how wide the shadow should be.</li>
</ul>
<p>Here's a simple example to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> yourView <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
yourView<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black<span class="token punctuation">.</span>cgColor
yourView<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowOpacity <span class="token operator">=</span> <span class="token number">1</span>
yourView<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowOffset <span class="token operator">=</span> <span class="token punctuation">.</span>zero
yourView<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowRadius <span class="token operator">=</span> <span class="token number">10</span></code></pre>
<p>Be warned: generating shadows dynamically is expensive, because iOS has to draw the shadow around the exact shape of your view's contents. If you can, set the <code>shadowPath</code> property to a specific value so that iOS doesn't need to calculate transparency dynamically. For example, this creates a shadow path equivalent to the frame of the view:</p>
<pre class=" language-swift"><code class=" language-swift">yourView<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowPath <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>rect<span class="token punctuation">:</span> yourView<span class="token punctuation">.</span>bounds<span class="token punctuation">)</span><span class="token punctuation">.</span>cgPath</code></pre>
<p>Alternatively, ask iOS to cache the rendered shadow so that it doesn't need to be redrawn:</p>
<pre class=" language-swift"><code class=" language-swift">yourView<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shouldRasterize <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
<p>If you want to go down the rasterization route, you should make sure iOS caches the shadow at the same drawing scale as the main screen, otherwise it will look pixelated:</p>
<pre class=" language-swift"><code class=" language-swift">yourView<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>rasterizationScale <span class="token operator">=</span> <span class="token class-name">UIScreen</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span>scale</code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-draw-a-shadow-around-a-view">How to draw a shadow around a view</a></li><li><a href="/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a></li><li><a href="/example-code/calayer/how-to-add-a-border-outline-color-to-a-uiview">How to add a border outline color to a UIView</a></li><li><a href="/example-code/calayer/how-to-make-a-uiview-fade-out">How to make a UIView fade out</a></li><li><a href="/quick-start/swiftui/how-to-wrap-a-custom-uiview-for-swiftui">How to wrap a custom UIView for SwiftUI</a></li></ul>
-->

:::

---

<TagLinks />