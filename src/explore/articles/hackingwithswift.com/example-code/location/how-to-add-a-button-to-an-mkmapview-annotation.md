---
lang: ko-KR
title: "How to add a button to an MKMapView annotation"
description: "Article(s) > How to add a button to an MKMapView annotation"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add a button to an MKMapView annotation"
    - property: og:description
      content: "How to add a button to an MKMapView annotation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation.html
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
  "title": "How to add a button to an MKMapView annotation | Location - free Swift example code",
  "desc": "How to add a button to an MKMapView annotation",
  "link": "https://hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
The built-in `MKPinAnnotationView` annotation view has a `rightCalloutAccessoryView` property that can be set to any kind of `UIView`, including buttons. The button doesn't need to have an action attached to it, because there's a separate method that gets called when it's tapped.

First up, here's how you'd create a button inside an annotation view:

```swift
let btn = UIButton(type: .detailDisclosure)
annotationView.rightCalloutAccessoryView = btn
```

For context, here's a complete implementation of `viewForAnnotation` that uses a button. This is taken from <a href="/read/19/overview">project 19</a> of Hacking with Swift, where I created a class called `Capital` that implemented the `MKAnnotation` protocol – you'll need to adjust this for your own annotation type:

```swift
func mapView(_ mapView: MKMapView, viewFor annotation: MKAnnotation) -> MKAnnotationView? {
    let identifier = "Capital"

    if annotation is Capital {
        if let annotationView = mapView.dequeueReusableAnnotationView(withIdentifier: identifier) {
            annotationView.annotation = annotation
            return annotationView
        } else {
            let annotationView = MKPinAnnotationView(annotation:annotation, reuseIdentifier:identifier)
            annotationView.isEnabled = true
            annotationView.canShowCallout = true

            let btn = UIButton(type: .detailDisclosure)
            annotationView.rightCalloutAccessoryView = btn
            return annotationView
        }
    }

    return nil
}
```

When it comes to detecting taps on your button, implement the `calloutAccessoryControlTapped` method. This tells you the annotation view that was tapped (from which you can pull out the annotation), the control that was tapped (in our case it's a button), and also the map view the whole thing belongs to. Here's an example:

```swift
func mapView(_ mapView: MKMapView, annotationView view: MKAnnotationView, calloutAccessoryControlTapped control: UIControl) {
    let capital = view.annotation as! Capital
    let placeName = capital.title
    let placeInfo = capital.info

    let ac = UIAlertController(title: placeName, message: placeInfo, preferredStyle: .alert)
    ac.addAction(UIAlertAction(title: "OK", style: .default))
    present(ac, animated: true)
}
```

-->

::: details Similar solutions…

<!--
/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview">How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView 
/example-code/location/how-to-find-directions-using-mkmapview-and-mkdirectionsrequest">How to find directions using MKMapView and MKDirections.Request 
/example-code/location/how-to-add-an-mkmapview-using-mapkit">How to add an MKMapView using MapKit 
/example-code/location/adding-places-to-mkmapview-using-mkplacemark">Adding places to MKMapView using MKPlacemark 
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar</a>
-->

:::

---

<TagLinks />