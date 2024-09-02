---
lang: ko-KR
title: "How to scan a barcode"
description: "Article(s) > How to scan a barcode"
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
      content: "Article(s) > How to scan a barcode"
    - property: og:description
      content: "How to scan a barcode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-scan-a-barcode.html
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
  "title": "How to scan a barcode | Media - free Swift example code",
  "desc": "How to scan a barcode",
  "link": "https://hackingwithswift.com/example-code/media/how-to-scan-a-barcode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS supports barcode scanning out of the box, but to be honest it's not that easy to do. So, here's a complete <code>UIViewController</code> subclass that you can add to your Swift project and get immediate support with no hassle&nbsp;– all you need to do is update the <code>found(code:)</code> method to take some interesting action, then present this view controller when you're ready:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">AVFoundation</span>
<span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token keyword">class</span> <span class="token class-name">ScannerViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">AVCaptureMetadataOutputObjectsDelegate</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> captureSession<span class="token punctuation">:</span> <span class="token class-name">AVCaptureSession</span><span class="token operator">!</span>
    <span class="token keyword">var</span> previewLayer<span class="token punctuation">:</span> <span class="token class-name">AVCaptureVideoPreviewLayer</span><span class="token operator">!</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black
        captureSession <span class="token operator">=</span> <span class="token class-name">AVCaptureSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">guard</span> <span class="token keyword">let</span> videoCaptureDevice <span class="token operator">=</span> <span class="token class-name">AVCaptureDevice</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>video<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
        <span class="token keyword">let</span> videoInput<span class="token punctuation">:</span> <span class="token class-name">AVCaptureDeviceInput</span>

        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            videoInput <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">AVCaptureDeviceInput</span><span class="token punctuation">(</span>device<span class="token punctuation">:</span> videoCaptureDevice<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>captureSession<span class="token punctuation">.</span><span class="token function">canAddInput</span><span class="token punctuation">(</span>videoInput<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            captureSession<span class="token punctuation">.</span><span class="token function">addInput</span><span class="token punctuation">(</span>videoInput<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">failed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> metadataOutput <span class="token operator">=</span> <span class="token class-name">AVCaptureMetadataOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>captureSession<span class="token punctuation">.</span><span class="token function">canAddOutput</span><span class="token punctuation">(</span>metadataOutput<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            captureSession<span class="token punctuation">.</span><span class="token function">addOutput</span><span class="token punctuation">(</span>metadataOutput<span class="token punctuation">)</span>

            metadataOutput<span class="token punctuation">.</span><span class="token function">setMetadataObjectsDelegate</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> queue<span class="token punctuation">:</span> <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">)</span>
            metadataOutput<span class="token punctuation">.</span>metadataObjectTypes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>ean8<span class="token punctuation">,</span> <span class="token punctuation">.</span>ean13<span class="token punctuation">,</span> <span class="token punctuation">.</span>pdf417<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">failed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        previewLayer <span class="token operator">=</span> <span class="token class-name">AVCaptureVideoPreviewLayer</span><span class="token punctuation">(</span>session<span class="token punctuation">:</span> captureSession<span class="token punctuation">)</span>
        previewLayer<span class="token punctuation">.</span>frame <span class="token operator">=</span> view<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>bounds
        previewLayer<span class="token punctuation">.</span>videoGravity <span class="token operator">=</span> <span class="token punctuation">.</span>resizeAspectFill
        view<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">addSublayer</span><span class="token punctuation">(</span>previewLayer<span class="token punctuation">)</span>

        captureSession<span class="token punctuation">.</span><span class="token function">startRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">failed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Scanning not supported"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Your device does not support scanning a code from an item. Please use a device with a camera."</span></span><span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
        ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"OK"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        captureSession <span class="token operator">=</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewWillAppear</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> animated<span class="token punctuation">:</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewWillAppear</span><span class="token punctuation">(</span>animated<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>captureSession<span class="token operator">?</span><span class="token punctuation">.</span>isRunning <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            captureSession<span class="token punctuation">.</span><span class="token function">startRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewWillDisappear</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> animated<span class="token punctuation">:</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewWillDisappear</span><span class="token punctuation">(</span>animated<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>captureSession<span class="token operator">?</span><span class="token punctuation">.</span>isRunning <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            captureSession<span class="token punctuation">.</span><span class="token function">stopRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">metadataOutput</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> output<span class="token punctuation">:</span> <span class="token class-name">AVCaptureMetadataOutput</span><span class="token punctuation">,</span> didOutput metadataObjects<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">AVMetadataObject</span><span class="token punctuation">]</span><span class="token punctuation">,</span> from connection<span class="token punctuation">:</span> <span class="token class-name">AVCaptureConnection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        captureSession<span class="token punctuation">.</span><span class="token function">stopRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token keyword">let</span> metadataObject <span class="token operator">=</span> metadataObjects<span class="token punctuation">.</span>first <span class="token punctuation">{</span>
            <span class="token keyword">guard</span> <span class="token keyword">let</span> readableObject <span class="token operator">=</span> metadataObject <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">AVMetadataMachineReadableCodeObject</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
            <span class="token keyword">guard</span> <span class="token keyword">let</span> stringValue <span class="token operator">=</span> readableObject<span class="token punctuation">.</span>stringValue <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
            <span class="token class-name">AudioServicesPlaySystemSound</span><span class="token punctuation">(</span><span class="token class-name">SystemSoundID</span><span class="token punctuation">(</span><span class="token constant">kSystemSoundID_Vibrate</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">found</span><span class="token punctuation">(</span>code<span class="token punctuation">:</span> stringValue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token function">dismiss</span><span class="token punctuation">(</span>animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">found</span><span class="token punctuation">(</span>code<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">var</span> prefersStatusBarHidden<span class="token punctuation">:</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">var</span> supportedInterfaceOrientations<span class="token punctuation">:</span> <span class="token class-name">UIInterfaceOrientationMask</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">.</span>portrait
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-create-a-barcode">How to create a barcode</a></li><li><a href="/example-code/media/how-to-create-a-pdf417-barcode">How to create a PDF417 barcode</a></li><li><a href="/example-code/libraries/how-to-scan-nfc-tags-using-core-nfc">How to scan NFC tags using Core NFC</a></li><li><a href="/example-code/media/how-to-scan-a-qr-code">How to scan a QR code</a></li><li><a href="/example-code/vision/how-to-detect-documents-using-vndocumentcameraviewcontroller">How to detect documents using VNDocumentCameraViewController</a></li></ul>
-->

:::

---

<TagLinks />