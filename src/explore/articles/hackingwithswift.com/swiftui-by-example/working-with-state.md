---
lang: ko-KR
title: Working with state
description: Article(s) > Working with state
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > Working with state
    - property: og:description
      content: Working with state
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-state.html
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
  "title": "Working with state | SwiftUI by Example",
  "desc": "Working with state",
  "link": "https://hackingwithswift.com/quick-start/swiftui/working-with-state",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

All apps change state. For example, the user might have tapped a button to reveal more information, they might have entered some text into a text box, or chosen a date from a date picker – all things that involve the app moving from one state to another.

The problem with state is that it's messy: when it changes we need to spot that change and update our layouts to match. That might sound simple at first, but as our state grows and grows it becomes increasingly hard – it's easy to forget to update one thing, or to get the update order wrong so that the user interface state doesn't match what was expected.

SwiftUI solves this problem by removing state from our control. When we add properties to our views they are effectively inert – they have values, sure, but changing them doesn't do anything. But if we added the special `@State` attribute before them, SwiftUI will automatically watch for changes and update any parts of our views that use that state.

When it comes to *referring* to some state – for example, telling a state property to change when a toggle switch changes – we can't refer to the property directly. This is because Swift would think we just want to read the value right now rather than saying “please also update this value as things change.” Fortunately, SwiftUI's solution is to place a dollar sign before the property name, which lets us refer to the underlying data binding rather than its current value. I know this is a little confusing at first, but it becomes second nature after an hour or two.

Remember, SwiftUI is *declarative*, which means we tell it all layouts for all possible states up front, and let it figure out how to move between them when properties change. We call this *binding* – asking SwiftUI to synchronize changes between a UI control and an underlying property.

Working with state will cause you a few headaches at first if you're used to a more imperative style of programming, but trust me – once you're through that it's clear sailing.

::: details Similar solutions…

```component VPCard
{
  "title": "Working with containers | SwiftUI by Example",
  "desc": "Working with containers",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-containers.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with presentations | SwiftUI by Example",
  "desc": "Working with presentations",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-presentations.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with forms | SwiftUI by Example",
  "desc": "Working with forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-forms.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with lists | SwiftUI by Example",
  "desc": "Working with lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-lists.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />