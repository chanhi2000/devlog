---
lang: ko-KR
title: "How to scan NFC tags using Core NFC"
description: "Article(s) > How to scan NFC tags using Core NFC"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to scan NFC tags using Core NFC"
    - property: og:description
      content: "How to scan NFC tags using Core NFC"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-scan-nfc-tags-using-core-nfc.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to scan NFC tags using Core NFC | Libraries - free Swift example code",
  "desc": "How to scan NFC tags using Core NFC",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-scan-nfc-tags-using-core-nfc",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
<p>Any iPhones since the iPhone 7 are able to scan any NFC tags you have around, and it doesn’t take much work –&nbsp;iOS even provides default user interface for you.</p>
<p>To try it out, start by selecting your project in the project navigator, then choosing the Capabilities tab for your target. You need to enable the Near Field Communication Tag Reading capability, which configures your app to have NFC-scanning permissions.</p>
<p>Next, add new row to your Info.plist that completes the sentence “Hold iPhone near…”, describing your app’s usage. Open Info.plist, right-click in the white space, then choose Add Row. Select “Privacy - NFC Scan Usage Description” for the key name and “NFC tag to scan it” for the value.</p>
<p>That’s our configuration done, so let’s dive straight into the code. Start by opening code for your scanning view controller and adding a new import statement:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">CoreNFC</span></code></pre>
<p>We need to start a scanning session when the app launches, but we need to store it in memory so it stays active. So, add this property to your view controller:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> session<span class="token punctuation">:</span> <span class="token class-name">NFCNDEFReaderSession</span><span class="token operator">?</span></code></pre>
<p>Next, add these two lines of code to <code>viewDidLoad()</code>:</p>
<pre class=" language-swift"><code class=" language-swift">session <span class="token operator">=</span> <span class="token class-name">NFCNDEFReaderSession</span><span class="token punctuation">(</span>delegate<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> queue<span class="token punctuation">:</span> <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">,</span> invalidateAfterFirstRead<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
session<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>Xcode will complain that the <code>ViewController</code> class doesn't currently conform to the <code>NFCNDEFReaderSessionDelegate</code> protocol, so you'll need to amend your class definition to include it:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">NFCNDEFReaderSessionDelegate</span> <span class="token punctuation">{</span></code></pre>
<p>As per usual, Xcode will then complain that you're missing some required methods, so use its recommended fix to insert these two method stubs:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">readerSession</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> session<span class="token punctuation">:</span> <span class="token class-name">NFCNDEFReaderSession</span><span class="token punctuation">,</span> didDetectNDEFs messages<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NFCNDEFMessage</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">readerSession</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> session<span class="token punctuation">:</span> <span class="token class-name">NFCNDEFReaderSession</span><span class="token punctuation">,</span> didInvalidateWithError error<span class="token punctuation">:</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span></code></pre>
<p>Both of those methods are easy enough, but error handling is particularly so – we're just going to make the error print out to the Xcode console. Fill in the <code>didInvalidateWithError</code> method like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">readerSession</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> session<span class="token punctuation">:</span> <span class="token class-name">NFCNDEFReaderSession</span><span class="token punctuation">,</span> didInvalidateWithError error<span class="token punctuation">:</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Now for the <code>didDetectNDEFs</code> method. When this is called you'll get an array of detected messages, each of which can contain one or more records describing a single piece of data. </p>
<p>What you do with the NFC data is down to you, so we're just going to print it out. Modify your <code>didDetectNDEFs</code> method to this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">readerSession</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> session<span class="token punctuation">:</span> <span class="token class-name">NFCNDEFReaderSession</span><span class="token punctuation">,</span> didDetectNDEFs messages<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NFCNDEFMessage</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> message <span class="token keyword">in</span> messages <span class="token punctuation">{</span>
        <span class="token keyword">for</span> record <span class="token keyword">in</span> message<span class="token punctuation">.</span>records <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> record<span class="token punctuation">.</span>payload<span class="token punctuation">,</span> encoding<span class="token punctuation">:</span> <span class="token punctuation">.</span>ascii<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That's all the code complete, so go ahead and run the app! If everything has worked, you will immediately see some system user interface appear prompting the user to hold their device near something to scan.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-scan-a-qr-code">How to scan a QR code</a></li><li><a href="/example-code/media/how-to-scan-a-barcode">How to scan a barcode</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview">How to embed views in a tab bar using TabView</a></li><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li></ul>
-->

:::

---

<TagLinks />