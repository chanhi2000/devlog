---
lang: ko-KR
title: "Importing photos with UIImagePickerController"
description: "Article(s) > Importing photos with UIImagePickerController"
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
      content: "Article(s) > Importing photos with UIImagePickerController"
    - property: og:description
      content: "Importing photos with UIImagePickerController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/10/04-importing-photos-with-uiimagepickercontroller.html
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
  "title": "Importing photos with UIImagePickerController | Hacking with iOS",
  "desc": "Importing photos with UIImagePickerController",
  "link": "https://hackingwithswift.com/read/10/4/importing-photos-with-uiimagepickercontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/ZiIQyPWc9UA" />

There are lots of collection view events to handle when the user interacts with a cell, but we'll come back to that later. For now, let's look at how to import pictures using `UIImagePickerController`. This new class is designed to let users select an image from their camera to import into an app. When you first create a `UIImagePickerController`, iOS will automatically ask the user whether the app can access their photos.

First, we need to create a button that lets users add people to the app. This is as simple as putting the following into the `viewDidLoad()` method:

```swift
navigationItem.leftBarButtonItem = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(addNewPerson))
```

The `addNewPerson()` method is where we need to use the `UIImagePickerController`, but it's so easy to do I'm just going to show you the code:

```swift
@objc func addNewPerson() {
    let picker = UIImagePickerController()
    picker.allowsEditing = true
    picker.delegate = self
    present(picker, animated: true)
}
```

There are three interesting things in there:

1. We set the `allowsEditing` property to be true, which allows the user to crop the picture they select.
2. When you set `self` as the delegate, you'll need to conform not only to the `UIImagePickerControllerDelegate` protocol, but also the `UINavigationControllerDelegate` protocol.
3. The whole method is being called from Objective-C code using `#selector`, so we need to use the `@objc` attribute. This is the last time I’ll be repeating this, but hopefully you’re mentally always expecting `#selector` to be paired with `@objc`.

In <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift`, modify this line:

```swift
class ViewController: UICollectionViewController {
```

To this:

```swift
class ViewController: UICollectionViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
```

That tells Swift you promise your class supports all the functionality required by the two protocols `UIImagePickerControllerDelegate` and `UINavigationControllerDelegate`. The first of those protocols is useful, telling us when the user either selected a picture or cancelled the picker. The second, `UINavigationControllerDelegate`, really is quite pointless here, so don't worry about it beyond just modifying your class declaration to include the protocol.

When you conform to the `UIImagePickerControllerDelegate` protocol, you don't need to add any methods because both are optional. But they aren't really – they are marked optional for whatever reason, but your code isn't much good unless you implement at least one of them!

The delegate method we care about is `imagePickerController(_, didFinishPickingMediaWithInfo:)`, which returns when the user selected an image and it's being returned to you. This method needs to do several things:

- Extract the image from the dictionary that is passed as a parameter.
- Generate a unique filename for it.
- Convert it to a JPEG, then write that JPEG to disk.
- Dismiss the view controller.

To make all this work you're going to need to learn a few new things.

First, it's very common for Apple to send you a dictionary of several pieces of information as a method parameter. This can be hard to work with sometimes because you need to know the names of the keys in the dictionary in order to be able to pick out the values, but you'll get the hang of it over time.

This dictionary parameter will contain one of two keys: `.editedImage` (the image that was edited) or `.originalImage`, but in our case it should only ever be the former unless you change the `allowsEditing` property.

The problem is, we don't know if this value exists as a `UIImage`, so we can't just extract it. Instead, we need to use an optional method of typecasting, `as?`, along with `if let`. Using this method, we can be sure we always get the right thing out.

Second, we need to generate a unique filename for every image we import. This is so that we can copy it to our app's space on the disk without overwriting anything, and if the user ever deletes the picture from their photo library we still have our copy. We're going to use a new type for this, called `UUID`, which generates a Universally Unique Identifier and is perfect for a random filename.

Third, once we have the image, we need to write it to disk. You're going to need to learn two new pieces of code: `UIImage` has a `jpegData()` to convert it to a `Data` object in JPEG image format, and there's a method on `Data` called `write(to:)` that, well, writes its data to disk. We used `Data` earlier, but as a reminder it’s a relatively simple data type that can hold any type of binary type – image data, zip file data, movie data, and so on.

Writing information to disk is easy enough, but finding where to put it is tricky. All apps that are installed have a directory called Documents where you can save private information for the app, and it's also automatically synchronized with iCloud. The problem is, it's not obvious how to find that directory, so I have a method I use called `getDocumentsDirectory()` that does exactly that – you don't need to understand how it works, but you do need to copy it into your code.

With all that in mind, here are the new methods:

```swift
func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
    guard let image = info[.editedImage] as? UIImage else { return }

    let imageName = UUID().uuidString
    let imagePath = getDocumentsDirectory().appendingPathComponent(imageName)

    if let jpegData = image.jpegData(compressionQuality: 0.8) {
        try? jpegData.write(to: imagePath)
    }

    dismiss(animated: true)
}

func getDocumentsDirectory() -> URL {
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    return paths[0]
}
```

Again, it doesn't matter how `getDocumentsDirectory()` works, but if you're curious: the first parameter of `FileManager.default.urls` asks for the documents directory, and its second parameter adds that we want the path to be relative to the user's home directory. This returns an array that nearly always contains only one thing: the user's documents directory. So, we pull out the first element and return it.

Now onto the code that matters: as you can see I’ve used `guard` to pull out and typecast the image from the image picker, because if that fails we want to exit the method immediately. We then create an `UUID` object, and use its `uuidString` property to extract the unique identifier as a string data type.

The code then creates a new constant, `imagePath`, which takes the `URL` result of `getDocumentsDirectory()` and calls a new method on it: `appendingPathComponent()`. This is used when working with file paths, and adds one string (`imageName` in our case) to a path, including whatever path separator is used on the platform.

Now that we have a `UIImage` containing an image and a path where we want to save it, we need to convert the `UIImage` to a `Data` object so it can be saved. To do that, we use the `jpegData()` method, which takes one parameter: a quality value between 0 and 1, where 1 is “maximum quality”.

Once we have a `Data` object containing our JPEG data, we just need to unwrap it safely then write it to the file name we made earlier. That's done using the `write(to:)` method, which takes a filename as its parameter.

So: users can pick an image, and we'll save it to disk. But this still doesn't do anything – you won't see the picture in the app, because we aren't doing anything with it beyond writing it to disk. To fix that, we need to create a custom class to hold custom data…

---

<TagLinks />