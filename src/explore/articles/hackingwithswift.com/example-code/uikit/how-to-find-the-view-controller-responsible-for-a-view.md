---
lang: ko-KR
title: "How to find the view controller responsible for a view"
description: "Article(s) > How to find the view controller responsible for a view"
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
      content: "Article(s) > How to find the view controller responsible for a view"
    - property: og:description
      content: "How to find the view controller responsible for a view"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-find-the-view-controller-responsible-for-a-view.html
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
  "title": "How to find the view controller responsible for a view | UIKit - free Swift example code",
  "desc": "How to find the view controller responsible for a view",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-find-the-view-controller-responsible-for-a-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>If you need to find the view controller that is responsible for a particular view, the easiest thing to do is walk the responder chain. This chain is built into all iOS apps, and lets you walk from one view up to its parent view, its grandparent view, and so on, until it reaches a view controller. You can even carry on going if you want, up through parent view controllers and ultimately to the app delegate.</p>
<p>To try it out, add this extension to <code>UIView</code> to your code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UIView</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">findViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIViewController</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> nextResponder <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>next <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> nextResponder
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token keyword">let</span> nextResponder <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>next <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">UIView</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> nextResponder<span class="token punctuation">.</span><span class="token function">findViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>You can now call <code>findViewController()</code> on any view, and you’ll get back nil or its view controller.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/uikit/how-to-use-view-controller-containment">How to use view controller containment</a></li><li><a href="/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image">How to convert a SwiftUI view to an image</a></li><li><a href="/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access">How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”</a></li></ul>
-->

:::

---

<TagLinks />