---
lang: ko-KR
title: "How to make array access safer using a custom subscript"
description: "Article(s) > How to make array access safer using a custom subscript"
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
      content: "Article(s) > How to make array access safer using a custom subscript"
    - property: og:description
      content: "How to make array access safer using a custom subscript"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-make-array-access-safer-using-a-custom-subscript.html
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
  "title": "How to make array access safer using a custom subscript | Language - free Swift example code",
  "desc": "How to make array access safer using a custom subscript",
  "link": "https://hackingwithswift.com/example-code/language/how-to-make-array-access-safer-using-a-custom-subscript",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift likes to be safe, but one problematic area can be reading from arrays and dictionaries. In the case of dictionaries, reading a missing key will return <code>nil</code> rather than the value you might have expected, but in the case of <em>arrays</em> it’s worse: your app will crash.</p>
<p>Dictionaries have a special subscript method that can send back a default value if you request a missing key, but arrays don’t. Fortunately, we can fix that using Swift’s extensions:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Array</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">subscript</span><span class="token punctuation">(</span>index<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> <span class="token keyword">default</span> defaultValue<span class="token punctuation">:</span> <span class="token attribute atrule">@autoclosure</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Element</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> index <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">,</span> index <span class="token operator">&lt;</span> endIndex <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">defaultValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That uses <code>@autoclosure()</code> so your default value can be calculated however you need without incurring a performance hit in times when you use a valid array index.</p>
<p>With that extension in place you can now create and use arrays as usual:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> paul <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></code></pre>
<p>But if you want, you can now also read any index using the new subscript and be sure to get back a safe value:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> anon1 <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> anon2 <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> anon3 <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">556</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span><span class="token punctuation">]</span></code></pre>
<p>Alternatively, you could write a <code>safeIndex</code> subscript that returns an optional value – <code>nil</code> if the index is out of bounds, or the value in question otherwise:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Array</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">subscript</span><span class="token punctuation">(</span>safeIndex index<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Element</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> index <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">,</span> index <span class="token operator">&lt;</span> endIndex <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Both solutions have their uses, so try experimenting and see which works best for you.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access">How to make SwiftUI modifiers safer to use with @warn_unqualified_access</a></li><li><a href="/quick-start/swiftui/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view">How to access a Core Data managed object context from a SwiftUI view</a></li><li><a href="/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access">How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”</a></li><li><a href="/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup">How to handle unknown properties and methods using @dynamicMemberLookup</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />