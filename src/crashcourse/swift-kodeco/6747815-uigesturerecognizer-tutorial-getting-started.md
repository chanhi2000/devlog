---
lang: ko-KR
title: UIGestureRecognizer Tutorial - Getting Started
description: 🕊️Kodeco - Swift > UIGestureRecognizer Tutorial - Getting Started
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🕊️Kodeco - Swift > UIGestureRecognizer Tutorial - Getting Started
    content: UIGestureRecognizer Tutorial - Getting Started
  - property: og:title
    content: UIGestureRecognizer Tutorial - Getting Started
  - property: og:description
    content: 🕊️Kodeco - Swift > UIGestureRecognizer Tutorial - Getting Started
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/swift-kodeco/6747815-uigesturerecognizer-tutorial-getting-started.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: UIGestureRecognizer Tutorial - Getting Started
desc: In this tutorial, you’ll learn how to configure UIGestureRecognizer objects and how to create custom recognizers in code.
link: https://www.kodeco.com/6747815-uigesturerecognizer-tutorial-getting-started
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-user-interface-ios-21d0f43f2b43d30763411dc88f25ae51608b428e8a186f1cd5468dcf58496168.svg
color: rgba(135, 99, 210, 0.2)
```

::: note Update note

Ryan Ackermann updated this tutorial for Xcode 11, Swift 5 and iOS 13. Caroline Begbie and Brody Eller wrote earlier updates and Ray Wenderlich wrote the original.

:::

In iOS, gestures like taps, pinches, pans or rotations are used for user input. In your app, you can react to gestures, like a tap on button, without ever thinking about how to detect them. But in case you want to use gestures on views that don’t support them, you can easily do it with the built-in `UIGestureRecognizer` classes.

In this tutorial, you’ll learn how to add gesture recognizers to your app, both within the storyboard editor in Xcode and programmatically.

You’ll do this by creating an app where you can move a monkey and a banana around by dragging, pinching and rotating with the help of gesture recognizers.

You’ll also try out some cool extra features like:

- Adding deceleration for movement.
- Setting dependencies between gesture recognizers.
- Creating a custom `UIGestureRecognizer` so you can tickle the monkey.

This tutorial assumes you’re familiar with the basic concepts of __storyboards__. If you’re new to them, you may wish to check out our [storyboard](https://www.raywenderlich.com/5055364-ios-storyboards-getting-started) tutorials first.

The monkey just gave you the thumbs-up gesture, so it’s time to get started! :]

Getting Started

## Getting Started

To get started, click the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this tutorial. Inside the zip file, you’ll find two folders: <FontIcon icon="iconfont icon-folder"/>`begin` and <FontIcon icon="iconfont icon-folder"/>`end`.

Open the <FontIcon icon="iconfont icon-folder"/>`begin` folder in Xcode, then build and run the project.

You should see the following in your device or simulator:

![Screen with a monkey and a](https://koenig-media.raywenderlich.com/uploads/2019/11/monkey_pinch_01-281x500.png =240x)

---

## UIGestureRecognizer Overview

Before you get started, here’s a brief overview of why `UIGestureRecognizers` are so handy and how to use them.

Detecting gestures required a lot more work before `UIGestureRecognizers` were available. If you wanted to detect a swipe, for example, you had to register for notifications — like `touchesBegan`, `touchesMoved` and `touchesEnded` — on every touch in a `UIView`. This created subtle bugs and inconsistencies across apps because each programmer wrote slightly different code to detect those touches.

In iOS 3.0, Apple came to the rescue with `UIGestureRecognizer` classes. These provide a default implementation to detect common gestures like taps, pinches, rotations, swipes, pans and long presses. Using them not only saves a ton of code, but it also makes your apps work properly. Of course, you can still use the old touch notifications if your app requires them.

To use `UIGestureRecognizer`, perform the following steps:

1. __Create a gesture recognizer__: When you create a gesture recognizer, you specify a target and action so the gesture recognizer can send you updates when the gesture starts, changes or ends.
2. __Add the gesture recognizer to a view__: You associate each gesture recognizer with one, and only one, view. When a touch occurs within the bounds of that view, the gesture recognizer will check if it matches the type of touch it’s looking for. If it finds a match, it notifies the target.

You can perform these two steps programmatically, which you’ll do later in this tutorial. But it’s even easier to do with the storyboard editor, which you’ll use next.

---

## Using the UIPanGestureRecognizer

Open <FontIcon icon="iconfont icon-file"/>`Main.storyboard`. Click <FontIcon icon="iconfont icon-select"/>`[+]` button at the top to open the Library.

Inside the __Library__ panel, look for the __pan gesture recognizer__ object and drag it onto the monkey image view. This creates both the pan gesture recognizer and its association with the monkey image view:

![Implementing the pan gesture recognizer](https://koenig-media.raywenderlich.com/uploads/2019/11/monkey_pinch_02.gif)

You can verify the connection by clicking on the monkey image view, looking at the __Connections inspector__ in <FontIcon icon="iconfont icon-select"/>`[View > Inspectors > Show Connections Inspector]`, and making sure the pan gesture recognizer is in the `gestureRecognizers`‘s __Outlet Collection__.

![Verifying the connection between the monkey and the pan gesture recognizer](https://koenig-media.raywenderlich.com/uploads/2019/11/monkey_pinch_03-1-650x389.png)

The begin project connected two other gesture recognizers for you: the __Pinch Gesture Recognizer__ and __Rotation Gesture Recognizer__. It also connected the pan, pinch and rotation gesture recognizers to the banana image view.

So why did you associate the `UIGestureRecognizer` with the image view instead of the view itself?

You could connect it to the view if that makes the most sense for your project. But since you tied it to the monkey, you know that any touches are within the bounds of the monkey. If this is what you want, you’re good to go.

If you want to detect touches beyond the bounds of the image, you’ll need to add the gesture recognizer to the view itself. But note that you’ll need to write additional code to check if the user is touching within the bounds of the image itself and to react accordingly.

Now that you’ve created the pan gesture recognizer and associated it with the image view, you have to write the action so something actually happens when the pan occurs.

### Implementing the Panning Gesture

Open <FontIcon icon="fas fa-dove"/>`ViewController.swift` and add the following method right below `viewDidLoad()`, inside the `ViewController`:

```swift
@IBAction func handlePan(_ gesture: UIPanGestureRecognizer) {
  // 1
  let translation = gesture.translation(in: view)

  // 2
  guard let gestureView = gesture.view else {
    return
  }

  gestureView.center = CGPoint(
    x: gestureView.center.x + translation.x,
    y: gestureView.center.y + translation.y
  )

  // 3
  gesture.setTranslation(.zero, in: view)
}
```

The `UIPanGestureRecognizer` calls this method when it first detects a pan gesture, then continuously as the user continues to pan and one last time when the pan completes — usually when the user’s finger lifts.

Here’s what’s going on in this code:

1. The `UIPanGestureRecognizer` passes itself as an argument to this method. You can retrieve the amount the user’s finger moved by calling `translation(in:)`. You then use that amount to move the center of the monkey the same distance.
2. Note that instead of hard-coding the monkey image view into this method, you get a reference to the monkey image view by calling `gesture.view`. This makes your code more generic so that you can re-use this same routine for the banana image view later on.
3. It’s important to set the translation back to zero once you finish. Otherwise, the translation will keep compounding each time and you’ll see your monkey move rapidly off the screen!

Now that this method is complete, you’ll hook it up to the `UIPanGestureRecognizer`.

### Connecting the Panning Gesture to the Recognizer

In the __document outline__ for <FontIcon icon="iconfont icon-file"/>`Main.storyboard`, control-drag from the monkey’s __pan gesture recognizer__ to the __view controller__. Select `handlePan`: from the pop-up.

![Connecting the `handlePan` method to `UIPanGestureRecognizer`](https://koenig-media.raywenderlich.com/uploads/2019/11/monkey_pinch_04.gif)

At this point your __Connections inspector__ for the __pan gesture recognizer__ should look like this:

![Current state of Connections Inspector](https://koenig-media.raywenderlich.com/uploads/2019/11/monkey_pinch_05.png)

Build and run and try to drag the monkey. It doesn’t work?! This is because Xcode disables touches by default on views that normally don’t accept touches — like image views.

### Letting the Image Views Accept Touches

Fix this by selecting both image views, opening the __Attributes inspector__ and checking __User Interaction Enabled__.

![Selecting the User Interaction Enabled checkbox](https://koenig-media.raywenderlich.com/uploads/2019/11/monkey_pinch_06.png)

Build and run again. This time, you can drag the monkey around the screen!

![Dragging the monkey around the screen](https://koenig-media.raywenderlich.com/uploads/2019/11/monkey_pinch_07-1.gif)

Notice that you still can’t drag the banana because you need to connect its own __pan gesture recognizer__ to `handlePan(_:)`. You’ll do that now.

1. Control-drag from the banana __pan gesture recognizer__ to the __view controller__ and select `handlePan`:.
2. Double-check to make sure you’ve checked __User Interaction Enabled__ on the banana as well.

Build and run. You can now drag both image views across the screen. It’s pretty easy to implement such a cool and fun effect, eh?

![Dragging both images](https://koenig-media.raywenderlich.com/uploads/2019/11/monkey_pinch_08.gif)

---

## Adding Deceleration to the Images

Apple apps and controls typically have a bit of deceleration before an animation finishes. You see this when scrolling a web view, for example. You’ll often want to use this type of behavior in your apps.

There are many ways of doing this. The approach you’ll use for this tutorial produces a nice effect without much effort. Here’s what you’ll do:

1. Detect when the gesture ends.
2. Calculate the speed of the touch.
3. Animate the object moving to a final destination based on the touch speed.

And here’s how you’ll accomplish those goals:

- __To detect when the gesture ends__: Multiple calls to the gesture recognizer’s callback occur as the gesture recognizer’s state changes. Examples of those states are: `began`, `changed` or `ended`. You can find the current state of a gesture recognizer by looking at its `state` property.
- __To detect the touch velocity__: Some gesture recognizers return additional information. For example, `UIPanGestureRecognizer` has a handy method called `velocity(in:)` that returns, you guessed it, the velocity!

::: note Note

You can view a full list of the methods for each gesture recognizer in [the API guide](https://developer.apple.com/documentation/uikit/uipangesturerecognizer).

:::

### Easing Out Your Animations

Start by adding the following to the bottom of `handlePan(_:)` in <FontIcon icon="fas fa-dove"/>`ViewController.swift`:

```swift
guard gesture.state == .ended else {
  return
}

