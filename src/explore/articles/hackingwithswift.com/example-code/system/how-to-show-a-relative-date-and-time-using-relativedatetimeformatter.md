---
lang: ko-KR
title: "How to show a relative date and time using RelativeDateTimeFormatter"
description: "Article(s) > How to show a relative date and time using RelativeDateTimeFormatter"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to show a relative date and time using RelativeDateTimeFormatter"
    - property: og:description
      content: "How to show a relative date and time using RelativeDateTimeFormatter"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-show-a-relative-date-and-time-using-relativedatetimeformatter.html
date: 2022-03-23
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to show a relative date and time using RelativeDateTimeFormatter | System - free Swift example code",
  "desc": "How to show a relative date and time using RelativeDateTimeFormatter",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-show-a-relative-date-and-time-using-relativedatetimeformatter",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
If you want to format dates and times in the form “5 hours ago” or “3 months ago”, Apple gives us a dedicated formatter called `RelativeDateTimeFormatter`. This is localized for many languages, so you’ll automatically get back strings that work in French, German, Chinese, and more, all depending on the user’s locale.

Here’s an example to get you started:

```swift
// the date you want to format
let exampleDate = Date.now.addingTimeInterval(-15000)

// ask for the full relative date
let formatter = RelativeDateTimeFormatter()
formatter.unitsStyle = .full

// get exampleDate relative to the current date
let relativeDate = formatter.localizedString(for: exampleDate, relativeTo: Date.now)

// print it out
print("Relative date is: \(relativeDate)")
```

That will print “Relative date is: 4 hours ago”.

“Full” has a precise meaning here: we’ll get back things like “2 months ago”, and if you prefer you can try spell out mode to get “two months ago” or even short mode to get “2 mo. ago”.

Having that second `relativeTo` parameter available allows us to calculate relative values between two arbitrary dates, rather than one date and the current date:

```swift
let relativeDate2 = formatter.localizedString(for: someDate, relativeTo: someOtherDate)
```

**Tip:** Although relative time formatters are great for things in recent history – the last few months, perhaps – they are less useful for larger time gaps. So, you might want to try checking whether your date is over six months ago, and if so use a custom formatter instead to give the specific date.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range">How to check whether a date is inside a date range 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-provide-relative-sizes-using-geometryreader">How to provide relative sizes using GeometryReader</a>
-->

:::

---

<TagLinks />