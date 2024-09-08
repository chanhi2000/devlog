---
lang: ko-KR
title: "How to make a network request wait for an internet connection using waitsForConnectivity"
description: "Article(s) > How to make a network request wait for an internet connection using waitsForConnectivity"
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
      content: "Article(s) > How to make a network request wait for an internet connection using waitsForConnectivity"
    - property: og:description
      content: "How to make a network request wait for an internet connection using waitsForConnectivity"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity.html
date: 2019-10-27
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
  "title": "How to make a network request wait for an internet connection using waitsForConnectivity | Networking - free Swift example code",
  "desc": "How to make a network request wait for an internet connection using waitsForConnectivity",
  "link": "https://hackingwithswift.com/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
<p>If you use <code>URLSession</code> to make a data task while the user has no internet connection, your request will fail immediately and report an error. However, if you create your session with the <code>waitsForConnectivity</code> configuration option set to true, then the system will automatically wait some time to see if connectivity becomes available before trying the request.</p>
<p>For example, this creates a data task that fetches a URL only when internet connectivity is available:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token class-name">URLSessionConfiguration</span><span class="token punctuation">.</span><span class="token keyword">default</span>
config<span class="token punctuation">.</span>waitsForConnectivity <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token class-name">URLSession</span><span class="token punctuation">(</span>configuration<span class="token punctuation">:</span> config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dataTask</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> yourURL<span class="token punctuation">)</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> response<span class="token punctuation">,</span> error <span class="token keyword">in</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> error <span class="token operator">=</span> error <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> ei

    <span class="token comment">// use your data here</span>
<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>By default, the system will wait seven days to see if internet connectivity becomes available, but you can control that with the <code>timeoutIntervalForResource</code> property on your configuration. For example, this will ask the system to wait 60 seconds:</p>
<pre class=" language-swift"><code class=" language-swift">config<span class="token punctuation">.</span>timeoutIntervalForResource <span class="token operator">=</span> <span class="token number">60</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency">How to make one operation wait for another to complete using addDependency()</a></li><li><a href="/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework">How to create a peer-to-peer network using the multipeer connectivity framework</a></li><li><a href="/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor">How to check for internet connectivity using NWPathMonitor</a></li><li><a href="/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type</a></li><li><a href="/quick-start/swiftui/how-to-create-a-core-data-fetch-request-using-fetchrequest">How to create a Core Data fetch request using @FetchRequest</a></li></ul>
-->

:::

---

<TagLinks />