// 1
let velocity = gesture.velocity(in: view)
let magnitude = sqrt((velocity.x * velocity.x) + (velocity.y * velocity.y))
let slideMultiplier = magnitude / 200

// 2
let slideFactor = 0.1 * slideMultiplier
// 3
var finalPoint = CGPoint(
  x: gestureView.center.x + (velocity.x * slideFactor),
  y: gestureView.center.y + (velocity.y * slideFactor)
)

// 4
finalPoint.x = min(max(finalPoint.x, 0), view.bounds.width)
finalPoint.y = min(max(finalPoint.y, 0), view.bounds.height)

// 5
UIView.animate(
  withDuration: Double(slideFactor * 2),
  delay: 0,
  // 6
  options: .curveEaseOut,
  animations: {
    gestureView.center = finalPoint
})
```

This simple deceleration equation uses the following strategy:

1. Calculates the length of the velocity vector (_i.e._ the magnitude).
2. Decreases the speed if the length is `< 200`. Otherwise, it increases it.
3. Calculates a final point based on the velocity and the slideFactor.
4. Makes sure the final point is within the view’s bounds
5. Animates the view to the final resting place.
6. Uses the __ease out__ animation option to slow the movement over time.

Build and run to try it out. You should now have some basic but nice deceleration! Feel free to play around with it and improve it. If you come up with a better implementation, please share it in the forum discussion at the end of this article.

![Dragging animations with deceleration](https://koenig-media.raywenderlich.com/uploads/2019/11/monkey_pinch_09.gif)

---

## Pinch and Rotation Gestures

Your app is coming along great so far, but it would be even cooler if you could scale and rotate the image views by using pinch and rotation gestures as well!

The begin project gives you a great start. It created `handlePinch(_:)` and `handleRotate(_:)` for you. It also connected those methods to the monkey image view and the banana image view. Now, you’ll complete the implementation.

### Implementing the Pinch and Rotation Gestures

Open <FontIcon icon="fas fa-dove"/>`ViewController.swift`. Add the following to `handlePinch(_:)`:

```swift
guard let gestureView = gesture.view else {
  return
}

