---
lang: ko-KR
title: "How to monitor WKWebView page load progress using key-value observing"
description: "Article(s) > How to monitor WKWebView page load progress using key-value observing"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to monitor WKWebView page load progress using key-value observing"
    - property: og:description
      content: "How to monitor WKWebView page load progress using key-value observing"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing.html
date: 2019-03-28
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
  "title": "How to monitor WKWebView page load progress using key-value observing | WKWebView - free Swift example code",
  "desc": "How to monitor WKWebView page load progress using key-value observing",
  "link": "https://hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS often uses a delegate system to report important changes, such as when a table view cell has been tapped or when a web page has finished loading. But the delegate system only goes so far, and if you want fine-grained detailed information sometimes you need to turn to KVO, or "key-value observing."</p>
<p>In the case of seeing how much of a page has loaded in <code>WKWebView</code>, KVO is exactly what you need: each web view has a property called <code>estimatedProgress</code>, and you can be asked to be notified when that value has changed.</p>
<p>First, create a progress view that will be used to show the loading progress:</p>
<pre class=" language-swift"><code class=" language-swift">progressView <span class="token operator">=</span> <span class="token class-name">UIProgressView</span><span class="token punctuation">(</span>progressViewStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span>
progressView<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>You can place that anywhere you like. Now add the current view controller as an observer of the <code>estimatedProgress</code> property of your <code>WKWebView</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift">webView<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> forKeyPath<span class="token punctuation">:</span> <span class="token other-directive property">#keyPath</span><span class="token punctuation">(</span><span class="token class-name">WKWebView</span><span class="token punctuation">.</span>estimatedProgress<span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>new<span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>The <code>.new</code> in that line of code means "when the value changes, tell me the new value."</p>
<p>Finally, implement the <code>observeValue(forKeyPath:)</code> method in your view controller, updating the progress view with the estimated progress from the web view, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">observeValue</span><span class="token punctuation">(</span>forKeyPath keyPath<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span><span class="token punctuation">,</span> of object<span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token operator">?</span><span class="token punctuation">,</span> change<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NSKeyValueChangeKey</span> <span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token class-name">UnsafeMutableRawPointer</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> keyPath <span class="token operator">==</span> <span class="token string-literal"><span class="token string">"estimatedProgress"</span></span> <span class="token punctuation">{</span>
        progressView<span class="token punctuation">.</span>progress <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">(</span>webView<span class="token punctuation">.</span>estimatedProgress<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects">How to use @StateObject to create and monitor external objects</a></li><li><a href="/quick-start/swiftui/how-to-show-indeterminate-progress-using-progressview">How to show indeterminate progress using ProgressView</a></li><li><a href="/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()</a></li><li><a href="/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview">How to load HTTP content in WKWebView and UIWebView</a></li><li><a href="/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller">How to create a page curl effect using UIPageViewController</a></li></ul>
-->

:::

---

<TagLinks />