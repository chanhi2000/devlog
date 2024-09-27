---
lang: ko-KR
title: "How to let users choose a font with UIFontPickerViewController"
description: "Article(s) > How to let users choose a font with UIFontPickerViewController"
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
      content: "Article(s) > How to let users choose a font with UIFontPickerViewController"
    - property: og:description
      content: "How to let users choose a font with UIFontPickerViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-let-users-choose-a-font-with-uifontpickerviewcontroller.html
date: 2019-10-01
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
  "title": "How to let users choose a font with UIFontPickerViewController | UIKit - free Swift example code",
  "desc": "How to let users choose a font with UIFontPickerViewController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-let-users-choose-a-font-with-uifontpickerviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!--
UIKit provides `UIFontPickerViewController` as a built-in view controller for letting users select from a list of installed fonts available for our apps. Using it takes three steps: create a delegate to handle callbacks, create and show an instance of the font picker, then read the response as appropriate.

As an example, if you had a `UIViewController` subclass that wanted to show a font picker, you would make it conform to the `UIFontPickerViewControllerDelegate` protocol like this:

```swift
class ViewController: UIViewController, UIFontPickerViewControllerDelegate {
    // the rest of your class
}
```

Second, you would create the font picker, assign the current view controller as its delegate, then show it like this:

```swift
let vc = UIFontPickerViewController()
vc.delegate = self
present(vc, animated: true)
```

Finally, you would implement the `fontPickerViewControllerDidPickFont()` method. This sends you back the `UIFontPickerViewController` instance you created, from which you can read the font descriptor that was chosen.

If you weren’t already aware, a *font descriptor* is different from a *font*: it describes the type of font chosen, but doesn’t associate a size with it. So, if you want to use the selected font in a label you need to create a `UIFont` instance from it.

For example, you might write this:

```swift
func fontPickerViewControllerDidPickFont(_ viewController: UIFontPickerViewController) {
    // attempt to read the selected font descriptor, but exit quietly if that fails
    guard let descriptor = viewController.selectedFontDescriptor else { return }

    let font = UIFont(descriptor: descriptor, size: 36)
    yourLabel.font = font
}
```

You don’t need to dismiss the font picker; it will be dismissed automatically.

If you want to, you can optionally also add the `fontPickerViewControllerDidCancel()` method, which will be called if the user cancels the font picker rather than selecting a font:

```swift
func fontPickerViewControllerDidCancel(_ viewController: UIFontPickerViewController) {
    // handle cancel event here
}
```

Again, this will automatically dismiss the font picker for you, so you don’t need to do it yourself.

It’s worth adding that you have some control over how the font picker works. More specifically, you can create it with a customization class that contains three useful properties:

- `displayUsingSystemFont` will show each font in the default system font, rather than using the font itself. This sacrifices some usefulness for legibility. (This is false by default.)
<li>`includeFaces` adds a dropdown arrow next to each font type, letting users select different weights and options. (This is also false by default.)
<li>`filteredTraits` is an array of traits that limit the types of font you want to show. (This is empty by default, so all fonts are shown.)

For example, if we wanted to show a font picker in system fonts, with faces included, but only showing serif fonts (think Times New Roman rather than Helvetica), we’d write code like this:

```swift
let configuration = UIFontPickerViewController.Configuration()
configuration.includeFaces = true
configuration.displayUsingSystemFont = true
configuration.filteredTraits = [.classModernSerifs]

let vc = UIFontPickerViewController(configuration: configuration)
```

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller">How to choose a photo from the camera roll using UIImagePickerController 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let 
/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font 
/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics">How to resize a custom font using UIFontMetrics 
/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title">How to style the font in a UINavigationBar's title</a>
-->

:::

---

<TagLinks />