gestureView.transform = gestureView.transform.scaledBy(
  x: gesture.scale,
  y: gesture.scale
)
gesture.scale = 1
```

Next add the following to `handleRotate(_:)`:

```swift
guard let gestureView = gesture.view else {
  return
}

gestureView.transform = gestureView.transform.rotated(
  by: gesture.rotation
)
gesture.rotation = 0
```

Just like you got the translation from the `UIPanGestureRecognizer`, you get the scale and rotation from the `UIPinchGestureRecognizer` and `UIRotationGestureRecognizer`.

Every view has a transform applied to it, which gives information on the rotation, scale and translation that the view should have. Apple has many built-in methods to make working with a transform easier. These include `CGAffineTransform.scaledBy(x:y:)` to scale a given transform and `CGAffineTransform.rotated(by:)` to rotate a given transform.

Here, you use these methods to update the view’s transform based on the user’s gestures.

Again, since you’re updating the view each time the gesture updates, it’s very important to set the scale and rotation back to the default state so you don’t have craziness going on.

Now, hook these methods up in the storyboard editor. Open <FontIcon icon="iconfont icon-file"/>`Main.storyboard` and perform the following steps:

1. As you did previously, connect the two pinch gesture recognizers to the view controller’s `handlePinch:`.
2. Connect the two rotation gesture recognizers to the view controller’s `handleRotate:`.

Your view controller connections should now look like this:

![View controller with connections](https://koenig-media.raywenderlich.com/uploads/2017/07/Screen-Shot-2017-07-27-at-4.30.25-PM.png)

Build and run on a device, if possible, because pinches and rotations are hard to do on the simulator.

If you are running on the simulator, hold down the <kbd>Option</kbd> key and drag to simulate two fingers. Then hold down <kbd>Shift</kbd> and <kbd>Option</kbd> at the same time to move the simulated fingers together to a different position.

You can now scale and rotate the monkey and the banana!

Monkey and banana respond to pinch and rotate gestures

---

## Simultaneous Gesture Recognizers

You may notice that if you put one finger on the monkey and one on the banana, you can drag them around at the same time. Kinda cool, eh?

However, you’ll notice that if you try to drag the monkey around and in the middle of dragging, bring down a second finger to pinch to zoom, it doesn’t work. By default, once one gesture recognizer on a view “claims” the gesture, other gesture recognizers can’t take over.

However, you can change this by overriding a method in the `UIGestureRecognizer` delegate.

### Allowing Two Gestures to Happen at Once

---

## Programmatic UIGestureRecognizers

---

## Setting UIGestureRecognizer Dependencies

---

## Creating Custom UIGestureRecognizers

---

## “Tickling” the Monkey

### Managing the Gesture’s State

### Implementing Your Custom Recognizer

---

## Where to Go From Here?

Download the completed version of the project using the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this tutorial.

Congrats, you’re now a master of gesture recognizers — both built-in and custom ones! Touch interaction is such an important part of iOS devices and `UIGestureRecognizer` is the key to adding easy-to-use gestures beyond simple button taps.

I hope you enjoyed this tutorial! If you have any questions or comments, please join the discussion below.

---

[download-material]: https://koenig-media.raywenderlich.com/uploads/2020/01/MonkeyPinch.zip