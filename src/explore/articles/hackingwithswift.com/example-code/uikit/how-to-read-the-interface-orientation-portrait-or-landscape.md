---
lang: ko-KR
title: "How to read the interface orientation: portrait or landscape?"
description: "Article(s) > How to read the interface orientation: portrait or landscape?"
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
      content: "Article(s) > How to read the interface orientation: portrait or landscape?"
    - property: og:description
      content: "How to read the interface orientation: portrait or landscape?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-read-the-interface-orientation-portrait-or-landscape.html
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
  "title": "How to read the interface orientation: portrait or landscape? | UIKit - free Swift example code",
  "desc": "How to read the interface orientation: portrait or landscape?",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-read-the-interface-orientation-portrait-or-landscape",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
<p>Apple generally doesn’t want developers to think about things like “portrait” and “landscape” because devices come in a range of sizes, and in the case of iPad you get slide over and split view on top. However, sometimes it’s just <em>useful</em>, particularly on iPhone where the difference between portrait and landscape is huge.</p>
<p>If you just want to read the <em>current</em> interface orientation you can do so using <code>UIApplication.shared.statusBarOrientation</code>, which will contain a value such as <code>.portraitUpsideDown</code>. Alternatively, you can use its <code>isLandscape</code> and <code>isPortrait</code> properties to check for both values of landscape or both values of portrait at once.</p>
<p>If you want your interface to adapt every time the user moves between landscape and portrait, you should check <code>UIApplication.shared.statusBarOrientation</code> inside the <code>willTransition(to:)</code> method, which is triggered when the trait collection of your app changes.</p>
<p>Something like this ought to do the trick:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">willTransition</span><span class="token punctuation">(</span>to newCollection<span class="token punctuation">:</span> <span class="token class-name">UITraitCollection</span><span class="token punctuation">,</span> with coordinator<span class="token punctuation">:</span> <span class="token class-name">UIViewControllerTransitionCoordinator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    coordinator<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>alongsideTransition<span class="token punctuation">:</span> <span class="token punctuation">{</span> context <span class="token keyword">in</span>
        <span class="token keyword">if</span> <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span>statusBarOrientation<span class="token punctuation">.</span>isLandscape <span class="token punctuation">{</span>
            <span class="token comment">// activate landscape changes</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// activate portrait changes</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-preview-your-layout-in-portrait-or-landscape">How to preview your layout in portrait or landscape</a></li><li><a href="/example-code/uikit/how-to-lock-a-view-controllers-orientation-using-supportedinterfaceorientations">How to lock a view controller’s orientation using supportedInterfaceOrientations</a></li><li><a href="/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards">SwiftUI vs Interface Builder and storyboards</a></li><li><a href="/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder">How to use IBInspectable to adjust values in Interface Builder</a></li><li><a href="/example-code/uikit/how-to-make-your-user-interface-in-code">How to make your user interface in code</a></li></ul>
-->

:::

---

<TagLinks />