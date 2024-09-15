---
lang: ko-KR
title: "How to make your app open with a custom URL scheme"
description: "Article(s) > How to make your app open with a custom URL scheme"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make your app open with a custom URL scheme"
    - property: og:description
      content: "How to make your app open with a custom URL scheme"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-make-your-app-open-with-a-custom-url-scheme.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make your app open with a custom URL scheme | System - free Swift example code",
  "desc": "How to make your app open with a custom URL scheme",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-make-your-app-open-with-a-custom-url-scheme",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
<p>Custom URL schemes allow your app to be launched from anywhere else in the system, but you can also use them to query which of your other apps are installed and even pass data.</p>
<p>To register your custom URL scheme, go to your project settings, select your target, then go to the Info tab. Underneath the rows from your Info.plist file are Document Types, Exported UTIs, Imported UTIs, and URL Types –&nbsp;you need to open that last disclosure indicator.</p>
<p>There are a selection of properties you can add for each URL type you add, but really you only need two: an identifier that is unique to your app and that URL, plus the URL scheme that should be used. For identifier enter “com.yourcompany.yourapp.yoururl”, e.g. com.apple.pages.open, and for URL schemes enter just the part you want before “://“, e.g. you should enter “myapp” if you want to use “myapp://“.</p>
<p>That’s enough to make your app launch when that URL is triggered, so now you just need to respond to a URL. iOS will call a particular method on your app delegate whenever a URL is passed in by the system, so you’ll probably want to send that on to a view controller of your choosing.</p>
<p>Here’s some code to print out the URL:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">application</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> app<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">,</span> <span class="token keyword">open</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">UIApplication</span><span class="token punctuation">.</span><span class="token class-name">OpenURLOptionsKey</span> <span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/system/how-to-open-a-url-in-safari">How to open a URL in Safari</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName()</a></li><li><a href="/quick-start/swiftui/how-to-open-a-new-window">How to open a new window</a></li></ul>
-->

:::

---

<TagLinks />