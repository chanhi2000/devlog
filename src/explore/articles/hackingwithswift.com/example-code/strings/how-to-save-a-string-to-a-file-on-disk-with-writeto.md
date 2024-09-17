---
lang: ko-KR
title: "How to save a string to a file on disk with write(to:)"
description: "Article(s) > How to save a string to a file on disk with write(to:)"
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
      content: "Article(s) > How to save a string to a file on disk with write(to:)"
    - property: og:description
      content: "How to save a string to a file on disk with write(to:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto.html
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
  "title": "How to save a string to a file on disk with write(to:) | Strings - free Swift example code",
  "desc": "How to save a string to a file on disk with write(to:)",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>All strings have a <code>write(to:)</code> method that lets you save the contents of the string to disk. You need to provide a filename to write to, plus two more parameters: whether the write should be atomic, and what string encoding to use. The second parameter should nearly always be <code>true</code> because it avoids concurrency problems. The third parameter should nearly always be <code>String.Encoding.utf8</code>, which is pretty much the standard for reading and writing text.</p>
<p>Be warned: writing a string to disk can throw an exception, so you need to catch any errors and warn the user.</p>
<p>Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Super long string here"</span></span>
<span class="token keyword">let</span> filename <span class="token operator">=</span> <span class="token function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendingPathComponent</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"output.txt"</span></span><span class="token punctuation">)</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> str<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> filename<span class="token punctuation">,</span> atomically<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> encoding<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token class-name">Encoding</span><span class="token punctuation">.</span>utf8<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token comment">// failed to write file – bad permissions, bad filename, missing permissions, or more likely it can't be converted to the encoding</span>
<span class="token punctuation">}</span></code></pre>
<p>That code uses a helper function called <code>getDocumentsDirectory()</code>, which finds the path to where you can save your app's files. Here it is:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token constant">URL</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> paths <span class="token operator">=</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">urls</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>documentDirectory<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>userDomainMask<span class="token punctuation">)</span>
    <span class="token keyword">return</span> paths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData()</a></li><li><a href="/example-code/strings/how-to-load-a-string-from-a-file-in-your-bundle">How to load a string from a file in your bundle</a></li><li><a href="/example-code/system/how-to-read-your-apps-version-from-your-infoplist-file">How to read your app’s version from your Info.plist file</a></li><li><a href="/example-code/system/how-to-find-the-path-to-a-file-in-your-bundle">How to find the path to a file in your bundle</a></li><li><a href="/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value</a></li></ul>
-->

:::

---

<TagLinks />