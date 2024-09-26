---
lang: ko-KR
title: "How set different widths for a UISegmentedControl's elements"
description: "Article(s) > How set different widths for a UISegmentedControl's elements"
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
      content: "Article(s) > How set different widths for a UISegmentedControl's elements"
    - property: og:description
      content: "How set different widths for a UISegmentedControl's elements"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-set-different-widths-for-a-uisegmentedcontrols-elements.html
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
  "title": "How set different widths for a UISegmentedControl's elements | UIKit - free Swift example code",
  "desc": "How set different widths for a UISegmentedControl's elements",
  "link": "https://hackingwithswift.com/example-code/uikit/how-set-different-widths-for-a-uisegmentedcontrols-elements",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
<p>Segmented controls give each segment equal width by default, which is aesthetically pleasing when you have space to spare but technically irritating when space is tight. Rather than try to squash too much into a small space, you have two options: set custom segment widths, or ask iOS to size them individually for you.</p>
<p>The first option looks like this:</p>
<pre class=" language-swift"><code class=" language-swift">segmentedControl<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> forSegmentAt<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
segmentedControl<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> forSegmentAt<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span></code></pre>
<p>That gives you individually sized segments while sticking to a value you define, which means you get to tweak the aesthetics as you want. The second option looks like this:</p>
<pre class=" language-swift"><code class=" language-swift">segmentedControl<span class="token punctuation">.</span>apportionsSegmentWidthsByContent <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
<p>That hands full control over to iOS, which is probably the best thing to do most of the time.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/enabling-and-disabling-elements-in-forms">Enabling and disabling elements in forms</a></li><li><a href="/example-code/language/checking-all-array-elements-match-a-condition-allsatisfy">Checking all array elements match a condition: allSatisfy()</a></li><li><a href="/example-code/language/removing-matching-elements-from-a-collection-removeallwhere">Removing matching elements from a collection: removeAll(where:)</a></li><li><a href="/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet</a></li><li><a href="/example-code/language/when-to-use-a-set-rather-than-an-array">When to use a set rather than an array</a></li></ul>
-->

:::

---

<TagLinks />