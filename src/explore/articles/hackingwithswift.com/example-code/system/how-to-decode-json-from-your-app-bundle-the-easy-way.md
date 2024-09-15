---
lang: ko-KR
title: "How to decode JSON from your app bundle the easy way"
description: "Article(s) > How to decode JSON from your app bundle the easy way"
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
      content: "Article(s) > How to decode JSON from your app bundle the easy way"
    - property: og:description
      content: "How to decode JSON from your app bundle the easy way"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-decode-json-from-your-app-bundle-the-easy-way.html
date: 2019-10-06
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
  "title": "How to decode JSON from your app bundle the easy way | System - free Swift example code",
  "desc": "How to decode JSON from your app bundle the easy way",
  "link": "https://hackingwithswift.com/example-code/how-to-decode-json-from-your-app-bundle-the-easy-way",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you want to load some JSON from your app bundle when your app runs, it takes quite a few lines of code: you need to get the URL from your bundle, load it into a <code>Data</code> instance, try decoding it, then catch any errors.</p>
<p>It’s such a common thing to do that I have an extension to make the process easier. I’ll show you the code first, then explain how it works.</p>
<p>Here’s the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Bundle</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">decode</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">Decodable</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> type<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">.</span><span class="token keyword">Type</span><span class="token punctuation">,</span> from file<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> dateDecodingStrategy<span class="token punctuation">:</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">.</span><span class="token class-name">DateDecodingStrategy</span> <span class="token operator">=</span> <span class="token punctuation">.</span>deferredToDate<span class="token punctuation">,</span> keyDecodingStrategy<span class="token punctuation">:</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">.</span><span class="token class-name">KeyDecodingStrategy</span> <span class="token operator">=</span> <span class="token punctuation">.</span>useDefaultKeys<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">T</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>forResource<span class="token punctuation">:</span> file<span class="token punctuation">,</span> withExtension<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to locate </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">file</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> in bundle."</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">guard</span> <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>contentsOf<span class="token punctuation">:</span> url<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to load </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">file</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> from bundle."</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> decoder <span class="token operator">=</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        decoder<span class="token punctuation">.</span>dateDecodingStrategy <span class="token operator">=</span> dateDecodingStrategy
        decoder<span class="token punctuation">.</span>keyDecodingStrategy <span class="token operator">=</span> keyDecodingStrategy

        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">try</span> decoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token class-name">DecodingError</span><span class="token punctuation">.</span><span class="token function">keyNotFound</span><span class="token punctuation">(</span><span class="token keyword">let</span> key<span class="token punctuation">,</span> <span class="token keyword">let</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to decode </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">file</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> from bundle due to missing key '</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">key<span class="token punctuation">.</span>stringValue</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">' not found – </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">context<span class="token punctuation">.</span>debugDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token class-name">DecodingError</span><span class="token punctuation">.</span><span class="token function">typeMismatch</span><span class="token punctuation">(</span><span class="token omit keyword">_</span><span class="token punctuation">,</span> <span class="token keyword">let</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to decode </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">file</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> from bundle due to type mismatch – </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">context<span class="token punctuation">.</span>debugDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token class-name">DecodingError</span><span class="token punctuation">.</span><span class="token function">valueNotFound</span><span class="token punctuation">(</span><span class="token keyword">let</span> type<span class="token punctuation">,</span> <span class="token keyword">let</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to decode </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">file</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> from bundle due to missing </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">type</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> value – </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">context<span class="token punctuation">.</span>debugDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token class-name">DecodingError</span><span class="token punctuation">.</span><span class="token function">dataCorrupted</span><span class="token punctuation">(</span><span class="token omit keyword">_</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to decode </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">file</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> from bundle because it appears to be invalid JSON"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
            <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to decode </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">file</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> from bundle: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>To use the extension, you need some sort of codable struct, such as this one:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">User</span><span class="token punctuation">:</span> <span class="token class-name">Codable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span></code></pre>
<p>You also need some sort of JSON in your app bundle. For example, a file called data.json containing contents like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">"name"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span>
<span class="token punctuation">}</span></code></pre>
<p>And now you can load your JSON into your struct in just a single line of code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"data.json"</span></span><span class="token punctuation">)</span></code></pre>
<p>The extension is capable of loading any kind of decodable data – your structs, arrays of your structs, and so on. Even better, you can use it to make properties in your types immutable and available as soon as your types are created, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> menuItems <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">MenuItem</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"menu.json"</span></span><span class="token punctuation">)</span>
    <span class="token comment">// the rest of your code…</span>
<span class="token punctuation">}</span></code></pre>
<p>Now, let me briefly explain what the code actually does.</p>
<p>First, it creates an extension on <code>Bundle</code> to add a <code>decode()</code> method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">decode</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">Decodable</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> type<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">.</span><span class="token keyword">Type</span><span class="token punctuation">,</span> from file<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> dateDecodingStrategy<span class="token punctuation">:</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">.</span><span class="token class-name">DateDecodingStrategy</span> <span class="token operator">=</span> <span class="token punctuation">.</span>deferredToDate<span class="token punctuation">,</span> keyDecodingStrategy<span class="token punctuation">:</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">.</span><span class="token class-name">KeyDecodingStrategy</span> <span class="token operator">=</span> <span class="token punctuation">.</span>useDefaultKeys<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">T</span> <span class="token punctuation">{</span></code></pre>
<p>As you can see, that method is generic over any kind of <code>Decodable</code> data type, and takes two required parameters: what you want to decode and the name of the JSON file in your bundle. There are two more parameters that have sensible default values, but allow you to customize dates and keys if you need to.</p>
<p>Next it attempts to find the path to the JSON in the app bundle, and load it into a <code>Data</code> instance. If either of those fail, the code uses <code>fatalError()</code> to force a crash in your app, which might seem bad but remember: this is a JSON file that you made by hand and added directly into your app bundle –&nbsp;if you forgot the JSON or it couldn’t be loaded, that’s a fundamental logic failure on your behalf and should be corrected.</p>
<p>Once the file is loaded the code creates a <code>JSONDecoder</code> and attempts to decode the file’s contents to the type you asked for. It then has a series of <code>catch</code> blocks to handle all possible errors, each of which trigger a crash telling you what was wrong.</p>
<p>Again, triggering a crash is perfectly fine here: this is all static, hard-coded JSON you have added directly to your app, so if it somehow changes format by surprise then your program shouldn’t run. In fact, I usually add tests that specifically attempt to load all the JSON I include in my app bundles, to make sure they don’t change by accident.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/system/how-to-find-the-path-to-a-file-in-your-bundle">How to find the path to a file in your bundle</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/example-code/strings/how-to-load-a-string-from-a-file-in-your-bundle">How to load a string from a file in your bundle</a></li></ul>
-->

:::

---

<TagLinks />