---
lang: ko-KR
title: "How to create Auto Layout constraints in code: constraints(withVisualFormat:)"
description: "Article(s) > How to create Auto Layout constraints in code: constraints(withVisualFormat:)"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create Auto Layout constraints in code: constraints(withVisualFormat:)"
    - property: og:description
      content: "How to create Auto Layout constraints in code: constraints(withVisualFormat:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-auto-layout-constraints-in-code-constraintswithvisualformat.html
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
  "title": "How to create Auto Layout constraints in code: constraints(withVisualFormat:) | UIKit - free Swift example code",
  "desc": "How to create Auto Layout constraints in code: constraints(withVisualFormat:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-auto-layout-constraints-in-code-constraintswithvisualformat",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
While the complexities of Auto Layout make it something most people prefer to grapple with using Interface Builder, it does have some cool tricks up its sleeve if you prefer to work in code. One of those tricks is called Visual Format Language (VFL) and lets you use ASCII art to tell iOS how you want your views laid out.

First, here's a dummy test case you can copy and paste into your project. It creates five labels of different colors and adds them all to your view:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    let label1 = UILabel()
    label1.translatesAutoresizingMaskIntoConstraints = false
    label1.backgroundColor = UIColor.red
    label1.text = "THESE"
    label1.sizeToFit()

    let label2 = UILabel()
    label2.translatesAutoresizingMaskIntoConstraints = false
    label2.backgroundColor = UIColor.cyan
    label2.text = "ARE"
    label2.sizeToFit()

    let label3 = UILabel()
    label3.translatesAutoresizingMaskIntoConstraints = false
    label3.backgroundColor = UIColor.yellow
    label3.text = "SOME"
    label3.sizeToFit()

    let label4 = UILabel()
    label4.translatesAutoresizingMaskIntoConstraints = false
    label4.backgroundColor = UIColor.green
    label4.text = "AWESOME"
    label4.sizeToFit()

    let label5 = UILabel()
    label5.translatesAutoresizingMaskIntoConstraints = false
    label5.backgroundColor = UIColor.orange
    label5.text = "LABELS"
    label5.sizeToFit()

    view.addSubview(label1)
    view.addSubview(label2)
    view.addSubview(label3)
    view.addSubview(label4)
    view.addSubview(label5)
}
```

If you run the project, you'll see the labels are all bunched up in the top-left corner, which doesn't look great. To fix this, we're going to use VFL to have each label occupy the full width of the screen, then spaced out so they are position below each other.

When you use VFL you need to create a dictionary of the views you want to work with. This dictionary needs to have the name of the view inside VFL and a reference to the view itself, but in practice most people just use the same name for VFL as the variable like this:

```swift
let viewsDictionary = ["label1": label1, "label2": label2, "label3": label3, "label4": label4, "label5": label5]
```

Put that just below the final `addSubview()` call.

Now for the VFL itself: put this directly beneath the previous line in order to have every label stretch out to occupy the full width of the screen:

```swift
for label in viewsDictionary.keys {
    view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "H:|[\(label)]|", options: [], metrics: nil, views: viewsDictionary))
}
```

Finally, add this to make the views lay themselves out below each other:

```swift
view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "V:|[label1]-[label2]-[label3]-[label4]-[label5]", options: [], metrics: nil, views: viewsDictionary))
```

This is only the beginning of what VFL can do – you should definitely read my <a href="/read/6/overview">Auto Layout tutorial</a> for more details.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-activate-multiple-auto-layout-constraints-using-activate">How to activate multiple Auto Layout constraints using activate() 
/example-code/uikit/how-to-identify-your-auto-layout-constraints">How to identify your Auto Layout constraints 
/example-code/uikit/how-to-stop-auto-layout-and-autoresizing-masks-conflicting-translatesautoresizingmaskintoconstraints">How to stop Auto Layout and autoresizing masks conflicting: translatesAutoresizingMaskIntoConstraints 
/example-code/uikit/how-to-fix-auto-layout-problems">How to fix Auto Layout problems 
/example-code/uikit/how-to-position-a-view-using-auto-layout-anchors">How to position a view using Auto Layout anchors</a>
-->

:::

---

<TagLinks />