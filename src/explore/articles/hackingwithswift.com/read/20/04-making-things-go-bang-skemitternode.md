---
lang: ko-KR
title: "Making things go bang: SKEmitterNode"
description: "Article(s) > Making things go bang: SKEmitterNode"
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
      content: "Article(s) > Making things go bang: SKEmitterNode"
    - property: og:description
      content: "Making things go bang: SKEmitterNode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/20/04-making-things-go-bang-skemitternode.html
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
  "title": "Making things go bang: SKEmitterNode | Hacking with iOS",
  "desc": "Making things go bang: SKEmitterNode",
  "link": "https://hackingwithswift.com/read/20/4/making-things-go-bang-skemitternode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/90dlnvKUy3w" />

This is easily the best bit of the game, mostly because it involves even more particle systems. There are three things we need to create: a method to explode a single firework, a method to explode all the fireworks (which will call the single firework explosion method), and some code to detect and respond the device being shaken.

First, the code to explode a single firework. Put this somewhere in your game scene:

```swift
func explode(firework: SKNode) {
    if let emitter = SKEmitterNode(fileNamed: "explode") {
        emitter.position = firework.position
        addChild(emitter)
    }

    firework.removeFromParent()
}
```

You should be able to read that once and know exactly what it does: it creates an explosion where the firework was, then removes the firework from the game scene.

The `explodeFireworks()` method is next, and is only fractionally more complicated. It will be triggered when the user wants to set off their selected fireworks, so it needs to loop through the `fireworks` array (backwards again!), pick out any selected ones, then call `explode()` on it.

As I said earlier, the player's score needs to go up by more when they select more fireworks, so about half of the `explodeFireworks()` method is taken up with figuring out what score to give the player.

There's one small piece of extra complexity: remember, the `fireworks` array stores the firework container node, so we need to read the firework image out of its `children` array.

Enough talk – here's the code:

```swift
func explodeFireworks() {
    var numExploded = 0

    for (index, fireworkContainer) in fireworks.enumerated().reversed() {
        guard let firework = fireworkContainer.children.first as? SKSpriteNode else { continue }

        if firework.name == "selected" {
            // destroy this firework!
            explode(firework: fireworkContainer)
            fireworks.remove(at: index)
            numExploded += 1
        }
    }

    switch numExploded {
    case 0:
        // nothing – rubbish!
        break
    case 1:
        score += 200
    case 2:
        score += 500
    case 3:
        score += 1500
    case 4:
        score += 2500
    default:
        score += 4000
    }
}
```

As you can see, exploding five fireworks is worth 20x more points than exploding just one, hence the incentive to select groups by color!

There's one last thing to do before this game is complete, and that's to detect the device being shaken. This is easy enough to do because iOS will automatically call a method called `motionBegan()` on our game when the device is shaken. Well, it's a little more complicated than *that* – what actually happens is that the method gets called in <FontIcon icon="fa-brands fa-swift"/>`GameViewController.swift`, which is the `UIViewController` that hosts our SpriteKit game scene.

The default view controller doesn't know that it has a SpriteKit view, and certainly doesn't know what scene is showing, so we need to do a little typecasting. Once we have a reference to our actual game scene, we can call `explodeFireworks()`. Put this method just after the `prefersStatusBarHidden` property in <FontIcon icon="fa-brands fa-swift"/>`GameViewController.swift`:

```swift
override func motionBegan(_ motion: UIEvent.EventSubtype, with event: UIEvent?) {
    guard let skView = view as? SKView else { return }
    guard let gameScene = skView.scene as? GameScene else { return }
    gameScene.explodeFireworks()
}
```

That's it, your game is done. Obviously you can't shake your laptop to make the iOS Simulator respond, but you can use the keyboard shortcut <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>Z</kbd> to get the same result. If you're testing on your iPad, make sure you give it a good shake in order to trigger the explosions!

---

<TagLinks />