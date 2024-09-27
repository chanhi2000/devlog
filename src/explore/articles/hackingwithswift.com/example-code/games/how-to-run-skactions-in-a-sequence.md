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
One of the great features of SpriteKit's actions is that they can be chained together using action sequences. SpriteKit automatically ensures each action finishes before the next one begins – all you need to do is create the actions then put them into an array.

The example below makes a spaceship shrink down to 10% of its original size before fading out:

```swift
let sprite = SKSpriteNode(imageNamed:"Spaceship")

let scale = SKAction.scale(to: 0.1, duration: 0.5)
let fade = SKAction.fadeOut(withDuration: 0.5)
let sequence = SKAction.sequence([scale, fade])

sprite.run(sequence)
```

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-run-skactions-in-a-group">How to run SKActions in a group 
/quick-start/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream">What’s the difference between Sequence, AsyncSequence, and AsyncStream? 
/example-code/language/how-to-make-a-custom-sequence">How to make a custom sequence 
/quick-start/concurrency/how-to-convert-an-asyncsequence-into-a-sequence">How to convert an AsyncSequence into a Sequence 
/example-code/language/how-to-find-the-longest-initial-sequence-in-an-array">How to find the longest initial sequence in an array</a>
-->

---

<TagLinks />