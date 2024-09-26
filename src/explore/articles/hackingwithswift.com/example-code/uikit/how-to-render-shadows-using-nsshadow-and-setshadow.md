---
lang: ko-KR
title: "How to render shadows using NSShadow and setShadow()"
description: "Article(s) > How to render shadows using NSShadow and setShadow()"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render shadows using NSShadow and setShadow()"
    - property: og:description
      content: "How to render shadows using NSShadow and setShadow()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to render shadows using NSShadow and setShadow() | UIKit - free Swift example code",
  "desc": "How to render shadows using NSShadow and setShadow()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!--
<p>There are two ways to add shadows when rendering images: calling <code>setShadow()</code> and providing offset, blur, and color, or by using an <code>NSShadow</code> attached to an attributed string. Both have their own advantages, so both are worth trying.</p>
<p>First, here’s some example drawing code without a shadow:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>bounds<span class="token punctuation">:</span> rect<span class="token punctuation">)</span>

<span class="token keyword">let</span> img <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
    <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span>

    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"""
    He thrusts his fists
    Against the posts
    And still insists
    He sees the ghosts
    """</span></span>

    <span class="token keyword">let</span> attrs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">systemFont</span><span class="token punctuation">(</span>ofSize<span class="token punctuation">:</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">.</span>foregroundColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>white
    <span class="token punctuation">]</span>

    <span class="token keyword">let</span> attributedString <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> str<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> attrs<span class="token punctuation">)</span>
    attributedString<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> rect<span class="token punctuation">.</span><span class="token function">insetBy</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That draws some white text on a black background.</p>
<p>If we want to add a shadow effect to the text, we can use the <code>setShadow</code> method of the Core Graphics context we’re working with. For example, if you place this line before the <code>draw()</code> call at the end, you’ll make the text have a 5-point red glow:</p>
<pre class=" language-swift"><code class=" language-swift">ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setShadow</span><span class="token punctuation">(</span>offset<span class="token punctuation">:</span> <span class="token punctuation">.</span>zero<span class="token punctuation">,</span> blur<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span>cgColor<span class="token punctuation">)</span></code></pre>
<p>The advantage of using <code>setShadow()</code> is that once you enable a shadow color, everything you draw has the same color –&nbsp;all text, all images, and all shapes. </p>
<p>When you’re done with the shadow and want normal rendering to resume, just use nil for the color value like this:</p>
<pre class=" language-swift"><code class=" language-swift">ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setShadow</span><span class="token punctuation">(</span>offset<span class="token punctuation">:</span> <span class="token punctuation">.</span>zero<span class="token punctuation">,</span> blur<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>The other way of drawing shadows is using <code>NSAttributedString</code> and the <code>NSShadow</code> class. This is an object you create and can attach to any attributed strings you want, giving you the flexibility to add shadowing to only certain parts of a string rather than the whole thing –&nbsp;something that <code>setShadow()</code> can’t do.</p>
<p>First, create an <code>NSShadow</code> instance like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> shadow <span class="token operator">=</span> <span class="token class-name">NSShadow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
shadow<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
shadow<span class="token punctuation">.</span>shadowBlurRadius <span class="token operator">=</span> <span class="token number">5</span></code></pre>
<p>That will create the same 5-point red glow as our earlier call to <code>setShadow()</code>.</p>
<p>Now go ahead and put that into your attributed string dictionary using the <code>.shadow</code> key, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> attrs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">systemFont</span><span class="token punctuation">(</span>ofSize<span class="token punctuation">:</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span>foregroundColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>white<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>shadow<span class="token punctuation">:</span> shadow
<span class="token punctuation">]</span></code></pre>
<p>Here the end result will look identical to <code>NSShadow</code>, but as I said you now have the ability to shadow only parts of a string -&nbsp;or even add different shadows across the string.</p>
<p><strong>Pro-tip:</strong> If you want to make your shadow stronger –&nbsp;to make it darker so that the color shows through more clearly –&nbsp;just draw your object repeatedly. For example, this will draw our attributed string five times to give it a really strong red glow:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">...</span><span class="token number">5</span> <span class="token punctuation">{</span>
    attributedString<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> rect<span class="token punctuation">.</span><span class="token function">insetBy</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />