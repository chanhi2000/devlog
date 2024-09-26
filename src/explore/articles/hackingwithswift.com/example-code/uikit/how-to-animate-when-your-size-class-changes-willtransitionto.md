---
lang: ko-KR
title: "How to animate when your size class changes: willTransition(to:)"
description: "Article(s) > How to animate when your size class changes: willTransition(to:)"
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
      content: "Article(s) > How to animate when your size class changes: willTransition(to:)"
    - property: og:description
      content: "How to animate when your size class changes: willTransition(to:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto.html
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
  "title": "How to animate when your size class changes: willTransition(to:) | UIKit - free Swift example code",
  "desc": "How to animate when your size class changes: willTransition(to:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
<p>A size class change is usually triggered by your user rotating their device, but it can also happen for example when using the new iOS 9.0 multitasking to adjust window splits. Your UI needs to look great in all size classes it supports, which means you either create multiple variations of your layouts inside Interface Builder (this is the preferred route) or you make changes in code.</p>
<p>More often than not, I find myself mixing approaches: I do the vast majority of work inside IB, then make minor changes by hand inside the <code>willTransition(to:)</code> method. When this is called, you'll be given a <code>UIViewControllerTransitionCoordinator</code> object (yes, that's an extremely long name!) to work with, which allows you to animate your changes as needed.</p>
<p>To give you a very visible demonstration of how this works, I've written some example code below that adjusts the background color of the current view. <strong>You should run this using the iOS simulator using an iPhone rather than an iPad.</strong> The reason that this requires the iPhone simulator rather than the iPad simulator is that iPads have the same size classes in portrait and landscape, which makes the changes harder to spot.</p>
<p>Anyway, put this code into a view controller, then try it on an iPhone. When you rotate the simulator, the screen will change between red and blue, or green and blue, depending on the rotation. The important thing is that the change is animated because it's placed inside a call to <code>animate(alongsideTransition:)</code>, which automatically makes your animation match the rotation animation.</p>
<p>Using this method requires two closures: the first is where you make the changes you want to animate, and the second is code to be run when the animation completes. So, when the new vertical size class is compact, the screen will animate from blue to red, then jump back to blue. I realize this isn't directly useful in your own apps, but that's because you'll want to make your own changes – just take the code below and replace the background color changes with your own logic.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">willTransition</span><span class="token punctuation">(</span>to newCollection<span class="token punctuation">:</span> <span class="token class-name">UITraitCollection</span><span class="token punctuation">,</span> with coordinator<span class="token punctuation">:</span> <span class="token class-name">UIViewControllerTransitionCoordinator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">willTransition</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> newCollection<span class="token punctuation">,</span> with<span class="token punctuation">:</span> coordinator<span class="token punctuation">)</span>

    coordinator<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>alongsideTransition<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span>
        <span class="token keyword">if</span> newCollection<span class="token punctuation">.</span>verticalSizeClass <span class="token operator">==</span> <span class="token punctuation">.</span>compact <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>green
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>blue
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-detect-when-your-size-class-changes">How to detect when your size class changes</a></li><li><a href="/quick-start/swiftui/how-to-animate-the-size-of-text">How to animate the size of text</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-animate-views-using-animatewithduration">How to animate views using animate(withDuration:)</a></li><li><a href="/example-code/uikit/how-to-animate-views-with-spring-damping-using-animatewithduration">How to animate views with spring damping using animate(withDuration:)</a></li></ul>
-->

:::

---

<TagLinks />