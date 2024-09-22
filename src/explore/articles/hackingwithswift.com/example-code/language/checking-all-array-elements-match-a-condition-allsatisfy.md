---
lang: ko-KR
title: "Checking all array elements match a condition: allSatisfy()"
description: "Article(s) > Checking all array elements match a condition: allSatisfy()"
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
      content: "Article(s) > Checking all array elements match a condition: allSatisfy()"
    - property: og:description
      content: "Checking all array elements match a condition: allSatisfy()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/checking-all-array-elements-match-a-condition-allsatisfy.html
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
  "title": "Checking all array elements match a condition: allSatisfy() | Language - free Swift example code",
  "desc": "Checking all array elements match a condition: allSatisfy()",
  "link": "https://hackingwithswift.com/example-code/language/checking-all-array-elements-match-a-condition-allsatisfy",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you have a collection of objects and want to check that all of them match a specific condition, you should use the <code>allSatisfy()</code> method.</p>
<p>For example, if we had an array of words and wanted to make sure they all start with the letter “S”, we could write code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> sWords <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Swift"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Seahorse"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Solar"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> allMatch <span class="token operator">=</span> sWords<span class="token punctuation">.</span>allSatisfy <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span><span class="token function">hasPrefix</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"S"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span></code></pre>
<p>Alternatively, if we had an array of exam results like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">92</span><span class="token punctuation">]</span></code></pre>
<p>We could decide whether that student passed their course by checking whether all their exam results were 85 or higher:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> passed <span class="token operator">=</span> scores<span class="token punctuation">.</span>allSatisfy <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">&gt;=</span> <span class="token number">85</span> <span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition</a></li><li><a href="/example-code/strings/nsregularexpression-how-to-match-regular-expressions-in-strings">NSRegularExpression: How to match regular expressions in strings</a></li><li><a href="/example-code/language/removing-matching-elements-from-a-collection-removeallwhere">Removing matching elements from a collection: removeAll(where:)</a></li><li><a href="/quick-start/swiftui/enabling-and-disabling-elements-in-forms">Enabling and disabling elements in forms</a></li><li><a href="/example-code/uikit/how-set-different-widths-for-a-uisegmentedcontrols-elements">How set different widths for a UISegmentedControl's elements</a></li></ul>
-->

:::

---

<TagLinks />