---
lang: ko-KR
title: "How to create a page curl effect using UIPageViewController"
description: "Article(s) > How to create a page curl effect using UIPageViewController"
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
      content: "Article(s) > How to create a page curl effect using UIPageViewController"
    - property: og:description
      content: "How to create a page curl effect using UIPageViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller.html
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
  "title": "How to create a page curl effect using UIPageViewController | UIKit - free Swift example code",
  "desc": "How to create a page curl effect using UIPageViewController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
<p>When iBooks first launched in iOS 3.2, its page curl effect was almost addictive: it moved so fluently with your finger that it felt you were touching real paper. From iOS 5.0 on this page curl effect is available for every developer as part of the <code>UIPageViewController</code> class. Its API isn't immediately obvious to newbies, though, so I'm going to give you a complete example.</p>
<p>In the code below, the page view controller is created in <code>viewDidLoad()</code>. I also create five <code>UIViewControllers</code> to serve as pages inside the app, then tell the page view controller to start with the first one. I put in a couple of helper methods so that the view controllers could have random background colors so you can see it all working.</p>
<p>Most of the work is done by the <code>viewControllerBefore</code> and <code>viewControllerAfter</code> methods, which must either return a view controller to show before or after the current one (when the users starts to turn the page) or <code>nil</code> to mean the user is at the end and there are no more pages to show in that direction.</p>
<p>To make this work in your own app, you'll obviously want to replace the plain view controller pages with your own <code>UIViewController</code> subclass that does something more interesting. If you're showing quite a few different pages, you should probably create them on demand rather than creating an array of them all up front.</p>
<p>Anyway, here is the complete example – you can use this with the Xcode "Single View App” to get a page view controller up and running immediately:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">UIPageViewControllerDataSource</span><span class="token punctuation">,</span> <span class="token class-name">UIPageViewControllerDelegate</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> pageController<span class="token punctuation">:</span> <span class="token class-name">UIPageViewController</span><span class="token operator">!</span>
    <span class="token keyword">var</span> controllers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">UIViewController</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        pageController <span class="token operator">=</span> <span class="token class-name">UIPageViewController</span><span class="token punctuation">(</span>transitionStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>pageCurl<span class="token punctuation">,</span> navigationOrientation<span class="token punctuation">:</span> <span class="token punctuation">.</span>horizontal<span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
        pageController<span class="token punctuation">.</span>dataSource <span class="token operator">=</span> <span class="token keyword">self</span>
        pageController<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>

        <span class="token function">addChild</span><span class="token punctuation">(</span>pageController<span class="token punctuation">)</span>
        view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>pageController<span class="token punctuation">.</span>view<span class="token punctuation">)</span>

        <span class="token keyword">let</span> views <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"pageController"</span></span><span class="token punctuation">:</span> pageController<span class="token punctuation">.</span>view<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token class-name">AnyObject</span><span class="token punctuation">]</span>
        view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span><span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"H:|[pageController]|"</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> views<span class="token punctuation">)</span><span class="token punctuation">)</span>
        view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span><span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"V:|[pageController]|"</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> views<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">...</span> <span class="token number">5</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">UIViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            vc<span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token function">randomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            controllers<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>vc<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        pageController<span class="token punctuation">.</span><span class="token function">setViewControllers</span><span class="token punctuation">(</span><span class="token punctuation">[</span>controllers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> direction<span class="token punctuation">:</span> <span class="token punctuation">.</span>forward<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">pageViewController</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> pageViewController<span class="token punctuation">:</span> <span class="token class-name">UIPageViewController</span><span class="token punctuation">,</span> viewControllerBefore viewController<span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIViewController</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> index <span class="token operator">=</span> controllers<span class="token punctuation">.</span><span class="token function">firstIndex</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> viewController<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> index <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> controllers<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token nil constant">nil</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">pageViewController</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> pageViewController<span class="token punctuation">:</span> <span class="token class-name">UIPageViewController</span><span class="token punctuation">,</span> viewControllerAfter viewController<span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIViewController</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> index <span class="token operator">=</span> controllers<span class="token punctuation">.</span><span class="token function">firstIndex</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> viewController<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> index <span class="token operator">&lt;</span> controllers<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> controllers<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token nil constant">nil</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">randomCGFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">CGFloat</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span><span class="token function">arc4random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span><span class="token class-name">UInt32</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">randomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIColor</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token function">randomCGFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token function">randomCGFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token function">randomCGFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing">How to monitor WKWebView page load progress using key-value observing</a></li><li><a href="/quick-start/swiftui/how-to-enable-vertical-page-scrolling">How to enable vertical page scrolling</a></li><li><a href="/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase">How to create a marching ants effect using lineDashPhase</a></li><li><a href="/quick-start/swiftui/how-to-create-a-marching-ants-border-effect">How to create a marching ants border effect</a></li><li><a href="/example-code/libraries/how-to-get-a-cover-flow-effect-on-ios">How to get a Cover Flow effect on iOS</a></li></ul>
-->

:::

---

<TagLinks />