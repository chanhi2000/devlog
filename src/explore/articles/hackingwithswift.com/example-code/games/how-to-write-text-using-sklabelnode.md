---
lang: ko-KR
title: "How to write text using SKLabelNode"
description: "Article(s) > How to write text using SKLabelNode"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to write text using SKLabelNode"
    - property: og:description
      content: "How to write text using SKLabelNode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-write-text-using-sklabelnode.html
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
  "title": "How to write text using SKLabelNode | Games - free Swift example code",
  "desc": "How to write text using SKLabelNode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-write-text-using-sklabelnode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>SKLabelNode</code> class is a fast and efficient way to draw text in SpriteKit games. To use it, first create a property in your game scene:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> scoreLabel<span class="token punctuation">:</span> <span class="token class-name">SKLabelNode</span><span class="token operator">!</span></code></pre>
<p>Now create the label node by telling it want font use, its alignment, and also an initial text value if you want one. This code creates a label node using the Chalkduster font, places it in the top-right corner of the screen, and gives it the initial text "Score: 0":</p>
<pre class=" language-swift"><code class=" language-swift">scoreLabel <span class="token operator">=</span> <span class="token class-name">SKLabelNode</span><span class="token punctuation">(</span>fontNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Chalkduster"</span></span><span class="token punctuation">)</span>
scoreLabel<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Score: 0"</span></span>
scoreLabel<span class="token punctuation">.</span>horizontalAlignmentMode <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token keyword">right</span>
scoreLabel<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">980</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">700</span><span class="token punctuation">)</span>
<span class="token function">addChild</span><span class="token punctuation">(</span>scoreLabel<span class="token punctuation">)</span></code></pre>
<p>With that score label in place, you can now create a <code>score</code> integer property to store the actual number of a player's score, then use a property observer to modify the label whenever the score changes:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> score<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token keyword">didSet</span> <span class="token punctuation">{</span>
        scoreLabel<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Score: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">score</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto">How to save a string to a file on disk with write(to:)</a></li><li><a href="/example-code/testing/how-to-write-performance-tests-using-measure">How to write performance tests using measure()</a></li><li><a href="/example-code/language/what-is-copy-on-write">What is copy on write?</a></li><li><a href="/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value</a></li></ul>
-->

---

<TagLinks />