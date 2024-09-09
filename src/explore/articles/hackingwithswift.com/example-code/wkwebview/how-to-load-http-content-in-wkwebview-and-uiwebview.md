---
lang: ko-KR
title: "How to load HTTP content in WKWebView and UIWebView"
description: "Article(s) > How to load HTTP content in WKWebView and UIWebView"
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
      content: "Article(s) > How to load HTTP content in WKWebView and UIWebView"
    - property: og:description
      content: "How to load HTTP content in WKWebView and UIWebView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview.html
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
  "title": "How to load HTTP content in WKWebView and UIWebView | WKWebView - free Swift example code",
  "desc": "How to load HTTP content in WKWebView and UIWebView",
  "link": "https://hackingwithswift.com/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>App Transport Security (ATS) normally doesn’t allow our apps to connect to HTTP servers, but there’s a special exception you can add to allow <code>UIWebView</code> and <code>WKWebView</code> to load insecure content.</p>
<p>Like all all ATS settings, this is configured inside your application's Info.plist file, and this is one of the very few times when editing your plist as source code is faster than trying to use the GUI editor in Xcode. So, right-click on your Info.plist and choose Open As &gt; Source Code.</p>
<p>Your plist should end like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
<span class="token operator">&lt;/</span>plist<span class="token operator">&gt;</span></code></pre>
<p>Just before that, I'd like you to paste this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">NSAppTransportSecurity</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">NSAllowsArbitraryLoadsInWebContent</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token boolean">true</span><span class="token operator">/&gt;</span>
<span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span></code></pre>
<p>That tells ATS to allow Apple’s web views to access any content, secure or otherwise.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()</a></li><li><a href="/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview">What's the difference between UIWebView and WKWebView?</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-stop-users-selecting-text-in-a-uiwebview-or-wkwebview">How to stop users selecting text in a UIWebView or WKWebView</a></li></ul>
-->

:::

---

<TagLinks />