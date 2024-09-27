---
lang: ko-KR
title: "How to emit particles using CAEmitterLayer"
description: "Article(s) > How to emit particles using CAEmitterLayer"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to emit particles using CAEmitterLayer"
    - property: og:description
      content: "How to emit particles using CAEmitterLayer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-emit-particles-using-caemitterlayer.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CALayer - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/calayer/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to emit particles using CAEmitterLayer | CALayer - free Swift example code",
  "desc": "How to emit particles using CAEmitterLayer",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-emit-particles-using-caemitterlayer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
Believe it or not, iOS has a built-in particle system that works great in all UIKit apps and is immensely customizable. To get started you need to create a `CAEmitterLayer` object and tell it how to create particles: where it should create them, how big the emitter should be, and what types of particles should exist.

The "type of particles" part is handled by `CAEmitterCell`, which covers details like how fast to create, how long they should live, whether they should spin and/or fade out, what texture to use, and more. You can add as many `CAEmitterCells` to a `CAEmitterLayer` as you need.

Here's some example code to get you started. This creates particles of three different colors, all falling and spinning down from the top of the screen. The image "particle_confetti" is just a small white triangle that I drew by hand – you should replace that with something more interesting.

```swift
func createParticles() {
    let particleEmitter = CAEmitterLayer()

    particleEmitter.emitterPosition = CGPoint(x: view.center.x, y: -96)
    particleEmitter.emitterShape = .line
    particleEmitter.emitterSize = CGSize(width: view.frame.size.width, height: 1)

    let red = makeEmitterCell(color: UIColor.red)
    let green = makeEmitterCell(color: UIColor.green)
    let blue = makeEmitterCell(color: UIColor.blue)

    particleEmitter.emitterCells = [red, green, blue]

    view.layer.addSublayer(particleEmitter)
}

func makeEmitterCell(color: UIColor) -> CAEmitterCell {
    let cell = CAEmitterCell()
    cell.birthRate = 3
    cell.lifetime = 7.0
    cell.lifetimeRange = 0
    cell.color = color.cgColor
    cell.velocity = 200
    cell.velocityRange = 50
    cell.emissionLongitude = CGFloat.pi
    cell.emissionRange = CGFloat.pi / 4
    cell.spin = 2
    cell.spinRange = 3
    cell.scaleRange = 0.5
    cell.scaleSpeed = -0.05

    cell.contents = UIImage(named: "particle_confetti")?.cgImage
    return cell
}
```

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-emit-particles-using-skemitternode">How to emit particles using SKEmitterNode 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/example-code/games/how-to-advance-time-in-an-skemitternode-using-advancesimulationtime">How to advance time in an SKEmitterNode using advanceSimulationTime() 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a>
-->

:::

---

<TagLinks />