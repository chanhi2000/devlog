---
lang: ko-KR
title: "How to convert a CGPoint in one UIView to another view using convert()"
description: "Article(s) > How to convert a CGPoint in one UIView to another view using convert()"
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
      content: "Article(s) > How to convert a CGPoint in one UIView to another view using convert()"
    - property: og:description
      content: "How to convert a CGPoint in one UIView to another view using convert()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert.html
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
  "title": "How to convert a CGPoint in one UIView to another view using convert() | UIKit - free Swift example code",
  "desc": "How to convert a CGPoint in one UIView to another view using convert()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>Each view has its own co-ordinate system, meaning that if I tap a button and ask iOS where I tapped, it will tell me where I tapped <em>relative to the top-left of the button</em>. This is usually what you want, but if you want to translate a position in one view into a position it's easy enough to do.</p>
<p>As an example, this code creates two views, creates a virtual "tap", then converts it from the first view's co-ordinate space to the second's:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> view1 <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> view2 <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> tap <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> convertedTap <span class="token operator">=</span> view1<span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span>tap<span class="token punctuation">,</span> to<span class="token punctuation">:</span> view2<span class="token punctuation">)</span></code></pre>
<p>That will set <code>convertedTap</code> to X -140.0, Y -140.0.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect">How to synchronize animations from one view to another with matchedGeometryEffect()</a></li><li><a href="/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture()</a></li><li><a href="/quick-start/swiftui/how-to-mask-one-view-with-another">How to mask one view with another</a></li></ul>
-->

:::

---

<TagLinks />