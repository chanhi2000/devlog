---
lang: ko-KR
title: "Arrays"
description: "Article(s) > Arrays"
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
      content: "Article(s) > Arrays"
    - property: og:description
      content: "Arrays"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/06-arrays.html
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
  "title": "Arrays | Hacking with iOS",
  "desc": "Arrays",
  "link": "https://hackingwithswift.com/read/0/6/arrays",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/W0SQujtakwg" />

Arrays let you group lots of values together into a single collection, then access those values by their position in the collection. Swift uses type inference to figure out what type of data your array holds, like so:

```swift
var evenNumbers = [2, 4, 6, 8]
var songs = ["Shake it Off", "You Belong with Me", "Back to December"]
```

![Creating Arrays of Ints and Strings.](https://hackingwithswift.com/img/books/hws/arrays-1@2x.png)

As you can see, Swift uses brackets to mark the start and end of an array, and each item in the array is separated with a comma.

When it comes to reading items out an array, there's a catch: Swift starts counting at 0. This means the first item is 0, the second item is 1, the third is 2, and so on. Try putting this into your playground:

```swift
var songs = ["Shake it Off", "You Belong with Me", "Back to December"]
songs[0]
songs[1]
songs[2]
```

![Accessing Array values by index.](https://hackingwithswift.com/img/books/hws/arrays-2@2x.png)

That will print "Shake it Off", "You Belong with Me", and "Back to December" in the results pane.

An item's position in an array is called its index, and you can read any item from the array just by providing its index. However, you do need to be careful: our array has three items in, which means indexes 0, 1 and 2 work great. But if you try and read `songs[3]` your playground will stop working – and if you tried that in a real app it would crash!

![Playground crash because of an out-of-range index.](https://hackingwithswift.com/img/books/hws/arrays-3@2x.png)

Because you've created your array by giving it three strings, Swift knows this is an array of strings. You can confirm this by using a special command in the playground that will print out the data type of any variable, like this:

```swift
var songs = ["Shake it Off", "You Belong with Me", "Back to December"]
type(of: songs)
```

![Checking the type of an Array of Strings.](https://hackingwithswift.com/img/books/hws/arrays-4@2x.png)

That will print `Array<String>.Type` into the results pane, telling you that Swift considers `songs` to be an array of strings.

Let's say you made a mistake, and accidentally put a number on the end of the array. Try this now and see what the results pane prints:

```swift
var songs = ["Shake it Off", "You Belong with Me", "Back to December", 3]
type(of: songs)
```

![Adding a number to a String Array causes an error.](https://hackingwithswift.com/img/books/hws/arrays-5@2x.png)

This time you'll see an error. The error isn’t because Swift can’t handle mixed arrays like this one – I’ll show you how to do that in just a moment! – but instead because Swift is being helpful. The error message you’ll see is, “heterogenous collection literal could only be inferred to '[Any]'; add explicit type annotation if this is intentional.” Or, in plain English, “it looks like this array is designed to hold lots of types of data – if you really meant that, please make it explicit.”

Type safety is important, and although it's neat that Swift can make arrays hold any kind of data this particular case was an accident. Fortunately, I've already said that you can use type annotations to specify exactly what type of data you want an array to store. To specify the type of an array, write the data type you want to store with brackets around it, like this:

```swift
var songs: [String] = ["Shake it Off", "You Belong with Me", "Back to December", 3]
```

![Adding a number to a typed String Array causes a different error.](https://hackingwithswift.com/img/books/hws/arrays-6@2x.png)

Now that we've told Swift we want to store only strings in the array, it will always refuse to run the code because 3 is not a string.

If you really want the array to hold any kind of data, use the special `Any` data type, like this:

```swift
var songs: [Any] = ["Shake it Off", "You Belong with Me", "Back to December", 3]
```

![Adding a Int to an Array of Any is okay.](https://hackingwithswift.com/img/books/hws/arrays-7@2x.png)

---

## Creating arrays

If you make an array using the syntax shown above, Swift creates the array and fills it with the values we specified. Things aren't quite so straightforward if you want to create the array then fill it later – this syntax doesn't work:

```swift
var songs: [String]
songs[0] = "Shake it Off"
```

![The above code causes an error: variable 'songs' passed by reference before being initialized.](https://hackingwithswift.com/img/books/hws/arrays-8@2x.png)

The reason is one that will seem needlessly pedantic at first, but has deep underlying performance implications so I'm afraid you're just stuck with it. Put simply, writing `var songs: [String]` tells Swift "the `songs` variable will hold an array of strings," but *it doesn't actually create that array*. It doesn't allocate any RAM, or do any of the work to actually create a Swift array. It just says that at some point there will be an array, and it will hold strings.

There are a few ways to express this correctly, and the one that probably makes most sense at this time is this:

```swift
var songs: [String] = []
```

![Initializing a typed Array with empty brackets.](https://hackingwithswift.com/img/books/hws/arrays-9@2x.png)

That uses a type annotation to make it clear we want an array of strings, and it assigns an empty array (that's the `[]` part) to it.

You'll also commonly see this construct:

```swift
var songs = [String]()
```

![Initializing an Array with round brackets.](https://hackingwithswift.com/img/books/hws/arrays-10@2x.png)

That means the same thing: the `()` tells Swift we want to create the array in question, which is then assigned to `songs` using type inference. This option is two characters shorter, so it's no surprise programmers prefer it!

---

## Array operators

You can use a limited set of operators on arrays. For example, you can merge two arrays by using the `+` operator, like this:

```swift
var songs = ["Shake it Off", "You Belong with Me", "Love Story"]
var songs2 = ["Today was a Fairytale", "Welcome to New York", "Fifteen"]
var both = songs + songs2
```

You can also use `+=` to add and assign, like this:

```swift
both += ["Everything has Changed"]
```

![Combining and appending to Arrays with the plus and plus-equals operators respectively.](https://hackingwithswift.com/img/books/hws/arrays-11@2x.png)

---

<TagLinks />