---
lang: ko-KR
title: "How to do one-time setup for your tests"
description: "Article(s) > How to do one-time setup for your tests"
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
      content: "Article(s) > How to do one-time setup for your tests"
    - property: og:description
      content: "How to do one-time setup for your tests"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-do-one-time-setup-for-your-tests.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Testing - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/testing/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to do one-time setup for your tests | Testing - free Swift example code",
  "desc": "How to do one-time setup for your tests",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-do-one-time-setup-for-your-tests",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>When you create a default <code>XCTestCase</code> using Xcode you’ll get default <code>setUp()</code> and <code>tearDown()</code> methods like these:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Put setup code here. This method is called before the invocation of each test method in the class.</span>
<span class="token punctuation">}</span>

<span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Put teardown code here. This method is called after the invocation of each test method in the class.</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Those are called before and after every test inside your <code>XCTestCase</code> subclass, which allows you to reset your testing environment fully. However, sometimes you prefer to do some setup once and keep that state during all your tests, for example if you need to generate some test data that gets shared in all your tests.</p>
<p>As well as the regular <code>setUp()</code> and <code>tearDown()</code> instance methods, you can also define class methods with the same names, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">class</span> <span class="token keyword">func</span> <span class="token function-definition function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">override</span> <span class="token keyword">class</span> <span class="token keyword">func</span> <span class="token function-definition function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Unlike their instance method equivalents, these two class methods will be run only once each: <code>setUp()</code> before all your tests are run, and <code>tearDown()</code> after all your tests have completed.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap">How to check and unwrap optionals in tests using XCTUnwrap()</a></li><li><a href="/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect">How to synchronize animations from one view to another with matchedGeometryEffect()</a></li><li><a href="/example-code/system/how-to-decode-json-from-your-app-bundle-the-easy-way">How to decode JSON from your app bundle the easy way</a></li><li><a href="/quick-start/swiftui/building-a-menu-using-list">Building a menu using List</a></li><li><a href="/quick-start/swiftui/how-to-mask-one-view-with-another">How to mask one view with another</a></li></ul>
-->

:::

---

<TagLinks />