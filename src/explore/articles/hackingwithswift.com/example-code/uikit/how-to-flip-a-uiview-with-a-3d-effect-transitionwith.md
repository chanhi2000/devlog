---
lang: ko-KR
title: "How to flip a UIView with a 3D effect: transition(with:)"
description: "Article(s) > How to flip a UIView with a 3D effect: transition(with:)"
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
      content: "Article(s) > How to flip a UIView with a 3D effect: transition(with:)"
    - property: og:description
      content: "How to flip a UIView with a 3D effect: transition(with:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile.html
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
  "title": "How to flip a UIView with a 3D effect: transition(with:) | UIKit - free Swift example code",
  "desc": "How to flip a UIView with a 3D effect: transition(with:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>iOS has a built-in way to transition between views, and you can use this to produce 3D flips in just a few lines of code. Here's a basic example that flips between two views:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> transitionOptions<span class="token punctuation">:</span> <span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token class-name">AnimationOptions</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>transitionFlipFromRight<span class="token punctuation">,</span> <span class="token punctuation">.</span>showHideTransitionViews<span class="token punctuation">]</span>

    <span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> firstView<span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> transitionOptions<span class="token punctuation">,</span> animations<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>firstView<span class="token punctuation">.</span>isHidden <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> secondView<span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> transitionOptions<span class="token punctuation">,</span> animations<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>secondView<span class="token punctuation">.</span>isHidden <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Here's a basic test harness you can use to see that method in action:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> firstView<span class="token punctuation">:</span> <span class="token class-name">UIView</span><span class="token operator">!</span>
<span class="token keyword">var</span> secondView<span class="token punctuation">:</span> <span class="token class-name">UIView</span><span class="token operator">!</span>

<span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    firstView <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    secondView <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    firstView<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
    secondView<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>blue

    secondView<span class="token punctuation">.</span>isHidden <span class="token operator">=</span> <span class="token boolean">true</span>

    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>firstView<span class="token punctuation">)</span>
    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>secondView<span class="token punctuation">)</span>

    <span class="token function">perform</span><span class="token punctuation">(</span><span class="token other-directive property">#selector</span><span class="token punctuation">(</span>flip<span class="token punctuation">)</span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> afterDelay<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Try experimenting with the different values of <code>UIView.AnimationOptions</code> to see what other animations are available.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-create-a-custom-transition">How to create a custom transition</a></li><li><a href="/example-code/games/how-to-change-skscene-with-a-transition-presentscene">How to change SKScene with a transition: presentScene()</a></li><li><a href="/quick-start/swiftui/how-to-add-and-remove-views-with-a-transition">How to add and remove views with a transition</a></li><li><a href="/quick-start/swiftui/how-to-make-views-scroll-with-a-custom-transition">How to make views scroll with a custom transition</a></li><li><a href="/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a></li></ul>
-->

:::

---

<TagLinks />