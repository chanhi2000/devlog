---
lang: ko-KR
title: "Switch, case, animate: animate(withDuration:)"
description: "Article(s) > Switch, case, animate: animate(withDuration:)"
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
      content: "Article(s) > Switch, case, animate: animate(withDuration:)"
    - property: og:description
      content: "Switch, case, animate: animate(withDuration:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/15/03-switch-case-animate-animatewithduration.html
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
  "title": "Switch, case, animate: animate(withDuration:) | Hacking with iOS",
  "desc": "Switch, case, animate: animate(withDuration:)",
  "link": "https://hackingwithswift.com/read/15/3/switch-case-animate-animatewithduration",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/nrp6SZWbRlY" />

The `currentAnimation` property can have a value between 0 and 7, each one triggering a different animation. We're going to create a big `switch/case` block inside `tapped()`, but we're going to start small and work our way up – the `default` case will handle any values we don't explicitly catch.

This switch/case statement is going to go inside a new method of the `UIView` class called `animate(withDuration:)`, which is a kind of method you haven't seen before because it actually accepts two closures. The parameters we'll be using are how long to animate for, how long to pause before the animation starts, any options you want to provide, what animations to execute, and finally a closure that will execute when the animation finishes.

Update your `tapped()` method to this:

```swift
@IBAction func tapped(_ sender: UIButton) {
    sender.isHidden = true

    UIView.animate(withDuration: 1, delay: 0, options: [],
       animations: {
        switch self.currentAnimation {
        case 0:
            break

        default:
            break
        }
    }) { finished in
        sender.isHidden = false
    }

    currentAnimation += 1

    if currentAnimation > 7 {
        currentAnimation = 0
    }
}
```

::: note

Because we want to show and hide the “Tap” button, we need to make the `sender` parameter to that method be a `UIButton` rather than `Any`.

:::

All that code won't do anything yet, which is remarkable given that it's quite a lot! However, it has put us in a position where we can start dabbling with animations. But first, here's a breakdown of the code:

- When the method begins, we hide the `sender` button so that our animations don't collide; it gets unhidden in the completion closure of the animation.
- We call `animate(withDuration:)` with a duration of 1 second, no delay, and no interesting options.
- For the `animations` closure we *don’t* need to use `[weak self]` because there’s no risk of strong reference cycles here  – the closures passed to `animate(withDuration:)` method will be used once then thrown away.
- We switch using the value of `self.currentAnimation`. We need to use `self` to make the closure capture clear, remember. This `switch/case` does nothing yet, because both possible cases just call `break`.
- We use trailing closure syntax to provide our completion closure. This will be called when the animation completes, and its `finished` value will be true if the animations completed fully.
- As I said, the completion closure unhides the `sender` button so it can be tapped again.
- After the `animate(withDuration:)` call, we have the old code to modify and wrap `currentAnimation`.

If you run the app now and tap the button, you'll notice it doesn't actually hide and show as you might expect. This is because UIKit detects that no animation has taken place, so it calls the completion closure straight away.

---

<TagLinks />