---
lang: ko-KR
title: "How to create a peer-to-peer network using the multipeer connectivity framework"
description: "Article(s) > How to create a peer-to-peer network using the multipeer connectivity framework"
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
      content: "Article(s) > How to create a peer-to-peer network using the multipeer connectivity framework"
    - property: og:description
      content: "How to create a peer-to-peer network using the multipeer connectivity framework"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework.html
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
  "title": "How to create a peer-to-peer network using the multipeer connectivity framework | Networking - free Swift example code",
  "desc": "How to create a peer-to-peer network using the multipeer connectivity framework",
  "link": "https://hackingwithswift.com/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>MultipeerConnectivity</code> framework is designed to allow ad hoc data transfer between devices that are in close proximity. The connection is started managed for you by iOS, but you're responsible for presenting useful interface to your users and for understanding the data that is being sent and received.</p>
<p>First things first, import the <code>MultipeerConnectivity</code> framework:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">MultipeerConnectivity</span></code></pre>
<p>Now define these three properties to hold the multipeer session information:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> peerID<span class="token punctuation">:</span> <span class="token class-name">MCPeerID</span><span class="token operator">!</span>
<span class="token keyword">var</span> mcSession<span class="token punctuation">:</span> <span class="token class-name">MCSession</span><span class="token operator">!</span>
<span class="token keyword">var</span> mcAdvertiserAssistant<span class="token punctuation">:</span> <span class="token class-name">MCAdvertiserAssistant</span><span class="token operator">!</span></code></pre>
<p>The peer ID is simply the name of the current device, which is useful for identifying who is joining a session. We're just going to use the current device's name when creating our connection, but we're also going to require encryption. Add this to your <code>viewDidLoad()</code> method:</p>
<pre class=" language-swift"><code class=" language-swift">peerID <span class="token operator">=</span> <span class="token class-name">MCPeerID</span><span class="token punctuation">(</span>displayName<span class="token punctuation">:</span> <span class="token class-name">UIDevice</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
mcSession <span class="token operator">=</span> <span class="token class-name">MCSession</span><span class="token punctuation">(</span>peer<span class="token punctuation">:</span> peerID<span class="token punctuation">,</span> securityIdentity<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> encryptionPreference<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">required</span><span class="token punctuation">)</span>
mcSession<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span></code></pre>
<p>You will need to tell iOS that your view controller conforms to the <code>MCSessionDelegate</code> and <code>MCBrowserViewControllerDelegate</code> delegates, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">MCSessionDelegate</span><span class="token punctuation">,</span> <span class="token class-name">MCBrowserViewControllerDelegate</span> <span class="token punctuation">{</span>
    <span class="token comment">// your view controller here</span>
<span class="token punctuation">}</span></code></pre>
<p>Conforming to those two delegates means implementing quite a few methods. Fortunately, five of them are super simple because three are empty and the other two just dismiss a view controller. Add this code now:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">session</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> session<span class="token punctuation">:</span> <span class="token class-name">MCSession</span><span class="token punctuation">,</span> didReceive stream<span class="token punctuation">:</span> <span class="token class-name">InputStream</span><span class="token punctuation">,</span> withName streamName<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> fromPeer peerID<span class="token punctuation">:</span> <span class="token class-name">MCPeerID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">session</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> session<span class="token punctuation">:</span> <span class="token class-name">MCSession</span><span class="token punctuation">,</span> didStartReceivingResourceWithName resourceName<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> fromPeer peerID<span class="token punctuation">:</span> <span class="token class-name">MCPeerID</span><span class="token punctuation">,</span> with progress<span class="token punctuation">:</span> <span class="token class-name">Progress</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">session</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> session<span class="token punctuation">:</span> <span class="token class-name">MCSession</span><span class="token punctuation">,</span> didFinishReceivingResourceWithName resourceName<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> fromPeer peerID<span class="token punctuation">:</span> <span class="token class-name">MCPeerID</span><span class="token punctuation">,</span> at localURL<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token operator">?</span><span class="token punctuation">,</span> withError error<span class="token punctuation">:</span> <span class="token class-name">Error</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">browserViewControllerDidFinish</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> browserViewController<span class="token punctuation">:</span> <span class="token class-name">MCBrowserViewController</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dismiss</span><span class="token punctuation">(</span>animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">browserViewControllerWasCancelled</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> browserViewController<span class="token punctuation">:</span> <span class="token class-name">MCBrowserViewController</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dismiss</span><span class="token punctuation">(</span>animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Next comes a slightly harder method: you need to do something when clients connect or disconnect. That something could just be "I don't care; do nothing," or it might be where you show a message on the screen to tell your user. Here's a basic version that just prints out a status message to the Xcode log:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">session</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> session<span class="token punctuation">:</span> <span class="token class-name">MCSession</span><span class="token punctuation">,</span> peer peerID<span class="token punctuation">:</span> <span class="token class-name">MCPeerID</span><span class="token punctuation">,</span> didChange state<span class="token punctuation">:</span> <span class="token class-name">MCSessionState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> state <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token class-name">MCSessionState</span><span class="token punctuation">.</span>connected<span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Connected: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">peerID<span class="token punctuation">.</span>displayName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">case</span> <span class="token class-name">MCSessionState</span><span class="token punctuation">.</span>connecting<span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Connecting: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">peerID<span class="token punctuation">.</span>displayName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">case</span> <span class="token class-name">MCSessionState</span><span class="token punctuation">.</span>notConnected<span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Not Connected: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">peerID<span class="token punctuation">.</span>displayName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Time for the important stuff: sending and receiving data. Now, obviously the data you will send and receive depends on what your app does, so you will need to customize this code to fit your needs. In the example I'm going to give, we'll use sending and receiving images, but you could just as easily send strings or anything else.</p>
<p>So, here's how to encode an image into a <code>Data</code> then send that to all connected peers:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">sendImage</span><span class="token punctuation">(</span>img<span class="token punctuation">:</span> <span class="token class-name">UIImage</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> mcSession<span class="token punctuation">.</span>connectedPeers<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> imageData <span class="token operator">=</span> img<span class="token punctuation">.</span><span class="token function">pngData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">do</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> mcSession<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> toPeers<span class="token punctuation">:</span> mcSession<span class="token punctuation">.</span>connectedPeers<span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token punctuation">.</span>reliable<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token keyword">let</span> error <span class="token keyword">as</span> <span class="token class-name">NSError</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Send error"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
                ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"OK"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>To receive that on the other side, you need a method like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">session</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> session<span class="token punctuation">:</span> <span class="token class-name">MCSession</span><span class="token punctuation">,</span> didReceive data<span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">,</span> fromPeer peerID<span class="token punctuation">:</span> <span class="token class-name">MCPeerID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token keyword">in</span>
            <span class="token comment">// do something with the image</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Note that I've explicitly pushed the work to the main thread so that you're safe to do UI work.</p>
<p>All that remains now is to either host a session or join a session. Add these two methods to your code, then call whichever one you need:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">startHosting</span><span class="token punctuation">(</span>action<span class="token punctuation">:</span> <span class="token class-name">UIAlertAction</span><span class="token operator">!</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mcAdvertiserAssistant <span class="token operator">=</span> <span class="token class-name">MCAdvertiserAssistant</span><span class="token punctuation">(</span>serviceType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"hws-kb"</span></span><span class="token punctuation">,</span> discoveryInfo<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> session<span class="token punctuation">:</span> mcSession<span class="token punctuation">)</span>
    mcAdvertiserAssistant<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">joinSession</span><span class="token punctuation">(</span>action<span class="token punctuation">:</span> <span class="token class-name">UIAlertAction</span><span class="token operator">!</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> mcBrowser <span class="token operator">=</span> <span class="token class-name">MCBrowserViewController</span><span class="token punctuation">(</span>serviceType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"hws-kb"</span></span><span class="token punctuation">,</span> session<span class="token punctuation">:</span> mcSession<span class="token punctuation">)</span>
    mcBrowser<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>
    <span class="token function">present</span><span class="token punctuation">(</span>mcBrowser<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Note: to test this code you'll need either two iOS devices or one device and the simulator.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor">How to check for internet connectivity using NWPathMonitor</a></li><li><a href="/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity">How to make a network request wait for an internet connection using waitsForConnectivity</a></li><li><a href="/example-code/uikit/how-to-share-content-with-the-social-framework-and-slcomposeviewcontroller">How to share content with the Social framework and SLComposeViewController</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />