---
lang: ko-KR
title: "How to choose a photo from the camera roll using UIImagePickerController"
description: "Article(s) > How to choose a photo from the camera roll using UIImagePickerController"
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
      content: "Article(s) > How to choose a photo from the camera roll using UIImagePickerController"
    - property: og:description
      content: "How to choose a photo from the camera roll using UIImagePickerController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller.html
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
  "title": "How to choose a photo from the camera roll using UIImagePickerController | Media - free Swift example code",
  "desc": "How to choose a photo from the camera roll using UIImagePickerController",
  "link": "https://hackingwithswift.com/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>UIImagePickerController</code> class is a super-simple way to select and import user photos into your app. As a bonus, it also automatically handles requesting user permission to read the photo library, so all you need to do is be ready to respond when the user selects a photo.</p>
<p>First, make sure your view controller conforms to the <code>UINavigationControllerDelegate</code> and <code>UIImagePickerControllerDelegate</code> protocols. Next, fill it in with methods to trigger selecting a picture, to handle cancelling, and to handle picture selection.</p>
<p>Here’s a working example to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">imagePickerController</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> picker<span class="token punctuation">:</span> <span class="token class-name">UIImagePickerController</span><span class="token punctuation">,</span> didFinishPickingMediaWithInfo info<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">UIImagePickerController</span><span class="token punctuation">.</span><span class="token class-name">InfoKey</span> <span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> newImage<span class="token punctuation">:</span> <span class="token class-name">UIImage</span>

    <span class="token keyword">if</span> <span class="token keyword">let</span> possibleImage <span class="token operator">=</span> info<span class="token punctuation">[</span><span class="token punctuation">.</span>editedImage<span class="token punctuation">]</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">UIImage</span> <span class="token punctuation">{</span>
        newImage <span class="token operator">=</span> possibleImage
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token keyword">let</span> possibleImage <span class="token operator">=</span> info<span class="token punctuation">[</span><span class="token punctuation">.</span>originalImage<span class="token punctuation">]</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">UIImage</span> <span class="token punctuation">{</span>
        newImage <span class="token operator">=</span> possibleImage
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// do something interesting here!</span>
    <span class="token function">print</span><span class="token punctuation">(</span>newImage<span class="token punctuation">.</span>size<span class="token punctuation">)</span>

    <span class="token function">dismiss</span><span class="token punctuation">(</span>animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>To use that code in your own project, replace the call to <code>print()</code> with something useful – you have the image, now what?</p>
<p>There’s one more thing before you’re done, which is to add a description of <em>why</em> you want access – what do you intend to do with your user’s photos? To set this, look for the file Info.plist in the project navigator and select it. This opens a new editor for modifying property list values (“plists”) –&nbsp;app configuration settings.</p>
<p>In the Key column, hover your mouse pointer over any item and you’ll see a + button appear; please click that to insert a new row. A huge list of options will appear – please scroll down and select “Privacy - Photo Library Usage Description”. In the “Value” box for your row, enter “We need to import photos of people”. This is the message Apple will show to the user when photo access is requested.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-take-a-photo-using-the-camera-and-uiimagepickercontroller">How to take a photo using the camera and UIImagePickerController</a></li><li><a href="/example-code/games/how-to-roll-a-dice-using-gameplaykit-and-gkrandomdistribution">How to roll a dice using GameplayKit and GKRandomDistribution</a></li><li><a href="/example-code/uikit/how-to-let-users-choose-a-font-with-uifontpickerviewcontroller">How to let users choose a font with UIFontPickerViewController</a></li><li><a href="/example-code/media/how-to-turn-on-the-camera-flashlight-to-make-a-torch">How to turn on the camera flashlight to make a torch</a></li><li><a href="/example-code/media/uiimagewritetosavedphotosalbum-how-to-write-to-the-ios-photo-album">UIImageWriteToSavedPhotosAlbum(): how to write to the iOS photo album</a></li></ul>
-->

:::

---

<TagLinks />