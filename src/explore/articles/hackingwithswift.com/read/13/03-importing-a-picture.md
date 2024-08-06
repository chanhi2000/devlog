---
lang: ko-KR
title: "Importing a picture"
description: "Article(s) > Importing a picture"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Importing a picture"
    - property: og:description
      content: "Importing a picture"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/13/03-importing-a-picture.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Importing a picture | Hacking with iOS",
  "desc": "Importing a picture",
  "link": "https://hackingwithswift.com/read/13/3/importing-a-picture",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/vr-lKRdKuNY" />

We already have two outlets at the top of our class: one for the image view and one for the slider. We need another property, in which we will store a `UIImage` containing the image that the user selected. So, add this beneath the two outlets:

```swift
var currentImage: UIImage!
```

Our first task will be to import a photo from the user's photo library. This is almost identical to project 10, so I'm going to explain only the important bits. If you missed project 10, you should have paid heed to my warning not to skip projects!

First we need to add a button to the navigation bar that will allow users to import a photo from their library. Put these two lines into your `viewDidLoad()` method:

```swift
title = "YACIFP"
navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(importPicture))
```

Alright, so the first one isn't needed – it just sets the title to be YACIFP, short for "Yet Another Core Image Filters Program." (Spoiler: the App Store is full of them!) If you're feeling a bit less cynical than me, try "Instafilter" for a title instead. But what matters is the second line, because it starts the import process.

Here's the `importPicture()` method – it's almost identical to the import method from project 10, so again no explaining required:

```swift
@objc func importPicture() {
    let picker = UIImagePickerController()
    picker.allowsEditing = true
    picker.delegate = self
    present(picker, animated: true)
}
```

You should remember that the first time you use a `UIImagePickerController` iOS will ask the user for permission to read their photo library, which means we need to add a text string describing our intent. So, open Info.plist, select any item, click +, then choose the key name “Privacy - Photo Library Additions Usage Description”. Give it the value “We need to import photos” then press return.

Once you assign our view controller to be the image picker's delegate, you'll get warnings that we don't conform to the correct protocols. Fix that by changing the view controller's class definition to this:

```swift
class ViewController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
```

Again, this is identical to project 10.

As before, we need to implement a method for when the user selected a picture using the image picker. This code is almost verbatim from project 10, so it should all be old news to you:

```swift
func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
    guard let image = info[.editedImage] as? UIImage else { return }

    dismiss(animated: true)

    currentImage = image
}
```

There is one slight change in there, and it's where we set our `currentImage` image to be the one selected in the image picker. This is required so that we can have a copy of what was originally imported. Whenever the user changes filter, we need to put that original image back into the filter.

This has all been old code, so nothing too taxing. But now it's time for Core Image!

---

<TagLinks />