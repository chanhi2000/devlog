---
lang: ko-KR
title: What is SwiftUI?
description: Article(s) > What is SwiftUI?
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > What is SwiftUI?
    - property: og:description
      content: What is SwiftUI?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-swiftui.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What is SwiftUI? | SwiftUI by Example",
  "desc": "What is SwiftUI?",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/what-is-swiftui", 
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI is a user interface toolkit that lets us design apps in a declarative way. That's a fancy way of saying that we tell SwiftUI how we want our user interface to look and work, and it figures out how to make that happen as the user interacts with it.

Declarative UI is best understood in comparison to imperative UI, which is what iOS developers were doing before iOS 13. In an imperative user interface we might make a function be called when a button was clicked, and inside the function we'd read a value and show a label – we regularly modify the way the user interface looks and works based on what's happening.

Imperative UI causes all sorts of problems, most of which revolve around _state_, which is another fancy term meaning “values we store in our code.” We need to track what state our code is in, and make sure our user interface correctly reflects that state.

If we have one screen with one Boolean property that affects the UI, we have two states: the Boolean might be on or off. If we have two Booleans, A and B, we now have four states:

- A is off and B is off
- A is on and B is off
- A is off and B is on
- A is on and B is on

And if we have three Booleans? Or five? Or integers, strings, dates, and more? Well, then we have lots more complexity.

If you've ever used an app that says you have 1 unread message no matter how many times you try to tell if you've read the darn thing, that's a state problem – that's an imperative UI problem.

In contrast, declarative UI lets us tell iOS about all possible states of our app at once. We might say if we're logged in show a welcome message but if we're logged out show a login button. We don't need to write code to move between those two states by hand – that's the ugly, imperative way of working!

Instead, we let SwiftUI move between user interface layouts for us when the state changes. We already told it what to show based on whether the user was logged in or out, so when we change the authentication state SwiftUI can update the UI on our behalf.

That's what it means by declarative: we aren't making SwiftUI components show and hide by hand, we're just telling it all the rules we want it to follow and leaving SwiftUI to make sure those rules are enforced.

But SwiftUI doesn't stop there – it also acts as a cross-platform user interface layer that works across iOS, macOS, tvOS, watchOS, and even visionOS. This means you can now learn one language and one layout framework, then deploy your code anywhere.

---

<TagLinks />