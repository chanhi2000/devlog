---
lang: ko-KR
title: All function parameters have labels unless you request otherwise
description: Article(s) > All function parameters have labels unless you request otherwise
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-3.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > All function parameters have labels unless you request otherwise
    - property: og:description
      content: All function parameters have labels unless you request otherwise
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/3.0/function-parameters.html
prev: /explore/articles/hackingwithswift.com/swift/3.1/prefix-drop.md
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "All function parameters have labels unless you request otherwise | Changes in Swift 3.0",
  "desc": "All function parameters have labels unless you request otherwise",
  "link": "https://hackingwithswift.com/swift/3.0/function-parameters", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 3.0

The way we call functions and methods already changed in Swift 2.0, but it's changing again and this time it's going to break *everything*. In Swift 2.x and earlier, method names did not require a label for their first parameter, so the name of the first parameter was usually built into the method name. For example:

```swift
names.indexOf("Taylor")
"Taylor".writeToFile("filename", atomically: true, encoding: NSUTF8StringEncoding)
SKAction.rotateByAngle(CGFloat(M_PI_2), duration: 10)
UIFont.preferredFontForTextStyle(UIFontTextStyleSubheadline)
override func numberOfSectionsInTableView(tableView: UITableView) -> Int
func viewForZoomingInScrollView(scrollView: UIScrollView) -> UIView?
NSTimer.scheduledTimerWithTimeInterval(0.35, target: self, selector: #selector(createEnemy), userInfo: nil, repeats: true)
```

Swift 3 makes all labels required unless you specify otherwise, which means the method names no longer detail their parameters. In practice, this often means the last part of the method name gets moved to be the name of the first parameter.

To show you how that looks, here is that Swift 2.2 code followed by its equivalent in Swift 3:

```swift
names.indexOf("Taylor")
names.index(of: "Taylor")

"Taylor".writeToFile("filename", atomically: true, encoding: NSUTF8StringEncoding)
"Taylor".write(toFile: "somefile", atomically: true, encoding: String.Encoding.utf8)

SKAction.rotateByAngle(CGFloat(M_PI_2), duration: 10)
SKAction.rotate(byAngle: CGFloat(M_PI_2), duration: 10)

UIFont.preferredFontForTextStyle(UIFontTextStyleSubheadline)
UIFont.preferredFont(forTextStyle: UIFontTextStyle.subheadline)

override func numberOfSectionsInTableView(tableView: UITableView) -> Int
override func numberOfSections(in tableView: UITableView) -> Int

func viewForZoomingInScrollView(scrollView: UIScrollView) -> UIView?
func viewForZooming(in scrollView: UIScrollView) -> UIView?

NSTimer.scheduledTimerWithTimeInterval(0.35, target: self, selector: #selector(createEnemy), userInfo: nil, repeats: true)
Timer.scheduledTimer(timeInterval: 0.35, target: self, selector: #selector(createEnemy), userInfo: nil, repeats: true)
```

In that last call, notice how `NSTimer` is now just called `Timer`. Several other basic types have also dropped the "NS" prefix, so you'll now see `UserDefaults`, `FileManager`, `Data`, `Date`, `URL` `URLRequest`, `UUID`, `NotificationCenter`, and more.

Those are methods you *call*, but this has a knock-on effect for many methods that *get called* too: when you're connecting to frameworks such as UIKit, they expect to follow the old-style "no first parameter name" rule even in Swift 3.

Here are some example signatures from Swift 2.2:

```swift
override func viewWillAppear(animated: Bool)
override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int
override func didMoveToView(view: SKView)
override func traitCollectionDidChange(previousTraitCollection: UITraitCollection?)
func textFieldShouldReturn(textField: UITextField) -> Bool
```

In Swift 3, they all need an underscore before the first parameter, to signal that the caller (Objective-C code) won't be using a parameter label:

```swift
override func viewWillAppear(_ animated: Bool)
override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int
override func didMoveToView(_ view: SKView)
override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?)
func textFieldShouldReturn(_ textField: UITextField) -> Bool
```

::: details Changes in Swift 3.0
<!-- 
```component VPCard
{
  "title": "All function parameters have labels unless you request otherwise | Changes in Swift 3.0",
  "desc": "All function parameters have labels unless you request otherwise",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/function-parameters.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Omit needless words | Changes in Swift 3.0",
  "desc": "Omit needless words",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/omit-needless-words.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties | Changes in Swift 3.0",
  "desc": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/lower-camel-case.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Swifty importing of C functions | Changes in Swift 3.0",
  "desc": "Swifty importing of C functions",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/c-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Verbs and nouns | Changes in Swift 3.0",
  "desc": "Verbs and nouns",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/verbs-and-nouns.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 3.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-2-2-to-3-0.playground.zip)

:::

---

<TagLinks />