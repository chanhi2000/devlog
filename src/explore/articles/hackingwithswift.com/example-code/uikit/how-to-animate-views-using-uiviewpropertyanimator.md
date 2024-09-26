---
lang: ko-KR
title: "How to animate views using UIViewPropertyAnimator"
description: "Article(s) > How to animate views using UIViewPropertyAnimator"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to animate views using UIViewPropertyAnimator"
    - property: og:description
      content: "How to animate views using UIViewPropertyAnimator"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-animate-views-using-uiviewpropertyanimator.html
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
  "title": "How to animate views using UIViewPropertyAnimator | UIKit - free Swift example code",
  "desc": "How to animate views using UIViewPropertyAnimator",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-animate-views-using-uiviewpropertyanimator",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
<p>iOS 10 introduced a new closure-based animation class in the form of <code>UIViewPropertyAnimator</code>. Amongst other things, it lets you interactively adjust the position of an animation, making it jump to any point in time that we need – a technique commonly called <em>scrubbing</em>. </p>
<p>To try it yourself, create a new Single View App project targeting iPad, then lock it so that it supports landscape only and use Interface Builder to embed its view controller inside a navigation controller.</p>
<p>To demonstrate animation scrubbing we’re going to create a <code>UISlider</code> then fix it to the bottom of our view, spanning the full width.</p>
<p>Open ViewController.swift and add this code to <code>viewDidLoad()</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> slider <span class="token operator">=</span> <span class="token class-name">UISlider</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
slider<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>slider<span class="token punctuation">)</span>

slider<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
slider<span class="token punctuation">.</span>widthAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>widthAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
<p>When that slider is dragged from left to right, it will count from 0 to 1 and we’re going to use that to manipulate an animation of a red box sliding across the screen.</p>
<p>Add this code to <code>viewDidLoad()</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> redBox <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">64</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
redBox<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
redBox<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
redBox<span class="token punctuation">.</span>center<span class="token punctuation">.</span>y <span class="token operator">=</span> view<span class="token punctuation">.</span>center<span class="token punctuation">.</span>y
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>redBox<span class="token punctuation">)</span></code></pre>
<p>That creates a 128x128 red box, centered vertically and part-way off the left edge of the screen. Even though we’re going to manipulate it elsewhere in the app, we <em>don’t</em> need a property for it –&nbsp;<code>UIViewPropertyAnimator</code> works using closures, so it will capture the box for us.</p>
<p>Next, add a property for the animator:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> animator<span class="token punctuation">:</span> <span class="token class-name">UIViewPropertyAnimator</span><span class="token operator">!</span></code></pre>
<p>We’re going to make the animation move the box from the left to the right, while spinning around and scaling down to nothing. All that will happen over two seconds, with an ease-in-ease-out curve. Add this to the end of <code>viewDidLoad()</code>:</p>
<pre class=" language-swift"><code class=" language-swift">animator <span class="token operator">=</span> <span class="token class-name">UIViewPropertyAnimator</span><span class="token punctuation">(</span>duration<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> curve<span class="token punctuation">:</span> <span class="token punctuation">.</span>easeInOut<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">,</span> redBox<span class="token punctuation">]</span> <span class="token keyword">in</span>
    redBox<span class="token punctuation">.</span>center<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>frame<span class="token punctuation">.</span>width
    redBox<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">(</span>rotationAngle<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">.</span>pi<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scaledBy</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0.001</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0.001</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That doesn’t actually <em>run</em> the animation, which is OK for now. Instead, it creates the animation and stores it away in the <code>animator</code> property, ready for us to manipulate.</p>
<p>At this point, we have a slider on the screen and a red box too, so we just need to connect it all. When the slider is moved, its <code>.valueChanged</code> event will be triggered, and we can add a method to catch that. We can actually feed the slider’s <code>value</code> property – the number from 0.0 to 1.0 – directly into the <code>fractionComplete</code> property of our <code>UIViewPropertyAnimator</code>, which controls how much of the animation has happened, and UIKit will take care of the rest for us.</p>
<p>Add this method to <code>ViewController</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">sliderChanged</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> sender<span class="token punctuation">:</span> <span class="token class-name">UISlider</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    animator<span class="token punctuation">.</span>fractionComplete <span class="token operator">=</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span>sender<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>To make that get called by the slider, add this to <code>viewDidLoad()</code>:</p>
<pre class=" language-swift"><code class=" language-swift">slider<span class="token punctuation">.</span><span class="token function">addTarget</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>sliderChanged<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>valueChanged<span class="token punctuation">)</span></code></pre>
<p>That’s it! We’ve created the user interface, prepared an animation, then connected the slider’s value to the animation’s progress. If you run the app now you’ll see you can drag the slider from left to right and back again to manipulate the box –&nbsp;you literally have exact control over its position in the animation.</p>
<p>If you wanted to make the animation play the traditional way – i.e., without user control –&nbsp;just call its <code>startAnimation()</code> method. You can also set <code>animator.isReversed = true</code> to force the animation to move backwards, ultimately returning to its starting state.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-make-uiviewpropertyanimator-scrub-with-a-custom-curve-scrubslinearly">How to make UIViewPropertyAnimator scrub with a custom curve: scrubsLinearly</a></li><li><a href="/example-code/uikit/how-to-animate-views-with-spring-damping-using-animatewithduration">How to animate views with spring damping using animate(withDuration:)</a></li><li><a href="/example-code/uikit/how-to-animate-views-using-animatewithduration">How to animate views using animate(withDuration:)</a></li><li><a href="/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto">How to animate when your size class changes: willTransition(to:)</a></li><li><a href="/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview">How to animate a blur effect using UIVisualEffectView</a></li></ul>
-->

:::

---

<TagLinks />