---
lang: ko-KR
title: "How to use #available to check for API availability"
description: "Article(s) > How to use #available to check for API availability"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use #available to check for API availability"
    - property: og:description
      content: "How to use #available to check for API availability"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-available-to-check-for-api-availability.html
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
  "title": "How to use #available to check for API availability | Language - free Swift example code",
  "desc": "How to use #available to check for API availability",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-available-to-check-for-api-availability",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>One of my favorite Xcode features is the ability to have Xcode automatically check API availability for you, which means it will refuse to run code that is not available on the minimum iOS version you support.</p>
<p>Of course, there are times when you really do need to use a newer feature, for example if you want to use <code>UIStackView</code> where it's available but otherwise show a message to users asking them to upgrade. For this, Swift has <code>#available</code>, which lets you state that a certain block of code should only execute on specific versions of iOS.</p>
<p>To use the previous example, this code checks whether the user has iOS 9.0 or later on their device:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token other-directive property">#available</span><span class="token punctuation">(</span>iOS <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// use UIStackView</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// show sad face emoji</span>
<span class="token punctuation">}</span></code></pre>
<p>Any code inside the <code>// use UIStackView</code> block can be executed as if your deployment target were iOS 9.0.</p>
<p>If you want, you can mark whole functions or classes as requiring a specific iOS version by using <code>@available</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@available</span><span class="token punctuation">(</span>iOS <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function-definition function">useStackView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// use UIStackView</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport()</a></li><li><a href="/example-code/language/how-to-use-available-to-deprecate-old-apis">How to use @available to deprecate old APIs</a></li><li><a href="/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth()</a></li><li><a href="/quick-start/swiftui/how-to-tell-the-user-that-no-content-is-available">How to tell the user that no content is available</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li></ul>
-->

:::

---

<TagLinks />