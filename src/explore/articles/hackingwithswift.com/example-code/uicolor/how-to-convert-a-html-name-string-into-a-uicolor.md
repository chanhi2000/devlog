---
lang: ko-KR
title: "How to convert a HTML name string into a UIColor"
description: "Article(s) > How to convert a HTML name string into a UIColor"
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
      content: "Article(s) > How to convert a HTML name string into a UIColor"
    - property: og:description
      content: "How to convert a HTML name string into a UIColor"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor.html
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
  "title": "How to convert a HTML name string into a UIColor | UIClolr - free Swift example code",
  "desc": "How to convert a HTML name string into a UIColor",
  "link": "https://hackingwithswift.com/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>HTML color names let you use familiar titles like "steel blue" and "mint cream" rather than hex values, but sadly these standardized names aren't available in iOS – or at least not by default. Fortunately, it's easy to add an extension to <code>UIColor</code> that maps these names to hexadecimal color values, then add another extension to convert hex colors to <code>UIColors</code>. Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UIColor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">convenience</span> <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>hexString<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span>

        <span class="token keyword">if</span> hexString<span class="token punctuation">.</span><span class="token function">hasPrefix</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"#"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> start <span class="token operator">=</span> hexString<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>hexString<span class="token punctuation">.</span>startIndex<span class="token punctuation">,</span> offsetBy<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> hexColor <span class="token operator">=</span> hexString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> start<span class="token punctuation">)</span>

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

    <span class="token keyword">public</span> <span class="token keyword">convenience</span> <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> allColors <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string-literal"><span class="token string">"aliceblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F0F8FFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"antiquewhite"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FAEBD7FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"aqua"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#00FFFFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"aquamarine"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#7FFFD4FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"azure"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F0FFFFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"beige"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F5F5DCFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"bisque"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFE4C4FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"black"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#000000FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"blanchedalmond"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFEBCDFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"blue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#0000FFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"blueviolet"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#8A2BE2FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"brown"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#A52A2AFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"burlywood"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#DEB887FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"cadetblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#5F9EA0FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"chartreuse"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#7FFF00FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"chocolate"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#D2691EFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"coral"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FF7F50FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"cornflowerblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#6495EDFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"cornsilk"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFF8DCFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"crimson"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#DC143CFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"cyan"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#00FFFFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#00008BFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkcyan"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#008B8BFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkgoldenrod"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#B8860BFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkgray"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#A9A9A9FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkgrey"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#A9A9A9FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkgreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#006400FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkkhaki"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#BDB76BFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkmagenta"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#8B008BFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkolivegreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#556B2FFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkorange"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FF8C00FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkorchid"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#9932CCFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkred"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#8B0000FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darksalmon"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#E9967AFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkseagreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#8FBC8FFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkslateblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#483D8BFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkslategray"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#2F4F4FFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkslategrey"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#2F4F4FFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkturquoise"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#00CED1FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"darkviolet"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#9400D3FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"deeppink"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FF1493FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"deepskyblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#00BFFFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"dimgray"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#696969FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"dimgrey"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#696969FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"dodgerblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#1E90FFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"firebrick"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#B22222FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"floralwhite"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFFAF0FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"forestgreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#228B22FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"fuchsia"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FF00FFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"gainsboro"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#DCDCDCFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"ghostwhite"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F8F8FFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"gold"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFD700FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"goldenrod"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#DAA520FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"gray"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#808080FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"grey"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#808080FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"green"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#008000FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"greenyellow"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#ADFF2FFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"honeydew"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F0FFF0FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"hotpink"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FF69B4FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"indianred"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#CD5C5CFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"indigo"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#4B0082FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"ivory"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFFFF0FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"khaki"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F0E68CFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lavender"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#E6E6FAFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lavenderblush"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFF0F5FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lawngreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#7CFC00FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lemonchiffon"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFFACDFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#ADD8E6FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightcoral"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F08080FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightcyan"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#E0FFFFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightgoldenrodyellow"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FAFAD2FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightgray"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#D3D3D3FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightgrey"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#D3D3D3FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightgreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#90EE90FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightpink"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFB6C1FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightsalmon"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFA07AFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightseagreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#20B2AAFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightskyblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#87CEFAFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightslategray"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#778899FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightslategrey"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#778899FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightsteelblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#B0C4DEFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lightyellow"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFFFE0FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"lime"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#00FF00FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"limegreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#32CD32FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"linen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FAF0E6FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"magenta"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FF00FFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"maroon"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#800000FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mediumaquamarine"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#66CDAAFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mediumblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#0000CDFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mediumorchid"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#BA55D3FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mediumpurple"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#9370D8FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mediumseagreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#3CB371FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mediumslateblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#7B68EEFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mediumspringgreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#00FA9AFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mediumturquoise"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#48D1CCFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mediumvioletred"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#C71585FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"midnightblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#191970FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mintcream"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F5FFFAFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"mistyrose"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFE4E1FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"moccasin"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFE4B5FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"navajowhite"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFDEADFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"navy"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#000080FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"oldlace"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FDF5E6FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"olive"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#808000FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"olivedrab"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#6B8E23FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"orange"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFA500FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"orangered"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FF4500FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"orchid"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#DA70D6FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"palegoldenrod"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#EEE8AAFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"palegreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#98FB98FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"paleturquoise"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#AFEEEEFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"palevioletred"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#D87093FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"papayawhip"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFEFD5FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"peachpuff"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFDAB9FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"peru"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#CD853FFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"pink"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFC0CBFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"plum"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#DDA0DDFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"powderblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#B0E0E6FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"purple"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#800080FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"rebeccapurple"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#663399FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"red"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FF0000FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"rosybrown"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#BC8F8FFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"royalblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#4169E1FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"saddlebrown"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#8B4513FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"salmon"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FA8072FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"sandybrown"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F4A460FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"seagreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#2E8B57FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"seashell"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFF5EEFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"sienna"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#A0522DFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"silver"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#C0C0C0FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"skyblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#87CEEBFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"slateblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#6A5ACDFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"slategray"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#708090FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"slategrey"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#708090FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"snow"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFFAFAFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"springgreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#00FF7FFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"steelblue"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#4682B4FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"tan"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#D2B48CFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"teal"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#008080FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"thistle"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#D8BFD8FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"tomato"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FF6347FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"turquoise"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#40E0D0FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"violet"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#EE82EEFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"wheat"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F5DEB3FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"white"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFFFFFFF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"whitesmoke"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#F5F5F5FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"yellow"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#FFFF00FF"</span></span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">"yellowgreen"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"#9ACD32FF"</span></span>
        <span class="token punctuation">]</span>

        <span class="token keyword">let</span> cleanedName <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">replacingOccurrences</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">" "</span></span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">""</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lowercased</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token keyword">let</span> hexString <span class="token operator">=</span> allColors<span class="token punctuation">[</span>cleanedName<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>hexString<span class="token punctuation">:</span> hexString<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that done, here's how you create a color:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> steelBlue <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"steel blue"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()</a></li><li><a href="/example-code/system/how-to-convert-html-to-an-nsattributedstring">How to convert HTML to an NSAttributedString</a></li><li><a href="/example-code/uicolor/how-to-convert-a-hex-color-to-a-uicolor">How to convert a hex color to a UIColor</a></li><li><a href="/example-code/uicolor/how-to-read-the-red-green-blue-and-alpha-color-components-from-a-uicolor">How to read the red, green, blue, and alpha color components from a UIColor</a></li><li><a href="/example-code/uicolor/how-to-use-an-image-for-your-background-color-with-uicolorpatternimage">How to use an image for your background color with UIColor(patternImage:)</a></li></ul>
-->

:::

---

<TagLinks />