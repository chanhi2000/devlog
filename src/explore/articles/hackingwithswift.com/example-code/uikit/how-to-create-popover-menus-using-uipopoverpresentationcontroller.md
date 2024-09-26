---
lang: ko-KR
title: "How to create popover menus using UIPopoverPresentationController"
description: "Article(s) > How to create popover menus using UIPopoverPresentationController"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create popover menus using UIPopoverPresentationController"
    - property: og:description
      content: "How to create popover menus using UIPopoverPresentationController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-popover-menus-using-uipopoverpresentationcontroller.html
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
  "title": "How to create popover menus using UIPopoverPresentationController | UIKit - free Swift example code",
  "desc": "How to create popover menus using UIPopoverPresentationController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-popover-menus-using-uipopoverpresentationcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
<p>Show a <code>UIAlertController</code> action sheet on iPad isn't as easy as on iPhone. The reason for this is simple: on iPhone the action sheet slides up from the bottom, effectively owning the user's attention until it's dismissed, whereas on iPad it could be shown from anywhere. In fact, if you just try and show one on an iPad like this, your app crashes:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Hello!"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"This is a test."</span></span><span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>actionSheet<span class="token punctuation">)</span>
<span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
<p>The solution is to use a <code>UIPopoverPresentationController</code>, which gets created for you when you try to access the <code>popoverPresentationController</code> property of a <code>UIAlertController</code>. With this, you can tell it where to show from (and what view those coordinates relate to) before presenting the action sheet, which makes it work correctly on iPad.</p>
<p>To rewrite the previous lines so they work, you'd do this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> popover <span class="token operator">=</span> ac<span class="token punctuation">.</span>popoverPresentationController
popover<span class="token operator">?</span><span class="token punctuation">.</span>sourceView <span class="token operator">=</span> view
popover<span class="token operator">?</span><span class="token punctuation">.</span>sourceRect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">)</span>

<span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-show-a-popover-view">How to show a popover view</a></li><li><a href="/example-code/uikit/how-to-create-custom-menus-using-uimenucontroller">How to create custom menus using UIMenuController</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li></ul>
-->

:::

---

<TagLinks />