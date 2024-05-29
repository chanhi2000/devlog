---
lang: ko-KR
title: How to read the user's location using LocationButton
description: Article(s) > How to read the user's location using LocationButton
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
      content: Article(s) > How to read the user's location using LocationButton
    - property: og:description
      content: How to read the user's location using LocationButton
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-the-users-location-using-locationbutton.html
next: /explore/articles/hackingwithswift.com/swiftui-by-example/introduction-to-accessibility-with-swiftui.md
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
  "title": "How to read the user's location using LocationButton | SwiftUI by Example",
  "desc": "How to read the user's location using LocationButton",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-read-the-users-location-using-locationbutton",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI has a dedicated `LocationButton` view for displaying a standard UI for requesting user location. Sadly, it doesn’t do any of the work of getting the location for us, but it at least has a recognizable user interface that we can work with.

In order to use this, you first need to import two frameworks, one for reading the location and one for showing the button:

```swift
import CoreLocation
import CoreLocationUI
```

Next, you create some kind of `ObservableObject` that is able to request the user’s location on demand. This needs to create a `CLLocationManager` and call its `requestLocation()` method on demand. You can then put **that** inside a SwiftUI view showing a location button.

So, you might write something like this:

```swift
class LocationManager: NSObject, ObservableObject, CLLocationManagerDelegate {
    let manager = CLLocationManager()

    @Published var location: CLLocationCoordinate2D?

    override init() {
        super.init()
        manager.delegate = self
    }

    func requestLocation() {
        manager.requestLocation()
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        location = locations.first?.coordinate
    }
}

struct ContentView: View {
    @StateObject var locationManager = LocationManager()

    var body: some View {
        VStack {
            if let location = locationManager.location {
                Text("Your location: \(location.latitude), \(location.longitude)")
            }

            LocationButton {
                locationManager.requestLocation()
            }
            .frame(height: 44)
            .padding()
        }
    }
}
```

![A rectangular blue button with a location arrow and the words “Current Location”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-the-users-location-using-locationbutton-1~dark@2x.png)

Apple provides a handful of variant designs for the button, activated by passing one of them in with its initializer – try `LocationButton(.shareMyCurrentLocation)`, for example.

![A rectangular blue button with a location arrow and the words “Share My Current Location”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-the-users-location-using-locationbutton-2~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to detect the location of a tap inside a view | SwiftUI by Example",
  "desc": "How to detect the location of a tap inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-location-of-a-tap-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a scroll view move to a location using ScrollViewReader | SwiftUI by Example",
  "desc": "How to make a scroll view move to a location using ScrollViewReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users import videos using PhotosPicker | SwiftUI by Example",
  "desc": "How to let users import videos using PhotosPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-import-videos-using-photospicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users find and replace text | SwiftUI by Example",
  "desc": "How to let users find and replace text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-find-and-replace-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />