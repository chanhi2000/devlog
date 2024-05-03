---
lang: ko-KR
title: How to format text inside text views
description: Article(s) > How to format text inside text views
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
      content: Article(s) > How to format text inside text views
    - property: og:description
      content: How to format text inside text views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-text-inside-text-views.html
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
  "title": "How to format text inside text views | SwiftUI by Example",
  "desc": "How to format text inside text views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-format-text-inside-text-views",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI's text views are capable of showing dates, arrays, measurements and more, all through their `format` parameter. However, this is available only in iOS 15, so for iOS 14 and 13 support please see the `formatter` parameter below.

If you use the `.list()` format type with an array of strings, you can get neatly formatted lists such as “Howard, Josie, and Kingsley”. For example, this will print ingredients lists correctly no matter how many items are added:

```swift
struct ContentView: View {
    @State private var ingredients = [String]()

    var body: some View {
        VStack {
            Text(ingredients, format: .list(type: .and))

            Button("Add Ingredient") {
                let possibles = ["Egg", "Sausage", "Bacon", "Spam"]

                if let newIngredient = possibles.randomElement() {
                    ingredients.append(newIngredient)
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-format-text-inside-text-views-1.zip)

![The words “Spam, Egg, Sausage, and Bacon” above an “`[Add Ingredient]`” button.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-format-text-inside-text-views-1~dark.png)

If you have an array of a numeric type such as integers, you can format that by specifying a member style, like this:

```swift
struct ContentView: View {
    @State private var rolls = [Int]()

    var body: some View {
        VStack {
            Text(rolls, format: .list(memberStyle: .number, type: .and))

            Button("Roll Dice") {
                let result = Int.random(in: 1...6)
                rolls.append(result)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-format-text-inside-text-views-2.zip)

![The line “4, 3, 2, and 6” above a “Roll Dice” button.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-format-text-inside-text-views-2~dark.png)

Or if you're working with measurements such as distance or weight, the `.measurement()` format type will automatically adjust your value for display in the user's locale. For example, if you were storing values in centimeters internally but the user had a US locale on their device, iOS will automatically display a value in feet or inches depending on the size of the value.

```swift
struct ContentView: View {
    let length = Measurement(value: 225, unit: UnitLength.centimeters)

    var body: some View {
        Text(length, format: .measurement(width: .wide))
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-format-text-inside-text-views-3.zip)

![The text “7.4 feet”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-format-text-inside-text-views-3~dark.png)

There's even a formatter for handling currencies correctly, ensuring that two decimal places are shown and also adding the currency symbol as appropriate:

```swift
Text(72.3, format: .currency(code: "CAD"))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-format-text-inside-text-views-4.zip)

![The text “CA$72.30”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-format-text-inside-text-views-4~dark.png)

If you need to support iOS 14 and 13, you can use the `formatter` parameter instead – it still lets us customize the way data is presented inside the text, but it's not quite as easy to use.

For example, this defines a date formatter and uses it to make sure a task date is presented in human-readable form:

```swift
struct ContentView: View {
    static let taskDateFormat: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .long
        return formatter
    }()

    let dueDate = Date.now

    var body: some View {
        Text("Task due date: \(dueDate, formatter: Self.taskDateFormat)")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-format-text-inside-text-views-5.zip)

That will display something like “Task due date: February 4 2021”.

The text “Task due date: June 28, 2021”.

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to format dates inside text views",
  "desc": "How to format dates inside text views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-dates-inside-text-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to format a TextField for numbers",
  "desc": "How to format a TextField for numbers",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-a-textfield-for-numbers.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to force views to one side inside a stack using Spacer",
  "desc": "How to force views to one side inside a stack using Spacer",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to disable the overlay color for images inside Button and NavigationLink | SwiftUI by Example",
  "desc": "How to disable the overlay color for images inside Button and NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to draw a border inside a view",
  "desc": "How to draw a border inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />