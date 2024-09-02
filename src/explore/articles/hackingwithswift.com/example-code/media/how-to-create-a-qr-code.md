---
lang: ko-KR
title: "How to create a QR code"
description: "Article(s) > How to create a QR code"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create a QR code"
    - property: og:description
      content: "How to create a QR code"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-create-a-qr-code.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Media - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/media/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create a QR code | Media - free Swift example code",
  "desc": "How to create a QR code",
  "link": "https://hackingwithswift.com/example-code/media/how-to-create-a-qr-code",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS has a built-in QR code generator, but it's a bit tricksy to use because it's exposed as a Core Image filter that needs various settings to be applied. Also, it generates codes where every bit is just one pixel across, which looks terrible if you try to stretch it inside an image view.</p>
<p>So, here's a simple function that wraps up QR code generation while also scaling up the QR code so it's a respectable size:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">generateQRCode</span><span class="token punctuation">(</span>from string<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIImage</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>using<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token class-name">Encoding</span><span class="token punctuation">.</span>ascii<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token keyword">let</span> filter <span class="token operator">=</span> <span class="token class-name">CIFilter</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"CIQRCodeGenerator"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        filter<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"inputMessage"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> transform <span class="token operator">=</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">(</span>scaleX<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token keyword">let</span> output <span class="token operator">=</span> filter<span class="token punctuation">.</span>outputImage<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">transformed</span><span class="token punctuation">(</span>by<span class="token punctuation">:</span> transform<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>ciImage<span class="token punctuation">:</span> output<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token nil constant">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token function">generateQRCode</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Hacking with Swift is the best iOS coding tutorial I've ever read!"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li><li><a href="/example-code/uikit/how-to-make-your-user-interface-in-code">How to make your user interface in code</a></li><li><a href="/example-code/uikit/how-to-add-drag-and-drop-to-your-app">How to add drag and drop to your app</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li></ul>
-->

:::

---

<TagLinks />