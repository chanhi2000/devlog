---
lang: ko-KR
title: "How to turn on the camera flashlight to make a torch"
description: "Article(s) > How to turn on the camera flashlight to make a torch"
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
      content: "Article(s) > How to turn on the camera flashlight to make a torch"
    - property: og:description
      content: "How to turn on the camera flashlight to make a torch"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-turn-on-the-camera-flashlight-to-make-a-torch.html
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
  "title": "How to turn on the camera flashlight to make a torch | Media - free Swift example code",
  "desc": "How to turn on the camera flashlight to make a torch",
  "link": "https://hackingwithswift.com/example-code/media/how-to-turn-on-the-camera-flashlight-to-make-a-torch",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!-- 
There is one simple property required to enable or disable a device's torch, but you do need to put in some wrapper code to make it work safely. Specifically, you need to use the `lockForConfiguration()` and `unlockForConfiguration()` methods of the `AVCaptureDevice` class in order to make sure only one app can control the torch at a time.

You will need to import the AVFoundation framework, because that's where the `AVCaptureDevice` class comes from. Once that's done, add this function to your code and you're good to code:

```swift
func toggleTorch(on: Bool) {
    guard let device = AVCaptureDevice.default(for: .video) else { return }

    if device.hasTorch {
        do {
            try device.lockForConfiguration()

            if on == true {
                device.torchMode = .on
            } else {
                device.torchMode = .off
            }

            device.unlockForConfiguration()
        } catch {
            print("Torch could not be used")
        }
    } else {
        print("Torch is not available")
    }
}
```

With that, you can now turn the torch on like this:

```swift
toggleTorch(on: true)
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-take-a-photo-using-the-camera-and-uiimagepickercontroller">How to take a photo using the camera and UIImagePickerController 
/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller">How to choose a photo from the camera roll using UIImagePickerController 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/uikit/how-to-make-your-user-interface-in-code">How to make your user interface in code</a>
-->

:::

---

<TagLinks />