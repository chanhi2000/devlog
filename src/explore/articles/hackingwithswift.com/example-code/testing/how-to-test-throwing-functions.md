---
lang: ko-KR
title: "How to test throwing functions"
description: "Article(s) > How to test throwing functions"
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
      content: "Article(s) > How to test throwing functions"
    - property: og:description
      content: "How to test throwing functions"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-test-throwing-functions.html
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
  "title": "How to test throwing functions | Testing - free Swift example code",
  "desc": "How to test throwing functions",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-test-throwing-functions",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>One of the many brilliant features of Swift’s error handling system is its ability to throw errors during tests and have them considered as failures. That is, if you mark your test using <code>throws</code> you run any throwing code inside that test and if it throws an error the test will be marked as a failure.</p>
<p>For example, if I have an <code>ImageGenerator</code> struct that has a throwing method called <code>generateImages()</code>, I could test it out using code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">testFailingExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token class-name">ImageGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">try</span> generator<span class="token punctuation">.</span><span class="token function">generateImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token class-name">XCTAssertTrue</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Image generation should complete successfully."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That creates an instance of the struct, attempts to run its <code>generateImages()</code> method, then asserts that the result of the method was true. If <code>generateImages()</code> throws an error it won’t be caught inside the test –&nbsp;there’s no <code>do</code>/<code>catch</code> blocks in there –&nbsp;so instead it will bubble up to the <code>XCTestCase</code>, which will automatically mark the test as being failed.</p>
<p>Although this approach works well for individual throwing methods like you see above, I don’t think you should use it for more complex tests because you can mask failures too easily. If you have three throwing function calls inside a single test, it’s a better idea to wrap them individually in <code>do</code>/<code>catch</code> blocks so you can deal with the error inline by calling <code>XCTFail()</code> at the point of failure.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-call-async-throwing-functions">How to call async throwing functions</a></li><li><a href="/example-code/testing/how-to-test-asynchronous-functions-using-expectation">How to test asynchronous functions using expectation()</a></li><li><a href="/example-code/language/what-is-a-throwing-function">What is a throwing function?</a></li><li><a href="/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock()</a></li><li><a href="/example-code/language/how-to-pass-the-fizz-buzz-test">How to pass the Fizz Buzz test</a></li></ul>
-->

:::

---

<TagLinks />