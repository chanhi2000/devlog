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
The `SKLabelNode` class is a fast and efficient way to draw text in SpriteKit games. To use it, first create a property in your game scene:

```swift
var scoreLabel: SKLabelNode!
```

Now create the label node by telling it want font use, its alignment, and also an initial text value if you want one. This code creates a label node using the Chalkduster font, places it in the top-right corner of the screen, and gives it the initial text "Score: 0":

```swift
scoreLabel = SKLabelNode(fontNamed: "Chalkduster")
scoreLabel.text = "Score: 0"
scoreLabel.horizontalAlignmentMode = .right
scoreLabel.position = CGPoint(x: 980, y: 700)
addChild(scoreLabel)
```

With that score label in place, you can now create a `score` integer property to store the actual number of a player's score, then use a property observer to modify the label whenever the score changes:

```swift
var score: Int = 0 {
    didSet {
        scoreLabel.text = "Score: \(score)"
    }
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto">How to save a string to a file on disk with write(to:) 
/example-code/testing/how-to-write-performance-tests-using-measure">How to write performance tests using measure() 
/example-code/language/what-is-copy-on-write">What is copy on write? 
/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value</a>
-->

---

<TagLinks />