---
lang: ko-KR
title: "How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image"
description: "Article(s) > How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image"
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
      content: "Article(s) > How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image"
    - property: og:description
      content: "How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image.html
date: 2019-06-04
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Vision - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/vision/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image | Vision - free Swift example code",
  "desc": "How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image",
  "link": "https://hackingwithswift.com/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>The Vision framework has built-in support for detecting text in images, although realistically it’s limited to printed text in clear fonts –&nbsp;don’t expect to be able to throw raw handwriting at it and get useful results.</p>
<p>To get started import the Vision framework, then set up an instance of <code>VNRecognizeTextRequest</code> so that it processes any text that is found. Your request will be handed an array of observations that you need to safely typecast as <code>VNRecognizedTextObservation</code>, then you can loop over each observation to pull out candidates for each one –&nbsp;various possible piece of text that Vision thinks it might have found.</p>
<p>If we wanted to just pull out the best candidate of each observation then print it out, we’d make a request like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token class-name">VNRecognizeTextRequest</span> <span class="token punctuation">{</span> request<span class="token punctuation">,</span> error <span class="token keyword">in</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> observations <span class="token operator">=</span> request<span class="token punctuation">.</span>results <span class="token keyword">as</span><span class="token operator">?</span> <span class="token punctuation">[</span><span class="token class-name">VNRecognizedTextObservation</span><span class="token punctuation">]</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Received invalid observations"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> observation <span class="token keyword">in</span> observations <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> bestCandidate <span class="token operator">=</span> observation<span class="token punctuation">.</span><span class="token function">topCandidates</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>first <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"No candidate"</span></span><span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>

        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found this candidate: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">bestCandidate<span class="token punctuation">.</span>string</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Next, put that request into an array, and set Vision off in a background queue to scan your image. For example, this uses the default <code>.userInitiated</code> background queue, then loads and scans an image from the app bundle called <code>testImage</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> requests <span class="token operator">=</span> <span class="token punctuation">[</span>request<span class="token punctuation">]</span>

<span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span><span class="token function">global</span><span class="token punctuation">(</span>qos<span class="token punctuation">:</span> <span class="token punctuation">.</span>userInitiated<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"testImage"</span></span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span>cgImage <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Missing image to scan"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> handler <span class="token operator">=</span> <span class="token class-name">VNImageRequestHandler</span><span class="token punctuation">(</span>cgImage<span class="token punctuation">:</span> img<span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token operator">?</span> handler<span class="token punctuation">.</span><span class="token function">perform</span><span class="token punctuation">(</span>requests<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Make sure you have an image called “testImage” in your asset catalog, and that code should work out of the box.</p>
<p>There are two further parameters you might want to tweak to make your text recognition more useful. First, by default the <code>recognitionLevel</code> property of your <code>VNRecognizeTextRequest</code> is set to <code>.accurate</code>, which means Vision does its best to figure out the most likely letters in the text. If you wanted to prioritize speed over accuracy –&nbsp;perhaps if you were scanning lots of image, or a live feed, you should change <code>recognitionLevel</code> to <code>.fast</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift">request<span class="token punctuation">.</span>recognitionLevel <span class="token operator">=</span> <span class="token punctuation">.</span>fast</code></pre>
<p>Second, you can set the <code>customWords</code> property of your request to be an array of unusual strings that your app is likely to come across –&nbsp;words that Vision might decide aren’t likely because it doesn’t recognize them:</p>
<pre class=" language-swift"><code class=" language-swift">request<span class="token punctuation">.</span>customWords <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Pikachu"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Snorlax"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Charizard"</span></span><span class="token punctuation">]</span></code></pre>
<p>These custom words automatically take priority over the built-in dictionary, so use this wisely.</p>
<p>Rather than scanning images in your app bundle, you could load an image that was scanned using VNDocumentCameraViewController – see my article <a href="https://www.hackingwithswift.com/example-code/vision/how-to-detect-documents-using-vndocumentcameraviewcontroller">How to detect documents using VNDocumentCameraViewController</a> for more information.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/strings/how-to-read-a-single-character-from-a-string">How to read a single character from a string</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image">How to convert a SwiftUI view to an image</a></li><li><a href="/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view">How to find an aspect fit image’s size inside an image view</a></li><li><a href="/quick-start/swiftui/building-a-menu-using-list">Building a menu using List</a></li></ul>
-->

:::

---

<TagLinks />