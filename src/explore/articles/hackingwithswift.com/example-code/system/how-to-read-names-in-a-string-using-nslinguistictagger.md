---
lang: ko-KR
title: "How to read names in a string using NSLinguisticTagger"
description: "Article(s) > How to read names in a string using NSLinguisticTagger"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to read names in a string using NSLinguisticTagger"
    - property: og:description
      content: "How to read names in a string using NSLinguisticTagger"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-read-names-in-a-string-using-nslinguistictagger.html
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
  "title": "How to read names in a string using NSLinguisticTagger | System - free Swift example code",
  "desc": "How to read names in a string using NSLinguisticTagger",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-read-names-in-a-string-using-nslinguistictagger",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
<p>Foundation has a built-in class to parse strings of text, and it includes some useful options to extra names of people, places, organizations, and more. </p>
<p>To try it out, consider this string:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Apple Computer was established in Cupertino by Steve Jobs, Steve Wozniak, and Ronald Wayne."</span></span></code></pre>
<p>That contains a company name, a place name, and three names of people all in one, and we can use <code>NSLinguisticTagger</code> to pull them all out. </p>
<p>First you create a linguistic tagger and tell it to look for the names of things inside that text string:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> tagger <span class="token operator">=</span> <span class="token class-name">NSLinguisticTagger</span><span class="token punctuation">(</span>tagSchemes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>nameType<span class="token punctuation">]</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
tagger<span class="token punctuation">.</span>string <span class="token operator">=</span> text</code></pre>
<p>Next you create the range to scan. This is done using the older <code>NSRange</code> type, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> range <span class="token operator">=</span> <span class="token class-name">NSRange</span><span class="token punctuation">(</span>location<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">:</span> text<span class="token punctuation">.</span>utf16<span class="token punctuation">.</span>count<span class="token punctuation">)</span></code></pre>
<p>Third, you tell <code>NSLinguisticTagger</code> what it should look for and how it should scan. One useful option here is <code>.joinNames</code>, which means it will return “Steve Jobs” as a single name rather than as two individual names:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> options<span class="token punctuation">:</span> <span class="token class-name">NSLinguisticTagger</span><span class="token punctuation">.</span><span class="token class-name">Options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>omitPunctuation<span class="token punctuation">,</span> <span class="token punctuation">.</span>omitWhitespace<span class="token punctuation">,</span> <span class="token punctuation">.</span>joinNames<span class="token punctuation">]</span>
<span class="token keyword">let</span> tags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NSLinguisticTag</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>personalName<span class="token punctuation">,</span> <span class="token punctuation">.</span>placeName<span class="token punctuation">,</span> <span class="token punctuation">.</span>organizationName<span class="token punctuation">]</span></code></pre>
<p>Finally, you tell <code>NSLinguisticTagger</code> to enumerate the tags in the input string, filter out any that aren’t in the <code>tags</code> array we’re looking for, convert the <code>NSRange</code> back to a Swift range, then print out each match:</p>
<pre class=" language-swift"><code class=" language-swift">tagger<span class="token punctuation">.</span><span class="token function">enumerateTags</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> range<span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token punctuation">.</span>word<span class="token punctuation">,</span> scheme<span class="token punctuation">:</span> <span class="token punctuation">.</span>nameType<span class="token punctuation">,</span> options<span class="token punctuation">:</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span> tag<span class="token punctuation">,</span> tokenRange<span class="token punctuation">,</span> stop <span class="token keyword">in</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> tag <span class="token operator">=</span> tag<span class="token punctuation">,</span> tags<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> range <span class="token operator">=</span> <span class="token class-name">Range</span><span class="token punctuation">(</span>tokenRange<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> name <span class="token operator">=</span> text<span class="token punctuation">[</span>range<span class="token punctuation">]</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">tag</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That will find the company, organization, and three people names in our string –&nbsp;nice!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger">How to parse a sentence using NSLinguisticTagger</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter</a></li><li><a href="/example-code/strings/how-to-read-a-single-character-from-a-string">How to read a single character from a string</a></li><li><a href="/quick-start/swiftui/how-to-read-user-contacts-with-contactaccessbutton">How to read user contacts with ContactAccessButton</a></li></ul>
-->

:::

---

<TagLinks />