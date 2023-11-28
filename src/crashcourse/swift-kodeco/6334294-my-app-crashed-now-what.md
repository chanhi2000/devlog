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
    content: https://chanhi2000.github.io/crashcourse/swift-kodeco/6334294-my-app-crashed-now-what.html
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

App crashes are a natural part of the development cycle. The challenge is to understand the real reason behind the crash and apply the proper fix, not just hide the crash.

In this tutorial, you’ll look at some crash examples, investigate them, understand why they happened and, finally, fix them once and for all.

Before you get started, it’s valuable to know some details about Swift so you understand more about the errors you face:

- Swift uses __static typing__, meaning the compiler knows the type of a value at compile time.
- It ensures you initialize variables before using them.
- It also notifies you of possible `nil` values and makes sure you’re aware of how you use them in your code.

You’ll understand more about these points as you fix the project. Now, it’s time to get busy.

---

## Getting Started

Download the starter project for this tutorial by using the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this page. You’ll find a project called `CrashGallery`.

![Crash Gallery main screen](https://koenig-media.raywenderlich.com/uploads/2019/11/Simulator-Screen-Shot-iPhone-8-2019-11-02-at-13.26.24-281x500.png =240x)

The project shows some common scenarios that cause your app to crash. It’s built specifically to demonstrate these scenarios and help you understand them.

The gallery has three exhibits on display with different crash scenarios:

1. __Force Unwrapping__: Shows some cases of improper use of `nil` values.
2. __Weak References__: Explains the reference chain in your UI from the storyboard and how you could accidentally break the reference chain and crash the app.
3. __Invalid Table Updates__: Shows an example of a common logical discrepancy with UITableView that will crash your app.

You’re going to work through each of these crash scenarios to learn how to find them and how to fix them when you do. But before you start looking at crashes and their causes, take a moment to review three important tools to help you track down crashes when they happen.

---

## Tools to Help You Fix and Resolve Crashes

Pinpointing the cause of a crash can be tricky. Luckily, there are some helpful tools that make this job much easier. Your first step in this tutorial is to get to know three of the most important.

### Breakpoints

The first handy tool you’ll cover is __breakpoints__, which make your app pause its execution on a specified line so you can investigate the status of the objects at that point.

![To create a breakpoint on any line, simply click on the line number in your source file where you want the execution to stop.](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_2.gif)

But what if you’re not sure which line you should look at?

Whenever an app that ran from Xcode crashes, the debugger shows you the line that crashed. Sometimes, however, that line won’t be meaningful. There’s another kind of breakpoint that’s handy for situations like this: the __exception breakpoint__.

The exception breakpoint automatically stops the app when a crash happens and shows you the line that caused it. Now, that’s not always the line you need to fix. The crash might be due to a mistake a few lines earlier, but this line _is_ where the app says “Hey… I can’t proceed anymore.”

To add an exception breakpoint, open the <FontIcon icon="iconfont icon-select"/>`[Debug navigator]` and click the <FontIcon icon="iconfont icon-select"/>`[+]` in the navigator’s lower left corner. Choose <FontIcon icon="iconfont icon-select"/>`[Exception Breakpoint…]` from resulting menu. Click anywhere outside the resulting dialog to set the breakpoint.

::: note Note

Exception breakpoints are triggered by things going wrong in the Objective-C runtime, which in most cases means things internal to UIKit. Most Swift crashes will make the debugger stop on the actual line you’re looking for.

:::

![Enabling an exception breakpoint](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_3.gif)

### Console Log

The __Console Log__ is at the bottom of the Xcode window. It’ll display plenty of useful logs while the app is running. Whenever your app crashes, you’ll find a log message that contains information on the nature of the crash, whether it was an index out of range exception, a `nil` reference or something else.

The log also contains information on warnings, so pay attention to it even if your app isn’t crashing. It could highlight something that can help you make your app better. :]

This window will be completely empty while the app isn’t running. It’ll start showing logs when you run the app.

### Variables View

The third valuable tool for investigating crashes is the __Variables View__. Similar to the __Console Log__, it’ll be completely empty when the app isn’t running — but it’ll also stay empty when your app is executing.

The view will only show the values of the variables in the current scope when your execution pauses, which goes hand-in-hand with __breakpoints__.

![Variables View area](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_5-1-650x441.png)

The __Console Log__ also shows the values of variables, but the __Variables View__ is more visual and shows you all the variables instead of just one. It’s more useful in many cases, so it’s good to be familiar with both.

Console Log printing the value of a variable that is also present in the Variables View.

![Console Log printing a variable value](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_6-650x141.png)

Variables View can show more than just text information. It can show the visual content of a UI element.

![Variables View showing the visual content of a `UIView`](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_7.gif)

Now that you know the tools you need to fix this broken app, build and run the starter app and take a look at the first exhibit.

---

## The Infamous `nil`

Swift introduced __optionals__, which mean an object or an expression may have a value, or it may not. You can’t assume that you’ll always have a value. This is the most common reason for your app to crash.

