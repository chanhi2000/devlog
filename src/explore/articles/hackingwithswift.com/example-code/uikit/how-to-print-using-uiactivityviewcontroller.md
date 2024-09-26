---
lang: ko-KR
title: "How to print using UIActivityViewController"
description: "Article(s) > How to print using UIActivityViewController"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to print using UIActivityViewController"
    - property: og:description
      content: "How to print using UIActivityViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-print-using-uiactivityviewcontroller.html
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
  "title": "How to print using UIActivityViewController | UIKit - free Swift example code",
  "desc": "How to print using UIActivityViewController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-print-using-uiactivityviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
<p>Printing in iOS used to be done using <code>UIPrintInteractionController</code>, and, while that still works, it has a much better replacement in the form of <code>UIActivityViewController</code>. This new class is responsible for taking a wide variety of actions of which printing is just one, but users can also tweet, post to Facebook, send by email, and any other action that has been registered by another app.</p>
<p>If you have a <code>UIImage</code> you want to print, you can just pass it in. If you want to print text, you can wrap it inside an <code>NSAttributedString</code> with some formatting, then place that inside a <code>UISimpleTextPrintFormatter</code> object, then print <em>that</em> – iOS automatically takes care of pagination, margins and more.</p>
<p>Below are two example functions that print an image and some text to help get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">share</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> <span class="token class-name">UIImage</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">UIActivityViewController</span><span class="token punctuation">(</span>activityItems<span class="token punctuation">:</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span><span class="token punctuation">,</span> applicationActivities<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">present</span><span class="token punctuation">(</span>vc<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">share</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> attrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">systemFont</span><span class="token punctuation">(</span>ofSize<span class="token punctuation">:</span> <span class="token number">72</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>foregroundColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">]</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> text<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> attrs<span class="token punctuation">)</span>
    <span class="token keyword">let</span> print <span class="token operator">=</span> <span class="token class-name">UISimpleTextPrintFormatter</span><span class="token punctuation">(</span>attributedText<span class="token punctuation">:</span> str<span class="token punctuation">)</span>

    <span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">UIActivityViewController</span><span class="token punctuation">(</span>activityItems<span class="token punctuation">:</span> <span class="token punctuation">[</span>print<span class="token punctuation">]</span><span class="token punctuation">,</span> applicationActivities<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
    <span class="token function">present</span><span class="token punctuation">(</span>vc<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-print-debug-text-in-swift">How to print debug text in Swift</a></li><li><a href="/example-code/uikit/how-to-share-content-with-uiactivityviewcontroller">How to share content with UIActivityViewController</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />