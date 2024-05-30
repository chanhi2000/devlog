---
lang: ko-KR
title: Working with presentations
description: Article(s) > Working with presentations
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
      content: Article(s) > Working with presentations
    - property: og:description
      content: Working with presentations
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-presentations.html
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-an-inspector-to-any-view.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Working with presentations | SwiftUI by Example",
  "desc": "Working with presentations",
  "link": "https://hackingwithswift.com/quick-start/swiftui/working-with-presentations",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s declarative approach to programming means that we don’t create and present alert and action sheets in the same way as we did in UIKit. Instead, we define the conditions in which they should be shown, tell it what they should look like, then leave it to figure the rest out for itself.

This is all accomplished using modifiers, which attach new UI to our view that will be shown when a condition is satisfied. You can attach as many as you want, and they effectively lie in wait watching until their condition becomes true, at which point they show their UI. For example, you might toggle a Boolean inside a button press, which triggers an alert to show.

You can attach presentations to your main view or any of its children – even to the button that adjusts your state so the presentation triggers. It’s a subtle distinction, but it’s important to understand that these presentations aren’t attached to the button because it’s a button – i.e., that doesn’t in any way make the alert be shown because the button was tapped. Instead, we’re attaching it to our view hierarchy so that SwiftUI is aware that it might be shown at any point.


::: details Similar solutions…

```component VPCard
{
  "title": "Working with containers | SwiftUI by Example",
  "desc": "Working with containers",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-containers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with state | SwiftUI by Example",
  "desc": "Working with state",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-state.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with forms | SwiftUI by Example",
  "desc": "Working with forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-forms.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with lists | SwiftUI by Example",
  "desc": "Working with lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Presenting an alert | SwiftUI by Example",
  "desc": "Presenting an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/presenting-an-alert.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />