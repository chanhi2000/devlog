---
lang: ko-KR
title: "How to mask one UIView using another UIView"
description: "Article(s) > How to mask one UIView using another UIView"
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
      content: "Article(s) > How to mask one UIView using another UIView"
    - property: og:description
      content: "How to mask one UIView using another UIView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-mask-one-uiview-using-another-uiview.html
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
  "title": "How to mask one UIView using another UIView | UIKit - free Swift example code",
  "desc": "How to mask one UIView using another UIView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-mask-one-uiview-using-another-uiview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
<p>All views have a <code>mask</code> property that allows you to cut out parts depending on what you need. This mask can be any other kind of <code>UIView</code>, so you could for example use a label to cut out an image view.</p>
<p>To try it out, first create a view with some obvious content such as a background color:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> redView <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
redView<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>red
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>redView<span class="token punctuation">)</span></code></pre>
<p>Now create your mask as a separate <code>UIView</code>. Although it won’t be directly visible you should give this either a background color or some other content because the alpha channel of this mask determines what shows through in the original view.</p>
<p>To demonstrate this, here’s a mask view that’s the same size as the original view, but it’s offset 64 pixels to the right and has a 64-point corner radius. When used as a mask for the previous view it will have the effect of turning it into a semi-circle:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> maskView <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
maskView<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>blue
maskView<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>cornerRadius <span class="token operator">=</span> <span class="token number">64</span>
redView<span class="token punctuation">.</span>mask <span class="token operator">=</span> maskView</code></pre>
<p>The blue background color won’t be visible –&nbsp;that’s just there to make sure all pixels in the mask are opaque.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-mask-one-view-with-another">How to mask one view with another</a></li><li><a href="/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert">How to convert a CGPoint in one UIView to another view using convert()</a></li><li><a href="/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture()</a></li><li><a href="/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition</a></li><li><a href="/example-code/language/how-to-append-one-array-to-another-array">How to append one array to another array</a></li></ul>
-->

:::

---

<TagLinks />