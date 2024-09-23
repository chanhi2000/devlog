---
lang: ko-KR
title: "How to force a crash using fatalError()"
description: "Article(s) > How to force a crash using fatalError()"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to force a crash using fatalError()"
    - property: og:description
      content: "How to force a crash using fatalError()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-force-a-crash-using-fatalerror.html
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
  "title": "How to force a crash using fatalError() | Language - free Swift example code",
  "desc": "How to force a crash using fatalError()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-force-a-crash-using-fatalerror",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>Swift has a built-in function called <code>fatalError()</code>, which forces your application to crash. This might sound useful, but bear with me –&nbsp;this is an indispensable function for anyone serious about writing good Swift.</p>
<p>The <code>fatalError()</code> function has a special return type called <code>Never</code>, which Swift understands as meaning execution will never continue after this function has been called. As a result, you can use <code>fatalError()</code> in methods that return a value but you have nothing sensible to return.</p>
<p>For example, the <code>cellForRowAt</code> method must return a <code>UITableViewCell</code>, but what happens if you dequeue a reusable cell and try to conditionally typecast it to your custom cell type, only for that to fail? </p>
<p>Normally you might try to return an empty, unconfigured cell, but that doesn’t really make much sense –&nbsp;if you got a bad cell back you have a bug, and trying to limp along will just cause issues.</p>
<p>Fortunately, <code>fatalError()</code> can fix that: if your typecast fails you can call <code>fatalError()</code> with a message explaining what happened, and if the typecast fails your app will terminate.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> cellForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UITableViewCell</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> indexPath<span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">MyCustomCell</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to load a MyCustomCell from the table."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> cell
<span class="token punctuation">}</span></code></pre>
<p>Obviously you never want that code to get hit in production, but using <code>fatalError()</code> helps stop that from happening –&nbsp;you will now get a very obvious problem in development if things aren’t going well.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-force-your-program-to-crash-with-assert">How to force your program to crash with assert()</a></li><li><a href="/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture()</a></li><li><a href="/example-code/uikit/how-to-force-a-uiview-to-redraw-setneedsdisplay">How to force a UIView to redraw: setNeedsDisplay()</a></li><li><a href="/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer">How to force views to one side inside a stack using Spacer</a></li><li><a href="/example-code/language/when-is-it-safe-to-force-unwrap-optionals">When is it safe to force unwrap optionals?</a></li></ul>
-->

:::

---

<TagLinks />