---
lang: ko-KR
title: "Creating the sandbox"
description: "Article(s) > Creating the sandbox"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Creating the sandbox"
    - property: og:description
      content: "Creating the sandbox"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/27/02-creating-the-sandbox.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Creating the sandbox | Hacking with iOS",
  "desc": "Creating the sandbox",
  "link": "https://hackingwithswift.com/read/27/2/creating-the-sandbox",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/_Z-KrWJrv1c" />

Open <FontIcon icon="iconfont icon-xcode"/>`Main.storyboard` in Interface Builder, then drag out an image view so that it fills the whole space of the view. Set its aspect mode to be Aspect Fit, so that images will be correctly resized according to the device’s aspect ratio. Now place a button near the bottom of the view controller, centered horizontally, then give it the title “Redraw”.

We can make Interface Builder do all the constraints for this one: select the main view in the document outline, then go to Editor > Resolve Auto Layout Issues > Reset to Suggested Constraints.

We're going to need to reference the image view in code, so please switch to the assistant editor and create an outlet for it called `imageView`. While you're there, you should also create an action for the button being tapped, called `redrawTapped()`.

Switch back to the standard editor, and open up <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` because that's our user interface done; the rest is code!

![Here's our basic layout: a big UIImageView with a UIButton underneath.](https://hackingwithswift.com/img/books/hws/27-1@2x.png)

We're going to use a similar code structure to project 15: a property that we increment through, using a switch/case to call different methods each time. In addition, we need `viewDidLoad()` to call an initial method so that we start by drawing something. Start by adding this property to your view controller:

```swift
var currentDrawType = 0
```

And now create this empty method – we'll be filling it shortly:

```swift
func drawRectangle() {

}
```

As with project 15, the button we placed needs to add one to the property, wrapping it back to zero when it reaches a certain point. The property is then used to decide what method to call, although right now we're only going to have one useful case: `drawRectangle()`.

Here's the initial code for `redrawTapped()`; we'll be adding more cases over time:

```swift
@IBAction func redrawTapped(_ sender: Any) {
    currentDrawType += 1

    if currentDrawType > 5 {
        currentDrawType = 0
    }

    switch currentDrawType {
    case 0:
        drawRectangle()

    default:
        break
    }
}
```

The only remaining step to make our sandbox complete is to have `viewDidLoad()` call the `drawRectangle()` method so that the screen starts by showing something. Change your `viewDidLoad()` method to this:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    drawRectangle()
}
```

Running the app at this point will do very little, because although your user interface works the code effectively does nothing. We're going to fix that by filling in the `drawRectangle()` method, then proceed to add more cases to the `switch/case` block.

---

<TagLinks />