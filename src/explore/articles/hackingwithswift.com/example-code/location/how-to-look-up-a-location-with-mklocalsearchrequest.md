---
lang: ko-KR
title: "How to look up a location with MKLocalSearch.Request"
description: "Article(s) > How to look up a location with MKLocalSearch.Request"
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
  - ios-6.1
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to look up a location with MKLocalSearch.Request"
    - property: og:description
      content: "How to look up a location with MKLocalSearch.Request"
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
  "title": "How to look up a location with MKLocalSearch.Request | Location - free Swift example code",
  "desc": "How to look up a location with MKLocalSearch.Request",
  "link": "https://hackingwithswift.com/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.1

<!-- TODO: 작성 -->

<!-- 
MapKit has built-in functionality to let us look up places and businesses around the world, all using natural language searches that can be passed in straight from user entry.

First, import the MapKit framework, then create an instance of `MKLocalSearch.Request` that contains what you want to search for.

For example, this looks for Fortnum and Mason in London:

```swift
let searchRequest = MKLocalSearch.Request()
searchRequest.naturalLanguageQuery = "Fortnum and Mason, London"
```

That provides no other information to Apple other than the text string, so it will look everywhere in the world for such a match.

If you wanted, you could provide a specific search region by letting the user pan around an `MKMapView` for a specific location, then passing the region they are looking at to your search:

```swift
searchRequest.region = yourMapView.region
```

Once you’re ready, wrap the request inside an instance of `MKLocalSearch`, like this:

```swift
let search = MKLocalSearch(request: searchRequest)
```

When you’re ready, call the `start()` method on your search. This accepts one parameter, which is a closure that runs when the search completes – it will be handed the response data or an error, depending on what happened. This closure will always be run on your application’s main thread, so you can present some user interface immediately if you want.

As an example, this code will loop over all the results that were found for the search, printing out the phone number for each one:

```swift
search.start { response, error in
    guard let response = response else {
        print("Error: \(error?.localizedDescription ?? "Unknown error").")
        return
    }

    for item in response.mapItems {
        print(item.phoneNumber ?? "No phone number.")
    }
}
```

Even without a map region, Apple Maps found the London store just fine, but obviously passing in a map region will help your accuracy improve.

If for some reason the request didn’t return quickly enough and you no longer need a response, call its `cancel()` method to abort the request.

-->

::: details Similar solutions…

<!--
/example-code/location/how-to-request-a-users-location-only-once-using-requestlocation">How to request a user's location only once using requestLocation 
/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:) 
/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:) 
/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller">How to preview files using Quick Look and QLPreviewController 
/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types">How to create Quick Look debug previews for your custom types</a>
-->

:::

---

<TagLinks />