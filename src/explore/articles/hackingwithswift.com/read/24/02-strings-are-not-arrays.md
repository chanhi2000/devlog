---
lang: ko-KR
title: "Strings are not arrays"
description: "Article(s) > Strings are not arrays"
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
      content: "Article(s) > Strings are not arrays"
    - property: og:description
      content: "Strings are not arrays"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/24/02-strings-are-not-arrays.html
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
  "title": "Strings are not arrays | Hacking with iOS",
  "desc": "Strings are not arrays",
  "link": "https://hackingwithswift.com/read/24/2/strings-are-not-arrays",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/oeKUmAgyOdw" />

One of the things that confuses learners is that Swift’s strings look like arrays of letters, but that’s not really true.

Sure, we can loop over them like this:

```swift
let name = "Taylor"

for letter in name {
    print("Give me a \(letter)!"
}
```

However, we *can’t* read individual letters from the string. So, this kind of code won’t work:

```swift
print(name[3])
```

The reason for this is that letters in a string aren’t just a series of alphabetical characters – they can contain accents such as á, é, í, ó, or ú, they can contain combining marks that generate wholly new characters by building up symbols, or they can even be emoji.

Because of this, if you want to read the fourth character of `name` you need to start at the beginning and count through each letter until you come to the one you’re looking for:

```swift
let letter = name[name.index(name.startIndex, offsetBy: 3)]
```

Apple could change this easily enough by adding a rather complex extension like this:

```swift
extension String {
    subscript(i: Int) -> String {
        return String(self[index(startIndex, offsetBy: i)])
    }
}
```

With that in place, we can now read `name[3]` just fine. However, it creates the possibility that someone might write code that loops over a string reading individual letters, which they might not realize creates a loop within a loop and has the potential to be slow.

Similarly, reading `name.count` isn’t a quick operation: Swift literally needs to go over every letter counting up however many there are, before returning that. As a result, it’s always better to use `someString.isEmpty` rather than `someString.count == 0` if you’re looking for an empty string.

---

<TagLinks />