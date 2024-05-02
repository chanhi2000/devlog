---
lang: ko-KR
title: How to show annotations in a Map view
description: Article(s) > How to show annotations in a Map view
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
      content: Article(s) > How to show annotations in a Map view
    - property: og:description
      content: How to show annotations in a Map view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-annotations-in-a-map-view.html
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
  "title": "How to show annotations in a Map view | SwiftUI by Example",
  "desc": "How to show annotations in a Map view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-annotations-in-a-map-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `Map` view allows us to show annotation views on top of the map, including default markers and pins, as well as completely custom views.

This takes three steps:

1. Create some sort of state that will track the coordinates being shown by the map, using `MKCoordinateRegion` to track the center and zoom level of the map.
2. Prepare an array of locations to use for your annotations.
3. Decide how you want them to be shown on your map. There are built-in `MapPin` and `MapMarker` annotations you can show, or you can use your own views.

Whatever array of locations you have, the types you're using must conform to `Identifiable` so SwiftUI understands how to identify each item uniquely. For example, you might use something like this:

```swift
struct Location: Identifiable {
    let id = UUID()
    let name: String
    let coordinate: CLLocationCoordinate2D
}
```

If all you have is `CLLocationCoordinate2D` data, you can use them directly by adding an extension such as this one:

```swift
extension CLLocationCoordinate2D: Identifiable {
    public var id: String {
        "\(latitude)-\(longitude)"
    }
}
```

Anyway, here's an example that puts everything together so you can see map pins over various capital cities:

```swift
struct City: Identifiable {
    let id = UUID()
    let name: String
    let coordinate: CLLocationCoordinate2D
}

struct ContentView: View {
    @State private var region = MKCoordinateRegion(center: CLLocationCoordinate2D(latitude: 51.507222, longitude: -0.1275), span: MKCoordinateSpan(latitudeDelta: 10, longitudeDelta: 10))

    let annotations = [
        City(name: "London", coordinate: CLLocationCoordinate2D(latitude: 51.507222, longitude: -0.1275)),
        City(name: "Paris", coordinate: CLLocationCoordinate2D(latitude: 48.8567, longitude: 2.3508)),
        City(name: "Rome", coordinate: CLLocationCoordinate2D(latitude: 41.9, longitude: 12.5)),
        City(name: "Washington DC", coordinate: CLLocationCoordinate2D(latitude: 38.895111, longitude: -77.036667))
    ]

    var body: some View {
        Map(coordinateRegion: $region, annotationItems: annotations) {
            MapPin(coordinate: $0.coordinate)
        }
        .frame(width: 400, height: 300)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-annotations-in-a-map-view-1.zip)

![A map showing Western Europe and the British Isles, with red drawing pins in London and Paris, which are labelled.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-annotations-in-a-map-view-1~dark.png)

That uses the traditional pin style that iOS has had for years, but if you want the larger pin style you can use `MapMarker` instead, like this: `MapMarker(coordinate: $0.coordinate)`

![A map showing Western Europe and the British Isles, with red bubbles over London and Paris.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-annotations-in-a-map-view-2~dark.png)

And if you want complete control, you can also pass in completely custom views – some text, an image, a `NavigationLink`, and so on.

For example, we could draw a 4-point stroked circle over our capital cities like this:

```swift
MapAnnotation(coordinate: $0.coordinate) {
    Circle()
        .strokeBorder(.red, lineWidth: 4)
        .frame(width: 40, height: 40)
}
```

![A map showing Western Europe and the British Isles. London and Paris are labelled and circled in red.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-annotations-in-a-map-view-3~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to show a Map view | SwiftUI by Example",
  "desc": "How to show a Map view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-map-view.md",
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