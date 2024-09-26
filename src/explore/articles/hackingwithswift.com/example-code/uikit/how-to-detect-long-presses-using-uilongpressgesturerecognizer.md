---
lang: ko-KR
title: "How to detect long presses using UILongPressGestureRecognizer"
description: "Article(s) > How to detect long presses using UILongPressGestureRecognizer"
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
      content: "Article(s) > How to detect long presses using UILongPressGestureRecognizer"
    - property: og:description
      content: "How to detect long presses using UILongPressGestureRecognizer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-long-presses-using-uilongpressgesturerecognizer.html
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
  "title": "How to detect long presses using UILongPressGestureRecognizer | UIKit - free Swift example code",
  "desc": "How to detect long presses using UILongPressGestureRecognizer",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-long-presses-using-uilongpressgesturerecognizer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
<p>UIKit has a dedicated gesture recognizer that can detect and respond to the user pressing and holding on a view. You can configure how many fingers should be used, whether the user needs to tap the screen first, and how much they are allowed to move their finger before the long press is considered to be a panning movement instead.</p>
<p>To get started, create a <code>UILongPressGestureRecognizer</code> that points to a method in your view controller:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> recognizer <span class="token operator">=</span> <span class="token class-name">UILongPressGestureRecognizer</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>longPressHappened<span class="token punctuation">)</span><span class="token punctuation">)</span>
view<span class="token punctuation">.</span><span class="token function">addGestureRecognizer</span><span class="token punctuation">(</span>recognizer<span class="token punctuation">)</span></code></pre>
<p>That will call a method called <code>longPressHappened()</code>, which needs to be marked with the <code>@objc</code> attribute so it can be called from the Objective-C system.</p>
<p>If you want the user to tap the screen <em>then</em> do a long press –&nbsp;i.e., press, release, then long press –&nbsp;set the <code>numberOfTapsRequired</code> property to 1 like this:</p>
<pre class=" language-swift"><code class=" language-swift">recognizer<span class="token punctuation">.</span>numberOfTapsRequired <span class="token operator">=</span> <span class="token number">1</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return">How to move to the next UITextField when the user presses return</a></li><li><a href="/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a></li><li><a href="/example-code/location/how-to-detect-ibeacons">How to detect iBeacons</a></li><li><a href="/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li></ul>
-->

:::

---

<TagLinks />