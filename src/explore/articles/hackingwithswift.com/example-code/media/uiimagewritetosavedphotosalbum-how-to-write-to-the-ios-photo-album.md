---
lang: ko-KR
title: "UIImageWriteToSavedPhotosAlbum(): how to write to the iOS photo album"
description: "Article(s) > UIImageWriteToSavedPhotosAlbum(): how to write to the iOS photo album"
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
      content: "Article(s) > UIImageWriteToSavedPhotosAlbum(): how to write to the iOS photo album"
    - property: og:description
      content: "UIImageWriteToSavedPhotosAlbum(): how to write to the iOS photo album"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/uiimagewritetosavedphotosalbum-how-to-write-to-the-ios-photo-album.html
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
  "title": "UIImageWriteToSavedPhotosAlbum(): how to write to the iOS photo album | Media - free Swift example code",
  "desc": "UIImageWriteToSavedPhotosAlbum(): how to write to the iOS photo album",
  "link": "https://hackingwithswift.com/example-code/media/uiimagewritetosavedphotosalbum-how-to-write-to-the-ios-photo-album",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>It's not hard to save an image straight to the user's photo library, but I have to admit the syntax isn't immediately obvious! iOS has a function called <code>UIImageWriteToSavedPhotosAlbum()</code> that takes four parameters: parameter one is the image to save, parameters two and three set a delegate and selector to send when the image has been written successfully, and parameter four is any additional context information you wan to send.</p>
<p>For example, you might use it like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIImageWriteToSavedPhotosAlbum</span><span class="token punctuation">(</span>yourImage<span class="token punctuation">,</span> <span class="token keyword">self</span><span class="token punctuation">,</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token omit keyword">_</span><span class="token punctuation">:</span>didFinishSavingWithError<span class="token punctuation">:</span>contextInfo<span class="token punctuation">:</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>That will write the image to the photo library, then call a method when it completes. That method needs to be named very precisely, which is where it's easy to go wrong. Using the call above, you need to write your callback method like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">image</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> image<span class="token punctuation">:</span> <span class="token class-name">UIImage</span><span class="token punctuation">,</span> didFinishSavingWithError error<span class="token punctuation">:</span> <span class="token class-name">NSError</span><span class="token operator">?</span><span class="token punctuation">,</span> contextInfo<span class="token punctuation">:</span> <span class="token class-name">UnsafeRawPointer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> error <span class="token operator">=</span> error <span class="token punctuation">{</span>
        <span class="token comment">// we got back an error!</span>
        <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Save error"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
        ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"OK"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Saved!"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Your altered image has been saved to your photos."</span></span><span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
        ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"OK"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller">How to choose a photo from the camera roll using UIImagePickerController</a></li><li><a href="/example-code/uikit/how-to-take-a-photo-using-the-camera-and-uiimagepickercontroller">How to take a photo using the camera and UIImagePickerController</a></li><li><a href="/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto">How to save a string to a file on disk with write(to:)</a></li><li><a href="/example-code/language/what-is-copy-on-write">What is copy on write?</a></li><li><a href="/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value</a></li></ul>
-->

:::

---

<TagLinks />