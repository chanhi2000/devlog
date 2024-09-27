---
lang: ko-KR
title: "How to use UIPickerView"
description: "Article(s) > How to use UIPickerView"
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
      content: "Article(s) > How to use UIPickerView"
    - property: og:description
      content: "How to use UIPickerView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-uipickerview.html
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
  "title": "How to use UIPickerView | UIKit - free Swift example code",
  "desc": "How to use UIPickerView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-uipickerview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
The spinning, barrel-shaped picker view has been a hallmark component of iOS since the first iPhone, and it doesn’t take much work for you to use in your own apps.

First, create and position a `UIPickerView` where you want it. This code creates one at the bottom of the screen:

```swift
let picker = UIPickerView()
picker.translatesAutoresizingMaskIntoConstraints = false
view.addSubview(picker)

picker.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
picker.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
picker.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor).isActive = true
```

Now decide what should be the data source and delegate for the picker view. Traditionally these are there to provide data (the data source) and respond to actions (the delegate), but `UIPickerView` gets these two confused so you really need both.

To make things easy here we’re going to use your existing view controller for both data source and delegate, but you should move this code elsewhere in your own projects. So, start by adding both `UIPickerViewDataSource` and `UIPickerViewDelegate` to the conformance list for your view controller.

Finally, implement three methods: `numberOfComponents()` describes how many individual segments there are in the picker view, `numberOfRowsInComponent` describes how many rows each segment has, and `titleForRow` provides the title for each row in each segment.

Here’s some example code to get you started:

```swift
func numberOfComponents(in pickerView: UIPickerView) -> Int {
    return 2
}

func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
    if component == 0 {
        return 10
    } else {
        return 100
    }
}

func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
    if component == 0 {
        return "First \(row)"
    } else {
        return "Second \(row)"
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-read-a-title-from-a-uipickerview-using-titleforrow">How to read a title from a UIPickerView using titleForRow 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName()</a>
-->

:::

---

<TagLinks />