---
lang: ko-KR
title: How to show a Map view
description: Article(s) > How to show a Map view
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
      content: Article(s) > How to show a Map view
    - property: og:description
      content: How to show a Map view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-map-view.html
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
  "title": "How to show a Map view | SwiftUI by Example",
  "desc": "How to show a Map view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-a-map-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `Map` lets us embed maps alongside the rest of our views, and control whether to show the user, what annotations we want, and more.

To get started, first create some sort of state that will track the coordinates being shown by the map. This uses `MKCoordinateRegion`, which takes a latitude/longitude pair for the center of the map, plus a coordinate span that controls how much is visible.

For example, this creates a map centered on the city of London:

```swift
struct ContentView: View {
    @State private var region = MKCoordinateRegion(center: CLLocationCoordinate2D(latitude: 51.507222, longitude: -0.1275), span: MKCoordinateSpan(latitudeDelta: 0.5, longitudeDelta: 0.5))

    var body: some View {
        Map(coordinateRegion: $region)
            .frame(width: 400, height: 300)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-a-map-view-1.zip)

![A map with London at the center.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-a-map-view-1~dark.png)

::: tip

You must import MapKit to get this functionality.

:::

As the user scrolls around, the `region` state will update automatically.

If you want, you can restrict how much control the user has over the map by providing a separate `interactionModes` parameter to your map. For example, if you wanted the map to always show exactly the same spot, you would use this:

```swift
Map(coordinateRegion: .constant(MKCoordinateRegion(center: CLLocationCoordinate2D(latitude: 51.507222, longitude: -0.1275), span: MKCoordinateSpan(latitudeDelta: 0.5, longitudeDelta: 0.5))), interactionModes: [])
    .frame(width: 400, height: 300)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-a-map-view-2.zip)

![A map with London at the center.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-a-map-view-2~dark.png)

Or if you wanted the user to be able to zoom in and out, but not pan around to new locations, you would use this: `[.zoom]` for your interaction modes.

Finally, you can ask the map to show the user's location – and even follow them as they move – by providing values for `showsUserLocation` and `userTrackingMode`.

**To use this you must first have requested and received location permission from the user.** This means adding Info.plist values for “`Privacy - Location When In Use Usage Description`” and “`Privacy - Location Always and When In Use Usage Description`”, making an instance of `CLLocationManager`, then requesting authorization through it using something like `requestAlwaysAuthorization()`.

For example, this will show the user on the map and always keep the map centered on their location:

```swift
struct ContentView: View {
    @State private var region = MKCoordinateRegion(center: CLLocationCoordinate2D(latitude: 51.507222, longitude: -0.1275), span: MKCoordinateSpan(latitudeDelta: 0.5, longitudeDelta: 0.5))

    var body: some View {
        Map(coordinateRegion: $region, showsUserLocation: true, userTrackingMode: .constant(.follow))
            .frame(width: 400, height: 300)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-a-map-view-3.zip)

![A map with Cupertino at the center.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-a-map-view-3~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to show annotations in a Map view | SwiftUI by Example",
  "desc": "How to show annotations in a Map view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-annotations-in-a-map-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show multiple alerts in a single view | SwiftUI by Example",
  "desc": "How to show multiple alerts in a single view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-multiple-alerts-in-a-single-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a popover view | SwiftUI by Example",
  "desc": "How to show a popover view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-popover-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a menu when a button is pressed | SwiftUI by Example",
  "desc": "How to show a menu when a button is pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-menu-when-a-button-is-pressed.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />