---
lang: ko-KR
title: "Game over, man: SKTexture"
description: "Article(s) > Game over, man: SKTexture"
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
      content: "Article(s) > Game over, man: SKTexture"
    - property: og:description
      content: "Game over, man: SKTexture"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/23/07-game-over-man-sktexture.html
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
  "title": "Game over, man: SKTexture | Hacking with iOS",
  "desc": "Game over, man: SKTexture",
  "link": "https://hackingwithswift.com/read/23/7/game-over-man-sktexture",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/HqrrsfA0sbA" />

You are now within reach of the end of this project, and not a moment too soon, I suspect. You'll be pleased to know that you're just two methods away from the end, and neither of them are particularly taxing.

First is the `subtractLife()` method, which is called when a penguin falls off the screen without being sliced. It needs to subtract 1 from the `lives` property that we created what seems like years ago, update the images in the `livesImages` array so that the correct number are crossed off, then end the game if the player is out of lives.

To make it a bit clearer that something bad has happened, we're also going to add playing a sound and animate the life being lost – we'll set the X and Y scale of the life being lost to 1.3, then animate it back down to 1.0.

Here's the code:

```swift
func subtractLife() {
    lives -= 1

    run(SKAction.playSoundFileNamed("wrong.caf", waitForCompletion: false))

    var life: SKSpriteNode

    if lives == 2 {
        life = livesImages[0]
    } else if lives == 1 {
        life = livesImages[1]
    } else {
        life = livesImages[2]
        endGame(triggeredByBomb: false)
    }

    life.texture = SKTexture(imageNamed: "sliceLifeGone")

    life.xScale = 1.3
    life.yScale = 1.3
    life.run(SKAction.scale(to: 1, duration:0.1))
}
```

Note how I'm using `SKTexture` to modify the contents of a sprite node without having to recreate it, just like in project 14.

Finally, there's the `endGame()` method. I've made this accept a parameter that sets whether the game ended because of a bomb, so that we can update the UI appropriately.

```swift
func endGame(triggeredByBomb: Bool) {
    if isGameEnded {
        return
    }

    isGameEnded = true
    physicsWorld.speed = 0
    isUserInteractionEnabled = false

    bombSoundEffect?.stop()
    bombSoundEffect = nil

    if triggeredByBomb {
        livesImages[0].texture = SKTexture(imageNamed: "sliceLifeGone")
        livesImages[1].texture = SKTexture(imageNamed: "sliceLifeGone")
        livesImages[2].texture = SKTexture(imageNamed: "sliceLifeGone")
    }
}
```

If the game hasn't already ended, this code stops every object from moving by adjusting the speed of the physics world to be 0. It stops any bomb fuse fizzing, and sets all three lives images to have the same "life gone" graphic. Nothing surprising in there, but you do need to declare `isGameEnded` as a property for your class, like this:

```swift
var isGameEnded = false
```

Even though the game has ended, some actions can still take place. This should be banned if possible, so add these lines to the start of `tossEnemies()` and `touchesMoved()`:

```swift
if isGameEnded {
    return
}
```

That's it, your game is done!

---

<TagLinks />