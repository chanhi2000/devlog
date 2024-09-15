---
lang: ko-KR
title: "How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver"
description: "Article(s) > How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver"
    - property: og:description
      content: "How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-save-and-load-objects-with-nskeyedarchiver-and-nskeyedunarchiver.html
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
  "title": "How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver | System - free Swift example code",
  "desc": "How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-save-and-load-objects-with-nskeyedarchiver-and-nskeyedunarchiver",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>You can write any kind of object to disk as long as it supports the <code>NSCoding</code> protocol&nbsp;– which includes strings, arrays, dictionaries, <code>UIView</code>, <code>UIColor</code> and more right out of the box. To write to disk, use this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> randomFilename <span class="token operator">=</span> <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>uuidString
<span class="token keyword">let</span> fullPath <span class="token operator">=</span> <span class="token function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendingPathComponent</span><span class="token punctuation">(</span>randomFilename<span class="token punctuation">)</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">NSKeyedArchiver</span><span class="token punctuation">.</span><span class="token function">archivedData</span><span class="token punctuation">(</span>withRootObject<span class="token punctuation">:</span> somethingToSave<span class="token punctuation">,</span> requiringSecureCoding<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span> data<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> fullPath<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Couldn't write file"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That call to <code>getDocumentsDirectory()</code> is a small helper function I frequently use to write files to disk:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token constant">URL</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> paths <span class="token operator">=</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">urls</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>documentDirectory<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>userDomainMask<span class="token punctuation">)</span>
    <span class="token keyword">return</span> paths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre>
<p>When you want to read your object back you need to use <code>unarchiveObject(withFile:)</code>, but be warned: the file might not exist or might not be unarchivable, so this method returns an optional value that you need to unwrap carefully.</p>
<p>For example, if you want to unarchive an array of strings, you would use this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> loadedStrings <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">NSKeyedUnarchiver</span><span class="token punctuation">.</span><span class="token function">unarchiveTopLevelObjectWithData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        savedArray <span class="token operator">=</span> loadedStrings
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Couldn't read file."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />