---
lang: ko-KR
title: "How to use one-sided ranges"
description: "Article(s) > How to use one-sided ranges"
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
      content: "Article(s) > How to use one-sided ranges"
    - property: og:description
      content: "How to use one-sided ranges"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-one-sided-ranges.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use one-sided ranges | Language - free Swift example code",
  "desc": "How to use one-sided ranges",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-one-sided-ranges",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>One-sided ranges allow us to skip either the start or end of a range to have Swift infer the starting point for us. As an example, consider this array:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> characters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Dr Horrible"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Captain Hammer"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Penny"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Bad Horse"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Moist"</span></span><span class="token punctuation">]</span></code></pre>
<p>If we wanted to read only the first three items from that array, we could use <code>characters[..&lt;3]</code> –&nbsp;we skipped the start point, so Swift will automatically infer the start of the array:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> bigParts <span class="token operator">=</span> characters<span class="token punctuation">[</span><span class="token operator">..&lt;</span><span class="token number">3</span><span class="token punctuation">]</span></code></pre>
<p>That will create an array containing <code>["Dr Horrible", "Captain Hammer", "Penny"]</code>.</p>
<p>Similarly, we could skip the end of the range to have Swift infer the end of the array, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> smallParts <span class="token operator">=</span> characters<span class="token punctuation">[</span><span class="token number">3</span><span class="token operator">...</span><span class="token punctuation">]</span></code></pre>
<p>That will create an array containing <code>["Bad Horse", "Moist"]</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect">How to synchronize animations from one view to another with matchedGeometryEffect()</a></li><li><a href="/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer">How to force views to one side inside a stack using Spacer</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li><li><a href="/quick-start/swiftui/building-a-menu-using-list">Building a menu using List</a></li></ul>
-->

:::

---

<TagLinks />