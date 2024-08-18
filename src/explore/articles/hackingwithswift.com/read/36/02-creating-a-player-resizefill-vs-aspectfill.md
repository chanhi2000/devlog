---
lang: ko-KR
title: "Creating a player: resizeFill vs aspectFill"
description: "Article(s) > Creating a player: resizeFill vs aspectFill"
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
      content: "Article(s) > Creating a player: resizeFill vs aspectFill"
    - property: og:description
      content: "Creating a player: resizeFill vs aspectFill"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/36/02-creating-a-player-resizefill-vs-aspectfill.html
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
  "title": "Creating a player: resizeFill vs aspectFill | Hacking with iOS",
  "desc": "Creating a player: resizeFill vs aspectFill",
  "link": "https://hackingwithswift.com/read/36/2/creating-a-player-resizefill-vs-aspectfill",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

The first thing we're going to do in this game is clear out what's there and get our player on the screen so we can be sure everything is working. This is an iPhone game which means we need to be able to handle various device sizes: iPhone 5s, iPhone 8, iPhone 8 Plus, and iPhone X sizes all need to be catered for.

So: start by performing *most* of the usual cleaning job for Xcode’s SpriteKit template – delete Actions.sks and remove the majority of the source code from <FontIcon icon="fa-brands fa-swift"/>`GameScene.swift`, leaving only empty `didMove(to:)` and `touchesBegan()` methods.

This time, though, we need to modify `GameScene.sks` a little differently because we’re targeting iPhone rather than iPad. Open it inside the scene editor, then delete the “Hello World” label, and change its anchor point to X:0 Y:0, but *don’t* change its size.

OK, that’s it for cleaning. The next step is to add the assets for the game into the right places in the project. So, in the assets you downloaded, look in the GFX folder and drag all the files from there into your asset catalog – you'll see I've provided 1x, 2x and 3x versions of each piece of art, which means you could expand this to support earlier devices if you wanted.

Now right-click on your project group in the Project Navigator pane – that's not the blue "Project36" at the top, but the yellow "Project36" directly beneath it. Choose New Group, then name it "Content" and hit Enter. Copy into there the remaining assets you downloaded – coin.wav, explosion.wav, music.m4a, PlayerExplosion.sks and spark.png.

That's all the assets configured for this game, so let's look at the first pieces of code. If you’ve done your cleaning job correctly it should look like this:

```swift
import SpriteKit

class GameScene: SKScene {

    override func didMove(to view: SKView) {

    }

    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    }
}
```

To make sure our game is working OK, we're going to start by creating the player. I've provided three different player sprites for you that make it look like the propeller is spinning around. We're going to need to reference the player throughout the game, so create a property for it now by adding this to your `GameScene` class:

```swift
var player: SKSpriteNode!
```

By the time it's finished, our game is going to need to create lots of different elements, so rather than clutter up `didMove(to:)` to handle everything we're going to use a common programming methodology called Composed Methods, which essentially just means "make each method do one small thing, then combine them together as needed." In our case, that means we're going to have lots of methods to create things in our game, then call them individually in `didMove(to:)`.

For creating the player, we're going to create a sprite node out of the first frame in the player animation, "player-1". We're then going to position the player most of the way up the screen and most of the way to the left – this gives them enough time to respond when the game starts. To get the propeller animation we're going to pass an array of textures to the `animate(with:)` SpriteKit action, cycling through each frame every 0.01 seconds. That's actually faster than our game draws, so it essentially means "as fast as possible."

Here's the code - put this into <FontIcon icon="fa-brands fa-swift"/>`GameScene.swift`, below `touchesBegan()`:

```swift
func createPlayer() {
    let playerTexture = SKTexture(imageNamed: "player-1")
    player = SKSpriteNode(texture: playerTexture)
    player.zPosition = 10
    player.position = CGPoint(x: frame.width / 6, y: frame.height * 0.75)

    addChild(player)

    let frame2 = SKTexture(imageNamed: "player-2")
    let frame3 = SKTexture(imageNamed: "player-3")
    let animation = SKAction.animate(with: [playerTexture, frame2, frame3, frame2], timePerFrame: 0.01)
    let runForever = SKAction.repeatForever(animation)

    player.run(runForever)
}
```

Now add this to `didMove(to:)`:

```swift
createPlayer()
```

Press Play in Xcode to build and run your app, and you should see the player – although there’s a good chance it’s tiny on the screen. The reason for this becomes clear if you open `GameScene.sks` (not <FontIcon icon="fa-brands fa-swift"/>`GameScene.swift`!) in Xcode. If you look in the Attributes inspector you'll see your game scene is configured to be 750x1334, which isn’t much help for us here.

At the time of writing, there are several iPhone sizes: iPhone SE, iPhone 8, iPhone 8 Plus, iPhone XS, and iPhone XS Max. Sometimes you want your game to look the same on all devices, but other times you’ll want slightly different layouts on each device.

This is all handled using the `scaleMode` property of your game scene, which gets – open <FontIcon icon="fa-brands fa-swift"/>`GameViewController.swift` and look for this line:

```swift
scene.scaleMode = .aspectFill
```

That means "scale the scene so that it fits the view, allowing to be cropped if needed." Because the scene is created for iPhone 8-sized devices, `.aspectFill` will cause everything to appear a little smaller on iPhone 5-sized devices, and appear a little bigger on Plus-sized devices.

If you wanted everything to appear about the same size, you could try this instead:

```swift
scene.scaleMode = .resizeFill
```

That now means "just make the game scene the same size as the view it is inside." The choice really depends on how you want to build your game, but in this project we’ll stick with `.aspectFill`.

You *do* need to change the GameScene.sks size so that it’s 375x667, though, otherwise everything will be unplayably small!

---

<TagLinks />