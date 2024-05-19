---
lang: ko-KR
title: How to recommend another app using appStoreOverlay()
description: Article(s) > How to recommend another app using appStoreOverlay()
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
      content: Article(s) > How to recommend another app using appStoreOverlay()
    - property: og:description
      content: How to recommend another app using appStoreOverlay()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-recommend-another-app-using-appstoreoverlay.html
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
  "title": "How to recommend another app using appStoreOverlay() | SwiftUI by Example",
  "desc": "How to recommend another app using appStoreOverlay()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-recommend-another-app-using-appstoreoverlay",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us a dedicated modifier that can recommend other apps on the App Store, which is a great way to cross-sell to users – “if you liked this, you’ll also like *that*”, and so on. This is particularly helpful if you’re using App Clips, where you can recommend the full app from your clip once your user has performed their primary action.

This modifier needs some state to watch that will determine whether the App Store overlay is active or not, along with an `SKOverlay.AppConfiguration` that determines which app to recommend.

::: important

`appStoreOverlay()` is not available on macOS.

:::

For example, this will recommend a particular app when the button is pressed:

```swift
struct ContentView: View {
    @State private var showRecommended = false

    var body: some View {
        Button("Show Recommended App") {
            showRecommended.toggle()
        }
        .appStoreOverlay(isPresented: $showRecommended) {
            SKOverlay.AppConfiguration(appIdentifier: "1440611372", position: .bottom)
        }
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-recommend-another-app-using-appstoreoverlay-1~dark.mp4" />

::: note

You need to import the StoreKit framework to use `SKOverlay`.

:::


::: details Similar solutions…

```component VPCard
{
  "title": "How to mask one view with another | SwiftUI by Example",
  "desc": "How to mask one view with another",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mask-one-view-with-another.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to force one gesture to recognize before another using highPriorityGesture() | SwiftUI by Example",
  "desc": "How to force one gesture to recognize before another using highPriorityGesture()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to synchronize animations from one view to another with matchedGeometryEffect() | SwiftUI by Example",
  "desc": "How to synchronize animations from one view to another with matchedGeometryEffect()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run code when your app launches | SwiftUI by Example",
  "desc": "How to run code when your app launches",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-code-when-your-app-launches.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect when your app moves to the background or foreground with scenePhase | SwiftUI by Example",
  "desc": "How to detect when your app moves to the background or foreground with scenePhase",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />