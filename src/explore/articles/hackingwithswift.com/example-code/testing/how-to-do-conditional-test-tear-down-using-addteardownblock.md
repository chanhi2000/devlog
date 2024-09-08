---
lang: ko-KR
title: "How to do conditional test tear down using addTeardownBlock()"
description: "Article(s) > How to do conditional test tear down using addTeardownBlock()"
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
      content: "Article(s) > How to do conditional test tear down using addTeardownBlock()"
    - property: og:description
      content: "How to do conditional test tear down using addTeardownBlock()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock.html
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
  "title": "How to do conditional test tear down using addTeardownBlock() | Testing - free Swift example code",
  "desc": "How to do conditional test tear down using addTeardownBlock()",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>All <code>XCTestCase</code> subclasses have access to <code>setUp()</code> and <code>tearDown()</code> instance methods, plus <code>setUp()</code> and <code>tearDown()</code> class methods for one-time setup and tear down. But sometimes you need to add <em>conditional</em> tear down code: if your test creates a resource that must be destroyed, you can add that as an additional tear down step using the <code>addTeardownBlock()</code> method.</p>
<p>As an example, consider this test method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">testDatabaseQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> database <span class="token operator">=</span> <span class="token function">connectToDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> results <span class="token operator">=</span> database<span class="token punctuation">.</span><span class="token function">fetchExampleData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>results<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"We should receive exactly one result."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That connects to a database, runs an example query, and checks the result. However, behind the scenes our database needs to be reset every time a connection is finished. If <em>all</em> our tests relied on the database being created then we could add the cleanup code either to the <code>tearDown()</code> instance method or to the <code>tearDown()</code> class method, but if it’s only used <em>sometimes</em> then that isn’t an option.</p>
<p>Fortunately, the <code>addTeardownBlock()</code> is designed to fix this: you can pass in any code you want to run when your test is being torn down, and it will be run after the current test finishes, but before the <code>tearDown()</code> instance method.</p>
<p>In the case of the <code>connectToDatabase()</code> method that needs clean up, we <em>could</em> write that clean up code directly into each test, but that just duplicates code and is likely to cause problems. So, instead we’re going to add the clean up right inside the connection code, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">connectToDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Database</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> database <span class="token operator">=</span> <span class="token class-name">Database</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    database<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    addTeardownBlock <span class="token punctuation">{</span>
        database<span class="token punctuation">.</span><span class="token function">cleanUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> database
<span class="token punctuation">}</span></code></pre>
<p>That <code>database.cleanUp()</code> code will be called only when the surrounding test is complete, so it acts a bit like <code>defer</code> except the scope is the current test.</p>
<p>It’s important to get the order of set up and tear down correct, because various things happen at different times. If you have two tests in your <code>XCTestCase</code> here’s how it would look:</p>
<ol>
<li>The <code>setUp()</code> class method is called.</li>
<li>The <code>setUp()</code> instance method is called.</li>
<li>One test is run.</li>
<li>Any tear down blocks that were registered are run.</li>
<li>The <code>tearDown()</code> instance method is called.</li>
<li>The <code>setUp()</code> instance method is called again.</li>
<li>The second test is run.</li>
<li>Any tear down blocks that were registered are run.</li>
<li>The <code>tearDown()</code> instance method is called again.</li>
<li>The <code>tearDown()</code> class method is called.</li>
</ol>
<p>You won’t need to use tear down blocks often, but they are a useful tool to have.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up</a></li><li><a href="/quick-start/swiftui/how-to-scale-a-view-up-or-down">How to scale a view up or down</a></li><li><a href="/example-code/testing/how-to-test-asynchronous-functions-using-expectation">How to test asynchronous functions using expectation()</a></li><li><a href="/example-code/language/how-to-use-conditional-conformance-in-swift">How to use conditional conformance in Swift</a></li><li><a href="/example-code/testing/how-to-test-throwing-functions">How to test throwing functions</a></li></ul>
-->

:::

---

<TagLinks />