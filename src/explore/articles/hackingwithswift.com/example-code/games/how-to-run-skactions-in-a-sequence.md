---
lang: ko-KR
title: "How to run SKActions in a sequence"
description: "Article(s) > How to run SKActions in a sequence"
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
      content: "Article(s) > How to run SKActions in a sequence"
    - property: og:description
      content: "How to run SKActions in a sequence"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-run-skactions-in-a-sequence.html
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
  "title": "How to run SKActions in a sequence | Games - free Swift example code",
  "desc": "How to run SKActions in a sequence",
  "link": "https://hackingwithswift.com/example-code/games/how-to-run-skactions-in-a-sequence",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>One of the great features of SpriteKit's actions is that they can be chained together using action sequences. SpriteKit automatically ensures each action finishes before the next one begins – all you need to do is create the actions then put them into an array.</p>
<p>The example below makes a spaceship shrink down to 10% of its original size before fading out:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> sprite <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">"Spaceship"</span></span><span class="token punctuation">)</span>

<span class="token keyword">let</span> scale <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> fade <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> sequence <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">sequence</span><span class="token punctuation">(</span><span class="token punctuation">[</span>scale<span class="token punctuation">,</span> fade<span class="token punctuation">]</span><span class="token punctuation">)</span>

sprite<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>sequence<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-run-skactions-in-a-group">How to run SKActions in a group</a></li><li><a href="/quick-start/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream">What’s the difference between Sequence, AsyncSequence, and AsyncStream?</a></li><li><a href="/example-code/language/how-to-make-a-custom-sequence">How to make a custom sequence</a></li><li><a href="/quick-start/concurrency/how-to-convert-an-asyncsequence-into-a-sequence">How to convert an AsyncSequence into a Sequence</a></li><li><a href="/example-code/language/how-to-find-the-longest-initial-sequence-in-an-array">How to find the longest initial sequence in an array</a></li></ul>
-->

---

<TagLinks />