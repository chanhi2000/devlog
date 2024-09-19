---
lang: ko-KR
title: "What is a protocol?"
description: "Article(s) > What is a protocol?"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is a protocol?"
    - property: og:description
      content: "What is a protocol?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-protocol.html
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
  "title": "What is a protocol? | Language - free Swift example code",
  "desc": "What is a protocol?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-protocol",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>A protocol is a collection of methods that describe a specific set of similar actions or behaviors. I realize that probably didn't help much, so I'll try to rephrase in more detail: how many rows should a table view have? How many sections? What should the section titles be? Can the user move rows? If so, what should happen when they do?</p>
<p>All those questions concern a similar thing: data going into a <code>UITableView</code>. As a result, they all go into a single protocol, called <code>UITableViewDataSource</code>. Some of the behaviors inside that protocol are optional. For example, <code>canEditRowAt</code> is optional and defaults to true if you don't provide a value yourself.</p>
<p>When you work in Swift you will frequently have to make your class conform to a protocol. This is done by adding the protocol name to your class definition, then filling in any required methods, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">UITableViewDataSource</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> numberOfRowsInSection section<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
        <span class="token comment">// request 10 rows</span>
        <span class="token keyword">return</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> cellForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UITableViewCell</span> <span class="token punctuation">{</span>
        <span class="token comment">// return a dummy table view cell; your own code should use prototype cells or similar</span>
        <span class="token keyword">return</span> <span class="token class-name">UITableViewCell</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>When you do that – when you promise Swift that your class conforms to a protocol&nbsp;– you can be darn sure it checks to make sure you're right. And that means it will refuse to build your code if you haven't added support for all the required methods, which is a helpful security measure.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-protocol-oriented-programming">What is protocol-oriented programming?</a></li><li><a href="/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type?</a></li><li><a href="/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/example-code/language/what-are-protocol-extensions">What are protocol extensions?</a></li><li><a href="/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a></li></ul>
-->

---

<TagLinks />