---
lang: ko-KR
title: "How to perform sentiment analysis on a string using NLTagger"
description: "Article(s) > How to perform sentiment analysis on a string using NLTagger"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to perform sentiment analysis on a string using NLTagger"
    - property: og:description
      content: "How to perform sentiment analysis on a string using NLTagger"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/naturallanguage/how-to-perform-sentiment-analysis-on-a-string-using-nltagger.html
date: 2019-10-05
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "NaturalLanguage - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/naturallanguage/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to perform sentiment analysis on a string using NLTagger | NaturalLanguage - free Swift example code",
  "desc": "How to perform sentiment analysis on a string using NLTagger",
  "link": "https://hackingwithswift.com/example-code/naturallanguage/how-to-perform-sentiment-analysis-on-a-string-using-nltagger",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>Sentiment analysis uses machine learning to tell us whether a piece of text is considered positive or negative, and it’s baked right in to iOS with the NaturalLanguage framework.</p>
<p>To perform sentiment analysis takes a handful of lines of code: we create an <code>NLTagger</code> that creates a sentiment score, assign some text for the tagger to analyze, read the sentiment value, then convert it to a <code>Double</code> so it can be used.</p>
<p>Let’s look at the code first, then I’ll break down what it means:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// set up our input</span>
<span class="token keyword">let</span> input <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Hacking with Swift is awesome"</span></span>

<span class="token comment">// feed it into the NaturalLanguage framework</span>
<span class="token keyword">let</span> tagger <span class="token operator">=</span> <span class="token class-name">NLTagger</span><span class="token punctuation">(</span>tagSchemes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>sentimentScore<span class="token punctuation">]</span><span class="token punctuation">)</span>
tagger<span class="token punctuation">.</span>string <span class="token operator">=</span> input

<span class="token comment">// ask for the results</span>
<span class="token keyword">let</span> <span class="token punctuation">(</span>sentiment<span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">)</span> <span class="token operator">=</span> tagger<span class="token punctuation">.</span><span class="token function">tag</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> input<span class="token punctuation">.</span>startIndex<span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token punctuation">.</span>paragraph<span class="token punctuation">,</span> scheme<span class="token punctuation">:</span> <span class="token punctuation">.</span>sentimentScore<span class="token punctuation">)</span>

<span class="token comment">// read the sentiment back and print it</span>
<span class="token keyword">let</span> score <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>sentiment<span class="token operator">?</span><span class="token punctuation">.</span>rawValue <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"0"</span></span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token number">0</span>
<span class="token function">print</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span></code></pre>
<p>Now let’s break that down, starting with the <code>tagger.tag()</code> call that has three options and two return values.</p>
<p>The options are:</p>
<ol>
<li>Where to start scanning; in the code above we go from the start of our string.</li>
<li>How <em>much</em> to scan; in the code above we scan the entire paragraph.</li>
<li>Which specific tag scheme we want to read; we only have one, which is the sentiment score.</li>
</ol>
<p>What we get <em>back</em> is the sentiment score as an <code>NLTag</code>, plus the range where it was found. We don’t care about the range, so we’ll ignore it.</p>
<p>The other value, that <code>sentiment</code> constant, is an <code>NLTag?</code> with a raw value of a <code>String</code>. If everything went to plan that string will contain a <code>Double</code> in the range of -1 (very negative) to +1 (very positive), so to read that value we need to do some careful typecasting: </p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> score <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>sentiment<span class="token operator">?</span><span class="token punctuation">.</span>rawValue <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"0"</span></span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token number">0</span>
<span class="token function">print</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span></code></pre>
<p>That means “attempt to read the sentiment’s raw value, but use the string ‘0’ if that fails, then attempt to convert that to a <code>Double</code>, but use the value 0 if <em>that</em> fails.”</p>
<p>The end result will be a <code>score</code> value that is somewhere between -1.0 (very negative) and 1.0 (very positive), or 0.0 if the text is neutral or nothing could be read.</p>
<p><strong>Note:</strong> In this example I’ve used a short piece of text, but obviously the framework works best with <em>lots</em> of text –&nbsp;it’s hard to come to a conclusion given only a few words, and you’ll often get inaccurate readings doing so.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/naturallanguage/how-to-lemmatize-text-using-nltagger">How to lemmatize text using NLTagger</a></li><li><a href="/example-code/system/how-to-run-code-after-a-delay-using-asyncafter-and-perform">How to run code after a delay using asyncAfter() and perform()</a></li><li><a href="/example-code/system/how-to-cancel-a-delayed-perform-call">How to cancel a delayed perform() call</a></li><li><a href="/example-code/uikit/how-to-perform-a-segue-programmatically-using-performsegue">How to perform a segue programmatically using performSegue()</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li></ul>
-->

:::

---

<TagLinks />