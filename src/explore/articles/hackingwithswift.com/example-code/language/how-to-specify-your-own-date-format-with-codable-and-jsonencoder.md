---
lang: ko-KR
title: "How to specify your own date format with Codable and JSONEncoder"
description: "Article(s) > How to specify your own date format with Codable and JSONEncoder"
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
      content: "Article(s) > How to specify your own date format with Codable and JSONEncoder"
    - property: og:description
      content: "How to specify your own date format with Codable and JSONEncoder"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to specify your own date format with Codable and JSONEncoder | Language - free Swift example code",
  "desc": "How to specify your own date format with Codable and JSONEncoder",
  "link": "https://hackingwithswift.com/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>When using <code>JSONEncoder</code> to encode dates, there are a handful of built-in date formats you can choose from. If none of them fit your needs, why not make your own? You can configure a <code>DateFormatter</code> using whatever date and time format you want, then pass that to the <code>JSONEncoder</code> as its <code>dateEncodingStrategy</code> property, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> encoder <span class="token operator">=</span> <span class="token class-name">JSONEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> formatter <span class="token operator">=</span> <span class="token class-name">DateFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formatter<span class="token punctuation">.</span>dateStyle <span class="token operator">=</span> <span class="token punctuation">.</span>full
formatter<span class="token punctuation">.</span>timeStyle <span class="token operator">=</span> <span class="token punctuation">.</span>full
encoder<span class="token punctuation">.</span>dateEncodingStrategy <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token function">formatted</span><span class="token punctuation">(</span>formatter<span class="token punctuation">)</span></code></pre>
<p>That converts any <code>Date</code> properties to be the fullest possible string for your locale, e.g. "Monday, February 5, 2018 at 9:28:10 PM Greenwich Mean Time”.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />