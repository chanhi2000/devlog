---
lang: ko-KR
title: "How to turn on the camera flashlight to make a torch"
description: "Article(s) > How to turn on the camera flashlight to make a torch"
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
      content: "Article(s) > How to turn on the camera flashlight to make a torch"
    - property: og:description
      content: "How to turn on the camera flashlight to make a torch"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-turn-on-the-camera-flashlight-to-make-a-torch.html
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
  "title": "How to turn on the camera flashlight to make a torch | Media - free Swift example code",
  "desc": "How to turn on the camera flashlight to make a torch",
  "link": "https://hackingwithswift.com/example-code/media/how-to-turn-on-the-camera-flashlight-to-make-a-torch",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!-- 
<p>There is one simple property required to enable or disable a device's torch, but you do need to put in some wrapper code to make it work safely. Specifically, you need to use the <code>lockForConfiguration()</code> and <code>unlockForConfiguration()</code> methods of the <code>AVCaptureDevice</code> class in order to make sure only one app can control the torch at a time.</p>
<p>You will need to import the AVFoundation framework, because that's where the <code>AVCaptureDevice</code> class comes from. Once that's done, add this function to your code and you're good to code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">toggleTorch</span><span class="token punctuation">(</span>on<span class="token punctuation">:</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> device <span class="token operator">=</span> <span class="token class-name">AVCaptureDevice</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>video<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token keyword">if</span> device<span class="token punctuation">.</span>hasTorch <span class="token punctuation">{</span>
        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> device<span class="token punctuation">.</span><span class="token function">lockForConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> on <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
                device<span class="token punctuation">.</span>torchMode <span class="token operator">=</span> <span class="token punctuation">.</span>on
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                device<span class="token punctuation">.</span>torchMode <span class="token operator">=</span> <span class="token punctuation">.</span>off
            <span class="token punctuation">}</span>

            device<span class="token punctuation">.</span><span class="token function">unlockForConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Torch could not be used"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Torch is not available"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that, you can now turn the torch on like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">toggleTorch</span><span class="token punctuation">(</span>on<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-take-a-photo-using-the-camera-and-uiimagepickercontroller">How to take a photo using the camera and UIImagePickerController</a></li><li><a href="/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller">How to choose a photo from the camera roll using UIImagePickerController</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/uikit/how-to-make-your-user-interface-in-code">How to make your user interface in code</a></li></ul>
-->

:::

---

<TagLinks />