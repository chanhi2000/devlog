---
lang: ko-KR
title: Migrating from UIKit to SwiftUI
description: Article(s) > Migrating from UIKit to SwiftUI
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > Migrating from UIKit to SwiftUI
    - property: og:description
      content: Migrating from UIKit to SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/migrating-from-uikit-to-swiftui.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Migrating from UIKit to SwiftUI | SwiftUI by Example",
  "desc": "Migrating from UIKit to SwiftUI",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/migrating-from-uikit-to-swiftui", 
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you've used UIKit before, many of the classes you know and love map pretty much directly to their SwiftUI equivalents just by dropping the `UI` prefix. That doesn't mean they are the same thing underneath, just that they have the same or similar functionality.

Here's a list to get you started, with UIKit class names followed by SwiftUI names:

- `UITableView`: `List`
- `UICollectionView`: `LazyVGrid` and `LazyHGrid`
- `UIScrollView`: `ScrollView`
- `UILabel`: `Text`
- `UITextField`: `TextField`
- `UITextField` with `isSecureTextEntry` set to true: `SecureField`
- `UITextView`: `TextEditor` (plain strings only)
- `UISwitch`: `Toggle`
- `UISlider`: `Slider`
- `UIButton`: `Button`
- `UINavigationController`: `NavigationStack` or `NavigationSplitView`
- `UIAlertController` with style `.alert`: `.alert()`
- `UIAlertController` with style `.actionSheet`: `.confirmationDialog()`
- `UIStackView` with horizontal axis: `HStack`
- `UIStackView` with vertical axis: `VStack`
- `UIImageView`: `Image`
- `UISegmentedControl`: `Picker`
- `UIStepper`: `Stepper`
- `UIDatePicker`: `DatePicker`
- `UIProgressView`: `ProgressView` with a value
- `UIActivityIndicatorView`: `ProgressView` without a value
- `MKMapView`: `Map`
- `NSAttributedString`: `AttributedString`.

There are many other components that are exclusive to SwiftUI, such as a stack view that lets us build things by depth rather than horizontally or vertically.

---

<TagLinks />
