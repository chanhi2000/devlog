---
lang: ko-KR
title: "How to resize a custom font using UIFontMetrics"
description: "Article(s) > How to resize a custom font using UIFontMetrics"
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
      content: "Article(s) > How to resize a custom font using UIFontMetrics"
    - property: og:description
      content: "How to resize a custom font using UIFontMetrics"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics.html
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
  "title": "How to resize a custom font using UIFontMetrics | UIKit - free Swift example code",
  "desc": "How to resize a custom font using UIFontMetrics",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
<p>Dynamic Type allows developers to adjust the size of in-app text based on user accessibility preferences, but if you use custom fonts it’s easy to forget to add support.</p>
<p>To combine custom fonts with Dynamic Type, you need to use <code>UIFontMetrics</code>. You create instances of this class by specifying what type of content you want to measure –&nbsp;e.g. headline text or body text –&nbsp;and once that’s done you can pass it a font and ask it to provide a scaled font back. This converts your custom font and size into a scaled font suitable for the user’s preferences.</p>
<p>Here’s an example in code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> font <span class="token operator">=</span> <span class="token class-name">UIFont</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Helvetica"</span></span><span class="token punctuation">,</span> size<span class="token punctuation">:</span> <span class="token number">72</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fontMetrics <span class="token operator">=</span> <span class="token class-name">UIFontMetrics</span><span class="token punctuation">(</span>forTextStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>headline<span class="token punctuation">)</span>
    label<span class="token punctuation">.</span>font <span class="token operator">=</span> fontMetrics<span class="token punctuation">.</span><span class="token function">scaledFont</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> font<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font</a></li><li><a href="/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content">How to make UITableViewCells auto resize to their content</a></li><li><a href="/example-code/uikit/how-to-use-dynamic-type-to-resize-your-apps-text">How to use Dynamic Type to resize your app's text</a></li><li><a href="/example-code/uikit/how-to-let-users-choose-a-font-with-uifontpickerviewcontroller">How to let users choose a font with UIFontPickerViewController</a></li><li><a href="/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title">How to style the font in a UINavigationBar's title</a></li></ul>
-->

:::

---

<TagLinks />