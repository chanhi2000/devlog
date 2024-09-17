---
lang: ko-KR
title: "How to run SKActions in a group"
description: "Article(s) > How to run SKActions in a group"
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
      content: "Article(s) > How to run SKActions in a group"
    - property: og:description
      content: "How to run SKActions in a group"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-run-skactions-in-a-group.html
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
  "title": "How to run SKActions in a group | Games - free Swift example code",
  "desc": "How to run SKActions in a group",
  "link": "https://hackingwithswift.com/example-code/games/how-to-run-skactions-in-a-group",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>SpriteKit action groups let you run multiple SpriteKit actions simultaneously. The grouped actions become a new action that can go into a sequence, and SpriteKit automatically ensures all actions in a group finish before the sequence continues.</p>
<p>The code below makes a spaceship shrink down to 10% of its original size while fading out, with both actions happening at the same time:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> sprite <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span><span class="token string-literal"><span class="token string">"Spaceship"</span></span><span class="token punctuation">)</span>

<span class="token keyword">let</span> scale <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> fade <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> group <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">[</span>scale<span class="token punctuation">,</span> fade<span class="token punctuation">]</span><span class="token punctuation">)</span>

sprite<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-run-skactions-in-a-sequence">How to run SKActions in a sequence</a></li><li><a href="/quick-start/concurrency/how-to-cancel-a-task-group">How to cancel a task group</a></li><li><a href="/quick-start/concurrency/how-to-create-a-task-group-and-add-tasks-to-it">How to create a task group and add tasks to it</a></li><li><a href="/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group</a></li><li><a href="/quick-start/swiftui/how-to-group-views-together-with-controlgroup">How to group views together with ControlGroup</a></li></ul>
-->

---

<TagLinks />