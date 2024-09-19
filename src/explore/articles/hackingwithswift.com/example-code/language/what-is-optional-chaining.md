---
lang: ko-KR
title: "What is optional chaining?"
description: "Article(s) > What is optional chaining?"
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
      content: "Article(s) > What is optional chaining?"
    - property: og:description
      content: "What is optional chaining?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-optional-chaining.html
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
  "title": "What is optional chaining? | Language - free Swift example code",
  "desc": "What is optional chaining?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-optional-chaining",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Optional chaining is a Swift feature that allows execution of a statement to stop and return nil at any point. For example, all views have an optional <code>superview</code> property that stores whichever <code>UIView</code> contains it, all <code>UIView</code> has an optional <code>gestureRecognizer</code> array that stores the gesture recognizers it has, and all arrays have an optional <code>first</code> property that returns the first item.</p>
<p>Optional chaining allows us to put those three optionals together like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> firstParentRecognizer <span class="token operator">=</span> view<span class="token punctuation">.</span>superview<span class="token operator">?</span><span class="token punctuation">.</span>gestureRecognizers<span class="token operator">?</span><span class="token punctuation">.</span>first</code></pre>
<p>So, <code>superview</code> is optional, <code>gestureRecognizers</code> is optional, and <code>first</code> is optional, but the end result –&nbsp;<code>firstParentRecognizer</code> will be a simple <code>UIGestureRecognizer?</code> rather than a triple optional. The optional chaining –&nbsp;the two question marks –&nbsp;mean that if <code>superview</code> is nil then <code>firstParentRecognizer</code> gets set to nil and the rest of the statement is ignored, and the same is true of <code>gestureRecognizers</code>.</p>
<p>Without optional chaining we’d need to use a pyramid of <code>if let</code> statements, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> superview <span class="token operator">=</span> view<span class="token punctuation">.</span>superview <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> recognizers <span class="token operator">=</span> superview<span class="token punctuation">.</span>gestureRecognizers <span class="token punctuation">{</span>
        <span class="token keyword">let</span> firstParentRecognizer <span class="token operator">=</span> recognizers<span class="token punctuation">.</span>first
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference?</a></li><li><a href="/example-code/language/how-to-use-flatmap-with-an-optional-value">How to use flatMap() with an optional value</a></li><li><a href="/example-code/language/what-is-an-optional-value-in-swift">What is an optional value in Swift?</a></li><li><a href="/example-code/language/how-to-make-optional-protocol-methods">How to make optional protocol methods</a></li><li><a href="/example-code/language/how-to-unwrap-an-optional-in-swift">How to unwrap an optional in Swift</a></li></ul>
-->

:::

---

<TagLinks />