---
lang: ko-KR
title: "How to convert a string to a safe format for URL slugs and filenames"
description: "Article(s) > How to convert a string to a safe format for URL slugs and filenames"
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
      content: "Article(s) > How to convert a string to a safe format for URL slugs and filenames"
    - property: og:description
      content: "How to convert a string to a safe format for URL slugs and filenames"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-convert-a-string-to-a-safe-format-for-url-slugs-and-filenames.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to convert a string to a safe format for URL slugs and filenames | Strings - free Swift example code",
  "desc": "How to convert a string to a safe format for URL slugs and filenames",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-convert-a-string-to-a-safe-format-for-url-slugs-and-filenames",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift strings are extraordinarily complex beasts, allowing you to mix in characters from any language –&nbsp;including emoji –&nbsp;freely. While this is really important to display text, it can also cause havoc while trying to create URLs and filenames, so if you need to refer to a string in those places you should first convert it to a <em>slug</em>.</p>
<p>If you look at a URL like <a href="https://www.hackingwithswift.com/whats-new-in-ios-11">https://www.hackingwithswift.com/whats-new-in-ios-11</a>, the <em>slug</em> is the last part –&nbsp;“whats-new-in-ios-11”. The conversion process stripped out punctuation (the apostrophe in “What’s”, lowercased it all, removed any non-Latin characters, then used dashed for word separators rather than spaces.</p>
<p>This takes a little more work to do than you might think, particularly because of the way you need to convert non-Latin and accented characters. For example, “ä” needs to be converted to “a”, and languages such as German convert “ß” into “ss” when they are rendered as Latin characters.</p>
<p>If you want to get the best conversion possible, you need to use Foundation’s <code>StringTransform</code> type then call <code>applyingTransform()</code> on your string. You can then split by any characters that can’t be used in slugs, and re-join on “-” to get your finished URL.</p>
<p>Rather than try to write all that yourself, here’s an easy extension you can drop in:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">let</span> slugSafeCharacters <span class="token operator">=</span> <span class="token class-name">CharacterSet</span><span class="token punctuation">(</span>charactersIn<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">public</span> <span class="token keyword">func</span> <span class="token function-definition function">convertedToSlug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> latin <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">applyingTransform</span><span class="token punctuation">(</span><span class="token class-name">StringTransform</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Any-Latin; Latin-ASCII; Lower;"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> reverse<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> urlComponents <span class="token operator">=</span> latin<span class="token punctuation">.</span><span class="token function">components</span><span class="token punctuation">(</span>separatedBy<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">.</span>slugSafeCharacters<span class="token punctuation">.</span>inverted<span class="token punctuation">)</span>
            <span class="token keyword">let</span> result <span class="token operator">=</span> urlComponents<span class="token punctuation">.</span>filter <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">!=</span> <span class="token string-literal"><span class="token string">""</span></span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span>separator<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"-"</span></span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> result<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> result
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If you use Swift’s package manager, you can find that wrapped up in a cross-platform library in my SwiftSlug project. It’s available on GitHub at <a href="http://github.com/twostraws/SwiftSlug">http://github.com/twostraws/SwiftSlug</a>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />