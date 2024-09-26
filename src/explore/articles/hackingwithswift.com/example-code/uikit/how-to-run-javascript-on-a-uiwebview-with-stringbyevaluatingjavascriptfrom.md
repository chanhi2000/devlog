---
lang: ko-KR
title: "How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)"
description: "Article(s) > How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)"
    - property: og:description
      content: "How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-run-javascript-on-a-uiwebview-with-stringbyevaluatingjavascriptfrom.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:) | UIKit - free Swift example code",
  "desc": "How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-run-javascript-on-a-uiwebview-with-stringbyevaluatingjavascriptfrom",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>If you’re still using the deprecated <code>UIWebView</code>, you can run custom JavaScript on it using the method <code>stringByEvaluatingJavaScript(from:)</code>. The method returns an optional string, which means if the code returns a value you'll get it back otherwise you'll get back <code>nil</code>.</p>
<p>Here's an example that pulls out the current page's title:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> pageTitle <span class="token operator">=</span> yourUIWebView<span class="token punctuation">.</span><span class="token function">stringByEvaluatingJavaScript</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"document.title"</span></span><span class="token punctuation">)</span></code></pre>
<p>Note: if you're using a <code>WKWebView</code> you can use its <code>title</code> property directly to get the same thing.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/wkwebview/how-to-run-javascript-on-a-wkwebview-with-evaluatejavascript">How to run JavaScript on a WKWebView with evaluateJavaScript()</a></li><li><a href="/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview">What's the difference between UIWebView and WKWebView?</a></li><li><a href="/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()</a></li><li><a href="/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview">How to load HTTP content in WKWebView and UIWebView</a></li><li><a href="/example-code/uikit/how-to-stop-users-selecting-text-in-a-uiwebview-or-wkwebview">How to stop users selecting text in a UIWebView or WKWebView</a></li></ul>
-->

:::

---

<TagLinks />