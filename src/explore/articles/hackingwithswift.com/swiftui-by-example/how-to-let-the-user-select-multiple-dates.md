---
lang: ko-KR
title: How to let the user select multiple dates
description: Article(s) > How to let the user select multiple dates
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
      content: Article(s) > How to let the user select multiple dates
    - property: og:description
      content: How to let the user select multiple dates
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-the-user-select-multiple-dates.html
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
  "title": "How to let the user select multiple dates | SwiftUI by Example",
  "desc": "How to let the user select multiple dates",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-the-user-select-multiple-dates",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `MultiDatePicker` shows a calendar view where the user is able to select a variety of dates at the same time, either from any possible date or from a date range of your choosing.

In its simplest form, you just need some sort of state to track which dates they have chosen, then bind that to your picker:

```swift
struct ContentView: View {
    @State var dates: Set<DateComponents> = []

    var body: some View {
        MultiDatePicker("Select your preferred dates", selection: $dates)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-the-user-select-multiple-dates-1.zip)

However, chances are you're going to want to convert those date components to real dates, in which case you'll want to read the user's calendar from the environment and convert the data as needed:

```swift
struct ContentView: View {
    @Environment(\.calendar) var calendar
    @State var dates: Set<DateComponents> = []

    var body: some View {
        VStack {
            MultiDatePicker("Select your preferred dates", selection: $dates)

            Text(summary)
        }
        .padding()
    }

    var summary: String {
        dates.compactMap { components in
            calendar.date(from: components)?.formatted(date: .long, time: .omitted)
        }.formatted()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-the-user-select-multiple-dates-2.zip)

By default, the user is able to choose any dates they like, but you can also restrict their selection to a range of your choosing. For example, this code allows them to select any date from today onwards, but nothing earlier:

```swift
struct ContentView: View {
    @Environment(\.calendar) var calendar
    @State var dates: Set<DateComponents> = []

    var body: some View {
        VStack {
            MultiDatePicker("Select your preferred dates", selection: $dates, in: Date.now...)

            Text(summary)
        }
        .padding()
    }

    var summary: String {
        dates.compactMap { components in
            calendar.date(from: components)?.formatted(date: .long, time: .omitted)
        }.formatted()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-the-user-select-multiple-dates-3.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to let users select pictures using PhotosPicker | SwiftUI by Example",
  "desc": "How to let users select pictures using PhotosPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-pictures-using-photospicker.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users select text | SwiftUI by Example",
  "desc": "How to let users select text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users select a color with ColorPicker | SwiftUI by Example",
  "desc": "How to let users select a color with ColorPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-a-color-with-colorpicker.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to format dates inside text views | SwiftUI by Example",
  "desc": "How to format dates inside text views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-dates-inside-text-views.md",
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