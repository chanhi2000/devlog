---
lang: ko-KR
title: "How to read the user’s location while your app is in the background"
description: "Article(s) > How to read the user’s location while your app is in the background"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to read the user’s location while your app is in the background"
    - property: og:description
      content: "How to read the user’s location while your app is in the background"
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
  "title": "How to read the user’s location while your app is in the background | Location - free Swift example code",
  "desc": "How to read the user’s location while your app is in the background",
  "link": "https://hackingwithswift.com/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
iOS has had the ability to track locations in the background for some time, but the permission system changed in iOS 8 then again in iOS 11 as Apple has tried to stop unscrupulous apps abusing private information.

Reading the user’s location in the background takes a few steps. First, open your Info.plist file, add key called “Privacy - Location Always and When In Use Usage Description” and "Privacy - Location When In Use Usage Description”, then give both of them whatever text you want to show to users when you ask for their location. They are both required, because iOS always allows user to restrict location access to when your app is in use.

Now open whichever controller you want to use to look for the user’s location, and add this import:

```swift
import CoreLocation
```

You need to tell Swift that your class conforms to the `CLLocationManagerDelegate` protocol so that you can start to receive location updates.

Location tracking is done using the `CLLocationManager` class, which is also responsible for requesting location permission from users. You need to create a property for this in your class so that you can store the active location manager, so add this:

```swift
var locationManager: CLLocationManager?
```

If you're using a view controller, you'll probably want to initialize this property in `viewDidLoad()`, like this:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    locationManager = CLLocationManager()
    locationManager?.delegate = self
    locationManager?.requestAlwaysAuthorization()
}
```

Once you request permission to use your user's location, they'll see an alert with the message you wrote earlier. When they make a choice you'll get a delegate callback called `didChangeAuthorization`, at which point you can check whether they are authorized you or not:

```swift
func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
    if status == .authorizedAlways {
        // you're good to go!
    }
}
```

If you’re able to fall back to using location only when your app is in use, you should add a second check to the code above just in case the user didn’t select the option you wanted.

The final step is to tell Xcode that we want location updates to continue being delivered while the app is in the background. Select your project using the project navigator, then find your app’s target and choose the Capabilities tab. You need to enable Background Modes, then check the box marked “Location updates”.

That’s all the code done now, so you can go ahead and implement the `didUpdateLocations` method and wait for it to be called. Something like this ought to get you started:

```swift
func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    if let location = locations.last {
        print("New location is \(location)")
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:) 
/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:) 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/quick-start/swiftui/how-to-read-the-users-location-using-locationbutton">How to read the user’s location using LocationButton</a>
-->

:::

---

<TagLinks />