---
lang: ko-KR
title: "How to write performance tests using measure()"
description: "Article(s) > How to write performance tests using measure()"
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
      content: "Article(s) > How to write performance tests using measure()"
    - property: og:description
      content: "How to write performance tests using measure()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-write-performance-tests-using-measure.html
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
  "title": "How to write performance tests using measure() | Testing - free Swift example code",
  "desc": "How to write performance tests using measure()",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-write-performance-tests-using-measure",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>Performance tests let you check how fast your code runs, but more importantly it lets you check how fast your code runs <em>over time</em> – you can spot performance changes as your code evolves.</p>
<p>Writing a performance test takes just two steps:</p>
<ol>
<li>Create a new method starting with the name “test” in your Xcode tests.</li>
<li>Using the <code>measure()</code> method inside that test, running any work you want.</li>
</ol>
<p>To try it out, look in the “Tests” group in your Xcode project, then open your tests file. In my test I’m going to try generating images using a fictional <code>ImageGenerator</code> struct that has a <code>generateImages()</code> method. I’m specifically going to be testing the <code>generateImages()</code> method, which means I’ll create a test instance of <code>ImageGenerator</code> <em>outside</em> the <code>measure()</code> method, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">testPerformanceExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token class-name">ImageGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    measure <span class="token punctuation">{</span>
        generator<span class="token punctuation">.</span><span class="token function">generateImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>When that test runs, Xcode will run the contents of <code>measure()</code> 10 times to get a spread of results.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/testing/how-to-set-baselines-for-your-performance-tests">How to set baselines for your performance tests</a></li><li><a href="/example-code/testing/how-to-do-one-time-setup-for-your-tests">How to do one-time setup for your tests</a></li><li><a href="/quick-start/concurrency/whats-the-performance-cost-of-calling-an-async-function">What’s the performance cost of calling an async function?</a></li><li><a href="/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap">How to check and unwrap optionals in tests using XCTUnwrap()</a></li><li><a href="/example-code/strings/how-to-measure-a-string-for-objective-c-code">How to measure a string for Objective-C code</a></li></ul>
-->

:::

---

<TagLinks />