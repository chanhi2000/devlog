---
lang: ko-KR
title: "How to disable interactive swipe to dismiss for view controllers"
description: "Article(s) > How to disable interactive swipe to dismiss for view controllers"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to disable interactive swipe to dismiss for view controllers"
    - property: og:description
      content: "How to disable interactive swipe to dismiss for view controllers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-disable-interactive-swipe-to-dismiss-for-view-controllers.html
date: 2019-10-17
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
  "title": "How to disable interactive swipe to dismiss for view controllers | UIKit - free Swift example code",
  "desc": "How to disable interactive swipe to dismiss for view controllers",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-disable-interactive-swipe-to-dismiss-for-view-controllers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!--
<p>From iOS 13.0 onwards, whenever you present a <code>UIViewController</code> you get a card-like user interface where the new view controller can be dismissed by swiping downwards. While this works great for optional information, it works less well if you require the user to make a choice –&nbsp;if you want to stop the view controller from being dismissed until they have taken some sort of action inside the detail view controller.</p>
<p>Fortunately, UIKit has a dedicated property that deactivates the swipe to dismiss behavior: <code>isModalInPresentation</code>. This is false by default, but if you set it to true then <code>UIKit</code> will stop the interactive dismiss gesture and also ignore any events that occur outside of the detail view controller's bounds.</p>
<p>To try this with your own code, simply set <code>isModalInPresentation</code> to true for your view controller, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">DetailViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
vc<span class="token punctuation">.</span>isModalInPresentation <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">present</span><span class="token punctuation">(</span>vc<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
<p>This property can be set at any time, including long after the view controller has been shown.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-make-a-view-dismiss-itself">How to make a view dismiss itself</a></li><li><a href="/quick-start/swiftui/how-to-dismiss-the-keyboard-for-a-textfield">How to dismiss the keyboard for a TextField</a></li><li><a href="/quick-start/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls">How to dismiss the keyboard when the user scrolls</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/system/how-to-pass-data-between-two-view-controllers">How to pass data between two view controllers</a></li></ul>
-->

:::

---

<TagLinks />