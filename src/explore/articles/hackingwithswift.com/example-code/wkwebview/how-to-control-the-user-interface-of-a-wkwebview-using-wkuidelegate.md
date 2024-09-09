---
lang: ko-KR
title: "How to control the user interface of a WKWebView using WKUIDelegate"
description: "Article(s) > How to control the user interface of a WKWebView using WKUIDelegate"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to control the user interface of a WKWebView using WKUIDelegate"
    - property: og:description
      content: "How to control the user interface of a WKWebView using WKUIDelegate"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-control-the-user-interface-of-a-wkwebview-using-wkuidelegate.html
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
  "title": "How to control the user interface of a WKWebView using WKUIDelegate | WKWebView - free Swift example code",
  "desc": "How to control the user interface of a WKWebView using WKUIDelegate",
  "link": "https://hackingwithswift.com/example-code/wkwebview/how-to-control-the-user-interface-of-a-wkwebview-using-wkuidelegate",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
<p>By default <code>WKWebView</code> works sort of like Safari, albeit in a single view rather than having tabs. If you want something more advanced –&nbsp;being able to monitor opening and closing windows, override behavior for JavaScript user interface, and so on – then the <code>WKUIDelegate</code> protocol is for you.</p>
<p>First, make your view controller conform to it by adding <code>WKUIDelegate</code> to its list of protocols. Second, assign your view controller to the <code>uiDelegate</code> property of your web view:</p>
<pre class=" language-swift"><code class=" language-swift">yourWebView<span class="token punctuation">.</span>uiDelegate <span class="token operator">=</span> <span class="token keyword">self</span></code></pre>
<p>Finally, implement whichever of the optional methods of <code>WKUIDelegate</code> takes your interest. For example, you can make <code>WKWebView</code> show a custom alert controller when any web page uses the <code>alert()</code> JavaScript function:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">webView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> webView<span class="token punctuation">:</span> <span class="token class-name">WKWebView</span><span class="token punctuation">,</span> runJavaScriptAlertPanelWithMessage message<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> initiatedByFrame frame<span class="token punctuation">:</span> <span class="token class-name">WKFrameInfo</span><span class="token punctuation">,</span> completionHandler<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Hey, listen!"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> message<span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
    ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"OK"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">,</span> handler<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token function">completionHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>There’s also <code>runJavaScriptConfirmPanelWithMessage</code> for showing confirm and deny UI, <code>runJavaScriptTextInputPanelWithPrompt</code> for requesting user text input, and so on. </p>
<p><strong>Note:</strong> You <em>must</em> call the completion handler. JavaScript’s alerts are blocking, which means JavaScript execution will not continue until the alert finishes. As a result, WebKit will complain if you don’t let it know when you’re done.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/wkwebview/how-to-control-the-sites-a-wkwebview-can-visit-using-wknavigationdelegate">How to control the sites a WKWebView can visit using WKNavigationDelegate</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview">What's the difference between UIWebView and WKWebView?</a></li><li><a href="/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing">How to monitor WKWebView page load progress using key-value observing</a></li><li><a href="/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()</a></li></ul>
-->

:::

---

<TagLinks />