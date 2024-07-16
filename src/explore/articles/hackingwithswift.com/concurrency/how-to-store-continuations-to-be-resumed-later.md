---
lang: ko-KR
title: How to store continuations to be resumed later
description: Article(s) > How to store continuations to be resumed later
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to store continuations to be resumed later
    - property: og:description
      content: How to store continuations to be resumed later
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-store-continuations-to-be-resumed-later.html
date: 2022-11-13
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift Concurrency by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/concurrency/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to store continuations to be resumed later | Swift Concurrency by Example",
  "desc": "How to store continuations to be resumed later",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-store-continuations-to-be-resumed-later", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Many of Apple’s frameworks report back success or failure using multiple different delegate callback methods rather than completion handlers, which means a simple continuation won’t work.

As a simple example, if you were implementing `WKNavigationDelegate` to handle navigating around a `WKWebView` you would implement methods like this:

```swift
func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
    // our work succeeded
}

func webView(WKWebView, didFail: WKNavigation!, withError: Error) {
    // our work failed
}
```

So, rather than receiving the result of our work through a single completion closure, we instead get the result in two different places. In this situation we need to do a little more work to create async functions using continuations, because we need to be able to resume the continuation in either method.

To solve this problem you need to know that continuations are just structs with a specific generic type. For example, a checked continuation that succeeds with a string and never throws an error has the type `CheckedContinuation<String, Never>`, and an unchecked continuation that returns an integer array and can throw errors has the type `UnsafeContinuation<[Int], Error>`.

All this is important because to solve our delegate callback problem we need to stash away a continuation in one method – when we trigger some functionality – then resume it from different methods based on whether our code succeeds or fails.

I want to demonstrate this using real code, so we’re going to create an `ObservableObject` to wrap Core Location, making it easier to request the user’s location.

First, add these imports to your code so we can read their location, and also use SwiftUI’s `LocationButton` to get standardized UI:

```swift
import CoreLocation
import CoreLocationUI
```

Second, we’re going to create a small part of a `LocationManager` class that has two properties: one for storing a continuation to track whether we have their location coordinate or an error, and one to track an instance of `CLLocationManager` that does the work of finding the user. This also needs a small initializer so the `CLLocationManager` knows to report location updates to us.

Add this class now:

```swift
class LocationManager: NSObject, ObservableObject, CLLocationManagerDelegate {
    var locationContinuation: CheckedContinuation<CLLocationCoordinate2D?, Error>?
    let manager = CLLocationManager()

    override init() {
        super.init()
        manager.delegate = self
    }

    // More code to come
}
```

Third, we need to add an async function that requests the user’s location. This needs to be wrapped inside a `withCheckedThrowingContinuation()` call, so that Swift creates a continuation we can stash away and use later.

Add this method to the class now:

```swift
func requestLocation() async throws -> CLLocationCoordinate2D? {
    try await withCheckedThrowingContinuation { continuation in
        locationContinuation = continuation
        manager.requestLocation()
    }
}
```

And finally we need to implement the two methods that might be called after we request the user’s location: `didUpdateLocations` will be called if their location was received, and `didFailWithError` otherwise. Both of these need to resume our continuation, with the former sending back the first location coordinate we were given, and the latter throwing whatever error occurred:

Add these last two methods to the class now:

```swift
func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    locationContinuation?.resume(returning: locations.first?.coordinate)
}

func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
    locationContinuation?.resume(throwing: error)
}
```

So, by storing our continuation as a property we’re able to resume it in two different places – once where things go to plan, and once where things go wrong for whatever reason. Either way, no matter what happens our continuation resumes exactly once.

At this point our continuation wrapper is complete, so we can use it inside a SwiftUI view. If we put everything together, here’s the end result:

```swift
class LocationManager: NSObject, ObservableObject, CLLocationManagerDelegate {
    var locationContinuation: CheckedContinuation<CLLocationCoordinate2D?, Error>?
    let manager = CLLocationManager()

    override init() {
        super.init()
        manager.delegate = self
    }

    func requestLocation() async throws -> CLLocationCoordinate2D? {
        try await withCheckedThrowingContinuation { continuation in
            locationContinuation = continuation
            manager.requestLocation()
        }
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        locationContinuation?.resume(returning: locations.first?.coordinate)
    }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        locationContinuation?.resume(throwing: error)
    }
}

struct ContentView: View {
    @StateObject private var locationManager = LocationManager()

    var body: some View {
        LocationButton {
            Task {
                if let location = try? await locationManager.requestLocation() {
                    print("Location: \(location)")
                } else {
                    print("Location unknown.")
                }
            }
        }
        .frame(height: 44)
        .foregroundColor(.white)
        .clipShape(Capsule())
        .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-store-continuations-to-be-resumed-later-1.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to use continuations to convert completion handlers into async functions | Swift Concurrency by Example",
  "desc": "How to use continuations to convert completion handlers into async functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create continuations that can throw errors | Swift Concurrency by Example",
  "desc": "How to create continuations that can throw errors",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-continuations-that-can-throw-errors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What’s the performance cost of calling an async function? | Swift Concurrency by Example",
  "desc": "What’s the performance cost of calling an async function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-performance-cost-of-calling-an-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Where is Swift concurrency supported? | Swift Concurrency by Example",
  "desc": "Where is Swift concurrency supported?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/where-is-swift-concurrency-supported.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to call an async function using async let | Swift Concurrency by Example",
  "desc": "How to call an async function using async let",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />