---
lang: ko-KR
title: "How to make a UIView fade out"
description: "Article(s) > How to make a UIView fade out"
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
  - ios-3.1
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make a UIView fade out"
    - property: og:description
      content: "How to make a UIView fade out"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-make-a-uiview-fade-out.html
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
  "title": "How to make a UIView fade out | CALayer - free Swift example code",
  "desc": "How to make a UIView fade out",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-make-a-uiview-fade-out",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.1

<!-- TODO: 작성 -->

<!-- 
<p>All views naturally fill the space assigned to them, but using <code>CAGradientLayer</code> as a mask view you can force a view to fade out at its edges.</p>
<p>To try it out, first create a test view with some obvious content like a background color:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> maskedView <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
maskedView<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>blue</code></pre>
<p>The next step is to create a <code>CAGradientLayer</code> at the same size as the view you want to mask:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> gradientMaskLayer <span class="token operator">=</span> <span class="token class-name">CAGradientLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
gradientMaskLayer<span class="token punctuation">.</span>frame <span class="token operator">=</span> maskedView<span class="token punctuation">.</span>bounds</code></pre>
<p>Now for the important part: to make the gradient work you need to use a clear color where nothing should be shown (where your view should be invisible) and white where the view should shine through fully.</p>
<p>By default <code>GAGradientLayer</code> spaces out its colors so they appear at equal distances, but we’re going to tell it to put the first color at 0, the second color at 0.1 (10% of the way in), the third color at 0.9 (90% of the way in), then the last color at 1 (the end). This 80% of our view is shown with full opacity:</p>
<pre class=" language-swift"><code class=" language-swift">gradientMaskLayer<span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">UIColor</span><span class="token punctuation">.</span>clear<span class="token punctuation">.</span>cgColor<span class="token punctuation">,</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>white<span class="token punctuation">.</span>cgColor<span class="token punctuation">,</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>white<span class="token punctuation">.</span>cgColor<span class="token punctuation">,</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>clear<span class="token punctuation">.</span>cgColor<span class="token punctuation">]</span>
gradientMaskLayer<span class="token punctuation">.</span>locations <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span></code></pre>
<p>Finally, you just need to add that mask to your view, then add the whole thing to a parent view so it can be shown:</p>
<pre class=" language-swift"><code class=" language-swift">maskedView<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>mask <span class="token operator">=</span> gradientMaskLayer
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>maskedView<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a></li><li><a href="/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out">How to get bordered buttons that stand out</a></li><li><a href="/example-code/language/how-to-break-out-of-multiple-loop-levels-using-labeled-statements">How to break out of multiple loop levels using labeled statements</a></li><li><a href="/example-code/system/how-to-spell-out-numbers-using-numberformatters-spellout-style">How to spell out numbers using NumberFormatter's spellOut style</a></li><li><a href="/example-code/uikit/how-to-make-a-uiview-fill-the-screen-using-auto-layout-anchors">How to make a UIView fill the screen using Auto Layout anchors</a></li></ul>
-->

:::

---

<TagLinks />