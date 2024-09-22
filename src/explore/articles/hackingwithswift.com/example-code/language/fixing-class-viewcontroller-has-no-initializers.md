---
lang: ko-KR
title: "Fixing ”Class ViewController has no initializers”"
description: "Article(s) > Fixing ”Class ViewController has no initializers”"
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
      content: "Article(s) > Fixing ”Class ViewController has no initializers”"
    - property: og:description
      content: "Fixing ”Class ViewController has no initializers”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/fixing-class-viewcontroller-has-no-initializers.html
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
  "title": "Fixing ”Class ViewController has no initializers” | Language - free Swift example code",
  "desc": "Fixing ”Class ViewController has no initializers”",
  "link": "https://hackingwithswift.com/example-code/language/fixing-class-viewcontroller-has-no-initializers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<VidStack src="youtube/o_qBp32KpOI" />

<!-- TODO: 작성 -->

<!-- 
<p>This is a common error, and one you can fix in just a few seconds. Swift has very strict rules about property initialization: if you give a class any properties without a default value, you <em>must</em> create an initializer that sets those default values.</p>
<p>There are two ways to solve this problem: either provide a default value for your property when you define the property, or create a custom <code>init()</code> method to set the value.</p>
<p>First, identify the problem property. Look for things like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> username<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span></code></pre>
<p>That defines a new property but doesn't give it an initial value, so Swift will refuse to build the app.</p>
<p>The simple solution is just to give your property a sensible initial value when it's defined, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> username<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span>
<span class="token punctuation">}</span></code></pre>
<p>The slightly more complicated solution is to create a custom initializer that gives properties default values in one place, then calls <code>super.init()</code>. When working with <code>UIViewController</code> and storyboards, the initializer you will want to override should look like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">required</span> <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>coder aDecoder<span class="token punctuation">:</span> <span class="token class-name">NSCoder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>coder<span class="token punctuation">:</span> aDecoder<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Remember: you must initialize all your own properties before calling <code>super.init()</code> or any other methods.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource"</a></li><li><a href="/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier"</a></li><li><a href="/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round"</a></li></ul>
-->

:::

---

<TagLinks />