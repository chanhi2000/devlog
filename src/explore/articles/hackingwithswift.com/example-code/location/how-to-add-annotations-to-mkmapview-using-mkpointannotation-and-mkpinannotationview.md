---
lang: ko-KR
title: "How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView"
description: "Article(s) > How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView"
    - property: og:description
      content: "How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview.html
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
  "title": "How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView | Location - free Swift example code",
  "desc": "How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView",
  "link": "https://hackingwithswift.com/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
Once you have an `MKMapView` up and running, it only takes a few lines of code more to drop pins containing placemarks.

Start by making your view controller the delegate of your map view, so that we can receive events. You should also make your view controller conform to `MKMapViewDelegate` in code.

Adding pins to the map takes two code changes. First you need to create an annotation describing where the pin is and what its name is – put this in your `viewDidLoad()` method:

```swift
let london = MKPointAnnotation()
london.title = "London"
london.coordinate = CLLocationCoordinate2D(latitude: 51.507222, longitude: -0.1275)
yourMapView.addAnnotation(london)
```

Second, you need to implement a `viewFor` method that converts your annotation into a view that can be displayed on the map. iOS comes with a built-in view type called `MKPinAnnotationView` that provides the familiar pin layout, so we can use that here. 

**Note:** For performance reasons, dropping pins onto a map works using re-use identifiers, just like loading table view cells. The code below tries to re-use pins, and you should do the same.

Add this to your view controller:

```swift
func mapView(_ mapView: MKMapView, viewFor annotation: MKAnnotation) -> MKAnnotationView? {
    guard annotation is MKPointAnnotation else { return nil }

    let identifier = "Annotation"
    var annotationView = mapView.dequeueReusableAnnotationView(withIdentifier: identifier)

    if annotationView == nil {
        annotationView = MKPinAnnotationView(annotation: annotation, reuseIdentifier: identifier)
        annotationView!.canShowCallout = true
    } else {
        annotationView!.annotation = annotation
    }

    return annotationView
}
```

That’s all the code you need!

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation">How to add a button to an MKMapView annotation</a>
-->

:::

---

<TagLinks />