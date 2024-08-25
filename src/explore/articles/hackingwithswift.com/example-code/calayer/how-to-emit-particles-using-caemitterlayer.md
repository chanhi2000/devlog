---
lang: ko-KR
title: "How to emit particles using CAEmitterLayer"
description: "Article(s) > How to emit particles using CAEmitterLayer"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to emit particles using CAEmitterLayer"
    - property: og:description
      content: "How to emit particles using CAEmitterLayer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-emit-particles-using-caemitterlayer.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CALayer - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/calayer/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to emit particles using CAEmitterLayer | Array - free Swift example code",
  "desc": "How to emit particles using CAEmitterLayer",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-emit-particles-using-caemitterlayer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
<p>Believe it or not, iOS has a built-in particle system that works great in all UIKit apps and is immensely customizable. To get started you need to create a <code>CAEmitterLayer</code> object and tell it how to create particles: where it should create them, how big the emitter should be, and what types of particles should exist.</p>
<p>The "type of particles" part is handled by <code>CAEmitterCell</code>, which covers details like how fast to create, how long they should live, whether they should spin and/or fade out, what texture to use, and more. You can add as many <code>CAEmitterCells</code> to a <code>CAEmitterLayer</code> as you need.</p>
<p>Here's some example code to get you started. This creates particles of three different colors, all falling and spinning down from the top of the screen. The image "particle_confetti" is just a small white triangle that I drew by hand – you should replace that with something more interesting.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">createParticles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> particleEmitter <span class="token operator">=</span> <span class="token class-name">CAEmitterLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    particleEmitter<span class="token punctuation">.</span>emitterPosition <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> view<span class="token punctuation">.</span>center<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">96</span><span class="token punctuation">)</span>
    particleEmitter<span class="token punctuation">.</span>emitterShape <span class="token operator">=</span> <span class="token punctuation">.</span>line
    particleEmitter<span class="token punctuation">.</span>emitterSize <span class="token operator">=</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> view<span class="token punctuation">.</span>frame<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width<span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> red <span class="token operator">=</span> <span class="token function">makeEmitterCell</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">)</span>
    <span class="token keyword">let</span> green <span class="token operator">=</span> <span class="token function">makeEmitterCell</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>green<span class="token punctuation">)</span>
    <span class="token keyword">let</span> blue <span class="token operator">=</span> <span class="token function">makeEmitterCell</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>blue<span class="token punctuation">)</span>

    particleEmitter<span class="token punctuation">.</span>emitterCells <span class="token operator">=</span> <span class="token punctuation">[</span>red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue<span class="token punctuation">]</span>

    view<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">addSublayer</span><span class="token punctuation">(</span>particleEmitter<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">makeEmitterCell</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">CAEmitterCell</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cell <span class="token operator">=</span> <span class="token class-name">CAEmitterCell</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    cell<span class="token punctuation">.</span>birthRate <span class="token operator">=</span> <span class="token number">3</span>
    cell<span class="token punctuation">.</span>lifetime <span class="token operator">=</span> <span class="token number">7.0</span>
    cell<span class="token punctuation">.</span>lifetimeRange <span class="token operator">=</span> <span class="token number">0</span>
    cell<span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">.</span>cgColor
    cell<span class="token punctuation">.</span>velocity <span class="token operator">=</span> <span class="token number">200</span>
    cell<span class="token punctuation">.</span>velocityRange <span class="token operator">=</span> <span class="token number">50</span>
    cell<span class="token punctuation">.</span>emissionLongitude <span class="token operator">=</span> <span class="token class-name">CGFloat</span><span class="token punctuation">.</span>pi
    cell<span class="token punctuation">.</span>emissionRange <span class="token operator">=</span> <span class="token class-name">CGFloat</span><span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">4</span>
    cell<span class="token punctuation">.</span>spin <span class="token operator">=</span> <span class="token number">2</span>
    cell<span class="token punctuation">.</span>spinRange <span class="token operator">=</span> <span class="token number">3</span>
    cell<span class="token punctuation">.</span>scaleRange <span class="token operator">=</span> <span class="token number">0.5</span>
    cell<span class="token punctuation">.</span>scaleSpeed <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">0.05</span>

    cell<span class="token punctuation">.</span>contents <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"particle_confetti"</span></span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span>cgImage
    <span class="token keyword">return</span> cell
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-emit-particles-using-skemitternode">How to emit particles using SKEmitterNode</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li><li><a href="/example-code/games/how-to-advance-time-in-an-skemitternode-using-advancesimulationtime">How to advance time in an SKEmitterNode using advanceSimulationTime()</a></li><li><a href="/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a></li></ul>
-->

:::

---

<TagLinks />