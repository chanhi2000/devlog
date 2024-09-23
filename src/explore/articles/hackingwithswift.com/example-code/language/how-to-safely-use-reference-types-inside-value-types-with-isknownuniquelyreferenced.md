---
lang: ko-KR
title: "How to safely use reference types inside value types with isKnownUniquelyReferenced()"
description: "Article(s) > How to safely use reference types inside value types with isKnownUniquelyReferenced()"
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
      content: "Article(s) > How to safely use reference types inside value types with isKnownUniquelyReferenced()"
    - property: og:description
      content: "How to safely use reference types inside value types with isKnownUniquelyReferenced()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced.html
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
  "title": "How to safely use reference types inside value types with isKnownUniquelyReferenced() | Language - free Swift example code",
  "desc": "How to safely use reference types inside value types with isKnownUniquelyReferenced()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Working with value types like structs and enums makes your code easier to write, easier to test, and easier to reason about. However, they aren’t always possible: classes and closures are both reference types, and are used extensively in Swift for the handful of times when sharing data is important, or perhaps because you’re using them through someone else’s Swift code.</p>
<p>This can cause a variety of side effects with your code:&nbsp;if you use reference types inside value types, they still behave like reference types. The solution to this is to wrap those reference types in value semantics, meaning that they behave more like value types.</p>
<p>To demonstrate the problem, consider this <code>ChatHistory</code> class:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ChatHistory</span><span class="token punctuation">:</span> <span class="token class-name">NSCopying</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> messages<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span>

    <span class="token keyword">func</span> <span class="token function-definition function">copy</span><span class="token punctuation">(</span>with zone<span class="token punctuation">:</span> <span class="token class-name">NSZone</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">Any</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> copy <span class="token operator">=</span> <span class="token class-name">ChatHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        copy<span class="token punctuation">.</span>messages <span class="token operator">=</span> messages
        <span class="token keyword">return</span> copy
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>It doesn’t hold much data, but it’s enough for us to work with.</p>
<p>If you wanted to use that inside a struct your first attempt might look like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> chats <span class="token operator">=</span> <span class="token class-name">ChatHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> twostraws <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
twostraws<span class="token punctuation">.</span>chats<span class="token punctuation">.</span>messages <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Hello!"</span></span></code></pre>
<p>Although that’s a value type – meaning that it may have only one owner at a time –&nbsp;it doesn’t really <em>behave</em> like one. You can see we’re modifying the struct directly, even though it’s marked as a constant. We could also create a different struct and make it re-use the same <code>chats</code> property:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> taylor <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
taylor<span class="token punctuation">.</span>chats <span class="token operator">=</span> twostraws<span class="token punctuation">.</span>chats</code></pre>
<p>Because we made <code>taylor.chats</code> point to the same object as <code>twostraws.chats</code> –&nbsp;a reference type – then changing one will also change the other. So, this will print “Goodbye!” twice:</p>
<pre class=" language-swift"><code class=" language-swift">twostraws<span class="token punctuation">.</span>chats<span class="token punctuation">.</span>messages <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Goodbye!"</span></span>
<span class="token function">print</span><span class="token punctuation">(</span>twostraws<span class="token punctuation">.</span>chats<span class="token punctuation">.</span>messages<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>taylor<span class="token punctuation">.</span>chats<span class="token punctuation">.</span>messages<span class="token punctuation">)</span></code></pre>
<p>To fix this we’re going to change the implementation of <code>User</code> so that <code>messages</code> becomes a private property called <code>_messages</code>, and expose a custom getter/setter called <code>messages</code> that will act in its place. The setter part will just change <code>_messages</code> directly, but the getter will take a copy of <code>_messages</code> before returning it so that our properties are always unique.</p>
<p>To do this we’re going to use Swift’s mutating getters, which are enabled using the <code>mutating get</code> keyword. This allows us to change the struct inside the getter, and Swift will back this up by refusing to allow it when used with constants.</p>
<p>Here’s how that looks:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _chats <span class="token operator">=</span> <span class="token class-name">ChatHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> chats<span class="token punctuation">:</span> <span class="token class-name">ChatHistory</span> <span class="token punctuation">{</span>
        <span class="token keyword">mutating</span> <span class="token keyword">get</span> <span class="token punctuation">{</span>
            _chats <span class="token operator">=</span> _chats<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">ChatHistory</span>
            <span class="token keyword">return</span> _chats
        <span class="token punctuation">}</span>

        <span class="token keyword">set</span> <span class="token punctuation">{</span>
            _chats <span class="token operator">=</span> newValue
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>This is an improvement, because now Swift will force us to make <code>twostraws</code> a variable, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> twostraws <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>This makes sense, because we <em>are</em> changing it. However, it introduces a new problem: all that copying is quite wasteful if you do repeated work when the messages object was unique all along.</p>
<p>To fix this new problem you need the <code>isKnownUniquelyReferenced()</code> function, which returns true when called on an instance of a Swift class that has only one owner.<code>isKnownUniquelyReferenced()</code>. This means we can return <code>_chats</code> if it is uniquely referenced (no one else has a reference to it), otherwise we’ll take a copy. This reduces copying down to the bare minimum, which is much more efficient.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">var</span> _chats <span class="token operator">=</span> <span class="token class-name">ChatHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> chats<span class="token punctuation">:</span> <span class="token class-name">ChatHistory</span> <span class="token punctuation">{</span>
        <span class="token keyword">mutating</span> <span class="token keyword">get</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">isKnownUniquelyReferenced</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>_chats<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                _chats <span class="token operator">=</span> _chats<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">ChatHistory</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> _chats
        <span class="token punctuation">}</span>

        <span class="token keyword">set</span> <span class="token punctuation">{</span>
            _chats <span class="token operator">=</span> newValue
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If you run the program again, you’ll see that the two users now have their own chat logs –&nbsp;using <code>twostraws.chats.messages = "Goodbye!"</code> inherently means reading <code>chats</code>, which will notice the object isn’t uniquely referenced and take a copy before continuing.</p>
<p>You could still abuse that if you really wanted to, but it’s getting increasingly hard –&nbsp;Swift is protecting us from a wider variety of mistakes.</p>
<p>Ideally your goal is to copy as infrequently as possible, so it’s common to make copies only when something is definitely changing rather than simply being read. In practice, this would mean marking methods in your struct as <code>mutating</code>, then funneling access through there so you copy only as needed. At WWDC 2015, [Apple gave a demonstration of using two different properties (one reading, one writing) to accomplish this –&nbsp;see <a href="https://developer.apple.com/videos/play/wwdc2015/414">https://developer.apple.com/videos/play/wwdc2015/414</a> for more information.</p>
<p><strong>Warning:</strong> Don’t try using <code>isKnownUniquelyReferenced()</code> on Objective-C objects, because it will not behave as you expect&nbsp;–&nbsp;it’s designed only for Swift classes.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-automatic-reference-counting-arc">What is Automatic Reference Counting (ARC)?</a></li><li><a href="/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round"</a></li><li><a href="/quick-start/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock">How to fix “Ambiguous reference to member 'buildBlock()’”</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink">How to disable the overlay color for images inside Button and NavigationLink</a></li></ul>
-->

:::

---

<TagLinks />