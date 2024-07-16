---
lang: ko-KR
title: "What's new in Swift 3.0"
description: "What's new in Swift 3.0"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-3.0
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  What's new in Swift 3.0
    - property: og:description
      content: "What's new in Swift 3.0"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift3.html
prev: /programming/swift/articles/README.md
date: 2016-06-13
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What's new in Swift 3.0 – Hacking with Swift",
  "desc": "What's new in Swift 3.0",
  "link": "https://hackingwithswift.com/swift3",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Swift 3.0 is changing *pretty much everything*, and your code will almost certainly refuse to build until you make the necessary changes. Seriously, if you thought the jump from Swift 1.2 to 2.0 was big, you ain't seen nothing yet.

In this article I'm going to explain some of the most important changes with as many code examples as I can, and hopefully this will give you some chance to be prepared to update your code when the time comes. There are many more changes than the ones listed below, but the changes below are the ones that are most likely to hit you.

If you liked this article, you might also enjoy these:

```component VPCard
{
  "title": "What's new in iOS 10 for developers – Hacking with Swift",
  "desc": "What's new in iOS 10 for developers",
  "link": "/explore/articles/hackingwithswift.com/ios10.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's new in Swift 2.2 – Hacking with Swift",
  "desc": "What's new in Swift 2.2",
  "link": "/explore/articles/hackingwithswift.com/swift2-2.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's new in Swift 2.0 – Hacking with Swift",
  "desc": "What's new in Swift 2.0",
  "link": "/explore/articles/hackingwithswift.com/swift2.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

::: warning ADVANCE WARNING #1

There are lots and lots of changes, some of which might seem petty. However, the hope is that these changes are a once-off event that makes the language better for years to come, and it ought to mean that changes in later versions are significantly smaller.

:::

::: warning ADVANCE WARNING #2

If you have not already read my [what's new in Swift 2.2](/explore/articles/hackingwithswift.com/swift2-2.md) article, you should do so now – everything that I said was deprecated there has been removed, including ++, --, C-style for loops, tuple splat syntax, and more.

:::

---

## All function parameters have labels unless you request otherwise

The way we call functions and methods already changed in Swift 2.0, but it's changing again and this time it's going to break *everything*. In Swift 2.x and earlier, method names did not require a label for their first parameter, so the name of the first parameter was usually built into the method name. For example:

```swift
names.indexOf("Taylor")
"Taylor".writeToFile("filename", atomically: true, encoding: NSUTF8StringEncoding)
SKAction.rotateByAngle(CGFloat(M_PI_2), duration: 10)
UIFont.preferredFontForTextStyle(UIFontTextStyleSubheadline)
override func numberOfSectionsInTableView(tableView: UITableView) -> Int
func viewForZoomingInScrollView(scrollView: UIScrollView) -> UIView?
NSTimer.scheduledTimerWithTimeInterval(0.35, target: self, selector: #selector(createEnemy), userInfo: nil, repeats: true)
```

Swift 3 makes all labels required unless you specify otherwise, which means the method names no longer detail their parameters. In practice, this often means the last part of the method name gets moved to be the name of the first parameter.

To show you how that looks, here is that Swift 2.2 code followed by its equivalent in Swift 3:

```swift
names.indexOf("Taylor")
names.index(of: "Taylor")

"Taylor".writeToFile("filename", atomically: true, encoding: NSUTF8StringEncoding)
"Taylor".write(toFile: "somefile", atomically: true, encoding: String.Encoding.utf8)

SKAction.rotateByAngle(CGFloat(M_PI_2), duration: 10)
SKAction.rotate(byAngle: CGFloat(M_PI_2), duration: 10)

UIFont.preferredFontForTextStyle(UIFontTextStyleSubheadline)
UIFont.preferredFont(forTextStyle: UIFontTextStyle.subheadline)

override func numberOfSectionsInTableView(tableView: UITableView) -> Int
override func numberOfSections(in tableView: UITableView) -> Int

func viewForZoomingInScrollView(scrollView: UIScrollView) -> UIView?
func viewForZooming(in scrollView: UIScrollView) -> UIView?

NSTimer.scheduledTimerWithTimeInterval(0.35, target: self, selector: #selector(createEnemy), userInfo: nil, repeats: true)
Timer.scheduledTimer(timeInterval: 0.35, target: self, selector: #selector(createEnemy), userInfo: nil, repeats: true)
```

In that last call, notice how `NSTimer` is now just called `Timer`. Several other basic types have also dropped the "NS" prefix, so you'll now see `UserDefaults`, `FileManager`, `Data`, `Date`, `URL` `URLRequest`, `UUID`, `NotificationCenter`, and more.

Those are methods you *call*, but this has a knock-on effect for many methods that *get called* too: when you're connecting to frameworks such as UIKit, they expect to follow the old-style "no first parameter name" rule even in Swift 3.

Here are some example signatures from Swift 2.2:

```swift
override func viewWillAppear(animated: Bool)
override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int
override func didMoveToView(view: SKView)
override func traitCollectionDidChange(previousTraitCollection: UITraitCollection?)
func textFieldShouldReturn(textField: UITextField) -> Bool
```

In Swift 3, they all need an underscore before the first parameter, to signal that the caller (Objective-C code) won't be using a parameter label:

```swift
override func viewWillAppear(_ animated: Bool)
override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int
override func didMoveToView(_ view: SKView)
override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?)
func textFieldShouldReturn(_ textField: UITextField) -> Bool
```

---

## Omit needless words

When Swift went open source in December 2015, its shiny new API guideliness contained three fateful words: "omit needless words." This introduces another huge raft of breaking changes in Swift 3, because it means that method names that contain self-evident words now have those words removed.

Let's look at some simple examples first. First, Swift 2.2:

```swift
let blue = UIColor.blueColor()
let min = numbers.minElement()
attributedString.appendAttributedString(anotherString)
names.insert("Jane", atIndex: 0)
UIDevice.currentDevice()
```

Can you identify the needless words? When you're working with `UIColor`, of course blue is going to be a color, so saying `blueColor()` is needless. When you append one attributed string to another, do you really need to specify that it's an attributed string you're appending as opposed to an elephant? And why should it be a method – surely a color should be a property!

Here is that same code in Swift 3:

```swift
let blue = UIColor.blue
let min = numbers.min()
attributedString.append(anotherString)
names.insert("Jane", at: 0)
UIDevice.current
```

As you can see, this makes method names significantly shorter!

This change has particularly affected strings, which had repetition all over the place. The best way to demonstrate this is to show before and after code side-by-side, so in the code below the first line of each pair is Swift 2.2 and the second is Swift 3.0:

```swift
"  Hello  ".stringByTrimmingCharactersInSet(.whitespaceAndNewlineCharacterSet())
"  Hello  ".trimmingCharacters(in: .whitespacesAndNewlines)

"Taylor".containsString("ayl")
"Taylor".contains("ayl")

"1,2,3,4,5".componentsSeparatedByString(",")
"1,2,3,4,5".components(separatedBy: ",")

myPath.stringByAppendingPathComponent("file.txt")
myPath.appendingPathComponent("file.txt")

"Hello, world".stringByReplacingOccurrencesOfString("Hello", withString: "Goodbye")
"Hello, world".replacingOccurrences(of: "Hello", with: "Goodbye")

"Hello, world".substringFromIndex(7)
"Hello, world".substring(from: 7)

"Hello, world".capitalizedString
"Hello, world".capitalized
```

::: warning

`capitalized` is still a property, but `lowercaseString` and `uppercaseString` have been transmogrified into the methods `lowercased()` and `uppercased()`.

:::

I've chosen the examples so far because the jump to Swift 3 isn't vast, but there are quite a few changes that were significant enough to make my brain hit a speedbump – usually when the resulting method is so short that it wasn't immediately obvious what it was.

For example, look at this code:

```swift
dismiss(animated: true, completion: nil)
```

When I first saw that, I blanked: "dismiss what?" That's partly a result of the [<FontIcon icon="fa-brands fa-wikipedia-w"/>Stockholm syndrome](https://en.wikipedia.org/wiki/Stockholm_syndrome) that's inevitable having programmed for iOS for so long, but once you learn to reverse the parameter label change and re-add the needless words, you can see it's equivalent to this code in Swift 2.2:

```swift
dismissViewControllerAnimated(true, completion: nil)
```

In fact, the `completion: nil` part is optional now, so you could even write this:

```swift
dismiss(animated: true)
```

A similar change happened to `prepareForSegue()`, which now looks like this:

```swift
override func prepare(for segue: UIStoryboardSegue, sender: AnyObject?)
```

---

## Intermission

If you're enjoying this article, you might like my Swift newsletter. I post very rarely, but always include discounts on my books – [<FontIcon icon="fas fa-globe"/>click here to sign up now](https://gumroad.com/twostraws/follow) and you'll get an **_instant $5 discount_** on the complete Hacking with Swift e-book.

And now back to your regularly scheduled broadcast…

---

## UpperCamelCase has been replaced with lowerCamelCase for enums and properties

Although syntactically irrelevant, the capital letters we use to name classes and structs, properties, enums, and more have always followed a convention fairly closely: classes, structs, and enums use UpperCamelCase (MyStruct, WeatherType.Cloudy), properties and parameter names use lowerCamelCase (emailAddress, requestString).

I say "fairly closely" because there are some exceptions that are going to *stop* being exceptions in Swift 3: properties and parameters that started with initials in Swift 2.2 will now used lowerCamelCase in Swift 3.

Sometimes this isn't too strange: Swift 2.2 created `NSURLRequest` objects using `NSURLRequest(URL: someURL)` – note the capital "URL". Swift 3 rewrites that to `URLRequest(url: someURL)`, and also means you'll use things like `webView.request?.url?.absoluteString` for reading the URL of a web view.

Where it's a bit more jarring is when only part of the property name is in caps, e.g. `CGColor` or `CIColor`. Yes, you've guessed it: they become `cgColor` and `ciColor` in Swift 3, so you'll be writing code like this:

```swift
let red = UIColor.red.cgColor
```

This change does help drive consistency: all properties and parameters should start with a lowercase letter, no exceptions.

At the same time enum cases are also changing, moving from UpperCamelCase to lowerCamelCase. This makes sense: an enum is a data type (like a struct), but enum values are closer to properties. However, it does mean that wherever you've used an Apple enum, it will now be lowercase. So:

```swift
UIInterfaceOrientationMask.Portrait // old
UIInterfaceOrientationMask.portrait // new

NSTextAlignment.Left // old
NSTextAlignment.left // new

SKBlendMode.Replace // old
SKBlendMode.replace // new
```

You get the idea. However, this tiny change brings something much bigger because Swift's optionals are actually just an enum under the hood, like this:

```swift
enum Optional {
    case None
    case Some(Wrapped)
}
```

This means if you use `.Some` to work with optionals, you'll need to switch to `.some` instead. Of course, you could always take this opportunity to ditch `.some` entirely – these two pieces of code are identical:

```swift
for case let .some(datum) in data {
    print(datum)
}

for case let datum? in data {
    print(datum)
}
```

---

## Swifty importing of C functions

Swift 3 introduces attributes for C functions that allow library authors to specify new and beautiful ways their code should be imported into Swift. For example, all those functions that start with "CGContext" now get mapped to properties methods on a CGContext object, which makes for much more idiomatic Swift. Yes, this means the hideous wart that is `CGContextSetFillColorWithColor()` has finally been excised.

To demonstrate this, here's an example in Swift 2.2:

```swift
let ctx = UIGraphicsGetCurrentContext()

let rectangle = CGRect(x: 0, y: 0, width: 512, height: 512)
CGContextSetFillColorWithColor(ctx, UIColor.redColor().CGColor)
CGContextSetStrokeColorWithColor(ctx, UIColor.blackColor().CGColor)
CGContextSetLineWidth(ctx, 10)
CGContextAddRect(ctx, rectangle)
CGContextDrawPath(ctx, .FillStroke)

UIGraphicsEndImageContext()
```

In Swift 3 the `CGContext` can be treated as an object that you can call methods on rather than repeating `CGContext` again and again. So, we can rewrite that code like this:

```swift
if let ctx = UIGraphicsGetCurrentContext() {
    let rectangle = CGRect(x: 0, y: 0, width: 512, height: 512)
    ctx.setFillColor(UIColor.red.cgColor)
    ctx.setStrokeColor(UIColor.black.cgColor)
    ctx.setLineWidth(10)
    ctx.addRect(rectangle)
    ctx.drawPath(using: .fillStroke)

    UIGraphicsEndImageContext()
}
```

Note: in both Swift 2.2 and Swift 3.0 `UIGraphicsGetCurrentContext()` returns an optional `CGContext`, but because Swift 3 uses method calls we need to safely unwrap before it's used.

This mapping of C functions exists elsewhere, for example you can now read the `numberOfPages` property of a `CGPDFDocument`, and `CGAffineTransform` has been souped up quite dramatically. Here are some examples showing old and new:

```swift
CGAffineTransformIdentity
CGAffineTransform.identity

CGAffineTransformMakeScale(2, 2)
CGAffineTransform(scaleX: 2, y: 2)

CGAffineTransformMakeTranslation(128, 128)
CGAffineTransform(translationX: 128, y: 128)

CGAffineTransformMakeRotation(CGFloat(M_PI))
CGAffineTransform(rotationAngle: CGFloat(M_PI))
```

---

## Verbs and nouns

This is the part where some people will start to drift off in confusion, which is a shame because it's important.

Here's are some quotes from the Swift API guidelines:

- "When the operation is naturally described by a verb, use the verb’s imperative for the mutating method and apply the “ed” or “ing” suffix to name its nonmutating counterpart"
- "Prefer to name the nonmutating variant using the verb’s past participle"
- "When adding “ed” is not grammatical because the verb has a direct object, name the nonmutating variant using the verb’s present participle"
- "When the operation is naturally described by a noun, use the noun for the nonmutating method and apply the “form” prefix to name its mutating counterpart"

Got that? It's no surprise that Swift's rules are expressed using lingustic terminology – it is after all a language! – but this at least gives me a chance to feel smug that I did a second degree in English. What it means is that many methods are changing names in subtle and sometimes confusing ways.

Let's start with a couple of simple examples:

```swift
myArray.enumerate()
myArray.enumerated()

myArray.reverse()
myArray.reversed()
```

Each time Swift 3 modifies the method by adding a "d" to the end: this is a value that's being returned.

These rules are mostly innocent enough, but it causes confusion when it comes to array sorting. Swift 2.2 used `sort()` to return a sorted array, and `sortInPlace()` to sort an array in place. In Swift 3.0, `sort()` is renamed to `sorted()` (following the examples above), and `sortInPlace()` is renamed to `sort()`.

::: note TL;DR

This means you need to be careful because in Swift 2.2 `sort()` returned a sorted array, but in Swift 3.0 `sort()` sorts the array in place.

:::

---

## Why all this change?

It's easy to read these changes, some of which are tiny but introduce massive breakage, and imagine that Apple's Swift engineers are just out to make our lives harder. However, the truth is that they are working hard to make sure Swift is as easy to learn, easy to use, and fast as possible, which are three very different priorities.

In particular, I have been struck by how committed the Apple team are to ensuring their changes are discussed and agreed in the open, as part of the Swift Evolution community effort. Every change above went through extensive community discussion before being agreed for Swift 3.0, which is an incredible thing to behold.

[<FontIcon icon="fa-brands fa-swift"/>You can get involved and help shape these changes](http://www.swift.org/community) going forward: they are keen to hear ideas from a wide range of users, and it means the future of Swift really is in your hands.

---

<TagLinks />