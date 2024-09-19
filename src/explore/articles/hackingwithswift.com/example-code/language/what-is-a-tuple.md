---
lang: ko-KR
title: "What is a tuple?"
description: "Article(s) > What is a tuple?"
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
      content: "Article(s) > What is a tuple?"
    - property: og:description
      content: "What is a tuple?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-tuple.html
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
  "title": "What is a tuple? | Language - free Swift example code",
  "desc": "What is a tuple?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-tuple",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p style="margin: 0; margin-bottom: 20px;"><a href="/about">Paul Hudson</a> &nbsp;&nbsp; <i class="fab fa-twitter" aria-hidden="true" style="color: #4099ff"></i> <a href="https://twitter.com/twostraws" target="_blank">@twostraws</a> &nbsp;&nbsp; <time itemprop="dateModified" datetime="2019-05-28T20:41:20+00:00">May 28th 2019</time><meta itemprop="datePublished" content="2019-05-28T20:41:20+00:00"></p>
<p>Tuples in Swift occupy the space between dictionaries and structures: they hold very specific types of data (like a struct) but can be created on the fly (like dictionaries). They are commonly used to return multiple values from a function call.</p>
<p>You can create a basic tuple like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">35</span><span class="token punctuation">)</span></code></pre>
<p>As you can see, it looks like an anonymous struct: you can read <code>person.name</code> and <code>person.age</code> just like you would with a struct. But, helpfully, we haven't had to define the struct ahead of time – this is something made to be thrown away. It also means you don't get to conform to protocols or write methods inside your tuples, but that's OK.</p>
<p>Tuples can be accessed using element names ("name" and "age" above), or using a position in the tuple, e.g. 0 and 1. You don't have to give your tuple elements names if you don't want to, but it's a good idea.</p>
<p>To give you a fully fledged tuple example, here's a function that splits a name like "Paul Hudson" in two, and returns a tuple containing the first name (Paul) and the last name (Hudson). Obviously this just a trivial example – it makes no attempt to cater for middle names, honorifics, or languages where family names come first!</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">split</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> lastName<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> split <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">components</span><span class="token punctuation">(</span>separatedBy<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">" "</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>split<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> split<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> parts <span class="token operator">=</span> <span class="token function">split</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Paul Hudson"</span></span><span class="token punctuation">)</span>
parts<span class="token punctuation">.</span><span class="token number">0</span>
parts<span class="token punctuation">.</span><span class="token number">1</span>
parts<span class="token punctuation">.</span>firstName
parts<span class="token punctuation">.</span>lastName</code></pre>
<p>As you can see, the return value from that function is <code>(firstName: String, lastName: String)</code>, which is a tuple with named elements. Those elements then get accessed using <code>split.0</code>, <code>split.1</code>, <code>split.firstName</code> and <code>split.lastName</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-destructuring">What is destructuring?</a></li><li><a href="/example-code/uicolor/how-to-read-the-red-green-blue-and-alpha-color-components-from-a-uicolor">How to read the red, green, blue, and alpha color components from a UIColor</a></li><li><a href="/example-code/language/how-to-pass-the-fizz-buzz-test">How to pass the Fizz Buzz test</a></li><li><a href="/example-code/language/what-are-the-changes-in-swift-22">What are the changes in Swift 2.2?</a></li><li><a href="/example-code/language/how-to-count-element-frequencies-in-an-array">How to count element frequencies in an array</a></li></ul>
-->

:::

---

<TagLinks />