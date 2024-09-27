---
lang: ko-KR
title: "How to detect keyboard input using pressesBegan() and pressesEnded()"
description: "Article(s) > How to detect keyboard input using pressesBegan() and pressesEnded()"
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
  - ios-13.4
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect keyboard input using pressesBegan() and pressesEnded()"
    - property: og:description
      content: "How to detect keyboard input using pressesBegan() and pressesEnded()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended.html
date: 2024-08-21
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
  "title": "How to detect keyboard input using pressesBegan() and pressesEnded() | UIKit - free Swift example code",
  "desc": "How to detect keyboard input using pressesBegan() and pressesEnded()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.4

<!-- TODO: 작성 -->

<!--
UIKit lets us detect hardware keyboard input from the user through the methods `pressesBegan()` and `pressesEnded()`, both of which are passed a set of `UIPress` instances that contain key codes and modifiers we can inspect. If you implement one of these two methods, you should call `super` to forward the message on for any keyboard events you don’t handle.

For example, if you had a dice game you could make it so that the user could press R to roll the dice or H to show a help screen, all by implementing this method in a view controller:

```swift
override func pressesBegan(_ presses: Set<UIPress>, with event: UIPressesEvent?) {
    guard let key = presses.first?.key else { return }

    switch key.keyCode {
    case .keyboardR:
        print("Roll dice")
    case .keyboardH:
        print("Show help")
    default:
        super.pressesBegan(presses, with: event)
    }
}
```

You might see folks always calling `super.pressesBegan()` even when they handle the keypress, but that’s likely to cause problems because UIKit will pass the keypress up the responder chain even after you’ve handled it - several objects may act on the same keypress.

The `pressesEnded()` method works in much the same way: you can override it in a view or view controller, read which key was released, then pass the event on to `super` if you don’t handle it. For example, if you had a quiz app where you wanted the user to proceed when they press and release the spacebar, you’d write this:

```swift
override func pressesEnded(_ presses: Set<UIPress>, with event: UIPressesEvent?) {
    guard let key = presses.first?.key else { return }

    switch key.keyCode {
    case .keyboardSpacebar:
        print("Continue the quiz…")
    default:
        super.pressesEnded(presses, with: event)
    }
}
```

Rather than using the `keyCode` constants, you can also read the exact letters that were tapped with the `characters` property. 

If you combine `pressesBegan()` and `pressesEnded()`, you can effectively detect when the user is holding down a key. For example, this creates a custom `AVPlayerViewController` subclass that plays a movie only while spacebar is being held down:

```swift
import AVKit
import UIKit

class CustomMovieController: AVPlayerViewController {
    override func pressesBegan(_ presses: Set<UIPress>, with event: UIPressesEvent?) {
        guard let key = presses.first?.key else { return }

        switch key.keyCode {
        case .keyboardSpacebar:
            player?.play()
        case .keyboardLeftArrow:
            player?.seek(to: .zero)
        default:
            super.pressesBegan(presses, with: event)
        }
    }

    override func pressesEnded(_ presses: Set<UIPress>, with event: UIPressesEvent?) {
        guard let key = presses.first?.key else { return }

        switch key.keyCode {
        case .keyboardSpacebar:
            player?.pause()
        default:
            super.pressesEnded(presses, with: event)
        }
    }
}
```

To try that out, create an `AVPlayer` item with a movie you want to play, then pass it in. This will show the movie player when the screen is tapped:

```swift
import AVKit
import UIKit

class ViewController: UIViewController {
     override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        let videoURL = URL(string: "https://bit.ly/aryashake")
        let vc = CustomMovieController()
        vc.player = AVPlayer(url: videoURL!)
        present(vc, animated: true)
    }
}
```

(Yes, that’s my dog. Yes, she knows she’s beautiful.)



---

## Reading modifier keys such as Cmd, Option, and Shift

Along with the key that was pressed, UIKit also sends us any modifier keys that were held down such as Option and Shift. These are provided as a set, so you can check for particular keys using `contains()` then one of the `UIKeyModifierFlags` such as `.control`.

For example, this creates a view controller with a red rectangle in the center, and if you press Shift then either left arrow or right arrow the rectangle rotates in the appropriate direction:

```swift
class ViewController: UIViewController {
    let rectangle = UIView(frame: CGRect(x: 0, y: 0, width: 256, height: 256))

    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(rectangle)
        rectangle.backgroundColor = .red
    }

    override func viewDidLayoutSubviews() {
        rectangle.center = view.center
    }

    override func pressesBegan(_ presses: Set<UIPress>, with event: UIPressesEvent?) {
        guard let key = presses.first?.key else { return }
        guard key.modifierFlags.contains(.shift) else { return }

        UIView.animate(withDuration: 0.5) {
            switch key.keyCode {
            case .keyboardLeftArrow:
                self.rotate(by: -.pi / 2)
            case .keyboardRightArrow:
                self.rotate(by: .pi / 2)
            default:
                super.pressesBegan(presses, with: event)
            }
        }
    }

    func rotate(by amount: CGFloat) {
        rectangle.transform = rectangle.transform.concatenating(CGAffineTransform(rotationAngle: amount))
    }
}
```

If you are using `characters` to read the actual letters that get tapped, you might find it useful to try `charactersIgnoringModifiers` – it sends back the same string, except ignoring any modifier keys. For example, if the user press <kbd>Shift</kbd>+n `characters` will be set to “N” but `key.charactersIgnoringModifiers` will be set to “n” because it ignores the Shift key.

---

## Reading all presses

There’s one last thing you might want to do, which is to read all the current keyboard presses that are active when a new one comes in. This would be useful if you wanted to check if the user was holding down two or three specific keys at the same time.

To do this, read the `event?.allPresses` property in either `pressesBegan()` or `pressesEnded()`, and evaluate the keys however you want. For example, this prints a message when the keys “a”, “b”, and “c” are held down:

```swift
override func pressesBegan(_ presses: Set<UIPress>, with event: UIPressesEvent?) {
    let keys = event?.allPresses.compactMap { $0.key?.characters }.sorted()
    if keys == ["a", "b", "c"] {
        print("Key combination pressed!")
    }
}
```

**Tip:** If you’re using Swift 5.2 or later, you can write `event?.allPresses.compactMap(\.key?.characters).sorted()`.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput">How to create custom text input using UIKeyInput 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />