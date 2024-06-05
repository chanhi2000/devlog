---
lang: ko-KR
title: How to ask the user to review your app
description: Article(s) > How to ask the user to review your app
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to ask the user to review your app
    - property: og:description
      content: How to ask the user to review your app
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-ask-the-user-to-review-your-app.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to ask the user to review your app | SwiftUI by Example",
  "desc": "How to ask the user to review your app",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-ask-the-user-to-review-your-app",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

If you import StoreKit into your SwiftUI app, you’ll gain access to an environment key called `requestReview`, which allows you to prompt the user to leave a review for your app.

To use it, first important StoreKit into your project, add the environment key as property in your view, then call it at an appropriate time. Here’s some code to get you started:

```swift
import StoreKit
import SwiftUI

struct ContentView: View {
    @Environment(\.requestReview) var requestReview

    var body: some View {
        Button("Review the app") {
            requestReview()
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-ask-the-user-to-review-your-app-1.zip)

::: important

Apple hasn’t documented this because, well, *Apple*, but I would imagine this works the same as the older UIKit equivalent where this is a *request* to show the review dialog – there’s a good chance it will do nothing, because the system doesn’t want to spam the user with messages.

:::

So, even though I’ve just shown you a code example using a button, please be much smarter in your own projects: wait until the user has used your app successfully quite a few times so they are happy, then call `requestReview()` in a way that is *not* in response to a button press – remember, it might do nothing at all.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run code when your app launches | SwiftUI by Example",
  "desc": "How to run code when your app launches",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-code-when-your-app-launches.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let the user paste data into your app | SwiftUI by Example",
  "desc": "How to let the user paste data into your app",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-the-user-paste-data-into-your-app.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />