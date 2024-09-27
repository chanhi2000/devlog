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
Fragment shaders let you adjust individual pixels inside sprites to create effects such as embossing, pixellation, and even water, and you can attach fragment shader to any `SKSpriteNode` just by setting its `shader` property.

First, you need a fragment shader. This should be a file in your bundle with the extension “fsh”, and should be written in GLSL – the OpenGL shading language. I’m not going to teach GLSL here, but I do want to give you an example. Here’s a commented example that causes all colors in a sprite to be inverted:

```swift
void main() {
    // find the current pixel color
    vec4 current_color = texture2D(u_texture, v_tex_coord);

    // if it's not transparent
    if (current_color.a > 0.0) {
        // subtract its current RGB values from 1 and use its current alpha; multiply by the node alpha so we can fade in or out
        gl_FragColor = vec4(1.0 - current_color.rgb, current_color.a) * current_color.a * v_color_mix.a;
    } else {
        // use the current (transparent) color
        gl_FragColor = current_color;
    }
}
```

Save that as “inverted.fsh” and put it in your bundle. When you want to assign that to a sprite node, just set its `shader` property like this:

```swift
yourSprite.shader = SKShader(filename: "inverted")
```

Shaders are compiled on the device at runtime, which means they always take advantage of all GPU features on the user’s device. However, it also means there will be a small performance hit while your shader is being compiled, so it’s a good idea to compile them ahead of time and keep a cache.

If you’d like to explore shaders more, I made a whole library of them called ShaderKit. All examples are extensively commented and free to use: <a href="https://github.com/twostraws/ShaderKit">https://github.com/twostraws/ShaderKit</a>.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects">How to add Metal shaders to SwiftUI views using layer effects 
/example-code/games/how-to-add-physics-to-an-skspritenode">How to add physics to an SKSpriteNode 
/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode">How to add pixel-perfect physics to an SKSpriteNode 
/example-code/games/how-to-made-an-skspritenode-render-faster-using-blendmode">How to made an SKSpriteNode render faster using blendMode 
/example-code/games/how-to-color-an-skspritenode-using-colorblendfactor">How to color an SKSpriteNode using colorBlendFactor</a>
-->

---

<TagLinks />