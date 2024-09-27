---
lang: ko-KR
title: "How to make empty UITableViews look more attractive using DZNEmptyDataSet"
description: "Article(s) > How to make empty UITableViews look more attractive using DZNEmptyDataSet"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make empty UITableViews look more attractive using DZNEmptyDataSet"
    - property: og:description
      content: "How to make empty UITableViews look more attractive using DZNEmptyDataSet"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make empty UITableViews look more attractive using DZNEmptyDataSet | Libraries - free Swift example code",
  "desc": "How to make empty UITableViews look more attractive using DZNEmptyDataSet",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
If you use table views or collection views and you want to take one simple step to make your app both more attractive and more user-friendly, let me tell you what the pros do: we use `DZNEmptyDataSet`. This simple, free, open source library is designed to handle the case when your data source is empty by showing some prompt text, and optionally also a button or an image.

What I love about this library is that it's so astonishingly simple, and it even uses `NSAttributedString` so you can provide custom formatting.

First things first: <a href="https://github.com/dzenbot/DZNEmptyDataSet">go here and click Download Zip</a> to get the source code to `DZNEmptyDataSet`. Now unzip it, then look inside its Source folder for two files: **UIScrollView+EmptyDataSet.h** and **UIScrollView+EmptyDataSet.m**.

Drag these into your Xcode project, and Xcode should prompt you with the message "Would you like to configure an Objective-C bridging header?" Click "Creating Bridging Header" and you'll see a file called **YourProjectName-Bridging-Header.h** appear in your project. Open that file for editing in Xcode and give it this text:

```swift
#import "UIScrollView+EmptyDataSet.h"
```

This is required because `DZNEmptyDataSet` is written in Objective-C, so these steps are required to make it available to use in Swift.

Next, tell Swift that your current table view controller (or collection view controller) conforms to the `DZNEmptyDataSetSource` and `DZNEmptyDataSetDelegate` protocols like this:

```swift
class ViewController: UITableViewController, DZNEmptyDataSetSource, DZNEmptyDataSetDelegate {
    // your view controller here
}
```

You then need to add these three lines of code to your `viewDidLoad()` method:

```swift
tableView.emptyDataSetSource = self
tableView.emptyDataSetDelegate = self
tableView.tableFooterView = UIView()
```

The first two lines set your code up ready to provide various `DZNEmptyDataSet` elements; the third one is just there to make your interface cleaner.

One of the great things about `DZNEmptyDataSet` is that you only need to provide what you want. This means you can provide just a heading, or perhaps a heading and an image, or a heading, a description, an image and even a button. Even better, the button is made for you: all you need to do is tell `DZNEmptyDataSet` what its title should be.

The example code below sets up a title, a description, an image and a button, and even provides a response to the button being tapped. Remember: you don't need all these, just the ones you want to use in your app.

```swift
func title(forEmptyDataSet scrollView: UIScrollView) -> NSAttributedString? {
    let str = "Welcome"
    let attrs = [NSAttributedString.Key.font: UIFont.preferredFont(forTextStyle: .headline)]
    return NSAttributedString(string: str, attributes: attrs)
}

func description(forEmptyDataSet scrollView: UIScrollView) -> NSAttributedString? {
    let str = "Tap the button below to add your first grokkleglob."
    let attrs = [NSAttributedString.Key.font: UIFont.preferredFont(forTextStyle: .body)]
    return NSAttributedString(string: str, attributes: attrs)
}

func image(forEmptyDataSet scrollView: UIScrollView) -> UIImage? {
    return UIImage(named: "taylor-swift")
}

func buttonTitle(forEmptyDataSet scrollView: UIScrollView, for state: UIControlState) -> NSAttributedString? {
    let str = "Add Grokkleglob"
    let attrs = [NSAttributedString.Key.font: UIFont.preferredFont(forTextStyle: .callout)]
    return NSAttributedString(string: str, attributes: attrs)
}

func emptyDataSet(_ scrollView: UIScrollView, didTap button: UIButton) {
    let ac = UIAlertController(title: "Button tapped!", message: nil, preferredStyle: .alert)
    ac.addAction(UIAlertAction(title: "Hurray", style: .default))
    present(ac, animated: true)
}
```

-->

::: details Similar solutions…

<!--
/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller">How to preview files using Quick Look and QLPreviewController 
/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview">How to stop empty row separators appearing in UITableView 
/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest">How to look up a location with MKLocalSearch.Request 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types">How to create Quick Look debug previews for your custom types</a>
-->

:::

---

<TagLinks />