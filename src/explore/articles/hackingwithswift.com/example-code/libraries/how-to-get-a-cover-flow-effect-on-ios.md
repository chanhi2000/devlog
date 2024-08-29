---
lang: ko-KR
title: "How to get a Cover Flow effect on iOS"
description: "Article(s) > How to get a Cover Flow effect on iOS"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to get a Cover Flow effect on iOS"
    - property: og:description
      content: "How to get a Cover Flow effect on iOS"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-get-a-cover-flow-effect-on-ios.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to get a Cover Flow effect on iOS | Libraries - free Swift example code",
  "desc": "How to get a Cover Flow effect on iOS",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-get-a-cover-flow-effect-on-ios",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
<p>You can get an instant Cover Flow effect on iOS by using the marvelous and free iCarousel library. You can download it from <a href="https://github.com/nicklockwood/iCarousel">https://github.com/nicklockwood/iCarousel</a> and drop it into your Xcode project fairly easily by adding a bridging header (it's written in Objective-C).</p>
<p>If you haven't added Objective-C code to a Swift project before, follow these steps:</p>
<ul>
<li><a href="https://github.com/nicklockwood/iCarousel">Download iCarousel</a> and unzip it</li>
<li>Go into the folder you unzipped, open its iCarousel subfolder, then select iCarousel.h and iCarousel.m and drag them into your project navigation – that's the left pane in Xcode. Just below Info.plist is fine.</li>
<li>Check "Copy items if needed" then click Finish.</li>
<li>Xcode will prompt you with the message "Would you like to configure an Objective-C bridging header?" Click "Create Bridging Header"</li>
<li>You should see a new file in your project, named YourProjectName-Bridging-Header.h.</li>
<li>Add this line to the file: <code>#import "iCarousel.h"</code></li>
</ul>
<p>Once you've added iCarousel to your project you can start using it. Make sure you conform to both the <code>iCarouselDelegate</code> and <code>iCarouselDataSource</code> protocols.</p>
<p>Here's a complete, albeit simplified, example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> carousel <span class="token operator">=</span> <span class="token function">iCarousel</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    carousel<span class="token punctuation">.</span>dataSource <span class="token operator">=</span> <span class="token keyword">self</span>
    carousel<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token punctuation">.</span>coverFlow
    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>carousel<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">numberOfItems</span><span class="token punctuation">(</span><span class="token keyword">in</span> carousel<span class="token punctuation">:</span> iCarousel<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">carousel</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> carousel<span class="token punctuation">:</span> iCarousel<span class="token punctuation">,</span> viewForItemAt index<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> reusing view<span class="token punctuation">:</span> <span class="token class-name">UIView</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIView</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> imageView<span class="token punctuation">:</span> <span class="token class-name">UIImageView</span>

    <span class="token keyword">if</span> view <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        imageView <span class="token operator">=</span> view <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">UIImageView</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        imageView <span class="token operator">=</span> <span class="token class-name">UIImageView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    imageView<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> imageView
<span class="token punctuation">}</span></code></pre>
<p>That example loads the same image for all 10 carousel slides, so you'll need to change that to load data from your app.</p>
<p>If you have the time, do check out the other carousel types that iCarousel offers – they're quite remarkable!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader">How to create 3D effects like Cover Flow using ScrollView and GeometryReader</a></li><li><a href="/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller">How to create a page curl effect using UIPageViewController</a></li><li><a href="/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase">How to create a marching ants effect using lineDashPhase</a></li><li><a href="/quick-start/swiftui/how-to-add-visual-effect-blurs">How to add visual effect blurs</a></li><li><a href="/example-code/uikit/how-to-flip-a-uiview-with-a-3d-effect-transitionwith">How to flip a UIView with a 3D effect: transition(with:)</a></li></ul>
-->

:::

---

<TagLinks />