---
lang: ko-KR
title: "How to make a background image run under the safe area"
description: "Article(s) > How to make a background image run under the safe area"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make a background image run under the safe area"
    - property: og:description
      content: "How to make a background image run under the safe area"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-a-background-image-run-under-the-safe-area.html
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
  "title": "How to make a background image run under the safe area | UIKit - free Swift example code",
  "desc": "How to make a background image run under the safe area",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-a-background-image-run-under-the-safe-area",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
<p>Broadly speaking it’s important to place your views so they are inside the safe area layout guide, but there are some occasions when you want to ignore that and have some that run <em>under</em> the safe area. Apple’s Weather app, for example, goes edge to edge with background weather graphics, then places the important content inside the safe area.</p>
<p>This is easy enough to accomplish: just make sure your background view goes edge to edge using your main view’s leading, trailing, top, and bottom anchors, then use the safe area layout guide’s anchors for your foreground view.</p>
<p>Here’s how that looks in code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> background <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
background<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
background<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>red
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>background<span class="token punctuation">)</span>

<span class="token keyword">let</span> foreground <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
foreground<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
foreground<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>blue
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>foreground<span class="token punctuation">)</span>

background<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
background<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
background<span class="token punctuation">.</span>topAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>topAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
background<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>

foreground<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
foreground<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
foreground<span class="token punctuation">.</span>topAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>topAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
foreground<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/what-is-the-safe-area-layout-guide">What is the safe area layout guide?</a></li><li><a href="/quick-start/swiftui/how-to-place-content-outside-the-safe-area">How to place content outside the safe area</a></li><li><a href="/quick-start/swiftui/how-to-inset-the-safe-area-with-custom-content">How to inset the safe area with custom content</a></li><li><a href="/quick-start/swiftui/how-to-add-extra-padding-to-the-safe-area">How to add extra padding to the safe area</a></li><li><a href="/quick-start/swiftui/how-to-place-content-into-the-safe-area">How to place content into the safe area</a></li></ul>
-->

:::

---

<TagLinks />