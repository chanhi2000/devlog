---
lang: ko-KR
title: "What is key-value observing?"
description: "Article(s) > What is key-value observing?"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is key-value observing?"
    - property: og:description
      content: "What is key-value observing?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-key-value-observing.html
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
  "title": "What is key-value observing? | Language - free Swift example code",
  "desc": "What is key-value observing?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-key-value-observing",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Key-value observing is the ability for Swift to attach code to variables, so that whenever the variable is changed the code runs. It’s similar to property observers (`willSet` and `didSet` ), except KVO is for adding observers *outside* of the type definition.

KVO isn’t terribly nice in pure Swift code, because it relies on the Objective-C runtime – you need to use `@objc` classes that inherit from `NSObject`, then mark each of your properties with `@objc dynamic`.

For example, we could create a `Person` class like this:

```swift
@objc class Person: NSObject {
    @objc dynamic var name = "Taylor Swift"
}

let taylor = Person()
```

You could then observe that user’s name changing like this:

```swift
taylor.observe(\Person.name, options: .new) { person, change in
    print("I'm now called \(person.name)")
}
```

That asks Swift to watch for new values coming in, then prints the person’s name as soon as the new value is set.

To try it out, just change the person’s name to something else:

```swift
taylor.name = "Justin Bieber"
```

That will print “I’m now called Justin Bieber.”

Although KVO is unpleasant in pure Swift code, it’s better when working with Apple’s own APIs – they are all automatically both `@objc` and `dynamic` because they are written in Objective-C. 

However, one warning: even though large parts of UIKit might work with KVO, this is a coincidence rather than a promise – Apple make no guarantees about UIKit remaining KVO-compatible in the future.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-detect-and-respond-to-key-press-events">How to detect and respond to key press events 
/quick-start/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed">How to activate different button behaviors when a modifier key is pressed 
/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded() 
/example-code/strings/how-to-calculate-the-rot13-of-a-string">How to calculate the ROT13 of a string 
/example-code/uikit/how-to-use-uikeycommand-to-add-keyboard-shortcuts">How to use UIKeyCommand to add keyboard shortcuts</a>
-->

:::

---

<TagLinks />