---
lang: ko-KR
title: "How to add a fragment shader to an SKSpriteNode using SKShader"
description: "Article(s) > How to add a fragment shader to an SKSpriteNode using SKShader"
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
      content: "Article(s) > How to add a fragment shader to an SKSpriteNode using SKShader"
    - property: og:description
      content: "How to add a fragment shader to an SKSpriteNode using SKShader"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-add-a-fragment-shader-to-an-skspritenode-using-skshader.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Games - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/games/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to add a fragment shader to an SKSpriteNode using SKShader | Games - free Swift example code",
  "desc": "How to add a fragment shader to an SKSpriteNode using SKShader",
  "link": "https://hackingwithswift.com/example-code/games/how-to-add-a-fragment-shader-to-an-skspritenode-using-skshader",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Fragment shaders let you adjust individual pixels inside sprites to create effects such as embossing, pixellation, and even water, and you can attach fragment shader to any <code>SKSpriteNode</code> just by setting its <code>shader</code> property.</p>
<p>First, you need a fragment shader. This should be a file in your bundle with the extension “fsh”, and should be written in GLSL – the OpenGL shading language. I’m not going to teach GLSL here, but I do want to give you an example. Here’s a commented example that causes all colors in a sprite to be inverted:</p>
<pre class=" language-swift"><code class=" language-swift">void <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// find the current pixel color</span>
    vec4 current_color <span class="token operator">=</span> <span class="token function">texture2D</span><span class="token punctuation">(</span>u_texture<span class="token punctuation">,</span> v_tex_coord<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// if it's not transparent</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>current_color<span class="token punctuation">.</span>a <span class="token operator">&gt;</span> <span class="token number">0.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// subtract its current RGB values from 1 and use its current alpha; multiply by the node alpha so we can fade in or out</span>
        gl_FragColor <span class="token operator">=</span> <span class="token function">vec4</span><span class="token punctuation">(</span><span class="token number">1.0</span> <span class="token operator">-</span> current_color<span class="token punctuation">.</span>rgb<span class="token punctuation">,</span> current_color<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token operator">*</span> current_color<span class="token punctuation">.</span>a <span class="token operator">*</span> v_color_mix<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// use the current (transparent) color</span>
        gl_FragColor <span class="token operator">=</span> current_color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Save that as “inverted.fsh” and put it in your bundle. When you want to assign that to a sprite node, just set its <code>shader</code> property like this:</p>
<pre class=" language-swift"><code class=" language-swift">yourSprite<span class="token punctuation">.</span>shader <span class="token operator">=</span> <span class="token class-name">SKShader</span><span class="token punctuation">(</span>filename<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"inverted"</span></span><span class="token punctuation">)</span></code></pre>
<p>Shaders are compiled on the device at runtime, which means they always take advantage of all GPU features on the user’s device. However, it also means there will be a small performance hit while your shader is being compiled, so it’s a good idea to compile them ahead of time and keep a cache.</p>
<p>If you’d like to explore shaders more, I made a whole library of them called ShaderKit. All examples are extensively commented and free to use: <a href="https://github.com/twostraws/ShaderKit">https://github.com/twostraws/ShaderKit</a>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects">How to add Metal shaders to SwiftUI views using layer effects</a></li><li><a href="/example-code/games/how-to-add-physics-to-an-skspritenode">How to add physics to an SKSpriteNode</a></li><li><a href="/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode">How to add pixel-perfect physics to an SKSpriteNode</a></li><li><a href="/example-code/games/how-to-made-an-skspritenode-render-faster-using-blendmode">How to made an SKSpriteNode render faster using blendMode</a></li><li><a href="/example-code/games/how-to-color-an-skspritenode-using-colorblendfactor">How to color an SKSpriteNode using colorBlendFactor</a></li></ul>
-->

---

<TagLinks />