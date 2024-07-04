---
lang: ko-KR
title: What’s new in SwiftUI for iOS 18
description: We got new API for colors and gradients, more scrollview improvements, tab improvements, and more.
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content: We got new API for colors and gradients, more scrollview improvements, tab improvements, and more.
    - property: og:description
      content: What’s new in SwiftUI for iOS 18
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/whats-new-in-swiftui-for-ios-18.html
prev: /programming/swift/articles/README.md
date: 2024-06-21
isOriginal: false
cover: https://hackingwithswift.com/uploads/swiftui.jpg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="What’s new in SwiftUI for iOS 18 – Hacking with Swift"
  desc="We got new API for colors and gradients, more scrollview improvements, tab improvements, and more."
  url="https://hackingwithswift.com/articles/270/whats-new-in-swiftui-for-ios-18"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://hackingwithswift.com/uploads/swiftui.jpg"/>

---

This is another good year for SwiftUI, with another batch of scrollview improvements, some welcome macOS features, remarkable control over text rendering, and more – the team at Apple have a lot to be proud of, and many developers will breathe a sigh of relief as API such as fine-grained subview control is now public for all of us to use.

But there's also one major architectural change you need to be aware of, so let's start with that…

---

## View is now on the main actor

For a long time, the `View` protocol looked a bit like this:

```swift
protocol View {
    @MainActor var body: some View
}
```

That meant code in your view's `body` ran on the main actor, but code *elsewhere* in your view did not.

This allowed our views to do work across tasks naturally, but caused problems when using `@Observable` classes that ran on the main actor. For example, code like this simply wouldn't compile:

```swift
@Observable @MainActor
class ViewModel {
    var name = "Anonymous"
}

struct ContentView: View {
    @State private var viewModel = ViewModel()

    var body: some View {
        Text("Hello, \(viewModel.name)!")
    }
}
```

That would throw up "Call to main actor-isolated initializer 'init()' in a synchronous nonisolated context", which is a rather complex way of saying "your class says it must be on the main actor, but you're creating it away from the main actor."

When you rebuild your code with Xcode 16 that error goes away completely, and with no work from us – it's just gone. However, it's important to know *why*. You see, the `View` protocol now looks more like this:

```swift
@MainActor protocol View {
    var body: some View
}
```

The difference is small, but makes a huge difference: the `@MainActor` attribute moved from `body` up to the protocol itself, which means the `body` property *along with all other properties and methods we make* are run on the main actor.

You can see the impact with this sample code:

```swift
struct ContentView: View {
    var body: some View {
        Text("Hello, world!")
            .onAppear(perform: doSampleWork)
    }

    func doSampleWork() {
        Task {
            for i in 1...10_000 {
                print("Work 1-\(i)")
            }
        }

        Task {
            for i in 1...10_000 {
                print("Work 2-\(i)")
            }
        }
    }
}
```

Previously that would run both tasks at the same time, so you'd see "Work 1" and "Work 2" outputs being printed intermingled. However, now that `View` runs on the main actor, my whole view runs on the main actor, and therefore the `doSampleWork()` work method also runs on the main actor.

This means the onus is on *you* to make sure you push work off the main actor as necessary, otherwise you'll see a pretty dramatic decrease in performance.

So, the overall change is a welcome one: fewer errors for the most common work. However, it will create a little churn in the short term as you spin work off to other actors manually.

---

## On to the new APIs…

We got another batch of major improvements this year, delivering more scrollview power, incredible new animation effects, and better control over how we place subviews:

