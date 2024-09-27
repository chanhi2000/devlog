---
lang: ko-KR
title: "How to request a user's location only once using requestLocation"
description: "Article(s) > How to request a user's location only once using requestLocation"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to request a user's location only once using requestLocation"
    - property: og:description
      content: "How to request a user's location only once using requestLocation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Location - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/location/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to request a user's location only once using requestLocation | Location - free Swift example code",
  "desc": "How to request a user's location only once using requestLocation",
  "link": "https://hackingwithswift.com/example-code/location/how-to-request-a-users-location-only-once-using-requestlocation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
iOS has a simple way to request a user's location just once, and it's called `requestLocation()`. Calling this method returns immediately (meaning that your code carries on executing) but when iOS has managed (or failed) to get a fix on the user's location you will be told. Below is a complete example:

```swift
import CoreLocation
import UIKit

class ViewController: UIViewController, CLLocationManagerDelegate {
    let manager = CLLocationManager()

    override func viewDidLoad() {
        manager.delegate = self
        manager.requestLocation()
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        if let location = locations.first {
            print("Found user's location: \(location)")
        }
    }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        print("Failed to find user's location: \(error.localizedDescription)")
    }
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/learn-once-apply-anywhere">Learn once, apply anywhere 
/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest">How to look up a location with MKLocalSearch.Request 
/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:) 
/quick-start/swiftui/how-to-read-the-users-location-using-locationbutton">How to read the user’s location using LocationButton 
/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:)</a>
-->

:::

---

<TagLinks />