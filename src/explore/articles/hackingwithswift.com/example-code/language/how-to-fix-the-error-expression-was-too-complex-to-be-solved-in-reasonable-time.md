---
lang: ko-KR
title: "How to fix the error “Expression was too complex to be solved in reasonable time”"
description: "Article(s) > How to fix the error “Expression was too complex to be solved in reasonable time”"
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
      content: "Article(s) > How to fix the error “Expression was too complex to be solved in reasonable time”"
    - property: og:description
      content: "How to fix the error “Expression was too complex to be solved in reasonable time”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-fix-the-error-expression-was-too-complex-to-be-solved-in-reasonable-time.html
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
  "title": "How to fix the error “Expression was too complex to be solved in reasonable time” | Language - free Swift example code",
  "desc": "How to fix the error “Expression was too complex to be solved in reasonable time”",
  "link": "https://hackingwithswift.com/example-code/language/how-to-fix-the-error-expression-was-too-complex-to-be-solved-in-reasonable-time",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift’s use of type inference makes our code shorter and easier to read, but it also chews up a lot of CPU time. Sometimes a value could be one of several types, and if it gets used with another things that could be one of several types then the amount of work Swift has to do multiplies. If Swift encounters something with so many possibilities that it simply can’t figure it out after about 15 seconds, it throws an error instead: “Expression was too complex to be solved in reasonable time; consider breaking up the expression into distinct sub-expressions.”</p>
<p>This is something the Swift team are working to improve with every new version of Swift, and there’s no real fixed cut-off for when the compiler will throw this error. Fortunately, this error message tells you exactly what you need to do to fix the problem: break up the expression into multiple subexpressions. </p>
<p>For example, this kind of code takes almost 2 seconds to compile on a modern Mac:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">.</span>compactMap <span class="token punctuation">{</span> <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">+</span><span class="token punctuation">)</span></code></pre>
<p>On older Macs Swift would really struggle, so you’d be wise to break it up into multiple subexpressions like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> stringNumbers <span class="token operator">=</span> numbers<span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> intNumbers <span class="token operator">=</span> stringNumbers<span class="token punctuation">.</span>flatMap <span class="token punctuation">{</span> <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> intNumbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">+</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type">How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”</a></li><li><a href="/example-code/language/how-to-use-typealias-to-make-it-easier-to-use-complex-types">How to use typealias to make it easier to use complex types</a></li><li><a href="/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/quick-start/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency">How to fix the error “async call in a function that does not support concurrency”</a></li><li><a href="/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile">How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile”</a></li></ul>
-->

:::

---

<TagLinks />