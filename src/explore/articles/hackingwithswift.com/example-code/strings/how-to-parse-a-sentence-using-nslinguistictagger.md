---
lang: ko-KR
title: "How to parse a sentence using NSLinguisticTagger"
description: "Article(s) > How to parse a sentence using NSLinguisticTagger"
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
      content: "Article(s) > How to parse a sentence using NSLinguisticTagger"
    - property: og:description
      content: "How to parse a sentence using NSLinguisticTagger"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger.html
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
  "title": "How to parse a sentence using NSLinguisticTagger | Strings - free Swift example code",
  "desc": "How to parse a sentence using NSLinguisticTagger",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
<p>If you're looking to parse natural language entered by a user, you're looking for <code>NSLinguisticTagger</code>: it automatically recognizes English words (and words in other languages too, if you ask) and tells you what kind of word it is. That is, this magic little class distinguishes between verbs, nouns, adjectives and so on, so you can focus on the important stuff: how do I (verb) this (noun)?</p>
<p>Here's an example to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token class-name">NSLinguisticTagger</span><span class="token punctuation">.</span><span class="token class-name">Options</span><span class="token punctuation">.</span>omitWhitespace<span class="token punctuation">.</span>rawValue <span class="token operator">|</span> <span class="token class-name">NSLinguisticTagger</span><span class="token punctuation">.</span><span class="token class-name">Options</span><span class="token punctuation">.</span>joinNames<span class="token punctuation">.</span>rawValue
<span class="token keyword">let</span> tagger <span class="token operator">=</span> <span class="token class-name">NSLinguisticTagger</span><span class="token punctuation">(</span>tagSchemes<span class="token punctuation">:</span> <span class="token class-name">NSLinguisticTagger</span><span class="token punctuation">.</span><span class="token function">availableTagSchemes</span><span class="token punctuation">(</span>forLanguage<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"en"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> inputString <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"This is a very long test for you to try"</span></span>
tagger<span class="token punctuation">.</span>string <span class="token operator">=</span> inputString

<span class="token keyword">let</span> range <span class="token operator">=</span> <span class="token class-name">NSRange</span><span class="token punctuation">(</span>location<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">:</span> inputString<span class="token punctuation">.</span>utf16<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
tagger<span class="token punctuation">.</span><span class="token function">enumerateTags</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> range<span class="token punctuation">,</span> scheme<span class="token punctuation">:</span> <span class="token punctuation">.</span>nameTypeOrLexicalClass<span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token class-name">NSLinguisticTagger</span><span class="token punctuation">.</span><span class="token class-name">Options</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">:</span> options<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> tag<span class="token punctuation">,</span> tokenRange<span class="token punctuation">,</span> sentenceRange<span class="token punctuation">,</span> stop <span class="token keyword">in</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> range <span class="token operator">=</span> <span class="token class-name">Range</span><span class="token punctuation">(</span>tokenRange<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> inputString<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
    <span class="token keyword">let</span> token <span class="token operator">=</span> inputString<span class="token punctuation">[</span>range<span class="token punctuation">]</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">tag</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">token</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-read-names-in-a-string-using-nslinguistictagger">How to read names in a string using NSLinguisticTagger</a></li><li><a href="/example-code/libraries/how-to-parse-json-using-swiftyjson">How to parse JSON using SwiftyJSON</a></li><li><a href="/example-code/system/how-to-parse-json-using-jsonserialization">How to parse JSON using JSONSerialization</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li></ul>
-->

:::

---

<TagLinks />