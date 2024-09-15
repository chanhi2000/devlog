---
lang: ko-KR
title: "How to read your app’s version from your Info.plist file"
description: "Article(s) > How to read your app’s version from your Info.plist file"
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
      content: "Article(s) > How to read your app’s version from your Info.plist file"
    - property: og:description
      content: "How to read your app’s version from your Info.plist file"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-read-your-apps-version-from-your-infoplist-file.html
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
  "title": "How to read your app’s version from your Info.plist file | System - free Swift example code",
  "desc": "How to read your app’s version from your Info.plist file",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-read-your-apps-version-from-your-infoplist-file",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>All iOS apps must store an app version number in their Info.plist file, but there’s no build-in way to get that as a string you can use in your code.</p>
<p>Fortunately, we can write a small extension to <code>UIApplication</code> that reads the Info.plist file and returns a version number automatically. This might not exist for some reason, so we’re going to make a static variable that returns an optional string in case there was a problem reading it.</p>
<p>Here’s the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UIApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">var</span> appVersion<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span>forInfoDictionaryKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"CFBundleShortVersionString"</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">String</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName()</a></li><li><a href="/example-code/language/how-to-install-a-beta-version-of-swift">How to install a beta version of Swift</a></li><li><a href="/example-code/system/how-to-decode-json-from-your-app-bundle-the-easy-way">How to decode JSON from your app bundle the easy way</a></li></ul>
-->

:::

---

<TagLinks />