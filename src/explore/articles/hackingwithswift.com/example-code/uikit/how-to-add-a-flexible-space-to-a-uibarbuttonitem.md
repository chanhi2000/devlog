---
lang: ko-KR
title: "How to add a flexible space to a UIBarButtonItem"
description: "Article(s) > How to add a flexible space to a UIBarButtonItem"
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
      content: "Article(s) > How to add a flexible space to a UIBarButtonItem"
    - property: og:description
      content: "How to add a flexible space to a UIBarButtonItem"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-flexible-space-to-a-uibarbuttonitem.html
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
  "title": "How to add a flexible space to a UIBarButtonItem | UIKit - free Swift example code",
  "desc": "How to add a flexible space to a UIBarButtonItem",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-flexible-space-to-a-uibarbuttonitem",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>There's a special kind of <code>UIBarButtonItem</code> called <code>flexibleSpace</code>, and this acts like a spring between other buttons, pushing them to one side. A flexible space will always expand to take up as much room as possible, splitting space evenly between other flexible spaces if they exist.</p>
<p>For example, if you add this button to a toolbar, it will sit on the left edge of the toolbar:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> refresh <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>refresh<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>refreshTapped<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>If you create and add a flexible space first, then that button will be pushed to the right edge as the flexible space expands to take up most of the toolbar. Here's how you create the flexible space:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> spacer <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>flexibleSpace<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems">How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems</a></li><li><a href="/example-code/uikit/how-to-add-a-custom-view-to-a-uibarbuttonitem">How to add a custom view to a UIBarButtonItem</a></li><li><a href="/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space">How to adjust the way an image is fitted to its space</a></li><li><a href="/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth()</a></li><li><a href="/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar</a></li></ul>
-->

:::

---

<TagLinks />