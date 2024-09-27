---
lang: ko-KR
title: "How to make your user interface in code"
description: "Article(s) > How to make your user interface in code"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make your user interface in code"
    - property: og:description
      content: "How to make your user interface in code"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-your-user-interface-in-code.html
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
  "title": "How to make your user interface in code | UIKit - free Swift example code",
  "desc": "How to make your user interface in code",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-your-user-interface-in-code",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
Creating your user interface in code gives you the flexibility to build things conditionally, to step through problems in a debugger, to re-use components more easily, and to monitor changes more closely in source control. On the flip side, you lose features like easy segues, static cell design in table views, the ability to preview on multiple devices simultaneously, and more.

However, I’m going to assume you’ve already decided you want to make your UI in code, so let’s take a look at how it’s done:

Often you’ll see code like this inside the `viewDidLoad()` method of a view controller:

```swift
backgroundColor = UIColor(white: 0.9, alpha: 1)

let stackView = UIStackView()
stackView.translatesAutoresizingMaskIntoConstraints = false
stackView.spacing = 10
view.addSubview(stackView)

stackView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor).isActive = true
stackView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
stackView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
stackView.axis = .vertical

let notice = UILabel()
notice.numberOfLines = 0
notice.text = "Your child has attempted to share the following photo from the camera:"
stackView.addArrangedSubview(notice)

let imageView = UIImageView(image: shareImage)
stackView.addArrangedSubview(imageView)

let prompt = UILabel()
prompt.numberOfLines = 0
prompt.text = "What do you want to do?"
stackView.addArrangedSubview(prompt)

for option in ["Always Allow", "Allow Once", "Deny", "Manage Settings"] {
    let button = UIButton(type: .system)
    button.setTitle(option, for: .normal)
    stackView.addArrangedSubview(button)
}
```

That’s a complex user interface, but if you’re writing that sort of thing inside your `viewDidLoad()` method you’re making a terrible mistake. In fact, if you write that kind of code and you aren’t just prototyping or learning something, then you lose all rights to complain that your view controllers are massive later on.

All the code above – literally all of it – is *view* code, and needs to be treated as such. It is not controller code, and even with Apple’s muddied definition of MVC it is not *view controller* code either. It’s view code, and belongs in a subclass of `UIView`.

This change is trivial to make: you copy all that code, paste it into a new subclass of `UIView` called `SharePromptView`, then change the class of your view controller to your new subclass. 

The final `SharePromptView` class should look something like this:

```swift
class SharePromptView: UIView {
    override init(frame: CGRect) {
        super.init(frame: frame)
        createSubviews()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        createSubviews()
    }

    func createSubviews() {
        // all the layout code from above
    }
}
```

All `UIView` subclasses must implement `init(coder:)`, but as you’re creating your UI in code you will also need to add `init(frame:)`. The `createSubviews()` method is there to support both.

Thanks to that custom `UIView` subclass you can now take a huge amount of code out of your view controller:

```swift
class ViewController: UIViewController {
    var shareView = SharePromptView()

    override func loadView() {
        view = shareView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
    }
}
```

Having a dedicated `shareView` property allows you to access any properties you declare inside `SharePromptView` without having to keep casting `view`.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />