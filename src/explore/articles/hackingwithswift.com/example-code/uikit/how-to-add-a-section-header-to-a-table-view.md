---
lang: ko-KR
title: "How to add a section header to a table view"
description: "Article(s) > How to add a section header to a table view"
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
      content: "Article(s) > How to add a section header to a table view"
    - property: og:description
      content: "How to add a section header to a table view"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-section-header-to-a-table-view.html
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
  "title": "How to add a section header to a table view | UIKit - free Swift example code",
  "desc": "How to add a section header to a table view",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-section-header-to-a-table-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<VidStack src="youtube/09QyTxzxHYE" />

<!-- TODO: 작성 -->

<!--
<p>You can use the built-in iOS table section headers by returning a value from <code>titleForHeaderInSection</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> titleForHeaderInSection section<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"Section </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">section</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span>
<span class="token punctuation">}</span></code></pre>
<p>If you want to return a custom header view with something more than just some text, you should use <code>viewForHeaderInSection</code> instead, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span>tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> viewForHeaderInSection section<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIView</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> vw <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    vw<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red

    <span class="token keyword">return</span> vw
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/language/how-to-create-an-objective-c-bridging-header-to-use-code-in-swift">How to create an Objective-C bridging header to use code in Swift</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image">How to convert a SwiftUI view to an image</a></li></ul>
-->

:::

---

<TagLinks />