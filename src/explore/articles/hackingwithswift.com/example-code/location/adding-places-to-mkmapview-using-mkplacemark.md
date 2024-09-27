---
lang: ko-KR
title: "Adding places to MKMapView using MKPlacemark"
description: "Article(s) > Adding places to MKMapView using MKPlacemark"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Adding places to MKMapView using MKPlacemark"
    - property: og:description
      content: "Adding places to MKMapView using MKPlacemark"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/adding-places-to-mkmapview-using-mkplacemark.html
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
  "title": "Adding places to MKMapView using MKPlacemark | Location - free Swift example code",
  "desc": "Adding places to MKMapView using MKPlacemark",
  "link": "https://hackingwithswift.com/example-code/location/adding-places-to-mkmapview-using-mkplacemark",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
You can add places to any map view using the `MKPlacemark` class, and it’s different from adding regular annotations – the map view shows the whole address on the map, even from far away, so users can see important points easily.

Your address needs to be specified as a series of keys from the Contacts framework, so start by adding this import:

```swift
import Contacts
```

Now add the GPS coordinate and address for the placemark you want. This creates a coordinate and address for Fortnum & Mason in London:

```swift
let coords = CLLocationCoordinate2DMake(51.5083, -0.1384)

let address = [CNPostalAddressStreetKey: "181 Piccadilly, St. James's", CNPostalAddressCityKey: "London", CNPostalAddressPostalCodeKey: "W1A 1ER", CNPostalAddressISOCountryCodeKey: "GB"]
```

You can then wrap that up inside an `MKPlacemark` instance like this:

```swift
let place = MKPlacemark(coordinate: coords, addressDictionary: address)
```

Finally, add that to your map view. `MKPlacemark` conforms to the `MKAnnotation` protocol, so you use `addAnnotation()`:

```swift
mapView.addAnnotation(place)
```

-->

::: details Similar solutions…

<!--
/example-code/location/how-to-find-directions-using-mkmapview-and-mkdirectionsrequest">How to find directions using MKMapView and MKDirections.Request 
/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview">How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView 
/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation">How to add a button to an MKMapView annotation 
/example-code/location/how-to-add-an-mkmapview-using-mapkit">How to add an MKMapView using MapKit 
/quick-start/swiftui/adding-tabview-and-tabitem">Adding TabView and tabItem()</a>
-->

:::

---

<TagLinks />