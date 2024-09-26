---
lang: ko-KR
title: "How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems"
description: "Article(s) > How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems"
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
      content: "Article(s) > How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems"
    - property: og:description
      content: "How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems.html
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
  "title": "How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems | UIKit - free Swift example code",
  "desc": "How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
<p>The <code>navigationItem</code> property of your view controller has two properties responsible for displaying multiple bar button items on either side of <code>UINavigationBar</code>: <code>leftBarButtonItems</code> for the left-hand side and <code>rightBarButtonItems</code> for the right-hand side. These are <em>not</em> to be confused with <code>leftBarButtonItem</code> and <code>rightBarButtonItem</code>, which are older properties designed to store single items.</p>
<p>One confusion when working with arrays of bar button items is the order in which they are displayed: they fill from the outside in. So, when using <code>leftBarButtonItems</code> they appear in the order of your array, and when using <code>rightBarButtonItems</code> they appear in <em>reverse</em> order.</p>
<p>For example, here’s some code to display a share button and an add button on the right-hand side of the navigation bar, and the add button will be on the <em>right</em> of the share button:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> share <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>action<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>shareTapped<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> add <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>add<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>addTapped<span class="token punctuation">)</span><span class="token punctuation">)</span>
navigationItem<span class="token punctuation">.</span>rightBarButtonItems <span class="token operator">=</span> <span class="token punctuation">[</span>add<span class="token punctuation">,</span> share<span class="token punctuation">]</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-add-a-flexible-space-to-a-uibarbuttonitem">How to add a flexible space to a UIBarButtonItem</a></li><li><a href="/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar</a></li><li><a href="/example-code/uikit/how-to-add-a-custom-view-to-a-uibarbuttonitem">How to add a custom view to a UIBarButtonItem</a></li><li><a href="/quick-start/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars">How to hide the tab bar, navigation bar, or other toolbars</a></li><li><a href="/example-code/uikit/how-to-add-a-button-to-a-navigation-bar-using-storyboards">How to add a button to a navigation bar using storyboards</a></li></ul>
-->

:::

---

<TagLinks />