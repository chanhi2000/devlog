---
lang: ko-KR
title: "How to find directions using MKMapView and MKDirections.Request"
description: "Article(s) > How to find directions using MKMapView and MKDirections.Request"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to find directions using MKMapView and MKDirections.Request"
    - property: og:description
      content: "How to find directions using MKMapView and MKDirections.Request"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/how-to-detect-ibeacons.html
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
  "title": "How to find directions using MKMapView and MKDirections.Request | Location - free Swift example code",
  "desc": "How to find directions using MKMapView and MKDirections.Request",
  "link": "https://hackingwithswift.com/example-code/location/how-to-find-directions-using-mkmapview-and-mkdirectionsrequest",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!-- 
MapKit is great for letting users navigate from place to place, but also makes it easy for you to plot directions from one place to another. You just tell iOS where you're starting from, where you're going, as well as how you're traveling (by car, foot, or mass transit), and it will find routes for you.

First, make sure you have a map view in your app, and have the Maps entitlement enabled. Now add this code:

```swift
import MapKit
import UIKit

class ViewController: UIViewController, MKMapViewDelegate {
    @IBOutlet var mapView: MKMapView!

    override func viewDidLoad() {
        super.viewDidLoad()

        let request = MKDirections.Request()
        request.source = MKMapItem(placemark: MKPlacemark(coordinate: CLLocationCoordinate2D(latitude: 40.7127, longitude: -74.0059), addressDictionary: nil))
        request.destination = MKMapItem(placemark: MKPlacemark(coordinate: CLLocationCoordinate2D(latitude: 37.783333, longitude: -122.416667), addressDictionary: nil))
        request.requestsAlternateRoutes = true
        request.transportType = .automobile

        let directions = MKDirections(request: request)

        directions.calculate { [unowned self] response, error in
            guard let unwrappedResponse = response else { return }

            for route in unwrappedResponse.routes {
                self.mapView.addOverlay(route.polyline)
                self.mapView.setVisibleMapRect(route.polyline.boundingMapRect, animated: true)
            }
        }
    }

    func mapView(_ mapView: MKMapView, rendererFor overlay: MKOverlay) -> MKOverlayRenderer {
        let renderer = MKPolylineRenderer(polyline: overlay as! MKPolyline)
        renderer.strokeColor = UIColor.blue
        return renderer
    }
}
```

That example requests driving directions between New York and San Francisco. It asks for alternate routes if they exist (spoiler: they do), then sets up a closure to run when the directions come back that adds them as overlays to the map. To make the overlays draw, you need to implement the `rendererFor` method, but that's just three lines as you can see.

Note: because I request alternative routes if they exist, I loop through the array of returned routes to add them all to the map. The `setVisibleMapRect()` method is called once for each route, but fortunately that isn't a problem as all routes have the same start and end location!

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />