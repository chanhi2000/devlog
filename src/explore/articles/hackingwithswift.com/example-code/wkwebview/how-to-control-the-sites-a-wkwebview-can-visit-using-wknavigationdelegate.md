---
lang: ko-KR
title: "How to control the sites a WKWebView can visit using WKNavigationDelegate"
description: "Article(s) > How to control the sites a WKWebView can visit using WKNavigationDelegate"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to control the sites a WKWebView can visit using WKNavigationDelegate"
    - property: og:description
      content: "How to control the sites a WKWebView can visit using WKNavigationDelegate"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-control-the-sites-a-wkwebview-can-visit-using-wknavigationdelegate.html
date: 2019-09-19
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "WKWebView - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/wkwebview/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to control the sites a WKWebView can visit using WKNavigationDelegate | WKWebView - free Swift example code",
  "desc": "How to control the sites a WKWebView can visit using WKNavigationDelegate",
  "link": "https://hackingwithswift.com/example-code/wkwebview/how-to-control-the-sites-a-wkwebview-can-visit-using-wknavigationdelegate",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>By default a <code>WKWebView</code> can navigate to any links the user selects, but it’s common to want to restrict that. It only takes three steps to accomplish this:</p>
<ol>
<li>Make your view controller conform to <code>WKNavigationDelegate</code>.</li>
<li>Assign your view controller to be your web view’s <code>navigationDelegate</code>.</li>
<li>Implement the <code>decidePolicyFor</code> method to decide whether each URL should be allowed or denied.</li>
</ol>
<p>Let’s try it out now. First, make your view controller conform to <code>WKNavigationDelegate</code>.</p>
<p>Second, set your view controller to be the <code>navigationDelegate</code> property of your web view. This might be done in <code>viewDidLoad()</code>, but you can also change the delegate dynamically. Either way, you need to use this code:</p>
<pre class=" language-swift"><code class=" language-swift">yourWebView<span class="token punctuation">.</span>navigationDelegate <span class="token operator">=</span> <span class="token keyword">self</span></code></pre>
<p>Finally, implement the <code>decidePolicyFor</code> method. This is the only part that takes any work: you need to pull out the host of the URL that was requested, run any checks you want to make sure it’s OK, then call the <code>decisionHandler()</code> closure with either <code>.allow</code> to allow the URL or <code>.cancel</code> to deny access.</p>
<p>Here’s an example to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">webView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> webView<span class="token punctuation">:</span> <span class="token class-name">WKWebView</span><span class="token punctuation">,</span> decidePolicyFor navigationAction<span class="token punctuation">:</span> <span class="token class-name">WKNavigationAction</span><span class="token punctuation">,</span> decisionHandler<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token class-name">WKNavigationActionPolicy</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> host <span class="token operator">=</span> navigationAction<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url<span class="token operator">?</span><span class="token punctuation">.</span>host <span class="token punctuation">{</span>
        <span class="token keyword">if</span> host<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"hackingwithswift.com"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">decisionHandler</span><span class="token punctuation">(</span><span class="token punctuation">.</span>allow<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">decisionHandler</span><span class="token punctuation">(</span><span class="token punctuation">.</span>cancel<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That code will allow navigation only to URLs that contain “hackingwithswift.com”.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/wkwebview/how-to-control-the-user-interface-of-a-wkwebview-using-wkuidelegate">How to control the user interface of a WKWebView using WKUIDelegate</a></li><li><a href="/quick-start/concurrency/what-is-an-actor-and-why-does-swift-have-them">What is an actor and why does Swift have them?</a></li><li><a href="/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview">What's the difference between UIWebView and WKWebView?</a></li><li><a href="/example-code/wkwebview/how-to-run-javascript-on-a-wkwebview-with-evaluatejavascript">How to run JavaScript on a WKWebView with evaluateJavaScript()</a></li><li><a href="/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing">How to monitor WKWebView page load progress using key-value observing</a></li></ul>
-->

:::

---

<TagLinks />