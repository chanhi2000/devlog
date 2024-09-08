---
lang: ko-KR
title: "How to check for internet connectivity using NWPathMonitor"
description: "Article(s) > How to check for internet connectivity using NWPathMonitor"
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
  - ios-12.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check for internet connectivity using NWPathMonitor"
    - property: og:description
      content: "How to check for internet connectivity using NWPathMonitor"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor.html
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
  "title": "How to check for internet connectivity using NWPathMonitor | Networking - free Swift example code",
  "desc": "How to check for internet connectivity using NWPathMonitor",
  "link": "https://hackingwithswift.com/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 12.0

<!-- TODO: 작성 -->

<!-- 
<p>Apple’s Network framework provides a number of useful classes for working with network data, including one specifically designed to monitor network accessibility: <code>NWPathMonitor</code>. If you ever used Apple’s older Reachability system, <code>NWPathMonitor</code> replaces it fully.</p>
<p>To get started, first add an import for the <code>Network</code> framework:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">Network</span></code></pre>
<p>Next, create an instance of <code>NWPathMonitor</code> somewhere it won’t get freed immediately. For example, you might have it as a property on a view controller, for example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> monitor <span class="token operator">=</span> <span class="token class-name">NWPathMonitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>Now assign a closure to that monitor that will be triggered whenever network accessibility changes. This needs to accept one parameter, which is an <code>NWPath</code> describing the network access that is currently possible.</p>
<p><code>NWPath</code> has a few properties, but there are two in particular you’re likely to care about: <code>status</code> describes whether the connection is currently available or not, and <code>isExpensive</code> is set to true when using cellular data or when using WiFi that is hotspot routed through an iPhone’s cellular connection.</p>
<p>To try this out, here’s some code that prints a message when the user’s connection status changes, and also prints whether the connection is considered expensive or not:</p>
<pre class=" language-swift"><code class=" language-swift">monitor<span class="token punctuation">.</span>pathUpdateHandler <span class="token operator">=</span> <span class="token punctuation">{</span> path <span class="token keyword">in</span>
    <span class="token keyword">if</span> path<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token punctuation">.</span>satisfied <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"We're connected!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"No connection."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">print</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>isExpensive<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Remember, that closure gets called every time the connection status changes.</p>
<p>Once your path monitor is created and configured, the final step is to create a custom <code>DispatchQueue</code> instance for the monitor to run, then call its <code>start()</code> method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token class-name">DispatchQueue</span><span class="token punctuation">(</span>label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Monitor"</span></span><span class="token punctuation">)</span>
monitor<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>queue<span class="token punctuation">:</span> queue<span class="token punctuation">)</span></code></pre>
<p>Once that’s done, your closure will get called every time the connection status changes, so you can add code there to update the rest of your app with the current connection status.</p>
<p>If you want more fine-grained control over the network check, you can create your <code>NWPathMonitor</code> using a specific interface type. For example, if you specifically wanted to check for cellular data and only cellular data, you would write this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> cellMonitor <span class="token operator">=</span> <span class="token class-name">NWPathMonitor</span><span class="token punctuation">(</span>requiredInterfaceType<span class="token punctuation">:</span> <span class="token punctuation">.</span>cellular<span class="token punctuation">)</span></code></pre>
<p>You can also use <code>.wifi</code> or even <code>wiredEthernet</code> if you want. Omitting the interface type causes them all to be watched at the same time, which is probably what you’ll want most of the time.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework">How to create a peer-to-peer network using the multipeer connectivity framework</a></li><li><a href="/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity">How to make a network request wait for an internet connection using waitsForConnectivity</a></li><li><a href="/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type</a></li><li><a href="/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport()</a></li><li><a href="/example-code/language/how-to-check-your-program-state-using-precondition">How to check your program state using precondition()</a></li></ul>
-->

:::

---

<TagLinks />