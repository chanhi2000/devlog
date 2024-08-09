---
lang: ko-KR
title: "Making contact: didBegin()"
description: "Article(s) > Making contact: didBegin()"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Making contact: didBegin()"
    - property: og:description
      content: "Making contact: didBegin()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/17/04-making-contact-didbegin.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Making contact: didBegin() | Hacking with iOS",
  "desc": "Making contact: didBegin()",
  "link": "https://hackingwithswift.com/read/17/4/making-contact-didbegin",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/KNEHC4bN2x4" />

Check your clock, because remarkably we’re just two methods away from finishing this game! Predictably, the two methods are critically important: one to move the player around the screen, and one to handle collisions between the player and the space debris.

Handling player movement is as simple as implementing the `touchesMoved()` method. We will, like always, need to use the `location(in:)` method to figure out where on the screen the user touched. But this time we're going to clamp the player's Y position, which in plain English means that we're going to stop them going above or below a certain point, keeping them firmly in the game area.

I'll be clamping the player's position so they can't overlap the score label, and I'll apply the same restriction on top so that the player has a symmetrical channel to fly through. This is a cinch to do, so here's the `touchesMoved()` method:

```swift
override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
    guard let touch = touches.first else { return }
    var location = touch.location(in: self)

    if location.y < 100 {
        location.y = 100
    } else if location.y > 668 {
        location.y = 668
    }

    player.position = location
}
```

Our last task is to end the game when the player hits any piece of space debris. This is all code you know already: we're going to create a particle emitter, position it where the player is (or was!), and add the explosion to the scene while removing the player. In this game we're also going to set `isGameOver` to be true so that the `update()` method stops adding to their score. Here's all the code:

```swift
func didBegin(_ contact: SKPhysicsContact) {
    let explosion = SKEmitterNode(fileNamed: "explosion")!
    explosion.position = player.position
    addChild(explosion)

    player.removeFromParent()

    isGameOver = true
}
```

---

<TagLinks />