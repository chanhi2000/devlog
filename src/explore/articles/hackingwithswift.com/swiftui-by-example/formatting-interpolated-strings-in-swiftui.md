---
lang: ko-KR
title: Formatting interpolated strings in SwiftUI
description: Article(s) > Formatting interpolated strings in SwiftUI
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
      content: Article(s) > Formatting interpolated strings in SwiftUI
    - property: og:description
      content: Formatting interpolated strings in SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/formatting-interpolated-strings-in-swiftui.html
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
  "title": "SwiftUI by Example – Formatting interpolated strings in SwiftUI",
  "desc": "Formatting interpolated strings in SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/formatting-interpolated-strings-in-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/8O8HmKn2OFk" />

Okay, let’s fix up that order total so that it’s accurate. We’re going to add a `totalPrice` computed property to our type, which will calculate the value of their tip, add it to the total for their order, and return that amount.

Please add this to `CheckoutView` now:

```swift
var totalPrice: String {
    let total = Double(order.total)
    let tipValue = total / 100 * Double(tipAmount)
    return (total + tipValue).formatted(.currency(code: "USD"))
}
```

Now, remember that SwiftUI will re-invoke our `body` property whenever any of our `@State` properties change. As a result, we can use that computed property right inside our layout, and it will automatically change as the segmented control changes:

```swift
Section("Total: \(totalPrice)") {
```

If you try that out you should see it all works great – the total price reflects the items we’re ordering, plus any tip the user selected.

![Our completed order form, showing options for payment type, loyalty card, and tip percentage, plus a button to confirm the order.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-14~dark.png)

::: details Further reading

```component VPCard
{
  "title": "Article(s) > How to format text inside text views",
  "desc": "How to format text inside text views",
  "link": "/swift/swiftui-by-example/02-working-with-static-text/how-to-format-text-inside-text-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

::: details Similar solutions…

Answering the big question: should you learn SwiftUI, UIKit, or both?
Frequently asked questions about SwiftUI
SwiftUI tips and tricks
How to fix “Ambiguous reference to member 'buildBlock()’”
How to add Metal shaders to SwiftUI views using layer effects

<!-- TODO: add VPCard -->

:::

---

<TagLinsk />