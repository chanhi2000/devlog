---
lang: ko-KR
title: "How to check and unwrap optionals in tests using XCTUnwrap()"
description: "Article(s) > How to check and unwrap optionals in tests using XCTUnwrap()"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check and unwrap optionals in tests using XCTUnwrap()"
    - property: og:description
      content: "How to check and unwrap optionals in tests using XCTUnwrap()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap.html
date: 2019-10-15
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
  "title": "How to check and unwrap optionals in tests using XCTUnwrap() | Testing - free Swift example code",
  "desc": "How to check and unwrap optionals in tests using XCTUnwrap()",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>When writing tests, it’s common to want to unwrap an optional before checking it for a particular value. <code>XCTUnwrap()</code> does exactly that for us: it attempts to unwrap the optional, but will throw an error (and thus fail the test) if the optional is nil.</p>
<p>For example, if you have a <code>User</code> struct with a <code>getAuthenticationToken()</code> method that returns an optional string, you can use <code>XCTUnwrap()</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">testTokenGenerationSucceeds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> token <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">XCTUnwrap</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getAuthenticationToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That test is marked with <code>throws</code>, which allows us to call <code>XCTUnwrap()</code> and propagate any errors if it finds our optional is empty.</p>
<p>This approach is cleaner than what we might have written previously:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">testTokenGenerationSucceeds2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> token <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getAuthenticationToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token class-name">XCTFail</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to generate valid token."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>It’s worth adding that in trivial cases such as this one, it’s possible to compare optionals with non-optionals in less code, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">testTokenGenerationSucceeds3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getAuthenticationToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>However, things aren’t so straightforward when you need to work with optional chaining in a longer test –&nbsp;that’s really where <code>XCTUnwrap()</code> will come into its own.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/example-code/language/when-is-it-safe-to-force-unwrap-optionals">When is it safe to force unwrap optionals?</a></li></ul>
-->

:::

---

<TagLinks />