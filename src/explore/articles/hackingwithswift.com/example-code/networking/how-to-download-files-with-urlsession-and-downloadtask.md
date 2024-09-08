---
lang: ko-KR
title: "How to download files with URLSession and downloadTask()"
description: "Article(s) > How to download files with URLSession and downloadTask()"
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
      content: "Article(s) > How to download files with URLSession and downloadTask()"
    - property: og:description
      content: "How to download files with URLSession and downloadTask()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/networking/how-to-download-files-with-urlsession-and-downloadtask.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Networking - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/networking/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to download files with URLSession and downloadTask() | Networking - free Swift example code",
  "desc": "How to download files with URLSession and downloadTask()",
  "link": "https://hackingwithswift.com/example-code/networking/how-to-download-files-with-urlsession-and-downloadtask",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p><code>URLSession</code> is designed to make network transfers as easy as possible, and a great example of that is its <code>downloadTask</code>()` method. This fetches the contents of a URL you specify, saves it to a local file, then calls a completion handler so you can manipulate the file –&nbsp;all in one.</p>
<p>To demonstrate this, here’s some code to download the source code to the apple.com homepage:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://www.apple.com"</span></span><span class="token punctuation">)</span><span class="token operator">!</span>

<span class="token keyword">let</span> task <span class="token operator">=</span> <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">downloadTask</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> url<span class="token punctuation">)</span> <span class="token punctuation">{</span> localURL<span class="token punctuation">,</span> urlResponse<span class="token punctuation">,</span> error <span class="token keyword">in</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> localURL <span class="token operator">=</span> localURL <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> <span class="token class-name">String</span><span class="token punctuation">(</span>contentsOf<span class="token punctuation">:</span> localURL<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

task<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>There are a few important things to note in there:</p>
<ol>
<li>Your completion handler gets called with a local URL, which is where the data was saved locally. This is optional, so you need to unwrap it carefully.</li>
<li>If something went wrong –&nbsp;e.g. if the network was down –&nbsp;then you’ll get an error passed to you explaining what happened.</li>
<li>When you have created your download task you should call <code>resume()</code> on it to make it happen.</li>
<li>You don’t need to worry about storing the download task somewhere while it happens –&nbsp;it’s being tracked by the shared <code>URLSession</code> on your behalf.</li>
</ol>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller">How to preview files using Quick Look and QLPreviewController</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li></ul>
-->

:::

---

<TagLinks />