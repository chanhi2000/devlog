---
lang: ko-KR
title: How to add advanced text styling using AttributedString
description: Article(s) > How to add advanced text styling using AttributedString
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
      content: Article(s) > How to add advanced text styling using AttributedString
    - property: og:description
      content: How to add advanced text styling using AttributedString
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-advanced-text-styling-using-attributedstring.html
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
  "title": "How to add advanced text styling using AttributedString | SwiftUI by Example",
  "desc": "How to add advanced text styling using AttributedString",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `Text` view is able to render more advanced strings created using Foundation's `AttributedString` struct, including adding underlines, strikethrough, web links, background colors, and more. Sadly, it has a rather bafflingly opaque API so I want to show you a whole bunch of examples to help get you started.

We can create an `AttributedString` with common properties such as font, background color, and foreground color:

```swift
struct ContentView: View {
    var message: AttributedString {
        var result = AttributedString("Hello, world!")
        result.font = .largeTitle
        result.foregroundColor = .white
        result.backgroundColor = .red
        return result
    }

    var body: some View {
        Text(message)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-advanced-text-styling-using-attributedstring-1.zip)

That simple example is something you can do using just `Text` and regular SwiftUI modifiers, but part of the power of `AttributedString` is that customizations belong to the string rather than to the `Text` view used to render it.

This means the background color is part of the string itself, so we can merge several strings together using different background colors if we want:

```swift
struct ContentView: View {
    var message1: AttributedString {
        var result = AttributedString("Hello")
        result.font = .largeTitle
        result.foregroundColor = .white
        result.backgroundColor = .red
        return result
    }

    var message2: AttributedString {
        var result = AttributedString("World!")
        result.font = .largeTitle
        result.foregroundColor = .white
        result.backgroundColor = .blue
        return result
    }

    var body: some View {
        Text(message1 + message2)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-advanced-text-styling-using-attributedstring-2.zip)

If you try that using `Text` and `background()` modifiers, you'll see that it just doesn't work.

There are a handful attributes we can customize, including underline pattern and color:

```swift
struct ContentView: View {
    var message: AttributedString {
        var result = AttributedString("Testing 1 2 3!")
        result.font = .largeTitle
        result.foregroundColor = .white
        result.backgroundColor = .blue
        result.underlineStyle = Text.LineStyle(pattern: .solid, color: .white)
        return result
    }

    var body: some View {
        Text(message)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-advanced-text-styling-using-attributedstring-3.zip)

You can adjust the baseline offset for pieces of the string, forcing it to be placed higher or lower than default:

```swift
struct ContentView: View {
    var message: AttributedString {
        let string = "The letters go up and down"
        var result = AttributedString()

        for (index, letter) in string.enumerated() {
            var letterString = AttributedString(String(letter))
            letterString.baselineOffset = sin(Double(index)) * 5
            result += letterString
        }

        result.font = .largeTitle
        return result
    }

    var body: some View {
        Text(message)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-advanced-text-styling-using-attributedstring-4.zip)

And we can even attach tappable web links to our text using the `link` property:

```swift
struct ContentView: View {
    var message: AttributedString {
        var result = AttributedString("Learn Swift here")
        result.font = .largeTitle
        result.link = URL(string: "https://www.hackingwithswift.com")
        return result
    }

    var body: some View {
        Text(message)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-advanced-text-styling-using-attributedstring-5.zip)

However, the _really_ powerful feature of `AttributedString` is that it doesn't throw away all the metadata we provide it about our strings, which unlocks a huge amount of extra functionality.

For example, we can mark part of the string as needing to be spelled out for accessibility reasons, so that things like passwords are read out correctly when using VoiceOver:

```swift
struct ContentView: View {
    var message: AttributedString {
        var password = AttributedString("abCayer-muQai")
        password.accessibilitySpeechSpellsOutCharacters = true
        return "Your password is: " + password
    }

    var body: some View {
        Text(message)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-advanced-text-styling-using-attributedstring-6.zip)

Even more impressive is how it handles structured information.

For example, if we format a `Date` instance as an attributed string it retains knowledge of what each component represents – it remembers that “November” is the month part of the string, for example.

This means we can style our strings _semantically_: we can say “make the whole have a secondary color, apart from the weekday part – that should have a primary color”, like this:

```swift
struct ContentView: View {
    var message: AttributedString {
        var result = Date.now.formatted(.dateTime.weekday(.wide).day().month(.wide).attributed)
        result.foregroundColor = .secondary

        let weekday = AttributeContainer.dateField(.weekday)
        let weekdayStyling = AttributeContainer.foregroundColor(.primary)
        result.replaceAttributes(weekday, with: weekdayStyling)

        return result
    }

    var body: some View {
        Text(message)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-advanced-text-styling-using-attributedstring-7.zip)

Notice how that code has no idea where the weekday actually appears in the text – it's language and locale independent, so it will be styled correctly for everyone.

The same is true of working with the names of people using `PersonNameComponents` – this makes an `AttributedString` instance where the family name of someone is bold:

```swift
struct ContentView: View {
    var message: AttributedString {
        var components = PersonNameComponents()
        components.givenName = "Taylor"
        components.familyName = "Swift"

        var result = components.formatted(.name(style: .long).attributed)

        let familyNameStyling = AttributeContainer.font(.headline)
        let familyName = AttributeContainer.personNameComponent(.familyName)
        result.replaceAttributes(familyName, with: familyNameStyling)

        return result
    }

    var body: some View {
        Text(message)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-advanced-text-styling-using-attributedstring-8.zip)

You can even use it with measurements. For example, the following code creates a measurement of 200 kilometers, then formats that so that the value is presented much larger than the unit:

```swift
struct ContentView: View {
    var message: AttributedString {
        var amount = Measurement(value: 200, unit: UnitLength.kilometers)
        var result = amount.formatted(.measurement(width: .wide).attributed)

        let distanceStyling = AttributeContainer.font(.title)
        let distance = AttributeContainer.measurement(.value)
        result.replaceAttributes(distance, with: distanceStyling)

        return result
    }

    var body: some View {
        Text(message)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-advanced-text-styling-using-attributedstring-9.zip)

As a bonus, that will automatically honor the user's locale preference for distance, meaning that many users will see “124 miles” rather than “200 kilometers”.

::: warning

If you explore the API using Xcode's autocomplete, you'll see all sorts of options that look like they ought to work but in fact do nothing at all.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to stack modifiers to create more advanced effects | SwiftUI by Example",
  "desc": "How to stack modifiers to create more advanced effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stack-modifiers-to-create-more-advanced-effects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to format text inside text views | SwiftUI by Example",
  "desc": "How to format text inside text views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-text-inside-text-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add spacing between letters in text | SwiftUI by Example",
  "desc": "How to add spacing between letters in text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-spacing-between-letters-in-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to align form text and controls neatly with LabeledContent | SwiftUI by Example",
  "desc": "How to align form text and controls neatly with LabeledContent",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-align-form-text-and-controls-neatly-with-labeledcontent.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to style text views with fonts, colors, line spacing, and more | SwiftUI by Example",
  "desc": "How to style text views with fonts, colors, line spacing, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />