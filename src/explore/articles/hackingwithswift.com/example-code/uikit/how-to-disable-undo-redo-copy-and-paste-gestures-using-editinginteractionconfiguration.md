---
lang: ko-KR
title: "How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration"
description: "Article(s) > How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration"
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
      content: "Article(s) > How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration"
    - property: og:description
      content: "How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-disable-undo-redo-copy-and-paste-gestures-using-editinginteractionconfiguration.html
date: 2019-10-21
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
  "title": "How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration | UIKit - free Swift example code",
  "desc": "How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-disable-undo-redo-copy-and-paste-gestures-using-editinginteractionconfiguration",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!--
<p>iOS provides built-in gestures for undo, redo, copy, and paste in text views, triggered using a variety of three-finger moves – swiping left and right, or pinching in or out respectively. If you have existing gestures that collide with these, you can disable the system gestures by overriding the <code>editingInteractionConfiguration</code> property to return <code>.none</code>.</p>
<p>For example, if you have a <code>UITextView</code> as a property inside a <code>UIViewController</code> and you wanted to disable three-finger gesture support inside that view controller, you would override <code>editingInteractionConfiguration</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">var</span> editingInteractionConfiguration<span class="token punctuation">:</span> <span class="token class-name">UIEditingInteractionConfiguration</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token keyword">none</span>
<span class="token punctuation">}</span></code></pre>
<p>This property exists on <code>UIResponder</code>, which means you can override it at a number of other levels if you prefer.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-copy-objects-in-swift-using-copy">How to copy objects in Swift using copy()</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/how-to-let-the-user-paste-data-into-your-app">How to let the user paste data into your app</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li></ul>
-->

:::

---

<TagLinks />