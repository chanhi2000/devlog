---
lang: ko-KR
title: "How to store NSCoding data using Codable"
description: "Article(s) > How to store NSCoding data using Codable"
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
      content: "Article(s) > How to store NSCoding data using Codable"
    - property: og:description
      content: "How to store NSCoding data using Codable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-store-nscoding-data-using-codable.html
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
  "title": "How to store NSCoding data using Codable | Language - free Swift example code",
  "desc": "How to store NSCoding data using Codable",
  "link": "https://hackingwithswift.com/example-code/language/how-to-store-nscoding-data-using-codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Broadly speaking, <code>NSCoding</code> is the Objective-C way of archiving data and <code>Codable</code> is the Swift way. However, that doesn’t mean the two can’t work together –&nbsp;with a little work you can save any <code>NSCoding</code> data right inside <code>Codable</code>, which is helpful because many Apple types such as <code>UIColor</code> and <code>UIImage</code> conform to <code>NSCoding</code> but not <code>Codable</code>.</p>
<p>Here’s a simple struct as an example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> favoriteColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span>
<span class="token punctuation">}</span></code></pre>
<p>That stores one <code>Codable</code> type (the string) and one <code>NSCoding</code> type (the color), and we’re going to make them all work through <code>Codable</code> using <code>JSONEncoder</code>.</p>
<p>This takes four steps:</p>
<ol>
<li>Creating an extension on <code>Person</code> where we’ll put our <code>Codable</code> functionality.</li>
<li>Creating custom coding keys to describe what data is saved.</li>
<li>Creating an <code>init(from:)</code> method that converts raw data back into a <code>UIColor</code>.</li>
<li>Creating an <code>encode(to:)</code> method that converts a <code>UIColor</code> into raw data, which <code>Codable</code> can then base-64 encode.</li>
</ol>
<p>Start by adding the extension to <code>Person</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">Codable</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span></code></pre>
<p>That will stop your code from compiling because Swift knows <code>UIColor</code> isn’t compatible with <code>Codable</code>. So, let’s move on to step two: adding custom coding keys. Put this inside the extension:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">CodingKeys</span><span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">CodingKey</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> name
    <span class="token keyword">case</span> favoriteColor
<span class="token punctuation">}</span></code></pre>
<p>Those are just the same coding keys we’d get by default, but because we’re going to be encoding and decoding things by hand we need to declare them explicitly.</p>
<p>Step three is to create an <code>init(from:)</code> method that can read raw data and convert it to a <code>UIColor</code>. This will used <code>NSKeyedUnarchiver</code> just like regular <code>NSCoding</code> code. Add this to the extension:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">init</span><span class="token punctuation">(</span>from decoder<span class="token punctuation">:</span> <span class="token class-name">Decoder</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> container <span class="token operator">=</span> <span class="token keyword">try</span> decoder<span class="token punctuation">.</span><span class="token function">container</span><span class="token punctuation">(</span>keyedBy<span class="token punctuation">:</span> <span class="token class-name">CodingKeys</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span>

    name <span class="token operator">=</span> <span class="token keyword">try</span> container<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token keyword">let</span> colorData <span class="token operator">=</span> <span class="token keyword">try</span> container<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">Data</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token punctuation">.</span>favoriteColor<span class="token punctuation">)</span>
    favoriteColor <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">NSKeyedUnarchiver</span><span class="token punctuation">.</span><span class="token function">unarchiveTopLevelObjectWithData</span><span class="token punctuation">(</span>colorData<span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">UIColor</span> <span class="token operator">??</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black
<span class="token punctuation">}</span></code></pre>
<p>The last step is to create an <code>encode(to:)</code> method that does the opposite –&nbsp;it takes a <code>UIColor</code> and converts it to data using <code>NSKeyedArchiver</code>. Put this inside the extension:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">encode</span><span class="token punctuation">(</span>to encoder<span class="token punctuation">:</span> <span class="token class-name">Encoder</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> container <span class="token operator">=</span> encoder<span class="token punctuation">.</span><span class="token function">container</span><span class="token punctuation">(</span>keyedBy<span class="token punctuation">:</span> <span class="token class-name">CodingKeys</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span> container<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token keyword">let</span> colorData <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">NSKeyedArchiver</span><span class="token punctuation">.</span><span class="token function">archivedData</span><span class="token punctuation">(</span>withRootObject<span class="token punctuation">:</span> favoriteColor<span class="token punctuation">,</span> requiringSecureCoding<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span> container<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>colorData<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token punctuation">.</span>favoriteColor<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That’s all the work done – by converting our <code>UIColor</code> into a <code>Data</code>, <code>Codable</code> can take care of the rest.</p>
<p>If you want to try it out, here’s some sample code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> taylor <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">,</span> favoriteColor<span class="token punctuation">:</span> <span class="token punctuation">.</span>blue<span class="token punctuation">)</span>
<span class="token keyword">let</span> encoder <span class="token operator">=</span> <span class="token class-name">JSONEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> encoded <span class="token operator">=</span> <span class="token keyword">try</span> encoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>taylor<span class="token punctuation">)</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>decoding<span class="token punctuation">:</span> encoded<span class="token punctuation">,</span> <span class="token keyword">as</span><span class="token punctuation">:</span> UTF8<span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/concurrency/how-to-store-continuations-to-be-resumed-later">How to store continuations to be resumed later</a></li><li><a href="/example-code/system/how-to-store-userdefaults-options-in-icloud">How to store UserDefaults options in iCloud</a></li><li><a href="/quick-start/swiftui/how-to-store-views-as-properties">How to store views as properties</a></li><li><a href="/example-code/language/how-to-use-codable-to-load-and-save-custom-data-types">How to use Codable to load and save custom data types</a></li></ul>
-->

:::

---

<TagLinks />