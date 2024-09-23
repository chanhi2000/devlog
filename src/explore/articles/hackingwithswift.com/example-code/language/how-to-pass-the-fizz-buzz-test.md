---
lang: ko-KR
title: "How to pass the Fizz Buzz test"
description: "Article(s) > How to pass the Fizz Buzz test"
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
      content: "Article(s) > How to pass the Fizz Buzz test"
    - property: og:description
      content: "How to pass the Fizz Buzz test"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-pass-the-fizz-buzz-test.html
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
  "title": "How to pass the Fizz Buzz test | Language - free Swift example code",
  "desc": "How to pass the Fizz Buzz test",
  "link": "https://hackingwithswift.com/example-code/language/how-to-pass-the-fizz-buzz-test",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>The Fizz Buzz test is a simple coding test used in some coding interviews. It’s not designed to be hard, in fact quite the opposite –&nbsp;it’s designed to be easy enough that most folks can solve it without feeling too pressured.</p>
<p>To pass the test you must write a function that accepts an integer and returns a string. Which string to return depends on the input number:</p>
<ul>
<li>If the integer is evenly divisible by three, it should return “Fizz”.</li>
<li>If the integer is evenly divisible by five, it should return “Buzz”. </li>
<li>If the integer is evenly divisible by three <em>and</em> five, it should return “Fizz Buzz”. </li>
<li>Otherwise it should return the string form of the input number.</li>
</ul>
<p>There are lots of ways this can be solved in Swift, but I think one of the most interesting is to use tuples like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">fizzbuzz</span><span class="token punctuation">(</span>number<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>number <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> number <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"Fizz"</span></span>
    <span class="token keyword">case</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"Buzz"</span></span>
    <span class="token keyword">case</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"FizzBuzz"</span></span>
    <span class="token keyword">case</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">fizzbuzz</span><span class="token punctuation">(</span>number<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>This approach breaks down a large input space – any number – into simple combinations of true and false, and we then use tuple pattern matching in the case statements to select the correct output.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-pass-data-between-two-view-controllers">How to pass data between two view controllers</a></li><li><a href="/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock()</a></li><li><a href="/example-code/testing/how-to-test-throwing-functions">How to test throwing functions</a></li><li><a href="/example-code/testing/how-to-test-asynchronous-functions-using-expectation">How to test asynchronous functions using expectation()</a></li><li><a href="/example-code/strings/how-to-test-localization-by-setting-a-debug-locale-and-double-length-pseudolanguage">How to test localization by setting a debug locale and double length pseudolanguage</a></li></ul>
-->

:::

---

<TagLinks />