---
lang: ko-KR
title: My App Crashed, Now What?
description: 🕊️Kodeco - Swift > My App Crashed, Now What?
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🕊️Kodeco - Swift > My App Crashed, Now What?
    content: My App Crashed, Now What?
  - property: og:title
    content: My App Crashed, Now What?
  - property: og:description
    content: 🕊️Kodeco - Swift > My App Crashed, Now What?
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kodeco-swift/6334294-my-app-crashed-now-what.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: My App Crashed, Now What?
desc: In this tutorial, you’ll learn what makes your app crash and how to fix it when it does. 
link: https://www.kodeco.com/6334294-my-app-crashed-now-what
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-core-concepts-ios-9b6476c1af44d264387282a9dc162550a9aaf8d51f0636206d7079b8820da7be.svg
color: rgba(135, 99, 210, 0.2)
```

---


## Getting Started

---

## Tools to Help You Fix and Resolve Crashes

### Breakpoints

### Console Log

### Variables View

---

## The Infamous nil

---

## Exhibit A: Dark Force – Force Unwrapping

### Proving Your Case

### Finding the Right Solution

---

## Exhibit B: Weak Grip — Weak References

### Understanding the Crash

---

## Exhibit C: Unexpected Updates — Invalid Table Updates

### A Wider View of the Problem

### Narrowing Down the Problem

---

## Assertions

__Assertions__ are manually-triggered crashes you can insert into your own code. The obvious question that comes to mind is: Why would you write code to crash your own app?

That’s a very good question. However illogical it may seem, you’ll understand why this is helpful in a moment. :]

Imagine you’re writing a complicated piece of code, and there are some flows in your logic that no one should reach because reaching them means something fatally wrong has happened.

These situations are ideal for __assertions__. They’ll help you, or anyone else using your code, discover that something’s not working properly _during development_.

### Writing Your Own Reusable Code

Writing a framework is also a good example where assertions can be useful. You can raise an assertion if another developer provides irrational input to your framework that won’t perform as expected.

An example of when this is handy is in <FontIcon icon="fas fa-dove"/>`ForceUnwrappingViewController.swift`. Nothing will happen in `showResult(result:)` if `result` doesn’t cast to `Int` or `String`, and whoever is using your code won’t know what’s going on right away. Of course they’re doing something wrong, but wouldn’t it be awesome if the code was smart enough to tell them what?

To try it out, add this block of code at the end of `showResult(result:)`:

```swift
else {
  assertionFailure("Only Int or Strings are accepted in this function")
}
```

You raise an assertion if `result` isn’t an `Int` or a `String`. Add this line of code at the end of `calculatePressed(_:)` to see how it works:

```swift
showResult(result: UIView())
```

Here, you send `showResult(result:)` a very unexpected value… a `UIView`!

Build and run, open the <FontIcon icon="iconfont icon-select"/>`[Force Unwrapping]` screen and press the <FontIcon icon="iconfont icon-select"/>`[Calculate]` button.

![App crashed on the assertion call](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_33-650x428.png)

Your app crashed in <FontIcon icon="fas fa-dove"/>`ForceUnwrappingViewController.swift` on line 65.

As expected, the crash line is the assertion call, but you haven’t fully answered the question. Should crashing code be in the final app on the AppStore if the developer doesn’t cover all cases?

The answer to the question is: It doesn’t matter. :]

The assertions do indeed exist in your final product, but it’ll be as if they aren’t there at all.

Assertions only work while your app is building under the <FontIcon icon="iconfont icon-select"/>`[debug]` configuration. Assertions won’t do anything under the <FontIcon icon="iconfont icon-select"/>`[release]` configuration, which is how you’ll build your app when you upload it on the AppStore.

Want to see it for yourself? You’ll try it out in the next step.

### Changing Your Build Configuration

Click the <FontIcon icon="iconfont icon-select"/>`[CrashGallery]` target in the upper-left corner of your Xcode window to try it out. Select <FontIcon icon="iconfont icon-select"/>`[Edit Scheme]` from the drop-down menu, then choose <FontIcon icon="iconfont icon-select"/>`[Run]` from the left-hand side of the new window and select <FontIcon icon="iconfont icon-select"/>`[Release]` from <FontIcon icon="iconfont icon-select"/>`[Build Configuration]`.

![Changing your build configuration](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_34.gif)

Build and run, then press the <FontIcon icon="iconfont icon-select"/>`[Calculate]` button once more.

![Sum 108 calculated and written on-screen](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_9-281x500.png =240x)

No crashes, no assertions. It worked normally. Your code didn’t do anything when it got an unexpected value, so this step had no effect.

But also note that the release configuration isn’t for debugging. You’ll find that when you debug with <FontIcon icon="iconfont icon-select"/>`[Release]` selected, Xcode won’t behave as expected. It might show the wrong line executing, the <FontIcon icon="iconfont icon-select"/>`[Variables View]` might not show any values or the <FontIcon icon="iconfont icon-select"/>`[Console Log]` may not evaluate expressions you print.

Use this configuration if you want to measure performance, not for code tracing and debugging.

Assertions are a handy tool to help your fellow developers or yourself fix things before you forget them. But don’t overuse them, as they can become more annoying than helpful.

::: note Note

Use `preconditionFailure(_:file:line:)` or `fatalError(_:file:line:)` instead of `assertionFailure(_:file:line:)` to make your app crash under the release configuration.

:::

---

## Where to Go From Here?

Download the finished project for this tutorial by using the __Download Materials__ button at the top or bottom of this page.

You’ve seen how crashes are a normal part of developing your app. You should even see them as an opportunity to learn more about the framework you’re using.

Do your best to get the most information about why a crash happened. There are multiple ways to fix each crash, and some solutions may be better than others. The more you understand the problem, the better match the solution you choose will be.

You can learn more about debugging from the video course, [Beginning iOS Debugging](https://www.raywenderlich.com/4681-beginning-ios-debugging).

I hope you enjoyed this tutorial! If you have any questions or comments, please join the forum discussion below. :]

---

<TagLinks />