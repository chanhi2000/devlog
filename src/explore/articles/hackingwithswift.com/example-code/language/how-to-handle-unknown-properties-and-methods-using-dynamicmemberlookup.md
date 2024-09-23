---
lang: ko-KR
title: "How to handle unknown properties and methods using @dynamicMemberLookup"
description: "Article(s) > How to handle unknown properties and methods using @dynamicMemberLookup"
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
      content: "Article(s) > How to handle unknown properties and methods using @dynamicMemberLookup"
    - property: og:description
      content: "How to handle unknown properties and methods using @dynamicMemberLookup"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup.html
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
  "title": "How to handle unknown properties and methods using @dynamicMemberLookup | Language - free Swift example code",
  "desc": "How to handle unknown properties and methods using @dynamicMemberLookup",
  "link": "https://hackingwithswift.com/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift has always had strong focus on type safety, but sometimes you need to be able to work with data where the structure isn’t known ahead of time.</p>
<p>To handle this situation, Swift has an attribute called <code>@dynamicMemberLookup</code>, which instructs Swift to call a subscript method when accessing properties. This subscript method, <code>subscript(dynamicMember:)</code>, is <em>required</em> when using the <code>@dynamicMemberLookup</code> attribute – you’ll get passed the string name of the property that was requested, and can return any value you like.</p>
<p>To help you understand the basics, here’s an example that creates a <code>Person</code> struct that reads its values from a dictionary:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@dynamicMemberLookup</span>
<span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">subscript</span><span class="token punctuation">(</span>dynamicMember member<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> properties <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"name"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"city"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Nashville"</span></span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> properties<span class="token punctuation">[</span>member<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">""</span></span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>The <code>@dynamicMemberLookup</code> attribute requires the type to implement a <code>subscript(dynamicMember:)</code> method to handle the work of dynamic member lookup. As you can see, I’ve written one that accepts the member name as string and returns a string, and internally it just looks up the member name in a dictionary and returns its value.</p>
<p>That struct allows us to write code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>city<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>nameOfPet<span class="token punctuation">)</span></code></pre>
<p>That will compile cleanly and run, even though <code>name</code>, <code>city</code>, and <code>nameOfPet</code> do not exist as properties on the <code>Person</code> type. Instead, they are all looked up at runtime: that code will print “Taylor Swift” and “Nashville” for the first two calls to <code>print()</code>, then an empty string for the final one because our dictionary doesn’t store anything for <code>nameOfPet</code>.</p>
<p>This <code>subscript(dynamicMember:)</code> method <em>must</em> return a string, which is what enforces Swift’s type safety – even though you’re still dealing with dynamic data, Swift will ensure you get back what you expected.</p>
<p>If you want multiple different types, just implement different <code>subscript(dynamicMember:)</code> methods:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@dynamicMemberLookup</span>
<span class="token keyword">struct</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
    <span class="token keyword">subscript</span><span class="token punctuation">(</span>dynamicMember member<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> properties <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"name"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"city"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Nashville"</span></span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> properties<span class="token punctuation">[</span>member<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">""</span></span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">subscript</span><span class="token punctuation">(</span>dynamicMember member<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> properties <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"age"</span></span><span class="token punctuation">:</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"height"</span></span><span class="token punctuation">:</span> <span class="token number">178</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> properties<span class="token punctuation">[</span>member<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Now that any property can be accessed in more than one way, it’s important that you are clear which one should be used. That might be implicit, for example if you send the return value into a function that accepts only strings, or it might be explicit, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> employee <span class="token operator">=</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> employee<span class="token punctuation">.</span>age</code></pre>
<p>Either way, Swift must know for sure which subscript will be called.</p>
<p>You can also overload <code>subscript</code> to return closures:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@dynamicMemberLookup</span>
<span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">subscript</span><span class="token punctuation">(</span>dynamicMember member<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span><span class="token omit keyword">_</span> input<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello! I live at the address </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation"><span class="token short-argument">$0</span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
user<span class="token punctuation">.</span><span class="token function">printAddress</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"123 Swift Street"</span></span><span class="token punctuation">)</span></code></pre>
<p>When that’s run, <code>user.printAddress</code> returns a closure that prints out a string, and the <code>("123 Swift Street")</code> part immediately calls it with that input. </p>
<p>Using dynamic member subscripting in a type that has also regular properties and methods will result in those properties and methods always being used in place of the dynamic member. For example, we could define a <code>Singer</code> struct with a built-in <code>name</code> property alongside a dynamic member subscript:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Singer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Ed Sheeran"</span></span>

    <span class="token keyword">subscript</span><span class="token punctuation">(</span>dynamicMember member<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> singer <span class="token operator">=</span> <span class="token class-name">Singer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>singer<span class="token punctuation">.</span>name<span class="token punctuation">)</span></code></pre>
<p>That code prints “Ed Sheeran”, because the <code>name</code> property will always be used rather than the dynamic member subscript.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />