---
lang: ko-KR
title: "How to activate multiple Auto Layout constraints using activate()"
description: "Article(s) > How to activate multiple Auto Layout constraints using activate()"
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
      content: "Article(s) > How to activate multiple Auto Layout constraints using activate()"
    - property: og:description
      content: "How to activate multiple Auto Layout constraints using activate()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-activate-multiple-auto-layout-constraints-using-activate.html
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
  "title": "How to activate multiple Auto Layout constraints using activate() | UIKit - free Swift example code",
  "desc": "How to activate multiple Auto Layout constraints using activate()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-activate-multiple-auto-layout-constraints-using-activate",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
<p>Using Auto Layout is the best way to create complex layouts that automatically adapt to their environment, but sometimes adding and removing lots of constraints can cause performance problems. </p>
<p>As an example, here’s a simple <code>UIView</code> with some color so you can see it on-screen:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> vw <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
vw<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
vw<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>red
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>vw<span class="token punctuation">)</span></code></pre>
<p>We could use Auto Layout anchors to give that constraints: stay 20 points from the leading and trailing edges of its superview, be fixed at 100 points in height, and center itself on-screen:</p>
<pre class=" language-swift"><code class=" language-swift">vw<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">,</span> constant<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
vw<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">,</span> constant<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
vw<span class="token punctuation">.</span>heightAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalToConstant<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
vw<span class="token punctuation">.</span>centerYAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>centerYAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
<p>However, while that approach is easy to read –&nbsp;and perfectly fine while you’re learning or if you don’t have complex layouts –&nbsp;there is a more efficient way. <code>NSLayoutConstraint</code> has a class method called <code>activate()</code> that activates multiple constraints at once, which should allow Auto Layout to update its entire layout as a single batch.</p>
<p>The code for this is straightforward: just pass in an array of constraints to the <code>activate()</code> method, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">activate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    vw<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">,</span> constant<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    vw<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">,</span> constant<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    vw<span class="token punctuation">.</span>heightAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalToConstant<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    vw<span class="token punctuation">.</span>centerYAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>centerYAnchor<span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>
<p>If you need to <em>deactivate</em> constraints, there’s an equivalent <code>deactivate()</code> method that is used the same way.</p>
<p><strong>Note:</strong> Auto Layout is smart enough to bulk actual layout changes even with the <code>isActive</code> approach –&nbsp;i.e., it will only call <code>layoutSubviews()</code> once per view even if you change four constraints –&nbsp;but Apple says that using <code>activate()</code> is definitely more efficient.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-create-auto-layout-constraints-in-code-constraintswithvisualformat">How to create Auto Layout constraints in code: constraints(withVisualFormat:)</a></li><li><a href="/example-code/uikit/how-to-identify-your-auto-layout-constraints">How to identify your Auto Layout constraints</a></li><li><a href="/quick-start/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed">How to activate different button behaviors when a modifier key is pressed</a></li><li><a href="/example-code/uikit/how-to-stop-auto-layout-and-autoresizing-masks-conflicting-translatesautoresizingmaskintoconstraints">How to stop Auto Layout and autoresizing masks conflicting: translatesAutoresizingMaskIntoConstraints</a></li><li><a href="/example-code/uikit/how-to-fix-auto-layout-problems">How to fix Auto Layout problems</a></li></ul>
-->

:::

---

<TagLinks />