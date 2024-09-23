---
lang: ko-KR
title: "How to group arrays using dictionaries"
description: "Article(s) > How to group arrays using dictionaries"
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
      content: "Article(s) > How to group arrays using dictionaries"
    - property: og:description
      content: "How to group arrays using dictionaries"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-group-arrays-using-dictionaries.html
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
  "title": "How to group arrays using dictionaries | Language - free Swift example code",
  "desc": "How to group arrays using dictionaries",
  "link": "https://hackingwithswift.com/example-code/language/how-to-group-arrays-using-dictionaries",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you have an array of items and want to group them according to some criteria, Swift has a special dictionary initializer just for you.</p>
<p>Here’s an example sequence we can work with:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> singers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Ed Sheeran"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Ariana Grande"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Adele Adkins"</span></span><span class="token punctuation">]</span></code></pre>
<p>We can now create a dictionary that groups those singers together by the length of their names:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> groupedByLength <span class="token operator">=</span> <span class="token class-name">Dictionary</span><span class="token punctuation">(</span>grouping<span class="token punctuation">:</span> singers<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span>count <span class="token punctuation">}</span></code></pre>
<p>That will put Taylor and Adele into an array under the “12” key, Ariana under 13, and Ed under 10.</p>
<p>Alternatively, we could group them by the first letters of each of their names:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> groupedByFirst <span class="token operator">=</span> <span class="token class-name">Dictionary</span><span class="token punctuation">(</span>grouping<span class="token punctuation">:</span> singers<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span>first<span class="token operator">!</span> <span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-create-a-task-group-and-add-tasks-to-it">How to create a task group and add tasks to it</a></li><li><a href="/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group</a></li><li><a href="/quick-start/concurrency/how-to-cancel-a-task-group">How to cancel a task group</a></li><li><a href="/example-code/system/how-to-group-user-notifications-using-threadidentifier-and-summaryargument">How to group user notifications using threadIdentifier and summaryArgument</a></li><li><a href="/quick-start/swiftui/how-to-group-views-together">How to group views together</a></li></ul>
-->

:::

---

<TagLinks />