---
lang: ko-KR
title: "NSRegularExpression: How to match regular expressions in strings"
description: "Article(s) > NSRegularExpression: How to match regular expressions in strings"
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
      content: "Article(s) > NSRegularExpression: How to match regular expressions in strings"
    - property: og:description
      content: "NSRegularExpression: How to match regular expressions in strings"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/nsregularexpression-how-to-match-regular-expressions-in-strings.html
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
  "title": "NSRegularExpression: How to match regular expressions in strings | Strings - free Swift example code",
  "desc": "NSRegularExpression: How to match regular expressions in strings",
  "link": "https://hackingwithswift.com/example-code/strings/nsregularexpression-how-to-match-regular-expressions-in-strings",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>NSRegularExpression</code> class lets you find and replace substrings using regular expressions, which are concise and flexible descriptions of text. For example, if we wanted to pull "Taylor Swift" out of the string "My name is Taylor Swift", we could write a regular expression that matches the text "My name is " followed by any text, then pass that to the <code>NSRegularExpression</code> class.</p>
<p>The example below does just that. Note that we need to pull out the second match range because the first range is the entire matched string, whereas the second range is just the "Taylor Swift" part:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> input <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"My name is Taylor Swift"</span></span>
    <span class="token keyword">let</span> regex <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">NSRegularExpression</span><span class="token punctuation">(</span>pattern<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"My name is (.*)"</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token class-name">NSRegularExpression</span><span class="token punctuation">.</span><span class="token class-name">Options</span><span class="token punctuation">.</span>caseInsensitive<span class="token punctuation">)</span>
    <span class="token keyword">let</span> matches <span class="token operator">=</span> regex<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> input<span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> range<span class="token punctuation">:</span> <span class="token class-name">NSRange</span><span class="token punctuation">(</span>location<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">:</span> input<span class="token punctuation">.</span>utf16<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token keyword">let</span> match <span class="token operator">=</span> matches<span class="token punctuation">.</span>first <span class="token punctuation">{</span>
        <span class="token keyword">let</span> range <span class="token operator">=</span> match<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> swiftRange <span class="token operator">=</span> <span class="token class-name">Range</span><span class="token punctuation">(</span>range<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> name <span class="token operator">=</span> input<span class="token punctuation">[</span>swiftRange<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token comment">// regex was bad!</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition</a></li><li><a href="/example-code/language/checking-all-array-elements-match-a-condition-allsatisfy">Checking all array elements match a condition: allSatisfy()</a></li><li><a href="/example-code/strings/how-to-use-string-interpolation-to-combine-strings-integers-and-doubles">How to use string interpolation to combine strings, integers and doubles</a></li><li><a href="/example-code/strings/how-do-you-make-raw-strings-in-swift">How do you make raw strings in Swift?</a></li><li><a href="/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth()</a></li></ul>
-->

:::

---

<TagLinks />