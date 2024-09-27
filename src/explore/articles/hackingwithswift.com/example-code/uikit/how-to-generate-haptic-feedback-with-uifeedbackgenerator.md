---
lang: ko-KR
title: "How to generate haptic feedback with UIFeedbackGenerator"
description: "Article(s) > How to generate haptic feedback with UIFeedbackGenerator"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to generate haptic feedback with UIFeedbackGenerator"
    - property: og:description
      content: "How to generate haptic feedback with UIFeedbackGenerator"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator.html
date: 2020-02-07
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to generate haptic feedback with UIFeedbackGenerator | UIKit - free Swift example code",
  "desc": "How to generate haptic feedback with UIFeedbackGenerator",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!--
iOS 10 introduced new ways of generating haptic feedback using predefined vibration patterns shared by all apps, thus helping users understand that various types of feedback carry special significance. The core of this functionality is provided by `UIFeedbackGenerator`, but that's just an abstract class – the three classes you really care about are `UINotificationFeedbackGenerator`, `UIImpactFeedbackGenerator`, and `UISelectionFeedbackGenerator`.

The first of these, `UINotificationFeedbackGenerator`, lets you generate feedback based on three system events: error, success, and warning. The second, `UIImpactFeedbackGenerator`, lets you generate light, medium, and heavy effects that Apple says provide a "physical metaphor that complements the visual experience." Finally, `UISelectionFeedbackGenerator` generates feedback that should be triggered when the user is changing their selection on screen, e.g. moving through a picker wheel.

**At this time, only the new Taptic Engine found in the iPhone 7 and iPhone 7 Plus support these APIs. Other devices silently ignore the haptic requests.**

To start trying these APIs yourself, create a Single View App template in Xcode, then replace the built-in `ViewController` class with this test harness:

```swift
import UIKit

class ViewController: UIViewController {
    var i = 0

    override func viewDidLoad() {
        super.viewDidLoad()

        let btn = UIButton()
        btn.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(btn)            

        btn.widthAnchor.constraint(equalToConstant: 128).isActive = true
        btn.heightAnchor.constraint(equalToConstant: 128).isActive = true
        btn.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        btn.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true

        btn.setTitle("Tap here!", for: .normal)
        btn.setTitleColor(UIColor.red, for: .normal)
        btn.addTarget(self, action: #selector(tapped), for: .touchUpInside)
    }

    @objc func tapped() {
        i += 1
        print("Running \(i)")

        switch i {
        case 1:
            let generator = UINotificationFeedbackGenerator()
            generator.notificationOccurred(.error)

        case 2:
            let generator = UINotificationFeedbackGenerator()
            generator.notificationOccurred(.success)

        case 3:
            let generator = UINotificationFeedbackGenerator()
            generator.notificationOccurred(.warning)

        case 4:
            let generator = UIImpactFeedbackGenerator(style: .light)
            generator.impactOccurred()

        case 5:
            let generator = UIImpactFeedbackGenerator(style: .medium)
            generator.impactOccurred()

        case 6:
            let generator = UIImpactFeedbackGenerator(style: .heavy)
            generator.impactOccurred()

        default:
            let generator = UISelectionFeedbackGenerator()
            generator.selectionChanged()
            i = 0
        }
    }
}
```

When you run that on your phone, pressing the "Tap here!" button cycles through all the vibration options in order.

One tip: because it can take a small amount of time for the system to prepare haptic feedback, Apple recommends you call the `prepare()` method on your generator before triggering the haptic effect. If you don't do this, and there *is* a slight delay between the visual effect and the matching haptic, it might confuse users more than it helps.

Although you can technically use a success notification feedback for whatever you want, doing so inappropriately may confuse users, particularly those who are heavily reliant on haptic feedback for device interaction. Apple specifically requests that you use them judiciously, that you avoid using the wrong haptic for a given situation, and that you remember not all devices support this new haptic feedback – you need to consider older iPhones too.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-haptic-effects-using-sensory-feedback">How to add haptic effects using sensory feedback 
/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve">How to modify haptic events over time using CHHapticParameterCurve 
/example-code/core-haptics/how-to-detect-whether-haptic-event-playback-is-supported">How to detect whether haptic event playback is supported 
/example-code/games/how-to-generate-shaped-random-numbers-using-gkgaussiandistribution">How to generate shaped random numbers using GKGaussianDistribution 
/example-code/system/how-to-generate-a-random-identifier-using-uuid">How to generate a random identifier using UUID</a>
-->

:::

---

<TagLinks />