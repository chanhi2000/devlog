---
lang: ko-KR
title: "How to check whether a module is available using canImport()"
description: "Article(s) > How to check whether a module is available using canImport()"
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
      content: "Article(s) > How to check whether a module is available using canImport()"
    - property: og:description
      content: "How to check whether a module is available using canImport()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-check-whether-a-module-is-available-using-canimport.html
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
  "title": "How to check whether a module is available using canImport() | Language - free Swift example code",
  "desc": "How to check whether a module is available using canImport()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-check-whether-a-module-is-available-using-canimport",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Writing multi-platform code has its own challenges, but if you use the <code>canImport()</code> compiler test then one big challenge is solved for you: you can write one chunk code to run if a specific module is available, and another chunk otherwise.</p>
<p>For example, this code will check for UIKit, AppKit, and all other possibilities so that you can pick whichever color type is best for the current platform:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token directive property"><span class="token directive-name">#if</span> canImport<span class="token punctuation">(</span>UIKit<span class="token punctuation">)</span></span>
<span class="token comment">// iOS, tvOS, and watchOS – use UIColor</span>
<span class="token directive property"><span class="token directive-name">#elseif</span> canImport<span class="token punctuation">(</span>AppKit<span class="token punctuation">)</span></span>
<span class="token comment">// macOS – use NSColor</span>
<span class="token directive property"><span class="token directive-name">#else</span></span>
<span class="token comment">// all other platforms – use a custom color object</span>
<span class="token directive property"><span class="token directive-name">#endif</span></span></code></pre>
<p>Before <code>canImport()</code> was available we need to use <code>#if os(macOS)</code> instead, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token directive property"><span class="token directive-name">#if</span> os<span class="token punctuation">(</span>iOS<span class="token punctuation">)</span> <span class="token operator">||</span> os<span class="token punctuation">(</span>tvOS<span class="token punctuation">)</span> <span class="token operator">||</span> os<span class="token punctuation">(</span>watchOS<span class="token punctuation">)</span></span>
<span class="token comment">// use UIColor</span>
<span class="token directive property"><span class="token directive-name">#else</span></span>
<span class="token comment">// use NSColor</span>
<span class="token directive property"><span class="token directive-name">#endif</span></span></code></pre>
<p>Using <code>canImport()</code> is an improvement because it lets you focus on what <em>functionality</em> you want rather than what operating system. So, if UIKit became available on macOS tomorrow you wouldn’t need to change your code to use it.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-whole-module-optimization">What is whole module optimization?</a></li><li><a href="/example-code/language/how-to-use-available-to-check-for-api-availability">How to use #available to check for API availability</a></li><li><a href="/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a></li><li><a href="/example-code/system/how-to-check-whether-your-other-apps-are-installed">How to check whether your other apps are installed</a></li><li><a href="/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range">How to check whether a date is inside a date range</a></li></ul>
-->

:::

---

<TagLinks />