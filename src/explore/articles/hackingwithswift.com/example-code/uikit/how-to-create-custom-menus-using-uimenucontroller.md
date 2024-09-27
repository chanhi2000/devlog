---
lang: ko-KR
title: "How to create custom menus using UIMenuController"
description: "Article(s) > How to create custom menus using UIMenuController"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create custom menus using UIMenuController"
    - property: og:description
      content: "How to create custom menus using UIMenuController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-custom-menus-using-uimenucontroller.html
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
  "title": "How to create custom menus using UIMenuController | UIKit - free Swift example code",
  "desc": "How to create custom menus using UIMenuController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-custom-menus-using-uimenucontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!--
iOS has a built-in menu system that, while *useful*, doesn't actually get much *use* – because users don't expect to see it, developers don't use it, thus making it even less likely that users expect to see it.

Anyway, if you want to attach multiple actions to elements in your UI – pieces of text in a text view or web view, table view rows, and so on – you might find iOS menus are for you, so you need to turn to `UIMenuController`. This has extremely simple API: you just create a `UIMenuItem` object for every action you want, then register them all and wait for the user to do something.

Below is a complete example for a view controller that has a web view inside it – you'll need to create that in your storyboard. The code sets up a new menu item named "Grok" that runs the `runGrok()` method when tapped. I've made it do something real: when the user selects some text, they tap Grok to have that printed out to the Xcode console.

Here's the code:

```swift
class ViewController: UIViewController, UITextViewDelegate {
    @IBOutlet var webView: UIWebView!

    override func viewDidLoad() {
        super.viewDidLoad()

        webView.loadHTMLString("<p>Hello, world!</p>", baseURL: nil)
        enableCustomMenu()
    }

    func enableCustomMenu() {
        let lookup = UIMenuItem(title: "Grok", action: #selector(runGrok))
        UIMenuController.shared.menuItems = [lookup]
    }

    func disableCustomMenu() {
        UIMenuController.shared.menuItems = nil
    }

    @objc func runGrok() {
        let text = webView.stringByEvaluatingJavaScript(from: "window.getSelection().toString();")
        print(text)
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-create-popover-menus-using-uipopoverpresentationcontroller">How to create popover menus using UIPopoverPresentationController 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a>
-->

:::

---

<TagLinks />