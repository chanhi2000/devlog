---
lang: ko-KR
title: "How to detect a URL in a String using NSDataDetector"
description: "Article(s) > How to detect a URL in a String using NSDataDetector"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect a URL in a String using NSDataDetector"
    - property: og:description
      content: "How to detect a URL in a String using NSDataDetector"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-detect-a-url-in-a-string-using-nsdatadetector.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to detect a URL in a String using NSDataDetector | Strings - free Swift example code",
  "desc": "How to detect a URL in a String using NSDataDetector",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-detect-a-url-in-a-string-using-nsdatadetector",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>NSDataDetector</code> class makes it easy to detect URLs inside a string using just a few lines of code. This example loops through all URLs in a string, printing each one out:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> input <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"This is a test with the URL https://www.hackingwithswift.com to be detected."</span></span>
<span class="token keyword">let</span> detector <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">!</span> <span class="token class-name">NSDataDetector</span><span class="token punctuation">(</span>types<span class="token punctuation">:</span> <span class="token class-name">NSTextCheckingResult</span><span class="token punctuation">.</span><span class="token class-name">CheckingType</span><span class="token punctuation">.</span>link<span class="token punctuation">.</span>rawValue<span class="token punctuation">)</span>
<span class="token keyword">let</span> matches <span class="token operator">=</span> detector<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> input<span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> range<span class="token punctuation">:</span> <span class="token class-name">NSRange</span><span class="token punctuation">(</span>location<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">:</span> input<span class="token punctuation">.</span>utf16<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> match <span class="token keyword">in</span> matches <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> range <span class="token operator">=</span> <span class="token class-name">Range</span><span class="token punctuation">(</span>match<span class="token punctuation">.</span>range<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> input<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">continue</span> <span class="token punctuation">}</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> input<span class="token punctuation">[</span>range<span class="token punctuation">]</span>
    <span class="token function">print</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/strings/how-to-convert-a-string-to-a-safe-format-for-url-slugs-and-filenames">How to convert a string to a safe format for URL slugs and filenames</a></li><li><a href="/example-code/strings/how-to-load-a-string-from-a-website-url">How to load a string from a website URL</a></li><li><a href="/quick-start/swiftui/how-to-load-a-remote-image-from-a-url">How to load a remote image from a URL</a></li><li><a href="/example-code/uikit/how-to-load-a-remote-image-url-into-uiimageview">How to load a remote image URL into UIImageView</a></li><li><a href="/example-code/system/how-to-open-a-url-in-safari">How to open a URL in Safari</a></li></ul>
-->

:::

---

<TagLinks />