---
lang: ko-KR
title: "How to create a custom OptionSet"
description: "Article(s) > How to create a custom OptionSet"
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
      content: "Article(s) > How to create a custom OptionSet"
    - property: og:description
      content: "How to create a custom OptionSet"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-a-custom-optionset.html
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
  "title": "How to create a custom OptionSet | Language - free Swift example code",
  "desc": "How to create a custom OptionSet",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-a-custom-optionset",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Option sets are similar to enums, but they are designed to work as a set so you can use more than one at a time. For example, when using the <code>range(of:)</code> method of a string, you can specify <code>.caseInsensitive</code> to have the search ignore case, you can specify <code>.backwards</code> to have the search start from the end of the string, or you can combine the two:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"The rain in Spain"</span></span>
<span class="token keyword">let</span> range <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"rain"</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>caseInsensitive<span class="token punctuation">,</span> <span class="token punctuation">.</span>backwards<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>
<p>That searches through the string backwards and ignoring case –&nbsp;we provided both options at the same time. This functionality looks like an enum, but it can also be treated as an array; Swift figures it out for you.</p>
<p>You can write your own by making a custom struct that conforms to the <code>OptionSet</code> protocol, and it doesn’t take much:</p>
<ol>
<li>Create a constant describing what the underlying value is –&nbsp;it’s normally an integer, but you need to be specific. </li>
<li>Make static instances of your struct for each option you want to represent.</li>
<li>Each of those should have a unique raw value, so its common to use bit-shifting to avoid mistakes.</li>
<li>Add any groups of those instances as new statics.</li>
</ol>
<p>To demonstrate this, let’s create a <code>UserRoles</code> struct that defines roles a user might have in a GitHub account: they can create things, destroy things, and get the status of things.</p>
<p>All three of those roles need unique raw values, so we’re going to use bit shifting – <code>1 &lt;&lt; 0</code>, <code>1 &lt;&lt; 1</code>, and so on – to make that clear.</p>
<p>Here’s how it looks in Swift:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">UserRoles</span><span class="token punctuation">:</span> <span class="token class-name">OptionSet</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> rawValue<span class="token punctuation">:</span> <span class="token class-name">Int</span>

    <span class="token keyword">static</span> <span class="token keyword">let</span> status <span class="token operator">=</span> <span class="token class-name">UserRoles</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">static</span> <span class="token keyword">let</span> create <span class="token operator">=</span> <span class="token class-name">UserRoles</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">static</span> <span class="token keyword">let</span> destroy <span class="token operator">=</span> <span class="token class-name">UserRoles</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">static</span> <span class="token keyword">let</span> all<span class="token punctuation">:</span> <span class="token class-name">UserRoles</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>status<span class="token punctuation">,</span> <span class="token punctuation">.</span>create<span class="token punctuation">,</span> <span class="token punctuation">.</span>destroy<span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre>
<p>You can now use any of those roles by themselves or in an array:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> roles1<span class="token punctuation">:</span> <span class="token class-name">UserRoles</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>create<span class="token punctuation">]</span>
<span class="token keyword">let</span> roles2<span class="token punctuation">:</span> <span class="token class-name">UserRoles</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>create<span class="token punctuation">,</span> <span class="token punctuation">.</span>destroy<span class="token punctuation">]</span>
<span class="token keyword">let</span> roles3<span class="token punctuation">:</span> <span class="token class-name">UserRoles</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>create<span class="token punctuation">,</span> <span class="token punctuation">.</span>destroy<span class="token punctuation">,</span> <span class="token punctuation">.</span>status<span class="token punctuation">]</span>
<span class="token keyword">let</span> roles4 <span class="token operator">=</span> <span class="token class-name">UserRoles</span><span class="token punctuation">.</span>all</code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-create-and-compose-custom-views">How to create and compose custom views</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-create-a-custom-transition">How to create a custom transition</a></li><li><a href="/quick-start/swiftui/how-to-create-custom-animated-drawings-with-timelineview-and-canvas">How to create custom animated drawings with TimelineView and Canvas</a></li><li><a href="/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics">How to play custom vibrations using Core Haptics</a></li></ul>
-->

:::

---

<TagLinks />