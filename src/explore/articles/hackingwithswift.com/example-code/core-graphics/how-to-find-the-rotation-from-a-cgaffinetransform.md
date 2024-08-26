---
lang: ko-KR
title: "How to find the rotation from a CGAffineTransform"
description: "Article(s) > How to find the rotation from a CGAffineTransform"
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
      content: "Article(s) > How to find the rotation from a CGAffineTransform"
    - property: og:description
      content: "How to find the rotation from a CGAffineTransform"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-find-the-rotation-from-a-cgaffinetransform.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Graphics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-graphics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to find the rotation from a CGAffineTransform | Core Graphics - free Swift example code",
  "desc": "How to find the rotation from a CGAffineTransform",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-find-the-rotation-from-a-cgaffinetransform",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>A <code>CGAffineTransform</code> value combines scale, translation and rotation all at once, but if you just want to know its rotation value is then use this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">rotation</span><span class="token punctuation">(</span>from transform<span class="token punctuation">:</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Double</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">atan2</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">(</span>transform<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>transform<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-detect-device-rotation">How to detect device rotation</a></li><li><a href="/example-code/core-graphics/how-to-find-the-translation-from-a-cgaffinetransform">How to find the translation from a CGAffineTransform</a></li><li><a href="/example-code/core-graphics/how-to-find-the-scale-from-a-cgaffinetransform">How to find the scale from a CGAffineTransform</a></li><li><a href="/example-code/uikit/how-to-scale-stretch-move-and-rotate-uiviews-using-cgaffinetransform">How to scale, stretch, move, and rotate UIViews using CGAffineTransform</a></li><li><a href="/example-code/uikit/how-to-find-a-uiview-subview-using-viewwithtag">How to find a UIView subview using viewWithTag()</a></li></ul>
-->

:::

---

<TagLinks />