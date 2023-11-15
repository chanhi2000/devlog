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
    content: https://chanhi2000.github.io/crashcourse/kodeco-swift/6747815-uigesturerecognizer-tutorial-getting-started.html
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

---

## Using the UIPanGestureRecognizer

### Implementing the Panning Gesture

### Connecting the Panning Gesture to the Recognizer

### Letting the Image Views Accept Touches

---

## Adding Deceleration to the Images

### Easing Out Your Animations

---

## Pinch and Rotation Gestures

### Implementing the Pinch and Rotation Gestures

---

## Simultaneous Gesture Recognizers

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