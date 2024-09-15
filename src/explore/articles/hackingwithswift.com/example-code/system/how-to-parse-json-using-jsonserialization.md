---
lang: ko-KR
title: "How to parse JSON using JSONSerialization"
description: "Article(s) > How to parse JSON using JSONSerialization"
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
      content: "Article(s) > How to parse JSON using JSONSerialization"
    - property: og:description
      content: "How to parse JSON using JSONSerialization"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-parse-json-using-jsonserialization.html
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
  "title": "How to parse JSON using JSONSerialization | System - free Swift example code",
  "desc": "How to parse JSON using JSONSerialization",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-parse-json-using-jsonserialization",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
<p>If you want to parse JSON by hand rather than using <code>Codable</code>, iOS has a built-in alternative called <code>JSONSerialization</code> and it can convert a JSON string into a collection of dictionaries, arrays, strings and numbers in just a few lines of code.</p>
<p>In the example below, I create a dummy piece of JSON that contains three names in an array cunningly called “names”. This then gets sent to <code>JSONSerialization</code> (by converting it into a <code>Data</code> object, which is how <code>JSONSerialization</code> likes to receive its content), and I conditionally pull out and print the <code>names</code> array:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"{\"names\": [\"Bob\", \"Tim\", \"Tina\"]}"</span></span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>utf8<span class="token punctuation">)</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token comment">// make sure this JSON is in the format we expect</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">JSONSerialization</span><span class="token punctuation">.</span><span class="token function">jsonObject</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> data<span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token comment">// try to read out a string array</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> names <span class="token operator">=</span> json<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"names"</span></span><span class="token punctuation">]</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token keyword">let</span> error <span class="token keyword">as</span> <span class="token class-name">NSError</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to load: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>There are a couple of things that might confuse you there. First, because parsing JSON will fail if the JSON isn't valid, you need to use try/catch and have some sort of error handling. Second, you need to typecast my example JSON to be a dictionary of type <code>[String: Any]</code> so that you can start working with your JSON values. Third, you don't know for sure that any values exist inside the JSON, so you need to conditionally check for and unwrap the <code>names</code> value.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/libraries/how-to-parse-json-using-swiftyjson">How to parse JSON using SwiftyJSON</a></li><li><a href="/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger">How to parse a sentence using NSLinguisticTagger</a></li><li><a href="/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type</a></li><li><a href="/example-code/language/how-to-format-json-using-codable-and-pretty-printing">How to format JSON using Codable and pretty printing</a></li><li><a href="/example-code/language/how-to-convert-json-into-swift-objects-using-codable">How to convert JSON into Swift objects using Codable</a></li></ul>
-->

:::

---

<TagLinks />