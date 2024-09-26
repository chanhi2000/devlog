---
lang: ko-KR
title: "How to check a string is spelled correctly using UITextChecker"
description: "Article(s) > How to check a string is spelled correctly using UITextChecker"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check a string is spelled correctly using UITextChecker"
    - property: og:description
      content: "How to check a string is spelled correctly using UITextChecker"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-check-a-string-is-spelled-correctly-using-uitextchecker.html
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
  "title": "How to check a string is spelled correctly using UITextChecker | UIKit - free Swift example code",
  "desc": "How to check a string is spelled correctly using UITextChecker",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-check-a-string-is-spelled-correctly-using-uitextchecker",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
<p>You can draw on the iOS dictionary in just a few lines of code thanks to the <code>UITextChecker</code> class. Tell it the range of the string you want to check (this could be the whole string or just part of it), then ask it to tell you where the spelling error is. If it says there are no errors, the word is good. Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">isReal</span><span class="token punctuation">(</span>word<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> checker <span class="token operator">=</span> <span class="token class-name">UITextChecker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> range <span class="token operator">=</span> <span class="token class-name">NSRange</span><span class="token punctuation">(</span>location<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">:</span> word<span class="token punctuation">.</span>utf16<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
    <span class="token keyword">let</span> misspelledRange <span class="token operator">=</span> checker<span class="token punctuation">.</span><span class="token function">rangeOfMisspelledWord</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> word<span class="token punctuation">,</span> range<span class="token punctuation">:</span> range<span class="token punctuation">,</span> startingAt<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> wrap<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> language<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"en"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> misspelledRange<span class="token punctuation">.</span>location <span class="token operator">==</span> <span class="token class-name">NSNotFound</span>
<span class="token punctuation">}</span></code></pre>
<p>Note that <code>rangeOfMisspelledWord(in:)</code> accepts a language parameter, so you can change that as needed.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/strings/how-to-check-whether-a-string-contains-any-words-from-an-array">How to check whether a string contains any words from an array</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter</a></li><li><a href="/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor">How to check for internet connectivity using NWPathMonitor</a></li><li><a href="/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a></li></ul>
-->

:::

---

<TagLinks />