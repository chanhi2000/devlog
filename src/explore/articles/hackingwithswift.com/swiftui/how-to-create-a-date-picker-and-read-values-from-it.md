---
lang: ko-KR
title: How to create a date picker and read values from it
description: Article(s) > How to create a date picker and read values from it
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
      content: Article(s) > How to create a date picker and read values from it
    - property: og:description
      content: How to create a date picker and read values from it
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-date-picker-and-read-values-from-it.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create a date picker and read values from it | SwiftUI by Example",
  "desc": "How to create a date picker and read values from it",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-date-picker-and-read-values-from-it",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI's `DatePicker` view is analogous to `UIDatePicker`, and comes with a variety options for controlling how it looks and works. Like all controls that store values, it does need to be bound to some sort of state in your app.

For example, this creates a date picker bound to a `birthDate` property, allowing users to choose any date up before now, then displays the value of the date picker as it's set:

```swift
struct ContentView: View {
    @State private var birthDate = Date.now

    var body: some View {
        VStack {
            DatePicker(selection: $birthDate, in: ...Date.now, displayedComponents: .date) {
                Text("Select a date")
            }

            Text("Date is \(birthDate.formatted(date: .long, time: .omitted))")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-date-picker-and-read-values-from-it-1.zip)

![The text “Select a date” beside a grey capsule containing the text “Jun 30, 2021”. Below is the text “Date is June 30, 2021”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-date-picker-and-read-values-from-it-1~dark.png)

::: important

If you're using Xcode 12 you should create and use your own local date formatter, like this:

:::

```swift
struct ContentView: View {
    let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .long
        return formatter
    }()

    @State private var birthDate = Date.now

    var body: some View {
        VStack {
            DatePicker(selection: $birthDate, in: ...Date.now, displayedComponents: .date) {
                Text("Select a date")
            }

            Text("Date is \(birthDate, formatter: dateFormatter)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-date-picker-and-read-values-from-it-2.zip)

You can see I've set `displayedComponents` to `.date`, but you could also use `.hourAndMinute` to get time data instead.

Using `in: ...Date.now` specifies the date range as being anything up to and including the current date, but nothing after. You could do the opposite – i.e., allow dates starting from now onwards – by using `in: Date.now...`, but you can also use precise ranges if that's what you want.

From iOS 14 onwards, you can use the new `GraphicalDatePickerStyle()` to get a more advanced date picker, that shows a calendar plus space to enter a precise time:

```swift
struct ContentView: View {
    @State private var date = Date.now

    var body: some View {
        VStack {
            Text("Enter your birthday")
                .font(.largeTitle)
            DatePicker("Enter your birthday", selection: $date)
                .datePickerStyle(GraphicalDatePickerStyle())
                .frame(maxHeight: 400)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-date-picker-and-read-values-from-it-3.zip)

![The words “Enter your birthday” above a large calendar-style date picker. Below that is a time selector reading “1:59PM”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-date-picker-and-read-values-from-it-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a picker and read values from it | SwiftUI by Example",
  "desc": "How to create a picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-picker-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden() | SwiftUI by Example",
  "desc": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix a Form Picker or a NavigationLink that isn't tappable | SwiftUI by Example",
  "desc": "How to fix a Form Picker or a NavigationLink that isn't tappable",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a segmented control and read values from it | SwiftUI by Example",
  "desc": "How to create a segmented control and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a slider and read values from it | SwiftUI by Example",
  "desc": "How to create a slider and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-slider-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />