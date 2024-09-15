---
lang: ko-KR
title: "How to check whether your other apps are installed"
description: "Article(s) > How to check whether your other apps are installed"
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
      content: "Article(s) > How to check whether your other apps are installed"
    - property: og:description
      content: "How to check whether your other apps are installed"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-check-whether-your-other-apps-are-installed.html
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
  "title": "How to check whether your other apps are installed | System - free Swift example code",
  "desc": "How to check whether your other apps are installed",
  "link": "https://hackingwithswift.com/example-code/system/how-to-check-whether-your-other-apps-are-installed",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS lets you check for the existence of other apps, but you do need to declare them in your Info.plist file, and you may need to provide an explanation to the App Review team if you try to query too many apps or apps that aren’t yours.</p>
<p>The key here is to give each of your apps a custom URL scheme. So, your first app might use “myapp1://“, your second app might use “myapp2://”, and so on. You don’t actually need to <em>use</em> these URLs, and they ought to be unique, so you should make them prefixed with your company name to be sure.</p>
<p>To try it out, right-click on your Info.plist file and choose Open As &gt; Source Code. The file should end like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
<span class="token operator">&lt;/</span>plist<span class="token operator">&gt;</span></code></pre>
<p>I’d like you to paste this XML directly before those lines:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">LSApplicationQueriesSchemes</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>array<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>myapp1<span class="token operator">&lt;/</span>string<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>myapp2<span class="token operator">&lt;/</span>string<span class="token operator">&gt;</span>
<span class="token operator">&lt;/</span>array<span class="token operator">&gt;</span></code></pre>
<p>That registers two URL schemes, “myapp1://” and “myapp2://”, with iOS, which means you can now try to read them.</p>
<p>With that done, you can now add code like this to check whether the system is able to respond to “myapp1://” URLs:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">canOpenURL</span><span class="token punctuation">(</span><span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"myapp1://test"</span></span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span></code></pre>
<p>If that returns true it means the app responsible for “myapp1://” is installed on the system, which means you know for sure the user has that other app installed.</p>
<p><strong>Note:</strong> Even though you own both apps and could easily have replicated this finding using server analytics, doing it client-side might seem sketchy to some users. Be sensible and have a clear, complete privacy policy that says exactly what you want do.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport()</a></li><li><a href="/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up</a></li><li><a href="/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition</a></li><li><a href="/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a></li></ul>
-->

:::

---

<TagLinks />