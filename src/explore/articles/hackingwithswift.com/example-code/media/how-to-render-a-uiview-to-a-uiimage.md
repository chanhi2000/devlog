---
lang: ko-KR
title: "How to render a UIView to a UIImage"
description: "Article(s) > How to render a UIView to a UIImage"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render a UIView to a UIImage"
    - property: og:description
      content: "How to render a UIView to a UIImage"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-render-a-uiview-to-a-uiimage.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Media - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/media/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to render a UIView to a UIImage | Media - free Swift example code",
  "desc": "How to render a UIView to a UIImage",
  "link": "https://hackingwithswift.com/example-code/media/how-to-render-a-uiview-to-a-uiimage",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
<p>You can render any <code>UIView</code> into a <code>UIImage</code> in just four lines of code, and that even handles drawing all the subviews automatically. Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> view<span class="token punctuation">.</span>bounds<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
<span class="token keyword">let</span> image <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
    view<span class="token punctuation">.</span><span class="token function">drawHierarchy</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> view<span class="token punctuation">.</span>bounds<span class="token punctuation">,</span> afterScreenUpdates<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Helpfully, that code works equally well no matter what the view contains - if you're using UIKit, SpriteKit, Metal or whatever, it all works.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a></li><li><a href="/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage">How to read the average color of a UIImage using CIAreaAverage</a></li><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li><li><a href="/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData()</a></li><li><a href="/example-code/media/how-to-pixellate-a-uiimage">How to pixellate a UIImage</a></li></ul>
-->

:::

---

<TagLinks />