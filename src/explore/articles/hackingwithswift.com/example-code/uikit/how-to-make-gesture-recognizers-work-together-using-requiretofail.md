---
lang: ko-KR
title: "How to make gesture recognizers work together using require(toFail:)"
description: "Article(s) > How to make gesture recognizers work together using require(toFail:)"
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
      content: "Article(s) > How to make gesture recognizers work together using require(toFail:)"
    - property: og:description
      content: "How to make gesture recognizers work together using require(toFail:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-gesture-recognizers-work-together-using-requiretofail.html
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
  "title": "How to make gesture recognizers work together using require(toFail:) | UIKit - free Swift example code",
  "desc": "How to make gesture recognizers work together using require(toFail:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-gesture-recognizers-work-together-using-requiretofail",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
<p>It’s common to have multiple gesture recognizers attached to a single view, all doing different things depending on the user’s taps on your screen. By default, iOS lets them fight for control, but usually you want to execute them in some sort of particular order: one gesture should only be matched if another failed. </p>
<p>For example, here are two gesture recognizers that exist on the same view:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> swipe <span class="token operator">=</span> <span class="token class-name">UISwipeGestureRecognizer</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>executeSwipe<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> tap <span class="token operator">=</span> <span class="token class-name">UITapGestureRecognizer</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>executeTap<span class="token punctuation">)</span><span class="token punctuation">)</span>

view<span class="token punctuation">.</span><span class="token function">addGestureRecognizer</span><span class="token punctuation">(</span>swipe<span class="token punctuation">)</span>
view<span class="token punctuation">.</span><span class="token function">addGestureRecognizer</span><span class="token punctuation">(</span>tap<span class="token punctuation">)</span></code></pre>
<p>A swipe gesture is a tap followed by a linear movement, whereas a tap is just a tap –&nbsp;we need to make sure the swipe gesture has definitely not been recognizer before the tap gesture is checked.</p>
<p>iOS often does a fairly good job of this, but there’s no need to leave it up to chance: if you call <code>require(toFail:)</code> on the tap gesture recognizer, passing in the swipe recognizer, iOS will definitely make sure they don’t compete:</p>
<pre class=" language-swift"><code class=" language-swift">tap<span class="token punctuation">.</span><span class="token function">require</span><span class="token punctuation">(</span>toFail<span class="token punctuation">:</span> swipe<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-add-a-gesture-recognizer-to-a-view">How to add a gesture recognizer to a view</a></li><li><a href="/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture()</a></li><li><a href="/quick-start/swiftui/how-to-create-gesture-chains-using-sequencedbefore">How to create gesture chains using sequenced(before:)</a></li><li><a href="/quick-start/swiftui/how-to-combine-text-views-together">How to combine text views together</a></li><li><a href="/example-code/uikit/how-to-detect-a-double-tap-gesture">How to detect a double tap gesture</a></li></ul>
-->

:::

---

<TagLinks />