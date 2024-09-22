---
lang: ko-KR
title: "How to check for valid method input using the guard keyword"
description: "Article(s) > How to check for valid method input using the guard keyword"
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
      content: "Article(s) > How to check for valid method input using the guard keyword"
    - property: og:description
      content: "How to check for valid method input using the guard keyword"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword.html
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
  "title": "How to check for valid method input using the guard keyword | Language - free Swift example code",
  "desc": "How to check for valid method input using the guard keyword",
  "link": "https://hackingwithswift.com/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>guard</code> keyword was introduced in Swift to signal early returns, which is a coding technique that effectively means "make sure all these things are set up before I start doing the real work in my function, others bail out."</p>
<p>For example, if you want to ensure a <code>submit()</code> is only ever run if an existing <code>name</code> property has a value, you would do this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> name <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token function">doImportantWork</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>This might seem like a job for a regular <code>if</code> statement, and to be fair that's correct – the two are very similar. The advantage with <code>guard</code>, however, is that it makes your intention clear: these values need to be set up correctly before continuing.</p>
<p>The <code>guard</code> keyword is also helpful because it can be used to check and unwrap optionals that remain unwrapped until the end of the method. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">betterSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> unwrappedName <span class="token operator">=</span> name <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token function">doImportantWork</span><span class="token punctuation">(</span>unwrappedName<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>So, if <code>name</code> is <code>nil</code> the method will return; otherwise, it will be safely unwrapped into <code>unwrappedName</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a></li><li><a href="/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput">How to create custom text input using UIKeyInput</a></li><li><a href="/example-code/language/how-to-use-the-rethrows-keyword">How to use the rethrows keyword</a></li><li><a href="/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”</a></li><li><a href="/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword">How to delay execution of code using the defer keyword</a></li></ul>
-->

:::

---

<TagLinks />