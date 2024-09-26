---
lang: ko-KR
title: "How to detect edge swipes"
description: "Article(s) > How to detect edge swipes"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect edge swipes"
    - property: og:description
      content: "How to detect edge swipes"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-edge-swipes.html
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
  "title": "How to detect edge swipes | UIKit - free Swift example code",
  "desc": "How to detect edge swipes",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-edge-swipes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>Detecting pan gestures is easy enough with a regular <code>UIPanGestureRecognizer</code>, but there's a special gesture recognizer to use if you want to detect the user swiping from the edge of their screen. The example below demonstrates detecting the user swiping from the left edge of the screen:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> edgePan <span class="token operator">=</span> <span class="token class-name">UIScreenEdgePanGestureRecognizer</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>screenEdgeSwiped<span class="token punctuation">)</span><span class="token punctuation">)</span>
    edgePan<span class="token punctuation">.</span>edges <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token keyword">left</span>

    view<span class="token punctuation">.</span><span class="token function">addGestureRecognizer</span><span class="token punctuation">(</span>edgePan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">screenEdgeSwiped</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> recognizer<span class="token punctuation">:</span> <span class="token class-name">UIScreenEdgePanGestureRecognizer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> recognizer<span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token punctuation">.</span>recognized <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Screen edge swiped!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-make-uitableviewcell-separators-go-edge-to-edge">How to make UITableViewCell separators go edge to edge</a></li><li><a href="/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration</a></li><li><a href="/quick-start/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view">How to detect the location of a tap inside a view</a></li><li><a href="/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a></li><li><a href="/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage">CIDetectorTypeFace: How to detect faces in a UIImage</a></li></ul>
-->

:::

---

<TagLinks />