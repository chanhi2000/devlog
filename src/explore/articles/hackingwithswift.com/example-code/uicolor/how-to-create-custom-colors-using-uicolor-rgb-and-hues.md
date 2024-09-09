---
lang: ko-KR
title: "How to create custom colors using UIColor RGB and hues"
description: "Article(s) > How to create custom colors using UIColor RGB and hues"
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
      content: "Article(s) > How to create custom colors using UIColor RGB and hues"
    - property: og:description
      content: "How to create custom colors using UIColor RGB and hues"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-create-custom-colors-using-uicolor-rgb-and-hues.html
date: 2019-03-28
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
  "title": "How to create custom colors using UIColor RGB and hues | UIClolr - free Swift example code",
  "desc": "How to create custom colors using UIColor RGB and hues",
  "link": "https://hackingwithswift.com/example-code/uicolor/how-to-create-custom-colors-using-uicolor-rgb-and-hues",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>Although there are quite a few built-in UIColors, you'll want to create your own very frequently. This can be done in a number of ways, but the most common is specifying individual values for red, green, blue and alpha, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> col1 <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span></code></pre>
<p>Each of those numbers need to be between 0 and 1.</p>
<p>An alternative way is to specify color values as hue, saturation and brightness, or HSB. Hue is a value between 0 and 1 on a color wheel, where 0 and 1 are both red. Saturation is how deep the color should be (so 0 is just gray) and brightness is how light the shade should be.</p>
<p>Here's how it's done:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> col2 <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>hue<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> saturation<span class="token punctuation">:</span> <span class="token number">0.66</span><span class="token punctuation">,</span> brightness<span class="token punctuation">:</span> <span class="token number">0.66</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> col3 <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>hue<span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span> saturation<span class="token punctuation">:</span> <span class="token number">0.66</span><span class="token punctuation">,</span> brightness<span class="token punctuation">:</span> <span class="token number">0.66</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> col4 <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>hue<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> saturation<span class="token punctuation">:</span> <span class="token number">0.66</span><span class="token punctuation">,</span> brightness<span class="token punctuation">:</span> <span class="token number">0.66</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> col5 <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>hue<span class="token punctuation">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span> saturation<span class="token punctuation">:</span> <span class="token number">0.66</span><span class="token punctuation">,</span> brightness<span class="token punctuation">:</span> <span class="token number">0.66</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span></code></pre>
<p>The advantage to using HSB rather than RGB is that you can generate very similar colors by keeping the saturation and brightness constant and changing only the hue – the code above generates some nice pastel shades of red, green, cyan and magenta, for example.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors">How to create new colors by blending two other SwiftUI colors</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li></ul>
-->

:::

---

<TagLinks />