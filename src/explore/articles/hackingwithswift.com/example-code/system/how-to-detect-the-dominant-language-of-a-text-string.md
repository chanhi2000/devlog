---
lang: ko-KR
title: "How to detect the dominant language of a text string"
description: "Article(s) > How to detect the dominant language of a text string"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect the dominant language of a text string"
    - property: og:description
      content: "How to detect the dominant language of a text string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-detect-the-dominant-language-of-a-text-string.html
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
  "title": "How to detect the dominant language of a text string | System - free Swift example code",
  "desc": "How to detect the dominant language of a text string",
  "link": "https://hackingwithswift.com/example-code/how-to-detect-the-dominant-language-of-a-text-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>NSLinguisticTagger</code> class has dedicated code to help you identify the dominant language of a text string. Before I show you the code, there are three important provisos:</p>
<ol>
<li>It detects the <em>dominant</em> language, which means if you provide it with text that contains more than one language it will return whichever one appears most often.</li>
<li>If you give it text where no identification can be made, e.g. some numbers or an empty string, it will return nil.</li>
<li>It is extraordinarily fast – you can feed it thousands of article-length strings a second and it will fly through them.</li>
</ol>
<p>Here’s an example to help you get started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Ceci n'est pas une pipe"</span></span>

<span class="token keyword">if</span> <span class="token keyword">let</span> language <span class="token operator">=</span> <span class="token class-name">NSLinguisticTagger</span><span class="token punctuation">.</span><span class="token function">dominantLanguage</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Unknown language"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>When that code runs it will print “fr”, because the dominant language in the text is French.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a></li><li><a href="/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image">How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image</a></li><li><a href="/quick-start/swiftui/how-to-create-static-labels-with-a-text-view">How to create static labels with a Text view</a></li><li><a href="/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations</a></li></ul>
-->

:::

---

<TagLinks />