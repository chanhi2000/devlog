---
lang: ko-KR
title: "How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image"
description: "Article(s) > How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image"
    - property: og:description
      content: "How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image.html
date: 2019-06-04
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Vision - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/vision/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image | Vision - free Swift example code",
  "desc": "How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image",
  "link": "https://hackingwithswift.com/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
The Vision framework has built-in support for detecting text in images, although realistically it’s limited to printed text in clear fonts – don’t expect to be able to throw raw handwriting at it and get useful results.

To get started import the Vision framework, then set up an instance of `VNRecognizeTextRequest` so that it processes any text that is found. Your request will be handed an array of observations that you need to safely typecast as `VNRecognizedTextObservation`, then you can loop over each observation to pull out candidates for each one – various possible piece of text that Vision thinks it might have found.

If we wanted to just pull out the best candidate of each observation then print it out, we’d make a request like this:

```swift
let request = VNRecognizeTextRequest { request, error in
    guard let observations = request.results as? [VNRecognizedTextObservation] else {
        fatalError("Received invalid observations")
    }

    for observation in observations {
        guard let bestCandidate = observation.topCandidates(1).first else {
            print("No candidate")
            continue
        }

        print("Found this candidate: \(bestCandidate.string)")
    }
}
```

Next, put that request into an array, and set Vision off in a background queue to scan your image. For example, this uses the default `.userInitiated` background queue, then loads and scans an image from the app bundle called `testImage`:

```swift
let requests = [request]

DispatchQueue.global(qos: .userInitiated).async {
    guard let img = UIImage(named: "testImage")?.cgImage else {
        fatalError("Missing image to scan")
    }

    let handler = VNImageRequestHandler(cgImage: img, options: [:])
    try? handler.perform(requests)
}
```

Make sure you have an image called “testImage” in your asset catalog, and that code should work out of the box.

There are two further parameters you might want to tweak to make your text recognition more useful. First, by default the `recognitionLevel` property of your `VNRecognizeTextRequest` is set to `.accurate`, which means Vision does its best to figure out the most likely letters in the text. If you wanted to prioritize speed over accuracy – perhaps if you were scanning lots of image, or a live feed, you should change `recognitionLevel` to `.fast`, like this:

```swift
request.recognitionLevel = .fast
```

Second, you can set the `customWords` property of your request to be an array of unusual strings that your app is likely to come across – words that Vision might decide aren’t likely because it doesn’t recognize them:

```swift
request.customWords = ["Pikachu", "Snorlax", "Charizard"]
```

These custom words automatically take priority over the built-in dictionary, so use this wisely.

Rather than scanning images in your app bundle, you could load an image that was scanned using VNDocumentCameraViewController – see my article <a href="https://www.hackingwithswift.com/example-code/vision/how-to-detect-documents-using-vndocumentcameraviewcontroller">How to detect documents using VNDocumentCameraViewController</a> for more information.

-->

::: details Similar solutions…

<!--
/example-code/strings/how-to-read-a-single-character-from-a-string">How to read a single character from a string 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image">How to convert a SwiftUI view to an image 
/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view">How to find an aspect fit image’s size inside an image view 
/quick-start/swiftui/building-a-menu-using-list">Building a menu using List</a>
-->

:::

---

<TagLinks />