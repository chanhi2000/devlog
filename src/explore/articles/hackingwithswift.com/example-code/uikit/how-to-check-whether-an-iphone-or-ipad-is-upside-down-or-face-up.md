---
lang: ko-KR
title: "How to check whether an iPhone or iPad is upside down or face up"
description: "Article(s) > How to check whether an iPhone or iPad is upside down or face up"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check whether an iPhone or iPad is upside down or face up"
    - property: og:description
      content: "How to check whether an iPhone or iPad is upside down or face up"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up.html
date: 2019-11-28
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
  "title": "How to check whether an iPhone or iPad is upside down or face up | UIKit - free Swift example code",
  "desc": "How to check whether an iPhone or iPad is upside down or face up",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
<p>If your app needs to know the orientation of the user’s device –&nbsp;face up or face down – it takes only four steps to implement.</p>
<p>First, write a method that can be called when the device orientation changes:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">orientationChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span></code></pre>
<p>That needs to be marked <code>@objc</code> because it’s going to be called by the system whenever the accelerometer signals the orientation has changed. So, step two is to request those changes be sent to the new method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">NotificationCenter</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>orientationChanged<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token class-name">UIDevice</span><span class="token punctuation">.</span>orientationDidChangeNotification<span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>Third, ask the system to start checking for orientation changes:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIDevice</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">beginGeneratingDeviceOrientationNotifications</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>You shouldn’t leave that on all the time unless you need it; you should call <code>endGeneratingDeviceOrientationNotifications()</code> when you’re done with the data.</p>
<p>Finally, you can read the <code>orientation</code> property of the current <code>UIDevice</code> to see what the orientation currently is. This property doesn’t work correctly unless you already asked UIKit to begin generating device orientation notifications, which is why the above steps were required:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token class-name">UIDevice</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span>orientation <span class="token operator">==</span> <span class="token punctuation">.</span>faceDown <span class="token punctuation">{</span>
    <span class="token comment">// it's face down</span>
<span class="token punctuation">}</span></code></pre>
<p>You probably want that inside <code>orientationChanged()</code> so that it reads values as they change.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-read-the-battery-level-of-an-iphone-or-ipad">How to read the battery level of an iPhone or iPad</a></li><li><a href="/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock()</a></li><li><a href="/quick-start/swiftui/how-to-scale-a-view-up-or-down">How to scale a view up or down</a></li><li><a href="/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition</a></li><li><a href="/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a></li></ul>
-->

:::

---

<TagLinks />