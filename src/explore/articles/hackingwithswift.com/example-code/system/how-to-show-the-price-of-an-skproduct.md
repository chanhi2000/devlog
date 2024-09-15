---
lang: ko-KR
title: "How to show the price of an SKProduct"
description: "Article(s) > How to show the price of an SKProduct"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to show the price of an SKProduct"
    - property: og:description
      content: "How to show the price of an SKProduct"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-show-the-price-of-an-skproduct.html
date: 2021-03-03
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to show the price of an SKProduct | System - free Swift example code",
  "desc": "How to show the price of an SKProduct",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-show-the-price-of-an-skproduct",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
<p>StoreKit products come with <code>price</code> and <code>priceLocale</code> properties but it takes a little effort to combine those two together in order to show a user-friendly price in your interface.</p>
<p>Fortunately, one small extension to <code>SKProduct</code> will provide you with a <code>localizedPrice</code> property you can use to do that work for you:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">SKProduct</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> localizedPrice<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> formatter <span class="token operator">=</span> <span class="token class-name">NumberFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        formatter<span class="token punctuation">.</span>numberStyle <span class="token operator">=</span> <span class="token punctuation">.</span>currency
        formatter<span class="token punctuation">.</span>locale <span class="token operator">=</span> priceLocale
        <span class="token keyword">return</span> formatter<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> price<span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-show-an-alert">How to show an alert</a></li><li><a href="/quick-start/swiftui/how-to-show-a-map-view">How to show a Map view</a></li><li><a href="/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view">How to show multiple alerts in a single view</a></li><li><a href="/example-code/uikit/how-do-you-show-a-modal-view-controller-when-a-uitabbarcontroller-tab-is-tapped">How do you show a modal view controller when a UITabBarController tab is tapped?</a></li><li><a href="/quick-start/swiftui/how-to-show-an-action-sheet">How to show an action sheet</a></li></ul>
-->

:::

---

<TagLinks />