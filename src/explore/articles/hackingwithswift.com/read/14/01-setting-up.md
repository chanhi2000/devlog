---
lang: ko-KR
title: "Setting up"
description: "Article(s) > Setting up"
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
      content: "Article(s) > Setting up"
    - property: og:description
      content: "Setting up"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/14/01-setting-up.html
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
  "title": "Setting up | Hacking with iOS",
  "desc": "Setting up",
  "link": "https://hackingwithswift.com/read/14/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/uF_7ruu6m7c" />

It's time for another game, and we'll be using more of SpriteKit to build a whack-a-mole game, except with penguins because Whack-a-Penguin isn't trademarked. You're going to learn about `SKCropNode`, `SKTexture` and some more types of `SKAction`, and we'll also use more GCD to execute closures after a delay.

Create a new SpriteKit game project in Xcode, named Project14 and targeting landscape iPads, then delete most of the example code just like you did in project 11 – you want the same clean project, with no “Hello World” template content.

If you don’t remember all the steps, here’s the abridged version:

- Delete Actions.sks.
- Open GameScene.sks and delete the “Hello World” label.
- Change the scene’s anchor point to X:0 Y:0, its width to 1024 and its height to 768.

Finally, remove almost everything in <FontIcon icon="fa-brands fa-swift"/>`GameScene.swift` so that it looks like this:

```swift
import SpriteKit

class GameScene: SKScene {
    override func didMove(to view: SKView) {
    }

    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    }
}
```

I won’t be repeating those instructions again from now on.

Now download the files for this project from [GitHub (<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`)](https://github.com/twostraws/HackingWithSwift) and copy the assets from the Content folder into your Xcode project.

All set? Open up <FontIcon icon="fa-brands fa-swift"/>`GameScene.swift` and get whacking!

::: note Reminder

When working with SpriteKit projects I strongly recommend you use a device if possible. If you don’t have a physical iPad to hand, use the lowest-spec iPad simulator rather than something like the 12.9-inch iPad Pro – you'll get much slightly frame rates, making it much more suitable for testing.

:::

---

<TagLinks />