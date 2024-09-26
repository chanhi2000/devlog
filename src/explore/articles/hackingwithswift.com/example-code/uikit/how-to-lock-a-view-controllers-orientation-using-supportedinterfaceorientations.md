---
lang: ko-KR
title: "How to lock a view controller’s orientation using supportedInterfaceOrientations"
description: "Article(s) > How to lock a view controller’s orientation using supportedInterfaceOrientations"
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
      content: "Article(s) > How to lock a view controller’s orientation using supportedInterfaceOrientations"
    - property: og:description
      content: "How to lock a view controller’s orientation using supportedInterfaceOrientations"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-lock-a-view-controllers-orientation-using-supportedinterfaceorientations.html
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
  "title": "How to lock a view controller’s orientation using supportedInterfaceOrientations | UIKit - free Swift example code",
  "desc": "How to lock a view controller’s orientation using supportedInterfaceOrientations",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-lock-a-view-controllers-orientation-using-supportedinterfaceorientations",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>At the project level you can configure which orientations your whole app should support, but sometimes you want individual view controllers to support a subset of those. For example, you might want most of your app to work in any orientation, but one part to work specifically in portrait.</p>
<p>To configure this, you need to override the <code>supportedInterfaceOrientations</code> property in your <code>UIViewController</code> subclass, returning whichever orientations you want. Probably the most common use for this is to support all orientations for iPads, but <code>.allButUpsideDown</code> on iPhone. </p>
<p>Here’s some example code doing just that:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">var</span> supportedInterfaceOrientations<span class="token punctuation">:</span> <span class="token class-name">UIInterfaceOrientationMask</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token class-name">UIDevice</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span>userInterfaceIdiom <span class="token operator">==</span> <span class="token punctuation">.</span>phone <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">.</span>allButUpsideDown
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">.</span>all
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-read-the-interface-orientation-portrait-or-landscape">How to read the interface orientation: portrait or landscape?</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/xcode/how-to-lock-interface-builder-controls-to-stop-accidental-changes">How to lock Interface Builder controls to stop accidental changes</a></li><li><a href="/example-code/uikit/how-to-use-view-controller-containment">How to use view controller containment</a></li><li><a href="/example-code/uikit/how-to-find-the-view-controller-responsible-for-a-view">How to find the view controller responsible for a view</a></li></ul>
-->

:::

---

<TagLinks />