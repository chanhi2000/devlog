---
lang: ko-KR
title: "How to add a bar button to a navigation bar"
description: "Article(s) > How to add a bar button to a navigation bar"
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
      content: "Article(s) > How to add a bar button to a navigation bar"
    - property: og:description
      content: "How to add a bar button to a navigation bar"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar.html
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
  "title": "How to add a bar button to a navigation bar | UIKit - free Swift example code",
  "desc": "How to add a bar button to a navigation bar",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>Navigation bars are one of the most common user interface components in iOS, so being able to add buttons to them is something you'll do <em>a lot</em>. You can add buttons to the left and right side of a navigation bar, and you can add more than one to either side.</p>
<p>Note: usually bar button items don't belong to the <code>UINavigationBar</code> directly. Instead, they belong to a <code>UINavigationItem</code> that is currently active on the navigation bar, which in turn is usually owned by the view controller that is currently active on the screen.</p>
<p>So, to create bar button items for your view controller, you would add code like this to the <code>viewDidLoad()</code> method of a view controller:</p>
<pre class=" language-swift"><code class=" language-swift">navigationItem<span class="token punctuation">.</span>leftBarButtonItem <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>add<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>addTapped<span class="token punctuation">)</span><span class="token punctuation">)</span>
navigationItem<span class="token punctuation">.</span>rightBarButtonItem <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Add"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span>plain<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>addTapped<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>That will call the <code>addTapped()</code> method on the current view controller when either button is tapped. Note that the first one uses a standard system icon (recommended when it's available!) and the second one uses text.</p>
<p>Like I said, you can attach more than one bar button item to either side of the navigation bar, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> add <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>add<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>addTapped<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> play <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Play"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span>plain<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>playTapped<span class="token punctuation">)</span><span class="token punctuation">)</span>

navigationItem<span class="token punctuation">.</span>rightBarButtonItems <span class="token operator">=</span> <span class="token punctuation">[</span>add<span class="token punctuation">,</span> play<span class="token punctuation">]</span></code></pre>
<p>Because navigation bar items are attached to view controllers rather than the bar itself, UIKit is able to animate them sliding in and out as view controllers are pushed and popped from a navigation controller –&nbsp;it just replaces the buttons from the existing controller with the buttons from the new controller.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-add-a-button-to-a-navigation-bar-using-storyboards">How to add a button to a navigation bar using storyboards</a></li><li><a href="/example-code/uikit/how-to-customize-a-view-controllers-back-button-on-a-navigation-bar-backbarbuttonitem">How to customize a view controller’s back button on a navigation bar: backBarButtonItem</a></li><li><a href="/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems">How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems</a></li><li><a href="/quick-start/swiftui/how-to-add-bar-items-to-a-navigation-view">How to add bar items to a navigation view</a></li><li><a href="/quick-start/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars">How to hide the tab bar, navigation bar, or other toolbars</a></li></ul>
-->

:::

---

<TagLinks />