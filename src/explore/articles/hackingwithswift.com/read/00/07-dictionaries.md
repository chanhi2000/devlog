---
lang: ko-KR
title: "Dictionaries"
description: "Article(s) > Dictionaries"
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
      content: "Article(s) > Dictionaries"
    - property: og:description
      content: "Dictionaries"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/07-dictionaries.html
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
  "title": "Dictionaries | Hacking with iOS",
  "desc": "Dictionaries",
  "link": "https://hackingwithswift.com/read/0/7/dictionaries",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/lqQ_OM4uPa0" />

As you've seen, Swift arrays are a collection where you access each item using a numerical index, such as `songs[0]`. Dictionaries are another common type of collection, but they differ from arrays because they let you access values based on a key you specify.

To give you an example, let's imagine how we might store data about a person in an array:

```swift
var person = ["Taylor", "Alison", "Swift", "December", "taylorswift.com"]
```

To read out that person's middle name, we'd use `person[1]`, and to read out the month they were born we'd use `person[3]`. This has a few problems, not least that it's difficult to remember what index number is assigned to each value in the array! And what happens if the person has no middle name? Chances are all the other values would move down one place, causing chaos in your code.

With dictionaries we can re-write this to be far more sensible, because rather than arbitrary numbers you get to read and write values using a key you specify. For example:

```swift
var person = ["first": "Taylor", "middle": "Alison", "last": "Swift", "month": "December", "website": "taylorswift.com"]
person["middle"]
person["month"]
```

![Creating a dictionary, then accessing its members.](https://hackingwithswift.com/img/books/hws/dictionaries-1@2x.png)

It might help if I use lots of whitespace to break up the dictionary on your screen, like this:

```swift
var person = [
                "first": "Taylor",
                "middle": "Alison",
                "last": "Swift",
                "month": "December",
                "website": "taylorswift.com"
            ]

person["middle"]
person["month"]
```

As you can see, when you make a dictionary you write its key, then a colon, then its value. You can then read any value from the dictionary just by knowing its key, which is much easier to work with.

As with arrays, you can store a wide variety of values inside dictionaries, although the keys are most commonly strings.

---

<TagLinks />