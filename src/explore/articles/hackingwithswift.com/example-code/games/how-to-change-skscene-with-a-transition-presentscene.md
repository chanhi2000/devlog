---
lang: ko-KR
title: "How to change SKScene with a transition: presentScene()"
description: "Article(s) > How to change SKScene with a transition: presentScene()"
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
      content: "Article(s) > How to change SKScene with a transition: presentScene()"
    - property: og:description
      content: "How to change SKScene with a transition: presentScene()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-change-skscene-with-a-transition-presentscene.html
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
  "title": "How to change SKScene with a transition: presentScene() | Games - free Swift example code",
  "desc": "How to change SKScene with a transition: presentScene()",
  "link": "https://hackingwithswift.com/example-code/games/how-to-change-skscene-with-a-transition-presentscene",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
You can change between SpriteKit scenes by calling the `presentScene()` method on your `SKView`. This can be called either just with a new scene, or with a new scene and a transition animation to use, depending on the effect you want. Here's an example with a transition:

```swift
let scene = NewGameScene(fileNamed: "NewGameScene")!
let transition = SKTransition.moveIn(with: .right, duration: 1)
self.view?.presentScene(scene, transition: transition)
```

There are several beautiful transition types you can try, with the `SKTransition.doorway(withDuration: 1)` transition looking particularly neat.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-create-a-custom-transition">How to create a custom transition 
/quick-start/swiftui/how-to-add-and-remove-views-with-a-transition">How to add and remove views with a transition 
/example-code/uikit/how-to-flip-a-uiview-with-a-3d-effect-transitionwith">How to flip a UIView with a 3D effect: transition(with:) 
/quick-start/swiftui/how-to-make-views-scroll-with-a-custom-transition">How to make views scroll with a custom transition 
/quick-start/swiftui/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update">How to find which data change is causing a SwiftUI view to update</a>
-->

---

<TagLinks />