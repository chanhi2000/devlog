---
lang: ko-KR
title: How to integrate SpriteKit using SpriteView
description: Article(s) > How to integrate SpriteKit using SpriteView
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to integrate SpriteKit using SpriteView
    - property: og:description
      content: How to integrate SpriteKit using SpriteView
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-integrate-spritekit-using-spriteview.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to integrate SpriteKit using SpriteView | SwiftUI by Example",
  "desc": "How to integrate SpriteKit using SpriteView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-integrate-spritekit-using-spriteview",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `SpriteView` lets us render any `SKScene` subclass right inside SwiftUI, and it will even resize the scene if you request it.

To try it out, first add `import SpriteKit` to your Swift file. Second, create some sort of game scene you want to render. For example, this will create falling boxes wherever you tap, adding a physics effect so they interact neatly:

```swift
// A simple game scene with falling boxes
class GameScene: SKScene {
    override func didMove(to view: SKView) {
        physicsBody = SKPhysicsBody(edgeLoopFrom: frame)
    }

    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        guard let touch = touches.first else { return }
        let location = touch.location(in: self)
        let box = SKSpriteNode(color: .red, size: CGSize(width: 50, height: 50))
        box.position = location
        box.physicsBody = SKPhysicsBody(rectangleOf: CGSize(width: 50, height: 50))
        addChild(box)
    }
}

// A sample SwiftUI creating a GameScene and sizing it
// at 300x400 points
struct ContentView: View {
    var scene: SKScene {
        let scene = GameScene()
        scene.size = CGSize(width: 300, height: 400)
        scene.scaleMode = .fill
        return scene
    }

    var body: some View {
        SpriteView(scene: scene)
            .frame(width: 300, height: 400)
            .ignoresSafeArea()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-integrate-spritekit-using-spriteview-1.zip)

![A lot of red squares piled up at the bottom of the screen.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-integrate-spritekit-using-spriteview-1~dark.png)

The game scene you create is fully interactive, so it works just like a regular `SKView` would do in UIKit.

---

<TagLinks />