---
lang: ko-KR
title: "How to add a button to a navigation bar using storyboards"
description: "Article(s) > How to add a button to a navigation bar using storyboards"
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
      content: "Article(s) > How to add a button to a navigation bar using storyboards"
    - property: og:description
      content: "How to add a button to a navigation bar using storyboards"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-button-to-a-navigation-bar-using-storyboards.html
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
  "title": "How to add a button to a navigation bar using storyboards | UIKit - free Swift example code",
  "desc": "How to add a button to a navigation bar using storyboards",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-button-to-a-navigation-bar-using-storyboards",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
Once you’ve placed a view controller inside a navigation controller, you’ll see that Interface Builder simulates a navigation bar at the top of that view controller. If you select it, what you actually select is the navigation item for that controller – the same thing you would get if you were manipulating its `navigationItem` property.

You can add a `UIBarButtonItem` directly to that navigation item if you want, then connect it to up to a method in your code. To try it out, look in the object library for Bar Button Item, then drag it over the simulated navigation bar. As you move over the left and right sides you should see those slots glow blue signaling that you can drop there, but you can also add more than one item in which case you’ll see insertion lines appear showing whether the new button will be added before or after existing buttons.

Drop a button on the right-hand side of the navigation bar, then switch to the assistant editor so we can connect it to some code. Ctrl-drag from your new bar button item into your source code, and when you release your mouse button change Connection from “Outlet” to “Action”. Give it a name - e.g. “saveTapped” – and Xcode will generate a method that will be called when the button is tapped.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar 
/example-code/xcode/how-to-use-storyboard-references-to-simplify-your-storyboards">How to use storyboard references to simplify your storyboards 
/example-code/uikit/how-to-customize-a-view-controllers-back-button-on-a-navigation-bar-backbarbuttonitem">How to customize a view controller’s back button on a navigation bar: backBarButtonItem 
/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards">SwiftUI vs Interface Builder and storyboards 
/example-code/uikit/how-to-use-dependency-injection-with-storyboards">How to use dependency injection with storyboards</a>
-->

:::

---

<TagLinks />