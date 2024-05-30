---
lang: ko-KR
title: How to continue an NSUserActivity in SwiftUI
description: Article(s) > How to continue an NSUserActivity in SwiftUI
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
      content: Article(s) > How to continue an NSUserActivity in SwiftUI
    - property: og:description
      content: How to continue an NSUserActivity in SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-continue-an-nsuseractivity-in-swiftui.html
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
  "title": "How to continue an NSUserActivity in SwiftUI | SwiftUI by Example",
  "desc": "How to continue an NSUserActivity in SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-continue-an-nsuseractivity-in-swiftui",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has a dedicated `onContinueUserActivity()` modifier that can catch a variety of `NSUserActivity` types –&nbsp;clicks from the web, launches from Spotlight or Siri, and more. Previously you might have handled this in your `AppDelegate` using something like `application(_:continue:restorationHandler:)`, but SwiftUI’s approach is more fine-grained and lets us divide functionality more easily.

To implement this, first create a function that will accept an `NSUserActivity`. You don’t need to do this inside your `App` struct, but it would make sense to do so because you can then route it wherever you need in the rest of your program.

For example, this function checks to see whether we’re being passed in data from Spotlight, and if so pulls out the unique identifier so you can look it up in your data source:

```swift
func handleSpotlight(_ userActivity: NSUserActivity) {
    if let id = userActivity.userInfo?[CSSearchableItemActivityIdentifier] as? String {
        print("Found identifier \(id)")
    }
}
```

::: note

That doesn’t need to check the `activityType` property, because it will be filtered by SwiftUI in our next code.

:::

Now you can attach that to your main app’s view by modifying your `App` struct like this:

```swift
WindowGroup {
    ContentView()
        .onContinueUserActivity(CSSearchableItemActionType, perform: handleSpotlight)
}
```

Of course, that’s just the bare bones of handling a user activity – you’ve detected the activity and your code has been run, but now you need to do the actual work of responding to the event somehow.

If you’re not sure where to start, you should probably make your `handleSpotlight()` set some shared state in your program that drives your UI, for example causing a detail view to present.

::: details Similar solutions…

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Frequently asked questions about SwiftUI | SwiftUI by Example",
  "desc": "Frequently asked questions about SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/frequently-asked-questions-about-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Ambiguous reference to member 'buildBlock()'” | SwiftUI by Example",
  "desc": "How to fix “Ambiguous reference to member 'buildBlock()'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-ambiguous-reference-to-member-buildblock.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add Metal shaders to SwiftUI views using layer effects | SwiftUI by Example",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />