---
lang: ko-KR
title: "How to request a user's location only once using requestLocation"
description: "Article(s) > How to request a user's location only once using requestLocation"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to request a user's location only once using requestLocation"
    - property: og:description
      content: "How to request a user's location only once using requestLocation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Location - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/location/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to request a user's location only once using requestLocation | Location - free Swift example code",
  "desc": "How to request a user's location only once using requestLocation",
  "link": "https://hackingwithswift.com/example-code/location/how-to-request-a-users-location-only-once-using-requestlocation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS has a simple way to request a user's location just once, and it's called <code>requestLocation()</code>. Calling this method returns immediately (meaning that your code carries on executing) but when iOS has managed (or failed) to get a fix on the user's location you will be told. Below is a complete example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">CoreLocation</span>
<span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">CLLocationManagerDelegate</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> manager <span class="token operator">=</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        manager<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>
        manager<span class="token punctuation">.</span><span class="token function">requestLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">locationManager</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> manager<span class="token punctuation">:</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">,</span> didUpdateLocations locations<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">CLLocation</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> location <span class="token operator">=</span> locations<span class="token punctuation">.</span>first <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found user's location: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">location</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">locationManager</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> manager<span class="token punctuation">:</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">,</span> didFailWithError error<span class="token punctuation">:</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to find user's location: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/learn-once-apply-anywhere">Learn once, apply anywhere</a></li><li><a href="/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest">How to look up a location with MKLocalSearch.Request</a></li><li><a href="/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:)</a></li><li><a href="/quick-start/swiftui/how-to-read-the-users-location-using-locationbutton">How to read the user’s location using LocationButton</a></li><li><a href="/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:)</a></li></ul>
-->

:::

---

<TagLinks />