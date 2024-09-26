---
lang: ko-KR
title: "How to force a view controller to use light or dark mode"
description: "Article(s) > How to force a view controller to use light or dark mode"
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
      content: "Article(s) > How to force a view controller to use light or dark mode"
    - property: og:description
      content: "How to force a view controller to use light or dark mode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-force-a-view-controller-to-use-light-or-dark-mode.html
date: 2019-06-03
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
  "title": "How to force a view controller to use light or dark mode | UIKit - free Swift example code",
  "desc": "How to force a view controller to use light or dark mode",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-force-a-view-controller-to-use-light-or-dark-mode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!--
<p>By default all instances of <code>UIViewController</code> are set to automatically adapt their color appearance to match the user’s system preferences, but if you want you can force some or all of your app to use light or dark mode by setting the <code>overrideUserInterfaceStyle</code> property of your view controller to <code>.light</code> or <code>.dark</code>.</p>
<p>For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        overrideUserInterfaceStyle <span class="token operator">=</span> <span class="token punctuation">.</span>dark    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>This setting exists on other containers, such as <code>UIWindow</code> and <code>UIView</code>, and the value of this property cascades to everything inside the thing you change. So, if you set your main <code>UIWindow</code> to always have dark mode, then all view controllers and views inside it will always have dark mode.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode">How to show different images and other views in light or dark mode</a></li><li><a href="/quick-start/swiftui/how-to-preview-your-layout-in-light-and-dark-mode">How to preview your layout in light and dark mode</a></li><li><a href="/example-code/uicolor/how-to-use-semantic-colors-to-help-your-ios-app-adapt-to-dark-mode">How to use semantic colors to help your iOS app adapt to dark mode</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-detect-dark-mode">How to detect dark mode</a></li></ul>
-->

:::

---

<TagLinks />