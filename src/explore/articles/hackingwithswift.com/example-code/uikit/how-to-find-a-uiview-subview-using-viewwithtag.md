---
lang: ko-KR
title: "How to find a UIView subview using viewWithTag()"
description: "Article(s) > How to find a UIView subview using viewWithTag()"
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
      content: "Article(s) > How to find a UIView subview using viewWithTag()"
    - property: og:description
      content: "How to find a UIView subview using viewWithTag()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-find-a-uiview-subview-using-viewwithtag.html
date: 2019-09-26
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
  "title": "How to find a UIView subview using viewWithTag() | UIKit - free Swift example code",
  "desc": "How to find a UIView subview using viewWithTag()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-find-a-uiview-subview-using-viewwithtag",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>If you need a quick way to get hold of a view inside a complicated view hierarchy, you're looking for <code>viewWithTag()</code> – give it the tag to find and a view to search from, and this method will search all subviews, and all sub-subviews, and so on, until it finds a view with the matching tag number. The method returns an optional <code>UIView</code> because it might not find a view with that tag, so unwrap it carefully.</p>
<p>Here's an example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> foundView <span class="token operator">=</span> view<span class="token punctuation">.</span><span class="token function">viewWithTag</span><span class="token punctuation">(</span><span class="token number">0xDEADBEEF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    foundView<span class="token punctuation">.</span><span class="token function">removeFromSuperview</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Easy to remember tags such as <code>0xDEADBEEF</code> are quite common amongst coders.</p>
<p>NB: Extensive use of <code>viewWithTag()</code> is a sign of poor code structure. It's good for the occasional shortcut, but really shouldn't be relied on for serious development.</p>
<p>You see, if you use <code>viewWithTag()</code> to find some specific nested view then you’re effectively saying “there's a view that I have given a magic number to, and it's definitely a <code>UIImageView</code> (for example), so please find it and use it.” This means you're bypassing all the safety of the Swift compiler: that number might change or be removed, or the view in question might change type or be removed – and neither of those would cause problems or get caught.</p>
<p>If you use <code>viewWithTag()</code> rarely then it's fine, but if you find yourself doing it a lot then really you should be thinking about an alternative – making a custom subclass for your table view cell, for example.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-bring-a-subview-to-the-front-of-a-uiview">How to bring a subview to the front of a UIView</a></li><li><a href="/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a></li><li><a href="/example-code/uikit/how-to-force-a-uiview-to-redraw-setneedsdisplay">How to force a UIView to redraw: setNeedsDisplay()</a></li><li><a href="/example-code/calayer/how-to-add-a-border-outline-color-to-a-uiview">How to add a border outline color to a UIView</a></li><li><a href="/example-code/media/how-to-render-a-uiview-to-a-uiimage">How to render a UIView to a UIImage</a></li></ul>
-->

:::

---

<TagLinks />