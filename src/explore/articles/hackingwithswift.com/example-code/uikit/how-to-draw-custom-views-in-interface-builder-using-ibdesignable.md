---
lang: ko-KR
title: "How to draw custom views in Interface Builder using IBDesignable"
description: "Article(s) > How to draw custom views in Interface Builder using IBDesignable"
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
      content: "Article(s) > How to draw custom views in Interface Builder using IBDesignable"
    - property: og:description
      content: "How to draw custom views in Interface Builder using IBDesignable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-draw-custom-views-in-interface-builder-using-ibdesignable.html
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
  "title": "How to draw custom views in Interface Builder using IBDesignable | UIKit - free Swift example code",
  "desc": "How to draw custom views in Interface Builder using IBDesignable",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-draw-custom-views-in-interface-builder-using-ibdesignable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
<p>You've always been able to have custom views inside your apps, but if you're having a hard time visualizing how they look at design time then you should try <code>@IBDesignable</code>: it lets you see exactly how your custom views look inside IB, and if you combine it with <code>@IBInspectable</code> you can even adjust your view's design there too.</p>
<p>This example view draws an ellipse that fills itself. If you add this to your project, create a view, then set that view to have this custom subclass, you'll see an ellipse appear immediately. You can move the view or resize it, and the ellipse will be updated. Plus, because I used <code>@IBInspectable</code> you can adjust the colors and stroke width right inside the attributes inspector, helping you make sure your UI looks exactly as you expect.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@IBDesignable</span> <span class="token keyword">class</span> <span class="token class-name">EllipseView</span><span class="token punctuation">:</span> <span class="token class-name">UIView</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@IBInspectable</span> <span class="token keyword">var</span> strokeWidth<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token attribute atrule">@IBInspectable</span> <span class="token keyword">var</span> fillColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span> <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black
    <span class="token attribute atrule">@IBInspectable</span> <span class="token keyword">var</span> strokeColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span> <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>clear

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">draw</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> rect<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token class-name">UIGraphicsGetCurrentContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
        <span class="token keyword">let</span> rectangle <span class="token operator">=</span> bounds<span class="token punctuation">.</span><span class="token function">insetBy</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> strokeWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> strokeWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>

        context<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>fillColor<span class="token punctuation">.</span>cgColor<span class="token punctuation">)</span>
        context<span class="token punctuation">.</span><span class="token function">setStrokeColor</span><span class="token punctuation">(</span>strokeColor<span class="token punctuation">.</span>cgColor<span class="token punctuation">)</span>
        context<span class="token punctuation">.</span><span class="token function">setLineWidth</span><span class="token punctuation">(</span>strokeWidth<span class="token punctuation">)</span>

        context<span class="token punctuation">.</span><span class="token function">addEllipse</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> rectangle<span class="token punctuation">)</span>
        context<span class="token punctuation">.</span><span class="token function">drawPath</span><span class="token punctuation">(</span>using<span class="token punctuation">:</span> <span class="token punctuation">.</span>fillStroke<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder">How to use IBInspectable to adjust values in Interface Builder</a></li><li><a href="/example-code/xcode/how-to-lock-interface-builder-controls-to-stop-accidental-changes">How to lock Interface Builder controls to stop accidental changes</a></li><li><a href="/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards">SwiftUI vs Interface Builder and storyboards</a></li><li><a href="/example-code/xcode/how-to-used-a-named-uicolor-in-code-and-interface-builder">How to used a named UIColor in code and Interface Builder</a></li><li><a href="/quick-start/swiftui/how-to-draw-images-using-image-views">How to draw images using Image views</a></li></ul>
-->

:::

---

<TagLinks />