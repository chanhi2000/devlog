---
lang: ko-KR
title: "How to choose a photo from the camera roll using UIImagePickerController"
description: "Article(s) > How to choose a photo from the camera roll using UIImagePickerController"
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
      content: "Article(s) > How to choose a photo from the camera roll using UIImagePickerController"
    - property: og:description
      content: "How to choose a photo from the camera roll using UIImagePickerController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Media - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/media/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to choose a photo from the camera roll using UIImagePickerController | Media - free Swift example code",
  "desc": "How to choose a photo from the camera roll using UIImagePickerController",
  "link": "https://hackingwithswift.com/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
The `UIImagePickerController` class is a super-simple way to select and import user photos into your app. As a bonus, it also automatically handles requesting user permission to read the photo library, so all you need to do is be ready to respond when the user selects a photo.

First, make sure your view controller conforms to the `UINavigationControllerDelegate` and `UIImagePickerControllerDelegate` protocols. Next, fill it in with methods to trigger selecting a picture, to handle cancelling, and to handle picture selection.

Here’s a working example to get you started:

```swift
func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
    var newImage: UIImage

    if let possibleImage = info[.editedImage] as? UIImage {
        newImage = possibleImage
    } else if let possibleImage = info[.originalImage] as? UIImage {
        newImage = possibleImage
    } else {
        return
    }

    // do something interesting here!
    print(newImage.size)

    dismiss(animated: true)
}
```

To use that code in your own project, replace the call to `print()` with something useful – you have the image, now what?

There’s one more thing before you’re done, which is to add a description of *why* you want access – what do you intend to do with your user’s photos? To set this, look for the file Info.plist in the project navigator and select it. This opens a new editor for modifying property list values (“plists”) – app configuration settings.

In the Key column, hover your mouse pointer over any item and you’ll see a + button appear; please click that to insert a new row. A huge list of options will appear – please scroll down and select “Privacy - Photo Library Usage Description”. In the “Value” box for your row, enter “We need to import photos of people”. This is the message Apple will show to the user when photo access is requested.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-take-a-photo-using-the-camera-and-uiimagepickercontroller">How to take a photo using the camera and UIImagePickerController 
/example-code/games/how-to-roll-a-dice-using-gameplaykit-and-gkrandomdistribution">How to roll a dice using GameplayKit and GKRandomDistribution 
/example-code/uikit/how-to-let-users-choose-a-font-with-uifontpickerviewcontroller">How to let users choose a font with UIFontPickerViewController 
/example-code/media/how-to-turn-on-the-camera-flashlight-to-make-a-torch">How to turn on the camera flashlight to make a torch 
/example-code/media/uiimagewritetosavedphotosalbum-how-to-write-to-the-ios-photo-album">UIImageWriteToSavedPhotosAlbum(): how to write to the iOS photo album</a>
-->

:::

---

<TagLinks />