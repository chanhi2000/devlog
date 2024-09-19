---
lang: ko-KR
title: "What does the open keyword do?"
description: "Article(s) > What does the open keyword do?"
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
      content: "Article(s) > What does the open keyword do?"
    - property: og:description
      content: "What does the open keyword do?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-does-the-open-keyword-do.html
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
  "title": "What does the open keyword do? | Language - free Swift example code",
  "desc": "What does the open keyword do?",
  "link": "https://hackingwithswift.com/example-code/language/what-does-the-open-keyword-do",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>When working with code from another module –&nbsp;e.g., UIKit or a module you wrote separate from your main app –&nbsp;Swift differentiates between public accessibility and public overridability. That is, someone can be public for folks to use, but not public for them to extend.</p>
<p>Here’s an example to demonstrate the difference:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">open</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">open</span> <span class="token keyword">func</span> <span class="token function-definition function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">func</span> <span class="token function-definition function">playGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If that were defined in its own module, any other code accessing it would be able to inherit from the <code>User</code> class because it’s marked <code>open</code>. Inside the child class, they could override <code>login()</code> because it’s also marked <code>open</code>, but they could <em>not</em> override <code>playGame()</code> because it’s marked only as <code>public</code> –&nbsp;it can be <em>called</em>, but not <em>changed</em>. If you remove <code>open</code> from the whole <code>User</code> class it can be <em>used</em> but not <em>subclassed</em>.</p>
<p>The <code>open</code> keyword is an effective way of stopping other developers from accidentally overriding functionality that’s critical to the way your app works. If you use it selectively, subclassers can add their own functionality or perhaps replace a few non-critical components, without altering the fundamental behavior of your class.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-use-the-rethrows-keyword">How to use the rethrows keyword</a></li><li><a href="/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword</a></li><li><a href="/example-code/system/how-to-make-your-app-open-with-a-custom-url-scheme">How to make your app open with a custom URL scheme</a></li><li><a href="/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword">How to delay execution of code using the defer keyword</a></li><li><a href="/quick-start/swiftui/how-to-open-a-new-window">How to open a new window</a></li></ul>
-->

:::

---

<TagLinks />