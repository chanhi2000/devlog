---
lang: ko-KR
title: "How to use UIStepper to let users change number values"
description: "Article(s) > How to use UIStepper to let users change number values"
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
      content: "Article(s) > How to use UIStepper to let users change number values"
    - property: og:description
      content: "How to use UIStepper to let users change number values"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-uistepper-to-let-users-change-number-values.html
date: 2019-03-28
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
  "title": "How to use UIStepper to let users change number values | UIKit - free Swift example code",
  "desc": "How to use UIStepper to let users change number values",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-uistepper-to-let-users-change-number-values",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
`UIStepper` is one of those controls that doesn’t get used often, which is a shame – it’s trivial to add, and helps users select a value more accurately than a `UISlider`.

Here’s some code to help you try it out:

```swift
let stepper = UIStepper()
stepper.minimumValue = 0
stepper.maximumValue = 10
stepper.value = 5
```

That tells iOS to let the stepper move from 0 to 10 (inclusive), starting at 0. By default the `autorepeat` property of steppers is set to true, which means the user can press and hold to increment values rather than tapping repeatedly.

Next, add some code to position your stepper where you want it. This places it at the top of the safe area, aligned to the center:

```swift
stepper.translatesAutoresizingMaskIntoConstraints = false
view.addSubview(stepper)

stepper.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor).isActive = true
stepper.centerXAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerXAnchor).isActive = true
```

Finally, connect an `@objc` method to the `valueChanged` event like this:

```swift
stepper.addTarget(self, action: #selector(stepperChanged), for: .valueChanged)
```

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let 
/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview">How to limit the number of characters in a UITextField or UITextView 
/quick-start/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups">What’s the difference between async let, tasks, and task groups? 
/quick-start/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more">How to manipulate an AsyncSequence using map(), filter(), and more 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName()</a>
-->

:::

---

<TagLinks />