---
lang: ko-KR
title: "How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”"
description: "Article(s) > How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”"
    - property: og:description
      content: "How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” | Language - free Swift example code",
  "desc": "How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”",
  "link": "https://hackingwithswift.com/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
Swift 4 changed the way Swift interacts with Objective-C in a way that will impact the code of most developers. Fortunately, there are a couple of fixes available, neither of which take too long to implement.

First, let’s take a look at what’s changed and why. In Swift 3 all methods from a class were automatically compiled so that they were available both to Swift code and to Objective-C code, which maximized compatibility.

However, that had a cost. Here’s what Doug Gregor wrote when proposing the change for Swift 4:

<blockquote>
There is a cost for each Objective-C entry point, because the Swift compiler must create a "thunk" method that maps from the Objective-C calling convention to the Swift calling convention and is recorded within Objective-C metadata. This increases the size of the binary (preliminary tests on some Cocoa[Touch] apps found that 6-8% of binary size was in these thunks alone, some of which are undoubtedly unused), and can have some impact on load time (the dynamic linker has to sort through the Objective-C metadata for these thunks).

</blockquote>
So, all these thunk methods had to be generated whether or not they were used, which wasn’t ideal. As of Swift 4, this has been dramatically scaled down so that these thunks are generated only when absolutely required, which means any time you write Swift code that needs to be called from Objective-C you will need to tell Swift what to do.

If you don’t think this happens often, here are some examples:

```swift
navigationItem.leftBarButtonItem = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(addSong))

let tap = UITapGestureRecognizer(target: self, action: #selector(userDoubleTapped))

let timer = Timer.scheduledTimer(timeInterval: 10, target: self, selector: #selector(chooseNewSong), userInfo: nil, repeats: true)

performSelector(inBackground: #selector(checkWikipedia), with: nil)

NotificationCenter.default.addObserver(self, selector: #selector(userLeavingApp), name: UIApplication.willResignActiveNotification, object: nil)

let lookup = UIMenuItem(title: "Applause", action: #selector(applaudGreatMusic))

undoManager?.registerUndo(withTarget: self, selector: #selector(undoPlaying), object: nil)
```

All seven of those examples ask some Objective-C code (e.g. `NotificationCenter` or `Timer`) to call our Swift code, which means all seven of those will stop working in Swift 4 unless you take action.

The error you’ll see looks like this: “Argument of '#selector' refers to instance method 'addSong()' that is not exposed to Objective-C,” and your code will refuse to build until you choose a solution. The key there is the `#selector` part: that’s the giveaway that you’ll need to use `@objc` with whatever method is being called.

So, that’s the problem and why it even exists. Let’s turn to the solutions, and there are two to choose from.

First, you can mark individual methods using the `@objc` attribute, like this:

```swift
class Printer {
    @objc func print() {
        // code
    }
}
```

That instructs the Swift compiler to make an Objective-C thunk for that one method. This means you retain nearly all the performance benefits of the new Swift 4 approach – the thunk is generated only when needed.

The second option is to use the `@objcMembers` attribute on your whole class or struct, like this:

```swift
@objcMembers class ViewController: UIViewController {
    // code
}
```

That tells Swift to automatically generate Objective-C thunks for all methods in the class, so you don’t need to mark them individually using `@objc`.

Now, there are two important times when `@objc` isn’t needed:

1. When you’re using `@IBAction` to connect an event from a storyboard. The `@IBAction` attribute automatically implies `@objc`, so you don’t need both.
<li>When you’re implementing a method from an Objective-C protocol, that automatically implies `@objc` because it doesn’t make sense otherwise.

Remember, if `@objc` is required but not present, Xcode will refuse to build your code – it’s not the kind of thing you can just forget.

Honestly, I think it’s sad that one of the world’s most progressive languages is having to look backwards like this, but it looks like we’re stuck with this change.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-a-selector">What is a selector? 
/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string">How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<string>’”</string> 
/quick-start/swiftui/how-to-fix-missing-argument-for-parameter-content-in-call">How to fix “Missing argument for parameter 'content' in call” 
/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type">How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _’” 
/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text">How to fix “Cannot convert value of type 'String' to expected argument type 'Text'"</a>
-->

:::

---

<TagLinks />