---
lang: ko-KR
title: "How to run code after a delay using asyncAfter() and perform()"
description: "Article(s) > How to run code after a delay using asyncAfter() and perform()"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to run code after a delay using asyncAfter() and perform()"
    - property: og:description
      content: "How to run code after a delay using asyncAfter() and perform()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-run-code-after-a-delay-using-asyncafter-and-perform.html
date: 2018-03-28
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
  "title": "How to run code after a delay using asyncAfter() and perform() | System - free Swift example code",
  "desc": "How to run code after a delay using asyncAfter() and perform()",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-run-code-after-a-delay-using-asyncafter-and-perform",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<VidStack src="youtube/1RD8-5_Zsws" />

<!-- TODO: 작성 -->

<!-- 
<p>There are two ways to run code after a delay using Swift: GCD and <code>perform(_:with:afterDelay:)</code>, but GCD has the advantage that it can run arbitrary blocks of code, whereas the <code>perform()</code> method runs methods.</p>
<p>So, using GCD we can write something that runs code after a half-second delay:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">asyncAfter</span><span class="token punctuation">(</span>deadline<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// your code here</span>
<span class="token punctuation">}</span></code></pre>
<p>An alternative option is to use <code>perform(_:with:afterDelay:)</code>, which lets you specify a method to call after a certain time has elapsed.</p>
<p>To call the <code>authenticate()</code> method after 1 second, you would use this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">perform</span><span class="token punctuation">(</span><span class="token other-directive property">#selector</span><span class="token punctuation">(</span>authenticate<span class="token punctuation">)</span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> afterDelay<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span></code></pre>
<p>Note: any method called using <code>perform(_:with:afterDelay:)</code> must be marked with the <code>@objc</code> attribute.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />