---
lang: ko-KR
title: "How to take a photo using the camera and UIImagePickerController"
description: "Article(s) > How to take a photo using the camera and UIImagePickerController"
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
      content: "Article(s) > How to take a photo using the camera and UIImagePickerController"
    - property: og:description
      content: "How to take a photo using the camera and UIImagePickerController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-take-a-photo-using-the-camera-and-uiimagepickercontroller.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to take a photo using the camera and UIImagePickerController | UIKit - free Swift example code",
  "desc": "How to take a photo using the camera and UIImagePickerController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-take-a-photo-using-the-camera-and-uiimagepickercontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!--
UIKit has a built-in view controller designed to let the user take photos, crop them as needed, them load them directly into your app. Even better, it only takes a few lines of code to use!

First, make your view controller conform to both `UINavigationControllerDelegate`, and `UIImagePickerControllerDelegate`.

Second, add this code wherever you want to trigger the camera process:

```swift
let vc = UIImagePickerController()
vc.sourceType = .camera
vc.allowsEditing = true
vc.delegate = self
present(vc, animated: true)
```

The `sourceType` property is what directs the view controller to the camera rather than the user’s saved image library.

Third, add the `didFinishPickingMediaWithInfo` method, which gets called by the image picker when an image was selected. You need to read it out of the info dictionary using the key `.editedImage`, but then you have a `UIImage` that you can do whatever you want with.

This example code should get you started:

```swift
func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
    picker.dismiss(animated: true)

    guard let image = info[.editedImage] as? UIImage else {
        print("No image found")
        return
    }

    // print out the image size as a test
    print(image.size)
}
```

That’s all the code needed to make the camera work, but there is one last change you need: reading images from the camera requires a new Info.plist key describing how you plan to use the data.

To add this, open your Info.plist file, right-click on some space below the rows, then choose Add Row. Give it the name “Privacy - Camera Usage Description”, then enter a description in the value area – this will be shown to users the first time you try to use the camera.
-->

::: details Similar solutions…

<!--
/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller">How to choose a photo from the camera roll using UIImagePickerController 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />