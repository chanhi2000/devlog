---
lang: ko-KR
title: "How to lemmatize text using NLTagger"
description: "Article(s) > How to lemmatize text using NLTagger"
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
  - ios-12.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to lemmatize text using NLTagger"
    - property: og:description
      content: "How to lemmatize text using NLTagger"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/naturallanguage/how-to-lemmatize-text-using-nltagger.html
date: 2021-06-17
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
  "title": "How to lemmatize text using NLTagger | NaturalLanguage - free Swift example code",
  "desc": "How to lemmatize text using NLTagger",
  "link": "https://hackingwithswift.com/example-code/naturallanguage/how-to-lemmatize-text-using-nltagger",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 12.0

<!-- TODO: 작성 -->

<!-- 
<p>Apple’s NaturalLanguage framework is able to lemmatize text for us, which is the process of converting words to the forms you would find in a dictionary – making plural nouns singular, finding the root forms of conjugated verbs, and so on, while also taking into account the context in which they are used.</p>
<p>To do this, first create an instance of <code>NLTagger</code> enabling its <code>.lemma</code> scheme, then call <code>enumerateTags()</code> on it to find all the root word forms. This will pass you the tag (the root word)&nbsp;if it exists, plus the range of the original text in the string.</p>
<p>So, you could lemmatize a whole sentence like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">NaturalLanguage</span>

<span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"This is text with plurals such as geese, people, and millennia."</span></span>
<span class="token keyword">let</span> tagger <span class="token operator">=</span> <span class="token class-name">NLTagger</span><span class="token punctuation">(</span>tagSchemes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>lemma<span class="token punctuation">]</span><span class="token punctuation">)</span>
tagger<span class="token punctuation">.</span>string <span class="token operator">=</span> text

tagger<span class="token punctuation">.</span><span class="token function">enumerateTags</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> text<span class="token punctuation">.</span>startIndex<span class="token operator">..&lt;</span>text<span class="token punctuation">.</span>endIndex<span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token punctuation">.</span>word<span class="token punctuation">,</span> scheme<span class="token punctuation">:</span> <span class="token punctuation">.</span>lemma<span class="token punctuation">)</span> <span class="token punctuation">{</span> tag<span class="token punctuation">,</span> range <span class="token keyword">in</span>
    <span class="token keyword">let</span> stemForm <span class="token operator">=</span> tag<span class="token operator">?</span><span class="token punctuation">.</span>rawValue <span class="token operator">??</span> <span class="token class-name">String</span><span class="token punctuation">(</span>text<span class="token punctuation">[</span>range<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span>stemForm<span class="token punctuation">,</span> terminator<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">""</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>Text lemmatized in this way will be lowercase, preserving any punctuation. So, that snippet will output “this be text with plural such as goose, person, and millennium.”</p>
<p>If you intend to lemmatize text frequently, consider making it an extension on <code>String</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">lemmatized</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> tagger <span class="token operator">=</span> <span class="token class-name">NLTagger</span><span class="token punctuation">(</span>tagSchemes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>lemma<span class="token punctuation">]</span><span class="token punctuation">)</span>
        tagger<span class="token punctuation">.</span>string <span class="token operator">=</span> <span class="token keyword">self</span>

        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        tagger<span class="token punctuation">.</span><span class="token function">enumerateTags</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span>startIndex<span class="token operator">..&lt;</span><span class="token keyword">self</span><span class="token punctuation">.</span>endIndex<span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token punctuation">.</span>word<span class="token punctuation">,</span> scheme<span class="token punctuation">:</span> <span class="token punctuation">.</span>lemma<span class="token punctuation">)</span> <span class="token punctuation">{</span> tag<span class="token punctuation">,</span> tokenRange <span class="token keyword">in</span>
            <span class="token keyword">let</span> stemForm <span class="token operator">=</span> tag<span class="token operator">?</span><span class="token punctuation">.</span>rawValue <span class="token operator">??</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">[</span>tokenRange<span class="token punctuation">]</span><span class="token punctuation">)</span>
            result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>stemForm<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that in place you can now lemmatize text easily:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"This is text with plurals such as geese, people, and millennia."</span></span>
<span class="token function">print</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">lemmatized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/naturallanguage/how-to-perform-sentiment-analysis-on-a-string-using-nltagger">How to perform sentiment analysis on a string using NLTagger</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a></li><li><a href="/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations</a></li><li><a href="/quick-start/swiftui/building-a-menu-using-list">Building a menu using List</a></li></ul>
-->

:::

---

<TagLinks />