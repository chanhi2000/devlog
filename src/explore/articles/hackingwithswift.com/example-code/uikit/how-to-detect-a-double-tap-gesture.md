---
lang: ko-KR
title: "How to detect a double tap gesture"
description: "Article(s) > How to detect a double tap gesture"
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
      content: "Article(s) > How to detect a double tap gesture"
    - property: og:description
      content: "How to detect a double tap gesture"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-a-double-tap-gesture.html
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
  "title": "How to detect a double tap gesture | UIKit - free Swift example code",
  "desc": "How to detect a double tap gesture",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-a-double-tap-gesture",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
<p>The iOS <code>UITapGestureRecognizer</code> class has a built-in way to detect a double tap on any view. All you need to do is create the recognizer, set its <code>numberOfTapsRequired</code> property to 2, then add it to the view you want to monitor.</p>
<p>Here's an example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> tap <span class="token operator">=</span> <span class="token class-name">UITapGestureRecognizer</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>doubleTapped<span class="token punctuation">)</span><span class="token punctuation">)</span>
    tap<span class="token punctuation">.</span>numberOfTapsRequired <span class="token operator">=</span> <span class="token number">2</span>
    view<span class="token punctuation">.</span><span class="token function">addGestureRecognizer</span><span class="token punctuation">(</span>tap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">doubleTapped</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something here</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-read-tap-and-double-tap-gestures">How to read tap and double-tap gestures</a></li><li><a href="/quick-start/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view">How to detect the location of a tap inside a view</a></li><li><a href="/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view">How to add a gesture recognizer to a view</a></li><li><a href="/example-code/uikit/how-to-let-users-tap-on-a-uitableviewcell-while-editing-is-enabled">How to let users tap on a UITableViewCell while editing is enabled</a></li><li><a href="/example-code/uikit/how-to-make-gesture-recognizers-work-together-using-requiretofail">How to make gesture recognizers work together using require(toFail:)</a></li></ul>
-->

:::

---

<TagLinks />