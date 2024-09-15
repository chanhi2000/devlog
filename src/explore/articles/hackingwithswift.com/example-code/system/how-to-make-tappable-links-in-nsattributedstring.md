---
lang: ko-KR
title: "How to make tappable links in NSAttributedString"
description: "Article(s) > How to make tappable links in NSAttributedString"
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
      content: "Article(s) > How to make tappable links in NSAttributedString"
    - property: og:description
      content: "How to make tappable links in NSAttributedString"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-make-tappable-links-in-nsattributedstring.html
date: 2019-06-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make tappable links in NSAttributedString | System - free Swift example code",
  "desc": "How to make tappable links in NSAttributedString",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-make-tappable-links-in-nsattributedstring",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<VidStack src="youtube/qr1XJMIziBg" />

<!-- TODO: 작성 -->

<!-- 
<p>You can make interactive hyperlinks in any attributed string, which in turn means you can add interactive hyperlinks to any UIKit control. If you're working with <code>UITextView</code> (which is likely, let's face it), you get basic hyperlinks just by enabling the "Links" data detector in Interface Builder, but that doesn't work for arbitrary strings – for example, maybe you want the words “tap here" to be interactive.</p>
<p>Here is a complete example of arbitrary hyperlinks using a <code>UITextView</code>. Make sure your text view has "Selectable" enabled, as this is required by iOS:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">UITextViewDelegate</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@IBOutlet</span> <span class="token keyword">var</span> textView<span class="token punctuation">:</span> <span class="token class-name">UITextView</span><span class="token operator">!</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> attributedString <span class="token operator">=</span> <span class="token class-name">NSMutableAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Want to learn iOS? You should visit the best source of free iOS tutorials!"</span></span><span class="token punctuation">)</span>
        attributedString<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token punctuation">.</span>link<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://www.hackingwithswift.com"</span></span><span class="token punctuation">,</span> range<span class="token punctuation">:</span> <span class="token class-name">NSRange</span><span class="token punctuation">(</span>location<span class="token punctuation">:</span> <span class="token number">19</span><span class="token punctuation">,</span> length<span class="token punctuation">:</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        textView<span class="token punctuation">.</span>attributedText <span class="token operator">=</span> attributedString
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">textView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> textView<span class="token punctuation">:</span> <span class="token class-name">UITextView</span><span class="token punctuation">,</span> shouldInteractWith <span class="token constant">URL</span><span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token keyword">in</span> characterRange<span class="token punctuation">:</span> <span class="token class-name">NSRange</span><span class="token punctuation">,</span> interaction<span class="token punctuation">:</span> <span class="token class-name">UITextItemInteraction</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>There are three important things to note about this technique. </p>
<p>First, your view controller should be set as the delegate for your text view in Interface Builder or in code.</p>
<p>Second, the tap cannot be very brief, which means quick taps are ignored by iOS. If you find find this annoying you might consider something like this: <a href="https://gist.github.com/benjaminbojko/c92ac19fe4db3302bd28">https://gist.github.com/benjaminbojko/c92ac19fe4db3302bd28</a>.</p>
<p>Third, this technique is easily used with custom URL schemes, e.g. <code>yourapp://</code>, which you can catch and parse inside <code>shouldInteractWith</code> to trigger your own behaviors.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-customize-the-way-links-are-opened">How to customize the way links are opened</a></li><li><a href="/quick-start/swiftui/how-to-open-web-links-in-safari">How to open web links in Safari</a></li><li><a href="/quick-start/swiftui/how-to-create-a-tappable-button">How to create a tappable button</a></li><li><a href="/quick-start/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape">How to control the tappable area of a view using contentShape()</a></li><li><a href="/quick-start/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable">How to fix a Form Picker or a NavigationLink that isn’t tappable</a></li></ul>
-->

:::

---

<TagLinks />