In the first exhibit, you’ll see some of these situations, but it’s good to understand first what Xcode has to offer to help you identify where your crashes are, what’s happening and why. That’s quite a bit of detective work.

---

## Exhibit A: Dark Force – Force Unwrapping

Build and run the app, then open the first item — titled __Force Unwrapping__ — in the gallery screen.

![Force Unwrapping Simulator Screen](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_8-281x500.png =240x)

This screen’s task is to compute the sum of the numbers written at the top. The top text view has numbers from the television show [“Lost”](https://www.imdb.com/title/tt0636286/?ref_=ttep_ep18) entered and separated by commas.

The sum of the numbers will appear on the screen when you tap the <FontIcon icon="iconfont icon-select"/>`[Calculate]` button. Give it a shot.

![Sum 108 calculated and written on-screen](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_9-281x500.png =240x)

Great, so it works as you intended. Now, play around with it and add `,two` at the end of the numbers sequence:

![Updated sequence text](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_10-480x123.png)

Tap <FontIcon icon="iconfont icon-select"/>`[Calculate]` and see what happens… It crashes.

![App crashed in `calculateSum(items:)`](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_11-1-480x269.png)

The crash is in <FontIcon icon="fas fa-dove"/>`ForceUnwrappingViewController.swift` on line number 49. Have a look at what Xcode shows you — there’s a red highlight on the line that triggered the crash.

The __Console Log__ has information on the crash and the __Variables View__ shows the values of `item` and `finalValue` within the scope of `calculateSum(items:)`.

The value of `item` is "two", so when you converted it to an `Int` it failed, giving a `nil` value. The force unwrapping by the `!` operator caused the crash.

### Proving Your Case

Don’t take this as a fact; question it and make sure that’s really what caused the crash. When you fix a crash, you don’t want to do it by trial and error. You want to be 110% sure you’re fixing what’s broken.

To test your theory, type this command in the __Console Log__:

```llvm
po Int(item)
```

The `po` command you entered before the expression stands for print object, which is an LLDB command to print the description of an object. You can also use `p`, but the result in the console will look slightly different.

The console output will be `nil`:

![Console output for the expression](https://koenig-media.raywenderlich.com/uploads/2019/11/Screen-Shot-2019-11-02-at-6.14.10-PM-480x189.png)

So `Int(item)` is `nil`, and when you execute `po Int(item)!` you get some additional information.

![Console Log with an exception description](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_13-480x261.png)

This result is the same as the error written on the crash, so you’re definitely right about the source of the crash.

But wait! How does it work for the other values?

Add a breakpoint on the same line that caused the crash and restart the app. Remember to write `,two` before you calculate the sum.

![Breakpoint stop on `calculateSum(items:)`](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_14-650x365.png)

The value of `item` on the breakpoint is `4` and the result of `Int(item)` gives a value instead of `nil`.

![console outputs](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_15-480x231.png)

### Finding the Right Solution

`Int(_:)` worked when the value of `item` is 4, but it won’t work when it’s `two`. In other words, it works when the value is a `string` with numeric digits, but not with alphabetical letters, even when they form the name of the number.

To fix this crash, replace the following line of code in `calculateSum(items:)`:

```swift
finalValue += Int(item)!
```


With this block of code:

```swift
if let intValue = Int(item) {
  finalValue += intValue
}
```

The code above checks that the result of `Int(item)` isn’t `nil` before using it, which makes it safe from crashes.

Disable the breakpoint by clicking on the blue arrow and it will become semi-transparent blue. Build and run and add any kind of text you want in the text field after the numbers.

![Dummy text entered in the text field](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_16-281x500.png =240x)

It doesn’t crash anymore, but is it completely fixed? Instead of adding the numbers, delete the last one and try again.

![Removing the last number from the list](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_30.gif =240x)

The app crashed again in <FontIcon icon="fas fa-dove"/>`ForceUnwrappingViewController.swift` on line 58.

![The crash line in Xcode.](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_31-650x428.png)

The relevant message from the log is:

```
Could not cast value of type 'Swift.String' (0x7fff879c3f88) to 'Swift.Int' (0x7fff879c1e48).
```

The crashing line is forcing a cast on `result` as an `Int`, while the value you provided is a `String`. That means `valueToShow` is `nil` and when you force unwrap it, the app crashes, similar to the crash above that you have already fixed.

`calculateSum(items:)` will only show the sum if the total is more than 100. Otherwise, the message should be __“Sum is too low”__.

This is a straightforward fix. Replace the code inside `showResult(result:)` with this block of code:

```swift
if let intValue = result as? Int {
  sumLabel.text = "\(intValue)"
} else if let stringValue = result as? String {
  sumLabel.text = stringValue
}
```

Here, you check if you can cast `result` to an `Int`, then create a `String` of its value and add it to the label. You use the value as it is if you can cast it to a `String`.

Build and run. You’ll see the error message, __“Sum is too low”__ when the total is below 100.

![Message appearing properly when sum is below 100](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_32-281x500.png =240x)

---

## Exhibit B: Weak Grip — Weak References

The second crash you’re going to fix involves an unusual way of showing and hiding views.

![Second screen, weak references.](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_17.gif =240x)

The __Weak References__ screen is a simple form with two steps, where the second step is only active if the answer to the first question is “yes.”

::: note Note

There are many ways you can achieve the same result other than the one shown in this app. The intention is to show a made-up scenario that causes a crash, not to make a form that works well.

:::

When you turn off the switch, the second question disappears, but when you turn it on again… there’s the crash.

![Crashing line for the second screen](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_18-650x365.png)

The app crashed in <FontIcon icon="fas fa-dove"/>`WeakReferencesViewController.swift` line 37.

`WeakReferencesViewController` has three items:

1. An `IBOutlet` to the `stackView`.
2. An `IBOutlet` to the `secondQuestionView`.
3. An `IBAction` to `switchValueChanged(_:)`, where you change the value of the switch to remove the `secondQuestionView` or to add it back at the bottom of the `stackView`.

There are two ways to figure out why Xcode is showing `nil`: Explore the values from the __Variables View__ or check the values of the two variables found on the crashing line from the __Console Log__.

![Values shown in Variables View and Console Log](https://koenig-media.raywenderlich.com/uploads/2019/11/Screen-Shot-2019-11-02-at-7.21.15-PM-480x145.png)

From what the debugger output says, the value of `secondQuestionView` is `nil`, but why? Add a breakpoint on the first line of `switchValueChanged(_:)` and restart the app to start investigating.

Build and run.

![Breakpoint on first line, both values are present.](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_20-650x365.png)

`secondQuestionView` isn’t `nil` when you turn off the switch. However, when you turn it on again after the view disappears, it’s already `nil`.

### Understanding the Crash

The reason for that is because of the __reference chain__ in `UIKit`. Each view has a __strong reference__ to the subviews presented inside it. As long as `secondQuestionView` is in the on-screen view hierarchy, something will be holding a strong reference to it.

So when you removed the `secondQuestionView` from its superview, you broke that tie. And looking at the `IBOutlet` definition of `secondQuestionView`, you’ll find it’s marked as `weak`. Thus, it deallocated from memory and its reference changed to `nil` since no one was holding it to prevent it from doing so.

Once you remove the `weak` keyword from the `secondQuestionView` declaration, the crash will disappear. You can do the same for `stackView` as a precaution, but it will have no effect on the crash since you never remove the `stackView` from the superview.

Remove the `weak` keywords, then build and run to try the scenario again.

![Second view disappears and appears normally without crashing](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_23.gif =240x)

You’ll see that the form works fine now. The view appears and disappears as required.

---

## Exhibit C: Unexpected Updates — Invalid Table Updates

The third crash is slightly different from the previous ones. It’s more of a data mismatch.

Open the third item, called __Invalid Table Updates__, on the gallery screen to start your investigation.

![Invalid Table Updates screen](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_24-281x500.png =240x)

This screen has a table view with four cells. Each cell has its number written on it. There’s also a small button in the top-right corner to add more cells.

Go ahead and press that button. As you may have expected, there’s a crash. But… which line is crashing? And what’s all that in the log?

![Crash line is the declaration of `AppDelegate` and crash log is long](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_25-650x428.png)

Xcode stopped in <FontIcon icon="fas fa-dove"/>`AppDelegate.swift` on line 32.

Add an exception breakpoint to your project, then build and run to see the difference.

![Third screen crash with exception breakpoint added](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_26-650x428.png)

This time, Xcode stopped in <FontIcon icon="fas fa-dove"/>`InvalidTableUpdatesViewController.swift` on line 37. The log is empty and has no information provided because the breakpoint stopped right before the exception happened. This is a different kind of crash than the previous ones.

When you press the <FontIcon icon="iconfont icon-select"/>`[Continue]` button, Xcode will return to the class declaration line in <FontIcon icon="fas fa-dove"/>`AppDelegate.swift` and the log will have the crash information.

![Continue execution button](https://koenig-media.raywenderlich.com/uploads/2019/11/AppCrashed_27-480x137.png)

The log contains information about the crash and the stack trace information for when the crash happened. Most of the time, you won’t need the stack trace information when you are debugging from Xcode and have your exception breakpoint enabled. Take a look at the crash information.

```
*** Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'attempt to insert row 4 into section 0, but there are only 4 rows in section 0 after the update.
```

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

Download the finished project for this tutorial by using the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this page.

You’ve seen how crashes are a normal part of developing your app. You should even see them as an opportunity to learn more about the framework you’re using.

Do your best to get the most information about why a crash happened. There are multiple ways to fix each crash, and some solutions may be better than others. The more you understand the problem, the better match the solution you choose will be.

You can learn more about debugging from the video course, [Beginning iOS Debugging](https://www.raywenderlich.com/4681-beginning-ios-debugging).

I hope you enjoyed this tutorial! If you have any questions or comments, please join the forum discussion below. :]

---

[download-material]: https://koenig-media.raywenderlich.com/uploads/2020/01/CrashGallery.zip

<TagLinks />