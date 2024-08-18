---
lang: ko-KR
title: "Choosing a random number source: GKARC4RandomSource and other GameplayKit options"
description: "Article(s) > Choosing a random number source: GKARC4RandomSource and other GameplayKit options"
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
      content: "Article(s) > Choosing a random number source: GKARC4RandomSource and other GameplayKit options"
    - property: og:description
      content: "Choosing a random number source: GKARC4RandomSource and other GameplayKit options"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/35/04-choosing-a-random-number-source-gkarc4randomsource-and-other-gameplaykit-options.html
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
  "title": "Choosing a random number source: GKARC4RandomSource and other GameplayKit options | Hacking with iOS",
  "desc": "Choosing a random number source: GKARC4RandomSource and other GameplayKit options",
  "link": "https://hackingwithswift.com/read/35/4/choosing-a-random-number-source-gkarc4randomsource-and-other-gameplaykit-options",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

Using the system's built-in random number source is exactly what you want when you just need something simple. But the system's random number generator is not deterministic, which means you can't predict what numbers it will output because it always starts in a different state – and that makes it useless for synchronizing network games.

Using the system's random number source is also useless to avoid cheating. If someone is playing a brilliant strategy game you made and loses a battle because a dice roll didn't go their way, they could quickly quit the app, relaunch, and try the battle again hoping that the random roll would go differently for them.

GameplayKit offers three custom sources of random numbers, all of which are deterministic, and all of which can be serialized – i.e., written out to disk using something like `NSCoding` that we looked at in [project 12](/explore/articles/hackingwithswift.com/read/12/overview.md). This means network play can be synchronized and cheaters are unable to force their way around your game – a win all around!

The reason GameplayKit has three sources of random numbers is simple: generating random numbers is hard, so you get to choose whether you want something simple and fast, complex and slow, or somewhere in the middle. That is, if you know the result of your random number doesn't matter that much and you're going to need thousands quickly, you can use the faster-but-less-random option.

Alternatively, if you need one random number but it's got to be as random as they come, you can use the more intensive algorithm. In short, [<FontIcon icon="fa-brands fa-wikipedia-w"/>you pays your money and you takes your choice.](https://en.wiktionary.org/wiki/you_pays_your_money_and_you_takes_your_choice)

The three options are:

- **GKLinearCongruentialRandomSource**: has high performance but the lowest randomness
- **GKMersenneTwisterRandomSource**: has high randomness but the lowest performance
- **GKARC4RandomSource**: has good performance and good randomness – in the words of Apple, "it's going to be your Goldilocks random source."

Honestly, the performance difference between the three of these is all but insignificant unless you're generating vast quantities of random numbers.

So, to generate a random number between 0 and 19 using an ARC4 random source that you can save to disk, you'd use this:

```swift
let arc4 = GKARC4RandomSource()
arc4.nextInt(upperBound: 20)
```

If you really want the maximum possible randomness for your app or game, try the Mersenne Twister source instead:

```swift
let mersenne = GKMersenneTwisterRandomSource()
mersenne.nextInt(upperBound: 20)
```

As you can see, once you've created the random source the method calls on it are identical – all you've done is change the underlying random number generator.

Before continuing, you should know that Apple recommends you force flush its ARC4 random number generator before using it for anything important, otherwise it will generate sequences that can be guessed to begin with. Apple suggests dropping at least the first 769 values, so I suspect most coders will round up to the nearest pleasing value: 1024. To drop values, use this code:

```swift
arc4.dropValues(1024)
```

Regardless of which source you choose, Apple goes to great lengths to point out that none of them are recommended for cryptography purposes. Apps, yes, games, yes, but not cryptography – sorry!

---

<TagLinks />