```component VPCard
{
  "title": "How to create custom text effects and animations | SwiftUI by Example",
  "desc": "How to create custom text effects and animations",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-custom-text-effects-and-animations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create zoom animations between views | SwiftUI by Example",
  "desc": "How to create zoom animations between views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-zoom-animations-between-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read user contacts with ContactAccessButton | SwiftUI by Example",
  "desc": "How to read user contacts with ContactAccessButton",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-read-user-contacts-with-contactaccessbutton.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create new colors by blending two other SwiftUI colors | SwiftUI by Example",
  "desc": "How to create new colors by blending two other SwiftUI colors",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a mesh gradient | SwiftUI by Example",
  "desc": "How to create a mesh gradient",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-mesh-gradient.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control the size of presented views | SwiftUI by Example",
  "desc": "How to control the size of presented views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-the-size-of-presented-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect when the size or position of a view changes | SwiftUI by Example",
  "desc": "How to detect when the size or position of a view changes",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read the size and position of a scrollview | SwiftUI by Example",
  "desc": "How to read the size and position of a scrollview",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-size-and-position-of-a-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to scroll to exact locations inside a scrollview | SwiftUI by Example",
  "desc": "How to scroll to exact locations inside a scrollview",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-scroll-to-exact-locations-inside-a-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect whether a scrollview is currently moving or is idle | SwiftUI by Example",
  "desc": "How to detect whether a scrollview is currently moving or is idle",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-whether-a-scrollview-is-currently-moving-or-is-idle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to position and style subviews that come from a different view | SwiftUI by Example",
  "desc": "How to position and style subviews that come from a different view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @State inside SwiftUI previews using @Previewable | SwiftUI by Example",
  "desc": "How to use @State inside SwiftUI previews using @Previewable",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-state-inside-swiftui-previews-using-previewable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

::: note

This list is currently incomplete; some of the new APIs didn't quite ship for seed 1, and some others aren't quite functioning well enough for me to talk about. Hopefully seed 2 or 3 will see improvements here.

:::

---

## Smaller improvements

Alongside those major features, we also received some smaller but still important adjustments:

- The `@Entry` macro makes it much easier to [create and use custom environment values](/explore/articles/hackingwithswift.com/swiftui/how-to-create-and-use-custom-environment-values.md)
- [`TabView` now has dedicated `Tab` children](/explore/articles/hackingwithswift.com/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview.md) (This sounds small, but the new tab layout needs to be handled carefully to ensure your app works great on both iOS and iPadOS!)
- We can now [compile Metal shaders before use in SwiftUI](/explore/articles/hackingwithswift.com/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md)
- We can now use [fully custom views for accessibility labels](/explore/articles/hackingwithswift.com/swiftui/how-to-set-custom-accessibility-labels-and-hints.md)
- [There's a new `.rotate` animation for SF Symbols](/explore/articles/hackingwithswift.com/swiftui/how-to-animate-sf-symbols.md)
- [How to activate different button behaviors when a modifier key is pressed](/explore/articles/hackingwithswift.com/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed.md)
- [How to lets users drag anywhere to move a window](/explore/articles/hackingwithswift.com/swiftui/how-to-lets-users-drag-anywhere-to-move-a-window.md)

That `@Entry` change alone is a real delight – it makes things like environment and preference key significantly easier.

---

## What's still missing?

We're now five years into SwiftUI, so you might expect the platform has reached maturity. However, there are a handful of omissions that continue to cause problems, and we can only hope these get addressed soon.

First, we still don't have any kind of WebKit or Safari integration. While a full `WebView` might perhaps be a lot of work, even some kind of `SafariView` to match `SFSafariViewController` would be *something*. I've filed feedback, I've talked to Apple's engineers in labs, and at this point I don't know what else to do. UIKit had `UIWebView` in its very first release – what do we need to get something similar in SwiftUI?

Second, working with the keychain remains incredibly hard. This API has always been problematic, but by ignoring it SwiftUI makes the problem worse – it's trivial to use `@AppStorage`, but doing so sacrifices essential user security. Sadly, we're in a state where the wrong choice is by far the easiest to reach for.

Third, we desperately need more control over remote images. SwiftUI for iOS 15 gave us the rather surprising `AsyncImageView` – still the only API that silently swallows errors, from what I can tell – but years on we haven't acquired any ability to adjust caching, retries, and more. Some configuration API similar to `defaultAppStorage()` would make a huge difference.

And finally, `TextEditor` still has no rich text support. I can imagine this being an extremely complex task, not least because it's clear the SwiftUI team want their text to retain meaningful metadata rather than just being blobs of attributes. However, this missing support limits where SwiftUI can be used, and I know many apps would benefit from adding more functionality here.

Those are just four ideas, and I know other folks have their own priorities. Please do continue to file feedback with Apple – I know it can feel like a bit of a black hole sometimes, but your feedback reports *are* read and discussed internally, and every time someone duplicates a request it's effectively one more vote for that feature.

SwiftUI is by far the best way to create apps for Apple's platforms, and this release continues to stretch its lead. Once we reach feature parity with UIKit – yes, `WKWebView` and `SFSafariViewController`, but also `DataScannerViewController`, list section index titles, and pretty much everything that still needs `@UIApplicationDelegateAdaptor` – then really there's nothing holding it back.

---

<TagLinks />