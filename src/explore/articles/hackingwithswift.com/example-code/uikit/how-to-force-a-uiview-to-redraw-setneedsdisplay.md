---
lang: ko-KR
title: "How to force a UIView to redraw: setNeedsDisplay()"
description: "Article(s) > How to force a UIView to redraw: setNeedsDisplay()"
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
      content: "Article(s) > How to force a UIView to redraw: setNeedsDisplay()"
    - property: og:description
      content: "How to force a UIView to redraw: setNeedsDisplay()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-force-a-uiview-to-redraw-setneedsdisplay.html
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
  "title": "How to force a UIView to redraw: setNeedsDisplay() | UIKit - free Swift example code",
  "desc": "How to force a UIView to redraw: setNeedsDisplay()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-force-a-uiview-to-redraw-setneedsdisplay",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>All views and subclasses are rendered using the <code>drawRect()</code> method, but you should never call that method directly yourself. Instead, it gets called by the system whenever drawing is required, which allows it to to avoid multiple redraws if <code>drawRect()</code> is called several times in a row.</p>
<p>Instead, if you want a view to redraw immediately, you should call its <code>setNeedsDisplay()</code> method like this:</p>
<pre class=" language-swift"><code class=" language-swift">myButton<span class="token punctuation">.</span><span class="token function">setNeedsDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>That will ask UIKit to redraw the button using <code>drawRect()</code>, but only if a redraw is not already queued.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a></li><li><a href="/example-code/uikit/how-to-force-a-view-controller-to-use-light-or-dark-mode">How to force a view controller to use light or dark mode</a></li><li><a href="/example-code/language/when-is-it-safe-to-force-unwrap-optionals">When is it safe to force unwrap optionals?</a></li><li><a href="/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture()</a></li><li><a href="/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer">How to force views to one side inside a stack using Spacer</a></li></ul>
-->

:::

---

<TagLinks />