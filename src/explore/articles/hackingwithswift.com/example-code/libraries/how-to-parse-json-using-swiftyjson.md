---
lang: ko-KR
title: "How to parse JSON using SwiftyJSON"
description: "Article(s) > How to parse JSON using SwiftyJSON"
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
      content: "Article(s) > How to parse JSON using SwiftyJSON"
    - property: og:description
      content: "How to parse JSON using SwiftyJSON"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-parse-json-using-swiftyjson.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to parse JSON using SwiftyJSON | Libraries - free Swift example code",
  "desc": "How to parse JSON using SwiftyJSON",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-parse-json-using-swiftyjson",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>SwiftyJSON is a super-simplified JSON parsing library that gives you clearer syntax than the built-in iOS libraries (yes, even more than <code>JSONEncoder</code> from <code>Codable</code>), and is free.</p>
<p>You can <a href="https://github.com/SwiftyJSON/SwiftyJSON">download it from here</a> –&nbsp;unzip the file you downloaded, then look in its Source directory and drag SwiftyJSON.swift into your Xcode project. To use SwiftyJSON, you need to convert your JSON string into a <code>Data</code> object, then send it in for parsing. Once that's done, you simply request data in the format you want, and (here's the awesome bit) <em>SwiftyJSON is guaranteed to return something.</em></p>
<p>That "something" is going to be your data, if all things are in good shape. But if you requested the wrong thing (either with a typo, or because you didn't understand your JSON structure correctly) or if the JSON has changed, SwiftyJSON will just return a default value instead.</p>
<p>To get you started, here is some example JSON:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"{ \"people\": [{ \"firstName\": \"Paul\", \"lastName\": \"Hudson\", \"isAlive\": true }, { \"firstName\": \"Angela\", \"lastName\": \"Merkel\", \"isAlive\": true }, { \"firstName\": \"George\", \"lastName\": \"Washington\", \"isAlive\": false } ] }"</span></span></code></pre>
<p>That contains an array of three people, each of which have a first name, a last name, and an "is alive" status. To parse that using SwiftyJSON and print out all the first names, here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> data <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>using<span class="token punctuation">:</span> <span class="token punctuation">.</span>utf8<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> <span class="token function">JSON</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> item <span class="token keyword">in</span> json<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"people"</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span>arrayValue <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"firstName"</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span>stringValue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>It's the <code>arrayValue</code> and <code>stringValue</code> properties that do all the magic: the first one returns the array of people or an empty array if the "people" element didn't exist, and the second one returns the "firstName" property of a person, or an empty string if it wasn't set. So, no matter what happens, that code will work, which means it's easy to write and safe to run.</p>
<p>Sometimes JSON has quite deeply nested dictionaries, but that's OK: SwiftyJSON can navigate through multiple levels in one call, and if any one level fails you'll still get back your default value. For example, if you have JSON like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token punctuation">{</span>  
   <span class="token string-literal"><span class="token string">"metadata"</span></span><span class="token punctuation">:</span><span class="token punctuation">{</span>  
      <span class="token string-literal"><span class="token string">"responseInfo"</span></span><span class="token punctuation">:</span><span class="token punctuation">{</span>  
         <span class="token string-literal"><span class="token string">"status"</span></span><span class="token punctuation">:</span><span class="token number">200</span><span class="token punctuation">,</span>
         <span class="token string-literal"><span class="token string">"developerMessage"</span></span><span class="token punctuation">:</span><span class="token string-literal"><span class="token string">"OK"</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>You might want to check that the status code is 200 before continuing. To do that, just read the "metaData", "responseInfo" and "status" values all at once, and ask SwiftyJSON for its <code>intValue</code> –&nbsp;you'll either get the correct number (200) or 0 if any of those values don't exist. Like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> json<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"metadata"</span></span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"responseInfo"</span></span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"status"</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span>intValue <span class="token operator">==</span> <span class="token number">200</span> <span class="token punctuation">{</span>
    <span class="token comment">// we're OK to parse!</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-parse-json-using-jsonserialization">How to parse JSON using JSONSerialization</a></li><li><a href="/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger">How to parse a sentence using NSLinguisticTagger</a></li><li><a href="/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type</a></li><li><a href="/example-code/language/how-to-format-json-using-codable-and-pretty-printing">How to format JSON using Codable and pretty printing</a></li><li><a href="/example-code/language/how-to-convert-json-into-swift-objects-using-codable">How to convert JSON into Swift objects using Codable</a></li></ul>
-->

:::

---

<TagLinks />