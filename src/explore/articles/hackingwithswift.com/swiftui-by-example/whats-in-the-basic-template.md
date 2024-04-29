---
lang: ko-KR
title: What’s in the basic template?
description: Article(s) > What’s in the basic template?
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
      content: Article(s) > What’s in the basic template?
    - property: og:description
      content: What’s in the basic template?
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/00-introduction/whats-in-the-basic-template.html
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
  "title": "SwiftUI by Example – What’s in the basic template?",
  "desc": "What’s in the basic template?",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/whats-in-the-basic-template", 
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

::: tip

You might think this chapter is totally skippable, but unless you’re a Swift genius chances are you should read to the end just to be sure.

:::

The basic App template gives you the following:

1. .<FontIcon icon="fa-brands fa-swift"/>`YourProjectName.swift`. This performs an initial set up, then creates and displays your initial view.
2. .<FontIcon icon="fa-brands fa-swift"/>`ContentView.swift`. This is our initial piece of user interface. If this were a UIKit project, this would be the ViewController class that Xcode gave us.
3. .<FontIcon icon="fas fa-file-lines"/>`Assets.xcassets`. This is an asset catalog, which stores all the images and colors used in our project.
4. A group called Preview Content, which contains another asset catalog called Preview Assets.
And that’s it – it’s a pleasingly small amount of code and resources, which means we can build on it.

The part we really care about – in fact, here it’s the only part that matters – is <FontIcon icon="fa-brands fa-swift"/>`ContentView.swift`. This is the main piece of functionality for our app, and it’s where we can start trying out various SwiftUI code in just a moment.

First, though: what makes <FontIcon icon="fa-brands fa-swift"/>`ContentView.swift` get shown on the screen?

Well, if you remember I said that <FontIcon icon="fa-brands fa-swift"/>`YourProjectName.swift` is responsible for managing the way your app is shown. Obviously it’s not actually called that – it will be named according to the project name you chose when creating your poject.

Go ahead and open this file now, and you’ll see code like this in there:

```swift
@main
struct YourProjectName: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

That code creates a new `ContentView` instance (that’s the main piece of functionality we’ll be looking at soon), and places it inside a window group so it’s visible onscreen. It’s effectively bootstrapping our app by showing the first instance of `ContentView`, and from there it’s over to us – what do you want to do?

Open <FontIcon icon="fa-brands fa-swift"/>`ContentView.swift` and let’s look at some actual SwiftUI code. You should see code like this:

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Hello, world!")
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
```

That’s not a lot of code, but it does pack in a great deal.

First, notice how `ContentView` is a struct. Developers familiar with UIKit will know that this is _huge_ – we get to benefit from all the immutability and simplicity of values types for our user interface! Folks who _aren’t_ familiar with UIKit… well, just nod and smile – you never knew the pain we used to have.

Second, `ContentView` conforms to the `View` protocol. Everything you want to show in SwiftUI needs to conform to `View`, and really that means only one thing: you need to have a property called `body` that returns some sort of `View`.

Third, the return type of `body` is `some View`. The `some` keyword was introduced in Swift 5.1 and is part of a feature called [<FontIcon icon="fa-brands fa-youtube"/>opaque return types](https://www.youtube.com/watch?v=DvHkeUxiwYY), and in this case what it means is literally “this will return some sort of `View` but SwiftUI doesn’t need to know (or care) what.”

::: important 

Returning `some View` means that the `body` property will return something that conforms to the `View` protocol. You can’t forget to return anything at all – the Swift compiler will refuse to build your code.

:::

Fourth, inside the `body` property there’s a vertical stack of content showing an image and some text.

Fifth, that stack has a `padding()` method call below it. In SwiftUI this actually creates a new view with padding around it, rather than changing the existing stack. As a result, we call these _modifiers_ because they create modified content, as opposed to _methods_. There are also modifiers to make the image scale bigger and change its color.

Finally, below `ContentView` is `#Preview`, which marks special code to display our view an interactive preview of our view inside Xcode. Right now this creates an instance of `ContentView`, but you can customize these if you need to.

---

<TagLinks />