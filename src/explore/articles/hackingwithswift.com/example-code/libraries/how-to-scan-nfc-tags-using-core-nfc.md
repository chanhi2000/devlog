---
lang: ko-KR
title: "How to scan NFC tags using Core NFC"
description: "Article(s) > How to scan NFC tags using Core NFC"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to scan NFC tags using Core NFC"
    - property: og:description
      content: "How to scan NFC tags using Core NFC"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-scan-nfc-tags-using-core-nfc.html
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
  "title": "How to scan NFC tags using Core NFC | Libraries - free Swift example code",
  "desc": "How to scan NFC tags using Core NFC",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-scan-nfc-tags-using-core-nfc",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
Any iPhones since the iPhone 7 are able to scan any NFC tags you have around, and it doesn’t take much work – iOS even provides default user interface for you.

To try it out, start by selecting your project in the project navigator, then choosing the Capabilities tab for your target. You need to enable the Near Field Communication Tag Reading capability, which configures your app to have NFC-scanning permissions.

Next, add new row to your Info.plist that completes the sentence “Hold iPhone near…”, describing your app’s usage. Open Info.plist, right-click in the white space, then choose Add Row. Select “Privacy - NFC Scan Usage Description” for the key name and “NFC tag to scan it” for the value.

That’s our configuration done, so let’s dive straight into the code. Start by opening code for your scanning view controller and adding a new import statement:

```swift
import CoreNFC
```

We need to start a scanning session when the app launches, but we need to store it in memory so it stays active. So, add this property to your view controller:

```swift
var session: NFCNDEFReaderSession?
```

Next, add these two lines of code to `viewDidLoad()`:

```swift
session = NFCNDEFReaderSession(delegate: self, queue: DispatchQueue.main, invalidateAfterFirstRead: false)
session?.begin()
```

Xcode will complain that the `ViewController` class doesn't currently conform to the `NFCNDEFReaderSessionDelegate` protocol, so you'll need to amend your class definition to include it:

```swift
class ViewController: UIViewController, NFCNDEFReaderSessionDelegate {
```

As per usual, Xcode will then complain that you're missing some required methods, so use its recommended fix to insert these two method stubs:

```swift
func readerSession(_ session: NFCNDEFReaderSession, didDetectNDEFs messages: [NFCNDEFMessage]) {

}

func readerSession(_ session: NFCNDEFReaderSession, didInvalidateWithError error: Error) {

}
```

Both of those methods are easy enough, but error handling is particularly so – we're just going to make the error print out to the Xcode console. Fill in the `didInvalidateWithError` method like this:

```swift
func readerSession(_ session: NFCNDEFReaderSession, didInvalidateWithError error: Error) {
    print(error.localizedDescription)
}
```

Now for the `didDetectNDEFs` method. When this is called you'll get an array of detected messages, each of which can contain one or more records describing a single piece of data. 

What you do with the NFC data is down to you, so we're just going to print it out. Modify your `didDetectNDEFs` method to this:

```swift
func readerSession(_ session: NFCNDEFReaderSession, didDetectNDEFs messages: [NFCNDEFMessage]) {
    for message in messages {
        for record in message.records {
            if let string = String(data: record.payload, encoding: .ascii) {
                print(string)
            }
        }
    }
}
```

That's all the code complete, so go ahead and run the app! If everything has worked, you will immediately see some system user interface appear prompting the user to hold their device near something to scan.

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-scan-a-qr-code">How to scan a QR code 
/example-code/media/how-to-scan-a-barcode">How to scan a barcode 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview">How to embed views in a tab bar using TabView 
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a>
-->

:::

---

<TagLinks />