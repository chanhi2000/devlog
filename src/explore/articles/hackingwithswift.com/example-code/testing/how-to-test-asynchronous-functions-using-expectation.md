---
lang: ko-KR
title: "How to test asynchronous functions using expectation()"
description: "Article(s) > How to test asynchronous functions using expectation()"
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
      content: "Article(s) > How to test asynchronous functions using expectation()"
    - property: og:description
      content: "How to test asynchronous functions using expectation()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-test-asynchronous-functions-using-expectation.html
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
  "title": "How to test asynchronous functions using expectation() | Testing - free Swift example code",
  "desc": "How to test asynchronous functions using expectation()",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-test-asynchronous-functions-using-expectation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p><code>XCTestCase</code> has the built-in ability to work with asynchronous code using a system of expectations. First, you create one of more instances of <code>XCTestExpectation</code> using the <code>expectation()</code> method, then you run your asynchronous code, and finally you call <code>waitForExpectations()</code> so the test doesn’t end prematurely. </p>
<p>When your asynchronous code completes you call <code>fulfill()</code> on it to mark it as complete, and you can then call some variant of <code>XCTAssert()</code> to check whether the test succeeded or failed.</p>
<p>As an example, I have a <code>FeedParser</code> struct that loads stories from disk and parses them ready for display. It takes a few milliseconds to run, so to avoid freezing my app it has an asynchronous method called <code>loadStories()</code> that calls a completion handler when the stories are ready to be used. Using <code>XCTestCase</code> expectations I would write a test like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">testStoryLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> parser <span class="token operator">=</span> <span class="token class-name">FeedParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// create the expectation</span>
    <span class="token keyword">let</span> exp <span class="token operator">=</span> <span class="token function">expectation</span><span class="token punctuation">(</span>description<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Loading stories"</span></span><span class="token punctuation">)</span>

    <span class="token comment">// call my asynchronous method</span>
    parser<span class="token punctuation">.</span>loadStories <span class="token punctuation">{</span>
        <span class="token comment">// when it finishes, mark my expectation as being fulfilled</span>
        exp<span class="token punctuation">.</span><span class="token function">fulfill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// wait three seconds for all outstanding expectations to be fulfilled</span>
    <span class="token function">waitForExpectations</span><span class="token punctuation">(</span>timeout<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token comment">// our expectation has been fulfilled, so we can check the result is correct</span>
    <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>parser<span class="token punctuation">.</span>stories<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"We should have loaded exactly 20 stories."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>If my asynchronous code does not complete in the allotted time of three seconds, the test is considered an immediate failure.</p>
<p><code>XCTestExpectation</code> has two properties you might want to explore further. The first is <code>isInverted</code>: if you set that to true then the test will be considered a failure if <code>fulfill()</code> gets called before the time out, so for example you might want the AI in your game to wait at least two seconds before making its move so the player can see it’s definitely thinking. </p>
<p>The second is <code>expectedFulfillmentCount</code>: if you set this to 5 for example, it means <code>fulfill()</code> must be called five times before the time out is reached, which allows you to implement more advanced testing logic.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/what-is-an-asynchronous-function">What is an asynchronous function?</a></li><li><a href="/quick-start/swiftui/how-to-run-an-asynchronous-task-when-a-view-is-shown">How to run an asynchronous task when a view is shown</a></li><li><a href="/example-code/testing/how-to-test-throwing-functions">How to test throwing functions</a></li><li><a href="/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock()</a></li><li><a href="/example-code/language/how-to-pass-the-fizz-buzz-test">How to pass the Fizz Buzz test</a></li></ul>
-->

:::

---

<TagLinks />