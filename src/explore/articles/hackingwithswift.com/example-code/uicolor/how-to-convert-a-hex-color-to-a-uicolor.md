---
lang: ko-KR
title: "How to convert a hex color to a UIColor"
description: "Article(s) > How to convert a hex color to a UIColor"
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
      content: "Article(s) > How to convert a hex color to a UIColor"
    - property: og:description
      content: "How to convert a hex color to a UIColor"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-convert-a-hex-color-to-a-uicolor.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIClolr - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uicolor/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to convert a hex color to a UIColor | UIClolr - free Swift example code",
  "desc": "How to convert a hex color to a UIColor",
  "link": "https://hackingwithswift.com/example-code/uicolor/how-to-convert-a-hex-color-to-a-uicolor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>Here's a simple extension to <code>UIColor</code> that lets you create colors from hex strings. The new method is a failable initializer, which means it returns nil if you don't specify a color in the correct format. It should be a # symbol, followed by red, green, blue and alpha in hex format, for a total of nine characters. For example, #ffe700ff is gold.</p>
<p>Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UIColor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">convenience</span> <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>hex<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span>

        <span class="token keyword">if</span> hex<span class="token punctuation">.</span><span class="token function">hasPrefix</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"#"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> start <span class="token operator">=</span> hex<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>hex<span class="token punctuation">.</span>startIndex<span class="token punctuation">,</span> offsetBy<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> hexColor <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>hex<span class="token punctuation">[</span>start<span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> hexColor<span class="token punctuation">.</span>count <span class="token operator">==</span> <span class="token number">8</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> scanner <span class="token operator">=</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> hexColor<span class="token punctuation">)</span>
                <span class="token keyword">var</span> hexNumber<span class="token punctuation">:</span> <span class="token class-name">UInt64</span> <span class="token operator">=</span> <span class="token number">0</span>

                <span class="token keyword">if</span> scanner<span class="token punctuation">.</span><span class="token function">scanHexInt64</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>hexNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    r <span class="token operator">=</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span>hexNumber <span class="token operator">&amp;</span> <span class="token number">0xff000000</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">255</span>
                    g <span class="token operator">=</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span>hexNumber <span class="token operator">&amp;</span> <span class="token number">0x00ff0000</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">255</span>
                    b <span class="token operator">=</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span>hexNumber <span class="token operator">&amp;</span> <span class="token number">0x0000ff00</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">255</span>
                    a <span class="token operator">=</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span>hexNumber <span class="token operator">&amp;</span> <span class="token number">0x000000ff</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">255</span>

                    <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> r<span class="token punctuation">,</span> green<span class="token punctuation">:</span> g<span class="token punctuation">,</span> blue<span class="token punctuation">:</span> b<span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> a<span class="token punctuation">)</span>
                    <span class="token keyword">return</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If you wanted it always to return a value, change <code>init?</code> to be <code>init</code> then change the <code>return nil</code> line at the end to be <code>return UIColor.black</code> or whatever you'd like the default value to be.</p>
<p>To use the extension, write code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> gold <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>hex<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#ffe700ff"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor</a></li><li><a href="/example-code/uicolor/how-to-read-the-red-green-blue-and-alpha-color-components-from-a-uicolor">How to read the red, green, blue, and alpha color components from a UIColor</a></li><li><a href="/example-code/uicolor/how-to-use-an-image-for-your-background-color-with-uicolorpatternimage">How to use an image for your background color with UIColor(patternImage:)</a></li><li><a href="/example-code/uicolor/how-to-create-custom-colors-using-uicolor-rgb-and-hues">How to create custom colors using UIColor RGB and hues</a></li><li><a href="/example-code/xcode/how-to-used-a-named-uicolor-in-code-and-interface-builder">How to used a named UIColor in code and Interface Builder</a></li></ul>
-->

:::

---

<TagLinks />