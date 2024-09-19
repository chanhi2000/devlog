---
lang: ko-KR
title: "Removing matching elements from a collection: removeAll(where:)"
description: "Article(s) > Removing matching elements from a collection: removeAll(where:)"
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
      content: "Article(s) > Removing matching elements from a collection: removeAll(where:)"
    - property: og:description
      content: "Removing matching elements from a collection: removeAll(where:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/removing-matching-elements-from-a-collection-removeallwhere.html
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
  "title": "Removing matching elements from a collection: removeAll(where:) | Language - free Swift example code",
  "desc": "Removing matching elements from a collection: removeAll(where:)",
  "link": "https://hackingwithswift.com/example-code/language/removing-matching-elements-from-a-collection-removeallwhere",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>removeAll(where:)</code> method performs a high-performance, in-place filter for collections. You give it a closure condition to run, and it will strip out all objects that match your condition. </p>
<p>For example, if you have a collection of names and want to remove people called “Terry”, you’d use this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> pythons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"John"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Michael"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Graham"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Terry"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Eric"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Terry"</span></span><span class="token punctuation">]</span>
pythons<span class="token punctuation">.</span>removeAll <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">"Terry"</span></span> <span class="token punctuation">}</span>
<span class="token function">print</span><span class="token punctuation">(</span>pythons<span class="token punctuation">)</span></code></pre>
<p>Using <code>removeAll(where:)</code> is more readable than using a reversed <code>filter()</code> call because it specifies what you <em>don’t</em> want rather than what you <em>want</em>. It’s also more performant than <code>filter()</code> because it removes object in place, and so avoids extra copying.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/checking-all-array-elements-match-a-condition-allsatisfy">Checking all array elements match a condition: allSatisfy()</a></li><li><a href="/quick-start/swiftui/enabling-and-disabling-elements-in-forms">Enabling and disabling elements in forms</a></li><li><a href="/example-code/uikit/how-set-different-widths-for-a-uisegmentedcontrols-elements">How set different widths for a UISegmentedControl's elements</a></li><li><a href="/example-code/language/how-to-find-the-index-of-the-first-matching-array-element">How to find the index of the first matching array element</a></li><li><a href="/example-code/language/how-to-count-matching-items-in-an-array">How to count matching items in an array</a></li></ul>
-->

:::

---

<TagLinks />