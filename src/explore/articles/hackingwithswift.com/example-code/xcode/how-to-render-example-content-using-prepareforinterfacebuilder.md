---
lang: ko-KR
title: "How to render example content using prepareForInterfaceBuilder()"
description: "Article(s) > How to render example content using prepareForInterfaceBuilder()"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render example content using prepareForInterfaceBuilder()"
    - property: og:description
      content: "How to render example content using prepareForInterfaceBuilder()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/how-to-render-example-content-using-prepareforinterfacebuilder.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Xcode - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/xcode/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to render example content using prepareForInterfaceBuilder() | Xcode - free Swift example code",
  "desc": "How to render example content using prepareForInterfaceBuilder()",
  "link": "https://hackingwithswift.com/example-code/xcode/how-to-render-example-content-using-prepareforinterfacebuilder",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>Whenever you create a custom <code>UIView</code> subclass using <code>@IBDesignable</code>, it’s usually a good idea to provide it with some sample content so it can render meaningfully at design time.</p>
<p>For example, here’s a simple <code>ShapeView</code> class that renders a <code>UIBezierPath</code> inside a view, using <code>CAShapeLayer</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@IBDesignable</span> <span class="token keyword">class</span> <span class="token class-name">ShapeView</span><span class="token punctuation">:</span> <span class="token class-name">UIView</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@IBInspectable</span> <span class="token keyword">var</span> strokeColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span> <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black
    <span class="token attribute atrule">@IBInspectable</span> <span class="token keyword">var</span> fillColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span> <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>clear
    <span class="token keyword">var</span> path<span class="token punctuation">:</span> <span class="token class-name">UIBezierPath</span><span class="token operator">?</span>

    <span class="token keyword">override</span> <span class="token keyword">class</span> <span class="token keyword">var</span> layerClass<span class="token punctuation">:</span> <span class="token class-name">AnyClass</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CAShapeLayer</span><span class="token punctuation">.</span><span class="token keyword">self</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">layoutSubviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> layer <span class="token operator">=</span> layer <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">CAShapeLayer</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
        layer<span class="token punctuation">.</span>path <span class="token operator">=</span> path<span class="token operator">?</span><span class="token punctuation">.</span>cgPath
        layer<span class="token punctuation">.</span>strokeColor <span class="token operator">=</span> strokeColor<span class="token punctuation">.</span>cgColor
        layer<span class="token punctuation">.</span>fillColor <span class="token operator">=</span> fillColor<span class="token punctuation">.</span>cgColor
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>While that might work well enough at runtime, you won’t be able to see anything when used with Interface Builder because it relies on a bezier path being set. So, while you can adjust the stroke and fill colors all you want, you can’t see how those changes look.</p>
<p>To fix this, Xcode lets us add a special method in the view called <code>prepareForInterfaceBuilder()</code>. If present, this is called by Interface Builder when your custom view is being drawn, and it’s your chance to provide some example content so others can see how it looks.</p>
<p>In this instance, setting the <code>path</code> property to a default shape does the job neatly:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">prepareForInterfaceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> drawRect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span>
    path <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>rect<span class="token punctuation">:</span> drawRect<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>This method is only called at design time, so you don’t have to worry about it being run in shipping code.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-render-markdown-content-in-text">How to render Markdown content in text</a></li><li><a href="/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow">How to render shadows using NSShadow and setShadow()</a></li><li><a href="/quick-start/swiftui/how-to-render-a-gradient">How to render a gradient</a></li><li><a href="/quick-start/swiftui/how-to-render-images-using-sf-symbols">How to render images using SF Symbols</a></li><li><a href="/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF</a></li></ul>
-->

:::

---

<TagLinks />